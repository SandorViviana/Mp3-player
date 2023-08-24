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
#include "_SimulationApplication.h"
#include "_SimulationDeviceClass.h"
#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetHorizontalSliderConfig.h"
#include "_WidgetSetRadioButton.h"
#include "_WidgetSetRadioButtonConfig.h"
#include "Application.h"
#include "Simulation.h"
#include "WidgetSet.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x0000002C, /* ratio 109.09 % */
  0xB8001500, 0x000A6452, 0x00DE003A, 0x4010B380, 0x00640019, 0x10481448, 0x0036000A,
  0x03C800C2, 0x37000D20, 0x1C48CE00, 0x00203129, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 1600, 480 }};
static const XRect _Const0001 = {{ 873, 37 }, { 1023, 73 }};
static const XStringRes _Const0002 = { _StringsDefault0, 0x0002 };
static const XRect _Const0003 = {{ 873, 91 }, { 1023, 127 }};
static const XStringRes _Const0004 = { _StringsDefault0, 0x000C };
static const XRect _Const0005 = {{ 878, 155 }, { 1078, 205 }};
static const XRect _Const0006 = {{ 873, 217 }, { 1073, 267 }};

/* Initializer for the class variant 'Simulation::Application' */
void SimulationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aLink );
  EW_UNUSED_ARG( aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class variant. */
  _vthis->_.XObject._.GCT = EW_VCLASS_GCT( SimulationApplication );

  /* ... then construct all embedded objects */
  WidgetSetRadioButton__Init( &_vthis->RadioButtonStopped, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_vthis->RadioButtonPlaying, &_this->_.XObject, 0 );
  WidgetSetHorizontalSlider__Init( &_vthis->DurationSlider, &_this->_.XObject, 0 );
  WidgetSetHorizontalSlider__Init( &_vthis->CurrentTimeSlider, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _vthis->_.VMT = EW_VCLASS( SimulationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_vthis->RadioButtonStopped, _Const0001 );
  WidgetSetRadioButton_OnSetLabel( &_vthis->RadioButtonStopped, EwLoadString( &_Const0002 ));
  CoreRectView__OnSetBounds( &_vthis->RadioButtonPlaying, _Const0003 );
  WidgetSetRadioButton_OnSetLabel( &_vthis->RadioButtonPlaying, EwLoadString( &_Const0004 ));
  CoreRectView__OnSetBounds( &_vthis->DurationSlider, _Const0005 );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_vthis->DurationSlider, 500 );
  CoreRectView__OnSetBounds( &_vthis->CurrentTimeSlider, _Const0006 );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_vthis->CurrentTimeSlider, 100 );
  _vthis->Duration = 100;
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->RadioButtonStopped ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->RadioButtonPlaying ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->DurationSlider ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_vthis->CurrentTimeSlider ), 0 );
  WidgetSetRadioButton_OnSetAppearance( &_vthis->RadioButtonStopped, EwGetAutoObject( 
  &WidgetSetRadioButton_Small, WidgetSetRadioButtonConfig ));
  WidgetSetRadioButton_OnSetAppearance( &_vthis->RadioButtonPlaying, EwGetAutoObject( 
  &WidgetSetRadioButton_Small, WidgetSetRadioButtonConfig ));
  WidgetSetHorizontalSlider_OnSetOutlet( &_vthis->DurationSlider, EwNewRef( _this, 
  SimulationApplication_OnGetDuration, SimulationApplication_OnSetDuration ));
  WidgetSetHorizontalSlider_OnSetAppearance( &_vthis->DurationSlider, EwGetAutoObject( 
  &WidgetSetHorizontalSlider_Medium, WidgetSetHorizontalSliderConfig ));
  WidgetSetHorizontalSlider_OnSetOutlet( &_vthis->CurrentTimeSlider, EwNewRef( _this, 
  SimulationApplication_OnGetCurrentTime, SimulationApplication_OnSetCurrentTime ));
  WidgetSetHorizontalSlider_OnSetAppearance( &_vthis->CurrentTimeSlider, EwGetAutoObject( 
  &WidgetSetHorizontalSlider_Medium, WidgetSetHorizontalSliderConfig ));
}

