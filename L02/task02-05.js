// 作业 5
// 实现一个五角星函数
// x y 是五角星的中心点坐标
// r 是五角星外接圆的半径
// wujcxy(x, y, r)
// 为了实现这个函数, 你需要使用三角函数计算顶点在圆上的坐标
// 如果你不懂这个数学计算过程, 应该在群里提问
// 我帮你实现了正弦余弦函数如下
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

/*
 * 提示
 *     1. 正五角星顶角的一半是 18 度，var du = 18
 *     2. 五角星顶部横边的左边点的 x 坐标为 var x1 = x - cos(du) * r
 *     3. 五角星顶部横边的左边点的 y 坐标为 var y1 = y - sin(du) * r
 *     4. 五角星的长度为 var length = cos(du) * r * 2
 *     5. 调用作业 3 的函数 vgwujcxy(x1, y1, length)
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
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

var wujcxy = function(x, y, r) {
    var du = 18
    var x1 = x - cos(du) * r
    var y1 = y - sin(du) * r
    var length = cos(du) * r * 2
    vgwujcxy(x1, y1, length)
}

setDelay(0)
wujcxy(0, 0, 66)
