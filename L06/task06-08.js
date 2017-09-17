// 作业 8
// 做不出尽早看提示或者到群里讨论或者发帖
//
// var discount = function(price, grade) { }
// 
// price 是一个 int
// grade 合法情况下一共 6 种取值, 还可能没有给出这个参数
//     '小学生'
//     '初中生'
//     '高中生'
//     '大学生'
//     '研究生'
// 对应的折扣分别是 5 6 7 8 9
//
// 注意, 如果调用者没有给出 grade 参数, 没有折扣
//
// 返回折扣后的价格

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

var discount = function(price, grade) {
    var grades = {
        '小学生': 5,
        '初中生': 6,
        '高中生': 7,
        '大学生': 8,
        '研究生': 9
    }

    if (grades[grade] == undefined) {
        return price
    }

    return price * (grades[grade] / 10)
}

var testDiscount = function() {
    ensure(discount(100, '研究生') == 90, 'discount with error 1')
    ensure(discount(200, '博士生') == 200, 'discount with error 2')
    ensure(discount(213, '社会人') == 213, 'discount with error 3')
    ensure(discount(50, '小学生') == 25, 'discount with error 4')
    ensure(discount(100, '初中生') == 60, 'discount with error 5')
    ensure(discount(100, '高中生') == 70, 'discount with error 6')
    ensure(discount(100, '大学生') == 80, 'discount with error 7')
}

testDiscount()
