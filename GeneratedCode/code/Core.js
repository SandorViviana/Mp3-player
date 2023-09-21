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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var C={};
var Aw=[0,0];var Bk=[0,0,0,0];var Dl="The view does not belong to this group";var
Ea="The dialog component is already presented";var EW="The dialog component is actually not presented";
var Ga="No fader to perform the fade-in/out operation";var Gb="Trying to use the same fader twice";
var GV="Trying to fade-in/out a group which belongs to another owner";var HX="No view to restack";
var HY="View is not in this group";var K_="No view to remove";var I0="No view to add";
var K$="View already in a group";var La="Recursive invalidate during active update cycle.";
var HZ=[-8,-8,9,9];var Lb="The method SwitchToDialog() is not available in Core::VerticalList.";
var Lc="The method DismissDialog() is not available in Core::VerticalList.";var Ld=
"The method PresentDialog() is not available in Core::VerticalList.";var Le="The method FadeGroup() is not available in Core::VerticalList.";
var Lf="The method RestackTop() is not available in Core::VerticalList.";var Lg=
"The method Remove() is not available in Core::VerticalList.";var Lh="The method Add() is not available in Core::VerticalList.";
var Li="The Slide Touch Handler:";var Lj="is already connected with a view.";var
Lk="The Slide Touch Handler is already connected with a view to scroll "+"its content.";
var Ll=[0,0,170,120];var H0=[0,0,1,1];var Lm="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Ln="Trying to cancel a task not belonging to this queue!";
var Lo="Trying to enqueue a task twice!";
C.Ax={O:null,W:null,F:null,AY:null,E:0x103,CZ:0x14,Ib:function(Ae,I5){},GK:function(
value){var A;var Ar=value^this.CZ;if(!Ar)return;this.CZ=value;if(!!this.AY&&!((this.
E&0x400)===0x400)){this.F.E=this.F.E|0x5000;B.ow([A=this.F,A.Cq],this);this.F.An([
0,0,(A=this.F.K)[2]-A[0],A[3]-A[1]]);}if(!!this.AY&&((this.E&0x400)===0x400)){this.
AY.Gr.E=this.AY.Gr.E|0x1000;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq],this);
}},EJ:function(){var Ai=this.F;while(!!Ai){var BE=(C.Root.isPrototypeOf(Ai)?Ai:null
);if(!!BE)return BE;Ai=Ai.F;}return null;},Da:function(A1,aClip,aOffset,A$,aBlend
){},Bi:function(Ak){return null;},D6:function(Am,S,Cv,DV,DE,EX){return null;},Ix:
function(Am){return Am;},Iz:function(Ae,Dm){return Aw;},IL:function(aOffset,I2){
},GetExtent:function(){return Bk;},A7:function(EY,Gd){var A;if(((this.E&0x200)===
0x200))EY=EY&~0x400;var LT=(this.E&~Gd)|EY;var Fx=LT^this.E;this.E=LT;if(!!this.
F&&!!(Fx&0x14)){var Ne=((this.E&0x14)===0x14);if(Ne&&!this.F.B_)this.F.CF(this);
if(!Ne&&(this.F.B_===this))this.F.CF(this.F.J$(this,0x14));}if(!!this.F&&!!(Fx&0x403
))this.F.An(this.GetExtent());if(((!!this.AY&&!!this.F)&&((LT&0x400)===0x400))&&((
Fx&0x1)===0x1)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq
],this);}if(!!this.F&&((Fx&0x400)===0x400)){this.AY=null;this.E=this.E|0x800;this.
F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq],this);}},_Init:function(aArg){this.__proto__=
C.Ax;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.F)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.AY)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Core::View"
};C.D_={BN:B.vw,Cb:B.vw,BM:B.vw,Ca:B.vw,Ib:function(Ae,I5){var Ag=B._NewObject(C.
IH,0);this.AY=null;Ag.CN=this.GetExtent();Ag.At=Ae;Ag.Gr=I5;Ag.Il=this.Ca;Ag.Im=
this.BM;Ag.In=this.Cb;Ag.Io=this.BN;this.AY=Ag;},Iz:function(Ae,Dm){var A;var BJ=
this.CZ;var Ag=(C.IH.isPrototypeOf(A=this.AY)?A:null);var Y=Ag.CN[0];var Z=Ag.CN[
1];var Aa=Ag.CN[2];var Ab=Ag.CN[3];var CM=[Ae[2]-Ae[0],Ae[3]-Ae[1]];var Bh=Aa-Y;
var A6=Ab-Z;if(!Dm){var DP=[(A=Ag.At)[2]-A[0],A[3]-A[1]];Y=Y-Ag.At[0];Z=Z-Ag.At[
1];if(DP[0]!==CM[0]){var B1=((BJ&0x4)===0x4);var B2=((BJ&0x8)===0x8);var Em=((BJ&
0x1)===0x1);if(!B1&&(Em||!B2))Y=((Y*CM[0])/DP[0])|0;if(!B2&&(Em||!B1)){Aa=Aa-Ag.
At[0];Aa=((Aa*CM[0])/DP[0])|0;Aa=Aa-CM[0];}else Aa=Aa-Ag.At[2];Y=Y+Ae[0];Aa=Aa+Ae[
2];if(!Em){if(B1&&!B2)Aa=Y+Bh;else if(!B1&&B2)Y=Aa-Bh;else{Y=Y+((((Aa-Y)-Bh)/2)|
0);Aa=Y+Bh;}}}else{Aa=Aa-Ag.At[2];Y=Y+Ae[0];Aa=Aa+Ae[2];}if(DP[1]!==CM[1]){var B3=((
BJ&0x10)===0x10);var B0=((BJ&0x20)===0x20);var En=((BJ&0x2)===0x2);if(!B3&&(En||
!B0))Z=((Z*CM[1])/DP[1])|0;if(!B0&&(En||!B3)){Ab=Ab-Ag.At[1];Ab=((Ab*CM[1])/DP[1
])|0;Ab=Ab-CM[1];}else Ab=Ab-Ag.At[3];Z=Z+Ae[1];Ab=Ab+Ae[3];if(!En){if(B3&&!B0)Ab=
Z+A6;else if(!B3&&B0)Z=Ab-A6;else{Z=Z+((((Ab-Z)-A6)/2)|0);Ab=Z+A6;}}}else{Ab=Ab-
Ag.At[3];Z=Z+Ae[1];Ab=Ab+Ae[3];}}else{switch(Dm){case 3:{Y=Ae[0];Aa=Y+Bh;}break;
case 4:{Aa=Ae[2];Y=Aa-Bh;}break;case 1:{Z=Ae[1];Ab=Z+A6;}break;case 2:{Ab=Ae[3];
Z=Ab-A6;}break;default:;}if((Dm===3)||(Dm===4)){var B3=((BJ&0x10)===0x10);var B0=((
BJ&0x20)===0x20);var En=((BJ&0x2)===0x2);if(En){Z=Ae[1];Ab=Ae[3];}else if(B3&&!B0
){Z=Ae[1];Ab=Z+A6;}else if(B0&&!B3){Ab=Ae[3];Z=Ab-A6;}else{Z=Ae[1]+((((Ae[3]-Ae[
1])-A6)/2)|0);Ab=Z+A6;}}if((Dm===1)||(Dm===2)){var B1=((BJ&0x4)===0x4);var B2=((
BJ&0x8)===0x8);var Em=((BJ&0x1)===0x1);if(Em){Y=Ae[0];Aa=Ae[2];}else if(B1&&!B2){
Y=Ae[0];Aa=Y+Bh;}else if(B2&&!B1){Aa=Ae[2];Y=Aa-Bh;}else{Y=Ae[0]+((((Ae[2]-Ae[0]
)-Bh)/2)|0);Aa=Y+Bh;}}}Ag.isEmpty=(Y>=Aa)||(Z>=Ab);Bh=(Aa-Y)-1;A6=(Ab-Z)-1;var E3=
Ag.CN[0];var E4=Ag.CN[1];var Ez=(Ag.CN[2]-E3)-1;var Ey=(Ag.CN[3]-E4)-1;if(!Ez)Ez=
1;if(!Ey)Ey=1;if(((this.E&0x100)===0x100)){this.Ca=[Y+((((Ag.Il[0]-E3)*Bh)/Ez)|0
),Z+((((Ag.Il[1]-E4)*A6)/Ey)|0)];this.BM=[Y+((((Ag.Im[0]-E3)*Bh)/Ez)|0),Z+((((Ag.
Im[1]-E4)*A6)/Ey)|0)];this.Cb=[Y+((((Ag.In[0]-E3)*Bh)/Ez)|0),Z+((((Ag.In[1]-E4)*
A6)/Ey)|0)];this.BN=[Y+((((Ag.Io[0]-E3)*Bh)/Ez)|0),Z+((((Ag.Io[1]-E4)*A6)/Ey)|0)
];}else{this.Fl([Y+((((Ag.Il[0]-E3)*Bh)/Ez)|0),Z+((((Ag.Il[1]-E4)*A6)/Ey)|0)]);this.
Fm([Y+((((Ag.Im[0]-E3)*Bh)/Ez)|0),Z+((((Ag.Im[1]-E4)*A6)/Ey)|0)]);this.Fn([Y+((((
Ag.In[0]-E3)*Bh)/Ez)|0),Z+((((Ag.In[1]-E4)*A6)/Ey)|0)]);this.Fo([Y+((((Ag.Io[0]-
E3)*Bh)/Ez)|0),Z+((((Ag.Io[1]-E4)*A6)/Ey)|0)]);this.AY=Ag;}return[Bh+1,A6+1];},IL:
function(aOffset,I2){if(I2){this.Ca=B.aak(this.Ca,aOffset);this.BM=B.aak(this.BM
,aOffset);this.Cb=B.aak(this.Cb,aOffset);this.BN=B.aak(this.BN,aOffset);}else{this.
Fl(B.aak(this.Ca,aOffset));this.Fm(B.aak(this.BM,aOffset));this.Fn(B.aak(this.Cb
,aOffset));this.Fo(B.aak(this.BN,aOffset));}},GetExtent:function(){if(!!this.AY&&
this.AY.isEmpty)return Bk;var Y=this.Ca[0];var Z=this.Ca[1];var Aa=this.Cb[0];var
Ab=this.Cb[1];if((((this.BN[0]!==Y)||(this.BM[1]!==Z))||(this.BM[0]!==Aa))||(this.
BN[1]!==Ab)){if(this.BM[0]<Y)Y=this.BM[0];if(this.Cb[0]<Y)Y=this.Cb[0];if(this.BN[
0]<Y)Y=this.BN[0];if(this.BM[1]<Z)Z=this.BM[1];if(this.Cb[1]<Z)Z=this.Cb[1];if(this.
BN[1]<Z)Z=this.BN[1];if(this.Ca[0]>Aa)Aa=this.Ca[0];if(this.BM[0]>Aa)Aa=this.BM[
0];if(this.BN[0]>Aa)Aa=this.BN[0];if(this.Ca[1]>Ab)Ab=this.Ca[1];if(this.BM[1]>Ab
)Ab=this.BM[1];if(this.BN[1]>Ab)Ab=this.BN[1];}else{var tmp;if(Aa<Y){tmp=Y;Y=Aa;
Aa=tmp;}if(Ab<Z){tmp=Z;Z=Ab;Ab=tmp;}}return[Y,Z,Aa+1,Ab+1];},Fo:function(value){
var A;if(B.z8(value,this.BN))return;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(
this.GetExtent());this.AY=null;this.BN=value;if(!!this.F&&((this.E&0x1)===0x1))this.
F.An(this.GetExtent());if((!!this.F&&((this.E&0x400)===0x400))&&!((this.F.E&0x2000
)===0x2000)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq],this
);}},Fn:function(value){var A;if(B.z8(value,this.Cb))return;if(!!this.F&&((this.
E&0x1)===0x1))this.F.An(this.GetExtent());this.AY=null;this.Cb=value;if(!!this.F&&((
this.E&0x1)===0x1))this.F.An(this.GetExtent());if((!!this.F&&((this.E&0x400)===0x400
))&&!((this.F.E&0x2000)===0x2000)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;
B.ow([A=this.F,A.Cq],this);}},Fm:function(value){var A;if(B.z8(value,this.BM))return;
if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent());this.AY=null;this.
BM=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent());if((!!this.
F&&((this.E&0x400)===0x400))&&!((this.F.E&0x2000)===0x2000)){this.E=this.E|0x800;
this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq],this);}},Fl:function(value){var A;
if(B.z8(value,this.Ca))return;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent(
));this.AY=null;this.Ca=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.GetExtent(
));if((!!this.F&&((this.E&0x400)===0x400))&&!((this.F.E&0x2000)===0x2000)){this.
E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq],this);}},Km:function(
Ed){var Bc=B.aan(4,B.vw,null);var G=0;var Bg=3;var LH=false;var LI=false;Bc.Set(
0,this.Ca);Bc.Set(1,this.BM);Bc.Set(2,this.Cb);Bc.Set(3,this.BN);while(G<4){var NY=
Bc.Get(G)[0];var JW=Bc.Get(G)[1];var Q6=Bc.Get(Bg)[0];var L8=Bc.Get(Bg)[1];if(((
JW>Ed[1])!==(L8>Ed[1]))||((JW<Ed[1])!==(L8<Ed[1]))){var Gz=((((Q6-NY)*(Ed[1]-JW)
)/(L8-JW))|0)+NY;if(Ed[0]>Gz)LH=!LH;if(Ed[0]<Gz)LI=!LI;}Bg=G;G=G+1;}return LH||LI;
},Ol:function(){return((((this.Ca[0]===this.BN[0])&&(this.BM[0]===this.Cb[0]))&&(
this.Ca[1]===this.BM[1]))&&(this.Cb[1]===this.BN[1]))||((((this.Ca[0]===this.BM[
0])&&(this.Cb[0]===this.BN[0]))&&(this.Ca[1]===this.BN[1]))&&(this.BM[1]===this.
Cb[1]));},_Init:function(aArg){C.Ax._Init.call(this,aArg);this.__proto__=C.D_;},
_className:"Core::QuadView"};C.Bj={K:B.vx,Ib:function(Ae,I5){var Ag=B._NewObject(
C.IG,0);Ag.CN=this.K;Ag.At=Ae;Ag.Gr=I5;this.AY=Ag;},Iz:function(Ae,Dm){var A;var
BJ=this.CZ;var Ag=this.AY;var Y=Ag.CN[0];var Z=Ag.CN[1];var Aa=Ag.CN[2];var Ab=Ag.
CN[3];var CM=[Ae[2]-Ae[0],Ae[3]-Ae[1]];var Bh=Aa-Y;var A6=Ab-Z;if(!Dm){var DP=[(
A=Ag.At)[2]-A[0],A[3]-A[1]];Y=Y-Ag.At[0];Z=Z-Ag.At[1];if(DP[0]!==CM[0]){var B1=((
BJ&0x4)===0x4);var B2=((BJ&0x8)===0x8);var Em=((BJ&0x1)===0x1);if(!B1&&(Em||!B2)
)Y=((Y*CM[0])/DP[0])|0;if(!B2&&(Em||!B1)){Aa=Aa-Ag.At[0];Aa=((Aa*CM[0])/DP[0])|0;
Aa=Aa-CM[0];}else Aa=Aa-Ag.At[2];Y=Y+Ae[0];Aa=Aa+Ae[2];if(!Em){if(B1&&!B2)Aa=Y+Bh;
else if(!B1&&B2)Y=Aa-Bh;else{Y=Y+((((Aa-Y)-Bh)/2)|0);Aa=Y+Bh;}}}else{Aa=Aa-Ag.At[
2];Y=Y+Ae[0];Aa=Aa+Ae[2];}if(DP[1]!==CM[1]){var B3=((BJ&0x10)===0x10);var B0=((BJ&
0x20)===0x20);var En=((BJ&0x2)===0x2);if(!B3&&(En||!B0))Z=((Z*CM[1])/DP[1])|0;if(
!B0&&(En||!B3)){Ab=Ab-Ag.At[1];Ab=((Ab*CM[1])/DP[1])|0;Ab=Ab-CM[1];}else Ab=Ab-Ag.
At[3];Z=Z+Ae[1];Ab=Ab+Ae[3];if(!En){if(B3&&!B0)Ab=Z+A6;else if(!B3&&B0)Z=Ab-A6;else{
Z=Z+((((Ab-Z)-A6)/2)|0);Ab=Z+A6;}}}else{Ab=Ab-Ag.At[3];Z=Z+Ae[1];Ab=Ab+Ae[3];}}else{
switch(Dm){case 3:{Y=Ae[0];Aa=Y+Bh;}break;case 4:{Aa=Ae[2];Y=Aa-Bh;}break;case 1:{
Z=Ae[1];Ab=Z+A6;}break;case 2:{Ab=Ae[3];Z=Ab-A6;}break;default:;}if((Dm===3)||(Dm===
4)){var B3=((BJ&0x10)===0x10);var B0=((BJ&0x20)===0x20);var En=((BJ&0x2)===0x2);
if(En){Z=Ae[1];Ab=Ae[3];}else if(B3&&!B0){Z=Ae[1];Ab=Z+A6;}else if(B0&&!B3){Ab=Ae[
3];Z=Ab-A6;}else{Z=Ae[1]+((((Ae[3]-Ae[1])-A6)/2)|0);Ab=Z+A6;}}if((Dm===1)||(Dm===
2)){var B1=((BJ&0x4)===0x4);var B2=((BJ&0x8)===0x8);var Em=((BJ&0x1)===0x1);if(Em
){Y=Ae[0];Aa=Ae[2];}else if(B1&&!B2){Y=Ae[0];Aa=Y+Bh;}else if(B2&&!B1){Aa=Ae[2];
Y=Aa-Bh;}else{Y=Ae[0]+((((Ae[2]-Ae[0])-Bh)/2)|0);Aa=Y+Bh;}}}Ag.isEmpty=(Y>=Aa)||(
Z>=Ab);if(((this.E&0x100)===0x100))this.K=[Y,Z,Aa,Ab];else{this.Aj([Y,Z,Aa,Ab]);
this.AY=Ag;}return[Aa-Y,Ab-Z];},IL:function(aOffset,I2){if(I2)this.K=B.aam(this.
K,aOffset);else this.Aj(B.aam(this.K,aOffset));},GetExtent:function(){return this.
K;},Aj:function(value){var A;if(B.z9(value,this.K))return;if(!!this.F&&((this.E&
0x1)===0x1))this.F.An(this.K);this.AY=null;this.K=value;if(!!this.F&&((this.E&0x1
)===0x1))this.F.An(this.K);if((!!this.F&&((this.E&0x400)===0x400))&&!((this.F.E&
0x2000)===0x2000)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.
Cq],this);}},_Init:function(aArg){C.Ax._Init.call(this,aArg);this.__proto__=C.Bj;
},_className:"Core::RectView"};C.I={As:null,Ay:null,Jx:null,Bo:null,DJ:null,Gt:null
,B_:null,DT:255,Cg:function(aArg){this.BZ();},Da:function(A1,aClip,aOffset,A$,aBlend
){var A;A$=((A$+1)*this.DT)>>8;aBlend=aBlend&&((this.E&0x2)===0x2);this.Qu(A1,aClip
,B.aak(aOffset,this.K.slice(0,2)),A$,aBlend);},D6:function(Am,S,Cv,DV,DE,EX){var
A;var J=this.Ay;var Gm=null;var N=Bk;var C5=null;var LP=!!this.DJ&&(!!this.DJ.C2||
!!this.DJ.As);if(((A=B.kz(Am,this.K))[0]>=A[2])||(A[1]>=A[3]))return null;Am=B.aal(
Am,this.K.slice(0,2));if(!!DE){J=DE;while(!!J&&(J.F!==this))J=J.F;}while(!!J){if(((
J.E&0x400)===0x400)&&!C5){C5=J.W;while(!!C5&&!((C5.E&0x200)===0x200))C5=C5.W;if(
!!C5)N=B.kz(Am,C5.GetExtent());else N=Bk;}if(C5===J){C5=null;N=Bk;}if((((((J.E&0x8
)===0x8)&&((J.E&0x10)===0x10))&&!((J.E&0x40000)===0x40000))&&!((J.E&0x20000)===0x20000
))&&(!((J.E&0x10000)===0x10000)||((this.Bo.AL===J)&&!LP))){var CN=J.GetExtent();
var Jo=DV;var Gj=null;if(Jo===J)Jo=null;if(((J.E&0x400)===0x400)){if(!(((A=B.kz(
CN,N))[0]>=A[2])||(A[1]>=A[3])))Gj=J.D6(N,S,Cv,Jo,DE,EX);}else if(!(((A=B.kz(CN,
Am))[0]>=A[2])||(A[1]>=A[3]))||(DV===J))Gj=J.D6(Am,S,Cv,Jo,DE,EX);J=J.W;if(!!Gj){
if(!Gm||((Gj.Hf<Gm.Hf)&&(Gj.Hf>=0)))Gm=Gj;if(!Gj.Hf)J=null;}}else J=J.W;DE=null;
}return Gm;},Ix:function(Am){var A;var Cu;var J=this.As;var H7=Bk;var Ik=true;var
result=(Am=Cu=B.aal(Am,this.K.slice(0,2)),Cu);while(!!J){if(((J.E&0x200)===0x200
)){var Ij=(C.HB.isPrototypeOf(J)?J:null);H7=B.kz(Am,Ij.K);Ik=((Ij.E&0x1)===0x1);
}if(((J.E&0x1)===0x1)){if(((J.E&0x400)===0x400)){if(Ik){var N=B.kz(J.GetExtent()
,H7);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=B.vS(result,J.Ix(N));}}else{var N=B.
kz(J.GetExtent(),Am);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=B.vS(result,J.Ix(N)
);}}J=J.O;}return B.kz(B.aam(result,this.K.slice(0,2)),this.K);},A7:function(EY,
Gd){var A;var QE=this.E;C.Bj.A7.call(this,EY,Gd);var Fx=this.E^QE;if(!!this.B_&&((
Fx&0x40)===0x40)){if(((this.E&0x40)===0x40))this.B_.A7(0x40,0x0);else this.B_.A7(
0x0,0x40);}if(!!this.Bo&&((Fx&0x40)===0x40)){if(((this.E&0x40)===0x40)&&((this.Bo.
AL.E&0x14)===0x14))this.Bo.AL.A7(0x40,0x0);else this.Bo.AL.A7(0x0,0x40);}if(!!Fx
){this.E=this.E|0x8000;B.ow([this,this.Cq],this);}},Aj:function(value){var A;if(
B.z9(value,this.K))return;var FI=[(A=this.K)[2]-A[0],A[3]-A[1]];var LS=[value[2]-
value[0],value[3]-value[1]];var G8=!B.z8(FI,LS);C.Bj.Aj.call(this,value);if((G8&&(
FI[0]>0))&&(FI[1]>0)){var At=[].concat(Aw,FI);var J=this.As;while(!!J){if((!J.AY&&(
J.CZ!==0x14))&&!((J.E&0x400)===0x400))J.Ib(At,null);J=J.O;}}if(G8){this.E=this.E|
0x5000;B.ow([this,this.Cq],this);}},ND:function(Ak){var Nk=(C.KeyEvent.isPrototypeOf(
Ak)?Ak:null);var D0=this.Jx;if(!Nk)return null;while(!!D0&&(!D0.AV||!D0.Bi(Nk)))
D0=D0.O;return D0;},Qu:function(A1,aClip,aOffset,A$,aBlend){var A;var J=this.As;
var H7=Bk;var Ik=true;this.Ob(A1,aClip,aOffset,A$,aBlend);while(!!J){if(((J.E&0x200
)===0x200)){var Ij=(C.HB.isPrototypeOf(J)?J:null);H7=B.kz(aClip,B.aam(Ij.K,aOffset
));Ik=((Ij.E&0x1)===0x1);}if(((J.E&0x1)===0x1)){if(((J.E&0x400)===0x400)){if(Ik){
var N=B.kz(B.aam(J.GetExtent(),aOffset),H7);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.Da(
A1,N,aOffset,A$,aBlend);}}else{var N=B.kz(B.aam(J.GetExtent(),aOffset),aClip);if(
!((N[0]>=N[2])||(N[1]>=N[3])))J.Da(A1,N,aOffset,A$,aBlend);}}J=J.O;}this.Od(A1,aClip
,aOffset,A$,aBlend);},QR:function(){var A;var LF=((this.E&0x1000)===0x1000);var E5=[
0,0,(A=this.K)[2]-A[0],A[3]-A[1]];var EA=false;var G1=Bk;var LD=Bk;var J=this.Ay;
var C5=null;while(!!J){if(((J.E&0x800)===0x800)){EA=true;J.E=J.E&~0x800;}if(EA&&((
J.E&0x200)===0x200))EA=false;J=J.W;}EA=false;J=this.As;if(LF){this.E=this.E&~0x1000;
LF=!((E5[0]>=E5[2])||(E5[1]>=E5[3]));}this.E=this.E|0x2000;while(!!J){if(((J.E&0x400
)===0x400)){if(!!J.AY&&(J.AY.Gr!==C5))J.AY=null;if((!J.AY&&EA)&&(J.CZ!==0x14))J.
Ib(LD,C5);}if(!!J.AY){if(LF&&!((J.E&0x400)===0x400))J.Iz(E5,0);if(EA&&((J.E&0x400
)===0x400))J.Iz(LD,0);}if(((J.E&0x200)===0x200)){EA=((J.E&0x1000)===0x1000);C5=(
C.HB.isPrototypeOf(J)?J:null);if(EA){J.E=J.E&~0x1000;G1=C5.K;LD=G1;EA=!((G1[0]>=
G1[2])||(G1[1]>=G1[3]));}if(EA)this.An(C5.K);}J=J.O;}this.E=this.E&~0x2000;this.
MR([E5[2]-E5[0],E5[3]-E5[1]]);},Cq:function(Ah){var A;var Q4=((this.E&0x1000)===
0x1000);if(((this.E&0x4000)===0x4000)){this.E=this.E&~0x4000;this.QR();}if(((this.
E&0x8000)===0x8000)||Q4){this.E=this.E&~0x8000;this.Ft(this.E);}},CF:function(value
){var A;if(!!value&&(value.F!==this))throw new Error(Dl);if(!!value&&!((value.E&
0x14)===0x14))value=null;if(!!value&&((value.E&0x10000)===0x10000))value=null;if(
value===this.B_)return;if(!!this.B_)this.B_.A7(0x0,0x60);this.B_=value;if(!!value
){if(((this.E&0x40)===0x40))value.A7(0x60,0x0);else value.A7(0x20,0x0);}},OB:function(
){return false;},A_:function(value){if(value)this.A7(0x10,0x0);else this.A7(0x0,
0x10);},FZ:function(value){var A;if(value>255)value=255;if(value<0)value=0;if(value===
this.DT)return;this.DT=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.An(this.K);
},Qd:function(Q5){this.FZ(Q5);},GF:function(){var A;return((this.E&0x1)===0x1);}
,Er:function(value){if(value)this.A7(0x1,0x0);else this.A7(0x0,0x1);},Od:function(
A1,aClip,aOffset,A$,aBlend){},Ob:function(A1,aClip,aOffset,A$,aBlend){},GetMinimalSize:
function(){return Aw;},KJ:function(Bv,CJ,Eb,DB,DD,Gf,De,DC,Ck,Ci,Cj){var A;if(!this.
Bo){this.MN(Bv,CJ,Eb,DB,DD,null,null,Ck,Ci,Cj);return;}var FH=this.Bo;var BP=FH.
O;if(((Bv.E&0x10000)===0x10000)&&(this.Bo.AL!==Bv))throw new Error(Ea);var Ej=B.
_NewObject(C.J0,0);var C4=FH.C4;var C_=null;var BX=null;if(!!BP){C_=BP.C_;BX=BP.
BX;}if(!!BP&&!!FH.Gs)C_=FH.Gs;if(!!BP&&!!De)BX=De;if(!!Gf)C4=Gf;if(!CJ)CJ=B._GetAutoObject(
B.abj.HF);if(!Eb)Eb=CJ;if(!DD)DD=DB;if(!DB)DB=DD;Ej.C4=Eb;Ej.BX=DB;Ej.C_=DD;Ej.Gs=
DC;Ej.AL=Bv;Ej.O=this.Bo.O;this.Bo.O=null;this.Bo=Ej;if(this.B_===Bv)this.CF(null
);FH.AL.A7(0x0,0x10040);if(((this.E&0x40)===0x40)&&((Bv.E&0x4)===0x4))Bv.A7(0x10040
,0x0);else Bv.A7(0x10000,0x0);if(!!BX){this.Cr(BP.AL,BX.GA(),null,null,Cj);this.
Cr(FH.AL,C4.EE(),null,null,true);this.Cr(Ej.AL,CJ.EF(),Ck,Ci,true);}else if(!!C_
){this.Cr(BP.AL,C_.GB(),null,null,Cj);this.Cr(FH.AL,C4.EE(),null,null,true);this.
Cr(Ej.AL,CJ.EF(),Ck,Ci,true);}else if(!!C4){this.Cr(FH.AL,C4.EE(),null,null,Cj);
this.Cr(Ej.AL,CJ.EF(),Ck,Ci,true);}else this.Cr(Ej.AL,CJ.EF(),Ck,Ci,Cj);},Md:function(
Bv,Gf,De,DC,Ck,Ci,Cj){var A;if(!this.Bo)return;if(!Bv)return;var BI=this.Bo;var BP=
this.Bo.O;var G6=null;while((!!BI&&(BI.AL!==Bv))&&!!BI.O){G6=BI;BI=BP;BP=BI.O;}if(
!BI||(BI.AL!==Bv))throw new Error(EW);if(!G6){this.Bo=BP;BI.O=null;}else{G6.O=BP;
BI.O=null;}BI.AL.A7(0x0,0x10040);if(((((this.E&0x40)===0x40)&&!!BP)&&!G6)&&((BP.
AL.E&0x4)===0x4))BP.AL.A7(0x40,0x0);var C4=BI.C4;var C_=null;var BX=null;if(!!BP
)C_=BP.C_;if(!!BP&&!!BI.Gs)C_=BI.Gs;if(!!BP&&!!DC)C_=DC;if(!!G6&&!!BP)BX=BP.BX;if((
!!G6&&!!BP)&&!!De)BX=De;if(!!Gf)C4=Gf;if(!!BX){this.Cr(BP.AL,BX.GA(),null,null,Cj
);this.Cr(BI.AL,C4.EE(),Ck,Ci,true);}else if(!!C_){this.Cr(BP.AL,C_.GB(),null,null
,Cj);this.Cr(BI.AL,C4.EE(),Ck,Ci,true);}else this.Cr(BI.AL,C4.EE(),Ck,Ci,Cj);},MN:
function(Bv,CJ,Eb,DB,DD,De,DC,Ck,Ci,Cj){var A;if(!Bv)return;if(!!this.Bo&&(this.
Bo.AL===Bv)){this.KJ(Bv,CJ,Eb,DB,DD,null,De,DC,Ck,Ci,Cj);return;}if(((Bv.E&0x10000
)===0x10000))throw new Error(Ea);var BI=B._NewObject(C.J0,0);if(!!this.Bo&&!this.
Bo.BX){if(!DC)DC=De;if(!De)De=DC;}var BX=null;if(!!this.Bo)BX=this.Bo.BX;if(!!this.
Bo&&!!De)BX=De;if(!CJ)CJ=B._GetAutoObject(B.abj.HF);if(!Eb)Eb=CJ;if(!DD)DD=DB;if(
!DB)DB=DD;BI.C4=Eb;BI.BX=DB;BI.C_=DD;BI.Gs=DC;if(this.B_===Bv)this.CF(null);if(!
!this.Bo)this.Bo.AL.A7(0x0,0x40);if(((this.E&0x40)===0x40)&&((Bv.E&0x4)===0x4))Bv.
A7(0x10040,0x0);else Bv.A7(0x10000,0x0);BI.AL=Bv;BI.O=this.Bo;this.Bo=BI;if(!!BX
){this.Cr(this.Bo.O.AL,BX.GA(),null,null,Cj);this.Cr(Bv,CJ.EF(),Ck,Ci,true);}else
this.Cr(Bv,CJ.EF(),Ck,Ci,Cj);},Mk:function(Ed){var tmp=this;while(!!tmp){Ed=B.aaj(
Ed,tmp.K.slice(0,2));tmp=tmp.F;}return Ed;},DispatchEvent:function(Ak){var A;var
J=this.B_;var Ai=(C.I.isPrototypeOf(J)?J:null);var Bf=null;var LP=!!this.DJ&&(!!
this.DJ.C2||!!this.DJ.As);if(!!J&&((((J.E&0x10000)===0x10000)||((J.E&0x40000)===
0x40000))||((J.E&0x20000)===0x20000))){J=null;Ai=null;}if(!!this.Bo&&!LP)Bf=this.
Bo.AL.DispatchEvent(Ak);if(!Bf&&!!Ai)Bf=Ai.DispatchEvent(Ak);else if(!Bf&&!!J)Bf=
J.Bi(Ak);if(!Bf)Bf=this.Bi(Ak);if(!Bf)Bf=this.ND(Ak);return Bf;},BroadcastEventAtPosition:
function(Ak,MX,aFilter){var A;var J=this.Ay;var Bf=null;while(!!J&&!Bf){if((!aFilter||((
A=aFilter)&&((J.E&A)===A)))&&B.vt(J.GetExtent(),MX)){var Ai=(C.I.isPrototypeOf(J
)?J:null);if(!!Ai)Bf=Ai.BroadcastEventAtPosition(Ak,B.aaj(MX,Ai.K.slice(0,2)),aFilter
);else Bf=J.Bi(Ak);}J=J.W;}if(!Bf)Bf=this.Bi(Ak);return Bf;},BroadcastEvent:function(
Ak,aFilter){var A;var J=this.Ay;var Bf=null;while(!!J&&!Bf){if(!aFilter||((A=aFilter
)&&((J.E&A)===A))){var Ai=(C.I.isPrototypeOf(J)?J:null);if(!!Ai)Bf=Ai.BroadcastEvent(
Ak,aFilter);else Bf=J.Bi(Ak);}J=J.W;}if(!Bf)Bf=this.Bi(Ak);if(!Bf)Bf=this.ND(Ak);
return Bf;},MR:function(aSize){},Ft:function(DZ){},BZ:function(){this.E=this.E|0x8000;
B.ow([this,this.Cq],this);},An:function(Am){var A;var Ai=this;while(!!Ai&&!((Am[
0]>=Am[2])||(Am[1]>=Am[3]))){if(!Ai.F&&(Ai!==this)){Ai.An(Am);return;}if(!((Ai.E&
0x1)===0x1))return;Am=B.kz(B.aam(Am,Ai.K.slice(0,2)),Ai.K);Ai=Ai.F;}},J$:function(
Q,aFilter){var A;if(!Q||(Q.F!==this))return null;var FF=Q.O;var FJ=Q.W;var Ii=0x10000;
if(((aFilter&0x10000)===0x10000))Ii=0x0;while(!!FF||!!FJ){if((!!FF&&(!aFilter||((
A=aFilter)&&((FF.E&A)===A))))&&(!Ii||!((A=Ii)&&((FF.E&A)===A))))return FF;if((!!
FJ&&(!aFilter||((A=aFilter)&&((FJ.E&A)===A))))&&(!Ii||!((A=Ii)&&((FJ.E&A)===A)))
)return FJ;if(!!FF)FF=FF.O;if(!!FJ)FJ=FJ.W;}return null;},Cr:function(Ec,AN,Ck,Ci
,Cj){var A;if(!Ec)return;if(!AN)throw new Error(Ga);if((!!AN.I||!!AN.F)||!!AN.Dq
)throw new Error(Gb);if(!!Ec.F&&(Ec.F!==this))throw new Error(GV);if(!this.DJ)this.
DJ=B._NewObject(C.MQ,0);AN.F=this;AN.I=Ec;AN.JA=Ci;AN.LU=Ck;if(!!Ec.Gt)Ec.Gt.Dq.
PQ(Ec.Gt);Ec.Gt=AN;Ec.E=Ec.E|0x20000;if((Cj&&!!this.DJ.Ay)&&!this.DJ.Ay.Kk())(B.
abj.IE.isPrototypeOf(A=this.DJ.Ay)?A:null).L9(AN);else{var Dq=B._NewObject(B.abj.
IE,0);Dq.L9(AN);this.DJ.PV(Dq,false);}},ET:function(Q){var A;if(!Q)throw new Error(
HX);if(Q.F!==this)throw new Error(HY);if(!Q.O)return;var GX=this.Ay;if(((GX===Q)||
!GX)||(GX.O===Q))return;if(((Q.E&0x401)===0x401)){if(!!Q.W&&!!Q.AY)Q.W.E=Q.W.E|0x800;
Q.E=Q.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Cq],this);}if(((Q.E&0x200)===
0x200)){if(!!Q.W)Q.W.E=Q.W.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Cq],this
);}if(!!Q.W)Q.W.O=Q.O;else this.As=Q.O;Q.O.W=Q.W;Q.W=GX;Q.O=GX.O;GX.O=Q;if(!!Q.O
)Q.O.W=Q;else this.Ay=Q;if(((Q.E&0x1)===0x1))this.An(Q.GetExtent());},ER:function(
Q){var A;if(!Q)throw new Error(K_);if(Q.F!==this)throw new Error(HY);if((((Q.E&0x401
)===0x401)&&!!Q.W)&&!!Q.AY){Q.W.E=Q.W.E|0x800;this.E=this.E|0x4000;B.ow([this,this.
Cq],this);}if(((Q.E&0x200)===0x200)){if(!!Q.W)Q.W.E=Q.W.E|0x800;this.E=this.E|0x4000;
B.ow([this,this.Cq],this);}Q.AY=null;if(this.B_===Q)this.CF(this.J$(Q,0x14));if(
!!Q.W)Q.W.O=Q.O;if(!!Q.O)Q.O.W=Q.W;if(this.As===Q)this.As=Q.O;if(this.Ay===Q)this.
Ay=Q.W;Q.F=null;Q.O=null;Q.W=null;if(((Q.E&0x1)===0x1))this.An(Q.GetExtent());},
AU:function(Q,Ge){var A;if(!Q)throw new Error(I0);if(!!Q.F)throw new Error(K$);var
EZ=null;if((Ge<0)&&!!this.Ay){EZ=this.Ay;Ge=Ge+1;}while(((Ge<0)&&!!EZ)&&!!EZ.W){
EZ=EZ.W;Ge=Ge+1;}if(!EZ){Q.F=this;Q.W=this.Ay;if(!!this.Ay)this.Ay.O=Q;if(!this.
As)this.As=Q;this.Ay=Q;}else{Q.F=this;Q.W=EZ.W;Q.O=EZ;EZ.W=Q;if(!!Q.W)Q.W.O=Q;else
this.As=Q;}if(((Q.E&0x1)===0x1))this.An(Q.GetExtent());if(((!this.B_&&((Q.E&0x4)===
0x4))&&((Q.E&0x10)===0x10))&&!((Q.E&0x10000)===0x10000))this.CF(Q);if(((Q.E&0x401
)===0x401)){Q.E=Q.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Cq],this);}if(((Q.
E&0x200)===0x200)){Q.E=Q.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Cq],this);
}},OC:function(){return this.DT;},_Init:function(aArg){C.Bj._Init.call(this,aArg
);this.__proto__=C.I;this.E=0x1F;this.Cg(aArg);},_Mark:function(D){var A;C.Bj._Mark.
call(this,D);if((A=this.As)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ay)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Jx)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Bo)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DJ)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Gt)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
B_)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={C9:null
,Ba:B.aan(10,null,null),GY:null,E2:null,Iv:0,Bn:0,B4:B.aan(10,0,null),Jn:B.aan(10
,B.vx,null),DI:B.aan(10,0,null),Ev:B.aan(10,B.vw,null),G0:B.aan(10,0,null),E1:B.
aan(10,B.vw,null),DH:B.aan(10,B.vw,null),C3:B.aan(10,B.vw,null),Ee:B.aan(10,B.vw
,null),AE:0,Js:0,Jr:0,Co:B.aan(4,0,null),BD:B.aan(4,B.vx,null),BC:0,If:0,G5:0,LG:
true,Cg:function(aArg){if(!!!this.Ac){var obj=this;B.aaG(obj);}},EJ:function(){return this;
},Da:function(A1,aClip,aOffset,A$,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
B.mr;if(!fullScreenUpdate)A1.J_(aClip,B.aam(B.aam(aClip,aOffset),this.K.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.I.Da.call(this,A1,aClip
,aOffset,A$,aBlend);},A7:function(EY,Gd){var A;C.I.A7.call(this,EY,Gd);if(!this.
F&&(((EY&0x1)===0x1)||((Gd&0x1)===0x1)))this.An([0,0,(A=this.K)[2]-A[0],A[3]-A[1
]]);if(!this.F&&(((EY&0x2)===0x2)||((Gd&0x2)===0x2)))this.An([0,0,(A=this.K)[2]-
A[0],A[3]-A[1]]);},CF:function(value){if((value!==null)||!value)C.I.CF.call(this
,value);},FZ:function(value){var A;var CP=this.DT;C.I.FZ.call(this,value);if(((CP
!==this.DT)&&!this.F)&&((this.E&0x1)===0x1))this.An([0,0,(A=this.K)[2]-A[0],A[3]-
A[1]]);},DispatchEvent:function(Ak){if(!!Ak){Ak.Hq=!!this.Bn;if(!!this.Bn)Ak.Aq=
this.Bn;}var Bf;Bf=C.I.DispatchEvent.call(this,Ak);this.Bn=0;return Bf;},BroadcastEvent:
function(Ak,aFilter){if(!!Ak){Ak.Hq=!!this.Bn;if(!!this.Bn)Ak.Aq=this.Bn;}var Bf=
C.I.BroadcastEvent.call(this,Ak,aFilter);this.Bn=0;return Bf;},An:function(Am){var
A;if(this.Iv>0)throw new Error(La);var fullScreenUpdate=false;fullScreenUpdate=B.
mr;if(fullScreenUpdate)Am=[0,0,(A=this.K)[2]-A[0],A[3]-A[1]];if(!!this.F){C.I.An.
call(this,Am);return;}Am=B.kz(B.aam(Am,this.K.slice(0,2)),this.K);if((Am[0]>=Am[
2])||(Am[1]>=Am[3]))return;var G;for(G=0;G<this.BC;G=G+1)if(!(((A=B.kz(this.BD.Get(
G),Am))[0]>=A[2])||(A[1]>=A[3]))){this.BD.Set(G,B.vS(this.BD.Get(G),Am));this.Co.
Set(G,B.zS(this.BD.Get(G)));return;}if(this.BC<3){this.BD.Set(this.BC,Am);this.Co.
Set(this.BC,B.zS(Am));this.BC=this.BC+1;return;}var Bg;var C8;var Ie=0;var Ig=0;
var M4=2147483647;this.BD.Set(this.BC,Am);this.Co.Set(this.BC,B.zS(Am));for(Bg=0;
Bg<=this.BC;Bg=Bg+1)for(C8=Bg+1;C8<=this.BC;C8=C8+1){var JU=B.zS(B.vS(this.BD.Get(
Bg),this.BD.Get(C8)));var NC=((JU<<8)/(this.Co.Get(Bg)+this.Co.Get(C8)))|0;if(NC<
M4){M4=NC;Ie=Bg;Ig=C8;}}this.BD.Set(Ie,B.vS(this.BD.Get(Ie),this.BD.Get(Ig)));this.
Co.Set(Ie,B.zS(this.BD.Get(Ie)));if(Ig!==this.BC){this.BD.Set(Ig,this.BD.Get(this.
BC));this.Co.Set(Ig,this.Co.Get(this.BC));}},Qr:function(){var B6=B._NewObject(C.
GC,0);B6.Hq=!!this.Bn;if(!!this.Bn)B6.Aq=this.Bn;return B6;},Gi:function(){var B6=
B._NewObject(C.DR,0);B6.Hq=!!this.Bn;if(!!this.Bn)B6.Aq=this.Bn;return B6;},GZ:function(
){var B6=B._NewObject(C.Hd,0);B6.Hq=!!this.Bn;if(!!this.Bn)B6.Aq=this.Bn;return B6;
},Qs:function(Ah){var G;var Gm=false;for(G=0;G<10;G=G+1)if(!!this.Ba.Get(G)){var
T=this.C3.Get(G);var Ai=this.Ba.Get(G).F;while(!!Ai&&(Ai!==this)){T=B.aaj(T,Ai.K.
slice(0,2));Ai=Ai.F;}if(!Ai&&(this.Ba.Get(G)!==this)){var tmp=this.Ba.Get(G);this.
AE=G;this.Ba.Set(G,null);tmp.Bi(this.Gi().InitializeUp(G,this.E1.Get(G),this.Ev.
Get(G),this.DI.Get(G),this.B4.Get(G)+1,this.DH.Get(G),false,this.C3.Get(G),this.
Ee.Get(G)));this.BroadcastEvent(this.GZ().InitializeUp(G,this.B4.Get(G)+1,false,
tmp,this.C3.Get(G)),0x18);}else{this.DI.Set(G,(this.E2.Aq-this.G0.Get(G))|0);if(
this.DI.Get(G)<10)this.DI.Set(G,10);this.AE=G;this.Ba.Get(G).Bi(this.Gi().InitializeHold(
G,T,this.Ev.Get(G),this.DI.Get(G),this.B4.Get(G)+1,this.DH.Get(G),this.C3.Get(G)
,this.Ee.Get(G)));Gm=true;}}if(!Gm)this.E2.A_(false);},GetFPS:function(){var ticksCount=
0;var Nf=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.Js&&(ticksCount>this.
Js))Nf=((this.Jr*1000)/((ticksCount-this.Js)|0))|0;this.Jr=0;this.Js=ticksCount;
return Nf;},Update:function(){var A;if(!this.GY)this.GY=B._NewObject(B.Graphics.
Canvas,0);this.GY.My([(A=this.K)[2]-A[0],A[3]-A[1]]);this.GY.Update();return this.
UpdateGE20(this.GY);},UpdateGE20:function(A1){if(!this.BeginUpdate())return Bk;var
EC=this.UpdateCanvas(A1,Aw);this.EndUpdate();return EC;},EndUpdate:function(){if(
this.BC>0){this.Jr=this.Jr+1;this.BC=0;}},UpdateCanvas:function(A1,aOffset){var A;
var EC=Bk;var Ql=[].concat(aOffset,B.aak(A1.FrameSize,aOffset));var G;var Bg=this.
BC;this.Iv=this.Iv+1;A1.AL=this;for(G=0;(G<Bg)&&(G<4);G=G+1)if(this.Co.Get(G)>0){
this.Da(A1,B.aal(this.BD.Get(G),aOffset),[-aOffset[0],-aOffset[1]],255,true);EC=
B.vS(EC,B.kz(Ql,this.BD.Get(G)));}else Bg=Bg+1;A1.AL=null;this.Iv=this.Iv-1;if(!((
EC[0]>=EC[2])||(EC[1]>=EC[3])))return B.aal(EC,aOffset);else return EC;},GetUpdateRegion:
function(I6){var G;var Bg=this.BC;if(I6<0)return Bk;for(G=0;(G<Bg)&&(G<4);G=G+1)
if(!this.Co.Get(G)){Bg=Bg+1;I6=I6+1;}else if(G===I6)return this.BD.Get(G);return Bk;
},BeginUpdate:function(){var A;var G;if(!!this.BC&&!B.z9(this.BD.Get(0),[0,0,(A=
this.K)[2]-A[0],A[3]-A[1]])){var NU=B.aan(3,B.vx,null);var NT=this.BC;for(G=0;G<
NT;G++)NU.Set(G,this.BD.Get(G));for(G=0;G<NT;G++){var NE=B.aam(NU.Get(G),this.K.
slice(0,2));var NF=this.Ix(NE);if(!B.z9(NE,NF))this.An(B.aal(NF,this.K.slice(0,2
)));}}var Bg;var C8;for(Bg=0;Bg<(this.BC-1);Bg++)if(this.Co.Get(Bg)>0)for(C8=Bg+
1;C8<this.BC;C8++)if(this.Co.Get(C8)>0){var JU=B.zS(B.vS(this.BD.Get(Bg),this.BD.
Get(C8)));if(((JU-this.Co.Get(Bg))-this.Co.Get(C8))<0){this.BD.Set(Bg,B.vS(this.
BD.Get(Bg),this.BD.Get(C8)));this.Co.Set(Bg,JU);this.Co.Set(C8,0);}}for(G=this.BC-
1;G>=0;G--)if(!this.Co.Get(G))this.BC=this.BC-1;return this.BC;},DoesNeedUpdate:
function(){if(this.BC>0)return true;return false;},Initialize:function(aSize){this.
Aj([].concat(Aw,aSize));if(this.LG)this.E=this.E|0x60;else this.E=this.E|0x20;this.
An(this.K);return this;},SetRootFocus:function(Lq){if(Lq===this.LG)return false;
this.LG=Lq;if(!Lq)this.A7(0x0,0x40);else this.A7(0x40,0x0);return true;},SetUserInputTimestamp:
function(Qh){this.Bn=Qh;},DriveKeyboardHitting:function(BG,H1,DW){var A;var L2=!
!this.C9;if(!!this.C9&&((!DW||(this.If!==BG))||(this.G5!==H1))){var B6=null;var J=(
C.Ax.isPrototypeOf(A=this.C9)?A:null);var D0=(C.FV.isPrototypeOf(A=this.C9)?A:null
);if(!!this.If)B6=B._NewObject(C.KeyEvent,0).Initialize(this.If,false);if(this.G5
!==0x00)B6=B._NewObject(C.KeyEvent,0).Initialize2(this.G5,false);if(!!D0)D0.Bi(B6
);else if(!!J)J.Bi(B6);this.If=0;this.G5=0x00;this.C9=null;}if(!!this.C9){var B6=
null;var J=(C.Ax.isPrototypeOf(A=this.C9)?A:null);var D0=(C.FV.isPrototypeOf(A=this.
C9)?A:null);if(!!BG)B6=B._NewObject(C.KeyEvent,0).Initialize(BG,true);if(this.G5
!==0x00)B6=B._NewObject(C.KeyEvent,0).Initialize2(H1,true);if(!!D0)D0.Bi(B6);else
if(!!J)J.Bi(B6);}if(!this.C9&&DW){if(!!BG)this.C9=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize(BG,true));if(H1!==0x00)this.C9=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize2(H1,true));if(!(C.FV.isPrototypeOf(A=this.C9)?A:null)&&
!(C.Ax.isPrototypeOf(A=this.C9)?A:null))this.C9=null;this.If=BG;this.G5=H1;L2=L2||
!!this.C9;}this.Bn=0;return L2;},DriveCursorMovement:function(Bl){return this.DriveMultiTouchMovement(
this.AE,Bl);},DriveMultiTouchMovement:function(S,Bl){if((S<0)||(S>9)){this.Bn=0;
return false;}var AR=B.aaj(Bl,this.C3.Get(S));this.C3.Set(S,Bl);if(!this.Ba.Get(
S)||B.z8(AR,Aw)){this.Bn=0;return false;}var T=Bl;var Ai=this.Ba.Get(S).F;while(
!!Ai&&(Ai!==this)){T=B.aaj(T,Ai.K.slice(0,2));Ai=Ai.F;}if(!Ai&&(this.Ba.Get(S)!==
this)){var tmp=this.Ba.Get(S);this.AE=S;this.Ba.Set(S,null);tmp.Bi(this.Gi().InitializeUp(
S,this.E1.Get(S),this.Ev.Get(S),this.DI.Get(S),this.B4.Get(S)+1,this.DH.Get(S),false
,this.C3.Get(S),this.Ee.Get(S)));this.BroadcastEvent(this.GZ().InitializeUp(S,this.
B4.Get(S)+1,false,tmp,Bl),0x18);}else{this.E1.Set(S,T);this.AE=S;this.Ba.Get(S).
Bi(this.Qr().Initialize(S,T,this.Ev.Get(S),AR,this.DI.Get(S),this.B4.Get(S)+1,this.
DH.Get(S),Bl,this.Ee.Get(S)));}this.Bn=0;return true;},DriveCursorHitting:function(
DW,S,Bl){return this.DriveMultiTouchHitting(DW,S,Bl);},DriveMultiTouchHitting:function(
DW,S,Bl){if((S<0)||(S>9)){this.Bn=0;return false;}var ticksCount=this.Bn;if(!ticksCount
)ticksCount=((new Date).getTime()-B.vs)|0;var QW=this.Bn;this.DriveMultiTouchMovement(
S,Bl);Bl=this.C3.Get(S);this.Bn=QW;if(DW)this.Ee.Set(S,Bl);if(DW&&!this.Ba.Get(S
)){var Bu;var T=Bl;if(B.vt(this.Jn.Get(S),Bl)&&((ticksCount-this.G0.Get(S))<=250
))this.B4.Set(S,this.B4.Get(S)+1);else this.B4.Set(S,0);this.Jn.Set(S,B.aam(HZ,Bl
));this.G0.Set(S,ticksCount);Bu=this.D6(B.aam(HZ,Bl),S,this.B4.Get(S)+1,null,null
,0x0);if(!!Bu){this.BroadcastEvent(this.GZ().InitializeDown(S,this.B4.Get(S)+1,false
,Bu.Ax,Bl),0x18);this.Ba.Set(S,Bu.Ax);this.DH.Set(S,Bu.AC);}else{this.Ba.Set(S,null
);this.DH.Set(S,Aw);this.Bn=0;return false;}var Ai=Bu.Ax.F;while(!!Ai&&(Ai!==this
)){T=B.aaj(T,Ai.K.slice(0,2));Ai=Ai.F;}this.Ev.Set(S,T);this.E1.Set(S,T);this.DI.
Set(S,0);this.E2.A_(true);this.AE=S;this.Ba.Get(S).Bi(this.Gi().InitializeDown(S
,T,this.B4.Get(S)+1,this.DH.Get(S),false,Bl));this.Bn=0;return true;}if(!DW&&!!this.
Ba.Get(S)){var T=Bl;var Ai=this.Ba.Get(S).F;while(!!Ai&&(Ai!==this)){T=B.aaj(T,Ai.
K.slice(0,2));Ai=Ai.F;}if(!Ai)T=this.E1.Get(S);this.AE=S;var tmp=this.Ba.Get(S);
this.Ba.Set(S,null);tmp.Bi(this.Gi().InitializeUp(S,T,this.Ev.Get(S),this.DI.Get(
S),this.B4.Get(S)+1,this.DH.Get(S),false,Bl,this.Ee.Get(S)));this.BroadcastEvent(
this.GZ().InitializeUp(S,this.B4.Get(S)+1,false,tmp,Bl),0x18);this.Bn=0;return true;
}this.Bn=0;return false;},HD:function(DY,I1,DE,EX){if(DY===this)DY=null;if(!this.
Ba.Get(this.AE))return;var Bu;Bu=this.D6(B.aam(HZ,this.C3.Get(this.AE)),this.AE,
1,DY,DE,EX);if(!!Bu&&(this.Ba.Get(this.AE)!==Bu.Ax))this.Mb(Bu.Ax,Bu.AC);if(!Bu&&(
this.Ba.Get(this.AE)!==I1))this.Mb(I1,Aw);},PR:function(DY,I1,DE){this.HD(DY,I1,
DE,0x0);},Mb:function(DY,Dz){if(!this.Ba.Get(this.AE)||(this.Ba.Get(this.AE)===DY
))return;var tmp=this.Ba.Get(this.AE);this.Ba.Set(this.AE,null);tmp.Bi(this.Gi().
InitializeUp(this.AE,this.E1.Get(this.AE),this.Ev.Get(this.AE),this.DI.Get(this.
AE),this.B4.Get(this.AE)+1,this.DH.Get(this.AE),true,this.C3.Get(this.AE),this.Ee.
Get(this.AE)));this.BroadcastEvent(this.GZ().InitializeUp(this.AE,this.B4.Get(this.
AE)+1,true,tmp,this.C3.Get(this.AE)),0x18);var T=this.C3.Get(this.AE);var Ai=null;
if(!!DY)Ai=DY.F;while(!!Ai&&(Ai!==this)){T=B.aaj(T,Ai.K.slice(0,2));Ai=Ai.F;}if(
!Ai&&(DY!==this)){this.Ba.Set(this.AE,null);return;}this.BroadcastEvent(this.GZ(
).InitializeDown(this.AE,this.B4.Get(this.AE)+1,true,DY,this.C3.Get(this.AE)),0x18
);var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;this.Ba.Set(this.AE,
DY);this.DH.Set(this.AE,Dz);this.Ev.Set(this.AE,T);this.E1.Set(this.AE,T);this.B4.
Set(this.AE,0);this.DI.Set(this.AE,0);this.G0.Set(this.AE,ticksCount);this.Ee.Set(
this.AE,this.C3.Get(this.AE));this.Ba.Get(this.AE).Bi(this.Gi().InitializeDown(this.
AE,T,this.B4.Get(this.AE)+1,this.DH.Get(this.AE),true,this.Ee.Get(this.AE)));},_Init:
function(aArg){C.I._Init.call(this,aArg);C.Timer._Init.call(this.E2={Ac:this},0);(
this.Ba=[]).__proto__=C.Root.Ba;(this.B4=[]).__proto__=C.Root.B4;(this.Jn=[]).__proto__=
C.Root.Jn;(this.DI=[]).__proto__=C.Root.DI;(this.Ev=[]).__proto__=C.Root.Ev;(this.
G0=[]).__proto__=C.Root.G0;(this.E1=[]).__proto__=C.Root.E1;(this.DH=[]).__proto__=
C.Root.DH;(this.C3=[]).__proto__=C.Root.C3;(this.Ee=[]).__proto__=C.Root.Ee;(this.
Co=[]).__proto__=C.Root.Co;(this.BD=[]).__proto__=C.Root.BD;this.__proto__=C.Root;
this.E=0x7F;this.E2.Hx(10);this.E2.Hz=[this,this.Qs];this.Cg(aArg);},_Done:function(
){this.__proto__=C.I;this.E2._Done();C.I._Done.call(this);},_ReInit:function(){C.
I._ReInit.call(this);this.E2._ReInit();},_Mark:function(D){var A;C.I._Mark.call(
this,D);if((A=this.C9)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aaf(this.Ba,D);if((A=
this.GY)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.E2)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Core::Root"};C.Event={Aq:0,Hq:false,Cg:function(aArg){this.Aq=this.
Hm();},Hm:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=C.Event;this.Cg(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null
,_className:"Core::Event"};C.KeyEvent={Bx:0,AM:0,Down:false,Initialize2:function(
BG,DW){this.Bx=0;this.AM=BG;this.Down=DW;if((BG>=0x30)&&(BG<=0x39))this.Bx=(10+BG
)-48;if((BG>=0x41)&&(BG<=0x5A))this.Bx=(105+BG)-65;if((BG>=0x61)&&(BG<=0x7A))this.
Bx=(105+BG)-97;if(BG===0x20)this.Bx=131;if(!this.Bx)switch(BG){case 0x2B:this.Bx=
132;break;case 0x2D:this.Bx=133;break;case 0x2A:this.Bx=134;break;case 0x2F:this.
Bx=135;break;case 0x3D:this.Bx=136;break;case 0x2E:this.Bx=137;break;case 0x2C:this.
Bx=138;break;case 0x3A:this.Bx=139;break;case 0x3B:this.Bx=140;break;default:;}return this;
},Initialize:function(BG,DW){this.Bx=BG;this.Down=DW;this.AM=0x00;var Lx=BG-10;var
Lw=BG-105;if((Lx>=0)&&(Lx<=9))this.AM=(48+Lx)&0xFFFF;if((Lw>=0)&&(Lw<=25))this.AM=(
65+Lw)&0xFFFF;if(BG===131)this.AM=0x20;if(this.AM===0x00)switch(BG){case 132:this.
AM=0x2B;break;case 133:this.AM=0x2D;break;case 134:this.AM=0x2A;break;case 135:this.
AM=0x2F;break;case 136:this.AM=0x3D;break;case 137:this.AM=0x2E;break;case 138:this.
AM=0x2C;break;case 139:this.AM=0x3A;break;case 140:this.AM=0x3B;break;default:;}
return this;},Oo:function(MV){switch(MV){case 141:return((this.AM>=0x41)&&(this.
AM<=0x5A))||((this.AM>=0x61)&&(this.AM<=0x7A));case 142:return(((this.AM>=0x41)&&(
this.AM<=0x5A))||((this.AM>=0x61)&&(this.AM<=0x7A)))||((this.AM>=0x30)&&(this.AM<=
0x39));case 143:return(this.AM>=0x30)&&(this.AM<=0x39);case 144:return(((this.AM>=
0x41)&&(this.AM<=0x46))||((this.AM>=0x61)&&(this.AM<=0x66)))||((this.AM>=0x30)&&(
this.AM<=0x39));case 145:return this.AM!==0x00;case 146:return(this.AM===0x00)&&
!!this.Bx;case 147:return(((this.Bx===6)||(this.Bx===7))||(this.Bx===4))||(this.
Bx===5);case 148:return(this.AM!==0x00)||!!this.Bx;default:;}return MV===this.Bx;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;}
,_className:"Core::KeyEvent"};C.Hd={HH:null,Bz:B.vw,BS:0,AZ:0,Down:false,BY:false
,InitializeUp:function(S,Cv,Gc,Ls,DX){this.Down=false;this.AZ=S;this.BS=Cv;this.
Bz=DX;this.HH=Ls;this.BY=Gc;return this;},InitializeDown:function(S,Cv,Gc,Ls,DX){
this.Down=true;this.AZ=S;this.BS=Cv;this.Bz=DX;this.HH=Ls;this.BY=Gc;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Hd;},_Mark:
function(D){var A;C.Event._Mark.call(this,D);if((A=this.HH)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::CursorGrabEvent"};C.DR={EK:B.vw,Bz:B.vw,BS:0,BL:
0,BQ:B.vw,Bs:B.vw,AZ:0,Down:false,BY:false,InitializeHold:function(S,Fv,H3,H4,Cv
,Dz,DX,H2){this.Down=true;this.AZ=S;this.Bs=B.aak(Fv,Dz);this.BQ=B.aak(H3,Dz);this.
BL=H4;this.BS=Cv;this.Bz=DX;this.EK=H2;return this;},InitializeUp:function(S,Fv,
H3,H4,Cv,Dz,Gc,DX,H2){this.Down=false;this.AZ=S;this.Bs=B.aak(Fv,Dz);this.BQ=B.aak(
H3,Dz);this.BL=H4;this.BS=Cv;this.BY=Gc;this.Bz=DX;this.EK=H2;return this;},InitializeDown:
function(S,Fv,Cv,Dz,Gc,DX){this.Down=true;this.AZ=S;this.Bs=B.aak(Fv,Dz);this.BQ=
B.aak(Fv,Dz);this.BL=0;this.BS=Cv;this.BY=Gc;this.Bz=DX;this.EK=DX;return this;}
,_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.DR;},_className:
"Core::CursorEvent"};C.GC={EK:B.vw,Bz:B.vw,BS:0,BL:0,AC:B.vw,BQ:B.vw,Bs:B.vw,AZ:
0,Initialize:function(S,Fv,H3,aOffset,H4,Qg,Dz,DX,H2){this.AZ=S;this.Bs=B.aak(Fv
,Dz);this.BQ=B.aak(H3,Dz);this.AC=aOffset;this.BL=H4;this.BS=Qg;this.Bz=DX;this.
EK=H2;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.GC;},_className:"Core::DragEvent"};C.HB={Da:function(A1,aClip,aOffset,A$,aBlend
){},Aj:function(value){var A;if(B.z9(value,this.K))return;var FI=[(A=this.K)[2]-
A[0],A[3]-A[1]];var LS=[value[2]-value[0],value[3]-value[1]];var G8=!B.z8(FI,LS);
var AR=B.aaj(value.slice(0,2),this.K.slice(0,2));if(!B.z8(AR,Aw)&&!G8){var J=this.
O;while(!!J&&!((J.E&0x200)===0x200)){if(((J.E&0x400)===0x400)){var tmp=((J.E&0x100
)===0x100);J.IL(AR,tmp);}J=J.O;}}if((G8&&(FI[0]>0))&&(FI[1]>0)){var At=this.K;var
J=this.O;while(!!J&&!((J.E&0x200)===0x200)){if(((J.E&0x400)===0x400)){if(!!J.AY&&(
J.AY.Gr!==this))J.AY=null;if(!J.AY&&(J.CZ!==0x14))J.Ib(At,this);}J=J.O;}}C.Bj.Aj.
call(this,value);if(!!this.F&&G8){this.E=this.E|0x1000;if(!((this.F.E&0x2000)===
0x2000)){this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Cq],this);}}},_Init:function(
aArg){C.Bj._Init.call(this,aArg);this.__proto__=C.HB;this.E=0x203;},_className:"Core::Outline"
};C.K7={C7:null,Ax:null,Es:null,EO:null,DQ:-1,Di:0,Jv:8,E6:0,Dk:0,GR:B.vw,EM:-1,
Dd:0,Fq:-1,EN:24,Dj:0,FU:null,Np:false,KJ:function(Bv,CJ,Eb,DB,DD,Gf,De,DC,Ck,Ci
,Cj){throw new Error(Lb);},Md:function(Bv,Gf,De,DC,Ck,Ci,Cj){throw new Error(Lc);
},MN:function(Bv,CJ,Eb,DB,DD,De,DC,Ck,Ci,Cj){throw new Error(Ld);},DispatchEvent:
function(Ak){var A;var result=null;if(((this.Fq>=0)&&(this.Fq<this.Dj))&&!this.B_
){this.EM=this.Fq;this.Ax=(C.Ax.isPrototypeOf(A=B._NewObject(this.FU,0))?A:null);
if(!!this.Ay)this.Ay.O=this.Ax;else this.As=this.Ax;this.Ax.W=this.Ay;this.Ay=this.
Ax;this.Ax.F=this;this.GR=[(A=this.K)[2]-A[0],this.EN];(A=this.EO)?A[1].call(A[0
],this):null;var Ai=(C.I.isPrototypeOf(A=this.Ax)?A:null);if(!!Ai)result=Ai.DispatchEvent(
Ak);else result=this.Ax.Bi(Ak);if(!!this.Ax.W)this.Ax.W.O=null;else this.As=null;
this.Ay=this.Ax.W;this.Ax.W=null;this.Ax.F=null;this.Ax=null;}if(!result)result=
C.I.DispatchEvent.call(this,Ak);return result;},Ft:function(DZ){var A;if(!this.FU
)return;this.Np=true;var Cm=this.L0(0-this.Dd,1);var CR=this.L0((((A=this.K)[3]-
A[1])-this.Dd)-1,2);var Jm=CR-Cm;if(Jm<1)Jm=1;var Ji=(Jm/2)|0;var Jj=(Jm/3)|0;if(
!Ji)Ji=1;if(!Jj)Jj=1;if(Cm<this.Di){Cm=Cm-Ji;CR=CR+Jj;}else if(CR>this.DQ){Cm=Cm-
Jj;CR=CR+Ji;}else{Cm=this.Di;CR=this.DQ;}if(Cm>=this.Dj){Cm=0;CR=-1;}else if(CR<
0){Cm=0;CR=-1;}if(CR>=this.Dj)CR=this.Dj-1;if(Cm<0)Cm=0;var JI=this.Di;var JJ=this.
DQ;var LN=0;var LO=-1;if(Cm>JI)JI=Cm;if(CR<JJ)JJ=CR;if(JI<=JJ){while((this.DQ<CR
)&&(this.Di<JI)){this.JF();this.M9();}while((this.Di>Cm)&&(this.DQ>JJ)){this.NI(
);this.M8();}}else{this.DQ=(this.DQ-this.Di)+Cm;this.Di=Cm;LN=this.Di;LO=this.DQ;
}while(this.Di<Cm)this.JF();while(this.DQ>CR)this.NI();while(this.Di>Cm)this.M8(
);while(this.DQ<CR)this.M9();var R=this.As;var C6=this.Di;var T=[0,this.Dd+this.
FA(C6,0)];var A6=(A=this.K)[3]-A[1];var Nd=null;var NV=(A=this.K)[2]-A[0];while(
!!R){var Fz=C6;var Ip=((Fz>=0)&&(Fz<=-1))||((C6>=LN)&&(C6<=LO));var LC=R.GetExtent(
);var FG=B.aaj(T,LC.slice(0,2));if(Ip)this.Dk=this.EN;else this.Dk=LC[3]-LC[1];var
LL=T[1];var LM=T[1]+this.Dk;if(!B.z8(FG,Aw))R.IL(FG,true);if((Ip&&(LL<A6))&&(LM>
0)){this.Ax=R;this.EM=Fz;this.GR=[NV,this.Dk];(A=this.EO)?A[1].call(A[0],this):null;
}R=R.O;C6+=1;T=[T[0],T[1]+this.Dk];}C6=this.Di;R=this.As;T=[0,this.Dd+this.FA(C6
,0)];while(!!R){var Fz=C6;var Ip=((Fz>=0)&&(Fz<=-1))||((C6>=LN)&&(C6<=LO));if(Ip
)this.Dk=this.EN;else this.Dk=(A=R.GetExtent())[3]-A[1];var LL=T[1];var LM=T[1]+
this.Dk;if(Ip&&!((LL<A6)&&(LM>0))){this.Ax=R;this.EM=Fz;this.GR=[NV,this.Dk];(A=
this.EO)?A[1].call(A[0],this):null;}if(Fz===this.Fq)Nd=R;R=R.O;C6+=1;T=[T[0],T[1
]+this.Dk];}this.Ax=null;this.EM=-1;this.CF(Nd);this.Np=false;},J$:function(Q,aFilter
){return null;},Cr:function(Ec,AN,Ck,Ci,Cj){throw new Error(Le);},ET:function(Q){
throw new Error(Lf);},ER:function(Q){throw new Error(Lg);},AU:function(Q,Ge){throw new
Error(Lh);},FA:function(Qf,Qe){return Qf*this.EN;},L0:function(Bl,Qe){return(Bl/
this.EN)|0;},NI:function(){var R=this.Ay;if(!R)return null;if(R===this.B_)this.CF(
null);this.DQ=this.DQ-1;if(!!R.W)R.W.O=null;else this.As=null;this.Ay=R.W;R.W=null;
R.F=null;R.AY=null;if(this.E6<this.Jv){if(!!this.C7)this.C7.W=R;R.O=this.C7;this.
C7=R;this.E6++;}return R;},M9:function(){var A;var R=this.C7;var Id=this.FU;var NX=++
this.DQ;while(!!R&&(((A=R)?A.__proto__:null)!==Id))R=R.O;if(!!R){if(!!R.O)R.O.W=
R.W;if(!!R.W)R.W.O=R.O;if(this.C7===R)this.C7=R.O;R.O=null;R.W=null;this.E6--;}else{
R=(C.Ax.isPrototypeOf(A=B._NewObject(Id,0))?A:null);R.GK(0x1D);if(!!this.E6)this.
Jv++;}this.Dk=this.EN;this.EM=NX;this.GR=[(A=this.K)[2]-A[0],this.Dk];this.Ax=R;(
A=this.EO)?A[1].call(A[0],this):null;this.Ax=null;this.EM=-1;if(!!this.Ay)this.Ay.
O=R;R.F=this;R.W=this.Ay;this.Ay=R;if(!this.As)this.As=R;if(NX===this.Fq)this.CF(
R);return R;},JF:function(){var R=this.As;if(!R)return null;if(R===this.B_)this.
CF(null);this.Di=this.Di+1;if(!!R.O)R.O.W=null;else this.Ay=null;this.As=R.O;R.O=
null;R.F=null;R.AY=null;if(this.E6<this.Jv){if(!!this.C7)this.C7.W=R;R.O=this.C7;
this.C7=R;this.E6++;}return R;},M8:function(){var A;var R=this.C7;var Id=this.FU;
var NW=--this.Di;while(!!R&&(((A=R)?A.__proto__:null)!==Id))R=R.O;if(!!R){if(!!R.
O)R.O.W=R.W;if(!!R.W)R.W.O=R.O;if(this.C7===R)this.C7=R.O;R.O=null;R.W=null;this.
E6--;}else{R=(C.Ax.isPrototypeOf(A=B._NewObject(Id,0))?A:null);R.GK(0x1D);if(!!this.
E6)this.Jv++;}this.Dk=this.EN;this.EM=NW;this.GR=[(A=this.K)[2]-A[0],this.Dk];this.
Ax=R;(A=this.EO)?A[1].call(A[0],this):null;this.Ax=null;this.EM=-1;if(!!this.As)
this.As.W=R;R.F=this;R.O=this.As;this.As=R;if(!this.Ay)this.Ay=R;if(NW===this.Fq
)this.CF(R);return R;},QP:function(Ah){this.Pa(this.Es.AC[1]);},QQ:function(Ah){
var A;{var N=this.Oi(0,this.Dj-1);var JD=this.K.slice(0,2);if(N[0]>JD[0])N=[].concat(
JD[0],N.slice(1,4));if(N[1]>JD[1])N=B.aaS(N,JD[1]);var AR=N[1]-this.K[1];var LR=((
A=this.K)[3]-A[1])-(N[3]-N[1]);if(LR>0)LR=0;this.Es.AC=[0,this.Dd];this.Es.A9=[0
,(this.Dd+LR)-AR];this.Es.A8=[0,this.Dd-AR];}},Pb:function(value){if(value===this.
Es)return;if(!!value&&!!value.G7){B.aa8("%s%*%s",Li,value,Lj);throw new Error(Lk
);}if(!!this.Es){this.Es.JE=null;this.Es.G7=null;}this.Es=value;if(!!value){value.
JE=[this,this.QQ];value.G7=[this,this.QP];}},Pa:function(value){var A;if(value===
this.Dd)return;this.Dd=value;this.BZ();this.An([0,0,(A=this.K)[2]-A[0],A[3]-A[1]
]);},MH:function(value){if(value<0)value=-1;if(value===this.Fq)return;this.Fq=value;
this.BZ();},O6:function(value){var A;if(value<1)value=1;if(value===this.EN)return;
this.EN=value;while(!!this.JF());this.BZ();this.An([0,0,(A=this.K)[2]-A[0],A[3]-
A[1]]);},O9:function(value){var A;if(value<0)value=0;if(value===this.Dj)return;var
N=[0,0,(A=this.K)[2]-A[0],A[3]-A[1]];if(value>this.Dj){N=[].concat(N.slice(0,3),
this.Dd+this.FA(value,3));N=B.aaS(N,this.Dd+this.FA(this.Dj,3));}else{N=B.aaS(N,
this.Dd+this.FA(value,3));N=[].concat(N.slice(0,3),this.Dd+this.FA(this.Dj,3));}
this.Dj=value;this.BZ();this.An(N);},O5:function(value){var A;if(value===this.FU
)return;this.FU=value;while(!!this.JF());this.C7=null;this.E6=0;this.BZ();this.An([
0,0,(A=this.K)[2]-A[0],A[3]-A[1]]);},Oh:function(Bl){if(((this.Dj<=0)||(Bl[0]<this.
K[0]))||(Bl[0]>=this.K[2]))return-1;Bl=B.aaj(Bl,this.K.slice(0,2));{var R=Bl[1]-
this.Dd;if(R>0)R=this.L0(R,0);if((R<0)||(R>=this.Dj))return-1;return R;}},Oi:function(
I3,I4){if(I3<0)I3=0;if(I4>=this.Dj)I4=this.Dj-1;if(I3>I4)return Bk;var N=this.K;
var FG=this.Dd;N=[].concat(N.slice(0,3),(N[1]+FG)+this.FA(I4+1,0));N=B.aaS(N,(N[
1]+FG)+this.FA(I3,0));return N;},_Init:function(aArg){C.I._Init.call(this,aArg);
this.__proto__=C.K7;this.Aj(Ll);this.FU=B.abh.Text;},_Mark:function(D){var A;C.I.
_Mark.call(this,D);if((A=this.C7)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Ax)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Es)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.EO)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::VerticalList"
};C.HG={Kr:null,Ku:null,Kt:null,Ch:null,CE:null,JS:0,P:0,AZ:0,Aq:0,BS:0,BL:0,AC:
B.vw,BQ:B.vw,Bs:B.vw,HE:8,EU:0,Mm:1,Down:false,D8:false,BY:false,LB:false,FD:0,Da:
function(A1,aClip,aOffset,A$,aBlend){},Bi:function(Ak){var A;var M=(C.DR.isPrototypeOf(
Ak)?Ak:null);var Au=(C.GC.isPrototypeOf(Ak)?Ak:null);var Ju=this.D8;var Cf;var Cc;
var FR;var Bd;var Ex;if(!M&&!Au)return null;Cf=(!!M&&M.Down)&&!M.BL;Cc=(!!M&&M.Down
)&&(M.BL>0);FR=(!!M&&M.Down)&&(M.BL>this.FD);Bd=!!M&&!M.Down;Ex=!!Au;if(Cf)this.
FD=((A=(M.BY?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.EU&0x20)===0x20)&&(this.
P>0))&&(this.P<33554432)){var Bp=(C.Hd.isPrototypeOf(Ak)?Ak:null);if(((!!Bp&&Bp.
Down)&&(Bp.HH!==this))&&B.vt(this.GetExtent(),this.F.Mk(Bp.Bz))){this.JS=0x20;this.
P=this.P|67108864;return null;}}if(Cf){var Ek=0;var CO;this.P=this.P|(1<<M.AZ);for(
CO=this.P&4095;CO>0;CO=CO>>1)if(!!(CO&1))Ek=Ek+1;if(Ek===1)this.P=(this.P|16777216
)|(4096<<M.AZ);}if(Bd&&(this.P<16777216)){var BE=this.EJ();var Bu=null;if(!!BE){
var It=(!!this.W?this.W:this.F);Bu=BE.D6(B.aam(H0,M.Bz),M.AZ,M.BS,null,It,0x0);}
if(!!Bu){var G;for(G=0;G<10;G++)if(!!(this.P&(1<<G)))Bu.Ax.Bi(B._NewObject(C.DR,
0).InitializeDown(G,M.Bs,M.BS,Aw,true,M.Bz));for(G=0;G<10;G++)if(!!(this.P&(1<<G
)))Bu.Ax.Bi(B._NewObject(C.DR,0).InitializeUp(G,M.Bs,M.Bs,0,M.BS,Aw,false,M.Bz,M.
Bz));}}if(Bd)this.P=(this.P&~(1<<M.AZ))|33554432;if(FR&&(this.P<16777216))this.P=
this.P|67108864;if(Bd&&M.BY)this.P=this.P|67108864;if(Bd&&!(this.P&4095))this.JS=
0x0;if(Bd&&!(this.P&16777215))this.P=0;if(Cc&&(this.P>=67108864)){var BE=this.EJ(
);if(!!BE)BE.HD(null,null,this,this.JS);}if((Cc&&!!(this.P&16777216))&&!!(this.P&
33554432)){Cc=false;Bd=true;}if(!!M&&!(this.P&(4096<<M.AZ)))return this;if(!!Au&&
!(this.P&(4096<<Au.AZ)))return this;if(Bd&&!(this.P&16777216))return this;if(((Cf||
Ex)||Cc)&&((this.P<16777216)||(this.P>=33554432)))return this;if(Bd)this.P=this.
P&3758100479;if(Bd&&!(this.P&16777215))this.P=0;if(!!M){this.Down=Cf||Cc;this.D8=
this.Km(M.Bs);this.BQ=M.BQ;this.Bs=M.Bs;this.AC=Aw;this.BL=M.BL;this.BS=M.BS;this.
BY=M.BY;this.AZ=M.AZ;this.Aq=M.Aq;if(M.Down&&!M.BL)Ju=false;}if(!!Au){this.Down=
true;this.D8=this.Km(Au.Bs);this.BQ=Au.BQ;this.Bs=Au.Bs;this.AC=Au.AC;this.BL=Au.
BL;this.BS=Au.BS;this.AZ=Au.AZ;this.BY=false;this.Aq=Au.Aq;}var LA=this.Down;if(
!!Au)(A=this.Kr)?A[1].call(A[0],this):null;if((!!M&&this.Down)&&!this.BL)(A=this.
CE)?A[1].call(A[0],this):null;if((this.Down&&this.D8)&&!Ju){this.LB=true;(A=this.
Kt)?A[1].call(A[0],this):null;}if(this.LB&&(((LA&&!this.D8)&&Ju)||((!LA&&this.D8
)&&Ju))){this.LB=false;(A=this.Ku)?A[1].call(A[0],this):null;}if(!!M&&!LA)(A=this.
Ch)?A[1].call(A[0],this):null;if(!!this.EU){var FK=0x0;if(((((this.EU&0x10)===0x10
)&&!!M)&&M.Down)&&(M.BL>=1000))FK=0x10;if((((this.EU&0x1)===0x1)&&!!Au)&&((Au.Bz[
1]-Au.EK[1])<=-this.HE))FK=0x1;if((((this.EU&0x2)===0x2)&&!!Au)&&((Au.Bz[1]-Au.EK[
1])>=this.HE))FK=0x2;if((((this.EU&0x4)===0x4)&&!!Au)&&((Au.Bz[0]-Au.EK[0])<=-this.
HE))FK=0x4;if((((this.EU&0x8)===0x8)&&!!Au)&&((Au.Bz[0]-Au.EK[0])>=this.HE))FK=0x8;
if(!!FK){var BE=this.EJ();if(!!BE){this.JS=FK;BE.HD(null,this,this,FK);}}}return this;
},D6:function(Am,S,Cv,DV,DE,EX){var A;if(!!DV&&(DV!==this))return null;if((Cv<1)||(
Cv>this.Mm))return null;if(this.P>=33554432)return null;if((this.P>=16777216)&&!(
this.P&(4096<<S)))return null;if(!!(EX&this.EU))return null;if(this.Ol()){var V=
B.kz(Am,this.GetExtent());if(!((V[0]>=V[2])||(V[1]>=V[3]))){var BB=B.zT(Am);var AR=
Aw;if(BB[0]<V[0])AR=[V[0]-BB[0],AR[1]];if(BB[0]>=V[2])AR=[(V[2]-BB[0])-1,AR[1]];
if(BB[1]<V[1])AR=[AR[0],V[1]-BB[1]];if(BB[1]>=V[3])AR=[AR[0],(V[3]-BB[1])-1];return B.
_NewObject(C.He,0).Initialize(this,AR);}}else{var Bc=B.aan(9,B.vw,null);var G;Bc.
Set(0,B.zT(Am));Bc.Set(1,Bc.Get(0));Bc.Set(2,Bc.Get(0));Bc.Set(3,Bc.Get(0));Bc.Set(
4,Bc.Get(0));Bc.Set(1,[Am[0],Bc.Get(1)[1]]);Bc.Set(2,[Bc.Get(2)[0],Am[1]]);Bc.Set(
3,[Am[2],Bc.Get(3)[1]]);Bc.Set(4,[Bc.Get(4)[0],Am[3]]);Bc.Set(5,Am.slice(0,2));Bc.
Set(6,[Am[2],Am[1]]);Bc.Set(7,[Am[0],Am[3]]);Bc.Set(8,Am.slice(2,4));for(G=0;G<9;
G=G+1)if(this.Km(Bc.Get(G)))return B._NewObject(C.He,0).Initialize(this,B.aaj(Bc.
Get(G),Bc.Get(0)));}return null;},MF:function(value){if(value<1)value=1;this.HE=
value;},MA:function(value){if(value<1)value=1;this.Mm=value;},A_:function(value){
if(value)this.A7(0x10,0x0);else this.A7(0x0,0x10);},_Init:function(aArg){C.D_._Init.
call(this,aArg);this.__proto__=C.HG;this.E=0x11B;},_Mark:function(D){var A;C.D_.
_Mark.call(this,D);if((A=this.Kr)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ku)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Kt)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ch)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.CE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.IZ={Kq:null,Kv:null,P:0,BQ:B.vw,Eq:0,Down:false,D8:false,BY:false,FD:0,Da:function(
A1,aClip,aOffset,A$,aBlend){},Bi:function(Ak){var A;var M=(C.DR.isPrototypeOf(Ak
)?Ak:null);var Au=(C.GC.isPrototypeOf(Ak)?Ak:null);var Cf;var Cc;var FR;var Bd;var
Ex;if(!M&&!Au)return null;Cf=(!!M&&M.Down)&&!M.BL;Cc=(!!M&&M.Down)&&(M.BL>0);FR=(
!!M&&M.Down)&&(M.BL>this.FD);Bd=!!M&&!M.Down;Ex=!!Au;if(Cf)this.FD=((A=(M.BY?0:50
))&0x80)?A|0xFFFFFF00:A&0xFF;if(Cf){var Ek=0;var CO;this.P=this.P|(1<<M.AZ);for(
CO=this.P&4095;CO>0;CO=CO>>1)if(!!(CO&1))Ek=Ek+1;if(Ek===1)this.P=(this.P|16777216
)|(4096<<M.AZ);}if(Bd&&(this.P<16777216)){var BE=this.EJ();var Bu=null;if(!!BE){
var It=(!!this.W?this.W:this.F);Bu=BE.D6(B.aam(H0,M.Bz),M.AZ,M.BS,null,It,0x0);}
if(!!Bu){var G;for(G=0;G<10;G++)if(!!(this.P&(1<<G)))Bu.Ax.Bi(B._NewObject(C.DR,
0).InitializeDown(G,M.Bs,M.BS,Aw,true,M.Bz));for(G=0;G<10;G++)if(!!(this.P&(1<<G
)))Bu.Ax.Bi(B._NewObject(C.DR,0).InitializeUp(G,M.Bs,M.Bs,0,M.BS,Aw,false,M.Bz,M.
Bz));}}if(Bd)this.P=(this.P&~(1<<M.AZ))|33554432;if(FR&&(this.P<16777216))this.P=
this.P|67108864;if(Bd&&M.BY)this.P=this.P|67108864;if(Bd&&!(this.P&16777215))this.
P=0;if(Cc&&(this.P>=67108864)){var BE=this.EJ();if(!!BE)BE.HD(null,null,this,0x0
);}if((Cc&&!!(this.P&16777216))&&!!(this.P&33554432)){Cc=false;Bd=true;}if(!!M&&
!(this.P&(4096<<M.AZ)))return this;if(!!Au&&!(this.P&(4096<<Au.AZ)))return this;
if(Bd&&!(this.P&16777216))return this;if(((Cf||Ex)||Cc)&&((this.P<16777216)||(this.
P>=33554432)))return this;if(Bd)this.P=this.P&3758100479;if(Bd&&!(this.P&16777215
))this.P=0;if(Cf||Bd){this.D8=B.vt(this.K,M.Bs);this.BY=M.BY;this.BQ=M.BQ;this.Down=
Cf;}if(Ex){this.D8=B.vt(this.K,Au.Bs);this.BQ=Au.BQ;this.Down=true;}if(Cf)this.Eq=
0;var Ew=this.Eq;if(Ex){var H$=Au.Bs[0]-Au.BQ[0];var Ia=Au.Bs[1]-Au.BQ[1];var Nq=((((
A=this.K)[2]-A[0])*25)/100)|0;var No=((((A=this.K)[3]-A[1])*25)/100)|0;var V=0;if((((
H$>=Nq)||(H$<=-Nq))||(Ia>=No))||(Ia<=-No))V=Math.sqrt((H$*H$)+(Ia*Ia));if(V>=8){
var Cw=(Math.acos(H$/V)*B.qW)|0;if(Ia>0)Cw=360-Cw;if((Cw<=22)||(Cw>=338))Ew=7;if((
Cw>=68)&&(Cw<=112))Ew=4;if((Cw>=158)&&(Cw<=202))Ew=2;if((Cw>=248)&&(Cw<=292))Ew=
5;if((Cw>22)&&(Cw<68))Ew=6;if((Cw>112)&&(Cw<158))Ew=1;if((Cw>202)&&(Cw<248))Ew=3;
if((Cw>292)&&(Cw<338))Ew=8;}}if(!this.Eq){this.Eq=Ew;switch(Ew){case 5:(A=this.Kq
)?A[1].call(A[0],this):null;break;case 2:break;case 7:break;case 4:(A=this.Kv)?A[
1].call(A[0],this):null;break;case 3:break;case 8:break;case 1:break;case 6:break;
default:;}}return this;},D6:function(Am,S,Cv,DV,DE,EX){var A;if(!!DV&&(DV!==this
))return null;if(this.P>=33554432)return null;if((this.P>=16777216)&&!(this.P&(4096<<
S)))return null;var V=B.kz(Am,this.K);if(!((V[0]>=V[2])||(V[1]>=V[3]))){var BB=B.
zT(Am);var AR=Aw;if(BB[0]<V[0])AR=[V[0]-BB[0],AR[1]];if(BB[0]>=V[2])AR=[(V[2]-BB[
0])-1,AR[1]];if(BB[1]<V[1])AR=[AR[0],V[1]-BB[1]];if(BB[1]>=V[3])AR=[AR[0],(V[3]-
BB[1])-1];return B._NewObject(C.He,0).Initialize(this,AR);}return null;},_Init:function(
aArg){C.Bj._Init.call(this,aArg);this.__proto__=C.IZ;this.E=0x11B;},_Mark:function(
D){var A;C.Bj._Mark.call(this,D);if((A=this.Kq)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Kv)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::WipeTouchHandler"};C.KF={timer:null,JE:null,G7:null,P:0,Jc:0,Gw:0,Jt:B.vw
,Gl:0,Eu:0,AJ:0,FP:0,G_:0,Gk:0,Et:0,AI:0,FO:0,FN:0,BQ:B.vw,Mc:B.vw,A8:B.vw,A9:B.
vw,AC:B.vw,Dx:B.vw,GQ:false,DL:false,DM:false,Jb:false,FD:0,Da:function(A1,aClip
,aOffset,A$,aBlend){},Bi:function(Ak){var A;var M=(C.DR.isPrototypeOf(Ak)?Ak:null
);var Au=(C.GC.isPrototypeOf(Ak)?Ak:null);var Bp=(C.Hd.isPrototypeOf(Ak)?Ak:null
);var Cf;var Cc;var FR;var Bd;var Ex;Cf=(!!M&&M.Down)&&!M.BL;Cc=(!!M&&M.Down)&&(
M.BL>0);FR=(!!M&&M.Down)&&(M.BL>this.FD);Bd=!!M&&!M.Down;Ex=!!Au;if(Cf)this.FD=((
A=(M.BY?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Cf){var Ek=0;var CO;this.P=this.P|(1<<
M.AZ);for(CO=this.P&4095;CO>0;CO=CO>>1)if(!!(CO&1))Ek=Ek+1;if(Ek===1)this.P=(this.
P|16777216)|(4096<<M.AZ);}if(Bd&&(this.P<16777216)){var BE=this.EJ();var Bu=null;
if(!!BE){var It=(!!this.W?this.W:this.F);Bu=BE.D6(B.aam(H0,M.Bz),M.AZ,M.BS,null,
It,0x0);}if(!!Bu){var G;for(G=0;G<10;G++)if(!!(this.P&(1<<G)))Bu.Ax.Bi(B._NewObject(
C.DR,0).InitializeDown(G,M.Bs,M.BS,Aw,true,M.Bz));for(G=0;G<10;G++)if(!!(this.P&(
1<<G)))Bu.Ax.Bi(B._NewObject(C.DR,0).InitializeUp(G,M.Bs,M.Bs,0,M.BS,Aw,false,M.
Bz,M.Bz));}}if(Bd)this.P=(this.P&~(1<<M.AZ))|33554432;if(FR&&(this.P<16777216))this.
P=this.P|67108864;if(Bd&&M.BY)this.P=this.P|67108864;if(Bd&&!(this.P&16777215))this.
P=0;if(Cc&&(this.P>=67108864)){var BE=this.EJ();if(!!BE)BE.HD(null,null,this,0x0
);}if((Cc&&!!(this.P&16777216))&&!!(this.P&33554432)){Cc=false;Bd=true;}if(!!M&&
!(this.P&(4096<<M.AZ)))return this;if(!!Au&&!(this.P&(4096<<Au.AZ)))return this;
if(Bd&&!(this.P&16777216))return this;if(((Cf||Ex)||Cc)&&((this.P<16777216)||(this.
P>=33554432)))return this;if(Bd)this.P=this.P&3758100479;if(Bd&&!(this.P&16777215
))this.P=0;if(!!Bp&&(Bp.HH===this))return null;if((!!Bp&&Bp.Down)&&(this.Jb||!this.
GQ))return null;if((!!Bp&&Bp.Down)&&!B.vt(this.K,this.F.Mk(Bp.Bz)))return null;if((
!!Bp&&!Bp.Down)&&(!this.Jb||(this.Jc!==Bp.AZ)))return null;if((!M&&!Au)&&!Bp)return null;
if(!!M){this.Jb=Cf||Cc;this.Jc=M.AZ;this.BQ=M.BQ;}if(!!Au)this.Jc=Au.AZ;if(!!Bp){
this.Jb=Bp.Down;this.Jc=Bp.AZ;}if(!!Bp&&Bp.Down){this.L5();this.AI=(((Bp.Aq-this.
FN)*0.001)*this.Et)+this.AI;this.AJ=(((Bp.Aq-this.G_)*0.001)*this.Eu)+this.AJ;if(
this.DL)this.AI=0;if(this.DM)this.AJ=0;this.Et=0;this.Eu=0;this.DL=false;this.DM=
false;this.Jt=this.AC;this.Gw=Bp.Aq;return this;}if(Cf){this.L5();this.AI=(((M.Aq-
this.FN)*0.001)*this.Et)+this.AI;this.AJ=(((M.Aq-this.G_)*0.001)*this.Eu)+this.AJ;
if(this.DL||!this.GQ)this.AI=0;if(this.DM||!this.GQ)this.AJ=0;this.Et=0;this.Eu=
0;this.DL=false;this.DM=false;if(!this.GQ){this.GQ=true;(A=this.JE)?A[1].call(A[
0],this):null;}this.Jt=this.AC;this.Gw=M.Aq;}if(!!Au){var Ar=B.aaj(Au.Bs,Au.BQ);
var Ap=this.AC;Ap=[this.Jt[0]+Ar[0],Ap[1]];Ap=[Ap[0],this.Jt[1]+Ar[1]];if(Ap[0]<
this.A9[0])Ap=[this.A9[0]+(((Ap[0]-this.A9[0])/2)|0),Ap[1]];else if(Ap[0]>this.A8[
0])Ap=[this.A8[0]+(((Ap[0]-this.A8[0])/2)|0),Ap[1]];if(Ap[1]<this.A9[1])Ap=[Ap[0
],this.A9[1]+(((Ap[1]-this.A9[1])/2)|0)];else if(Ap[1]>this.A8[1])Ap=[Ap[0],this.
A8[1]+(((Ap[1]-this.A8[1])/2)|0)];if(!B.z8(Ap,this.AC)){this.Mc=B.aaj(Ap,this.AC
);this.AC=Ap;(A=this.G7)?A[1].call(A[0],this):null;}}if((!!Bp&&!Bp.Down)&&((Bp.Aq-
this.Gw)>=200)){this.AI=0;this.AJ=0;}if(Cc&&((M.Aq-this.Gw)>=200)){this.AI=0;this.
AJ=0;}if(!!Au&&(Au.Aq>this.Gw)){var Ar=Au.AC;var Ni=1000/(Au.Aq-this.Gw);var E_;
var E$;E_=Ar[0]*Ni;E$=Ar[1]*Ni;if((E_*this.AI)<0)this.AI=0;if((E$*this.AJ)<0)this.
AJ=0;this.AI=(this.AI+E_)*0.5;this.AJ=(this.AJ+E$)*0.5;this.Gw=Au.Aq;}if(!Bd&&!Bp
)return this;if(!!M&&M.BY){this.AI=0;this.AJ=0;}if((this.AC[0]<=this.A9[0])||(this.
AC[0]>=this.A8[0]))this.AI=0;else if(!this.AI){var AF=this.AC[0];var AK=this.A9[
0];var AB=this.A8[0];if(AF<AK)AB=this.A9[0];else if(AF>AB)AK=this.A8[0];else if(
this.Dx[0]<=1){AK=AF;AB=AF;}else{var Ei=(AB-AF)%this.Dx[0];AB=(AF-this.Dx[0])+Ei;
AK=AF+Ei;if(AB<this.A9[0])AB=this.A9[0];if(AK>this.A8[0])AK=this.A8[0];}if((AK-AF
)<=(AF-AB))AF=AK;else AF=AB;if(AF!==this.AC[0]){var B5=AF-this.AC[0];if(B5>0)this.
AI=Math.sqrt((B5*2)*5000)+20;if(B5<0)this.AI=-Math.sqrt((-B5*2)*5000)-20;this.Et=(
400-(this.AI*this.AI))/(2*B5);this.Gk=AF;}}else{var QX=this.AI*this.AI;var B5=QX
/10000;var AF=this.AC[0];if(this.AI>0)AF=AF+(B5|0);if(this.AI<0)AF=AF-(B5|0);if(
AF>this.A8[0])AF=this.A8[0];else if(AF<this.A9[0])AF=this.A9[0];var NQ=AF;var AK=
this.A9[0];var AB=this.A8[0];if(AF<AK)AB=this.A9[0];else if(AF>AB)AK=this.A8[0];
else if(this.Dx[0]<=1){AK=AF;AB=AF;}else{var Ei=(AB-AF)%this.Dx[0];AB=(AF-this.Dx[
0])+Ei;AK=AF+Ei;if(AB<this.A9[0])AB=this.A9[0];if(AK>this.A8[0])AK=this.A8[0];}if(
this.AI>0){if(AB<=this.AC[0])AF=AK;else if((AF-AB)<(AK-AF))AF=AB;else AF=AK;}else
if(AK>=this.AC[0])AF=AB;else if((AF-AB)>(AK-AF))AF=AK;else AF=AB;if(AF!==this.AC[
0]){B5=AF-this.AC[0];if(AF!==NQ){var Ff=AF-NQ;if(Ff>0)this.AI=this.AI+Math.sqrt((
Ff*2)*5000);if(Ff<0)this.AI=this.AI-Math.sqrt((-Ff*2)*5000);}if(this.AI>0)this.AI=
this.AI+20;if(this.AI<0)this.AI=this.AI-20;this.Et=(400-(this.AI*this.AI))/(2*B5
);this.Gk=AF;}else this.AI=0;}if((this.AC[1]<=this.A9[1])||(this.AC[1]>=this.A8[
1]))this.AJ=0;else if(!this.AJ){var AG=this.AC[1];var AK=this.A9[1];var AB=this.
A8[1];if(AG<AK)AB=this.A9[1];else if(AG>AB)AK=this.A8[1];else if(this.Dx[1]<=1){
AK=AG;AB=AG;}else{var Ei=(AB-AG)%this.Dx[1];AB=(AG-this.Dx[1])+Ei;AK=AG+Ei;if(AB<
this.A9[1])AB=this.A9[1];if(AK>this.A8[1])AK=this.A8[1];}if((AK-AG)<=(AG-AB))AG=
AK;else AG=AB;if(AG!==this.AC[1]){var B5=AG-this.AC[1];if(B5>0)this.AJ=Math.sqrt((
B5*2)*5000)+20;if(B5<0)this.AJ=-Math.sqrt((-B5*2)*5000)-20;this.Eu=(400-(this.AJ
*this.AJ))/(2*B5);this.Gl=AG;}}else{var QY=this.AJ*this.AJ;var B5=QY/10000;var AG=
this.AC[1];if(this.AJ>0)AG=AG+(B5|0);if(this.AJ<0)AG=AG-(B5|0);if(AG>this.A8[1])
AG=this.A8[1];else if(AG<this.A9[1])AG=this.A9[1];var NR=AG;var AK=this.A9[1];var
AB=this.A8[1];if(AG<AK)AB=this.A9[1];else if(AG>AB)AK=this.A8[1];else if(this.Dx[
1]<=1){AK=AG;AB=AG;}else{var Ei=(AB-AG)%this.Dx[1];AB=(AG-this.Dx[1])+Ei;AK=AG+Ei;
if(AB<this.A9[1])AB=this.A9[1];if(AK>this.A8[1])AK=this.A8[1];}if(this.AJ>0){if(
AB<=this.AC[1])AG=AK;else if((AG-AB)<(AK-AG))AG=AB;else AG=AK;}else if(AK>=this.
AC[1])AG=AB;else if((AG-AB)>(AK-AG))AG=AK;else AG=AB;if(AG!==this.AC[1]){B5=AG-this.
AC[1];if(AG!==NR){var Ff=AG-NR;if(Ff>0)this.AJ=this.AJ+Math.sqrt((Ff*2)*5000);if(
Ff<0)this.AJ=this.AJ-Math.sqrt((-Ff*2)*5000);}if(this.AJ>0)this.AJ=this.AJ+20;if(
this.AJ<0)this.AJ=this.AJ-20;this.Eu=(400-(this.AJ*this.AJ))/(2*B5);this.Gl=AG;}
else this.AJ=0;}if(!!M)this.FN=M.Aq;if(!!Bp)this.FN=Bp.Aq;this.G_=this.FN;this.FO=
this.AC[0];this.FP=this.AC[1];this.QZ();return this;},D6:function(Am,S,Cv,DV,DE,
EX){var A;if(!!DV&&(DV!==this))return null;if(this.P>=33554432)return null;if((this.
P>=16777216)&&!(this.P&(4096<<S)))return null;var V=B.kz(Am,this.K);if(!((V[0]>=
V[2])||(V[1]>=V[3]))){var BB=B.zT(Am);var AR=Aw;if(BB[0]<V[0])AR=[V[0]-BB[0],AR[
1]];if(BB[0]>=V[2])AR=[(V[2]-BB[0])-1,AR[1]];if(BB[1]<V[1])AR=[AR[0],V[1]-BB[1]];
if(BB[1]>=V[3])AR=[AR[0],(V[3]-BB[1])-1];return B._NewObject(C.He,0).Initialize(
this,AR);}return null;},L5:function(){if(!!this.timer){B.zl([this,this.B8],this.
timer,0);this.timer=null;}},QZ:function(){this.timer=B._GetAutoObject(B.abj.Fi);
B.y_([this,this.B8],this.timer,0);},B8:function(Ah){var A;if(!this.timer)return;
var G$=(this.timer.Aq-this.FN)*0.001;var Ha=(this.timer.Aq-this.G_)*0.001;var Q1=
G$*G$;var Q2=Ha*Ha;var E_=(this.Et*G$)+this.AI;var E$=(this.Eu*Ha)+this.AJ;var Ap=[((((
this.Et*0.5)*Q1)+(this.AI*G$))+this.FO)|0,((((this.Eu*0.5)*Q2)+(this.AJ*Ha))+this.
FP)|0];if(this.DL&&(G$>=0.5)){Ap=[this.Gk,Ap[1]];this.AI=0;this.Et=0;this.FO=Ap[
0];this.DL=false;}else if(this.DL){var Cy=1-Math.pow(1-(G$/0.5),5);Ap=[(this.FO+((
this.Gk-this.FO)*Cy))|0,Ap[1]];}if(this.DM&&(Ha>=0.5)){Ap=[Ap[0],this.Gl];this.AJ=
0;this.Eu=0;this.FP=Ap[1];this.DM=false;}else if(this.DM){var Cy=1-Math.pow(1-(Ha
/0.5),5);Ap=[Ap[0],(this.FP+((this.Gl-this.FP)*Cy))|0];}if(((this.AI>0)&&(E_<0))||((
this.AI<0)&&(E_>0))){E_=0;Ap=[this.AC[0],Ap[1]];}if(((this.AJ>0)&&(E$<0))||((this.
AJ<0)&&(E$>0))){E$=0;Ap=[Ap[0],this.AC[1]];}if(!this.DL&&(Ap[0]<this.A9[0])){this.
FO=Ap[0];this.Gk=this.A9[0];this.FN=this.timer.Aq;this.DL=true;}else if(!this.DL&&(
Ap[0]>this.A8[0])){this.FO=Ap[0];this.Gk=this.A8[0];this.FN=this.timer.Aq;this.DL=
true;}if(!this.DM&&(Ap[1]<this.A9[1])){this.FP=Ap[1];this.Gl=this.A9[1];this.G_=
this.timer.Aq;this.DM=true;}else if(!this.DM&&(Ap[1]>this.A8[1])){this.FP=Ap[1];
this.Gl=this.A8[1];this.G_=this.timer.Aq;this.DM=true;}if(((!this.DL&&!!this.AI)&&(
E_>-20))&&(E_<20)){Ap=[this.Gk,Ap[1]];this.AI=0;this.Et=0;this.FO=Ap[0];}if(((!this.
DM&&!!this.AJ)&&(E$>-20))&&(E$<20)){Ap=[Ap[0],this.Gl];this.AJ=0;this.Eu=0;this.
FP=Ap[1];}if(!B.z8(Ap,this.AC)){this.Mc=B.aaj(Ap,this.AC);this.AC=Ap;(A=this.G7)?
A[1].call(A[0],this):null;}if(((!this.AI&&!this.AJ)&&!this.DL)&&!this.DM){this.L5(
);this.GQ=false;}},Pc:function(value){if(value[0]<0)value=[0,value[1]];if(value[
1]<0)value=[value[0],0];this.Dx=value;},_Init:function(aArg){C.Bj._Init.call(this
,aArg);this.__proto__=C.KF;this.E=0x11B;},_Mark:function(D){var A;C.Bj._Mark.call(
this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.JE)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G7)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::SlideTouchHandler"};C.FV={O:null,Ch:null,CE:null
,Gu:0,Aq:0,MO:0,CU:148,Bx:0,AM:0,AV:true,Down:false,KC:false,Cg:function(aArg){var
A;var AL=(C.I.isPrototypeOf(A=this.Ac)?A:null);if(!AL)throw new Error(Lm);this.O=
AL.Jx;AL.Jx=this;},Bi:function(Ak){var A;if(!!Ak&&Ak.Oo(this.CU)){this.Down=Ak.Down;
this.Bx=Ak.Bx;this.AM=Ak.AM;this.Aq=Ak.Aq;if(Ak.Down){this.MO=this.Gu;this.KC=this.
Gu>0;if(!this.KC)(A=this.CE)?A[1].call(A[0],this):null;this.Gu=this.Gu+1;return true;
}if(!Ak.Down){this.KC=this.Gu>1;this.MO=this.Gu-1;this.Gu=0;(A=this.Ch)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
C.FV;this.Cg(aArg);B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ch)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CE)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=
D);},Ac:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.He={
Ax:null,Hf:0,AC:B.vw,Initialize:function(Q,aOffset){this.Ax=Q;this.AC=aOffset;this.
Hf=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.He;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ax)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Core::CursorHit"};C.IG={Gr:null,CN:B.vx,At:B.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.IG;B.hJ++;},_Done:function(){this.__proto__=
null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Gr)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:
null,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.IH={Io:B.vw,In:
B.vw,Im:B.vw,Il:B.vw,_Init:function(aArg){C.IG._Init.call(this,aArg);this.__proto__=
C.IH;},_className:"Core::LayoutQuadContext"};C.J0={AL:null,O:null,C4:null,C_:null
,BX:null,Gs:null,_Init:function(aArg){this.__proto__=C.J0;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.AL)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.C4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.C_)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.BX)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Gs)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))
A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.MQ={C2:null,Ay:null,As:null,Nj:false,Qp:function(){if(!this.C2)return;var Dq=
this.C2;this.C2.Dp=null;this.C2=null;B.ow([this,this.LW],this);Dq.Mo(this);},QG:
function(Ah){if(!!this.C2)return;if(!this.As)return;this.C2=this.As;this.As=this.
As.O;if(!!this.As)this.As.W=null;else this.Ay=null;this.C2.O=null;this.Nj=true;this.
C2.GL(this);this.Nj=false;},QN:function(Ah){B.ow([this,this.QG],this);},QM:function(
Ah){B.ow([this,this.QN],this);},LW:function(Ah){B.ow([this,this.QM],this);},N8:function(
Bt){if(!Bt||!Bt.Dp)return;if(Bt.Dp!==this)throw new Error(Ln);var NZ=false;if(this.
C2===Bt){this.C2=null;NZ=true;B.ow([this,this.LW],this);}else{if(!!Bt.O)Bt.O.W=Bt.
W;else this.Ay=Bt.W;if(!!Bt.W)Bt.W.O=Bt.O;else this.As=Bt.O;Bt.W=null;Bt.O=null;
}Bt.Dp=null;if(NZ)Bt.Mn(this);},PV:function(Bt,Qi){if(!Bt)return;if(!!Bt.Dp)throw new
Error(Lo);Bt.Dp=this;if(Qi){Bt.O=this.As;if(!!this.As)this.As.W=Bt;else this.Ay=
Bt;this.As=Bt;}else{Bt.W=this.Ay;if(!!this.Ay)this.Ay.O=Bt;else this.As=Bt;this.
Ay=Bt;}if(!this.C2)B.ow([this,this.LW],this);},_Init:function(aArg){this.__proto__=
C.MQ;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.C2)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Ay)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.As)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Core::TaskQueue"};C.HI={Dp:null,W:null,O:null,Mo:function(
H5){},Mn:function(H5){},GL:function(H5){this.Ma();},D5:function(){if(!!this.Dp&&(
this.Dp.C2===this))this.Dp.Qp();},Ma:function(){if(!!this.Dp)this.Dp.N8(this);},
Kk:function(){return!!this.Dp&&(this.Dp.C2===this);},_Init:function(aArg){this.__proto__=
C.HI;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.Dp)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Core::Task"};C.ES={resource:null,Dr:function(){this.
resource=null;},Cg:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=C.ES;this.Cg(aArg);B.hJ++;},_Done:function(){this.Dr();this.__proto__=
null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Hz:null,timer:null,Aq:0,Period:1000,IC:0,AV:false,Dr:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},JH:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},Hx:function(value){if(value<0)value=0;if(value===
this.Period)return;this.Period=value;if(this.AV)this.JH(this.IC,value);},Hv:function(
value){if(value<0)value=0;if(value===this.IC)return;this.IC=value;if(this.AV)this.
JH(value,this.Period);},A_:function(value){if(value===this.AV)return;this.AV=value;
if(value)this.JH(this.IC,this.Period);else this.JH(0,0);this.Aq=this.Hm();},Hm:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},
Trigger:function(){var A;this.Aq=this.Hm();if(!this.Period)this.A_(false);(A=this.
Hz)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.hJ++;
},_Done:function(){this.Dr();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Hz)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:
"Core::Timer"};C.Sw={BA:0x1,Re:0x2,RJ:0x4,Su:0x8,AV:0x10,Si:0x20,RK:0x40,RV:0x80
,RI:0x100,RP:0x200,RB:0x400,R6:0x800,MR:0x1000,Sv:0x2000,R0:0x4000,R1:0x8000,Rv:
0x10000,RZ:0x20000,Se:0x40000};C.CZ={R7:0x1,R8:0x2,Ra:0x4,Rb:0x8,Rc:0x10,Q$:0x20
};C.RM={Ox:0,Sr:1,Rk:2,RQ:3,R_:4,Ss:5,St:6,Rl:7,Rm:8,RS:9,RR:10,Sa:11,R$:12};C.Eq={
Ox:0,Sp:1,Left:2,Ri:3,PX:4,N6:5,Sq:6,Right:7,Rj:8};C.KeyCode={NoKey:0,Ok:1,Exit:
2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,
Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,
Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:
34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:41
,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:
50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:
59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:
70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:
78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:86,User2:87
,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:95,User11:
96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:103,User19:
104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:
113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:
122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:
131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:138,Colon:
139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.R9={SA:0x1,Sx:0x2,Sy:0x4,Sz:0x8,RU:
0x10,RL:0x20};
C._Init=function(){C.D_.__proto__=C.Ax;C.Bj.__proto__=C.Ax;C.I.__proto__=C.Bj;C.Root.
__proto__=C.I;C.KeyEvent.__proto__=C.Event;C.Hd.__proto__=C.Event;C.DR.__proto__=
C.Event;C.GC.__proto__=C.Event;C.HB.__proto__=C.Bj;C.K7.__proto__=C.I;C.HG.__proto__=
C.D_;C.IZ.__proto__=C.Bj;C.KF.__proto__=C.Bj;C.IH.__proto__=C.IG;};C._ReInit=function(
){};C.CI=function(D){};return C;})();

/* Embedded Wizard */