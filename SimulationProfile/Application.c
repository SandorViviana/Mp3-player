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
#include "_ApplicationQueueItem.h"
#include "_ApplicationQueueView.h"
#include "_ApplicationVinylView.h"
#include "_CoreGroup.h"
#include "_CoreSimpleTouchHandler.h"
#include "_CoreSlideTouchHandler.h"
#include "_CoreVerticalList.h"
#include "_CoreView.h"
#include "_CoreWipeTouchHandler.h"
#include "_EffectsFloatEffect.h"
#include "_EffectsSlideTransition.h"
#include "_EffectsTransition.h"
#include "_ResourcesBitmap.h"
#include "_ResourcesFont.h"
#include "_SimulationApplication.h"
#include "_SimulationDeviceClass.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "_ViewsWarpImage.h"
#include "_WidgetSetHorizontalSlider.h"
#include "_WidgetSetHorizontalSliderConfig.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"
#include "Application.h"
#include "Core.h"
#include "Effects.h"
#include "Resources.h"
#include "Views.h"
#include "WidgetSet.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x000001A2, /* ratio 58.37 % */
  0xB8001100, 0x800A8452, 0x00E80034, 0x0CA00360, 0x06098780, 0x40020916, 0x0083C24E,
  0x787C5CE6, 0x000C2240, 0xFC7C003A, 0xC12050F8, 0x02412218, 0xC72001A8, 0x24260043,
  0x10D3441A, 0x6D000800, 0x80018400, 0x3ACE6307, 0xB0026D38, 0x002173A3, 0xBE6F0EA0,
  0xA8466001, 0x33499A42, 0xA648451A, 0x089BC5A6, 0x787CDE35, 0xA8002642, 0xAD1CC742,
  0x9BA1D648, 0xEE89378B, 0xA8548864, 0xBF4EA652, 0x91A9BCD6, 0x42AB5521, 0xB87D0AB3,
  0x38502241, 0x54EEAA00, 0x58C87518, 0x5ECD168B, 0x67308834, 0x9716A6D4, 0xA00ADCE6,
  0x0A9BC123, 0xE0C65297, 0xC1600017, 0x3912A317, 0xC221545C, 0x426F67A5, 0x2F792006,
  0x29120600, 0x537BBD8A, 0x6784514A, 0xC890721F, 0xB19C6304, 0x541801B4, 0x8034F1AC,
  0xF08A00D4, 0x71B78CF4, 0x5F0AB3CD, 0x00080CBE, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 800, 480 }};
