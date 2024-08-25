window.addEventListener("load", ()=>{
   const boxload = document.querySelector(".boxload")

   boxload.remove()
})


window.addEventListener("DOMContentLoaded", ()=>{
 const $main = document.querySelector("#mainindex")
 $main.children[0].addEventListener("click", ()=>{
   window.location.href = "../assets/../html/pagehtml.html"
  
 })

 $main.children[1].addEventListener("click", ()=>{
    window.location.href = "../assets/../html/pagecss.html"
 })

 $main.children[2].addEventListener("click", ()=>{
    window.location.href = "../assets/../html/pagejs.html"
 })


 const postnovisible = document.querySelectorAll(".postnovisible")

 const postvisible = new IntersectionObserver((post)=>{
   post.forEach((POSTvisible)=>{
    if(POSTvisible.isIntersecting){
      POSTvisible.target.classList.remove("postnovisible")
    }else{
     POSTvisible.target.classList.add("postnovisible")
    }
   })
 })

 postnovisible.forEach((iten)=>{
  postvisible.observe(iten)
 })



})