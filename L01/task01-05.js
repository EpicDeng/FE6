// 作业5
// 实现函数, 画一排正方形, 有如下参数
// x, y 是第一个正方形左上角坐标
// n 是正方形的个数
// space 是两个正方形之间的间距
// len 是正方形的边长
// square_line(x, y, n, space, len)

/*
 * 提示:
 * 作业 4 中画 5 个正方形, 循环 5 次
 * 作业 5 中画 n 个正方形, 循环 n 次, 同时两个正方形的间距从 10 换成了 space
*/

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var square = function(x, y, l) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 4) {
        forward(l)
        right(90)
        i = i + 1
    }
}

var square_line = function(x, y, n, space, len) {
    var newX = x
    var i = 0
    while (i < n) {
        newX = newX + len + space
        square(newX, y, len)
        i = i + 1
    }
}

setDelay(0)
var x = -250
var y = -190
var n = 7
var space = 5
var len = 50
var i = 0
while (i < 5) {
    y = y + 55
    square_line(x, y, n, space, len)
    i = i + 1
}
hide()
