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

#ifndef WidgetSet_H
#define WidgetSet_H

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

#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetHorizontalSliderConfig.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"
#include "_WidgetSetWidgetConfig.h"

/* Bitmap resource used per default by the Widgets customized for the small  size. */
EW_DECLARE_BITMAP_RES( WidgetSetHorizontalSliderTrackSmall )

/* Bitmap resource used per default by the Widgets customized for the small  size. */
EW_DECLARE_BITMAP_RES( WidgetSetVerticalScrollbarThumbSmall )

/* Bitmap resource used per default by the Widgets customized for the small  size. */
EW_DECLARE_BITMAP_RES( WidgetSetMiniHorizontalScrollbarTrackSmall )

/* Bitmap resource used per default by the Widgets customized for the medium size. */
EW_DECLARE_BITMAP_RES( WidgetSetHorizontalSliderTrackMedium )

/* Bitmap resource used per default by the Widgets customized for the medium size. */
EW_DECLARE_BITMAP_RES( WidgetSetThumbKnobMedium )

/* This autoobject provides the default customization for the 'horizontal slider' 
   widget (WidgetSet::HorizontalSlider) in its medium size variant. */
EW_DECLARE_AUTOOBJECT( WidgetSetHorizontalSlider_Medium, WidgetSetHorizontalSliderConfig )

#ifdef __cplusplus
  }
#endif

#endif /* WidgetSet_H */

/* Embedded Wizard */
