// 作业 10
//
// var append = function(selector, html) { }
// 
// selector 是一个 string, 选择器, 有如下三种取值
// 1, 标签选择器, 如 'div'
// 2, class 选择器, 如 '.red'
// 3, id 选择器, 如 '#id-input-name'
// html 是一段 html 字符串
// 把 html 作为子元素插入到 selector 选中的所有元素的末尾
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var append = function(selector, html) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.insertAdjacentHTML('beforeend', html)
    }
}
