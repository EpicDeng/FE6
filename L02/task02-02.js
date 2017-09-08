// 作业 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)

/*
 * 提示:
 *     在第一课的作业中已经实现了 rect 函数,
 *     不过 rect 函数中的 x, y 是表示左上角坐标,
 *     现在需要实现的 center_rect 函数的 x, y 是矩形中心的坐标,
 *     所以应该先从矩形中心移动到矩形左上角, 然后调用 rect 函数
 * 
 * 分步提示:
 *     1. 根据矩形中心坐标 x, y 计算出左上角坐标 x1, y1
 *     2. 调用 rect 函数, 传入的参数分别为左上角坐标, 宽和高
*/

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var cross = function(x, y, l) {
    jump(x - l / 2, y)
    setHeading(0)
    forward(l)
    jump(x, y + l / 2)
    setHeading(90)
    forward(l)
    setHeading(0)
}

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

var rect_center = function(x, y, w, h) {
    var newX = x - w / 2
    var newY = y - h / 2
    rect(newX, newY, w, h)
}

setDelay(0)
cross(0, 0, 10)
rect_center(0, 0, 88, 66)
