function ajax({method = "get", url, data, success, error}){
    //1、声明一个ajax对象
    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2、open
    if(method.toLowerCase() == "get" && data){
        url += "?" + data + "&" + new Date().getTime();
    }
        xhr.open(method, url, true);

    //3、send
    if(method.toLowerCase() == 'post'){
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }else{
        xhr.send();
    }

    //4、等待响应数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){	
                //在这里如何处理下载到的数据是不确定，
                //函数，原理，我们将在这里执行的代码的编写权利交给别人。	
                if(success){
                    success(xhr.responseText);
                }
            }else{
                if(error){
                    error("Error:" + xhr.status);
                }
            }
        }
    }
}

//拼接成查询字符串
function queryString(nodes){
    var str = '';
    for(var i = 0; i < nodes.length; i++){
        str += nodes[i].name + "=" + nodes[i].value + "&";
    }
    return str.substring(0, str.length - 1);
}

function queryStrings(nodes){
    var str = '';
    for(var i = 0; i < nodes.length; i++){
        str += "score" + "=" + nodes[i].score + "&" + "maxScore" + "=" + nodes[i].maxScore + "&" + "Integral" + "=" + nodes[i].Integral;
    }
    return str.substring(0, str.length - 1);
}