window.onload = function(){
    //请求demo
    ajax({
        method:"get",
        url:'http://192.168.44.198:22222/data.json',
        data:{},
        success:function(res){
            var res = JSON.parse(res); 
            console.log(res.data.total)
        },
        error:function(){

        }
    })
    var span = document.querySelector('.spn')
    ajax({
        method:"get",
        url:'http://192.168.44.198:22222/data.json',
        data:{},
        success:function(res){
            var res = JSON.parse(res); 
            console.log(res)
            console.log(111)
            // span.innerHTML = res.data.result[0].catName
        },
        error:{

        }
    })
    //数据请求--提交数据
    window.sendData = function (){
        var arr = [];
        var playCount = JSON.parse(localStorage.getItem("playCount"));//游戏次数
        var score = JSON.parse(localStorage.getItem("score"));//本次得分
        var maxScore = JSON.parse(localStorage.getItem("score.v1"));//最高得分记录
        console.log(playCount,score,maxScore)
        var obj = {
            playCount:playCount,//游戏次数
            score:score,//本次得分
            maxScore:maxScore,//最高分
            // Integral:100,//本次获得积分
        }
        arr.push(obj)
        ajax({
            method:"post",
            url:'http://192.168.44.198:22222/data.json',
            data:queryStrings(arr),
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
