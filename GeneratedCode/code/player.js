var EmWiPlayer={



 play:function(){
    var audiotrack= document.getElementById("audio");
    //de inceput animatia pentru vinil
    // element.classList.add('rotate')
    audiotrack.play();
    console.log("play");
},

pause:function(){
    var audiotrack= document.getElementById("audio");
    //de oprit animatia pentru vinil
     // element.classList.remove('rotate')
    audiotrack.pause();
    console.log("pause");
},

loop:function(){
    var audiotrack= document.getElementById("audio");
    audiotrack.loop=!audiotrack.loop;
    if(audiotrack.loop){
    console.log("loop");
    } 
  else {console.log("unloop");
  
  }
},
initialize:function (){
    var audioPlayer=document.getElementById("audio");
    audioPlayer.src="Dream_Theater-Breaking_All_Illusions.mp3";
    // time update
    audioPlayer.ontimeupdate=function(){
        var autoobj = EmWiApp._GetAutoObject( EmWiApp.Application.Device);        
        if ( autoobj )  {
            
            autoobj.UpdateCurrentTime(audioPlayer.currentTime); 
            EmWiApp._RequestUpdate();          
            //autoobj.currentTime=parseInt(audioPlayer.currentTime);
            //console.log(autoobj.currentTime);
            console.log("currentTime javascript event:"+audioPlayer.currentTime);
        }
    }
    // duration
    audioPlayer.addEventListener("loadedmetadata", function() {
        var autoobj = EmWiApp._GetAutoObject( EmWiApp.Application.Device);
        console.log("duration javascript: "+audioPlayer.duration);
        if ( autoobj )  {
            autoobj.UpdateDuration(parseInt(audioPlayer.duration));
            EmWiApp._RequestUpdate(); 
           // console.log("duration javascript: "+audioPlayer.duration);
           // console.log(autoobj.Duration);
        }
  });
 

},
seeking:function(timeSeeked){
    var audioPlayer=document.getElementById("audio");
    audioPlayer.currentTime=timeSeeked;
},
formatTime:function(duration){
    return new Date(duration*1000).toISOString().slice(14, 19);
}
}