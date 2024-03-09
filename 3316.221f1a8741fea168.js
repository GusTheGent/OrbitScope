"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3316],{3316:(R,l,n)=>{n.r(l),n.d(l,{MarsWeatherPageModule:()=>C});var g=n(1368),m=n(4716),o=n(2112),c=n(8271),d=n(1528),e=n(4496),f=n(5988);const M={pageTitle:"INSIGHT: MARS WEATHER SERVICE",pageDescription:"NASAs InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars equator. Please note that there are sometimes problems with the sensors on Mars that result in missing data! If you see a long gap, a search result may bring up more information on whether it is a long-lasting problem. This API provides per-Sol summary data for each of the last seven available Sols (Martian Days). As more data from a particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and consequently may change as more data are received on Earth. Additionally, please note that wind and other sensor data may not exist for certain date ranges.",pageSource:"https://api.nasa.gov/"};var h=n(7048),v=n(8996),p=n(6716);let P=(()=>{var t;class r{constructor(){this.http=(0,e.uUt)(h.KK),this.BASE_URL=p.O.BASE_URL}getWeather(){const a=(new h.i4).set("api_key",p.O.API_KEY).set("feedtype","json").set("ver","1.0");return this.http.get(`${this.BASE_URL}/${v.i.INSIGHT}`,{params:a})}}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275prov=e.wxM({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var y=n(5272);const W=[{path:"",component:(()=>{var t;class r{constructor(){this.modalController=(0,e.uUt)(o.qS),this.marsWeatherService=(0,e.uUt)(P)}ngOnInit(){this.marsWeatherService.getWeather().subscribe(a=>{const{sol_keys:i,validity_checks:u,...E}=a;console.log(E),console.log(i),console.log(u)})}onViewPageInfo(){var a=this;return(0,d.c)(function*(){yield(yield a.modalController.create({component:f.y,componentProps:{data:M},cssClass:"page-info-modal"})).present()})()}}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.In1({type:t,selectors:[["app-mars-weather"]],decls:18,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["id","container"],[1,"capitalize"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"],["collapse","fade",3,"translucent"],[3,"click"]],template:function(a,i){1&a&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.wR5(3,"ion-menu-button"),e.C$Y(),e.I0R(4,"ion-title"),e.OEk(5,"Mars Weather Service"),e.C$Y()()(),e.I0R(6,"ion-content",2)(7,"div",3)(8,"strong",4),e.OEk(9,"Mars weather"),e.C$Y(),e.I0R(10,"p"),e.OEk(11," Explore "),e.I0R(12,"a",5),e.OEk(13,"UI Components"),e.C$Y()()()(),e.I0R(14,"ion-footer",6)(15,"ion-toolbar")(16,"ion-title")(17,"app-page-info",7),e.qCj("click",function(){return i.onViewPageInfo()}),e.C$Y()()()()),2&a&&(e.E7m("translucent",!0),e.yG2(6),e.E7m("fullscreen",!0),e.yG2(8),e.E7m("translucent",!0))},dependencies:[o.GS,o._i,o.eV,o.wB,o.QT,o.tM,o.Md,y.m],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()}];let I=(()=>{var t;class r{}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[c.qQ.forChild(W),c.qQ]}),r})();var S=n(9280);let C=(()=>{var t;class r{}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[g.MD,m.y,o.wZ,I,S.k]}),r})()}}]);