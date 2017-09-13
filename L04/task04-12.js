// 作业 12
// 根据本周天气，绘制柱状图
// 中国本周的每日平均气温, 从周一到周日
//
// var forecast1 = function(temps, space) {
//     // 柱状图里每个图宽 30，间距为 space
// }
//
// var temps = [22, 19, 22, 21, 25, 27, 30, 28]

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

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

var forecast1 = function(temps, space) {
    // 画布宽度
    var bgWidth = 400
    // 柱状图里每个图宽 30，间距为 space
    var boxPerWidth = 30
    // 柱子总数所需宽度
    var canvasWidth = (boxPerWidth + space) * temps.length - space
    // 左外边距
    var marginLeft = bgWidth - canvasWidth

    // 柱子的缩放因子：数字越大，柱子越高
    var boxHeightScale = 5
    // 居中显示
    var boxYOffset = boxHeightScale * 10

    // 绘制第一个柱子
    var xBegin = (-bgWidth + marginLeft + boxPerWidth / 2 + space) / 2
    var hBegin = temps[0] * boxHeightScale
    var yBegin = boxYOffset - hBegin / 2
    rect_center(xBegin, yBegin, boxPerWidth, hBegin)

    // 绘制其余的柱子
    var x = xBegin
    for (var i = 1; i < temps.length; i++) {
        x = x + boxPerWidth + space
        var h = temps[i] * boxHeightScale
        var y = boxYOffset - h / 2
        rect_center(x, y, boxPerWidth, h)
    }
}

var temps = [22, 19, 22, 21, 25, 27, 30, 28]
var space = 15

setDelay(0)
forecast1(temps, space)
hide()
