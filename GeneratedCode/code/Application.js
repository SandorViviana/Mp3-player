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
var Ap=[0,0,800,480];var AN=[0,0,801,480];var Cd="The maximum value of the slider is ";
var C_="The current value  of the slider is ";var C$=[0,0,800,489];var Dv=[117,66
,434,333];var Dw=[117,387,582,436];var ES=[499,99,645,158];var ET="Title";var EU=[
521,156,621,186];var GX="Artist";var GY=[57,395,118,425];var HN="0:00";var Jz=[582
,395,645,425];var JA="10:59";var JB=[375,436,425,486];var JC=[369,0,419,66];var JD=[
281,337,369,387];var JE=[340,337,410,387];var JF=[356,339];var JG=[393,346];var JH=[
398,386];var JI=[356,391];var JJ=[305,345];var JK=[340,345];var JL=[351,380];var
JM=[310,389];var JN="update CurrentTime from ";var HO=" to ";var JO="update Duration from ";
D.Application={Cq:null,PlayerDialog:null,_Init:function(aArg){B.Core.Root._Init.call(
this,aArg);B.abh.Cq._Init.call(this.Cq={Ak:this},0);D.PlayerDialog._Init.call(this.
PlayerDialog={Ak:this},0);this.__proto__=D.Application;this.Ao(Ap);this.Cq.Ao(Ap
);this.Cq.Co(0xFF000000);this.PlayerDialog.Ao(AN);this.AW(this.Cq,0);this.AW(this.
PlayerDialog,0);},_Done:function(){this.__proto__=B.Core.Root;this.Cq._Done();this.
PlayerDialog._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root.
_ReInit.call(this);this.Cq._ReInit();this.PlayerDialog._ReInit();},_Mark:function(
E){var A;B.Core.Root._Mark.call(this,E);if((A=this.Cq)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.PlayerDialog)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::Application"
};D.GG={_class:function(){return B.abg.AT;},0:{Data:function(){return B.abo;},Cache:[
],_this:null}};D.PlayerDialog={deviceRef:null,Cj:null,C9:null,Bj:null,C7:null,C3:
null,CurrentTime:null,Duration:null,Dt:null,C8:null,BS:null,Loop:null,CA:null,Cp:
null,Bd:function(aArg){var A;this.deviceRef=B._GetAutoObject(D.Device);B.za([this
,this.Ez],[A=this.deviceRef,A.Hz,A.HB],0);B.za([this,this.Ez],[A=this.deviceRef,
A.HA,A.OnSetDuration],0);B.y$([this,this.Ez],123);B.y$([this,this.Ez],124);B.ow([
this,this.Ez],this);},Jt:function(Ax){this.deviceRef.UpdateTimeFromSlider(this.Bj.
BY());},OnLoop:function(Ax){this.deviceRef.LoopTrack();if(B._GetAutoObject(D.Device
).Loop)this.Loop.CL(B.zW(D.Gs));else this.Loop.CL(B.zW(D.Ft));},Ez:function(Ax){
if(this.Bj.Bi!==this.deviceRef.Duration){this.Bj.HH(this.deviceRef.Duration);B.aa8(
"%s%i",Cd,this.Bj.Bi);}B.aa8("%s%i",C_,this.Bj.BY());this.Bj.DT(this.deviceRef.CurrentTime
);this.Duration.Dr(this.deviceRef.Hx(this.deviceRef.Duration));this.CurrentTime.
Dr(this.deviceRef.Hx(this.deviceRef.CurrentTime));if((this.Bj.BY()===this.Bj.Bi)&&
!B._GetAutoObject(D.Device).Loop)this.IC();},Jv:function(Ax){switch(B._GetAutoObject(
D.Device).Ds){case 1:this.BS.CL(B.zW(D.ED));break;default:this.BS.CL(B.zW(D.Gy));
}},IF:function(Ax){B.aa8("%i",120);switch(B._GetAutoObject(D.Device).Ds){case 1:
this.IE();break;case 2:this.Fv();break;case 0:this.Fv();break;case 5:{B._GetAutoObject(
D.Device).UpdateCurrentTime(0);this.Fv();}break;default:this.Fv();}},Fv:function(
){this.deviceRef.Play();this.BS.CL(B.zW(D.Gx));B._GetAutoObject(D.Device).UpdatePlayerState(
1);},IE:function(){this.deviceRef.Pause();this.BS.CL(B.zW(D.DZ));B._GetAutoObject(
D.Device).UpdatePlayerState(2);},IC:function(){B._GetAutoObject(D.Device).UpdatePlayerState(
5);this.BS.CL(B.zW(D.DZ));},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);
B.abh.C5._Init.call(this.Cj={Ak:this},0);B.abh.C5._Init.call(this.C9={Ak:this},0
);B.abi.Gl._Init.call(this.Bj={Ak:this},0);B.abh.Text._Init.call(this.C7={Ak:this
},0);B.abh.Text._Init.call(this.C3={Ak:this},0);B.abh.Text._Init.call(this.CurrentTime={
Ak:this},0);B.abh.Text._Init.call(this.Duration={Ak:this},0);B.abh.C5._Init.call(
this.Dt={Ak:this},0);B.abh.C5._Init.call(this.C8={Ak:this},0);B.abi.FA._Init.call(
this.BS={Ak:this},0);B.abi.FA._Init.call(this.Loop={Ak:this},0);B.Core.D2._Init.
call(this.CA={Ak:this},0);B.Core.D2._Init.call(this.Cp={Ak:this},0);this.__proto__=
D.PlayerDialog;this.Ao(Ap);this.Cj.Ao(C$);this.C9.Ao(Dv);this.C9.Cm(true);this.Bj.
Ao(Dw);this.Bj.HH(100);this.Bj.DT(0);this.C7.Ao(ES);this.C7.Dr(ET);this.C3.Ao(EU
);this.C3.Dr(GX);this.CurrentTime.Ao(GY);this.CurrentTime.Dr(HN);this.Duration.Ao(
Jz);this.Duration.Dr(JA);this.Dt.Ao(JB);this.C8.Ao(JC);this.C8.IX(2);this.BS.Ao(
JD);this.BS.Fy(true);this.BS.HE(B.jm);this.Loop.Ao(JE);this.Loop.HE(B.jm);this.CA.
DY(JF);this.CA.DX(JG);this.CA.DW(JH);this.CA.DV(JI);this.Cp.DY(JJ);this.Cp.DX(JK
);this.Cp.DW(JL);this.Cp.DV(JM);this.AW(this.Cj,0);this.AW(this.C9,0);this.AW(this.
Bj,0);this.AW(this.C7,0);this.AW(this.C3,0);this.AW(this.CurrentTime,0);this.AW(
this.Duration,0);this.AW(this.Dt,0);this.AW(this.C8,0);this.AW(this.BS,0);this.AW(
this.Loop,0);this.AW(this.CA,0);this.AW(this.Cp,0);this.Cj.Cn(B.zW(D.Cj));this.C9.
Cn(B.zW(D.Gj));this.Bj.DS=[this,this.Jt];this.Bj.Fx(B._GetAutoObject(D.C4));this.
C7.Ex(B.zW(D.GG));this.C3.Ex(B.zW(D.AT));this.CurrentTime.Ex(B.zW(D.EK));this.Duration.
Ex(B.zW(D.EK));this.Dt.Cn(B.zW(B.abg.Fu));this.C8.Cn(B.zW(B.abg.Fu));this.BS.CL(
B.zW(D.DZ));this.BS.Fx(B._GetAutoObject(D.CM));this.Loop.Bu=[this,this.OnLoop];this.
Loop.CL(B.zW(D.Ft));this.Loop.Fx(B._GetAutoObject(D.CM));this.CA.Bu=[this,this.OnLoop
];this.Cp.Bu=[this,this.IF];this.Cp.Cl=[this,this.Jv];this.Bd(aArg);},_Done:function(
){this.__proto__=B.Core.Am;this.Cj._Done();this.C9._Done();this.Bj._Done();this.
C7._Done();this.C3._Done();this.CurrentTime._Done();this.Duration._Done();this.Dt.
_Done();this.C8._Done();this.BS._Done();this.Loop._Done();this.CA._Done();this.Cp.
_Done();B.Core.Am._Done.call(this);},_ReInit:function(){B.Core.Am._ReInit.call(this
);this.Cj._ReInit();this.C9._ReInit();this.Bj._ReInit();this.C7._ReInit();this.C3.
_ReInit();this.CurrentTime._ReInit();this.Duration._ReInit();this.Dt._ReInit();this.
C8._ReInit();this.BS._ReInit();this.Loop._ReInit();this.CA._ReInit();this.Cp._ReInit(
);},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=this.deviceRef)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cj)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.C9)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bj)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.C7)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C3)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.CurrentTime)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Duration
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dt)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.C8)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BS)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Loop)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CA)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Cp)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::PlayerDialog"
};D.Cj={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationBackground.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[1280,720],FrameDelay:0,_this:null}};D.Gj={_class:
function(){return B.abg.T;},0:{FileName:"./res/ApplicationGenericVinyl.png",Format:
B.cC,NoOfFrames:1,FrameSize:[250,250],FrameDelay:0,_this:null}};D.AT={_class:function(
){return B.abg.AT;},0:{Data:function(){return B.abm;},Cache:[],_this:null}};D.EK={
_class:function(){return B.abg.AT;},0:{Data:function(){return B.abn;},Cache:[],_this:
null}};D.FB={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationThumb.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[26,27],FrameDelay:0,_this:null}};D.C4={_Init:
function(){B.abi.C4._Init.call(this,0);this.I9(true);this.I8(0);this.I7(0);this.
I3(0);this.I6(0);this.I5(0);this.I4(0);this.I0(B.zW(B.abi.GV));this.I2(B.zW(D.FB
));this.I1(B.zW(D.FB));this.Jp(0x93F5F5F5);this.Jr(0x93F5F5F5);this.Jq(0x93F5F5F5
);this.Jl(0);this.Jo(0);this.Jn(0);this.Jm(0);this.Ji(B.zW(B.abi.Ev));this.Jk(B.
zW(B.abi.Ev));this.Jj(B.zW(B.abi.Er));this.Jf(0xFFFFFFFF);this.Jh(0xFFFFFFFF);this.
Jg(0xFFFFFFFF);this.Jb(0);this.Je(0);this.Jd(0);this.Jc(0);this.I_(B.zW(B.abi.Er
));this.Ja(B.zW(B.abi.Ev));this.I$(B.zW(B.abi.Er));},_variants:function(){return this;
},_this:null};D.DeviceClass={CurrentTime:0,Duration:0,Ds:0,Loop:false,B2:function(
){var J$=this;{}},Bd:function(aArg){B.ow([this,this.Iz],this);},IY:function(C){if(
this.Ds===C)return;this.Ds=C;},ID:function(){return this.Ds;},Hx:function(aArg1){{
return EmWiPlayer.formatTime(aArg1);}return HN;},HB:function(C){if(this.CurrentTime===
C)return;this.CurrentTime=C;},Hz:function(){return this.CurrentTime;},OnSetDuration:
function(C){if(this.Duration===C)return;this.Duration=C;},HA:function(){return this.
Duration;},IW:function(C){if(this.Loop===C)return;this.Loop=C;},Play:function(){
EmWiPlayer.play();},Pause:function(){{EmWiPlayer.pause();}this.UpdatePlayerState(
2);},LoopTrack:function(){{EmWiPlayer.loop();}this.IW(!this.Loop);},UpdatePlayerState:
function(CB){if(CB!==this.Ds){this.Ds=CB;B.aat([this,this.ID,this.IY],0);}},UpdateCurrentTime:
function(CB){if(CB!==this.CurrentTime){B.aa8("%s%i%s%i",JN,this.CurrentTime,HO,CB
);this.CurrentTime=CB;B.aat([this,this.Hz,this.HB],0);B.aas(123);}},UpdateTimeFromSlider:
function(aArg1){this.UpdateCurrentTime(aArg1);{EmWiPlayer.seeking(aArg1);}},UpdateDuration:
function(CB){if(CB!==this.Duration){B.aa8("%s%i%s%i",JO,this.Duration,HO,CB);this.
Duration=CB;B.aat([this,this.HA,this.OnSetDuration],0);B.aas(124);}},Iz:function(
Ax){var J$=this;EmWiPlayer.initialize();},_Init:function(aArg){B.abj.DeviceClass.
_Init.call(this,aArg);this.__proto__=D.DeviceClass;this.Bd(aArg);},_Done:function(
){this.B2();this.__proto__=B.abj.DeviceClass;B.abj.DeviceClass._Done.call(this);
},_className:"Application::DeviceClass"};D.Device={_Init:function(){D.DeviceClass.
_Init.call(this,0);},_variants:function(){return this;},_this:null};D.K2={Kp:0,KM:
1,KI:2,K0:3,Error:4,Ks:5};D.DZ={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationPlayIcon.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[120,111],FrameDelay:0,_this:null}};D.CM={_Init:
function(){B.abi.CM._Init.call(this,0);this.IZ(50);this.IR(0xFF59FF4D);this.IU(0xFF353535
);this.IT(0xFFD6D6D6);this.IS(0xFFFF423D);this.IV(B.zW(D.EK));this.IO(0xFF4CFF06
);this.IQ(0xFFFF52E2);this.IP(0xFF33ADFF);this.IL(0);this.IN(0);this.IM(0);this.
II(B.zW(D.DZ));this.IK(B.zW(D.ED));this.IJ(B.zW(D.ED));},_variants:function(){return this;
},_this:null};D.Gx={_class:function(){return B.abg.T;},0:{FileName:"./res/ApplicationPauseIcon.png"
,Format:B.cC,NoOfFrames:1,FrameSize:[115,120],FrameDelay:0,_this:null}};D.Ft={_class:
function(){return B.abg.T;},0:{FileName:"./res/ApplicationLoopIcon.png",Format:B.
cC,NoOfFrames:1,FrameSize:[95,100],FrameDelay:0,_this:null}};D.ED={_class:function(
){return B.abg.T;},0:{FileName:"./res/ApplicationPausePressedIcon.png",Format:B.
cC,NoOfFrames:1,FrameSize:[115,120],FrameDelay:0,_this:null}};D.Gy={_class:function(
){return B.abg.T;},0:{FileName:"./res/ApplicationPlayPressedIcon.png",Format:B.cC
,NoOfFrames:1,FrameSize:[120,111],FrameDelay:0,_this:null}};D.Gs={_class:function(
){return B.abg.T;},0:{FileName:"./res/ApplicationLoopPressedIcon.png",Format:B.cC
,NoOfFrames:1,FrameSize:[95,100],FrameDelay:0,_this:null}};
D._Init=function(){D.Application.__proto__=B.Core.Root;D.PlayerDialog.__proto__=B.
Core.Am;D.DeviceClass.__proto__=B.abj.DeviceClass;};D._ReInit=function(){var A;if((
A=D.C4._this))A._ReInit();if((A=D.Device._this))A._ReInit();if((A=D.CM._this))A.
_ReInit();};D.Bw=function(E){var A;if((A=D.GG[0]._this)&&(A._cycle!=E))A._Done(D.
GG[0]._this=null);if((A=D.Cj[0]._this)&&(A._cycle!=E))A._Done(D.Cj[0]._this=null
);if((A=D.Gj[0]._this)&&(A._cycle!=E))A._Done(D.Gj[0]._this=null);if((A=D.AT[0].
_this)&&(A._cycle!=E))A._Done(D.AT[0]._this=null);if((A=D.EK[0]._this)&&(A._cycle
!=E))A._Done(D.EK[0]._this=null);if((A=D.FB[0]._this)&&(A._cycle!=E))A._Done(D.FB[
0]._this=null);if((A=D.C4._this)&&(A._cycle!=E))A._Done(D.C4._this=null);if((A=D.
Device._this)&&(A._cycle!=E))A._Done(D.Device._this=null);if((A=D.DZ[0]._this)&&(
A._cycle!=E))A._Done(D.DZ[0]._this=null);if((A=D.CM._this)&&(A._cycle!=E))A._Done(
D.CM._this=null);if((A=D.Gx[0]._this)&&(A._cycle!=E))A._Done(D.Gx[0]._this=null);
if((A=D.Ft[0]._this)&&(A._cycle!=E))A._Done(D.Ft[0]._this=null);if((A=D.ED[0]._this
)&&(A._cycle!=E))A._Done(D.ED[0]._this=null);if((A=D.Gy[0]._this)&&(A._cycle!=E)
)A._Done(D.Gy[0]._this=null);if((A=D.Gs[0]._this)&&(A._cycle!=E))A._Done(D.Gs[0].
_this=null);};return D;})();

/* Embedded Wizard */