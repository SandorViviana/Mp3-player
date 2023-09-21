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
var Dl=[0,0,0,0];var Ea="No graphics engine bitmap attached to this canvas";var EW=
"The canvas is already initialized with a graphics engine bitmap";var Ga="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Gb="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={AL:null,Hp:B.vx,D7:0,H6:false,Dr:function(){if(this.H6)this.DetachBitmap(
);},Cg:function(aArg){this.Fk=true;},My:function(value){if((value[0]<=0)||(value[
1]<=0))value=Aw;if(B.z8(value,this.FrameSize))return;if(this.H6)throw new Error(
Bk);this.FrameSize=value;this.CC=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(
this.FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.
bitmap;B.zx(handle);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
Aw;this.FrameDelay=0;this.NoOfFrames=1;}this.Hp=[].concat(Aw,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.D7;for(this.D7=this.NoOfFrames-1;this.D7>=0;this.
D7--)this.J_(this.Hp,this.Hp,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.D7=dstFrameNr;}}if(!(((A=this.Hp)[0]>=A[2])||(A[1]>=A[3])))this.Hp=Dl;},DetachBitmap:
function(){if(!this.H6)throw new Error(Ea);this.bitmap=null;this.H6=false;this.FrameSize=
Aw;this.FrameDelay=0;this.NoOfFrames=1;this.CC=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(EW);if(!aBitmap)return this;this.
bitmap=aBitmap;this.H6=true;var noOfFrames=1;var frameSize=Aw;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.CC=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Me:function(aClip
,Lp,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Lr,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Lp||!Lp.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(Lr===1)orient=90;else if(Lr===2)orient=180;else if(Lr===3)orient=
270;var dstFrameNo=this.D7;var dstBitmap=this.bitmap;var srcFont=Lp.font;{B.qT(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Oc:function(aClip,aBitmap,aFrameNr
,aDstRect,GW,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!GW)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.D7;var srcRect=[].concat(Aw,aBitmap.FrameSize
);var left=((GW&0x1)===0x1);var top=((GW&0x2)===0x2);var right=((GW&0x4)===0x4);
var bottom=((GW&0x8)===0x8);var interior=((GW&0x10)===0x10);{B.zp(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},PZ:function(aClip,aBitmap,aFrameNr,aDstX1
,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect
,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var Y=aDstX1;var Aa=aDstX2;var Z=aDstY1;var Ab=aDstY2;if(aDstX2<
Y)Y=aDstX2;if(aDstX3<Y)Y=aDstX3;if(aDstX4<Y)Y=aDstX4;if(aDstX2>Aa)Aa=aDstX2;if(aDstX3>
Aa)Aa=aDstX3;if(aDstX4>Aa)Aa=aDstX4;if(aDstY2<Z)Z=aDstY2;if(aDstY3<Z)Z=aDstY3;if(
aDstY4<Z)Z=aDstY4;if(aDstY2>Ab)Ab=aDstY2;if(aDstY3>Ab)Ab=aDstY3;if(aDstY4>Ab)Ab=
aDstY4;if(((((Aa-Y)>4096)||((Aa-Y)<-4096))||((Ab-Z)>4096))||((Ab-Z)<-4096)){B.aa8(
"%s",Ga);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.D7;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter);}},PU:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var
right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-
4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s",Gb);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.D7;{B.aa9(dstBitmap
,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,
bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},N9:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.D7;{B.gn(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
J_:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=
this.D7;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},_Init:function(aArg){B.abg.U._Init.call(this,aArg);this.__proto__=C.
Canvas;this.Cg(aArg);},_Done:function(){this.Dr();this.__proto__=B.abg.U;B.abg.U.
_Done.call(this);},_Mark:function(D){var A;B.abg.U._Mark.call(this,D);if((A=this.
AL)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};C.MS={Op:
1,Oq:0,Or:0,Os:0,Ot:1,Ou:0,IJ:0,IK:0,Ov:1,Ml:0,HW:0,QB:true,ID:function(Qj,Qk){var
Q8=((Qj*this.IJ)+(Qk*this.IK))+this.Ml;this.HW=Q8;return true;},N_:function(I7,I_
,I8,I$,Lt,Lu,I9,Ja){var M_=I8-Lt;var Na=I$-Lu;var M$=I9-Lt;var Nb=Ja-Lu;var NM=((
I7-I8)+Lt)-I9;var NN=((I_-I$)+Lu)-Ja;var Lz=(M_*Nb)-(Na*M$);if(!Lz)return null;this.
IJ=((NM*Nb)-(NN*M$))/Lz;this.IK=((M_*NN)-(Na*NM))/Lz;this.Ov=0;this.Ml=1;this.Op=(
I8-I7)+(this.IJ*I8);this.Oq=(I9-I7)+(this.IK*I9);this.Or=I7;this.Os=(I$-I_)+(this.
IJ*I$);this.Ot=(Ja-I_)+(this.IK*Ja);this.Ou=I_;this.QB=false;return this;},_Init:
function(aArg){this.__proto__=C.MS;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle!=
D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.Hg={Left:0x1,PX:0x2,Right:0x4,N6:0x8,RO:0x10};
C._Init=function(){C.Canvas.__proto__=B.abg.U;};C._ReInit=function(){};C.CI=function(
D){};return C;})();

/* Embedded Wizard */