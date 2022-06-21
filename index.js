// console.log("connected");
//render six circle with random color
//pick ans as rgb from any color assigned to rendered circles(ans)
//set ans in header
//add listener
    //pick clicked circle
    //find its rgb value
    //compare rgb value of clicked circle vs ans
    //if ans==clicked circle->clg(WIN)
    //else clg(TRY AGAIN)
    //reset button
    var container=document.querySelector(".container")
    var circleContainer=document.querySelector(".circles")
    var ans_Node=document.querySelector(".answer")
    var resetbuttonforstatus=document.querySelector(".resetbuttonforstatus")
    var refresh=document.querySelector(".refresh_button")
    
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
    function random_RGB_Generator(){
    return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`
    }
    function settingUpUi(){
   resetbuttonforstatus.innerHTML=""
    circleContainer.innerHTML=""
    refresh.innerHTML=""
    for(var i=0;i<6;i++){
        circleContainer.insertAdjacentHTML("beforeend",
        ` <div class="circle_wrapper flex">
        <div style=background:${random_RGB_Generator()} class="circle"><h2>Option-${i+1}<h2></div>
             </div>`);
             ''
    }
    circles=Array.from(document.querySelectorAll('.circle'));
    ans=(circles[Random_circle_for_ans].style.background)
    ans_Node.textContent=ans
    }
    // reload
    function refreshPage(){
        window.location.reload();
    } 
    
    var Random_circle_for_ans=getRandomInt(0,6);
    var ans=null;
    var circles=null;
    settingUpUi();
    var i=0;

circleContainer.addEventListener('click',function(e){
  if(Array.from(e.target.classList).includes("circle")){
      var ans_Picked=e.target.style.background
      if(ans_Picked===ans){
        circles.forEach(function(circle){
            if(circle.style.background!==ans){
                circle.style.opacity=0
            }    
        })
    
         container.style.background=ans;
        
         resetBTN.style.opacity=0;             
              while (i<1) {
                resetbuttonforstatus.insertAdjacentHTML("beforeend",
          `<div>
           <h3>STATUS:YOU WON <i class="fa fa-thumbs-up" aria-hidden="true"></i></h3></div>
              </div>`
              );
              refresh.insertAdjacentHTML("beforeend",
              ` <a onClick="window.location.reload()"><h4>PLAY AGAIN</h4></a>`)
            i++;
            }
      }
     
      else{
        e.target.style.opacity=0
      }
  }
})
var resetBTN=document.querySelector(".reset")
resetBTN.addEventListener('click',function(){
    settingUpUi()
container.style.background=null;
})