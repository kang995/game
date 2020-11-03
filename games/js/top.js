var obj = {
    id:'overlay',
    id1:'imgs',
    tyoe:function(){
        var dom = document.getElementById(this.id)
        var img = document.getElementById(this.id1)
        this.typeOf(dom,img)
    },
    typeOf:function(dom,img){
      img.onclick = function(){
          dom.style.display = 'none'
      }
    }
}
obj.tyoe();

