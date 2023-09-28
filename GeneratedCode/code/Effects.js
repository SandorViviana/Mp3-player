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
);if(EmWiApp.abj)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abj=(function(){var B=EmWiApp;var C={};
var Aw=[100,100];var Bk="Trying to remove a fader from a task, which is actually running";
var Dm="The fader doesn\'t belong to this task";var Ec="Trying to add a fader to a task, which is actually running";
var EZ="The fader belongs already to a task";
C.Fk={B_:null,timer:null,G$:null,IV:null,Hy:null,Ie:0,Fj:0,Do:0,Cz:0,Ij:0.001,DM:
0,AT:0,AP:0,J9:0.5,Mi:3,HF:3,Hh:0.5,Du:3,K0:0,KZ:0,Dv:0,EK:1000,EP:0,EY:0,AW:false
,KN:false,GB:false,J1:false,B9:function(Ag){var A;if(!this.timer)return;if(!this.
Fj){if(this.KN)this.Fj=-1;else this.Fj=1;this.Ie=this.Fj;this.AP=this.timer.Ar;this.
AT=0;this.DM=-1;}var CN;if((this.Fj>0)&&(this.Ie>0))CN=this.Q2();else if((this.Fj<
0)&&(this.Ie<0))CN=this.Q5();else if(this.Fj>0)CN=this.Q3();else CN=this.Q4();if(
CN){this.AS(false);(A=this.G$)?A[1].call(A[0],this):null;(A=this.IV)?A[1].call(A[
0],this):null;}},JT:function(H){var A;if(!this.B_&&(((this.EY===19)||(this.EY===
20))||(this.EY===21))){var Ji=this.Mi+1;var QE=Math.sqrt(this.J9);var GA=0.5;var
G;this.B_=B._NewObject(C.I3,0);this.B_.CC.Set(0,1);this.B_.FA.Set(0,1);for(G=1;G<
Ji;G=G+1){this.B_.CC.Set(G,this.B_.CC.Get(G-1)*QE);this.B_.FA.Set(G,this.B_.FA.Get(
G-1)*this.J9);GA=GA+this.B_.CC.Get(G);}var QH=1/GA;this.B_.CC.Set(0,0.5);GA=0;for(
G=0;G<Ji;G=G+1){this.B_.CC.Set(G,this.B_.CC.Get(G)*QH);GA=GA+this.B_.CC.Get(G);}
this.B_.CC.Set(Ji,this.B_.CC.Get(Ji)+(1-GA));}switch(this.EY){case 1:H=Math.pow(
H,this.Du);break;case 2:{H=1-H;H=1-Math.pow(H,this.Du);}break;case 3:{H=H*2;if(H<
1)H=Math.pow(H,this.Du)/2;else{H=2-H;H=(2-Math.pow(H,this.Du))*0.5;}}break;case 4:
H=(Math.pow(2.718,this.Du*H)-1)/(Math.pow(2.718,this.Du)-1);break;case 5:{H=1-H;
H=1-((Math.pow(2.718,this.Du*H)-1)/(Math.pow(2.718,this.Du)-1));}break;case 6:{H=
H*2;if(H<1)H=((Math.pow(2.718,this.Du*H)-1)/(Math.pow(2.718,this.Du)-1))/2;else{
H=2-H;H=(2-((Math.pow(2.718,this.Du*H)-1)/(Math.pow(2.718,this.Du)-1)))*0.5;}}break;
case 7:H=1-Math.cos((H*90)*B.kw);break;case 8:H=Math.sin((H*90)*B.kw);break;case
9:{H=H*2;if(H<1){H=1-Math.cos((H*90)*B.kw);H=H*0.5;}else{H=2-H;H=1-Math.cos((H*90
)*B.kw);H=(2-H)*0.5;}}break;case 10:H=1-Math.sqrt(1-(H*H));break;case 11:{H=1-H;
H=Math.sqrt(1-(H*H));}break;case 12:{H=H*2;if(H<1){H=1-Math.sqrt(1-(H*H));H=H*0.5;
}else{H=2-H;H=1-Math.sqrt(1-(H*H));H=(2-H)*0.5;}}break;case 13:H=((H*H)*H)-((H*this.
Hh)*Math.sin((H*180)*B.kw));break;case 14:{H=1-H;H=((H*H)*H)-((H*this.Hh)*Math.sin((
H*180)*B.kw));H=1-H;}break;case 15:{H=H*2;if(H<1){H=((H*H)*H)-((H*this.Hh)*Math.
sin((H*180)*B.kw));H=H*0.5;}else{H=2-H;H=((H*H)*H)-((H*this.Hh)*Math.sin((H*180)
*B.kw));H=(2-H)*0.5;}}break;case 16:H=((H*H)*H)*Math.sin(((H*90)*(1+(4*this.HF))
)*B.kw);break;case 17:{H=1-H;H=1-(((H*H)*H)*Math.sin(((H*90)*(1+(4*this.HF)))*B.
kw));}break;case 18:{H=H*2;if(H<1){H=((H*H)*H)*Math.sin(((H*90)*(1+(4*this.HF)))
*B.kw);H=H*0.5;}else{H=2-H;H=((H*H)*H)*Math.sin(((H*90)*(1+(4*this.HF)))*B.kw);H=(
2-H)*0.5;}}break;case 19:{var Eh=this.B_;var G=0;var Eq=0;var CS=Eh.CC.Get(0);var
B8=1-H;while(B8>CS){G=G+1;Eq=CS;CS=CS+Eh.CC.Get(G);}H=(B8-Eq)/(CS-Eq);if(!G)H=1-(
H*H);else{H=(2*H)-1;H=Eh.FA.Get(G)*(1-(H*H));}}break;case 20:{var Eh=this.B_;var
G=0;var Eq=0;var CS=Eh.CC.Get(0);while(H>CS){G=G+1;Eq=CS;CS=CS+Eh.CC.Get(G);}H=(
H-Eq)/(CS-Eq);if(!G)H=H*H;else{H=(2*H)-1;H=1-(Eh.FA.Get(G)*(1-(H*H)));}}break;case
21:{var Eh=this.B_;var G=0;var Eq=0;var CS=Eh.CC.Get(0);var CA=H*2;var B8=CA-1;if(
CA<1)B8=-B8;while(B8>CS){G=G+1;Eq=CS;CS=CS+Eh.CC.Get(G);}B8=(B8-Eq)/(CS-Eq);if(!
G)B8=B8*B8;else{B8=(2*B8)-1;B8=1-(Eh.FA.Get(G)*(1-(B8*B8)));}if(CA<1)H=0.5*(1-B8
);else H=0.5*(1+B8);}break;default:if(this.GB){var CA=H;var Io=1-CA;H=((Io*CA)*(
this.Cz+1))+(CA*CA);}else if(this.J1){var CA=H;var Io=1-CA;var Nm=CA*CA;var QM=Io
*Io;H=(((QM*CA)*(this.Cz+1))+((Io*Nm)*(this.Do+2)))+(Nm*CA);}}this.IF(H);(A=this.
Hy)?A[1].call(A[0],this):null;},Q5:function(){var Af=(this.timer.Ar-this.AP)|0;if(
Af<0)Af=-Af;var Di=this.EP;var DP=this.EP+this.EK;var Bw=this.EK;var CN=false;var
Be=this.DM;if(!this.AT&&(Af>=DP)){this.AT=1;Af=Af-DP;this.AP=this.AP+DP;}if((this.
AT>0)&&(Af>=Bw)){var BH=(Af/Bw)|0;this.AT=this.AT+BH;Af=Af-(BH*Bw);this.AP=this.
AP+(BH*Bw);}if((this.AT>2)&&!this.Dv)this.AT=1;if(this.AT>0)Di=0;if((this.AT>=this.
Dv)&&(this.Dv>0)){CN=true;Be=0;}else if(Af>=Di)Be=1-((Af-Di)*this.Ij);else if(Be>=
0)Be=0;if(Be!==this.DM){this.DM=Be;this.JT(Be);}return CN;},Q4:function(){var Af=(
this.AP-this.timer.Ar)|0;var Di=this.EP;var DP=this.EP+this.EK;var Bw=this.EK;var
CN=false;var Be=this.DM;if((this.AT>1)&&(Af<0)){var BH=(((-Af+Bw)-1)/Bw)|0;if((this.
AT-BH)<=0)BH=this.AT-1;this.AT=this.AT-BH;Af=Af+(BH*Bw);this.AP=this.AP+(BH*Bw);
}if(((this.AT===1)&&(Af<0))&&(this.Dv>0)){this.AT=0;Af=Af+DP;this.AP=this.AP+DP;
}if(((this.AT===1)&&(Af<0))&&!this.Dv){var BH=(((-Af+Bw)-1)/Bw)|0;Af=Af+(BH*Bw);
this.AP=this.AP+(BH*Bw);}if(this.AT>0)Di=0;if(Af<0){CN=true;Be=1;}else if(Af>=Di
)Be=1-((Af-Di)*this.Ij);else if(Be>=0)Be=1;if(Be!==this.DM){this.DM=Be;this.JT(Be
);}return CN;},Q3:function(){var Af=(this.AP-this.timer.Ar)|0;var Di=this.EP;var
DP=this.EP+this.EK;var Bw=this.EK;var CN=false;var Be=this.DM;if((this.AT>1)&&(Af<
0)){var BH=(((-Af+Bw)-1)/Bw)|0;if((this.AT-BH)<=0)BH=this.AT-1;this.AT=this.AT-BH;
Af=Af+(BH*Bw);this.AP=this.AP+(BH*Bw);}if(((this.AT===1)&&(Af<0))&&(this.Dv>0)){
this.AT=0;Af=Af+DP;this.AP=this.AP+DP;}if(((this.AT===1)&&(Af<0))&&!this.Dv){var
BH=(((-Af+Bw)-1)/Bw)|0;Af=Af+(BH*Bw);this.AP=this.AP+(BH*Bw);}if(this.AT>0)Di=0;
if(Af<0){CN=true;Be=0;}else if(Af>=Di)Be=(Af-Di)*this.Ij;else if(Be>=0)Be=0;if(Be
!==this.DM){this.DM=Be;this.JT(Be);}return CN;},Q2:function(){var Af=(this.timer.
Ar-this.AP)|0;if(Af<0)Af=-Af;var Di=this.EP;var DP=this.EP+this.EK;var Bw=this.EK;
var CN=false;var Be=this.DM;if(!this.AT&&(Af>=DP)){this.AT=1;Af=Af-DP;this.AP=this.
AP+DP;}if((this.AT>0)&&(Af>=Bw)){var BH=(Af/Bw)|0;this.AT=this.AT+BH;Af=Af-(BH*Bw
);this.AP=this.AP+(BH*Bw);}if((this.AT>2)&&!this.Dv)this.AT=1;if(this.AT>0)Di=0;
if((this.AT>=this.Dv)&&(this.Dv>0)){CN=true;Be=1;}else if(Af>=Di)Be=(Af-Di)*this.
Ij;else if(Be>=0)Be=1;if(Be!==this.DM){this.DM=Be;this.JT(Be);}return CN;},KD:function(
value){if(this.KN===value)return;this.KN=value;if(!this.AW||!this.Fj)return;if(value
)this.Ie=-1;else this.Ie=1;this.AP=(this.timer.Hr()*2)-this.AP;},MH:function(value
){if(value<0)value=0;if(value>1)value=1;this.J9=value;},ME:function(value){if(value<
1)value=1;if(value>10)value=10;this.Mi=value;this.B_=null;},MO:function(value){if(
value<1)value=1;if(value>10)value=10;this.HF=value;},MD:function(value){if(value<
0)value=0;if(value>10)value=10;this.Hh=value;},MI:function(value){if(value<1)value=
1;if(value>100)value=100;this.Du=value;},MT:function(value){if(this.K0===value)return;
this.K0=value;if(this.EY===26){this.Do=value;this.GB=(this.Cz===this.Do)&&!!this.
Cz;this.J1=!this.GB&&(this.Cz!==this.Do);}},MS:function(value){if(this.KZ===value
)return;this.KZ=value;if(this.EY===26){this.Cz=value;this.GB=(this.Cz===this.Do)&&
!!this.Cz;this.J1=!this.GB&&(this.Cz!==this.Do);}},MR:function(value){if(this.EY===
value)return;this.EY=value;this.B_=null;switch(value){case 24:{this.Cz=-1.1;this.
Do=1.1;}break;case 22:{this.Cz=-1;this.Do=-2;}break;case 23:{this.Cz=2;this.Do=1;
}break;case 25:{this.Cz=1.1;this.Do=-1.1;}break;case 0:{this.Cz=0;this.Do=0;}break;
default:{this.Cz=this.KZ;this.Do=this.K0;}}this.GB=(this.Cz===this.Do)&&!!this.Cz;
this.J1=!this.GB&&(this.Cz!==this.Do);},KC:function(value){if(value<0)value=0;this.
Dv=value;},HB:function(value){if(value<15)value=15;this.EK=value;this.Ij=1/value;
},MK:function(value){if(value<0)value=0;this.EP=value;},AS:function(value){if(this.
AW===value)return;this.AW=value;if(!value&&!!this.timer){B.zl([this,this.B9],this.
timer,0);this.timer=null;}if(value){this.timer=B._GetAutoObject(C.Fl);B.y_([this
,this.B9],this.timer,0);this.Fj=0;B.ow([this,this.B9],this);}},IF:function(Gj){}
,MY:function(Ag){this.AS(false);},P5:function(Ag){if(this.AW)this.AS(false);this.
AS(true);},_Init:function(aArg){this.__proto__=C.Fk;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
B_)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.timer)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G$)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
IV)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hy)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null
,_cycle:0,_observers:null,_className:"Effects::Effect"};C.Kp={Fs:null,Fy:0,BA:255
,BR:0,IF:function(Gj){var Cw;this.Fy=this.BR+(Math.round((this.BA-this.BR)*Gj)|0
);if(!!this.Fs)(Cw=this.Fs,Cw[2].call(Cw[0],this.Fy));},_Init:function(aArg){C.Fk.
_Init.call(this,aArg);this.__proto__=C.Kp;},_Mark:function(D){var A;C.Fk._Mark.call(
this,D);if((A=this.Fs)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"
};C.KI={Fy:B.vw,BA:Aw,BR:B.vw,IF:function(Gj){var GC=this.BR[0];var D4=this.BR[1
];GC=GC+(Math.round((this.BA[0]-GC)*Gj)|0);D4=D4+(Math.round((this.BA[1]-D4)*Gj)|
0);this.Fy=[GC,D4];},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=
C.KI;},_className:"Effects::PointEffect"};C.Kh={Fy:0,BA:1,IF:function(Gj){this.Fy=
this.BA*Gj;},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.Kh;
},_className:"Effects::FloatEffect"};C.EL={Ds:null,W:null,O:null,F:null,I:null,JF:
null,L4:null,Hz:null,BB:true,AW:true,H1:true,ID:false,IH:true,GS:true,Ga:true,D7:
function(){if(!!this.Ds)this.Ds.D7();},Ks:function(){return true;},Kz:function(){
},GO:function(){this.D7();},_Init:function(aArg){this.__proto__=C.EL;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Ds)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.W)&&(A._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
F)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JF)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.L4)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hz)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Effects::Fader"};C.GV={MV:B.vw,FC:false,Ks:function(
){return this.FC;},Kz:function(){if(!this.BB&&!!this.I.F)this.I.Et(false);if((!this.
BB&&this.Ga)&&!!this.I.F)this.I.F.EU(this.I);if(!this.AW)this.I.AS(false);},GO:function(
){if(this.AW)this.I.AS(true);if((this.BB||this.ID)&&!this.I.F){this.I.Et(false);
this.F.AV(this.I,0);}if(this.BB&&this.GS)this.I.F.EW(this.I);if(this.BB&&this.IH
)this.I.F.CH(this.I);if(this.BB&&!this.H1)this.I.Aj(B.aaM(this.I.K,this.MV));if(
this.BB){this.I.F_(255);this.I.Et(true);}if(!this.BB&&(this.F.B$===this.I))this.
F.CH(null);this.FC=true;this.D7();},_Init:function(aArg){C.EL._Init.call(this,aArg
);this.__proto__=C.GV;},_className:"Effects::VisibilityFader"};C.GQ={A1:null,AD:
null,FC:false,Rf:false,Ks:function(){return this.FC;},Kz:function(){if(this.BB){
this.I.F_(this.A1.BA);this.I.Aj(B.aaM(this.I.K,this.AD.BA));}if(!this.BB&&!this.
I.DV)this.I.Et(false);if((!this.BB&&this.Ga)&&!!this.I.F)this.I.F.EU(this.I);if(
!this.AW)this.I.AS(false);},GO:function(){var A;if(this.H1){if(this.I.GI()&&!!this.
I.F)this.A1.BR=this.I.DV;else this.A1.BR=0;this.AD.BR=this.I.K.slice(0,2);}var QI=((
!this.I.F||!this.I.DV)||!this.I.GI())||(((A=B.kz(this.I.K,[0,0,(A=this.F.K)[2]-A[
0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var QJ=((!this.BB&&((!this.I.F||!this.I.
GI())||this.Ga))||!this.A1.BA)||(((A=B.kz(B.aam([0,0,(A=this.I.K)[2]-A[0],A[3]-A[
1]],this.AD.BA),[0,0,(A=this.F.K)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
if(QI&&QJ){this.A1.BR=0;this.A1.BA=0;this.AD.BR=this.AD.BA;}this.Rf=this.I.OK();
if(this.AW)this.I.AS(true);if((this.BB||this.ID)&&!this.I.F){this.I.Et(false);this.
F.AV(this.I,0);}if(this.BB&&this.GS)this.I.F.EW(this.I);if(this.BB&&this.IH)this.
I.F.CH(this.I);if(!this.BB&&(this.F.B$===this.I))this.F.CH(null);if(this.BB&&!this.
I.GI()){this.I.Aj(B.aaM(this.I.K,this.AD.BR));this.I.F_(this.A1.BR);this.I.Et(true
);}if(!this.BB&&((!this.I.F||!this.I.GI())||!this.I.DV)){this.FC=true;this.D7();
return;}if(!this.BB&&B.z8(this.AD.BR,this.AD.BA))this.I.Aj(B.aaM(this.I.K,this.AD.
BR));if(!this.BB&&(this.A1.BR===this.A1.BA))this.I.F_(this.A1.BR);if((this.I.DV===
this.A1.BA)&&B.z8(this.I.K.slice(0,2),this.AD.BA)){this.FC=true;this.D7();return;
}if((this.A1.BR===this.A1.BA)&&B.z8(this.AD.BR,this.AD.BA)){this.FC=true;this.D7(
);return;}if(!this.A1.Dv)this.A1.KC(1);if(!this.AD.Dv)this.AD.KC(1);this.AD.KD(false
);this.AD.IV=[this,this.NL];this.AD.Hy=[this,this.QO];this.A1.Fs=[A=this.I,A.OL,
A.Qm];this.A1.KD(false);this.A1.IV=[this,this.NL];this.A1.Hy=null;this.AD.AS(!B.
z8(this.AD.BR,this.AD.BA));this.A1.AS(this.A1.BR!==this.A1.BA);},NL:function(Ag){
this.FC=!this.A1.AW&&!this.AD.AW;this.D7();},QO:function(Ag){this.I.Aj(B.aaM(this.
I.K,this.AD.Fy));},_Init:function(aArg){C.EL._Init.call(this,aArg);C.Kp._Init.call(
this.A1={Ac:this},0);C.KI._Init.call(this.AD={Ac:this},0);this.__proto__=C.GQ;},
_Done:function(){this.__proto__=C.EL;this.A1._Done();this.AD._Done();C.EL._Done.
call(this);},_ReInit:function(){C.EL._ReInit.call(this);this.A1._ReInit();this.AD.
_ReInit();},_Mark:function(D){var A;C.EL._Mark.call(this,D);if((A=this.A1)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.AD)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Effects::PositionFader"};C.Fw={EJ:function(){return null;},EI:function(){return null;
},GE:function(){return this.EJ();},GD:function(){return this.EI();},_Init:function(
aArg){this.__proto__=C.Fw;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle!=D))A._Mark(
A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.KO={EJ:function(){var L=B._NewObject(C.GV,0);L.BB=true;L.AW=true;L.IH=false;L.
GS=true;L.H1=false;L.Hz=[this,this.L5];return L;},EI:function(){var L=B._NewObject(
C.GV,0);L.BB=false;L.AW=false;L.Ga=true;return L;},GE:function(){var L=C.Fw.GE.call(
this);L.GS=false;L.AW=true;return L;},GD:function(){var L=B._NewObject(C.GV,0);L.
BB=false;L.AW=true;L.ID=true;L.Ga=false;return L;},L5:function(Ag){var A;var L=(
C.GV.isPrototypeOf(Ag)?Ag:null);var Al=[0,0,(A=L.F.K)[2]-A[0],A[3]-A[1]];var AU=[(
A=L.I.K)[2]-A[0],A[3]-A[1]];var U=Al.slice(0,2);U=[(Al[0]+(((Al[2]-Al[0])/2)|0))-((
AU[0]/2)|0),U[1]];U=[U[0],(Al[1]+(((Al[3]-Al[1])/2)|0))-((AU[1]/2)|0)];L.MV=U;},
_Init:function(aArg){C.Fw._Init.call(this,aArg);this.__proto__=C.KO;},_className:
"Effects::ShowHideTransition"};C.I0={Es:0,EJ:function(){var L=B._NewObject(C.GQ,
0);L.BB=true;L.AW=true;L.IH=false;L.GS=true;L.H1=true;L.Hz=[this,this.L5];L.A1.HB(
500);L.A1.MK(0);L.A1.BR=0;L.A1.BA=255;L.AD.HB(500);L.AD.MR(23);L.AD.MS(0);L.AD.MT(
0);L.AD.MI(3);L.AD.MD(0.5);L.AD.MO(3);L.AD.ME(3);L.AD.MH(0.5);return L;},EI:function(
){var L=B._NewObject(C.GQ,0);L.BB=false;L.AW=false;L.Ga=true;L.H1=true;L.Hz=[this
,this.QU];L.A1.BR=255;L.A1.BA=0;L.A1.HB(500);L.A1.MK(0);L.AD.HB(500);L.AD.MR(23);
L.AD.MS(0);L.AD.MT(0);L.AD.MI(3);L.AD.MD(0.5);L.AD.MO(3);L.AD.ME(3);L.AD.MH(0.5);
return L;},GE:function(){var L=C.Fw.GE.call(this);L.GS=false;L.AW=true;return L;
},GD:function(){var L=C.Fw.GD.call(this);L.ID=true;L.Ga=false;L.AW=true;return L;
},L5:function(Ag){var A;var L=(C.GQ.isPrototypeOf(Ag)?Ag:null);var Al=[0,0,(A=L.
F.K)[2]-A[0],A[3]-A[1]];var AU=[(A=L.I.K)[2]-A[0],A[3]-A[1]];var U=Al.slice(0,2);
U=[(Al[0]+(((Al[2]-Al[0])/2)|0))-((AU[0]/2)|0),U[1]];U=[U[0],(Al[1]+(((Al[3]-Al[
1])/2)|0))-((AU[1]/2)|0)];L.AD.BA=U;if(((!L.I.F||!L.I.GI())||!L.I.DV)||(((A=B.kz(
L.I.K,[0,0,(A=L.F.K)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]))){var DQ=[(A=L.
F.K)[2]-A[0],A[3]-A[1]];switch(this.Es){case 5:U=[U[0],-AU[1]];break;case 3:{U=[
U[0],-AU[1]];U=[DQ[0],U[1]];}break;case 8:U=[-AU[0],-AU[1]];break;case 2:U=[DQ[0
],U[1]];break;case 7:U=[-AU[0],U[1]];break;case 4:U=[U[0],DQ[1]];break;case 1:{U=[
U[0],DQ[1]];U=[DQ[0],U[1]];}break;case 6:{U=[U[0],DQ[1]];U=[-AU[0],U[1]];}break;
default:;}L.I.Aj(B.aaM(L.I.K,U));}},QU:function(Ag){var A;var L=(C.GQ.isPrototypeOf(
Ag)?Ag:null);var U=L.I.K.slice(0,2);var AU=[(A=L.I.K)[2]-A[0],A[3]-A[1]];var DQ=[(
A=L.F.K)[2]-A[0],A[3]-A[1]];switch(this.Es){case 5:U=[U[0],DQ[1]];break;case 3:{
U=[U[0],DQ[1]];U=[-AU[0],U[1]];}break;case 8:{U=[U[0],DQ[1]];U=[DQ[0],U[1]];}break;
case 2:U=[-AU[0],U[1]];break;case 7:U=[DQ[0],U[1]];break;case 4:U=[U[0],-AU[1]];
break;case 1:U=[-AU[0],-AU[1]];break;case 6:{U=[U[0],-AU[1]];U=[DQ[0],U[1]];}break;
default:;}L.AD.BA=U;},_Init:function(aArg){C.Fw._Init.call(this,aArg);this.__proto__=
C.I0;},_className:"Effects::SlideTransition"};C.EY={R3:0,Sb:1,Sd:2,Sc:3,RN:4,RP:
5,RO:6,Ss:7,Su:8,St:9,RB:10,RD:11,RC:12,Rp:13,Rr:14,Rq:15,RI:16,RK:17,RJ:18,Rx:19
,Rz:20,Ry:21,RH:22,RQ:23,RG:24,RR:25,RE:26};C.J8={Trigger:function(){B.Core.Timer.
Trigger.call(this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this
,aArg);this.__proto__=C.J8;},_className:"Effects::EffectTimerClass"};C.Fl={_Init:
function(){C.J8._Init.call(this,0);this.HC(15);this.AS(true);},_variants:function(
){return this;},_this:null};C.I3={CC:B.aan(12,0,null),FA:B.aan(12,0,null),_Init:
function(aArg){(this.CC=[]).__proto__=C.I3.CC;(this.FA=[]).__proto__=C.I3.FA;this.
__proto__=C.I3;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},
Ac:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.IL={Ay:null
,At:null,Mz:function(H$){var L=this.At;while(!!L){L.Kz();L.I.E=L.I.E&~0x40000;L=
L.O;}L=this.At;while(!!L){B.ow(L.L4,L);L=L.O;}},My:function(H$){var L=this.At;while(
!!L){B.ow(L.JF,L);L=L.O;}this.At=null;this.Ay=null;},GO:function(H$){var A;if(!this.
At)this.D7();var L=this.At;while(!!L){L.I.E=(L.I.E|0x40000)&~0x20000;L.I.Gw=null;
L=L.O;}L=this.At;while(!!L){(A=L.Hz)?A[1].call(A[0],L):null;L.GO();L=L.O;}},D7:function(
){var L=this.At;while(!!L&&L.Ks())L=L.O;if(!L)B.Core.HO.D7.call(this);},PZ:function(
AN){if(!AN)return;if(this.Kr())throw new Error(Bk);if(AN.Ds!==this)throw new Error(
Dm);if(!!AN.O)AN.O.W=AN.W;else this.Ay=AN.W;if(!!AN.W)AN.W.O=AN.O;else this.At=AN.
O;AN.Ds=null;AN.O=null;AN.W=null;if(!!AN.I)AN.I.Gw=null;B.ow(AN.JF,AN);if(!this.
At)this.Mk();},Mh:function(AN){if(!AN)return;if(this.Kr())throw new Error(Ec);if(
!!AN.Ds)throw new Error(EZ);AN.W=this.Ay;AN.O=null;if(!!this.Ay)this.Ay.O=AN;else
this.At=AN;this.Ay=AN;AN.Ds=this;},_Init:function(aArg){B.Core.HO._Init.call(this
,aArg);this.__proto__=C.IL;},_Mark:function(D){var A;B.Core.HO._Mark.call(this,D
);if((A=this.Ay)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.At)&&(A._cycle!=D
))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.HK={_Init:function(){
C.KO._Init.call(this,0);},_variants:function(){return this;},_this:null};C.I1={_Init:
function(){C.I0._Init.call(this,0);this.Es=4;},_variants:function(){return this;
},_this:null};C.HM={_Init:function(){C.I0._Init.call(this,0);this.Es=5;},_variants:
function(){return this;},_this:null};
C._Init=function(){C.Kp.__proto__=C.Fk;C.KI.__proto__=C.Fk;C.Kh.__proto__=C.Fk;C.
GV.__proto__=C.EL;C.GQ.__proto__=C.EL;C.KO.__proto__=C.Fw;C.I0.__proto__=C.Fw;C.
J8.__proto__=B.Core.Timer;C.IL.__proto__=B.Core.HO;};C._ReInit=function(){var A;
if((A=C.Fl._this))A._ReInit();if((A=C.HK._this))A._ReInit();if((A=C.I1._this))A.
_ReInit();if((A=C.HM._this))A._ReInit();};C.CK=function(D){var A;if((A=C.Fl._this
)&&(A._cycle!=D))A._Done(C.Fl._this=null);if((A=C.HK._this)&&(A._cycle!=D))A._Done(
C.HK._this=null);if((A=C.I1._this)&&(A._cycle!=D))A._Done(C.I1._this=null);if((A=
C.HM._this)&&(A._cycle!=D))A._Done(C.HM._this=null);};return C;})();

/* Embedded Wizard */