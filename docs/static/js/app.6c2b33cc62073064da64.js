webpackJsonp([0],{"50WC":function(t,n){},"63W+":function(t,n){},B0V3:function(t,n){},D4uH:function(t,n,e){"use strict";var o={},i={name:"icon",props:{name:{type:String,validator:function(t){return!t||t in o||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?o[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,e=t.height;return Math.max(n,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,n={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,e,o){var i="fa-"+(r++).toString(16);return n[o]=i,' id="'+i+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,e,o,i){var r=e||i;return r&&n[r]?"#"+n[r]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var n=0,e=0;this.$children.forEach(function(o){o.outerScale=t.normalizedScale,n=Math.max(n,o.width),e=Math.max(e,o.height)}),this.childrenWidth=n,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(e-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var n in t){var e=t[n];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),o[n]=e}},icons:o},r=870711;var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n,o){return e("path",t._b({key:"path-"+o},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n,o){return e("polygon",t._b({key:"polygon-"+o},"polygon",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[e("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var c=e("VU/8")(i,a,!1,function(t){e("EMrj")},null,null);n.a=c.exports},DbTK:function(t,n){},EMrj:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i=(e("8AWp"),e("+NLg"),e("7mFz"),e("4M9W"),e("15Ef"),{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",t._l(t.nav,function(n){return e("li",{key:n.text,staticClass:"hvr-underline-reveal",attrs:{to:n.link}},[e("router-link",{attrs:{to:n.link}},[e("i",{class:n.icon}),t._v(" "),e("span",[t._v(t._s(n.text))])])],1)}))},staticRenderFns:[]});var r={name:"App",data:function(){return{menu:"Discover More",pageColor:this.$route.meta.color,btnColor:this.$route.meta.color,textColor:"#ecf0f1",borderColor:this.$route.meta.color,openNav:!1}},methods:{mouseOver:function(){this.btnColor="#ecf0f1",this.textColor=this.$route.meta.color,this.borderColor="#ecf0f1"},mouseOut:function(){this.btnColor=this.$route.meta.color,this.textColor="#ecf0f1",this.borderColor=this.$route.meta.color},clickNavButton:function(){this.btnColor=this.$route.meta.color,this.openNav=!1}},components:{Nav:e("VU/8")({name:"Nav",data:function(){return{isShow:!1,nav:[{icon:"fa fa-home",text:"Home",link:"/"},{icon:"fa fa-user",text:"About Me",link:"about"},{icon:"fas fa-medal",text:"Skills",link:"/Skills"},{icon:"fa fa-graduation-cap",text:"Education",link:"/Education"},{icon:"fa fa-briefcase",text:"Work Exp",link:"/WorkExp"},{icon:"fa fa-comment",text:"Contact",link:"/Contact"}],btnColor:this.$route.meta.color,fontColor:"#ecf0f1",borderT:"transparent"}}},i,!1,function(t){e("DbTK")},"data-v-cc8f935e",null).exports}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:{background:t.$route.meta.color},attrs:{id:"app"}},[e("router-view",{staticClass:"view",style:{outlineColor:t.$route.meta.color}}),t._v(" "),e("button",{style:{background:t.btnColor,color:t.textColor},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:function(n){t.openNav=!0}}},[t._v("\n  "+t._s(t.menu)+"\n  ")]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.openNav?e("nav",{staticClass:"nav"},[e("div",{on:{click:t.clickNavButton}},[e("Nav")],1)]):t._e()])],1)},staticRenderFns:[]};var c=e("VU/8")(r,a,!1,function(t){e("YSBI")},null,null).exports,s=e("/ocq"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var u=e("VU/8")({name:"Home"},l,!1,function(t){e("zTtY")},"data-v-43602779",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var f=e("VU/8")({name:"About"},h,!1,function(t){e("50WC")},"data-v-40d198ed",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=e("VU/8")({name:"Education"},p,!1,function(t){e("l2Qv")},"data-v-3ec881a3",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var v=e("VU/8")({name:"Skills"},m,!1,function(t){e("63W+")},"data-v-4273bfce",null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var b=e("VU/8")({name:"WorkExp"},g,!1,function(t){e("B0V3")},"data-v-1d84b5aa",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var x=e("VU/8")({name:"Contact"},_,!1,function(t){e("Q9yR")},"data-v-8d265c5a",null).exports;o.a.use(s.a);var k=new s.a({routes:[{path:"/",name:"Home",component:u,meta:{color:"#2c3e50",ifg:!0}},{path:"/About",name:"About",component:f,meta:{color:"#3f51b5",ifg:!1}},{path:"/Education",name:"Education",component:d,meta:{color:"#2980b9",ifg:!1}},{path:"/Skills",name:"Skills",component:v,meta:{color:"#8e44ad",ifg:!1}},{path:"/WorkExp",name:"WorkExp",component:b,meta:{color:"#27ae60",ifg:!1}},{path:"/Contact",name:"Contact",component:x,meta:{color:"#16a085",ifg:!1}}]}),y=(e("uMhA"),e("Pipe"),e("D4uH"));o.a.component("icon",y.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:k,components:{App:c},template:"<App/>"})},Pipe:function(t,n){},Q9yR:function(t,n){},YSBI:function(t,n){},l2Qv:function(t,n){},uMhA:function(t,n){},zTtY:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.6c2b33cc62073064da64.js.map