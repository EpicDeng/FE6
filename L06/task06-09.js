// 作业 9
// 做不出尽早看提示或者到群里讨论或者发帖
// 
// var prettyLog = function(array) { }
//
// array 是 array 类型, 里面的元素都是字符串
//
// 按如下的格式返回这个 array
// 假设 array 是 ['python', 'js', 'objective-c']
// 那么返回的数据是一个数组, 多了首尾两个元素
// [
//     '+++++++++++++++',
//     '+ python      +',
//     '+ js          +',
//     '+ objective-c +',
//     '+++++++++++++++',
// ]
// 返回包含了 string 的 array

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var ljust = function(s, width, fillchar = ' ') {
    if (s.length > width) {
        return s
    }

    // 
    var result = s
    var begin = result.length
    for (var i = begin; i < width; i++) {
        result = result + fillchar
    }

    return result
}

var rjust = function(s, width, fillchar = ' ') {
    if (s.length > width) {
        return s
    }

    // 
    var result = s
    var begin = result.length
    for (var i = begin; i < width; i++) {
        result = fillchar + result
    }

    return result
}

var center = function(s, width, fillchar = ' ') {
    if (width < s.length) {
        return s
    }

    var result = ''
    var rest = width - s.length
    var lLeft = 0

    // 先计算左边需要填充的数量
    // 数量为偶数
    if (rest % 2 == 0) {
        lLeft = rest / 2
    } else {
        // 数量为奇数
        lLeft = Math.floor(rest / 2)
    }

    // 填充左边
    result = rjust(s, s.length + lLeft, fillchar)

    // 计算右边需要填充的数量
    var rLeft = rest - lLeft

    // 填充右边
    result = ljust(result, result.length + rLeft, fillchar)

    return result
}

var longestLength = function(arrStr) {
    var index = 0
    var longest = arrStr[0].length
    for (var i = 0; i < arrStr.length; i++) {
        var n = arrStr[i].length
        if (longest < n) {
            index = i
        }
    }

    return arrStr[index].length
}

var makeRailing = function(width) {
    var result = ''
    for (var i = 0; i < width + 4; i++) {
        result += '+'
    }

    return result
}

var prettyLog = function(array) {
    var arr = []
    var longest = longestLength(array)
    var railing = makeRailing(longest)

    arr.push(makeRailing(longest))
    for (var i = 0; i < array.length; i++) {
        var temp = ljust(array[i], longest)
        temp = center(temp, longest + 2)
        temp = center(temp, longest + 4, '+')
        arr.push(temp)
    }
    arr.push(makeRailing(longest))

    return arr
}

var __main = function() {
    var arr = ['python', 'js', 'objective-c', 'ruby on rails']
    log(prettyLog(arr))
}

__main()
