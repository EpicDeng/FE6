// 作业 14
// var markedLine = function(array) { }
//
// array 是一个只包含了 0 9 的 array
// 返回一个标记过的 array
// ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
// 复制数组用 array.slice(0) 实现
//
// 标记规则如下
// 对于下面这样的 array
// [0, 0, 9, 0, 9]
// 标记后是这样
// [0, 1, 9, 2, 9]
//
// 规则是, 0 会被设置为左右两边 9 的数量

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

var markedLine = function(array) {
    var arr = array.slice(0)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 9) {
            if (i != 0 && arr[i - 1] == 9) {
                arr[i] = 1
            }

            if (i != arr.length - 1 && arr[i + 1] == 9) {
                arr[i] += 1
            }
        }
    }

    return arr
}

log(markedLine(randomLine09(10)))
