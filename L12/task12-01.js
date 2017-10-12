// 作业 1
//
// var isPrime = function(n) { }
// 
// n 是 int
// 判断 n 是否是素数(质数)
// 
// 提示：
//     素数就是只能被 1 和本身整除的数
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

var testIsPrime = function() {
    ensure(isPrime(2), 'test is prime 1')
    ensure(isPrime(3), 'test is prime 2')
    ensure(!isPrime(9), 'test is prime 3')
    ensure(!isPrime(15), 'test is prime 4')
}

testIsPrime()
