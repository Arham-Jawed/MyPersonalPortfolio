let fixer = () => {
  let mouser = document.querySelector("#fixer");
  window.addEventListener("mousemove", function (dets) {
    let Xaxis = dets.clientX;
    let Yaxis = dets.clientY;
    mouser.style.transform = `translate(-50%,-50%) translate(${dets.clientX}px,${dets.clientY}px)`;
  });
};
fixer();

let anima = () => {
  let nav = document.querySelector("nav");
  let heading = document.querySelector(".main-section>h1");
  let para = document.querySelector(".main-section>p");
  gsap.from( nav , {
    y: "-100%",
    duration: 2,
  });
  gsap.from(heading, {
    x: "-100%",
    duration: 2,
  });
  gsap.from( para,{
    opacity : 0,
    y:"80%",
    duration:2,
  })
};
anima();

let anima2 = ()=>{
  let tl = gsap.timeline({
    scrollTrigger : {
      trigger : ".container-1",
      start:"top 80%",
      end:"bottom 80%",
      scrub : 4,
    }
  })
  tl.from(".container-1",{
    x:"-100%",
    duration:2,
  })
  let tl2 = gsap.timeline({
    scrollTrigger : {
      trigger : ".container-2",
      start:"top 80%",
      end:"bottom 80%",
      scrub : 4,
    }
  })
  tl.from(".container-2",{
    x:"100%",
    duration:2,
  })
  let tl3 = gsap.timeline({
    scrollTrigger : {
      trigger : ".container-3",
      start:"top 30%",
      scrub : 4,
    }
  })
  tl.from(".container-3",{
    x:"-100%",
    duration:2,
  })
  
}
anima2()