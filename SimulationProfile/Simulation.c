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

#include "ewlocale.h"
#include "_ApplicationDeviceClass.h"
#include "_CoreView.h"
#include "_EffectsInt32Effect.h"
#include "_ResourcesFont.h"
#include "_SimulationApplication.h"
#include "_SimulationDeviceClass.h"
#include "_ViewsText.h"
#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetHorizontalSliderConfig.h"
#include "Application.h"
#include "Resources.h"
#include "Simulation.h"
#include "WidgetSet.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x000000B6, /* ratio 70.33 % */
  0xB8001700, 0x80088452, 0x00E4003A, 0x0E800308, 0xDE003480, 0xA0037000, 0x458183E2,
  0xC84C1C86, 0x86C4CCB1, 0xA0004000, 0x1B4010F2, 0x122B1E00, 0x22A3A8C0, 0x9F180480,
  0xB112647C, 0x13971C26, 0xE9A93A30, 0x9A452650, 0x0CDE2512, 0xC98F31F2, 0x02530A9A,
  0xE11180C0, 0x410B324D, 0x1069147A, 0x0E8642A1, 0x28A44A21, 0x89470CD2, 0x3C564527,
  0x43A45180, 0x565D6289, 0x0000080C, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 1600, 480 }};
static const XRect _Const0001 = {{ 856, 157 }, { 1056, 207 }};
static const XRect _Const0002 = {{ 858, 218 }, { 1058, 268 }};
static const XRect _Const0003 = {{ 1059, 168 }, { 1192, 199 }};
static const XStringRes _Const0004 = { _StringsDefault0, 0x0002 };
static const XRect _Const0005 = {{ 1062, 227 }, { 1195, 258 }};
static const XStringRes _Const0006 = { _StringsDefault0, 0x000D };
static const XStringRes _Const0007 = { _StringsDefault0, 0x001C };
static const XStringRes _Const0008 = { _StringsDefault0, 0x0020 };
static const XStringRes _Const0009 = { _StringsDefault0, 0x0029 };
static const XStringRes _Const000A = { _StringsDefault0, 0x003C };
static const XStringRes _Const000B = { _StringsDefault0, 0x0054 };

/* Initializer for the class variant 'Simulation::Application' */
void SimulationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aLink );

  /* Allow the Immediate Garbage Collection to evalute the members of this class variant. */
  _vthis->_.XObject._.GCT = EW_VCLASS_GCT( SimulationApplication );

  /* ... then construct all embedded objects */
  WidgetSetHorizontalSlider__Init( &_vthis->DurationSlider, &_this->_.XObject, 0 );
  WidgetSetHorizontalSlider__Init( &_vthis->CurrentTimeSlider, &_this->_.XObject, 0 );
  ViewsText__Init( &_vthis->DurationLabel, &_this->_.XObject, 0 );
  ViewsText__Init( &_vthis->CurrentTimeLabel, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _vthis->_.VMT = EW_VCLASS( SimulationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_vthis->DurationSlider, _Const0001 );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_vthis->DurationSlider, 500 );
  WidgetSetHorizontalSlider_OnSetCurrentValue( &_vthis->DurationSlider, 1 );
  CoreRectView__OnSetBounds( &_vthis->CurrentTimeSlider, _Const0002 );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_vthis->CurrentTimeSlider, 100 );
  CoreRectView__OnSetBounds( &_vthis->DurationLabel, _Const0003 );
  ViewsText_OnSetString( &_vthis->DurationLabel, EwLoadString( &_Const0004 ));
  CoreRectView__OnSetBounds( &_vthis->CurrentTimeLabel, _Const0005 );
  ViewsText_OnSetString( &_vthis->CurrentTimeLabel, EwLoadString( &_Const0006 ));
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->DurationSlider ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->CurrentTimeSlider ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->DurationLabel ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->CurrentTimeLabel ), 0 );
  WidgetSetHorizontalSlider_OnSetOutlet( &_vthis->DurationSlider, EwNewRef( _this, 
  SimulationApplication_OnGetDuration, SimulationApplication_OnSetDuration ));
  WidgetSetHorizontalSlider_OnSetAppearance( &_vthis->DurationSlider, EwGetAutoObject( 
  &WidgetSetHorizontalSlider_Medium, WidgetSetHorizontalSliderConfig ));
  WidgetSetHorizontalSlider_OnSetOutlet( &_vthis->CurrentTimeSlider, EwNewRef( _this, 
  SimulationApplication_OnGetCurrentTime, SimulationApplication_OnSetCurrentTime ));
  WidgetSetHorizontalSlider_OnSetAppearance( &_vthis->CurrentTimeSlider, EwGetAutoObject( 
  &WidgetSetHorizontalSlider_Medium, WidgetSetHorizontalSliderConfig ));
  ViewsText_OnSetFont( &_vthis->DurationLabel, EwLoadResource( &ResourcesFontMedium, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_vthis->CurrentTimeLabel, EwLoadResource( &ResourcesFontMedium, 
  ResourcesFont ));

  /* Call the user defined constructor */
  SimulationApplication_Init( _this, aArg );
}

