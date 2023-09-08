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
var Cd=[0,0,0,0];var C_="No graphics engine bitmap attached to this canvas";var C$=
"The canvas is already initialized with a graphics engine bitmap";var Dv="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Dw="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={DF:null,Es:B.vx,Ck:0,EZ:false,B2:function(){if(this.EZ)this.DetachBitmap(
);},Bd:function(aArg){this.DR=true;},HD:function(C){if((C[0]<=0)||(C[1]<=0))C=Ap;
if(B.z8(C,this.FrameSize))return;if(this.EZ)throw new Error(AN);this.FrameSize=C;
this.B1=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=Ap;this.FrameDelay=
0;this.NoOfFrames=1;}this.Es=[].concat(Ap,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Ck;for(this.Ck=this.NoOfFrames-1;this.Ck>=0;this.Ck--)this.Gi(this.Es,this.
Es,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Ck=dstFrameNr;}}if(!(((
A=this.Es)[0]>=A[2])||(A[1]>=A[3])))this.Es=Cd;},DetachBitmap:function(){if(!this.
EZ)throw new Error(C_);this.bitmap=null;this.EZ=false;this.FrameSize=Ap;this.FrameDelay=
0;this.NoOfFrames=1;this.B1=false;return this;},AttachBitmap:function(aBitmap){if(
!!this.bitmap)throw new Error(C$);if(!aBitmap)return this;this.bitmap=aBitmap;this.
EZ=true;var noOfFrames=1;var frameSize=Ap;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;
frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.B1=(this.FrameDelay>0)&&(
this.NoOfFrames>1);return this;},Hu:function(aClip,GZ,aString,aOffset,aCount,aDstRect
,aSrcPos,aMinWidth,G1,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!GZ||!GZ.font)||((
aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(G1===1)orient=90;else
if(G1===2)orient=180;else if(G1===3)orient=270;var dstFrameNo=this.Ck;var dstBitmap=
this.bitmap;var srcFont=GZ.font;{B.qT(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Iw:function(aClip,aBitmap,aFrameNr,aDstRect,D5,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!D5)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Ck;var srcRect=[
].concat(Ap,aBitmap.FrameSize);var left=((D5&0x1)===0x1);var top=((D5&0x2)===0x2
);var right=((D5&0x4)===0x4);var bottom=((D5&0x8)===0x8);var interior=((D5&0x10)===
0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,
top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},GW:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var P=aDstX1;var R=aDstX2;
var Q=aDstY1;var S=aDstY2;if(aDstX2<P)P=aDstX2;if(aDstX3<P)P=aDstX3;if(aDstX4<P)
P=aDstX4;if(aDstX2>R)R=aDstX2;if(aDstX3>R)R=aDstX3;if(aDstX4>R)R=aDstX4;if(aDstY2<
Q)Q=aDstY2;if(aDstY3<Q)Q=aDstY3;if(aDstY4<Q)Q=aDstY4;if(aDstY2>S)S=aDstY2;if(aDstY3>
S)S=aDstY3;if(aDstY4>S)S=aDstY4;if(((((R-P)>4096)||((R-P)<-4096))||((S-Q)>4096))||((
S-Q)<-4096)){B.aa8("%s",Dv);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Ck;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Jy:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,Dw);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Ck;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},Iu:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Ck;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Gi:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.Ck;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.abg.T._Init.call(this
,aArg);this.__proto__=D.Canvas;this.Bd(aArg);},_Done:function(){this.B2();this.__proto__=
B.abg.T;B.abg.T._Done.call(this);},_Mark:function(E){var A;B.abg.T._Mark.call(this
,E);if((A=this.DF)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Graphics::Canvas"
};D.Ej={Left:0x1,K5:0x2,Right:0x4,Kl:0x8,Kz:0x10};
D._Init=function(){D.Canvas.__proto__=B.abg.T;};D._ReInit=function(){};D.Bw=function(
E){};return D;})();

/* Embedded Wizard */