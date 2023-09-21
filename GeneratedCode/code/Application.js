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
var Ea="The current value  of the slider is ";var EW=[0,0,800,489];var Ga=[117,387
,582,436];var Gb=[368,60,788,175];var GV="Title";var HX=[379,157,784,187];var HY=
"Artist";var K_=[57,395,118,425];var I0="0:00";var K$=[582,395,645,425];var La="10:59";
var HZ=[375,436,425,486];var Lb=[298,337,353,387];var Lc=[344,335,405,385];var Ld=[-
5,-1,474,349];var Le=[302,432,483,486];var Lf=[249,338,299,387];var Lg=[402,341,
452,386];var Lh=[-6,-10,808,480];var Li=[17,127,779,372];var Lj=[355,-2,405,48];
var Lk=[240,-2,517,40];var Ll=[18,126,781,370];var H0=[0,50];var Lm=[19,131];var
Ln=[782,130];var Lo=[784,370];var P0=[19,370];var P1="update CurrentTime from ";
var MT=" to ";var P2="update Duration from ";var P3=[0,0,464,355];var P4=[133,299
];var P5=[347,302];var P6=[346,77];var P7=[133,77];var P8=[125,125];var P9=[5,0,
790,50];var P_=[0,-5,791,49];var P$=[26,-1,523,49];var Qa="Acid Rain";var Qb=[446
,0,783,49];var Qc="Liquid Tension Experiment";
C.Application={A5:null,PlayerDialog:null,_Init:function(aArg){B.Core.Root._Init.call(
this,aArg);B.abh.A5._Init.call(this.A5={Ac:this},0);C.PlayerDialog._Init.call(this.
PlayerDialog={Ac:this},0);this.__proto__=C.Application;this.Aj(Aw);this.A5.Aj(Aw
);this.A5.Dc(0xFF000000);this.PlayerDialog.Aj(Bk);this.AU(this.A5,0);this.AU(this.
PlayerDialog,0);},_Done:function(){this.__proto__=B.Core.Root;this.A5._Done();this.
PlayerDialog._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root.
_ReInit.call(this);this.A5._ReInit();this.PlayerDialog._ReInit();},_Mark:function(
D){var A;B.Core.Root._Mark.call(this,D);if((A=this.A5)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.PlayerDialog)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::Application"
};C.KR={_class:function(){return B.abg.By;},0:{Data:function(){return B.abo;},Cache:[
],_this:null}};C.PlayerDialog={deviceRef:null,D4:null,B$:null,BT:null,BK:null,CurrentTime:
null,Duration:null,Fr:null,CH:null,Loop:null,Dy:null,F0:null,C1:null,C0:null,Cg:
function(aArg){var A;this.deviceRef=B._GetAutoObject(C.Device);B.za([this,this.Hy
],[A=this.deviceRef,A.Mp,A.Mu],0);B.za([this,this.Hy],[A=this.deviceRef,A.Mq,A.OnSetDuration
],0);B.y$([this,this.Hy],123);B.y$([this,this.Hy],124);B.ow([this,this.Hy],this);
},PM:function(Ah){this.deviceRef.UpdateTimeFromSlider(this.B$.Db());},OnLoop:function(
Ah){this.deviceRef.LoopTrack();if(B._GetAutoObject(C.Device).Loop)this.Loop.CG(B.
zW(C.Kn));else this.Loop.CG(B.zW(C.II));},Hy:function(Ah){this.Oe();if(this.B$.Cs
!==this.deviceRef.Duration){this.B$.MB(this.deviceRef.Duration);B.aa8("%s%i",Dl,
this.B$.Cs);}B.aa8("%s%i",Ea,this.B$.Db());this.B$.FX(this.deviceRef.CurrentTime
);this.Duration.Dv(this.deviceRef.Mj(this.deviceRef.Duration));this.CurrentTime.
Dv(this.deviceRef.Mj(this.deviceRef.CurrentTime));if(((this.B$.Db()===this.B$.Cs
)&&!!this.B$.Db())&&!B._GetAutoObject(C.Device).Loop){if(B._GetAutoObject(C.Device
).L$())this.Mr();else{B._GetAutoObject(C.Device).GJ(-1);this.Oz();}}this.BK.Dv(B.
_GetAutoObject(C.Device).BK);this.BT.Dv(B._GetAutoObject(C.Device).KS);},PO:function(
Ah){switch(B._GetAutoObject(C.Device).EQ){case 1:this.CH.CG(B.zW(C.HC));break;default:
this.CH.CG(B.zW(C.Kx));}},OH:function(Ah){switch(B._GetAutoObject(C.Device).EQ){
case 1:this.OG();break;case 2:this.GG();break;case 0:this.GG();break;case 5:{B._GetAutoObject(
C.Device).UpdateCurrentTime(0);this.GG();}break;default:this.GG();}},GG:function(
){var A;this.deviceRef.Play();this.Dy.D3.PW(this);this.CH.CG(B.zW(C.Kw));B._GetAutoObject(
C.Device).UpdatePlayerState(1);},OG:function(){var A;this.deviceRef.Pause();this.
Dy.D3.MP(this);this.CH.CG(B.zW(C.GM));B._GetAutoObject(C.Device).UpdatePlayerState(
2);},Oz:function(){var A;var Cu;(Cu=B._GetAutoObject(C.Device),Cu.GJ(Cu.Ep+1));this.
B$.FX(0);B._GetAutoObject(C.Device).UpdatePlayerState(5);this.CH.CG(B.zW(C.GM));
this.Dy.D3.MP(this);},OF:function(Ah){this.F.KJ(B._NewObject(C.KB,0),B._GetAutoObject(
B.abj.IW),null,null,null,null,null,null,null,null,false);},OI:function(Ah){var A;
var Cu;(Cu=B._GetAutoObject(C.Device),Cu.GJ(Cu.Ep-1));if(B._GetAutoObject(C.Device
).EQ===1)this.GG();},OE:function(Ah){this.Mr();},PP:function(Ah){this.C1.CG(B.zW(
C.KA));},Ow:function(Ah){this.C0.CG(B.zW(C.Kp));},Mr:function(){var A;var Cu;(Cu=
B._GetAutoObject(C.Device),Cu.GJ(Cu.Ep+1));if(B._GetAutoObject(C.Device).EQ===1)
this.GG();},Oa:function(){this.C1.A_(false);this.C1.CG(B.zW(C.Kz));},N$:function(
){this.C0.CG(B.zW(C.Ko));this.C0.A_(false);},Og:function(){this.C1.A_(true);this.
C1.CG(B.zW(C.IS));},Of:function(){this.C0.A_(true);this.C0.CG(B.zW(C.IN));},Oe:function(
){if(B._GetAutoObject(C.Device).N7())this.Og();else this.Oa();if(B._GetAutoObject(
C.Device).L$())this.Of();else this.N$();},_Init:function(aArg){B.Core.I._Init.call(
this,aArg);B.abh.CW._Init.call(this.D4={Ac:this},0);B.abi.Kd._Init.call(this.B$={
Ac:this},0);B.abh.Text._Init.call(this.BT={Ac:this},0);B.abh.Text._Init.call(this.
BK={Ac:this},0);B.abh.Text._Init.call(this.CurrentTime={Ac:this},0);B.abh.Text._Init.
call(this.Duration={Ac:this},0);B.abh.CW._Init.call(this.Fr={Ac:this},0);B.abi.GO.
_Init.call(this.CH={Ac:this},0);B.abi.GO._Init.call(this.Loop={Ac:this},0);C.Dy.
_Init.call(this.Dy={Ac:this},0);B.Core.IZ._Init.call(this.F0={Ac:this},0);B.abi.
GO._Init.call(this.C1={Ac:this},0);B.abi.GO._Init.call(this.C0={Ac:this},0);this.
__proto__=C.PlayerDialog;this.Aj(Aw);this.D4.Aj(EW);this.B$.Aj(Ga);this.B$.MB(100
);this.B$.FX(0);this.BT.Aj(Gb);this.BT.ON(false);this.BT.ML(true);this.BT.Dv(GV);
this.BK.Aj(HX);this.BK.Dv(HY);this.CurrentTime.Aj(K_);this.CurrentTime.Dv(I0);this.
Duration.Aj(K$);this.Duration.Dv(La);this.Fr.Aj(HZ);this.Fr.EP(1);this.CH.Aj(Lb);
this.CH.Er(true);this.CH.IP(B.jm);this.Loop.Aj(Lc);this.Loop.IP(B.jm);this.Dy.Aj(
Ld);this.F0.Aj(Le);this.C1.Aj(Lf);this.C1.IP(B.jm);this.C0.Aj(Lg);this.C0.IP(B.jm
);this.AU(this.D4,0);this.AU(this.B$,0);this.AU(this.BT,0);this.AU(this.BK,0);this.
AU(this.CurrentTime,0);this.AU(this.Duration,0);this.AU(this.Fr,0);this.AU(this.
CH,0);this.AU(this.Loop,0);this.AU(this.Dy,0);this.AU(this.F0,0);this.AU(this.C1
,0);this.AU(this.C0,0);this.D4.DS(B.zW(C.D4));this.B$.GE=[this,this.PM];this.B$.
GI(B._GetAutoObject(C.Fj));this.BT.FY(B.zW(C.KR));this.BK.FY(B.zW(C.By));this.CurrentTime.
FY(B.zW(C.HO));this.Duration.FY(B.zW(C.HO));this.Fr.DS(B.zW(B.abg.IM));this.CH.Ch=[
this,this.OH];this.CH.CE=[this,this.PO];this.CH.CG(B.zW(C.GM));this.CH.GI(B._GetAutoObject(
C.D9));this.Loop.Ch=[this,this.OnLoop];this.Loop.CG(B.zW(C.II));this.Loop.GI(B._GetAutoObject(
C.D9));this.F0.Kv=[this,this.OF];this.C1.Ch=[this,this.OI];this.C1.CE=[this,this.
PP];this.C1.CG(B.zW(C.IS));this.C1.GI(B._GetAutoObject(C.D9));this.C0.Ch=[this,this.
OE];this.C0.CE=[this,this.Ow];this.C0.CG(B.zW(C.IN));this.C0.GI(B._GetAutoObject(
C.D9));this.Cg(aArg);},_Done:function(){this.__proto__=B.Core.I;this.D4._Done();
this.B$._Done();this.BT._Done();this.BK._Done();this.CurrentTime._Done();this.Duration.
_Done();this.Fr._Done();this.CH._Done();this.Loop._Done();this.Dy._Done();this.F0.
_Done();this.C1._Done();this.C0._Done();B.Core.I._Done.call(this);},_ReInit:function(
){B.Core.I._ReInit.call(this);this.D4._ReInit();this.B$._ReInit();this.BT._ReInit(
);this.BK._ReInit();this.CurrentTime._ReInit();this.Duration._ReInit();this.Fr._ReInit(
);this.CH._ReInit();this.Loop._ReInit();this.Dy._ReInit();this.F0._ReInit();this.
C1._ReInit();this.C0._ReInit();},_Mark:function(D){var A;B.Core.I._Mark.call(this
,D);if((A=this.deviceRef)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D4)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.B$)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
BT)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BK)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.CurrentTime)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Duration)._cycle!=D
)A._Mark(A._cycle=D);if((A=this.Fr)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CH).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Loop)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.Dy)._cycle!=D)A._Mark(A._cycle=D);if((A=this.F0)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.C1)._cycle!=D)A._Mark(A._cycle=D);if((A=this.C0)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Application::PlayerDialog"};C.KB={A5:null,Ct:null,CW:null
,FS:null,Fp:null,Dw:null,EO:function(Ah){var A;var FB=this.Ct.EM;var Gn=(C.IT.isPrototypeOf(
A=this.Ct.Ax)?A:null);if(!Gn)return;Gn.BT.Dv(B._GetAutoObject(C.Device).Mi(FB));
Gn.BK.Dv(B._GetAutoObject(C.Device).Mf(FB));Gn.Pd(B._GetAutoObject(C.Device).Mh(
FB));if(Gn.KG===B._GetAutoObject(C.Device).KI)this.Ct.MH(FB);Gn.Aj(B.aaN(Gn.K,this.
Ct.GR));},OJ:function(Ah){this.F.Md(this,B._GetAutoObject(B.abj.IU),null,null,null
,null,false);},OK:function(Ah){if(this.Dw.BY)return;var FB=this.Ct.Oh(this.Dw.Bs
);if(FB>=0){this.Ct.MH(FB);B._GetAutoObject(C.Device).GJ(FB);}},_Init:function(aArg
){B.Core.I._Init.call(this,aArg);B.abh.A5._Init.call(this.A5={Ac:this},0);B.Core.
K7._Init.call(this.Ct={Ac:this},0);B.abh.CW._Init.call(this.CW={Ac:this},0);B.Core.
IZ._Init.call(this.FS={Ac:this},0);B.Core.KF._Init.call(this.Fp={Ac:this},0);B.Core.
HG._Init.call(this.Dw={Ac:this},0);this.__proto__=C.KB;this.Aj(Aw);this.A5.Aj(Lh
);this.A5.Dc(0xFF161512);this.Ct.GK(0x18);this.Ct.Aj(Li);this.Ct.O6(50);this.Ct.
O9(8);this.Ct.O5(C.IT);this.CW.Aj(Lj);this.CW.EP(0);this.FS.Aj(Lk);this.Fp.Aj(Ll
);this.Fp.Pc(H0);this.Dw.Fo(Lm);this.Dw.Fn(Ln);this.Dw.Fm(Lo);this.Dw.Fl(P0);this.
Dw.EU=0x3;this.AU(this.A5,0);this.AU(this.Ct,0);this.AU(this.CW,0);this.AU(this.
FS,0);this.AU(this.Fp,0);this.AU(this.Dw,0);this.Ct.EO=[this,this.EO];this.Ct.Pb(
this.Fp);this.CW.DS(B.zW(B.abg.IM));this.FS.Kq=[this,this.OJ];this.Dw.Ch=[this,this.
OK];},_Done:function(){this.__proto__=B.Core.I;this.A5._Done();this.Ct._Done();this.
CW._Done();this.FS._Done();this.Fp._Done();this.Dw._Done();B.Core.I._Done.call(this
);},_ReInit:function(){B.Core.I._ReInit.call(this);this.A5._ReInit();this.Ct._ReInit(
);this.CW._ReInit();this.FS._ReInit();this.Fp._ReInit();this.Dw._ReInit();},_Mark:
function(D){var A;B.Core.I._Mark.call(this,D);if((A=this.A5)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.Ct)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CW)._cycle!=D)
A._Mark(A._cycle=D);if((A=this.FS)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Fp).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Dw)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Application::QueueView"};C.D4={_class:function(){return B.abg.U;},0:{FileName:"./res/ApplicationBackground.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[1280,720],FrameDelay:0,_this:null}};C.Kc={_class:
function(){return B.abg.U;},0:{FileName:"./res/ApplicationGenericVinyl.png",Format:
B.cC,NoOfFrames:1,FrameSize:[250,250],FrameDelay:0,_this:null}};C.By={_class:function(
){return B.abg.By;},0:{Data:function(){return B.abm;},Cache:[],_this:null}};C.HO={
_class:function(){return B.abg.By;},0:{Data:function(){return B.abn;},Cache:[],_this:
null}};C.IX={_class:function(){return B.abg.U;},0:{FileName:"./res/ApplicationThumb.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[26,27],FrameDelay:0,_this:null}};C.Fj={_Init:
function(){B.abi.Fj._Init.call(this,0);this.Pp(true);this.Po(0);this.Pn(0);this.
Pj(0);this.Pm(0);this.Pl(0);this.Pk(0);this.Pg(B.zW(B.abi.K8));this.Pi(B.zW(C.IX
));this.Ph(B.zW(C.IX));this.PJ(0x93F5F5F5);this.PL(0x93F5F5F5);this.PK(0x93F5F5F5
);this.PE(0);this.PH(0);this.PG(0);this.PF(0);this.PB(B.zW(B.abi.Hs));this.PD(B.
zW(B.abi.Hs));this.PC(B.zW(B.abi.Ho));this.Py(0xFFFFFFFF);this.PA(0xFFFFFFFF);this.
Pz(0xFFFFFFFF);this.Pu(0);this.Px(0);this.Pw(0);this.Pv(0);this.Pr(B.zW(B.abi.Ho
));this.Pt(B.zW(B.abi.Hs));this.Ps(B.zW(B.abi.Ho));},_variants:function(){return this;
},_this:null};C.DeviceClass={KS:GV,BK:HY,KI:B.jm,CurrentTime:0,Duration:0,Ep:-1,
EQ:0,Loop:false,Dr:function(){var Q0=this;{}},Cg:function(aArg){B.ow([this,this.
Om],this);},O_:function(value){if(this.EQ===value)return;this.EQ=value;},OD:function(
){return this.EQ;},Pq:function(value){if(this.KS===value)return;this.KS=value;},
OM:function(value){if(this.BK===value)return;this.BK=value;},Mj:function(aArg1){{
return EmWiPlayer.formatTime(aArg1);}return I0;},Mu:function(value){if(this.CurrentTime===
value)return;this.CurrentTime=value;},Mp:function(){return this.CurrentTime;},OnSetDuration:
function(value){if(this.Duration===value)return;this.Duration=value;},Mq:function(
){return this.Duration;},O8:function(value){if(this.Loop===value)return;this.Loop=
value;},Pf:function(value){if(this.KI===value)return;this.KI=value;EmWiPlayer.setSource(
value);},Play:function(){EmWiPlayer.play();},Pause:function(){{EmWiPlayer.pause(
);}this.UpdatePlayerState(2);},LoopTrack:function(){{EmWiPlayer.loop();}this.O8(
!this.Loop);},UpdatePlayerState:function(DA){if(DA!==this.EQ){this.EQ=DA;B.aat([
this,this.OD,this.O_],0);}},UpdateCurrentTime:function(DA){if(DA!==this.CurrentTime
){B.aa8("%s%i%s%i",P1,this.CurrentTime,MT,DA);this.CurrentTime=DA;B.aat([this,this.
Mp,this.Mu],0);B.aas(123);}},UpdateTimeFromSlider:function(aArg1){this.UpdateCurrentTime(
aArg1);{EmWiPlayer.seeking(aArg1);}},UpdateDuration:function(DA){if(DA!==this.Duration
){B.aa8("%s%i%s%i",P2,this.Duration,MT,DA);this.Duration=DA;B.aat([this,this.Mq,
this.OnSetDuration],0);B.aas(124);}},Om:function(Ah){var Q0=this;EmWiPlayer.initialize(
);this.GJ(0);},GJ:function(value){if(this.Ep===value)return;this.Ep=value;this.Pq(
this.Mi(this.Ep));this.OM(this.Mf(this.Ep));this.Pf(this.Mh(this.Ep));},Mi:function(
aArg1){return SongList.getTitleByIndex(aArg1);return B.jm;},Mf:function(aArg1){return SongList.
getArtistByIndex(aArg1);return B.jm;},Mh:function(aArg1){return SongList.getSongAtIndex(
aArg1);return B.jm;},N7:function(){if(!this.Ep)return false;return true;},L$:function(
){return!(this.Ep===(this.Oj()-1));},Oj:function(){return SongList.getSizeOfList(
);return 1;},_Init:function(aArg){B.abk.DeviceClass._Init.call(this,aArg);this.__proto__=
C.DeviceClass;this.Cg(aArg);},_Done:function(){this.Dr();this.__proto__=B.abk.DeviceClass;
B.abk.DeviceClass._Done.call(this);},_className:"Application::DeviceClass"};C.Device={
_Init:function(){C.DeviceClass._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Sm={Rq:0,R2:1,RY:2,Sh:3,Error:4,RC:5};C.GM={_class:function(){return B.
abg.U;},0:{FileName:"./res/ApplicationPlayIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[
120,111],FrameDelay:0,_this:null}};C.D9={_Init:function(){B.abi.D9._Init.call(this
,0);this.O$(50);this.O1(0xFF59FF4D);this.O4(0xFF353535);this.O3(0xFFD6D6D6);this.
O2(0xFFFF423D);this.O7(B.zW(C.HO));this.OY(0xFF4CFF06);this.O0(0xFFFF52E2);this.
OZ(0xFF33ADFF);this.OV(0);this.OX(0);this.OW(0);this.OS(B.zW(C.GM));this.OU(B.zW(
C.HC));this.OT(B.zW(C.HC));},_variants:function(){return this;},_this:null};C.Kw={
_class:function(){return B.abg.U;},0:{FileName:"./res/ApplicationPauseIcon.png",
Format:B.cC,NoOfFrames:1,FrameSize:[115,120],FrameDelay:0,_this:null}};C.II={_class:
function(){return B.abg.U;},0:{FileName:"./res/ApplicationLoopIcon.png",Format:B.
cC,NoOfFrames:1,FrameSize:[95,100],FrameDelay:0,_this:null}};C.HC={_class:function(
){return B.abg.U;},0:{FileName:"./res/ApplicationPausePressedIcon.png",Format:B.
cC,NoOfFrames:1,FrameSize:[115,120],FrameDelay:0,_this:null}};C.Kx={_class:function(
){return B.abg.U;},0:{FileName:"./res/ApplicationPlayPressedIcon.png",Format:B.cC
,NoOfFrames:1,FrameSize:[120,111],FrameDelay:0,_this:null}};C.Kn={_class:function(
){return B.abg.U;},0:{FileName:"./res/ApplicationLoopPressedIcon.png",Format:B.cC
,NoOfFrames:1,FrameSize:[95,100],FrameDelay:0,_this:null}};C.Dy={DU:null,D3:null
,Angle:0,PS:function(){var A;var Qt=B.zT([0,0,(A=this.K)[2]-A[0],A[3]-A[1]]);this.
DU.PT(Qt,-this.Angle,0.9,0.9);},OL:function(value){if(this.Angle===value)return;
this.Angle=value;},OA:function(){return this.Angle;},PY:function(DA){if(DA!==this.
Angle){this.Angle=DA;B.aat([this,this.OA,this.OL],0);}},Oy:function(Ah){this.PY(
this.D3.Fu);this.PS();},_Init:function(aArg){B.Core.I._Init.call(this,aArg);B.abh.
K9._Init.call(this.DU={Ac:this},0);B.abj.Ka._Init.call(this.D3={Ac:this},0);this.
__proto__=C.Dy;this.Aj(P3);this.DU.Fo(P4);this.DU.Fn(P5);this.DU.Fm(P6);this.DU.
Fl(P7);this.DU.Pe(P8);this.D3.Hw(7000);this.D3.BF=359;this.AU(this.DU,0);this.DU.
DS(B.zW(C.Kc));this.D3.Ht=[this,this.Oy];},_Done:function(){this.__proto__=B.Core.
I;this.DU._Done();this.D3._Done();B.Core.I._Done.call(this);},_ReInit:function(){
B.Core.I._ReInit.call(this);this.DU._ReInit();this.D3._ReInit();},_Mark:function(
D){var A;B.Core.I._Mark.call(this,D);if((A=this.DU)._cycle!=D)A._Mark(A._cycle=D
);if((A=this.D3)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::VinylView"
};C.IT={A5:null,BT:null,BK:null,KG:B.jm,Ft:function(DZ){var A;B.Core.I.Ft.call(this
,DZ);if(((DZ&0x20)===0x20))this.A5.Dc(0xFB9F786C);else this.A5.Dc(0xFB9F9B90);},
Pd:function(value){if(this.KG===value)return;this.KG=value;},_Init:function(aArg
){B.Core.I._Init.call(this,aArg);B.abh.A5._Init.call(this.A5={Ac:this},0);B.abh.
Text._Init.call(this.BT={Ac:this},0);B.abh.Text._Init.call(this.BK={Ac:this},0);
this.__proto__=C.IT;this.Aj(P9);this.A5.GK(0x10);this.A5.Aj(P_);this.A5.OO(0xFFCDCDCD
);this.A5.OP(0xFFCDCDCD);this.A5.Dc(0xFB9F9B90);this.BT.Aj(P$);this.BT.GH(0x11);
this.BT.Dv(Qa);this.BK.Aj(Qb);this.BK.GH(0x12);this.BK.Dv(Qc);this.AU(this.A5,0);
this.AU(this.BT,0);this.AU(this.BK,0);this.BT.FY(B.zW(C.By));this.BK.FY(B.zW(B.abg.
Kb));},_Done:function(){this.__proto__=B.Core.I;this.A5._Done();this.BT._Done();
this.BK._Done();B.Core.I._Done.call(this);},_ReInit:function(){B.Core.I._ReInit.
call(this);this.A5._ReInit();this.BT._ReInit();this.BK._ReInit();},_Mark:function(
D){var A;B.Core.I._Mark.call(this,D);if((A=this.A5)._cycle!=D)A._Mark(A._cycle=D
);if((A=this.BT)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BK)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Application::QueueItem"};C.IS={_class:function(){return B.
abg.U;},0:{FileName:"./res/ApplicationPreviousIcon.png",Format:B.cC,NoOfFrames:1
,FrameSize:[120,106],FrameDelay:0,_this:null}};C.IN={_class:function(){return B.
abg.U;},0:{FileName:"./res/ApplicationNextIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[
120,121],FrameDelay:0,_this:null}};C.KA={_class:function(){return B.abg.U;},0:{FileName:
"./res/ApplicationPreviousPressedIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120
,106],FrameDelay:0,_this:null}};C.Kp={_class:function(){return B.abg.U;},0:{FileName:
"./res/ApplicationNextPressedIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120,121
],FrameDelay:0,_this:null}};C.Kz={_class:function(){return B.abg.U;},0:{FileName:
"./res/ApplicationPreviousDisabledIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[
120,106],FrameDelay:0,_this:null}};C.Ko={_class:function(){return B.abg.U;},0:{FileName:
"./res/ApplicationNextDisabledIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120,
121],FrameDelay:0,_this:null}};
C._Init=function(){C.Application.__proto__=B.Core.Root;C.PlayerDialog.__proto__=B.
Core.I;C.KB.__proto__=B.Core.I;C.DeviceClass.__proto__=B.abk.DeviceClass;C.Dy.__proto__=
B.Core.I;C.IT.__proto__=B.Core.I;};C._ReInit=function(){var A;if((A=C.Fj._this))
A._ReInit();if((A=C.Device._this))A._ReInit();if((A=C.D9._this))A._ReInit();};C.
CI=function(D){var A;if((A=C.KR[0]._this)&&(A._cycle!=D))A._Done(C.KR[0]._this=null
);if((A=C.D4[0]._this)&&(A._cycle!=D))A._Done(C.D4[0]._this=null);if((A=C.Kc[0].
_this)&&(A._cycle!=D))A._Done(C.Kc[0]._this=null);if((A=C.By[0]._this)&&(A._cycle
!=D))A._Done(C.By[0]._this=null);if((A=C.HO[0]._this)&&(A._cycle!=D))A._Done(C.HO[
0]._this=null);if((A=C.IX[0]._this)&&(A._cycle!=D))A._Done(C.IX[0]._this=null);if((
A=C.Fj._this)&&(A._cycle!=D))A._Done(C.Fj._this=null);if((A=C.Device._this)&&(A.
_cycle!=D))A._Done(C.Device._this=null);if((A=C.GM[0]._this)&&(A._cycle!=D))A._Done(
C.GM[0]._this=null);if((A=C.D9._this)&&(A._cycle!=D))A._Done(C.D9._this=null);if((
A=C.Kw[0]._this)&&(A._cycle!=D))A._Done(C.Kw[0]._this=null);if((A=C.II[0]._this)&&(
A._cycle!=D))A._Done(C.II[0]._this=null);if((A=C.HC[0]._this)&&(A._cycle!=D))A._Done(
C.HC[0]._this=null);if((A=C.Kx[0]._this)&&(A._cycle!=D))A._Done(C.Kx[0]._this=null
);if((A=C.Kn[0]._this)&&(A._cycle!=D))A._Done(C.Kn[0]._this=null);if((A=C.IS[0].
_this)&&(A._cycle!=D))A._Done(C.IS[0]._this=null);if((A=C.IN[0]._this)&&(A._cycle
!=D))A._Done(C.IN[0]._this=null);if((A=C.KA[0]._this)&&(A._cycle!=D))A._Done(C.KA[
0]._this=null);if((A=C.Kp[0]._this)&&(A._cycle!=D))A._Done(C.Kp[0]._this=null);if((
A=C.Kz[0]._this)&&(A._cycle!=D))A._Done(C.Kz[0]._this=null);if((A=C.Ko[0]._this)&&(
A._cycle!=D))A._Done(C.Ko[0]._this=null);};return C;})();

/* Embedded Wizard */