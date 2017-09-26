// 在上课代码的基础上完成下面的功能
// 有不会实现的效果完全没关系, 讨论或者跳过
// 尽力能做多少做多少, 不懂早点问, 不要闷头造车浪费时间
// 
// 作业 4
// 实现 closestClass 函数, 定义如下
// var closestClass = function(element, className) { }
// 
// element 是一个 DOM 元素
// className 是一个 string
// 循环查找 element 的直系父元素
// 如果父元素拥有 className 这个 class, 则返回这个父元素
// 如果找到 document 都还没有, 则返回 null
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var closestClass = function(element, className) {
    while (element != null) {
        if (element.classList.contains(className)) {
            return element
        } else {
            element = element.parentElement
        }
    }
}
