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
#include "_ApplicationApplication.h"
#include "_ApplicationDeviceClass.h"
#include "_ApplicationPlayerDialog.h"
#include "_CoreView.h"
#include "_ResourcesBitmap.h"
#include "_ResourcesFont.h"
#include "_SimulationApplication.h"
#include "_SimulationDeviceClass.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetHorizontalSliderConfig.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"
#include "Application.h"
#include "Resources.h"
#include "Views.h"
#include "WidgetSet.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x0000019E, /* ratio 58.94 % */
  0xB8001100, 0x800A8452, 0x00E80034, 0x0CA00360, 0x06098780, 0x40020916, 0x0083C24E,
  0x787C5CE6, 0x000C2240, 0xFC7C003A, 0xC12050F8, 0x02412218, 0xC72001A8, 0x240D0043,
  0x80037C32, 0x20001C26, 0x030C5A2E, 0x35800C60, 0x34484D2F, 0x4E21A688, 0xF0006D00,
  0x693183C4, 0xED47A41D, 0xE0085D28, 0x349CC3A9, 0x58551CCD, 0xAA466AF4, 0xB518C908,
  0xC6A11398, 0x0C4F0F9C, 0xA8F5D005, 0x2D16A7CF, 0x3173743A, 0x0C9E54A7, 0x0AC51EAD,
  0xAE4E6B40, 0x646A7346, 0x51EC7618, 0x661F47B3, 0xF1B35990, 0xA715BFCD, 0x539A04FA,
  0x499A45AB, 0x28758A73, 0x874FA115, 0x7C48370F, 0x4F2C537A, 0x54875E85, 0x00172C8D,
  0x1106855D, 0xB96AF526, 0x1D97E671, 0x89A64209, 0xD1860016, 0x454F4A00, 0xEAC8947D,
  0xD211179D, 0x32395BA4, 0x1F2FC4E6, 0x00000406, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 800, 480 }};
static const XColor _Const0001 = { 0x00, 0x00, 0x00, 0xFF };
static const XRect _Const0002 = {{ 0, 0 }, { 801, 480 }};
static const XRect _Const0003 = {{ 0, 0 }, { 800, 489 }};
static const XRect _Const0004 = {{ 117, 66 }, { 434, 333 }};
static const XRect _Const0005 = {{ 117, 387 }, { 582, 436 }};
static const XRect _Const0006 = {{ 499, 99 }, { 645, 158 }};
static const XStringRes _Const0007 = { _StringsDefault0, 0x0002 };
static const XRect _Const0008 = {{ 521, 156 }, { 621, 186 }};
static const XStringRes _Const0009 = { _StringsDefault0, 0x000A };
static const XRect _Const000A = {{ 57, 395 }, { 118, 425 }};
static const XStringRes _Const000B = { _StringsDefault0, 0x0013 };
static const XRect _Const000C = {{ 582, 395 }, { 645, 425 }};
static const XStringRes _Const000D = { _StringsDefault0, 0x001A };
static const XRect _Const000E = {{ 375, 436 }, { 425, 486 }};
static const XRect _Const000F = {{ 369, 0 }, { 419, 66 }};
static const XRect _Const0010 = {{ 281, 337 }, { 369, 387 }};
static const XRect _Const0011 = {{ 229, 331 }, { 309, 393 }};
static const XRect _Const0012 = {{ 340, 337 }, { 410, 387 }};
static const XStringRes _Const0013 = { _StringsDefault0, 0x0022 };
static const XStringRes _Const0014 = { _StringsDefault0, 0x002F };
static const XStringRes _Const0015 = { _StringsDefault0, 0x0055 };
static const XColor _Const0016 = { 0xF5, 0xF5, 0xF5, 0x93 };
static const XColor _Const0017 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XStringRes _Const0018 = { _StringsDefault0, 0x007C };
static const XStringRes _Const0019 = { _StringsDefault0, 0x0095 };
static const XStringRes _Const001A = { _StringsDefault0, 0x00B0 };
static const XStringRes _Const001B = { _StringsDefault0, 0x00B7 };

