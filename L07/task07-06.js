// 作业 6
// 实现加法口诀表
//
// var addTable = function() {
//
// 返回这样格式的加法口诀表(没写全, 但是要返回完整的)
// 注意, 这只是我输入的内容
// 实际上你普通 log 出来是不会有回车的
// [
//     '1 + 1 = 2',
//     '2 + 1 = 3  2 + 2 = 4',
//     '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
// ]

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var addTable = function() {
    var arr = []
    var len = 9
    for (var i = 0; i < len; i++) {
        var j = i + 1
        var k = 1
        var str = ''
        while (k <= j) {
            var tempStr = j + ' + ' + k + ' = ' + (j + k)
            if (k != j) {
                // 处理当和是两位数时的对齐
                if ((j + k) / 10 < 1) {
                    tempStr += '  '
                } else {
                    tempStr += ' '
                }
            }
            str += tempStr
            k++
        }
        arr.push(str)
    }

    log(arr)
    return arr
}

addTable()
