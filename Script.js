function setBackground(){
     const paragraphs=document.getElementById("body");
     //const paragraphs=document.getElementsByTagName("p");
   // paragraphs.style.background=('brown');
   // document.getElementById("body").style.backgroundColor=('red');
}

 const password=document.querySelector('input[type="password"]');
 password.addEventListener('focus',(event) => {event.target.style.background='orange';});
 password.addEventListener('blur',(event)=>{event.target.style.background='pink'});