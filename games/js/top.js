
var obj = {
    id1:'imgs',
    tyoe:function(){
        var img = document.getElementById(this.id1)
        img.onclick = this.typeOf
    },
    typeOf:function(){
        document.getElementById('overlay').style.display = 'none'
        window.Sidebar.hide()
    }
}
obj.tyoe();


