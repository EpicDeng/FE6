// 作业 6
//
// var isSubset = function(a, b) { }
// 
// a b 都是 array
// 
// 检查是否 a 中的每个元素都在 b 中出现
// 返回 bool
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var ensure = function(condition, message) {
    if (!condition) {
        log('测试失败:', condition, '->', message)
    } else {
        log('测试成功:', condition)
    }
}

var isSubset = function(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            return false
        }
    }

    return true
}

var testIsSubset = function() {
    var test1 = [3, 6, 9]
    var test2 = [1, 3, 6, 9, 11]
    var test3 = [3, 6, 8, 9]

    ensure(isSubset(test1, test2) == true, 'isSubset test 1')
    ensure(!isSubset(test3, test2) == true, 'isSubset test 2')
}

testIsSubset()