/* Re-Initializer for the class variant 'Simulation::Application' */
void SimulationApplication__ReInit( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* ... then re-construct all embedded objects */
  WidgetSetHorizontalSlider__ReInit( &_vthis->DurationSlider );
  WidgetSetHorizontalSlider__ReInit( &_vthis->CurrentTimeSlider );
  ViewsText__ReInit( &_vthis->DurationLabel );
  ViewsText__ReInit( &_vthis->CurrentTimeLabel );
}

/* Finalizer method for the class variant 'Simulation::Application' */
void SimulationApplication__Done( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Finalize this class */
  _vthis->_.VMT = 0;

  /* Finalize all embedded objects */
  WidgetSetHorizontalSlider__Done( &_vthis->DurationSlider );
  WidgetSetHorizontalSlider__Done( &_vthis->CurrentTimeSlider );
  ViewsText__Done( &_vthis->DurationLabel );
  ViewsText__Done( &_vthis->CurrentTimeLabel );
}

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void SimulationApplication_Init( ApplicationApplication _this, XHandle aArg )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  EwAttachRefObserver( EwNewSlot( _this, SimulationApplication_OnCurrentTimeUpdate ), 
    EwNewRef( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), ApplicationDeviceClass_OnGetCurrentTime, 
    ApplicationDeviceClass_OnSetCurrentTime ), 0 );
  EwAttachRefObserver( EwNewSlot( _this, SimulationApplication_OnDurationUpdate ), 
    EwNewRef( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), ApplicationDeviceClass_OnGetDuration, 
    ApplicationDeviceClass_OnSetDuration ), 0 );
  SimulationApplication_OnSetDuration( _this, 100 );
}

/* 'C' function for method : 'Simulation::Application.OnSetCurrentTime()' */
void SimulationApplication_OnSetCurrentTime( ApplicationApplication _this, XInt32 
  value )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  if ( _vthis->CurrentTime == value )
    return;

  _vthis->CurrentTime = value;
  ApplicationDeviceClass__UpdateCurrentTime( EwGetAutoObject( &ApplicationDevice, 
  ApplicationDeviceClass ), value );
}

/* 'C' function for method : 'Simulation::Application.OnGetCurrentTime()' */
XInt32 SimulationApplication_OnGetCurrentTime( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  return _vthis->CurrentTime;
}

/* 'C' function for method : 'Simulation::Application.OnSetDuration()' */
void SimulationApplication_OnSetDuration( ApplicationApplication _this, XInt32 value )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  if ( _vthis->Duration == value )
    return;

  _vthis->Duration = value;
  ApplicationDeviceClass__UpdateDuration( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), 
  value );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_vthis->CurrentTimeSlider, value );
}

/* 'C' function for method : 'Simulation::Application.OnGetDuration()' */
XInt32 SimulationApplication_OnGetDuration( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  return _vthis->Duration;
}

/* 'C' function for method : 'Simulation::Application.OnCurrentTimeUpdate()' */
void SimulationApplication_OnCurrentTimeUpdate( ApplicationApplication _this, XObject 
  sender )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetHorizontalSlider_OnSetCurrentValue( &_vthis->CurrentTimeSlider, EwGetAutoObject( 
  &ApplicationDevice, ApplicationDeviceClass )->CurrentTime );
}

