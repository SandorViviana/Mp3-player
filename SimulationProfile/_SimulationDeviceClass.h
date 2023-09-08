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

#ifndef _SimulationDeviceClass_H
#define _SimulationDeviceClass_H

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

#include "_ApplicationDeviceClass.h"
#include "_EffectsInt32Effect.h"


/* Deklaration of class variant : 'Simulation::DeviceClass' */
EW_DEFINE_VFIELDS( SimulationDeviceClass, XObject, ApplicationDeviceClass )
  EW_OBJECT  ( PlayEffect,      EffectsInt32Effect )
  EW_VARIABLE( isPlayEffect,    XBool )
EW_END_OF_VFIELDS( SimulationDeviceClass )

/* Virtual Method Table (VMT) for the class variant : 'Simulation::DeviceClass' */
EW_DEFINE_VMETHODS( SimulationDeviceClass, XObject, ApplicationDeviceClass )
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
EW_END_OF_VMETHODS( SimulationDeviceClass )

/* 'C' function for method : 'Simulation::DeviceClass.IntToTimeString()' */
XString SimulationDeviceClass_IntToTimeString( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* 'C' function for method : 'Simulation::DeviceClass.Play()' */
void SimulationDeviceClass_Play( ApplicationDeviceClass _this );

/* 'C' function for method : 'Simulation::DeviceClass.LoopTrack()' */
void SimulationDeviceClass_LoopTrack( ApplicationDeviceClass _this );

/* 'C' function for method : 'Simulation::DeviceClass.UpdateCurrentTime()' */
void SimulationDeviceClass_UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue );

/* 'C' function for method : 'Simulation::DeviceClass.UpdateTimeFromSlider()' */
void SimulationDeviceClass_UpdateTimeFromSlider( ApplicationDeviceClass _this, XInt32 
  aArg1 );

/* 'C' function for method : 'Simulation::DeviceClass.UpdateDuration()' */
void SimulationDeviceClass_UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue );

/* 'C' function for method : 'Simulation::DeviceClass.InitSlot()' */
void SimulationDeviceClass_InitSlot( ApplicationDeviceClass _this, XObject sender );

/* 'C' function for method : 'Simulation::DeviceClass.OnPlayEffect()' */
void SimulationDeviceClass_OnPlayEffect( ApplicationDeviceClass _this, XObject sender );

/* 'C' function for method : 'Simulation::DeviceClass.Pause()' */
void SimulationDeviceClass_Pause( ApplicationDeviceClass _this );

/* 'C' function for method : 'Simulation::DeviceClass.OnFinishEffect()' */
void SimulationDeviceClass_OnFinishEffect( ApplicationDeviceClass _this, XObject 
  sender );

#ifdef __cplusplus
  }
#endif

#endif /* _SimulationDeviceClass_H */

/* Embedded Wizard */
