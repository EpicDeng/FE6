// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//

// 定义我们的 log 函数
var log = console.log.bind(console)

// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    if (!condition) {
        log("测试失败:", condition, "->", message)
    } else {
        log("测试成功:", condition)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}

// 作业 1
// 实现函数
// 多看提示多讨论
//
// var join = function(delimiter, array) { }
//
// delimiter 是 string
// array 是包含 string 的 array

// 把 array 中的元素用 delimiter 连接成一个字符串并返回
// 具体请看测试

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var join = function(delimiter, array) {
    var result = array[0]
    for (var i = 1; i < array.length; i++) {
        result = result + delimiter + array[i]
    }

    log("--- return:", result)
    return result
}

var testJoin = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}

testJoin()