/* User defined inline code: 'Application::Inline' */
 

/* Initializer for the class 'Application::Application' */
void ApplicationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreRoot__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationApplication );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  ApplicationPlayerDialog__Init( &_this->PlayerDialog, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0000 );
  ViewsRectangle_OnSetColor( &_this->Rectangle, _Const0001 );
  CoreRectView__OnSetBounds( &_this->PlayerDialog, _Const0002 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PlayerDialog ), 0 );

  /* Create and initialize the suitable class variant */
  EwAttachObjectVariant( &_this->_.XObject, aLink, aArg );
}

/* Re-Initializer for the class 'Application::Application' */
void ApplicationApplication__ReInit( ApplicationApplication _this )
{
  /* At first re-initialize the super class ... */
  CoreRoot__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Rectangle );
  ApplicationPlayerDialog__ReInit( &_this->PlayerDialog );

  /* Reinitialize the variant */
  if ( _this->_vthis )
    _this->_vthis->_.VMT->_ReInit( &_this->_.XObject );
}

/* Finalizer method for the class 'Application::Application' */
void ApplicationApplication__Done( ApplicationApplication _this )
{
  /* Deinitialize the variant */
  EwDetachObjectVariant( &_this->_.XObject );

  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreRoot );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Rectangle );
  ApplicationPlayerDialog__Done( &_this->PlayerDialog );

  /* Don't forget to deinitialize the super class ... */
  CoreRoot__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Application::Application' */
EW_DEFINE_CLASS_VARIANTS( ApplicationApplication )
  EW_STATIC_CLASS_VARIANT( SimulationApplication ),
