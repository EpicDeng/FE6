// 作业 4
//
//var center = function(s, width, fillchar = ' ') { }
// 
// s 是 string
// width 是 int
// fillchar 是 长度为 1 的字符串, 默认为空格 ' '
//
// 如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
// 如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
// 这种情况下, 让左边的 fillchar 数量小于右边
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

var test_center = function() {
    ensure(center('gua', 5) === ' gua ', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
    ensure(center('guaguag', 20, '|') === '||||||guaguag|||||||', 'center 测试 5')
}

test_center()
