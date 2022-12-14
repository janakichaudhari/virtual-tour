AFRAME.registerComponent("cursorevent",{
    schema:{
        selectedItemId:{default:"",type:"string"}

    },
    init:function(){
        this.mouseEnter()
        this.mouseLeave()
    },
    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const places=["budapest","eiffel","newyork","taj"]
        if(places.includes(id)){
            const placesContainer=document.querySelector("#places")
            placesContainer.setAttribute("cursorevent",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{color:"black",opacity:0.4})
        }
    },
    mouseEnter:function(){
        this.el.addEventListener("mousenter",()=>{
            this.handlePlacesListState()
        })
    },
    mouseLeave:function(){
        this.el.addEventListener("mouseleave",()=>{
            const{selectedItemId}=this.data
            if(selectedItemId){
                const dl=document.querySelector(`#${selectedItemId}`)
                const id=dl.getAttribute("id")
                if(id==selectedItemId){
                    dl.setAttribute("material",{color:"red",opacity:0.4})
                }
            }
        })
    }
})