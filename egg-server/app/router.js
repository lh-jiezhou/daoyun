'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/admin/api', controller.home.index);

  router.get('/news', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.get('/newslist/:id', controller.news.newslist)

  router.get('/admin', controller.admin.index);

  // // 将router子路由 挂载到/admin/api
  // app.use('/admin/api', router)
};
