// 作业6
// 实现函数, 用上题的函数来画一个正方形方阵, 参数如下
// x, y 是第一个正方形左上角坐标
// space 是两个正方形之间的间距
// len 是正方形的边长
// n 是横向正方形的个数
// m 是纵向正方形的个数
// square_square(x, y, space, len, n, m)

/* 
 * 提示:
 * m 是纵向正方形的个数, 所以需要循环 m 次,
 * 每次循环画一排正方形, 即作业 5 的要求, 所以每次循环调用作业 5 的 square_line 函数就行
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
    square(newX, y, len)
    var i = 1
    while (i < n) {
        newX = newX + len + space
        square(newX, y, len)
        i = i + 1
    }
}

var square_square = function(x, y, space, len, n, m) {
    var colSpace = space + len
    var newY = y
    var i = 0
    while (i < m) {
        newY = newY + colSpace
        square_line(x, newY, n, space, len)
        i = i + 1
    }
}

setDelay(0)
square_square(-190, -190, 5, 50, 7, 5)
hide()
