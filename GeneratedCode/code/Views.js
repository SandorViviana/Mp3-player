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
C.A5={JX:0xFFFFFFFF,JY:0xFFFFFFFF,C$:0xFFFFFFFF,Da:function(A1,aClip,aOffset,A$,aBlend
){var A;var AW=0xFFFFFFFF;var AX=0xFFFFFFFF;var AO=this.JX;var AQ=this.JY;var A2=
this.C$;aBlend=aBlend&&((this.E&0x2)===0x2);A$=A$+1;if((AO===AQ)&&(0xFFFFFFFF===
AO))AW=AX=AO=AQ=A2;else if(A2!==0xFFFFFFFF){AW=(AW&0x00FFFFFF)|((((255*(((A2>>24
)&0xFF)+1))>>8)&0xFF)<<24);AW=(AW&0xFFFFFF00)|((((AW&0xFF)*((A2&0xFF)+1))>>8)&0xFF
);AW=(AW&0xFFFF00FF)|((((((AW>>8)&0xFF)*(((A2>>8)&0xFF)+1))>>8)&0xFF)<<8);AW=(AW&
0xFF00FFFF)|((((((AW>>16)&0xFF)*(((A2>>16)&0xFF)+1))>>8)&0xFF)<<16);AX=(AX&0x00FFFFFF
)|((((255*(((A2>>24)&0xFF)+1))>>8)&0xFF)<<24);AX=(AX&0xFFFFFF00)|((((AX&0xFF)*((
A2&0xFF)+1))>>8)&0xFF);AX=(AX&0xFFFF00FF)|((((((AX>>8)&0xFF)*(((A2>>8)&0xFF)+1))>>
8)&0xFF)<<8);AX=(AX&0xFF00FFFF)|((((((AX>>16)&0xFF)*(((A2>>16)&0xFF)+1))>>8)&0xFF
)<<16);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*(((A2>>24)&0xFF)+1))>>8)&0xFF)<<24
);AO=(AO&0xFFFFFF00)|((((AO&0xFF)*((A2&0xFF)+1))>>8)&0xFF);AO=(AO&0xFFFF00FF)|((((((
AO>>8)&0xFF)*(((A2>>8)&0xFF)+1))>>8)&0xFF)<<8);AO=(AO&0xFF00FFFF)|((((((AO>>16)&
0xFF)*(((A2>>16)&0xFF)+1))>>8)&0xFF)<<16);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)
*(((A2>>24)&0xFF)+1))>>8)&0xFF)<<24);AQ=(AQ&0xFFFFFF00)|((((AQ&0xFF)*((A2&0xFF)+
1))>>8)&0xFF);AQ=(AQ&0xFFFF00FF)|((((((AQ>>8)&0xFF)*(((A2>>8)&0xFF)+1))>>8)&0xFF
)<<8);AQ=(AQ&0xFF00FFFF)|((((((AQ>>16)&0xFF)*(((A2>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(A$<256){AW=(AW&0x00FFFFFF)|((((A$*((AW>>24)&0xFF))>>8)&0xFF)<<24);AX=(AX&0x00FFFFFF
)|((((A$*((AX>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((A$*((AO>>24)&0xFF
))>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((A$*((AQ>>24)&0xFF))>>8)&0xFF)<<24);}A1.
J_(aClip,B.aam(this.K,aOffset),AW,AX,AQ,AO,aBlend);},OO:function(value){var A;if(
value===this.JX)return;this.JX=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(
this.K);},OP:function(value){var A;if(value===this.JY)return;this.JY=value;if(!!
this.F&&((this.E&0x1)===0x1))this.F.An(this.K);},Dc:function(value){var A;if(value===
this.C$)return;this.C$=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);
},_Init:function(aArg){B.Core.Bj._Init.call(this,aArg);this.__proto__=C.A5;},_className:
"Views::Rectangle"};C.Hk={timer:null,U:null,Bm:-1,C$:0xFFFFFFFF,Hg:0x1F,EI:0,AP:
0,FW:B.vw,CC:false,Da:function(A1,aClip,aOffset,A$,aBlend){var A;var Bq=this.EI;
if(this.Bm>=0)Bq=this.Bm;if(!this.U||(Bq>=this.U.NoOfFrames))return;this.U.Update(
);var AW;var AX;var AQ;var AO;var A2=this.C$;var BR=(((A$+1)*255)>>8)+1;var Cl=this.
Hg;var V=B.aam(this.K,aOffset);var JO=B.aaj([V[2]-V[0],V[3]-V[1]],this.FW);aBlend=
aBlend&&((this.E&0x2)===0x2);AW=AX=AO=AQ=A2;if(BR<256){AW=(AW&0x00FFFFFF)|((((((
AW>>24)&0xFF)*BR)>>8)&0xFF)<<24);AX=(AX&0x00FFFFFF)|((((((AX>>24)&0xFF)*BR)>>8)&
0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)*BR)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((((AO>>24)&0xFF)*BR)>>8)&0xFF)<<24);}if(((this.FW[0]>0)&&(JO[0]>0))&&!((Cl&
0x5)===0x5)){var CK=((this.U.FrameSize[0]/3)|0)-JO[0];if(((Cl&0x1)===0x1)){if(aClip[
2]>V[2])aClip=B.aaQ(aClip,V[2]);if(CK>0)V=B.aaQ(V,V[2]+CK);Cl=Cl|0x4;}else if(((
Cl&0x4)===0x4)){if(aClip[0]<V[0])aClip=[].concat(V[0],aClip.slice(1,4));if(CK>0)
V=[].concat(V[0]-CK,V.slice(1,4));Cl=Cl|0x1;}else{if(aClip[0]<V[0])aClip=[].concat(
V[0],aClip.slice(1,4));if(aClip[2]>V[2])aClip=B.aaQ(aClip,V[2]);if(CK>0){V=[].concat(
V[0]-((CK/2)|0),V.slice(1,4));V=B.aaQ(V,(V[2]+CK)-((CK/2)|0));}Cl=Cl|0x5;}}if(((
this.FW[1]>0)&&(JO[1]>0))&&!((Cl&0xA)===0xA)){var CK=((this.U.FrameSize[1]/3)|0)-
JO[1];if(((Cl&0x2)===0x2)){if(aClip[3]>V[3])aClip=[].concat(aClip.slice(0,3),V[3
]);if(CK>0)V=[].concat(V.slice(0,3),V[3]+CK);Cl=Cl|0x8;}else if(((Cl&0x8)===0x8)
){if(aClip[1]<V[1])aClip=B.aaS(aClip,V[1]);if(CK>0)V=B.aaS(V,V[1]-CK);Cl=Cl|0x2;
}else{if(aClip[1]<V[1])aClip=B.aaS(aClip,V[1]);if(aClip[3]>V[3])aClip=[].concat(
aClip.slice(0,3),V[3]);if(CK>0){V=B.aaS(V,V[1]-((CK/2)|0));V=[].concat(V.slice(0
,3),(V[3]+CK)-((CK/2)|0));}Cl=Cl|0xA;}}A1.Oc(aClip,this.U,Bq,V,Cl,AW,AX,AQ,AO,aBlend
);},Fa:function(Ah){var A;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);},
B8:function(Ah){var A;var Bq=this.Bm;var Ce=0;if(!!this.U)Ce=this.U.NoOfFrames*this.
U.FrameDelay;if((!!this.timer&&(this.Bm<0))&&(Ce>0))this.AP=this.timer.Aq-(this.
EI*this.U.FrameDelay);if(!!this.timer&&(Ce>0)){var Af=(this.timer.Aq-this.AP)|0;
Bq=(Af/this.U.FrameDelay)|0;if(Af>=Ce){Bq=Bq%this.U.NoOfFrames;this.AP=this.timer.
Aq-(Af%Ce);}}if(((Bq!==this.Bm)&&!!this.F)&&((this.E&0x1)===0x1))this.F.An(this.
K);this.Bm=Bq;if(!Ce&&!!this.timer){B.zl([this,this.B8],this.timer,0);this.timer=
null;}},Dc:function(value){var A;if(value===this.C$)return;this.C$=value;if(!!this.
F&&((this.E&0x1)===0x1))this.F.An(this.K);},Du:function(value){var A;if(this.CC===
value)return;this.CC=value;this.Bm=-1;if(!value&&!!this.timer){B.zl([this,this.B8
],this.timer,0);this.timer=null;}if(value){this.timer=B._GetAutoObject(B.abj.Fi);
B.y_([this,this.B8],this.timer,0);B.ow([this,this.B8],this);}if(!!this.F&&((this.
E&0x1)===0x1))this.F.An(this.K);},Mv:function(value){var A;if(value===this.Hg)return;
this.Hg=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);},EP:function(
value){var A;if(value<0)value=0;if((value===this.EI)&&(this.Bm===-1))return;this.
EI=value;if(!this.timer)this.Bm=-1;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.
K);},DS:function(value){var A;if(value===this.U)return;if(!!this.U&&this.U.Fk)B.
zl([this,this.Fa],this.U,0);this.U=value;this.Bm=-1;if(!!value&&value.Fk)B.y_([this
,this.Fa],value,0);if(this.CC){this.Du(false);this.Du(true);}if(!!this.F&&((this.
E&0x1)===0x1))this.F.An(this.K);},Er:function(value){if(value)this.A7(0x1,0x0);else
this.A7(0x0,0x1);},MC:function(value){var A;if(value[0]<0)value=[0,value[1]];if(
value[1]<0)value=[value[0],0];if(B.z8(value,this.FW))return;this.FW=value;if((!!
this.F&&((this.E&0x1)===0x1))&&!((this.Hg&0xF)===0xF))this.F.An(this.K);},_Init:
function(aArg){B.Core.Bj._Init.call(this,aArg);this.__proto__=C.Hk;},_Mark:function(
D){var A;B.Core.Bj._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.U)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"
};C.CW={timer:null,U:null,AP:0,Bm:0,C$:0xFFFFFFFF,ED:0x12,EI:0,CC:false,Da:function(
A1,aClip,aOffset,A$,aBlend){var A;var Bq=this.EI;if(this.Bm>=0)Bq=this.Bm;if(!this.
U||(Bq>=this.U.NoOfFrames))return;this.U.Update();var N=this.Hl();var AT=this.U.
FrameSize;if((N[0]>=N[2])||(N[1]>=N[3]))return;var AW;var AX;var AQ;var AO;var A2=
this.C$;var BR=(((A$+1)*255)>>8)+1;aBlend=aBlend&&((this.E&0x2)===0x2);AW=AX=AO=
AQ=A2;if(BR<256){AW=(AW&0x00FFFFFF)|((((((AW>>24)&0xFF)*BR)>>8)&0xFF)<<24);AX=(AX&
0x00FFFFFF)|((((((AX>>24)&0xFF)*BR)>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>
24)&0xFF)*BR)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*BR)>>8)&0xFF
)<<24);}if(B.z8([N[2]-N[0],N[3]-N[1]],AT))A1.N9(aClip,this.U,Bq,B.aam(this.K,aOffset
),B.aaj(this.K.slice(0,2),N.slice(0,2)),AW,AX,AQ,AO,aBlend);else A1.PU(aClip,this.
U,Bq,B.aam(N,aOffset),[].concat(Aw,AT),AW,AX,AQ,AO,aBlend,true);},Fa:function(Ah
){var A;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);},B8:function(Ah){var
A;var Bq=this.Bm;var Ce=0;if(!!this.U)Ce=this.U.NoOfFrames*this.U.FrameDelay;if((
!!this.timer&&(this.Bm<0))&&(Ce>0))this.AP=this.timer.Aq-(this.EI*this.U.FrameDelay
);if(!!this.timer&&(Ce>0)){var Af=(this.timer.Aq-this.AP)|0;Bq=(Af/this.U.FrameDelay
)|0;if(Af>=Ce){Bq=Bq%this.U.NoOfFrames;this.AP=this.timer.Aq-(Af%Ce);}}if(((Bq!==
this.Bm)&&!!this.F)&&((this.E&0x1)===0x1))this.F.An(this.K);this.Bm=Bq;if(!Ce&&!
!this.timer){B.zl([this,this.B8],this.timer,0);this.timer=null;}},Dc:function(value
){var A;if(value===this.C$)return;this.C$=value;if(!!this.F&&((this.E&0x1)===0x1
))this.F.An(this.K);},Du:function(value){var A;if(this.CC===value)return;this.CC=
value;this.Bm=-1;if(!value&&!!this.timer){B.zl([this,this.B8],this.timer,0);this.
timer=null;}if(value){this.timer=B._GetAutoObject(B.abj.Fi);B.y_([this,this.B8],
this.timer,0);B.ow([this,this.B8],this);}if(!!this.F&&((this.E&0x1)===0x1))this.
F.An(this.K);},GH:function(value){var A;if(value===this.ED)return;this.ED=value;
if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);},EP:function(value){var A;if(
value<0)value=0;if((value===this.EI)&&(this.Bm===-1))return;this.EI=value;if(!this.
timer)this.Bm=-1;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);},DS:function(
value){var A;if(value===this.U)return;if(!!this.U&&this.U.Fk)B.zl([this,this.Fa]
,this.U,0);this.U=value;this.Bm=-1;if(!!value&&value.Fk)B.y_([this,this.Fa],value
,0);if(this.CC){this.Du(false);this.Du(true);}if(!!this.F&&((this.E&0x1)===0x1))
this.F.An(this.K);},Hl:function(){var A;if(!this.U)return Bk;var Ao=this.ED;var AT=
this.U.FrameSize;var At=this.K;var width=At[2]-At[0];var height=At[3]-At[1];if(!
AT[0]||!AT[1])return Bk;var AA=[0,0,width,height];var Ad=AA;if(((Ao&0x40)===0x40
)){var L4=((((AA[2]-AA[0])<<16)+((AT[0]/2)|0))/AT[0])|0;var Ir=((((AA[3]-AA[1])<<
16)+((AT[1]/2)|0))/AT[1])|0;var Fe=L4;if(Ir>Fe)Fe=Ir;Ad=B.aaO(Ad,((AT[0]*Fe)+32768
)>>16);Ad=B.aaL(Ad,((AT[1]*Fe)+32768)>>16);}else if(((Ao&0x80)===0x80)){var L4=((((
AA[2]-AA[0])<<16)+((AT[0]/2)|0))/AT[0])|0;var Ir=((((AA[3]-AA[1])<<16)+((AT[1]/2
)|0))/AT[1])|0;var Fe=L4;if(Ir<Fe)Fe=Ir;Ad=B.aaO(Ad,((AT[0]*Fe)+32768)>>16);Ad=B.
aaL(Ad,((AT[1]*Fe)+32768)>>16);}else if(!((Ao&0x100)===0x100))Ad=B.aaN(Ad,AT);if((
Ad[2]-Ad[0])!==(AA[2]-AA[0])){if(((Ao&0x4)===0x4))Ad=B.aaP(Ad,AA[2]-(Ad[2]-Ad[0]
));else if(((Ao&0x2)===0x2))Ad=B.aaP(Ad,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Ad[2]-Ad[
0])/2)|0));}if((Ad[3]-Ad[1])!==(AA[3]-AA[1])){if(((Ao&0x20)===0x20))Ad=B.aaR(Ad,
AA[3]-(Ad[3]-Ad[1]));else if(((Ao&0x10)===0x10))Ad=B.aaR(Ad,(AA[1]+(((AA[3]-AA[1
])/2)|0))-(((Ad[3]-Ad[1])/2)|0));}Ad=B.aam(Ad,At.slice(0,2));return Ad;},_Init:function(
aArg){B.Core.Bj._Init.call(this,aArg);this.__proto__=C.CW;},_Mark:function(D){var
A;B.Core.Bj._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.U)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};
C.Text={By:null,Bb:B.jm,String:B.jm,Df:null,FQ:B.vw,ED:0x12,C$:0xFFFFFFFF,GU:false
,IB:false,FT:false,J3:false,Cp:false,Dr:function(){if(!!this.Df){this.LE(this.Df
);this.Df=null;}},Da:function(A1,aClip,aOffset,A$,aBlend){var A;if((this.Bb===B.
jm)||!this.By)return;var Ao=this.ED;var font=this.By;var AA=B.aam(this.K,aOffset
);var AW;var AX;var AQ;var AO;var Qo=this.C$;var BR=(((A$+1)*255)>>8)+1;var El=this.
Bb.charCodeAt(0)||0;var N=B.aam(this.Hl(),aOffset);var FG=[AA[0]-N[0],(AA[1]-N[1
])-font.Ascent];if(El<1)return;AW=AX=AO=AQ=Qo;if(BR<256){AW=(AW&0x00FFFFFF)|((((((
AW>>24)&0xFF)*BR)>>8)&0xFF)<<24);AX=(AX&0x00FFFFFF)|((((((AX>>24)&0xFF)*BR)>>8)&
0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)*BR)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((((AO>>24)&0xFF)*BR)>>8)&0xFF)<<24);}if(((Ao&0x80)===0x80)){if(this.Kj())Ao=(
Ao&~0x80)|0x4;else Ao=(Ao&~0x80)|0x1;}if((El===1)&&!((Ao&0x40)===0x40)){A1.Me(aClip
,font,this.Bb,2,(this.Bb.charCodeAt(1)||0)-1,AA,FG,0,0,AW,AX,AQ,AO,true);return;
}var leading=font.Leading;var L3=(font.Ascent+font.Descent)+leading;var Qm=aClip[
1]-N[1];var Qn=aClip[3]-N[1];var Lv=N[2]-N[0];var D2=0;var G=1;var A2=this.Bb.charCodeAt(
1)||0;while(((D2+L3)<Qm)&&(A2>0)){G=G+A2;D2=D2+L3;A2=this.Bb.charCodeAt(G)||0;}while((
D2<Qn)&&(A2>0)){var Go=B.aaj(FG,[0,D2]);var NL=0;var Jw=false;if(((((Ao&0x40)===
0x40)&&((this.Bb.charCodeAt((G+A2)-1)||0)!==0x0A))&&((this.Bb.charCodeAt(G+1)||0
)!==0x0A))&&((this.Bb.charCodeAt(G+A2)||0)!==0x00))Jw=true;if(Jw&&!!(Ao&0x6)){var
NK=G+A2;var M5=this.Bb.indexOf(String.fromCharCode(0x20),G+1);var M6=this.Bb.indexOf(
String.fromCharCode(0xA0),G+1);if(((M5<0)||(M5>=NK))&&((M6<0)||(M6>=NK)))Jw=false;
}if(Jw)NL=Lv;else if(((Ao&0x4)===0x4))Go=[(Go[0]-Lv)+font.Hn(this.Bb,G+1,A2-1),Go[
1]];else if(((Ao&0x2)===0x2))Go=[(Go[0]-((Lv/2)|0))+((font.Hn(this.Bb,G+1,A2-1)/
2)|0),Go[1]];A1.Me(aClip,font,this.Bb,G+1,A2-1,AA,Go,NL,0,AW,AX,AQ,AO,true);G=G+
A2;D2=D2+L3;A2=this.Bb.charCodeAt(G)||0;}},Aj:function(value){var A;if(B.z9(value
,this.K))return;var NJ;NJ=((A=this.K)[2]-A[0])!==(value[2]-value[0]);if(((NJ&&this.
GU)&&this.Cp)&&!((this.E&0x2000)===0x2000)){this.Bb=B.jm;this.Cp=false;B.ow([this
,this.Fb],this);}if(((this.FT&&this.Cp)&&!B.z8([(A=this.K)[2]-A[0],A[3]-A[1]],[value[
2]-value[0],value[3]-value[1]]))&&!((this.E&0x2000)===0x2000)){this.Bb=B.jm;this.
Cp=false;B.ow([this,this.Fb],this);}B.Core.Bj.Aj.call(this,value);B.ow([this,this.
L1],this);},LE:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Qq:function(aSize){
var bidi=null;bidi=B.vj(aSize);return bidi;},L1:function(Ah){},Fb:function(Ah){B.
ow([this,this.JG],this);},JG:function(Ah){var A;if(this.Cp)return;var width=(A=this.
K)[2]-A[0];var height=(A=this.K)[3]-A[1];var EB=-1;var font=this.By;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.GU){EB=width;if(EB<0)EB=1;}if(
!!this.Df){this.LE(this.Df);this.Df=null;}this.Cp=true;if((this.String!==B.jm)&&
!!font){var length=this.String.length;if(this.J3)this.Df=this.Qq(length);this.Bb=
font.PN(this.String,0,EB,length,this.Df);if(!!this.Df&&!this.On()){this.LE(this.
Df);this.Df=null;}}else this.Bb=B.jm;this.FQ=Aw;if(((this.FT&&(this.Bb!==B.jm))&&
!this.IB)&&!!font){var Ao=this.ED;var leading=font.Leading;var Br=this.Bb;var JM=
this.Kj();if(((Ao&0x80)===0x80)){if(JM)Ao=(Ao&~0x80)|0x4;else Ao=(Ao&~0x80)|0x1;
}var JK=(font.Ascent+font.Descent)+leading;var El=Br.charCodeAt(0)||0;var FC=((height+
leading)/JK)|0;var Ly=false;var Jk=false;if(FC<=0)FC=1;if(El>FC){var D1=0;var Iq=
0;var JL=El-1;var BO;var Cd=Br.length;var tmp=B.jm;if(!!(Ao&0x110)&&!!(Ao&0x28))
Ao&=~0x110;if(!!(Ao&0x110))Ao&=~0x28;if(((Ao&0x20)===0x20))Iq=El-FC;else if(((Ao&
0x10)===0x10)||((Ao&0x100)===0x100)){Iq=((El-FC)/2)|0;JL=(Iq+FC)-1;}else JL=FC-1;
Ly=Iq>0;Jk=JL<(El-1);for(BO=1;D1<Iq;D1=D1+1)BO=BO+(Br.charCodeAt(BO)||0);if(Jk)for(
Cd=BO;D1<JL;D1=D1+1)Cd=Cd+(Br.charCodeAt(Cd)||0);if(Ly){var Cz=Br.charCodeAt(BO)||
0;tmp=(Dl+B.aaY(Br,BO,Cz))+Dl;tmp=B.aaT(tmp,0,(Cz+2)&0xFFFF);BO=BO+Cz;if((tmp.charCodeAt(
Cz)||0)===0x0A){tmp=B.aaT(tmp,Cz,0xFEFF);tmp=B.aaT(tmp,Cz+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp
,1,0xFEFF);}tmp=tmp+B.aaY(Br,BO,Cd-BO);if(Jk&&(Cd>=BO)){var Cz=Br.charCodeAt(Cd)||
0;var CT=(Dl+B.aaY(Br,Cd,Cz))+Dl;CT=B.aaT(CT,0,(Cz+2)&0xFFFF);CT=B.aaT(CT,1,0xFEFF
);if((CT.charCodeAt(Cz)||0)===0x0A){CT=B.aaT(CT,Cz,0xFEFF);CT=B.aaT(CT,Cz+1,0x0A
);}if((CT.charCodeAt(2)||0)===0x0A){CT=B.aaT(CT,2,0xFEFF);CT=B.aaT(CT,1,0x0A);}else
CT=B.aaT(CT,1,0xFEFF);tmp=tmp+CT;}Br=String.fromCharCode(FC&0xFFFF)+tmp;}var D1=
0;var C6=1;var LQ=width;El=Br.charCodeAt(0)||0;for(;D1<El;D1=D1+1){var FL=Ly&&!D1;
var FM=Jk&&(D1===(El-1));var DF=false;var DG=false;var G9=JM;if((JM&&FL)&&!FM){FL=
false;FM=true;}else if((JM&&FM)&&!FL){FM=false;FL=true;}var Is=C6+1;var Cz=Br.charCodeAt(
C6)||0;var BO=Is;var Cd=(Is+Cz)-2;var LJ=-1;var LK=-1;if(!this.GU&&(font.Hn(Br,Is
,Cz-1)>LQ)){var Gh=Ao;if(((Gh&0x2)===0x2)&&!!(Gh&0x5))Gh&=~0x2;if(((Gh&0x2)===0x2
))Gh&=~0x5;if(((Gh&0x4)===0x4))DF=true;else if(((Gh&0x2)===0x2)){DF=true;DG=true;
}else DG=true;}if((Br.charCodeAt(BO)||0)===0x0A)BO=BO+1;if((Br.charCodeAt(Cd)||0
)===0x0A)Cd=Cd-1;while(DF&&((Br.charCodeAt(BO)||0)===0xFEFF))BO=BO+1;while(DG&&((
Br.charCodeAt(Cd)||0)===0xFEFF))Cd=Cd-1;DF=DF&&!FM;DG=DG&&!FL;while((((DF||DG)||
FL)||FM)&&(BO<Cd)){if((DF&&(G9||!DG))||FL){if(LJ>0)Br=B.aaT(Br,LJ,0xFEFF);Br=B.aaT(
Br,BO,0x2026);LJ=BO;BO=BO+1;G9=!G9;FL=false;if(font.Hn(Br,Is,Cz-1)<=LQ){DF=false;
DG=false;}else DF=DF||!DG;}if((DG&&(!G9||!DF))||FM){if(LK>0)Br=B.aaT(Br,LK,0xFEFF
);Br=B.aaT(Br,Cd,0x2026);LK=Cd;Cd=Cd-1;G9=!G9;FM=false;if(font.Hn(Br,Is,Cz-1)<=LQ
){DF=false;DG=false;}else DG=DG||!DF;}}C6=C6+Cz;}this.FQ=[font.Mg(Br),((Br.charCodeAt(
0)||0)*JK)-leading];this.Bb=Br;}if(this.IB&&(this.Bb!==B.jm)){this.E=this.E|0x2000;
this.Aj(B.z4(this.Hl(),Aw));this.E=this.E&~0x2000;}if(!!this.F&&((this.E&0x1)===
0x1))this.F.An(this.K);B.ow([this,this.L1],this);},OR:function(value){if(value===
this.J3)return;this.J3=value;this.Bb=B.jm;this.Cp=false;B.ow([this,this.Fb],this
);},OQ:function(value){if(value===this.FT)return;this.FT=value;if(this.GU||value
)this.E=this.E&~0x100;else this.E=this.E|0x100;this.Bb=B.jm;this.Cp=false;B.ow([
this,this.Fb],this);},ON:function(value){if(value===this.IB)return;this.IB=value;
if(value&&this.FT){this.Bb=B.jm;this.Cp=false;B.ow([this,this.Fb],this);}if(value&&
this.Cp){this.E=this.E|0x2000;this.Aj(B.z4(this.Hl(),Aw));this.E=this.E&~0x2000;
}},ML:function(value){if(value===this.GU)return;this.GU=value;if(this.Cp){this.Bb=
B.jm;this.Cp=false;B.ow([this,this.Fb],this);}if(value||this.FT)this.E=this.E&~0x100;
else this.E=this.E|0x100;},GH:function(value){var A;if(value===this.ED)return;this.
ED=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);if(this.FT){this.Bb=
B.jm;this.Cp=false;B.ow([this,this.Fb],this);}if(this.Cp)B.ow([this,this.L1],this
);},Dv:function(value){if(value===this.String)return;this.String=value;this.Bb=B.
jm;this.Cp=false;B.ow([this,this.Fb],this);},FY:function(value){if(value===this.
By)return;this.By=value;this.Bb=B.jm;this.Cp=false;B.ow([this,this.Fb],this);},Dc:
function(value){var A;if(value===this.C$)return;this.C$=value;if(!!this.F&&((this.
E&0x1)===0x1))this.F.An(this.K);},Kj:function(){if(!this.Cp)this.JG(this);if(!this.
Df)return false;var result=false;var bidi=this.Df;result=B.vi(bidi);return result;
},On:function(){if(!this.Cp)this.JG(this);if(!this.Df)return false;var result=false;
var bidi=this.Df;result=B.zc(bidi);return result;},Hl:function(){var A;if((this.
String===B.jm)||!this.By)return Bk;if(!this.Cp)this.JG(this);if(this.Bb===B.jm)return Bk;
var leading=this.By.Leading;var JK=(this.By.Ascent+this.By.Descent)+this.By.Leading;
if(B.z8(this.FQ,Aw))this.FQ=[this.By.Mg(this.Bb),this.FQ[1]];this.FQ=[this.FQ[0]
,((this.Bb.charCodeAt(0)||0)*JK)-leading];var Ao=this.ED;var At=this.K;var width=
At[2]-At[0];var height=At[3]-At[1];var AA=[0,0,width,height];var Ad=[].concat(AA.
slice(0,2),B.aak(AA.slice(0,2),this.FQ));if(((Ao&0x80)===0x80)){if(this.Kj())Ao=(
Ao&~0x80)|0x4;else Ao=(Ao&~0x80)|0x1;}if(((Ao&0x40)===0x40)){var EB;EB=width;if(
EB<0)EB=0;if(EB>(Ad[2]-Ad[0]))Ad=B.aaO(Ad,EB);}if((!!(Ao&0x110)&&!!(Ao&0x28))&&((
Ad[3]-Ad[1])>(AA[3]-AA[1])))Ao&=~0x110;if(!!(Ao&0x110))Ao&=~0x28;if((((Ao&0x2)===
0x2)&&!!(Ao&0x5))&&((Ad[2]-Ad[0])>(AA[2]-AA[0])))Ao&=~0x2;if(((Ao&0x2)===0x2))Ao&=
~0x5;if((Ad[2]-Ad[0])!==(AA[2]-AA[0])){if(((Ao&0x4)===0x4))Ad=B.aaP(Ad,AA[2]-(Ad[
2]-Ad[0]));else if(((Ao&0x2)===0x2))Ad=B.aaP(Ad,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((
Ad[2]-Ad[0])/2)|0));}if((Ad[3]-Ad[1])!==(AA[3]-AA[1])){if(((Ao&0x20)===0x20))Ad=
B.aaR(Ad,AA[3]-(Ad[3]-Ad[1]));else if(((Ao&0x100)===0x100))Ad=B.aaR(Ad,((AA[1]+(((
AA[3]-AA[1])/2)|0))-(((Ad[3]-Ad[1])/2)|0))+(((this.By.Descent-this.By.Ascent)/2)|
0));else if(((Ao&0x10)===0x10))Ad=B.aaR(Ad,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Ad[3
]-Ad[1])/2)|0));}Ad=B.aam(Ad,At.slice(0,2));return Ad;},_Init:function(aArg){B.Core.
Bj._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(){this.Dr();this.
__proto__=B.Core.Bj;B.Core.Bj._Done.call(this);},_Mark:function(D){var A;B.Core.
Bj._Mark.call(this,D);if((A=this.By)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Views::Text"};C.GT={E0:B.vw,Al:B.aan(4,3,0,null),KH:B.vw,Do:0,Gp:0,Fo:function(
value){if(B.z8(value,this.BN))return;B.Core.D_.Fo.call(this,value);this.Al.Set(3
,0,value[0]);this.Al.Set(3,1,value[1]);this.Al.Set(3,2,1);this.Do=0x45;B.ow([this
,this.Hb],this);},Fn:function(value){if(B.z8(value,this.Cb))return;B.Core.D_.Fn.
call(this,value);this.Al.Set(2,0,value[0]);this.Al.Set(2,1,value[1]);this.Al.Set(
2,2,1);this.Do=0x45;B.ow([this,this.Hb],this);},Fm:function(value){if(B.z8(value
,this.BM))return;B.Core.D_.Fm.call(this,value);this.Al.Set(1,0,value[0]);this.Al.
Set(1,1,value[1]);this.Al.Set(1,2,1);this.Do=0x45;B.ow([this,this.Hb],this);},Fl:
function(value){if(B.z8(value,this.Ca))return;B.Core.D_.Fl.call(this,value);this.
Al.Set(0,0,value[0]);this.Al.Set(0,1,value[1]);this.Al.Set(0,2,1);this.Do=0x45;B.
ow([this,this.Hb],this);},M7:function(){return;},Hb:function(Ah){var A;if(this.Do===
0x00)return;if(this.Do===0x45){var Eg=B._NewObject(B.Graphics.MS,0);Eg=Eg.N_(this.
Al.Get(0,0),this.Al.Get(0,1),this.Al.Get(1,0),this.Al.Get(1,1),this.Al.Get(2,0),
this.Al.Get(2,1),this.Al.Get(3,0),this.Al.Get(3,1));if(!!Eg){Eg.ID(0,0);this.Al.
Set(0,2,Eg.HW*240);Eg.ID(1,0);this.Al.Set(1,2,Eg.HW*240);Eg.ID(1,1);this.Al.Set(
2,2,Eg.HW*240);Eg.ID(0,1);this.Al.Set(3,2,Eg.HW*240);}this.M7();}this.Gp=this.Do;
this.Do=0x00;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent());},Pe:
function(value){if(B.z8(value,this.KH))return;this.KH=value;if((this.Gp!==0x45)&&(
this.Do===0x00)){this.Do=this.Gp;B.ow([this,this.Hb],this);}},PT:function(MW,MU,
MY,MZ){var A;if(!this.E0[0]||!this.E0[1])return;var JR=[].concat(Aw,this.E0);var
JQ=this.KH;var Nl=(JR[0]-JQ[0])*MY;var V=(JR[2]-JQ[0])*MY;var B7=(JR[1]-JQ[1])*MZ;
var M1=(JR[3]-JQ[1])*MZ;var Jl=Math.cos(MU*B.kw);var JP=Math.sin(MU*B.kw);var Nm=
Nl*Jl;var Nn=Nl*JP;var NG=V*Jl;var NH=V*JP;var NO=B7*Jl;var NP=B7*JP;var M2=M1*Jl;
var M3=M1*JP;var Jp=MW[0];var Jq=MW[1];this.Al.Set(0,0,(Jp+Nm)+NP);this.Al.Set(0
,1,(Jq-Nn)+NO);this.Al.Set(1,0,(Jp+NG)+NP);this.Al.Set(1,1,(Jq-NH)+NO);this.Al.Set(
2,0,(Jp+NG)+M3);this.Al.Set(2,1,(Jq-NH)+M2);this.Al.Set(3,0,(Jp+Nm)+M3);this.Al.
Set(3,1,(Jq-Nn)+M2);this.Al.Set(0,2,1);this.Al.Set(1,2,1);this.Al.Set(2,2,1);this.
Al.Set(3,2,1);if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent());this.
Ca=[(this.Al.Get(0,0)+0.5)|0,(this.Al.Get(0,1)+0.5)|0];this.BM=[(this.Al.Get(1,0
)+0.5)|0,(this.Al.Get(1,1)+0.5)|0];this.Cb=[(this.Al.Get(2,0)+0.5)|0,(this.Al.Get(
2,1)+0.5)|0];this.BN=[(this.Al.Get(3,0)+0.5)|0,(this.Al.Get(3,1)+0.5)|0];this.Gp=
0x45;this.Do=0x00;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent());
this.M7();},_Init:function(aArg){B.Core.D_._Init.call(this,aArg);(this.Al=[]).__proto__=
C.GT.Al;this.__proto__=C.GT;this.E=0x3;},_className:"Views::WarpView"};C.K9={timer:
null,U:null,AP:0,Bm:0,CC:false,Da:function(A1,aClip,aOffset,A$,aBlend){var A;var
Bq=0;if(this.Bm>=0)Bq=this.Bm;if(!this.U||(Bq>=this.U.NoOfFrames))return;this.U.
Update();var Je;var Jf;var Jg;var Jh;var BR=(((A$+1)*255)>>8)+1;var Jy=aOffset[0
];var Jz=aOffset[1];var N=[].concat(Aw,this.E0);aBlend=aBlend&&((this.E&0x2)===0x2
);Je=Jf=Jg=Jh=0xFFFFFFFF;if(BR<256){Je=(Je&0x00FFFFFF)|((((255*BR)>>8)&0xFF)<<24
);Jf=(Jf&0x00FFFFFF)|((((255*BR)>>8)&0xFF)<<24);Jg=(Jg&0x00FFFFFF)|((((255*BR)>>
8)&0xFF)<<24);Jh=(Jh&0x00FFFFFF)|((((255*BR)>>8)&0xFF)<<24);}aClip=B.z6(aClip,B.
aam(Bk,aOffset));A1.PZ(aClip,this.U,Bq,this.Al.Get(0,0)+Jy,this.Al.Get(0,1)+Jz,this.
Al.Get(0,2),this.Al.Get(1,0)+Jy,this.Al.Get(1,1)+Jz,this.Al.Get(1,2),this.Al.Get(
2,0)+Jy,this.Al.Get(2,1)+Jz,this.Al.Get(2,2),this.Al.Get(3,0)+Jy,this.Al.Get(3,1
)+Jz,this.Al.Get(3,2),N,Je,Jf,Jg,Jh,aBlend,true);},Fa:function(Ah){var A;var Nx=
this.E0;if(!!this.U)this.E0=this.U.FrameSize;else this.E0=Aw;if(((B.z8(Nx,this.E0
)||((this.Gp===0x45)&&(this.Do===0x00)))&&!!this.F)&&((this.E&0x1)===0x1))this.F.
An(this.GetExtent());if(((this.Gp!==0x45)&&(this.Do===0x00))&&!B.z8(Nx,this.E0)){
this.Do=this.Gp;B.ow([this,this.Hb],this);}},B8:function(Ah){var A;var Bq=this.Bm;
var Ce=0;if(!!this.U)Ce=this.U.NoOfFrames*this.U.FrameDelay;if((!!this.timer&&(this.
Bm<0))&&(Ce>0))this.AP=this.timer.Aq;if(!!this.timer&&(Ce>0)){var Af=(this.timer.
Aq-this.AP)|0;Bq=(Af/this.U.FrameDelay)|0;if(Af>=Ce){Bq=Bq%this.U.NoOfFrames;this.
AP=this.timer.Aq-(Af%Ce);}}if(((Bq!==this.Bm)&&!!this.F)&&((this.E&0x1)===0x1))this.
F.An(this.GetExtent());this.Bm=Bq;if(!Ce&&!!this.timer){B.zl([this,this.B8],this.
timer,0);this.timer=null;}},Du:function(value){var A;if(this.CC===value)return;this.
CC=value;this.Bm=-1;if(!value&&!!this.timer){B.zl([this,this.B8],this.timer,0);this.
timer=null;}if(value){this.timer=B._GetAutoObject(B.abj.Fi);B.y_([this,this.B8],
this.timer,0);B.ow([this,this.B8],this);}if(!!this.F&&((this.E&0x1)===0x1))this.
F.An(this.GetExtent());},DS:function(value){if(value===this.U)return;if(!!this.U&&
this.U.Fk)B.zl([this,this.Fa],this.U,0);this.U=value;this.Bm=-1;if(!!value&&value.
Fk)B.y_([this,this.Fa],value,0);if(this.CC){this.Du(false);this.Du(true);}this.Fa(
this);},_Init:function(aArg){C.GT._Init.call(this,aArg);this.__proto__=C.K9;},_Mark:
function(D){var A;C.GT._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.U)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpImage"
};C.RN={N1:0x1,N0:0x2,N2:0x4,N5:0x8,N4:0x10,N3:0x20,Sf:0x40,Sg:0x80,Sn:0x100};C.
So={N1:0x1,N0:0x2,N2:0x4,N5:0x8,N4:0x10,N3:0x20,Q_:0x40,Q9:0x80,Rd:0x100};C.RX={
RW:0,Sd:1,Sb:2,Sc:3};
C._Init=function(){C.A5.__proto__=B.Core.Bj;C.Hk.__proto__=B.Core.Bj;C.CW.__proto__=
B.Core.Bj;C.Text.__proto__=B.Core.Bj;C.GT.__proto__=B.Core.D_;C.K9.__proto__=C.GT;
};C._ReInit=function(){};C.CI=function(D){};return C;})();

/* Embedded Wizard */