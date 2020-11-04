window.onload = function(){
    var nodeImg = document.getElementById('imgs');
    var nodeAdd = document.getElementById('add');
    // 隐藏游戏规则弹框
    nodeImg.addEventListener('click',function(){
        nodeAdd.style.display = "none";
    })
}

