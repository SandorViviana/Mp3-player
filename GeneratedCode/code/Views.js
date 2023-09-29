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
);if(EmWiApp.abh)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
abh=(function(){var B=EmWiApp;var C={};
var Aw=[0,0];var Bk=[0,0,0,0];var Dl="\uFEFF";
C.A6={J3:0xFFFFFFFF,J4:0xFFFFFFFF,Da:0xFFFFFFFF,Db:function(A2,aClip,aOffset,A$,aBlend
){var A;var AX=0xFFFFFFFF;var AY=0xFFFFFFFF;var AO=this.J3;var AQ=this.J4;var A3=
this.Da;aBlend=aBlend&&((this.E&0x2)===0x2);A$=A$+1;if((AO===AQ)&&(0xFFFFFFFF===
AO))AX=AY=AO=AQ=A3;else if(A3!==0xFFFFFFFF){AX=(AX&0x00FFFFFF)|((((255*(((A3>>24
)&0xFF)+1))>>8)&0xFF)<<24);AX=(AX&0xFFFFFF00)|((((AX&0xFF)*((A3&0xFF)+1))>>8)&0xFF
);AX=(AX&0xFFFF00FF)|((((((AX>>8)&0xFF)*(((A3>>8)&0xFF)+1))>>8)&0xFF)<<8);AX=(AX&
0xFF00FFFF)|((((((AX>>16)&0xFF)*(((A3>>16)&0xFF)+1))>>8)&0xFF)<<16);AY=(AY&0x00FFFFFF
)|((((255*(((A3>>24)&0xFF)+1))>>8)&0xFF)<<24);AY=(AY&0xFFFFFF00)|((((AY&0xFF)*((
A3&0xFF)+1))>>8)&0xFF);AY=(AY&0xFFFF00FF)|((((((AY>>8)&0xFF)*(((A3>>8)&0xFF)+1))>>
8)&0xFF)<<8);AY=(AY&0xFF00FFFF)|((((((AY>>16)&0xFF)*(((A3>>16)&0xFF)+1))>>8)&0xFF
)<<16);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*(((A3>>24)&0xFF)+1))>>8)&0xFF)<<24
);AO=(AO&0xFFFFFF00)|((((AO&0xFF)*((A3&0xFF)+1))>>8)&0xFF);AO=(AO&0xFFFF00FF)|((((((
AO>>8)&0xFF)*(((A3>>8)&0xFF)+1))>>8)&0xFF)<<8);AO=(AO&0xFF00FFFF)|((((((AO>>16)&
0xFF)*(((A3>>16)&0xFF)+1))>>8)&0xFF)<<16);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)
*(((A3>>24)&0xFF)+1))>>8)&0xFF)<<24);AQ=(AQ&0xFFFFFF00)|((((AQ&0xFF)*((A3&0xFF)+
1))>>8)&0xFF);AQ=(AQ&0xFFFF00FF)|((((((AQ>>8)&0xFF)*(((A3>>8)&0xFF)+1))>>8)&0xFF
)<<8);AQ=(AQ&0xFF00FFFF)|((((((AQ>>16)&0xFF)*(((A3>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(A$<256){AX=(AX&0x00FFFFFF)|((((A$*((AX>>24)&0xFF))>>8)&0xFF)<<24);AY=(AY&0x00FFFFFF
)|((((A$*((AY>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((A$*((AO>>24)&0xFF
))>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((A$*((AQ>>24)&0xFF))>>8)&0xFF)<<24);}A2.
Kf(aClip,B.aam(this.K,aOffset),AX,AY,AQ,AO,aBlend);},OY:function(value){var A;if(
value===this.J3)return;this.J3=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(
this.K);},OZ:function(value){var A;if(value===this.J4)return;this.J4=value;if(!!
this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},De:function(value){var A;if(value===
this.Da)return;this.Da=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);
},_Init:function(aArg){B.Core.Bj._Init.call(this,aArg);this.__proto__=C.A6;},_className:
"Views::Rectangle"};C.Ho={timer:null,V:null,Bm:-1,Da:0xFFFFFFFF,Hk:0x1F,EM:0,AP:
0,FY:B.vw,CD:false,Db:function(A2,aClip,aOffset,A$,aBlend){var A;var Bq=this.EM;
if(this.Bm>=0)Bq=this.Bm;if(!this.V||(Bq>=this.V.NoOfFrames))return;this.V.Update(
);var AX;var AY;var AQ;var AO;var A3=this.Da;var BS=(((A$+1)*255)>>8)+1;var Co=this.
Hk;var R=B.aam(this.K,aOffset);var JU=B.aaj([R[2]-R[0],R[3]-R[1]],this.FY);aBlend=
aBlend&&((this.E&0x2)===0x2);AX=AY=AO=AQ=A3;if(BS<256){AX=(AX&0x00FFFFFF)|((((((
AX>>24)&0xFF)*BS)>>8)&0xFF)<<24);AY=(AY&0x00FFFFFF)|((((((AY>>24)&0xFF)*BS)>>8)&
0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)*BS)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((((AO>>24)&0xFF)*BS)>>8)&0xFF)<<24);}if(((this.FY[0]>0)&&(JU[0]>0))&&!((Co&
0x5)===0x5)){var CL=((this.V.FrameSize[0]/3)|0)-JU[0];if(((Co&0x1)===0x1)){if(aClip[
2]>R[2])aClip=B.aaQ(aClip,R[2]);if(CL>0)R=B.aaQ(R,R[2]+CL);Co=Co|0x4;}else if(((
Co&0x4)===0x4)){if(aClip[0]<R[0])aClip=[].concat(R[0],aClip.slice(1,4));if(CL>0)
R=[].concat(R[0]-CL,R.slice(1,4));Co=Co|0x1;}else{if(aClip[0]<R[0])aClip=[].concat(
R[0],aClip.slice(1,4));if(aClip[2]>R[2])aClip=B.aaQ(aClip,R[2]);if(CL>0){R=[].concat(
R[0]-((CL/2)|0),R.slice(1,4));R=B.aaQ(R,(R[2]+CL)-((CL/2)|0));}Co=Co|0x5;}}if(((
this.FY[1]>0)&&(JU[1]>0))&&!((Co&0xA)===0xA)){var CL=((this.V.FrameSize[1]/3)|0)-
JU[1];if(((Co&0x2)===0x2)){if(aClip[3]>R[3])aClip=[].concat(aClip.slice(0,3),R[3
]);if(CL>0)R=[].concat(R.slice(0,3),R[3]+CL);Co=Co|0x8;}else if(((Co&0x8)===0x8)
){if(aClip[1]<R[1])aClip=B.aaS(aClip,R[1]);if(CL>0)R=B.aaS(R,R[1]-CL);Co=Co|0x2;
}else{if(aClip[1]<R[1])aClip=B.aaS(aClip,R[1]);if(aClip[3]>R[3])aClip=[].concat(
aClip.slice(0,3),R[3]);if(CL>0){R=B.aaS(R,R[1]-((CL/2)|0));R=[].concat(R.slice(0
,3),(R[3]+CL)-((CL/2)|0));}Co=Co|0xA;}}A2.On(aClip,this.V,Bq,R,Co,AX,AY,AQ,AO,aBlend
);},Fd:function(Ag){var A;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},
B9:function(Ag){var A;var Bq=this.Bm;var Cf=0;if(!!this.V)Cf=this.V.NoOfFrames*this.
V.FrameDelay;if((!!this.timer&&(this.Bm<0))&&(Cf>0))this.AP=this.timer.Ar-(this.
EM*this.V.FrameDelay);if(!!this.timer&&(Cf>0)){var Af=(this.timer.Ar-this.AP)|0;
Bq=(Af/this.V.FrameDelay)|0;if(Af>=Cf){Bq=Bq%this.V.NoOfFrames;this.AP=this.timer.
Ar-(Af%Cf);}}if(((Bq!==this.Bm)&&!!this.F)&&((this.E&0x1)===0x1))this.F.Ao(this.
K);this.Bm=Bq;if(!Cf&&!!this.timer){B.zl([this,this.B9],this.timer,0);this.timer=
null;}},De:function(value){var A;if(value===this.Da)return;this.Da=value;if(!!this.
F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},Dw:function(value){var A;if(this.CD===
value)return;this.CD=value;this.Bm=-1;if(!value&&!!this.timer){B.zl([this,this.B9
],this.timer,0);this.timer=null;}if(value){this.timer=B._GetAutoObject(B.abj.Fl);
B.y_([this,this.B9],this.timer,0);B.ow([this,this.B9],this);}if(!!this.F&&((this.
E&0x1)===0x1))this.F.Ao(this.K);},MG:function(value){var A;if(value===this.Hk)return;
this.Hk=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},ET:function(
value){var A;if(value<0)value=0;if((value===this.EM)&&(this.Bm===-1))return;this.
EM=value;if(!this.timer)this.Bm=-1;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.
K);},DU:function(value){var A;if(value===this.V)return;if(!!this.V&&this.V.Fn)B.
zl([this,this.Fd],this.V,0);this.V=value;this.Bm=-1;if(!!value&&value.Fn)B.y_([this
,this.Fd],value,0);if(this.CD){this.Dw(false);this.Dw(true);}if(!!this.F&&((this.
E&0x1)===0x1))this.F.Ao(this.K);},Es:function(value){if(value)this.A8(0x1,0x0);else
this.A8(0x0,0x1);},MN:function(value){var A;if(value[0]<0)value=[0,value[1]];if(
value[1]<0)value=[value[0],0];if(B.z8(value,this.FY))return;this.FY=value;if((!!
this.F&&((this.E&0x1)===0x1))&&!((this.Hk&0xF)===0xF))this.F.Ao(this.K);},_Init:
function(aArg){B.Core.Bj._Init.call(this,aArg);this.__proto__=C.Ho;},_Mark:function(
D){var A;B.Core.Bj._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"
};C.CX={timer:null,V:null,AP:0,Bm:0,Da:0xFFFFFFFF,EG:0x12,EM:0,CD:false,Db:function(
A2,aClip,aOffset,A$,aBlend){var A;var Bq=this.EM;if(this.Bm>=0)Bq=this.Bm;if(!this.
V||(Bq>=this.V.NoOfFrames))return;this.V.Update();var N=this.Hp();var AU=this.V.
FrameSize;if((N[0]>=N[2])||(N[1]>=N[3]))return;var AX;var AY;var AQ;var AO;var A3=
this.Da;var BS=(((A$+1)*255)>>8)+1;aBlend=aBlend&&((this.E&0x2)===0x2);AX=AY=AO=
AQ=A3;if(BS<256){AX=(AX&0x00FFFFFF)|((((((AX>>24)&0xFF)*BS)>>8)&0xFF)<<24);AY=(AY&
0x00FFFFFF)|((((((AY>>24)&0xFF)*BS)>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>
24)&0xFF)*BS)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*BS)>>8)&0xFF
)<<24);}if(B.z8([N[2]-N[0],N[3]-N[1]],AU))A2.Oh(aClip,this.V,Bq,B.aam(this.K,aOffset
),B.aaj(this.K.slice(0,2),N.slice(0,2)),AX,AY,AQ,AO,aBlend);else A2.P3(aClip,this.
V,Bq,B.aam(N,aOffset),[].concat(Aw,AU),AX,AY,AQ,AO,aBlend,true);},Fd:function(Ag
){var A;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},B9:function(Ag){var
A;var Bq=this.Bm;var Cf=0;if(!!this.V)Cf=this.V.NoOfFrames*this.V.FrameDelay;if((
!!this.timer&&(this.Bm<0))&&(Cf>0))this.AP=this.timer.Ar-(this.EM*this.V.FrameDelay
);if(!!this.timer&&(Cf>0)){var Af=(this.timer.Ar-this.AP)|0;Bq=(Af/this.V.FrameDelay
)|0;if(Af>=Cf){Bq=Bq%this.V.NoOfFrames;this.AP=this.timer.Ar-(Af%Cf);}}if(((Bq!==
this.Bm)&&!!this.F)&&((this.E&0x1)===0x1))this.F.Ao(this.K);this.Bm=Bq;if(!Cf&&!
!this.timer){B.zl([this,this.B9],this.timer,0);this.timer=null;}},De:function(value
){var A;if(value===this.Da)return;this.Da=value;if(!!this.F&&((this.E&0x1)===0x1
))this.F.Ao(this.K);},Dw:function(value){var A;if(this.CD===value)return;this.CD=
value;this.Bm=-1;if(!value&&!!this.timer){B.zl([this,this.B9],this.timer,0);this.
timer=null;}if(value){this.timer=B._GetAutoObject(B.abj.Fl);B.y_([this,this.B9],
this.timer,0);B.ow([this,this.B9],this);}if(!!this.F&&((this.E&0x1)===0x1))this.
F.Ao(this.K);},GJ:function(value){var A;if(value===this.EG)return;this.EG=value;
if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},ET:function(value){var A;if(
value<0)value=0;if((value===this.EM)&&(this.Bm===-1))return;this.EM=value;if(!this.
timer)this.Bm=-1;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);},DU:function(
value){var A;if(value===this.V)return;if(!!this.V&&this.V.Fn)B.zl([this,this.Fd]
,this.V,0);this.V=value;this.Bm=-1;if(!!value&&value.Fn)B.y_([this,this.Fd],value
,0);if(this.CD){this.Dw(false);this.Dw(true);}if(!!this.F&&((this.E&0x1)===0x1))
this.F.Ao(this.K);},Hp:function(){var A;if(!this.V)return Bk;var Ap=this.EG;var AU=
this.V.FrameSize;var Al=this.K;var width=Al[2]-Al[0];var height=Al[3]-Al[1];if(!
AU[0]||!AU[1])return Bk;var AA=[0,0,width,height];var Ad=AA;if(((Ap&0x40)===0x40
)){var Mc=((((AA[2]-AA[0])<<16)+((AU[0]/2)|0))/AU[0])|0;var Iy=((((AA[3]-AA[1])<<
16)+((AU[1]/2)|0))/AU[1])|0;var Fh=Mc;if(Iy>Fh)Fh=Iy;Ad=B.aaO(Ad,((AU[0]*Fh)+32768
)>>16);Ad=B.aaL(Ad,((AU[1]*Fh)+32768)>>16);}else if(((Ap&0x80)===0x80)){var Mc=((((
AA[2]-AA[0])<<16)+((AU[0]/2)|0))/AU[0])|0;var Iy=((((AA[3]-AA[1])<<16)+((AU[1]/2
)|0))/AU[1])|0;var Fh=Mc;if(Iy<Fh)Fh=Iy;Ad=B.aaO(Ad,((AU[0]*Fh)+32768)>>16);Ad=B.
aaL(Ad,((AU[1]*Fh)+32768)>>16);}else if(!((Ap&0x100)===0x100))Ad=B.aaN(Ad,AU);if((
Ad[2]-Ad[0])!==(AA[2]-AA[0])){if(((Ap&0x4)===0x4))Ad=B.aaP(Ad,AA[2]-(Ad[2]-Ad[0]
));else if(((Ap&0x2)===0x2))Ad=B.aaP(Ad,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Ad[2]-Ad[
0])/2)|0));}if((Ad[3]-Ad[1])!==(AA[3]-AA[1])){if(((Ap&0x20)===0x20))Ad=B.aaR(Ad,
AA[3]-(Ad[3]-Ad[1]));else if(((Ap&0x10)===0x10))Ad=B.aaR(Ad,(AA[1]+(((AA[3]-AA[1
])/2)|0))-(((Ad[3]-Ad[1])/2)|0));}Ad=B.aam(Ad,Al.slice(0,2));return Ad;},_Init:function(
aArg){B.Core.Bj._Init.call(this,aArg);this.__proto__=C.CX;},_Mark:function(D){var
A;B.Core.Bj._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};
C.Text={By:null,Bb:B.jm,String:B.jm,Dg:null,FS:B.vw,EG:0x12,Da:0xFFFFFFFF,GW:false
,II:false,FV:false,J_:false,Cs:false,Dt:function(){if(!!this.Dg){this.LO(this.Dg
);this.Dg=null;}},Db:function(A2,aClip,aOffset,A$,aBlend){var A;if((this.Bb===B.
jm)||!this.By)return;var Ap=this.EG;var font=this.By;var AA=B.aam(this.K,aOffset
);var AX;var AY;var AQ;var AO;var Qx=this.Da;var BS=(((A$+1)*255)>>8)+1;var En=this.
Bb.charCodeAt(0)||0;var N=B.aam(this.Hp(),aOffset);var Dq=[AA[0]-N[0],(AA[1]-N[1
])-font.Ascent];if(En<1)return;AX=AY=AO=AQ=Qx;if(BS<256){AX=(AX&0x00FFFFFF)|((((((
AX>>24)&0xFF)*BS)>>8)&0xFF)<<24);AY=(AY&0x00FFFFFF)|((((((AY>>24)&0xFF)*BS)>>8)&
0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)*BS)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((((AO>>24)&0xFF)*BS)>>8)&0xFF)<<24);}if(((Ap&0x80)===0x80)){if(this.Kq())Ap=(
Ap&~0x80)|0x4;else Ap=(Ap&~0x80)|0x1;}if((En===1)&&!((Ap&0x40)===0x40)){A2.Mn(aClip
,font,this.Bb,2,(this.Bb.charCodeAt(1)||0)-1,AA,Dq,0,0,AX,AY,AQ,AO,true);return;
}var leading=font.Leading;var Mb=(font.Ascent+font.Descent)+leading;var Qv=aClip[
1]-N[1];var Qw=aClip[3]-N[1];var LF=N[2]-N[0];var D4=0;var G=1;var A3=this.Bb.charCodeAt(
1)||0;while(((D4+Mb)<Qv)&&(A3>0)){G=G+A3;D4=D4+Mb;A3=this.Bb.charCodeAt(G)||0;}while((
D4<Qw)&&(A3>0)){var Gq=B.aaj(Dq,[0,D4]);var NV=0;var JB=false;if(((((Ap&0x40)===
0x40)&&((this.Bb.charCodeAt((G+A3)-1)||0)!==0x0A))&&((this.Bb.charCodeAt(G+1)||0
)!==0x0A))&&((this.Bb.charCodeAt(G+A3)||0)!==0x00))JB=true;if(JB&&!!(Ap&0x6)){var
NU=G+A3;var Nd=this.Bb.indexOf(String.fromCharCode(0x20),G+1);var Ne=this.Bb.indexOf(
String.fromCharCode(0xA0),G+1);if(((Nd<0)||(Nd>=NU))&&((Ne<0)||(Ne>=NU)))JB=false;
}if(JB)NV=LF;else if(((Ap&0x4)===0x4))Gq=[(Gq[0]-LF)+font.Hr(this.Bb,G+1,A3-1),Gq[
1]];else if(((Ap&0x2)===0x2))Gq=[(Gq[0]-((LF/2)|0))+((font.Hr(this.Bb,G+1,A3-1)/
2)|0),Gq[1]];A2.Mn(aClip,font,this.Bb,G+1,A3-1,AA,Gq,NV,0,AX,AY,AQ,AO,true);G=G+
A3;D4=D4+Mb;A3=this.Bb.charCodeAt(G)||0;}},Aj:function(value){var A;if(B.z9(value
,this.K))return;var NT;NT=((A=this.K)[2]-A[0])!==(value[2]-value[0]);if(((NT&&this.
GW)&&this.Cs)&&!((this.E&0x2000)===0x2000)){this.Bb=B.jm;this.Cs=false;B.ow([this
,this.Fe],this);}if(((this.FV&&this.Cs)&&!B.z8([(A=this.K)[2]-A[0],A[3]-A[1]],[value[
2]-value[0],value[3]-value[1]]))&&!((this.E&0x2000)===0x2000)){this.Bb=B.jm;this.
Cs=false;B.ow([this,this.Fe],this);}B.Core.Bj.Aj.call(this,value);B.ow([this,this.
L$],this);},LO:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Qz:function(aSize){
var bidi=null;bidi=B.vj(aSize);return bidi;},L$:function(Ag){},Fe:function(Ag){B.
ow([this,this.JM],this);},JM:function(Ag){var A;if(this.Cs)return;var width=(A=this.
K)[2]-A[0];var height=(A=this.K)[3]-A[1];var EE=-1;var font=this.By;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.GW){EE=width;if(EE<0)EE=1;}if(
!!this.Dg){this.LO(this.Dg);this.Dg=null;}this.Cs=true;if((this.String!==B.jm)&&
!!font){var length=this.String.length;if(this.J_)this.Dg=this.Qz(length);this.Bb=
font.PW(this.String,0,EE,length,this.Dg);if(!!this.Dg&&!this.Ow()){this.LO(this.
Dg);this.Dg=null;}}else this.Bb=B.jm;this.FS=Aw;if(((this.FV&&(this.Bb!==B.jm))&&
!this.II)&&!!font){var Ap=this.EG;var leading=font.Leading;var Br=this.Bb;var JS=
this.Kq();if(((Ap&0x80)===0x80)){if(JS)Ap=(Ap&~0x80)|0x4;else Ap=(Ap&~0x80)|0x1;
}var JQ=(font.Ascent+font.Descent)+leading;var En=Br.charCodeAt(0)||0;var FF=((height+
leading)/JQ)|0;var LI=false;var Jp=false;if(FF<=0)FF=1;if(En>FF){var D3=0;var Ix=
0;var JR=En-1;var BO;var Ce=Br.length;var tmp=B.jm;if(!!(Ap&0x110)&&!!(Ap&0x28))
Ap&=~0x110;if(!!(Ap&0x110))Ap&=~0x28;if(((Ap&0x20)===0x20))Ix=En-FF;else if(((Ap&
0x10)===0x10)||((Ap&0x100)===0x100)){Ix=((En-FF)/2)|0;JR=(Ix+FF)-1;}else JR=FF-1;
LI=Ix>0;Jp=JR<(En-1);for(BO=1;D3<Ix;D3=D3+1)BO=BO+(Br.charCodeAt(BO)||0);if(Jp)for(
Ce=BO;D3<JR;D3=D3+1)Ce=Ce+(Br.charCodeAt(Ce)||0);if(LI){var CA=Br.charCodeAt(BO)||
0;tmp=(Dl+B.aaY(Br,BO,CA))+Dl;tmp=B.aaT(tmp,0,(CA+2)&0xFFFF);BO=BO+CA;if((tmp.charCodeAt(
CA)||0)===0x0A){tmp=B.aaT(tmp,CA,0xFEFF);tmp=B.aaT(tmp,CA+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp
,1,0xFEFF);}tmp=tmp+B.aaY(Br,BO,Ce-BO);if(Jp&&(Ce>=BO)){var CA=Br.charCodeAt(Ce)||
0;var CU=(Dl+B.aaY(Br,Ce,CA))+Dl;CU=B.aaT(CU,0,(CA+2)&0xFFFF);CU=B.aaT(CU,1,0xFEFF
);if((CU.charCodeAt(CA)||0)===0x0A){CU=B.aaT(CU,CA,0xFEFF);CU=B.aaT(CU,CA+1,0x0A
);}if((CU.charCodeAt(2)||0)===0x0A){CU=B.aaT(CU,2,0xFEFF);CU=B.aaT(CU,1,0x0A);}else
CU=B.aaT(CU,1,0xFEFF);tmp=tmp+CU;}Br=String.fromCharCode(FF&0xFFFF)+tmp;}var D3=
0;var C7=1;var L0=width;En=Br.charCodeAt(0)||0;for(;D3<En;D3=D3+1){var FN=LI&&!D3;
var FO=Jp&&(D3===(En-1));var DH=false;var DI=false;var Hb=JS;if((JS&&FN)&&!FO){FN=
false;FO=true;}else if((JS&&FO)&&!FN){FO=false;FN=true;}var Iz=C7+1;var CA=Br.charCodeAt(
C7)||0;var BO=Iz;var Ce=(Iz+CA)-2;var LT=-1;var LU=-1;if(!this.GW&&(font.Hr(Br,Iz
,CA-1)>L0)){var Gj=Ap;if(((Gj&0x2)===0x2)&&!!(Gj&0x5))Gj&=~0x2;if(((Gj&0x2)===0x2
))Gj&=~0x5;if(((Gj&0x4)===0x4))DH=true;else if(((Gj&0x2)===0x2)){DH=true;DI=true;
}else DI=true;}if((Br.charCodeAt(BO)||0)===0x0A)BO=BO+1;if((Br.charCodeAt(Ce)||0
)===0x0A)Ce=Ce-1;while(DH&&((Br.charCodeAt(BO)||0)===0xFEFF))BO=BO+1;while(DI&&((
Br.charCodeAt(Ce)||0)===0xFEFF))Ce=Ce-1;DH=DH&&!FO;DI=DI&&!FN;while((((DH||DI)||
FN)||FO)&&(BO<Ce)){if((DH&&(Hb||!DI))||FN){if(LT>0)Br=B.aaT(Br,LT,0xFEFF);Br=B.aaT(
Br,BO,0x2026);LT=BO;BO=BO+1;Hb=!Hb;FN=false;if(font.Hr(Br,Iz,CA-1)<=L0){DH=false;
DI=false;}else DH=DH||!DI;}if((DI&&(!Hb||!DH))||FO){if(LU>0)Br=B.aaT(Br,LU,0xFEFF
);Br=B.aaT(Br,Ce,0x2026);LU=Ce;Ce=Ce-1;Hb=!Hb;FO=false;if(font.Hr(Br,Iz,CA-1)<=L0
){DH=false;DI=false;}else DI=DI||!DH;}}C7=C7+CA;}this.FS=[font.Mq(Br),((Br.charCodeAt(
0)||0)*JQ)-leading];this.Bb=Br;}if(this.II&&(this.Bb!==B.jm)){this.E=this.E|0x2000;
this.Aj(B.z4(this.Hp(),Aw));this.E=this.E&~0x2000;}if(!!this.F&&((this.E&0x1)===
0x1))this.F.Ao(this.K);B.ow([this,this.L$],this);},O1:function(value){if(value===
this.J_)return;this.J_=value;this.Bb=B.jm;this.Cs=false;B.ow([this,this.Fe],this
);},O0:function(value){if(value===this.FV)return;this.FV=value;if(this.GW||value
)this.E=this.E&~0x100;else this.E=this.E|0x100;this.Bb=B.jm;this.Cs=false;B.ow([
this,this.Fe],this);},OX:function(value){if(value===this.II)return;this.II=value;
if(value&&this.FV){this.Bb=B.jm;this.Cs=false;B.ow([this,this.Fe],this);}if(value&&
this.Cs){this.E=this.E|0x2000;this.Aj(B.z4(this.Hp(),Aw));this.E=this.E&~0x2000;
}},MU:function(value){if(value===this.GW)return;this.GW=value;if(this.Cs){this.Bb=
B.jm;this.Cs=false;B.ow([this,this.Fe],this);}if(value||this.FV)this.E=this.E&~0x100;
else this.E=this.E|0x100;},GJ:function(value){var A;if(value===this.EG)return;this.
EG=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);if(this.FV){this.Bb=
B.jm;this.Cs=false;B.ow([this,this.Fe],this);}if(this.Cs)B.ow([this,this.L$],this
);},Dx:function(value){if(value===this.String)return;this.String=value;this.Bb=B.
jm;this.Cs=false;B.ow([this,this.Fe],this);},FZ:function(value){if(value===this.
By)return;this.By=value;this.Bb=B.jm;this.Cs=false;B.ow([this,this.Fe],this);},De:
function(value){var A;if(value===this.Da)return;this.Da=value;if(!!this.F&&((this.
E&0x1)===0x1))this.F.Ao(this.K);},Kq:function(){if(!this.Cs)this.JM(this);if(!this.
Dg)return false;var result=false;var bidi=this.Dg;result=B.vi(bidi);return result;
},Ow:function(){if(!this.Cs)this.JM(this);if(!this.Dg)return false;var result=false;
var bidi=this.Dg;result=B.zc(bidi);return result;},Hp:function(){var A;if((this.
String===B.jm)||!this.By)return Bk;if(!this.Cs)this.JM(this);if(this.Bb===B.jm)return Bk;
var leading=this.By.Leading;var JQ=(this.By.Ascent+this.By.Descent)+this.By.Leading;
if(B.z8(this.FS,Aw))this.FS=[this.By.Mq(this.Bb),this.FS[1]];this.FS=[this.FS[0]
,((this.Bb.charCodeAt(0)||0)*JQ)-leading];var Ap=this.EG;var Al=this.K;var width=
Al[2]-Al[0];var height=Al[3]-Al[1];var AA=[0,0,width,height];var Ad=[].concat(AA.
slice(0,2),B.aak(AA.slice(0,2),this.FS));if(((Ap&0x80)===0x80)){if(this.Kq())Ap=(
Ap&~0x80)|0x4;else Ap=(Ap&~0x80)|0x1;}if(((Ap&0x40)===0x40)){var EE;EE=width;if(
EE<0)EE=0;if(EE>(Ad[2]-Ad[0]))Ad=B.aaO(Ad,EE);}if((!!(Ap&0x110)&&!!(Ap&0x28))&&((
Ad[3]-Ad[1])>(AA[3]-AA[1])))Ap&=~0x110;if(!!(Ap&0x110))Ap&=~0x28;if((((Ap&0x2)===
0x2)&&!!(Ap&0x5))&&((Ad[2]-Ad[0])>(AA[2]-AA[0])))Ap&=~0x2;if(((Ap&0x2)===0x2))Ap&=
~0x5;if((Ad[2]-Ad[0])!==(AA[2]-AA[0])){if(((Ap&0x4)===0x4))Ad=B.aaP(Ad,AA[2]-(Ad[
2]-Ad[0]));else if(((Ap&0x2)===0x2))Ad=B.aaP(Ad,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((
Ad[2]-Ad[0])/2)|0));}if((Ad[3]-Ad[1])!==(AA[3]-AA[1])){if(((Ap&0x20)===0x20))Ad=
B.aaR(Ad,AA[3]-(Ad[3]-Ad[1]));else if(((Ap&0x100)===0x100))Ad=B.aaR(Ad,((AA[1]+(((
AA[3]-AA[1])/2)|0))-(((Ad[3]-Ad[1])/2)|0))+(((this.By.Descent-this.By.Ascent)/2)|
0));else if(((Ap&0x10)===0x10))Ad=B.aaR(Ad,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Ad[3
]-Ad[1])/2)|0));}Ad=B.aam(Ad,Al.slice(0,2));return Ad;},_Init:function(aArg){B.Core.
Bj._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(){this.Dt();this.
__proto__=B.Core.Bj;B.Core.Bj._Done.call(this);},_Mark:function(D){var A;B.Core.
Bj._Mark.call(this,D);if((A=this.By)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Views::Text"};C.GV={E3:B.vw,Am:B.aan(4,3,0,null),KR:B.vw,Dp:0,Gr:0,Fr:function(
value){if(B.z8(value,this.BN))return;B.Core.Ea.Fr.call(this,value);this.Am.Set(3
,0,value[0]);this.Am.Set(3,1,value[1]);this.Am.Set(3,2,1);this.Dp=0x45;B.ow([this
,this.Hf],this);},Fq:function(value){if(B.z8(value,this.Cb))return;B.Core.Ea.Fq.
call(this,value);this.Am.Set(2,0,value[0]);this.Am.Set(2,1,value[1]);this.Am.Set(
2,2,1);this.Dp=0x45;B.ow([this,this.Hf],this);},Fp:function(value){if(B.z8(value
,this.BM))return;B.Core.Ea.Fp.call(this,value);this.Am.Set(1,0,value[0]);this.Am.
Set(1,1,value[1]);this.Am.Set(1,2,1);this.Dp=0x45;B.ow([this,this.Hf],this);},Fo:
function(value){if(B.z8(value,this.Ca))return;B.Core.Ea.Fo.call(this,value);this.
Am.Set(0,0,value[0]);this.Am.Set(0,1,value[1]);this.Am.Set(0,2,1);this.Dp=0x45;B.
ow([this,this.Hf],this);},Nf:function(){return;},Hf:function(Ag){var A;if(this.Dp===
0x00)return;if(this.Dp===0x45){var Ei=B._NewObject(B.Graphics.M1,0);Ei=Ei.Oi(this.
Am.Get(0,0),this.Am.Get(0,1),this.Am.Get(1,0),this.Am.Get(1,1),this.Am.Get(2,0),
this.Am.Get(2,1),this.Am.Get(3,0),this.Am.Get(3,1));if(!!Ei){Ei.IK(0,0);this.Am.
Set(0,2,Ei.H2*240);Ei.IK(1,0);this.Am.Set(1,2,Ei.H2*240);Ei.IK(1,1);this.Am.Set(
2,2,Ei.H2*240);Ei.IK(0,1);this.Am.Set(3,2,Ei.H2*240);}this.Nf();}this.Gr=this.Dp;
this.Dp=0x00;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent());},Pn:
function(value){if(B.z8(value,this.KR))return;this.KR=value;if((this.Gr!==0x45)&&(
this.Dp===0x00)){this.Dp=this.Gr;B.ow([this,this.Hf],this);}},P2:function(M5,M3,
M8,M9){var A;if(!this.E3[0]||!this.E3[1])return;var JX=[].concat(Aw,this.E3);var
JW=this.KR;var Nv=(JX[0]-JW[0])*M8;var R=(JX[2]-JW[0])*M8;var B8=(JX[1]-JW[1])*M9;
var M$=(JX[3]-JW[1])*M9;var Jq=Math.cos(M3*B.kw);var JV=Math.sin(M3*B.kw);var Nw=
Nv*Jq;var Nx=Nv*JV;var NQ=R*Jq;var NR=R*JV;var NY=B8*Jq;var NZ=B8*JV;var Na=M$*Jq;
var Nb=M$*JV;var Ju=M5[0];var Jv=M5[1];this.Am.Set(0,0,(Ju+Nw)+NZ);this.Am.Set(0
,1,(Jv-Nx)+NY);this.Am.Set(1,0,(Ju+NQ)+NZ);this.Am.Set(1,1,(Jv-NR)+NY);this.Am.Set(
2,0,(Ju+NQ)+Nb);this.Am.Set(2,1,(Jv-NR)+Na);this.Am.Set(3,0,(Ju+Nw)+Nb);this.Am.
Set(3,1,(Jv-Nx)+Na);this.Am.Set(0,2,1);this.Am.Set(1,2,1);this.Am.Set(2,2,1);this.
Am.Set(3,2,1);if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent());this.
Ca=[(this.Am.Get(0,0)+0.5)|0,(this.Am.Get(0,1)+0.5)|0];this.BM=[(this.Am.Get(1,0
)+0.5)|0,(this.Am.Get(1,1)+0.5)|0];this.Cb=[(this.Am.Get(2,0)+0.5)|0,(this.Am.Get(
2,1)+0.5)|0];this.BN=[(this.Am.Get(3,0)+0.5)|0,(this.Am.Get(3,1)+0.5)|0];this.Gr=
0x45;this.Dp=0x00;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent());
this.Nf();},_Init:function(aArg){B.Core.Ea._Init.call(this,aArg);(this.Am=[]).__proto__=
C.GV.Am;this.__proto__=C.GV;this.E=0x3;},_className:"Views::WarpView"};C.Lh={timer:
null,V:null,AP:0,Bm:0,CD:false,Db:function(A2,aClip,aOffset,A$,aBlend){var A;var
Bq=0;if(this.Bm>=0)Bq=this.Bm;if(!this.V||(Bq>=this.V.NoOfFrames))return;this.V.
Update();var Jj;var Jk;var Jl;var Jm;var BS=(((A$+1)*255)>>8)+1;var JD=aOffset[0
];var JE=aOffset[1];var N=[].concat(Aw,this.E3);aBlend=aBlend&&((this.E&0x2)===0x2
);Jj=Jk=Jl=Jm=0xFFFFFFFF;if(BS<256){Jj=(Jj&0x00FFFFFF)|((((255*BS)>>8)&0xFF)<<24
);Jk=(Jk&0x00FFFFFF)|((((255*BS)>>8)&0xFF)<<24);Jl=(Jl&0x00FFFFFF)|((((255*BS)>>
8)&0xFF)<<24);Jm=(Jm&0x00FFFFFF)|((((255*BS)>>8)&0xFF)<<24);}aClip=B.z6(aClip,B.
aam(Bk,aOffset));A2.P8(aClip,this.V,Bq,this.Am.Get(0,0)+JD,this.Am.Get(0,1)+JE,this.
Am.Get(0,2),this.Am.Get(1,0)+JD,this.Am.Get(1,1)+JE,this.Am.Get(1,2),this.Am.Get(
2,0)+JD,this.Am.Get(2,1)+JE,this.Am.Get(2,2),this.Am.Get(3,0)+JD,this.Am.Get(3,1
)+JE,this.Am.Get(3,2),N,Jj,Jk,Jl,Jm,aBlend,true);},Fd:function(Ag){var A;var NH=
this.E3;if(!!this.V)this.E3=this.V.FrameSize;else this.E3=Aw;if(((B.z8(NH,this.E3
)||((this.Gr===0x45)&&(this.Dp===0x00)))&&!!this.F)&&((this.E&0x1)===0x1))this.F.
Ao(this.GetExtent());if(((this.Gr!==0x45)&&(this.Dp===0x00))&&!B.z8(NH,this.E3)){
this.Dp=this.Gr;B.ow([this,this.Hf],this);}},B9:function(Ag){var A;var Bq=this.Bm;
var Cf=0;if(!!this.V)Cf=this.V.NoOfFrames*this.V.FrameDelay;if((!!this.timer&&(this.
Bm<0))&&(Cf>0))this.AP=this.timer.Ar;if(!!this.timer&&(Cf>0)){var Af=(this.timer.
Ar-this.AP)|0;Bq=(Af/this.V.FrameDelay)|0;if(Af>=Cf){Bq=Bq%this.V.NoOfFrames;this.
AP=this.timer.Ar-(Af%Cf);}}if(((Bq!==this.Bm)&&!!this.F)&&((this.E&0x1)===0x1))this.
F.Ao(this.GetExtent());this.Bm=Bq;if(!Cf&&!!this.timer){B.zl([this,this.B9],this.
timer,0);this.timer=null;}},Dw:function(value){var A;if(this.CD===value)return;this.
CD=value;this.Bm=-1;if(!value&&!!this.timer){B.zl([this,this.B9],this.timer,0);this.
timer=null;}if(value){this.timer=B._GetAutoObject(B.abj.Fl);B.y_([this,this.B9],
this.timer,0);B.ow([this,this.B9],this);}if(!!this.F&&((this.E&0x1)===0x1))this.
F.Ao(this.GetExtent());},DU:function(value){if(value===this.V)return;if(!!this.V&&
this.V.Fn)B.zl([this,this.Fd],this.V,0);this.V=value;this.Bm=-1;if(!!value&&value.
Fn)B.y_([this,this.Fd],value,0);if(this.CD){this.Dw(false);this.Dw(true);}this.Fd(
this);},_Init:function(aArg){C.GV._Init.call(this,aArg);this.__proto__=C.Lh;},_Mark:
function(D){var A;C.GV._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpImage"
};C.RX={N$:0x1,N_:0x2,Oa:0x4,Od:0x8,Oc:0x10,Ob:0x20,Sp:0x40,Sq:0x80,Sw:0x100};C.
Sx={N$:0x1,N_:0x2,Oa:0x4,Od:0x8,Oc:0x10,Ob:0x20,Ri:0x40,Rh:0x80,Rn:0x100};C.R7={
R6:0,Sn:1,Sl:2,Sm:3};
C._Init=function(){C.A6.__proto__=B.Core.Bj;C.Ho.__proto__=B.Core.Bj;C.CX.__proto__=
B.Core.Bj;C.Text.__proto__=B.Core.Bj;C.GV.__proto__=B.Core.Ea;C.Lh.__proto__=C.GV;
};C._ReInit=function(){};C.CJ=function(D){};return C;})();

/* Embedded Wizard */