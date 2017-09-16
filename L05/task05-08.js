// 作业 8
// 10 分钟做不出就看提示
//
// s 是 string
// 返回一个「删除了字符串末尾的所有空格」的字符串
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

var is_space = function(s) {
    if (s.length == 0) {
        return false
    }

    for (var i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            return false
        }
    }

    return true
}

var strip_right = function(s) {
    if (is_space(s)) {
        return ''
    }

    var result = ''
    for (var i = s.length - 1; i > -1; i--) {
        if (s[i] != ' ') {
            result = s.slice(0, i + 1)
            break;
        }
    }

    return result
}

// 测试函数
var test_strip_right = function() {
    ensure(strip_right('gua') === 'gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
    ensure(strip_right('  this is good     ') === '  this is good', 'strip_right 测试 5')
}

test_strip_right()
