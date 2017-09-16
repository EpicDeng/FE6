// 作业 6
//
// s 是字符串
// 检查 s 中是否只包含数字
// 返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false

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

var is_digit = function(s) {
    if (s.length == 0) {
        return false
    }

    var digits = "0123456789"

    for (var i = 0; i < s.length; i++) {
        if (!digits.includes(s[i])) {
            return false
        }
    }

    return true
}

// 测试函数
var test_is_digit = function() {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
    ensure(!is_digit(''), 'is_digit 测试 6')
}

test_is_digit()
