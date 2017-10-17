// 作业 4
//
// var letterCount = function(str) { }
// 
// 给定一个只包含字母的字符串，返回单个字母出现的次数
// 考察字典的概念和使用
// 返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）
// 
// 可以使用 Object.keys 函数来获取包含对象所有 key 的数组, 见下方例子
// var obj = {
// foo: 1,
// bar: 2,
// }
// Object.keys(obj)
// 结果是 ["foo", "bar"]
// 
// 假设参数 str 是 "hello"
// 返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var letterCount = str => {
    var result = {}

    for (var i = 0; i < str.length; i++) {
        // 对于str里的每一个字符
        var char = str[i]

        // 把字典里的内容分离出来成数组
        var keys = Object.keys(result)

        // 如果遇到已存在的
        if (keys.includes(char)) {
            result[char] += 1
        } else {
            // 否则不存在的话，就是首次出现，即1
            result[char] = 1
        }
    }

    // 处理完字典后，转换为数组
    // 处理属性
    var result1 = Object.keys(result)

    // 处理属性的值
    var result2 = Object.keys(result).map(key => {
        return result[key]
    })

    var outputArray = []
    for (var i = 0; i < result2.length; i++) {
        var subArray = []

        // 生成内数组
        subArray.push(result1[i])
        subArray.push(result2[i])

        // 再把内数组放进外数组
        outputArray.push(subArray)
    }

    return outputArray
}

var __main = () => {
    var str = 'hello'
    log(letterCount(str))
}

__main()
