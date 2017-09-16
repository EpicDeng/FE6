// 作业 5
// 
// s 是 string
// 检查 s 中是否只包含空格
//
// 返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false

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

// 测试函数
var test_is_space = function() {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua'), 'center 测试 4')
    ensure(!is_space('  gua'), 'center 测试 5')
}

test_is_space()
