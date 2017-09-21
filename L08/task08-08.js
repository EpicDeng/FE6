// 作业 8
//
// var bindEvent = function(element, eventName, callback) { }
// 
// element 是一个标签
// eventName 是一个 string, 表示事件的名字
// callback 是一个函数
// 用法如下, 假设 button 是一个标签
// bindEvent(button, 'click', function(){
//     log('click 事件')
// })
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)    
}
