//export var SongList={
list=new Array(

        "Camille_Saint-Saens_-_introduction_et_rondo_capriccioso,_op._28.mp3",
        "Clair_de_lune_(Claude_Debussy)_Suite_bergamasque.mp3",
        "Bartok_Op._17,_Second_Movement.mp3",
        "Modest_Mussorgsky_-_night_on_bald_mountain.mp3",       
        "Dvorak_String_Serenade_II_Tempo_di_Valse.mp3",
        "Stravinsky_Infernal_Dance_of_Kastchei.mp3",       
        "Smetana,_Má_vlast_-_Vltava_-_The_Moldau.mp3",
        "Stereohada - The Call.mp3"
    )
var SongList={


    getSizeOfList:function(){
        return list.length;
    },
    getSongAtIndex:function(index){
        console.log(list[index]);
        return list[index];
    },

    getTitleByIndex:function(index){
        switch(index){
            case 0 : return "Introduction et Rondo Capriccioso";
            case 1 : return "Clair de Lune";
            case 2 : return "String Quartet No. 2 (2nd mvt)";
            case 3 :  return "Night on bald mountain";
            case 4 : return "Tempo di Valse";
            case 5 : return "Infernal Dance of Kastchei";
            case 6: return "Vltava";
            case 7: return "The Call";
            default : return "Unknown";
        }

    },

    getArtistByIndex:function(index){
        switch(index){
            case 0 : return "Camille Saint-Saens";
            case 1 : return "Claude Debussy";
            case 2 : return "Bela Bartok";
            case 3 : return "Modest Mussorgsky";
            case 4 : return "Antonin Dvorak";
            case 5: return "Igor Stravinsky";
            case 6: return "Bedrich Smetana";
            case 7: return "Stereohada";
            default : return "Unknown";
        }
    }

}