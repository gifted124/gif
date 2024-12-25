
function fixed(){
 if(scrollY){
  document.getElementById('header').classList.add('header');
 }else{
  document.getElementById('header').classList.remove('header'); 
 }
}

function showCart(){
  document.getElementById('cartDiv').style.display = "block";
  document.querySelector('body').classList.add('newbody')
  // document.getElementById("cartDiv").style.transition = "5s";
  document.getElementById("overlay").style.display = "block";
}
function hideCart(){
  document.getElementById('cartDiv').style.display = "none";
  document.querySelector('body').classList.remove('newbody')
  document.getElementById("overlay").style.display = "none";
}

