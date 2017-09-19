// 作业 15
// 注意, 这道题比较麻烦, 你要是不会, 就暂时放弃
// var markedSquare = function(array) { }
// 
// array 是一个「包含了『只包含了 0 9 的 array』的 array」
// 返回一个标记过的 array
// ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
// 
// 范例如下, 这是 array
// [
//     [0, 9, 0, 0],
//     [0, 0, 9, 0],
//     [9, 0, 9, 0],
//     [0, 9, 0, 0],
// ]
// 
// 这是标记后的结果
// [
//     [1, 9, 2, 1],
//     [2, 4, 9, 2],
//     [9, 4, 9, 2],
//     [2, 9, 2, 1],
// ]
// 
// 规则是, 0 会被设置为四周 8 个元素中 9 的数量

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

var randomSquare09 = function(n) {
    var arr = []
    for (var i = 0; i < n; i++) {
        arr.push(randomLine09(n))
    }

    return arr
}

var markedLine = function(array) {
    var arr = array.slice(0)
    for (var i = 0; i < arr.length; i++) {
        log("位于第" + i + "列")

        if (arr[i] != 9) {
            if (i != 0 && arr[i - 1] == 9) {
                log("arr[" + i + "] 的左边是 9！arr[" + i + "] 自增 1：")
                arr[i] += 1
                log("于是 arr[" + i + "] 现在是：", arr[i])
            }

            if (i != arr.length - 1 && arr[i + 1] == 9) {
                log("arr[" + i + "] 的右边是 9！arr[" + i + "] 自增 1：")
                arr[i] += 1
                log("于是 arr[" + i + "] 现在是：", arr[i])
            }
        }
        log("----------")
    }

    return arr
}

var markedColumn = function(array) {
    var arr = array.slice(0)

    for (var i = 0; i < arr.length; i++) {
        log("位于第" + i + "排")
        var k = i + 1
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != 9) {
                log("arr[" + i + "][" + j + "] 自身不是 9")

                // 处理下一排
                if (k != arr.length && arr[k][j] == 9) {
                    log("arr[" + i + "][" + j + "] 的正下方" + "arr[" + k + "][" + j + "] 是 9！arr[" + i + "][" + j + "] 自增 1：")
                    arr[i][j] += 1
                    log("于是 arr[" + i + "][" + j + "] 现在是：", arr[i][j])
                }

                // 处理上一排
                if (i != 0 && arr[i - 1][j] == 9) {
                    log("arr[" + i + "][" + j + "] 的正上方" + "arr[" + (i - 1) + "][" + j + "] 是 9！arr[" + i + "][" + j + "] 自增 1：")
                    arr[i][j] += 1
                    log("于是 arr[" + i + "][" + j + "] 现在是：", arr[i][j])
                }
            }
        }
        k++
        log("----------")
    }

    return arr
}

var markedSquare = function(array) {
    // var example = [
    //     [0, 9, 9, 0, 0],
    //     [9, 0, 0, 0, 9],
    //     [9, 9, 0, 9, 0],
    //     [0, 9, 9, 9, 0],
    //     [9, 9, 0, 9, 9]
    // ]

    var arr = markedColumn(array.slice(0))
    log(arr)
    log("纵向处理完毕，接下来处理横向：")
    log("==============================")
    var arr2 = []
    for (var i = 0; i < arr.length; i++) {
        arr2.push(markedLine(arr[i].slice(0)))
    }
    log("****** 处理结果 ******")

    return arr2
}

log(markedSquare(randomSquare09(20)))
