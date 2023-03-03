var tl = gsap.timeline();

let openMenu = document.querySelector(".menu");
let CloseMenu = document.querySelector(".close");

openMenu.addEventListener("click", () => {
   
  tl.to(".lista-mobile", { y: 0, duration: 0.6, ease: Circ.easeOut })
  tl.from(".logo-menu, .close", 0.4,{

     opacity: 0,
     stagger: {
         amount: 0.01,
     }

      
  })
});


CloseMenu.addEventListener('click', ()=>{

    tl.to(".lista-mobile", 0.8,{y: "100%", duration: 3, ease: Power1.easeOut})
    
    tl.from(".logo-menu, .close", 0.4,{

        opacity: 0,
        stagger: {
            amount: 0.05,
        }
   
         
     })
    })


