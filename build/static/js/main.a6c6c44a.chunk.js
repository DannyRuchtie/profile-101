(this["webpackJsonphi-key-bubbles"]=this["webpackJsonphi-key-bubbles"]||[]).push([[0],{44:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);var c=a(36),n=a.n(c),r=a(5),s=(a(44),a(8)),i=a(0),o=a(15),h=a(51),l=a(52),j=a(53),d=a(35),b=a(10),u=Array.from({length:60},(function(){return{factor:i.MathUtils.randInt(20,100),speed:i.MathUtils.randFloat(.01,1),xFactor:i.MathUtils.randFloatSpread(80),yFactor:i.MathUtils.randFloatSpread(40),zFactor:i.MathUtils.randFloatSpread(40)}}));function f(){return Object(b.jsx)("div",{className:"canvasholder",children:Object(b.jsxs)(o.a,{shadows:!0,dpr:[1,2],gl:{alpha:!1,antialias:!1},camera:{fov:20,position:[0,0,60],near:30,far:150},children:[Object(b.jsx)("color",{attach:"background",args:["#fff"]}),Object(b.jsx)("pointLight",{position:[-100,-100,-100],intensity:4,color:"#fff"}),Object(b.jsx)(x,{}),Object(b.jsx)(h.a,{rotation:[Math.PI/2,0,0],position:[0,-30,0],opacity:1,width:130,height:130,blur:1,far:40}),Object(b.jsx)(d.a,{multisampling:0,children:Object(b.jsx)(d.b,{samples:2,radius:1,intensity:1,luminanceInfluence:.1,color:"fff"})}),Object(b.jsx)(r.Suspense,{fallback:null,children:Object(b.jsx)(l.a,{preset:"studio"})})]})})}function x(){var t=Object(r.useRef)();return Object(o.c)((function(e,a){t.current.rotation.y=i.MathUtils.damp(t.current.rotation.y,-e.mouse.x*Math.PI/6,.75,a)})),Object(b.jsxs)(j.b,{limit:u.length,ref:t,castShadow:!0,receiveShadow:!0,position:[1,10,0],children:[Object(b.jsx)("sphereBufferGeometry",{args:[1,24,24]}),Object(b.jsx)("meshStandardMaterial",{roughness:1,color:"#fff"}),u.map((function(t,e){return Object(b.jsx)(O,Object(s.a)({},t),e)}))]})}function O(t){var e=t.factor,a=t.speed,c=t.xFactor,n=t.yFactor,s=t.zFactor,i=Object(r.useRef)();return Object(o.c)((function(t){var r=e+t.clock.elapsedTime*(a/2);i.current.scale.setScalar(Math.max(1.5,5*Math.cos(r))),i.current.position.set(Math.cos(r)+Math.sin(1*r)/10+c+Math.cos(r/10*e)+Math.sin(1*r)*e/10,Math.sin(r)+Math.cos(2*r)/10+n+Math.sin(r/10*e)+Math.cos(2*r)*e/10,Math.sin(r)+Math.cos(2*r)/10+s+Math.cos(r/10*e)+Math.sin(3*r)*e/10)})),Object(b.jsx)(j.a,{ref:i})}n.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("header",{children:Object(b.jsx)("div",{children:Object(b.jsx)("a",{to:"/",children:"Design & Technology"})})}),Object(b.jsx)("div",{className:"page",children:Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("h1",{children:"Danny Ruchtie"})})}),Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{target:"_blank",href:"http://codesandbox.io/u/dannyruchtie",children:"csb"}),Object(b.jsx)("a",{target:"_blank",href:"https://twitter.com/DannyRuchtie",children:"tw"}),Object(b.jsx)("a",{target:"_blank",href:"https://www.instagram.com/dannyruchtie/",children:"ig"}),Object(b.jsx)("a",{target:"_blank",href:"https://vimeo.com/druchtie",children:"vm"}),Object(b.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/dannyruchtie/",children:"li"}),Object(b.jsx)("a",{href:"mailto:druchtie@gmail.com",children:"mail"})]})})]}),Object(b.jsx)(f,{})]}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a6c6c44a.chunk.js.map