static const XColor _Const0001 = { 0x00, 0x00, 0x00, 0xFF };
static const XRect _Const0002 = {{ 0, 0 }, { 801, 480 }};
static const XRect _Const0003 = {{ 0, 0 }, { 800, 489 }};
static const XRect _Const0004 = {{ 117, 387 }, { 582, 436 }};
static const XRect _Const0005 = {{ 368, 60 }, { 788, 175 }};
static const XStringRes _Const0006 = { _StringsDefault0, 0x0002 };
static const XRect _Const0007 = {{ 379, 157 }, { 784, 187 }};
static const XStringRes _Const0008 = { _StringsDefault0, 0x000A };
static const XRect _Const0009 = {{ 57, 395 }, { 118, 425 }};
static const XStringRes _Const000A = { _StringsDefault0, 0x0013 };
static const XRect _Const000B = {{ 582, 395 }, { 645, 425 }};
static const XStringRes _Const000C = { _StringsDefault0, 0x001A };
static const XRect _Const000D = {{ 375, 436 }, { 425, 486 }};
static const XRect _Const000E = {{ 298, 337 }, { 353, 387 }};
static const XRect _Const000F = {{ 344, 335 }, { 405, 385 }};
static const XRect _Const0010 = {{ -5, -1 }, { 474, 349 }};
static const XRect _Const0011 = {{ 7, 432 }, { 800, 486 }};
static const XRect _Const0012 = {{ 249, 338 }, { 299, 387 }};
static const XRect _Const0013 = {{ 402, 341 }, { 452, 386 }};
static const XStringRes _Const0014 = { _StringsDefault0, 0x0022 };
static const XStringRes _Const0015 = { _StringsDefault0, 0x0048 };
static const XRect _Const0016 = {{ -6, -10 }, { 808, 480 }};
static const XColor _Const0017 = { 0x12, 0x15, 0x16, 0xFF };
static const XRect _Const0018 = {{ 17, 127 }, { 779, 372 }};
static const XRect _Const0019 = {{ 355, -2 }, { 405, 48 }};
static const XRect _Const001A = {{ 3, -2 }, { 797, 51 }};
static const XRect _Const001B = {{ 18, 126 }, { 781, 370 }};
static const XPoint _Const001C = { 0, 50 };
static const XPoint _Const001D = { 19, 131 };
static const XPoint _Const001E = { 782, 130 };
static const XPoint _Const001F = { 784, 370 };
static const XPoint _Const0020 = { 19, 370 };
static const XColor _Const0021 = { 0xF5, 0xF5, 0xF5, 0x93 };
static const XColor _Const0022 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XStringRes _Const0023 = { _StringsDefault0, 0x006F };
static const XStringRes _Const0024 = { _StringsDefault0, 0x008A };
static const XStringRes _Const0025 = { _StringsDefault0, 0x0091 };
static const XColor _Const0026 = { 0x4D, 0xFF, 0x59, 0xFF };
static const XColor _Const0027 = { 0x35, 0x35, 0x35, 0xFF };
static const XColor _Const0028 = { 0xD6, 0xD6, 0xD6, 0xFF };
static const XColor _Const0029 = { 0x3D, 0x42, 0xFF, 0xFF };
static const XColor _Const002A = { 0x06, 0xFF, 0x4C, 0xFF };
static const XColor _Const002B = { 0xE2, 0x52, 0xFF, 0xFF };
static const XColor _Const002C = { 0xFF, 0xAD, 0x33, 0xFF };
static const XRect _Const002D = {{ 0, 0 }, { 464, 355 }};
static const XPoint _Const002E = { 133, 299 };
static const XPoint _Const002F = { 347, 302 };
static const XPoint _Const0030 = { 346, 77 };
static const XPoint _Const0031 = { 133, 77 };
static const XPoint _Const0032 = { 125, 125 };
static const XRect _Const0033 = {{ 5, 0 }, { 790, 50 }};
static const XRect _Const0034 = {{ 0, -5 }, { 791, 49 }};
static const XColor _Const0035 = { 0xCD, 0xCD, 0xCD, 0xFF };
static const XColor _Const0036 = { 0x90, 0x9B, 0x9F, 0xFB };
static const XRect _Const0037 = {{ 26, -1 }, { 523, 49 }};
static const XStringRes _Const0038 = { _StringsDefault0, 0x00A9 };
static const XRect _Const0039 = {{ 446, 0 }, { 783, 49 }};
static const XStringRes _Const003A = { _StringsDefault0, 0x00B5 };
static const XColor _Const003B = { 0x6C, 0x78, 0x9F, 0xFB };

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
  CoreGroup__Add( _this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->PlayerDialog ), 0 );

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
  CoreRoot_OnSetOpacity,
  CoreGroup_SwitchToDialog,
  CoreGroup_DismissDialog,
  CoreGroup_PresentDialog,
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreRoot_InvalidateArea,
  CoreGroup_FindSiblingView,
  CoreGroup_FadeGroup,
  CoreGroup_RestackTop,
  CoreGroup_Remove,
  CoreGroup_Add,
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
  WidgetSetHorizontalSlider__Init( &_this->Playback, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Title, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Artist, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->CurrentTime, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Duration, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->ToTheQueue, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PlayPause, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Loop, &_this->_.XObject, 0 );
  ApplicationVinylView__Init( &_this->VinylView, &_this->_.XObject, 0 );
  CoreWipeTouchHandler__Init( &_this->OpenQueue, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PreviousButton, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->NextButton, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationPlayerDialog );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Background, _Const0003 );
  CoreRectView__OnSetBounds( &_this->Playback, _Const0004 );
  WidgetSetHorizontalSlider_OnSetMaxValue( &_this->Playback, 100 );
  WidgetSetHorizontalSlider_OnSetCurrentValue( &_this->Playback, 0 );
  CoreRectView__OnSetBounds( &_this->Title, _Const0005 );
  ViewsText_OnSetAutoSize( &_this->Title, 0 );
  ViewsText_OnSetWrapText( &_this->Title, 1 );
  ViewsText_OnSetString( &_this->Title, EwLoadString( &_Const0006 ));
  CoreRectView__OnSetBounds( &_this->Artist, _Const0007 );
  ViewsText_OnSetString( &_this->Artist, EwLoadString( &_Const0008 ));
  CoreRectView__OnSetBounds( &_this->CurrentTime, _Const0009 );
  ViewsText_OnSetString( &_this->CurrentTime, EwLoadString( &_Const000A ));
  CoreRectView__OnSetBounds( &_this->Duration, _Const000B );
  ViewsText_OnSetString( &_this->Duration, EwLoadString( &_Const000C ));
  CoreRectView__OnSetBounds( &_this->ToTheQueue, _Const000D );
  ViewsImage_OnSetFrameNumber( &_this->ToTheQueue, 1 );
  CoreRectView__OnSetBounds( &_this->PlayPause, _Const000E );
  CoreGroup_OnSetVisible((CoreGroup)&_this->PlayPause, 1 );
  WidgetSetPushButton_OnSetLabel( &_this->PlayPause, 0 );
  CoreRectView__OnSetBounds( &_this->Loop, _Const000F );
  WidgetSetPushButton_OnSetLabel( &_this->Loop, 0 );
  CoreRectView__OnSetBounds( &_this->VinylView, _Const0010 );
  CoreRectView__OnSetBounds( &_this->OpenQueue, _Const0011 );
  CoreRectView__OnSetBounds( &_this->PreviousButton, _Const0012 );
  WidgetSetPushButton_OnSetLabel( &_this->PreviousButton, 0 );
  CoreRectView__OnSetBounds( &_this->NextButton, _Const0013 );
  WidgetSetPushButton_OnSetLabel( &_this->NextButton, 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Background ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Playback ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Title ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Artist ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->CurrentTime ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Duration ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->ToTheQueue ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->PlayPause ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Loop ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->VinylView ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->OpenQueue ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->PreviousButton ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->NextButton ), 0 );
  ViewsImage_OnSetBitmap( &_this->Background, EwLoadResource( &ApplicationBackground, 
  ResourcesBitmap ));
  _this->Playback.OnChange = EwNewSlot( _this, ApplicationPlayerDialog_OnSliderChange );
  WidgetSetHorizontalSlider_OnSetAppearance( &_this->Playback, EwGetAutoObject( 
  &ApplicationHorizontalSliderConfig, WidgetSetHorizontalSliderConfig ));
  ViewsText_OnSetFont( &_this->Title, EwLoadResource( &ApplicationTitleFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Artist, EwLoadResource( &ApplicationFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->CurrentTime, EwLoadResource( &ApplicationTimeFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->Duration, EwLoadResource( &ApplicationTimeFont, ResourcesFont ));
  ViewsImage_OnSetBitmap( &_this->ToTheQueue, EwLoadResource( &ResourcesNavigationIconsLarge, 
  ResourcesBitmap ));
  _this->PlayPause.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnPlayPause );
  _this->PlayPause.OnPress = EwNewSlot( _this, ApplicationPlayerDialog_PlayPausedPressed );
  WidgetSetPushButton_OnSetIcon( &_this->PlayPause, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->PlayPause, EwGetAutoObject( &ApplicationPushButtonConfig, 
  WidgetSetPushButtonConfig ));
  _this->Loop.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnLoop );
  WidgetSetPushButton_OnSetIcon( &_this->Loop, EwLoadResource( &ApplicationLoopIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->Loop, EwGetAutoObject( &ApplicationPushButtonConfig, 
  WidgetSetPushButtonConfig ));
  _this->OpenQueue.OnTop = EwNewSlot( _this, ApplicationPlayerDialog_OnOpenQueue );
  _this->PreviousButton.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnPrevious );
  _this->PreviousButton.OnPress = EwNewSlot( _this, ApplicationPlayerDialog_PreviousPressed );
  WidgetSetPushButton_OnSetIcon( &_this->PreviousButton, EwLoadResource( &ApplicationPreviousIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->PreviousButton, EwGetAutoObject( 
  &ApplicationPushButtonConfig, WidgetSetPushButtonConfig ));
  _this->NextButton.OnRelease = EwNewSlot( _this, ApplicationPlayerDialog_OnNext );
  _this->NextButton.OnPress = EwNewSlot( _this, ApplicationPlayerDialog_NextPressed );
  WidgetSetPushButton_OnSetIcon( &_this->NextButton, EwLoadResource( &ApplicationNextIcon, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->NextButton, EwGetAutoObject( &ApplicationPushButtonConfig, 
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
  WidgetSetHorizontalSlider__ReInit( &_this->Playback );
  ViewsText__ReInit( &_this->Title );
  ViewsText__ReInit( &_this->Artist );
  ViewsText__ReInit( &_this->CurrentTime );
  ViewsText__ReInit( &_this->Duration );
  ViewsImage__ReInit( &_this->ToTheQueue );
  WidgetSetPushButton__ReInit( &_this->PlayPause );
  WidgetSetPushButton__ReInit( &_this->Loop );
  ApplicationVinylView__ReInit( &_this->VinylView );
  CoreWipeTouchHandler__ReInit( &_this->OpenQueue );
  WidgetSetPushButton__ReInit( &_this->PreviousButton );
  WidgetSetPushButton__ReInit( &_this->NextButton );
}

/* Finalizer method for the class 'Application::PlayerDialog' */
void ApplicationPlayerDialog__Done( ApplicationPlayerDialog _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Background );
  WidgetSetHorizontalSlider__Done( &_this->Playback );
  ViewsText__Done( &_this->Title );
  ViewsText__Done( &_this->Artist );
  ViewsText__Done( &_this->CurrentTime );
  ViewsText__Done( &_this->Duration );
  ViewsImage__Done( &_this->ToTheQueue );
  WidgetSetPushButton__Done( &_this->PlayPause );
  WidgetSetPushButton__Done( &_this->Loop );
  ApplicationVinylView__Done( &_this->VinylView );
  CoreWipeTouchHandler__Done( &_this->OpenQueue );
  WidgetSetPushButton__Done( &_this->PreviousButton );
  WidgetSetPushButton__Done( &_this->NextButton );

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
  EwAttachRefObserver( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), 
    EwNewRef( _this->deviceRef, ApplicationDeviceClass_OnGetCurrentTime, ApplicationDeviceClass_OnSetCurrentTime ), 
    0 );
  EwAttachRefObserver( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), 
    EwNewRef( _this->deviceRef, ApplicationDeviceClass_OnGetDuration, ApplicationDeviceClass_OnSetDuration ), 
    0 );
  EwAttachObserver( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), 123 );
  EwAttachObserver( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), 124 );
  EwPostSignal( EwNewSlot( _this, ApplicationPlayerDialog_OnTimeUpdate ), ((XObject)_this ));
}

