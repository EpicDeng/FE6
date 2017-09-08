// 作业9
// 实现函数, 画一个正多边形, 参数如下
// x y 是起点, 设起点为多边形的顶部边的左顶点
// n 是多边形的边数
// l 是边长
// polygon(x, y, n, l)

/*
 * 提示:
 * 正多边形和正方形的区别是前者循环 n 次, 后者循环 4 次, 其他都可以直接参考作业 1
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

setDelay(0)
polygon(0, 0, 5, 50)
