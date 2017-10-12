// 作业 2
//
// var primeNumbers = function() { }
// 
// 返回 100 内的素数列表
// 
// 提示：
// 循环判断素数
// 

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

var isPrime = function(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
        return false
    }
    if (n % 2 == 0) {
        return (n == 2)
    }
    if (n % 3 == 0) {
        return (n == 3)
    }
    var m = Math.sqrt(n)
    for (var i = 5; i <= m; i += 6) {
        if (n % i == 0) {
            return false
        }
        if (n % (i + 2) == 0) {
            return false
        }
    }

    return true
}

var primeNumbers = function() {
    var list = []
    for (var i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            list.push(i)
        }
    }

    return list
}

log(primeNumbers())
