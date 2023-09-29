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
);EmWiApp.Graphics=(function(){var B=EmWiApp;var C={};
var Aw=[0,0];var Bk="Can not resize explicitly attached graphics engine bitmaps";
var Dl=[0,0,0,0];var Ec="No graphics engine bitmap attached to this canvas";var EZ=
"The canvas is already initialized with a graphics engine bitmap";var Gb="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Gc="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={AL:null,Ht:B.vx,D9:0,Ia:false,Dt:function(){if(this.Ia)this.DetachBitmap(
);},Ch:function(aArg){this.Fn=true;},MJ:function(value){if((value[0]<=0)||(value[
1]<=0))value=Aw;if(B.z8(value,this.FrameSize))return;if(this.Ia)throw new Error(
Bk);this.FrameSize=value;this.CD=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(
this.FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.
bitmap;B.zx(handle);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
Aw;this.FrameDelay=0;this.NoOfFrames=1;}this.Ht=[].concat(Aw,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.D9;for(this.D9=this.NoOfFrames-1;this.D9>=0;this.
D9--)this.Kf(this.Ht,this.Ht,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.D9=dstFrameNr;}}if(!(((A=this.Ht)[0]>=A[2])||(A[1]>=A[3])))this.Ht=Dl;},DetachBitmap:
function(){if(!this.Ia)throw new Error(Ec);this.bitmap=null;this.Ia=false;this.FrameSize=
Aw;this.FrameDelay=0;this.NoOfFrames=1;this.CD=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(EZ);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Ia=true;var noOfFrames=1;var frameSize=Aw;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.CD=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Mn:function(aClip
,Lz,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,LB,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Lz||!Lz.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(LB===1)orient=90;else if(LB===2)orient=180;else if(LB===3)orient=
270;var dstFrameNo=this.D9;var dstBitmap=this.bitmap;var srcFont=Lz.font;{B.qT(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},On:function(aClip,aBitmap,aFrameNr
,aDstRect,GY,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!GY)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.D9;var srcRect=[].concat(Aw,aBitmap.FrameSize
);var left=((GY&0x1)===0x1);var top=((GY&0x2)===0x2);var right=((GY&0x4)===0x4);
var bottom=((GY&0x8)===0x8);var interior=((GY&0x10)===0x10);{B.zp(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},P8:function(aClip,aBitmap,aFrameNr,aDstX1
,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect
,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var Y=aDstX1;var Aa=aDstX2;var Z=aDstY1;var Ab=aDstY2;if(aDstX2<
Y)Y=aDstX2;if(aDstX3<Y)Y=aDstX3;if(aDstX4<Y)Y=aDstX4;if(aDstX2>Aa)Aa=aDstX2;if(aDstX3>
Aa)Aa=aDstX3;if(aDstX4>Aa)Aa=aDstX4;if(aDstY2<Z)Z=aDstY2;if(aDstY3<Z)Z=aDstY3;if(
aDstY4<Z)Z=aDstY4;if(aDstY2>Ab)Ab=aDstY2;if(aDstY3>Ab)Ab=aDstY3;if(aDstY4>Ab)Ab=
aDstY4;if(((((Aa-Y)>4096)||((Aa-Y)<-4096))||((Ab-Z)>4096))||((Ab-Z)<-4096)){B.aa8(
"%s",Gb);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.D9;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter);}},P3:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var
right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-
4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s",Gc);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.D9;{B.aa9(dstBitmap
,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,
bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},Oh:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.D9;{B.gn(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
Kf:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=
this.D9;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},_Init:function(aArg){B.abg.V._Init.call(this,aArg);this.__proto__=C.
Canvas;this.Ch(aArg);},_Done:function(){this.Dt();this.__proto__=B.abg.V;B.abg.V.
_Done.call(this);},_Mark:function(D){var A;B.abg.V._Mark.call(this,D);if((A=this.
AL)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};C.M1={Oy:
1,Oz:0,OA:0,OB:0,OC:1,OD:0,IQ:0,IR:0,OE:1,Mw:0,H2:0,QK:true,IK:function(Qs,Qt){var
Rg=((Qs*this.IQ)+(Qt*this.IR))+this.Mw;this.H2=Rg;return true;},Oi:function(Ja,Jd
,Jb,Je,LD,LE,Jc,Jf){var Ni=Jb-LD;var Nk=Je-LE;var Nj=Jc-LD;var Nl=Jf-LE;var NW=((
Ja-Jb)+LD)-Jc;var NX=((Jd-Je)+LE)-Jf;var LJ=(Ni*Nl)-(Nk*Nj);if(!LJ)return null;this.
IQ=((NW*Nl)-(NX*Nj))/LJ;this.IR=((Ni*NX)-(Nk*NW))/LJ;this.OE=0;this.Mw=1;this.Oy=(
Jb-Ja)+(this.IQ*Jb);this.Oz=(Jc-Ja)+(this.IR*Jc);this.OA=Ja;this.OB=(Je-Jd)+(this.
IQ*Je);this.OC=(Jf-Jd)+(this.IR*Jf);this.OD=Jd;this.QK=false;return this;},_Init:
function(aArg){this.__proto__=C.M1;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle!=
D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.Hk={Left:0x1,P6:0x2,Right:0x4,Oe:0x8,RY:0x10};
C._Init=function(){C.Canvas.__proto__=B.abg.V;};C._ReInit=function(){};C.CJ=function(
D){};return C;})();

/* Embedded Wizard */