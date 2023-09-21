var typed = new Typed('#element', {
  strings:["Frontend Developer", "Web Developer" , "Web Designer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
}); 

 $(document).ready(function(){
       var counter = 9;
   window.setInterval(function(){
    counter = counter - 3;
     if(counter>=0){
       document.getElementById('off').innerHTML=counter;
     }
     if (counter===0){
       counter=9;
     }
     $("#skills-section").load(window.location.href + " #skills-section" );
   }, 3000);
   });