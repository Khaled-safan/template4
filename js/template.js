let settingBox = document.getElementById("setting-box")
let gear = document.querySelector("#gear i")
let colors = document.querySelectorAll(".option-color ul li")
let landing_page =document.querySelector(".landing-page") 
let imagArray = ["1657858.jpg","313016.jpg","10-Benefits-of-Ready-Website-Template-For-Your-Business.jpg","PerfectWebBannerAdfeaturedimage1.webp"]
let options =Array.from(document.querySelectorAll(".options span")) 
let  optionImag = Array.from(document.querySelectorAll("#optionsImags img"))
let img =document.getElementById("photo")
let skills = document.querySelectorAll(".skill .progress span")
let skillssec =document.querySelector(".skills")
let Galleryimags = Array.from( document.querySelectorAll('.Gallery .imag img'))
let circleActive = document.querySelectorAll(".pullet .circle ")
let pullets = document.querySelectorAll(".pullet")
let pulletInfo = document.querySelectorAll(".pullet-info")
let mark = document.querySelector(".mark")
let menu = document.querySelector(".menu")
let listUl = document.querySelector(".header ul")
let optionLandig = document.querySelectorAll(".options button")
let landingPage = document.querySelector(".landing-page")


console.log(pullets,circleActive)


let randomImags;



function randomImages(){
    options.forEach((ele)=>{
        ele.classList.remove("active")
    })

 if(localStorage.getItem("option-random") == null ){
       randomImags = setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * imagArray.length) 

    landing_page.style.backgroundImage = 'url("imags/' + imagArray[randomNumber] + '")';
       },10000)
    options[0].classList.add("active")
 }else if(localStorage.getItem("option-random") == "Yes"){
    randomImags = setInterval(()=>{
        let randomNumber = Math.floor(Math.random() * imagArray.length) 
    
        landing_page.style.backgroundImage = 'url("imags/' + imagArray[randomNumber] + '")';
    },10000)
       options[0].classList.add("active")
 }else{
    clearInterval(randomImages)
    options[1].classList.add("active")
 }

}

randomImages()


if(localStorage.getItem("color") != null){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"));
    colors.forEach((col)=>{
        col.classList.remove("active")
        if(col.dataset.color == localStorage.getItem("color")  ){
           col.classList.add("active")
          
        }
             })
  
}



if(localStorage.getItem("option-img") == null){
    img.src = optionImag[0].src
}else {
    img.src = localStorage.getItem("option-img")
    optionImag.forEach((ele)=>{
      ele.classList.remove("active")
      if(localStorage.getItem("option-img") == ele.src){
         ele.classList.add("active")
      }
    })

}



if(localStorage.getItem("optionLanding") !==null){
  if(localStorage.getItem("optionLanding") =="Yes"){
    optionLandig.forEach((ele)=>{
      ele.classList.remove("active")
    })
    optionLandig[0].classList.add("active")
    landingPage.classList.add("fixed")
  }else{
    optionLandig[1].classList.add("active")
  }
  
  
}



gear.addEventListener("click",()=>{
    gear.classList.toggle("fa-spin")
    settingBox.classList.toggle("open")
})





colors.forEach((col)=>{
    col.addEventListener("click",()=>{
       document.documentElement.style.setProperty("--main-color",col.dataset.color)
       localStorage.setItem("color",col.dataset.color)
       colors.forEach((col)=>{
        col.classList.remove("active")
              })
         col.classList.add("active")
 

    })
})


options.forEach((span)=>{
  span.addEventListener("click",(e)=>{

    options.forEach((spans)=>{
        spans.classList.remove("active")
    })
     e.target.classList.add("active")

 localStorage.setItem("option-random",span.dataset.option)
 if(span.dataset.option == "Yes"){
    randomImages()
  }else{
    clearInterval(randomImags)
  }
  })
  

 
})



optionImag.forEach((ele)=>{
    ele.onclick = function(){
     optionImag.forEach((ele)=>{
       ele.classList.remove("active")
      })
     ele.classList.add("active")
      img.src = ele.src
      localStorage.setItem("option-img",ele.src)
    }
})

window.onscroll = function(){
 if(window.scrollY >= skillssec.offsetTop-300 ){
   skills.forEach((ele)=>{
    ele.style.width=ele.dataset.progress
    })
 } else{
    skills.forEach((ele)=>{
        ele.style.width = "0px"
        })
 }   

}



Galleryimags.forEach((ele)=>{
  ele.onclick = function(e){
    let layer = document.createElement("div")
    layer.className ="layer"
    document.body.appendChild(layer)
    let boximag = document.createElement("div")
    boximag.className ="boximg"
    document.body.append(boximag)
    let imag =document.createElement("img")
    imag.className = "photo"
    document.body.append(imag) 
    imag.src = ele.src
    boximag.append(imag)
  }

})


document.body.onclick =function(e){

 
   if(e.target.className == "layer"){
     e.target.remove()
     document.querySelector(".boximg").remove()

   }
}



pullets.forEach((ele)=>{
  ele.onclick = function(e){
    circleActive.forEach(ele=>{
      ele.classList.remove("active")
    })
   ele.children[0].classList.add("active")
     pulletInfo.forEach(ele =>{
      ele.classList.remove("active")
     })
   ele.children[1].classList.add("active")
   document.querySelector(ele.dataset.section).scrollIntoView({
    behavior: "smooth"
   })
  }
})



menu.addEventListener("click",function(){
  mark.classList.toggle("active")
  listUl.classList.toggle("active")
  
})


optionLandig.forEach((ele)=>{
  ele.onclick =function(){
    optionLandig.forEach((ele)=>{
      ele.classList.remove("active")
    })
    ele.classList.add("active")
    if(ele.classList.contains("Yes")){
     landingPage.classList.add("fixed")
    }else{
      landingPage.classList.remove("fixed")
    }
    localStorage.setItem("optionLanding",ele.dataset.option)

  }
})


