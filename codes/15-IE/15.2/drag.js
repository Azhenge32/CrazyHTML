var drag = function (target, event) {
    // 定义开始拖动是的鼠标位置（相对于window坐标）
    var startX = event.clientX;
    var startY = event.clientY;
    // 定义将要被拖动元素的位置（相对于document坐标）
    var origX = target.offsetLeft;
    var origY = target.offsetTop;

    var deltaX = startX - origX;
    var deltaY = startY - origY;
    // 设置该元素直接捕获该事件
    target.setCapture();

    var moveHandler = function () {
        // 对于IE事件模型，获取事件对象
        var evt = window.event;
        target.style.left = (evt.clientX - deltaX) + "px";
        target.style.top = (evt.clientY - deltaY) + "px";
        evt.cancelBubble = true;
    }

    var upHandler = function () {
        // 对于IE事件模型，获取事件对象
        var evt = window.event;
        target.detachEvent("onlosecapture", upHandler);
        target.detachEvent("onmouseup", upHandler);
        target.detachEvent("onmousemove", moveHandler);
        target.releaseCapture();
        evt.cancelBubble = true;
    }

    target.attachEvent("onmousemove", moveHandler);
    target.attachEvent("onmouseup", upHandler);
    target.attachEvent("onlosecapture", upHandler);

    event.cancelBubble = true;
    event.returnValue = false;
}