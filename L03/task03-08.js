// 注意 下面几题中的参数 op 是 operator(操作符) 的缩写

// 作业 8
// 实现 apply 函数
// 参数如下
// op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
// a b 分别是 2 个数字
// 根据 op 对 a b 运算并返回结果(加减乘除)

/* 
 * 提示：
 * 根据 op 的情况，处理 a 和 b 的计算
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

var n1 = 3
var n2 = 7
log(apply('+', n1, n2))
log(apply('-', n1, n2))
log(apply('*', n1, n2))
log(apply('/', n1, n2))
log(apply('=', n1, n2))
