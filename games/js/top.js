
var obj = {
    id1:'imgs',
    tyoe:function(){
        var img = document.getElementById(this.id1)
        img.onclick = this.typeOf
        this.slice()
    },
    typeOf:function(){
        document.getElementById('overlay').style.display = 'none'
    },
    slice:function(){
        var name = document.getElementById('name');
        var str = name.innerHTML.slice(0,1) +'*'.repeat(7)+ name.innerHTML.slice(8)
        name.innerHTML = str
    }
}
obj.tyoe();