/* Re-Initializer for the class variant 'Simulation::Application' */
void SimulationApplication__ReInit( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* ... then re-construct all embedded objects */
  WidgetSetRadioButton__ReInit( &_vthis->RadioButtonStopped );
  WidgetSetRadioButton__ReInit( &_vthis->RadioButtonPlaying );
  WidgetSetHorizontalSlider__ReInit( &_vthis->DurationSlider );
  WidgetSetHorizontalSlider__ReInit( &_vthis->CurrentTimeSlider );
}

/* Finalizer method for the class variant 'Simulation::Application' */
void SimulationApplication__Done( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  /* Finalize this class */
  _vthis->_.VMT = 0;

  /* Finalize all embedded objects */
  WidgetSetRadioButton__Done( &_vthis->RadioButtonStopped );
  WidgetSetRadioButton__Done( &_vthis->RadioButtonPlaying );
  WidgetSetHorizontalSlider__Done( &_vthis->DurationSlider );
  WidgetSetHorizontalSlider__Done( &_vthis->CurrentTimeSlider );
}

/* 'C' function for method : 'Simulation::Application.OnSetCurrentTime()' */
void SimulationApplication_OnSetCurrentTime( ApplicationApplication _this, XInt32 
  value )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  if ( _vthis->CurrentTime == value )
    return;

  _vthis->CurrentTime = value;
  ApplicationDeviceClass_UpdateCurrentTime( EwGetAutoObject( &ApplicationDevice, 
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
  ApplicationDeviceClass_UpdateDuration( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), 
  value );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_vthis->CurrentTimeSlider, value );
}

/* 'C' function for method : 'Simulation::Application.OnGetDuration()' */
XInt32 SimulationApplication_OnGetDuration( ApplicationApplication _this )
{
  SimulationApplication _vthis = (SimulationApplication)_this->_vthis;

  return _vthis->Duration;
}

/* Variants derived from the class : 'Simulation::Application' */
EW_DEFINE_CLASS_VARIANTS( SimulationApplication )
EW_END_OF_CLASS_VARIANTS( SimulationApplication )

/* Virtual Method Table (VMT) for the class variant : 'Simulation::Application' */
EW_DEFINE_VCLASS( SimulationApplication, XObject, ApplicationApplication, RadioButtonStopped, 
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

/* 'C' function for method : 'Simulation::DeviceClass.Play()' */
void SimulationDeviceClass_Play( ApplicationDeviceClass _this )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  _vthis->PlayEffect.Value2 = _this->Duration;
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_vthis->PlayEffect, _this->Duration 
  * 1000 );
  EwSignal( EwNewSlot( &_vthis->PlayEffect, EffectsEffect_StartEffect ), ((XObject)_this ));
}

/* 'C' function for method : 'Simulation::DeviceClass.OnPlayEffect()' */
void SimulationDeviceClass_OnPlayEffect( ApplicationDeviceClass _this, XObject sender )
{
  SimulationDeviceClass _vthis = (SimulationDeviceClass)_this->_vthis;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass_UpdateCurrentTime((ApplicationDeviceClass)_this, _vthis->PlayEffect.Value );
}

/* Variants derived from the class : 'Simulation::DeviceClass' */
EW_DEFINE_CLASS_VARIANTS( SimulationDeviceClass )
EW_END_OF_CLASS_VARIANTS( SimulationDeviceClass )

/* Virtual Method Table (VMT) for the class variant : 'Simulation::DeviceClass' */
EW_DEFINE_VCLASS( SimulationDeviceClass, XObject, ApplicationDeviceClass, PlayEffect, 
                  _.VMT, _.VMT, _.VMT, _.VMT, _.VMT, "Simulation::DeviceClass" )
  SimulationDeviceClass_Play,
EW_END_OF_VCLASS( SimulationDeviceClass )

/* Embedded Wizard */
