window.addEventListener("load", ()=>{
    const boxload = document.querySelector(".boxload")
 
    boxload.remove()
 })

window.addEventListener("DOMContentLoaded", ()=>{
    const boxiconmenu = document.querySelector(".boxiconmenu")
    const img = document.querySelector(".boxiconmenu img")
    let click = false;
    const boxmobile = document.querySelector(".boxmobilenone")
  
    boxiconmenu.addEventListener("click", ()=>{
     
     if(click === false){
      img.src = "../../imgs/menuremove.png"
      click = true
     }else{
         img.src = "../../imgs/menu.png"
  
         click = false
     }
  
     boxmobile.classList.toggle("boxmobile")
  
     
  })
  const logo = document.querySelector(".logo")
  logo.addEventListener("click", ()=>{
  
   window.location.href = "../html/index.html"
  })

  
  
  })