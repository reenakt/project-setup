'use strict';

module.exports = function(app){
    var controller = require('../controllers/core.server.controller'),
        mainController=require('../controllers/main.server.controller');



// view task and create new task

    app
        .route('/')
        .get(mainController.index);




}