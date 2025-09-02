//hope

const scroll = new LocomotiveScroll({
    el: document.querySelector("#hope"),
    smooth: true
});


function firstPageAnimation(){
    var tl =gsap.timeline();
    tl.from("#nav",{
        y:"-10",
        opacity:0,
        duration:1.5,
        ease : Expo.easeInOut
        
    })

   
    tl.to(".boundingelem",{
        y:0,
       delay:-1,
        duration:1.5,
        ease : Expo.easeInOut,
        stagger :.2
        
    })
    tl.from("#herofooter",{
        y:-10,
        opacity:0,
        ease:Expo.easeInOut,
        duration :1.5,
        delay :-1.2
    })
}
  function circleMouseFollower(){
     window.addEventListener("mousemove", function(dets){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      })
    }
       circleMouseFollower();
       firstPageAnimation();

       //ab hum wo image wla bnayange , teeno elem ko select krenge aur teeni pe mouse move wla lagayenge, ab mouse move hone pr uski details chahiye hogi  
 document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot =0;
    
    elem.addEventListener("mouseleave", function(dets){
       gsap.to(elem.querySelector("img"),{
        opacity : 0, 
        ease : Power3 ,
        duration:1,
        
       });
    });

     elem.addEventListener("mousemove", function(dets){
        let diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
       gsap.to(elem.querySelector("img"),{
        opacity : 1, 
        ease : Power3 ,
        top : diff  ,
        left : dets.clientX,
        rotate :gsap.utils.clamp(-20 ,20 , diffrot *0.8),
       });
    });
 });