/* Conceptual equivalent to TimeUpdate */
void ApplicationPlayerDialog_OnSliderChange( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass__UpdateTimeFromSlider( _this->deviceRef, WidgetSetHorizontalSlider_OnGetCurrentValue( 
  &_this->Playback ));
}

/* 'C' function for method : 'Application::PlayerDialog.OnLoop()' */
void ApplicationPlayerDialog_OnLoop( ApplicationPlayerDialog _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationDeviceClass__LoopTrack( _this->deviceRef );

  if ( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->Loop )
    WidgetSetPushButton_OnSetIcon( &_this->Loop, EwLoadResource( &ApplicationLoopPressedIcon, 
    ResourcesBitmap ));
  else
    WidgetSetPushButton_OnSetIcon( &_this->Loop, EwLoadResource( &ApplicationLoopIcon, 
    ResourcesBitmap ));
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

  ApplicationPlayerDialog_EnableDisableButtons( _this );

  if ( _this->Playback.MaxValue != _this->deviceRef->Duration )
  {
    WidgetSetHorizontalSlider_OnSetMaxValue( &_this->Playback, _this->deviceRef->Duration );
    EwTrace( "%s%i", EwLoadString( &_Const0014 ), _this->Playback.MaxValue );
  }

  EwTrace( "%s%i", EwLoadString( &_Const0015 ), WidgetSetHorizontalSlider_OnGetCurrentValue( 
    &_this->Playback ));
  WidgetSetHorizontalSlider_OnSetCurrentValue( &_this->Playback, _this->deviceRef->CurrentTime );
  ViewsText_OnSetString( &_this->Duration, ApplicationDeviceClass__IntToTimeString( 
  _this->deviceRef, _this->deviceRef->Duration ));
  ViewsText_OnSetString( &_this->CurrentTime, ApplicationDeviceClass__IntToTimeString( 
  _this->deviceRef, _this->deviceRef->CurrentTime ));

  if ((( WidgetSetHorizontalSlider_OnGetCurrentValue( &_this->Playback ) == _this->Playback.MaxValue ) 
      && ( WidgetSetHorizontalSlider_OnGetCurrentValue( &_this->Playback ) != 0 )) 
      && !EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->Loop )
  {
    if ( ApplicationDeviceClass_CanGoNext( EwGetAutoObject( &ApplicationDevice, 
        ApplicationDeviceClass )))
      ApplicationPlayerDialog_OnNextMethod( _this );
    else
    {
      ApplicationDeviceClass_OnSetCurrentFileIndex( EwGetAutoObject( &ApplicationDevice, 
      ApplicationDeviceClass ), -1 );
      ApplicationPlayerDialog_OnEnded( _this );
    }
  }

  ViewsText_OnSetString( &_this->Artist, EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->Artist );
  ViewsText_OnSetString( &_this->Title, EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->TitleOfTrack );
}

/* 'C' function for method : 'Application::PlayerDialog.PlayPausedPressed()' */
void ApplicationPlayerDialog_PlayPausedPressed( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  switch ( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->PlayerState )
  {
    case ApplicationStatePlaying :
      WidgetSetPushButton_OnSetIcon( &_this->PlayPause, EwLoadResource( &ApplicationPausePressedIcon, 
      ResourcesBitmap ));
    break;

    default : 
      WidgetSetPushButton_OnSetIcon( &_this->PlayPause, EwLoadResource( &ApplicationPlayPressedIcon, 
      ResourcesBitmap ));
  }
}

/* 'C' function for method : 'Application::PlayerDialog.OnPlayPause()' */
void ApplicationPlayerDialog_OnPlayPause( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  switch ( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->PlayerState )
  {
    case ApplicationStatePlaying :
      ApplicationPlayerDialog_OnPause( _this );
    break;

    case ApplicationStatePaused :
      ApplicationPlayerDialog_OnPlay( _this );
    break;

    case ApplicationStateCanPlay :
      ApplicationPlayerDialog_OnPlay( _this );
    break;

    case ApplicationStateEnded :
    {
      ApplicationDeviceClass__UpdateCurrentTime( EwGetAutoObject( &ApplicationDevice, 
      ApplicationDeviceClass ), 0 );
      ApplicationPlayerDialog_OnPlay( _this );
    }
    break;

    default : 
      ApplicationPlayerDialog_OnPlay( _this );
  }
}

/* 'C' function for method : 'Application::PlayerDialog.OnPlay()' */
void ApplicationPlayerDialog_OnPlay( ApplicationPlayerDialog _this )
{
  ApplicationDeviceClass__Play( _this->deviceRef );
  EwSignal( EwNewSlot( &_this->VinylView.AngleEffect, EffectsEffect_StartEffect ), 
    ((XObject)_this ));
  WidgetSetPushButton_OnSetIcon( &_this->PlayPause, EwLoadResource( &ApplicationPauseIcon, 
  ResourcesBitmap ));
  ApplicationDeviceClass_UpdatePlayerState( EwGetAutoObject( &ApplicationDevice, 
  ApplicationDeviceClass ), ApplicationStatePlaying );
}

/* 'C' function for method : 'Application::PlayerDialog.OnPause()' */
void ApplicationPlayerDialog_OnPause( ApplicationPlayerDialog _this )
{
  ApplicationDeviceClass__Pause( _this->deviceRef );
  EwSignal( EwNewSlot( &_this->VinylView.AngleEffect, EffectsEffect_StopEffect ), 
    ((XObject)_this ));
  WidgetSetPushButton_OnSetIcon( &_this->PlayPause, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  ApplicationDeviceClass_UpdatePlayerState( EwGetAutoObject( &ApplicationDevice, 
  ApplicationDeviceClass ), ApplicationStatePaused );
}

/* 'C' function for method : 'Application::PlayerDialog.OnEnded()' */
void ApplicationPlayerDialog_OnEnded( ApplicationPlayerDialog _this )
{
  /* List of temporarily used variables */
  void* _tmpO0;
  ((void)( _tmpO0 = EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )), 
  ApplicationDeviceClass_OnSetCurrentFileIndex((ApplicationDeviceClass)_tmpO0, ((ApplicationDeviceClass)_tmpO0)->CurrentFileIndex 
  + 1 ));
  WidgetSetHorizontalSlider_OnSetCurrentValue( &_this->Playback, 0 );
  ApplicationDeviceClass_UpdatePlayerState( EwGetAutoObject( &ApplicationDevice, 
  ApplicationDeviceClass ), ApplicationStateEnded );
  WidgetSetPushButton_OnSetIcon( &_this->PlayPause, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  EwSignal( EwNewSlot( &_this->VinylView.AngleEffect, EffectsEffect_StopEffect ), 
    ((XObject)_this ));
}

/* 'C' function for method : 'Application::PlayerDialog.OnOpenQueue()' */
void ApplicationPlayerDialog_OnOpenQueue( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__SwitchToDialog( _this->Super3.Owner, ((CoreGroup)EwNewObject( ApplicationQueueView, 
  0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideUpCentered, EffectsSlideTransition )), 
  0, 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );
}

/* 'C' function for method : 'Application::PlayerDialog.OnPrevious()' */
void ApplicationPlayerDialog_OnPrevious( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* List of temporarily used variables */
  void* _tmpO0;
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ((void)( _tmpO0 = EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )), 
  ApplicationDeviceClass_OnSetCurrentFileIndex((ApplicationDeviceClass)_tmpO0, ((ApplicationDeviceClass)_tmpO0)->CurrentFileIndex 
  - 1 ));

  if ( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->PlayerState 
      == ApplicationStatePlaying )
    ApplicationPlayerDialog_OnPlay( _this );
}

