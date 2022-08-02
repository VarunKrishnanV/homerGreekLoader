

let counter={
  value:0
};

let loaderDuration = 7;
let customEase = "M0,0 C0.126,0.382 0.591,0.192 0.646,0.402 0.714,0.664 0.818,1.001 1,1";


if(sessionStorage.getItem("visited") !== null){
    loaderDuration = 2;
    counter = {
        value : 75;
    }

}

function updateLoaderText(){
  let progress=Math.round(counter.value);
  $(".loader_number").text(progress);
}

let tl=gsap.timeline({});
tl.to(counter,{
  onUpdate:updateLoaderText,
  value:100,
  duration:loaderDuration,
  ease : CustomEase.create("custom", customEase) 
});

tl.to(
    ".loader_progress",
    {
        width: "100%",
        duration: loaderDuration,
        ease: CustomEase.create("custom", customEase),
    },
    0
);