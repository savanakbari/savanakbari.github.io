$(document).ready(function(){
    $(".hello").typed({
        strings: ["Hello. ","Hola. ","Bonjour. ","Olá. "],
        typeSpeed: 85,
        backDelay: 1200,
        loop: true,
        backSpeed: 60,
        loopCount:false,
      });
});

$(document).ready(function(){
    $(".rotate").textrotator({
  animation: "flipUp", //  flip, flipUp spin.
  separator: ",", 
  speed: 2000 
});    
    });