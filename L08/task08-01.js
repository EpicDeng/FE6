// 作业 1
//
// var unique = function(a) { }
// 
// a 是一个 array
// 返回一个 array, 包含了 a 中所有元素, 但不包含重复元素
// 例如 a 是 [1, 2, 3, 1, 3, 5]
// 返回 [1, 2, 3, 5]
// 

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

var findNum = function(source, targetNum) {
    for (var i = 0; i < source.length; i++) {
        if (targetNum == source[i]) {
            return i
        }
    }

    return -1
}

var unique = function(a) {
    var result = []
    for (var i = 0; i < a.length; i++) {
        if (findNum(result, a[i]) == -1) {
            result.push(a[i])
        }
    }

    return result
}


var testUnique = function() {
    var test1 = [1, 2, 3, 1, 3, 5]
    var test2 = [6, 6, 8, 6, 6, 8]

    ensure(arrayEquals(unique(test1), [1, 2, 3, 5]), 'unique test 1')
    ensure(arrayEquals(unique(test2), [6, 8]), 'unique test 2')
}

testUnique()
