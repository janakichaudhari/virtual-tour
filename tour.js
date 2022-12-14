AFRAME.registerComponent("tour",{
    init:function(){
        this.places=this.el
        this.cards()
    },
    cards:function(){
        const thumbnail=[
            {
                id:"budapest",
                title:"BUDAPEST",
                url:"./thumbnails/budapest.jpeg"
            },
            {
                id:"eiffel",
                title:"EIFFEL TOWER",
                url:"./thumbnails/eiffel_tower.jpeg"
            },
            {
                id:"newyork",
                title:"NEW YORK",
                url:"./thumbnails/new_york_city.png"
            },
            {
                id:"taj",
                title:"TAJ MAHAL",
                url:"./thumbnails/taj_mahal.png"
            }
        ]
        let positionx=-60
        for ( var item of thumbnail){
            const posx=positionx+25
            const posy=10
            const posz=-40
            const position={x:posx,y:posy,z:posz}
            positionx=posx
            //border element
            const  border1=this.createBorder(position,item.id)
            const thumbnail1=this.createThumbnail(item)
            border1.appendChild(thumbnail1)
            const title1=this.createtitle(position,item)
            border1.appendChild(title1)
            this.places.appendChild(border1)
        
        }

    },
    createBorder:function(position,id){
        const ent1=document.createElement("a-entity")
        ent1.setAttribute("id",id)
        ent1.setAttribute("visible",true)
        ent1.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10
        })
         ent1.setAttribute("position",position)
         ent1.setAttribute("material",{color:"red",opacity:0.4})
         ent1.setAttribute("cursorevent",{})
         return ent1
    },
    createThumbnail:function(item){
        const ent1=document.createElement("a-entity")
        ent1.setAttribute("visible",true)
        ent1.setAttribute("geometry",{
            primitive:"circle",
            radius:9,
            
        })
         
         ent1.setAttribute("material",{src:item.url})
         return ent1
    },
    createtitle:function(position,item){
        const ent1=document.createElement("a-entity")
        ent1.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:60,
            color:"black",
            value:item.title
        })
        const p=position
        p.y=-20
        ent1.setAttribute("visible",true)
        
         ent1.setAttribute("position",p)
         return ent1
    },

    
})