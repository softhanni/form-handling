


let all = document.querySelectorAll(".more")
// console.log(all)
all.forEach(function(a){
          a.addEventListener("click", function n (){
              let e= a.parentElement.nextElementSibling;
          
// console.log(all)
              
          e.classList.toggle("showpara")


          });
          })
