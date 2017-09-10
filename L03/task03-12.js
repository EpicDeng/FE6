// 作业 12
// 根据本周天气，绘制柱状图
// 中国本周的每日平均气温, 从周一到周日
// var forecast = function(temps) {
//     // 柱状图里每个图宽 30，间距为 0
// }
// var temps = [22, 19, 22, 21, 25, 27, 30, 28]
// forecast(temps)

/*
 * 提示：
 *   遍历数组 temps，每一个温度都画一个矩形
 *
 * 分步提示：
 *     1. 遍历 temps
 *     2. 注意，我们画图的坐标系里，向下是 y 轴正方向，所以调用 rect 函数的时候，参数 y 要传负数
 *     3. 计算 x, y, w, h，调用 rect 函数
 */

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

var forecast = function(temps) {
    // 画布宽度
    var bgWidth = 400
    // 柱状图里每个图宽 30，间距为 0
    var boxPerWidth = 30
    // 柱子总数所需宽度
    var canvasWidth = boxPerWidth * temps.length
    // 左外边距
    var marginLeft = bgWidth - canvasWidth

    // 柱子的缩放因子：数字越大，柱子越高
    var boxHeightScale = 1
    // 居中显示
    var boxYOffset = boxHeightScale * 10

    // 绘制第一个柱子
    var xBegin = (-bgWidth + marginLeft + boxPerWidth / 2) / 2
    var hBegin = temps[0] * boxHeightScale
    var yBegin = boxYOffset - hBegin / 2
    rect_center(xBegin, yBegin, boxPerWidth, hBegin)

    // 绘制其余的柱子
    var x = xBegin
    for (var i = 1; i < temps.length; i++) {
        x = x + boxPerWidth
        var h = temps[i] * boxHeightScale
        var y = boxYOffset - h / 2
        rect_center(x, y, boxPerWidth, h)
    }
}

var temps = [22, 19, 22, 21, 25, 27, 30, 28]
setDelay(0)
forecast(temps)
hide(0)
