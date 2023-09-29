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
* Profile  : WebGL
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.abg)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.abg=(function(){var B=EmWiApp;var C={};
var Aw=[0,0];var Bk="The property \'FrameSize\' is READ ONLY.";
C.V={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.vw,Fn:false,CD:false,Dt:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.bitmap=null;this.
FrameSize=Aw;this.FrameDelay=0;this.NoOfFrames=1;this.CD=false;},Ch:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Aw;var frameDelay=
0;{var bmp=B.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Fn=true;this.CD=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},MJ:function(value){throw new
Error(Bk);},Update:function(){},_Init:function(aArg){B.Core.EV._Init.call(this,aArg
);this.__proto__=C.V;this.Ch(aArg);},_Done:function(){this.Dt();this.__proto__=B.
Core.EV;B.Core.EV._Done.call(this);},_className:"Resources::Bitmap"};C.By={font:
null,Leading:0,Descent:0,Ascent:0,Dt:function(){this.QF();},Ch:function(aArg){this.
QL(aArg);},QF:function(){if(!this.font)return;var handle=this.font;B.zy(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},QL:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Mq:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.zG(handle,aFlowString);return advance;}
,PW:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jm;var handle=this.
font;var result=B.jm;result=B.aaz(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Hr:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.ms(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.EV._Init.call(this,aArg);this.__proto__=C.By;this.Ch(aArg);
},_Done:function(){this.Dt();this.__proto__=B.Core.EV;B.Core.EV._Done.call(this);
},_className:"Resources::Font"};C.Ki={_class:function(){return C.By;},0:{Data:function(
){return B.abp;},Cache:[],_this:null}};C.IT={_class:function(){return C.V;},0:{FileName:
"./res/ResourcesNavigationIconsLarge.png",Format:B.jt,NoOfFrames:20,FrameSize:[54
,54],FrameDelay:0,_this:null}};
C._Init=function(){C.V.__proto__=B.Core.EV;C.By.__proto__=B.Core.EV;};C._ReInit=function(
){};C.CJ=function(D){var A;if((A=C.Ki[0]._this)&&(A._cycle!=D))A._Done(C.Ki[0]._this=
null);if((A=C.IT[0]._this)&&(A._cycle!=D))A._Done(C.IT[0]._this=null);};return C;
})();

/* Embedded Wizard */