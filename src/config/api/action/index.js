import * as group from './group'

import {POST,GET,AJAX}  from './common'

let api={group,POST,GET,AJAX};
export default {
  install: (app) => {
    app.config.globalProperties.$fetch = api
  }
}
