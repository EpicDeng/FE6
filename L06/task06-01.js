// 本次作业主要是 string 和 object 相关
//
// string 题目用到的知识还是
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

// 作业 1
// 实现函数
//   
// s1 是一个字符串
// s2 是一个字符串
// 检查 s1 是否以 s2 开头, 返回 true 或者 false

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var startsWith = function(s1, s2) {
    var len = s2.length
    if (s1.slice(0, len) == s2) {
        return true
    }

    return false
}

var testStartsWith = function() {
    ensure(startsWith('guagua', 'guagua'), 'starts with error 1')
    ensure(!startsWith('guagua', 'melon'), 'starts with error 2')
    ensure(!startsWith('melongua', 'gua'), 'starts with error 3')
}

testStartsWith()
