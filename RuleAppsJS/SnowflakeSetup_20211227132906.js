/* Copyright ? 2004 - 2021 InRule Technology, Inc. All rights reserved. None of this software may be reproduced or executed without the express written consent of InRule Technology. Use and distribution of this software is governed under the End User License Agreement (EULA) available for viewing at http://www.inrule.com/licenses/eula. Any content accredited to a third party requires its author's consent for further use. All trademarks and licenses referenced herein belong to their respective companies and individuals. */
(function(n){"use strict";function g(n){this.v=n;Object.defineProperty(this,"dataManager",{get:function(){return n.On}});Object.defineProperty(this,"metadata",{get:function(){return n.Qn}});this.resetSessionState=function(){this.v.BL=[];this.v.QP=[];this.v.BJ=[];this.v.QQ=[];this.v.NA=new w(this.v);this.v.NH=new b(this.v);this.v.DD=0;this.v.L=0;this.v.X=0;this.v.W=0};this.getActiveValidations=function(){return this.v.NH.OK(!0)};this.applyRules=function(n){if(n==null)throw i.MH("callback");this.v.Mu(n)};this.getEntities=function(){return this.v.BL.filter(function(n){return n.Bb.EQ}).map(function(n){return new s(n)})};this.createEntity=function(n,t){var f=this.v.w.x(n),r,u;if(f==null)throw i.z(n);return r=t!=null,u=this.v.BE(f,t,!r,1),r&&u.EB(this.v.Dl,this.v.DF),new s(u)};this.Qo=function(n){this.v.Qq=n};this.getActiveNotifications=function(){return this.v.NA.Nt(!0)};this.executeIndependentRuleSet=function(n,t,r){if(n==null||n.length===0)throw i.MH("ruleSetName");if(t==null)throw i.MH("args");if(r==null)throw i.MH("callback");var u=this.createIndependentRuleSet(n),f=this.v,e=function(n){try{var t=u.KG;t.Hl(!1,f.Dl,f.DF)}finally{r(n)}};u.execute(t,e)};this.createIndependentRuleSet=function(n){var t=this.v.w.x(n);if(t==null)throw i.MN(n);return new it(t.ML("Rules"),this.v.BE(t,null,!0,1))}}function y(n){this.KO=n;this.getName=function(){return this.KO.Cy()};this.getElementType=function(){return"CollectionMember"};this.getValue=function(){return this.KO.Ez.Ex.Lh(this.KO,this.KO.Ez.IY.Dl,this.KO.Ez.IY.DF)};this.getElementId=function(){return this.KO.Cz(this.KO.Ez.IY.Dl,this.KO.Ez.IY.DF).Be()};this.getCollection=function(n){var t=this.KO.Cz(this.KO.Ez.IY.Dl,this.KO.Ez.IY.DF),r=t.Bb.EK.KH(n);if(r==null)throw i.KU(n);return new a(t.DK(r))};this.getField=function(n){var t=this.KO.Cz(this.KO.Ez.IY.Dl,this.KO.Ez.IY.DF),r=t.Bb.EK.KH(n);if(r==null)throw i.KK(n);return new c(t.DK(r))}}function p(){this.hasErrors=!1;this.messages=[];this.runtimeErrors=[]}function nt(){this.QG=function(n,t,i){return new st(n.Xn(t,i))}}function c(n){this.KO=n;Object.defineProperty(this,"metadata",typeof n.DA().Lw=="function"?{get:n.DA().Lw}:{value:n.DA().Lw});this.getName=function(){return this.KO.Cy()};this.getElementType=function(){return"Field"};this.getValue=function(){var n=this.KO.Cz(this.KO.Cn.v.Dl,this.KO.Cn.v.DF);return!this.KO.Ct()||n==null?n:new s(this.KO.Cp)};this.getElementId=function(){return this.KO.Be()};this.getCollection=function(n){var t=this.KO.DA().Cz(this.KO,this.KO.Cn.v.Dl,this.KO.Cn.v.DF),r=t.Bb.EK.KH(n),u;if(r==null)throw i.KU(n);return u=t.DK(r),new a(u)};this.setValue=function(n){this.KO.DA().Dg&&n!=null&&(n=n.KG);this.KO.DA().HP(this.KO,n,this.KO.Cn.v.Dl,this.KO.Cn.v.DF)};this.getField=function(n){var t=this.KO.DA().Cz(this.KO,this.KO.Cn.v.Dl,this.KO.Cn.v.DF),r=t.Bb.EK.KH(n),u;if(r==null)throw i.KK(n);return u=t.DK(r),new c(u)};this.isValid=function(){return this.KO.Ce(this.KO.Cn.v.Dl,this.KO.Cn.v.DF)}}function e(n,t){this.KD=n;this.NE=t;this.GC=function(n){for(var t in this.KD)n(t,this.KD[t])};this.JR=function(){this.NE=0;this.KD={}};this.KH=function(n){return this.KD[n]};this.Ml=function(n,t){this.KD[n]==null&&this.NE++;t==null&&(t=null);this.KD[n]=t}}function w(){this.ND=new e({},0);this.NF=new e({},0);this.NG=0;this.Nt=function(n){var t=[];return this.ND.GC(function(i,r){(!n||r.isActive)&&t.push(r)}),this.NF.GC(function(i,r){for(var u=0;u<r.length;u++){if(n&&!r[u].isActive)return;t.push(r[u])}}),t.sort(function(n,t){return n.OJ<t.OJ?-1:n.OJ>t.OJ?1:0})};this.JR=function(){this.ND.JR();this.NF.JR();this.NG=0}}function tt(n){this.BX=n.BY();this.WG=null;this.Bb=n.Bb;this.Be=function(){return this.WG==null&&(this.WG=this.Bb.Dj.concat(":",this.BX.toString())),this.WG}}function l(n,t){this.DT=null;this.Co=t;this.Cp=null;this.Cn=n;this.Cy=function(){return this.Co.Dj};this.DY=function(){};this.Cw=function(){return!this.Co.Dg&&!this.Co.Df};this.BU=function(){return this.Co.Bv};this.Cx=function(){return!1};this.Cv=function(){return this.Co.Di};this.Cu=function(){return this.Co.Dh};this.Cs=function(){return this.Co.Df};this.Ct=function(){return this.Co.Dg};this.DA=function(){return this.Co};this.BY=function(){return this.Cn.BY()};this.BW=function(){return this.Co.DX};this.Bj=function(n,t,i){this.Co.Bj(this.Cn,n,t,i)}}function o(n,t){this.Co=t;this.Cp=null;this.Cn=n;this.Cq=!1;this.Cy=function(){return this.Co.Dj};this.Ca=function(n,t,i){this.Co.Ca(this,n,t,i)};this.DY=function(){};this.Cw=function(){return!this.Co.Dg&&!this.Co.Df};this.Ra=function(n,t,i){return!this.Cq&&!this.Co.Re(this)?(this.FL(n,t,i),!0):!1};this.Be=function(){return this.Cn.BZ().Be()+this.Cr()};this.Cx=function(){return!1};this.HP=function(n,t,i){this.Co.HP(this,n,t,i)};this.Cr=function(){return this.Co.FU};this.Cv=function(){return this.Co.Di};this.Cu=function(){return this.Co.Dh};this.Cs=function(){return this.Co.Df};this.Ct=function(){return this.Co.Dg};this.DA=function(){return this.Co};this.Ce=function(n,t){return this.Co.Ce(this,n,t)};this.FL=function(n,t,i){this.Co.FL(this,n,t,i)};this.Cz=function(n,t){return this.Co.Cz(this,n,t)}}function it(n,t){this.KG=t;this.QY=t;this.getName=function(){return this.KG.Bb.Dj};this.getParameterValue=function(n){var t=this.KG.Bb.ML(n),r;if(t==null)throw i.Qe(n);return(r=this.KG.DK(t).Cz(this.KG.v.Dl,this.KG.v.DF),r==null&&(r=t.Mg?this.KG.v.BE(this.KG.v.w.x(t.Mf),null,!0,1):null),t.Dg)?new s(r):r};this.getElementId=function(){return this.KG.BZ().Be()};this.execute=function(t,r){var u,e,f;if(t==null)throw i.MH("args");if(r==null)throw i.MH("callback");if(this.QY.DK(n).Co.MR==!1)throw i.MS(this.QY.DK(n).Co.Dj);if(t.length!=this.QY.DK(n).Co.MV.length)throw i.MW(t.length.toString(),this.QY.DK(n).Co.MV.length.toString());for(u=0;u<this.QY.DK(n).Co.MV.length;u++)e=this.KG.DK(this.QY.DK(n).Co.MV[u]),f=t[u],this.QY.DK(n).Co.MV[u].Dg&&(f=f==null?this.QY.DK(n).Co.MV[u].Mg?this.KG.v.BE(this.KG.v.w.x(this.QY.DK(n).Co.MV[u].Mf),null,!0,1):null:t[u].KG),e.HP(f,this.KG.v.Dl,this.KG.v.DF);this.KG.v.Bw.Mi(this.QY.DK(n));this.KG.v.Mu(r)}}function rt(n,t){this.value=t;this.name=n}function a(n){this.KZ=n;Object.defineProperty(this,"metadata",typeof n.DA().Lw=="function"?{get:n.DA().Lw}:{value:n.DA().Lw});this.getName=function(){return this.KZ.Cy()};this.getMember=function(n){var t=this.getCount();if(n<0||n>=t)throw i.GP(t.toString());return new y(this.KZ.Cz(this.KZ.Cn.v.Dl,this.KZ.Cn.v.DF).GJ(n))};this.getElementType=function(){return"Collection"};this.getValue=function(){var n=this.KZ.Cz(this.KZ.Cn.v.Dl,this.KZ.Cn.v.DF);return n.Gl};this.add=function(){var n=this.KZ.Cz(this.KZ.Cn.v.Dl,this.KZ.Cn.v.DF);return new y(n.GY(this.KZ,null,this.KZ.Cn.v.Dl,this.KZ.Cn.v.DF))};this.getCount=function(){var n=this.KZ.Cz(this.KZ.Cn.v.Dl,this.KZ.Cn.v.DF);return n.Ee()};this.isValid=function(){return this.KZ.Ce(this.KZ.Cn.v.Dl,this.KZ.Cn.v.DF)}}function ut(n){this.DD=0;this.On=new ht(this);this.BL=[];this.QQ=[];this.NP=!0;this.IM=0;this.BJ=[];this.w=n;this.Ns=!1;this.Qn=n==null?null:n.Lw;this.L=0;this.NH=new b(this);this.Pl=new nt;this.Bw=new ft(this);this.Qq=null;this.p=new p;this.QP=[];this.X=new Date(0).getTime();this.NA=new w(this);this.DF=-1;this.Mx=0;this.Dl=new d(this,0);this.W=new Date(0).getTime();this.Dm=function(n,t,i,r){this.K();try{n.Bj(t,i,r)}catch(u){this.g(u,!0)}};this.K=function(){if(this.L=++this.L,this.L>1e5)throw i.M(1e5.toString(),this.L.toString());this.W=new Date;var n=this.W-this.X;if(this.X>0&&n>3e4)throw i.Z(30..toString(),(n/1e3).toString());};this.I=function(n){this.K();try{n()}catch(t){this.g(t,!1)}};this.n=function(n){u.r(this.p,n.message);this.p.hasErrors=!0;this.p.runtimeErrors.push(n)};this.Mu=function(n){var i=this,t;if(this.X=new Date,this.Mx=this.Mx+1,this.Mx>1){for(t=0;t<this.BL.length;t++)this.Bw.Dt(this.BL[t]);this.NA.JR();this.NH.JR()}this.p=new p;u.NM(this.p);this.NP=!1;this.Bw.JR(this,!0,5,this.DF,function(){i.NP=!0;u.NQ(i.p);n(i.p)})};this.CH=function(n){var t=this.BL.indexOf(n);t>=0&&(this.BL.splice(t,1),this.BJ.splice(t,1))};this.DG=function(n){if(n.Bb.DJ!=null){var t=n.DK(n.Bb.DJ);this.Dm(t,this.Dl,this.DF,null)}};this.g=function(n,t){if(n.errorCode==null&&(n=i.j(n.message)),n.errorCode!="HaltRuleSetException"||!t){if(n.errorCode=="HaltEngineException"||n.errorCode=="SDKExceededCycleCount"||n.errorCode=="SDKExceededTimeout")throw n;if(t)this.n(n);else throw n;}};this.BE=function(n,t,i,r){var f,u;if(t!=null){if(f=this.BJ.indexOf(t),f>=0)return this.BL[f]}else t={};return u=new et(this,n,t,++this.DD,r),this.BL.push(u),this.BJ.push(t),i&&this.DG(u,this.DF),this.Bw.Dt(u),u}}function ft(n){this.Ne=n;this.Dz=null;this.CR=6;this.CF=[];this.Mi=function(n){n.DT==null&&this.CF[n.BU()].Ml(n)};this.Dt=function(n){var t=n.Bb.BU(0);n.Dw(t);t<6&&(n.Br==null?this.CF[n.BU()].CT(n):this.CB(n));this.Dz=t};this.CX=function(n){n<this.CR&&(this.CR=n)};this.JR=function(n,t,i,r,u){for(var f=this,h=function(e){if(e!=null)try{n.g(e,!0)}catch(o){o.errorCode=="HaltEngineException"||f.Ne.n(o);u();return}f.JR(n,t,i,r,u)},e=this.Ng(t,i),o;e!=null;){o=new d(this.Ne,e.BU());try{n.Dm(e,o,r,h)}catch(c){try{f.Ne.g(c,!0)}catch(s){s.errorCode=="HaltEngineException"||f.Ne.n(s);break}}if(o.v.Ns)return;e=this.Ng(t,i)}u()};this.Ng=function(n,t){return this.CR<6&&t>=this.CR?this.CF[this.CR].Nk(n):null};this.CO=function(n){if(!(n>this.CR)){for(var t=n;t<6;t++)if(!this.CF[t].CK()){this.CR=t;return}this.CR=6}};this.CB=function(n){var t=n.Br,i=this.CF[n.BU()];t.CH(n);i.CT(n)};for(var t=1;t<=6;t++)this.CF[t]=new ot(this,t)}function et(n,t,r,u,f){this.BX=u;this.HG=null;this.Bb=t;this.Bq=!1;this.Br=null;this.Ci=null;this.Bd=null;this.Ba=[];this.BS=r;this.BT={};this.IL=0;this.BV=0;this.IP=f;this.DC=!1;this.DM=[];this.v=n;this.IQ=0;this.Bf=function(){if(this.Ba.length==0)throw i.Bg();return this.Ba[0]};this.Gn=function(n,t,i,r){n.FI=this.Gs(n,i,r);this.Ba.push(n);this.HB(n.DA(),t,i,r)};this.Bj=function(n,t){if(!this.Bq){this.Bq=!0;try{this.Bb.Bj(this,n,t)}finally{if(this.Bq=!1,this.Br==null)return;this.BV=this.Bb.BU(this.Br.Bv);n.v.Bw.CB(this)}}};this.Ca=function(n,t,i){this.Bb.Ca(this,n,t,i)};this.EE=function(n,t,i,r){if(!(r.indexOf(n)>-1)){r.push(n);this.v.DG(n,i);var u=this;n.Bb.EK.GC(function(f,e){var h,c,s,l,o;if(e.Dg&&e.EQ==!1)h=n.DK(e),c=h.Cz(t,i),u.EE(c,t,i,r);else if(e.Df)for(s=n.DK(e).Cz(t,i),l=s.Ee(),o=0;o<l;o++)u.EE(s.GJ(o).Cz(t,i),t,i,r)})}};this.Gs=function(n){if(n.DA().Dh&&n.DA().Gw!=null)throw i.Gx("Context Containers");return null};this.DB=function(){return!this.DC};this.HB=function(n,t,i,r){this.HG!=null&&n.Dh&&n.IK&&(t==null?this.IL--:this.IL++,(t!=null||this.IL===0)&&this.HG.FL(t,i,r))};this.Hf=function(n,t,i,r){t!=null&&t.Bb.Hk||(n.FI!=null&&n.FI.Hl(!1,i,r),this.Ba.splice(this.Ba.indexOf(n),1),this.HB(n.DA(),null,i,r),(this.DC||this.IN(++this.v.IM))&&this.Hl(!1,i,r))};this.DA=function(){return null};this.BW=function(){return this.BX};this.Be=function(){return this.BZ().Be()};this.BU=function(){return this.BV};this.Ce=function(n,t){return this.Bb.Ce(this,n,t)};this.EB=function(n,t){this.EE(this,n,t,[])};this.Ch=function(){return this.Ci};this.Dw=function(n){this.BV=n};this.BY=function(){return this.BX};this.IN=function(n){var i,u,r,t;if(this.IP==1)return!1;if(this.DC||n===this.IQ)return!0;if(this.IQ=n,this.HG==null&&this.Ba.length===0)return this.DC=!0,!0;for(i=0;i<this.Ba.length;i++)for(u=this.Ba[i],r=u.FV(),t=0;t<r.length;t++)if(!r[t].Bb.IV||!r[t].IN(n))return!1;return this.DC=!0,!0};this.DK=function(n){var t=this.DM[n.DN];return t!=null?t:(t=n.DP(this),this.DM[n.DN]=t,t)};this.BZ=function(){return this.Ba.length===0?this.Bb.Bc(this):(this.Bd==null&&(this.Bd=this.Bb.Bc(this)),this.Bd)};this.Bi=function(){return this.Ba.length>0};this.Hl=function(n,t,i){var f,e,r,o,u;if(this.v!=null){for(this.v=null,f=0;f<this.DM.length;f++)(e=this.DM[f],e==null||e.Cv())||e.DY(n,t,i);if(this.HG!=null&&this.HG.FL(null,t,i),!n){for(r=0;r<this.Ba.length;r++)this.Ba[r].FI!=null&&this.Ba[r].FI.Hl(!1,t,i);for(this.Br!=null&&this.Br.CH(this),o=0;o<this.DM.length;o++)(u=this.DM[o],u!=null&&u.DT!=null)&&u.DT.Hu(u);t.v.CH(this)}}};this.Bb.Zp(this);this.Ci=new yt(null,null,this)}function f(n,t,i,r){this.MB=n;Object.defineProperty(this,"defaultValue",typeof r=="function"?{get:r}:{value:r});Object.defineProperty(this,"displayName",typeof t=="function"?{get:t}:{value:t});Object.defineProperty(this,"dataType",typeof i=="function"?{get:i}:{value:i});this.getAttributes=function(n){if(this.MB==null)return{};var t=this.MB.KH(n==null?"DefaultAttributeGroupKey":n);return t==null?{}:t};this.getAttributeValue=function(n,t){if(this.MB==null)return null;var i=this.MB.KH(t==null?"DefaultAttributeGroupKey":t);return i==null?null:i[n]}}function b(){this.NK=new e({},0);this.NL=new e({},0);this.OK=function(n){var t=[],i=this;return this.NL.GC(function(r,u){u.length!=0&&t.push(new ct(u[0].OV,i.Od(u),u.filter(function(t){return!n||t.isActive})))}),t};this.JR=function(){this.NK.JR();this.NL.JR()};this.Od=function(n){var t=[];return n.filter(function(n){return n.isActive}).forEach(function(n){t.push(n.message)}),t.join(", ")}}function ot(n,t){this.Bv=t;this.Bw=n;this.BL=[];this.CL=[];this.CT=function(n){for(var t=this.BL.length-1;t>=0;t--)if(this.BL[t].BY()<n.BY()){this.BL.splice(t+1,0,n);n.Br=this;return}this.BL.unshift(n);n.Br=this;this.BL.length===1&&this.CL.length===0&&this.Bw.CX(this.Bv)};this.CK=function(){return this.BL.length===0&&this.CL.length===0};this.CH=function(n){for(var t=0;t<this.BL.length;t++)if(this.BL[t]===n){this.BL.splice(t,1);n.Br=null;this.CK()&&this.Bw.CO(this.Bv);return}};this.Ml=function(n){for(var u,i,t=null,r=0;r<this.CL.length;r++)if(this.CL[r].IC===n.BW()){t=this.CL[r];break}if(t==null){for(t=new vt(this,n.BW()),u=this.CL.length,i=0;i<u;i++)if(n.BW()<this.CL[i].IC){this.CL.splice(i,0,t);break}this.CL.length===u&&this.CL.push(t);this.BL.length===0&&this.Bw.CX(this.Bv)}t.Mi(n)};this.Hz=function(n){for(var t=0;t<this.CL.length;t++)if(this.CL[t].IC===n.IC){this.CL.splice(t,1);break}this.CK()&&this.Bw.CO(this.Bv)};this.Nk=function(n){return this.BL.length>0&&n===!0?this.BL[0]:this.CL.length===0?null:this.CL[0].Nm()}}function v(n,t,r){this.FI=null;this.Co=n.Ex;this.Cp=r;this.Ey=t;this.Ez=n;this.Cy=function(){return this.Co.Dj};this.Cw=function(){return!1};this.FV=function(){return this.Ez.FV()};this.Cx=function(){return!1};this.Cr=function(){return this.Co.FU};this.Cv=function(){return this.Co.Di};this.FR=function(){return this.Ey};this.Cu=function(){return this.Co.Dh};this.Cs=function(){return!1};this.Ct=function(){return!0};this.DA=function(){return this.Co};this.FS=function(n){this.Ey=n};this.FL=function(){throw i.FP();};this.Cz=function(){return this.Cp}}function st(n){this.QH=n.QH}function s(n){this.KG=n;Object.defineProperty(this,"metadata",typeof n.Bb.Lw=="function"?{get:n.Bb.Lw}:{value:n.Bb.Lw});this.getName=function(){return this.KG.Bb.Dj};this.getElementType=function(){return"Entity"};this.getValue=function(){var n=this.KG;return n.BS};this.getElementId=function(){return this.KG.BZ().Be()};this.getCollection=function(n){var t=this.KG.Bb.EK.KH(n);if(t==null)throw i.KU(n);return new a(this.KG.DK(t))};this.executeRuleSet=function(n,t,r){var u,o,f,s,e;if(n==null||n.length===0)throw i.MH("ruleSetName");if(t==null)throw i.MH("args");if(r==null)throw i.MH("callback");if(u=this.KG.Bb.ML(n),u==null)throw i.MN(n);if(o=this.KG.DK(u),u.MR==!1)throw i.MS(u.Dj);if(t.length!=u.MV.length)throw i.MW(t.length.toString(),u.MV.length.toString());for(f=0;f<u.MV.length;f++)s=this.KG.DK(u.MV[f]),e=t[f],u.MV[f].Dg&&(e=e==null?u.MV[f].Mg?this.KG.v.BE(this.KG.v.w.x(u.MV[f].Mf),null,!0,1):null:t[f].KG),s.HP(e,this.KG.v.Dl,this.KG.v.DF);this.KG.v.Bw.Mi(o);this.KG.v.Mu(r)};this.getField=function(n){var t=this.KG.Bb.EK.KH(n);if(t==null)throw i.KK(n);return new c(this.KG.DK(t))};this.isValid=function(){return this.KG.Bb.Ce(this.KG,this.KG.v.Dl,this.KG.v.DF)}}function k(n,t){this.value=n;this.displayName=t}function ht(n){this.Ne=n;this.getInlineTable=function(n,t){var u=this.Ne.w.Op(n),r,f;if(u==null)throw i.Pp(n);return r=null,t!=null&&(f=u.Oz(t),f.PG||(r=u.QG(this.Ne,f.PH,f.PH))),r==null&&(r=u.QG(this.Ne,null,null)),r.QH};this.getValueList=function(n,t,r){var u=this.Ne.w.Op(n),e,o,f,s;if(u==null)throw i.Or(n);return e=null,o=null,u.Ox=="TableValueList"?u.Oy.Oz(t).PG||(e=u.Oy.Oz(t).PH,o=u.Oy.Oz(t).PH):u.Ox=="SqlQueryValueList"&&(f=u.PI,f!=null&&(f.PK().Oz(t).PG||(e=f.PK().Oz(t).PH,o=f.PK().Oz(t).PH))),s=new lt,s.PY(u.Pn(this.Ne.Pl,e,o,r)),s};this.createPassThruQueryParameter=function(n,t){return new rt(n,t)}}function ct(n,t,i){this.isActive=i.length>0;this.target=n.Be();this.activeReasons=i;this.message=t;this.OV=n}function lt(){this.PQ=null;this.getItem=function(n){var t=this.PQ.KH(n);return t==null?null:new k(n,t)};this.PY=function(n){this.PQ=n.Pb};this.getValues=function(){var n=[];return this.PQ.GC(function(t,i){var r=new k(t,i);n.push(r)}),n}}function at(n,t,i,r){this.QH=null;this.PH=i;this.YR=r;this.PG=n;this.aI=!0}function d(n){this.v=n}function vt(n,t){this.Hx=[];this.IC=t;this.Hy=n;this.Mi=function(n){n.DT=this;for(var t=this.Hx.length-1;t>=0;t--)if(this.Hx[t].BY()<=n.BY()){this.Hx.splice(t+1,0,n);return}this.Hx.unshift(n)};this.Nm=function(){var n=this.Hx.shift();return n.DT=null,this.Hx.length===0&&this.Hy.Hz(this),n};this.Hu=function(n){for(var t=0;t<this.Hx.length;t++)if(n===this.Hx[t]){this.Hx.splice(t,1);break}n.DT=null;this.Hx.length===0&&this.Hy.Hz(this)}}function yt(n,t,i){this.Co=t;this.Cp=null;this.Cn=n;this.Cq=!1;this.Cy=function(){return null};this.Cw=function(){return!1};this.Be=function(){return this.Cn.BZ().Be()+this.Cr()};this.Cx=function(){return!0};this.Cv=function(){return!1};this.Cu=function(){return!1};this.Cs=function(){return!1};this.Ct=function(){return!0};this.Cz=function(){return i}}var i={Mb:"",Ot:"Value list '",Ou:"' not found in rule application.",Pr:"Inline table '",MP:"Ruleset '",MU:"Execution of non-explicit rulesets is not supported by this method. '",MZ:"Ruleset parameter count mismatch: got '",Ma:"' but expected '",d:"s (",l:"An unexpected Runtime error occurred: '",Q:" (",MJ:"Argument '",MK:"' can not be null",Gz:"Internal Error: ",HA:" is not implemented",KM:"Field '",KW:"Collection '",Bh:"StateContainer has no parent elements.",FQ:"Setting the value of a Collection Member is not supported. It must be created and added to the parent collection.",GR:"Collection index must be greater than or equal to zero, and less than number of members in the collection (Count = ",GS:")",BB:"Entity '",c:"Execution timeout exceeded limit of ",e:").",Vh:"' to a boolean value is not supported.",Wc:"Numeric overflow occurred during math operation.",Rw:"Conversion from type '",Rx:"' to a string is not supported.",Vd:"Unable to convert '",Ve:"' to a boolean value.",m:"'",P:"Cycle count exceeded limit of ",BC:"' was not found.",R:".",Qg:"Ruleset parameter '",Qx:"Data Element '",MS:function(n){return this.S("SDKErrorNonExplicitRuleSet",this.MU.concat(n,this.m))},Gx:function(n){return this.S("NotImplementedError",this.Gz.concat(n,this.HA))},GP:function(n){return this.S("SDKCollectionIndexOutOfBounds",this.GR.concat(n,this.GS))},S:function(n,t){var i=new Error(t);return i.errorCode=n,i},Qe:function(n){return this.S("SDKErrorRuleSetParameterNotFound",this.Qg.concat(n,this.BC))},MH:function(n){return this.S("ArgumentNullException",this.MJ.concat(n,this.MK))},Qv:function(n){return this.S("SDKErrorDataElementNotFound",this.Qx.concat(n,this.BC))},j:function(n){return this.S("UnexpectedRuntimeErrorOccurred",this.l.concat(n,this.m))},MW:function(n,t){return this.S("SDKRuleSessionRulesetParameterCountMismatch",this.MZ.concat(n,this.Ma,t,this.Mb))},Vf:function(n){return this.S("ErrorConvertingUnsupportedTypeToBoolean",this.Rw.concat(n,this.Vh))},Vb:function(n){return this.S("ErrorConvertingValueToBoolean",this.Vd.concat(n,this.Ve))},Wb:function(){return this.S("MathFunctionNumericOverflow",this.Wc)},FP:function(){return this.S("UnsupportedSetValueCollectionMember",this.FQ)},Ru:function(n){return this.S("ErrorConvertingUnsupportedTypeToString",this.Rw.concat(n,this.Rx))},MN:function(n){return this.S("SDKErrorRulesetNotFound",this.MP.concat(n,this.BC))},Bg:function(){return this.S("StateContainerHasNoParentElements",this.Bh)},z:function(n){return this.S("SDKErrorEntityNotFound",this.BB.concat(n,this.BC))},Or:function(n){return this.S("ValueListNotFound",this.Ot.concat(n,this.Ou))},KK:function(n){return this.S("SDKErrorFieldNotFound",this.KM.concat(n,this.BC))},Z:function(n,t){return this.S("SDKExceededTimeout",this.c.concat(n,this.d,t,this.e))},M:function(n,t){return this.S("SDKExceededCycleCount",this.P.concat(n,this.Q,t,this.R))},KU:function(n){return this.S("SDKErrorCollectionNotFound",this.KW.concat(n,this.BC))},Pp:function(n){return this.S("InlineTableNotFound",this.Pr.concat(n,this.Ou))}},r={DN:2,Qr:new e({},0),Lw:new f(null,null,null,null),WI:{WJ:[],Dj:"SnowflakeConnection",Oz:function(n){if(n==null)return this.Wg;for(var t=0;t<this.WJ.length;t++)if(this.WJ[t].YR==n)return this.WJ[t]},XE:function(n){var i=this.WJ.filter(function(i){return t.WV(i.PH)<=function(n){return n==null?0:t.WV(n)}(n)}),r;return i.length==0?this.Wg:(r=i.sort(function(n,i){return t.WV(n.PH)>t.WV(i.PH)?-1:t.WV(i.PH)>t.WV(n.PH)?1:0}),r[0])},WK:function(n,i){var r=this.WJ.filter(function(r){return t.WV(r.PH)<=function(n){return n==null?0:t.WV(n)}(n)&&t.WV(r.PH)<=function(n){return n==null?0:t.WV(n)}(i)}),u;return r.length==0?this.Wg:(u=r.sort(function(n,i){return t.WV(n.PH)>t.WV(i.PH)?-1:t.WV(i.PH)>t.WV(n.PH)?1:t.WV(n.PH)>t.WV(i.PH)?-1:t.WV(i.PH)>t.WV(n.PH)?1:0}),u[0])},QG:function(n,t,i){return n.Pl.QG(this,t,i)},Xn:function(n,t){return n==null?this.Wg:t==null?this.XE(n):this.WK(n,t)},YX:function(){return this.Wg=new at(!0,new Date(1,0,1,0,0,0,0),new Date(1,0,1,0,0,0,0),"(default)",300),this.Wg.QH=[],this.Wg.QH.push({Warehouse:"COMPUTE_WH",Database:"SNOWFLAKE_SAMPLE_DATA",Schema:"WEATHER",Revision:"2",Type:"StoredProcedure",Name:"NewStoredProcedure"}),this}},Qy:{DN:22,Qz:!1,EQ:!0,IV:!1,Hk:!1,EK:new e({},0),Lw:new f(null,null,null,null),Dj:"SnowFlakeEntities",RA:{DN:36,RD:!1,RB:!1,DX:8,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!1,FU:"/Revision",Df:!1,IK:!1,Dg:!1,RF:null,Dh:!0,SR:!1,Lw:new f(null,null,null,null),Dj:"Revision",Re:function(n){return n.Cn.BS.Revision!=null},HP:function(n,i,r,u){this.FL(n,t.Rj(i),r,u)},DP:function(n){return new o(n,this)},Ce:function(){return!0},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.Revision=t,n.Cp=t,n.Cq=!0);u.SF(n.Cn.v.p,n.Be(),t==null?"null":t)},Cz:function(n){if(!n.Cq){var i=n.Cn.BS,r=i.Revision;n.Cp=t.Rj(r);n.Cq=!0}return n.Cp}},UV:{DN:64,RD:!0,RB:!1,DX:20,EQ:!1,Bv:3,RE:!1,Di:!1,RC:!0,FU:"/RevisionCheck",MV:[],Df:!1,Dg:!1,RF:null,MR:!0,Dh:!1,Dj:"RevisionCheck",Vj:function(){return this},HP:function(n,i,r,u){this.FL(n,t.Uj(i),r,u)},DP:function(n){return new l(n,this)},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.RevisionCheck=t,n.Cp=t,n.Cq=!0)},Cz:function(n){return n.Cp},Bj:function(n){u.Ze(n.v.p,n.BZ().Be()+"/RevisionCheck")}},UA:{DN:59,RD:!1,RB:!1,DX:18,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!1,FU:"/Schema",Df:!1,IK:!1,Dg:!1,RF:null,Dh:!0,SR:!1,Lw:new f(null,null,null,null),Dj:"Schema",Re:function(n){return n.Cn.BS.Schema!=null},HP:function(n,i,r,u){this.FL(n,t.Rj(i),r,u)},DP:function(n){return new o(n,this)},Ce:function(){return!0},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.Schema=t,n.Cp=t,n.Cq=!0);u.SF(n.Cn.v.p,n.Be(),t==null?"null":t)},Cz:function(n){if(!n.Cq){var i=n.Cn.BS,r=i.Schema;n.Cp=t.Rj(r);n.Cq=!0}return n.Cp}},TK:{DN:49,RD:!1,RB:!1,DX:14,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!1,FU:"/Warehouse",Df:!1,IK:!1,Dg:!1,RF:null,Dh:!0,SR:!1,Lw:new f(null,null,null,null),Dj:"Warehouse",Re:function(n){return n.Cn.BS.Warehouse!=null},HP:function(n,i,r,u){this.FL(n,t.Rj(i),r,u)},DP:function(n){return new o(n,this)},Ce:function(){return!0},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.Warehouse=t,n.Cp=t,n.Cq=!0);u.SF(n.Cn.v.p,n.Be(),t==null?"null":t)},Cz:function(n){if(!n.Cq){var i=n.Cn.BS,r=i.Warehouse;n.Cp=t.Rj(r);n.Cq=!0}return n.Cp}},Sp:{DN:44,RD:!1,RB:!1,DX:12,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!1,FU:"/Type",Df:!1,IK:!1,Dg:!1,RF:null,Dh:!0,SR:!1,Lw:new f(null,null,null,null),Dj:"Type",Re:function(n){return n.Cn.BS.Type!=null},HP:function(n,i,r,u){this.FL(n,t.Rj(i),r,u)},DP:function(n){return new o(n,this)},Ce:function(){return!0},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.Type=t,n.Cp=t,n.Cq=!0);u.SF(n.Cn.v.p,n.Be(),t==null?"null":t)},Cz:function(n){if(!n.Cq){var i=n.Cn.BS,r=i.Type;n.Cp=t.Rj(r);n.Cq=!0}return n.Cp}},Tf:{DN:54,RD:!1,RB:!1,DX:16,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!1,FU:"/Database",Df:!1,IK:!1,Dg:!1,RF:null,Dh:!0,SR:!1,Lw:new f(null,null,null,null),Dj:"Database",Re:function(n){return n.Cn.BS.Database!=null},HP:function(n,i,r,u){this.FL(n,t.Rj(i),r,u)},DP:function(n){return new o(n,this)},Ce:function(){return!0},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.Database=t,n.Cp=t,n.Cq=!0);u.SF(n.Cn.v.p,n.Be(),t==null?"null":t)},Cz:function(n){if(!n.Cq){var i=n.Cn.BS,r=i.Database;n.Cp=t.Rj(r);n.Cq=!0}return n.Cp}},SU:{DN:38,RD:!1,RB:!1,DX:9,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!1,FU:"/Name",Df:!1,IK:!1,Dg:!1,RF:null,Dh:!0,SR:!1,Lw:new f(null,null,null,null),Dj:"Name",Re:function(n){return n.Cn.BS.Name!=null},HP:function(n,i,r,u){this.FL(n,t.Rj(i),r,u)},DP:function(n){return new o(n,this)},Ce:function(){return!0},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.Name=t,n.Cp=t,n.Cq=!0);u.SF(n.Cn.v.p,n.Be(),t==null?"null":t)},Cz:function(n){if(!n.Cq){var i=n.Cn.BS,r=i.Name;n.Cp=t.Rj(r);n.Cq=!0}return n.Cp}},Vk:{DN:67,RD:!0,RB:!1,DX:21,EQ:!1,Bv:3,RE:!1,Di:!1,RC:!0,FU:"/SnowflakeInfoCheck",MV:[],Df:!1,Dg:!1,RF:null,MR:!0,Dh:!1,Dj:"SnowflakeInfoCheck",Vj:function(){return this},HP:function(n,i,r,u){this.FL(n,t.Uj(i),r,u)},DP:function(n){return new l(n,this)},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i.SnowflakeInfoCheck=t,n.Cp=t,n.Cq=!0)},Cz:function(n){return n.Cp},Bj:function(n){u.Ze(n.v.p,n.BZ().Be()+"/SnowflakeInfoCheck")}},Vz:{DN:40,RD:!0,RB:!1,DX:10,EQ:!1,Bv:0,RE:!1,Di:!1,RC:!0,FU:"/_defaultsRuleset",MV:[],Df:!1,Dg:!1,RF:null,MR:!1,Dh:!1,Dj:"_defaultsRuleset",Vj:function(){return this},HP:function(n,i,r,u){this.FL(n,t.Uj(i),r,u)},DP:function(n){return new l(n,this)},FL:function(n,t){var r=!n.Cq||n.Cp!=t,i;r&&(i=n.Cn.BS,i._defaultsRuleset=t,n.Cp=t,n.Cq=!0)},Cz:function(n){return n.Cp},Bj:function(n,t,i){n.v.I(function(){var u=n.DK(r.Qy.SU);u.Ra("NewStoredProcedure",t,i)});n.v.I(function(){var u=n.DK(r.Qy.Sp);u.Ra("StoredProcedure",t,i)});n.v.I(function(){var u=n.DK(r.Qy.TK);u.Ra("COMPUTE_WH",t,i)});n.v.I(function(){var u=n.DK(r.Qy.Tf);u.Ra("SNOWFLAKE_SAMPLE_DATA",t,i)});n.v.I(function(){var u=n.DK(r.Qy.UA);u.Ra("WEATHER",t,i)})}},Zp:function(){},Vj:function(){return this.EK.Ml("Revision",r.Qy.RA),this.EK.Ml("Name",r.Qy.SU),this.EK.Ml("Type",r.Qy.Sp),this.EK.Ml("Warehouse",r.Qy.TK),this.EK.Ml("Database",r.Qy.Tf),this.EK.Ml("Schema",r.Qy.UA),this.EK.Ml("RevisionCheck",r.Qy.UV.Vj()),this.EK.Ml("SnowflakeInfoCheck",r.Qy.Vk.Vj()),this.DJ=r.Qy.Vz,this},ML:function(n){return this.EK.KH(n)},BU:function(){return 6},Zs:function(){return[]},Ce:function(){return!0},Bc:function(n){return new tt(n)},Bj:function(n){n.v.I(function(){})}},Op:function(n){var t=this.Qr.KH(n);if(t==null)throw i.Qv(n);return t},Vj:function(){this.Qr.Ml("SnowFlakeEntities",r.Qy.Vj());this.Qr.Ml("SnowflakeConnection",r.WI.YX())},x:function(n){return this.Qr.KH(n)}},u={GR:'Ruleset: "',R:' to collection "',l:'Cleared Collection: "',c:'"',m:'Sorted Collection: "',BB:"--->  Rule Execution Begin  <---",P:"Error: ",d:"Removed Member: ",BC:"--->  Rule Execution Complete  <---",Q:"Added Member: ",e:' from collection "',Bh:'State Changed: "',FQ:'" set to ',SF:function(n,t,i){n.messages.push(this.Bh.concat(t,this.FQ,i))},Js:function(n,t){n.messages.push(this.m.concat(t,this.c))},IZ:function(n,t,i){n.messages.push(this.Q.concat(t,this.R,i,this.c))},r:function(n,t){n.messages.push(this.P+t)},NQ:function(n){n.messages.push(this.BC)},JN:function(n,t,i){n.messages.push(this.d.concat(t,this.e,i,this.c))},NM:function(n){n.messages.push(this.BB)},Ze:function(n,t){n.messages.push(this.GR.concat(t,this.c))},Jd:function(n,t){n.messages.push(this.l.concat(t,this.c))}},t={Ut:function(n){var i=/^\s*(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/([1-9][0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{2}[0-9])( ([1-9]|[01][0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?( ([aA][mM]|[pP][mM]))?)?\s*$/.exec(n),r,e;if(i==null)return null;var o=parseInt(i[3],10),f=parseInt(i[1],10),u=parseInt(i[2],10);return f===2&&(u>28&&!t.Uz(o)||u>29)||u===31&&[4,6,9,11].indexOf(f)>-1?null:(r=i[5]==null?0:parseInt(i[5],10),e=i[10]==null?null:i[10].toLowerCase(),r<12&&e==="pm"?r=r+12:r===12&&e==="am"&&(r=0),t.VD(o,f,u,r,i[6]==null?0:parseInt(i[6],10),i[8]==null?0:parseInt(i[8],10),0,null,null))},VO:function(n){var i=/^\s*([1-9][0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{2}[0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])(T([01][0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9])(.([0-9]{1,3}))?)?(Z|([+-])([01][0-9]|2[0-3]):?([0-5][0-9]))?)?\s*$/.exec(n);if(i==null)return null;var f=parseInt(i[1],10),u=parseInt(i[2],10),r=parseInt(i[3],10);return u===2&&(r>28&&!t.Uz(f)||r>29)||r===31&&[4,6,9,11].indexOf(u)>-1?null:t.VD(f,u,r,i[5]==null?0:parseInt(i[5],10),i[6]==null?0:parseInt(i[6],10),i[8]==null?0:parseInt(i[8],10),i[10]==null?0:parseInt(i[10],10),i[11]==="Z"?0:i[12]==null?null:parseInt(i[12]+i[13],10),i[11]==="Z"?0:i[12]==null?null:parseInt(i[14],10))},Ur:function(n){return t.Ut(n)||t.VO(n)||t.VU(n)},WZ:function(n){if(!isFinite(n))throw i.Wb();return n},VU:function(n){var i=/^\s*((Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s+)?(0?[1-9]|[12][0-9]|3[01])\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec),?\s+([1-9][0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{2}[0-9])(\s+([01][0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?(\s+([+-])([01][0-9]|2[0-3])([0-5][0-9]))?)?\s*$/.exec(n);if(i==null)return null;var f=parseInt(i[5],10),u=[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(i[4]),r=parseInt(i[3],10);return u===2&&(r>28&&!t.Uz(f)||r>29)||r===31&&[4,6,9,11].indexOf(u)>-1?null:t.VD(f,u,r,i[7]==null?0:parseInt(i[7],10),i[8]==null?0:parseInt(i[8],10),i[10]==null?0:parseInt(i[10],10),0,i[12]==null?null:parseInt(i[12]+i[13],10),i[12]==null?null:parseInt(i[14],10))},WV:function(n){var i=new Date(1970,0,1),r=(n.getTimezoneOffset()-i.getTimezoneOffset())*6e4;return t.WZ((n.valueOf()-i.valueOf()-r)/864e5)},VD:function(n,t,i,r,u,f,e,o,s){var h=new Date(n,t-1,i,r,u,f,e);return o!=null&&s!=null?(h.setUTCFullYear(n,t-1,i),h.setUTCHours(r-o,u+s,f,e)):h.setFullYear(n),h},Um:function(n){var r,u;if(n==null||(n=n.trim(),n.length===0))return!1;if(r=t.Uo(n),isFinite(r))return r!==0;if(u=t.Ur(n),u!=null)return u.valueOf()!==new Date(1970,0,1).valueOf();if(n=n.toUpperCase(),n==="FALSE")return!1;if(n==="TRUE")return!0;throw i.Vb(n);},Uz:function(n){return n%400==0||n%100!=0&&n%4==0},Uj:function(n){if(n==null)return null;if(typeof n=="string")return function(n){return n==null?null:t.Um(n)}(n);if(typeof n=="number"&&n%1==0||typeof n=="number")return n!==0;if(typeof n=="boolean")return n;if(Object.prototype.toString.call(n)=="[object Date]")return n.valueOf()!==new Date(1970,0,1).valueOf();throw i.Vf(typeof n);},Uo:function(n){return parseFloat(+n)},Rj:function(n){if(n==null)return null;if(typeof n=="string")return n;if(typeof n=="number"&&n%1==0||typeof n=="number")return n.toString();if(typeof n=="boolean")return n?"true":"false";if(Object.prototype.toString.call(n)=="[object Date]")return function(){var e=n.getMonth()+1,o=e.toString(),s=n.getDate().toString(),h=n.getFullYear().toString(),t=n.getHours(),i=n.getMinutes().toString(),r=n.getSeconds().toString(),u="",f;return t>12?(t=t-12,u="PM"):(u="PM",t===12||(u="AM",t===0&&(t=12))),f=t.toString(),i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),((o.concat("/")+s).concat("/")+h).concat(" ")+(((f.concat(":")+i).concat(":")+r).concat(" ")+u)}();throw i.Ru(typeof n);}},pt=function(){return new g(new ut(r))},wt=function(){return"5.7.2.240"},ii=function(){function r(){function t(n){var i=this;if(!(i instanceof t))return n===void 0?r():new t(n);n instanceof t?(i.s=n.s,i.e=n.e,i.c=n.c.slice()):c(i,n);i.constructor=t}return t.prototype=n,t.DP=f,t.RM=e,t.E_NEG=o,t.E_POS=s,t}function c(n,i){var u,r,f;for(i===0&&1/i<0?i="-0":h.test(i+="")||t(NaN),n.s=i.charAt(0)=="-"?(i=i.slice(1),-1):1,(u=i.indexOf("."))>-1&&(i=i.replace(".","")),(r=i.search(/e/i))>0?(u<0&&(u=r),u+=+i.slice(r+1),i=i.substring(0,r)):u<0&&(u=i.length),r=0;i.charAt(r)=="0";r++);if(r==(f=i.length))n.c=[n.e=0];else{for(;i.charAt(--f)=="0";);for(n.e=u-r-1,n.c=[],u=0;r<=f;n.c[u++]=+i.charAt(r++));}return n}function u(n,i,r,u){var o,e=n.c,f=n.e+i+1;if(r===1?u=e[f]>=5:r===2?u=e[f]>5||e[f]==5&&(u||f<0||e[f+1]!==o||e[f-1]&1):r===3?u=u||e[f]!==o||f<0:(u=!1,r!==0&&t("!Big.RM!")),f<1||!e[0])u?(n.e=-i,n.c=[1]):n.c=[n.e=0];else{if(e.length=f--,u)for(;++e[f]>9;)e[f]=0,f--||(++n.e,e.unshift(1));for(f=e.length;!e[--f];e.pop());}return n}function t(n){var t=new Error(n);t.name="BigError";throw t;}var f=20,e=1,i=1e6,o=-7,s=21,n={},h=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;return n.abs=function(){var n=new this.constructor(this);return n.s=1,n},n.div=function(n){var p=this,w=p.constructor,h=p.c,o=(n=new w(n)).c,v=p.s==n.s?1:-1,c=w.DP;if((c!==~~c||c<0||c>i)&&t("!Big.DP!"),!h[0]||!o[0])return h[0]==o[0]&&t(NaN),o[0]||t(v/0),new w(v*0);var s,b,y,l,e,tt,it=o.slice(),k=s=o.length,rt=h.length,r=h.slice(0,s),f=r.length,a=n,d=a.c=[],g=0,nt=c+(a.e=p.e-n.e)+1;for(a.s=v,v=nt<0?0:nt,it.unshift(0);f++<s;r.push(0));do{for(y=0;y<10;y++){if(s!=(f=r.length))l=s>f?1:-1;else for(e=-1,l=0;++e<s;)if(o[e]!=r[e]){l=o[e]>r[e]?1:-1;break}if(l<0){for(b=f==s?o:it;f;){if(r[--f]<b[f]){for(e=f;e&&!r[--e];r[e]=9);--r[e];r[f]+=10}r[f]-=b[f]}for(;!r[0];r.shift());}else break}d[g++]=l?y:++y;r[0]&&l?r[f]=h[k]||0:r=[h[k]]}while((k++<rt||r[0]!==tt)&&v--);return d[0]||g==1||(d.shift(),a.e--),g>nt&&u(a,c,w.RM,r[0]!==tt),a},n.sub=function(n){var f,u,o,c,s=this,l=s.constructor,e=s.s,i=(n=new l(n)).s;if(e!=i)return n.s=-i,s.add(n);var t=s.c.slice(),a=s.e,r=n.c,h=n.e;if(!t[0]||!r[0])return r[0]?(n.s=-i,n):new l(t[0]?s:0);if(e=a-h){for((c=e<0)?(e=-e,o=t):(h=a,o=r),o.reverse(),i=e;i--;o.push(0));o.reverse()}else for(u=((c=t.length<r.length)?t:r).length,e=i=0;i<u;i++)if(t[i]!=r[i]){c=t[i]<r[i];break}if(c&&(o=t,t=r,r=o,n.s=-n.s),(i=(u=r.length)-(f=t.length))>0)for(;i--;t[f++]=0);for(i=f;u>e;){if(t[--u]<r[u]){for(f=u;f&&!t[--f];t[f]=9);--t[f];t[u]+=10}t[u]-=r[u]}for(;t[--i]===0;t.pop());for(;t[0]===0;)t.shift(),--h;return t[0]||(n.s=1,t=[h=0]),n.c=t,n.e=h,n},n.add=function(n){var u,e=this,s=e.constructor,i=e.s,f=(n=new s(n)).s;if(i!=f)return n.s=-f,e.sub(n);var h=e.e,t=e.c,o=n.e,r=n.c;if(!t[0]||!r[0])return r[0]?n:new s(t[0]?e:i*0);if(t=t.slice(),i=h-o){for(i>0?(o=h,u=r):(i=-i,u=t),u.reverse();i--;u.push(0));u.reverse()}for(t.length-r.length<0&&(u=r,r=t,t=u),i=r.length,f=0;i;)f=(t[--i]=t[i]+r[i]+f)/10|0,t[i]%=10;for(f&&(t.unshift(f),++o),i=t.length;t[--i]===0;t.pop());return n.c=t,n.e=o,n},n.round=function(n,r){var f=this,e=f.constructor;return n==null?n=0:(n!==~~n||n<0||n>i)&&t("!round!"),u(f=new e(f),n,r==null?e.RM:r),f},n.mul=function(n){var t,s=this,h=s.constructor,f=s.c,e=(n=new h(n)).c,o=f.length,i=e.length,u=s.e,r=n.e;if(n.s=s.s==n.s?1:-1,!f[0]||!e[0])return new h(n.s*0);for(n.e=u+r,o<i&&(t=f,f=e,e=t,r=o,o=i,i=r),t=new Array(r=o+i);r--;t[r]=0);for(u=i;u--;){for(i=0,r=o+u;r>u;)i=t[r]+e[u]*f[r-u-1]+i,t[r--]=i%10,i=i/10|0;t[r]=(t[r]+i)%10}for(i&&++n.e,t[0]||t.shift(),u=t.length;!t[--u];t.pop());return n.c=t,n},n.toString=function(){var i=this,u=i.constructor,t=i.e,n=i.c.join(""),r=n.length;if(t<=u.E_NEG||t>=u.E_POS)n=n.charAt(0)+(r>1?"."+n.slice(1):"")+(t<0?"e":"e+")+t;else if(t<0){for(;++t;n="0"+n);n="0."+n}else if(t>0)if(++t>r)for(t-=r;t--;n+="0");else t<r&&(n=n.slice(0,t)+"."+n.slice(t));else r>1&&(n=n.charAt(0)+"."+n.slice(1));return i.s<0&&i.c[0]?"-"+n:n},r()}(),h;r.Vj();h={getVersion:wt,createRuleSession:pt};typeof define=="function"&&define.amd?define(function(){return h}):typeof module!="undefined"&&module.exports?module.exports=h:n.inrule=h})(this)
/* ------------------------------------------
This software includes third-party components licensed under the following:
------------------------------------------
The MIT Expat Licence.Copyright(c) 2012 Michael Mclaughlin Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */