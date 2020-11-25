window.onload = function(){
    //请求demo
    // ajax({
    //     method:"get",
    //     url:'http://192.168.44.198:22222/data.json',
    //     data:{},
    //     success:function(res){
    //         var res = JSON.parse(res); 
    //         console.log(res.data.total)
    //     },
    //     error:function(){

    //     }
    // })
    // var span = document.querySelector('.spn')
    // ajax({
    //     method:"get",
    //     url:'http://192.168.44.198:22222/data.json',
    //     data:{},
    //     success:function(res){
    //         var res = JSON.parse(res); 
    //         console.log(res)
    //         // span.innerHTML = res.data.result[0].catName
    //     },
    //     error:{

    //     }
    // })

    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    localStorage.setItem("user_id",JSON.stringify(GetRequest().user_id))
    console.log(JSON.parse(localStorage.getItem("user_id")));
    var user_id = JSON.parse(localStorage.getItem("user_id"));
    // console.log(GetRequest().user_id); 
    //数据请求--提交数据
    window.sendData = function (val){  
        // var arr = [];
        var playCount = JSON.parse(localStorage.getItem("playCount"));//游戏次数
        // var score = JSON.parse(localStorage.getItem("score"));//本次得分
        var maxScore = JSON.parse(localStorage.getItem("score.v1"));//最高得分记录
        var obj = {
            user_id:user_id,
            playCount:playCount,//游戏次数
            score:val,//本次得分
            maxScore:maxScore,//最高分
        }
        // arr.push(obj)
        ajax({
            method:"post",
            url:'http://192.168.44.198:22222/data.json',
            data:queryStrings(obj),
            success:function(res){
                var res = JSON.parse(res); 
                console.log(res)
            },
            error:function(){

            }
        })
    }
   


    /* 
    var button = document.getElementById('button');
    var form = document.getElementById('form');
    var nodes = form.querySelectorAll('input');

    button.addEventListener('click',function(){
        ajax({
            method:"post",
            url:'http://192.168.44.159:22222/data.json',
            data:queryString(nodes),
            success:function(res){
                var res = JSON.parse(res); 
                console.log(res)
            },
            error:{

            }
        })
    })
*/
  
}
