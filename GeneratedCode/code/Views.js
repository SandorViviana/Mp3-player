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
var Ap=[0,0];var AN=[0,0,0,0];var Cd="\uFEFF";
D.Cq={BR:0xFFFFFFFF,Ca:function(At,aClip,aOffset,AF,aBlend){var A;var AI;var AJ;var
AG;var AH;var Bn=this.BR;aBlend=aBlend&&((this.F&0x2)===0x2);AF=AF+1;AI=AJ=AG=AH=
Bn;if(AF<256){AI=(AI&0x00FFFFFF)|((((AF*((AI>>24)&0xFF))>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF
)|((((AF*((AJ>>24)&0xFF))>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((AF*((AG>>24)&0xFF
))>>8)&0xFF)<<24);AH=(AH&0x00FFFFFF)|((((AF*((AH>>24)&0xFF))>>8)&0xFF)<<24);}At.
Gi(aClip,B.aam(this.N,aOffset),AI,AJ,AH,AG,aBlend);},Co:function(C){var A;if(C===
this.BR)return;this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);},_Init:
function(aArg){B.Core.AU._Init.call(this,aArg);this.__proto__=D.Cq;},_className:
"Views::Rectangle"};D.Eo={timer:null,T:null,A9:-1,BR:0xFFFFFFFF,Ej:0x1F,CJ:0,DL:
0,Dp:B.vw,B1:false,Ca:function(At,aClip,aOffset,AF,aBlend){var A;var AY=this.CJ;
if(this.A9>=0)AY=this.A9;if(!this.T||(AY>=this.T.NoOfFrames))return;this.T.Update(
);var AI;var AJ;var AH;var AG;var Bn=this.BR;var BA=(((AF+1)*255)>>8)+1;var Be=this.
Ej;var X=B.aam(this.N,aOffset);var FW=B.aaj([X[2]-X[0],X[3]-X[1]],this.Dp);aBlend=
aBlend&&((this.F&0x2)===0x2);AI=AJ=AG=AH=Bn;if(BA<256){AI=(AI&0x00FFFFFF)|((((((
AI>>24)&0xFF)*BA)>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF)|((((((AJ>>24)&0xFF)*BA)>>8)&
0xFF)<<24);AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*BA)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF
)|((((((AG>>24)&0xFF)*BA)>>8)&0xFF)<<24);}if(((this.Dp[0]>0)&&(FW[0]>0))&&!((Be&
0x5)===0x5)){var Bx=((this.T.FrameSize[0]/3)|0)-FW[0];if(((Be&0x1)===0x1)){if(aClip[
2]>X[2])aClip=B.aaQ(aClip,X[2]);if(Bx>0)X=B.aaQ(X,X[2]+Bx);Be=Be|0x4;}else if(((
Be&0x4)===0x4)){if(aClip[0]<X[0])aClip=[].concat(X[0],aClip.slice(1,4));if(Bx>0)
X=[].concat(X[0]-Bx,X.slice(1,4));Be=Be|0x1;}else{if(aClip[0]<X[0])aClip=[].concat(
X[0],aClip.slice(1,4));if(aClip[2]>X[2])aClip=B.aaQ(aClip,X[2]);if(Bx>0){X=[].concat(
X[0]-((Bx/2)|0),X.slice(1,4));X=B.aaQ(X,(X[2]+Bx)-((Bx/2)|0));}Be=Be|0x5;}}if(((
this.Dp[1]>0)&&(FW[1]>0))&&!((Be&0xA)===0xA)){var Bx=((this.T.FrameSize[1]/3)|0)-
FW[1];if(((Be&0x2)===0x2)){if(aClip[3]>X[3])aClip=[].concat(aClip.slice(0,3),X[3
]);if(Bx>0)X=[].concat(X.slice(0,3),X[3]+Bx);Be=Be|0x8;}else if(((Be&0x8)===0x8)
){if(aClip[1]<X[1])aClip=B.aaS(aClip,X[1]);if(Bx>0)X=B.aaS(X,X[1]-Bx);Be=Be|0x2;
}else{if(aClip[1]<X[1])aClip=B.aaS(aClip,X[1]);if(aClip[3]>X[3])aClip=[].concat(
aClip.slice(0,3),X[3]);if(Bx>0){X=B.aaS(X,X[1]-((Bx/2)|0));X=[].concat(X.slice(0
,3),(X[3]+Bx)-((Bx/2)|0));}Be=Be|0xA;}}At.Iw(aClip,this.T,AY,X,Be,AI,AJ,AH,AG,aBlend
);},E9:function(Ax){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);},
C2:function(Ax){var A;var AY=this.A9;var B9=0;if(!!this.T)B9=this.T.NoOfFrames*this.
T.FrameDelay;if((!!this.timer&&(this.A9<0))&&(B9>0))this.DL=this.timer.AL-(this.
CJ*this.T.FrameDelay);if(!!this.timer&&(B9>0)){var DM=(this.timer.AL-this.DL)|0;
AY=(DM/this.T.FrameDelay)|0;if(DM>=B9){AY=AY%this.T.NoOfFrames;this.DL=this.timer.
AL-(DM%B9);}}if(((AY!==this.A9)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ai(this.
N);this.A9=AY;if(!B9&&!!this.timer){B.zl([this,this.C2],this.timer,0);this.timer=
null;}},Co:function(C){var A;if(C===this.BR)return;this.BR=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.N);},Cm:function(C){var A;if(this.B1===C)return;this.
B1=C;this.A9=-1;if(!C&&!!this.timer){B.zl([this,this.C2],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.abk.Ek);B.y_([this,this.C2],this.timer
,0);B.ow([this,this.C2],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.
N);},HC:function(C){var A;if(C===this.Ej)return;this.Ej=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ai(this.N);},Dq:function(C){var A;if(C<0)C=0;if((C===this.CJ)&&(
this.A9===-1))return;this.CJ=C;if(!this.timer)this.A9=-1;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ai(this.N);},Cn:function(C){var A;if(C===this.T)return;if(!!this.
T&&this.T.DR)B.zl([this,this.E9],this.T,0);this.T=C;this.A9=-1;if(!!C&&C.DR)B.y_([
this,this.E9],C,0);if(this.B1){this.Cm(false);this.Cm(true);}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.N);},Fy:function(C){if(C)this.A4(0x1,0x0);else this.
A4(0x0,0x1);},HI:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.z8(C,this.Dp))return;this.Dp=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.Ej&
0xF)===0xF))this.G.Ai(this.N);},_Init:function(aArg){B.Core.AU._Init.call(this,aArg
);this.__proto__=D.Eo;},_Mark:function(E){var A;B.Core.AU._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.C5={timer:null,T:null,DL:0,A9:0
,BR:0xFFFFFFFF,CI:0x12,CJ:0,EB:0,B1:false,Ca:function(At,aClip,aOffset,AF,aBlend
){var A;var AY=this.CJ;if(this.A9>=0)AY=this.A9;if(!this.T||(AY>=this.T.NoOfFrames
))return;this.T.Update();var O=this.Gk();var Ba=this.T.FrameSize;var orient=this.
EB;if((O[0]>=O[2])||(O[1]>=O[3]))return;var AI;var AJ;var AH;var AG;var Bn=this.
BR;var BA=(((AF+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);AI=AJ=AG=AH=Bn;
if(BA<256){AI=(AI&0x00FFFFFF)|((((((AI>>24)&0xFF)*BA)>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF
)|((((((AJ>>24)&0xFF)*BA)>>8)&0xFF)<<24);AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*
BA)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((((AG>>24)&0xFF)*BA)>>8)&0xFF)<<24);}if(
B.z8([O[2]-O[0],O[3]-O[1]],Ba)&&!orient)At.Iu(aClip,this.T,AY,B.aam(this.N,aOffset
),B.aaj(this.N.slice(0,2),O.slice(0,2)),AI,AJ,AH,AG,aBlend);else if(!orient)At.Jy(
aClip,this.T,AY,B.aam(O,aOffset),[].concat(Ap,Ba),AI,AJ,AH,AG,aBlend,true);else{
var left=O[0]+aOffset[0];var top=O[1]+aOffset[1];var right=O[2]+aOffset[0];var bottom=
O[3]+aOffset[1];if(orient===1)At.GW(aClip,this.T,AY,left,bottom,1,left,top,1,right
,top,1,right,bottom,1,[].concat(Ap,Ba),AG,AI,AJ,AH,aBlend,true);else if(orient===
2)At.GW(aClip,this.T,AY,right,bottom,1,left,bottom,1,left,top,1,right,top,1,[].concat(
Ap,Ba),AH,AG,AI,AJ,aBlend,true);else if(orient===3)At.GW(aClip,this.T,AY,right,top
,1,right,bottom,1,left,bottom,1,left,top,1,[].concat(Ap,Ba),AJ,AH,AG,AI,aBlend,true
);}},E9:function(Ax){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);}
,C2:function(Ax){var A;var AY=this.A9;var B9=0;if(!!this.T)B9=this.T.NoOfFrames*
this.T.FrameDelay;if((!!this.timer&&(this.A9<0))&&(B9>0))this.DL=this.timer.AL-(
this.CJ*this.T.FrameDelay);if(!!this.timer&&(B9>0)){var DM=(this.timer.AL-this.DL
)|0;AY=(DM/this.T.FrameDelay)|0;if(DM>=B9){AY=AY%this.T.NoOfFrames;this.DL=this.
timer.AL-(DM%B9);}}if(((AY!==this.A9)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ai(
this.N);this.A9=AY;if(!B9&&!!this.timer){B.zl([this,this.C2],this.timer,0);this.
timer=null;}},IX:function(C){var A;if(C===this.EB)return;this.EB=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ai(this.N);},Co:function(C){var A;if(C===this.BR)return;
this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);},Cm:function(C){var
A;if(this.B1===C)return;this.B1=C;this.A9=-1;if(!C&&!!this.timer){B.zl([this,this.
C2],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.abk.Ek);B.
y_([this,this.C2],this.timer,0);B.ow([this,this.C2],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ai(this.N);},Fw:function(C){var A;if(C===this.CI)return;this.
CI=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);},Dq:function(C){var A;
if(C<0)C=0;if((C===this.CJ)&&(this.A9===-1))return;this.CJ=C;if(!this.timer)this.
A9=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);},Cn:function(C){var A;
if(C===this.T)return;if(!!this.T&&this.T.DR)B.zl([this,this.E9],this.T,0);this.T=
C;this.A9=-1;if(!!C&&C.DR)B.y_([this,this.E9],C,0);if(this.B1){this.Cm(false);this.
Cm(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.N);},Gk:function(){var
A;if(!this.T)return AN;var orient=this.EB;var Y=this.CI;var Ba=this.T.FrameSize;
var Ag=this.N;var width=Ag[2]-Ag[0];var height=Ag[3]-Ag[1];if(!Ba[0]||!Ba[1])return AN;
if((orient===1)||(orient===3)){width=height;height=Ag[2]-Ag[0];}var Ac=[0,0,width
,height];var M=Ac;if(((Y&0x40)===0x40)){var Hp=((((Ac[2]-Ac[0])<<16)+((Ba[0]/2)|
0))/Ba[0])|0;var Fg=((((Ac[3]-Ac[1])<<16)+((Ba[1]/2)|0))/Ba[1])|0;var C1=Hp;if(Fg>
C1)C1=Fg;M=B.aaO(M,((Ba[0]*C1)+32768)>>16);M=B.aaL(M,((Ba[1]*C1)+32768)>>16);}else
if(((Y&0x80)===0x80)){var Hp=((((Ac[2]-Ac[0])<<16)+((Ba[0]/2)|0))/Ba[0])|0;var Fg=((((
Ac[3]-Ac[1])<<16)+((Ba[1]/2)|0))/Ba[1])|0;var C1=Hp;if(Fg<C1)C1=Fg;M=B.aaO(M,((Ba[
0]*C1)+32768)>>16);M=B.aaL(M,((Ba[1]*C1)+32768)>>16);}else if(!((Y&0x100)===0x100
))M=B.aaN(M,Ba);if((M[2]-M[0])!==(Ac[2]-Ac[0])){if(((Y&0x4)===0x4))M=B.aaP(M,Ac[
2]-(M[2]-M[0]));else if(((Y&0x2)===0x2))M=B.aaP(M,(Ac[0]+(((Ac[2]-Ac[0])/2)|0))-(((
M[2]-M[0])/2)|0));}if((M[3]-M[1])!==(Ac[3]-Ac[1])){if(((Y&0x20)===0x20))M=B.aaR(
M,Ac[3]-(M[3]-M[1]));else if(((Y&0x10)===0x10))M=B.aaR(M,(Ac[1]+(((Ac[3]-Ac[1])/
2)|0))-(((M[3]-M[1])/2)|0));}if(!orient)M=B.aam(M,Ag.slice(0,2));else if(orient===
1){var Dh=[Ag[0]+M[1],Ag[3]-M[2]];M=[].concat(Dh,B.aak(Dh,[M[3]-M[1],M[2]-M[0]])
);}else if(orient===2){var Dh=[Ag[2]-M[2],Ag[3]-M[3]];M=[].concat(Dh,B.aak(Dh,[M[
2]-M[0],M[3]-M[1]]));}else if(orient===3){var Dh=[Ag[2]-M[3],Ag[1]+M[0]];M=[].concat(
Dh,B.aak(Dh,[M[3]-M[1],M[2]-M[0]]));}return M;},_Init:function(aArg){B.Core.AU._Init.
call(this,aArg);this.__proto__=D.C5;},_Mark:function(E){var A;B.Core.AU._Mark.call(
this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.Text={AT:null,Az:B.jm,String:
B.jm,BT:null,Dm:B.vw,CI:0x12,BR:0xFFFFFFFF,D3:false,DP:false,Gb:false,BB:false,B2:
function(){if(!!this.BT){this.G_(this.BT);this.BT=null;}},Ca:function(At,aClip,aOffset
,AF,aBlend){var A;if((this.Az===B.jm)||!this.AT)return;var Y=this.CI;var font=this.
AT;var Ac=B.aam(this.N,aOffset);var AI;var AJ;var AH;var AG;var JU=this.BR;var BA=(((
AF+1)*255)>>8)+1;var Cw=this.Az.charCodeAt(0)||0;var O=B.aam(this.Gk(),aOffset);
var H9=[Ac[0]-O[0],(Ac[1]-O[1])-font.Ascent];if(Cw<1)return;AI=AJ=AG=AH=JU;if(BA<
256){AI=(AI&0x00FFFFFF)|((((((AI>>24)&0xFF)*BA)>>8)&0xFF)<<24);AJ=(AJ&0x00FFFFFF
)|((((((AJ>>24)&0xFF)*BA)>>8)&0xFF)<<24);AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*
BA)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((((AG>>24)&0xFF)*BA)>>8)&0xFF)<<24);}if(((
Y&0x80)===0x80)){if(this.Gq())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if((Cw===1)&&
!((Y&0x40)===0x40)){At.Hu(aClip,font,this.Az,2,(this.Az.charCodeAt(1)||0)-1,Ac,H9
,0,0,AI,AJ,AH,AG,true);return;}var leading=font.Leading;var Ho=(font.Ascent+font.
Descent)+leading;var JS=aClip[1]-O[1];var JT=aClip[3]-O[1];var G3=O[2]-O[0];var DN=
0;var I=1;var Bn=this.Az.charCodeAt(1)||0;while(((DN+Ho)<JS)&&(Bn>0)){I=I+Bn;DN=
DN+Ho;Bn=this.Az.charCodeAt(I)||0;}while((DN<JT)&&(Bn>0)){var DG=B.aaj(H9,[0,DN]
);var Ih=0;var FN=false;if(((((Y&0x40)===0x40)&&((this.Az.charCodeAt((I+Bn)-1)||
0)!==0x0A))&&((this.Az.charCodeAt(I+1)||0)!==0x0A))&&((this.Az.charCodeAt(I+Bn)||
0)!==0x00))FN=true;if(FN&&!!(Y&0x6)){var Ig=I+Bn;var HU=this.Az.indexOf(String.fromCharCode(
0x20),I+1);var HV=this.Az.indexOf(String.fromCharCode(0xA0),I+1);if(((HU<0)||(HU>=
Ig))&&((HV<0)||(HV>=Ig)))FN=false;}if(FN)Ih=G3;else if(((Y&0x4)===0x4))DG=[(DG[0
]-G3)+font.Ep(this.Az,I+1,Bn-1),DG[1]];else if(((Y&0x2)===0x2))DG=[(DG[0]-((G3/2
)|0))+((font.Ep(this.Az,I+1,Bn-1)/2)|0),DG[1]];At.Hu(aClip,font,this.Az,I+1,Bn-1
,Ac,DG,Ih,0,AI,AJ,AH,AG,true);I=I+Bn;DN=DN+Ho;Bn=this.Az.charCodeAt(I)||0;}},Ao:
function(C){var A;if(B.z9(C,this.N))return;var If;If=((A=this.N)[2]-A[0])!==(C[2
]-C[0]);if(((If&&this.D3)&&this.BB)&&!((this.F&0x2000)===0x2000)){this.Az=B.jm;this.
BB=false;B.ow([this,this.Di],this);}if(((this.DP&&this.BB)&&!B.z8([(A=this.N)[2]-
A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.Az=B.
jm;this.BB=false;B.ow([this,this.Di],this);}B.Core.AU.Ao.call(this,C);B.ow([this
,this.Hm],this);},G_:function(aBidi){if(!aBidi)return;B.qU(aBidi);},JV:function(
aSize){var bidi=null;bidi=B.vj(aSize);return bidi;},Hm:function(Ax){},Di:function(
Ax){B.ow([this,this.FR],this);},FR:function(Ax){var A;if(this.BB)return;var width=(
A=this.N)[2]-A[0];var height=(A=this.N)[3]-A[1];var CG=-1;var font=this.AT;if((!
!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.D3){CG=width;if(CG<0)CG=
1;}if(!!this.BT){this.G_(this.BT);this.BT=null;}this.BB=true;if((this.String!==B.
jm)&&!!font){var length=this.String.length;if(this.Gb)this.BT=this.JV(length);this.
Az=font.Ju(this.String,0,CG,length,this.BT);if(!!this.BT&&!this.IA()){this.G_(this.
BT);this.BT=null;}}else this.Az=B.jm;this.Dm=Ap;if((this.DP&&(this.Az!==B.jm))&&
!!font){var Y=this.CI;var leading=font.Leading;var AE=this.Az;var FV=this.Gq();if(((
Y&0x80)===0x80)){if(FV)Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}var FT=(font.Ascent+
font.Descent)+leading;var Cw=AE.charCodeAt(0)||0;var Dd=((height+leading)/FT)|0;
var G6=false;var FG=false;if(Dd<=0)Dd=1;if(Cw>Dd){var Ci=0;var Ff=0;var FU=Cw-1;
var AV;var Bb=AE.length;var tmp=B.jm;if(!!(Y&0x110)&&!!(Y&0x28))Y&=~0x110;if(!!(
Y&0x110))Y&=~0x28;if(((Y&0x20)===0x20))Ff=Cw-Dd;else if(((Y&0x10)===0x10)||((Y&0x100
)===0x100)){Ff=((Cw-Dd)/2)|0;FU=(Ff+Dd)-1;}else FU=Dd-1;G6=Ff>0;FG=FU<(Cw-1);for(
AV=1;Ci<Ff;Ci=Ci+1)AV=AV+(AE.charCodeAt(AV)||0);if(FG)for(Bb=AV;Ci<FU;Ci=Ci+1)Bb=
Bb+(AE.charCodeAt(Bb)||0);if(G6){var Bp=AE.charCodeAt(AV)||0;tmp=(Cd+B.aaY(AE,AV
,Bp))+Cd;tmp=B.aaT(tmp,0,(Bp+2)&0xFFFF);AV=AV+Bp;if((tmp.charCodeAt(Bp)||0)===0x0A
){tmp=B.aaT(tmp,Bp,0xFEFF);tmp=B.aaT(tmp,Bp+1,0x0A);}if((tmp.charCodeAt(2)||0)===
0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp,1,0xFEFF
);}tmp=tmp+B.aaY(AE,AV,Bb-AV);if(FG&&(Bb>=AV)){var Bp=AE.charCodeAt(Bb)||0;var BD=(
Cd+B.aaY(AE,Bb,Bp))+Cd;BD=B.aaT(BD,0,(Bp+2)&0xFFFF);BD=B.aaT(BD,1,0xFEFF);if((BD.
charCodeAt(Bp)||0)===0x0A){BD=B.aaT(BD,Bp,0xFEFF);BD=B.aaT(BD,Bp+1,0x0A);}if((BD.
charCodeAt(2)||0)===0x0A){BD=B.aaT(BD,2,0xFEFF);BD=B.aaT(BD,1,0x0A);}else BD=B.aaT(
BD,1,0xFEFF);tmp=tmp+BD;}AE=String.fromCharCode(Dd&0xFFFF)+tmp;}var Ci=0;var FM=
1;var Hf=width;Cw=AE.charCodeAt(0)||0;for(;Ci<Cw;Ci=Ci+1){var Dk=G6&&!Ci;var Dl=
FG&&(Ci===(Cw-1));var B5=false;var B6=false;var Eh=FV;if((FV&&Dk)&&!Dl){Dk=false;
Dl=true;}else if((FV&&Dl)&&!Dk){Dl=false;Dk=true;}var Fh=FM+1;var Bp=AE.charCodeAt(
FM)||0;var AV=Fh;var Bb=(Fh+Bp)-2;var Hd=-1;var He=-1;if(!this.D3&&(font.Ep(AE,Fh
,Bp-1)>Hf)){var DA=Y;if(((DA&0x2)===0x2)&&!!(DA&0x5))DA&=~0x2;if(((DA&0x2)===0x2
))DA&=~0x5;if(((DA&0x4)===0x4))B5=true;else if(((DA&0x2)===0x2)){B5=true;B6=true;
}else B6=true;}if((AE.charCodeAt(AV)||0)===0x0A)AV=AV+1;if((AE.charCodeAt(Bb)||0
)===0x0A)Bb=Bb-1;while(B5&&((AE.charCodeAt(AV)||0)===0xFEFF))AV=AV+1;while(B6&&((
AE.charCodeAt(Bb)||0)===0xFEFF))Bb=Bb-1;B5=B5&&!Dl;B6=B6&&!Dk;while((((B5||B6)||
Dk)||Dl)&&(AV<Bb)){if((B5&&(Eh||!B6))||Dk){if(Hd>0)AE=B.aaT(AE,Hd,0xFEFF);AE=B.aaT(
AE,AV,0x2026);Hd=AV;AV=AV+1;Eh=!Eh;Dk=false;if(font.Ep(AE,Fh,Bp-1)<=Hf){B5=false;
B6=false;}else B5=B5||!B6;}if((B6&&(!Eh||!B5))||Dl){if(He>0)AE=B.aaT(AE,He,0xFEFF
);AE=B.aaT(AE,Bb,0x2026);He=Bb;Bb=Bb-1;Eh=!Eh;Dl=false;if(font.Ep(AE,Fh,Bp-1)<=Hf
){B5=false;B6=false;}else B6=B6||!B5;}}FM=FM+Bp;}this.Dm=[font.Hw(AE),((AE.charCodeAt(
0)||0)*FT)-leading];this.Az=AE;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.
N);B.ow([this,this.Hm],this);},IH:function(C){if(C===this.Gb)return;this.Gb=C;this.
Az=B.jm;this.BB=false;B.ow([this,this.Di],this);},IG:function(C){if(C===this.DP)
return;this.DP=C;if(this.D3||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
Az=B.jm;this.BB=false;B.ow([this,this.Di],this);},Js:function(C){if(C===this.D3)
return;this.D3=C;if(this.BB){this.Az=B.jm;this.BB=false;B.ow([this,this.Di],this
);}if(C||this.DP)this.F=this.F&~0x100;else this.F=this.F|0x100;},Fw:function(C){
var A;if(C===this.CI)return;this.CI=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(
this.N);if(this.DP){this.Az=B.jm;this.BB=false;B.ow([this,this.Di],this);}if(this.
BB)B.ow([this,this.Hm],this);},Dr:function(C){if(C===this.String)return;this.String=
C;this.Az=B.jm;this.BB=false;B.ow([this,this.Di],this);},Ex:function(C){if(C===this.
AT)return;this.AT=C;this.Az=B.jm;this.BB=false;B.ow([this,this.Di],this);},Co:function(
C){var A;if(C===this.BR)return;this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ai(this.N);},Gq:function(){if(!this.BB)this.FR(this);if(!this.BT)return false;
var result=false;var bidi=this.BT;result=B.vi(bidi);return result;},IA:function(
){if(!this.BB)this.FR(this);if(!this.BT)return false;var result=false;var bidi=this.
BT;result=B.zc(bidi);return result;},Gk:function(){var A;if((this.String===B.jm)||
!this.AT)return AN;if(!this.BB)this.FR(this);if(this.Az===B.jm)return AN;var leading=
this.AT.Leading;var FT=(this.AT.Ascent+this.AT.Descent)+this.AT.Leading;if(B.z8(
this.Dm,Ap))this.Dm=[this.AT.Hw(this.Az),this.Dm[1]];this.Dm=[this.Dm[0],((this.
Az.charCodeAt(0)||0)*FT)-leading];var Y=this.CI;var Ag=this.N;var width=Ag[2]-Ag[
0];var height=Ag[3]-Ag[1];var Ac=[0,0,width,height];var M=[].concat(Ac.slice(0,2
),B.aak(Ac.slice(0,2),this.Dm));if(((Y&0x80)===0x80)){if(this.Gq())Y=(Y&~0x80)|0x4;
else Y=(Y&~0x80)|0x1;}if(((Y&0x40)===0x40)){var CG;CG=width;if(CG<0)CG=0;if(CG>(
M[2]-M[0]))M=B.aaO(M,CG);}if((!!(Y&0x110)&&!!(Y&0x28))&&((M[3]-M[1])>(Ac[3]-Ac[1
])))Y&=~0x110;if(!!(Y&0x110))Y&=~0x28;if((((Y&0x2)===0x2)&&!!(Y&0x5))&&((M[2]-M[
0])>(Ac[2]-Ac[0])))Y&=~0x2;if(((Y&0x2)===0x2))Y&=~0x5;if((M[2]-M[0])!==(Ac[2]-Ac[
0])){if(((Y&0x4)===0x4))M=B.aaP(M,Ac[2]-(M[2]-M[0]));else if(((Y&0x2)===0x2))M=B.
aaP(M,(Ac[0]+(((Ac[2]-Ac[0])/2)|0))-(((M[2]-M[0])/2)|0));}if((M[3]-M[1])!==(Ac[3
]-Ac[1])){if(((Y&0x20)===0x20))M=B.aaR(M,Ac[3]-(M[3]-M[1]));else if(((Y&0x100)===
0x100))M=B.aaR(M,((Ac[1]+(((Ac[3]-Ac[1])/2)|0))-(((M[3]-M[1])/2)|0))+(((this.AT.
Descent-this.AT.Ascent)/2)|0));else if(((Y&0x10)===0x10))M=B.aaR(M,(Ac[1]+(((Ac[
3]-Ac[1])/2)|0))-(((M[3]-M[1])/2)|0));}M=B.aam(M,Ag.slice(0,2));return M;},_Init:
function(aArg){B.Core.AU._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(
){this.B2();this.__proto__=B.Core.AU;B.Core.AU._Done.call(this);},_Mark:function(
E){var A;B.Core.AU._Mark.call(this,E);if((A=this.AT)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::Text"};D.Ky={Ip:0x1,Io:0x2,Iq:0x4,It:0x8,Is:0x10,Ir:0x20
,KY:0x40,KZ:0x80,K3:0x100};D.K4={Ip:0x1,Io:0x2,Iq:0x4,It:0x8,Is:0x10,Ir:0x20,Ke:
0x40,Kd:0x80,Kj:0x100};D.EB={KH:0,KW:1,KU:2,KV:3};
D._Init=function(){D.Cq.__proto__=B.Core.AU;D.Eo.__proto__=B.Core.AU;D.C5.__proto__=
B.Core.AU;D.Text.__proto__=B.Core.AU;};D._ReInit=function(){};D.Bw=function(E){};
return D;})();

/* Embedded Wizard */