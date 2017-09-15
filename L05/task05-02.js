// 作业 2
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样
// 
// 
// var rjust = function(s, width, fillchar = ' ') { }
// 
// s 是 string
// width 是 int
// fillchar 是 长度为 1 的字符串, 默认为空格 ' '
//
// 如果 s 长度小于 width, 则在开头用 fillchar 填充并返回
// 
// 返回 string 类型

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

var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}

var rjust = function(s, width, fillchar = ' ') {
    if (s.length > width) {
        return s
    }

    // 
    var result = s
    var begin = result.length
    for (var i = begin; i < width; i++) {
        result = fillchar + result
    }

    return result
}

var test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}

test_rjust()
