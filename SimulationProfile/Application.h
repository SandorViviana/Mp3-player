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

#ifndef Application_H
#define Application_H

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
#include "_ApplicationDeviceClass.h"
#include "_ApplicationPlayerDialog.h"

/* Font resource : 'Application::TitleFont' */
EW_DECLARE_FONT_RES( ApplicationTitleFont )

/* Bitmap resource : 'Application::Background' */
EW_DECLARE_BITMAP_RES( ApplicationBackground )

/* Bitmap resource : 'Application::GenericVinyl' */
EW_DECLARE_BITMAP_RES( ApplicationGenericVinyl )

/* Font resource : 'Application::Font' */
EW_DECLARE_FONT_RES( ApplicationFont )

/* Font resource : 'Application::TimeFont' */
EW_DECLARE_FONT_RES( ApplicationTimeFont )

/* Bitmap resource : 'Application::Thumb' */
EW_DECLARE_BITMAP_RES( ApplicationThumb )

/* Bitmap resource : 'Application::PlayIcon' */
EW_DECLARE_BITMAP_RES( ApplicationPlayIcon )

/* Bitmap resource : 'Application::PauseIcon' */
EW_DECLARE_BITMAP_RES( ApplicationPauseIcon )

/* Bitmap resource : 'Application::LoopIcon' */
EW_DECLARE_BITMAP_RES( ApplicationLoopIcon )

/* Bitmap resource : 'Application::PausePressedIcon' */
EW_DECLARE_BITMAP_RES( ApplicationPausePressedIcon )

/* Bitmap resource : 'Application::PlayPressedIcon' */
EW_DECLARE_BITMAP_RES( ApplicationPlayPressedIcon )

/* Bitmap resource : 'Application::LoopPressedIcon' */
EW_DECLARE_BITMAP_RES( ApplicationLoopPressedIcon )

/* Forward declaration of the class WidgetSet::HorizontalSliderConfig */
#ifndef _WidgetSetHorizontalSliderConfig_
  EW_DECLARE_CLASS( WidgetSetHorizontalSliderConfig )
#define _WidgetSetHorizontalSliderConfig_
#endif

/* Forward declaration of the class WidgetSet::PushButtonConfig */
#ifndef _WidgetSetPushButtonConfig_
  EW_DECLARE_CLASS( WidgetSetPushButtonConfig )
#define _WidgetSetPushButtonConfig_
#endif

/* This object contains configuration information for a slider widget. */
EW_DECLARE_AUTOOBJECT( ApplicationHorizontalSliderConfig, WidgetSetHorizontalSliderConfig )

/* User defined auto object: 'Application::Device' */
EW_DECLARE_AUTOOBJECT( ApplicationDevice, ApplicationDeviceClass )

/* User defined enumeration: 'Application::State' */
typedef XEnum ApplicationState;

#define ApplicationStateCanPlay                             0
#define ApplicationStatePlaying                             1
#define ApplicationStatePaused                              2
#define ApplicationStateSeeking                             3
#define ApplicationStateError                               4
#define ApplicationStateEnded                               5

/* User defined auto object: 'Application::PushButtonConfig' */
EW_DECLARE_AUTOOBJECT( ApplicationPushButtonConfig, WidgetSetPushButtonConfig )

#ifdef __cplusplus
  }
#endif

#endif /* Application_H */

/* Embedded Wizard */
