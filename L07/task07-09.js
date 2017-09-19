// 作业 9
// 实现函数
//
// var range3 = function(start, end, step=1) { }
//
// start end step 都是数字
//
// 和 range2 一样, 但是要求支持负数 step
// 使用 while 循环
// 返回一个 array
// 假设 start=1, end=5, step=1 返回数据如下
// [1, 2, 3, 4]
// 假设 start=6, end=0, step=-1 返回数据如下
// [6, 5, 4, 3, 2, 1]

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var ensure = function(condition, message) {
    if (!condition) {
        log("测试失败:", condition, "->", message)
    } else {
        log("测试成功:", condition)
    }
}

var arrayEquals = function(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false
        }
    }

    return true
}

var range3 = function(start, end, step = 1) {
    var arr = []
    var begin = start
    if (start == end) {
        arr.push(start)
    } else if (start < end) {
        for (var i = start; i < end; i = i + step) {
            arr.push(i)
        }
    } else {
        for (var i = start; i > end; i = i + step) {
            arr.push(i)
        }
    }

    return arr
}

var testRange3 = function() {
    var test1 = range3(1, 5, 1)
    var test2 = range3(6, 0, -1)

    ensure(arrayEquals(test1, [1, 2, 3, 4]), 'range3 test 1')
    ensure(arrayEquals(test2, [6, 5, 4, 3, 2, 1]), 'range3 test 2')
}

testRange3()
