(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t){},322:function(e,t,a){e.exports=a(892)},328:function(e,t,a){},598:function(e,t,a){},892:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(8),l=a.n(n),c=(a(327),a(328),a(295)),r=a(296),o=a(318),u=a(297),h=a(319),d=a(298),v=a(906),p=a(902),m=a(900),y=a(897),f=a(898),b=a(907),L=a(901),E=a(904),C=a(903),w=a(905),U=a(899),k=(a(598),""),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={tooltip:!0,deviceList:!0,deviceCard:!0,publishableKey:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_PUBLISHABLE_KEY||k,defaultLayer:"base",deviceId:"",customLayerUrl:"",assetsUrl:"",code:'import { LiveView } from "hypertrack-views-react";\n\n<LiveView\n\tpublishableKey="'.concat(Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_PUBLISHABLE_KEY||k||"",'"\n/>')},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"setTooltip",value:function(){var e=this;this.setState({tooltip:!this.state.tooltip},function(){e.updateCode()})}},{key:"setDeviceList",value:function(){var e=this;this.setState({deviceList:!this.state.deviceList},function(){e.updateCode()})}},{key:"setDeviceCard",value:function(){var e=this;this.setState({deviceCard:!this.state.deviceCard},function(){e.updateCode()})}},{key:"setPusblishableKey",value:function(e){var t=this;this.setState({publishableKey:e.target.value},function(){t.updateCode()})}},{key:"setDefaultLayer",value:function(e){var t=this;this.setState({defaultLayer:e},function(){t.updateCode()})}},{key:"setDeviceId",value:function(e){var t=this;this.setState({deviceId:e.target.value},function(){t.updateCode()})}},{key:"setCustomLayer",value:function(e){var t=this;this.setState({customLayerUrl:e.target.value},function(){t.updateCode()})}},{key:"setAssetsUrl",value:function(e){var t=this;this.setState({assetsUrl:e.target.value},function(){t.updateCode()})}},{key:"updateCode",value:function(){var e='import { LiveView } from "hypertrack-views-react";\n\n<LiveView \n\tpublishableKey="'.concat(this.state.publishableKey,'"\n');this.state.tooltip||(e+="\tshowTooltips={".concat(this.state.tooltip,"}\n")),this.state.deviceList||(e+="\tshowDeviceList={".concat(this.state.deviceList,"}\n")),this.state.deviceCard||(e+="\tshowDeviceCard={".concat(this.state.deviceCard,"}\n")),""!==this.state.deviceId&&(e+='\tselectedDeviceId="'.concat(this.state.deviceId,'"\n')),"base"!==this.state.defaultLayer&&(e+='\tdefaultLayer="'.concat(this.state.defaultLayer,'"\n')),""!==this.state.customLayerUrl&&(e+='\tcustomLayerUrl="'.concat(this.state.customLayerUrl,'"\n')),""!==this.state.assetsUrl&&(e+='\tassetsUrl="'.concat(this.state.assetsUrl,'"\n')),e+="/>",this.setState({code:e})}},{key:"render",value:function(){var e=this,t=v.a.Content,a=p.a.Option,s=m.a.Title;return i.a.createElement("div",{className:"App"},i.a.createElement(v.a,null,i.a.createElement(t,null,i.a.createElement(y.a,{style:{padding:"25px"}},i.a.createElement(f.a,{span:16,offset:8},i.a.createElement(s,null,"HyperTrack Views ReactJS"))),i.a.createElement(y.a,{style:{padding:"25px"}},i.a.createElement(f.a,{span:20,offset:2},""===this.state.publishableKey&&i.a.createElement(b.a,{style:{height:"300px"},title:"Please set your publishable key",subTitle:i.a.createElement("a",{href:"https://dashboard.hypertrack.com/setup",target:"_blank"},"Get it from the HyperTrack Dashboard")}),""!==this.state.publishableKey&&i.a.createElement(d.LiveView,{publishableKey:this.state.publishableKey,showTooltips:this.state.tooltip,showDeviceList:this.state.deviceList,selectedDeviceId:this.state.deviceId,defaultLayer:this.state.defaultLayer,customLayerUrl:this.state.customLayerUrl,className:"liveView",assetsUrl:this.state.assetsUrl}))),i.a.createElement(y.a,{style:{padding:"25px"}},i.a.createElement(f.a,{span:9,offset:2},i.a.createElement(L.a,{layout:"vertical"},i.a.createElement(L.a.Item,{label:"View Options"},i.a.createElement(E.a,{checked:this.state.tooltip,onChange:function(){return e.setTooltip()}},"Show tooltips"),i.a.createElement(E.a,{checked:this.state.deviceList,onChange:function(){return e.setDeviceList()}},"Show device list"),i.a.createElement(E.a,{checked:this.state.deviceCard,onChange:function(){return e.setDeviceCard()}},"Show device card")),i.a.createElement(L.a.Item,{label:"Publishable Key"},i.a.createElement(C.a,{id:"publishableKeyInput",placeholder:"Your Publishable Key",value:this.state.publishableKey,onChange:function(t){return e.setPusblishableKey(t)}})),i.a.createElement(L.a.Item,{label:"Device ID"},i.a.createElement(C.a,{placeholder:"Your Device ID",value:this.state.deviceId,onChange:function(t){return e.setDeviceId(t)}})),i.a.createElement(L.a.Item,{label:"Custom Layer URL"},i.a.createElement(C.a,{placeholder:"Your Custom Layer URL",value:this.state.customLayerUrl,onChange:function(t){return e.setCustomLayer(t)}})),i.a.createElement(L.a.Item,{label:"Asset URL"},i.a.createElement(C.a,{placeholder:"Your Assets URL",value:this.state.assetsUrl,onChange:function(t){return e.setAssetsUrl(t)}})),i.a.createElement(L.a.Item,{label:"Default Layer"},i.a.createElement(p.a,{defaultValue:this.state.defaultLayer,onChange:function(t){return e.setDefaultLayer(t)}},["base","street","satellite","custom"].map(function(e){return i.a.createElement(a,{key:e},e)}))))),i.a.createElement(f.a,{span:9,offset:2},i.a.createElement(w.a,{wrapLines:!0,language:"javascript",style:U.a},this.state.code))))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[322,1,2]]]);
//# sourceMappingURL=main.ddb9499a.chunk.js.map