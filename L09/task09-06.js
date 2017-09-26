// 在上课代码的基础上完成下面的功能
// 有不会实现的效果完全没关系, 讨论或者跳过
// 尽力能做多少做多少, 不懂早点问, 不要闷头造车浪费时间
// 
// 作业 6
// 实现如下函数
// var closestTag = function(element, tagName) { }
// 
// element 是一个 DOM 元素
// tagName 是一个 string
// 循环查找 element 的直系父元素
// 如果父元素是一个 tagName 标签, 则返回这个父元素
// 如果找到 document 都还没有, 则返回 null
// 
// tagName 是 'div' 'p' 'h1' 这样的标签名
// 获取一个 DOM 元素的标签名的方法如下
// element.tagName
// 需要注意的是, tagName 属性返回的标签名是大写的
// 例如 'DIV' 'H1'
// 所以你在比较的时候需要把 tagName 转换为大写字母
// 使用如下 js 标准库函数转换
// tagName.toUpperCase()
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var closestTag = function(element, tagName) {
    while (element != null) {
        if (element.tagName.toUpperCase() == tagName.toUpperCase()) {
            return element
        } else {
            element = element.parentElement
        }
    }
}
