// 作业 9
//
// var bindEventDelegate = function(element, eventName, callback, responseClass) { }
// 
// element 是一个标签
// eventName 是一个 string, 表示事件的名字
// callback 是一个函数
// responseClass 是一个字符串
// 
// 在 element 上绑定一个事件委托
// 只会响应拥有 responseClass 类的元素
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var bindEventDelegate = function(element, eventName, callback, responseClass) {
    element.addEventListener(eventName, function(event) {
        var self = event.target
        if (self.classList.contains(responseClass)) {
            callback(event)
        }
    })
}
