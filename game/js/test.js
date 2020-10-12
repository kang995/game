window.onload = function(){
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
    var form = document.getElementById('form');
    var nodes = node.querySelectorAll('input');
    // console.log(nodes)
    form.addEventListener('click',function(){
        ajax({
            method:"get",
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

    
}
