var checkHandler = function () {
    var targetId;
    var targetElement;
    var srcElement = event.srcElement;
    // 根据其className属性值判断它是不是叶子节点，即改节点可以展开
    if (srcElement.className.substr(0, 7) == 'outline') {
        // 如果事件源是树节点前对的图片
        if (srcElement.id.indexOf("Image") > 0) {
            targetId = srcElement.id.substring(0, srcElement.id.length - 5) + "Details";
        } else {
            targetId = srcElement.id + "Details";
        }

        targetElement = document.getElementById(targetId);
        // 如果targetElement对象存在
        if (targetElement) {
            // 如果该div元素处于隐藏状态
            if (targetElement.style.display == "none") {
                // 显示该div元素
                targetElement.style.display = "";
            } else {
                // 否则，隐藏改div元素
                targetElement.style.display = "none";
            }
        }

        if (srcElement.id.indexOf("Image") > 0) {
            targetId = srcElement.id;
        }  else {
            targetId = srcElement.id + "Image";
        }

        // 找到对应的image元素
        targetElement = document.getElementById(targetId);
        if (targetElement.src.indexOf("plus") >= 0) {
            targetElement.src = "../../images/minus.gif";
        } else {
            targetElement.src = "../../images/plus.gif";
        }
    }
}
document.onclick = checkHandler;