EW_END_OF_CLASS_VARIANTS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_CLASS( ApplicationApplication, CoreRoot, Rectangle, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Application::Application" )
  CoreRectView_initLayoutContext,
  CoreRoot_GetRoot,
  CoreRoot_Draw,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreRoot_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreRoot_OnSetFocus,
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreRoot_InvalidateArea,
EW_END_OF_CLASS( ApplicationApplication )

/* Include a file containing the font resource : 'Application::TitleFont' */
#include "_ApplicationTitleFont.h"

/* Table with links to derived variants of the font resource : 'Application::TitleFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationTitleFont )

/* Initializer for the class 'Application::PlayerDialog' */
void ApplicationPlayerDialog__Init( ApplicationPlayerDialog _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationPlayerDialog );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Background, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Vinyl, &_this->_.XObject, 0 );
  WidgetSetHorizontalSlider__Init( &_this->Playback, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Title, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Artist, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->CurrentTime, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Duration, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->ToTheQueue, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->ToTheList, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Pause, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Play, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PushButton, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationPlayerDialog );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Background, _Const0003 );
  CoreRectView__OnSetBounds( &_this->Vinyl, _Const0004 );
  CoreRectView__OnSetBounds( &_this->Playback, _Const0005 );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_this->Playback, 100 );
  WidgetSetHorizontalSlider_OnSetCurrentValue( &_this->Playback, 0 );
  CoreRectView__OnSetBounds( &_this->Title, _Const0006 );
  ViewsText_OnSetString( &_this->Title, EwLoadString( &_Const0007 ));
  CoreRectView__OnSetBounds( &_this->Artist, _Const0008 );
  ViewsText_OnSetString( &_this->Artist, EwLoadString( &_Const0009 ));
  CoreRectView__OnSetBounds( &_this->CurrentTime, _Const000A );
  ViewsText_OnSetString( &_this->CurrentTime, EwLoadString( &_Const000B ));
  CoreRectView__OnSetBounds( &_this->Duration, _Const000C );
  ViewsText_OnSetString( &_this->Duration, EwLoadString( &_Const000D ));
  CoreRectView__OnSetBounds( &_this->ToTheQueue, _Const000E );
  CoreRectView__OnSetBounds( &_this->ToTheList, _Const000F );
  ViewsImage_OnSetOrientation( &_this->ToTheList, ViewsOrientationRotated_180 );
  CoreRectView__OnSetBounds( &_this->Pause, _Const0010 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Pause, 1 );
  WidgetSetPushButton_OnSetLabel( &_this->Pause, 0 );
  CoreRectView__OnSetBounds( &_this->Play, _Const0011 );
  WidgetSetPushButton_OnSetIconFrameActive( &_this->Play, 0 );
  WidgetSetPushButton_OnSetIconFrameFocused( &_this->Play, 0 );
  WidgetSetPushButton_OnSetIconFrameDefault( &_this->Play, 0 );
  WidgetSetPushButton_OnSetLabel( &_this->Play, 0 );
  CoreRectView__OnSetBounds( &_this->PushButton, _Const0012 );
  WidgetSetPushButton_OnSetLabel( &_this->PushButton, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Background ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Vinyl ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Playback ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Title ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Artist ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->CurrentTime ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Duration ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ToTheQueue ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ToTheList ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Pause ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Play ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PushButton ), 0 );
  ViewsImage_OnSetBitmap( &_this->Background, EwLoadResource( &ApplicationBackground, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->Vinyl, EwLoadResource( &ApplicationGenericVinyl, 
  ResourcesBitmap ));
  _this->Playback.OnChange = EwNewSlot( _this, ApplicationPlayerDialog_OnLoop );
  _this->Playback.OnEnd = EwNewSlot( _this, ApplicationPlayerDialog_OnSliderChange );
  WidgetSetHorizontalSlider_OnSetAppearance( &_this->Playback, EwGetAutoObject( 
  &ApplicationHorizontalSliderConfig, WidgetSetHorizontalSliderConfig ));
  ViewsText_OnSetFont( &_this->Title, EwLoadResource( &ApplicationTitleFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Artist, EwLoadResource( &ApplicationFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->CurrentTime, EwLoadResource( &ApplicationTimeFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->Duration, EwLoadResource( &ApplicationTimeFont, ResourcesFont ));
  ViewsImage_OnSetBitmap( &_this->ToTheQueue, EwLoadResource( &ResourcesNavigationIconsLarge, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->ToTheList, EwLoadResource( &ResourcesNavigationIconsLarge, 
  ResourcesBitmap ));
  _this->Pause.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnPause );
  WidgetSetPushButton_OnSetIcon( &_this->Pause, EwLoadResource( &ApplicationPauseIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->Pause, EwGetAutoObject( &ApplicationPushButtonConfig, 
  WidgetSetPushButtonConfig ));
  _this->Play.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnPlay );
  WidgetSetPushButton_OnSetIcon( &_this->Play, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->Play, EwGetAutoObject( &ApplicationPushButtonConfig, 
  WidgetSetPushButtonConfig ));
  _this->PushButton.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnLoop );
  WidgetSetPushButton_OnSetIcon( &_this->PushButton, EwLoadResource( &ApplicationLoopIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->PushButton, EwGetAutoObject( &ApplicationPushButtonConfig, 
  WidgetSetPushButtonConfig ));

  /* Call the user defined constructor */
  ApplicationPlayerDialog_Init( _this, aArg );
}

/* Re-Initializer for the class 'Application::PlayerDialog' */
void ApplicationPlayerDialog__ReInit( ApplicationPlayerDialog _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Background );
  ViewsImage__ReInit( &_this->Vinyl );
  WidgetSetHorizontalSlider__ReInit( &_this->Playback );
  ViewsText__ReInit( &_this->Title );
  ViewsText__ReInit( &_this->Artist );
  ViewsText__ReInit( &_this->CurrentTime );
  ViewsText__ReInit( &_this->Duration );
  ViewsImage__ReInit( &_this->ToTheQueue );
  ViewsImage__ReInit( &_this->ToTheList );
  WidgetSetPushButton__ReInit( &_this->Pause );
  WidgetSetPushButton__ReInit( &_this->Play );
  WidgetSetPushButton__ReInit( &_this->PushButton );
}

/* Finalizer method for the class 'Application::PlayerDialog' */
void ApplicationPlayerDialog__Done( ApplicationPlayerDialog _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Background );
  ViewsImage__Done( &_this->Vinyl );
  WidgetSetHorizontalSlider__Done( &_this->Playback );
  ViewsText__Done( &_this->Title );
  ViewsText__Done( &_this->Artist );
  ViewsText__Done( &_this->CurrentTime );
  ViewsText__Done( &_this->Duration );
  ViewsImage__Done( &_this->ToTheQueue );
  ViewsImage__Done( &_this->ToTheList );
  WidgetSetPushButton__Done( &_this->Pause );
  WidgetSetPushButton__Done( &_this->Play );
  WidgetSetPushButton__Done( &_this->PushButton );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationPlayerDialog_Init( ApplicationPlayerDialog _this, XHandle aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  _this->deviceRef = EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass );
  WidgetSetHorizontalSlider_OnSetOutlet( &_this->Playback, EwNewRef( _this->deviceRef, 
  ApplicationDeviceClass_OnGetCurrentTime, ApplicationDeviceClass_OnSetCurrentTime ));
  EwAttachRefObserver( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), 
    EwNewRef( _this->deviceRef, ApplicationDeviceClass_OnGetCurrentTime, ApplicationDeviceClass_OnSetCurrentTime ), 
    0 );
  EwAttachRefObserver( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), 
    EwNewRef( _this->deviceRef, ApplicationDeviceClass_OnGetDuration, ApplicationDeviceClass_OnSetDuration ), 
    0 );
  EwPostSignal( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), ((XObject)_this ));
}

