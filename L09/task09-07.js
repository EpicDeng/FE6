// 在上课代码的基础上完成下面的功能
// 有不会实现的效果完全没关系, 讨论或者跳过
// 尽力能做多少做多少, 不懂早点问, 不要闷头造车浪费时间
// 
// 作业 7
// 实现如下函数
// var closest = function(element, selector) { }
// 
// element 是一个 DOM 元素
// selector 是一个 string, 表示一个选择器
// 可能的值是  'div'  '#id-div-gua'  '.red' 这三种
// 
// 循环查找 element 的直系父元素
// 如果父元素符合选择器, 则返回这个父元素
// 如果找到 document 都还没有, 则返回 null
//

// 以下是提交作业代码
/* ------------------------------------------------------------------------ */
var closestClass = function(element, className) {
    while (element != null) {
        if (element.classList.contains(className)) {
            return element
        } else {
            element = element.parentElement
        }
    }
}

var closestId = function(element, idName) {
    while (element != null) {
        if (element.id == idName) {
            return element
        } else {
            element = element.parentElement
        }
    }
}

var closestTag = function(element, tagName) {
    while (element != null) {
        if (element.tagName.toUpperCase() == tagName.toUpperCase()) {
            return element
        } else {
            element = element.parentElement
        }
    }
}

var closest = function(element, selector) {
    var s = selector[0]
    if (s == '.') {
        var class_name = selector.slice(1)
        return closestClass(element, class_name)
    } else if (s == '#') {
        var id_name = selector.slice(1)
        return closestId(element, id_name)
    } else {
        return closestTag(element, selector)
    }
}