/* 'C' function for method : 'Application::PlayerDialog.OnNext()' */
void ApplicationPlayerDialog_OnNext( ApplicationPlayerDialog _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationPlayerDialog_OnNextMethod( _this );
}

/* 'C' function for method : 'Application::PlayerDialog.PreviousPressed()' */
void ApplicationPlayerDialog_PreviousPressed( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->PreviousButton, EwLoadResource( &ApplicationPreviousPressedIcon, 
  ResourcesBitmap ));
}

/* 'C' function for method : 'Application::PlayerDialog.NextPressed()' */
void ApplicationPlayerDialog_NextPressed( ApplicationPlayerDialog _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->NextButton, EwLoadResource( &ApplicationNextPressedIcon, 
  ResourcesBitmap ));
}

/* 'C' function for method : 'Application::PlayerDialog.OnNextMethod()' */
void ApplicationPlayerDialog_OnNextMethod( ApplicationPlayerDialog _this )
{
  /* List of temporarily used variables */
  void* _tmpO0;
  ((void)( _tmpO0 = EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )), 
  ApplicationDeviceClass_OnSetCurrentFileIndex((ApplicationDeviceClass)_tmpO0, ((ApplicationDeviceClass)_tmpO0)->CurrentFileIndex 
  + 1 ));

  if ( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->PlayerState 
      == ApplicationStatePlaying )
    ApplicationPlayerDialog_OnPlay( _this );
}

/* 'C' function for method : 'Application::PlayerDialog.DisablePrevious()' */
void ApplicationPlayerDialog_DisablePrevious( ApplicationPlayerDialog _this )
{
  CoreGroup_OnSetEnabled((CoreGroup)&_this->PreviousButton, 0 );
  WidgetSetPushButton_OnSetIcon( &_this->PreviousButton, EwLoadResource( &ApplicationPreviousDisabledIcon, 
  ResourcesBitmap ));
}

/* 'C' function for method : 'Application::PlayerDialog.DisableNext()' */
void ApplicationPlayerDialog_DisableNext( ApplicationPlayerDialog _this )
{
  WidgetSetPushButton_OnSetIcon( &_this->NextButton, EwLoadResource( &ApplicationNextDisabledIcon, 
  ResourcesBitmap ));
  CoreGroup_OnSetEnabled((CoreGroup)&_this->NextButton, 0 );
}

/* 'C' function for method : 'Application::PlayerDialog.EnablePrevious()' */
void ApplicationPlayerDialog_EnablePrevious( ApplicationPlayerDialog _this )
{
  CoreGroup_OnSetEnabled((CoreGroup)&_this->PreviousButton, 1 );
  WidgetSetPushButton_OnSetIcon( &_this->PreviousButton, EwLoadResource( &ApplicationPreviousIcon, 
  ResourcesBitmap ));
}

/* 'C' function for method : 'Application::PlayerDialog.EnableNext()' */
void ApplicationPlayerDialog_EnableNext( ApplicationPlayerDialog _this )
{
  CoreGroup_OnSetEnabled((CoreGroup)&_this->NextButton, 1 );
  WidgetSetPushButton_OnSetIcon( &_this->NextButton, EwLoadResource( &ApplicationNextIcon, 
  ResourcesBitmap ));
}

/* 'C' function for method : 'Application::PlayerDialog.EnableDisableButtons()' */
void ApplicationPlayerDialog_EnableDisableButtons( ApplicationPlayerDialog _this )
{
  if ( ApplicationDeviceClass_CanGoBefore( EwGetAutoObject( &ApplicationDevice, 
      ApplicationDeviceClass )))
    ApplicationPlayerDialog_EnablePrevious( _this );
  else
    ApplicationPlayerDialog_DisablePrevious( _this );

  if ( ApplicationDeviceClass_CanGoNext( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )))
    ApplicationPlayerDialog_EnableNext( _this );
  else
    ApplicationPlayerDialog_DisableNext( _this );
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
  CoreGroup_OnSetOpacity,
  CoreGroup_SwitchToDialog,
  CoreGroup_DismissDialog,
  CoreGroup_PresentDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
  CoreGroup_FindSiblingView,
  CoreGroup_FadeGroup,
  CoreGroup_RestackTop,
  CoreGroup_Remove,
  CoreGroup_Add,
EW_END_OF_CLASS( ApplicationPlayerDialog )

/* Initializer for the class 'Application::QueueView' */
void ApplicationQueueView__Init( ApplicationQueueView _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationQueueView );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  CoreVerticalList__Init( &_this->Queue, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );
  CoreWipeTouchHandler__Init( &_this->BackToPlayer, &_this->_.XObject, 0 );
  CoreSlideTouchHandler__Init( &_this->ScrollHandler, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->SelectHandler, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationQueueView );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0016 );
  ViewsRectangle_OnSetColor( &_this->Rectangle, _Const0017 );
  CoreView_OnSetLayout((CoreView)&_this->Queue, CoreLayoutAlignToRight | CoreLayoutAlignToTop );
  CoreRectView__OnSetBounds( &_this->Queue, _Const0018 );
  CoreVerticalList_OnSetItemHeight( &_this->Queue, 50 );
  CoreVerticalList_OnSetNoOfItems( &_this->Queue, 8 );
  CoreVerticalList_OnSetItemClass( &_this->Queue, EW_CLASS( ApplicationQueueItem ));
  CoreRectView__OnSetBounds( &_this->Image, _Const0019 );
  ViewsImage_OnSetFrameNumber( &_this->Image, 0 );
  CoreRectView__OnSetBounds( &_this->BackToPlayer, _Const001A );
  CoreRectView__OnSetBounds( &_this->ScrollHandler, _Const001B );
  CoreSlideTouchHandler_OnSetSnapNext( &_this->ScrollHandler, _Const001C );
  CoreQuadView__OnSetPoint4( &_this->SelectHandler, _Const001D );
  CoreQuadView__OnSetPoint3( &_this->SelectHandler, _Const001E );
  CoreQuadView__OnSetPoint2( &_this->SelectHandler, _Const001F );
  CoreQuadView__OnSetPoint1( &_this->SelectHandler, _Const0020 );
  _this->SelectHandler.RetargetCondition = CoreRetargetReasonWipeDown | CoreRetargetReasonWipeUp;
  CoreGroup__Add( _this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Queue ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Image ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->BackToPlayer ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->ScrollHandler ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->SelectHandler ), 0 );
  _this->Queue.OnLoadItem = EwNewSlot( _this, ApplicationQueueView_OnLoadItem );
  CoreVerticalList_OnSetSlideHandler( &_this->Queue, &_this->ScrollHandler );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ResourcesNavigationIconsLarge, 
  ResourcesBitmap ));
  _this->BackToPlayer.OnBottom = EwNewSlot( _this, ApplicationQueueView_OnReturnToPlayer );
  _this->SelectHandler.OnRelease = EwNewSlot( _this, ApplicationQueueView_OnSelect );
}

/* Re-Initializer for the class 'Application::QueueView' */
void ApplicationQueueView__ReInit( ApplicationQueueView _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Rectangle );
  CoreVerticalList__ReInit( &_this->Queue );
  ViewsImage__ReInit( &_this->Image );
  CoreWipeTouchHandler__ReInit( &_this->BackToPlayer );
  CoreSlideTouchHandler__ReInit( &_this->ScrollHandler );
  CoreSimpleTouchHandler__ReInit( &_this->SelectHandler );
}

