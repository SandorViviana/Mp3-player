/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 12.05
* Profile  : SimulationProfile
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

#ifndef _ApplicationDeviceClass_H
#define _ApplicationDeviceClass_H

#ifdef __cplusplus
  extern "C"
  {
#endif

#include "ewrte.h"
#if ( EW_RTE_VERSION >> 16 ) != 12
  #error Wrong version of Embedded Wizard Runtime Environment.
#endif

#include "ewgfx.h"
#if ( EW_GFX_VERSION >> 16 ) != 12
  #error Wrong version of Embedded Wizard Graphics Engine.
#endif

#include "_TemplatesDeviceClass.h"

/* Forward declaration of the class Application::DeviceClass */
#ifndef _ApplicationDeviceClass_
  EW_DECLARE_CLASS( ApplicationDeviceClass )
#define _ApplicationDeviceClass_
#endif


/* Deklaration of class : 'Application::DeviceClass' */
EW_DEFINE_FIELDS( ApplicationDeviceClass, TemplatesDeviceClass )
  EW_VTHISPTR()
  EW_PROPERTY( TitleOfTrack,    XString )
  EW_PROPERTY( Artist,          XString )
  EW_PROPERTY( Src,             XString )
  EW_PROPERTY( PlayerState,     XEnum )
  EW_PROPERTY( CurrentTime,     XInt32 )
  EW_PROPERTY( Duration,        XInt32 )
  EW_PROPERTY( CurrentFileIndex, XInt32 )
  EW_PROPERTY( Loop,            XBool )
EW_END_OF_FIELDS( ApplicationDeviceClass )

/* Virtual Method Table (VMT) for the class : 'Application::DeviceClass' */
EW_DEFINE_METHODS( ApplicationDeviceClass, TemplatesDeviceClass )
  EW_METHOD( IntToTimeString,   XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( Play,              void )( ApplicationDeviceClass _this )
  EW_METHOD( Pause,             void )( ApplicationDeviceClass _this )
  EW_METHOD( LoopTrack,         void )( ApplicationDeviceClass _this )
  EW_METHOD( UpdateCurrentTime, void )( ApplicationDeviceClass _this, XInt32 aNewValue )
  EW_METHOD( UpdateTimeFromSlider, void )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( UpdateDuration,    void )( ApplicationDeviceClass _this, XInt32 aNewValue )
  EW_METHOD( InitSlot,          void )( ApplicationDeviceClass _this, XObject sender )
  EW_METHOD( GetTitleById,      XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( GetArtistById,     XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( GetSongById,       XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( GetSizeOfList,     XInt32 )( ApplicationDeviceClass _this )
EW_END_OF_METHODS( ApplicationDeviceClass )

/* Variant Dispatch Method Table for the class : 'Application::DeviceClass' */
EW_DEFINE_DISPATCHER( ApplicationDeviceClass, TemplatesDeviceClass )
  EW_METHOD( IntToTimeString,   XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( Play,              void )( ApplicationDeviceClass _this )
  EW_METHOD( Pause,             void )( ApplicationDeviceClass _this )
  EW_METHOD( LoopTrack,         void )( ApplicationDeviceClass _this )
  EW_METHOD( UpdateCurrentTime, void )( ApplicationDeviceClass _this, XInt32 aNewValue )
  EW_METHOD( UpdateTimeFromSlider, void )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( UpdateDuration,    void )( ApplicationDeviceClass _this, XInt32 aNewValue )
  EW_METHOD( InitSlot,          void )( ApplicationDeviceClass _this, XObject sender )
  EW_METHOD( GetTitleById,      XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( GetArtistById,     XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( GetSongById,       XString )( ApplicationDeviceClass _this, XInt32 
    aArg1 )
  EW_METHOD( GetSizeOfList,     XInt32 )( ApplicationDeviceClass _this )
EW_END_OF_DISPATCHER( ApplicationDeviceClass )

/* 'C' function for method : 'Application::DeviceClass.Done()' */
void ApplicationDeviceClass_Done( ApplicationDeviceClass _this );

/* 'C' function for method : 'Application::DeviceClass.Init()' */
void ApplicationDeviceClass_Init( ApplicationDeviceClass _this, XHandle aArg );

/* 'C' function for method : 'Application::DeviceClass.OnSetPlayerState()' */
void ApplicationDeviceClass_OnSetPlayerState( ApplicationDeviceClass _this, XEnum 
  value );

/* 'C' function for method : 'Application::DeviceClass.OnGetPlayerState()' */
XEnum ApplicationDeviceClass_OnGetPlayerState( ApplicationDeviceClass _this );

/* 'C' function for method : 'Application::DeviceClass.OnSetTitleOfTrack()' */
void ApplicationDeviceClass_OnSetTitleOfTrack( ApplicationDeviceClass _this, XString 
  value );

/* 'C' function for method : 'Application::DeviceClass.OnSetArtist()' */
void ApplicationDeviceClass_OnSetArtist( ApplicationDeviceClass _this, XString value );

/* 'C' function for method : 'Application::DeviceClass.IntToTimeString()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_IntToTimeString( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Implementation of the method : 'Application::DeviceClass.IntToTimeString()'. 
   The implementation has been moved here, because the origin function ApplicationDeviceClass_IntToTimeString() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___IntToTimeString( ApplicationDeviceClass _this, 
  XInt32 aArg1 );

/* Wrapper function for the virtual method : 'Application::DeviceClass.IntToTimeString()' */
XString ApplicationDeviceClass__IntToTimeString( void* _this, XInt32 aArg1 );

/* Equivalent of the event TimeUpdate */
void ApplicationDeviceClass_OnSetCurrentTime( ApplicationDeviceClass _this, XInt32 
  value );

/* 'C' function for method : 'Application::DeviceClass.OnGetCurrentTime()' */
XInt32 ApplicationDeviceClass_OnGetCurrentTime( ApplicationDeviceClass _this );

/* 'C' function for method : 'Application::DeviceClass.OnSetDuration()' */
void ApplicationDeviceClass_OnSetDuration( ApplicationDeviceClass _this, XInt32 
  value );

/* Wrapper function for the non virtual method : 'Application::DeviceClass.OnSetDuration()' */
void ApplicationDeviceClass__OnSetDuration( void* _this, XInt32 value );

/* The following define announces the presence of the method Application::DeviceClass.OnSetDuration(). */
#define _ApplicationDeviceClass__OnSetDuration_

/* 'C' function for method : 'Application::DeviceClass.OnGetDuration()' */
XInt32 ApplicationDeviceClass_OnGetDuration( ApplicationDeviceClass _this );

/* 'C' function for method : 'Application::DeviceClass.OnSetLoop()' */
void ApplicationDeviceClass_OnSetLoop( ApplicationDeviceClass _this, XBool value );

/* 'C' function for method : 'Application::DeviceClass.OnSetSrc()' */
void ApplicationDeviceClass_OnSetSrc( ApplicationDeviceClass _this, XString value );

/* 'C' function for method : 'Application::DeviceClass.Play()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_Play( ApplicationDeviceClass _this );

/* Implementation of the method : 'Application::DeviceClass.Play()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_Play() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___Play( ApplicationDeviceClass _this );

/* Wrapper function for the virtual method : 'Application::DeviceClass.Play()' */
void ApplicationDeviceClass__Play( void* _this );

/* The following define announces the presence of the method Application::DeviceClass.Play(). */
#define _ApplicationDeviceClass__Play_

/* 'C' function for method : 'Application::DeviceClass.Pause()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_Pause( ApplicationDeviceClass _this );

/* Implementation of the method : 'Application::DeviceClass.Pause()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_Pause() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___Pause( ApplicationDeviceClass _this );

/* Wrapper function for the virtual method : 'Application::DeviceClass.Pause()' */
void ApplicationDeviceClass__Pause( void* _this );

/* The following define announces the presence of the method Application::DeviceClass.Pause(). */
#define _ApplicationDeviceClass__Pause_

/* 'C' function for method : 'Application::DeviceClass.LoopTrack()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_LoopTrack( ApplicationDeviceClass _this );

/* Implementation of the method : 'Application::DeviceClass.LoopTrack()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_LoopTrack() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___LoopTrack( ApplicationDeviceClass _this );

/* Wrapper function for the virtual method : 'Application::DeviceClass.LoopTrack()' */
void ApplicationDeviceClass__LoopTrack( void* _this );

/* The following define announces the presence of the method Application::DeviceClass.LoopTrack(). */
#define _ApplicationDeviceClass__LoopTrack_

/* This method is intended to be called by the device to notify the GUI application 
   about an alternation of its setting or state value. */
void ApplicationDeviceClass_UpdatePlayerState( ApplicationDeviceClass _this, XEnum 
  aNewValue );

/* Wrapper function for the non virtual method : 'Application::DeviceClass.UpdatePlayerState()' */
void ApplicationDeviceClass__UpdatePlayerState( void* _this, XEnum aNewValue );

/* The following define announces the presence of the method Application::DeviceClass.UpdatePlayerState(). */
#define _ApplicationDeviceClass__UpdatePlayerState_

/* 'C' function for method : 'Application::DeviceClass.UpdateCurrentTime()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue );

/* Implementation of the method : 'Application::DeviceClass.UpdateCurrentTime()'. 
   The implementation has been moved here, because the origin function ApplicationDeviceClass_UpdateCurrentTime() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue );

/* Wrapper function for the virtual method : 'Application::DeviceClass.UpdateCurrentTime()' */
void ApplicationDeviceClass__UpdateCurrentTime( void* _this, XInt32 aNewValue );

/* The following define announces the presence of the method Application::DeviceClass.UpdateCurrentTime(). */
#define _ApplicationDeviceClass__UpdateCurrentTime_

/* 'C' function for method : 'Application::DeviceClass.UpdateTimeFromSlider()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_UpdateTimeFromSlider( ApplicationDeviceClass _this, 
  XInt32 aArg1 );

/* Implementation of the method : 'Application::DeviceClass.UpdateTimeFromSlider()'. 
   The implementation has been moved here, because the origin function ApplicationDeviceClass_UpdateTimeFromSlider() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___UpdateTimeFromSlider( ApplicationDeviceClass _this, 
  XInt32 aArg1 );

/* Wrapper function for the virtual method : 'Application::DeviceClass.UpdateTimeFromSlider()' */
void ApplicationDeviceClass__UpdateTimeFromSlider( void* _this, XInt32 aArg1 );

/* The following define announces the presence of the method Application::DeviceClass.UpdateTimeFromSlider(). */
#define _ApplicationDeviceClass__UpdateTimeFromSlider_

/* 'C' function for method : 'Application::DeviceClass.UpdateDuration()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue );

/* Implementation of the method : 'Application::DeviceClass.UpdateDuration()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_UpdateDuration() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue );

/* Wrapper function for the virtual method : 'Application::DeviceClass.UpdateDuration()' */
void ApplicationDeviceClass__UpdateDuration( void* _this, XInt32 aNewValue );

/* The following define announces the presence of the method Application::DeviceClass.UpdateDuration(). */
#define _ApplicationDeviceClass__UpdateDuration_

/* 'C' function for method : 'Application::DeviceClass.InitSlot()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_InitSlot( ApplicationDeviceClass _this, XObject sender );

/* Implementation of the method : 'Application::DeviceClass.InitSlot()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_InitSlot() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___InitSlot( ApplicationDeviceClass _this, XObject sender );

/* Wrapper function for the virtual method : 'Application::DeviceClass.InitSlot()' */
void ApplicationDeviceClass__InitSlot( void* _this, XObject sender );

/* 'C' function for method : 'Application::DeviceClass.OnSetCurrentFileIndex()' */
void ApplicationDeviceClass_OnSetCurrentFileIndex( ApplicationDeviceClass _this, 
  XInt32 value );

/* 'C' function for method : 'Application::DeviceClass.GetTitleById()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_GetTitleById( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Implementation of the method : 'Application::DeviceClass.GetTitleById()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetTitleById() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___GetTitleById( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetTitleById()' */
XString ApplicationDeviceClass__GetTitleById( void* _this, XInt32 aArg1 );

/* 'C' function for method : 'Application::DeviceClass.GetArtistById()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_GetArtistById( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Implementation of the method : 'Application::DeviceClass.GetArtistById()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetArtistById() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___GetArtistById( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetArtistById()' */
XString ApplicationDeviceClass__GetArtistById( void* _this, XInt32 aArg1 );

/* 'C' function for method : 'Application::DeviceClass.GetSongById()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_GetSongById( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Implementation of the method : 'Application::DeviceClass.GetSongById()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetSongById() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___GetSongById( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetSongById()' */
XString ApplicationDeviceClass__GetSongById( void* _this, XInt32 aArg1 );

/* 'C' function for method : 'Application::DeviceClass.CanGoBefore()' */
XBool ApplicationDeviceClass_CanGoBefore( ApplicationDeviceClass _this );

/* 'C' function for method : 'Application::DeviceClass.CanGoNext()' */
XBool ApplicationDeviceClass_CanGoNext( ApplicationDeviceClass _this );

/* 'C' function for method : 'Application::DeviceClass.GetSizeOfList()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XInt32 ApplicationDeviceClass_GetSizeOfList( ApplicationDeviceClass _this );

/* Implementation of the method : 'Application::DeviceClass.GetSizeOfList()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetSizeOfList() 
   does serve as the dispatcher to the derived class variants only. */
XInt32 ApplicationDeviceClass___GetSizeOfList( ApplicationDeviceClass _this );

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetSizeOfList()' */
XInt32 ApplicationDeviceClass__GetSizeOfList( void* _this );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationDeviceClass_H */

/* Embedded Wizard */
