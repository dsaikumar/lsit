const { series, parallel, src } = require("gulp");
const {dest} = require('gulp');
const { EventEmitter } = require('events');
const { exec } = require("child_process");
function steamTask(){
  return src('src/*.js').pipe(dest('build'));
}
function promiseTask(){
  return Promise.resolve('the value is ignored');
}
function eventEmitterTask(){
  const emitter = new EventEmitter();
  setTimeout(()=> emitter.emit('finish'),250);
  return emitter;
}
function childProcessTask(){
  return exec('date');
}
function callbackTask(cb){
  cb();
}
function clean(cb){
  cb();
}
function build(cb){
  cb();
}
exports.build = build;
exports.default = series(clean, parallel(callbackTask, steamTask, promiseTask, eventEmitterTask, childProcessTask));