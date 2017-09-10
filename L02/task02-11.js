// 作业 11
// 画朝鲜国旗
// northkorea()

/*
 * 提示:
 *     朝鲜国旗从上往下依次为蓝色矩形、白色矩形、红色矩形、白色矩形和蓝色矩形,
 *     这些矩形的高度比分别为 4:1:15:1:4, 红色矩形里包含了一个圆形和一个五角星
 *     圆形的直径和红色矩形的高度的比为 2:3, 使用这些数据计算出各个图形的坐标, 然后画出来
 * 
 * 分步提示:
 *     1. 分别计算出 5 个矩形的坐标和长宽
 *     2. 计算出圆形的圆心, 假设圆心距离国旗矩形左边的距离与国旗的长度(400) 的比值为 3:8
 *     3. 调用 5 次 rect 函数画 5 个矩形
 *     4. 调用 circle 函数画圆形
 *     5. 调用 wujcxy 函数画五角星
 */

// 写出上述作业后, 如果你实在无聊, 还可以画美国国旗(这个很复杂, 不要求你画, 不是作业, 不要求做)

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var xhair = function(x, y, l) {
    var newL = l / 2
    setHeading(0)
    jump(x - newL, y)
    forward(l)
    jump(x, y + newL)
    setHeading(90)
    forward(l)
    jump(x, y)
}

var polygon = function(x, y, n, l) {
    jump(x, y)
    setHeading(0)
    var degree = 180 * (n - 2)
    var d = 180 - degree / n

    var i = 0
    while (i < n) {
        forward(l)
        right(d)
        i = i + 1
    }
}

var circle = function(x, y, r) {
    var n = 360
    var l = (2 * Math.PI * r) / n
    polygon(x, y - r, n, l)
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

var vgwujcxy = function(x, y, length) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 5) {
        forward(length)
        right(144)
        i = i + 1
    }
}

var sin = function(degree) {
    // 如上课所述, 数学库里面的 sin 函数接受弧度作为参数
    // 我们这个函数接受角度, 下面是弧度转角度的公式
    var radians = degree * Math.PI / 180
    return Math.sin(radians)
}

var cos = function(degree) {
    var radians = degree * Math.PI / 180
    return Math.cos(radians)
}

var wujcxy = function(x, y, r) {
    var du = 18
    var x1 = x - cos(du) * r
    var y1 = y - sin(du) * r
    var length = cos(du) * r * 2
    vgwujcxy(x1, y1, length)
}

var northkorea = function() {
    var x = 0
    var y = 0
    var flagWidth = 400
    var flagHeight = 200
    rect_center(x, y, flagWidth, flagHeight)

    var xOffset = -flagWidth / 2
    var yOffset = -flagHeight / 2

    var starX = xOffset + flagWidth / 3
    var starRadius = flagWidth / 9
    wujcxy(starX, y, starRadius)
    circle(starX, y, starRadius + 2)

    var boxHeight = flagHeight / 6
    var topBoxY = yOffset + boxHeight / 2
    rect_center(x, topBoxY, flagWidth, boxHeight)

    var barHeight = flagHeight / 36
    var topBarY = yOffset + boxHeight + barHeight / 2
    rect_center(x, topBarY, flagWidth, barHeight)

    var bottomBoxY = yOffset + flagHeight - boxHeight / 2
    var bottomBarY = yOffset + flagHeight - boxHeight - barHeight / 2
    rect_center(x, bottomBoxY, flagWidth, boxHeight)
    rect_center(x, bottomBarY, flagWidth, barHeight)
}

setDelay(0)
northkorea()
