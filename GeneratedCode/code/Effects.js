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
);if(EmWiApp.abk)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abk=(function(){var B=EmWiApp;var D={};

D.Ga={Trigger:function(){B.Core.Timer.Trigger.call(this);B.vv(this,0);},_Init:function(
aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=D.Ga;},_className:"Effects::EffectTimerClass"
};D.Ek={_Init:function(){D.Ga._Init.call(this,0);this.Ey(15);this.Bv(true);},_variants:
function(){return this;},_this:null};
D._Init=function(){D.Ga.__proto__=B.Core.Timer;};D._ReInit=function(){var A;if((A=
D.Ek._this))A._ReInit();};D.Bw=function(E){var A;if((A=D.Ek._this)&&(A._cycle!=E
))A._Done(D.Ek._this=null);};return D;})();

/* Embedded Wizard */