// 作业 4
// 实现函数
//
// var str1 = function(n) { }
//
// n 是 int
// 返回这样规律的字符串, 特殊情况不考虑
// n       返回值
// 1       '1'
// 2       '121'
// 3       '12321'
// 4       '1234321'

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

var center = function(s, width, fillchar = ' ') {
    if (width < s.length) {
        return s
    }

    var result = ''
    var rest = width - s.length
    var lLeft = 0

    // 先计算左边需要填充的数量
    // 数量为偶数
    if (rest % 2 == 0) {
        lLeft = rest / 2
    } else {
        // 数量为奇数
        lLeft = Math.floor(rest / 2)
    }

    // 填充左边
    result = rjust(s, s.length + lLeft, fillchar)

    // 计算右边需要填充的数量
    var rLeft = rest - lLeft

    // 填充右边
    result = ljust(result, result.length + rLeft, fillchar)

    return result
}

var str1 = function(n) {
    if (n == 1) {
        return '1'
    }

    var result = String(n)
    var max = n

    for (var i = 1; i <= max; i++) {
        result = center(result, i + (i - 1), String(n))
        n = n - 1
    }

    return result
}

var testStr1 = function() {
    ensure(str1(3) == '12321', 'str1 test 1')
    ensure(str1(5) == '123454321', 'str1 test 2')
    ensure(str1(7) == '1234567654321', 'str1 test 3')
}

testStr1()
