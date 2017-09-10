// 作业7
// 实现函数, 画一排矩形, 有如下参数
// x, y 是第一个矩形左上角坐标
// w, h 是矩形长宽
// n 是矩形的个数
// space 是两个矩形之间的间距
// rect_line(x, y, w, h, n, space)

/*
 * 提示:
 * 作业 7 和作业 5 的区别是作业 7 要求画矩形, 作业 5 要求话正方形,
 * 也就是在作业 7 的每次循环中画一个矩形, 即调用画矩形的函数
*/

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i = i + 1
    }
}

var rect_line = function(x, y, w, h, n, space) {
    var newX = x
    rect(newX, y, w, h)
    var i = 1
    while (i < n) {
        newX = newX + w + space
        rect(newX, y, w, h)
        i = i + 1
    }
}

setDelay(0)
rect_line(-190, 0, 50, 30, 7, 5)
