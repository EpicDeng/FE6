var log = console.log.bind(console)

var e = function(selector) {
    var element = document.querySelector(selector)
    if (element == null) {
        var s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return element
    }
}

var es = function(selector) {
    var elements = document.querySelectorAll(selector)
    if (elements.length == 0) {
        var s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return elements
    }
}
var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = es(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        log('classname', className, e)
        e.classList.remove(className)
    }
}

var bindAll = function(selector, eventName, callback) {
    var elements = es(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
var find = function(element, selector) {
    var e = element.querySelector(selector)
    if (e == null) {
        var s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return e
    }
}


var closestClass = function(element, className){
    var e = element
    while (e != null) {
        if (e.classList.contains(className)) {
            return e
        } else {
            e = e.parentElement
        }
    }
}

var closestId = function(element, idName){

    var e = element
    while (e != null) {
        // 判断 e 是否包含 idName 这个 id
        if (e.id == idName) {
            return e
        } else {
            e = e.parentElement
        }
    }
}


var closestTag = function(element, tagName){
    var e = element
    while (e != null) {
        // 判断 e 是否和 tagName 相等
        if (e.tagName.toUpperCase() == tagName.toUpperCase()) {
            return e
        } else {
            e = e.parentElement
        }
    }
}


var closest = function(element, selector){
    var c = selector[0]
    if (c == '.') {
        var className = selector.slice(1)
        return closestClass(element, className)
    } else if (c == '#') {
        var idName = selector.slice(1)
        return cloestId(element, idName)
    } else {
        var tag = selector
        return closestTag(element, tag)
    }
}

var bindEventDelegate = function(element, eventName, callback, responseClass) {
    element.addEventListener(eventName, function(event) {
        var self = event.target
        if (self.classList.contains(responseClass)) {
            callback(event)
        }
    })
}
