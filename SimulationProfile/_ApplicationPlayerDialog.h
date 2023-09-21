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

#include "_ApplicationVinylView.h"
#include "_CoreGroup.h"
#include "_CoreWipeTouchHandler.h"
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

/* Forward declaration of the class Core::DialogContext */
#ifndef _CoreDialogContext_
  EW_DECLARE_CLASS( CoreDialogContext )
#define _CoreDialogContext_
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

/* Forward declaration of the class Core::TaskQueue */
#ifndef _CoreTaskQueue_
  EW_DECLARE_CLASS( CoreTaskQueue )
#define _CoreTaskQueue_
#endif

/* Forward declaration of the class Core::View */
#ifndef _CoreView_
  EW_DECLARE_CLASS( CoreView )
#define _CoreView_
#endif

/* Forward declaration of the class Effects::Fader */
#ifndef _EffectsFader_
  EW_DECLARE_CLASS( EffectsFader )
#define _EffectsFader_
#endif


/* Deklaration of class : 'Application::PlayerDialog' */
EW_DEFINE_FIELDS( ApplicationPlayerDialog, CoreGroup )
  EW_OBJECT  ( Background,      ViewsImage )
  EW_OBJECT  ( Playback,        WidgetSetHorizontalSlider )
  EW_OBJECT  ( Title,           ViewsText )
  EW_OBJECT  ( Artist,          ViewsText )
  EW_OBJECT  ( CurrentTime,     ViewsText )
  EW_OBJECT  ( Duration,        ViewsText )
  EW_OBJECT  ( ToTheQueue,      ViewsImage )
  EW_OBJECT  ( PlayPause,       WidgetSetPushButton )
  EW_OBJECT  ( Loop,            WidgetSetPushButton )
  EW_OBJECT  ( VinylView,       ApplicationVinylView )
  EW_OBJECT  ( OpenQueue,       CoreWipeTouchHandler )
  EW_OBJECT  ( PreviousButton,  WidgetSetPushButton )
  EW_OBJECT  ( NextButton,      WidgetSetPushButton )
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
  EW_METHOD( OnSetOpacity,      void )( CoreGroup _this, XInt32 value )
  EW_METHOD( SwitchToDialog,    void )( CoreGroup _this, CoreGroup aDialogGroup, 
    EffectsTransition aPresentTransition, EffectsTransition aDismissTransition, 
    EffectsTransition aOverlayTransition, EffectsTransition aRestoreTransition, 
    EffectsTransition aOverrideDismissTransition, EffectsTransition aOverrideOverlayTransition, 
    EffectsTransition aOverrideRestoreTransition, XSlot aComplete, XSlot aCancel, 
    XBool aCombine )
  EW_METHOD( DismissDialog,     void )( CoreGroup _this, CoreGroup aDialogGroup, 
    EffectsTransition aOverrideDismissTransition, EffectsTransition aOverrideOverlayTransition, 
    EffectsTransition aOverrideRestoreTransition, XSlot aComplete, XSlot aCancel, 
    XBool aCombine )
  EW_METHOD( PresentDialog,     void )( CoreGroup _this, CoreGroup aDialogGroup, 
    EffectsTransition aPresentTransition, EffectsTransition aDismissTransition, 
    EffectsTransition aOverlayTransition, EffectsTransition aRestoreTransition, 
    EffectsTransition aOverrideOverlayTransition, EffectsTransition aOverrideRestoreTransition, 
    XSlot aComplete, XSlot aCancel, XBool aCombine )
  EW_METHOD( DispatchEvent,     XObject )( CoreGroup _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreGroup _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateViewState,   void )( CoreGroup _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreGroup _this, XRect aArea )
  EW_METHOD( FindSiblingView,   CoreView )( CoreGroup _this, CoreView aView, XSet 
    aFilter )
  EW_METHOD( FadeGroup,         void )( CoreGroup _this, CoreGroup aGroup, EffectsFader 
    aFader, XSlot aComplete, XSlot aCancel, XBool aCombine )
  EW_METHOD( RestackTop,        void )( CoreGroup _this, CoreView aView )
  EW_METHOD( Remove,            void )( CoreGroup _this, CoreView aView )
  EW_METHOD( Add,               void )( CoreGroup _this, CoreView aView, XInt32 
    aOrder )
EW_END_OF_METHODS( ApplicationPlayerDialog )

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationPlayerDialog_Init( ApplicationPlayerDialog _this, XHandle aArg );

/* Conceptual equivalent to TimeUpdate */
void ApplicationPlayerDialog_OnSliderChange( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog_OnLoop( ApplicationPlayerDialog _this, XObject sender );

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog__OnLoop( void* _this, XObject sender );

/* The following define announces the presence of the method Application::PlayerDialog.OnLoop(). */
#define _ApplicationPlayerDialog__OnLoop_

/* 'C' function for method : 'Application::PlayerDialog.OnTimeUpdate()' */
void ApplicationPlayerDialog_OnTimeUpdate( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.PlayPausedPressed()' */
void ApplicationPlayerDialog_PlayPausedPressed( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnPlayPause()' */
void ApplicationPlayerDialog_OnPlayPause( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnPlay()' */
void ApplicationPlayerDialog_OnPlay( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.OnPause()' */
void ApplicationPlayerDialog_OnPause( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.OnEnded()' */
void ApplicationPlayerDialog_OnEnded( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.OnOpenQueue()' */
void ApplicationPlayerDialog_OnOpenQueue( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnPrevious()' */
void ApplicationPlayerDialog_OnPrevious( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnNext()' */
void ApplicationPlayerDialog_OnNext( ApplicationPlayerDialog _this, XObject sender );

/* 'C' function for method : 'Application::PlayerDialog.PreviousPressed()' */
void ApplicationPlayerDialog_PreviousPressed( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.NextPressed()' */
void ApplicationPlayerDialog_NextPressed( ApplicationPlayerDialog _this, XObject 
  sender );

/* 'C' function for method : 'Application::PlayerDialog.OnNextMethod()' */
void ApplicationPlayerDialog_OnNextMethod( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.DisablePrevious()' */
void ApplicationPlayerDialog_DisablePrevious( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.DisableNext()' */
void ApplicationPlayerDialog_DisableNext( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.EnablePrevious()' */
void ApplicationPlayerDialog_EnablePrevious( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.EnableNext()' */
void ApplicationPlayerDialog_EnableNext( ApplicationPlayerDialog _this );

/* 'C' function for method : 'Application::PlayerDialog.EnableDisableButtons()' */
void ApplicationPlayerDialog_EnableDisableButtons( ApplicationPlayerDialog _this );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationPlayerDialog_H */

/* Embedded Wizard */
