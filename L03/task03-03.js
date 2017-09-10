// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
// var average = function(array) { }

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var average = function(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        sum = sum + n
    }

    var mean = sum / array.length
    return mean
}

var arr1 = [1, 3, 5, 7, 9]
var arr2 = [2, 4, 6, 8, 10]
log(average(arr1))
log(average(arr2))
