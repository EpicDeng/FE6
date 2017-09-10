// 作业 9
// 实现 applyList 函数
// op 是 '+' '-' '*' '/' 其中之一
// oprands 是一个只包含数字的 list
// 根据 op 对 oprands 中的元素进行运算并返回结果
// 例如, 下面的调用返回 -4
// var n = applyList('-', [3, 4, 2, 1])
// log(n)
// 结果是 -4, 用第一个数字减去所有的数字

/*
 * 提示：
 *     取出 oprands 的第一个元素作为初始值，再遍历 oprands 剩余的元素，并且调用 apply 函数计算结果，把结果作为下次调用 apply 函数的第一个参数，最后得到一个值
 * 
 * 分步提示：
 *     1. 先取出 oprands 的第一个元素赋值给 s, 即 var s = oprands[0]
 *     2. 从 1 开始循环，到 oprands.length 结束，一共循环 oprands.length - 1 次, 用变量 b 保存 oprands[i] 的值
 *     3. 调用作业 8 中的 apply 函数 apply(op, s, b)，并且把得到的结果赋值给 s
 *     4. 循环结束之后，s 的值就是调用 applyList 之后的结果，返回 s
 */

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

var arr1 = [1, 3, 5, 7, 9]
var arr2 = [2, 4, 6, 8, 10]
var arr3 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 1, 46, 4, 19, 50, 48]
var arr4 = [34, 28, 45, 38, 37, 37, 29, 27, 19, 4, 6, 12, 19, 50, 39, 17, 50, 2, 47, 32]
log(applyList('+', arr3))
log(applyList('-', arr4))
log(applyList('*', arr2))
log(applyList('/', arr1))
