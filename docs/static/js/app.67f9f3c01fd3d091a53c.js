webpackJsonp([0],{"5dlR":function(e,t){},D4uH:function(e,t,i){"use strict";var s={},a={name:"icon",props:{name:{type:String,validator:function(e){return!e||e in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,i=e.height;return Math.max(t,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,i,s){var a="fa-"+(n++).toString(16);return t[s]=a,' id="'+a+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,i,s,a){var n=i||a;return n&&t[n]?"#"+t[n]:e}),e}},mounted:function(){var e=this;if(this.name||0!==this.$children.length){if(!this.icon){var t=0,i=0;this.$children.forEach(function(s){s.outerScale=e.normalizedScale,t=Math.max(t,s.width),i=Math.max(i,s.height)}),this.childrenWidth=t,this.childrenHeight=i,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(i-e.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(e){for(var t in e){var i=e[t];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),s[t]=i}},icons:s},n=870711;var o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,s){return i("path",e._b({key:"path-"+s},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,s){return i("polygon",e._b({key:"polygon-"+s},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[i("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var r=i("VU/8")(a,o,!1,function(e){i("EMrj")},null,null);t.a=r.exports},EMrj:function(e,t){},G0je:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),a=(i("8AWp"),i("D/Bo"),i("7mFz"),i("4M9W"),i("15Ef"),{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("nav",[i("ul",e._l(e.nav,function(t){return i("li",{key:t.text},[i("router-link",{attrs:{to:t.link}},[i("span",[e._v(e._s(t.text))]),e._v(" "),i("icon",{attrs:{name:t.icon}})],1)],1)}))])])},staticRenderFns:[]});var n={name:"App",components:{Header:i("VU/8")({name:"Header",data:function(){return{nav:[{icon:"home",text:"Home",link:"/"},{icon:"check",text:"Skills",link:"/Skills"},{icon:"graduation-cap",text:"Education",link:"/Education"},{icon:"briefcase",text:"Work Exp",link:"/WorkExp"},{icon:"user",text:"Contact",link:"/Contact"}]}}},a,!1,function(e){i("yOUE")},"data-v-1239f2d4",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:{background:this.$route.meta.color},attrs:{id:"app"}},[t("Header"),this._v(" "),t("main",[t("router-view")],1)],1)},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(e){i("QFL+")},null,null).exports,u=i("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("About Me")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")])])}]};var c=i("VU/8")({name:"AboutMe"},l,!1,function(e){i("o24b")},"data-v-4acae6d5",null).exports,d={name:"Close",data:function(){return{crossSize:this.btnSize,crossColor:this.xColor,backColor:this.bgColor,circleColor:this.xColor,barSize:this.xSize}},props:{xColor:String,bgColor:String,btnSize:String,xSize:String},methods:{mouseOver:function(){this.crossColor=this.bgColor,this.backColor=this.xColor},mouseOut:function(){this.crossColor=this.xColor,this.backColor=this.bgColor}}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cross-btn",style:{width:e.crossSize+"px",height:e.crossSize+"px",background:e.backColor,borderColor:e.circleColor},on:{mouseover:e.mouseOver,mouseout:e.mouseOut}},[i("div",{staticClass:"bar",style:{width:e.barSize+"px"}},[i("div",{staticClass:"bar1",style:{background:e.crossColor,width:e.barSize+"px"}}),e._v(" "),i("div",{staticClass:"bar2",style:{background:e.crossColor,width:e.barSize+"px"}})])])},staticRenderFns:[]};var v={name:"Home",data:function(){return{isShow:!1}},components:{AboutMe:c,Close:i("VU/8")(d,p,!1,function(e){i("ttWG")},null,null).exports}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"box"}},[e.isShow?e._e():i("div",{staticClass:"basic"},[e._m(0),e._v(" "),i("section",{staticClass:"welcome"},[i("h1",[e._v("I am Khee")]),e._v(" "),i("h2",[e._v("&")]),e._v(" "),i("h1",[e._v("I make Websites")]),e._v(" "),i("button",{on:{click:function(t){e.isShow=!e.isShow}}},[e._v("Discover More")])])]),e._v(" "),i("div",{staticClass:"detail",class:{active:e.isShow}},[i("AboutMe"),e._v(" "),e.isShow?i("div",{staticClass:"close",on:{click:function(t){e.isShow=!e.isShow}}},[i("Close",{attrs:{"btn-size":"40","x-size":"24","bg-color":"#ecf0f1","x-color":"#2c3e50"}})],1):e._e()],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hi"},[this._v("\n      Hi"),t("span",[this._v("!")])])}]};var m=i("VU/8")(v,h,!1,function(e){i("ZehM")},"data-v-4c6a519a",null).exports,f={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  "+this._s(this.$route.meta.color)+"\n")])},staticRenderFns:[]};var _=i("VU/8")({name:"Education"},f,!1,function(e){i("cvxk")},"data-v-4c719d84",null).exports,b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"left"},[i("h1",[e._v("Skills and Abilities")]),e._v(" "),i("p",[e._v(e._s(e.msg))]),e._v(" "),i("div",{staticClass:"drag"})]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"right"},[i("h1",[e._v("I Use..")]),e._v(" "),i("div",[i("ul",[i("li",[i("i",{staticClass:"fab fa-html5"}),e._v(" "),i("span",[e._v("HTML5")])]),e._v(" "),i("li",[i("i",{staticClass:"fab fa-css3"}),e._v(" "),i("span",[e._v("CSS3")])]),e._v(" "),i("li",[i("ul",[i("li",[i("i",{staticClass:"fab fa-sass"}),e._v(" "),i("span",[e._v("Sass")])]),e._v(" "),i("li",[i("i",{staticClass:"fab fa-less"}),e._v(" "),i("span",[e._v("Less")])])])]),e._v(" "),i("li",[i("i",{staticClass:"fab fa-js"}),e._v(" "),i("span",[e._v("JS")])]),e._v(" "),i("li",[i("ul",[i("li",[i("i",{staticClass:"fab fa-react"}),e._v(" "),i("span",[e._v("React.js")])]),e._v(" "),i("li",[i("i",{staticClass:"fab fa-vuejs"}),e._v(" "),i("span",[e._v("Vue.js")])])])]),e._v(" "),i("li",[i("i",{staticClass:"fab fa-wordpress"}),e._v(" "),i("span",[e._v("wordpress")])]),e._v(" "),i("li",[i("i",{staticClass:"fab fa-github"}),e._v(" "),i("span",[e._v("Github")])])])])])}]};var g=i("VU/8")({name:"Skills",data:function(){return{msg:"As more and more website platforms are released nowadays, I still prefer to make responsive websites using my own Sass code. "}}},b,!1,function(e){i("uHe1")},"data-v-1334df9e",null).exports,C={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  "+this._s(this.$route.meta.color)+"\n")])},staticRenderFns:[]};var x=i("VU/8")({name:"WorkExp"},C,!1,function(e){i("5dlR")},"data-v-1c9fd884",null).exports,S={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  "+this._s(this.$route.meta.color)+"\n")])},staticRenderFns:[]};var w=i("VU/8")({name:"Contact"},S,!1,function(e){i("G0je")},"data-v-6e37503e",null).exports;s.a.use(u.a);var k=new u.a({routes:[{path:"/",name:"Home",component:m,meta:{color:"#2c3e50"}},{path:"/Education",name:"Education",component:_,meta:{color:"#2980b9"}},{path:"/Skills",name:"Skills",component:g,meta:{color:"#8e44ad"}},{path:"/WorkExp",name:"WorkExp",component:x,meta:{color:"#27ae60"}},{path:"/Contact",name:"Contact",component:w,meta:{color:"#16a085"}}]}),q=(i("uMhA"),i("D4uH"));s.a.component("icon",q.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:k,components:{App:r},template:"<App/>"})},"QFL+":function(e,t){},ZehM:function(e,t){},cvxk:function(e,t){},o24b:function(e,t){},ttWG:function(e,t){},uHe1:function(e,t){},uMhA:function(e,t){},yOUE:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.67f9f3c01fd3d091a53c.js.map