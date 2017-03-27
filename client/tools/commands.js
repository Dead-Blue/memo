#!/usr/bin/env node

var program = require('commander');

//版本号
program.version('0.0.1');

//help命令
program
  .command('help')
  .description('显示使用帮助')
  .action(function() {
      program.outputHelp();
  });
  
//create命令
program
  .command('create [componentName]')
  .description('创建一个component')
  .action(require('./creatComponent'));
    

//开始解析命令
program.parse(process.argv);