/* 'C' function for method : 'Simulation::Application.OnDurationUpdate()' */
void SimulationApplication_OnDurationUpdate( ApplicationApplication _this, XObject 
  sender )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetHorizontalSlider_OnSetCurrentValue( &_vthis->DurationSlider, EwGetAutoObject( 
  &ApplicationDevice, ApplicationDeviceClass )->Duration );
}

/* Variants derived from the class : 'Simulation::Application' */
EW_DEFINE_CLASS_VARIANTS( SimulationApplication )
EW_END_OF_CLASS_VARIANTS( SimulationApplication )

/* Virtual Method Table (VMT) for the class variant : 'Simulation::Application' */
EW_DEFINE_VCLASS( SimulationApplication, XObject, ApplicationApplication, DurationSlider, 
                  CurrentTime, CurrentTime, CurrentTime, CurrentTime, CurrentTime, 
                  "Simulation::Application" )
EW_END_OF_VCLASS( SimulationApplication )

/* Initializer for the class variant 'Simulation::DeviceClass' */
void SimulationDeviceClass__Init( ApplicationDeviceClass _this, XObject aLink, XHandle aArg )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aLink );
  EW_UNUSED_ARG( aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class variant. */
  _vthis->_.XObject._.GCT = EW_VCLASS_GCT( SimulationDeviceClass );

  /* ... then construct all embedded objects */
  EffectsInt32Effect__Init( &_vthis->PlayEffect, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _vthis->_.VMT = EW_VCLASS( SimulationDeviceClass );

  /* ... and initialize objects, variables, properties, etc. */
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_vthis->PlayEffect, 1 );
  _vthis->PlayEffect.Value2 = 255;
  _vthis->PlayEffect.Value1 = 0;
  _vthis->PlayEffect.Super1.OnFinished = EwNewSlot( _this, SimulationDeviceClass_OnFinishEffect );
  _vthis->PlayEffect.Super1.OnAnimate = EwNewSlot( _this, SimulationDeviceClass_OnPlayEffect );
}

/* Re-Initializer for the class variant 'Simulation::DeviceClass' */
void SimulationDeviceClass__ReInit( ApplicationDeviceClass _this )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  /* ... then re-construct all embedded objects */
  EffectsInt32Effect__ReInit( &_vthis->PlayEffect );
}

/* Finalizer method for the class variant 'Simulation::DeviceClass' */
void SimulationDeviceClass__Done( ApplicationDeviceClass _this )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  /* Finalize this class */
  _vthis->_.VMT = 0;

  /* Finalize all embedded objects */
  EffectsInt32Effect__Done( &_vthis->PlayEffect );
}

/* 'C' function for method : 'Simulation::DeviceClass.IntToTimeString()' */
XString SimulationDeviceClass_IntToTimeString( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  return EwConcatString( EwConcatString( EwNewStringInt( aArg1 / 60, 0, 10 ), EwLoadString( 
    &_Const0007 )), EwNewStringInt( aArg1 % 60, 0, 10 ));
}

/* 'C' function for method : 'Simulation::DeviceClass.Play()' */
void SimulationDeviceClass_Play( ApplicationDeviceClass _this )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  _vthis->PlayEffect.Value1 = _this->CurrentTime;
  _vthis->PlayEffect.Value2 = _this->Duration;
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_vthis->PlayEffect, ( _this->Duration 
  - _this->CurrentTime ) * 1000 );
  ApplicationDeviceClass_UpdatePlayerState( _this, ApplicationStatePlaying );
  EwSignal( EwNewSlot( &_vthis->PlayEffect, EffectsEffect_StartEffect ), ((XObject)_this ));
}

/* 'C' function for method : 'Simulation::DeviceClass.LoopTrack()' */
void SimulationDeviceClass_LoopTrack( ApplicationDeviceClass _this )
{
  ApplicationDeviceClass_OnSetLoop( _this, (XBool)!_this->Loop );

  if ( _this->Loop )
    EwTrace( "%s", EwLoadString( &_Const0008 ));
  else
    EwTrace( "%s", EwLoadString( &_Const0009 ));
}

