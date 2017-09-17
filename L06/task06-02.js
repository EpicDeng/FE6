// 作业 2
// 实现函数
//   
// var findIn = function(s1, s2) { }
// 
// s1 是一个字符串
// s2 是一个长度为 1 的字符串
// 返回参数 s2 在 s1 中第一次出现的下标
// 如果 s2 没有在 s1 中出现, 返回 -1

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

var findIn = function(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        if (s2[0] == s1[i]) {
            return i
        }
    }

    return -1
}

var testFindIn = function() {
    ensure(findIn('guagua', 'g') == 0, 'find in error 1')
    ensure(findIn('guagua', 'm') == -1, 'find in error 2')
    ensure(findIn('melongua', 'g') == 5, 'find in error 3')
}

testFindIn()