/* Finalizer method for the class 'Application::QueueView' */
void ApplicationQueueView__Done( ApplicationQueueView _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Rectangle );
  CoreVerticalList__Done( &_this->Queue );
  ViewsImage__Done( &_this->Image );
  CoreWipeTouchHandler__Done( &_this->BackToPlayer );
  CoreSlideTouchHandler__Done( &_this->ScrollHandler );
  CoreSimpleTouchHandler__Done( &_this->SelectHandler );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* This method is called by 'VerticalList' every time the list loads or updates 
   an item. */
void ApplicationQueueView_OnLoadItem( ApplicationQueueView _this, XObject sender )
{
  XInt32 itemNo;
  ApplicationQueueItem itemView;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  itemNo = _this->Queue.Item;
  itemView = EwCastObject( _this->Queue.View, ApplicationQueueItem );

  if ( itemView == 0 )
    return;

  ViewsText_OnSetString( &itemView->Title, ApplicationDeviceClass__GetTitleById( 
  EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), itemNo ));
  ViewsText_OnSetString( &itemView->Artist, ApplicationDeviceClass__GetArtistById( 
  EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), itemNo ));
  ApplicationQueueItem_OnSetSource( itemView, ApplicationDeviceClass__GetSongById( 
  EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ), itemNo ));

  if ( !EwCompString( itemView->Source, EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->Src ))
  {
    CoreVerticalList_OnSetSelectedItem( &_this->Queue, itemNo );
    CoreVerticalList_EnsureVisible( &_this->Queue, itemNo, 1, 0, EwNullSlot );
  }

  CoreRectView__OnSetBounds( itemView, EwSetRectSize( itemView->Super2.Bounds, _this->Queue.ViewSize ));
}

/* 'C' function for method : 'Application::QueueView.OnReturnToPlayer()' */
void ApplicationQueueView_OnReturnToPlayer( ApplicationQueueView _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__DismissDialog( _this->Super3.Owner, ((CoreGroup)_this ), ((EffectsTransition)EwGetAutoObject( 
  &EffectsSlideDownCentered, EffectsSlideTransition )), 0, 0, EwNullSlot, EwNullSlot, 
  0 );
}

/* 'C' function for method : 'Application::QueueView.OnSelect()' */
void ApplicationQueueView_OnSelect( ApplicationQueueView _this, XObject sender )
{
  XInt32 itemNo;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SelectHandler.AutoDeflected )
    return;

  itemNo = CoreVerticalList_GetItemAtPosition( &_this->Queue, _this->SelectHandler.CurrentPos );

  if ( itemNo >= 0 )
  {
    CoreVerticalList_OnSetSelectedItem( &_this->Queue, itemNo );
    ApplicationDeviceClass_OnSetCurrentFileIndex( EwGetAutoObject( &ApplicationDevice, 
    ApplicationDeviceClass ), itemNo );
    CoreVerticalList_EnsureVisible( &_this->Queue, itemNo, 1, 0, EwNullSlot );
    CoreGroup__DismissDialog( _this->Super3.Owner, ((CoreGroup)_this ), ((EffectsTransition)EwGetAutoObject( 
    &EffectsSlideDownCentered, EffectsSlideTransition )), 0, 0, EwNullSlot, EwNullSlot, 
    0 );

    if ( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass )->PlayerState 
        == ApplicationStatePlaying )
      ApplicationDeviceClass__Play( EwGetAutoObject( &ApplicationDevice, ApplicationDeviceClass ));
  }
}

/* Variants derived from the class : 'Application::QueueView' */
EW_DEFINE_CLASS_VARIANTS( ApplicationQueueView )
EW_END_OF_CLASS_VARIANTS( ApplicationQueueView )

