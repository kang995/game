window.onload = function(){
    //请求demo
    ajax({
        method:"get",
        url:'http://192.168.44.159:22222/data.json',
        data:{},
        success:function(res){
            var res = JSON.parse(res); 
            console.log(res.data.total)
        },
        error:{

        }
    })

    //数据请求--提交数据
    var button = document.getElementById('button');
    var arr = [];
    var obj = {
        score:1000,
        maxScore:2000,
        Integral:100
    }
    arr.push(obj)
    button.addEventListener('click',function(){
        ajax({
            method:"post",
            url:'http://192.168.44.159:22222/data.json',
            data:queryStrings(arr),
            success:function(res){
                var res = JSON.parse(res); 
                console.log(res)
            },
            error:{

            }
        })
    })


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
