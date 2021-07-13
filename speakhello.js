(function(window){
   var helloSpeaker = {}
   var speakWords = "Hello"
   
    helloSpeaker.bye = function(name){
       console.log(speakWords + " " + name)
   }
   window.helloSpeaker = helloSpeaker
})(window); 


   



