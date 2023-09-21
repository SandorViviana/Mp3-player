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
C.U={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.vw,Fk:false,CC:false,Dr:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.bitmap=null;this.
FrameSize=Aw;this.FrameDelay=0;this.NoOfFrames=1;this.CC=false;},Cg:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Aw;var frameDelay=
0;{var bmp=B.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Fk=true;this.CC=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},My:function(value){throw new
Error(Bk);},Update:function(){},_Init:function(aArg){B.Core.ES._Init.call(this,aArg
);this.__proto__=C.U;this.Cg(aArg);},_Done:function(){this.Dr();this.__proto__=B.
Core.ES;B.Core.ES._Done.call(this);},_className:"Resources::Bitmap"};C.By={font:
null,Leading:0,Descent:0,Ascent:0,Dr:function(){this.Qw();},Cg:function(aArg){this.
QC(aArg);},Qw:function(){if(!this.font)return;var handle=this.font;B.zy(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},QC:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Mg:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.zG(handle,aFlowString);return advance;}
,PN:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jm;var handle=this.
font;var result=B.jm;result=B.aaz(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Hn:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.ms(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.ES._Init.call(this,aArg);this.__proto__=C.By;this.Cg(aArg);
},_Done:function(){this.Dr();this.__proto__=B.Core.ES;B.Core.ES._Done.call(this);
},_className:"Resources::Font"};C.Kb={_class:function(){return C.By;},0:{Data:function(
){return B.abp;},Cache:[],_this:null}};C.IM={_class:function(){return C.U;},0:{FileName:
"./res/ResourcesNavigationIconsLarge.png",Format:B.jt,NoOfFrames:20,FrameSize:[54
,54],FrameDelay:0,_this:null}};
C._Init=function(){C.U.__proto__=B.Core.ES;C.By.__proto__=B.Core.ES;};C._ReInit=function(
){};C.CI=function(D){var A;if((A=C.Kb[0]._this)&&(A._cycle!=D))A._Done(C.Kb[0]._this=
null);if((A=C.IM[0]._this)&&(A._cycle!=D))A._Done(C.IM[0]._this=null);};return C;
})();

/* Embedded Wizard */