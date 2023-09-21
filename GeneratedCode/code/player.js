//import {SongList} from "./files";

var EmWiPlayer={



 play:function(){
    var audiotrack= document.getElementById("audio");
    audiotrack.play();
    console.log("play");
},

pause:function(){
    var audiotrack= document.getElementById("audio");
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
setSource:function(url){
    var audioPlayer=document.getElementById("audio");
    audioPlayer.src=url;
},
initialize:function (){
    
    var audioPlayer=document.getElementById("audio");
   // audioPlayer.src="Dream_Theater-Breaking_All_Illusions.mp3";
   //audioPlayer.src=SongList.getSongAtIndex(index);
   //audioPlayer.src=getSongAtIndex(index);
    // time update
    audioPlayer.ontimeupdate=function(){
        var autoobj = EmWiApp._GetAutoObject( EmWiApp.Application.Device);        
        if ( autoobj )  {
            
            autoobj.UpdateCurrentTime(audioPlayer.currentTime); 
            EmWiApp._RequestUpdate();          
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