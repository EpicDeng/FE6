// 作业 3
//
// var ljust = function(s, width, fillchar = ' ') { }
// 
// s 是 string
// width 是 int
// fillchar 是 长度为 1 的字符串, 默认为空格 ' '
//
// 如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
// 否则, 原样返回, 不做额外处理
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

var ljust = function(s, width, fillchar = ' ') {
    if (s.length > width) {
        return s
    }

    // 
    var result = s
    var begin = result.length
    for (var i = begin; i < width; i++) {
        result = result + fillchar
    }

    return result
}

var test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}

test_ljust()
