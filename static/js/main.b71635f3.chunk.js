(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e){e.exports=[{x:15,y:78},{x:240,y:80},{x:455,y:83},{x:13,y:268},{x:237,y:268},{x:455,y:271},{x:14,y:453},{x:237,y:454},{x:454,y:456},{x:13,y:640},{x:236,y:638},{x:455,y:638}]},60:function(e,t,a){e.exports=a(80)},65:function(e,t,a){},66:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),i=a.n(r),l=(a(65),a(32)),c=a(20),s=a(38),u=a(33),m=a(39),p=(a(66),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).movingx=function(){var e=a.state.id+1;if(e<a.props.data.length){var t=a.props.data[e];a.setState({id:e,x:t.x,y:t.y})}else a.setState({id:0,x:a.props.data[0].x,y:a.props.data[0].y})},console.log(e),a.state={id:0,x:a.props.data[0].x,y:a.props.data[0].y},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null),o.a.createElement("div",{onClick:this.movingx,className:"cartoon",style:{backgroundImage:"url('"+this.props.src+"')",backgroundPositionX:-this.state.x+"px",backgroundPositionY:-this.state.y+"px",width:"210px",height:"180px"}}))}}]),t}(o.a.Component)),d=a(34),y=a(49),f=a(54),x=a(82),h=a(112),b=a(113),v=a(40),E=a(114),g=a(51),w=a.n(g),j=a(117),k=a(108),O=a(109),C=a(111),z=Object(x.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},list:{width:250},fullList:{width:"auto"}}});var B=function(){var e,t=z(),a=o.a.useState({left:!1}),n=Object(f.a)(a,2),r=n[0],i=n[1],l=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(Object(y.a)({},r,Object(d.a)({},e,t)))}};return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"static"},o.a.createElement(b.a,{variant:"dense"},o.a.createElement(E.a,{edge:"start",onClick:l("left",!0),className:t.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(w.a,null)),o.a.createElement(v.a,{variant:"h6",color:"inherit"},"Infinite Comics")),o.a.createElement(j.a,{open:r.left,onClose:l("left",!1),onOpen:l("left",!0)},(e="left",o.a.createElement("div",{className:t.list,role:"presentation",onClick:l(e,!1),onKeyDown:l(e,!1)},o.a.createElement(k.a,{component:"nav"},o.a.createElement(O.a,{button:!0,onClick:function(){alert("Qui dovrebbe renderizzare la componente Fumetto.js")}},o.a.createElement(C.a,{primary:"Alley"})),o.a.createElement(O.a,{onClick:function(){alert("Qui dovrebbe renderizzare la componente Dipinto.js")}},o.a.createElement(C.a,{primary:"Dipinto"}))))))))},N=a(53),S=a(115),D=a(116),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(B,null),o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,null),o.a.createElement(D.a,{maxWidth:"sm"},o.a.createElement("div",null,o.a.createElement(p,{src:"alley.jpg",data:N,bx:"0",by:"0",zoom:"1"})))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.b71635f3.chunk.js.map