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
);if(EmWiApp.Application)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.Application=(function(){var B=EmWiApp;var C={};
var Aw=[0,0,800,480];var Bk=[0,0,801,480];var Dl="The maximum value of the slider is ";
var Ec="The current value  of the slider is ";var EZ=[0,0,800,489];var Gb=[117,387
,582,436];var Gc=[368,60,788,175];var GX="Title";var H3=[379,157,784,187];var H4=
"Artist";var Li=[57,395,118,425];var I5="0:00";var Lj=[582,395,645,425];var Lk="10:59";
var H5=[375,436,425,486];var Ll=[298,337,353,387];var Lm=[344,335,405,385];var Ln=[-
5,-1,474,349];var Lo=[7,432,800,486];var Lp=[249,338,299,387];var Lq=[402,341,452
,386];var Lr=[-6,-10,808,480];var Ls=[17,127,779,372];var Lt=[355,-2,405,48];var
Lu=[3,-2,797,51];var Lv=[18,126,781,370];var H6=[0,50];var Lw=[19,131];var Lx=[782
,130];var Ly=[784,370];var P9=[19,370];var P_="update CurrentTime from ";var M2=
" to ";var P$="update Duration from ";var Qa=[0,0,464,355];var Qb=[133,299];var Qc=[
347,302];var Qd=[346,77];var Qe=[133,77];var Qf=[125,125];var Qg=[5,0,790,50];var
Qh=[0,-5,791,49];var Qi=[26,-1,523,49];var Qj="Acid Rain";var Qk=[446,0,783,49];
var Ql="Liquid Tension Experiment";
C.Application={A6:null,PlayerDialog:null,_Init:function(aArg){B.Core.Root._Init.call(
this,aArg);B.abh.A6._Init.call(this.A6={Ac:this},0);C.PlayerDialog._Init.call(this.
PlayerDialog={Ac:this},0);this.__proto__=C.Application;this.Aj(Aw);this.A6.Aj(Aw
);this.A6.De(0xFF000000);this.PlayerDialog.Aj(Bk);this.AV(this.A6,0);this.AV(this.
PlayerDialog,0);},_Done:function(){this.__proto__=B.Core.Root;this.A6._Done();this.
PlayerDialog._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root.
_ReInit.call(this);this.A6._ReInit();this.PlayerDialog._ReInit();},_Mark:function(
D){var A;B.Core.Root._Mark.call(this,D);if((A=this.A6)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.PlayerDialog)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::Application"
};C.K1={_class:function(){return B.abg.By;},0:{Data:function(){return B.abo;},Cache:[
],_this:null}};C.PlayerDialog={deviceRef:null,D6:null,Cj:null,BV:null,BK:null,CurrentTime:
null,Duration:null,Fv:null,CI:null,Loop:null,DA:null,F_:null,C2:null,C1:null,Ch:
function(aArg){var A;this.deviceRef=B._GetAutoObject(C.Device);B.za([this,this.HD
],[A=this.deviceRef,A.MA,A.MF],0);B.za([this,this.HD],[A=this.deviceRef,A.MB,A.OnSetDuration
],0);B.y$([this,this.HD],123);B.y$([this,this.HD],124);B.ow([this,this.HD],this);
},PV:function(Ag){this.deviceRef.UpdateTimeFromSlider(this.Cj.Dd());},OnLoop:function(
Ag){this.deviceRef.LoopTrack();if(B._GetAutoObject(C.Device).Loop)this.Loop.CH(B.
zW(C.Ku));else this.Loop.CH(B.zW(C.IP));},HD:function(Ag){this.Op();if(this.Cj.Cv
!==this.deviceRef.Duration){this.Cj.MM(this.deviceRef.Duration);B.aa8("%s%i",Dl,
this.Cj.Cv);}B.aa8("%s%i",Ec,this.Cj.Dd());this.Cj.GL(this.deviceRef.CurrentTime
);this.Duration.Dx(this.deviceRef.Mu(this.deviceRef.Duration));this.CurrentTime.
Dx(this.deviceRef.Mu(this.deviceRef.CurrentTime));if(((this.Cj.Dd()===this.Cj.Cv
)&&!!this.Cj.Dd())&&!B._GetAutoObject(C.Device).Loop){if(B._GetAutoObject(C.Device
).Mj())this.MC();else this.OI();}this.BK.Dx(B._GetAutoObject(C.Device).BK);this.
BV.Dx(B._GetAutoObject(C.Device).K2);},PX:function(Ag){switch(B._GetAutoObject(C.
Device).Et){case 1:this.CI.CH(B.zW(C.HH));break;default:this.CI.CH(B.zW(C.KH));}
},OR:function(Ag){switch(B._GetAutoObject(C.Device).Et){case 1:this.OQ();break;case
2:this.GI();break;case 0:this.GI();break;case 4:{B._GetAutoObject(C.Device).UpdateCurrentTime(
0);this.GI();}break;default:this.GI();}},GI:function(){var A;this.deviceRef.Play(
);this.DA.D5.P5(this);this.CI.CH(B.zW(C.KG));B._GetAutoObject(C.Device).UpdatePlayerState(
1);},OQ:function(){var A;this.deviceRef.Pause();this.DA.D5.MY(this);this.CI.CH(B.
zW(C.GO));B._GetAutoObject(C.Device).UpdatePlayerState(2);},OI:function(){var A;
B._GetAutoObject(C.Device).HA(0);B._GetAutoObject(C.Device).UpdatePlayerState(4);
this.CI.CH(B.zW(C.GO));this.DA.D5.MY(this);},OP:function(Ag){this.F.KT(B._NewObject(
C.KL,0),B._GetAutoObject(B.abj.I1),null,null,null,null,null,null,null,null,false
);},OS:function(Ag){var A;var Dm;(Dm=B._GetAutoObject(C.Device),Dm.HA(Dm.EJ-1));
if(B._GetAutoObject(C.Device).Et===1)this.GI();},OO:function(Ag){this.MC();},PY:
function(Ag){this.C2.CH(B.zW(C.KK));},OF:function(Ag){this.C1.CH(B.zW(C.Kw));},MC:
function(){var A;var Dm;(Dm=B._GetAutoObject(C.Device),Dm.HA(Dm.EJ+1));if(B._GetAutoObject(
C.Device).Et===1)this.GI();},Ol:function(){this.C2.AS(false);this.C2.CH(B.zW(C.KJ
));},Oj:function(){this.C1.CH(B.zW(C.Kv));this.C1.AS(false);},Or:function(){this.
C2.AS(true);this.C2.CH(B.zW(C.IY));},Oq:function(){this.C1.AS(true);this.C1.CH(B.
zW(C.IU));},Op:function(){if(B._GetAutoObject(C.Device).Of())this.Or();else this.
Ol();if(B._GetAutoObject(C.Device).Mj())this.Oq();else this.Oj();},_Init:function(
aArg){B.Core.I._Init.call(this,aArg);B.abh.CX._Init.call(this.D6={Ac:this},0);B.
abi.Kk._Init.call(this.Cj={Ac:this},0);B.abh.Text._Init.call(this.BV={Ac:this},0
);B.abh.Text._Init.call(this.BK={Ac:this},0);B.abh.Text._Init.call(this.CurrentTime={
Ac:this},0);B.abh.Text._Init.call(this.Duration={Ac:this},0);B.abh.CX._Init.call(
this.Fv={Ac:this},0);B.abi.GQ._Init.call(this.CI={Ac:this},0);B.abi.GQ._Init.call(
this.Loop={Ac:this},0);C.DA._Init.call(this.DA={Ac:this},0);B.Core.I4._Init.call(
this.F_={Ac:this},0);B.abi.GQ._Init.call(this.C2={Ac:this},0);B.abi.GQ._Init.call(
this.C1={Ac:this},0);this.__proto__=C.PlayerDialog;this.Aj(Aw);this.D6.Aj(EZ);this.
Cj.Aj(Gb);this.Cj.MM(100);this.Cj.GL(0);this.BV.Aj(Gc);this.BV.OX(false);this.BV.
MU(true);this.BV.Dx(GX);this.BK.Aj(H3);this.BK.Dx(H4);this.CurrentTime.Aj(Li);this.
CurrentTime.Dx(I5);this.Duration.Aj(Lj);this.Duration.Dx(Lk);this.Fv.Aj(H5);this.
Fv.ET(1);this.CI.Aj(Ll);this.CI.Es(true);this.CI.IW(B.jm);this.Loop.Aj(Lm);this.
Loop.IW(B.jm);this.DA.Aj(Ln);this.F_.Aj(Lo);this.C2.Aj(Lp);this.C2.IW(B.jm);this.
C1.Aj(Lq);this.C1.IW(B.jm);this.AV(this.D6,0);this.AV(this.Cj,0);this.AV(this.BV
,0);this.AV(this.BK,0);this.AV(this.CurrentTime,0);this.AV(this.Duration,0);this.
AV(this.Fv,0);this.AV(this.CI,0);this.AV(this.Loop,0);this.AV(this.DA,0);this.AV(
this.F_,0);this.AV(this.C2,0);this.AV(this.C1,0);this.D6.DU(B.zW(C.D6));this.Cj.
GG=[this,this.PV];this.Cj.GK(B._GetAutoObject(C.Fm));this.BV.FZ(B.zW(C.K1));this.
BK.FZ(B.zW(C.By));this.CurrentTime.FZ(B.zW(C.HU));this.Duration.FZ(B.zW(C.HU));this.
Fv.DU(B.zW(B.abg.IT));this.CI.Ci=[this,this.OR];this.CI.CF=[this,this.PX];this.CI.
CH(B.zW(C.GO));this.CI.GK(B._GetAutoObject(C.D$));this.Loop.Ci=[this,this.OnLoop
];this.Loop.CH(B.zW(C.IP));this.Loop.GK(B._GetAutoObject(C.D$));this.F_.KF=[this
,this.OP];this.C2.Ci=[this,this.OS];this.C2.CF=[this,this.PY];this.C2.CH(B.zW(C.
IY));this.C2.GK(B._GetAutoObject(C.D$));this.C1.Ci=[this,this.OO];this.C1.CF=[this
,this.OF];this.C1.CH(B.zW(C.IU));this.C1.GK(B._GetAutoObject(C.D$));this.Ch(aArg
);},_Done:function(){this.__proto__=B.Core.I;this.D6._Done();this.Cj._Done();this.
BV._Done();this.BK._Done();this.CurrentTime._Done();this.Duration._Done();this.Fv.
_Done();this.CI._Done();this.Loop._Done();this.DA._Done();this.F_._Done();this.C2.
_Done();this.C1._Done();B.Core.I._Done.call(this);},_ReInit:function(){B.Core.I.
_ReInit.call(this);this.D6._ReInit();this.Cj._ReInit();this.BV._ReInit();this.BK.
_ReInit();this.CurrentTime._ReInit();this.Duration._ReInit();this.Fv._ReInit();this.
CI._ReInit();this.Loop._ReInit();this.DA._ReInit();this.F_._ReInit();this.C2._ReInit(
);this.C1._ReInit();},_Mark:function(D){var A;B.Core.I._Mark.call(this,D);if((A=
this.deviceRef)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D6)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Cj)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BV)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.BK)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CurrentTime
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Duration)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Fv)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CI)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Loop)._cycle!=D)A._Mark(A._cycle=D);if((A=this.DA)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.F_)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
C2)._cycle!=D)A._Mark(A._cycle=D);if((A=this.C1)._cycle!=D)A._Mark(A._cycle=D);}
,_className:"Application::PlayerDialog"};C.KL={A6:null,Cc:null,CX:null,FU:null,Ft:
null,Dy:null,ES:function(Ag){var A;var ED=this.Cc.EQ;var Gp=(C.IZ.isPrototypeOf(
A=this.Cc.Ax)?A:null);if(!Gp)return;Gp.BV.Dx(B._GetAutoObject(C.Device).Mt(ED));
Gp.BK.Dx(B._GetAutoObject(C.Device).Mp(ED));Gp.Pm(B._GetAutoObject(C.Device).Ms(
ED));if(Gp.KQ===B._GetAutoObject(C.Device).KS){this.Cc.MQ(ED);this.Cc.Mo(ED,true
,null,null);}Gp.Aj(B.aaN(Gp.K,this.Cc.GT));},OT:function(Ag){this.F.J7(this,B._GetAutoObject(
B.abj.HM),null,null,null,null,false);},OU:function(Ag){if(this.Dy.BZ)return;var ED=
this.Cc.Os(this.Dy.Bs);if(ED>=0){this.Cc.MQ(ED);B._GetAutoObject(C.Device).HA(ED
);this.Cc.Mo(ED,true,null,null);this.F.J7(this,B._GetAutoObject(B.abj.HM),null,null
,null,null,false);if(B._GetAutoObject(C.Device).Et===1)B._GetAutoObject(C.Device
).Play();}},_Init:function(aArg){B.Core.I._Init.call(this,aArg);B.abh.A6._Init.call(
this.A6={Ac:this},0);B.Core.Lf._Init.call(this.Cc={Ac:this},0);B.abh.CX._Init.call(
this.CX={Ac:this},0);B.Core.I4._Init.call(this.FU={Ac:this},0);B.Core.KP._Init.call(
this.Ft={Ac:this},0);B.Core.HL._Init.call(this.Dy={Ac:this},0);this.__proto__=C.
KL;this.Aj(Aw);this.A6.Aj(Lr);this.A6.De(0xFF161512);this.Cc.GM(0x18);this.Cc.Aj(
Ls);this.Cc.Pe(50);this.Cc.Ph(8);this.Cc.Pd(C.IZ);this.CX.Aj(Lt);this.CX.ET(0);this.
FU.Aj(Lu);this.Ft.Aj(Lv);this.Ft.Pl(H6);this.Dy.Fr(Lw);this.Dy.Fq(Lx);this.Dy.Fp(
Ly);this.Dy.Fo(P9);this.Dy.EX=0x3;this.AV(this.A6,0);this.AV(this.Cc,0);this.AV(
this.CX,0);this.AV(this.FU,0);this.AV(this.Ft,0);this.AV(this.Dy,0);this.Cc.ES=[
this,this.ES];this.Cc.Pk(this.Ft);this.CX.DU(B.zW(B.abg.IT));this.FU.Kx=[this,this.
OT];this.Dy.Ci=[this,this.OU];},_Done:function(){this.__proto__=B.Core.I;this.A6.
_Done();this.Cc._Done();this.CX._Done();this.FU._Done();this.Ft._Done();this.Dy.
_Done();B.Core.I._Done.call(this);},_ReInit:function(){B.Core.I._ReInit.call(this
);this.A6._ReInit();this.Cc._ReInit();this.CX._ReInit();this.FU._ReInit();this.Ft.
_ReInit();this.Dy._ReInit();},_Mark:function(D){var A;B.Core.I._Mark.call(this,D
);if((A=this.A6)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Cc)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.CX)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FU)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.Ft)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Dy
)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::QueueView"};C.D6={_class:
function(){return B.abg.V;},0:{FileName:"./res/ApplicationBackground.png",Format:
B.cC,NoOfFrames:1,FrameSize:[1280,720],FrameDelay:0,_this:null}};C.Kj={_class:function(
){return B.abg.V;},0:{FileName:"./res/ApplicationGenericVinyl.png",Format:B.cC,NoOfFrames:
1,FrameSize:[250,250],FrameDelay:0,_this:null}};C.By={_class:function(){return B.
abg.By;},0:{Data:function(){return B.abm;},Cache:[],_this:null}};C.HU={_class:function(
){return B.abg.By;},0:{Data:function(){return B.abn;},Cache:[],_this:null}};C.I2={
_class:function(){return B.abg.V;},0:{FileName:"./res/ApplicationThumb.png",Format:
B.cC,NoOfFrames:1,FrameSize:[26,27],FrameDelay:0,_this:null}};C.Fm={_Init:function(
){B.abi.Fm._Init.call(this,0);this.Py(true);this.Px(0);this.Pw(0);this.Ps(0);this.
Pv(0);this.Pu(0);this.Pt(0);this.Pp(B.zW(B.abi.Lg));this.Pr(B.zW(C.I2));this.Pq(
B.zW(C.I2));this.PS(0x93F5F5F5);this.PU(0x93F5F5F5);this.PT(0x93F5F5F5);this.PO(
0);this.PR(0);this.PQ(0);this.PP(0);this.PL(B.zW(B.abi.Hw));this.PN(B.zW(B.abi.Hw
));this.PM(B.zW(B.abi.Hs));this.PH(0xFFFFFFFF);this.PK(0xFFFFFFFF);this.PJ(0xFFFFFFFF
);this.PD(0);this.PG(0);this.PF(0);this.PE(0);this.PA(B.zW(B.abi.Hs));this.PC(B.
zW(B.abi.Hw));this.PB(B.zW(B.abi.Hs));},_variants:function(){return this;},_this:
null};C.DeviceClass={K2:GX,BK:H4,KS:B.jm,CurrentTime:0,Duration:0,EJ:-1,Et:0,Loop:
false,Dt:function(){var Q_=this;{}},Ch:function(aArg){B.ow([this,this.Ov],this);
},Pi:function(value){if(this.Et===value)return;this.Et=value;},OM:function(){return this.
Et;},Pz:function(value){if(this.K2===value)return;this.K2=value;},OW:function(value
){if(this.BK===value)return;this.BK=value;},Mu:function(aArg1){{return EmWiPlayer.
formatTime(aArg1);}return I5;},MF:function(value){if(this.CurrentTime===value)return;
this.CurrentTime=value;},MA:function(){return this.CurrentTime;},OnSetDuration:function(
value){if(this.Duration===value)return;this.Duration=value;},MB:function(){return this.
Duration;},Pg:function(value){if(this.Loop===value)return;this.Loop=value;},Po:function(
value){if(this.KS===value)return;this.KS=value;EmWiPlayer.setSource(value);},Play:
function(){EmWiPlayer.play();},Pause:function(){{EmWiPlayer.pause();}this.UpdatePlayerState(
2);},LoopTrack:function(){{EmWiPlayer.loop();}this.Pg(!this.Loop);},UpdatePlayerState:
function(DC){if(DC!==this.Et){this.Et=DC;B.aat([this,this.OM,this.Pi],0);}},UpdateCurrentTime:
function(DC){if(DC!==this.CurrentTime){B.aa8("%s%i%s%i",P_,this.CurrentTime,M2,DC
);this.CurrentTime=DC;B.aat([this,this.MA,this.MF],0);B.aas(123);}},UpdateTimeFromSlider:
function(aArg1){this.UpdateCurrentTime(aArg1);{EmWiPlayer.seeking(aArg1);}},UpdateDuration:
function(DC){if(DC!==this.Duration){B.aa8("%s%i%s%i",P$,this.Duration,M2,DC);this.
Duration=DC;B.aat([this,this.MB,this.OnSetDuration],0);B.aas(124);}},Ov:function(
Ag){var Q_=this;EmWiPlayer.initialize();this.HA(0);},HA:function(value){if(this.
EJ===value)return;this.EJ=value;this.Pz(this.Mt(this.EJ));this.OW(this.Mp(this.EJ
));this.Po(this.Ms(this.EJ));},Mt:function(aArg1){return SongList.getTitleByIndex(
aArg1);return B.jm;},Mp:function(aArg1){return SongList.getArtistByIndex(aArg1);
return B.jm;},Ms:function(aArg1){return SongList.getSongAtIndex(aArg1);return B.
jm;},Of:function(){if(!this.EJ)return false;return true;},Mj:function(){return!(
this.EJ===(this.Ot()-1));},Ot:function(){return SongList.getSizeOfList();return 1;
},_Init:function(aArg){B.abk.DeviceClass._Init.call(this,aArg);this.__proto__=C.
DeviceClass;this.Ch(aArg);},_Done:function(){this.Dt();this.__proto__=B.abk.DeviceClass;
B.abk.DeviceClass._Done.call(this);},_className:"Application::DeviceClass"};C.Device={
_Init:function(){C.DeviceClass._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Sv={RA:0,Sa:1,R8:2,Error:3,RM:4};C.GO={_class:function(){return B.
abg.V;},0:{FileName:"./res/ApplicationPlayIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[
120,111],FrameDelay:0,_this:null}};C.D$={_Init:function(){B.abi.D$._Init.call(this
,0);this.Pj(50);this.O$(0xFF59FF4D);this.Pc(0xFF353535);this.Pb(0xFFD6D6D6);this.
Pa(0xFFFF423D);this.Pf(B.zW(C.HU));this.O8(0xFF4CFF06);this.O_(0xFFFF52E2);this.
O9(0xFF33ADFF);this.O5(0);this.O7(0);this.O6(0);this.O2(B.zW(C.GO));this.O4(B.zW(
C.HH));this.O3(B.zW(C.HH));},_variants:function(){return this;},_this:null};C.KG={
_class:function(){return B.abg.V;},0:{FileName:"./res/ApplicationPauseIcon.png",
Format:B.cC,NoOfFrames:1,FrameSize:[115,120],FrameDelay:0,_this:null}};C.IP={_class:
function(){return B.abg.V;},0:{FileName:"./res/ApplicationLoopIcon.png",Format:B.
cC,NoOfFrames:1,FrameSize:[95,100],FrameDelay:0,_this:null}};C.HH={_class:function(
){return B.abg.V;},0:{FileName:"./res/ApplicationPausePressedIcon.png",Format:B.
cC,NoOfFrames:1,FrameSize:[115,120],FrameDelay:0,_this:null}};C.KH={_class:function(
){return B.abg.V;},0:{FileName:"./res/ApplicationPlayPressedIcon.png",Format:B.cC
,NoOfFrames:1,FrameSize:[120,111],FrameDelay:0,_this:null}};C.Ku={_class:function(
){return B.abg.V;},0:{FileName:"./res/ApplicationLoopPressedIcon.png",Format:B.cC
,NoOfFrames:1,FrameSize:[95,100],FrameDelay:0,_this:null}};C.DA={DW:null,D5:null
,Angle:0,P1:function(){var A;var QC=B.zT([0,0,(A=this.K)[2]-A[0],A[3]-A[1]]);this.
DW.P2(QC,-this.Angle,0.9,0.9);},OV:function(value){if(this.Angle===value)return;
this.Angle=value;},OJ:function(){return this.Angle;},P7:function(DC){if(DC!==this.
Angle){this.Angle=DC;B.aat([this,this.OJ,this.OV],0);}},OH:function(Ag){this.P7(
this.D5.Fy);this.P1();},_Init:function(aArg){B.Core.I._Init.call(this,aArg);B.abh.
Lh._Init.call(this.DW={Ac:this},0);B.abj.Kh._Init.call(this.D5={Ac:this},0);this.
__proto__=C.DA;this.Aj(Qa);this.DW.Fr(Qb);this.DW.Fq(Qc);this.DW.Fp(Qd);this.DW.
Fo(Qe);this.DW.Pn(Qf);this.D5.HB(7000);this.D5.BA=359;this.AV(this.DW,0);this.DW.
DU(B.zW(C.Kj));this.D5.Hx=[this,this.OH];},_Done:function(){this.__proto__=B.Core.
I;this.DW._Done();this.D5._Done();B.Core.I._Done.call(this);},_ReInit:function(){
B.Core.I._ReInit.call(this);this.DW._ReInit();this.D5._ReInit();},_Mark:function(
D){var A;B.Core.I._Mark.call(this,D);if((A=this.DW)._cycle!=D)A._Mark(A._cycle=D
);if((A=this.D5)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::VinylView"
};C.IZ={A6:null,BV:null,BK:null,KQ:B.jm,Fx:function(D1){var A;B.Core.I.Fx.call(this
,D1);if(((D1&0x20)===0x20))this.A6.De(0xFB9F786C);else this.A6.De(0xFB9F9B90);},
Pm:function(value){if(this.KQ===value)return;this.KQ=value;},_Init:function(aArg
){B.Core.I._Init.call(this,aArg);B.abh.A6._Init.call(this.A6={Ac:this},0);B.abh.
Text._Init.call(this.BV={Ac:this},0);B.abh.Text._Init.call(this.BK={Ac:this},0);
this.__proto__=C.IZ;this.Aj(Qg);this.A6.GM(0x10);this.A6.Aj(Qh);this.A6.OY(0xFFCDCDCD
);this.A6.OZ(0xFFCDCDCD);this.A6.De(0xFB9F9B90);this.BV.Aj(Qi);this.BV.GJ(0x11);
this.BV.Dx(Qj);this.BK.Aj(Qk);this.BK.GJ(0x12);this.BK.Dx(Ql);this.AV(this.A6,0);
this.AV(this.BV,0);this.AV(this.BK,0);this.BV.FZ(B.zW(C.By));this.BK.FZ(B.zW(B.abg.
Ki));},_Done:function(){this.__proto__=B.Core.I;this.A6._Done();this.BV._Done();
this.BK._Done();B.Core.I._Done.call(this);},_ReInit:function(){B.Core.I._ReInit.
call(this);this.A6._ReInit();this.BV._ReInit();this.BK._ReInit();},_Mark:function(
D){var A;B.Core.I._Mark.call(this,D);if((A=this.A6)._cycle!=D)A._Mark(A._cycle=D
);if((A=this.BV)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BK)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Application::QueueItem"};C.IY={_class:function(){return B.
abg.V;},0:{FileName:"./res/ApplicationPreviousIcon.png",Format:B.cC,NoOfFrames:1
,FrameSize:[120,106],FrameDelay:0,_this:null}};C.IU={_class:function(){return B.
abg.V;},0:{FileName:"./res/ApplicationNextIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[
120,121],FrameDelay:0,_this:null}};C.KK={_class:function(){return B.abg.V;},0:{FileName:
"./res/ApplicationPreviousPressedIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120
,106],FrameDelay:0,_this:null}};C.Kw={_class:function(){return B.abg.V;},0:{FileName:
"./res/ApplicationNextPressedIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120,121
],FrameDelay:0,_this:null}};C.KJ={_class:function(){return B.abg.V;},0:{FileName:
"./res/ApplicationPreviousDisabledIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[
120,106],FrameDelay:0,_this:null}};C.Kv={_class:function(){return B.abg.V;},0:{FileName:
"./res/ApplicationNextDisabledIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120,
121],FrameDelay:0,_this:null}};
C._Init=function(){C.Application.__proto__=B.Core.Root;C.PlayerDialog.__proto__=B.
Core.I;C.KL.__proto__=B.Core.I;C.DeviceClass.__proto__=B.abk.DeviceClass;C.DA.__proto__=
B.Core.I;C.IZ.__proto__=B.Core.I;};C._ReInit=function(){var A;if((A=C.Fm._this))
A._ReInit();if((A=C.Device._this))A._ReInit();if((A=C.D$._this))A._ReInit();};C.
CJ=function(D){var A;if((A=C.K1[0]._this)&&(A._cycle!=D))A._Done(C.K1[0]._this=null
);if((A=C.D6[0]._this)&&(A._cycle!=D))A._Done(C.D6[0]._this=null);if((A=C.Kj[0].
_this)&&(A._cycle!=D))A._Done(C.Kj[0]._this=null);if((A=C.By[0]._this)&&(A._cycle
!=D))A._Done(C.By[0]._this=null);if((A=C.HU[0]._this)&&(A._cycle!=D))A._Done(C.HU[
0]._this=null);if((A=C.I2[0]._this)&&(A._cycle!=D))A._Done(C.I2[0]._this=null);if((
A=C.Fm._this)&&(A._cycle!=D))A._Done(C.Fm._this=null);if((A=C.Device._this)&&(A.
_cycle!=D))A._Done(C.Device._this=null);if((A=C.GO[0]._this)&&(A._cycle!=D))A._Done(
C.GO[0]._this=null);if((A=C.D$._this)&&(A._cycle!=D))A._Done(C.D$._this=null);if((
A=C.KG[0]._this)&&(A._cycle!=D))A._Done(C.KG[0]._this=null);if((A=C.IP[0]._this)&&(
A._cycle!=D))A._Done(C.IP[0]._this=null);if((A=C.HH[0]._this)&&(A._cycle!=D))A._Done(
C.HH[0]._this=null);if((A=C.KH[0]._this)&&(A._cycle!=D))A._Done(C.KH[0]._this=null
);if((A=C.Ku[0]._this)&&(A._cycle!=D))A._Done(C.Ku[0]._this=null);if((A=C.IY[0].
_this)&&(A._cycle!=D))A._Done(C.IY[0]._this=null);if((A=C.IU[0]._this)&&(A._cycle
!=D))A._Done(C.IU[0]._this=null);if((A=C.KK[0]._this)&&(A._cycle!=D))A._Done(C.KK[
0]._this=null);if((A=C.Kw[0]._this)&&(A._cycle!=D))A._Done(C.Kw[0]._this=null);if((
A=C.KJ[0]._this)&&(A._cycle!=D))A._Done(C.KJ[0]._this=null);if((A=C.Kv[0]._this)&&(
A._cycle!=D))A._Done(C.Kv[0]._this=null);};return C;})();

/* Embedded Wizard */