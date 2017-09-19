// 作业 12
//
// var randomSquare01 = function(n) { }
//
// 返回以下格式的数据
// 假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// 注意, 这只是一个 array, 并不是它显示的样子
// 注意, 这是一个 array 不是 string
// [
//     [0, 0, 1],
//     [1, 0, 1],
//     [0, 0, 0],
// ]
// 返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array

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

var randomSquare01 = function(n) {
    var arr = []
    for (var i = 0; i < n; i++) {
        arr.push(randomLine01(n))
    }

    return arr
}

log(randomSquare01(5))
