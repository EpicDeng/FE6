// 第 19 课
// 作业 2
// var findIndex = function(array, callback) { }
// 
// array 是数组
// callback 是一个测试函数，参数是数组 array 中的元素
// 
// findIndex 函数的返回值是数组中第一个满足测试条件的元素在数组中的下标
// 如果所有元素都不满足测试条件，返回 -1
// 参考 https://lodash.com/docs/4.17.4#findIndex
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var ensureEqual = (a, b, message) => {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    } else {
        log('测试成功 ***')
    }
}

var findIndex = (array, callback) => {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i
        }
    }

    return -1
}

var testFindIndex = () => {
    var array = [12, 5, 8, 130, 44]
    var callback = element => {
        return element >= 15
    }
    var result = findIndex(array, callback)
    ensureEqual(3, result, 'test find index 1')
}

testFindIndex()
