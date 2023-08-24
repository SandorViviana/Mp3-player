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

#ifndef _SimulationApplication_H
#define _SimulationApplication_H

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

#include "_ApplicationApplication.h"
#include "_ApplicationPlayerDialog.h"
#include "_CoreTimer.h"
#include "_ViewsRectangle.h"
#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetRadioButton.h"

/* Forward declaration of the class Core::Group */
#ifndef _CoreGroup_
  EW_DECLARE_CLASS( CoreGroup )
#define _CoreGroup_
#endif

/* Forward declaration of the class Core::KeyPressHandler */
#ifndef _CoreKeyPressHandler_
  EW_DECLARE_CLASS( CoreKeyPressHandler )
#define _CoreKeyPressHandler_
#endif

/* Forward declaration of the class Core::LayoutContext */
#ifndef _CoreLayoutContext_
  EW_DECLARE_CLASS( CoreLayoutContext )
#define _CoreLayoutContext_
#endif

/* Forward declaration of the class Core::View */
#ifndef _CoreView_
  EW_DECLARE_CLASS( CoreView )
#define _CoreView_
#endif

/* Forward declaration of the class Graphics::Canvas */
#ifndef _GraphicsCanvas_
  EW_DECLARE_CLASS( GraphicsCanvas )
#define _GraphicsCanvas_
#endif


/* Deklaration of class variant : 'Simulation::Application' */
EW_DEFINE_VFIELDS( SimulationApplication, XObject, ApplicationApplication )
  EW_OBJECT  ( RadioButtonStopped, WidgetSetRadioButton )
  EW_OBJECT  ( RadioButtonPlaying, WidgetSetRadioButton )
  EW_OBJECT  ( DurationSlider,  WidgetSetHorizontalSlider )
  EW_OBJECT  ( CurrentTimeSlider, WidgetSetHorizontalSlider )
  EW_PROPERTY( CurrentTime,     XInt32 )
  EW_PROPERTY( Duration,        XInt32 )
EW_END_OF_VFIELDS( SimulationApplication )

/* Virtual Method Table (VMT) for the class variant : 'Simulation::Application' */
EW_DEFINE_VMETHODS( SimulationApplication, XObject, ApplicationApplication )
EW_END_OF_VMETHODS( SimulationApplication )

/* 'C' function for method : 'Simulation::Application.OnSetCurrentTime()' */
void SimulationApplication_OnSetCurrentTime( ApplicationApplication _this, XInt32 
  value );

/* 'C' function for method : 'Simulation::Application.OnGetCurrentTime()' */
XInt32 SimulationApplication_OnGetCurrentTime( ApplicationApplication _this );

/* 'C' function for method : 'Simulation::Application.OnSetDuration()' */
void SimulationApplication_OnSetDuration( ApplicationApplication _this, XInt32 value );

/* 'C' function for method : 'Simulation::Application.OnGetDuration()' */
XInt32 SimulationApplication_OnGetDuration( ApplicationApplication _this );

#ifdef __cplusplus
  }
#endif

#endif /* _SimulationApplication_H */

/* Embedded Wizard */
