// 作业 11
// 实现函数
//
// var randomLine01 = function(n) { }
//
// 返回一个只包含了 0 1 的随机 array, 长度为 n
// 假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// [0, 0, 1, 0, 1]

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var random01 = function() {
    return Math.round(Math.random())
}

var randomLine01 = function(n) {
    var arr = []
    while (n-- > 0) {
        arr.push(random01())
    }

    return arr
}

log(randomLine01(5))
