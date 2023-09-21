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
  0x00000360, /* ratio 55.56 % */
  0xB8001700, 0x80088452, 0x00E4003A, 0x0E800308, 0xDE003480, 0xA0037000, 0x458183E2,
  0xC84C1C86, 0x86C4CCB1, 0xA0004000, 0x1B4010F2, 0x122B1E00, 0x22A3A8C0, 0x9F180480,
  0xB112647C, 0x13971C26, 0xE9A93A30, 0x9A452650, 0x0CDE2512, 0xC98F31F2, 0x02530A9A,
  0xE11180C0, 0x410B324D, 0x1069147A, 0x0E8642A1, 0x28A44A21, 0x89470CD2, 0x3C564527,
  0x43A45180, 0x90016289, 0xA3E498C0, 0xA1128543, 0x52031C22, 0x1E9147EB, 0x52948A1D,
  0xB4542293, 0xBC323400, 0x5D2210A9, 0xD4E776BA, 0xA30108AC, 0x21513646, 0x7509142A,
  0x089A002A, 0x810D2A29, 0xC2C80A71, 0x0484CF1F, 0x43236510, 0x8EF30E85, 0xC5D129DE,
  0x51A31968, 0x77ED8000, 0x203B49F4, 0xA0CCB853, 0x3468A4B3, 0x1D6E4520, 0x642A262D,
  0x4A4F22A8, 0x21920CCC, 0x23158A44, 0xF1E92460, 0x50C04DE4, 0x62B48A21, 0xA562801C,
  0xF47ED81D, 0x452151EA, 0x46A99086, 0xB2D748A5, 0x9722AF44, 0x90EC5544, 0x108F702E,
  0xC824C22B, 0x8643B21D, 0x915431B8, 0x74910440, 0x018268DF, 0x15641900, 0x15518029,
  0x91F1AD1F, 0x547C7744, 0x458E0591, 0x0B441275, 0x679A34A2, 0x4005B9CE, 0xE880000B,
  0x458A4521, 0x0C642197, 0x68D95421, 0x1C547906, 0x66298A42, 0x600E4554, 0x2C878424,
  0x69E3B68E, 0x61244920, 0xD4601445, 0xD22F4D44, 0x3491DA37, 0x0014877A, 0xE12629A2,
  0x4748008D, 0x9D145110, 0x3073D1F5, 0x449B8002, 0x24300157, 0x27881200, 0x7E1F981A,
  0x5C6E1516, 0x9500094A, 0xA3B41265, 0x66815047, 0xA9279A5F, 0x2E79D0C6, 0x5499D035,
  0x1C04D51D, 0x08095043, 0x29046340, 0x22689C36, 0x68E0A559, 0x9699A15E, 0x0404004B,
  0x00000000
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
static const XStringRes _Const000C = { _StringsDefault0, 0x005B };
static const XStringRes _Const000D = { _StringsDefault0, 0x007F };
static const XStringRes _Const000E = { _StringsDefault0, 0x008F };
static const XStringRes _Const000F = { _StringsDefault0, 0x00B0 };
static const XStringRes _Const0010 = { _StringsDefault0, 0x00C9 };
static const XStringRes _Const0011 = { _StringsDefault0, 0x00DA };
static const XStringRes _Const0012 = { _StringsDefault0, 0x00F7 };
static const XStringRes _Const0013 = { _StringsDefault0, 0x0100 };
static const XStringRes _Const0014 = { _StringsDefault0, 0x010B };
static const XStringRes _Const0015 = { _StringsDefault0, 0x0115 };
static const XStringRes _Const0016 = { _StringsDefault0, 0x012B };
static const XStringRes _Const0017 = { _StringsDefault0, 0x013C };
static const XStringRes _Const0018 = { _StringsDefault0, 0x014A };
static const XStringRes _Const0019 = { _StringsDefault0, 0x015E };
static const XStringRes _Const001A = { _StringsDefault0, 0x016F };
static const XStringRes _Const001B = { _StringsDefault0, 0x0181 };
static const XStringRes _Const001C = { _StringsDefault0, 0x0193 };
static const XStringRes _Const001D = { _StringsDefault0, 0x01A0 };

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
  CoreGroup__Add( _this, ((CoreView)&_vthis->DurationSlider ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_vthis->CurrentTimeSlider ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_vthis->DurationLabel ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_vthis->CurrentTimeLabel ), 0 );
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

/* 'C' function for method : 'Simulation::DeviceClass.Pause()' */
void SimulationDeviceClass_Pause( ApplicationDeviceClass _this )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  ApplicationDeviceClass_UpdatePlayerState( _this, ApplicationStatePaused );
  EwSignal( EwNewSlot( &_vthis->PlayEffect, EffectsEffect_StopEffect ), ((XObject)_this ));
}

/* 'C' function for method : 'Simulation::DeviceClass.GetTitleById()' */
XString SimulationDeviceClass_GetTitleById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  switch ( aArg1 )
  {
    case 0 :
      return EwLoadString( &_Const000C );

    case 1 :
      return EwLoadString( &_Const000D );

    case 2 :
      return EwLoadString( &_Const000E );

    case 3 :
      return EwLoadString( &_Const000F );

    case 4 :
      return EwLoadString( &_Const0010 );

    case 5 :
      return EwLoadString( &_Const0011 );

    case 6 :
      return EwLoadString( &_Const0012 );

    case 7 :
      return EwLoadString( &_Const0013 );

    default : 
      return EwLoadString( &_Const0014 );
  }
}

/* 'C' function for method : 'Simulation::DeviceClass.GetArtistById()' */
XString SimulationDeviceClass_GetArtistById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  switch ( aArg1 )
  {
    case 0 :
      return EwLoadString( &_Const0015 );

    case 1 :
      return EwLoadString( &_Const0016 );

    case 2 :
      return EwLoadString( &_Const0017 );

    case 3 :
      return EwLoadString( &_Const0018 );

    case 4 :
      return EwLoadString( &_Const0019 );

    case 5 :
      return EwLoadString( &_Const001A );

    case 6 :
      return EwLoadString( &_Const001B );

    case 7 :
      return EwLoadString( &_Const001C );

    default : 
      return EwLoadString( &_Const0014 );
  }
}

/* 'C' function for method : 'Simulation::DeviceClass.GetSongById()' */
XString SimulationDeviceClass_GetSongById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  return EwConcatString( EwLoadString( &_Const001D ), EwNewStringInt( aArg1, 0, 
    10 ));
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

/* 'C' function for method : 'Simulation::DeviceClass.GetSizeOfList()' */
XInt32 SimulationDeviceClass_GetSizeOfList( ApplicationDeviceClass _this )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  return 8;
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
  SimulationDeviceClass_GetTitleById,
  SimulationDeviceClass_GetArtistById,
  SimulationDeviceClass_GetSongById,
  SimulationDeviceClass_GetSizeOfList,
EW_END_OF_VCLASS( SimulationDeviceClass )

/* Embedded Wizard */
