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
var Dl="The fader doesn\'t belong to this task";var Ea="Trying to add a fader to a task, which is actually running";
var EW="The fader belongs already to a task";
C.Fh={B9:null,timer:null,IO:null,Ht:null,H_:0,Fg:0,Dn:0,Cx:0,Ic:0.001,DK:0,AS:0,AP:
0,J2:0.5,L_:3,HA:3,Hc:0.5,Ds:3,KQ:0,KP:0,Dt:0,EG:1000,EL:0,EV:0,AV:false,KD:false
,Gy:false,JV:false,B8:function(Ah){var A;if(!this.timer)return;if(!this.Fg){if(this.
KD)this.Fg=-1;else this.Fg=1;this.H_=this.Fg;this.AP=this.timer.Aq;this.AS=0;this.
DK=-1;}var CL;if((this.Fg>0)&&(this.H_>0))CL=this.QS();else if((this.Fg<0)&&(this.
H_<0))CL=this.QV();else if(this.Fg>0)CL=this.QT();else CL=this.QU();if(CL){this.
A_(false);(A=this.IO)?A[1].call(A[0],this):null;}},JN:function(H){var A;if(!this.
B9&&(((this.EV===19)||(this.EV===20))||(this.EV===21))){var Jd=this.L_+1;var Qv=
Math.sqrt(this.J2);var Gx=0.5;var G;this.B9=B._NewObject(C.IY,0);this.B9.CA.Set(
0,1);this.B9.Fw.Set(0,1);for(G=1;G<Jd;G=G+1){this.B9.CA.Set(G,this.B9.CA.Get(G-1
)*Qv);this.B9.Fw.Set(G,this.B9.Fw.Get(G-1)*this.J2);Gx=Gx+this.B9.CA.Get(G);}var
Qy=1/Gx;this.B9.CA.Set(0,0.5);Gx=0;for(G=0;G<Jd;G=G+1){this.B9.CA.Set(G,this.B9.
CA.Get(G)*Qy);Gx=Gx+this.B9.CA.Get(G);}this.B9.CA.Set(Jd,this.B9.CA.Get(Jd)+(1-Gx
));}switch(this.EV){case 1:H=Math.pow(H,this.Ds);break;case 2:{H=1-H;H=1-Math.pow(
H,this.Ds);}break;case 3:{H=H*2;if(H<1)H=Math.pow(H,this.Ds)/2;else{H=2-H;H=(2-Math.
pow(H,this.Ds))*0.5;}}break;case 4:H=(Math.pow(2.718,this.Ds*H)-1)/(Math.pow(2.718
,this.Ds)-1);break;case 5:{H=1-H;H=1-((Math.pow(2.718,this.Ds*H)-1)/(Math.pow(2.718
,this.Ds)-1));}break;case 6:{H=H*2;if(H<1)H=((Math.pow(2.718,this.Ds*H)-1)/(Math.
pow(2.718,this.Ds)-1))/2;else{H=2-H;H=(2-((Math.pow(2.718,this.Ds*H)-1)/(Math.pow(
2.718,this.Ds)-1)))*0.5;}}break;case 7:H=1-Math.cos((H*90)*B.kw);break;case 8:H=
Math.sin((H*90)*B.kw);break;case 9:{H=H*2;if(H<1){H=1-Math.cos((H*90)*B.kw);H=H*
0.5;}else{H=2-H;H=1-Math.cos((H*90)*B.kw);H=(2-H)*0.5;}}break;case 10:H=1-Math.sqrt(
1-(H*H));break;case 11:{H=1-H;H=Math.sqrt(1-(H*H));}break;case 12:{H=H*2;if(H<1){
H=1-Math.sqrt(1-(H*H));H=H*0.5;}else{H=2-H;H=1-Math.sqrt(1-(H*H));H=(2-H)*0.5;}}
break;case 13:H=((H*H)*H)-((H*this.Hc)*Math.sin((H*180)*B.kw));break;case 14:{H=
1-H;H=((H*H)*H)-((H*this.Hc)*Math.sin((H*180)*B.kw));H=1-H;}break;case 15:{H=H*2;
if(H<1){H=((H*H)*H)-((H*this.Hc)*Math.sin((H*180)*B.kw));H=H*0.5;}else{H=2-H;H=((
H*H)*H)-((H*this.Hc)*Math.sin((H*180)*B.kw));H=(2-H)*0.5;}}break;case 16:H=((H*H
)*H)*Math.sin(((H*90)*(1+(4*this.HA)))*B.kw);break;case 17:{H=1-H;H=1-(((H*H)*H)
*Math.sin(((H*90)*(1+(4*this.HA)))*B.kw));}break;case 18:{H=H*2;if(H<1){H=((H*H)
*H)*Math.sin(((H*90)*(1+(4*this.HA)))*B.kw);H=H*0.5;}else{H=2-H;H=((H*H)*H)*Math.
sin(((H*90)*(1+(4*this.HA)))*B.kw);H=(2-H)*0.5;}}break;case 19:{var Ef=this.B9;var
G=0;var Eo=0;var CQ=Ef.CA.Get(0);var B7=1-H;while(B7>CQ){G=G+1;Eo=CQ;CQ=CQ+Ef.CA.
Get(G);}H=(B7-Eo)/(CQ-Eo);if(!G)H=1-(H*H);else{H=(2*H)-1;H=Ef.Fw.Get(G)*(1-(H*H)
);}}break;case 20:{var Ef=this.B9;var G=0;var Eo=0;var CQ=Ef.CA.Get(0);while(H>CQ
){G=G+1;Eo=CQ;CQ=CQ+Ef.CA.Get(G);}H=(H-Eo)/(CQ-Eo);if(!G)H=H*H;else{H=(2*H)-1;H=
1-(Ef.Fw.Get(G)*(1-(H*H)));}}break;case 21:{var Ef=this.B9;var G=0;var Eo=0;var CQ=
Ef.CA.Get(0);var Cy=H*2;var B7=Cy-1;if(Cy<1)B7=-B7;while(B7>CQ){G=G+1;Eo=CQ;CQ=CQ+
Ef.CA.Get(G);}B7=(B7-Eo)/(CQ-Eo);if(!G)B7=B7*B7;else{B7=(2*B7)-1;B7=1-(Ef.Fw.Get(
G)*(1-(B7*B7)));}if(Cy<1)H=0.5*(1-B7);else H=0.5*(1+B7);}break;default:if(this.Gy
){var Cy=H;var Ih=1-Cy;H=((Ih*Cy)*(this.Cx+1))+(Cy*Cy);}else if(this.JV){var Cy=
H;var Ih=1-Cy;var Nc=Cy*Cy;var QD=Ih*Ih;H=(((QD*Cy)*(this.Cx+1))+((Ih*Nc)*(this.
Dn+2)))+(Nc*Cy);}}this.Iy(H);(A=this.Ht)?A[1].call(A[0],this):null;},QV:function(
){var Af=(this.timer.Aq-this.AP)|0;if(Af<0)Af=-Af;var Dg=this.EL;var DN=this.EL+
this.EG;var Bw=this.EG;var CL=false;var Be=this.DK;if(!this.AS&&(Af>=DN)){this.AS=
1;Af=Af-DN;this.AP=this.AP+DN;}if((this.AS>0)&&(Af>=Bw)){var BH=(Af/Bw)|0;this.AS=
this.AS+BH;Af=Af-(BH*Bw);this.AP=this.AP+(BH*Bw);}if((this.AS>2)&&!this.Dt)this.
AS=1;if(this.AS>0)Dg=0;if((this.AS>=this.Dt)&&(this.Dt>0)){CL=true;Be=0;}else if(
Af>=Dg)Be=1-((Af-Dg)*this.Ic);else if(Be>=0)Be=0;if(Be!==this.DK){this.DK=Be;this.
JN(Be);}return CL;},QU:function(){var Af=(this.AP-this.timer.Aq)|0;var Dg=this.EL;
var DN=this.EL+this.EG;var Bw=this.EG;var CL=false;var Be=this.DK;if((this.AS>1)&&(
Af<0)){var BH=(((-Af+Bw)-1)/Bw)|0;if((this.AS-BH)<=0)BH=this.AS-1;this.AS=this.AS-
BH;Af=Af+(BH*Bw);this.AP=this.AP+(BH*Bw);}if(((this.AS===1)&&(Af<0))&&(this.Dt>0
)){this.AS=0;Af=Af+DN;this.AP=this.AP+DN;}if(((this.AS===1)&&(Af<0))&&!this.Dt){
var BH=(((-Af+Bw)-1)/Bw)|0;Af=Af+(BH*Bw);this.AP=this.AP+(BH*Bw);}if(this.AS>0)Dg=
0;if(Af<0){CL=true;Be=1;}else if(Af>=Dg)Be=1-((Af-Dg)*this.Ic);else if(Be>=0)Be=
1;if(Be!==this.DK){this.DK=Be;this.JN(Be);}return CL;},QT:function(){var Af=(this.
AP-this.timer.Aq)|0;var Dg=this.EL;var DN=this.EL+this.EG;var Bw=this.EG;var CL=
false;var Be=this.DK;if((this.AS>1)&&(Af<0)){var BH=(((-Af+Bw)-1)/Bw)|0;if((this.
AS-BH)<=0)BH=this.AS-1;this.AS=this.AS-BH;Af=Af+(BH*Bw);this.AP=this.AP+(BH*Bw);
}if(((this.AS===1)&&(Af<0))&&(this.Dt>0)){this.AS=0;Af=Af+DN;this.AP=this.AP+DN;
}if(((this.AS===1)&&(Af<0))&&!this.Dt){var BH=(((-Af+Bw)-1)/Bw)|0;Af=Af+(BH*Bw);
this.AP=this.AP+(BH*Bw);}if(this.AS>0)Dg=0;if(Af<0){CL=true;Be=0;}else if(Af>=Dg
)Be=(Af-Dg)*this.Ic;else if(Be>=0)Be=0;if(Be!==this.DK){this.DK=Be;this.JN(Be);}
return CL;},QS:function(){var Af=(this.timer.Aq-this.AP)|0;if(Af<0)Af=-Af;var Dg=
this.EL;var DN=this.EL+this.EG;var Bw=this.EG;var CL=false;var Be=this.DK;if(!this.
AS&&(Af>=DN)){this.AS=1;Af=Af-DN;this.AP=this.AP+DN;}if((this.AS>0)&&(Af>=Bw)){var
BH=(Af/Bw)|0;this.AS=this.AS+BH;Af=Af-(BH*Bw);this.AP=this.AP+(BH*Bw);}if((this.
AS>2)&&!this.Dt)this.AS=1;if(this.AS>0)Dg=0;if((this.AS>=this.Dt)&&(this.Dt>0)){
CL=true;Be=1;}else if(Af>=Dg)Be=(Af-Dg)*this.Ic;else if(Be>=0)Be=1;if(Be!==this.
DK){this.DK=Be;this.JN(Be);}return CL;},MG:function(value){if(this.KD===value)return;
this.KD=value;if(!this.AV||!this.Fg)return;if(value)this.H_=-1;else this.H_=1;this.
AP=(this.timer.Hm()*2)-this.AP;},Mw:function(value){if(value<0)value=0;if(value>
1)value=1;this.J2=value;},Mt:function(value){if(value<1)value=1;if(value>10)value=
10;this.L_=value;this.B9=null;},ME:function(value){if(value<1)value=1;if(value>10
)value=10;this.HA=value;},Ms:function(value){if(value<0)value=0;if(value>10)value=
10;this.Hc=value;},Mx:function(value){if(value<1)value=1;if(value>100)value=100;
this.Ds=value;},MK:function(value){if(this.KQ===value)return;this.KQ=value;if(this.
EV===26){this.Dn=value;this.Gy=(this.Cx===this.Dn)&&!!this.Cx;this.JV=!this.Gy&&(
this.Cx!==this.Dn);}},MJ:function(value){if(this.KP===value)return;this.KP=value;
if(this.EV===26){this.Cx=value;this.Gy=(this.Cx===this.Dn)&&!!this.Cx;this.JV=!this.
Gy&&(this.Cx!==this.Dn);}},MI:function(value){if(this.EV===value)return;this.EV=
value;this.B9=null;switch(value){case 24:{this.Cx=-1.1;this.Dn=1.1;}break;case 22:{
this.Cx=-1;this.Dn=-2;}break;case 23:{this.Cx=2;this.Dn=1;}break;case 25:{this.Cx=
1.1;this.Dn=-1.1;}break;case 0:{this.Cx=0;this.Dn=0;}break;default:{this.Cx=this.
KP;this.Dn=this.KQ;}}this.Gy=(this.Cx===this.Dn)&&!!this.Cx;this.JV=!this.Gy&&(this.
Cx!==this.Dn);},MD:function(value){if(value<0)value=0;this.Dt=value;},Hw:function(
value){if(value<15)value=15;this.EG=value;this.Ic=1/value;},Mz:function(value){if(
value<0)value=0;this.EL=value;},A_:function(value){if(this.AV===value)return;this.
AV=value;if(!value&&!!this.timer){B.zl([this,this.B8],this.timer,0);this.timer=null;
}if(value){this.timer=B._GetAutoObject(C.Fi);B.y_([this,this.B8],this.timer,0);this.
Fg=0;B.ow([this,this.B8],this);}},Iy:function(Gg){},MP:function(Ah){this.A_(false
);},PW:function(Ah){if(this.AV)this.A_(false);this.A_(true);},_Init:function(aArg
){this.__proto__=C.Fh;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.B9)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IO)&&((A=A[0]
)._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ht)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Ki={IQ:null,Fu:0,BF:255,BU:0,Iy:function(Gg
){var Cu;this.Fu=this.BU+(Math.round((this.BF-this.BU)*Gg)|0);if(!!this.IQ)(Cu=this.
IQ,Cu[2].call(Cu[0],this.Fu));},_Init:function(aArg){C.Fh._Init.call(this,aArg);
this.__proto__=C.Ki;},_Mark:function(D){var A;C.Fh._Mark.call(this,D);if((A=this.
IQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"
};C.Ky={Fu:B.vw,BF:Aw,BU:B.vw,Iy:function(Gg){var Gz=this.BU[0];var D2=this.BU[1
];Gz=Gz+(Math.round((this.BF[0]-Gz)*Gg)|0);D2=D2+(Math.round((this.BF[1]-D2)*Gg)|
0);this.Fu=[Gz,D2];},_Init:function(aArg){C.Fh._Init.call(this,aArg);this.__proto__=
C.Ky;},_className:"Effects::PointEffect"};C.Ka={Fu:0,BF:1,Iy:function(Gg){this.Fu=
this.BF*Gg;},_Init:function(aArg){C.Fh._Init.call(this,aArg);this.__proto__=C.Ka;
},_className:"Effects::FloatEffect"};C.EH={Dq:null,W:null,O:null,F:null,I:null,JA:
null,LU:null,Hu:null,BA:true,AV:true,HV:true,Iw:false,IA:true,GP:true,F_:true,D5:
function(){if(!!this.Dq)this.Dq.D5();},Kl:function(){return true;},Ks:function(){
},GL:function(){this.D5();},_Init:function(aArg){this.__proto__=C.EH;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Dq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.W)&&(A._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
F)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JA)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.LU)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hu)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},Ac:null,_cycle:0
,_observers:null,_className:"Effects::Fader"};C.GS={MM:B.vw,Fy:false,Kl:function(
){return this.Fy;},Ks:function(){if(!this.BA&&!!this.I.F)this.I.Er(false);if((!this.
BA&&this.F_)&&!!this.I.F)this.I.F.ER(this.I);if(!this.AV)this.I.A_(false);},GL:function(
){if(this.AV)this.I.A_(true);if((this.BA||this.Iw)&&!this.I.F){this.I.Er(false);
this.F.AU(this.I,0);}if(this.BA&&this.GP)this.I.F.ET(this.I);if(this.BA&&this.IA
)this.I.F.CF(this.I);if(this.BA&&!this.HV)this.I.Aj(B.aaM(this.I.K,this.MM));if(
this.BA){this.I.FZ(255);this.I.Er(true);}if(!this.BA&&(this.F.B_===this.I))this.
F.CF(null);this.Fy=true;this.D5();},_Init:function(aArg){C.EH._Init.call(this,aArg
);this.__proto__=C.GS;},_className:"Effects::VisibilityFader"};C.GN={A0:null,AD:
null,Fy:false,Q7:false,Kl:function(){return this.Fy;},Ks:function(){if(this.BA){
this.I.FZ(this.A0.BF);this.I.Aj(B.aaM(this.I.K,this.AD.BF));}if(!this.BA&&!this.
I.DT)this.I.Er(false);if((!this.BA&&this.F_)&&!!this.I.F)this.I.F.ER(this.I);if(
!this.AV)this.I.A_(false);},GL:function(){var A;if(this.HV){if(this.I.GF()&&!!this.
I.F)this.A0.BU=this.I.DT;else this.A0.BU=0;this.AD.BU=this.I.K.slice(0,2);}var Qz=((
!this.I.F||!this.I.DT)||!this.I.GF())||(((A=B.kz(this.I.K,[0,0,(A=this.F.K)[2]-A[
0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var QA=((!this.BA&&((!this.I.F||!this.I.
GF())||this.F_))||!this.A0.BF)||(((A=B.kz(B.aam([0,0,(A=this.I.K)[2]-A[0],A[3]-A[
1]],this.AD.BF),[0,0,(A=this.F.K)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
if(Qz&&QA){this.A0.BU=0;this.A0.BF=0;this.AD.BU=this.AD.BF;}this.Q7=this.I.OB();
if(this.AV)this.I.A_(true);if((this.BA||this.Iw)&&!this.I.F){this.I.Er(false);this.
F.AU(this.I,0);}if(this.BA&&this.GP)this.I.F.ET(this.I);if(this.BA&&this.IA)this.
I.F.CF(this.I);if(!this.BA&&(this.F.B_===this.I))this.F.CF(null);if(this.BA&&!this.
I.GF()){this.I.Aj(B.aaM(this.I.K,this.AD.BU));this.I.FZ(this.A0.BU);this.I.Er(true
);}if(!this.BA&&((!this.I.F||!this.I.GF())||!this.I.DT)){this.Fy=true;this.D5();
return;}if(!this.BA&&B.z8(this.AD.BU,this.AD.BF))this.I.Aj(B.aaM(this.I.K,this.AD.
BU));if(!this.BA&&(this.A0.BU===this.A0.BF))this.I.FZ(this.A0.BU);if((this.I.DT===
this.A0.BF)&&B.z8(this.I.K.slice(0,2),this.AD.BF)){this.Fy=true;this.D5();return;
}if((this.A0.BU===this.A0.BF)&&B.z8(this.AD.BU,this.AD.BF)){this.Fy=true;this.D5(
);return;}if(!this.A0.Dt)this.A0.MD(1);if(!this.AD.Dt)this.AD.MD(1);this.AD.MG(false
);this.AD.IO=[this,this.NB];this.AD.Ht=[this,this.QF];this.A0.IQ=[A=this.I,A.OC,
A.Qd];this.A0.MG(false);this.A0.IO=[this,this.NB];this.A0.Ht=null;this.AD.A_(!B.
z8(this.AD.BU,this.AD.BF));this.A0.A_(this.A0.BU!==this.A0.BF);},NB:function(Ah){
this.Fy=!this.A0.AV&&!this.AD.AV;this.D5();},QF:function(Ah){this.I.Aj(B.aaM(this.
I.K,this.AD.Fu));},_Init:function(aArg){C.EH._Init.call(this,aArg);C.Ki._Init.call(
this.A0={Ac:this},0);C.Ky._Init.call(this.AD={Ac:this},0);this.__proto__=C.GN;},
_Done:function(){this.__proto__=C.EH;this.A0._Done();this.AD._Done();C.EH._Done.
call(this);},_ReInit:function(){C.EH._ReInit.call(this);this.A0._ReInit();this.AD.
_ReInit();},_Mark:function(D){var A;C.EH._Mark.call(this,D);if((A=this.A0)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.AD)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Effects::PositionFader"};C.Fs={EF:function(){return null;},EE:function(){return null;
},GB:function(){return this.EF();},GA:function(){return this.EE();},_Init:function(
aArg){this.__proto__=C.Fs;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle!=D))A._Mark(
A._cycle=D);},Ac:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.KE={EF:function(){var L=B._NewObject(C.GS,0);L.BA=true;L.AV=true;L.IA=false;L.
GP=true;L.HV=false;L.Hu=[this,this.LV];return L;},EE:function(){var L=B._NewObject(
C.GS,0);L.BA=false;L.AV=false;L.F_=true;return L;},GB:function(){var L=C.Fs.GB.call(
this);L.GP=false;L.AV=true;return L;},GA:function(){var L=B._NewObject(C.GS,0);L.
BA=false;L.AV=true;L.Iw=true;L.F_=false;return L;},LV:function(Ah){var A;var L=(
C.GS.isPrototypeOf(Ah)?Ah:null);var At=[0,0,(A=L.F.K)[2]-A[0],A[3]-A[1]];var AT=[(
A=L.I.K)[2]-A[0],A[3]-A[1]];var T=At.slice(0,2);T=[(At[0]+(((At[2]-At[0])/2)|0))-((
AT[0]/2)|0),T[1]];T=[T[0],(At[1]+(((At[3]-At[1])/2)|0))-((AT[1]/2)|0)];L.MM=T;},
_Init:function(aArg){C.Fs._Init.call(this,aArg);this.__proto__=C.KE;},_className:
"Effects::ShowHideTransition"};C.IV={Eq:0,EF:function(){var L=B._NewObject(C.GN,
0);L.BA=true;L.AV=true;L.IA=false;L.GP=true;L.HV=true;L.Hu=[this,this.LV];L.A0.Hw(
500);L.A0.Mz(0);L.A0.BU=0;L.A0.BF=255;L.AD.Hw(500);L.AD.MI(23);L.AD.MJ(0);L.AD.MK(
0);L.AD.Mx(3);L.AD.Ms(0.5);L.AD.ME(3);L.AD.Mt(3);L.AD.Mw(0.5);return L;},EE:function(
){var L=B._NewObject(C.GN,0);L.BA=false;L.AV=false;L.F_=true;L.HV=true;L.Hu=[this
,this.QK];L.A0.BU=255;L.A0.BF=0;L.A0.Hw(500);L.A0.Mz(0);L.AD.Hw(500);L.AD.MI(23);
L.AD.MJ(0);L.AD.MK(0);L.AD.Mx(3);L.AD.Ms(0.5);L.AD.ME(3);L.AD.Mt(3);L.AD.Mw(0.5);
return L;},GB:function(){var L=C.Fs.GB.call(this);L.GP=false;L.AV=true;return L;
},GA:function(){var L=C.Fs.GA.call(this);L.Iw=true;L.F_=false;L.AV=true;return L;
},LV:function(Ah){var A;var L=(C.GN.isPrototypeOf(Ah)?Ah:null);var At=[0,0,(A=L.
F.K)[2]-A[0],A[3]-A[1]];var AT=[(A=L.I.K)[2]-A[0],A[3]-A[1]];var T=At.slice(0,2);
T=[(At[0]+(((At[2]-At[0])/2)|0))-((AT[0]/2)|0),T[1]];T=[T[0],(At[1]+(((At[3]-At[
1])/2)|0))-((AT[1]/2)|0)];L.AD.BF=T;if(((!L.I.F||!L.I.GF())||!L.I.DT)||(((A=B.kz(
L.I.K,[0,0,(A=L.F.K)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]))){var DO=[(A=L.
F.K)[2]-A[0],A[3]-A[1]];switch(this.Eq){case 5:T=[T[0],-AT[1]];break;case 3:{T=[
T[0],-AT[1]];T=[DO[0],T[1]];}break;case 8:T=[-AT[0],-AT[1]];break;case 2:T=[DO[0
],T[1]];break;case 7:T=[-AT[0],T[1]];break;case 4:T=[T[0],DO[1]];break;case 1:{T=[
T[0],DO[1]];T=[DO[0],T[1]];}break;case 6:{T=[T[0],DO[1]];T=[-AT[0],T[1]];}break;
default:;}L.I.Aj(B.aaM(L.I.K,T));}},QK:function(Ah){var A;var L=(C.GN.isPrototypeOf(
Ah)?Ah:null);var T=L.I.K.slice(0,2);var AT=[(A=L.I.K)[2]-A[0],A[3]-A[1]];var DO=[(
A=L.F.K)[2]-A[0],A[3]-A[1]];switch(this.Eq){case 5:T=[T[0],DO[1]];break;case 3:{
T=[T[0],DO[1]];T=[-AT[0],T[1]];}break;case 8:{T=[T[0],DO[1]];T=[DO[0],T[1]];}break;
case 2:T=[-AT[0],T[1]];break;case 7:T=[DO[0],T[1]];break;case 4:T=[T[0],-AT[1]];
break;case 1:T=[-AT[0],-AT[1]];break;case 6:{T=[T[0],-AT[1]];T=[DO[0],T[1]];}break;
default:;}L.AD.BF=T;},_Init:function(aArg){C.Fs._Init.call(this,aArg);this.__proto__=
C.IV;},_className:"Effects::SlideTransition"};C.EV={RT:0,R3:1,R5:2,R4:3,RD:4,RF:
5,RE:6,Sj:7,Sl:8,Sk:9,Rr:10,Rt:11,Rs:12,Rf:13,Rh:14,Rg:15,Ry:16,RA:17,Rz:18,Rn:19
,Rp:20,Ro:21,Rx:22,RG:23,Rw:24,RH:25,Ru:26};C.J1={Trigger:function(){B.Core.Timer.
Trigger.call(this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this
,aArg);this.__proto__=C.J1;},_className:"Effects::EffectTimerClass"};C.Fi={_Init:
function(){C.J1._Init.call(this,0);this.Hx(15);this.A_(true);},_variants:function(
){return this;},_this:null};C.IY={CA:B.aan(12,0,null),Fw:B.aan(12,0,null),_Init:
function(aArg){(this.CA=[]).__proto__=C.IY.CA;(this.Fw=[]).__proto__=C.IY.Fw;this.
__proto__=C.IY;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);},
Ac:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.IE={Ay:null
,As:null,Mo:function(H5){var L=this.As;while(!!L){L.Ks();L.I.E=L.I.E&~0x40000;L=
L.O;}L=this.As;while(!!L){B.ow(L.LU,L);L=L.O;}},Mn:function(H5){var L=this.As;while(
!!L){B.ow(L.JA,L);L=L.O;}this.As=null;this.Ay=null;},GL:function(H5){var A;if(!this.
As)this.D5();var L=this.As;while(!!L){L.I.E=(L.I.E|0x40000)&~0x20000;L.I.Gt=null;
L=L.O;}L=this.As;while(!!L){(A=L.Hu)?A[1].call(A[0],L):null;L.GL();L=L.O;}},D5:function(
){var L=this.As;while(!!L&&L.Kl())L=L.O;if(!L)B.Core.HI.D5.call(this);},PQ:function(
AN){if(!AN)return;if(this.Kk())throw new Error(Bk);if(AN.Dq!==this)throw new Error(
Dl);if(!!AN.O)AN.O.W=AN.W;else this.Ay=AN.W;if(!!AN.W)AN.W.O=AN.O;else this.As=AN.
O;AN.Dq=null;AN.O=null;AN.W=null;if(!!AN.I)AN.I.Gt=null;B.ow(AN.JA,AN);if(!this.
As)this.Ma();},L9:function(AN){if(!AN)return;if(this.Kk())throw new Error(Ea);if(
!!AN.Dq)throw new Error(EW);AN.W=this.Ay;AN.O=null;if(!!this.Ay)this.Ay.O=AN;else
this.As=AN;this.Ay=AN;AN.Dq=this;},_Init:function(aArg){B.Core.HI._Init.call(this
,aArg);this.__proto__=C.IE;},_Mark:function(D){var A;B.Core.HI._Mark.call(this,D
);if((A=this.Ay)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.As)&&(A._cycle!=D
))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.HF={_Init:function(){
C.KE._Init.call(this,0);},_variants:function(){return this;},_this:null};C.IW={_Init:
function(){C.IV._Init.call(this,0);this.Eq=4;},_variants:function(){return this;
},_this:null};C.IU={_Init:function(){C.IV._Init.call(this,0);this.Eq=5;},_variants:
function(){return this;},_this:null};
C._Init=function(){C.Ki.__proto__=C.Fh;C.Ky.__proto__=C.Fh;C.Ka.__proto__=C.Fh;C.
GS.__proto__=C.EH;C.GN.__proto__=C.EH;C.KE.__proto__=C.Fs;C.IV.__proto__=C.Fs;C.
J1.__proto__=B.Core.Timer;C.IE.__proto__=B.Core.HI;};C._ReInit=function(){var A;
if((A=C.Fi._this))A._ReInit();if((A=C.HF._this))A._ReInit();if((A=C.IW._this))A.
_ReInit();if((A=C.IU._this))A._ReInit();};C.CI=function(D){var A;if((A=C.Fi._this
)&&(A._cycle!=D))A._Done(C.Fi._this=null);if((A=C.HF._this)&&(A._cycle!=D))A._Done(
C.HF._this=null);if((A=C.IW._this)&&(A._cycle!=D))A._Done(C.IW._this=null);if((A=
C.IU._this)&&(A._cycle!=D))A._Done(C.IU._this=null);};return C;})();

/* Embedded Wizard */