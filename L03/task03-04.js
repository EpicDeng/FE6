// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
// var min = function(array) { }

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var min = function(array) {
    var minimum = array[0]
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        if (minimum > n) {
            minimum = n
        }
    }

    return minimum
}

var arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 1, 46, 4, 19, 50, 48]
var arr2 = [34, 28, 45, 38, 37, 37, 29, 27, 19, 4, 6, 12, 19, 50, 39, 17, 50, 2, 47, 32]
log(min(arr1))
log(min(arr2))
