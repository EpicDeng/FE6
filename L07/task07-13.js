// 作业 13
//
// var randomLine09 = function(n) { }
//
// 返回一个只包含了 0 9 的随机 array, 长度为 n
// 假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// [0, 0, 9, 0, 9]

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var random09 = function() {
    var n = Math.round(Math.random())
    if (n == 1) {
        n = 9
    }

    return n
}

var randomLine09 = function(n) {
    var arr = []
    while (n-- > 0) {
        arr.push(random09())
    }

    return arr
}

log(randomLine09(5))
