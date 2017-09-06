// 作业8
// 实现函数, 画一个矩形方阵, 参数如下
// x, y 是第一个矩形左上角坐标
// space 是两个矩形之间的间距(横向和纵向)
// w, h 是矩形的长宽
// n 是横向矩形的个数
// m 是纵向矩形的个数
// rect_square(x, y, space, w, h, n, m)

/*
 * 提示:
 * 参考作业 6, 共 m 次循环, 在每次循环中, 画一排矩形, 也就是调用作业 7 中实现的函数
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
    var i = 0
    while (i < n) {
        newX = newX + w + space
        rect(newX, y, w, h)
        i = i + 1
    }
}

var rect_square = function(x, y, space, w, h, n, m) {
    var colSpace = space + h
    var newY = y
    var i = 0
    while (i < m) {
        newY = newY + colSpace
        rect_line(x, newY, w, h, n, space)
        i = i + 1
    }
}

setDelay(0)
rect_square(-250, -180, 5, 50, 35, 7, 7)
hide()
