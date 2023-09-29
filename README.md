# Mp3-player

## Introduction
### General information
The application is a simple audio player that plays the .mp3 files from a given list, displaying the title and the artist of the current track. The project also contains a simulation that allows the manipulation of the current track's duration through an additional control (the "track" is, in this case, a simple animation of a time counter, with no sound). The resolution is 800x480. 

### Technologies
The project was created in Embedded Wizard Studio Free (the graphic interface and simulation features) and Visual Studio Code (for the javascript functions of the audio tag in the WebGL profile).

## Features
* **The player** - the main screen of the application, displays the state of the playback: the current track (with title and artist), the possibility of accessing the previous or the next track in the list, if the track is looped, the current time in the playback and the duration of the track, if the playback is currently paused or playing. The last aspect is underlined though two different means: the icon of the button used to switch through main states and a simple animation imitating the behavior of a vinyl. The player supports seeking, pausing and resuming playing, looping and going backward and foreward in the list (if there is no such possibility since the track is either the first or the last in the playlist, the corresponding button is disabled). The buttons respond to user interaction when pressed. After the the last track in the list is played, the player returns automatically to the first track. 
  
![player_screen](https://github.com/SandorViviana/Mp3-player/assets/115501683/c7d694df-3fcc-487c-b57e-6e4e2dd5be28)

* **The list** - displays the available songs, highlighting the currently playing track. The currently playing track is ensured to be visible. The user can scroll through the list and select another song. On selection, the application will return automatically to the main screen. Another way to return to the main screen is a wipe down gesture - the symmetrical opposite of the gesture required to open the list from the player screen. 
  
![list_view](https://github.com/SandorViviana/Mp3-player/assets/115501683/ac1fe4ed-0695-4b88-9e89-f7450defe588)


## Appendix
The list of the tracks used and their licensing:
1. Camille Saint-Saens - Introduction and Rondo capriccioso (A minor), op. 28 (performed by Skidmore College Orchestra)- Public Domain
2. "Clair de lune" in the Suite bergamasque by Claude Debussy performed by Laurens Goedhart (pf) in 2011 - CC BY 3.0 DEED
3. Bela Bartok quartet number 2 op. 17, Second Movement: Allegro molto capriccioso, played by the Carmel Quartet - CC BY 3.0 DEED
4. Modest Mussorgsky - Night on Bald Mountain - Public Domain
5. The second movement of Antonín Dvořák's Serenade for Strings, op.22, in a rendition by Virtual Philharmonic Orchestra (Reinhold Behringer) - CC BY-SA 4.0 DEED 
6. "Infernal Dance of Kastchei" from Igor Stravinsky's The Firebird - Public Domain
7. "Vltava" (The Moldau), the second from Bedřich Smetana's set of six symphonic poems Má vlast in a rendition by Musopen Symphony Orchestra - CC0 1.0 DEED 
8. Stereohada - The call - Source: Free Music Archive - CC BY-NC-ND 4.0 Deed
   
The audio files were **not** remixed or transformed and their usage is non-commercial. 