/* Conceptual equivalent to TimeUpdate */
void ApplicationPlayerDialog_OnSliderChange( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass_UpdateTimeFromSlider( _this->deviceRef, WidgetSetHorizontalSlider_OnGetCurrentValue( 
  &_this->Playback ));
}

/* 'C' function for method : 'Application::PlayerDialog.OnPlay()' */
void ApplicationPlayerDialog_OnPlay( ApplicationPlayerDialog _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass__Play( _this->deviceRef );
}

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnPlay()' */
void ApplicationPlayerDialog__OnPlay( void* _this, XObject sender )
{
  ApplicationPlayerDialog_OnPlay((ApplicationPlayerDialog)_this, sender );
}

/* 'C' function for method : 'Application::PlayerDialog.OnPause()' */
void ApplicationPlayerDialog_OnPause( ApplicationPlayerDialog _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass_Pause( _this->deviceRef );
}

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnPause()' */
void ApplicationPlayerDialog__OnPause( void* _this, XObject sender )
{
  ApplicationPlayerDialog_OnPause((ApplicationPlayerDialog)_this, sender );
}

/* 'C' function for method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog_OnLoop( ApplicationPlayerDialog _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass_LoopTrack( _this->deviceRef );
  EwTrace( "%s", EwLoadString( &_Const0013 ));
}

/* Wrapper function for the non virtual method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog__OnLoop( void* _this, XObject sender )
{
  ApplicationPlayerDialog_OnLoop((ApplicationPlayerDialog)_this, sender );
}

/* 'C' function for method : 'Application::PlayerDialog.OnTimeUpdate()' */
void ApplicationPlayerDialog_OnTimeUpdate( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->Playback.MaxValue != _this->deviceRef->Duration )
  {
    WidgetSetHorizontalSlider_OnSetMaxValue( &_this->Playback, _this->deviceRef->Duration );
    EwTrace( "%s%i", EwLoadString( &_Const0014 ), _this->Playback.MaxValue );
  }

  EwTrace( "%s%i", EwLoadString( &_Const0015 ), WidgetSetHorizontalSlider_OnGetCurrentValue( 
    &_this->Playback ));
  WidgetSetHorizontalSlider_OnSetCurrentValue( &_this->Playback, _this->deviceRef->CurrentTime );
  ViewsText_OnSetString( &_this->Duration, ApplicationDeviceClass_IntToTimeString( 
  _this->deviceRef, _this->deviceRef->Duration ));
  ViewsText_OnSetString( &_this->CurrentTime, ApplicationDeviceClass_IntToTimeString( 
  _this->deviceRef, _this->deviceRef->CurrentTime ));
}

