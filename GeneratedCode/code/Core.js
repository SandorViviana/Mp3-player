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
var Aw=[0,0];var Bk=[0,0,0,0];var Dm="The view does not belong to this group";var
Ec="The dialog component is already presented";var EZ="The dialog component is actually not presented";
var Gc="No fader to perform the fade-in/out operation";var Gd="Trying to use the same fader twice";
var GY="Trying to fade-in/out a group which belongs to another owner";var H3="No view to restack";
var H4="View is not in this group";var Li="No view to remove";var I5="No view to add";
var Lj="View already in a group";var Lk="Recursive invalidate during active update cycle.";
var H5=[-8,-8,9,9];var Ll="The method SwitchToDialog() is not available in Core::VerticalList.";
var Lm="The method DismissDialog() is not available in Core::VerticalList.";var Ln=
"The method PresentDialog() is not available in Core::VerticalList.";var Lo="The method FadeGroup() is not available in Core::VerticalList.";
var Lp="The method RestackTop() is not available in Core::VerticalList.";var Lq=
"The method Remove() is not available in Core::VerticalList.";var Lr="The method Add() is not available in Core::VerticalList.";
var Ls="The Slide Touch Handler:";var Lt="is already connected with a view.";var
Lu="The Slide Touch Handler is already connected with a view to scroll "+"its content.";
var Lv=[0,0,170,120];var H6=[0,0,1,1];var Lw="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Lx="Trying to cancel a task not belonging to this queue!";
var Ly="Trying to enqueue a task twice!";
C.Ax={O:null,W:null,F:null,AZ:null,E:0x103,C1:0x14,Ih:function(Ae,I_){},GN:function(
value){var A;var As=value^this.C1;if(!As)return;this.C1=value;if(!!this.AZ&&!((this.
E&0x400)===0x400)){this.F.E=this.F.E|0x5000;B.ow([A=this.F,A.Ct],this);this.F.Ao([
0,0,(A=this.F.K)[2]-A[0],A[3]-A[1]]);}if(!!this.AZ&&((this.E&0x400)===0x400)){this.
AZ.Gu.E=this.AZ.Gu.E|0x1000;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct],this);
}},EN:function(){var Ai=this.F;while(!!Ai){var BF=(C.Root.isPrototypeOf(Ai)?Ai:null
);if(!!BF)return BF;Ai=Ai.F;}return null;},Dc:function(A2,aClip,aOffset,A$,aBlend
){},Bi:function(Ak){return null;},D8:function(An,T,Cx,DX,DG,E0){return null;},IE:
function(An){return An;},IG:function(Ae,Dn){return Aw;},IS:function(aOffset,I7){
},GetExtent:function(){return Bk;},A8:function(E1,Gf){var A;if(((this.E&0x200)===
0x200))E1=E1&~0x400;var L3=(this.E&~Gf)|E1;var FB=L3^this.E;this.E=L3;if(!!this.
F&&!!(FB&0x14)){var No=((this.E&0x14)===0x14);if(No&&!this.F.B$)this.F.CH(this);
if(!No&&(this.F.B$===this))this.F.CH(this.F.Kg(this,0x14));}if(!!this.F&&!!(FB&0x403
))this.F.Ao(this.GetExtent());if(((!!this.AZ&&!!this.F)&&((L3&0x400)===0x400))&&((
FB&0x1)===0x1)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct
],this);}if(!!this.F&&((FB&0x400)===0x400)){this.AZ=null;this.E=this.E|0x800;this.
F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct],this);}},_Init:function(aArg){this.__proto__=
C.Ax;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.F)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.AZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Core::View"
};C.Ea={BN:B.vw,Cc:B.vw,BM:B.vw,Cb:B.vw,Ih:function(Ae,I_){var Ah=B._NewObject(C.
IO,0);this.AZ=null;Ah.CP=this.GetExtent();Ah.Al=Ae;Ah.Gu=I_;Ah.Is=this.Cb;Ah.It=
this.BM;Ah.Iu=this.Cc;Ah.Iv=this.BN;this.AZ=Ah;},IG:function(Ae,Dn){var A;var BJ=
this.C1;var Ah=(C.IO.isPrototypeOf(A=this.AZ)?A:null);var Y=Ah.CP[0];var Z=Ah.CP[
1];var Aa=Ah.CP[2];var Ab=Ah.CP[3];var CO=[Ae[2]-Ae[0],Ae[3]-Ae[1]];var Bh=Aa-Y;
var A7=Ab-Z;if(!Dn){var DR=[(A=Ah.Al)[2]-A[0],A[3]-A[1]];Y=Y-Ah.Al[0];Z=Z-Ah.Al[
1];if(DR[0]!==CO[0]){var B2=((BJ&0x4)===0x4);var B3=((BJ&0x8)===0x8);var Eo=((BJ&
0x1)===0x1);if(!B2&&(Eo||!B3))Y=((Y*CO[0])/DR[0])|0;if(!B3&&(Eo||!B2)){Aa=Aa-Ah.
Al[0];Aa=((Aa*CO[0])/DR[0])|0;Aa=Aa-CO[0];}else Aa=Aa-Ah.Al[2];Y=Y+Ae[0];Aa=Aa+Ae[
2];if(!Eo){if(B2&&!B3)Aa=Y+Bh;else if(!B2&&B3)Y=Aa-Bh;else{Y=Y+((((Aa-Y)-Bh)/2)|
0);Aa=Y+Bh;}}}else{Aa=Aa-Ah.Al[2];Y=Y+Ae[0];Aa=Aa+Ae[2];}if(DR[1]!==CO[1]){var B4=((
BJ&0x10)===0x10);var B1=((BJ&0x20)===0x20);var Ep=((BJ&0x2)===0x2);if(!B4&&(Ep||
!B1))Z=((Z*CO[1])/DR[1])|0;if(!B1&&(Ep||!B4)){Ab=Ab-Ah.Al[1];Ab=((Ab*CO[1])/DR[1
])|0;Ab=Ab-CO[1];}else Ab=Ab-Ah.Al[3];Z=Z+Ae[1];Ab=Ab+Ae[3];if(!Ep){if(B4&&!B1)Ab=
Z+A7;else if(!B4&&B1)Z=Ab-A7;else{Z=Z+((((Ab-Z)-A7)/2)|0);Ab=Z+A7;}}}else{Ab=Ab-
Ah.Al[3];Z=Z+Ae[1];Ab=Ab+Ae[3];}}else{switch(Dn){case 3:{Y=Ae[0];Aa=Y+Bh;}break;
case 4:{Aa=Ae[2];Y=Aa-Bh;}break;case 1:{Z=Ae[1];Ab=Z+A7;}break;case 2:{Ab=Ae[3];
Z=Ab-A7;}break;default:;}if((Dn===3)||(Dn===4)){var B4=((BJ&0x10)===0x10);var B1=((
BJ&0x20)===0x20);var Ep=((BJ&0x2)===0x2);if(Ep){Z=Ae[1];Ab=Ae[3];}else if(B4&&!B1
){Z=Ae[1];Ab=Z+A7;}else if(B1&&!B4){Ab=Ae[3];Z=Ab-A7;}else{Z=Ae[1]+((((Ae[3]-Ae[
1])-A7)/2)|0);Ab=Z+A7;}}if((Dn===1)||(Dn===2)){var B2=((BJ&0x4)===0x4);var B3=((
BJ&0x8)===0x8);var Eo=((BJ&0x1)===0x1);if(Eo){Y=Ae[0];Aa=Ae[2];}else if(B2&&!B3){
Y=Ae[0];Aa=Y+Bh;}else if(B3&&!B2){Aa=Ae[2];Y=Aa-Bh;}else{Y=Ae[0]+((((Ae[2]-Ae[0]
)-Bh)/2)|0);Aa=Y+Bh;}}}Ah.isEmpty=(Y>=Aa)||(Z>=Ab);Bh=(Aa-Y)-1;A7=(Ab-Z)-1;var E6=
Ah.CP[0];var E7=Ah.CP[1];var EC=(Ah.CP[2]-E6)-1;var EB=(Ah.CP[3]-E7)-1;if(!EC)EC=
1;if(!EB)EB=1;if(((this.E&0x100)===0x100)){this.Cb=[Y+((((Ah.Is[0]-E6)*Bh)/EC)|0
),Z+((((Ah.Is[1]-E7)*A7)/EB)|0)];this.BM=[Y+((((Ah.It[0]-E6)*Bh)/EC)|0),Z+((((Ah.
It[1]-E7)*A7)/EB)|0)];this.Cc=[Y+((((Ah.Iu[0]-E6)*Bh)/EC)|0),Z+((((Ah.Iu[1]-E7)*
A7)/EB)|0)];this.BN=[Y+((((Ah.Iv[0]-E6)*Bh)/EC)|0),Z+((((Ah.Iv[1]-E7)*A7)/EB)|0)
];}else{this.Fo([Y+((((Ah.Is[0]-E6)*Bh)/EC)|0),Z+((((Ah.Is[1]-E7)*A7)/EB)|0)]);this.
Fp([Y+((((Ah.It[0]-E6)*Bh)/EC)|0),Z+((((Ah.It[1]-E7)*A7)/EB)|0)]);this.Fq([Y+((((
Ah.Iu[0]-E6)*Bh)/EC)|0),Z+((((Ah.Iu[1]-E7)*A7)/EB)|0)]);this.Fr([Y+((((Ah.Iv[0]-
E6)*Bh)/EC)|0),Z+((((Ah.Iv[1]-E7)*A7)/EB)|0)]);this.AZ=Ah;}return[Bh+1,A7+1];},IS:
function(aOffset,I7){if(I7){this.Cb=B.aak(this.Cb,aOffset);this.BM=B.aak(this.BM
,aOffset);this.Cc=B.aak(this.Cc,aOffset);this.BN=B.aak(this.BN,aOffset);}else{this.
Fo(B.aak(this.Cb,aOffset));this.Fp(B.aak(this.BM,aOffset));this.Fq(B.aak(this.Cc
,aOffset));this.Fr(B.aak(this.BN,aOffset));}},GetExtent:function(){if(!!this.AZ&&
this.AZ.isEmpty)return Bk;var Y=this.Cb[0];var Z=this.Cb[1];var Aa=this.Cc[0];var
Ab=this.Cc[1];if((((this.BN[0]!==Y)||(this.BM[1]!==Z))||(this.BM[0]!==Aa))||(this.
BN[1]!==Ab)){if(this.BM[0]<Y)Y=this.BM[0];if(this.Cc[0]<Y)Y=this.Cc[0];if(this.BN[
0]<Y)Y=this.BN[0];if(this.BM[1]<Z)Z=this.BM[1];if(this.Cc[1]<Z)Z=this.Cc[1];if(this.
BN[1]<Z)Z=this.BN[1];if(this.Cb[0]>Aa)Aa=this.Cb[0];if(this.BM[0]>Aa)Aa=this.BM[
0];if(this.BN[0]>Aa)Aa=this.BN[0];if(this.Cb[1]>Ab)Ab=this.Cb[1];if(this.BM[1]>Ab
)Ab=this.BM[1];if(this.BN[1]>Ab)Ab=this.BN[1];}else{var tmp;if(Aa<Y){tmp=Y;Y=Aa;
Aa=tmp;}if(Ab<Z){tmp=Z;Z=Ab;Ab=tmp;}}return[Y,Z,Aa+1,Ab+1];},Fr:function(value){
var A;if(B.z8(value,this.BN))return;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(
this.GetExtent());this.AZ=null;this.BN=value;if(!!this.F&&((this.E&0x1)===0x1))this.
F.Ao(this.GetExtent());if((!!this.F&&((this.E&0x400)===0x400))&&!((this.F.E&0x2000
)===0x2000)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct],this
);}},Fq:function(value){var A;if(B.z8(value,this.Cc))return;if(!!this.F&&((this.
E&0x1)===0x1))this.F.Ao(this.GetExtent());this.AZ=null;this.Cc=value;if(!!this.F&&((
this.E&0x1)===0x1))this.F.Ao(this.GetExtent());if((!!this.F&&((this.E&0x400)===0x400
))&&!((this.F.E&0x2000)===0x2000)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;
B.ow([A=this.F,A.Ct],this);}},Fp:function(value){var A;if(B.z8(value,this.BM))return;
if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent());this.AZ=null;this.
BM=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent());if((!!this.
F&&((this.E&0x400)===0x400))&&!((this.F.E&0x2000)===0x2000)){this.E=this.E|0x800;
this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct],this);}},Fo:function(value){var A;
if(B.z8(value,this.Cb))return;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent(
));this.AZ=null;this.Cb=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.GetExtent(
));if((!!this.F&&((this.E&0x400)===0x400))&&!((this.F.E&0x2000)===0x2000)){this.
E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct],this);}},Kt:function(
Ef){var Bc=B.aan(4,B.vw,null);var G=0;var Bg=3;var LR=false;var LS=false;Bc.Set(
0,this.Cb);Bc.Set(1,this.BM);Bc.Set(2,this.Cc);Bc.Set(3,this.BN);while(G<4){var N8=
Bc.Get(G)[0];var J2=Bc.Get(G)[1];var Re=Bc.Get(Bg)[0];var Mg=Bc.Get(Bg)[1];if(((
J2>Ef[1])!==(Mg>Ef[1]))||((J2<Ef[1])!==(Mg<Ef[1]))){var GC=((((Re-N8)*(Ef[1]-J2)
)/(Mg-J2))|0)+N8;if(Ef[0]>GC)LR=!LR;if(Ef[0]<GC)LS=!LS;}Bg=G;G=G+1;}return LR||LS;
},Ou:function(){return((((this.Cb[0]===this.BN[0])&&(this.BM[0]===this.Cc[0]))&&(
this.Cb[1]===this.BM[1]))&&(this.Cc[1]===this.BN[1]))||((((this.Cb[0]===this.BM[
0])&&(this.Cc[0]===this.BN[0]))&&(this.Cb[1]===this.BN[1]))&&(this.BM[1]===this.
Cc[1]));},_Init:function(aArg){C.Ax._Init.call(this,aArg);this.__proto__=C.Ea;},
_className:"Core::QuadView"};C.Bj={K:B.vx,Ih:function(Ae,I_){var Ah=B._NewObject(
C.IN,0);Ah.CP=this.K;Ah.Al=Ae;Ah.Gu=I_;this.AZ=Ah;},IG:function(Ae,Dn){var A;var
BJ=this.C1;var Ah=this.AZ;var Y=Ah.CP[0];var Z=Ah.CP[1];var Aa=Ah.CP[2];var Ab=Ah.
CP[3];var CO=[Ae[2]-Ae[0],Ae[3]-Ae[1]];var Bh=Aa-Y;var A7=Ab-Z;if(!Dn){var DR=[(
A=Ah.Al)[2]-A[0],A[3]-A[1]];Y=Y-Ah.Al[0];Z=Z-Ah.Al[1];if(DR[0]!==CO[0]){var B2=((
BJ&0x4)===0x4);var B3=((BJ&0x8)===0x8);var Eo=((BJ&0x1)===0x1);if(!B2&&(Eo||!B3)
)Y=((Y*CO[0])/DR[0])|0;if(!B3&&(Eo||!B2)){Aa=Aa-Ah.Al[0];Aa=((Aa*CO[0])/DR[0])|0;
Aa=Aa-CO[0];}else Aa=Aa-Ah.Al[2];Y=Y+Ae[0];Aa=Aa+Ae[2];if(!Eo){if(B2&&!B3)Aa=Y+Bh;
else if(!B2&&B3)Y=Aa-Bh;else{Y=Y+((((Aa-Y)-Bh)/2)|0);Aa=Y+Bh;}}}else{Aa=Aa-Ah.Al[
2];Y=Y+Ae[0];Aa=Aa+Ae[2];}if(DR[1]!==CO[1]){var B4=((BJ&0x10)===0x10);var B1=((BJ&
0x20)===0x20);var Ep=((BJ&0x2)===0x2);if(!B4&&(Ep||!B1))Z=((Z*CO[1])/DR[1])|0;if(
!B1&&(Ep||!B4)){Ab=Ab-Ah.Al[1];Ab=((Ab*CO[1])/DR[1])|0;Ab=Ab-CO[1];}else Ab=Ab-Ah.
Al[3];Z=Z+Ae[1];Ab=Ab+Ae[3];if(!Ep){if(B4&&!B1)Ab=Z+A7;else if(!B4&&B1)Z=Ab-A7;else{
Z=Z+((((Ab-Z)-A7)/2)|0);Ab=Z+A7;}}}else{Ab=Ab-Ah.Al[3];Z=Z+Ae[1];Ab=Ab+Ae[3];}}else{
switch(Dn){case 3:{Y=Ae[0];Aa=Y+Bh;}break;case 4:{Aa=Ae[2];Y=Aa-Bh;}break;case 1:{
Z=Ae[1];Ab=Z+A7;}break;case 2:{Ab=Ae[3];Z=Ab-A7;}break;default:;}if((Dn===3)||(Dn===
4)){var B4=((BJ&0x10)===0x10);var B1=((BJ&0x20)===0x20);var Ep=((BJ&0x2)===0x2);
if(Ep){Z=Ae[1];Ab=Ae[3];}else if(B4&&!B1){Z=Ae[1];Ab=Z+A7;}else if(B1&&!B4){Ab=Ae[
3];Z=Ab-A7;}else{Z=Ae[1]+((((Ae[3]-Ae[1])-A7)/2)|0);Ab=Z+A7;}}if((Dn===1)||(Dn===
2)){var B2=((BJ&0x4)===0x4);var B3=((BJ&0x8)===0x8);var Eo=((BJ&0x1)===0x1);if(Eo
){Y=Ae[0];Aa=Ae[2];}else if(B2&&!B3){Y=Ae[0];Aa=Y+Bh;}else if(B3&&!B2){Aa=Ae[2];
Y=Aa-Bh;}else{Y=Ae[0]+((((Ae[2]-Ae[0])-Bh)/2)|0);Aa=Y+Bh;}}}Ah.isEmpty=(Y>=Aa)||(
Z>=Ab);if(((this.E&0x100)===0x100))this.K=[Y,Z,Aa,Ab];else{this.Aj([Y,Z,Aa,Ab]);
this.AZ=Ah;}return[Aa-Y,Ab-Z];},IS:function(aOffset,I7){if(I7)this.K=B.aam(this.
K,aOffset);else this.Aj(B.aam(this.K,aOffset));},GetExtent:function(){return this.
K;},Aj:function(value){var A;if(B.z9(value,this.K))return;if(!!this.F&&((this.E&
0x1)===0x1))this.F.Ao(this.K);this.AZ=null;this.K=value;if(!!this.F&&((this.E&0x1
)===0x1))this.F.Ao(this.K);if((!!this.F&&((this.E&0x400)===0x400))&&!((this.F.E&
0x2000)===0x2000)){this.E=this.E|0x800;this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.
Ct],this);}},_Init:function(aArg){C.Ax._Init.call(this,aArg);this.__proto__=C.Bj;
},_className:"Core::RectView"};C.I={At:null,Ay:null,JC:null,Bo:null,DL:null,Gw:null
,B$:null,DV:255,Ci:function(aArg){this.B0();},Dc:function(A2,aClip,aOffset,A$,aBlend
){var A;A$=((A$+1)*this.DV)>>8;aBlend=aBlend&&((this.E&0x2)===0x2);this.QD(A2,aClip
,B.aak(aOffset,this.K.slice(0,2)),A$,aBlend);},D8:function(An,T,Cx,DX,DG,E0){var
A;var J=this.Ay;var Gp=null;var N=Bk;var C7=null;var LZ=!!this.DL&&(!!this.DL.C4||
!!this.DL.At);if(((A=B.kz(An,this.K))[0]>=A[2])||(A[1]>=A[3]))return null;An=B.aal(
An,this.K.slice(0,2));if(!!DG){J=DG;while(!!J&&(J.F!==this))J=J.F;}while(!!J){if(((
J.E&0x400)===0x400)&&!C7){C7=J.W;while(!!C7&&!((C7.E&0x200)===0x200))C7=C7.W;if(
!!C7)N=B.kz(An,C7.GetExtent());else N=Bk;}if(C7===J){C7=null;N=Bk;}if((((((J.E&0x8
)===0x8)&&((J.E&0x10)===0x10))&&!((J.E&0x40000)===0x40000))&&!((J.E&0x20000)===0x20000
))&&(!((J.E&0x10000)===0x10000)||((this.Bo.AL===J)&&!LZ))){var CP=J.GetExtent();
var Jt=DX;var Gm=null;if(Jt===J)Jt=null;if(((J.E&0x400)===0x400)){if(!(((A=B.kz(
CP,N))[0]>=A[2])||(A[1]>=A[3])))Gm=J.D8(N,T,Cx,Jt,DG,E0);}else if(!(((A=B.kz(CP,
An))[0]>=A[2])||(A[1]>=A[3]))||(DX===J))Gm=J.D8(An,T,Cx,Jt,DG,E0);J=J.W;if(!!Gm){
if(!Gp||((Gm.Hk<Gp.Hk)&&(Gm.Hk>=0)))Gp=Gm;if(!Gm.Hk)J=null;}}else J=J.W;DG=null;
}return Gp;},IE:function(An){var A;var Cw;var J=this.At;var Ib=Bk;var Ir=true;var
result=(An=Cw=B.aal(An,this.K.slice(0,2)),Cw);while(!!J){if(((J.E&0x200)===0x200
)){var Iq=(C.HG.isPrototypeOf(J)?J:null);Ib=B.kz(An,Iq.K);Ir=((Iq.E&0x1)===0x1);
}if(((J.E&0x1)===0x1)){if(((J.E&0x400)===0x400)){if(Ir){var N=B.kz(J.GetExtent()
,Ib);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=B.vS(result,J.IE(N));}}else{var N=B.
kz(J.GetExtent(),An);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=B.vS(result,J.IE(N)
);}}J=J.O;}return B.kz(B.aam(result,this.K.slice(0,2)),this.K);},A8:function(E1,
Gf){var A;var QN=this.E;C.Bj.A8.call(this,E1,Gf);var FB=this.E^QN;if(!!this.B$&&((
FB&0x40)===0x40)){if(((this.E&0x40)===0x40))this.B$.A8(0x40,0x0);else this.B$.A8(
0x0,0x40);}if(!!this.Bo&&((FB&0x40)===0x40)){if(((this.E&0x40)===0x40)&&((this.Bo.
AL.E&0x14)===0x14))this.Bo.AL.A8(0x40,0x0);else this.Bo.AL.A8(0x0,0x40);}if(!!FB
){this.E=this.E|0x8000;B.ow([this,this.Ct],this);}},Aj:function(value){var A;if(
B.z9(value,this.K))return;var FK=[(A=this.K)[2]-A[0],A[3]-A[1]];var L2=[value[2]-
value[0],value[3]-value[1]];var Hb=!B.z8(FK,L2);C.Bj.Aj.call(this,value);if((Hb&&(
FK[0]>0))&&(FK[1]>0)){var Al=[].concat(Aw,FK);var J=this.At;while(!!J){if((!J.AZ&&(
J.C1!==0x14))&&!((J.E&0x400)===0x400))J.Ih(Al,null);J=J.O;}}if(Hb){this.E=this.E|
0x5000;B.ow([this,this.Ct],this);}},NN:function(Ak){var Nu=(C.KeyEvent.isPrototypeOf(
Ak)?Ak:null);var D2=this.JC;if(!Nu)return null;while(!!D2&&(!D2.AW||!D2.Bi(Nu)))
D2=D2.O;return D2;},QD:function(A2,aClip,aOffset,A$,aBlend){var A;var J=this.At;
var Ib=Bk;var Ir=true;this.Om(A2,aClip,aOffset,A$,aBlend);while(!!J){if(((J.E&0x200
)===0x200)){var Iq=(C.HG.isPrototypeOf(J)?J:null);Ib=B.kz(aClip,B.aam(Iq.K,aOffset
));Ir=((Iq.E&0x1)===0x1);}if(((J.E&0x1)===0x1)){if(((J.E&0x400)===0x400)){if(Ir){
var N=B.kz(B.aam(J.GetExtent(),aOffset),Ib);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.Dc(
A2,N,aOffset,A$,aBlend);}}else{var N=B.kz(B.aam(J.GetExtent(),aOffset),aClip);if(
!((N[0]>=N[2])||(N[1]>=N[3])))J.Dc(A2,N,aOffset,A$,aBlend);}}J=J.O;}this.Oo(A2,aClip
,aOffset,A$,aBlend);},Q1:function(){var A;var LP=((this.E&0x1000)===0x1000);var E8=[
0,0,(A=this.K)[2]-A[0],A[3]-A[1]];var ED=false;var G5=Bk;var LN=Bk;var J=this.Ay;
var C7=null;while(!!J){if(((J.E&0x800)===0x800)){ED=true;J.E=J.E&~0x800;}if(ED&&((
J.E&0x200)===0x200))ED=false;J=J.W;}ED=false;J=this.At;if(LP){this.E=this.E&~0x1000;
LP=!((E8[0]>=E8[2])||(E8[1]>=E8[3]));}this.E=this.E|0x2000;while(!!J){if(((J.E&0x400
)===0x400)){if(!!J.AZ&&(J.AZ.Gu!==C7))J.AZ=null;if((!J.AZ&&ED)&&(J.C1!==0x14))J.
Ih(LN,C7);}if(!!J.AZ){if(LP&&!((J.E&0x400)===0x400))J.IG(E8,0);if(ED&&((J.E&0x400
)===0x400))J.IG(LN,0);}if(((J.E&0x200)===0x200)){ED=((J.E&0x1000)===0x1000);C7=(
C.HG.isPrototypeOf(J)?J:null);if(ED){J.E=J.E&~0x1000;G5=C7.K;LN=G5;ED=!((G5[0]>=
G5[2])||(G5[1]>=G5[3]));}if(ED)this.Ao(C7.K);}J=J.O;}this.E=this.E&~0x2000;this.
M0([E8[2]-E8[0],E8[3]-E8[1]]);},Ct:function(Ag){var A;var Rc=((this.E&0x1000)===
0x1000);if(((this.E&0x4000)===0x4000)){this.E=this.E&~0x4000;this.Q1();}if(((this.
E&0x8000)===0x8000)||Rc){this.E=this.E&~0x8000;this.Fx(this.E);}},CH:function(value
){var A;if(!!value&&(value.F!==this))throw new Error(Dm);if(!!value&&!((value.E&
0x14)===0x14))value=null;if(!!value&&((value.E&0x10000)===0x10000))value=null;if(
value===this.B$)return;if(!!this.B$)this.B$.A8(0x0,0x60);this.B$=value;if(!!value
){if(((this.E&0x40)===0x40))value.A8(0x60,0x0);else value.A8(0x20,0x0);}},OK:function(
){return false;},AS:function(value){if(value)this.A8(0x10,0x0);else this.A8(0x0,
0x10);},F_:function(value){var A;if(value>255)value=255;if(value<0)value=0;if(value===
this.DV)return;this.DV=value;if(!!this.F&&((this.E&0x1)===0x1))this.F.Ao(this.K);
},Qm:function(Rd){this.F_(Rd);},GI:function(){var A;return((this.E&0x1)===0x1);}
,Et:function(value){if(value)this.A8(0x1,0x0);else this.A8(0x0,0x1);},Oo:function(
A2,aClip,aOffset,A$,aBlend){},Om:function(A2,aClip,aOffset,A$,aBlend){},GetMinimalSize:
function(){return Aw;},KT:function(Bv,CL,Ed,DD,DF,Gi,Dg,DE,Cn,Cl,Cm){var A;if(!this.
Bo){this.MW(Bv,CL,Ed,DD,DF,null,null,Cn,Cl,Cm);return;}var FJ=this.Bo;var BP=FJ.
O;if(((Bv.E&0x10000)===0x10000)&&(this.Bo.AL!==Bv))throw new Error(Ec);var El=B.
_NewObject(C.J6,0);var C6=FJ.C6;var Da=null;var BY=null;if(!!BP){Da=BP.Da;BY=BP.
BY;}if(!!BP&&!!FJ.Gv)Da=FJ.Gv;if(!!BP&&!!Dg)BY=Dg;if(!!Gi)C6=Gi;if(!CL)CL=B._GetAutoObject(
B.abj.HK);if(!Ed)Ed=CL;if(!DF)DF=DD;if(!DD)DD=DF;El.C6=Ed;El.BY=DD;El.Da=DF;El.Gv=
DE;El.AL=Bv;El.O=this.Bo.O;this.Bo.O=null;this.Bo=El;if(this.B$===Bv)this.CH(null
);FJ.AL.A8(0x0,0x10040);if(((this.E&0x40)===0x40)&&((Bv.E&0x4)===0x4))Bv.A8(0x10040
,0x0);else Bv.A8(0x10000,0x0);if(!!BY){this.Cu(BP.AL,BY.GD(),null,null,Cm);this.
Cu(FJ.AL,C6.EI(),null,null,true);this.Cu(El.AL,CL.EJ(),Cn,Cl,true);}else if(!!Da
){this.Cu(BP.AL,Da.GE(),null,null,Cm);this.Cu(FJ.AL,C6.EI(),null,null,true);this.
Cu(El.AL,CL.EJ(),Cn,Cl,true);}else if(!!C6){this.Cu(FJ.AL,C6.EI(),null,null,Cm);
this.Cu(El.AL,CL.EJ(),Cn,Cl,true);}else this.Cu(El.AL,CL.EJ(),Cn,Cl,Cm);},J7:function(
Bv,Gi,Dg,DE,Cn,Cl,Cm){var A;if(!this.Bo)return;if(!Bv)return;var BI=this.Bo;var BP=
this.Bo.O;var G_=null;while((!!BI&&(BI.AL!==Bv))&&!!BI.O){G_=BI;BI=BP;BP=BI.O;}if(
!BI||(BI.AL!==Bv))throw new Error(EZ);if(!G_){this.Bo=BP;BI.O=null;}else{G_.O=BP;
BI.O=null;}BI.AL.A8(0x0,0x10040);if(((((this.E&0x40)===0x40)&&!!BP)&&!G_)&&((BP.
AL.E&0x4)===0x4))BP.AL.A8(0x40,0x0);var C6=BI.C6;var Da=null;var BY=null;if(!!BP
)Da=BP.Da;if(!!BP&&!!BI.Gv)Da=BI.Gv;if(!!BP&&!!DE)Da=DE;if(!!G_&&!!BP)BY=BP.BY;if((
!!G_&&!!BP)&&!!Dg)BY=Dg;if(!!Gi)C6=Gi;if(!!BY){this.Cu(BP.AL,BY.GD(),null,null,Cm
);this.Cu(BI.AL,C6.EI(),Cn,Cl,true);}else if(!!Da){this.Cu(BP.AL,Da.GE(),null,null
,Cm);this.Cu(BI.AL,C6.EI(),Cn,Cl,true);}else this.Cu(BI.AL,C6.EI(),Cn,Cl,Cm);},MW:
function(Bv,CL,Ed,DD,DF,Dg,DE,Cn,Cl,Cm){var A;if(!Bv)return;if(!!this.Bo&&(this.
Bo.AL===Bv)){this.KT(Bv,CL,Ed,DD,DF,null,Dg,DE,Cn,Cl,Cm);return;}if(((Bv.E&0x10000
)===0x10000))throw new Error(Ec);var BI=B._NewObject(C.J6,0);if(!!this.Bo&&!this.
Bo.BY){if(!DE)DE=Dg;if(!Dg)Dg=DE;}var BY=null;if(!!this.Bo)BY=this.Bo.BY;if(!!this.
Bo&&!!Dg)BY=Dg;if(!CL)CL=B._GetAutoObject(B.abj.HK);if(!Ed)Ed=CL;if(!DF)DF=DD;if(
!DD)DD=DF;BI.C6=Ed;BI.BY=DD;BI.Da=DF;BI.Gv=DE;if(this.B$===Bv)this.CH(null);if(!
!this.Bo)this.Bo.AL.A8(0x0,0x40);if(((this.E&0x40)===0x40)&&((Bv.E&0x4)===0x4))Bv.
A8(0x10040,0x0);else Bv.A8(0x10000,0x0);BI.AL=Bv;BI.O=this.Bo;this.Bo=BI;if(!!BY
){this.Cu(this.Bo.O.AL,BY.GD(),null,null,Cm);this.Cu(Bv,CL.EJ(),Cn,Cl,true);}else
this.Cu(Bv,CL.EJ(),Cn,Cl,Cm);},Mv:function(Ef){var tmp=this;while(!!tmp){Ef=B.aaj(
Ef,tmp.K.slice(0,2));tmp=tmp.F;}return Ef;},DispatchEvent:function(Ak){var A;var
J=this.B$;var Ai=(C.I.isPrototypeOf(J)?J:null);var Bf=null;var LZ=!!this.DL&&(!!
this.DL.C4||!!this.DL.At);if(!!J&&((((J.E&0x10000)===0x10000)||((J.E&0x40000)===
0x40000))||((J.E&0x20000)===0x20000))){J=null;Ai=null;}if(!!this.Bo&&!LZ)Bf=this.
Bo.AL.DispatchEvent(Ak);if(!Bf&&!!Ai)Bf=Ai.DispatchEvent(Ak);else if(!Bf&&!!J)Bf=
J.Bi(Ak);if(!Bf)Bf=this.Bi(Ak);if(!Bf)Bf=this.NN(Ak);return Bf;},BroadcastEventAtPosition:
function(Ak,M7,aFilter){var A;var J=this.Ay;var Bf=null;while(!!J&&!Bf){if((!aFilter||((
A=aFilter)&&((J.E&A)===A)))&&B.vt(J.GetExtent(),M7)){var Ai=(C.I.isPrototypeOf(J
)?J:null);if(!!Ai)Bf=Ai.BroadcastEventAtPosition(Ak,B.aaj(M7,Ai.K.slice(0,2)),aFilter
);else Bf=J.Bi(Ak);}J=J.W;}if(!Bf)Bf=this.Bi(Ak);return Bf;},BroadcastEvent:function(
Ak,aFilter){var A;var J=this.Ay;var Bf=null;while(!!J&&!Bf){if(!aFilter||((A=aFilter
)&&((J.E&A)===A))){var Ai=(C.I.isPrototypeOf(J)?J:null);if(!!Ai)Bf=Ai.BroadcastEvent(
Ak,aFilter);else Bf=J.Bi(Ak);}J=J.W;}if(!Bf)Bf=this.Bi(Ak);if(!Bf)Bf=this.NN(Ak);
return Bf;},M0:function(aSize){},Fx:function(D1){},B0:function(){this.E=this.E|0x8000;
B.ow([this,this.Ct],this);},Ao:function(An){var A;var Ai=this;while(!!Ai&&!((An[
0]>=An[2])||(An[1]>=An[3]))){if(!Ai.F&&(Ai!==this)){Ai.Ao(An);return;}if(!((Ai.E&
0x1)===0x1))return;An=B.kz(B.aam(An,Ai.K.slice(0,2)),Ai.K);Ai=Ai.F;}},Kg:function(
Q,aFilter){var A;if(!Q||(Q.F!==this))return null;var FI=Q.O;var FL=Q.W;var Ip=0x10000;
if(((aFilter&0x10000)===0x10000))Ip=0x0;while(!!FI||!!FL){if((!!FI&&(!aFilter||((
A=aFilter)&&((FI.E&A)===A))))&&(!Ip||!((A=Ip)&&((FI.E&A)===A))))return FI;if((!!
FL&&(!aFilter||((A=aFilter)&&((FL.E&A)===A))))&&(!Ip||!((A=Ip)&&((FL.E&A)===A)))
)return FL;if(!!FI)FI=FI.O;if(!!FL)FL=FL.W;}return null;},Cu:function(Ee,AN,Cn,Cl
,Cm){var A;if(!Ee)return;if(!AN)throw new Error(Gc);if((!!AN.I||!!AN.F)||!!AN.Ds
)throw new Error(Gd);if(!!Ee.F&&(Ee.F!==this))throw new Error(GY);if(!this.DL)this.
DL=B._NewObject(C.MZ,0);AN.F=this;AN.I=Ee;AN.JF=Cl;AN.L4=Cn;if(!!Ee.Gw)Ee.Gw.Ds.
PZ(Ee.Gw);Ee.Gw=AN;Ee.E=Ee.E|0x20000;if((Cm&&!!this.DL.Ay)&&!this.DL.Ay.Kr())(B.
abj.IL.isPrototypeOf(A=this.DL.Ay)?A:null).Mh(AN);else{var Ds=B._NewObject(B.abj.
IL,0);Ds.Mh(AN);this.DL.P4(Ds,false);}},EW:function(Q){var A;if(!Q)throw new Error(
H3);if(Q.F!==this)throw new Error(H4);if(!Q.O)return;var G1=this.Ay;if(((G1===Q)||
!G1)||(G1.O===Q))return;if(((Q.E&0x401)===0x401)){if(!!Q.W&&!!Q.AZ)Q.W.E=Q.W.E|0x800;
Q.E=Q.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Ct],this);}if(((Q.E&0x200)===
0x200)){if(!!Q.W)Q.W.E=Q.W.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Ct],this
);}if(!!Q.W)Q.W.O=Q.O;else this.At=Q.O;Q.O.W=Q.W;Q.W=G1;Q.O=G1.O;G1.O=Q;if(!!Q.O
)Q.O.W=Q;else this.Ay=Q;if(((Q.E&0x1)===0x1))this.Ao(Q.GetExtent());},EU:function(
Q){var A;if(!Q)throw new Error(Li);if(Q.F!==this)throw new Error(H4);if((((Q.E&0x401
)===0x401)&&!!Q.W)&&!!Q.AZ){Q.W.E=Q.W.E|0x800;this.E=this.E|0x4000;B.ow([this,this.
Ct],this);}if(((Q.E&0x200)===0x200)){if(!!Q.W)Q.W.E=Q.W.E|0x800;this.E=this.E|0x4000;
B.ow([this,this.Ct],this);}Q.AZ=null;if(this.B$===Q)this.CH(this.Kg(Q,0x14));if(
!!Q.W)Q.W.O=Q.O;if(!!Q.O)Q.O.W=Q.W;if(this.At===Q)this.At=Q.O;if(this.Ay===Q)this.
Ay=Q.W;Q.F=null;Q.O=null;Q.W=null;if(((Q.E&0x1)===0x1))this.Ao(Q.GetExtent());},
AV:function(Q,Gh){var A;if(!Q)throw new Error(I5);if(!!Q.F)throw new Error(Lj);var
E2=null;if((Gh<0)&&!!this.Ay){E2=this.Ay;Gh=Gh+1;}while(((Gh<0)&&!!E2)&&!!E2.W){
E2=E2.W;Gh=Gh+1;}if(!E2){Q.F=this;Q.W=this.Ay;if(!!this.Ay)this.Ay.O=Q;if(!this.
At)this.At=Q;this.Ay=Q;}else{Q.F=this;Q.W=E2.W;Q.O=E2;E2.W=Q;if(!!Q.W)Q.W.O=Q;else
this.At=Q;}if(((Q.E&0x1)===0x1))this.Ao(Q.GetExtent());if(((!this.B$&&((Q.E&0x4)===
0x4))&&((Q.E&0x10)===0x10))&&!((Q.E&0x10000)===0x10000))this.CH(Q);if(((Q.E&0x401
)===0x401)){Q.E=Q.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Ct],this);}if(((Q.
E&0x200)===0x200)){Q.E=Q.E|0x800;this.E=this.E|0x4000;B.ow([this,this.Ct],this);
}},OL:function(){return this.DV;},_Init:function(aArg){C.Bj._Init.call(this,aArg
);this.__proto__=C.I;this.E=0x1F;this.Ci(aArg);},_Mark:function(D){var A;C.Bj._Mark.
call(this,D);if((A=this.At)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ay)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.JC)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Bo)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DL)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Gw)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
B$)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={C$:null
,Ba:B.aan(10,null,null),G2:null,E5:null,IC:0,Bn:0,B5:B.aan(10,0,null),Js:B.aan(10
,B.vx,null),DK:B.aan(10,0,null),Ey:B.aan(10,B.vw,null),G4:B.aan(10,0,null),E4:B.
aan(10,B.vw,null),DJ:B.aan(10,B.vw,null),C5:B.aan(10,B.vw,null),Eg:B.aan(10,B.vw
,null),AE:0,Jx:0,Jw:0,Cr:B.aan(4,0,null),BE:B.aan(4,B.vx,null),BD:0,Im:0,G9:0,LQ:
true,Ci:function(aArg){if(!!!this.Ac){var obj=this;B.aaG(obj);}},EN:function(){return this;
},Dc:function(A2,aClip,aOffset,A$,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
B.mr;if(!fullScreenUpdate)A2.Kf(aClip,B.aam(B.aam(aClip,aOffset),this.K.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.I.Dc.call(this,A2,aClip
,aOffset,A$,aBlend);},A8:function(E1,Gf){var A;C.I.A8.call(this,E1,Gf);if(!this.
F&&(((E1&0x1)===0x1)||((Gf&0x1)===0x1)))this.Ao([0,0,(A=this.K)[2]-A[0],A[3]-A[1
]]);if(!this.F&&(((E1&0x2)===0x2)||((Gf&0x2)===0x2)))this.Ao([0,0,(A=this.K)[2]-
A[0],A[3]-A[1]]);},CH:function(value){if((value!==null)||!value)C.I.CH.call(this
,value);},F_:function(value){var A;var CR=this.DV;C.I.F_.call(this,value);if(((CR
!==this.DV)&&!this.F)&&((this.E&0x1)===0x1))this.Ao([0,0,(A=this.K)[2]-A[0],A[3]-
A[1]]);},DispatchEvent:function(Ak){if(!!Ak){Ak.Hv=!!this.Bn;if(!!this.Bn)Ak.Ar=
this.Bn;}var Bf;Bf=C.I.DispatchEvent.call(this,Ak);this.Bn=0;return Bf;},BroadcastEvent:
function(Ak,aFilter){if(!!Ak){Ak.Hv=!!this.Bn;if(!!this.Bn)Ak.Ar=this.Bn;}var Bf=
C.I.BroadcastEvent.call(this,Ak,aFilter);this.Bn=0;return Bf;},Ao:function(An){var
A;if(this.IC>0)throw new Error(Lk);var fullScreenUpdate=false;fullScreenUpdate=B.
mr;if(fullScreenUpdate)An=[0,0,(A=this.K)[2]-A[0],A[3]-A[1]];if(!!this.F){C.I.Ao.
call(this,An);return;}An=B.kz(B.aam(An,this.K.slice(0,2)),this.K);if((An[0]>=An[
2])||(An[1]>=An[3]))return;var G;for(G=0;G<this.BD;G=G+1)if(!(((A=B.kz(this.BE.Get(
G),An))[0]>=A[2])||(A[1]>=A[3]))){this.BE.Set(G,B.vS(this.BE.Get(G),An));this.Cr.
Set(G,B.zS(this.BE.Get(G)));return;}if(this.BD<3){this.BE.Set(this.BD,An);this.Cr.
Set(this.BD,B.zS(An));this.BD=this.BD+1;return;}var Bg;var C_;var Il=0;var In=0;
var Nc=2147483647;this.BE.Set(this.BD,An);this.Cr.Set(this.BD,B.zS(An));for(Bg=0;
Bg<=this.BD;Bg=Bg+1)for(C_=Bg+1;C_<=this.BD;C_=C_+1){var J0=B.zS(B.vS(this.BE.Get(
Bg),this.BE.Get(C_)));var NM=((J0<<8)/(this.Cr.Get(Bg)+this.Cr.Get(C_)))|0;if(NM<
Nc){Nc=NM;Il=Bg;In=C_;}}this.BE.Set(Il,B.vS(this.BE.Get(Il),this.BE.Get(In)));this.
Cr.Set(Il,B.zS(this.BE.Get(Il)));if(In!==this.BD){this.BE.Set(In,this.BE.Get(this.
BD));this.Cr.Set(In,this.Cr.Get(this.BD));}},QA:function(){var B7=B._NewObject(C.
GF,0);B7.Hv=!!this.Bn;if(!!this.Bn)B7.Ar=this.Bn;return B7;},Gl:function(){var B7=
B._NewObject(C.DT,0);B7.Hv=!!this.Bn;if(!!this.Bn)B7.Ar=this.Bn;return B7;},G3:function(
){var B7=B._NewObject(C.Hi,0);B7.Hv=!!this.Bn;if(!!this.Bn)B7.Ar=this.Bn;return B7;
},QB:function(Ag){var G;var Gp=false;for(G=0;G<10;G=G+1)if(!!this.Ba.Get(G)){var
U=this.C5.Get(G);var Ai=this.Ba.Get(G).F;while(!!Ai&&(Ai!==this)){U=B.aaj(U,Ai.K.
slice(0,2));Ai=Ai.F;}if(!Ai&&(this.Ba.Get(G)!==this)){var tmp=this.Ba.Get(G);this.
AE=G;this.Ba.Set(G,null);tmp.Bi(this.Gl().InitializeUp(G,this.E4.Get(G),this.Ey.
Get(G),this.DK.Get(G),this.B5.Get(G)+1,this.DJ.Get(G),false,this.C5.Get(G),this.
Eg.Get(G)));this.BroadcastEvent(this.G3().InitializeUp(G,this.B5.Get(G)+1,false,
tmp,this.C5.Get(G)),0x18);}else{this.DK.Set(G,(this.E5.Ar-this.G4.Get(G))|0);if(
this.DK.Get(G)<10)this.DK.Set(G,10);this.AE=G;this.Ba.Get(G).Bi(this.Gl().InitializeHold(
G,U,this.Ey.Get(G),this.DK.Get(G),this.B5.Get(G)+1,this.DJ.Get(G),this.C5.Get(G)
,this.Eg.Get(G)));Gp=true;}}if(!Gp)this.E5.AS(false);},GetFPS:function(){var ticksCount=
0;var Np=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.Jx&&(ticksCount>this.
Jx))Np=((this.Jw*1000)/((ticksCount-this.Jx)|0))|0;this.Jw=0;this.Jx=ticksCount;
return Np;},Update:function(){var A;if(!this.G2)this.G2=B._NewObject(B.Graphics.
Canvas,0);this.G2.MJ([(A=this.K)[2]-A[0],A[3]-A[1]]);this.G2.Update();return this.
UpdateGE20(this.G2);},UpdateGE20:function(A2){if(!this.BeginUpdate())return Bk;var
EG=this.UpdateCanvas(A2,Aw);this.EndUpdate();return EG;},EndUpdate:function(){if(
this.BD>0){this.Jw=this.Jw+1;this.BD=0;}},UpdateCanvas:function(A2,aOffset){var A;
var EG=Bk;var Qu=[].concat(aOffset,B.aak(A2.FrameSize,aOffset));var G;var Bg=this.
BD;this.IC=this.IC+1;A2.AL=this;for(G=0;(G<Bg)&&(G<4);G=G+1)if(this.Cr.Get(G)>0){
this.Dc(A2,B.aal(this.BE.Get(G),aOffset),[-aOffset[0],-aOffset[1]],255,true);EG=
B.vS(EG,B.kz(Qu,this.BE.Get(G)));}else Bg=Bg+1;A2.AL=null;this.IC=this.IC-1;if(!((
EG[0]>=EG[2])||(EG[1]>=EG[3])))return B.aal(EG,aOffset);else return EG;},GetUpdateRegion:
function(I$){var G;var Bg=this.BD;if(I$<0)return Bk;for(G=0;(G<Bg)&&(G<4);G=G+1)
if(!this.Cr.Get(G)){Bg=Bg+1;I$=I$+1;}else if(G===I$)return this.BE.Get(G);return Bk;
},BeginUpdate:function(){var A;var G;if(!!this.BD&&!B.z9(this.BE.Get(0),[0,0,(A=
this.K)[2]-A[0],A[3]-A[1]])){var N4=B.aan(3,B.vx,null);var N3=this.BD;for(G=0;G<
N3;G++)N4.Set(G,this.BE.Get(G));for(G=0;G<N3;G++){var NO=B.aam(N4.Get(G),this.K.
slice(0,2));var NP=this.IE(NO);if(!B.z9(NO,NP))this.Ao(B.aal(NP,this.K.slice(0,2
)));}}var Bg;var C_;for(Bg=0;Bg<(this.BD-1);Bg++)if(this.Cr.Get(Bg)>0)for(C_=Bg+
1;C_<this.BD;C_++)if(this.Cr.Get(C_)>0){var J0=B.zS(B.vS(this.BE.Get(Bg),this.BE.
Get(C_)));if(((J0-this.Cr.Get(Bg))-this.Cr.Get(C_))<0){this.BE.Set(Bg,B.vS(this.
BE.Get(Bg),this.BE.Get(C_)));this.Cr.Set(Bg,J0);this.Cr.Set(C_,0);}}for(G=this.BD-
1;G>=0;G--)if(!this.Cr.Get(G))this.BD=this.BD-1;return this.BD;},DoesNeedUpdate:
function(){if(this.BD>0)return true;return false;},Initialize:function(aSize){this.
Aj([].concat(Aw,aSize));if(this.LQ)this.E=this.E|0x60;else this.E=this.E|0x20;this.
Ao(this.K);return this;},SetRootFocus:function(LA){if(LA===this.LQ)return false;
this.LQ=LA;if(!LA)this.A8(0x0,0x40);else this.A8(0x40,0x0);return true;},SetUserInputTimestamp:
function(Qq){this.Bn=Qq;},DriveKeyboardHitting:function(BG,H7,DY){var A;var Ma=!
!this.C$;if(!!this.C$&&((!DY||(this.Im!==BG))||(this.G9!==H7))){var B7=null;var J=(
C.Ax.isPrototypeOf(A=this.C$)?A:null);var D2=(C.FX.isPrototypeOf(A=this.C$)?A:null
);if(!!this.Im)B7=B._NewObject(C.KeyEvent,0).Initialize(this.Im,false);if(this.G9
!==0x00)B7=B._NewObject(C.KeyEvent,0).Initialize2(this.G9,false);if(!!D2)D2.Bi(B7
);else if(!!J)J.Bi(B7);this.Im=0;this.G9=0x00;this.C$=null;}if(!!this.C$){var B7=
null;var J=(C.Ax.isPrototypeOf(A=this.C$)?A:null);var D2=(C.FX.isPrototypeOf(A=this.
C$)?A:null);if(!!BG)B7=B._NewObject(C.KeyEvent,0).Initialize(BG,true);if(this.G9
!==0x00)B7=B._NewObject(C.KeyEvent,0).Initialize2(H7,true);if(!!D2)D2.Bi(B7);else
if(!!J)J.Bi(B7);}if(!this.C$&&DY){if(!!BG)this.C$=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize(BG,true));if(H7!==0x00)this.C$=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize2(H7,true));if(!(C.FX.isPrototypeOf(A=this.C$)?A:null)&&
!(C.Ax.isPrototypeOf(A=this.C$)?A:null))this.C$=null;this.Im=BG;this.G9=H7;Ma=Ma||
!!this.C$;}this.Bn=0;return Ma;},DriveCursorMovement:function(Bl){return this.DriveMultiTouchMovement(
this.AE,Bl);},DriveMultiTouchMovement:function(T,Bl){if((T<0)||(T>9)){this.Bn=0;
return false;}var AR=B.aaj(Bl,this.C5.Get(T));this.C5.Set(T,Bl);if(!this.Ba.Get(
T)||B.z8(AR,Aw)){this.Bn=0;return false;}var U=Bl;var Ai=this.Ba.Get(T).F;while(
!!Ai&&(Ai!==this)){U=B.aaj(U,Ai.K.slice(0,2));Ai=Ai.F;}if(!Ai&&(this.Ba.Get(T)!==
this)){var tmp=this.Ba.Get(T);this.AE=T;this.Ba.Set(T,null);tmp.Bi(this.Gl().InitializeUp(
T,this.E4.Get(T),this.Ey.Get(T),this.DK.Get(T),this.B5.Get(T)+1,this.DJ.Get(T),false
,this.C5.Get(T),this.Eg.Get(T)));this.BroadcastEvent(this.G3().InitializeUp(T,this.
B5.Get(T)+1,false,tmp,Bl),0x18);}else{this.E4.Set(T,U);this.AE=T;this.Ba.Get(T).
Bi(this.QA().Initialize(T,U,this.Ey.Get(T),AR,this.DK.Get(T),this.B5.Get(T)+1,this.
DJ.Get(T),Bl,this.Eg.Get(T)));}this.Bn=0;return true;},DriveCursorHitting:function(
DY,T,Bl){return this.DriveMultiTouchHitting(DY,T,Bl);},DriveMultiTouchHitting:function(
DY,T,Bl){if((T<0)||(T>9)){this.Bn=0;return false;}var ticksCount=this.Bn;if(!ticksCount
)ticksCount=((new Date).getTime()-B.vs)|0;var Q6=this.Bn;this.DriveMultiTouchMovement(
T,Bl);Bl=this.C5.Get(T);this.Bn=Q6;if(DY)this.Eg.Set(T,Bl);if(DY&&!this.Ba.Get(T
)){var Bu;var U=Bl;if(B.vt(this.Js.Get(T),Bl)&&((ticksCount-this.G4.Get(T))<=250
))this.B5.Set(T,this.B5.Get(T)+1);else this.B5.Set(T,0);this.Js.Set(T,B.aam(H5,Bl
));this.G4.Set(T,ticksCount);Bu=this.D8(B.aam(H5,Bl),T,this.B5.Get(T)+1,null,null
,0x0);if(!!Bu){this.BroadcastEvent(this.G3().InitializeDown(T,this.B5.Get(T)+1,false
,Bu.Ax,Bl),0x18);this.Ba.Set(T,Bu.Ax);this.DJ.Set(T,Bu.AC);}else{this.Ba.Set(T,null
);this.DJ.Set(T,Aw);this.Bn=0;return false;}var Ai=Bu.Ax.F;while(!!Ai&&(Ai!==this
)){U=B.aaj(U,Ai.K.slice(0,2));Ai=Ai.F;}this.Ey.Set(T,U);this.E4.Set(T,U);this.DK.
Set(T,0);this.E5.AS(true);this.AE=T;this.Ba.Get(T).Bi(this.Gl().InitializeDown(T
,U,this.B5.Get(T)+1,this.DJ.Get(T),false,Bl));this.Bn=0;return true;}if(!DY&&!!this.
Ba.Get(T)){var U=Bl;var Ai=this.Ba.Get(T).F;while(!!Ai&&(Ai!==this)){U=B.aaj(U,Ai.
K.slice(0,2));Ai=Ai.F;}if(!Ai)U=this.E4.Get(T);this.AE=T;var tmp=this.Ba.Get(T);
this.Ba.Set(T,null);tmp.Bi(this.Gl().InitializeUp(T,U,this.Ey.Get(T),this.DK.Get(
T),this.B5.Get(T)+1,this.DJ.Get(T),false,Bl,this.Eg.Get(T)));this.BroadcastEvent(
this.G3().InitializeUp(T,this.B5.Get(T)+1,false,tmp,Bl),0x18);this.Bn=0;return true;
}this.Bn=0;return false;},HI:function(D0,I6,DG,E0){if(D0===this)D0=null;if(!this.
Ba.Get(this.AE))return;var Bu;Bu=this.D8(B.aam(H5,this.C5.Get(this.AE)),this.AE,
1,D0,DG,E0);if(!!Bu&&(this.Ba.Get(this.AE)!==Bu.Ax))this.Ml(Bu.Ax,Bu.AC);if(!Bu&&(
this.Ba.Get(this.AE)!==I6))this.Ml(I6,Aw);},P0:function(D0,I6,DG){this.HI(D0,I6,
DG,0x0);},Ml:function(D0,DB){if(!this.Ba.Get(this.AE)||(this.Ba.Get(this.AE)===D0
))return;var tmp=this.Ba.Get(this.AE);this.Ba.Set(this.AE,null);tmp.Bi(this.Gl().
InitializeUp(this.AE,this.E4.Get(this.AE),this.Ey.Get(this.AE),this.DK.Get(this.
AE),this.B5.Get(this.AE)+1,this.DJ.Get(this.AE),true,this.C5.Get(this.AE),this.Eg.
Get(this.AE)));this.BroadcastEvent(this.G3().InitializeUp(this.AE,this.B5.Get(this.
AE)+1,true,tmp,this.C5.Get(this.AE)),0x18);var U=this.C5.Get(this.AE);var Ai=null;
if(!!D0)Ai=D0.F;while(!!Ai&&(Ai!==this)){U=B.aaj(U,Ai.K.slice(0,2));Ai=Ai.F;}if(
!Ai&&(D0!==this)){this.Ba.Set(this.AE,null);return;}this.BroadcastEvent(this.G3(
).InitializeDown(this.AE,this.B5.Get(this.AE)+1,true,D0,this.C5.Get(this.AE)),0x18
);var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;this.Ba.Set(this.AE,
D0);this.DJ.Set(this.AE,DB);this.Ey.Set(this.AE,U);this.E4.Set(this.AE,U);this.B5.
Set(this.AE,0);this.DK.Set(this.AE,0);this.G4.Set(this.AE,ticksCount);this.Eg.Set(
this.AE,this.C5.Get(this.AE));this.Ba.Get(this.AE).Bi(this.Gl().InitializeDown(this.
AE,U,this.B5.Get(this.AE)+1,this.DJ.Get(this.AE),true,this.Eg.Get(this.AE)));},_Init:
function(aArg){C.I._Init.call(this,aArg);C.Timer._Init.call(this.E5={Ac:this},0);(
this.Ba=[]).__proto__=C.Root.Ba;(this.B5=[]).__proto__=C.Root.B5;(this.Js=[]).__proto__=
C.Root.Js;(this.DK=[]).__proto__=C.Root.DK;(this.Ey=[]).__proto__=C.Root.Ey;(this.
G4=[]).__proto__=C.Root.G4;(this.E4=[]).__proto__=C.Root.E4;(this.DJ=[]).__proto__=
C.Root.DJ;(this.C5=[]).__proto__=C.Root.C5;(this.Eg=[]).__proto__=C.Root.Eg;(this.
Cr=[]).__proto__=C.Root.Cr;(this.BE=[]).__proto__=C.Root.BE;this.__proto__=C.Root;
this.E=0x7F;this.E5.HC(10);this.E5.HE=[this,this.QB];this.Ci(aArg);},_Done:function(
){this.__proto__=C.I;this.E5._Done();C.I._Done.call(this);},_ReInit:function(){C.
I._ReInit.call(this);this.E5._ReInit();},_Mark:function(D){var A;C.I._Mark.call(
this,D);if((A=this.C$)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aaf(this.Ba,D);if((A=
this.G2)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.E5)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Core::Root"};C.Event={Ar:0,Hv:false,Ci:function(aArg){this.Ar=this.
Hr();},Hr:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=C.Event;this.Ci(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null
,_className:"Core::Event"};C.KeyEvent={Bx:0,AM:0,Down:false,Initialize2:function(
BG,DY){this.Bx=0;this.AM=BG;this.Down=DY;if((BG>=0x30)&&(BG<=0x39))this.Bx=(10+BG
)-48;if((BG>=0x41)&&(BG<=0x5A))this.Bx=(105+BG)-65;if((BG>=0x61)&&(BG<=0x7A))this.
Bx=(105+BG)-97;if(BG===0x20)this.Bx=131;if(!this.Bx)switch(BG){case 0x2B:this.Bx=
132;break;case 0x2D:this.Bx=133;break;case 0x2A:this.Bx=134;break;case 0x2F:this.
Bx=135;break;case 0x3D:this.Bx=136;break;case 0x2E:this.Bx=137;break;case 0x2C:this.
Bx=138;break;case 0x3A:this.Bx=139;break;case 0x3B:this.Bx=140;break;default:;}return this;
},Initialize:function(BG,DY){this.Bx=BG;this.Down=DY;this.AM=0x00;var LH=BG-10;var
LG=BG-105;if((LH>=0)&&(LH<=9))this.AM=(48+LH)&0xFFFF;if((LG>=0)&&(LG<=25))this.AM=(
65+LG)&0xFFFF;if(BG===131)this.AM=0x20;if(this.AM===0x00)switch(BG){case 132:this.
AM=0x2B;break;case 133:this.AM=0x2D;break;case 134:this.AM=0x2A;break;case 135:this.
AM=0x2F;break;case 136:this.AM=0x3D;break;case 137:this.AM=0x2E;break;case 138:this.
AM=0x2C;break;case 139:this.AM=0x3A;break;case 140:this.AM=0x3B;break;default:;}
return this;},Ox:function(M4){switch(M4){case 141:return((this.AM>=0x41)&&(this.
AM<=0x5A))||((this.AM>=0x61)&&(this.AM<=0x7A));case 142:return(((this.AM>=0x41)&&(
this.AM<=0x5A))||((this.AM>=0x61)&&(this.AM<=0x7A)))||((this.AM>=0x30)&&(this.AM<=
0x39));case 143:return(this.AM>=0x30)&&(this.AM<=0x39);case 144:return(((this.AM>=
0x41)&&(this.AM<=0x46))||((this.AM>=0x61)&&(this.AM<=0x66)))||((this.AM>=0x30)&&(
this.AM<=0x39));case 145:return this.AM!==0x00;case 146:return(this.AM===0x00)&&
!!this.Bx;case 147:return(((this.Bx===6)||(this.Bx===7))||(this.Bx===4))||(this.
Bx===5);case 148:return(this.AM!==0x00)||!!this.Bx;default:;}return M4===this.Bx;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;}
,_className:"Core::KeyEvent"};C.Hi={HN:null,Bz:B.vw,BU:0,A0:0,Down:false,BZ:false
,InitializeUp:function(T,Cx,Ge,LC,DZ){this.Down=false;this.A0=T;this.BU=Cx;this.
Bz=DZ;this.HN=LC;this.BZ=Ge;return this;},InitializeDown:function(T,Cx,Ge,LC,DZ){
this.Down=true;this.A0=T;this.BU=Cx;this.Bz=DZ;this.HN=LC;this.BZ=Ge;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Hi;},_Mark:
function(D){var A;C.Event._Mark.call(this,D);if((A=this.HN)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::CursorGrabEvent"};C.DT={EO:B.vw,Bz:B.vw,BU:0,BL:
0,BQ:B.vw,Bs:B.vw,A0:0,Down:false,BZ:false,InitializeHold:function(T,Fz,H9,H_,Cx
,DB,DZ,H8){this.Down=true;this.A0=T;this.Bs=B.aak(Fz,DB);this.BQ=B.aak(H9,DB);this.
BL=H_;this.BU=Cx;this.Bz=DZ;this.EO=H8;return this;},InitializeUp:function(T,Fz,
H9,H_,Cx,DB,Ge,DZ,H8){this.Down=false;this.A0=T;this.Bs=B.aak(Fz,DB);this.BQ=B.aak(
H9,DB);this.BL=H_;this.BU=Cx;this.BZ=Ge;this.Bz=DZ;this.EO=H8;return this;},InitializeDown:
function(T,Fz,Cx,DB,Ge,DZ){this.Down=true;this.A0=T;this.Bs=B.aak(Fz,DB);this.BQ=
B.aak(Fz,DB);this.BL=0;this.BU=Cx;this.BZ=Ge;this.Bz=DZ;this.EO=DZ;return this;}
,_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.DT;},_className:
"Core::CursorEvent"};C.GF={EO:B.vw,Bz:B.vw,BU:0,BL:0,AC:B.vw,BQ:B.vw,Bs:B.vw,A0:
0,Initialize:function(T,Fz,H9,aOffset,H_,Qp,DB,DZ,H8){this.A0=T;this.Bs=B.aak(Fz
,DB);this.BQ=B.aak(H9,DB);this.AC=aOffset;this.BL=H_;this.BU=Qp;this.Bz=DZ;this.
EO=H8;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.GF;},_className:"Core::DragEvent"};C.HG={Dc:function(A2,aClip,aOffset,A$,aBlend
){},Aj:function(value){var A;if(B.z9(value,this.K))return;var FK=[(A=this.K)[2]-
A[0],A[3]-A[1]];var L2=[value[2]-value[0],value[3]-value[1]];var Hb=!B.z8(FK,L2);
var AR=B.aaj(value.slice(0,2),this.K.slice(0,2));if(!B.z8(AR,Aw)&&!Hb){var J=this.
O;while(!!J&&!((J.E&0x200)===0x200)){if(((J.E&0x400)===0x400)){var tmp=((J.E&0x100
)===0x100);J.IS(AR,tmp);}J=J.O;}}if((Hb&&(FK[0]>0))&&(FK[1]>0)){var Al=this.K;var
J=this.O;while(!!J&&!((J.E&0x200)===0x200)){if(((J.E&0x400)===0x400)){if(!!J.AZ&&(
J.AZ.Gu!==this))J.AZ=null;if(!J.AZ&&(J.C1!==0x14))J.Ih(Al,this);}J=J.O;}}C.Bj.Aj.
call(this,value);if(!!this.F&&Hb){this.E=this.E|0x1000;if(!((this.F.E&0x2000)===
0x2000)){this.F.E=this.F.E|0x4000;B.ow([A=this.F,A.Ct],this);}}},_Init:function(
aArg){C.Bj._Init.call(this,aArg);this.__proto__=C.HG;this.E=0x203;},_className:"Core::Outline"
};C.Lf={C9:null,BT:null,Ax:null,Ev:null,JG:null,ES:null,DS:-1,Dk:0,JA:8,E9:0,Dl:
0,GU:B.vw,EQ:-1,Ck:0,Fu:-1,ER:24,Dd:0,FW:null,Nz:false,KT:function(Bv,CL,Ed,DD,DF
,Gi,Dg,DE,Cn,Cl,Cm){throw new Error(Ll);},J7:function(Bv,Gi,Dg,DE,Cn,Cl,Cm){throw new
Error(Lm);},MW:function(Bv,CL,Ed,DD,DF,Dg,DE,Cn,Cl,Cm){throw new Error(Ln);},DispatchEvent:
function(Ak){var A;var result=null;if(((this.Fu>=0)&&(this.Fu<this.Dd))&&!this.B$
){this.EQ=this.Fu;this.Ax=(C.Ax.isPrototypeOf(A=B._NewObject(this.FW,0))?A:null);
if(!!this.Ay)this.Ay.O=this.Ax;else this.At=this.Ax;this.Ax.W=this.Ay;this.Ay=this.
Ax;this.Ax.F=this;this.GU=[(A=this.K)[2]-A[0],this.ER];(A=this.ES)?A[1].call(A[0
],this):null;var Ai=(C.I.isPrototypeOf(A=this.Ax)?A:null);if(!!Ai)result=Ai.DispatchEvent(
Ak);else result=this.Ax.Bi(Ak);if(!!this.Ax.W)this.Ax.W.O=null;else this.At=null;
this.Ay=this.Ax.W;this.Ax.W=null;this.Ax.F=null;this.Ax=null;}if(!result)result=
C.I.DispatchEvent.call(this,Ak);return result;},Fx:function(D1){var A;if(!this.FW
)return;this.Nz=true;var Cp=this.L_(0-this.Ck,1);var CT=this.L_((((A=this.K)[3]-
A[1])-this.Ck)-1,2);var Jr=CT-Cp;if(Jr<1)Jr=1;var Jn=(Jr/2)|0;var Jo=(Jr/3)|0;if(
!Jn)Jn=1;if(!Jo)Jo=1;if(Cp<this.Dk){Cp=Cp-Jn;CT=CT+Jo;}else if(CT>this.DS){Cp=Cp-
Jo;CT=CT+Jn;}else{Cp=this.Dk;CT=this.DS;}if(Cp>=this.Dd){Cp=0;CT=-1;}else if(CT<
0){Cp=0;CT=-1;}if(CT>=this.Dd)CT=this.Dd-1;if(Cp<0)Cp=0;var JO=this.Dk;var JP=this.
DS;var LX=0;var LY=-1;if(Cp>JO)JO=Cp;if(CT<JP)JP=CT;if(JO<=JP){while((this.DS<CT
)&&(this.Dk<JO)){this.JL();this.Nh();}while((this.Dk>Cp)&&(this.DS>JP)){this.NS(
);this.Ng();}}else{this.DS=(this.DS-this.Dk)+Cp;this.Dk=Cp;LX=this.Dk;LY=this.DS;
}while(this.Dk<Cp)this.JL();while(this.DS>CT)this.NS();while(this.Dk>Cp)this.Ng(
);while(this.DS<CT)this.Nh();var S=this.At;var C8=this.Dk;var U=[0,this.Ck+this.
FE(C8,0)];var A7=(A=this.K)[3]-A[1];var Nn=null;var N5=(A=this.K)[2]-A[0];while(
!!S){var FD=C8;var Iw=((FD>=0)&&(FD<=-1))||((C8>=LX)&&(C8<=LY));var LM=S.GetExtent(
);var Dq=B.aaj(U,LM.slice(0,2));if(Iw)this.Dl=this.ER;else this.Dl=LM[3]-LM[1];var
LV=U[1];var LW=U[1]+this.Dl;if(!B.z8(Dq,Aw))S.IS(Dq,true);if((Iw&&(LV<A7))&&(LW>
0)){this.Ax=S;this.EQ=FD;this.GU=[N5,this.Dl];(A=this.ES)?A[1].call(A[0],this):null;
}S=S.O;C8+=1;U=[U[0],U[1]+this.Dl];}C8=this.Dk;S=this.At;U=[0,this.Ck+this.FE(C8
,0)];while(!!S){var FD=C8;var Iw=((FD>=0)&&(FD<=-1))||((C8>=LX)&&(C8<=LY));if(Iw
)this.Dl=this.ER;else this.Dl=(A=S.GetExtent())[3]-A[1];var LV=U[1];var LW=U[1]+
this.Dl;if(Iw&&!((LV<A7)&&(LW>0))){this.Ax=S;this.EQ=FD;this.GU=[N5,this.Dl];(A=
this.ES)?A[1].call(A[0],this):null;}if(FD===this.Fu)Nn=S;S=S.O;C8+=1;U=[U[0],U[1
]+this.Dl];}this.Ax=null;this.EQ=-1;this.CH(Nn);this.Nz=false;},Kg:function(Q,aFilter
){return null;},Cu:function(Ee,AN,Cn,Cl,Cm){throw new Error(Lo);},EW:function(Q){
throw new Error(Lp);},EU:function(Q){throw new Error(Lq);},AV:function(Q,Gh){throw new
Error(Lr);},FE:function(G0,Qo){return G0*this.ER;},L_:function(Bl,Qo){return(Bl/
this.ER)|0;},NS:function(){var S=this.Ay;if(!S)return null;if(S===this.B$)this.CH(
null);this.DS=this.DS-1;if(!!S.W)S.W.O=null;else this.At=null;this.Ay=S.W;S.W=null;
S.F=null;S.AZ=null;if(this.E9<this.JA){if(!!this.C9)this.C9.W=S;S.O=this.C9;this.
C9=S;this.E9++;}return S;},Nh:function(){var A;var S=this.C9;var Ik=this.FW;var N7=++
this.DS;while(!!S&&(((A=S)?A.__proto__:null)!==Ik))S=S.O;if(!!S){if(!!S.O)S.O.W=
S.W;if(!!S.W)S.W.O=S.O;if(this.C9===S)this.C9=S.O;S.O=null;S.W=null;this.E9--;}else{
S=(C.Ax.isPrototypeOf(A=B._NewObject(Ik,0))?A:null);S.GN(0x1D);if(!!this.E9)this.
JA++;}this.Dl=this.ER;this.EQ=N7;this.GU=[(A=this.K)[2]-A[0],this.Dl];this.Ax=S;(
A=this.ES)?A[1].call(A[0],this):null;this.Ax=null;this.EQ=-1;if(!!this.Ay)this.Ay.
O=S;S.F=this;S.W=this.Ay;this.Ay=S;if(!this.At)this.At=S;if(N7===this.Fu)this.CH(
S);return S;},JL:function(){var S=this.At;if(!S)return null;if(S===this.B$)this.
CH(null);this.Dk=this.Dk+1;if(!!S.O)S.O.W=null;else this.Ay=null;this.At=S.O;S.O=
null;S.F=null;S.AZ=null;if(this.E9<this.JA){if(!!this.C9)this.C9.W=S;S.O=this.C9;
this.C9=S;this.E9++;}return S;},Ng:function(){var A;var S=this.C9;var Ik=this.FW;
var N6=--this.Dk;while(!!S&&(((A=S)?A.__proto__:null)!==Ik))S=S.O;if(!!S){if(!!S.
O)S.O.W=S.W;if(!!S.W)S.W.O=S.O;if(this.C9===S)this.C9=S.O;S.O=null;S.W=null;this.
E9--;}else{S=(C.Ax.isPrototypeOf(A=B._NewObject(Ik,0))?A:null);S.GN(0x1D);if(!!this.
E9)this.JA++;}this.Dl=this.ER;this.EQ=N6;this.GU=[(A=this.K)[2]-A[0],this.Dl];this.
Ax=S;(A=this.ES)?A[1].call(A[0],this):null;this.Ax=null;this.EQ=-1;if(!!this.At)
this.At.W=S;S.F=this;S.O=this.At;this.At=S;if(!this.Ay)this.Ay=S;if(N6===this.Fu
)this.CH(S);return S;},QS:function(Ag){var A;this.BT.Fs=null;this.BT.G$=null;this.
BT=null;(A=this.JG)?A[1].call(A[0],this):null;},QZ:function(Ag){this.KE(this.Ev.
AC[1]);},Q0:function(Ag){var A;if(!!this.BT){this.BT.AS(false);this.BT.Fs=null;this.
BT.G$=null;this.BT=null;}{var N=this.Mr(0,this.Dd-1);var JJ=this.K.slice(0,2);if(
N[0]>JJ[0])N=[].concat(JJ[0],N.slice(1,4));if(N[1]>JJ[1])N=B.aaS(N,JJ[1]);var AR=
N[1]-this.K[1];var L1=((A=this.K)[3]-A[1])-(N[3]-N[1]);if(L1>0)L1=0;this.Ev.AC=[
0,this.Ck];this.Ev.A_=[0,(this.Ck+L1)-AR];this.Ev.A9=[0,this.Ck-AR];}},Pk:function(
value){if(value===this.Ev)return;if(!!value&&!!value.Ha){B.aa8("%s%*%s",Ls,value
,Lt);throw new Error(Lu);}if(!!this.Ev){this.Ev.JK=null;this.Ev.Ha=null;}this.Ev=
value;if(!!value){value.JK=[this,this.Q0];value.Ha=[this,this.QZ];}},KE:function(
value){var A;if(value===this.Ck)return;this.Ck=value;this.B0();this.Ao([0,0,(A=this.
K)[2]-A[0],A[3]-A[1]]);},MQ:function(value){if(value<0)value=-1;if(value===this.
Fu)return;this.Fu=value;this.B0();},Pe:function(value){var A;if(value<1)value=1;
if(value===this.ER)return;this.ER=value;while(!!this.JL());this.B0();this.Ao([0,
0,(A=this.K)[2]-A[0],A[3]-A[1]]);},Ph:function(value){var A;if(value<0)value=0;if(
value===this.Dd)return;var N=[0,0,(A=this.K)[2]-A[0],A[3]-A[1]];if(value>this.Dd
){N=[].concat(N.slice(0,3),this.Ck+this.FE(value,3));N=B.aaS(N,this.Ck+this.FE(this.
Dd,3));}else{N=B.aaS(N,this.Ck+this.FE(value,3));N=[].concat(N.slice(0,3),this.Ck+
this.FE(this.Dd,3));}this.Dd=value;this.B0();this.Ao(N);},Pd:function(value){var
A;if(value===this.FW)return;this.FW=value;while(!!this.JL());this.C9=null;this.E9=
0;this.B0();this.Ao([0,0,(A=this.K)[2]-A[0],A[3]-A[1]]);},Mo:function(G0,M6,Qn,Gg
){var A;if((G0<0)||(G0>=this.Dd))return;var R=this.Mr(G0,G0);var Al=this.K;var Ii=
B.kz(R,Al);if((!M6&&!((Ii[0]>=Ii[2])||(Ii[1]>=Ii[3])))||(M6&&B.z9(Ii,R))){(Gg)?Gg[
1].call(Gg[0],this):null;return;}var Dq=0;if(R[3]>Al[3])Dq=R[3]-Al[3];if(Dq>(R[1
]-Al[1]))Dq=R[1]-Al[1];if(!!this.BT){this.BT.AS(false);this.BT.Fs=null;this.BT.G$=
null;this.JG=null;}this.BT=Qn;if(!this.BT){this.KE(this.Ck-Dq);(Gg)?Gg[1].call(Gg[
0],this):null;}else{this.BT.AS(false);this.BT.KC(1);this.BT.Fs=[this,this.ON,this.
KE];this.BT.BR=this.Ck;this.BT.BA=this.Ck-Dq;this.BT.G$=[this,this.QS];this.BT.KD(
false);this.BT.AS(true);this.JG=Gg;}},Os:function(Bl){if(((this.Dd<=0)||(Bl[0]<this.
K[0]))||(Bl[0]>=this.K[2]))return-1;Bl=B.aaj(Bl,this.K.slice(0,2));{var S=Bl[1]-
this.Ck;if(S>0)S=this.L_(S,0);if((S<0)||(S>=this.Dd))return-1;return S;}},Mr:function(
I8,I9){if(I8<0)I8=0;if(I9>=this.Dd)I9=this.Dd-1;if(I8>I9)return Bk;var N=this.K;
var Dq=this.Ck;N=[].concat(N.slice(0,3),(N[1]+Dq)+this.FE(I9+1,0));N=B.aaS(N,(N[
1]+Dq)+this.FE(I8,0));return N;},ON:function(){return this.Ck;},_Init:function(aArg
){C.I._Init.call(this,aArg);this.__proto__=C.Lf;this.Aj(Lv);this.FW=B.abh.Text;}
,_Mark:function(D){var A;C.I._Mark.call(this,D);if((A=this.C9)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.BT)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ax
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ev)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JG)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.ES)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::VerticalList"};C.HL={Ky:
null,KB:null,KA:null,Cj:null,CG:null,JY:0,P:0,A0:0,Ar:0,BU:0,BL:0,AC:B.vw,BQ:B.vw
,Bs:B.vw,HJ:8,EX:0,Mx:1,Down:false,D_:false,BZ:false,LL:false,FG:0,Dc:function(A2
,aClip,aOffset,A$,aBlend){},Bi:function(Ak){var A;var M=(C.DT.isPrototypeOf(Ak)?
Ak:null);var Au=(C.GF.isPrototypeOf(Ak)?Ak:null);var Jz=this.D_;var Ch;var Ce;var
FT;var Bd;var EA;if(!M&&!Au)return null;Ch=(!!M&&M.Down)&&!M.BL;Ce=(!!M&&M.Down)&&(
M.BL>0);FT=(!!M&&M.Down)&&(M.BL>this.FG);Bd=!!M&&!M.Down;EA=!!Au;if(Ch)this.FG=((
A=(M.BZ?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.EX&0x20)===0x20)&&(this.P>0)
)&&(this.P<33554432)){var Bp=(C.Hi.isPrototypeOf(Ak)?Ak:null);if(((!!Bp&&Bp.Down
)&&(Bp.HN!==this))&&B.vt(this.GetExtent(),this.F.Mv(Bp.Bz))){this.JY=0x20;this.P=
this.P|67108864;return null;}}if(Ch){var Em=0;var CQ;this.P=this.P|(1<<M.A0);for(
CQ=this.P&4095;CQ>0;CQ=CQ>>1)if(!!(CQ&1))Em=Em+1;if(Em===1)this.P=(this.P|16777216
)|(4096<<M.A0);}if(Bd&&(this.P<16777216)){var BF=this.EN();var Bu=null;if(!!BF){
var IA=(!!this.W?this.W:this.F);Bu=BF.D8(B.aam(H6,M.Bz),M.A0,M.BU,null,IA,0x0);}
if(!!Bu){var G;for(G=0;G<10;G++)if(!!(this.P&(1<<G)))Bu.Ax.Bi(B._NewObject(C.DT,
0).InitializeDown(G,M.Bs,M.BU,Aw,true,M.Bz));for(G=0;G<10;G++)if(!!(this.P&(1<<G
)))Bu.Ax.Bi(B._NewObject(C.DT,0).InitializeUp(G,M.Bs,M.Bs,0,M.BU,Aw,false,M.Bz,M.
Bz));}}if(Bd)this.P=(this.P&~(1<<M.A0))|33554432;if(FT&&(this.P<16777216))this.P=
this.P|67108864;if(Bd&&M.BZ)this.P=this.P|67108864;if(Bd&&!(this.P&4095))this.JY=
0x0;if(Bd&&!(this.P&16777215))this.P=0;if(Ce&&(this.P>=67108864)){var BF=this.EN(
);if(!!BF)BF.HI(null,null,this,this.JY);}if((Ce&&!!(this.P&16777216))&&!!(this.P&
33554432)){Ce=false;Bd=true;}if(!!M&&!(this.P&(4096<<M.A0)))return this;if(!!Au&&
!(this.P&(4096<<Au.A0)))return this;if(Bd&&!(this.P&16777216))return this;if(((Ch||
EA)||Ce)&&((this.P<16777216)||(this.P>=33554432)))return this;if(Bd)this.P=this.
P&3758100479;if(Bd&&!(this.P&16777215))this.P=0;if(!!M){this.Down=Ch||Ce;this.D_=
this.Kt(M.Bs);this.BQ=M.BQ;this.Bs=M.Bs;this.AC=Aw;this.BL=M.BL;this.BU=M.BU;this.
BZ=M.BZ;this.A0=M.A0;this.Ar=M.Ar;if(M.Down&&!M.BL)Jz=false;}if(!!Au){this.Down=
true;this.D_=this.Kt(Au.Bs);this.BQ=Au.BQ;this.Bs=Au.Bs;this.AC=Au.AC;this.BL=Au.
BL;this.BU=Au.BU;this.A0=Au.A0;this.BZ=false;this.Ar=Au.Ar;}var LK=this.Down;if(
!!Au)(A=this.Ky)?A[1].call(A[0],this):null;if((!!M&&this.Down)&&!this.BL)(A=this.
CG)?A[1].call(A[0],this):null;if((this.Down&&this.D_)&&!Jz){this.LL=true;(A=this.
KA)?A[1].call(A[0],this):null;}if(this.LL&&(((LK&&!this.D_)&&Jz)||((!LK&&this.D_
)&&Jz))){this.LL=false;(A=this.KB)?A[1].call(A[0],this):null;}if(!!M&&!LK)(A=this.
Cj)?A[1].call(A[0],this):null;if(!!this.EX){var FM=0x0;if(((((this.EX&0x10)===0x10
)&&!!M)&&M.Down)&&(M.BL>=1000))FM=0x10;if((((this.EX&0x1)===0x1)&&!!Au)&&((Au.Bz[
1]-Au.EO[1])<=-this.HJ))FM=0x1;if((((this.EX&0x2)===0x2)&&!!Au)&&((Au.Bz[1]-Au.EO[
1])>=this.HJ))FM=0x2;if((((this.EX&0x4)===0x4)&&!!Au)&&((Au.Bz[0]-Au.EO[0])<=-this.
HJ))FM=0x4;if((((this.EX&0x8)===0x8)&&!!Au)&&((Au.Bz[0]-Au.EO[0])>=this.HJ))FM=0x8;
if(!!FM){var BF=this.EN();if(!!BF){this.JY=FM;BF.HI(null,this,this,FM);}}}return this;
},D8:function(An,T,Cx,DX,DG,E0){var A;if(!!DX&&(DX!==this))return null;if((Cx<1)||(
Cx>this.Mx))return null;if(this.P>=33554432)return null;if((this.P>=16777216)&&!(
this.P&(4096<<T)))return null;if(!!(E0&this.EX))return null;if(this.Ou()){var R=
B.kz(An,this.GetExtent());if(!((R[0]>=R[2])||(R[1]>=R[3]))){var BC=B.zT(An);var AR=
Aw;if(BC[0]<R[0])AR=[R[0]-BC[0],AR[1]];if(BC[0]>=R[2])AR=[(R[2]-BC[0])-1,AR[1]];
if(BC[1]<R[1])AR=[AR[0],R[1]-BC[1]];if(BC[1]>=R[3])AR=[AR[0],(R[3]-BC[1])-1];return B.
_NewObject(C.Hj,0).Initialize(this,AR);}}else{var Bc=B.aan(9,B.vw,null);var G;Bc.
Set(0,B.zT(An));Bc.Set(1,Bc.Get(0));Bc.Set(2,Bc.Get(0));Bc.Set(3,Bc.Get(0));Bc.Set(
4,Bc.Get(0));Bc.Set(1,[An[0],Bc.Get(1)[1]]);Bc.Set(2,[Bc.Get(2)[0],An[1]]);Bc.Set(
3,[An[2],Bc.Get(3)[1]]);Bc.Set(4,[Bc.Get(4)[0],An[3]]);Bc.Set(5,An.slice(0,2));Bc.
Set(6,[An[2],An[1]]);Bc.Set(7,[An[0],An[3]]);Bc.Set(8,An.slice(2,4));for(G=0;G<9;
G=G+1)if(this.Kt(Bc.Get(G)))return B._NewObject(C.Hj,0).Initialize(this,B.aaj(Bc.
Get(G),Bc.Get(0)));}return null;},MP:function(value){if(value<1)value=1;this.HJ=
value;},ML:function(value){if(value<1)value=1;this.Mx=value;},AS:function(value){
if(value)this.A8(0x10,0x0);else this.A8(0x0,0x10);},_Init:function(aArg){C.Ea._Init.
call(this,aArg);this.__proto__=C.HL;this.E=0x11B;},_Mark:function(D){var A;C.Ea.
_Mark.call(this,D);if((A=this.Ky)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.KB)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.KA)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Cj)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.CG)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.I4={Kx:null,KF:null,P:0,BQ:B.vw,Es:0,Down:false,D_:false,BZ:false,FG:0,Dc:function(
A2,aClip,aOffset,A$,aBlend){},Bi:function(Ak){var A;var M=(C.DT.isPrototypeOf(Ak
)?Ak:null);var Au=(C.GF.isPrototypeOf(Ak)?Ak:null);var Ch;var Ce;var FT;var Bd;var
EA;if(!M&&!Au)return null;Ch=(!!M&&M.Down)&&!M.BL;Ce=(!!M&&M.Down)&&(M.BL>0);FT=(
!!M&&M.Down)&&(M.BL>this.FG);Bd=!!M&&!M.Down;EA=!!Au;if(Ch)this.FG=((A=(M.BZ?0:50
))&0x80)?A|0xFFFFFF00:A&0xFF;if(Ch){var Em=0;var CQ;this.P=this.P|(1<<M.A0);for(
CQ=this.P&4095;CQ>0;CQ=CQ>>1)if(!!(CQ&1))Em=Em+1;if(Em===1)this.P=(this.P|16777216
)|(4096<<M.A0);}if(Bd&&(this.P<16777216)){var BF=this.EN();var Bu=null;if(!!BF){
var IA=(!!this.W?this.W:this.F);Bu=BF.D8(B.aam(H6,M.Bz),M.A0,M.BU,null,IA,0x0);}
if(!!Bu){var G;for(G=0;G<10;G++)if(!!(this.P&(1<<G)))Bu.Ax.Bi(B._NewObject(C.DT,
0).InitializeDown(G,M.Bs,M.BU,Aw,true,M.Bz));for(G=0;G<10;G++)if(!!(this.P&(1<<G
)))Bu.Ax.Bi(B._NewObject(C.DT,0).InitializeUp(G,M.Bs,M.Bs,0,M.BU,Aw,false,M.Bz,M.
Bz));}}if(Bd)this.P=(this.P&~(1<<M.A0))|33554432;if(FT&&(this.P<16777216))this.P=
this.P|67108864;if(Bd&&M.BZ)this.P=this.P|67108864;if(Bd&&!(this.P&16777215))this.
P=0;if(Ce&&(this.P>=67108864)){var BF=this.EN();if(!!BF)BF.HI(null,null,this,0x0
);}if((Ce&&!!(this.P&16777216))&&!!(this.P&33554432)){Ce=false;Bd=true;}if(!!M&&
!(this.P&(4096<<M.A0)))return this;if(!!Au&&!(this.P&(4096<<Au.A0)))return this;
if(Bd&&!(this.P&16777216))return this;if(((Ch||EA)||Ce)&&((this.P<16777216)||(this.
P>=33554432)))return this;if(Bd)this.P=this.P&3758100479;if(Bd&&!(this.P&16777215
))this.P=0;if(Ch||Bd){this.D_=B.vt(this.K,M.Bs);this.BZ=M.BZ;this.BQ=M.BQ;this.Down=
Ch;}if(EA){this.D_=B.vt(this.K,Au.Bs);this.BQ=Au.BQ;this.Down=true;}if(Ch)this.Es=
0;var Ez=this.Es;if(EA){var If=Au.Bs[0]-Au.BQ[0];var Ig=Au.Bs[1]-Au.BQ[1];var NA=((((
A=this.K)[2]-A[0])*25)/100)|0;var Ny=((((A=this.K)[3]-A[1])*25)/100)|0;var R=0;if((((
If>=NA)||(If<=-NA))||(Ig>=Ny))||(Ig<=-Ny))R=Math.sqrt((If*If)+(Ig*Ig));if(R>=8){
var Cy=(Math.acos(If/R)*B.qW)|0;if(Ig>0)Cy=360-Cy;if((Cy<=22)||(Cy>=338))Ez=7;if((
Cy>=68)&&(Cy<=112))Ez=4;if((Cy>=158)&&(Cy<=202))Ez=2;if((Cy>=248)&&(Cy<=292))Ez=
5;if((Cy>22)&&(Cy<68))Ez=6;if((Cy>112)&&(Cy<158))Ez=1;if((Cy>202)&&(Cy<248))Ez=3;
if((Cy>292)&&(Cy<338))Ez=8;}}if(!this.Es){this.Es=Ez;switch(Ez){case 5:(A=this.Kx
)?A[1].call(A[0],this):null;break;case 2:break;case 7:break;case 4:(A=this.KF)?A[
1].call(A[0],this):null;break;case 3:break;case 8:break;case 1:break;case 6:break;
default:;}}return this;},D8:function(An,T,Cx,DX,DG,E0){var A;if(!!DX&&(DX!==this
))return null;if(this.P>=33554432)return null;if((this.P>=16777216)&&!(this.P&(4096<<
T)))return null;var R=B.kz(An,this.K);if(!((R[0]>=R[2])||(R[1]>=R[3]))){var BC=B.
zT(An);var AR=Aw;if(BC[0]<R[0])AR=[R[0]-BC[0],AR[1]];if(BC[0]>=R[2])AR=[(R[2]-BC[
0])-1,AR[1]];if(BC[1]<R[1])AR=[AR[0],R[1]-BC[1]];if(BC[1]>=R[3])AR=[AR[0],(R[3]-
BC[1])-1];return B._NewObject(C.Hj,0).Initialize(this,AR);}return null;},_Init:function(
aArg){C.Bj._Init.call(this,aArg);this.__proto__=C.I4;this.E=0x11B;},_Mark:function(
D){var A;C.Bj._Mark.call(this,D);if((A=this.Kx)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.KF)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::WipeTouchHandler"};C.KP={timer:null,JK:null,Ha:null,P:0,Jh:0,Gz:0,Jy:B.vw
,Go:0,Ex:0,AJ:0,FR:0,Hd:0,Gn:0,Ew:0,AI:0,FQ:0,FP:0,BQ:B.vw,Mm:B.vw,A9:B.vw,A_:B.
vw,AC:B.vw,Dz:B.vw,GT:false,DN:false,DO:false,Jg:false,FG:0,Dc:function(A2,aClip
,aOffset,A$,aBlend){},Bi:function(Ak){var A;var M=(C.DT.isPrototypeOf(Ak)?Ak:null
);var Au=(C.GF.isPrototypeOf(Ak)?Ak:null);var Bp=(C.Hi.isPrototypeOf(Ak)?Ak:null
);var Ch;var Ce;var FT;var Bd;var EA;Ch=(!!M&&M.Down)&&!M.BL;Ce=(!!M&&M.Down)&&(
M.BL>0);FT=(!!M&&M.Down)&&(M.BL>this.FG);Bd=!!M&&!M.Down;EA=!!Au;if(Ch)this.FG=((
A=(M.BZ?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Ch){var Em=0;var CQ;this.P=this.P|(1<<
M.A0);for(CQ=this.P&4095;CQ>0;CQ=CQ>>1)if(!!(CQ&1))Em=Em+1;if(Em===1)this.P=(this.
P|16777216)|(4096<<M.A0);}if(Bd&&(this.P<16777216)){var BF=this.EN();var Bu=null;
if(!!BF){var IA=(!!this.W?this.W:this.F);Bu=BF.D8(B.aam(H6,M.Bz),M.A0,M.BU,null,
IA,0x0);}if(!!Bu){var G;for(G=0;G<10;G++)if(!!(this.P&(1<<G)))Bu.Ax.Bi(B._NewObject(
C.DT,0).InitializeDown(G,M.Bs,M.BU,Aw,true,M.Bz));for(G=0;G<10;G++)if(!!(this.P&(
1<<G)))Bu.Ax.Bi(B._NewObject(C.DT,0).InitializeUp(G,M.Bs,M.Bs,0,M.BU,Aw,false,M.
Bz,M.Bz));}}if(Bd)this.P=(this.P&~(1<<M.A0))|33554432;if(FT&&(this.P<16777216))this.
P=this.P|67108864;if(Bd&&M.BZ)this.P=this.P|67108864;if(Bd&&!(this.P&16777215))this.
P=0;if(Ce&&(this.P>=67108864)){var BF=this.EN();if(!!BF)BF.HI(null,null,this,0x0
);}if((Ce&&!!(this.P&16777216))&&!!(this.P&33554432)){Ce=false;Bd=true;}if(!!M&&
!(this.P&(4096<<M.A0)))return this;if(!!Au&&!(this.P&(4096<<Au.A0)))return this;
if(Bd&&!(this.P&16777216))return this;if(((Ch||EA)||Ce)&&((this.P<16777216)||(this.
P>=33554432)))return this;if(Bd)this.P=this.P&3758100479;if(Bd&&!(this.P&16777215
))this.P=0;if(!!Bp&&(Bp.HN===this))return null;if((!!Bp&&Bp.Down)&&(this.Jg||!this.
GT))return null;if((!!Bp&&Bp.Down)&&!B.vt(this.K,this.F.Mv(Bp.Bz)))return null;if((
!!Bp&&!Bp.Down)&&(!this.Jg||(this.Jh!==Bp.A0)))return null;if((!M&&!Au)&&!Bp)return null;
if(!!M){this.Jg=Ch||Ce;this.Jh=M.A0;this.BQ=M.BQ;}if(!!Au)this.Jh=Au.A0;if(!!Bp){
this.Jg=Bp.Down;this.Jh=Bp.A0;}if(!!Bp&&Bp.Down){this.Md();this.AI=(((Bp.Ar-this.
FP)*0.001)*this.Ew)+this.AI;this.AJ=(((Bp.Ar-this.Hd)*0.001)*this.Ex)+this.AJ;if(
this.DN)this.AI=0;if(this.DO)this.AJ=0;this.Ew=0;this.Ex=0;this.DN=false;this.DO=
false;this.Jy=this.AC;this.Gz=Bp.Ar;return this;}if(Ch){this.Md();this.AI=(((M.Ar-
this.FP)*0.001)*this.Ew)+this.AI;this.AJ=(((M.Ar-this.Hd)*0.001)*this.Ex)+this.AJ;
if(this.DN||!this.GT)this.AI=0;if(this.DO||!this.GT)this.AJ=0;this.Ew=0;this.Ex=
0;this.DN=false;this.DO=false;if(!this.GT){this.GT=true;(A=this.JK)?A[1].call(A[
0],this):null;}this.Jy=this.AC;this.Gz=M.Ar;}if(!!Au){var As=B.aaj(Au.Bs,Au.BQ);
var Aq=this.AC;Aq=[this.Jy[0]+As[0],Aq[1]];Aq=[Aq[0],this.Jy[1]+As[1]];if(Aq[0]<
this.A_[0])Aq=[this.A_[0]+(((Aq[0]-this.A_[0])/2)|0),Aq[1]];else if(Aq[0]>this.A9[
0])Aq=[this.A9[0]+(((Aq[0]-this.A9[0])/2)|0),Aq[1]];if(Aq[1]<this.A_[1])Aq=[Aq[0
],this.A_[1]+(((Aq[1]-this.A_[1])/2)|0)];else if(Aq[1]>this.A9[1])Aq=[Aq[0],this.
A9[1]+(((Aq[1]-this.A9[1])/2)|0)];if(!B.z8(Aq,this.AC)){this.Mm=B.aaj(Aq,this.AC
);this.AC=Aq;(A=this.Ha)?A[1].call(A[0],this):null;}}if((!!Bp&&!Bp.Down)&&((Bp.Ar-
this.Gz)>=200)){this.AI=0;this.AJ=0;}if(Ce&&((M.Ar-this.Gz)>=200)){this.AI=0;this.
AJ=0;}if(!!Au&&(Au.Ar>this.Gz)){var As=Au.AC;var Ns=1000/(Au.Ar-this.Gz);var Fb;
var Fc;Fb=As[0]*Ns;Fc=As[1]*Ns;if((Fb*this.AI)<0)this.AI=0;if((Fc*this.AJ)<0)this.
AJ=0;this.AI=(this.AI+Fb)*0.5;this.AJ=(this.AJ+Fc)*0.5;this.Gz=Au.Ar;}if(!Bd&&!Bp
)return this;if(!!M&&M.BZ){this.AI=0;this.AJ=0;}if((this.AC[0]<=this.A_[0])||(this.
AC[0]>=this.A9[0]))this.AI=0;else if(!this.AI){var AF=this.AC[0];var AK=this.A_[
0];var AB=this.A9[0];if(AF<AK)AB=this.A_[0];else if(AF>AB)AK=this.A9[0];else if(
this.Dz[0]<=1){AK=AF;AB=AF;}else{var Ek=(AB-AF)%this.Dz[0];AB=(AF-this.Dz[0])+Ek;
AK=AF+Ek;if(AB<this.A_[0])AB=this.A_[0];if(AK>this.A9[0])AK=this.A9[0];}if((AK-AF
)<=(AF-AB))AF=AK;else AF=AB;if(AF!==this.AC[0]){var B6=AF-this.AC[0];if(B6>0)this.
AI=Math.sqrt((B6*2)*5000)+20;if(B6<0)this.AI=-Math.sqrt((-B6*2)*5000)-20;this.Ew=(
400-(this.AI*this.AI))/(2*B6);this.Gn=AF;}}else{var Q7=this.AI*this.AI;var B6=Q7
/10000;var AF=this.AC[0];if(this.AI>0)AF=AF+(B6|0);if(this.AI<0)AF=AF-(B6|0);if(
AF>this.A9[0])AF=this.A9[0];else if(AF<this.A_[0])AF=this.A_[0];var N0=AF;var AK=
this.A_[0];var AB=this.A9[0];if(AF<AK)AB=this.A_[0];else if(AF>AB)AK=this.A9[0];
else if(this.Dz[0]<=1){AK=AF;AB=AF;}else{var Ek=(AB-AF)%this.Dz[0];AB=(AF-this.Dz[
0])+Ek;AK=AF+Ek;if(AB<this.A_[0])AB=this.A_[0];if(AK>this.A9[0])AK=this.A9[0];}if(
this.AI>0){if(AB<=this.AC[0])AF=AK;else if((AF-AB)<(AK-AF))AF=AB;else AF=AK;}else
if(AK>=this.AC[0])AF=AB;else if((AF-AB)>(AK-AF))AF=AK;else AF=AB;if(AF!==this.AC[
0]){B6=AF-this.AC[0];if(AF!==N0){var Fi=AF-N0;if(Fi>0)this.AI=this.AI+Math.sqrt((
Fi*2)*5000);if(Fi<0)this.AI=this.AI-Math.sqrt((-Fi*2)*5000);}if(this.AI>0)this.AI=
this.AI+20;if(this.AI<0)this.AI=this.AI-20;this.Ew=(400-(this.AI*this.AI))/(2*B6
);this.Gn=AF;}else this.AI=0;}if((this.AC[1]<=this.A_[1])||(this.AC[1]>=this.A9[
1]))this.AJ=0;else if(!this.AJ){var AG=this.AC[1];var AK=this.A_[1];var AB=this.
A9[1];if(AG<AK)AB=this.A_[1];else if(AG>AB)AK=this.A9[1];else if(this.Dz[1]<=1){
AK=AG;AB=AG;}else{var Ek=(AB-AG)%this.Dz[1];AB=(AG-this.Dz[1])+Ek;AK=AG+Ek;if(AB<
this.A_[1])AB=this.A_[1];if(AK>this.A9[1])AK=this.A9[1];}if((AK-AG)<=(AG-AB))AG=
AK;else AG=AB;if(AG!==this.AC[1]){var B6=AG-this.AC[1];if(B6>0)this.AJ=Math.sqrt((
B6*2)*5000)+20;if(B6<0)this.AJ=-Math.sqrt((-B6*2)*5000)-20;this.Ex=(400-(this.AJ
*this.AJ))/(2*B6);this.Go=AG;}}else{var Q8=this.AJ*this.AJ;var B6=Q8/10000;var AG=
this.AC[1];if(this.AJ>0)AG=AG+(B6|0);if(this.AJ<0)AG=AG-(B6|0);if(AG>this.A9[1])
AG=this.A9[1];else if(AG<this.A_[1])AG=this.A_[1];var N1=AG;var AK=this.A_[1];var
AB=this.A9[1];if(AG<AK)AB=this.A_[1];else if(AG>AB)AK=this.A9[1];else if(this.Dz[
1]<=1){AK=AG;AB=AG;}else{var Ek=(AB-AG)%this.Dz[1];AB=(AG-this.Dz[1])+Ek;AK=AG+Ek;
if(AB<this.A_[1])AB=this.A_[1];if(AK>this.A9[1])AK=this.A9[1];}if(this.AJ>0){if(
AB<=this.AC[1])AG=AK;else if((AG-AB)<(AK-AG))AG=AB;else AG=AK;}else if(AK>=this.
AC[1])AG=AB;else if((AG-AB)>(AK-AG))AG=AK;else AG=AB;if(AG!==this.AC[1]){B6=AG-this.
AC[1];if(AG!==N1){var Fi=AG-N1;if(Fi>0)this.AJ=this.AJ+Math.sqrt((Fi*2)*5000);if(
Fi<0)this.AJ=this.AJ-Math.sqrt((-Fi*2)*5000);}if(this.AJ>0)this.AJ=this.AJ+20;if(
this.AJ<0)this.AJ=this.AJ-20;this.Ex=(400-(this.AJ*this.AJ))/(2*B6);this.Go=AG;}
else this.AJ=0;}if(!!M)this.FP=M.Ar;if(!!Bp)this.FP=Bp.Ar;this.Hd=this.FP;this.FQ=
this.AC[0];this.FR=this.AC[1];this.Q9();return this;},D8:function(An,T,Cx,DX,DG,
E0){var A;if(!!DX&&(DX!==this))return null;if(this.P>=33554432)return null;if((this.
P>=16777216)&&!(this.P&(4096<<T)))return null;var R=B.kz(An,this.K);if(!((R[0]>=
R[2])||(R[1]>=R[3]))){var BC=B.zT(An);var AR=Aw;if(BC[0]<R[0])AR=[R[0]-BC[0],AR[
1]];if(BC[0]>=R[2])AR=[(R[2]-BC[0])-1,AR[1]];if(BC[1]<R[1])AR=[AR[0],R[1]-BC[1]];
if(BC[1]>=R[3])AR=[AR[0],(R[3]-BC[1])-1];return B._NewObject(C.Hj,0).Initialize(
this,AR);}return null;},Md:function(){if(!!this.timer){B.zl([this,this.B9],this.
timer,0);this.timer=null;}},Q9:function(){this.timer=B._GetAutoObject(B.abj.Fl);
B.y_([this,this.B9],this.timer,0);},B9:function(Ag){var A;if(!this.timer)return;
var He=(this.timer.Ar-this.FP)*0.001;var Hf=(this.timer.Ar-this.Hd)*0.001;var Q$=
He*He;var Ra=Hf*Hf;var Fb=(this.Ew*He)+this.AI;var Fc=(this.Ex*Hf)+this.AJ;var Aq=[((((
this.Ew*0.5)*Q$)+(this.AI*He))+this.FQ)|0,((((this.Ex*0.5)*Ra)+(this.AJ*Hf))+this.
FR)|0];if(this.DN&&(He>=0.5)){Aq=[this.Gn,Aq[1]];this.AI=0;this.Ew=0;this.FQ=Aq[
0];this.DN=false;}else if(this.DN){var CA=1-Math.pow(1-(He/0.5),5);Aq=[(this.FQ+((
this.Gn-this.FQ)*CA))|0,Aq[1]];}if(this.DO&&(Hf>=0.5)){Aq=[Aq[0],this.Go];this.AJ=
0;this.Ex=0;this.FR=Aq[1];this.DO=false;}else if(this.DO){var CA=1-Math.pow(1-(Hf
/0.5),5);Aq=[Aq[0],(this.FR+((this.Go-this.FR)*CA))|0];}if(((this.AI>0)&&(Fb<0))||((
this.AI<0)&&(Fb>0))){Fb=0;Aq=[this.AC[0],Aq[1]];}if(((this.AJ>0)&&(Fc<0))||((this.
AJ<0)&&(Fc>0))){Fc=0;Aq=[Aq[0],this.AC[1]];}if(!this.DN&&(Aq[0]<this.A_[0])){this.
FQ=Aq[0];this.Gn=this.A_[0];this.FP=this.timer.Ar;this.DN=true;}else if(!this.DN&&(
Aq[0]>this.A9[0])){this.FQ=Aq[0];this.Gn=this.A9[0];this.FP=this.timer.Ar;this.DN=
true;}if(!this.DO&&(Aq[1]<this.A_[1])){this.FR=Aq[1];this.Go=this.A_[1];this.Hd=
this.timer.Ar;this.DO=true;}else if(!this.DO&&(Aq[1]>this.A9[1])){this.FR=Aq[1];
this.Go=this.A9[1];this.Hd=this.timer.Ar;this.DO=true;}if(((!this.DN&&!!this.AI)&&(
Fb>-20))&&(Fb<20)){Aq=[this.Gn,Aq[1]];this.AI=0;this.Ew=0;this.FQ=Aq[0];}if(((!this.
DO&&!!this.AJ)&&(Fc>-20))&&(Fc<20)){Aq=[Aq[0],this.Go];this.AJ=0;this.Ex=0;this.
FR=Aq[1];}if(!B.z8(Aq,this.AC)){this.Mm=B.aaj(Aq,this.AC);this.AC=Aq;(A=this.Ha)?
A[1].call(A[0],this):null;}if(((!this.AI&&!this.AJ)&&!this.DN)&&!this.DO){this.Md(
);this.GT=false;}},Pl:function(value){if(value[0]<0)value=[0,value[1]];if(value[
1]<0)value=[value[0],0];this.Dz=value;},_Init:function(aArg){C.Bj._Init.call(this
,aArg);this.__proto__=C.KP;this.E=0x11B;},_Mark:function(D){var A;C.Bj._Mark.call(
this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.JK)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ha)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::SlideTouchHandler"};C.FX={O:null,Cj:null,CG:null
,Gx:0,Ar:0,MX:0,CW:148,Bx:0,AM:0,AW:true,Down:false,KM:false,Ci:function(aArg){var
A;var AL=(C.I.isPrototypeOf(A=this.Ac)?A:null);if(!AL)throw new Error(Lw);this.O=
AL.JC;AL.JC=this;},Bi:function(Ak){var A;if(!!Ak&&Ak.Ox(this.CW)){this.Down=Ak.Down;
this.Bx=Ak.Bx;this.AM=Ak.AM;this.Ar=Ak.Ar;if(Ak.Down){this.MX=this.Gx;this.KM=this.
Gx>0;if(!this.KM)(A=this.CG)?A[1].call(A[0],this):null;this.Gx=this.Gx+1;return true;
}if(!Ak.Down){this.KM=this.Gx>1;this.MX=this.Gx-1;this.Gx=0;(A=this.Cj)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
C.FX;this.Ci(aArg);B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Cj)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CG)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=
D);},Ac:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.Hj={
Ax:null,Hk:0,AC:B.vw,Initialize:function(Q,aOffset){this.Ax=Q;this.AC=aOffset;this.
Hk=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.Hj;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ax)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Core::CursorHit"};C.IN={Gu:null,CP:B.vx,Al:B.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.IN;B.hJ++;},_Done:function(){this.__proto__=
null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Gu)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:
null,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.IO={Iv:B.vw,Iu:
B.vw,It:B.vw,Is:B.vw,_Init:function(aArg){C.IN._Init.call(this,aArg);this.__proto__=
C.IO;},_className:"Core::LayoutQuadContext"};C.J6={AL:null,O:null,C6:null,Da:null
,BY:null,Gv:null,_Init:function(aArg){this.__proto__=C.J6;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.AL)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.C6)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Da)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.BY)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Gv)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))
A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.MZ={C4:null,Ay:null,At:null,Nt:false,Qy:function(){if(!this.C4)return;var Ds=
this.C4;this.C4.Dr=null;this.C4=null;B.ow([this,this.L6],this);Ds.Mz(this);},QP:
function(Ag){if(!!this.C4)return;if(!this.At)return;this.C4=this.At;this.At=this.
At.O;if(!!this.At)this.At.W=null;else this.Ay=null;this.C4.O=null;this.Nt=true;this.
C4.GO(this);this.Nt=false;},QX:function(Ag){B.ow([this,this.QP],this);},QW:function(
Ag){B.ow([this,this.QX],this);},L6:function(Ag){B.ow([this,this.QW],this);},Og:function(
Bt){if(!Bt||!Bt.Dr)return;if(Bt.Dr!==this)throw new Error(Lx);var N9=false;if(this.
C4===Bt){this.C4=null;N9=true;B.ow([this,this.L6],this);}else{if(!!Bt.O)Bt.O.W=Bt.
W;else this.Ay=Bt.W;if(!!Bt.W)Bt.W.O=Bt.O;else this.At=Bt.O;Bt.W=null;Bt.O=null;
}Bt.Dr=null;if(N9)Bt.My(this);},P4:function(Bt,Qr){if(!Bt)return;if(!!Bt.Dr)throw new
Error(Ly);Bt.Dr=this;if(Qr){Bt.O=this.At;if(!!this.At)this.At.W=Bt;else this.Ay=
Bt;this.At=Bt;}else{Bt.W=this.Ay;if(!!this.Ay)this.Ay.O=Bt;else this.At=Bt;this.
Ay=Bt;}if(!this.C4)B.ow([this,this.L6],this);},_Init:function(aArg){this.__proto__=
C.MZ;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.C4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Ay)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.At)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Core::TaskQueue"};C.HO={Dr:null,W:null,O:null,Mz:function(
H$){},My:function(H$){},GO:function(H$){this.Mk();},D7:function(){if(!!this.Dr&&(
this.Dr.C4===this))this.Dr.Qy();},Mk:function(){if(!!this.Dr)this.Dr.Og(this);},
Kr:function(){return!!this.Dr&&(this.Dr.C4===this);},_Init:function(aArg){this.__proto__=
C.HO;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.Dr)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Core::Task"};C.EV={resource:null,Dt:function(){this.
resource=null;},Ci:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=C.EV;this.Ci(aArg);B.hJ++;},_Done:function(){this.Dt();this.__proto__=
null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={HE:null,timer:null,Ar:0,Period:1000,IJ:0,AW:false,Dt:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},JN:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},HC:function(value){if(value<0)value=0;if(value===
this.Period)return;this.Period=value;if(this.AW)this.JN(this.IJ,value);},HA:function(
value){if(value<0)value=0;if(value===this.IJ)return;this.IJ=value;if(this.AW)this.
JN(value,this.Period);},AS:function(value){if(value===this.AW)return;this.AW=value;
if(value)this.JN(this.IJ,this.Period);else this.JN(0,0);this.Ar=this.Hr();},Hr:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},
Trigger:function(){var A;this.Ar=this.Hr();if(!this.Period)this.AS(false);(A=this.
HE)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.hJ++;
},_Done:function(){this.Dt();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.HE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:
"Core::Timer"};C.SF={BB:0x1,Ro:0x2,RT:0x4,SD:0x8,AW:0x10,Sr:0x20,RU:0x40,R5:0x80
,RS:0x100,RZ:0x200,RL:0x400,Se:0x800,M0:0x1000,SE:0x2000,R_:0x4000,R$:0x8000,RF:
0x10000,R9:0x20000,So:0x40000};C.C1={Sf:0x1,Sg:0x2,Rk:0x4,Rl:0x8,Rm:0x10,Rj:0x20
};C.RW={OG:0,SA:1,Ru:2,R0:3,Si:4,SB:5,SC:6,Rv:7,Rw:8,R2:9,R1:10,Sk:11,Sj:12};C.Es={
OG:0,Sy:1,Left:2,Rs:3,P6:4,Oe:5,Sz:6,Right:7,Rt:8};C.KeyCode={NoKey:0,Ok:1,Exit:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.Sh={SJ:0x1,SG:0x2,SH:0x4,SI:0x8,R4:
0x10,RV:0x20};
C._Init=function(){C.Ea.__proto__=C.Ax;C.Bj.__proto__=C.Ax;C.I.__proto__=C.Bj;C.Root.
__proto__=C.I;C.KeyEvent.__proto__=C.Event;C.Hi.__proto__=C.Event;C.DT.__proto__=
C.Event;C.GF.__proto__=C.Event;C.HG.__proto__=C.Bj;C.Lf.__proto__=C.I;C.HL.__proto__=
C.Ea;C.I4.__proto__=C.Bj;C.KP.__proto__=C.Bj;C.IO.__proto__=C.IN;};C._ReInit=function(
){};C.CK=function(D){};return C;})();

/* Embedded Wizard */