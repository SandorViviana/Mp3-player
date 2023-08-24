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

#ifndef _ApplicationPlayerDialog_H
#define _ApplicationPlayerDialog_H

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

#include "_CoreGroup.h"
#include "_ViewsImage.h"
#include "_ViewsText.h"
#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetPushButton.h"

/* Forward declaration of the class Application::DeviceClass */
#ifndef _ApplicationDeviceClass_
  EW_DECLARE_CLASS( ApplicationDeviceClass )
#define _ApplicationDeviceClass_
#endif

/* Forward declaration of the class Application::PlayerDialog */
#ifndef _ApplicationPlayerDialog_
  EW_DECLARE_CLASS( ApplicationPlayerDialog )
#define _ApplicationPlayerDialog_
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


/* Deklaration of class : 'Application::PlayerDialog' */
EW_DEFINE_FIELDS( ApplicationPlayerDialog, CoreGroup )
  EW_OBJECT  ( Background,      ViewsImage )
  EW_OBJECT  ( Vinyl,           ViewsImage )
  EW_OBJECT  ( Playback,        WidgetSetHorizontalSlider )
  EW_OBJECT  ( Title,           ViewsText )
  EW_OBJECT  ( Artist,          ViewsText )
  EW_OBJECT  ( CurrentTime,     ViewsText )
  EW_OBJECT  ( Duration,        ViewsText )
  EW_OBJECT  ( ToTheQueue,      ViewsImage )
  EW_OBJECT  ( ToTheList,       ViewsImage )
  EW_OBJECT  ( Pause,           WidgetSetPushButton )
  EW_OBJECT  ( Play,            WidgetSetPushButton )
  EW_OBJECT  ( PushButton,      WidgetSetPushButton )
  EW_VARIABLE( deviceRef,       ApplicationDeviceClass )
EW_END_OF_FIELDS( ApplicationPlayerDialog )

/* Virtual Method Table (VMT) for the class : 'Application::PlayerDialog' */
EW_DEFINE_METHODS( ApplicationPlayerDialog, CoreGroup )
  EW_METHOD( initLayoutContext, void )( CoreRectView _this, XRect aBounds, CoreOutline 
    aOutline )
  EW_METHOD( GetRoot,           CoreRoot )( CoreView _this )
  EW_METHOD( Draw,              void )( CoreGroup _this, GraphicsCanvas aCanvas, 
    XRect aClip, XPoint aOffset, XInt32 aOpacity, XBool aBlend )
  EW_METHOD( HandleEvent,       XObject )( CoreView _this, CoreEvent aEvent )
  EW_METHOD( CursorHitTest,     CoreCursorHit )( CoreGroup _this, XRect aArea, XInt32 
    aFinger, XInt32 aStrikeCount, CoreView aDedicatedView, CoreView aStartView, 
    XSet aRetargetReason )
  EW_METHOD( AdjustDrawingArea, XRect )( CoreGroup _this, XRect aArea )
  EW_METHOD( ArrangeView,       XPoint )( CoreRectView _this, XRect aBounds, XEnum 
    aFormation )
  EW_METHOD( MoveView,          void )( CoreRectView _this, XPoint aOffset, XBool 
    aFastMove )
  EW_METHOD( GetExtent,         XRect )( CoreRectView _this )
  EW_METHOD( ChangeViewState,   void )( CoreGroup _this, XSet aSetState, XSet aClearState )
  EW_METHOD( OnSetBounds,       void )( CoreGroup _this, XRect value )
  EW_METHOD( OnSetFocus,        void )( CoreGroup _this, CoreView value )
  EW_METHOD( DispatchEvent,     XObject )( CoreGroup _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreGroup _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateViewState,   void )( CoreGroup _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreGroup _this, XRect aArea )
EW_END_OF_METHODS( ApplicationPlayerDialog )

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationPlayerDialog_Init( ApplicationPlayerDialog _this, XHandle aArg );

/* Conceptual equivalent to TimeUpdate */
void ApplicationPlayerDialog_OnSliderChange( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnPlay()' */
void ApplicationPlayerDialog_OnPlay( ApplicationPlayerDialog _this, XObject sender );

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnPlay()' */
void ApplicationPlayerDialog__OnPlay( void* _this, XObject sender );

/* The following define announces the presence of the method Application::PlayerDialog.OnPlay(). */
#define _ApplicationPlayerDialog__OnPlay_

/* 'C' function for method : 'Application::PlayerDialog.OnPause()' */
void ApplicationPlayerDialog_OnPause( ApplicationPlayerDialog _this, XObject sender );

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnPause()' */
void ApplicationPlayerDialog__OnPause( void* _this, XObject sender );

/* The following define announces the presence of the method Application::PlayerDialog.OnPause(). */
#define _ApplicationPlayerDialog__OnPause_

/* 'C' function for method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog_OnLoop( ApplicationPlayerDialog _this, XObject sender );

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog__OnLoop( void* _this, XObject sender );

/* The following define announces the presence of the method Application::PlayerDialog.OnLoop(). */
#define _ApplicationPlayerDialog__OnLoop_

/* 'C' function for method : 'Application::PlayerDialog.OnTimeUpdate()' */
void ApplicationPlayerDialog_OnTimeUpdate( ApplicationPlayerDialog _this, XObject 
  sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationPlayerDialog_H */

/* Embedded Wizard */
