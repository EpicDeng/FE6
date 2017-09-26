// 在上课代码的基础上完成下面的功能
// 有不会实现的效果完全没关系, 讨论或者跳过
// 尽力能做多少做多少, 不懂早点问, 不要闷头造车浪费时间

// 作业 5
// 实现如下函数
// var closestId = function(element, idName) { }
// 
// element 是一个 DOM 元素
// idName 是一个 string
// 循环查找 element 的直系父元素
// 如果父元素拥有 idName 这个 id, 则返回这个父元素
// 如果找到 document 都还没有, 则返回 null
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var closestId = function(element, idName) {
    while (element != null) {
        if (element.id == idName) {
            return element
        } else {
            element = element.parentElement
        }
    }
}