/* Variants derived from the class : 'Application::PlayerDialog' */
EW_DEFINE_CLASS_VARIANTS( ApplicationPlayerDialog )
EW_END_OF_CLASS_VARIANTS( ApplicationPlayerDialog )

/* Virtual Method Table (VMT) for the class : 'Application::PlayerDialog' */
EW_DEFINE_CLASS( ApplicationPlayerDialog, CoreGroup, Background, deviceRef, _.VMT, 
                 _.VMT, _.VMT, _.VMT, "Application::PlayerDialog" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationPlayerDialog )

/* Include a file containing the bitmap resource : 'Application::Background' */
#include "_ApplicationBackground.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Background' */
EW_RES_WITHOUT_VARIANTS( ApplicationBackground )

/* Include a file containing the bitmap resource : 'Application::GenericVinyl' */
#include "_ApplicationGenericVinyl.h"

/* Table with links to derived variants of the bitmap resource : 'Application::GenericVinyl' */
EW_RES_WITHOUT_VARIANTS( ApplicationGenericVinyl )

/* Include a file containing the font resource : 'Application::Font' */
#include "_ApplicationFont.h"

/* Table with links to derived variants of the font resource : 'Application::Font' */
EW_RES_WITHOUT_VARIANTS( ApplicationFont )

/* Include a file containing the font resource : 'Application::TimeFont' */
#include "_ApplicationTimeFont.h"

/* Table with links to derived variants of the font resource : 'Application::TimeFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationTimeFont )

/* Include a file containing the bitmap resource : 'Application::Thumb' */
#include "_ApplicationThumb.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Thumb' */
EW_RES_WITHOUT_VARIANTS( ApplicationThumb )

/* This object contains configuration information for a slider widget. */
EW_DEFINE_AUTOOBJECT( ApplicationHorizontalSliderConfig, WidgetSetHorizontalSliderConfig )

