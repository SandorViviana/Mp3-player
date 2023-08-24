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
Core=(function(){var B=EmWiApp;var D={};
var Ap=[0,0];var AN=[0,0,0,0];var Cc="The view does not belong to this group";var
C6="No view to restack";var C7="View is not in this group";var Dr="No view to remove";
var Ds="No view to add";var EK="View already in a group";var EL="Recursive invalidate during active update cycle.";
var EM=[-8,-8,9,9];var GM=[0,0,1,1];var GN="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.Bl={As:null,Ah:null,G:null,Au:null,F:0x103,BJ:0x14,EV:function(U,Fz){},Ht:function(
C){var A;var Ae=C^this.BJ;if(!Ae)return;this.BJ=C;if(!!this.Au&&!((this.F&0x400)===
0x400)){this.G.F=this.G.F|0x5000;B.ow([A=this.G,A.Bi],this);this.G.Ai([0,0,(A=this.
G.M)[2]-A[0],A[3]-A[1]]);}if(!!this.Au&&((this.F&0x400)===0x400)){this.Au.DH.F=this.
Au.DH.F|0x1000;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi],this);}},Fg:function(
){var W=this.G;while(!!W){var Cv=(D.Root.isPrototypeOf(W)?W:null);if(!!Cv)return Cv;
W=W.G;}return null;},B$:function(At,aClip,aOffset,AF,aBlend){},AW:function(Al){return null;
},Dj:function(Aa,K,BM,DY,Co,D1){return null;},Fb:function(Aa){return Aa;},Fc:function(
U,BX){return Ap;},Gh:function(aOffset,Fy){},GetExtent:function(){return AN;},A4:
function(CL,Du){var A;if(((this.F&0x200)===0x200))CL=CL&~0x400;var G8=(this.F&~Du
)|CL;var Dz=G8^this.F;this.F=G8;if(!!this.G&&!!(Dz&0x14)){var HL=((this.F&0x14)===
0x14);if(HL&&!this.G.B1)this.G.DT(this);if(!HL&&(this.G.B1===this))this.G.DT(this.
G.Hk(this,0x14));}if(!!this.G&&!!(Dz&0x403))this.G.Ai(this.GetExtent());if(((!!this.
Au&&!!this.G)&&((G8&0x400)===0x400))&&((Dz&0x1)===0x1)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi],this);}if(!!this.G&&((Dz&0x400)===0x400
)){this.Au=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi
],this);}},_Init:function(aArg){this.__proto__=D.Bl;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
As)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ah)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Au)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null
,_cycle:0,_observers:null,_className:"Core::View"};D.Ew={A0:B.vw,Bk:B.vw,AZ:B.vw
,Bj:B.vw,EV:function(U,Fz){var V=B._NewObject(D.Fm,0);this.Au=null;V.BA=this.GetExtent(
);V.Ag=U;V.DH=Fz;V.E3=this.Bj;V.E4=this.AZ;V.E5=this.Bk;V.E6=this.A0;this.Au=V;}
,Fc:function(U,BX){var A;var AR=this.BJ;var V=(D.Fm.isPrototypeOf(A=this.Au)?A:null
);var O=V.BA[0];var P=V.BA[1];var Q=V.BA[2];var R=V.BA[3];var Bz=[U[2]-U[0],U[3]-
U[1]];var AC=Q-O;var AA=R-P;if(!BX){var B9=[(A=V.Ag)[2]-A[0],A[3]-A[1]];O=O-V.Ag[
0];P=P-V.Ag[1];if(B9[0]!==Bz[0]){var A6=((AR&0x4)===0x4);var A7=((AR&0x8)===0x8);
var Ct=((AR&0x1)===0x1);if(!A6&&(Ct||!A7))O=((O*Bz[0])/B9[0])|0;if(!A7&&(Ct||!A6
)){Q=Q-V.Ag[0];Q=((Q*Bz[0])/B9[0])|0;Q=Q-Bz[0];}else Q=Q-V.Ag[2];O=O+U[0];Q=Q+U[
2];if(!Ct){if(A6&&!A7)Q=O+AC;else if(!A6&&A7)O=Q-AC;else{O=O+((((Q-O)-AC)/2)|0);
Q=O+AC;}}}else{Q=Q-V.Ag[2];O=O+U[0];Q=Q+U[2];}if(B9[1]!==Bz[1]){var A8=((AR&0x10
)===0x10);var A5=((AR&0x20)===0x20);var Cu=((AR&0x2)===0x2);if(!A8&&(Cu||!A5))P=((
P*Bz[1])/B9[1])|0;if(!A5&&(Cu||!A8)){R=R-V.Ag[1];R=((R*Bz[1])/B9[1])|0;R=R-Bz[1];
}else R=R-V.Ag[3];P=P+U[1];R=R+U[3];if(!Cu){if(A8&&!A5)R=P+AA;else if(!A8&&A5)P=
R-AA;else{P=P+((((R-P)-AA)/2)|0);R=P+AA;}}}else{R=R-V.Ag[3];P=P+U[1];R=R+U[3];}}
else{switch(BX){case 3:{O=U[0];Q=O+AC;}break;case 4:{Q=U[2];O=Q-AC;}break;case 1:{
P=U[1];R=P+AA;}break;case 2:{R=U[3];P=R-AA;}break;default:;}if((BX===3)||(BX===4
)){var A8=((AR&0x10)===0x10);var A5=((AR&0x20)===0x20);var Cu=((AR&0x2)===0x2);if(
Cu){P=U[1];R=U[3];}else if(A8&&!A5){P=U[1];R=P+AA;}else if(A5&&!A8){R=U[3];P=R-AA;
}else{P=U[1]+((((U[3]-U[1])-AA)/2)|0);R=P+AA;}}if((BX===1)||(BX===2)){var A6=((AR&
0x4)===0x4);var A7=((AR&0x8)===0x8);var Ct=((AR&0x1)===0x1);if(Ct){O=U[0];Q=U[2];
}else if(A6&&!A7){O=U[0];Q=O+AC;}else if(A7&&!A6){Q=U[2];O=Q-AC;}else{O=U[0]+((((
U[2]-U[0])-AC)/2)|0);Q=O+AC;}}}V.isEmpty=(O>=Q)||(P>=R);AC=(Q-O)-1;AA=(R-P)-1;var
CP=V.BA[0];var CQ=V.BA[1];var CD=(V.BA[2]-CP)-1;var CC=(V.BA[3]-CQ)-1;if(!CD)CD=
1;if(!CC)CC=1;if(((this.F&0x100)===0x100)){this.Bj=[O+((((V.E3[0]-CP)*AC)/CD)|0)
,P+((((V.E3[1]-CQ)*AA)/CC)|0)];this.AZ=[O+((((V.E4[0]-CP)*AC)/CD)|0),P+((((V.E4[
1]-CQ)*AA)/CC)|0)];this.Bk=[O+((((V.E5[0]-CP)*AC)/CD)|0),P+((((V.E5[1]-CQ)*AA)/CC
)|0)];this.A0=[O+((((V.E6[0]-CP)*AC)/CD)|0),P+((((V.E6[1]-CQ)*AA)/CC)|0)];}else{
this.Fq([O+((((V.E3[0]-CP)*AC)/CD)|0),P+((((V.E3[1]-CQ)*AA)/CC)|0)]);this.Fr([O+((((
V.E4[0]-CP)*AC)/CD)|0),P+((((V.E4[1]-CQ)*AA)/CC)|0)]);this.Fs([O+((((V.E5[0]-CP)
*AC)/CD)|0),P+((((V.E5[1]-CQ)*AA)/CC)|0)]);this.Ft([O+((((V.E6[0]-CP)*AC)/CD)|0)
,P+((((V.E6[1]-CQ)*AA)/CC)|0)]);this.Au=V;}return[AC+1,AA+1];},Gh:function(aOffset
,Fy){if(Fy){this.Bj=B.aak(this.Bj,aOffset);this.AZ=B.aak(this.AZ,aOffset);this.Bk=
B.aak(this.Bk,aOffset);this.A0=B.aak(this.A0,aOffset);}else{this.Fq(B.aak(this.Bj
,aOffset));this.Fr(B.aak(this.AZ,aOffset));this.Fs(B.aak(this.Bk,aOffset));this.
Ft(B.aak(this.A0,aOffset));}},GetExtent:function(){if(!!this.Au&&this.Au.isEmpty
)return AN;var O=this.Bj[0];var P=this.Bj[1];var Q=this.Bk[0];var R=this.Bk[1];if((((
this.A0[0]!==O)||(this.AZ[1]!==P))||(this.AZ[0]!==Q))||(this.A0[1]!==R)){if(this.
AZ[0]<O)O=this.AZ[0];if(this.Bk[0]<O)O=this.Bk[0];if(this.A0[0]<O)O=this.A0[0];if(
this.AZ[1]<P)P=this.AZ[1];if(this.Bk[1]<P)P=this.Bk[1];if(this.A0[1]<P)P=this.A0[
1];if(this.Bj[0]>Q)Q=this.Bj[0];if(this.AZ[0]>Q)Q=this.AZ[0];if(this.A0[0]>Q)Q=this.
A0[0];if(this.Bj[1]>R)R=this.Bj[1];if(this.AZ[1]>R)R=this.AZ[1];if(this.A0[1]>R)
R=this.A0[1];}else{var tmp;if(Q<O){tmp=O;O=Q;Q=tmp;}if(R<P){tmp=P;P=R;R=tmp;}}return[
O,P,Q+1,R+1];},Ft:function(C){var A;if(B.z8(C,this.A0))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Au=null;this.A0=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.ow([A=this.G,A.Bi],this);}},Fs:function(C){var A;if(B.z8(C,this.Bk))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Au=null;this.Bk=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi],this);}},Fr:function(C){var A;if(B.z8(C
,this.AZ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.
Au=null;this.AZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());
if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi],this);}},Fq:function(C){var
A;if(B.z8(C,this.Bj))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));this.Au=null;this.Bj=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi],this);}},Gf:function(
Dv){var Aw=B.aan(4,B.vw,null);var I=0;var AB=3;var G2=false;var G3=false;Aw.Set(
0,this.Bj);Aw.Set(1,this.AZ);Aw.Set(2,this.Bk);Aw.Set(3,this.A0);while(I<4){var Ia=
Aw.Get(I)[0];var FU=Aw.Get(I)[1];var JM=Aw.Get(AB)[0];var Hh=Aw.Get(AB)[1];if(((
FU>Dv[1])!==(Hh>Dv[1]))||((FU<Dv[1])!==(Hh<Dv[1]))){var Ib=((((JM-Ia)*(Dv[1]-FU)
)/(Hh-FU))|0)+Ia;if(Dv[0]>Ib)G2=!G2;if(Dv[0]<Ib)G3=!G3;}AB=I;I=I+1;}return G2||G3;
},Im:function(){return((((this.Bj[0]===this.A0[0])&&(this.AZ[0]===this.Bk[0]))&&(
this.Bj[1]===this.AZ[1]))&&(this.Bk[1]===this.A0[1]))||((((this.Bj[0]===this.AZ[
0])&&(this.Bk[0]===this.A0[0]))&&(this.Bj[1]===this.A0[1]))&&(this.AZ[1]===this.
Bk[1]));},_Init:function(aArg){D.Bl._Init.call(this,aArg);this.__proto__=D.Ew;},
_className:"Core::QuadView"};D.AU={M:B.vx,EV:function(U,Fz){var V=B._NewObject(D.
Fl,0);V.BA=this.M;V.Ag=U;V.DH=Fz;this.Au=V;},Fc:function(U,BX){var A;var AR=this.
BJ;var V=this.Au;var O=V.BA[0];var P=V.BA[1];var Q=V.BA[2];var R=V.BA[3];var Bz=[
U[2]-U[0],U[3]-U[1]];var AC=Q-O;var AA=R-P;if(!BX){var B9=[(A=V.Ag)[2]-A[0],A[3]-
A[1]];O=O-V.Ag[0];P=P-V.Ag[1];if(B9[0]!==Bz[0]){var A6=((AR&0x4)===0x4);var A7=((
AR&0x8)===0x8);var Ct=((AR&0x1)===0x1);if(!A6&&(Ct||!A7))O=((O*Bz[0])/B9[0])|0;if(
!A7&&(Ct||!A6)){Q=Q-V.Ag[0];Q=((Q*Bz[0])/B9[0])|0;Q=Q-Bz[0];}else Q=Q-V.Ag[2];O=
O+U[0];Q=Q+U[2];if(!Ct){if(A6&&!A7)Q=O+AC;else if(!A6&&A7)O=Q-AC;else{O=O+((((Q-
O)-AC)/2)|0);Q=O+AC;}}}else{Q=Q-V.Ag[2];O=O+U[0];Q=Q+U[2];}if(B9[1]!==Bz[1]){var
A8=((AR&0x10)===0x10);var A5=((AR&0x20)===0x20);var Cu=((AR&0x2)===0x2);if(!A8&&(
Cu||!A5))P=((P*Bz[1])/B9[1])|0;if(!A5&&(Cu||!A8)){R=R-V.Ag[1];R=((R*Bz[1])/B9[1]
)|0;R=R-Bz[1];}else R=R-V.Ag[3];P=P+U[1];R=R+U[3];if(!Cu){if(A8&&!A5)R=P+AA;else
if(!A8&&A5)P=R-AA;else{P=P+((((R-P)-AA)/2)|0);R=P+AA;}}}else{R=R-V.Ag[3];P=P+U[1
];R=R+U[3];}}else{switch(BX){case 3:{O=U[0];Q=O+AC;}break;case 4:{Q=U[2];O=Q-AC;
}break;case 1:{P=U[1];R=P+AA;}break;case 2:{R=U[3];P=R-AA;}break;default:;}if((BX===
3)||(BX===4)){var A8=((AR&0x10)===0x10);var A5=((AR&0x20)===0x20);var Cu=((AR&0x2
)===0x2);if(Cu){P=U[1];R=U[3];}else if(A8&&!A5){P=U[1];R=P+AA;}else if(A5&&!A8){
R=U[3];P=R-AA;}else{P=U[1]+((((U[3]-U[1])-AA)/2)|0);R=P+AA;}}if((BX===1)||(BX===
2)){var A6=((AR&0x4)===0x4);var A7=((AR&0x8)===0x8);var Ct=((AR&0x1)===0x1);if(Ct
){O=U[0];Q=U[2];}else if(A6&&!A7){O=U[0];Q=O+AC;}else if(A7&&!A6){Q=U[2];O=Q-AC;
}else{O=U[0]+((((U[2]-U[0])-AC)/2)|0);Q=O+AC;}}}V.isEmpty=(O>=Q)||(P>=R);if(((this.
F&0x100)===0x100))this.M=[O,P,Q,R];else{this.An([O,P,Q,R]);this.Au=V;}return[Q-O
,R-P];},Gh:function(aOffset,Fy){if(Fy)this.M=B.aam(this.M,aOffset);else this.An(
B.aam(this.M,aOffset));},GetExtent:function(){return this.M;},An:function(C){var
A;if(B.z9(C,this.M))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);this.
Au=null;this.M=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bi],this);}},_Init:function(aArg){D.Bl.
_Init.call(this,aArg);this.__proto__=D.AU;},_className:"Core::RectView"};D.Am={Cq:
null,BU:null,FJ:null,B1:null,Bd:function(aArg){this.Be();},B$:function(At,aClip,
aOffset,AF,aBlend){var A;AF=((AF+1)*255)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);
this.Jw(At,aClip,B.aak(aOffset,this.M.slice(0,2)),AF,aBlend);},Dj:function(Aa,K,
BM,DY,Co,D1){var A;var H=this.BU;var DA=null;var N=AN;var BO=null;if(((A=B.kz(Aa
,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;Aa=B.aal(Aa,this.M.slice(0,2));if(
!!Co){H=Co;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400)&&!
BO){BO=H.Ah;while(!!BO&&!((BO.F&0x200)===0x200))BO=BO.Ah;if(!!BO)N=B.kz(Aa,BO.GetExtent(
));else N=AN;}if(BO===H){BO=null;N=AN;}if((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10
))&&!((H.F&0x40000)===0x40000))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===
0x10000)||(null===H))){var BA=H.GetExtent();var FD=DY;var Dy=null;if(FD===H)FD=null;
if(((H.F&0x400)===0x400)){if(!(((A=B.kz(BA,N))[0]>=A[2])||(A[1]>=A[3])))Dy=H.Dj(
N,K,BM,FD,Co,D1);}else if(!(((A=B.kz(BA,Aa))[0]>=A[2])||(A[1]>=A[3]))||(DY===H))
Dy=H.Dj(Aa,K,BM,FD,Co,D1);H=H.Ah;if(!!Dy){if(!DA||((Dy.D$<DA.D$)&&(Dy.D$>=0)))DA=
Dy;if(!Dy.D$)H=null;}}else H=H.Ah;Co=null;}return DA;},Fb:function(Aa){var A;var
HD;var H=this.Cq;var ES=AN;var E2=true;var result=(Aa=HD=B.aal(Aa,this.M.slice(0
,2)),HD);while(!!H){if(((H.F&0x200)===0x200)){var E1=(D.Eu.isPrototypeOf(H)?H:null
);ES=B.kz(Aa,E1.M);E2=((E1.F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===
0x400)){if(E2){var N=B.kz(H.GetExtent(),ES);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=
B.vS(result,H.Fb(N));}}else{var N=B.kz(H.GetExtent(),Aa);if(!((N[0]>=N[2])||(N[1
]>=N[3])))result=B.vS(result,H.Fb(N));}}H=H.As;}return B.kz(B.aam(result,this.M.
slice(0,2)),this.M);},A4:function(CL,Du){var A;var JA=this.F;D.AU.A4.call(this,CL
,Du);var Dz=this.F^JA;if(!!this.B1&&((Dz&0x40)===0x40)){if(((this.F&0x40)===0x40
))this.B1.A4(0x40,0x0);else this.B1.A4(0x0,0x40);}if(!!Dz){this.F=this.F|0x8000;
B.ow([this,this.Bi],this);}},An:function(C){var A;if(B.z9(C,this.M))return;var Dc=[(
A=this.M)[2]-A[0],A[3]-A[1]];var G7=[C[2]-C[0],C[3]-C[1]];var D9=!B.z8(Dc,G7);D.
AU.An.call(this,C);if((D9&&(Dc[0]>0))&&(Dc[1]>0)){var Ag=[].concat(Ap,Dc);var H=
this.Cq;while(!!H){if((!H.Au&&(H.BJ!==0x14))&&!((H.F&0x400)===0x400))H.EV(Ag,null
);H=H.As;}}if(D9){this.F=this.F|0x5000;B.ow([this,this.Bi],this);}},H2:function(
Al){var HP=(D.KeyEvent.isPrototypeOf(Al)?Al:null);var Cg=this.FJ;if(!HP)return null;
while(!!Cg&&(!Cg.BE||!Cg.AW(HP)))Cg=Cg.As;return Cg;},Jw:function(At,aClip,aOffset
,AF,aBlend){var A;var H=this.Cq;var ES=AN;var E2=true;this.Ij(At,aClip,aOffset,AF
,aBlend);while(!!H){if(((H.F&0x200)===0x200)){var E1=(D.Eu.isPrototypeOf(H)?H:null
);ES=B.kz(aClip,B.aam(E1.M,aOffset));E2=((E1.F&0x1)===0x1);}if(((H.F&0x1)===0x1)
){if(((H.F&0x400)===0x400)){if(E2){var N=B.kz(B.aam(H.GetExtent(),aOffset),ES);if(
!((N[0]>=N[2])||(N[1]>=N[3])))H.B$(At,N,aOffset,AF,aBlend);}}else{var N=B.kz(B.aam(
H.GetExtent(),aOffset),aClip);if(!((N[0]>=N[2])||(N[1]>=N[3])))H.B$(At,N,aOffset
,AF,aBlend);}}H=H.As;}this.Il(At,aClip,aOffset,AF,aBlend);},JG:function(){var A;
var G0=((this.F&0x1000)===0x1000);var CR=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var CE=
false;var D6=AN;var GY=AN;var H=this.BU;var BO=null;while(!!H){if(((H.F&0x800)===
0x800)){CE=true;H.F=H.F&~0x800;}if(CE&&((H.F&0x200)===0x200))CE=false;H=H.Ah;}CE=
false;H=this.Cq;if(G0){this.F=this.F&~0x1000;G0=!((CR[0]>=CR[2])||(CR[1]>=CR[3])
);}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.Au&&(H.Au.DH
!==BO))H.Au=null;if((!H.Au&&CE)&&(H.BJ!==0x14))H.EV(GY,BO);}if(!!H.Au){if(G0&&!((
H.F&0x400)===0x400))H.Fc(CR,0);if(CE&&((H.F&0x400)===0x400))H.Fc(GY,0);}if(((H.F&
0x200)===0x200)){CE=((H.F&0x1000)===0x1000);BO=(D.Eu.isPrototypeOf(H)?H:null);if(
CE){H.F=H.F&~0x1000;D6=BO.M;GY=D6;CE=!((D6[0]>=D6[2])||(D6[1]>=D6[3]));}if(CE)this.
Ai(BO.M);}H=H.As;}this.F=this.F&~0x2000;this.HA([CR[2]-CR[0],CR[3]-CR[1]]);},Bi:
function(Ax){var A;var JL=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000
)){this.F=this.F&~0x4000;this.JG();}if(((this.F&0x8000)===0x8000)||JL){this.F=this.
F&~0x8000;this.EJ(this.F);}},DT:function(C){var A;if(!!C&&(C.G!==this))throw new
Error(Cc);if(!!C&&!((C.F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))
C=null;if(C===this.B1)return;if(!!this.B1)this.B1.A4(0x0,0x60);this.B1=C;if(!!C){
if(((this.F&0x40)===0x40))C.A4(0x60,0x0);else C.A4(0x20,0x0);}},Fu:function(C){if(
C)this.A4(0x1,0x0);else this.A4(0x0,0x1);},Il:function(At,aClip,aOffset,AF,aBlend
){},Ij:function(At,aClip,aOffset,AF,aBlend){},GetMinimalSize:function(){return Ap;
},DispatchEvent:function(Al){var A;var H=this.B1;var W=(D.Am.isPrototypeOf(H)?H:
null);var AK=null;if(!!H&&((((H.F&0x10000)===0x10000)||((H.F&0x40000)===0x40000)
)||((H.F&0x20000)===0x20000))){H=null;W=null;}if(!!W)AK=W.DispatchEvent(Al);else
if(!!H)AK=H.AW(Al);if(!AK)AK=this.AW(Al);if(!AK)AK=this.H2(Al);return AK;},BroadcastEventAtPosition:
function(Al,HF,aFilter){var A;var H=this.BU;var AK=null;while(!!H&&!AK){if((!aFilter||((
A=aFilter)&&((H.F&A)===A)))&&B.vt(H.GetExtent(),HF)){var W=(D.Am.isPrototypeOf(H
)?H:null);if(!!W)AK=W.BroadcastEventAtPosition(Al,B.aaj(HF,W.M.slice(0,2)),aFilter
);else AK=H.AW(Al);}H=H.Ah;}if(!AK)AK=this.AW(Al);return AK;},BroadcastEvent:function(
Al,aFilter){var A;var H=this.BU;var AK=null;while(!!H&&!AK){if(!aFilter||((A=aFilter
)&&((H.F&A)===A))){var W=(D.Am.isPrototypeOf(H)?H:null);if(!!W)AK=W.BroadcastEvent(
Al,aFilter);else AK=H.AW(Al);}H=H.Ah;}if(!AK)AK=this.AW(Al);if(!AK)AK=this.H2(Al
);return AK;},HA:function(aSize){},EJ:function(C9){},Be:function(){this.F=this.F|
0x8000;B.ow([this,this.Bi],this);},Ai:function(Aa){var A;var W=this;while(!!W&&!((
Aa[0]>=Aa[2])||(Aa[1]>=Aa[3]))){if(!W.G&&(W!==this)){W.Ai(Aa);return;}if(!((W.F&
0x1)===0x1))return;Aa=B.kz(B.aam(Aa,W.M.slice(0,2)),W.M);W=W.G;}},Hk:function(J,
aFilter){var A;if(!J||(J.G!==this))return null;var Db=J.As;var Df=J.Ah;var EZ=0x10000;
if(((aFilter&0x10000)===0x10000))EZ=0x0;while(!!Db||!!Df){if((!!Db&&(!aFilter||((
A=aFilter)&&((Db.F&A)===A))))&&(!EZ||!((A=EZ)&&((Db.F&A)===A))))return Db;if((!!
Df&&(!aFilter||((A=aFilter)&&((Df.F&A)===A))))&&(!EZ||!((A=EZ)&&((Df.F&A)===A)))
)return Df;if(!!Db)Db=Db.As;if(!!Df)Df=Df.Ah;}return null;},DW:function(J){var A;
if(!J)throw new Error(C6);if(J.G!==this)throw new Error(C7);if(!J.As)return;var D2=
this.BU;if(((D2===J)||!D2)||(D2.As===J))return;if(((J.F&0x401)===0x401)){if(!!J.
Ah&&!!J.Au)J.Ah.F=J.Ah.F|0x800;J.F=J.F|0x800;this.F=this.F|0x4000;B.ow([this,this.
Bi],this);}if(((J.F&0x200)===0x200)){if(!!J.Ah)J.Ah.F=J.Ah.F|0x800;this.F=this.F|
0x4000;B.ow([this,this.Bi],this);}if(!!J.Ah)J.Ah.As=J.As;else this.Cq=J.As;J.As.
Ah=J.Ah;J.Ah=D2;J.As=D2.As;D2.As=J;if(!!J.As)J.As.Ah=J;else this.BU=J;if(((J.F&0x1
)===0x1))this.Ai(J.GetExtent());},DV:function(J){var A;if(!J)throw new Error(Dr);
if(J.G!==this)throw new Error(C7);if((((J.F&0x401)===0x401)&&!!J.Ah)&&!!J.Au){J.
Ah.F=J.Ah.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bi],this);}if(((J.F&0x200
)===0x200)){if(!!J.Ah)J.Ah.F=J.Ah.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bi
],this);}J.Au=null;if(this.B1===J)this.DT(this.Hk(J,0x14));if(!!J.Ah)J.Ah.As=J.As;
if(!!J.As)J.As.Ah=J.Ah;if(this.Cq===J)this.Cq=J.As;if(this.BU===J)this.BU=J.Ah;J.
G=null;J.As=null;J.Ah=null;if(((J.F&0x1)===0x1))this.Ai(J.GetExtent());},AY:function(
J,D0){var A;if(!J)throw new Error(Ds);if(!!J.G)throw new Error(EK);var CM=null;if((
D0<0)&&!!this.BU){CM=this.BU;D0=D0+1;}while(((D0<0)&&!!CM)&&!!CM.Ah){CM=CM.Ah;D0=
D0+1;}if(!CM){J.G=this;J.Ah=this.BU;if(!!this.BU)this.BU.As=J;if(!this.Cq)this.Cq=
J;this.BU=J;}else{J.G=this;J.Ah=CM.Ah;J.As=CM;CM.Ah=J;if(!!J.Ah)J.Ah.As=J;else this.
Cq=J;}if(((J.F&0x1)===0x1))this.Ai(J.GetExtent());if(((!this.B1&&((J.F&0x4)===0x4
))&&((J.F&0x10)===0x10))&&!((J.F&0x10000)===0x10000))this.DT(J);if(((J.F&0x401)===
0x401)){J.F=J.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bi],this);}if(((J.F&0x200
)===0x200)){J.F=J.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bi],this);}},_Init:
function(aArg){D.AU._Init.call(this,aArg);this.__proto__=D.Am;this.F=0x1F;this.Bd(
aArg);},_Mark:function(E){var A;D.AU._Mark.call(this,E);if((A=this.Cq)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.BU)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.FJ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B1)&&(A._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::Group"};D.Root={BQ:null,Av:B.aan(10,null,null),D3:
null,CO:null,Fa:0,AD:0,A_:B.aan(10,0,null),FC:B.aan(10,B.vx,null),B7:B.aan(10,0,
null),CB:B.aan(10,B.vw,null),D5:B.aan(10,0,null),CN:B.aan(10,B.vw,null),B6:B.aan(
10,B.vw,null),BN:B.aan(10,B.vw,null),Cp:B.aan(10,B.vw,null),Af:0,FF:0,FE:0,Bh:B.
aan(4,0,null),AP:B.aan(4,B.vx,null),AO:0,EX:0,D8:0,G1:true,Bd:function(aArg){if(
!!!this.Ak){var obj=this;B.aaG(obj);}},Fg:function(){return this;},B$:function(At
,aClip,aOffset,AF,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(!fullScreenUpdate
)At.Ga(aClip,B.aam(B.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);D.Am.B$.call(this,At,aClip,aOffset,AF,aBlend);},A4:
function(CL,Du){var A;D.Am.A4.call(this,CL,Du);if(!this.G&&(((CL&0x1)===0x1)||((
Du&0x1)===0x1)))this.Ai([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((CL&0x2
)===0x2)||((Du&0x2)===0x2)))this.Ai([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DT:function(
C){if((C!==null)||!C)D.Am.DT.call(this,C);},DispatchEvent:function(Al){if(!!Al){
Al.Ek=!!this.AD;if(!!this.AD)Al.AL=this.AD;}var AK;AK=D.Am.DispatchEvent.call(this
,Al);this.AD=0;return AK;},BroadcastEvent:function(Al,aFilter){if(!!Al){Al.Ek=!!
this.AD;if(!!this.AD)Al.AL=this.AD;}var AK=D.Am.BroadcastEvent.call(this,Al,aFilter
);this.AD=0;return AK;},Ai:function(Aa){var A;if(this.Fa>0)throw new Error(EL);var
fullScreenUpdate=false;fullScreenUpdate=B.mr;if(fullScreenUpdate)Aa=[0,0,(A=this.
M)[2]-A[0],A[3]-A[1]];if(!!this.G){D.Am.Ai.call(this,Aa);return;}Aa=B.kz(B.aam(Aa
,this.M.slice(0,2)),this.M);if((Aa[0]>=Aa[2])||(Aa[1]>=Aa[3]))return;var I;for(I=
0;I<this.AO;I=I+1)if(!(((A=B.kz(this.AP.Get(I),Aa))[0]>=A[2])||(A[1]>=A[3]))){this.
AP.Set(I,B.vS(this.AP.Get(I),Aa));this.Bh.Set(I,B.zS(this.AP.Get(I)));return;}if(
this.AO<3){this.AP.Set(this.AO,Aa);this.Bh.Set(this.AO,B.zS(Aa));this.AO=this.AO+
1;return;}var AB;var BP;var EW=0;var EY=0;var HH=2147483647;this.AP.Set(this.AO,
Aa);this.Bh.Set(this.AO,B.zS(Aa));for(AB=0;AB<=this.AO;AB=AB+1)for(BP=AB+1;BP<=this.
AO;BP=BP+1){var FT=B.zS(B.vS(this.AP.Get(AB),this.AP.Get(BP)));var H1=((FT<<8)/(
this.Bh.Get(AB)+this.Bh.Get(BP)))|0;if(H1<HH){HH=H1;EW=AB;EY=BP;}}this.AP.Set(EW
,B.vS(this.AP.Get(EW),this.AP.Get(EY)));this.Bh.Set(EW,B.zS(this.AP.Get(EW)));if(
EY!==this.AO){this.AP.Set(EY,this.AP.Get(this.AO));this.Bh.Set(EY,this.Bh.Get(this.
AO));}},Ju:function(){var A$=B._NewObject(D.Fe,0);A$.Ek=!!this.AD;if(!!this.AD)A$.
AL=this.AD;return A$;},Dx:function(){var A$=B._NewObject(D.DN,0);A$.Ek=!!this.AD;
if(!!this.AD)A$.AL=this.AD;return A$;},D4:function(){var A$=B._NewObject(D.FW,0);
A$.Ek=!!this.AD;if(!!this.AD)A$.AL=this.AD;return A$;},Jv:function(Ax){var I;var
DA=false;for(I=0;I<10;I=I+1)if(!!this.Av.Get(I)){var AS=this.BN.Get(I);var W=this.
Av.Get(I).G;while(!!W&&(W!==this)){AS=B.aaj(AS,W.M.slice(0,2));W=W.G;}if(!W&&(this.
Av.Get(I)!==this)){var tmp=this.Av.Get(I);this.Af=I;this.Av.Set(I,null);tmp.AW(this.
Dx().InitializeUp(I,this.CN.Get(I),this.CB.Get(I),this.B7.Get(I),this.A_.Get(I)+
1,this.B6.Get(I),false,this.BN.Get(I),this.Cp.Get(I)));this.BroadcastEvent(this.
D4().InitializeUp(I,this.A_.Get(I)+1,false,tmp,this.BN.Get(I)),0x18);}else{this.
B7.Set(I,(this.CO.AL-this.D5.Get(I))|0);if(this.B7.Get(I)<10)this.B7.Set(I,10);this.
Af=I;this.Av.Get(I).AW(this.Dx().InitializeHold(I,AS,this.CB.Get(I),this.B7.Get(
I),this.A_.Get(I)+1,this.B6.Get(I),this.BN.Get(I),this.Cp.Get(I)));DA=true;}}if(
!DA)this.CO.Bv(false);},GetFPS:function(){var ticksCount=0;var HM=0;ticksCount=((
new Date).getTime()-B.vs)|0;if(!!this.FF&&(ticksCount>this.FF))HM=((this.FE*1000
)/((ticksCount-this.FF)|0))|0;this.FE=0;this.FF=ticksCount;return HM;},Update:function(
){var A;if(!this.D3)this.D3=B._NewObject(B.Graphics.Canvas,0);this.D3.Hs([(A=this.
M)[2]-A[0],A[3]-A[1]]);this.D3.Update();return this.UpdateGE20(this.D3);},UpdateGE20:
function(At){if(!this.BeginUpdate())return AN;var CG=this.UpdateCanvas(At,Ap);this.
EndUpdate();return CG;},EndUpdate:function(){if(this.AO>0){this.FE=this.FE+1;this.
AO=0;}},UpdateCanvas:function(At,aOffset){var A;var CG=AN;var Jp=[].concat(aOffset
,B.aak(At.FrameSize,aOffset));var I;var AB=this.AO;this.Fa=this.Fa+1;At.DB=this;
for(I=0;(I<AB)&&(I<4);I=I+1)if(this.Bh.Get(I)>0){this.B$(At,B.aal(this.AP.Get(I)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);CG=B.vS(CG,B.kz(Jp,this.AP.Get(I))
);}else AB=AB+1;At.DB=null;this.Fa=this.Fa-1;if(!((CG[0]>=CG[2])||(CG[1]>=CG[3])
))return B.aal(CG,aOffset);else return CG;},GetUpdateRegion:function(FA){var I;var
AB=this.AO;if(FA<0)return AN;for(I=0;(I<AB)&&(I<4);I=I+1)if(!this.Bh.Get(I)){AB=
AB+1;FA=FA+1;}else if(I===FA)return this.AP.Get(I);return AN;},BeginUpdate:function(
){var A;var I;if(!!this.AO&&!B.z9(this.AP.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]])){var H$=B.aan(3,B.vx,null);var H_=this.AO;for(I=0;I<H_;I++)H$.Set(I,this.AP.
Get(I));for(I=0;I<H_;I++){var H3=B.aam(H$.Get(I),this.M.slice(0,2));var H4=this.
Fb(H3);if(!B.z9(H3,H4))this.Ai(B.aal(H4,this.M.slice(0,2)));}}var AB;var BP;for(
AB=0;AB<(this.AO-1);AB++)if(this.Bh.Get(AB)>0)for(BP=AB+1;BP<this.AO;BP++)if(this.
Bh.Get(BP)>0){var FT=B.zS(B.vS(this.AP.Get(AB),this.AP.Get(BP)));if(((FT-this.Bh.
Get(AB))-this.Bh.Get(BP))<0){this.AP.Set(AB,B.vS(this.AP.Get(AB),this.AP.Get(BP)
));this.Bh.Set(AB,FT);this.Bh.Set(BP,0);}}for(I=this.AO-1;I>=0;I--)if(!this.Bh.Get(
I))this.AO=this.AO-1;return this.AO;},DoesNeedUpdate:function(){if(this.AO>0)return true;
return false;},Initialize:function(aSize){this.An([].concat(Ap,aSize));if(this.G1
)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ai(this.M);return this;},SetRootFocus:
function(GP){if(GP===this.G1)return false;this.G1=GP;if(!GP)this.A4(0x0,0x40);else
this.A4(0x40,0x0);return true;},SetUserInputTimestamp:function(Jo){this.AD=Jo;},
DriveKeyboardHitting:function(AQ,EN,Cd){var A;var Hc=!!this.BQ;if(!!this.BQ&&((!
Cd||(this.EX!==AQ))||(this.D8!==EN))){var A$=null;var H=(D.Bl.isPrototypeOf(A=this.
BQ)?A:null);var Cg=(D.Dk.isPrototypeOf(A=this.BQ)?A:null);if(!!this.EX)A$=B._NewObject(
D.KeyEvent,0).Initialize(this.EX,false);if(this.D8!==0x00)A$=B._NewObject(D.KeyEvent
,0).Initialize2(this.D8,false);if(!!Cg)Cg.AW(A$);else if(!!H)H.AW(A$);this.EX=0;
this.D8=0x00;this.BQ=null;}if(!!this.BQ){var A$=null;var H=(D.Bl.isPrototypeOf(A=
this.BQ)?A:null);var Cg=(D.Dk.isPrototypeOf(A=this.BQ)?A:null);if(!!AQ)A$=B._NewObject(
D.KeyEvent,0).Initialize(AQ,true);if(this.D8!==0x00)A$=B._NewObject(D.KeyEvent,0
).Initialize2(EN,true);if(!!Cg)Cg.AW(A$);else if(!!H)H.AW(A$);}if(!this.BQ&&Cd){
if(!!AQ)this.BQ=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize(AQ,true
));if(EN!==0x00)this.BQ=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize2(
EN,true));if(!(D.Dk.isPrototypeOf(A=this.BQ)?A:null)&&!(D.Bl.isPrototypeOf(A=this.
BQ)?A:null))this.BQ=null;this.EX=AQ;this.D8=EN;Hc=Hc||!!this.BQ;}this.AD=0;return Hc;
},DriveCursorMovement:function(A1){return this.DriveMultiTouchMovement(this.Af,A1
);},DriveMultiTouchMovement:function(K,A1){if((K<0)||(K>9)){this.AD=0;return false;
}var BV=B.aaj(A1,this.BN.Get(K));this.BN.Set(K,A1);if(!this.Av.Get(K)||B.z8(BV,Ap
)){this.AD=0;return false;}var AS=A1;var W=this.Av.Get(K).G;while(!!W&&(W!==this
)){AS=B.aaj(AS,W.M.slice(0,2));W=W.G;}if(!W&&(this.Av.Get(K)!==this)){var tmp=this.
Av.Get(K);this.Af=K;this.Av.Set(K,null);tmp.AW(this.Dx().InitializeUp(K,this.CN.
Get(K),this.CB.Get(K),this.B7.Get(K),this.A_.Get(K)+1,this.B6.Get(K),false,this.
BN.Get(K),this.Cp.Get(K)));this.BroadcastEvent(this.D4().InitializeUp(K,this.A_.
Get(K)+1,false,tmp,A1),0x18);}else{this.CN.Set(K,AS);this.Af=K;this.Av.Get(K).AW(
this.Ju().Initialize(K,AS,this.CB.Get(K),BV,this.B7.Get(K),this.A_.Get(K)+1,this.
B6.Get(K),A1,this.Cp.Get(K)));}this.AD=0;return true;},DriveCursorHitting:function(
Cd,K,A1){return this.DriveMultiTouchHitting(Cd,K,A1);},DriveMultiTouchHitting:function(
Cd,K,A1){if((K<0)||(K>9)){this.AD=0;return false;}var ticksCount=this.AD;if(!ticksCount
)ticksCount=((new Date).getTime()-B.vs)|0;var JH=this.AD;this.DriveMultiTouchMovement(
K,A1);A1=this.BN.Get(K);this.AD=JH;if(Cd)this.Cp.Set(K,A1);if(Cd&&!this.Av.Get(K
)){var Bn;var AS=A1;if(B.vt(this.FC.Get(K),A1)&&((ticksCount-this.D5.Get(K))<=250
))this.A_.Set(K,this.A_.Get(K)+1);else this.A_.Set(K,0);this.FC.Set(K,B.aam(EM,A1
));this.D5.Set(K,ticksCount);Bn=this.Dj(B.aam(EM,A1),K,this.A_.Get(K)+1,null,null
,0x0);if(!!Bn){this.BroadcastEvent(this.D4().InitializeDown(K,this.A_.Get(K)+1,false
,Bn.Bl,A1),0x18);this.Av.Set(K,Bn.Bl);this.B6.Set(K,Bn.CJ);}else{this.Av.Set(K,null
);this.B6.Set(K,Ap);this.AD=0;return false;}var W=Bn.Bl.G;while(!!W&&(W!==this)){
AS=B.aaj(AS,W.M.slice(0,2));W=W.G;}this.CB.Set(K,AS);this.CN.Set(K,AS);this.B7.Set(
K,0);this.CO.Bv(true);this.Af=K;this.Av.Get(K).AW(this.Dx().InitializeDown(K,AS,
this.A_.Get(K)+1,this.B6.Get(K),false,A1));this.AD=0;return true;}if(!Cd&&!!this.
Av.Get(K)){var AS=A1;var W=this.Av.Get(K).G;while(!!W&&(W!==this)){AS=B.aaj(AS,W.
M.slice(0,2));W=W.G;}if(!W)AS=this.CN.Get(K);this.Af=K;var tmp=this.Av.Get(K);this.
Av.Set(K,null);tmp.AW(this.Dx().InitializeUp(K,AS,this.CB.Get(K),this.B7.Get(K),
this.A_.Get(K)+1,this.B6.Get(K),false,A1,this.Cp.Get(K)));this.BroadcastEvent(this.
D4().InitializeUp(K,this.A_.Get(K)+1,false,tmp,A1),0x18);this.AD=0;return true;}
this.AD=0;return false;},Hz:function(Cf,Fx,Co,D1){if(Cf===this)Cf=null;if(!this.
Av.Get(this.Af))return;var Bn;Bn=this.Dj(B.aam(EM,this.BN.Get(this.Af)),this.Af,
1,Cf,Co,D1);if(!!Bn&&(this.Av.Get(this.Af)!==Bn.Bl))this.Hi(Bn.Bl,Bn.CJ);if(!Bn&&(
this.Av.Get(this.Af)!==Fx))this.Hi(Fx,Ap);},Jb:function(Cf,Fx,Co){this.Hz(Cf,Fx,
Co,0x0);},Hi:function(Cf,B3){if(!this.Av.Get(this.Af)||(this.Av.Get(this.Af)===Cf
))return;var tmp=this.Av.Get(this.Af);this.Av.Set(this.Af,null);tmp.AW(this.Dx().
InitializeUp(this.Af,this.CN.Get(this.Af),this.CB.Get(this.Af),this.B7.Get(this.
Af),this.A_.Get(this.Af)+1,this.B6.Get(this.Af),true,this.BN.Get(this.Af),this.Cp.
Get(this.Af)));this.BroadcastEvent(this.D4().InitializeUp(this.Af,this.A_.Get(this.
Af)+1,true,tmp,this.BN.Get(this.Af)),0x18);var AS=this.BN.Get(this.Af);var W=null;
if(!!Cf)W=Cf.G;while(!!W&&(W!==this)){AS=B.aaj(AS,W.M.slice(0,2));W=W.G;}if(!W&&(
Cf!==this)){this.Av.Set(this.Af,null);return;}this.BroadcastEvent(this.D4().InitializeDown(
this.Af,this.A_.Get(this.Af)+1,true,Cf,this.BN.Get(this.Af)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-B.vs)|0;this.Av.Set(this.Af,Cf);this.B6.Set(this.
Af,B3);this.CB.Set(this.Af,AS);this.CN.Set(this.Af,AS);this.A_.Set(this.Af,0);this.
B7.Set(this.Af,0);this.D5.Set(this.Af,ticksCount);this.Cp.Set(this.Af,this.BN.Get(
this.Af));this.Av.Get(this.Af).AW(this.Dx().InitializeDown(this.Af,AS,this.A_.Get(
this.Af)+1,this.B6.Get(this.Af),true,this.Cp.Get(this.Af)));},_Init:function(aArg
){D.Am._Init.call(this,aArg);D.Timer._Init.call(this.CO={Ak:this},0);(this.Av=[]
).__proto__=D.Root.Av;(this.A_=[]).__proto__=D.Root.A_;(this.FC=[]).__proto__=D.
Root.FC;(this.B7=[]).__proto__=D.Root.B7;(this.CB=[]).__proto__=D.Root.CB;(this.
D5=[]).__proto__=D.Root.D5;(this.CN=[]).__proto__=D.Root.CN;(this.B6=[]).__proto__=
D.Root.B6;(this.BN=[]).__proto__=D.Root.BN;(this.Cp=[]).__proto__=D.Root.Cp;(this.
Bh=[]).__proto__=D.Root.Bh;(this.AP=[]).__proto__=D.Root.AP;this.__proto__=D.Root;
this.F=0x7F;this.CO.Eq(10);this.CO.Es=[this,this.Jv];this.Bd(aArg);},_Done:function(
){this.__proto__=D.Am;this.CO._Done();D.Am._Done.call(this);},_ReInit:function(){
D.Am._ReInit.call(this);this.CO._ReInit();},_Mark:function(E){var A;D.Am._Mark.call(
this,E);if((A=this.BQ)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aaf(this.Av,E);if((A=
this.D3)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.CO)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={AL:0,Ek:false,Bd:function(aArg){this.AL=this.
Ff();},Ff:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Bd(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null
,_className:"Core::Event"};D.KeyEvent={AM:0,Ao:0,Down:false,Initialize2:function(
AQ,Cd){this.AM=0;this.Ao=AQ;this.Down=Cd;if((AQ>=0x30)&&(AQ<=0x39))this.AM=(10+AQ
)-48;if((AQ>=0x41)&&(AQ<=0x5A))this.AM=(105+AQ)-65;if((AQ>=0x61)&&(AQ<=0x7A))this.
AM=(105+AQ)-97;if(AQ===0x20)this.AM=131;if(!this.AM)switch(AQ){case 0x2B:this.AM=
132;break;case 0x2D:this.AM=133;break;case 0x2A:this.AM=134;break;case 0x2F:this.
AM=135;break;case 0x3D:this.AM=136;break;case 0x2E:this.AM=137;break;case 0x2C:this.
AM=138;break;case 0x3A:this.AM=139;break;case 0x3B:this.AM=140;break;default:;}return this;
},Initialize:function(AQ,Cd){this.AM=AQ;this.Down=Cd;this.Ao=0x00;var GU=AQ-10;var
GT=AQ-105;if((GU>=0)&&(GU<=9))this.Ao=(48+GU)&0xFFFF;if((GT>=0)&&(GT<=25))this.Ao=(
65+GT)&0xFFFF;if(AQ===131)this.Ao=0x20;if(this.Ao===0x00)switch(AQ){case 132:this.
Ao=0x2B;break;case 133:this.Ao=0x2D;break;case 134:this.Ao=0x2A;break;case 135:this.
Ao=0x2F;break;case 136:this.Ao=0x3D;break;case 137:this.Ao=0x2E;break;case 138:this.
Ao=0x2C;break;case 139:this.Ao=0x3A;break;case 140:this.Ao=0x3B;break;default:;}
return this;},Ip:function(HE){switch(HE){case 141:return((this.Ao>=0x41)&&(this.
Ao<=0x5A))||((this.Ao>=0x61)&&(this.Ao<=0x7A));case 142:return(((this.Ao>=0x41)&&(
this.Ao<=0x5A))||((this.Ao>=0x61)&&(this.Ao<=0x7A)))||((this.Ao>=0x30)&&(this.Ao<=
0x39));case 143:return(this.Ao>=0x30)&&(this.Ao<=0x39);case 144:return(((this.Ao>=
0x41)&&(this.Ao<=0x46))||((this.Ao>=0x61)&&(this.Ao<=0x66)))||((this.Ao>=0x30)&&(
this.Ao<=0x39));case 145:return this.Ao!==0x00;case 146:return(this.Ao===0x00)&&
!!this.AM;case 147:return(((this.AM===6)||(this.AM===7))||(this.AM===4))||(this.
AM===5);case 148:return(this.Ao!==0x00)||!!this.AM;default:;}return HE===this.AM;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;}
,_className:"Core::KeyEvent"};D.FW={Gp:null,Ca:B.vw,BL:0,Bc:0,Down:false,B_:false
,InitializeUp:function(K,BM,Dt,GR,Ce){this.Down=false;this.Bc=K;this.BL=BM;this.
Ca=Ce;this.Gp=GR;this.B_=Dt;return this;},InitializeDown:function(K,BM,Dt,GR,Ce){
this.Down=true;this.Bc=K;this.BL=BM;this.Ca=Ce;this.Gp=GR;this.B_=Dt;return this;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.FW;},_Mark:
function(E){var A;D.Event._Mark.call(this,E);if((A=this.Gp)&&(A._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::CursorGrabEvent"};D.DN={Eh:B.vw,Ca:B.vw,BL:0,Br:
0,Cb:B.vw,Bq:B.vw,Bc:0,Down:false,B_:false,InitializeHold:function(K,C8,EP,EQ,BM
,B3,Ce,EO){this.Down=true;this.Bc=K;this.Bq=B.aak(C8,B3);this.Cb=B.aak(EP,B3);this.
Br=EQ;this.BL=BM;this.Ca=Ce;this.Eh=EO;return this;},InitializeUp:function(K,C8,
EP,EQ,BM,B3,Dt,Ce,EO){this.Down=false;this.Bc=K;this.Bq=B.aak(C8,B3);this.Cb=B.aak(
EP,B3);this.Br=EQ;this.BL=BM;this.B_=Dt;this.Ca=Ce;this.Eh=EO;return this;},InitializeDown:
function(K,C8,BM,B3,Dt,Ce){this.Down=true;this.Bc=K;this.Bq=B.aak(C8,B3);this.Cb=
B.aak(C8,B3);this.Br=0;this.BL=BM;this.B_=Dt;this.Ca=Ce;this.Eh=Ce;return this;}
,_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.DN;},_className:
"Core::CursorEvent"};D.Fe={Eh:B.vw,Ca:B.vw,BL:0,Br:0,CJ:B.vw,Cb:B.vw,Bq:B.vw,Bc:
0,Initialize:function(K,C8,EP,aOffset,EQ,Jn,B3,Ce,EO){this.Bc=K;this.Bq=B.aak(C8
,B3);this.Cb=B.aak(EP,B3);this.CJ=aOffset;this.Br=EQ;this.BL=Jn;this.Ca=Ce;this.
Eh=EO;return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.Fe;},_className:"Core::DragEvent"};D.Eu={B$:function(At,aClip,aOffset,AF,aBlend
){},An:function(C){var A;if(B.z9(C,this.M))return;var Dc=[(A=this.M)[2]-A[0],A[3
]-A[1]];var G7=[C[2]-C[0],C[3]-C[1]];var D9=!B.z8(Dc,G7);var BV=B.aaj(C.slice(0,
2),this.M.slice(0,2));if(!B.z8(BV,Ap)&&!D9){var H=this.As;while(!!H&&!((H.F&0x200
)===0x200)){if(((H.F&0x400)===0x400)){var tmp=((H.F&0x100)===0x100);H.Gh(BV,tmp);
}H=H.As;}}if((D9&&(Dc[0]>0))&&(Dc[1]>0)){var Ag=this.M;var H=this.As;while(!!H&&
!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){if(!!H.Au&&(H.Au.DH!==this))H.
Au=null;if(!H.Au&&(H.BJ!==0x14))H.EV(Ag,this);}H=H.As;}}D.AU.An.call(this,C);if(
!!this.G&&D9){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.
G.F|0x4000;B.ow([A=this.G,A.Bi],this);}}},_Init:function(aArg){D.AU._Init.call(this
,aArg);this.__proto__=D.Eu;this.F=0x203;},_className:"Core::Outline"};D.Fv={Gi:null
,Gk:null,Gj:null,Bu:null,Cx:null,Ay:0,Bc:0,AL:0,BL:0,Br:0,CJ:B.vw,Cb:B.vw,Bq:B.vw
,Jc:8,Hn:1,Down:false,C3:false,B_:false,GX:false,HQ:0,B$:function(At,aClip,aOffset
,AF,aBlend){},AW:function(Al){var A;var Aj=(D.DN.isPrototypeOf(Al)?Al:null);var BY=(
D.Fe.isPrototypeOf(Al)?Al:null);var FG=this.C3;var E7;var D7;var H9;var CV;var HK;
if(!Aj&&!BY)return null;E7=(!!Aj&&Aj.Down)&&!Aj.Br;D7=(!!Aj&&Aj.Down)&&(Aj.Br>0);
H9=(!!Aj&&Aj.Down)&&(Aj.Br>this.HQ);CV=!!Aj&&!Aj.Down;HK=!!BY;if(E7)this.HQ=((A=(
Aj.B_?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(E7){var G9=0;var EU;this.Ay=this.Ay|(1<<
Aj.Bc);for(EU=this.Ay&4095;EU>0;EU=EU>>1)if(!!(EU&1))G9=G9+1;if(G9===1)this.Ay=(
this.Ay|16777216)|(4096<<Aj.Bc);}if(CV&&(this.Ay<16777216)){var Cv=this.Fg();var
Bn=null;if(!!Cv){var JI=(!!this.Ah?this.Ah:this.G);Bn=Cv.Dj(B.aam(GM,Aj.Ca),Aj.Bc
,Aj.BL,null,JI,0x0);}if(!!Bn){var I;for(I=0;I<10;I++)if(!!(this.Ay&(1<<I)))Bn.Bl.
AW(B._NewObject(D.DN,0).InitializeDown(I,Aj.Bq,Aj.BL,Ap,true,Aj.Ca));for(I=0;I<10;
I++)if(!!(this.Ay&(1<<I)))Bn.Bl.AW(B._NewObject(D.DN,0).InitializeUp(I,Aj.Bq,Aj.
Bq,0,Aj.BL,Ap,false,Aj.Ca,Aj.Ca));}}if(CV)this.Ay=(this.Ay&~(1<<Aj.Bc))|33554432;
if(H9&&(this.Ay<16777216))this.Ay=this.Ay|67108864;if(CV&&Aj.B_)this.Ay=this.Ay|
67108864;if(CV&&!(this.Ay&16777215))this.Ay=0;if(D7&&(this.Ay>=67108864)){var Cv=
this.Fg();if(!!Cv)Cv.Hz(null,null,this,0x0);}if((D7&&!!(this.Ay&16777216))&&!!(this.
Ay&33554432)){D7=false;CV=true;}if(!!Aj&&!(this.Ay&(4096<<Aj.Bc)))return this;if(
!!BY&&!(this.Ay&(4096<<BY.Bc)))return this;if(CV&&!(this.Ay&16777216))return this;
if(((E7||HK)||D7)&&((this.Ay<16777216)||(this.Ay>=33554432)))return this;if(CV)this.
Ay=this.Ay&3758100479;if(CV&&!(this.Ay&16777215))this.Ay=0;if(!!Aj){this.Down=E7||
D7;this.C3=this.Gf(Aj.Bq);this.Cb=Aj.Cb;this.Bq=Aj.Bq;this.CJ=Ap;this.Br=Aj.Br;this.
BL=Aj.BL;this.B_=Aj.B_;this.Bc=Aj.Bc;this.AL=Aj.AL;if(Aj.Down&&!Aj.Br)FG=false;}
if(!!BY){this.Down=true;this.C3=this.Gf(BY.Bq);this.Cb=BY.Cb;this.Bq=BY.Bq;this.
CJ=BY.CJ;this.Br=BY.Br;this.BL=BY.BL;this.Bc=BY.Bc;this.B_=false;this.AL=BY.AL;}
var GW=this.Down;if(!!BY)(A=this.Gi)?A[1].call(A[0],this):null;if((!!Aj&&this.Down
)&&!this.Br)(A=this.Cx)?A[1].call(A[0],this):null;if((this.Down&&this.C3)&&!FG){
this.GX=true;(A=this.Gj)?A[1].call(A[0],this):null;}if(this.GX&&(((GW&&!this.C3)&&
FG)||((!GW&&this.C3)&&FG))){this.GX=false;(A=this.Gk)?A[1].call(A[0],this):null;
}if(!!Aj&&!GW)(A=this.Bu)?A[1].call(A[0],this):null;return this;},Dj:function(Aa
,K,BM,DY,Co,D1){var A;if(!!DY&&(DY!==this))return null;if((BM<1)||(BM>this.Hn))return null;
if(this.Ay>=33554432)return null;if((this.Ay>=16777216)&&!(this.Ay&(4096<<K)))return null;
if(this.Im()){var X=B.kz(Aa,this.GetExtent());if(!((X[0]>=X[2])||(X[1]>=X[3]))){
var C_=B.zT(Aa);var BV=Ap;if(C_[0]<X[0])BV=[X[0]-C_[0],BV[1]];if(C_[0]>=X[2])BV=[(
X[2]-C_[0])-1,BV[1]];if(C_[1]<X[1])BV=[BV[0],X[1]-C_[1]];if(C_[1]>=X[3])BV=[BV[0
],(X[3]-C_[1])-1];return B._NewObject(D.FX,0).Initialize(this,BV);}}else{var Aw=
B.aan(9,B.vw,null);var I;Aw.Set(0,B.zT(Aa));Aw.Set(1,Aw.Get(0));Aw.Set(2,Aw.Get(
0));Aw.Set(3,Aw.Get(0));Aw.Set(4,Aw.Get(0));Aw.Set(1,[Aa[0],Aw.Get(1)[1]]);Aw.Set(
2,[Aw.Get(2)[0],Aa[1]]);Aw.Set(3,[Aa[2],Aw.Get(3)[1]]);Aw.Set(4,[Aw.Get(4)[0],Aa[
3]]);Aw.Set(5,Aa.slice(0,2));Aw.Set(6,[Aa[2],Aa[1]]);Aw.Set(7,[Aa[0],Aa[3]]);Aw.
Set(8,Aa.slice(2,4));for(I=0;I<9;I=I+1)if(this.Gf(Aw.Get(I)))return B._NewObject(
D.FX,0).Initialize(this,B.aaj(Aw.Get(I),Aw.Get(0)));}return null;},Hx:function(C
){if(C<1)C=1;this.Jc=C;},Hu:function(C){if(C<1)C=1;this.Hn=C;},Bv:function(C){if(
C)this.A4(0x10,0x0);else this.A4(0x0,0x10);},_Init:function(aArg){D.Ew._Init.call(
this,aArg);this.__proto__=D.Fv;this.F=0x11B;},_Mark:function(E){var A;D.Ew._Mark.
call(this,E);if((A=this.Gi)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Gk)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Gj)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Bu)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Cx)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"
};D.Dk={As:null,Bu:null,Cx:null,DI:0,AL:0,Hy:0,BF:148,AM:0,Ao:0,BE:true,Down:false
,Go:false,Bd:function(aArg){var A;var DB=(D.Am.isPrototypeOf(A=this.Ak)?A:null);
if(!DB)throw new Error(GN);this.As=DB.FJ;DB.FJ=this;},AW:function(Al){var A;if(!
!Al&&Al.Ip(this.BF)){this.Down=Al.Down;this.AM=Al.AM;this.Ao=Al.Ao;this.AL=Al.AL;
if(Al.Down){this.Hy=this.DI;this.Go=this.DI>0;if(!this.Go)(A=this.Cx)?A[1].call(
A[0],this):null;this.DI=this.DI+1;return true;}if(!Al.Down){this.Go=this.DI>1;this.
Hy=this.DI-1;this.DI=0;(A=this.Bu)?A[1].call(A[0],this):null;return true;}}return false;
},_Init:function(aArg){this.__proto__=D.Dk;this.Bd(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.As)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Bu)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Cx)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};D.FX={Bl:null,D$:0,CJ:B.vw,Initialize:function(
J,aOffset){this.Bl=J;this.CJ=aOffset;this.D$=(aOffset[0]*aOffset[0])+(aOffset[1]
*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=D.FX;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Bl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ak)&&(A._cycle!=E
))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};D.Fl={DH:null,BA:B.vx,Ag:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
D.Fl;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.DH)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};D.Fm={E6:B.vw,E5:B.vw,E4:B.vw,E3:B.vw,_Init:function(aArg
){D.Fl._Init.call(this,aArg);this.__proto__=D.Fm;},_className:"Core::LayoutQuadContext"
};D.CK={resource:null,B0:function(){this.resource=null;},Bd:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=D.CK;this.Bd(aArg);B.hJ++;},
_Done:function(){this.B0();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:
0,_observers:null,_className:"Core::Resource"};D.Timer={Es:null,timer:null,AL:0,
Period:1000,Fd:0,BE:false,B0:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},FN:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.zk(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},Eq:function(C){if(C<0)C=0;if(C===this.Period)return;this.Period=C;if(this.
BE)this.FN(this.Fd,C);},Eo:function(C){if(C<0)C=0;if(C===this.Fd)return;this.Fd=
C;if(this.BE)this.FN(C,this.Period);},Bv:function(C){if(C===this.BE)return;this.
BE=C;if(C)this.FN(this.Fd,this.Period);else this.FN(0,0);this.AL=this.Ff();},Ff:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.AL=this.Ff();if(!this.Period)this.Bv(false);(A=this.
Es)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=D.Timer;B.hJ++;
},_Done:function(){this.B0();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Es)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null,_className:
"Core::Timer"};D.KJ={KK:0x1,JU:0x2,J4:0x4,KH:0x8,BE:0x10,Kz:0x20,J5:0x40,Kd:0x80
,J3:0x100,J_:0x200,J1:0x400,Kl:0x800,HA:0x1000,KI:0x2000,Ki:0x4000,Kj:0x8000,J0:
0x10000,Kh:0x20000,Kv:0x40000};D.BJ={Km:0x1,Kn:0x2,JQ:0x4,JR:0x8,JS:0x10,JP:0x20
};D.J7={Ke:0,KE:1,JW:2,J$:3,Kp:4,KF:5,KG:6,JX:7,JY:8,Kb:9,Ka:10,Kr:11,Kq:12};D.KeyCode={
NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10
,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,
Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:
31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:
40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48
,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,
SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Ko={KO:0x1,KL:0x2,KM:0x4,KN:0x8,Kc:
0x10,J6:0x20};
D._Init=function(){D.Ew.__proto__=D.Bl;D.AU.__proto__=D.Bl;D.Am.__proto__=D.AU;D.
Root.__proto__=D.Am;D.KeyEvent.__proto__=D.Event;D.FW.__proto__=D.Event;D.DN.__proto__=
D.Event;D.Fe.__proto__=D.Event;D.Eu.__proto__=D.AU;D.Fv.__proto__=D.Ew;D.Fm.__proto__=
D.Fl;};D._ReInit=function(){};D.Bx=function(E){};return D;})();

/* Embedded Wizard */