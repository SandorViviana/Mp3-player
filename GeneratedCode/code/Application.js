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
);EmWiApp.Application=(function(){var B=EmWiApp;var D={};
var Ap=[0,0,800,480];var AN=[0,0,801,480];var Cc="The maximum value of the slider is ";
var C6="The current value  of the slider is ";var C7=[0,0,800,489];var Dr=[117,66
,434,333];var Ds=[117,387,582,436];var EK=[499,99,645,158];var EL="Title";var EM=[
521,156,621,186];var GM="Artist";var GN=[57,395,118,425];var HB="0:00";var Je=[582
,395,645,425];var Jf="10:59";var Jg=[375,436,425,486];var Jh=[369,0,419,66];var Ji=[
281,337,369,387];var Jj=[229,331,309,393];var Jk=[340,337,410,387];var Jl="update CurrentTime from ";
var HC=" to ";var Jm="update Duration from ";
D.Application={Cm:null,PlayerDialog:null,_Init:function(aArg){B.Core.Root._Init.call(
this,aArg);B.abh.Cm._Init.call(this.Cm={Ak:this},0);D.PlayerDialog._Init.call(this.
PlayerDialog={Ak:this},0);this.__proto__=D.Application;this.An(Ap);this.Cm.An(Ap
);this.Cm.Cl(0xFF000000);this.PlayerDialog.An(AN);this.AY(this.Cm,0);this.AY(this.
PlayerDialog,0);},_Done:function(){this.__proto__=B.Core.Root;this.Cm._Done();this.
PlayerDialog._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root.
_ReInit.call(this);this.Cm._ReInit();this.PlayerDialog._ReInit();},_Mark:function(
E){var A;B.Core.Root._Mark.call(this,E);if((A=this.Cm)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.PlayerDialog)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::Application"
};D.Gv={_class:function(){return B.abg.AT;},0:{Data:function(){return B.abo;},Cache:[
],_this:null}};D.PlayerDialog={deviceRef:null,Ci:null,Dp:null,Bw:null,C4:null,C0:
null,CurrentTime:null,Duration:null,Do:null,C5:null,Pause:null,Play:null,BK:null
,Bd:function(aArg){var A;this.deviceRef=B._GetAutoObject(D.Device);B.za([this,this.
Er],[A=this.deviceRef,A.Ho,A.Hq],0);B.za([this,this.Er],[A=this.deviceRef,A.Hp,A.
OnSetDuration],0);B.y$([this,this.Er],123);B.y$([this,this.Er],124);B.ow([this,this.
Er],this);},I$:function(Ax){this.deviceRef.UpdateTimeFromSlider(this.Bw.B2());},
OnPlay:function(Ax){this.deviceRef.Play();},OnPause:function(Ax){this.deviceRef.
Pause();},OnLoop:function(Ax){this.deviceRef.LoopTrack();},Er:function(Ax){if(this.
Bw.Bt!==this.deviceRef.Duration){this.Bw.Hv(this.deviceRef.Duration);B.aa8("%s%i"
,Cc,this.Bw.Bt);}B.aa8("%s%i",C6,this.Bw.B2());this.Bw.DS(this.deviceRef.CurrentTime
);this.Duration.Dn(this.deviceRef.Hm(this.deviceRef.Duration));this.CurrentTime.
Dn(this.deviceRef.Hm(this.deviceRef.CurrentTime));},_Init:function(aArg){B.Core.
Am._Init.call(this,aArg);B.abh.C2._Init.call(this.Ci={Ak:this},0);B.abh.C2._Init.
call(this.Dp={Ak:this},0);B.abi.Gd._Init.call(this.Bw={Ak:this},0);B.abh.Text._Init.
call(this.C4={Ak:this},0);B.abh.Text._Init.call(this.C0={Ak:this},0);B.abh.Text.
_Init.call(this.CurrentTime={Ak:this},0);B.abh.Text._Init.call(this.Duration={Ak:
this},0);B.abh.C2._Init.call(this.Do={Ak:this},0);B.abh.C2._Init.call(this.C5={Ak:
this},0);B.abi.BK._Init.call(this.Pause={Ak:this},0);B.abi.BK._Init.call(this.Play={
Ak:this},0);B.abi.BK._Init.call(this.BK={Ak:this},0);this.__proto__=D.PlayerDialog;
this.An(Ap);this.Ci.An(C7);this.Dp.An(Dr);this.Bw.An(Ds);this.Bw.Hv(100);this.Bw.
DS(0);this.C4.An(EK);this.C4.Dn(EL);this.C0.An(EM);this.C0.Dn(GM);this.CurrentTime.
An(GN);this.CurrentTime.Dn(HB);this.Duration.An(Je);this.Duration.Dn(Jf);this.Do.
An(Jg);this.C5.An(Jh);this.C5.IE(2);this.Pause.An(Ji);this.Pause.Fu(true);this.Pause.
Gm(B.jm);this.Play.An(Jj);this.Play.Iz(0);this.Play.IB(0);this.Play.IA(0);this.Play.
Gm(B.jm);this.BK.An(Jk);this.BK.Gm(B.jm);this.AY(this.Ci,0);this.AY(this.Dp,0);this.
AY(this.Bw,0);this.AY(this.C4,0);this.AY(this.C0,0);this.AY(this.CurrentTime,0);
this.AY(this.Duration,0);this.AY(this.Do,0);this.AY(this.C5,0);this.AY(this.Pause
,0);this.AY(this.Play,0);this.AY(this.BK,0);this.Ci.Ck(B.zW(D.Ci));this.Dp.Ck(B.
zW(D.Gb));this.Bw.DR=[this,this.OnLoop];this.Bw.Fo=[this,this.I$];this.Bw.En(B._GetAutoObject(
D.C1));this.C4.Ep(B.zW(D.Gv));this.C0.Ep(B.zW(D.AT));this.CurrentTime.Ep(B.zW(D.
EC));this.Duration.Ep(B.zW(D.EC));this.Do.Ck(B.zW(B.abg.Fn));this.C5.Ck(B.zW(B.abg.
Fn));this.Pause.Bu=[this,this.OnPause];this.Pause.Gl(B.zW(D.Gn));this.Pause.En(B.
_GetAutoObject(D.Cz));this.Play.Bu=[this,this.OnPlay];this.Play.Gl(B.zW(D.DU));this.
Play.En(B._GetAutoObject(D.Cz));this.BK.Bu=[this,this.OnLoop];this.BK.Gl(B.zW(D.
Gg));this.BK.En(B._GetAutoObject(D.Cz));this.Bd(aArg);},_Done:function(){this.__proto__=
B.Core.Am;this.Ci._Done();this.Dp._Done();this.Bw._Done();this.C4._Done();this.C0.
_Done();this.CurrentTime._Done();this.Duration._Done();this.Do._Done();this.C5._Done(
);this.Pause._Done();this.Play._Done();this.BK._Done();B.Core.Am._Done.call(this
);},_ReInit:function(){B.Core.Am._ReInit.call(this);this.Ci._ReInit();this.Dp._ReInit(
);this.Bw._ReInit();this.C4._ReInit();this.C0._ReInit();this.CurrentTime._ReInit(
);this.Duration._ReInit();this.Do._ReInit();this.C5._ReInit();this.Pause._ReInit(
);this.Play._ReInit();this.BK._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.
call(this,E);if((A=this.deviceRef)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Ci)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dp)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Bw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C4)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.C0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CurrentTime)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Duration)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Do)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C5)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Pause)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Play)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.BK)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::PlayerDialog"
};D.Ci={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationBackground.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[1280,720],FrameDelay:0,_this:null}};D.Gb={_class:
function(){return B.abg.T;},0:{FileName:"./res/ApplicationGenericVinyl.png",Format:
B.cC,NoOfFrames:1,FrameSize:[250,250],FrameDelay:0,_this:null}};D.AT={_class:function(
){return B.abg.AT;},0:{Data:function(){return B.abm;},Cache:[],_this:null}};D.EC={
_class:function(){return B.abg.AT;},0:{Data:function(){return B.abn;},Cache:[],_this:
null}};D.Fw={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationThumb.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[70,70],FrameDelay:0,_this:null}};D.C1={_Init:
function(){B.abi.C1._Init.call(this,0);this.IP(true);this.IO(0);this.IN(0);this.
IJ(0);this.IM(0);this.IL(0);this.IK(0);this.IG(B.zW(B.abi.GK));this.II(B.zW(D.Fw
));this.IH(B.zW(D.Fw));this.I7(0x93F5F5F5);this.I9(0x93F5F5F5);this.I8(0x93F5F5F5
);this.I3(0);this.I6(0);this.I5(0);this.I4(0);this.I0(B.zW(B.abi.Em));this.I2(B.
zW(B.abi.Em));this.I1(B.zW(B.abi.Ei));this.IX(0xFFFFFFFF);this.IZ(0xFFFFFFFF);this.
IY(0xFFFFFFFF);this.IT(0);this.IW(0);this.IV(0);this.IU(0);this.IQ(B.zW(B.abi.Ei
));this.IS(B.zW(B.abi.Em));this.IR(B.zW(B.abi.Ei));},_variants:function(){return this;
},_this:null};D.DeviceClass={CurrentTime:0,Duration:0,Ev:0,Loop:false,B0:function(
){var JJ=this;{}},Bd:function(aArg){B.ow([this,this.In],this);},IF:function(C){if(
this.Ev===C)return;this.Ev=C;},Iq:function(){return this.Ev;},Hm:function(aArg1){{
return EmWiPlayer.formatTime(aArg1);}return HB;},Hq:function(C){if(this.CurrentTime===
C)return;this.CurrentTime=C;},Ho:function(){return this.CurrentTime;},OnSetDuration:
function(C){if(this.Duration===C)return;this.Duration=C;},Hp:function(){return this.
Duration;},ID:function(C){if(this.Loop===C)return;this.Loop=C;},Play:function(){
EmWiPlayer.play();},Pause:function(){{EmWiPlayer.pause();}this.UpdatePlayerState(
2);},LoopTrack:function(){{EmWiPlayer.loop();}this.ID(!this.Loop);},UpdatePlayerState:
function(CA){if(CA!==this.Ev){this.Ev=CA;B.aat([this,this.Iq,this.IF],0);}},UpdateCurrentTime:
function(CA){if(CA!==this.CurrentTime){B.aa8("%s%i%s%i",Jl,this.CurrentTime,HC,CA
);this.CurrentTime=CA;B.aat([this,this.Ho,this.Hq],0);B.aas(123);}},UpdateTimeFromSlider:
function(aArg1){this.UpdateCurrentTime(aArg1);{EmWiPlayer.seeking(aArg1);}},UpdateDuration:
function(CA){if(CA!==this.Duration){B.aa8("%s%i%s%i",Jm,this.Duration,HC,CA);this.
Duration=CA;B.aat([this,this.Hp,this.OnSetDuration],0);B.aas(124);}},In:function(
Ax){var JJ=this;EmWiPlayer.initialize();},_Init:function(aArg){B.abj.DeviceClass.
_Init.call(this,aArg);this.__proto__=D.DeviceClass;this.Bd(aArg);},_Done:function(
){this.B0();this.__proto__=B.abj.DeviceClass;B.abj.DeviceClass._Done.call(this);
},_className:"Application::DeviceClass"};D.Device={_Init:function(){D.DeviceClass.
_Init.call(this,0);},_variants:function(){return this;},_this:null};D.KA={JZ:0,Kk:
1,Kg:2,Ky:3,Error:4,J2:5};D.DU={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationPlayIcon.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[120,111],FrameDelay:0,_this:null}};D.Cz={_Init:
function(){B.abi.Cz._Init.call(this,0);this.IC(B.zW(D.EC));this.Iw(0);this.Iy(0);
this.Ix(0);this.It(B.zW(D.DU));this.Iv(B.zW(D.DU));this.Iu(B.zW(D.DU));},_variants:
function(){return this;},_this:null};D.Gn={_class:function(){return B.abg.T;},0:{
FileName:"./res/ApplicationPauseIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[120
,120],FrameDelay:0,_this:null}};D.Gg={_class:function(){return B.abg.T;},0:{FileName:
"./res/ApplicationLoopIcon.png",Format:B.cC,NoOfFrames:1,FrameSize:[112,120],FrameDelay:
0,_this:null}};
D._Init=function(){D.Application.__proto__=B.Core.Root;D.PlayerDialog.__proto__=B.
Core.Am;D.DeviceClass.__proto__=B.abj.DeviceClass;};D._ReInit=function(){var A;if((
A=D.C1._this))A._ReInit();if((A=D.Device._this))A._ReInit();if((A=D.Cz._this))A.
_ReInit();};D.Bx=function(E){var A;if((A=D.Gv[0]._this)&&(A._cycle!=E))A._Done(D.
Gv[0]._this=null);if((A=D.Ci[0]._this)&&(A._cycle!=E))A._Done(D.Ci[0]._this=null
);if((A=D.Gb[0]._this)&&(A._cycle!=E))A._Done(D.Gb[0]._this=null);if((A=D.AT[0].
_this)&&(A._cycle!=E))A._Done(D.AT[0]._this=null);if((A=D.EC[0]._this)&&(A._cycle
!=E))A._Done(D.EC[0]._this=null);if((A=D.Fw[0]._this)&&(A._cycle!=E))A._Done(D.Fw[
0]._this=null);if((A=D.C1._this)&&(A._cycle!=E))A._Done(D.C1._this=null);if((A=D.
Device._this)&&(A._cycle!=E))A._Done(D.Device._this=null);if((A=D.DU[0]._this)&&(
A._cycle!=E))A._Done(D.DU[0]._this=null);if((A=D.Cz._this)&&(A._cycle!=E))A._Done(
D.Cz._this=null);if((A=D.Gn[0]._this)&&(A._cycle!=E))A._Done(D.Gn[0]._this=null);
if((A=D.Gg[0]._this)&&(A._cycle!=E))A._Done(D.Gg[0]._this=null);};return D;})();

/* Embedded Wizard */