/* 'C' function for method : 'Simulation::DeviceClass.UpdateCurrentTime()' */
void SimulationDeviceClass_UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  if ( !_vthis->isPlayEffect && ( _this->PlayerState == ApplicationStatePlaying ))
    EwSignal( EwNewSlot( &_vthis->PlayEffect, EffectsEffect_StopEffect ), ((XObject)_this ));

  ApplicationDeviceClass___UpdateCurrentTime((ApplicationDeviceClass)_this, aNewValue );

  if ( !_vthis->isPlayEffect && ( _this->PlayerState == ApplicationStatePlaying ))
    ApplicationDeviceClass__Play( _this );
}

/* 'C' function for method : 'Simulation::DeviceClass.UpdateTimeFromSlider()' */
void SimulationDeviceClass_UpdateTimeFromSlider( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  ApplicationDeviceClass__UpdateCurrentTime( _this, aArg1 );
}

/* 'C' function for method : 'Simulation::DeviceClass.UpdateDuration()' */
void SimulationDeviceClass_UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  if ( aNewValue != _this->Duration )
  {
    EwTrace( "%s%i%s%i", EwLoadString( &_Const000A ), _this->Duration, EwLoadString( 
      &_Const000B ), aNewValue );
    _this->Duration = aNewValue;
    _vthis->PlayEffect.Value2 = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationDeviceClass_OnGetDuration, 
      ApplicationDeviceClass_OnSetDuration ), 0 );
    EwNotifyObservers( 124 );
  }
}

/* 'C' function for method : 'Simulation::DeviceClass.InitSlot()' */
void SimulationDeviceClass_InitSlot( ApplicationDeviceClass _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( sender );
}

/* 'C' function for method : 'Simulation::DeviceClass.OnPlayEffect()' */
void SimulationDeviceClass_OnPlayEffect( ApplicationDeviceClass _this, XObject sender )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  _vthis->isPlayEffect = 1;
  ApplicationDeviceClass__UpdateCurrentTime( _this, _vthis->PlayEffect.Value );
  _vthis->isPlayEffect = 0;
}

/* 'C' function for method : 'Simulation::DeviceClass.Pause()' */
void SimulationDeviceClass_Pause( ApplicationDeviceClass _this )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  ApplicationDeviceClass_UpdatePlayerState( _this, ApplicationStatePaused );
  EwSignal( EwNewSlot( &_vthis->PlayEffect, EffectsEffect_StopEffect ), ((XObject)_this ));
}

/* 'C' function for method : 'Simulation::DeviceClass.OnFinishEffect()' */
void SimulationDeviceClass_OnFinishEffect( ApplicationDeviceClass _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->Loop )
  {
    ApplicationDeviceClass__UpdateCurrentTime( _this, 0 );
    ApplicationDeviceClass__Play( _this );
  }
  else
    ApplicationDeviceClass_UpdatePlayerState( _this, ApplicationStateEnded );
}

/* Variants derived from the class : 'Simulation::DeviceClass' */
EW_DEFINE_CLASS_VARIANTS( SimulationDeviceClass )
EW_END_OF_CLASS_VARIANTS( SimulationDeviceClass )

/* Virtual Method Table (VMT) for the class variant : 'Simulation::DeviceClass' */
EW_DEFINE_VCLASS( SimulationDeviceClass, XObject, ApplicationDeviceClass, PlayEffect, 
                  isPlayEffect, isPlayEffect, isPlayEffect, isPlayEffect, isPlayEffect, 
                  "Simulation::DeviceClass" )
  SimulationDeviceClass_IntToTimeString,
  SimulationDeviceClass_Play,
  SimulationDeviceClass_Pause,
  SimulationDeviceClass_LoopTrack,
  SimulationDeviceClass_UpdateCurrentTime,
  SimulationDeviceClass_UpdateTimeFromSlider,
  SimulationDeviceClass_UpdateDuration,
  SimulationDeviceClass_InitSlot,
EW_END_OF_VCLASS( SimulationDeviceClass )

/* Embedded Wizard */