/* Virtual Method Table (VMT) for the class : 'Application::QueueView' */
EW_DEFINE_CLASS( ApplicationQueueView, CoreGroup, Rectangle, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Application::QueueView" )
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
  CoreGroup_OnSetOpacity,
  CoreGroup_SwitchToDialog,
  CoreGroup_DismissDialog,
  CoreGroup_PresentDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
  CoreGroup_FindSiblingView,
  CoreGroup_FadeGroup,
  CoreGroup_RestackTop,
  CoreGroup_Remove,
  CoreGroup_Add,
EW_END_OF_CLASS( ApplicationQueueView )

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
  WidgetSetHorizontalSliderConfig_OnSetTrackRightTintActive( _this, _Const0021 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightTintFocused( _this, _Const0021 );
  WidgetSetHorizontalSliderConfig_OnSetTrackRightTintDefault( _this, _Const0021 );
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
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftTintActive( _this, _Const0022 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftTintFocused( _this, _Const0022 );
  WidgetSetHorizontalSliderConfig_OnSetTrackLeftTintDefault( _this, _Const0022 );
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
  _this->PlayerState = ApplicationStateCanPlay;
  _this->TitleOfTrack = EwShareString( EwLoadString( &_Const0006 ));
  _this->Artist = EwShareString( EwLoadString( &_Const0008 ));
  _this->CurrentFileIndex = -1;

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

/* 'C' function for method : 'Application::DeviceClass.OnSetTitleOfTrack()' */
void ApplicationDeviceClass_OnSetTitleOfTrack( ApplicationDeviceClass _this, XString 
  value )
{
  if ( !EwCompString( _this->TitleOfTrack, value ))
    return;

  _this->TitleOfTrack = EwShareString( value );
}

/* 'C' function for method : 'Application::DeviceClass.OnSetArtist()' */
void ApplicationDeviceClass_OnSetArtist( ApplicationDeviceClass _this, XString value )
{
  if ( !EwCompString( _this->Artist, value ))
    return;

  _this->Artist = EwShareString( value );
}

/* 'C' function for method : 'Application::DeviceClass.IntToTimeString()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_IntToTimeString( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    return ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->IntToTimeString( _this
  , aArg1 );
  else
    return ApplicationDeviceClass___IntToTimeString( _this, aArg1 );
}

/* Implementation of the method : 'Application::DeviceClass.IntToTimeString()'. 
   The implementation has been moved here, because the origin function ApplicationDeviceClass_IntToTimeString() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___IntToTimeString( ApplicationDeviceClass _this, 
  XInt32 aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( aArg1 );

  return EwLoadString( &_Const000A );
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.IntToTimeString()' */
XString ApplicationDeviceClass__IntToTimeString( void* _this, XInt32 aArg1 )
{
  return ((ApplicationDeviceClass)_this)->_.VMT->IntToTimeString((ApplicationDeviceClass)_this
  , aArg1 );
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

/* 'C' function for method : 'Application::DeviceClass.OnSetSrc()' */
void ApplicationDeviceClass_OnSetSrc( ApplicationDeviceClass _this, XString value )
{
  if ( !EwCompString( _this->Src, value ))
    return;

  _this->Src = EwShareString( value );
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

/* 'C' function for method : 'Application::DeviceClass.Pause()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_Pause( ApplicationDeviceClass _this )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->Pause( _this );
  else
    ApplicationDeviceClass___Pause( _this );
}

/* Implementation of the method : 'Application::DeviceClass.Pause()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_Pause() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___Pause( ApplicationDeviceClass _this )
{
  ApplicationDeviceClass_UpdatePlayerState( _this, ApplicationStatePaused );
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.Pause()' */
void ApplicationDeviceClass__Pause( void* _this )
{
  ((ApplicationDeviceClass)_this)->_.VMT->Pause((ApplicationDeviceClass)_this );
}

/* 'C' function for method : 'Application::DeviceClass.LoopTrack()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_LoopTrack( ApplicationDeviceClass _this )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->LoopTrack( _this );
  else
    ApplicationDeviceClass___LoopTrack( _this );
}

/* Implementation of the method : 'Application::DeviceClass.LoopTrack()'. The implementation 
   has been moved here, because the origin function ApplicationDeviceClass_LoopTrack() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___LoopTrack( ApplicationDeviceClass _this )
{
  ApplicationDeviceClass_OnSetLoop( _this, (XBool)!_this->Loop );
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.LoopTrack()' */
void ApplicationDeviceClass__LoopTrack( void* _this )
{
  ((ApplicationDeviceClass)_this)->_.VMT->LoopTrack((ApplicationDeviceClass)_this );
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

/* 'C' function for method : 'Application::DeviceClass.UpdateCurrentTime()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->UpdateCurrentTime( _this
  , aNewValue );
  else
    ApplicationDeviceClass___UpdateCurrentTime( _this, aNewValue );
}

/* Implementation of the method : 'Application::DeviceClass.UpdateCurrentTime()'. 
   The implementation has been moved here, because the origin function ApplicationDeviceClass_UpdateCurrentTime() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___UpdateCurrentTime( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  if ( aNewValue != _this->CurrentTime )
  {
    EwTrace( "%s%i%s%i", EwLoadString( &_Const0023 ), _this->CurrentTime, EwLoadString( 
      &_Const0024 ), aNewValue );
    _this->CurrentTime = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationDeviceClass_OnGetCurrentTime, 
      ApplicationDeviceClass_OnSetCurrentTime ), 0 );
    EwNotifyObservers( 123 );
  }
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.UpdateCurrentTime()' */
void ApplicationDeviceClass__UpdateCurrentTime( void* _this, XInt32 aNewValue )
{
  ((ApplicationDeviceClass)_this)->_.VMT->UpdateCurrentTime((ApplicationDeviceClass)_this
  , aNewValue );
}

/* 'C' function for method : 'Application::DeviceClass.UpdateTimeFromSlider()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_UpdateTimeFromSlider( ApplicationDeviceClass _this, 
  XInt32 aArg1 )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->UpdateTimeFromSlider( _this
  , aArg1 );
  else
    ApplicationDeviceClass___UpdateTimeFromSlider( _this, aArg1 );
}

/* Implementation of the method : 'Application::DeviceClass.UpdateTimeFromSlider()'. 
   The implementation has been moved here, because the origin function ApplicationDeviceClass_UpdateTimeFromSlider() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___UpdateTimeFromSlider( ApplicationDeviceClass _this, 
  XInt32 aArg1 )
{
  ApplicationDeviceClass__UpdateCurrentTime( _this, aArg1 );
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.UpdateTimeFromSlider()' */
void ApplicationDeviceClass__UpdateTimeFromSlider( void* _this, XInt32 aArg1 )
{
  ((ApplicationDeviceClass)_this)->_.VMT->UpdateTimeFromSlider((ApplicationDeviceClass)_this
  , aArg1 );
}

/* 'C' function for method : 'Application::DeviceClass.UpdateDuration()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
void ApplicationDeviceClass_UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->UpdateDuration( _this
  , aNewValue );
  else
    ApplicationDeviceClass___UpdateDuration( _this, aNewValue );
}

/* Implementation of the method : 'Application::DeviceClass.UpdateDuration()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_UpdateDuration() 
   does serve as the dispatcher to the derived class variants only. */
void ApplicationDeviceClass___UpdateDuration( ApplicationDeviceClass _this, XInt32 
  aNewValue )
{
  if ( aNewValue != _this->Duration )
  {
    EwTrace( "%s%i%s%i", EwLoadString( &_Const0025 ), _this->Duration, EwLoadString( 
      &_Const0024 ), aNewValue );
    _this->Duration = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationDeviceClass_OnGetDuration, 
      ApplicationDeviceClass_OnSetDuration ), 0 );
    EwNotifyObservers( 124 );
  }
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.UpdateDuration()' */
void ApplicationDeviceClass__UpdateDuration( void* _this, XInt32 aNewValue )
{
  ((ApplicationDeviceClass)_this)->_.VMT->UpdateDuration((ApplicationDeviceClass)_this
  , aNewValue );
}

/* 'C' function for method : 'Application::DeviceClass.InitSlot()' */
void ApplicationDeviceClass_InitSlot( ApplicationDeviceClass _this, XObject sender )
{
  XObject thisObject;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  thisObject = ((XObject)_this );
  EmWiPlayer.initialize();
  ApplicationDeviceClass_OnSetCurrentFileIndex( _this, 0 );
}

/* 'C' function for method : 'Application::DeviceClass.OnSetCurrentFileIndex()' */
void ApplicationDeviceClass_OnSetCurrentFileIndex( ApplicationDeviceClass _this, 
  XInt32 value )
{
  if ( _this->CurrentFileIndex == value )
    return;

  _this->CurrentFileIndex = value;
  ApplicationDeviceClass_OnSetTitleOfTrack( _this, ApplicationDeviceClass__GetTitleById( 
  _this, _this->CurrentFileIndex ));
  ApplicationDeviceClass_OnSetArtist( _this, ApplicationDeviceClass__GetArtistById( 
  _this, _this->CurrentFileIndex ));
  ApplicationDeviceClass_OnSetSrc( _this, ApplicationDeviceClass__GetSongById( _this, 
  _this->CurrentFileIndex ));
}

/* 'C' function for method : 'Application::DeviceClass.GetTitleById()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_GetTitleById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    return ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->GetTitleById( _this
  , aArg1 );
  else
    return ApplicationDeviceClass___GetTitleById( _this, aArg1 );
}

/* Implementation of the method : 'Application::DeviceClass.GetTitleById()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetTitleById() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___GetTitleById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( aArg1 );

  return 0;
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetTitleById()' */
XString ApplicationDeviceClass__GetTitleById( void* _this, XInt32 aArg1 )
{
  return ((ApplicationDeviceClass)_this)->_.VMT->GetTitleById((ApplicationDeviceClass)_this
  , aArg1 );
}

/* 'C' function for method : 'Application::DeviceClass.GetArtistById()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_GetArtistById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    return ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->GetArtistById( _this
  , aArg1 );
  else
    return ApplicationDeviceClass___GetArtistById( _this, aArg1 );
}

/* Implementation of the method : 'Application::DeviceClass.GetArtistById()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetArtistById() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___GetArtistById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( aArg1 );

  return 0;
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetArtistById()' */
XString ApplicationDeviceClass__GetArtistById( void* _this, XInt32 aArg1 )
{
  return ((ApplicationDeviceClass)_this)->_.VMT->GetArtistById((ApplicationDeviceClass)_this
  , aArg1 );
}

/* 'C' function for method : 'Application::DeviceClass.GetSongById()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XString ApplicationDeviceClass_GetSongById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    return ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->GetSongById( _this
  , aArg1 );
  else
    return ApplicationDeviceClass___GetSongById( _this, aArg1 );
}

/* Implementation of the method : 'Application::DeviceClass.GetSongById()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetSongById() 
   does serve as the dispatcher to the derived class variants only. */
XString ApplicationDeviceClass___GetSongById( ApplicationDeviceClass _this, XInt32 
  aArg1 )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( aArg1 );

  return 0;
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetSongById()' */
XString ApplicationDeviceClass__GetSongById( void* _this, XInt32 aArg1 )
{
  return ((ApplicationDeviceClass)_this)->_.VMT->GetSongById((ApplicationDeviceClass)_this
  , aArg1 );
}

/* 'C' function for method : 'Application::DeviceClass.CanGoBefore()' */
XBool ApplicationDeviceClass_CanGoBefore( ApplicationDeviceClass _this )
{
  if ( _this->CurrentFileIndex == 0 )
    return 0;

  return 1;
}

/* 'C' function for method : 'Application::DeviceClass.CanGoNext()' */
XBool ApplicationDeviceClass_CanGoNext( ApplicationDeviceClass _this )
{
  return (XBool)!( _this->CurrentFileIndex == ( ApplicationDeviceClass__GetSizeOfList( 
    _this ) - 1 ));
}

/* 'C' function for method : 'Application::DeviceClass.GetSizeOfList()'
   Please note, this function serves as the dispatcher to the methods overriden 
   in the derived class variants. */
XInt32 ApplicationDeviceClass_GetSizeOfList( ApplicationDeviceClass _this )
{
  XObject _vthis = _this->_vthis;

  if ( _vthis && _vthis->_.VMT )
    return ((const struct _dmt_ApplicationDeviceClass*)(_vthis->_.VMT))->GetSizeOfList( _this );
  else
    return ApplicationDeviceClass___GetSizeOfList( _this );
}

/* Implementation of the method : 'Application::DeviceClass.GetSizeOfList()'. The 
   implementation has been moved here, because the origin function ApplicationDeviceClass_GetSizeOfList() 
   does serve as the dispatcher to the derived class variants only. */
XInt32 ApplicationDeviceClass___GetSizeOfList( ApplicationDeviceClass _this )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  return 1;
}

/* Wrapper function for the virtual method : 'Application::DeviceClass.GetSizeOfList()' */
XInt32 ApplicationDeviceClass__GetSizeOfList( void* _this )
{
  return ((ApplicationDeviceClass)_this)->_.VMT->GetSizeOfList((ApplicationDeviceClass)_this );
}

/* Variants derived from the class : 'Application::DeviceClass' */
EW_DEFINE_CLASS_VARIANTS( ApplicationDeviceClass )
  EW_STATIC_CLASS_VARIANT( SimulationDeviceClass ),
EW_END_OF_CLASS_VARIANTS( ApplicationDeviceClass )

/* Virtual Method Table (VMT) for the class : 'Application::DeviceClass' */
EW_DEFINE_CLASS( ApplicationDeviceClass, TemplatesDeviceClass, TitleOfTrack, TitleOfTrack, 
                 TitleOfTrack, TitleOfTrack, TitleOfTrack, PlayerState, "Application::DeviceClass" )
  ApplicationDeviceClass_IntToTimeString,
  ApplicationDeviceClass_Play,
  ApplicationDeviceClass_Pause,
  ApplicationDeviceClass_LoopTrack,
  ApplicationDeviceClass_UpdateCurrentTime,
  ApplicationDeviceClass_UpdateTimeFromSlider,
  ApplicationDeviceClass_UpdateDuration,
  ApplicationDeviceClass_GetTitleById,
  ApplicationDeviceClass_GetArtistById,
  ApplicationDeviceClass_GetSongById,
  ApplicationDeviceClass_GetSizeOfList,
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
  WidgetSetPushButtonConfig_OnSetPressedFeedbackDuration( _this, 50 );
  WidgetSetPushButtonConfig_OnSetIconTintActive( _this, _Const0026 );
  WidgetSetPushButtonConfig_OnSetIconTintFocused( _this, _Const0027 );
  WidgetSetPushButtonConfig_OnSetIconTintDisabled( _this, _Const0028 );
  WidgetSetPushButtonConfig_OnSetIconTintDefault( _this, _Const0029 );
  WidgetSetPushButtonConfig_OnSetLabelFont( _this, EwLoadResource( &ApplicationTimeFont, 
  ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceTintActive( _this, _Const002A );
  WidgetSetPushButtonConfig_OnSetFaceTintFocused( _this, _Const002B );
  WidgetSetPushButtonConfig_OnSetFaceTintDefault( _this, _Const002C );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( _this, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( _this, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( _this, 0 );
  WidgetSetPushButtonConfig_OnSetFaceActive( _this, EwLoadResource( &ApplicationPlayIcon, 
  ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceFocused( _this, EwLoadResource( &ApplicationPausePressedIcon, 
  ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceDefault( _this, EwLoadResource( &ApplicationPausePressedIcon, 
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

/* Include a file containing the bitmap resource : 'Application::PausePressedIcon' */
#include "_ApplicationPausePressedIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PausePressedIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPausePressedIcon )

/* Include a file containing the bitmap resource : 'Application::PlayPressedIcon' */
#include "_ApplicationPlayPressedIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PlayPressedIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPlayPressedIcon )

/* Include a file containing the bitmap resource : 'Application::LoopPressedIcon' */
#include "_ApplicationLoopPressedIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::LoopPressedIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationLoopPressedIcon )

/* Initializer for the class 'Application::VinylView' */
void ApplicationVinylView__Init( ApplicationVinylView _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationVinylView );

  /* ... then construct all embedded objects */
  ViewsWarpImage__Init( &_this->Vinyl, &_this->_.XObject, 0 );
  EffectsFloatEffect__Init( &_this->AngleEffect, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationVinylView );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const002D );
  CoreQuadView__OnSetPoint4( &_this->Vinyl, _Const002E );
  CoreQuadView__OnSetPoint3( &_this->Vinyl, _Const002F );
  CoreQuadView__OnSetPoint2( &_this->Vinyl, _Const0030 );
  CoreQuadView__OnSetPoint1( &_this->Vinyl, _Const0031 );
  ViewsWarpView_OnSetSourceAnchor((ViewsWarpView)&_this->Vinyl, _Const0032 );
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_this->AngleEffect, 7000 );
  _this->AngleEffect.Value2 = 359.0f;
  CoreGroup__Add( _this, ((CoreView)&_this->Vinyl ), 0 );
  ViewsWarpImage_OnSetBitmap( &_this->Vinyl, EwLoadResource( &ApplicationGenericVinyl, 
  ResourcesBitmap ));
  _this->AngleEffect.Super1.OnAnimate = EwNewSlot( _this, ApplicationVinylView_OnAngleEffect );
}

/* Re-Initializer for the class 'Application::VinylView' */
void ApplicationVinylView__ReInit( ApplicationVinylView _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsWarpImage__ReInit( &_this->Vinyl );
  EffectsFloatEffect__ReInit( &_this->AngleEffect );
}

/* Finalizer method for the class 'Application::VinylView' */
void ApplicationVinylView__Done( ApplicationVinylView _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsWarpImage__Done( &_this->Vinyl );
  EffectsFloatEffect__Done( &_this->AngleEffect );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::VinylView.Rotate()' */
void ApplicationVinylView_Rotate( ApplicationVinylView _this )
{
  XPoint desPos = EwGetRectCenter( EwGetRectORect( _this->Super2.Bounds ));

  ViewsWarpView_RotateAndScale((ViewsWarpView)&_this->Vinyl, desPos, -_this->Angle, 
  0.9f, 0.9f );
}

/* 'C' function for method : 'Application::VinylView.OnSetAngle()' */
void ApplicationVinylView_OnSetAngle( ApplicationVinylView _this, XFloat value )
{
  if ( _this->Angle == value )
    return;

  _this->Angle = value;
}

/* 'C' function for method : 'Application::VinylView.OnGetAngle()' */
XFloat ApplicationVinylView_OnGetAngle( ApplicationVinylView _this )
{
  return _this->Angle;
}

/* 'C' function for method : 'Application::VinylView.UpdateAngle()' */
void ApplicationVinylView_UpdateAngle( ApplicationVinylView _this, XFloat aNewValue )
{
  if ( aNewValue != _this->Angle )
  {
    _this->Angle = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ApplicationVinylView_OnGetAngle, ApplicationVinylView_OnSetAngle ), 
      0 );
  }
}

/* 'C' function for method : 'Application::VinylView.OnAngleEffect()' */
void ApplicationVinylView_OnAngleEffect( ApplicationVinylView _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ApplicationVinylView_UpdateAngle( _this, _this->AngleEffect.Value );
  ApplicationVinylView_Rotate( _this );
}

/* Variants derived from the class : 'Application::VinylView' */
EW_DEFINE_CLASS_VARIANTS( ApplicationVinylView )
EW_END_OF_CLASS_VARIANTS( ApplicationVinylView )

/* Virtual Method Table (VMT) for the class : 'Application::VinylView' */
EW_DEFINE_CLASS( ApplicationVinylView, CoreGroup, Vinyl, Angle, Angle, Angle, Angle, 
                 Angle, "Application::VinylView" )
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
  CoreGroup_OnSetOpacity,
  CoreGroup_SwitchToDialog,
  CoreGroup_DismissDialog,
  CoreGroup_PresentDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
  CoreGroup_FindSiblingView,
  CoreGroup_FadeGroup,
  CoreGroup_RestackTop,
  CoreGroup_Remove,
  CoreGroup_Add,
EW_END_OF_CLASS( ApplicationVinylView )

/* Initializer for the class 'Application::QueueItem' */
void ApplicationQueueItem__Init( ApplicationQueueItem _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationQueueItem );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Title, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Artist, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationQueueItem );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0033 );
  CoreView_OnSetLayout((CoreView)&_this->Rectangle, CoreLayoutAlignToTop );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0034 );
  ViewsRectangle_OnSetColorBL( &_this->Rectangle, _Const0035 );
  ViewsRectangle_OnSetColorBR( &_this->Rectangle, _Const0035 );
  ViewsRectangle_OnSetColor( &_this->Rectangle, _Const0036 );
  CoreRectView__OnSetBounds( &_this->Title, _Const0037 );
  ViewsText_OnSetAlignment( &_this->Title, ViewsTextAlignmentAlignHorzLeft | ViewsTextAlignmentAlignVertCenter );
  ViewsText_OnSetString( &_this->Title, EwLoadString( &_Const0038 ));
  CoreRectView__OnSetBounds( &_this->Artist, _Const0039 );
  ViewsText_OnSetAlignment( &_this->Artist, ViewsTextAlignmentAlignHorzCenter | 
  ViewsTextAlignmentAlignVertCenter );
  ViewsText_OnSetString( &_this->Artist, EwLoadString( &_Const003A ));
  CoreGroup__Add( _this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Title ), 0 );
  CoreGroup__Add( _this, ((CoreView)&_this->Artist ), 0 );
  ViewsText_OnSetFont( &_this->Title, EwLoadResource( &ApplicationFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Artist, EwLoadResource( &ResourcesFontSmall, ResourcesFont ));
}

/* Re-Initializer for the class 'Application::QueueItem' */
void ApplicationQueueItem__ReInit( ApplicationQueueItem _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Rectangle );
  ViewsText__ReInit( &_this->Title );
  ViewsText__ReInit( &_this->Artist );
}

/* Finalizer method for the class 'Application::QueueItem' */
void ApplicationQueueItem__Done( ApplicationQueueItem _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Rectangle );
  ViewsText__Done( &_this->Title );
  ViewsText__Done( &_this->Artist );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* The method UpdateViewState() is invoked automatically after the state of the 
   component has been changed. This method can be overridden and filled with logic 
   to ensure the visual aspect of the component does reflect its current state. 
   For example, the 'enabled' state of the component can affect its colors (disabled 
   components may appear pale). In this case the logic of the method should modify 
   the respective color properties accordingly to the current 'enabled' state. 
   The current state of the component is passed as a set in the parameter aState. 
   It reflects the very basic component state like its visibility or the ability 
   to react to user inputs. Beside this common state, the method can also involve 
   any other variables used in the component as long as they reflect its current 
   state. For example, the toggle switch component can take in account its toggle 
   state 'on' or 'off' and change accordingly the location of the slider, etc.
   Usually, this method will be invoked automatically by the framework. Optionally 
   you can request its invocation by using the method @InvalidateViewState(). */
void ApplicationQueueItem_UpdateViewState( ApplicationQueueItem _this, XSet aState )
{
  CoreGroup_UpdateViewState((CoreGroup)_this, aState );

  if ((( aState & CoreViewStateSelected ) == CoreViewStateSelected ))
    ViewsRectangle_OnSetColor( &_this->Rectangle, _Const003B );
  else
    ViewsRectangle_OnSetColor( &_this->Rectangle, _Const0036 );
}

/* 'C' function for method : 'Application::QueueItem.OnSetSource()' */
void ApplicationQueueItem_OnSetSource( ApplicationQueueItem _this, XString value )
{
  if ( !EwCompString( _this->Source, value ))
    return;

  _this->Source = EwShareString( value );
}

/* Variants derived from the class : 'Application::QueueItem' */
EW_DEFINE_CLASS_VARIANTS( ApplicationQueueItem )
EW_END_OF_CLASS_VARIANTS( ApplicationQueueItem )

/* Virtual Method Table (VMT) for the class : 'Application::QueueItem' */
EW_DEFINE_CLASS( ApplicationQueueItem, CoreGroup, Rectangle, Source, Source, Source, 
                 Source, _.VMT, "Application::QueueItem" )
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
  CoreGroup_OnSetOpacity,
  CoreGroup_SwitchToDialog,
  CoreGroup_DismissDialog,
  CoreGroup_PresentDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  ApplicationQueueItem_UpdateViewState,
  CoreGroup_InvalidateArea,
  CoreGroup_FindSiblingView,
  CoreGroup_FadeGroup,
  CoreGroup_RestackTop,
  CoreGroup_Remove,
  CoreGroup_Add,
EW_END_OF_CLASS( ApplicationQueueItem )

/* Include a file containing the bitmap resource : 'Application::PreviousIcon' */
#include "_ApplicationPreviousIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PreviousIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPreviousIcon )

/* Include a file containing the bitmap resource : 'Application::NextIcon' */
#include "_ApplicationNextIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::NextIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationNextIcon )

/* Include a file containing the bitmap resource : 'Application::PreviousPressedIcon' */
#include "_ApplicationPreviousPressedIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PreviousPressedIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPreviousPressedIcon )

/* Include a file containing the bitmap resource : 'Application::NextPressedIcon' */
#include "_ApplicationNextPressedIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::NextPressedIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationNextPressedIcon )

/* Include a file containing the bitmap resource : 'Application::PreviousDisabledIcon' */
#include "_ApplicationPreviousDisabledIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PreviousDisabledIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationPreviousDisabledIcon )

/* Include a file containing the bitmap resource : 'Application::NextDisabledIcon' */
#include "_ApplicationNextDisabledIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Application::NextDisabledIcon' */
EW_RES_WITHOUT_VARIANTS( ApplicationNextDisabledIcon )

/* Embedded Wizard */
