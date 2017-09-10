// 注意
// 下面这题做不出来没关系

// 作业 11
// 实现 applyOps 函数
// 参数如下
// expression 是一个 array
// expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
// 根据 expression 运算并返回结果

// 假设 expression 为 [+ 1 3 5 7]
// 1 + 3 + 5 + 7 = 16
// 那么返回的结果为 16

/*
 * 提示：
 *     先取出 expression 的第一个元素，如果第一个元素是 >、<、== 中的一种，就调用 applyCompare。如果第一个元素是 +、-、*、/ 中的一种，就调用 applyList
 * 
 * 分步提示：
 *     1. 先取出 expression 的第一个元素，赋值给 op
 *     2. 如果 op 是 >、<、== 中的一种，这种情况下 expression 只有三个元素，取出剩下的两个元素，然后调用作业 10 的 applyCompare 函数，得到结果之后返回这个结果。
 *     3. 如果 op 是 +、-、*、/ 中的一种，使用 slice 函数把剩下的数组元素放在 oprands 中，然后调用作业 9 的 applyList 函数，得到结果之后返回这个结果。
 */

// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念, 会用更简单的方式执行程序

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var apply = function(op, a, b) {
    if (op == '+') {
        return a + b
    } else if (op == '-') {
        return a - b
    } else if (op == '*') {
        return a * b
    } else if (op == '/') {
        return a / b
    } else {
        return undefined
    }
}

var applyList = function(op, oprands) {
    var result = oprands[0]
    for (var i = 1; i < oprands.length; i++) {
        var right = oprands[i]
        result = apply(op, result, right)
    }

    return result
}

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

var applyOps = function(expression) {
    var op = expression[0]
    if (op == '>' || op == '<' || op == "==") {
        return applyCompare(expression.slice(0, 3))
    } else if (op == '+' || op == '-' || op == '*' || op == '/') {
        return applyList(op, expression.slice(1))
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
var arr5 = ['+', 34, 28, 45, 38, 37, 37, 29, 27, 19, 4, 6, 12, 19, 50, 39, 17, 50, 2, 47, 32]
var arr6 = ['-', 3, 44, 38, 5, 47, 15, 36, 26, 27, 1, 46, 4, 19, 50, 48]
var arr7 = ['*', 1, 3, 5, 7, 9]
var arr8 = ['/', 2, 4, 6, 8, 10]

for (var i = 1; i <= 8; i++) {
    log(applyOps(eval("arr" + i)))
}
