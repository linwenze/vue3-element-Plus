const inquirer = require('inquirer');
const ghpages = require('gh-pages');
const execShPromise = require('exec-sh').promise;

const envConfig = [
  'demo',
  'dev',
  'test',
  'prod'
]

function flog (...args) {
  args.unshift('\n--->')
  args.push('\n')
  console.log(...args)
}

const tagHandle = {
  demo() {
    flog('demo环境默认tag格式为', '年月日_时分_环境')
    return dateFormat('YYYYmmdd_HHMM_dev')
  },
  dev() {
    flog('dev环境默认tag格式为', '年月日_时分_环境')
    return dateFormat('YYYYmmdd_HHMM_dev')
  },
  test() {
    flog('test环境默认tag格式为', '年月日_时分_环境')
    return dateFormat('YYYYmmdd_HHMM_test')
  },
  async prod() {
    let { tag } = await inquirer.prompt([{
      name: 'tag',
      message: '线上版本请输入tag name (tip：必须包含项目名缩写及版本号，如cst_v1.0.0)',
      type: 'input',
      validate: (value) => {
        if (!/v\d+\.\d+\.\d+/g.test(value) || !value.includes('_')) {
          return false
        }
        return true
      }
    }])
    return tag
  }
}

function dateFormat(fmt, date) {
  date = date || new Date()
  let ret;
  const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

async function deploy() {
  const { env } = await inquirer.prompt([{
    name: 'env',
    message: '部署什么环境?',
    type: 'list',
    default: 'test',
    choices: envConfig
  }])

  const { build } = await inquirer.prompt([{
    name: 'build',
    type: 'confirm',
    message: `是否需要重新build 运行npm run build-${env}命令?`
  }])

  let { message } = await inquirer.prompt([{
    name: 'message',
    message: '请输入commit message，默认为版本更新：',
    type: 'input',
  }])

  const tag = await tagHandle[env]()

  message = message === '' ? '版本更新' : message

  if (build) {
    try {
      await execShPromise(`npm run build-${env}`)
      flog('打包完成')
    } catch (err) {
      flog('build err', err)
      return
    }
  }

  await publish({
    message,
    tag
  }).then(async (res) => {
    flog('推送成功')

    await execShPromise('git fetch')
    // await execShPromise(`echo ${tag} | clip`)
    flog('tag：', tag)
  }).catch((err) => {
    flog(err, '推送失败')
    return
  })

}

async function publish(options) {
  return new Promise((resolve, reject) => {
    const publishOptions = {
      branch: 'build',
      ...options,
    }
    ghpages.publish('dist', publishOptions, (err) => {
      if (err === undefined) {
        resolve()
      }
      reject(err)
    })
  })
}

deploy()
