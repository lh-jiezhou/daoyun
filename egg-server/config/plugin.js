'use strict';



/** @type Egg.EggPlugin */
module.exports = {
  // 视图渲染
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  // 数据库ORM
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  // 跨域请求
  cors: {
    enable: true,
    package: 'egg-cors',
  }

};
