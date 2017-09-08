// 注意, 作业中提到的国旗的颜色我们只画线框不填色
// 所有国旗的矩形长宽分别为 400 * 300(包括瑞士国旗)
// 作业 1
// 实现一个圆形函数
// x y 是圆形的圆心
// r 是半径
// circle(x, y, r)

/*
 * 提示:
 *     我们在第一节课的最后有一个作业 polygon, 实际上电脑是通过模拟来实现画一个圆的
 *     也就是画一个正 n 变形, n 很大的时候, 这个图形就是一个圆
 *     有一个问题需要注意, 初始点在圆心处, 在画 polygon 的时候需要从左上角开始
 *     所以要先从圆心移动到左上角
 * 
 * 分步提示:
 *     1. 我们用正 36 边形来模拟圆形, 也就是说 n 取值 36
 *     2. 正多边形的周长是 n * l, 而圆的周长是 2 * Math.PI * r, 这两个是相等的,
 *        所以直接算出 l = (2 * Math.PI * r) / n
 *     3. 初始情况下箭头是朝右的, 所以先往左转
 *        var jcdu = (90 + (360 / n) / 2)
 *        left(jcdu)
 *     4. 转完之后, 移动 r, 也就是半径的距离,
 *     5. 这样就移动到了左上角的位置, 但此时角度并不是朝右的,
 *        刚刚往左转动了 jcdu, 现在往右转回来这个角度
 *        right(jcdu)
 *     6. 调用第一课作业的 polygon 函数, 传入 x, y, n, l 参数
*/

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
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
    var n = 36
    var l = (2 * Math.PI * r) / n
    var d = (90 + (360 / n) / 2)
    left(d)
    forward(l)
    right(d)
    polygon(x, y, n, l)
}

setDelay(0)
circle(0, -10, 10)
