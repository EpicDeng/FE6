// 作业 11
// 这是本课 最后一个作业
// 
// var bindAll = function(selector, eventName, callback, responseClass) { }
// 
// selector 是一个 string, 选择器, 有如下三种取值
// 1, 标签选择器, 如 'div'
// 2, class 选择器, 如 '.red'
// 3, id 选择器, 如 '#id-input-name'
// eventName 是一个 string, 表示事件的名字
// callback 是一个函数
// responseClass 是一个字符串, 这个参数可以为空
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var bindAll = function(selector, eventName, callback, responseClass) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.addEventListener(eventName, function(event) {
            var self = event.target
            if (self.classList.contains(responseClass)) {
                callback(event)
            }
        })
    }
}
