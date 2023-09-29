//export var SongList={
list=new Array(
    {"src": "./media/Camille_Saint-Saens_-_introduction_et_rondo_capriccioso,_op._28.mp3",
      "title":"Introduction et Rondo Capriccioso",
      "artist": "Camille Saint-Saens"
    },
    { "src":"./media/Clair_de_lune_(Claude_Debussy)_Suite_bergamasque.mp3",
    "title":"Clair de Lune",
     "artist":  "Claude Debussy"},
    {"src":"./media/Bartok_Op._17,_Second_Movement.mp3",
     "title":"String Quartet No. 2 (2nd mvt)",
    "artist":"Bela Bartok"} ,
    {"src":"./media/Modest_Mussorgsky_-_night_on_bald_mountain.mp3",
     "title":"Night on bald mountain",
    "artist":"Modest Mussorgsky"},
    {"src":"./media/Dvorak_String_Serenade_II_Tempo_di_Valse.mp3",
     "title": "Tempo di Valse",
      "artist":"Antonin Dvorak"},
    {"src": "./media/Stravinsky_Infernal_Dance_of_Kastchei.mp3",  
     "title": "Infernal Dance of Kastchei",
    "artist":"Igor Stravinsky"},
    {"src":"./media/Smetana,_Má_vlast_-_Vltava_-_The_Moldau.mp3",
     "title":"Vltava",
     "artist":"Bedrich Smetana"},
     {"src": "./media/Stereohada - The Call.mp3",
      "title":"The Call",
       "artist":"Stereohada"}
    )
var SongList={


    getSizeOfList:function(){
        return list.length;
    },
    getSongAtIndex:function(index){
        console.log(list[index]);
        return list[index].src;
    },

    getTitleByIndex:function(index){
        return list[index].title;

    },

    getArtistByIndex:function(index){
        return list[index].artist;
    }

}