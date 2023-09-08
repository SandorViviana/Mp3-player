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
var Ap=[0,0];var AN=[0,0,0,0];var Cd="The view does not belong to this group";var
C_="No view to restack";var C$="View is not in this group";var Dv="No view to remove";
var Dw="No view to add";var ES="View already in a group";var ET="Recursive invalidate during active update cycle.";
var EU=[-8,-8,9,9];var GX=[0,0,1,1];var GY="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.Bm={As:null,Ah:null,G:null,Au:null,F:0x103,BK:0x14,E4:function(U,FE){},HF:function(
C){var A;var Ad=C^this.BK;if(!Ad)return;this.BK=C;if(!!this.Au&&!((this.F&0x400)===
0x400)){this.G.F=this.G.F|0x5000;B.ow([A=this.G,A.Bh],this);this.G.Ai([0,0,(A=this.
G.N)[2]-A[0],A[3]-A[1]]);}if(!!this.Au&&((this.F&0x400)===0x400)){this.Au.DI.F=this.
Au.DI.F|0x1000;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh],this);}},Fp:function(
){var W=this.G;while(!!W){var Cz=(D.Root.isPrototypeOf(W)?W:null);if(!!Cz)return Cz;
W=W.G;}return null;},Ca:function(At,aClip,aOffset,AF,aBlend){},AX:function(Al){return null;
},Dn:function(Aa,K,BM,D4,Cs,D7){return null;},Fk:function(Aa){return Aa;},Fl:function(
U,BZ){return Ap;},Gt:function(aOffset,FD){},GetExtent:function(){return AN;},A4:
function(CO,Dy){var A;if(((this.F&0x200)===0x200))CO=CO&~0x400;var Hh=(this.F&~Dy
)|CO;var DD=Hh^this.F;this.F=Hh;if(!!this.G&&!!(DD&0x14)){var HX=((this.F&0x14)===
0x14);if(HX&&!this.G.B3)this.G.DU(this);if(!HX&&(this.G.B3===this))this.G.DU(this.
G.Hv(this,0x14));}if(!!this.G&&!!(DD&0x403))this.G.Ai(this.GetExtent());if(((!!this.
Au&&!!this.G)&&((Hh&0x400)===0x400))&&((DD&0x1)===0x1)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh],this);}if(!!this.G&&((DD&0x400)===0x400
)){this.Au=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh
],this);}},_Init:function(aArg){this.__proto__=D.Bm;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
As)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ah)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Au)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null
,_cycle:0,_observers:null,_className:"Core::View"};D.EE={A0:B.vw,Bl:B.vw,AZ:B.vw
,Bk:B.vw,E4:function(U,FE){var V=B._NewObject(D.Fs,0);this.Au=null;V.Bz=this.GetExtent(
);V.Ag=U;V.DI=FE;V.Fa=this.Bk;V.Fb=this.AZ;V.Fc=this.Bl;V.Fd=this.A0;this.Au=V;}
,Fl:function(U,BZ){var A;var AR=this.BK;var V=(D.Fs.isPrototypeOf(A=this.Au)?A:null
);var P=V.Bz[0];var Q=V.Bz[1];var R=V.Bz[2];var S=V.Bz[3];var By=[U[2]-U[0],U[3]-
U[1]];var AC=R-P;var AA=S-Q;if(!BZ){var B_=[(A=V.Ag)[2]-A[0],A[3]-A[1]];P=P-V.Ag[
0];Q=Q-V.Ag[1];if(B_[0]!==By[0]){var A6=((AR&0x4)===0x4);var A7=((AR&0x8)===0x8);
var Cx=((AR&0x1)===0x1);if(!A6&&(Cx||!A7))P=((P*By[0])/B_[0])|0;if(!A7&&(Cx||!A6
)){R=R-V.Ag[0];R=((R*By[0])/B_[0])|0;R=R-By[0];}else R=R-V.Ag[2];P=P+U[0];R=R+U[
2];if(!Cx){if(A6&&!A7)R=P+AC;else if(!A6&&A7)P=R-AC;else{P=P+((((R-P)-AC)/2)|0);
R=P+AC;}}}else{R=R-V.Ag[2];P=P+U[0];R=R+U[2];}if(B_[1]!==By[1]){var A8=((AR&0x10
)===0x10);var A5=((AR&0x20)===0x20);var Cy=((AR&0x2)===0x2);if(!A8&&(Cy||!A5))Q=((
Q*By[1])/B_[1])|0;if(!A5&&(Cy||!A8)){S=S-V.Ag[1];S=((S*By[1])/B_[1])|0;S=S-By[1];
}else S=S-V.Ag[3];Q=Q+U[1];S=S+U[3];if(!Cy){if(A8&&!A5)S=Q+AA;else if(!A8&&A5)Q=
S-AA;else{Q=Q+((((S-Q)-AA)/2)|0);S=Q+AA;}}}else{S=S-V.Ag[3];Q=Q+U[1];S=S+U[3];}}
else{switch(BZ){case 3:{P=U[0];R=P+AC;}break;case 4:{R=U[2];P=R-AC;}break;case 1:{
Q=U[1];S=Q+AA;}break;case 2:{S=U[3];Q=S-AA;}break;default:;}if((BZ===3)||(BZ===4
)){var A8=((AR&0x10)===0x10);var A5=((AR&0x20)===0x20);var Cy=((AR&0x2)===0x2);if(
Cy){Q=U[1];S=U[3];}else if(A8&&!A5){Q=U[1];S=Q+AA;}else if(A5&&!A8){S=U[3];Q=S-AA;
}else{Q=U[1]+((((U[3]-U[1])-AA)/2)|0);S=Q+AA;}}if((BZ===1)||(BZ===2)){var A6=((AR&
0x4)===0x4);var A7=((AR&0x8)===0x8);var Cx=((AR&0x1)===0x1);if(Cx){P=U[0];R=U[2];
}else if(A6&&!A7){P=U[0];R=P+AC;}else if(A7&&!A6){R=U[2];P=R-AC;}else{P=U[0]+((((
U[2]-U[0])-AC)/2)|0);R=P+AC;}}}V.isEmpty=(P>=R)||(Q>=S);AC=(R-P)-1;AA=(S-Q)-1;var
CS=V.Bz[0];var CT=V.Bz[1];var CE=(V.Bz[2]-CS)-1;var CD=(V.Bz[3]-CT)-1;if(!CE)CE=
1;if(!CD)CD=1;if(((this.F&0x100)===0x100)){this.Bk=[P+((((V.Fa[0]-CS)*AC)/CE)|0)
,Q+((((V.Fa[1]-CT)*AA)/CD)|0)];this.AZ=[P+((((V.Fb[0]-CS)*AC)/CE)|0),Q+((((V.Fb[
1]-CT)*AA)/CD)|0)];this.Bl=[P+((((V.Fc[0]-CS)*AC)/CE)|0),Q+((((V.Fc[1]-CT)*AA)/CD
)|0)];this.A0=[P+((((V.Fd[0]-CS)*AC)/CE)|0),Q+((((V.Fd[1]-CT)*AA)/CD)|0)];}else{
this.DV([P+((((V.Fa[0]-CS)*AC)/CE)|0),Q+((((V.Fa[1]-CT)*AA)/CD)|0)]);this.DW([P+((((
V.Fb[0]-CS)*AC)/CE)|0),Q+((((V.Fb[1]-CT)*AA)/CD)|0)]);this.DX([P+((((V.Fc[0]-CS)
*AC)/CE)|0),Q+((((V.Fc[1]-CT)*AA)/CD)|0)]);this.DY([P+((((V.Fd[0]-CS)*AC)/CE)|0)
,Q+((((V.Fd[1]-CT)*AA)/CD)|0)]);this.Au=V;}return[AC+1,AA+1];},Gt:function(aOffset
,FD){if(FD){this.Bk=B.aak(this.Bk,aOffset);this.AZ=B.aak(this.AZ,aOffset);this.Bl=
B.aak(this.Bl,aOffset);this.A0=B.aak(this.A0,aOffset);}else{this.DV(B.aak(this.Bk
,aOffset));this.DW(B.aak(this.AZ,aOffset));this.DX(B.aak(this.Bl,aOffset));this.
DY(B.aak(this.A0,aOffset));}},GetExtent:function(){if(!!this.Au&&this.Au.isEmpty
)return AN;var P=this.Bk[0];var Q=this.Bk[1];var R=this.Bl[0];var S=this.Bl[1];if((((
this.A0[0]!==P)||(this.AZ[1]!==Q))||(this.AZ[0]!==R))||(this.A0[1]!==S)){if(this.
AZ[0]<P)P=this.AZ[0];if(this.Bl[0]<P)P=this.Bl[0];if(this.A0[0]<P)P=this.A0[0];if(
this.AZ[1]<Q)Q=this.AZ[1];if(this.Bl[1]<Q)Q=this.Bl[1];if(this.A0[1]<Q)Q=this.A0[
1];if(this.Bk[0]>R)R=this.Bk[0];if(this.AZ[0]>R)R=this.AZ[0];if(this.A0[0]>R)R=this.
A0[0];if(this.Bk[1]>S)S=this.Bk[1];if(this.AZ[1]>S)S=this.AZ[1];if(this.A0[1]>S)
S=this.A0[1];}else{var tmp;if(R<P){tmp=P;P=R;R=tmp;}if(S<Q){tmp=Q;Q=S;S=tmp;}}return[
P,Q,R+1,S+1];},DY:function(C){var A;if(B.z8(C,this.A0))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Au=null;this.A0=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.ow([A=this.G,A.Bh],this);}},DX:function(C){var A;if(B.z8(C,this.Bl))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Au=null;this.Bl=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh],this);}},DW:function(C){var A;if(B.z8(C
,this.AZ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.
Au=null;this.AZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());
if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh],this);}},DV:function(C){var
A;if(B.z8(C,this.Bk))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));this.Au=null;this.Bk=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh],this);}},Gr:function(
Dz){var Aw=B.aan(4,B.vw,null);var I=0;var AB=3;var Hb=false;var Hc=false;Aw.Set(
0,this.Bk);Aw.Set(1,this.AZ);Aw.Set(2,this.Bl);Aw.Set(3,this.A0);while(I<4){var Im=
Aw.Get(I)[0];var FZ=Aw.Get(I)[1];var Kc=Aw.Get(AB)[0];var Hs=Aw.Get(AB)[1];if(((
FZ>Dz[1])!==(Hs>Dz[1]))||((FZ<Dz[1])!==(Hs<Dz[1]))){var In=((((Kc-Im)*(Dz[1]-FZ)
)/(Hs-FZ))|0)+Im;if(Dz[0]>In)Hb=!Hb;if(Dz[0]<In)Hc=!Hc;}AB=I;I=I+1;}return Hb||Hc;
},Iy:function(){return((((this.Bk[0]===this.A0[0])&&(this.AZ[0]===this.Bl[0]))&&(
this.Bk[1]===this.AZ[1]))&&(this.Bl[1]===this.A0[1]))||((((this.Bk[0]===this.AZ[
0])&&(this.Bl[0]===this.A0[0]))&&(this.Bk[1]===this.A0[1]))&&(this.AZ[1]===this.
Bl[1]));},_Init:function(aArg){D.Bm._Init.call(this,aArg);this.__proto__=D.EE;},
_className:"Core::QuadView"};D.AU={N:B.vx,E4:function(U,FE){var V=B._NewObject(D.
Fr,0);V.Bz=this.N;V.Ag=U;V.DI=FE;this.Au=V;},Fl:function(U,BZ){var A;var AR=this.
BK;var V=this.Au;var P=V.Bz[0];var Q=V.Bz[1];var R=V.Bz[2];var S=V.Bz[3];var By=[
U[2]-U[0],U[3]-U[1]];var AC=R-P;var AA=S-Q;if(!BZ){var B_=[(A=V.Ag)[2]-A[0],A[3]-
A[1]];P=P-V.Ag[0];Q=Q-V.Ag[1];if(B_[0]!==By[0]){var A6=((AR&0x4)===0x4);var A7=((
AR&0x8)===0x8);var Cx=((AR&0x1)===0x1);if(!A6&&(Cx||!A7))P=((P*By[0])/B_[0])|0;if(
!A7&&(Cx||!A6)){R=R-V.Ag[0];R=((R*By[0])/B_[0])|0;R=R-By[0];}else R=R-V.Ag[2];P=
P+U[0];R=R+U[2];if(!Cx){if(A6&&!A7)R=P+AC;else if(!A6&&A7)P=R-AC;else{P=P+((((R-
P)-AC)/2)|0);R=P+AC;}}}else{R=R-V.Ag[2];P=P+U[0];R=R+U[2];}if(B_[1]!==By[1]){var
A8=((AR&0x10)===0x10);var A5=((AR&0x20)===0x20);var Cy=((AR&0x2)===0x2);if(!A8&&(
Cy||!A5))Q=((Q*By[1])/B_[1])|0;if(!A5&&(Cy||!A8)){S=S-V.Ag[1];S=((S*By[1])/B_[1]
)|0;S=S-By[1];}else S=S-V.Ag[3];Q=Q+U[1];S=S+U[3];if(!Cy){if(A8&&!A5)S=Q+AA;else
if(!A8&&A5)Q=S-AA;else{Q=Q+((((S-Q)-AA)/2)|0);S=Q+AA;}}}else{S=S-V.Ag[3];Q=Q+U[1
];S=S+U[3];}}else{switch(BZ){case 3:{P=U[0];R=P+AC;}break;case 4:{R=U[2];P=R-AC;
}break;case 1:{Q=U[1];S=Q+AA;}break;case 2:{S=U[3];Q=S-AA;}break;default:;}if((BZ===
3)||(BZ===4)){var A8=((AR&0x10)===0x10);var A5=((AR&0x20)===0x20);var Cy=((AR&0x2
)===0x2);if(Cy){Q=U[1];S=U[3];}else if(A8&&!A5){Q=U[1];S=Q+AA;}else if(A5&&!A8){
S=U[3];Q=S-AA;}else{Q=U[1]+((((U[3]-U[1])-AA)/2)|0);S=Q+AA;}}if((BZ===1)||(BZ===
2)){var A6=((AR&0x4)===0x4);var A7=((AR&0x8)===0x8);var Cx=((AR&0x1)===0x1);if(Cx
){P=U[0];R=U[2];}else if(A6&&!A7){P=U[0];R=P+AC;}else if(A7&&!A6){R=U[2];P=R-AC;
}else{P=U[0]+((((U[2]-U[0])-AC)/2)|0);R=P+AC;}}}V.isEmpty=(P>=R)||(Q>=S);if(((this.
F&0x100)===0x100))this.N=[P,Q,R,S];else{this.Ao([P,Q,R,S]);this.Au=V;}return[R-P
,S-Q];},Gt:function(aOffset,FD){if(FD)this.N=B.aam(this.N,aOffset);else this.Ao(
B.aam(this.N,aOffset));},GetExtent:function(){return this.N;},Ao:function(C){var
A;if(B.z9(C,this.N))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);this.
Au=null;this.N=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Bh],this);}},_Init:function(aArg){D.Bm.
_Init.call(this,aArg);this.__proto__=D.AU;},_className:"Core::RectView"};D.Am={Cu:
null,BV:null,FO:null,B3:null,Bd:function(aArg){this.BH();},Ca:function(At,aClip,
aOffset,AF,aBlend){var A;AF=((AF+1)*255)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);
this.JY(At,aClip,B.aak(aOffset,this.N.slice(0,2)),AF,aBlend);},Dn:function(Aa,K,
BM,D4,Cs,D7){var A;var H=this.BV;var DE=null;var O=AN;var BO=null;if(((A=B.kz(Aa
,this.N))[0]>=A[2])||(A[1]>=A[3]))return null;Aa=B.aal(Aa,this.N.slice(0,2));if(
!!Cs){H=Cs;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400)&&!
BO){BO=H.Ah;while(!!BO&&!((BO.F&0x200)===0x200))BO=BO.Ah;if(!!BO)O=B.kz(Aa,BO.GetExtent(
));else O=AN;}if(BO===H){BO=null;O=AN;}if((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10
))&&!((H.F&0x40000)===0x40000))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===
0x10000)||(null===H))){var Bz=H.GetExtent();var FI=D4;var DC=null;if(FI===H)FI=null;
if(((H.F&0x400)===0x400)){if(!(((A=B.kz(Bz,O))[0]>=A[2])||(A[1]>=A[3])))DC=H.Dn(
O,K,BM,FI,Cs,D7);}else if(!(((A=B.kz(Bz,Aa))[0]>=A[2])||(A[1]>=A[3]))||(D4===H))
DC=H.Dn(Aa,K,BM,FI,Cs,D7);H=H.Ah;if(!!DC){if(!DE||((DC.Ei<DE.Ei)&&(DC.Ei>=0)))DE=
DC;if(!DC.Ei)H=null;}}else H=H.Ah;Cs=null;}return DE;},Fk:function(Aa){var A;var
HP;var H=this.Cu;var E0=AN;var E$=true;var result=(Aa=HP=B.aal(Aa,this.N.slice(0
,2)),HP);while(!!H){if(((H.F&0x200)===0x200)){var E_=(D.EC.isPrototypeOf(H)?H:null
);E0=B.kz(Aa,E_.N);E$=((E_.F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===
0x400)){if(E$){var O=B.kz(H.GetExtent(),E0);if(!((O[0]>=O[2])||(O[1]>=O[3])))result=
B.vS(result,H.Fk(O));}}else{var O=B.kz(H.GetExtent(),Aa);if(!((O[0]>=O[2])||(O[1
]>=O[3])))result=B.vS(result,H.Fk(O));}}H=H.As;}return B.kz(B.aam(result,this.N.
slice(0,2)),this.N);},A4:function(CO,Dy){var A;var J2=this.F;D.AU.A4.call(this,CO
,Dy);var DD=this.F^J2;if(!!this.B3&&((DD&0x40)===0x40)){if(((this.F&0x40)===0x40
))this.B3.A4(0x40,0x0);else this.B3.A4(0x0,0x40);}if(!!DD){this.F=this.F|0x8000;
B.ow([this,this.Bh],this);}},Ao:function(C){var A;if(B.z9(C,this.N))return;var Dg=[(
A=this.N)[2]-A[0],A[3]-A[1]];var Hg=[C[2]-C[0],C[3]-C[1]];var Eg=!B.z8(Dg,Hg);D.
AU.Ao.call(this,C);if((Eg&&(Dg[0]>0))&&(Dg[1]>0)){var Ag=[].concat(Ap,Dg);var H=
this.Cu;while(!!H){if((!H.Au&&(H.BK!==0x14))&&!((H.F&0x400)===0x400))H.E4(Ag,null
);H=H.As;}}if(Eg){this.F=this.F|0x5000;B.ow([this,this.Bh],this);}},Ic:function(
Al){var H1=(D.KeyEvent.isPrototypeOf(Al)?Al:null);var Ch=this.FO;if(!H1)return null;
while(!!Ch&&(!Ch.BE||!Ch.AX(H1)))Ch=Ch.As;return Ch;},JY:function(At,aClip,aOffset
,AF,aBlend){var A;var H=this.Cu;var E0=AN;var E$=true;this.Iv(At,aClip,aOffset,AF
,aBlend);while(!!H){if(((H.F&0x200)===0x200)){var E_=(D.EC.isPrototypeOf(H)?H:null
);E0=B.kz(aClip,B.aam(E_.N,aOffset));E$=((E_.F&0x1)===0x1);}if(((H.F&0x1)===0x1)
){if(((H.F&0x400)===0x400)){if(E$){var O=B.kz(B.aam(H.GetExtent(),aOffset),E0);if(
!((O[0]>=O[2])||(O[1]>=O[3])))H.Ca(At,O,aOffset,AF,aBlend);}}else{var O=B.kz(B.aam(
H.GetExtent(),aOffset),aClip);if(!((O[0]>=O[2])||(O[1]>=O[3])))H.Ca(At,O,aOffset
,AF,aBlend);}}H=H.As;}this.Ix(At,aClip,aOffset,AF,aBlend);},J8:function(){var A;
var G$=((this.F&0x1000)===0x1000);var CU=[0,0,(A=this.N)[2]-A[0],A[3]-A[1]];var CF=
false;var Ea=AN;var G9=AN;var H=this.BV;var BO=null;while(!!H){if(((H.F&0x800)===
0x800)){CF=true;H.F=H.F&~0x800;}if(CF&&((H.F&0x200)===0x200))CF=false;H=H.Ah;}CF=
false;H=this.Cu;if(G$){this.F=this.F&~0x1000;G$=!((CU[0]>=CU[2])||(CU[1]>=CU[3])
);}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.Au&&(H.Au.DI
!==BO))H.Au=null;if((!H.Au&&CF)&&(H.BK!==0x14))H.E4(G9,BO);}if(!!H.Au){if(G$&&!((
H.F&0x400)===0x400))H.Fl(CU,0);if(CF&&((H.F&0x400)===0x400))H.Fl(G9,0);}if(((H.F&
0x200)===0x200)){CF=((H.F&0x1000)===0x1000);BO=(D.EC.isPrototypeOf(H)?H:null);if(
CF){H.F=H.F&~0x1000;Ea=BO.N;G9=Ea;CF=!((Ea[0]>=Ea[2])||(Ea[1]>=Ea[3]));}if(CF)this.
Ai(BO.N);}H=H.As;}this.F=this.F&~0x2000;this.HM([CU[2]-CU[0],CU[3]-CU[1]]);},Bh:
function(Ax){var A;var Kb=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000
)){this.F=this.F&~0x4000;this.J8();}if(((this.F&0x8000)===0x8000)||Kb){this.F=this.
F&~0x8000;this.ER(this.F);}},DU:function(C){var A;if(!!C&&(C.G!==this))throw new
Error(Cd);if(!!C&&!((C.F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))
C=null;if(C===this.B3)return;if(!!this.B3)this.B3.A4(0x0,0x60);this.B3=C;if(!!C){
if(((this.F&0x40)===0x40))C.A4(0x60,0x0);else C.A4(0x20,0x0);}},Fy:function(C){if(
C)this.A4(0x1,0x0);else this.A4(0x0,0x1);},Ix:function(At,aClip,aOffset,AF,aBlend
){},Iv:function(At,aClip,aOffset,AF,aBlend){},GetMinimalSize:function(){return Ap;
},DispatchEvent:function(Al){var A;var H=this.B3;var W=(D.Am.isPrototypeOf(H)?H:
null);var AK=null;if(!!H&&((((H.F&0x10000)===0x10000)||((H.F&0x40000)===0x40000)
)||((H.F&0x20000)===0x20000))){H=null;W=null;}if(!!W)AK=W.DispatchEvent(Al);else
if(!!H)AK=H.AX(Al);if(!AK)AK=this.AX(Al);if(!AK)AK=this.Ic(Al);return AK;},BroadcastEventAtPosition:
function(Al,HR,aFilter){var A;var H=this.BV;var AK=null;while(!!H&&!AK){if((!aFilter||((
A=aFilter)&&((H.F&A)===A)))&&B.vt(H.GetExtent(),HR)){var W=(D.Am.isPrototypeOf(H
)?H:null);if(!!W)AK=W.BroadcastEventAtPosition(Al,B.aaj(HR,W.N.slice(0,2)),aFilter
);else AK=H.AX(Al);}H=H.Ah;}if(!AK)AK=this.AX(Al);return AK;},BroadcastEvent:function(
Al,aFilter){var A;var H=this.BV;var AK=null;while(!!H&&!AK){if(!aFilter||((A=aFilter
)&&((H.F&A)===A))){var W=(D.Am.isPrototypeOf(H)?H:null);if(!!W)AK=W.BroadcastEvent(
Al,aFilter);else AK=H.AX(Al);}H=H.Ah;}if(!AK)AK=this.AX(Al);if(!AK)AK=this.Ic(Al
);return AK;},HM:function(aSize){},ER:function(Db){},BH:function(){this.F=this.F|
0x8000;B.ow([this,this.Bh],this);},Ai:function(Aa){var A;var W=this;while(!!W&&!((
Aa[0]>=Aa[2])||(Aa[1]>=Aa[3]))){if(!W.G&&(W!==this)){W.Ai(Aa);return;}if(!((W.F&
0x1)===0x1))return;Aa=B.kz(B.aam(Aa,W.N.slice(0,2)),W.N);W=W.G;}},Hv:function(J,
aFilter){var A;if(!J||(J.G!==this))return null;var Df=J.As;var Dj=J.Ah;var E8=0x10000;
if(((aFilter&0x10000)===0x10000))E8=0x0;while(!!Df||!!Dj){if((!!Df&&(!aFilter||((
A=aFilter)&&((Df.F&A)===A))))&&(!E8||!((A=E8)&&((Df.F&A)===A))))return Df;if((!!
Dj&&(!aFilter||((A=aFilter)&&((Dj.F&A)===A))))&&(!E8||!((A=E8)&&((Dj.F&A)===A)))
)return Dj;if(!!Df)Df=Df.As;if(!!Dj)Dj=Dj.Ah;}return null;},D1:function(J){var A;
if(!J)throw new Error(C_);if(J.G!==this)throw new Error(C$);if(!J.As)return;var D8=
this.BV;if(((D8===J)||!D8)||(D8.As===J))return;if(((J.F&0x401)===0x401)){if(!!J.
Ah&&!!J.Au)J.Ah.F=J.Ah.F|0x800;J.F=J.F|0x800;this.F=this.F|0x4000;B.ow([this,this.
Bh],this);}if(((J.F&0x200)===0x200)){if(!!J.Ah)J.Ah.F=J.Ah.F|0x800;this.F=this.F|
0x4000;B.ow([this,this.Bh],this);}if(!!J.Ah)J.Ah.As=J.As;else this.Cu=J.As;J.As.
Ah=J.Ah;J.Ah=D8;J.As=D8.As;D8.As=J;if(!!J.As)J.As.Ah=J;else this.BV=J;if(((J.F&0x1
)===0x1))this.Ai(J.GetExtent());},D0:function(J){var A;if(!J)throw new Error(Dv);
if(J.G!==this)throw new Error(C$);if((((J.F&0x401)===0x401)&&!!J.Ah)&&!!J.Au){J.
Ah.F=J.Ah.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bh],this);}if(((J.F&0x200
)===0x200)){if(!!J.Ah)J.Ah.F=J.Ah.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bh
],this);}J.Au=null;if(this.B3===J)this.DU(this.Hv(J,0x14));if(!!J.Ah)J.Ah.As=J.As;
if(!!J.As)J.As.Ah=J.Ah;if(this.Cu===J)this.Cu=J.As;if(this.BV===J)this.BV=J.Ah;J.
G=null;J.As=null;J.Ah=null;if(((J.F&0x1)===0x1))this.Ai(J.GetExtent());},AW:function(
J,D6){var A;if(!J)throw new Error(Dw);if(!!J.G)throw new Error(ES);var CP=null;if((
D6<0)&&!!this.BV){CP=this.BV;D6=D6+1;}while(((D6<0)&&!!CP)&&!!CP.Ah){CP=CP.Ah;D6=
D6+1;}if(!CP){J.G=this;J.Ah=this.BV;if(!!this.BV)this.BV.As=J;if(!this.Cu)this.Cu=
J;this.BV=J;}else{J.G=this;J.Ah=CP.Ah;J.As=CP;CP.Ah=J;if(!!J.Ah)J.Ah.As=J;else this.
Cu=J;}if(((J.F&0x1)===0x1))this.Ai(J.GetExtent());if(((!this.B3&&((J.F&0x4)===0x4
))&&((J.F&0x10)===0x10))&&!((J.F&0x10000)===0x10000))this.DU(J);if(((J.F&0x401)===
0x401)){J.F=J.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bh],this);}if(((J.F&0x200
)===0x200)){J.F=J.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Bh],this);}},_Init:
function(aArg){D.AU._Init.call(this,aArg);this.__proto__=D.Am;this.F=0x1F;this.Bd(
aArg);},_Mark:function(E){var A;D.AU._Mark.call(this,E);if((A=this.Cu)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.BV)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.FO)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B3)&&(A._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::Group"};D.Root={BQ:null,Av:B.aan(10,null,null),D9:
null,CR:null,Fj:0,AD:0,A_:B.aan(10,0,null),FH:B.aan(10,B.vx,null),B8:B.aan(10,0,
null),CC:B.aan(10,B.vw,null),D$:B.aan(10,0,null),CQ:B.aan(10,B.vw,null),B7:B.aan(
10,B.vw,null),BN:B.aan(10,B.vw,null),Ct:B.aan(10,B.vw,null),Ae:0,FK:0,FJ:0,Bg:B.
aan(4,0,null),AP:B.aan(4,B.vx,null),AO:0,E6:0,Ef:0,Ha:true,Bd:function(aArg){if(
!!!this.Ak){var obj=this;B.aaG(obj);}},Fp:function(){return this;},Ca:function(At
,aClip,aOffset,AF,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(!fullScreenUpdate
)At.Gi(aClip,B.aam(B.aam(aClip,aOffset),this.N.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);D.Am.Ca.call(this,At,aClip,aOffset,AF,aBlend);},A4:
function(CO,Dy){var A;D.Am.A4.call(this,CO,Dy);if(!this.G&&(((CO&0x1)===0x1)||((
Dy&0x1)===0x1)))this.Ai([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((CO&0x2
)===0x2)||((Dy&0x2)===0x2)))this.Ai([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);},DU:function(
C){if((C!==null)||!C)D.Am.DU.call(this,C);},DispatchEvent:function(Al){if(!!Al){
Al.Et=!!this.AD;if(!!this.AD)Al.AL=this.AD;}var AK;AK=D.Am.DispatchEvent.call(this
,Al);this.AD=0;return AK;},BroadcastEvent:function(Al,aFilter){if(!!Al){Al.Et=!!
this.AD;if(!!this.AD)Al.AL=this.AD;}var AK=D.Am.BroadcastEvent.call(this,Al,aFilter
);this.AD=0;return AK;},Ai:function(Aa){var A;if(this.Fj>0)throw new Error(ET);var
fullScreenUpdate=false;fullScreenUpdate=B.mr;if(fullScreenUpdate)Aa=[0,0,(A=this.
N)[2]-A[0],A[3]-A[1]];if(!!this.G){D.Am.Ai.call(this,Aa);return;}Aa=B.kz(B.aam(Aa
,this.N.slice(0,2)),this.N);if((Aa[0]>=Aa[2])||(Aa[1]>=Aa[3]))return;var I;for(I=
0;I<this.AO;I=I+1)if(!(((A=B.kz(this.AP.Get(I),Aa))[0]>=A[2])||(A[1]>=A[3]))){this.
AP.Set(I,B.vS(this.AP.Get(I),Aa));this.Bg.Set(I,B.zS(this.AP.Get(I)));return;}if(
this.AO<3){this.AP.Set(this.AO,Aa);this.Bg.Set(this.AO,B.zS(Aa));this.AO=this.AO+
1;return;}var AB;var BP;var E5=0;var E7=0;var HT=2147483647;this.AP.Set(this.AO,
Aa);this.Bg.Set(this.AO,B.zS(Aa));for(AB=0;AB<=this.AO;AB=AB+1)for(BP=AB+1;BP<=this.
AO;BP=BP+1){var FY=B.zS(B.vS(this.AP.Get(AB),this.AP.Get(BP)));var Ib=((FY<<8)/(
this.Bg.Get(AB)+this.Bg.Get(BP)))|0;if(Ib<HT){HT=Ib;E5=AB;E7=BP;}}this.AP.Set(E5
,B.vS(this.AP.Get(E5),this.AP.Get(E7)));this.Bg.Set(E5,B.zS(this.AP.Get(E5)));if(
E7!==this.AO){this.AP.Set(E7,this.AP.Get(this.AO));this.Bg.Set(E7,this.Bg.Get(this.
AO));}},JW:function(){var A$=B._NewObject(D.Fn,0);A$.Et=!!this.AD;if(!!this.AD)A$.
AL=this.AD;return A$;},DB:function(){var A$=B._NewObject(D.DO,0);A$.Et=!!this.AD;
if(!!this.AD)A$.AL=this.AD;return A$;},D_:function(){var A$=B._NewObject(D.F_,0);
A$.Et=!!this.AD;if(!!this.AD)A$.AL=this.AD;return A$;},JX:function(Ax){var I;var
DE=false;for(I=0;I<10;I=I+1)if(!!this.Av.Get(I)){var AS=this.BN.Get(I);var W=this.
Av.Get(I).G;while(!!W&&(W!==this)){AS=B.aaj(AS,W.N.slice(0,2));W=W.G;}if(!W&&(this.
Av.Get(I)!==this)){var tmp=this.Av.Get(I);this.Ae=I;this.Av.Set(I,null);tmp.AX(this.
DB().InitializeUp(I,this.CQ.Get(I),this.CC.Get(I),this.B8.Get(I),this.A_.Get(I)+
1,this.B7.Get(I),false,this.BN.Get(I),this.Ct.Get(I)));this.BroadcastEvent(this.
D_().InitializeUp(I,this.A_.Get(I)+1,false,tmp,this.BN.Get(I)),0x18);}else{this.
B8.Set(I,(this.CR.AL-this.D$.Get(I))|0);if(this.B8.Get(I)<10)this.B8.Set(I,10);this.
Ae=I;this.Av.Get(I).AX(this.DB().InitializeHold(I,AS,this.CC.Get(I),this.B8.Get(
I),this.A_.Get(I)+1,this.B7.Get(I),this.BN.Get(I),this.Ct.Get(I)));DE=true;}}if(
!DE)this.CR.Bv(false);},GetFPS:function(){var ticksCount=0;var HY=0;ticksCount=((
new Date).getTime()-B.vs)|0;if(!!this.FK&&(ticksCount>this.FK))HY=((this.FJ*1000
)/((ticksCount-this.FK)|0))|0;this.FJ=0;this.FK=ticksCount;return HY;},Update:function(
){var A;if(!this.D9)this.D9=B._NewObject(B.Graphics.Canvas,0);this.D9.HD([(A=this.
N)[2]-A[0],A[3]-A[1]]);this.D9.Update();return this.UpdateGE20(this.D9);},UpdateGE20:
function(At){if(!this.BeginUpdate())return AN;var CH=this.UpdateCanvas(At,Ap);this.
EndUpdate();return CH;},EndUpdate:function(){if(this.AO>0){this.FJ=this.FJ+1;this.
AO=0;}},UpdateCanvas:function(At,aOffset){var A;var CH=AN;var JR=[].concat(aOffset
,B.aak(At.FrameSize,aOffset));var I;var AB=this.AO;this.Fj=this.Fj+1;At.DF=this;
for(I=0;(I<AB)&&(I<4);I=I+1)if(this.Bg.Get(I)>0){this.Ca(At,B.aal(this.AP.Get(I)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);CH=B.vS(CH,B.kz(JR,this.AP.Get(I))
);}else AB=AB+1;At.DF=null;this.Fj=this.Fj-1;if(!((CH[0]>=CH[2])||(CH[1]>=CH[3])
))return B.aal(CH,aOffset);else return CH;},GetUpdateRegion:function(FF){var I;var
AB=this.AO;if(FF<0)return AN;for(I=0;(I<AB)&&(I<4);I=I+1)if(!this.Bg.Get(I)){AB=
AB+1;FF=FF+1;}else if(I===FF)return this.AP.Get(I);return AN;},BeginUpdate:function(
){var A;var I;if(!!this.AO&&!B.z9(this.AP.Get(0),[0,0,(A=this.N)[2]-A[0],A[3]-A[
1]])){var Il=B.aan(3,B.vx,null);var Ik=this.AO;for(I=0;I<Ik;I++)Il.Set(I,this.AP.
Get(I));for(I=0;I<Ik;I++){var Id=B.aam(Il.Get(I),this.N.slice(0,2));var Ie=this.
Fk(Id);if(!B.z9(Id,Ie))this.Ai(B.aal(Ie,this.N.slice(0,2)));}}var AB;var BP;for(
AB=0;AB<(this.AO-1);AB++)if(this.Bg.Get(AB)>0)for(BP=AB+1;BP<this.AO;BP++)if(this.
Bg.Get(BP)>0){var FY=B.zS(B.vS(this.AP.Get(AB),this.AP.Get(BP)));if(((FY-this.Bg.
Get(AB))-this.Bg.Get(BP))<0){this.AP.Set(AB,B.vS(this.AP.Get(AB),this.AP.Get(BP)
));this.Bg.Set(AB,FY);this.Bg.Set(BP,0);}}for(I=this.AO-1;I>=0;I--)if(!this.Bg.Get(
I))this.AO=this.AO-1;return this.AO;},DoesNeedUpdate:function(){if(this.AO>0)return true;
return false;},Initialize:function(aSize){this.Ao([].concat(Ap,aSize));if(this.Ha
)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ai(this.N);return this;},SetRootFocus:
function(G0){if(G0===this.Ha)return false;this.Ha=G0;if(!G0)this.A4(0x0,0x40);else
this.A4(0x40,0x0);return true;},SetUserInputTimestamp:function(JQ){this.AD=JQ;},
DriveKeyboardHitting:function(AQ,EV,Ce){var A;var Hn=!!this.BQ;if(!!this.BQ&&((!
Ce||(this.E6!==AQ))||(this.Ef!==EV))){var A$=null;var H=(D.Bm.isPrototypeOf(A=this.
BQ)?A:null);var Ch=(D.Do.isPrototypeOf(A=this.BQ)?A:null);if(!!this.E6)A$=B._NewObject(
D.KeyEvent,0).Initialize(this.E6,false);if(this.Ef!==0x00)A$=B._NewObject(D.KeyEvent
,0).Initialize2(this.Ef,false);if(!!Ch)Ch.AX(A$);else if(!!H)H.AX(A$);this.E6=0;
this.Ef=0x00;this.BQ=null;}if(!!this.BQ){var A$=null;var H=(D.Bm.isPrototypeOf(A=
this.BQ)?A:null);var Ch=(D.Do.isPrototypeOf(A=this.BQ)?A:null);if(!!AQ)A$=B._NewObject(
D.KeyEvent,0).Initialize(AQ,true);if(this.Ef!==0x00)A$=B._NewObject(D.KeyEvent,0
).Initialize2(EV,true);if(!!Ch)Ch.AX(A$);else if(!!H)H.AX(A$);}if(!this.BQ&&Ce){
if(!!AQ)this.BQ=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize(AQ,true
));if(EV!==0x00)this.BQ=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize2(
EV,true));if(!(D.Do.isPrototypeOf(A=this.BQ)?A:null)&&!(D.Bm.isPrototypeOf(A=this.
BQ)?A:null))this.BQ=null;this.E6=AQ;this.Ef=EV;Hn=Hn||!!this.BQ;}this.AD=0;return Hn;
},DriveCursorMovement:function(A1){return this.DriveMultiTouchMovement(this.Ae,A1
);},DriveMultiTouchMovement:function(K,A1){if((K<0)||(K>9)){this.AD=0;return false;
}var BW=B.aaj(A1,this.BN.Get(K));this.BN.Set(K,A1);if(!this.Av.Get(K)||B.z8(BW,Ap
)){this.AD=0;return false;}var AS=A1;var W=this.Av.Get(K).G;while(!!W&&(W!==this
)){AS=B.aaj(AS,W.N.slice(0,2));W=W.G;}if(!W&&(this.Av.Get(K)!==this)){var tmp=this.
Av.Get(K);this.Ae=K;this.Av.Set(K,null);tmp.AX(this.DB().InitializeUp(K,this.CQ.
Get(K),this.CC.Get(K),this.B8.Get(K),this.A_.Get(K)+1,this.B7.Get(K),false,this.
BN.Get(K),this.Ct.Get(K)));this.BroadcastEvent(this.D_().InitializeUp(K,this.A_.
Get(K)+1,false,tmp,A1),0x18);}else{this.CQ.Set(K,AS);this.Ae=K;this.Av.Get(K).AX(
this.JW().Initialize(K,AS,this.CC.Get(K),BW,this.B8.Get(K),this.A_.Get(K)+1,this.
B7.Get(K),A1,this.Ct.Get(K)));}this.AD=0;return true;},DriveCursorHitting:function(
Ce,K,A1){return this.DriveMultiTouchHitting(Ce,K,A1);},DriveMultiTouchHitting:function(
Ce,K,A1){if((K<0)||(K>9)){this.AD=0;return false;}var ticksCount=this.AD;if(!ticksCount
)ticksCount=((new Date).getTime()-B.vs)|0;var J9=this.AD;this.DriveMultiTouchMovement(
K,A1);A1=this.BN.Get(K);this.AD=J9;if(Ce)this.Ct.Set(K,A1);if(Ce&&!this.Av.Get(K
)){var Bo;var AS=A1;if(B.vt(this.FH.Get(K),A1)&&((ticksCount-this.D$.Get(K))<=250
))this.A_.Set(K,this.A_.Get(K)+1);else this.A_.Set(K,0);this.FH.Set(K,B.aam(EU,A1
));this.D$.Set(K,ticksCount);Bo=this.Dn(B.aam(EU,A1),K,this.A_.Get(K)+1,null,null
,0x0);if(!!Bo){this.BroadcastEvent(this.D_().InitializeDown(K,this.A_.Get(K)+1,false
,Bo.Bm,A1),0x18);this.Av.Set(K,Bo.Bm);this.B7.Set(K,Bo.CK);}else{this.Av.Set(K,null
);this.B7.Set(K,Ap);this.AD=0;return false;}var W=Bo.Bm.G;while(!!W&&(W!==this)){
AS=B.aaj(AS,W.N.slice(0,2));W=W.G;}this.CC.Set(K,AS);this.CQ.Set(K,AS);this.B8.Set(
K,0);this.CR.Bv(true);this.Ae=K;this.Av.Get(K).AX(this.DB().InitializeDown(K,AS,
this.A_.Get(K)+1,this.B7.Get(K),false,A1));this.AD=0;return true;}if(!Ce&&!!this.
Av.Get(K)){var AS=A1;var W=this.Av.Get(K).G;while(!!W&&(W!==this)){AS=B.aaj(AS,W.
N.slice(0,2));W=W.G;}if(!W)AS=this.CQ.Get(K);this.Ae=K;var tmp=this.Av.Get(K);this.
Av.Set(K,null);tmp.AX(this.DB().InitializeUp(K,AS,this.CC.Get(K),this.B8.Get(K),
this.A_.Get(K)+1,this.B7.Get(K),false,A1,this.Ct.Get(K)));this.BroadcastEvent(this.
D_().InitializeUp(K,this.A_.Get(K)+1,false,tmp,A1),0x18);this.AD=0;return true;}
this.AD=0;return false;},HL:function(Cg,FC,Cs,D7){if(Cg===this)Cg=null;if(!this.
Av.Get(this.Ae))return;var Bo;Bo=this.Dn(B.aam(EU,this.BN.Get(this.Ae)),this.Ae,
1,Cg,Cs,D7);if(!!Bo&&(this.Av.Get(this.Ae)!==Bo.Bm))this.Ht(Bo.Bm,Bo.CK);if(!Bo&&(
this.Av.Get(this.Ae)!==FC))this.Ht(FC,Ap);},Jw:function(Cg,FC,Cs){this.HL(Cg,FC,
Cs,0x0);},Ht:function(Cg,B4){if(!this.Av.Get(this.Ae)||(this.Av.Get(this.Ae)===Cg
))return;var tmp=this.Av.Get(this.Ae);this.Av.Set(this.Ae,null);tmp.AX(this.DB().
InitializeUp(this.Ae,this.CQ.Get(this.Ae),this.CC.Get(this.Ae),this.B8.Get(this.
Ae),this.A_.Get(this.Ae)+1,this.B7.Get(this.Ae),true,this.BN.Get(this.Ae),this.Ct.
Get(this.Ae)));this.BroadcastEvent(this.D_().InitializeUp(this.Ae,this.A_.Get(this.
Ae)+1,true,tmp,this.BN.Get(this.Ae)),0x18);var AS=this.BN.Get(this.Ae);var W=null;
if(!!Cg)W=Cg.G;while(!!W&&(W!==this)){AS=B.aaj(AS,W.N.slice(0,2));W=W.G;}if(!W&&(
Cg!==this)){this.Av.Set(this.Ae,null);return;}this.BroadcastEvent(this.D_().InitializeDown(
this.Ae,this.A_.Get(this.Ae)+1,true,Cg,this.BN.Get(this.Ae)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-B.vs)|0;this.Av.Set(this.Ae,Cg);this.B7.Set(this.
Ae,B4);this.CC.Set(this.Ae,AS);this.CQ.Set(this.Ae,AS);this.A_.Set(this.Ae,0);this.
B8.Set(this.Ae,0);this.D$.Set(this.Ae,ticksCount);this.Ct.Set(this.Ae,this.BN.Get(
this.Ae));this.Av.Get(this.Ae).AX(this.DB().InitializeDown(this.Ae,AS,this.A_.Get(
this.Ae)+1,this.B7.Get(this.Ae),true,this.Ct.Get(this.Ae)));},_Init:function(aArg
){D.Am._Init.call(this,aArg);D.Timer._Init.call(this.CR={Ak:this},0);(this.Av=[]
).__proto__=D.Root.Av;(this.A_=[]).__proto__=D.Root.A_;(this.FH=[]).__proto__=D.
Root.FH;(this.B8=[]).__proto__=D.Root.B8;(this.CC=[]).__proto__=D.Root.CC;(this.
D$=[]).__proto__=D.Root.D$;(this.CQ=[]).__proto__=D.Root.CQ;(this.B7=[]).__proto__=
D.Root.B7;(this.BN=[]).__proto__=D.Root.BN;(this.Ct=[]).__proto__=D.Root.Ct;(this.
Bg=[]).__proto__=D.Root.Bg;(this.AP=[]).__proto__=D.Root.AP;this.__proto__=D.Root;
this.F=0x7F;this.CR.Ey(10);this.CR.EA=[this,this.JX];this.Bd(aArg);},_Done:function(
){this.__proto__=D.Am;this.CR._Done();D.Am._Done.call(this);},_ReInit:function(){
D.Am._ReInit.call(this);this.CR._ReInit();},_Mark:function(E){var A;D.Am._Mark.call(
this,E);if((A=this.BQ)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aaf(this.Av,E);if((A=
this.D9)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.CR)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={AL:0,Et:false,Bd:function(aArg){this.AL=this.
Fo();},Fo:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Bd(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null
,_className:"Core::Event"};D.KeyEvent={AM:0,An:0,Down:false,Initialize2:function(
AQ,Ce){this.AM=0;this.An=AQ;this.Down=Ce;if((AQ>=0x30)&&(AQ<=0x39))this.AM=(10+AQ
)-48;if((AQ>=0x41)&&(AQ<=0x5A))this.AM=(105+AQ)-65;if((AQ>=0x61)&&(AQ<=0x7A))this.
AM=(105+AQ)-97;if(AQ===0x20)this.AM=131;if(!this.AM)switch(AQ){case 0x2B:this.AM=
132;break;case 0x2D:this.AM=133;break;case 0x2A:this.AM=134;break;case 0x2F:this.
AM=135;break;case 0x3D:this.AM=136;break;case 0x2E:this.AM=137;break;case 0x2C:this.
AM=138;break;case 0x3A:this.AM=139;break;case 0x3B:this.AM=140;break;default:;}return this;
},Initialize:function(AQ,Ce){this.AM=AQ;this.Down=Ce;this.An=0x00;var G5=AQ-10;var
G4=AQ-105;if((G5>=0)&&(G5<=9))this.An=(48+G5)&0xFFFF;if((G4>=0)&&(G4<=25))this.An=(
65+G4)&0xFFFF;if(AQ===131)this.An=0x20;if(this.An===0x00)switch(AQ){case 132:this.
An=0x2B;break;case 133:this.An=0x2D;break;case 134:this.An=0x2A;break;case 135:this.
An=0x2F;break;case 136:this.An=0x3D;break;case 137:this.An=0x2E;break;case 138:this.
An=0x2C;break;case 139:this.An=0x3A;break;case 140:this.An=0x3B;break;default:;}
return this;},IB:function(HQ){switch(HQ){case 141:return((this.An>=0x41)&&(this.
An<=0x5A))||((this.An>=0x61)&&(this.An<=0x7A));case 142:return(((this.An>=0x41)&&(
this.An<=0x5A))||((this.An>=0x61)&&(this.An<=0x7A)))||((this.An>=0x30)&&(this.An<=
0x39));case 143:return(this.An>=0x30)&&(this.An<=0x39);case 144:return(((this.An>=
0x41)&&(this.An<=0x46))||((this.An>=0x61)&&(this.An<=0x66)))||((this.An>=0x30)&&(
this.An<=0x39));case 145:return this.An!==0x00;case 146:return(this.An===0x00)&&
!!this.AM;case 147:return(((this.AM===6)||(this.AM===7))||(this.AM===4))||(this.
AM===5);case 148:return(this.An!==0x00)||!!this.AM;default:;}return HQ===this.AM;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;}
,_className:"Core::KeyEvent"};D.F_={GA:null,Cb:B.vw,BL:0,Bc:0,Down:false,B$:false
,InitializeUp:function(K,BM,Dx,G2,Cf){this.Down=false;this.Bc=K;this.BL=BM;this.
Cb=Cf;this.GA=G2;this.B$=Dx;return this;},InitializeDown:function(K,BM,Dx,G2,Cf){
this.Down=true;this.Bc=K;this.BL=BM;this.Cb=Cf;this.GA=G2;this.B$=Dx;return this;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.F_;},_Mark:
function(E){var A;D.Event._Mark.call(this,E);if((A=this.GA)&&(A._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::CursorGrabEvent"};D.DO={Eq:B.vw,Cb:B.vw,BL:0,Bs:
0,Cc:B.vw,Br:B.vw,Bc:0,Down:false,B$:false,InitializeHold:function(K,Da,EX,EY,BM
,B4,Cf,EW){this.Down=true;this.Bc=K;this.Br=B.aak(Da,B4);this.Cc=B.aak(EX,B4);this.
Bs=EY;this.BL=BM;this.Cb=Cf;this.Eq=EW;return this;},InitializeUp:function(K,Da,
EX,EY,BM,B4,Dx,Cf,EW){this.Down=false;this.Bc=K;this.Br=B.aak(Da,B4);this.Cc=B.aak(
EX,B4);this.Bs=EY;this.BL=BM;this.B$=Dx;this.Cb=Cf;this.Eq=EW;return this;},InitializeDown:
function(K,Da,BM,B4,Dx,Cf){this.Down=true;this.Bc=K;this.Br=B.aak(Da,B4);this.Cc=
B.aak(Da,B4);this.Bs=0;this.BL=BM;this.B$=Dx;this.Cb=Cf;this.Eq=Cf;return this;}
,_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.DO;},_className:
"Core::CursorEvent"};D.Fn={Eq:B.vw,Cb:B.vw,BL:0,Bs:0,CK:B.vw,Cc:B.vw,Br:B.vw,Bc:
0,Initialize:function(K,Da,EX,aOffset,EY,JP,B4,Cf,EW){this.Bc=K;this.Br=B.aak(Da
,B4);this.Cc=B.aak(EX,B4);this.CK=aOffset;this.Bs=EY;this.BL=JP;this.Cb=Cf;this.
Eq=EW;return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.Fn;},_className:"Core::DragEvent"};D.EC={Ca:function(At,aClip,aOffset,AF,aBlend
){},Ao:function(C){var A;if(B.z9(C,this.N))return;var Dg=[(A=this.N)[2]-A[0],A[3
]-A[1]];var Hg=[C[2]-C[0],C[3]-C[1]];var Eg=!B.z8(Dg,Hg);var BW=B.aaj(C.slice(0,
2),this.N.slice(0,2));if(!B.z8(BW,Ap)&&!Eg){var H=this.As;while(!!H&&!((H.F&0x200
)===0x200)){if(((H.F&0x400)===0x400)){var tmp=((H.F&0x100)===0x100);H.Gt(BW,tmp);
}H=H.As;}}if((Eg&&(Dg[0]>0))&&(Dg[1]>0)){var Ag=this.N;var H=this.As;while(!!H&&
!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){if(!!H.Au&&(H.Au.DI!==this))H.
Au=null;if(!H.Au&&(H.BK!==0x14))H.E4(Ag,this);}H=H.As;}}D.AU.Ao.call(this,C);if(
!!this.G&&Eg){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.
G.F|0x4000;B.ow([A=this.G,A.Bh],this);}}},_Init:function(aArg){D.AU._Init.call(this
,aArg);this.__proto__=D.EC;this.F=0x203;},_className:"Core::Outline"};D.D2={Gu:null
,Gw:null,Gv:null,Bu:null,Cl:null,Ay:0,Bc:0,AL:0,BL:0,Bs:0,CK:B.vw,Cc:B.vw,Br:B.vw
,Jx:8,Hy:1,Down:false,C6:false,B$:false,G8:false,H2:0,Ca:function(At,aClip,aOffset
,AF,aBlend){},AX:function(Al){var A;var Aj=(D.DO.isPrototypeOf(Al)?Al:null);var B0=(
D.Fn.isPrototypeOf(Al)?Al:null);var FL=this.C6;var Fe;var Eb;var Ij;var CY;var HW;
if(!Aj&&!B0)return null;Fe=(!!Aj&&Aj.Down)&&!Aj.Bs;Eb=(!!Aj&&Aj.Down)&&(Aj.Bs>0);
Ij=(!!Aj&&Aj.Down)&&(Aj.Bs>this.H2);CY=!!Aj&&!Aj.Down;HW=!!B0;if(Fe)this.H2=((A=(
Aj.B$?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Fe){var Hi=0;var E3;this.Ay=this.Ay|(1<<
Aj.Bc);for(E3=this.Ay&4095;E3>0;E3=E3>>1)if(!!(E3&1))Hi=Hi+1;if(Hi===1)this.Ay=(
this.Ay|16777216)|(4096<<Aj.Bc);}if(CY&&(this.Ay<16777216)){var Cz=this.Fp();var
Bo=null;if(!!Cz){var J_=(!!this.Ah?this.Ah:this.G);Bo=Cz.Dn(B.aam(GX,Aj.Cb),Aj.Bc
,Aj.BL,null,J_,0x0);}if(!!Bo){var I;for(I=0;I<10;I++)if(!!(this.Ay&(1<<I)))Bo.Bm.
AX(B._NewObject(D.DO,0).InitializeDown(I,Aj.Br,Aj.BL,Ap,true,Aj.Cb));for(I=0;I<10;
I++)if(!!(this.Ay&(1<<I)))Bo.Bm.AX(B._NewObject(D.DO,0).InitializeUp(I,Aj.Br,Aj.
Br,0,Aj.BL,Ap,false,Aj.Cb,Aj.Cb));}}if(CY)this.Ay=(this.Ay&~(1<<Aj.Bc))|33554432;
if(Ij&&(this.Ay<16777216))this.Ay=this.Ay|67108864;if(CY&&Aj.B$)this.Ay=this.Ay|
67108864;if(CY&&!(this.Ay&16777215))this.Ay=0;if(Eb&&(this.Ay>=67108864)){var Cz=
this.Fp();if(!!Cz)Cz.HL(null,null,this,0x0);}if((Eb&&!!(this.Ay&16777216))&&!!(this.
Ay&33554432)){Eb=false;CY=true;}if(!!Aj&&!(this.Ay&(4096<<Aj.Bc)))return this;if(
!!B0&&!(this.Ay&(4096<<B0.Bc)))return this;if(CY&&!(this.Ay&16777216))return this;
if(((Fe||HW)||Eb)&&((this.Ay<16777216)||(this.Ay>=33554432)))return this;if(CY)this.
Ay=this.Ay&3758100479;if(CY&&!(this.Ay&16777215))this.Ay=0;if(!!Aj){this.Down=Fe||
Eb;this.C6=this.Gr(Aj.Br);this.Cc=Aj.Cc;this.Br=Aj.Br;this.CK=Ap;this.Bs=Aj.Bs;this.
BL=Aj.BL;this.B$=Aj.B$;this.Bc=Aj.Bc;this.AL=Aj.AL;if(Aj.Down&&!Aj.Bs)FL=false;}
if(!!B0){this.Down=true;this.C6=this.Gr(B0.Br);this.Cc=B0.Cc;this.Br=B0.Br;this.
CK=B0.CK;this.Bs=B0.Bs;this.BL=B0.BL;this.Bc=B0.Bc;this.B$=false;this.AL=B0.AL;}
var G7=this.Down;if(!!B0)(A=this.Gu)?A[1].call(A[0],this):null;if((!!Aj&&this.Down
)&&!this.Bs)(A=this.Cl)?A[1].call(A[0],this):null;if((this.Down&&this.C6)&&!FL){
this.G8=true;(A=this.Gv)?A[1].call(A[0],this):null;}if(this.G8&&(((G7&&!this.C6)&&
FL)||((!G7&&this.C6)&&FL))){this.G8=false;(A=this.Gw)?A[1].call(A[0],this):null;
}if(!!Aj&&!G7)(A=this.Bu)?A[1].call(A[0],this):null;return this;},Dn:function(Aa
,K,BM,D4,Cs,D7){var A;if(!!D4&&(D4!==this))return null;if((BM<1)||(BM>this.Hy))return null;
if(this.Ay>=33554432)return null;if((this.Ay>=16777216)&&!(this.Ay&(4096<<K)))return null;
if(this.Iy()){var X=B.kz(Aa,this.GetExtent());if(!((X[0]>=X[2])||(X[1]>=X[3]))){
var Dc=B.zT(Aa);var BW=Ap;if(Dc[0]<X[0])BW=[X[0]-Dc[0],BW[1]];if(Dc[0]>=X[2])BW=[(
X[2]-Dc[0])-1,BW[1]];if(Dc[1]<X[1])BW=[BW[0],X[1]-Dc[1]];if(Dc[1]>=X[3])BW=[BW[0
],(X[3]-Dc[1])-1];return B._NewObject(D.F$,0).Initialize(this,BW);}}else{var Aw=
B.aan(9,B.vw,null);var I;Aw.Set(0,B.zT(Aa));Aw.Set(1,Aw.Get(0));Aw.Set(2,Aw.Get(
0));Aw.Set(3,Aw.Get(0));Aw.Set(4,Aw.Get(0));Aw.Set(1,[Aa[0],Aw.Get(1)[1]]);Aw.Set(
2,[Aw.Get(2)[0],Aa[1]]);Aw.Set(3,[Aa[2],Aw.Get(3)[1]]);Aw.Set(4,[Aw.Get(4)[0],Aa[
3]]);Aw.Set(5,Aa.slice(0,2));Aw.Set(6,[Aa[2],Aa[1]]);Aw.Set(7,[Aa[0],Aa[3]]);Aw.
Set(8,Aa.slice(2,4));for(I=0;I<9;I=I+1)if(this.Gr(Aw.Get(I)))return B._NewObject(
D.F$,0).Initialize(this,B.aaj(Aw.Get(I),Aw.Get(0)));}return null;},HJ:function(C
){if(C<1)C=1;this.Jx=C;},HG:function(C){if(C<1)C=1;this.Hy=C;},Bv:function(C){if(
C)this.A4(0x10,0x0);else this.A4(0x0,0x10);},_Init:function(aArg){D.EE._Init.call(
this,aArg);this.__proto__=D.D2;this.F=0x11B;},_Mark:function(E){var A;D.EE._Mark.
call(this,E);if((A=this.Gu)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Gw)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Gv)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Bu)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Cl)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"
};D.Do={As:null,Bu:null,Cl:null,DJ:0,AL:0,HK:0,BF:148,AM:0,An:0,BE:true,Down:false
,Gz:false,Bd:function(aArg){var A;var DF=(D.Am.isPrototypeOf(A=this.Ak)?A:null);
if(!DF)throw new Error(GY);this.As=DF.FO;DF.FO=this;},AX:function(Al){var A;if(!
!Al&&Al.IB(this.BF)){this.Down=Al.Down;this.AM=Al.AM;this.An=Al.An;this.AL=Al.AL;
if(Al.Down){this.HK=this.DJ;this.Gz=this.DJ>0;if(!this.Gz)(A=this.Cl)?A[1].call(
A[0],this):null;this.DJ=this.DJ+1;return true;}if(!Al.Down){this.Gz=this.DJ>1;this.
HK=this.DJ-1;this.DJ=0;(A=this.Bu)?A[1].call(A[0],this):null;return true;}}return false;
},_Init:function(aArg){this.__proto__=D.Do;this.Bd(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.As)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Bu)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Cl)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};D.F$={Bm:null,Ei:0,CK:B.vw,Initialize:function(
J,aOffset){this.Bm=J;this.CK=aOffset;this.Ei=(aOffset[0]*aOffset[0])+(aOffset[1]
*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=D.F$;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Bm)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ak)&&(A._cycle!=E
))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};D.Fr={DI:null,Bz:B.vx,Ag:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
D.Fr;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.DI)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};D.Fs={Fd:B.vw,Fc:B.vw,Fb:B.vw,Fa:B.vw,_Init:function(aArg
){D.Fr._Init.call(this,aArg);this.__proto__=D.Fs;},_className:"Core::LayoutQuadContext"
};D.CN={resource:null,B2:function(){this.resource=null;},Bd:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=D.CN;this.Bd(aArg);B.hJ++;},
_Done:function(){this.B2();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:
0,_observers:null,_className:"Core::Resource"};D.Timer={EA:null,timer:null,AL:0,
Period:1000,Fm:0,BE:false,B2:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},FS:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.zk(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},Ey:function(C){if(C<0)C=0;if(C===this.Period)return;this.Period=C;if(this.
BE)this.FS(this.Fm,C);},Ew:function(C){if(C<0)C=0;if(C===this.Fm)return;this.Fm=
C;if(this.BE)this.FS(C,this.Period);},Bv:function(C){if(C===this.BE)return;this.
BE=C;if(C)this.FS(this.Fm,this.Period);else this.FS(0,0);this.AL=this.Fo();},Fo:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.AL=this.Fo();if(!this.Period)this.Bv(false);(A=this.
EA)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=D.Timer;B.hJ++;
},_Done:function(){this.B2();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.EA)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);},Ak:null,_cycle:0,_observers:null,_className:
"Core::Timer"};D.K$={La:0x1,Kk:0x2,Ku:0x4,K9:0x8,BE:0x10,K1:0x20,Kv:0x40,KF:0x80
,Kt:0x100,KA:0x200,Kr:0x400,KN:0x800,HM:0x1000,K_:0x2000,KK:0x4000,KL:0x8000,Kq:
0x10000,KJ:0x20000,KX:0x40000};D.BK={KO:0x1,KP:0x2,Kg:0x4,Kh:0x8,Ki:0x10,Kf:0x20
};D.Kx={KG:0,K6:1,Km:2,KB:3,KR:4,K7:5,K8:6,Kn:7,Ko:8,KD:9,KC:10,KT:11,KS:12};D.KeyCode={
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.KQ={Le:0x1,Lb:0x2,Lc:0x4,Ld:0x8,KE:
0x10,Kw:0x20};
D._Init=function(){D.EE.__proto__=D.Bm;D.AU.__proto__=D.Bm;D.Am.__proto__=D.AU;D.
Root.__proto__=D.Am;D.KeyEvent.__proto__=D.Event;D.F_.__proto__=D.Event;D.DO.__proto__=
D.Event;D.Fn.__proto__=D.Event;D.EC.__proto__=D.AU;D.D2.__proto__=D.EE;D.Fs.__proto__=
D.Fr;};D._ReInit=function(){};D.Bw=function(E){};return D;})();

/* Embedded Wizard */