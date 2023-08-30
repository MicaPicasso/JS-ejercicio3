const autor= document.getElementById("autor"),
    job= document.getElementById("ocupacion"),
    descripcion= document.getElementById("descripcion"),
    img=document.getElementById("image"),
    btnLeft= document.getElementById("button-left"),
    btnRight= document.getElementById("button-right"),
    btnRandom=document.getElementById("random")

const reviews=[
    {
        id: 1,
        name: "Micaela Picasso",
        job: "Desarrollador Full Stack",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Praesentium dicta modi consequuntur mollitia suscipit aliquam qui. Necessitatibus, voluptate molestias. Commodi iste molestiae ea laborum. Nulla exercitationem voluptatem repudiandae impedit dolor soluta, unde sunt maxime ex nihil iste ipsam?"
    },
    {
        id: 2,
        name: "José Ignacio Bustos",
        job: "Medico",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Sint recusandae doloribus aspernatur laudantium autem facere. Amet similique et cupiditate nisi error adipisci minima cum qui, voluptas accusamus eos deserunt! Quia debitis, at repudiandae sequi quam architecto ipsum quidem."
    },
    {
        id: 3,
        name: "Eliana Sinner",
        job: "Arquitecta",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus non voluptas blanditiis rerum consectetur hic necessitatibus laudantium perspiciatis in at, aspernatur asperiores dolorem possimus, iusto ipsam quia eum voluptatibus?"  
    },
    {
        id: 4,
        name: "Julia Martinez Atencio",
        job: "Abogada",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Quasi obcaecati fuga earum recusandae, inventore iure velit ullam aperiam quas reprehenderit. Provident, aspernatur assumenda! Repellendus, non deleniti. Iure deleniti repellat mollitia dolorem doloribus tempore nemo ullam, nihil ratione sit!" 
    },
    {
        id: 5,
        name: "Carlos Battiata",
        job: "Politicas Publicas",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Qui illum id eligendi nulla similique tenetur accusantium eos aspernatur, labore odio repellendus veritatis minus exercitationem vitae explicabo, cum facilis quidem, optio voluptatem corrupti? Libero deleniti officiis inventore sit molestias!" 
    },
    {
        id: 6,
        name: "Yuyo Marchetta",
        job: "Medico",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum officia repellendus, quam id quia aspernatur provident aperiam repellat culpa ipsa, labore blanditiis harum quisquam debitis obcaecati numquam distinctio laboriosam dolorum." 
    },
    {
        id: 7,
        name: "Sebastian Rufino",
        job: "Abogado",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Facere itaque eaque culpa tempore ullam aspernatur natus assumenda asperiores officiis! Praesentium aliquid soluta consequuntur modi quam, porro nulla similique dicta suscipit ipsum ea recusandae laboriosam eos? Inventore, architecto officia." 
    },
    {
        id: 8,
        name: "Melina Lell",
        job: "Contadora Publica",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Blanditiis magni provident necessitatibus dolorem at deserunt numquam vero! Cum dolorum itaque reiciendis quas quae! Fugiat tempore, laborum odit temporibus ab aspernatur? Corrupti tempora eaque maxime sunt similique vero provident?" 
    },
    {
        id: 9,
        name: "Juan Carlos Picasso",
        job: "Jubilado",
        img: "https://dummyimage.com/150x150/000/fff",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nobis numquam architecto maxime nihil nulla, id dolores atque sit ex asperiores eveniet ipsa cumque repudiandae culpa! Voluptates, cum modi!"  
    }
]

let itemNum =0;

window.addEventListener("DOMContentLoaded", function() {
    

})
function cardPerson(id){
    const item= reviews[id]
    img.src= item.img
    autor.textContent = item.name
    ocupacion.textContent= item.job
    descripcion.textContent= item.text
}

btnRight.addEventListener("click", function (){
    itemNum ++
    if(itemNum > reviews.length -1){
        itemNum = 0
    }
    cardPerson(itemNum)
})

btnLeft.addEventListener("click", function (){
    itemNum --
    if(itemNum < 0 ){
        itemNum = reviews.length -1
    }
    cardPerson(itemNum)
})

btnRandom.addEventListener("click", function (){
    itemNum = Math.floor(Math.random()*reviews.length)
    cardPerson(itemNum)
})