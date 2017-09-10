// 作业 10
// 实现 applyCompare 函数
// 参数如下
// expression 是一个 array(数组), 包含了 3 个元素
// 第一个元素是 op, 值是 '>' '<' '==' 其中之一
// 剩下两个元素分别是 2 个数字
// 根据 op 对数字运算并返回结果(结果是 true 或者 false)

/*
 * 提示：
 *     取出 expression 的元素，分别赋值给 op、a、b
 *     根据 op 判断，返回相应的结果
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var applyCompare = function(expression) {
    var op = expression[0]
    var a = expression[1]
    var b = expression[2]
    if (op == '>') {
        return a > b
    } else if (op == '<') {
        return a < b
    } else if (op == "==") {
        return a == b
    } else {
        return undefined
    }
}

var n1 = 3
var n2 = 7
var arr1 = ['>', n1, n2]
var arr2 = ['<', n1, n2]
var arr3 = ['==', 6, 6]
var arr4 = ['=', n1, n2]
log(applyCompare(arr1))
log(applyCompare(arr2))
log(applyCompare(arr3))
log(applyCompare(arr4))
