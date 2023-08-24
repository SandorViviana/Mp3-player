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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var D={};
var Ap=[0,0];var AN="Can not resize explicitly attached graphics engine bitmaps";
var Cc=[0,0,0,0];var C6="No graphics engine bitmap attached to this canvas";var C7=
"The canvas is already initialized with a graphics engine bitmap";var Dr="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Ds="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={DB:null,Ej:B.vx,Cj:0,ER:false,B0:function(){if(this.ER)this.DetachBitmap(
);},Bd:function(aArg){this.DQ=true;},Hs:function(C){if((C[0]<=0)||(C[1]<=0))C=Ap;
if(B.z8(C,this.FrameSize))return;if(this.ER)throw new Error(AN);this.FrameSize=C;
this.BZ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=Ap;this.FrameDelay=
0;this.NoOfFrames=1;}this.Ej=[].concat(Ap,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Cj;for(this.Cj=this.NoOfFrames-1;this.Cj>=0;this.Cj--)this.Ga(this.Ej,this.
Ej,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Cj=dstFrameNr;}}if(!(((
A=this.Ej)[0]>=A[2])||(A[1]>=A[3])))this.Ej=Cc;},DetachBitmap:function(){if(!this.
ER)throw new Error(C6);this.bitmap=null;this.ER=false;this.FrameSize=Ap;this.FrameDelay=
0;this.NoOfFrames=1;this.BZ=false;return this;},AttachBitmap:function(aBitmap){if(
!!this.bitmap)throw new Error(C7);if(!aBitmap)return this;this.bitmap=aBitmap;this.
ER=true;var noOfFrames=1;var frameSize=Ap;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;
frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.BZ=(this.FrameDelay>0)&&(
this.NoOfFrames>1);return this;},Hj:function(aClip,GO,aString,aOffset,aCount,aDstRect
,aSrcPos,aMinWidth,GQ,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!GO||!GO.font)||((
aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(GQ===1)orient=90;else
if(GQ===2)orient=180;else if(GQ===3)orient=270;var dstFrameNo=this.Cj;var dstBitmap=
this.bitmap;var srcFont=GO.font;{B.qT(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Ik:function(aClip,aBitmap,aFrameNr,aDstRect,DZ,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!DZ)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Cj;var srcRect=[
].concat(Ap,aBitmap.FrameSize);var left=((DZ&0x1)===0x1);var top=((DZ&0x2)===0x2
);var right=((DZ&0x4)===0x4);var bottom=((DZ&0x8)===0x8);var interior=((DZ&0x10)===
0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,
top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},GL:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var O=aDstX1;var Q=aDstX2;
var P=aDstY1;var R=aDstY2;if(aDstX2<O)O=aDstX2;if(aDstX3<O)O=aDstX3;if(aDstX4<O)
O=aDstX4;if(aDstX2>Q)Q=aDstX2;if(aDstX3>Q)Q=aDstX3;if(aDstX4>Q)Q=aDstX4;if(aDstY2<
P)P=aDstY2;if(aDstY3<P)P=aDstY3;if(aDstY4<P)P=aDstY4;if(aDstY2>R)R=aDstY2;if(aDstY3>
R)R=aDstY3;if(aDstY4>R)R=aDstY4;if(((((Q-O)>4096)||((Q-O)<-4096))||((R-P)>4096))||((
R-P)<-4096)){B.aa8("%s",Dr);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Cj;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Jd:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,Ds);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Cj;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},Ii:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Cj;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ga:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.Cj;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.abg.T._Init.call(this
,aArg);this.__proto__=D.Canvas;this.Bd(aArg);},_Done:function(){this.B0();this.__proto__=
B.abg.T;B.abg.T._Done.call(this);},_Mark:function(E){var A;B.abg.T._Mark.call(this
,E);if((A=this.DB)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Graphics::Canvas"
};D.Ea={Left:0x1,KD:0x2,Right:0x4,JV:0x8,J9:0x10};
D._Init=function(){D.Canvas.__proto__=B.abg.T;};D._ReInit=function(){};D.Bx=function(
E){};return D;})();

/* Embedded Wizard */