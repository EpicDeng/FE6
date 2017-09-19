// 作业 8
// 实现函数
//
// var range2 = function(start, end, step=1) { }
//
// start end step 都是数字
// step 是大于 0 的正整数
//
// 返回一个 array
// 假设 start=1, end=5, step=1 返回数据如下
// [1, 2, 3, 4]
// 假设 start=0, end=6, step=2 返回数据如下
// [0, 2, 4]

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

var range2 = function(start, end, step = 1) {
    var arr = []
    for (var i = start; i < end; i = i + step) {
        arr.push(i)
    }

    return arr
}

var testRange2 = function() {
    var test1 = range2(1, 5, 1)
    var test2 = range2(0, 6, 2)

    ensure(arrayEquals(test1, [1, 2, 3, 4]), 'range2 test 1')
    ensure(arrayEquals(test2, [0, 2, 4]), 'range2 test 2')
}

testRange2()
