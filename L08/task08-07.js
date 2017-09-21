// 作业 7
//
// var appendHtml = function(element, html) { }
// 
// element 是一个标签
// html 是一段 html 字符串
// 把 html 作为子元素插入到 element 的末尾
// 上课一直在用这个函数
// 
// 用法如下:
// var b = document.querySelector('body')
// appendHtml(b, '<h1>hello</h1>')
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}
