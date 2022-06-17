(function(){"use strict";var e={50818:function(e,t,o){o(66992),o(88674),o(19601),o(17727);var i=o(20144),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app"},[o("header",{staticClass:"app-header"},[o("ui5-shellbar",{attrs:{"primary-title":"UI5 Web Components Vue Sample Application","show-notifications":"","notifications-count":"2"}},[o("img",{staticClass:"app-header-logo",attrs:{slot:"logo",src:e.logo},slot:"logo"}),o("ui5-shellbar-item",{ref:"themeChangeItem",attrs:{icon:"palette",text:"Theme"},on:{click:e.handleThemeSettingsToggle}}),o("ui5-avatar",{attrs:{slot:"profile",size:"XS",initials:"JD"},slot:"profile"})],1)],1),o("ui5-tabcontainer",{attrs:{fixed:"",collapsed:""}},[o("ui5-tab",{attrs:{text:"My Todos"}})],1),o("section",{staticClass:"app-content"},[o("div",{staticClass:"create-todo-wrapper"},[o("ui5-input",{ref:"todoInput",staticClass:"add-todo-element-width",attrs:{placeholder:"Type a task...",id:"add-input"}}),o("ui5-date-picker",{ref:"todoDeadline",staticClass:"add-todo-element-width",attrs:{"format-pattern":"dd/MM/yyyy",id:"date-picker"}}),o("ui5-button",{ref:"addButton",staticClass:"add-todo-element-width",attrs:{design:"Emphasized"},on:{click:e.handleAdd}},[e._v("Add Todo")])],1),o("div",{staticClass:"list-todos-wrapper"},[o("ui5-panel",{staticClass:"list-todos-panel",attrs:{"header-text":"Incompleted Tasks",collapsed:e.hasTodos()}},[o("TodoList",{attrs:{todos:e.todos},on:{"selection-change":e.handleDone,"item-deleted":e.handleRemove,"item-edit":e.handleEdit}})],1),o("ui5-panel",{staticClass:"list-todos-panel",attrs:{"header-text":"Completed Tasks",collapsed:e.hasCompletedTodos()}},[o("TodoList",{attrs:{todos:e.doneTodos},on:{"selection-change":e.handleUndone,"item-deleted":e.handleRemove,"item-edit":e.handleEdit}})],1)],1)]),o("ui5-dialog",{ref:"editDialog",attrs:{"header-text":"Edit Todo"}},[o("div",{staticClass:"dialog-content"},[o("div",{staticClass:"edit-wrapper"},[o("ui5-label",[e._v("Title:")]),o("ui5-textarea",{ref:"titleEditInput",staticClass:"title-textarea",attrs:{"show-exceeded-text":"",maxlength:"24",value:e.todoBeingEdittedText}})],1),o("div",{staticClass:"edit-wrapper date-edit-fields"},[o("ui5-label",[e._v("Date:")]),o("ui5-date-picker",{ref:"dateEditInput",attrs:{"format-pattern":"dd/MM/yyyy",value:e.todoBeingEdittedDate}})],1)]),o("div",{staticClass:"dialog-footer",attrs:{"data-ui5-slot":"footer"}},[o("ui5-button",{staticClass:"dialog-footer-btn--cancel",attrs:{design:"Transparent"},on:{click:e.cancelEdits}},[e._v("Cancel")]),o("ui5-button",{staticClass:"dialog-footer-btn--save",attrs:{design:"Emphasized"},on:{click:e.saveEdits}},[e._v("Save")])],1)]),o("ui5-popover",{ref:"theme-settings-popover",staticClass:"app-bar-theming-popover",attrs:{"placement-type":"Bottom","horizontal-align":"Right","header-text":"Theme"}},[o("ui5-list",{ref:"{themeSelect}",attrs:{mode:"SingleSelect"},on:{"selection-change":e.handleThemeChange}},[o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_horizon",selected:""}},[e._v("SAP Horizon Morning")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_horizon_dark"}},[e._v("SAP Horizon Evening")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_horizon_hcb"}},[e._v("SAP Horizon HCB")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_horizon_hcw"}},[e._v("SAP Horizon HCW")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_fiori_3"}},[e._v("SAP Quartz Light")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_fiori_3_dark"}},[e._v("SAP Quartz Dark")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_fiori_3_hcb"}},[e._v("SAP Quartz HCB")]),o("ui5-li",{attrs:{icon:"palette","data-theme":"sap_fiori_3_hcw"}},[e._v("SAP Quartz HCW")])],1)],1)],1)},n=[],d=o(93019),s=o(74479),r=(o(92222),o(41539),o(39714),o(57327),o(21249),o.p+"img/logo.949ff430.png"),c=(o(77363),o(26919),o(66026)),f=(o(42724),o(22950),o(20958),o(59062),o(38410),o(74195),o(29767),o(17498),o(96056),o(33641),o(83640),o(69163),o(74012),o(33703),o(96714),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ui5-list",{ref:"list",attrs:{id:"todo-list",mode:"MultiSelect"},on:{selectionChange:e.onSelectionChange}},e._l(e.todos,(function(t){return o("TodoItem",{key:t.id,attrs:{todo:t,datakey:t.id},on:{"item-deleted":e.onItemDeleted,"item-edit":e.onItemEdit}})})),1)}),l=[],u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ui5-li-custom",{attrs:{"data-key":e.datakey,selected:e.todo.done}},[o("div",{staticClass:"li-content"},[o("span",{staticClass:"li-content-text"},[e._v(e._s(e.todo.text)+" - finish before: "+e._s(e.todo.deadline))]),o("div",{staticClass:"li-content-actions"},[o("ui5-button",{staticClass:"edit-btn",on:{click:e.onEditPress}},[e._v("Edit")]),o("ui5-button",{attrs:{design:"Negative"},on:{click:e.onDeletePress}},[e._v("Delete")])],1)])])},b=[],h=(o(35705),i.Z.component("TodoItem",{props:["todo","datakey"],methods:{onEditPress:function(){this.$emit("item-edit",{id:this.todo.id})},onDeletePress:function(){this.$emit("item-deleted",{id:this.todo.id})}}})),p=h,m=p,g=o(1001),v=(0,g.Z)(m,u,b,!1,null,null,null),_=(v.exports,o(97202),i.Z.component("TodoList",{props:["todos"],methods:{onSelectionChange:function(e){this.$emit("selection-change",e)},onItemDeleted:function(e){this.$emit("item-deleted",e)},onItemEdit:function(e){this.$emit("item-edit",e)}}})),T=_,y=T,C=(0,g.Z)(y,f,l,!1,null,null,null),E=(C.exports,i.Z.component("app",{data:function(){return{todos:[{text:"Get some carrots",id:"i1",deadline:"27/7/2018",done:!1},{text:"Do some magic",id:"i2",deadline:"22/7/2018",done:!1},{text:"Go to the gym",id:"i3",deadline:"24/7/2018",done:!1},{text:"Buy milk",id:"i4",deadline:"30/7/2018",done:!1}],doneTodos:[{text:"Eat some fruits",id:"i5",deadline:"29/7/2018",done:!0}],logo:r,todoBeingEdittedText:"",todoBeingEdittedDate:"",selectedEditTodo:""}},methods:{handleThemeSettingsToggle:function(e){this.$refs["theme-settings-popover"].showAt(e.detail.targetRef)},handleThemeChange:function(e){(0,c.Dc)(e.detail.selectedItems[0].getAttribute("data-theme")),this.$refs["theme-settings-popover"].close()},handleAdd:function(){this.todos=[].concat((0,s.Z)(this.todos),[{text:this.$refs["todoInput"].value,id:(this.todos.length+1).toString(),deadline:this.$refs["todoDeadline"].value,done:!1}])},handleDone:function(e){var t=e.detail.selectedItems[0],o=t.getAttribute("data-key"),i=this.todos.filter((function(e){return o===e.id.toString()}))[0];i.done=!0,this.doneTodos.push(i),this.todos=this.todos.filter((function(e){return o!==e.id.toString()}))},handleUndone:function(e){var t=e.detail.selectedItems,o=t.map((function(e){return e.getAttribute("data-key")})),i=this.doneTodos.filter((function(e){return-1===o.indexOf(e.id.toString())})).map((function(e){return(0,d.Z)((0,d.Z)({},e),{},{done:!1})}));this.doneTodos=this.doneTodos.filter((function(e){return o.indexOf(e.id.toString())>-1})),this.todos=[].concat((0,s.Z)(this.todos),(0,s.Z)(i))},handleRemove:function(e){var t=this.todos.filter((function(t){return t.id.toString()!==e.id}));this.todos=t;var o=this.doneTodos.filter((function(t){return t.id.toString()!==e.id}));this.doneTodos=o},handleEdit:function(e){var t,o=this.todos.filter((function(t){return t.id.toString()===e.id}));t=o.length?o[0]:this.doneTodos.filter((function(t){return t.id.toString()===e.id}))[0],this.todoBeingEdittedText=t.text,this.todoBeingEdittedDate=t.deadline,this.selectedEditTodo=t.id,this.$refs["editDialog"].show()},saveEdits:function(){var e=this,t=this.$refs["titleEditInput"].value,o=this.$refs["dateEditInput"].value;this.todos=this.todos.map((function(i){return i.id===e.selectedEditTodo&&(i.text=t,i.deadline=o),i})),this.doneTodos=this.doneTodos.map((function(i){return i.id===e.selectedEditTodo&&(i.text=t,i.deadline=o),i})),this.$refs["editDialog"].close()},cancelEdits:function(){this.$refs["editDialog"].close()},hasTodos:function(){return!this.todos.length},hasCompletedTodos:function(){return!this.doneTodos.length}}}));(0,c.Dc)("sap_horizon");var x=E,k=x,S=(0,g.Z)(k,a,n,!1,null,null,null),w=S.exports;i.Z.config.productionTip=!1,i.Z.config.ignoredElements=[/^ui5-/],new i.Z({render:function(e){return e(w)}}).$mount("#app")}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,i,a,n){if(!i){var d=1/0;for(f=0;f<e.length;f++){i=e[f][0],a=e[f][1],n=e[f][2];for(var s=!0,r=0;r<i.length;r++)(!1&n||d>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[r])}))?i.splice(r--,1):(s=!1,n<d&&(d=n));if(s){e.splice(f--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[i,a,n]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(i,a){if(1&a&&(i=this(i)),8&a)return i;if("object"===typeof i&&i){if(4&a&&i.__esModule)return i;if(16&a&&"function"===typeof i.then)return i}var n=Object.create(null);o.r(n);var d={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){d[e]=function(){return i[e]}}));return d["default"]=function(){return i},o.d(n,d),n}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"-legacy."+{93:"4243bccd",107:"2330c101",119:"80df99ac",163:"939e82bc",182:"392c7470",186:"e431d5b3",188:"e149b249",210:"e84d822c",250:"57b160e3",261:"1e7f8463",304:"2af0b0e9",330:"cbebf1a0",337:"a847d50a",345:"2dba5c5e",358:"c6f638ad",436:"3528d1aa",509:"91b0b93d",574:"e7efc855",611:"4f96403e",629:"2a9246e4",654:"f0053898",663:"59012ae4",690:"37e54f09",691:"77971c5e",730:"46f62b77",743:"0cc5c1bf",883:"5b5bf3b8",922:"cdbac802",942:"905a718d",999:"2dd1c162",1017:"1e0af1a8",1021:"f6beef20",1022:"8b5790ed",1043:"cbce8d51",1136:"74f1adcd",1170:"1faedf1e",1211:"c23815bd",1249:"a905a78f",1265:"6c0c0866",1359:"9791be5c",1404:"45730fe7",1445:"2af965da",1455:"0f6e1a73",1466:"cbc9fc74",1587:"6b14f557",1594:"f4fafbcb",1607:"cfd18490",1617:"959838fa",1715:"90960f64",1730:"2d12f280",1770:"7aad408a",1833:"9c3feaed",1894:"591ffc37",1915:"34c9086a",1929:"2d63b2e0",1967:"97ffc2f8",1970:"44a63036",2004:"db8f2461",2041:"b3a2c636",2061:"eea2ca7b",2069:"cef7aa07",2074:"95eb0030",2075:"0d96a2ca",2260:"3f334f03",2289:"12e7a885",2333:"4a70fa51",2347:"6ce5be18",2397:"5df6c33c",2483:"2c0b8286",2526:"b354d300",2542:"e791b1ff",2652:"eb0fc746",2676:"e31835f7",2723:"7fec2f13",2732:"74505b9c",2792:"9cb3ea45",2838:"831bb95b",2842:"fc12a340",2857:"1a273a90",2892:"e0a87a77",2909:"0200c927",2936:"b62e37b4",2968:"bb9f95e5",3052:"ac4db46f",3069:"51113108",3081:"cccbb95b",3146:"ac5e6f3f",3256:"c873e177",3281:"f3b3ab1c",3290:"be55ebf8",3340:"4bd0c28c",3341:"bb98edd1",3410:"bea0759e",3441:"e1d4909c",3565:"0cfd00ed",3637:"95931d57",3694:"e457029b",3789:"f56ad58e",3807:"37d08a10",3837:"3950818d",3855:"3507fd2d",3875:"5f930307",3898:"6006dac6",3960:"43505f8b",3965:"ab6fa1c2",4036:"8efa39c0",4070:"7f43ebf3",4142:"8f4537c9",4167:"93b28333",4191:"80dd43c1",4309:"56476393",4402:"4974d61b",4463:"21eadb4a",4470:"117c4901",4617:"346ae094",4720:"67b27a1d",4722:"19e0b10a",4741:"1f815088",4823:"4402df07",4977:"d6d62def",4985:"6933b960",5025:"d5a6a1d5",5077:"b3d0b06b",5082:"d905aa25",5088:"b49a7b9f",5092:"33098ab8",5105:"7422010f",5107:"cb154e4b",5200:"bf50d393",5201:"e62b13ea",5221:"192eb5c9",5251:"25996db7",5443:"6f7fc876",5466:"b2e79ec1",5486:"596d92a2",5505:"822929d9",5516:"180ff28f",5520:"64e3e1bf",5595:"64dff802",5621:"8be08dd8",5677:"8e25bcf2",5680:"05bc1eb9",5686:"13991511",5687:"0901f05f",5694:"be5697d2",5696:"0e5d7ff8",5746:"d5938073",5770:"6573fd96",5809:"951a1157",5859:"017422fb",5877:"3217c347",5909:"69a485c0",5988:"5e5abd20",6025:"52b874fa",6026:"cf632063",6046:"af79ece0",6072:"4cd9ade7",6143:"f21cac3e",6158:"5a7a16e1",6285:"f67b8f9c",6401:"edef2152",6412:"99f212a9",6426:"8d82b88b",6430:"23aad2c3",6541:"dbb52702",6575:"83cbb828",6800:"a188bcf2",6822:"39e6a484",6900:"53ecf1bd",6942:"d307898a",7094:"4a9c3ef9",7105:"131d79c7",7108:"474b1187",7116:"db17039b",7150:"d23496e9",7152:"1d3da538",7175:"9b0c1177",7215:"313a2159",7277:"3214f6bb",7283:"7244cb9d",7300:"58ac111f",7311:"e9aab17d",7319:"05e7a90f",7321:"a6b5fab5",7336:"5b4af8ad",7353:"049820ad",7384:"fd8cb64a",7403:"348b15c8",7415:"c2a095a6",7426:"901a4509",7433:"bc9a39e3",7437:"f47cd08c",7551:"3998a5a3",7573:"4da10049",7584:"6a744196",7594:"a9787e59",7612:"47b6db37",7617:"98137dc7",7640:"dcf9d6eb",7679:"9ec88784",7729:"9b9c2adf",7840:"7edb9e40",7865:"1bb9d436",7911:"0ef6a34b",8002:"71e480b2",8061:"de4ef0f4",8069:"263891d7",8089:"f29a3603",8249:"2f3948c9",8277:"1277c3d3",8293:"74789f6d",8401:"d253ac7e",8403:"7e08417c",8406:"f4bb7fe7",8411:"c1caacdf",8500:"338b5f3d",8627:"417ad384",8667:"c552024c",8711:"d072d8f6",8714:"0ad14e97",8735:"f433aefe",8744:"f5905905",8821:"80dedfab",8851:"d103af20",8911:"a4135a17",9025:"14ae8879",9060:"ba8a5972",9081:"e1149d4e",9084:"a125a254",9104:"ea2c4183",9129:"23afb574",9133:"7795d420",9146:"bd3ab094",9154:"7469ba79",9203:"ef060d71",9280:"0dbb6a7f",9294:"86653000",9362:"be8540dc",9401:"cdd57124",9492:"5e782116",9511:"037d48bc",9517:"b10e7574",9548:"0141be13",9573:"282bf5dd",9612:"67060629",9653:"bf60e835",9671:"1ee5bee0",9708:"1a0b6f7c",9769:"716855d0",9786:"261863de",9851:"a0bde719",9853:"454fddb5",9865:"161a3040",9971:"6447a390"}[e]+".js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ui5-webcomponents-sample-vue:";o.l=function(i,a,n,d){if(e[i])e[i].push(a);else{var s,r;if(void 0!==n)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==i||l.getAttribute("data-webpack")==t+n){s=l;break}}s||(r=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+n),s.src=i),e[i]=[a];var u=function(t,o){s.onerror=s.onload=null,clearTimeout(b);var a=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(o)})),t)return t(o)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),r&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/ui5-webcomponents-sample-vue/"}(),function(){var e={2143:0};o.f.j=function(t,i){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise((function(o,i){a=e[t]=[o,i]}));i.push(a[2]=n);var d=o.p+o.u(t),s=new Error,r=function(i){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+d+")",s.name="ChunkLoadError",s.type=n,s.request=d,a[1](s)}};o.l(d,r,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,n,d=i[0],s=i[1],r=i[2],c=0;if(d.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(r)var f=r(o)}for(t&&t(i);c<d.length;c++)n=d[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(f)},i=self["webpackChunkui5_webcomponents_sample_vue"]=self["webpackChunkui5_webcomponents_sample_vue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[4998],(function(){return o(50818)}));i=o.O(i)})();
//# sourceMappingURL=app-legacy.f35eef7f.js.map