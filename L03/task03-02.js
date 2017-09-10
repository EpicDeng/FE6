// 作业 2
// 返回一个数的绝对值
// 函数定义是
// var abs = function(n) { }
//

/*
 * 提示：
 *     参考上课求绝对值的代码来实现
 * 
 * 分步提示：
 *     1. 如果 n < 0，就把 n 的值赋值成 -n
 *     2. 返回 n 的值（很重要，一定要 return n）
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var abs = function(n) {
    if (n < 0) {
        return -n
    } else {
        return n
    }
}

var n1 = 666
var n2 = -233
var n3 = 0
log(abs(n1))
log(abs(n2))
log(abs(n3))
