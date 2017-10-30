// 第 19 课
// 作业 1
// 
// var find = function(array, callback) { }
// 
// array 是数组
// callback 是一个测试函数，参数是数组 array 中的元素
// 
// find 函数的返回值是数组中第一个满足测试条件的元素
// 如果对于数组中的所有元素都不满足测试条件，则返回 undefined
// 参考 https://lodash.com/docs/4.17.4#find
// 
// 
// 对于下面的函数调用来说
// find([12, 5, 8, 130, 44], function(element) {
//     return element >= 15
// })
// 数组是 [12, 5, 8, 130, 44]
// 条件是元素大于等于 15
// 
// 就是循环取出数组 [12, 5, 8, 130, 44] 中的每一个元素
// 然后判断是否 >= 15，如果有一个元素大于等于 15，则返回这个元素，并且结束循环
// 显然数组 [12, 5, 8, 130, 44] 中符合条件的元素为 130，所以 find 函数的结果为 130
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

// 定义一个增强的 ensureEqual
var ensureEqual = (a, b, message) => {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    } else {
        log('测试成功 ***')
    }
}

var find = (array, callback) => {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}

var testFind = () => {
    var array = [12, 5, 8, 130, 44]
    var callback = element => {
        return element >= 15
    }
    var result = find(array, callback)
    ensureEqual(130, result, 'test find 1')
}

testFind()