/* Initializer for the auto object 'Application::HorizontalSliderConfig' */
void ApplicationHorizontalSliderConfig__Init( WidgetSetHorizontalSliderConfig _this )
{
  WidgetSetHorizontalSliderConfig_OnSetThumbUpdateAtTouch( _this, 1 );
  WidgetSetHorizontalSliderConfig_OnSetThumbMarginRight( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetThumbMarginLeft( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetThumbFrameActive( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetThumbFrameFocused( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetThumbFrameDisabled( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetThumbFrameDefault( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetThumbActive( _this, EwLoadResource( &WidgetSetVerticalScrollbarThumbSmall, 
  ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetThumbFocused( _this, EwLoadResource( &ApplicationThumb, 
  ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetThumbDefault( _this, EwLoadResource( &ApplicationThumb, 
  ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetTrackRightTintActive( _this, _Const0016 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightTintFocused( _this, _Const0016 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightTintDefault( _this, _Const0016 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightFrameActive( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightFrameFocused( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightFrameDisabled( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightFrameDefault( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightActive( _this, EwLoadResource( 
  &WidgetSetMiniHorizontalScrollbarTrackSmall, ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetTrackRightFocused( _this, EwLoadResource( 
  &WidgetSetMiniHorizontalScrollbarTrackSmall, ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetTrackRightDefault( _this, EwLoadResource( 
  &WidgetSetHorizontalSliderTrackSmall, ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftTintActive( _this, _Const0017 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftTintFocused( _this, _Const0017 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftTintDefault( _this, _Const0017 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftFrameActive( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftFrameFocused( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftFrameDisabled( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftFrameDefault( _this, 0 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftActive( _this, EwLoadResource( &WidgetSetHorizontalSliderTrackSmall, 
  ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftFocused( _this, EwLoadResource( 
  &WidgetSetMiniHorizontalScrollbarTrackSmall, ResourcesBitmap ));
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftDefault( _this, EwLoadResource( 
  &WidgetSetHorizontalSliderTrackSmall, ResourcesBitmap ));
}

/* Table with links to derived variants of the auto object : 'Application::HorizontalSliderConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ApplicationHorizontalSliderConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ApplicationHorizontalSliderConfig )

/* Initializer for the class 'Application::DeviceClass' */
void ApplicationDeviceClass__Init( ApplicationDeviceClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  TemplatesDeviceClass__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationDeviceClass );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationDeviceClass );

  /* ... and initialize objects, variables, properties, etc. */
  /* Call the user defined constructor */
  ApplicationDeviceClass_Init( _this, aArg );

  /* Create and initialize the suitable class variant */
  EwAttachObjectVariant( &_this->_.XObject, aLink, aArg );
}

/* Re-Initializer for the class 'Application::DeviceClass' */
void ApplicationDeviceClass__ReInit( ApplicationDeviceClass _this )
{
  /* At first re-initialize the super class ... */
  TemplatesDeviceClass__ReInit( &_this->_.Super );

  /* Reinitialize the variant */
  if ( _this->_vthis )
    _this->_vthis->_.VMT->_ReInit( &_this->_.XObject );
}

/* Finalizer method for the class 'Application::DeviceClass' */
void ApplicationDeviceClass__Done( ApplicationDeviceClass _this )
{
  /* Deinitialize the variant */
  EwDetachObjectVariant( &_this->_.XObject );

  /* Call the user defined destructor of the class */
  ApplicationDeviceClass_Done( _this );

  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( TemplatesDeviceClass );

  /* Don't forget to deinitialize the super class ... */
  TemplatesDeviceClass__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::DeviceClass.Done()' */
void ApplicationDeviceClass_Done( ApplicationDeviceClass _this )
{
  XObject thisObject = ((XObject)_this );

  {
    /*
       TO DO:

       Depending on your application case you call functions of the underlying
       middleware (or access the device directly) in order to perform the necessary
       de-initialization steps. For example, you invoke some 'C' function:

         YourDevice_DeInitialize();

       IMPORTANT:
       ----------

       The variable 'thisObject' represents the actually de-initialized instance of the
       Application::DeviceClass. If you have stored this object at the initialization
       time (in the 'Init' method) in some global C variable or registered it by the
       middleware, it is important to perform now the opposite operation. Set the
       global variable to NULL or de-register 'thisObject' object from the middleware.

    */
  }
}

/* 'C' function for method : 'Application::DeviceClass.Init()' */
void ApplicationDeviceClass_Init( ApplicationDeviceClass _this, XHandle aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  EwPostSignal( EwNewSlot( _this, ApplicationDeviceClass_InitSlot ), ((XObject)_this ));
}

/* 'C' function for method : 'Application::DeviceClass.OnSetPlayerState()' */
void ApplicationDeviceClass_OnSetPlayerState( ApplicationDeviceClass _this, XEnum 
  value )
{
  if ( _this->PlayerState == value )
    return;

  _this->PlayerState = value;
}

/* 'C' function for method : 'Application::DeviceClass.OnGetPlayerState()' */
XEnum ApplicationDeviceClass_OnGetPlayerState( ApplicationDeviceClass _this )
{
  return _this->PlayerState;
}

/* 'C' function for method : 'Application::DeviceClass.IntToTimeString()' */
XString ApplicationDeviceClass_IntToTimeString( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( aArg1 );

  return EwLoadString( &_Const000B );
}

/* Equivalent of the event TimeUpdate */
void ApplicationDeviceClass_OnSetCurrentTime( ApplicationDeviceClass _this, XInt32 
  value )
{
  if ( _this->CurrentTime == value )
    return;

  _this->CurrentTime = value;
}

/* 'C' function for method : 'Application::DeviceClass.OnGetCurrentTime()' */
XInt32 ApplicationDeviceClass_OnGetCurrentTime( ApplicationDeviceClass _this )
{
  return _this->CurrentTime;
}

/* 'C' function for method : 'Application::DeviceClass.OnSetDuration()' */
void ApplicationDeviceClass_OnSetDuration( ApplicationDeviceClass _this, XInt32 
  value )
{
  if ( _this->Duration == value )
    return;

  _this->Duration = value;
}

/* Wrapper function for the non virtual method : 'Application::DeviceClass.OnSetDuration()' */
void ApplicationDeviceClass__OnSetDuration( void* _this, XInt32 value )
{
  ApplicationDeviceClass_OnSetDuration((ApplicationDeviceClass)_this, value );
}

/* 'C' function for method : 'Application::DeviceClass.OnGetDuration()' */
XInt32 ApplicationDeviceClass_OnGetDuration( ApplicationDeviceClass _this )
{
  return _this->Duration;
}

/* 'C' function for method : 'Application::DeviceClass.OnSetLoop()' */
void ApplicationDeviceClass_OnSetLoop( ApplicationDeviceClass _this, XBool value )
{
  if ( _this->Loop == value )
    return;

  _this->Loop = value;
}

/* 'C' function for method : 'Application::DeviceClass.Play()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_Play( ApplicationDeviceClass _this )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->Play( _this );
  else
    ApplicationDeviceClass___Play( _this );
}

/* Implementation of the method : 'Application::DeviceClass.Play()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_Play() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___Play( ApplicationDeviceClass _this )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.Play()' */
void ApplicationDeviceClass__Play( void* _this )
{
  ((ApplicationDeviceClass)_this)->_.VMT->Play((ApplicationDeviceClass)_this );
}

/* 'C' function for method : 'Application::DeviceClass.Pause()' */
void ApplicationDeviceClass_Pause( ApplicationDeviceClass _this )
{
  ApplicationDeviceClass_UpdatePlayerState( _this, ApplicationStatePaused );
}

/* Wrapper function for the non virtual method : 'Application::DeviceClass.Pause()' */
void ApplicationDeviceClass__Pause( void* _this )
{
  ApplicationDeviceClass_Pause((ApplicationDeviceClass)_this );
}

/* 'C' function for method : 'Application::DeviceClass.LoopTrack()' */
void ApplicationDeviceClass_LoopTrack( ApplicationDeviceClass _this )
{
  EwTrace( "%s", EwLoadString( &_Const0018 ));
  ApplicationDeviceClass_OnSetLoop( _this, (XBool)!_this->Loop );
}

/* Wrapper function for the non virtual method : 'Application::DeviceClass.LoopTrack()' */
void ApplicationDeviceClass__LoopTrack( void* _this )
{
  ApplicationDeviceClass_LoopTrack((ApplicationDeviceClass)_this );
}

/* This method is intended to be called by the device to notify the GUI application 
   about an alternation of its setting or state value. */
void ApplicationDeviceClass_UpdatePlayerState( ApplicationDeviceClass _this, XEnum 
  aNewValue )
{
  if ( aNewValue != _this->PlayerState )
  {
    _this->PlayerState = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationDeviceClass_OnGetPlayerState, 
      ApplicationDeviceClass_OnSetPlayerState ), 0 );
  }
}

/* Wrapper function for the non virtual method : 'Application::DeviceClass.UpdatePlayerState()' */
void ApplicationDeviceClass__UpdatePlayerState( void* _this, XEnum aNewValue )
{
  ApplicationDeviceClass_UpdatePlayerState((ApplicationDeviceClass)_this, aNewValue );
}

/* 'C' function for method : 'Application::DeviceClass.UpdateCurrentTime()' */
void ApplicationDeviceClass_UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  if ( aNewValue != _this->CurrentTime )
  {
    EwTrace( "%s%i%s%i", EwLoadString( &_Const0019 ), _this->CurrentTime, EwLoadString( 
      &_Const001A ), aNewValue );
    _this->CurrentTime = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationDeviceClass_OnGetCurrentTime, 
      ApplicationDeviceClass_OnSetCurrentTime ), 0 );
  }
}

/* Wrapper function for the non virtual method : 'Application::DeviceClass.UpdateCurrentTime()' */
void ApplicationDeviceClass__UpdateCurrentTime( void* _this, XInt32 aNewValue )
{
  ApplicationDeviceClass_UpdateCurrentTime((ApplicationDeviceClass)_this, aNewValue );
}

/* 'C' function for method : 'Application::DeviceClass.UpdateTimeFromSlider()' */
void ApplicationDeviceClass_UpdateTimeFromSlider( ApplicationDeviceClass _this, 
  XInt32 aArg1 )
{
  ApplicationDeviceClass_UpdateCurrentTime( _this, aArg1 );
}

/* 'C' function for method : 'Application::DeviceClass.UpdateDuration()' */
void ApplicationDeviceClass_UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  if ( aNewValue != _this->Duration )
  {
    EwTrace( "%s%i%s%i", EwLoadString( &_Const001B ), _this->Duration, EwLoadString( 
      &_Const001A ), aNewValue );
    _this->Duration = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationDeviceClass_OnGetDuration, 
      ApplicationDeviceClass_OnSetDuration ), 0 );
  }
}

/* Wrapper function for the non virtual method : 'Application::DeviceClass.UpdateDuration()' */
void ApplicationDeviceClass__UpdateDuration( void* _this, XInt32 aNewValue )
{
  ApplicationDeviceClass_UpdateDuration((ApplicationDeviceClass)_this, aNewValue );
}

/* 'C' function for method : 'Application::DeviceClass.InitSlot()' */
void ApplicationDeviceClass_InitSlot( ApplicationDeviceClass _this, XObject sender )
{
  XObject thisObject;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  thisObject = ((XObject)_this );
  EmWiPlayer.initialize();
}

/* Variants derived from the class : 'Application::DeviceClass' */
EW_DEFINE_CLASS_VARIANTS( ApplicationDeviceClass )
  EW_STATIC_CLASS_VARIANT( SimulationDeviceClass ),
EW_END_OF_CLASS_VARIANTS( ApplicationDeviceClass )

/* Virtual Method Table (VMT) for the class : 'Application::DeviceClass' */
EW_DEFINE_CLASS( ApplicationDeviceClass, TemplatesDeviceClass, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, _.VMT, "Application::DeviceClass" )
  ApplicationDeviceClass_Play,
EW_END_OF_CLASS( ApplicationDeviceClass )

/* User defined auto object: 'Application::Device' */
EW_DEFINE_AUTOOBJECT( ApplicationDevice, ApplicationDeviceClass )

/* Initializer for the auto object 'Application::Device' */
void ApplicationDevice__Init( ApplicationDeviceClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Application::Device' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ApplicationDevice )
EW_END_OF_AUTOOBJECT_VARIANTS( ApplicationDevice )

/* Include a file containing the bitmap resource : 'Application::PlayIcon' */
#include "_ApplicationPlayIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PlayIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPlayIcon )

/* User defined auto object: 'Application::PushButtonConfig' */
EW_DEFINE_AUTOOBJECT( ApplicationPushButtonConfig, WidgetSetPushButtonConfig )

/* Initializer for the auto object 'Application::PushButtonConfig' */
void ApplicationPushButtonConfig__Init( WidgetSetPushButtonConfig _this )
{
  WidgetSetPushButtonConfig_OnSetLabelFont( _this, EwLoadResource( &ApplicationTimeFont, 
  ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( _this, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( _this, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( _this, 0 );
  WidgetSetPushButtonConfig_OnSetFaceActive( _this, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceFocused( _this, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceDefault( _this, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
}

/* Table with links to derived variants of the auto object : 'Application::PushButtonConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ApplicationPushButtonConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ApplicationPushButtonConfig )

/* Include a file containing the bitmap resource : 'Application::PauseIcon' */
#include "_ApplicationPauseIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PauseIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPauseIcon )

/* Include a file containing the bitmap resource : 'Application::LoopIcon' */
#include "_ApplicationLoopIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::LoopIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationLoopIcon )

/* Embedded Wizard */
