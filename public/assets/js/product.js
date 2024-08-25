window.addEventListener("DOMContentLoaded", ()=>{
    const referrer = document.referrer
    const logo = document.querySelector(".logo")

    if(referrer.includes("pagehtml.html")){
        logo.addEventListener("click", ()=>{
        
         window.location.href = "../html/pagehtml.html"
        })
             
    }else if(referrer.includes("pagecss.html")){
        logo.addEventListener("click", ()=>{
            window.location.href = "../html/pagecss.html"
            
        })

    }else if(referrer.includes("pagejs.html")){
        logo.addEventListener("click", ()=>{ 
            window.location.href = "../html/pagejs.html"

        })
     }else{
        logo.addEventListener("click", ()=>{
            window.location.href = "../html/index.html" 

        })
     }
    

})