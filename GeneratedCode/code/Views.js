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
abh=(function(){var B=EmWiApp;var D={};
var Ap=[0,0];var AN=[0,0,0,0];var Cc="\uFEFF";
D.Cm={BR:0xFFFFFFFF,B$:function(At,aClip,aOffset,AF,aBlend){var A;var AI;var AJ;var
AG;var AH;var Bm=this.BR;aBlend=aBlend&&((this.F&0x2)===0x2);AF=AF+1;AI=AJ=AG=AH=
Bm;if(AF<256){AI=(AI&0x00FFFFFF)|((((AF*((AI>>24)&0xFF))>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF
)|((((AF*((AJ>>24)&0xFF))>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((AF*((AG>>24)&0xFF
))>>8)&0xFF)<<24);AH=(AH&0x00FFFFFF)|((((AF*((AH>>24)&0xFF))>>8)&0xFF)<<24);}At.
Ga(aClip,B.aam(this.M,aOffset),AI,AJ,AH,AG,aBlend);},Cl:function(C){var A;if(C===
this.BR)return;this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);},_Init:
function(aArg){B.Core.AU._Init.call(this,aArg);this.__proto__=D.Cm;},_className:
"Views::Rectangle"};D.Ef={timer:null,T:null,A9:-1,BR:0xFFFFFFFF,Ea:0x1F,CI:0,DK:
0,Dl:B.vw,BZ:false,B$:function(At,aClip,aOffset,AF,aBlend){var A;var AX=this.CI;
if(this.A9>=0)AX=this.A9;if(!this.T||(AX>=this.T.NoOfFrames))return;this.T.Update(
);var AI;var AJ;var AH;var AG;var Bm=this.BR;var BB=(((AF+1)*255)>>8)+1;var Bf=this.
Ea;var X=B.aam(this.M,aOffset);var FR=B.aaj([X[2]-X[0],X[3]-X[1]],this.Dl);aBlend=
aBlend&&((this.F&0x2)===0x2);AI=AJ=AG=AH=Bm;if(BB<256){AI=(AI&0x00FFFFFF)|((((((
AI>>24)&0xFF)*BB)>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF)|((((((AJ>>24)&0xFF)*BB)>>8)&
0xFF)<<24);AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*BB)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF
)|((((((AG>>24)&0xFF)*BB)>>8)&0xFF)<<24);}if(((this.Dl[0]>0)&&(FR[0]>0))&&!((Bf&
0x5)===0x5)){var By=((this.T.FrameSize[0]/3)|0)-FR[0];if(((Bf&0x1)===0x1)){if(aClip[
2]>X[2])aClip=B.aaQ(aClip,X[2]);if(By>0)X=B.aaQ(X,X[2]+By);Bf=Bf|0x4;}else if(((
Bf&0x4)===0x4)){if(aClip[0]<X[0])aClip=[].concat(X[0],aClip.slice(1,4));if(By>0)
X=[].concat(X[0]-By,X.slice(1,4));Bf=Bf|0x1;}else{if(aClip[0]<X[0])aClip=[].concat(
X[0],aClip.slice(1,4));if(aClip[2]>X[2])aClip=B.aaQ(aClip,X[2]);if(By>0){X=[].concat(
X[0]-((By/2)|0),X.slice(1,4));X=B.aaQ(X,(X[2]+By)-((By/2)|0));}Bf=Bf|0x5;}}if(((
this.Dl[1]>0)&&(FR[1]>0))&&!((Bf&0xA)===0xA)){var By=((this.T.FrameSize[1]/3)|0)-
FR[1];if(((Bf&0x2)===0x2)){if(aClip[3]>X[3])aClip=[].concat(aClip.slice(0,3),X[3
]);if(By>0)X=[].concat(X.slice(0,3),X[3]+By);Bf=Bf|0x8;}else if(((Bf&0x8)===0x8)
){if(aClip[1]<X[1])aClip=B.aaS(aClip,X[1]);if(By>0)X=B.aaS(X,X[1]-By);Bf=Bf|0x2;
}else{if(aClip[1]<X[1])aClip=B.aaS(aClip,X[1]);if(aClip[3]>X[3])aClip=[].concat(
aClip.slice(0,3),X[3]);if(By>0){X=B.aaS(X,X[1]-((By/2)|0));X=[].concat(X.slice(0
,3),(X[3]+By)-((By/2)|0));}Bf=Bf|0xA;}}At.Ik(aClip,this.T,AX,X,Bf,AI,AJ,AH,AG,aBlend
);},E0:function(Ax){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);},
CZ:function(Ax){var A;var AX=this.A9;var B8=0;if(!!this.T)B8=this.T.NoOfFrames*this.
T.FrameDelay;if((!!this.timer&&(this.A9<0))&&(B8>0))this.DK=this.timer.AL-(this.
CI*this.T.FrameDelay);if(!!this.timer&&(B8>0)){var DL=(this.timer.AL-this.DK)|0;
AX=(DL/this.T.FrameDelay)|0;if(DL>=B8){AX=AX%this.T.NoOfFrames;this.DK=this.timer.
AL-(DL%B8);}}if(((AX!==this.A9)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ai(this.
M);this.A9=AX;if(!B8&&!!this.timer){B.zl([this,this.CZ],this.timer,0);this.timer=
null;}},Cl:function(C){var A;if(C===this.BR)return;this.BR=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.M);},Cy:function(C){var A;if(this.BZ===C)return;this.
BZ=C;this.A9=-1;if(!C&&!!this.timer){B.zl([this,this.CZ],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.abk.Eb);B.y_([this,this.CZ],this.timer
,0);B.ow([this,this.CZ],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.
M);},Hr:function(C){var A;if(C===this.Ea)return;this.Ea=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ai(this.M);},Dm:function(C){var A;if(C<0)C=0;if((C===this.CI)&&(
this.A9===-1))return;this.CI=C;if(!this.timer)this.A9=-1;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ai(this.M);},Ck:function(C){var A;if(C===this.T)return;if(!!this.
T&&this.T.DQ)B.zl([this,this.E0],this.T,0);this.T=C;this.A9=-1;if(!!C&&C.DQ)B.y_([
this,this.E0],C,0);if(this.BZ){this.Cy(false);this.Cy(true);}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.M);},Fu:function(C){if(C)this.A4(0x1,0x0);else this.
A4(0x0,0x1);},Hw:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.z8(C,this.Dl))return;this.Dl=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.Ea&
0xF)===0xF))this.G.Ai(this.M);},_Init:function(aArg){B.Core.AU._Init.call(this,aArg
);this.__proto__=D.Ef;},_Mark:function(E){var A;B.Core.AU._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.C2={timer:null,T:null,DK:0,A9:0
,BR:0xFFFFFFFF,CH:0x12,CI:0,Et:0,BZ:false,B$:function(At,aClip,aOffset,AF,aBlend
){var A;var AX=this.CI;if(this.A9>=0)AX=this.A9;if(!this.T||(AX>=this.T.NoOfFrames
))return;this.T.Update();var N=this.Gc();var Ba=this.T.FrameSize;var orient=this.
Et;if((N[0]>=N[2])||(N[1]>=N[3]))return;var AI;var AJ;var AH;var AG;var Bm=this.
BR;var BB=(((AF+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);AI=AJ=AG=AH=Bm;
if(BB<256){AI=(AI&0x00FFFFFF)|((((((AI>>24)&0xFF)*BB)>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF
)|((((((AJ>>24)&0xFF)*BB)>>8)&0xFF)<<24);AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*
BB)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((((AG>>24)&0xFF)*BB)>>8)&0xFF)<<24);}if(
B.z8([N[2]-N[0],N[3]-N[1]],Ba)&&!orient)At.Ii(aClip,this.T,AX,B.aam(this.M,aOffset
),B.aaj(this.M.slice(0,2),N.slice(0,2)),AI,AJ,AH,AG,aBlend);else if(!orient)At.Jd(
aClip,this.T,AX,B.aam(N,aOffset),[].concat(Ap,Ba),AI,AJ,AH,AG,aBlend,true);else{
var left=N[0]+aOffset[0];var top=N[1]+aOffset[1];var right=N[2]+aOffset[0];var bottom=
N[3]+aOffset[1];if(orient===1)At.GL(aClip,this.T,AX,left,bottom,1,left,top,1,right
,top,1,right,bottom,1,[].concat(Ap,Ba),AG,AI,AJ,AH,aBlend,true);else if(orient===
2)At.GL(aClip,this.T,AX,right,bottom,1,left,bottom,1,left,top,1,right,top,1,[].concat(
Ap,Ba),AH,AG,AI,AJ,aBlend,true);else if(orient===3)At.GL(aClip,this.T,AX,right,top
,1,right,bottom,1,left,bottom,1,left,top,1,[].concat(Ap,Ba),AJ,AH,AG,AI,aBlend,true
);}},E0:function(Ax){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);}
,CZ:function(Ax){var A;var AX=this.A9;var B8=0;if(!!this.T)B8=this.T.NoOfFrames*
this.T.FrameDelay;if((!!this.timer&&(this.A9<0))&&(B8>0))this.DK=this.timer.AL-(
this.CI*this.T.FrameDelay);if(!!this.timer&&(B8>0)){var DL=(this.timer.AL-this.DK
)|0;AX=(DL/this.T.FrameDelay)|0;if(DL>=B8){AX=AX%this.T.NoOfFrames;this.DK=this.
timer.AL-(DL%B8);}}if(((AX!==this.A9)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ai(
this.M);this.A9=AX;if(!B8&&!!this.timer){B.zl([this,this.CZ],this.timer,0);this.
timer=null;}},IE:function(C){var A;if(C===this.Et)return;this.Et=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ai(this.M);},Cl:function(C){var A;if(C===this.BR)return;
this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);},Cy:function(C){var
A;if(this.BZ===C)return;this.BZ=C;this.A9=-1;if(!C&&!!this.timer){B.zl([this,this.
CZ],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.abk.Eb);B.
y_([this,this.CZ],this.timer,0);B.ow([this,this.CZ],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ai(this.M);},Fp:function(C){var A;if(C===this.CH)return;this.
CH=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);},Dm:function(C){var A;
if(C<0)C=0;if((C===this.CI)&&(this.A9===-1))return;this.CI=C;if(!this.timer)this.
A9=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);},Ck:function(C){var A;
if(C===this.T)return;if(!!this.T&&this.T.DQ)B.zl([this,this.E0],this.T,0);this.T=
C;this.A9=-1;if(!!C&&C.DQ)B.y_([this,this.E0],C,0);if(this.BZ){this.Cy(false);this.
Cy(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.M);},Gc:function(){var
A;if(!this.T)return AN;var orient=this.Et;var Y=this.CH;var Ba=this.T.FrameSize;
var Ag=this.M;var width=Ag[2]-Ag[0];var height=Ag[3]-Ag[1];if(!Ba[0]||!Ba[1])return AN;
if((orient===1)||(orient===3)){width=height;height=Ag[2]-Ag[0];}var Ad=[0,0,width
,height];var L=Ad;if(((Y&0x40)===0x40)){var He=((((Ad[2]-Ad[0])<<16)+((Ba[0]/2)|
0))/Ba[0])|0;var E9=((((Ad[3]-Ad[1])<<16)+((Ba[1]/2)|0))/Ba[1])|0;var CY=He;if(E9>
CY)CY=E9;L=B.aaO(L,((Ba[0]*CY)+32768)>>16);L=B.aaL(L,((Ba[1]*CY)+32768)>>16);}else
if(((Y&0x80)===0x80)){var He=((((Ad[2]-Ad[0])<<16)+((Ba[0]/2)|0))/Ba[0])|0;var E9=((((
Ad[3]-Ad[1])<<16)+((Ba[1]/2)|0))/Ba[1])|0;var CY=He;if(E9<CY)CY=E9;L=B.aaO(L,((Ba[
0]*CY)+32768)>>16);L=B.aaL(L,((Ba[1]*CY)+32768)>>16);}else if(!((Y&0x100)===0x100
))L=B.aaN(L,Ba);if((L[2]-L[0])!==(Ad[2]-Ad[0])){if(((Y&0x4)===0x4))L=B.aaP(L,Ad[
2]-(L[2]-L[0]));else if(((Y&0x2)===0x2))L=B.aaP(L,(Ad[0]+(((Ad[2]-Ad[0])/2)|0))-(((
L[2]-L[0])/2)|0));}if((L[3]-L[1])!==(Ad[3]-Ad[1])){if(((Y&0x20)===0x20))L=B.aaR(
L,Ad[3]-(L[3]-L[1]));else if(((Y&0x10)===0x10))L=B.aaR(L,(Ad[1]+(((Ad[3]-Ad[1])/
2)|0))-(((L[3]-L[1])/2)|0));}if(!orient)L=B.aam(L,Ag.slice(0,2));else if(orient===
1){var Dd=[Ag[0]+L[1],Ag[3]-L[2]];L=[].concat(Dd,B.aak(Dd,[L[3]-L[1],L[2]-L[0]])
);}else if(orient===2){var Dd=[Ag[2]-L[2],Ag[3]-L[3]];L=[].concat(Dd,B.aak(Dd,[L[
2]-L[0],L[3]-L[1]]));}else if(orient===3){var Dd=[Ag[2]-L[3],Ag[1]+L[0]];L=[].concat(
Dd,B.aak(Dd,[L[3]-L[1],L[2]-L[0]]));}return L;},_Init:function(aArg){B.Core.AU._Init.
call(this,aArg);this.__proto__=D.C2;},_Mark:function(E){var A;B.Core.AU._Mark.call(
this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.Text={AT:null,Az:B.jm,String:
B.jm,BS:null,Di:B.vw,CH:0x12,BR:0xFFFFFFFF,DX:false,DO:false,FZ:false,BC:false,B0:
function(){if(!!this.BS){this.GZ(this.BS);this.BS=null;}},B$:function(At,aClip,aOffset
,AF,aBlend){var A;if((this.Az===B.jm)||!this.AT)return;var Y=this.CH;var font=this.
AT;var Ad=B.aam(this.M,aOffset);var AI;var AJ;var AH;var AG;var Js=this.BR;var BB=(((
AF+1)*255)>>8)+1;var Cs=this.Az.charCodeAt(0)||0;var N=B.aam(this.Gc(),aOffset);
var HX=[Ad[0]-N[0],(Ad[1]-N[1])-font.Ascent];if(Cs<1)return;AI=AJ=AG=AH=Js;if(BB<
256){AI=(AI&0x00FFFFFF)|((((((AI>>24)&0xFF)*BB)>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF
)|((((((AJ>>24)&0xFF)*BB)>>8)&0xFF)<<24);AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*
BB)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((((AG>>24)&0xFF)*BB)>>8)&0xFF)<<24);}if(((
Y&0x80)===0x80)){if(this.Ge())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if((Cs===1)&&
!((Y&0x40)===0x40)){At.Hj(aClip,font,this.Az,2,(this.Az.charCodeAt(1)||0)-1,Ad,HX
,0,0,AI,AJ,AH,AG,true);return;}var leading=font.Leading;var Hd=(font.Ascent+font.
Descent)+leading;var Jq=aClip[1]-N[1];var Jr=aClip[3]-N[1];var GS=N[2]-N[0];var DM=
0;var I=1;var Bm=this.Az.charCodeAt(1)||0;while(((DM+Hd)<Jq)&&(Bm>0)){I=I+Bm;DM=
DM+Hd;Bm=this.Az.charCodeAt(I)||0;}while((DM<Jr)&&(Bm>0)){var DF=B.aaj(HX,[0,DM]
);var H7=0;var FI=false;if(((((Y&0x40)===0x40)&&((this.Az.charCodeAt((I+Bm)-1)||
0)!==0x0A))&&((this.Az.charCodeAt(I+1)||0)!==0x0A))&&((this.Az.charCodeAt(I+Bm)||
0)!==0x00))FI=true;if(FI&&!!(Y&0x6)){var H6=I+Bm;var HI=this.Az.indexOf(String.fromCharCode(
0x20),I+1);var HJ=this.Az.indexOf(String.fromCharCode(0xA0),I+1);if(((HI<0)||(HI>=
H6))&&((HJ<0)||(HJ>=H6)))FI=false;}if(FI)H7=GS;else if(((Y&0x4)===0x4))DF=[(DF[0
]-GS)+font.Eg(this.Az,I+1,Bm-1),DF[1]];else if(((Y&0x2)===0x2))DF=[(DF[0]-((GS/2
)|0))+((font.Eg(this.Az,I+1,Bm-1)/2)|0),DF[1]];At.Hj(aClip,font,this.Az,I+1,Bm-1
,Ad,DF,H7,0,AI,AJ,AH,AG,true);I=I+Bm;DM=DM+Hd;Bm=this.Az.charCodeAt(I)||0;}},An:
function(C){var A;if(B.z9(C,this.M))return;var H5;H5=((A=this.M)[2]-A[0])!==(C[2
]-C[0]);if(((H5&&this.DX)&&this.BC)&&!((this.F&0x2000)===0x2000)){this.Az=B.jm;this.
BC=false;B.ow([this,this.De],this);}if(((this.DO&&this.BC)&&!B.z8([(A=this.M)[2]-
A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.Az=B.
jm;this.BC=false;B.ow([this,this.De],this);}B.Core.AU.An.call(this,C);B.ow([this
,this.Hb],this);},GZ:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Jt:function(
aSize){var bidi=null;bidi=B.vj(aSize);return bidi;},Hb:function(Ax){},De:function(
Ax){B.ow([this,this.FM],this);},FM:function(Ax){var A;if(this.BC)return;var width=(
A=this.M)[2]-A[0];var height=(A=this.M)[3]-A[1];var CF=-1;var font=this.AT;if((!
!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.DX){CF=width;if(CF<0)CF=
1;}if(!!this.BS){this.GZ(this.BS);this.BS=null;}this.BC=true;if((this.String!==B.
jm)&&!!font){var length=this.String.length;if(this.FZ)this.BS=this.Jt(length);this.
Az=font.Ja(this.String,0,CF,length,this.BS);if(!!this.BS&&!this.Io()){this.GZ(this.
BS);this.BS=null;}}else this.Az=B.jm;this.Di=Ap;if((this.DO&&(this.Az!==B.jm))&&
!!font){var Y=this.CH;var leading=font.Leading;var AE=this.Az;var FQ=this.Ge();if(((
Y&0x80)===0x80)){if(FQ)Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}var FO=(font.Ascent+
font.Descent)+leading;var Cs=AE.charCodeAt(0)||0;var C$=((height+leading)/FO)|0;
var GV=false;var FB=false;if(C$<=0)C$=1;if(Cs>C$){var Ch=0;var E8=0;var FP=Cs-1;
var AV;var Bb=AE.length;var tmp=B.jm;if(!!(Y&0x110)&&!!(Y&0x28))Y&=~0x110;if(!!(
Y&0x110))Y&=~0x28;if(((Y&0x20)===0x20))E8=Cs-C$;else if(((Y&0x10)===0x10)||((Y&0x100
)===0x100)){E8=((Cs-C$)/2)|0;FP=(E8+C$)-1;}else FP=C$-1;GV=E8>0;FB=FP<(Cs-1);for(
AV=1;Ch<E8;Ch=Ch+1)AV=AV+(AE.charCodeAt(AV)||0);if(FB)for(Bb=AV;Ch<FP;Ch=Ch+1)Bb=
Bb+(AE.charCodeAt(Bb)||0);if(GV){var Bo=AE.charCodeAt(AV)||0;tmp=(Cc+B.aaY(AE,AV
,Bo))+Cc;tmp=B.aaT(tmp,0,(Bo+2)&0xFFFF);AV=AV+Bo;if((tmp.charCodeAt(Bo)||0)===0x0A
){tmp=B.aaT(tmp,Bo,0xFEFF);tmp=B.aaT(tmp,Bo+1,0x0A);}if((tmp.charCodeAt(2)||0)===
0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp,1,0xFEFF
);}tmp=tmp+B.aaY(AE,AV,Bb-AV);if(FB&&(Bb>=AV)){var Bo=AE.charCodeAt(Bb)||0;var BD=(
Cc+B.aaY(AE,Bb,Bo))+Cc;BD=B.aaT(BD,0,(Bo+2)&0xFFFF);BD=B.aaT(BD,1,0xFEFF);if((BD.
charCodeAt(Bo)||0)===0x0A){BD=B.aaT(BD,Bo,0xFEFF);BD=B.aaT(BD,Bo+1,0x0A);}if((BD.
charCodeAt(2)||0)===0x0A){BD=B.aaT(BD,2,0xFEFF);BD=B.aaT(BD,1,0x0A);}else BD=B.aaT(
BD,1,0xFEFF);tmp=tmp+BD;}AE=String.fromCharCode(C$&0xFFFF)+tmp;}var Ch=0;var FH=
1;var G6=width;Cs=AE.charCodeAt(0)||0;for(;Ch<Cs;Ch=Ch+1){var Dg=GV&&!Ch;var Dh=
FB&&(Ch===(Cs-1));var B4=false;var B5=false;var D_=FQ;if((FQ&&Dg)&&!Dh){Dg=false;
Dh=true;}else if((FQ&&Dh)&&!Dg){Dh=false;Dg=true;}var E_=FH+1;var Bo=AE.charCodeAt(
FH)||0;var AV=E_;var Bb=(E_+Bo)-2;var G4=-1;var G5=-1;if(!this.DX&&(font.Eg(AE,E_
,Bo-1)>G6)){var Dw=Y;if(((Dw&0x2)===0x2)&&!!(Dw&0x5))Dw&=~0x2;if(((Dw&0x2)===0x2
))Dw&=~0x5;if(((Dw&0x4)===0x4))B4=true;else if(((Dw&0x2)===0x2)){B4=true;B5=true;
}else B5=true;}if((AE.charCodeAt(AV)||0)===0x0A)AV=AV+1;if((AE.charCodeAt(Bb)||0
)===0x0A)Bb=Bb-1;while(B4&&((AE.charCodeAt(AV)||0)===0xFEFF))AV=AV+1;while(B5&&((
AE.charCodeAt(Bb)||0)===0xFEFF))Bb=Bb-1;B4=B4&&!Dh;B5=B5&&!Dg;while((((B4||B5)||
Dg)||Dh)&&(AV<Bb)){if((B4&&(D_||!B5))||Dg){if(G4>0)AE=B.aaT(AE,G4,0xFEFF);AE=B.aaT(
AE,AV,0x2026);G4=AV;AV=AV+1;D_=!D_;Dg=false;if(font.Eg(AE,E_,Bo-1)<=G6){B4=false;
B5=false;}else B4=B4||!B5;}if((B5&&(!D_||!B4))||Dh){if(G5>0)AE=B.aaT(AE,G5,0xFEFF
);AE=B.aaT(AE,Bb,0x2026);G5=Bb;Bb=Bb-1;D_=!D_;Dh=false;if(font.Eg(AE,E_,Bo-1)<=G6
){B4=false;B5=false;}else B5=B5||!B4;}}FH=FH+Bo;}this.Di=[font.Hl(AE),((AE.charCodeAt(
0)||0)*FO)-leading];this.Az=AE;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.
M);B.ow([this,this.Hb],this);},Is:function(C){if(C===this.FZ)return;this.FZ=C;this.
Az=B.jm;this.BC=false;B.ow([this,this.De],this);},Ir:function(C){if(C===this.DO)
return;this.DO=C;if(this.DX||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
Az=B.jm;this.BC=false;B.ow([this,this.De],this);},I_:function(C){if(C===this.DX)
return;this.DX=C;if(this.BC){this.Az=B.jm;this.BC=false;B.ow([this,this.De],this
);}if(C||this.DO)this.F=this.F&~0x100;else this.F=this.F|0x100;},Fp:function(C){
var A;if(C===this.CH)return;this.CH=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(
this.M);if(this.DO){this.Az=B.jm;this.BC=false;B.ow([this,this.De],this);}if(this.
BC)B.ow([this,this.Hb],this);},Dn:function(C){if(C===this.String)return;this.String=
C;this.Az=B.jm;this.BC=false;B.ow([this,this.De],this);},Ep:function(C){if(C===this.
AT)return;this.AT=C;this.Az=B.jm;this.BC=false;B.ow([this,this.De],this);},Cl:function(
C){var A;if(C===this.BR)return;this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ai(this.M);},Ge:function(){if(!this.BC)this.FM(this);if(!this.BS)return false;
var result=false;var bidi=this.BS;result=B.vi(bidi);return result;},Io:function(
){if(!this.BC)this.FM(this);if(!this.BS)return false;var result=false;var bidi=this.
BS;result=B.zc(bidi);return result;},Gc:function(){var A;if((this.String===B.jm)||
!this.AT)return AN;if(!this.BC)this.FM(this);if(this.Az===B.jm)return AN;var leading=
this.AT.Leading;var FO=(this.AT.Ascent+this.AT.Descent)+this.AT.Leading;if(B.z8(
this.Di,Ap))this.Di=[this.AT.Hl(this.Az),this.Di[1]];this.Di=[this.Di[0],((this.
Az.charCodeAt(0)||0)*FO)-leading];var Y=this.CH;var Ag=this.M;var width=Ag[2]-Ag[
0];var height=Ag[3]-Ag[1];var Ad=[0,0,width,height];var L=[].concat(Ad.slice(0,2
),B.aak(Ad.slice(0,2),this.Di));if(((Y&0x80)===0x80)){if(this.Ge())Y=(Y&~0x80)|0x4;
else Y=(Y&~0x80)|0x1;}if(((Y&0x40)===0x40)){var CF;CF=width;if(CF<0)CF=0;if(CF>(
L[2]-L[0]))L=B.aaO(L,CF);}if((!!(Y&0x110)&&!!(Y&0x28))&&((L[3]-L[1])>(Ad[3]-Ad[1
])))Y&=~0x110;if(!!(Y&0x110))Y&=~0x28;if((((Y&0x2)===0x2)&&!!(Y&0x5))&&((L[2]-L[
0])>(Ad[2]-Ad[0])))Y&=~0x2;if(((Y&0x2)===0x2))Y&=~0x5;if((L[2]-L[0])!==(Ad[2]-Ad[
0])){if(((Y&0x4)===0x4))L=B.aaP(L,Ad[2]-(L[2]-L[0]));else if(((Y&0x2)===0x2))L=B.
aaP(L,(Ad[0]+(((Ad[2]-Ad[0])/2)|0))-(((L[2]-L[0])/2)|0));}if((L[3]-L[1])!==(Ad[3
]-Ad[1])){if(((Y&0x20)===0x20))L=B.aaR(L,Ad[3]-(L[3]-L[1]));else if(((Y&0x100)===
0x100))L=B.aaR(L,((Ad[1]+(((Ad[3]-Ad[1])/2)|0))-(((L[3]-L[1])/2)|0))+(((this.AT.
Descent-this.AT.Ascent)/2)|0));else if(((Y&0x10)===0x10))L=B.aaR(L,(Ad[1]+(((Ad[
3]-Ad[1])/2)|0))-(((L[3]-L[1])/2)|0));}L=B.aam(L,Ag.slice(0,2));return L;},_Init:
function(aArg){B.Core.AU._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(
){this.B0();this.__proto__=B.Core.AU;B.Core.AU._Done.call(this);},_Mark:function(
E){var A;B.Core.AU._Mark.call(this,E);if((A=this.AT)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::Text"};D.J8={Id:0x1,Ic:0x2,Ie:0x4,Ih:0x8,Ig:0x10,If:0x20
,Kw:0x40,Kx:0x80,KB:0x100};D.KC={Id:0x1,Ic:0x2,Ie:0x4,Ih:0x8,Ig:0x10,If:0x20,JO:
0x40,JN:0x80,JT:0x100};D.Et={Kf:0,Ku:1,Ks:2,Kt:3};
D._Init=function(){D.Cm.__proto__=B.Core.AU;D.Ef.__proto__=B.Core.AU;D.C2.__proto__=
B.Core.AU;D.Text.__proto__=B.Core.AU;};D._ReInit=function(){};D.Bx=function(E){};
return D;})();

/* Embedded Wizard */