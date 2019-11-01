(function(t){function r(r){for(var e,i,s=r[0],l=r[1],d=r[2],u=0,b=[];u<s.length;u++)i=s[u],o[i]&&b.push(o[i][0]),o[i]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);c&&c(r);while(b.length)b.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,r=0;r<n.length;r++){for(var a=n[r],e=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(e=!1)}e&&(n.splice(r--,1),t=i(i.s=a[0]))}return t}var e={},o={app:0},n=[];function i(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,r,a){i.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,r){if(1&r&&(t=i(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)i.d(a,e,function(r){return t[r]}.bind(null,e));return a},i.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=r,s=s.slice();for(var d=0;d<s.length;d++)r(s[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,r,a){t.exports=a("56d7")},"008c":function(t,r,a){},"034f":function(t,r,a){"use strict";var e=a("64a9"),o=a.n(e);o.a},1566:function(t,r,a){"use strict";var e=a("58bf"),o=a.n(e);o.a},"56d7":function(t,r,a){"use strict";a.r(r);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),o=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#/"}},[t._v("Vue js with crud with firestore")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("b-link",{staticClass:"nav-item nav-link active",attrs:{href:"#/add-board"}},[t._v("Add Board")])],1)])]),a("router-view")],1)},n=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"app"},s=i,l=(a("034f"),a("2877")),d=Object(l["a"])(s,o,n,!1,null,null,null),c=d.exports,u=a("8c4f"),b=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v("\n      Board List\n      "),a("b-link",{attrs:{href:"#/add-board"}},[t._v("(Add Board)")])],1),a("b-table",{attrs:{striped:"",hover:"",items:t.boards,fields:t.fields},scopedSlots:t._u([{key:"actions",fn:function(r){return[a("b-btn",{attrs:{size:"sm"},on:{click:function(a){return a.stopPropagation(),t.details(r.item)}}},[t._v("Details")])]}}])})],1)],1)},p=[],f=(a("ac6a"),a("8aa5")),h=a.n(f),m=(a("e71f"),{timestampsInSnapshots:!0}),v={apiKey:"AIzaSyBNT1kLE2HUiX7qriZERkFCJ1hhd3Sugj4",authDomain:"api-project-850016456775.firebaseapp.com",databaseURL:"https://api-project-850016456775.firebaseio.com",projectId:"api-project-850016456775",storageBucket:"api-project-850016456775.appspot.com",messagingSenderId:"850016456775",appId:"1:850016456775:web:3b47c15e11a9b37f"};h.a.initializeApp(v),h.a.firestore().settings(m);var g=h.a.firestore(),_={name:"BoardList",data:function(){return{fields:{title:{label:"Title",sortable:!0,class:"text-left"},actions:{label:"Action",class:"text-center"}},boards:[],errors:[],ref:g.collection("boards")}},created:function(){var t=this;this.ref.onSnapshot(function(r){t.boards=[],r.forEach(function(r){t.boards.push({key:r.id,title:r.data().title})})})},methods:{details:function(t){J.push({name:"ShowBoard",params:{id:t.key}})}}},k=_,y=(a("bfbd"),Object(l["a"])(k,b,p,!1,null,null,null)),w=y.exports,x=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v("\n      Edit Board\n      "),a("b-link",{attrs:{href:"#/"}},[t._v("(Board List)")])],1),a("b-jumbotron",[a("template",{slot:"header"},[t._v("\n        "+t._s(t.board.title)+"\n      ")]),a("template",{slot:"lead"},[t._v("\n        Title: "+t._s(t.board.title)),a("br"),t._v("\n        Description: "+t._s(t.board.description)),a("br"),t._v("\n        Author: "+t._s(t.board.author)),a("br")]),a("hr",{staticClass:"my-4"}),a("b-btn",{staticClass:"edit-btn",attrs:{variant:"success"},on:{click:function(r){return r.stopPropagation(),t.editboard(t.key)}}},[t._v("Edit")]),a("b-btn",{attrs:{variant:"danger"},on:{click:function(r){return r.stopPropagation(),t.deleteboard(t.key)}}},[t._v("Delete")])],2)],1)],1)},E=[],B={name:"ShowBoard",data:function(){return{key:"",board:{}}},created:function(){var t=this,r=g.collection("boards").doc(this.$route.params.id);r.get().then(function(r){r.exists?(t.key=r.id,t.board=r.data()):alert("No such document!")})},methods:{editboard:function(t){J.push({name:"EditBoard",params:{id:t}})},deleteboard:function(t){g.collection("boards").doc(t).delete().then(function(){J.push({name:"BoardList"})}).catch(function(t){alert("Error removing document: ",t)})}}},j=B,S=(a("1566"),Object(l["a"])(j,x,E,!1,null,null,null)),$=S.exports,z=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v("\n      Add Board\n      "),a("b-link",{attrs:{href:"#/"}},[t._v("(Board List)")])],1),a("b-jumbotron",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[a("b-form-input",{attrs:{id:"title"},model:{value:t.board.title,callback:function(r){t.$set(t.board,"title","string"===typeof r?r.trim():r)},expression:"board.title"}})],1),a("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[a("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.board.description,callback:function(r){t.$set(t.board,"description",r)},expression:"board.description"}},[t._v(t._s(t.board.description))])],1),a("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[a("b-form-input",{attrs:{id:"author"},model:{value:t.board.author,callback:function(r){t.$set(t.board,"author","string"===typeof r?r.trim():r)},expression:"board.author"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1)],1)],1)],1)},A=[],O={name:"AddBoard",data:function(){return{ref:g.collection("boards"),board:{}}},methods:{onSubmit:function(t){var r=this;t.preventDefault(),this.ref.add({title:this.board.title,description:this.board.description,author:this.board.author}).then(function(t){r.board.title="",r.board.description="",r.board.author="",J.push({name:"BoardList"})}).catch(function(t){alert("Error adding document: ",t)})}}},C=O,L=(a("f1a0"),Object(l["a"])(C,z,A,!1,null,null,null)),P=L.exports,T=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v("\n      Edit Board\n      "),a("router-link",{attrs:{to:{name:"ShowBoard",params:{id:t.key}}}},[t._v("(Show Board)")])],1),a("b-jumbotron",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[a("b-form-input",{attrs:{id:"title"},model:{value:t.board.title,callback:function(r){t.$set(t.board,"title","string"===typeof r?r.trim():r)},expression:"board.title"}})],1),a("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[a("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.board.description,callback:function(r){t.$set(t.board,"description",r)},expression:"board.description"}},[t._v(t._s(t.board.description))])],1),a("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[a("b-form-input",{attrs:{id:"author"},model:{value:t.board.author,callback:function(r){t.$set(t.board,"author","string"===typeof r?r.trim():r)},expression:"board.author"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")])],1)],1)],1)],1)},D=[],H={name:"EditBoard",data:function(){return{key:this.$route.params.id,board:{}}},created:function(){var t=this,r=g.collection("boards").doc(this.$route.params.id);r.get().then(function(r){r.exists?t.board=r.data():alert("No such document!")})},methods:{onSubmit:function(t){var r=this;t.preventDefault();var a=g.collection("boards").doc(this.$route.params.id);a.set(this.board).then(function(t){r.key="",r.board.title="",r.board.description="",r.board.author="",J.push({name:"ShowBoard",params:{id:r.$route.params.id}})}).catch(function(t){alert("Error adding document: ",t)})}}},M=H,N=(a("8b55"),Object(l["a"])(M,T,D,!1,null,null,null)),I=N.exports;e["default"].use(u["a"]);var J=new u["a"]({routes:[{path:"/",name:"BoardList",component:w},{path:"/show-board/:id",name:"ShowBoard",component:$},{path:"/add-board",name:"AddBoard",component:P},{path:"/edit-board/:id",name:"EditBoard",component:I}]}),U=a("5f5b");a("f9e3"),a("2dd8");e["default"].config.productionTip=!1,e["default"].use(U["a"]),new e["default"]({router:J,render:function(t){return t(c)}}).$mount("#app")},"58bf":function(t,r,a){},"64a9":function(t,r,a){},"8b55":function(t,r,a){"use strict";var e=a("ac01"),o=a.n(e);o.a},ac01:function(t,r,a){},bfbd:function(t,r,a){"use strict";var e=a("cb8d"),o=a.n(e);o.a},cb8d:function(t,r,a){},f1a0:function(t,r,a){"use strict";var e=a("008c"),o=a.n(e);o.a}});
//# sourceMappingURL=app.8f8ebe32.js.map