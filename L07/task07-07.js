// 作业 7
// 实现函数
// var range1 = function(start, end) { }
//
// start end 都是 int
//
// 返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
// [1, 2, 3, 4]

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

var range1 = function(start, end) {
    var arr = []
    for (var i = start; i < end; i++) {
        arr.push(i)
    }

    return arr
}

var testRange1 = function() {
    var test1 = range1(1, 5)
    var test2 = range1(3, 9)

    ensure(arrayEquals(test1, [1, 2, 3, 4]), 'range1 test 1')
    ensure(arrayEquals(test2, [3, 4, 5, 6, 7, 8]), 'range1 test 2')
}

testRange1()
