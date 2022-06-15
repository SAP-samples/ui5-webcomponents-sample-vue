(function(){"use strict";var e={5853:function(e,t,d){var o=d(144),a=function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"app"},[d("header",{staticClass:"app-header"},[d("ui5-shellbar",{attrs:{"primary-title":"UI5 Web Components Vue Sample Application"}},[d("img",{attrs:{slot:"logo",src:e.logo},slot:"logo"})])],1),d("section",{staticClass:"app-content"},[d("div",{staticClass:"create-todo-wrapper"},[d("ui5-input",{ref:"todoInput",staticClass:"add-todo-element-width",attrs:{placeholder:"My Todo ...",id:"add-input"}}),d("ui5-date-picker",{ref:"todoDeadline",staticClass:"add-todo-element-width",attrs:{"format-pattern":"dd/MM/yyyy",id:"date-picker"}}),d("ui5-button",{ref:"addButton",staticClass:"add-todo-element-width",attrs:{design:"Emphasized"},on:{click:e.handleAdd}},[e._v("Add Todo")])],1),d("div",{staticClass:"list-todos-wrapper"},[d("TodoList",{attrs:{todos:e.todos},on:{"selection-change":e.handleDone,"item-deleted":e.handleRemove,"item-edit":e.handleEdit}}),d("ui5-panel",{attrs:{"header-text":"Completed tasks"}},[d("TodoList",{attrs:{todos:e.doneTodos},on:{"selection-change":e.handleUndone,"item-deleted":e.handleRemove,"item-edit":e.handleEdit}})],1)],1)]),d("ui5-dialog",{ref:"editDialog",attrs:{"header-text":"Edit Todo"}},[d("div",{staticClass:"dialog-content"},[d("div",{staticClass:"edit-wrapper"},[d("ui5-label",[e._v("Title:")]),d("ui5-textarea",{ref:"titleEditInput",staticClass:"title-textarea",attrs:{"show-exceeded-text":"",maxlength:"24",value:e.todoBeingEdittedText}})],1),d("div",{staticClass:"edit-wrapper date-edit-fields"},[d("ui5-label",[e._v("Date:")]),d("ui5-date-picker",{ref:"dateEditInput",attrs:{"format-pattern":"dd/MM/yyyy",value:e.todoBeingEdittedDate}})],1)]),d("div",{staticClass:"dialog-footer",attrs:{"data-ui5-slot":"footer"}},[d("ui5-button",{staticClass:"dialog-footer-btn--cancel",attrs:{design:"Transparent"},on:{click:e.cancelEdits}},[e._v("Cancel")]),d("ui5-button",{staticClass:"dialog-footer-btn--save",attrs:{design:"Emphasized"},on:{click:e.saveEdits}},[e._v("Save")])],1)])],1)},i=[],n=d.p+"img/logo.949ff430.png",c=(d(7363),d(6919),d(6026)),s=(d(2724),d(2950),d(7371),d(9062),d(8410),d(7602),d(9711),d(7498),d(9163),d(6714),function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ui5-list",{ref:"list",attrs:{id:"todo-list",mode:"MultiSelect"},on:{selectionChange:e.onSelectionChange}},e._l(e.todos,(function(t){return d("TodoItem",{key:t.id,attrs:{todo:t,datakey:t.id},on:{"item-deleted":e.onItemDeleted,"item-edit":e.onItemEdit}})})),1)}),r=[],f=function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ui5-li-custom",{attrs:{"data-key":e.datakey,selected:e.todo.done}},[d("div",{staticClass:"li-content"},[d("span",{staticClass:"li-content-text"},[e._v(e._s(e.todo.text)+" - finish before: "+e._s(e.todo.deadline))]),d("div",{staticClass:"li-content-actions"},[d("ui5-button",{staticClass:"edit-btn",on:{click:e.onEditPress}},[e._v("Edit")]),d("ui5-button",{attrs:{design:"Negative"},on:{click:e.onDeletePress}},[e._v("Delete")])],1)])])},l=[];d(2261);let b=o.Z.component("TodoItem",{props:["todo","datakey"],methods:{onEditPress(){this.$emit("item-edit",{id:this.todo.id})},onDeletePress(){this.$emit("item-deleted",{id:this.todo.id})}}});var u=b,h=u,p=d(1001),m=(0,p.Z)(h,f,l,!1,null,null,null);m.exports,d(3514);let v=o.Z.component("TodoList",{props:["todos"],methods:{onSelectionChange(e){this.$emit("selection-change",e)},onItemDeleted(e){this.$emit("item-deleted",e)},onItemEdit(e){this.$emit("item-edit",e)}}});var g=v,y=g,E=(0,p.Z)(y,s,r,!1,null,null,null);E.exports;let T=o.Z.component("app",{data:function(){return{todos:[{text:"Get some carrots",id:"i1",deadline:"27/7/2018",done:!1},{text:"Do some magic",id:"i2",deadline:"22/7/2018",done:!1},{text:"Go to the gym",id:"i3",deadline:"24/7/2018",done:!1},{text:"Buy milk",id:"i4",deadline:"30/7/2018",done:!1}],doneTodos:[{text:"Eat some fruits",id:"i5",deadline:"29/7/2018",done:!0}],logo:n,todoBeingEdittedText:"",todoBeingEdittedDate:"",selectedEditTodo:""}},methods:{handleAdd:function(){this.todos=[...this.todos,{text:this.$refs["todoInput"].value,id:(this.todos.length+1).toString(),deadline:this.$refs["todoDeadline"].value,done:!1}]},handleDone(e){const t=e.detail.selectedItems[0],d=t.getAttribute("data-key"),o=this.todos.filter((e=>d===e.id.toString()))[0];o.done=!0,this.doneTodos.push(o),this.todos=this.todos.filter((e=>d!==e.id.toString()))},handleUndone(e){const t=e.detail.selectedItems,d=t.map((e=>e.getAttribute("data-key"))),o=this.doneTodos.filter((e=>-1===d.indexOf(e.id.toString()))).map((e=>({...e,done:!1})));this.doneTodos=this.doneTodos.filter((e=>d.indexOf(e.id.toString())>-1)),this.todos=[...this.todos,...o]},handleRemove(e){const t=this.todos.filter((t=>t.id.toString()!==e.id));this.todos=t;const d=this.doneTodos.filter((t=>t.id.toString()!==e.id));this.doneTodos=d},handleEdit(e){const t=this.todos.filter((t=>t.id.toString()===e.id));let d;d=t.length?t[0]:this.doneTodos.filter((t=>t.id.toString()===e.id))[0],this.todoBeingEdittedText=d.text,this.todoBeingEdittedDate=d.deadline,this.selectedEditTodo=d.id,this.$refs["editDialog"].show()},saveEdits(){const e=this.$refs["titleEditInput"].value,t=this.$refs["dateEditInput"].value;this.todos=this.todos.map((d=>(d.id===this.selectedEditTodo&&(d.text=e,d.deadline=t),d))),this.doneTodos=this.doneTodos.map((d=>(d.id===this.selectedEditTodo&&(d.text=e,d.deadline=t),d))),this.$refs["editDialog"].close()},cancelEdits(){this.$refs["editDialog"].close()}}});(0,c.Dc)("sap_horizon");var x=T,_=x,C=(0,p.Z)(_,a,i,!1,null,null,null),k=C.exports;o.Z.config.productionTip=!1,o.Z.config.ignoredElements=[/^ui5-/],new o.Z({render:e=>e(k)}).$mount("#app")}},t={};function d(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,d),i.exports}d.m=e,function(){var e=[];d.O=function(t,o,a,i){if(!o){var n=1/0;for(f=0;f<e.length;f++){o=e[f][0],a=e[f][1],i=e[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||n>=i)&&Object.keys(d.O).every((function(e){return d.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<n&&(n=i));if(c){e.splice(f--,1);var r=a();void 0!==r&&(t=r)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,a,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};d.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var i=Object.create(null);d.r(i);var n={};e=e||[null,t({}),t([]),t(t)];for(var c=2&a&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){n[e]=function(){return o[e]}}));return n["default"]=function(){return o},d.d(i,n),i}}(),function(){d.d=function(e,t){for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(t,o){return d.f[o](e,t),t}),[]))}}(),function(){d.u=function(e){return"js/"+e+"."+{93:"7cc3b90b",107:"2a5c62a6",119:"46ba0543",163:"939e82bc",182:"392c7470",186:"b60cc4ae",188:"cefa26ff",210:"23946f3d",250:"20bae951",261:"5968dcab",304:"2af0b0e9",330:"b1c28c84",337:"625e62fe",345:"2dba5c5e",358:"a717e197",436:"0857375f",509:"eaac01f1",574:"54c6a122",611:"61c7f4f1",629:"c7f6a69d",654:"6b3c34cb",663:"657fecdf",690:"bf1fa160",691:"f4a044c4",730:"35640179",743:"c74d86de",883:"f80ce79f",922:"dd0d15f3",942:"d9ccd0f8",999:"42a4130f",1017:"4f97ee49",1021:"1554ddfe",1022:"e0a34193",1043:"f28600f7",1136:"02319848",1170:"9352dda0",1211:"fb5cbd3b",1249:"b123bb0e",1265:"6c0c0866",1359:"7b1f8eca",1404:"3f65f580",1445:"2c4b6317",1455:"0f6e1a73",1466:"7a6d0d89",1587:"6b14f557",1594:"7a408b27",1607:"70987018",1617:"143d7ba4",1715:"0136cece",1730:"57ce0b06",1770:"0aa397b7",1833:"9c3feaed",1894:"68801235",1915:"d538a760",1929:"3a450cba",1967:"c32041a3",1970:"0e59ef62",2004:"2ec20bc2",2041:"b9830c85",2061:"603b9754",2069:"b6c8f6bd",2074:"efd7640b",2075:"f7aa1866",2260:"35887e86",2289:"19b9f725",2333:"02b01d74",2347:"73d7a015",2397:"6851135a",2483:"38079505",2526:"4c794573",2542:"aa523c6c",2652:"eb0fc746",2676:"e31835f7",2723:"3f65b7e7",2732:"97a34f0b",2792:"35b2a553",2838:"0d3d4bbd",2842:"fc12a340",2857:"2224d6af",2892:"cd9373b0",2909:"8de734bf",2936:"b1aa435d",2968:"845b6b0b",3052:"9b6123f7",3069:"27d2c8a5",3081:"0fada9d0",3146:"a42c5e1f",3256:"3b865865",3281:"5d985d2c",3290:"5367c38f",3340:"d1dfe904",3341:"b21bc9f5",3410:"fc2ad2b7",3441:"8d964c6d",3565:"cbf57888",3637:"0c1935f4",3694:"6aa01a96",3789:"54e7c48a",3807:"77598301",3837:"67b19e29",3855:"45171ce9",3875:"d5a08b68",3898:"abeb6b59",3960:"39c64c2d",3965:"c5a6dbb1",4036:"5fce00e4",4070:"f7a8c120",4142:"c7318672",4167:"39324dc9",4191:"6a47c806",4309:"627b676e",4402:"edc0daad",4463:"21eadb4a",4470:"a328019f",4617:"50554a87",4720:"1d665479",4722:"ebaca15a",4741:"ec0adfbd",4823:"b2f48013",4977:"2b136602",4985:"29852b0c",5025:"d5a6a1d5",5077:"e9ad6798",5082:"d8c89a42",5088:"4ffba675",5092:"f1e90c54",5105:"d6823a5d",5107:"b7d65592",5200:"02bfe909",5201:"02018075",5221:"f5ee2ae6",5251:"3101cbd6",5443:"0404e2ca",5466:"0fc65a2c",5486:"45c47aa6",5505:"f6c35bd6",5516:"4d93308b",5520:"64e3e1bf",5595:"088648d7",5621:"02eae043",5677:"52f1c81f",5680:"61655365",5686:"3d02d1c5",5687:"cfae3ffa",5694:"8658c885",5696:"bb372c97",5746:"0cf14b8f",5770:"f74f7512",5809:"592b918d",5859:"367c036f",5877:"4be50269",5909:"2188ab89",5988:"0d9751dd",6025:"483db005",6026:"228c4aee",6046:"9b34a296",6072:"193244ae",6143:"6bb362f8",6158:"5a7a16e1",6285:"0b279fa1",6401:"d6571087",6412:"e4860199",6426:"b5b0f34e",6430:"f62c4782",6541:"dbb52702",6575:"83cbb828",6800:"50016741",6822:"842e3413",6900:"210984a7",6942:"14f27d51",7094:"b94ac9cc",7105:"0529a1f9",7108:"6c2d6364",7116:"db17039b",7150:"2d731cab",7152:"cbc696aa",7175:"1a079bee",7215:"f149228e",7277:"c21d5158",7283:"c87e3968",7300:"85a53152",7311:"2947e803",7319:"2fc41433",7321:"f49329b2",7336:"da43bb63",7353:"df8959b0",7384:"4cdfeba6",7403:"2de96b2e",7415:"af1543fb",7426:"3bf598ea",7433:"eba4b86b",7437:"ace3295b",7551:"e21165b8",7573:"c3f2a1f3",7584:"b6afad0d",7594:"15fb4dd1",7612:"5bae4f9c",7617:"48a15205",7640:"daf9965b",7679:"bfa3c3e7",7729:"7ffff662",7840:"9e19d52b",7865:"8cbbe972",7911:"2af54a11",8002:"71e480b2",8061:"508e99cb",8069:"6534143a",8089:"11b7987e",8249:"954f19dd",8277:"1277c3d3",8293:"a799ce9f",8401:"5c379192",8403:"a4718403",8406:"f85da8e6",8411:"c1dd46b6",8500:"da1cc499",8627:"1c3dbb51",8667:"d33f7fa1",8711:"7b993533",8714:"8736286e",8735:"6b81fc10",8744:"35e074c5",8821:"d91bdb49",8851:"7f77088d",8911:"b65f726c",9025:"652a1a1b",9060:"ba8a5972",9081:"d2b9c11d",9084:"54e045e4",9104:"ea2c4183",9129:"791eda4d",9133:"a3017040",9146:"afe9686d",9154:"43acbaad",9203:"4ecd80f4",9280:"cdf58ff5",9294:"6bf2a3f5",9362:"44a44e1d",9401:"a58b2cbf",9492:"4fa7a76c",9511:"d0e4c644",9517:"b10e7574",9548:"5422a621",9573:"98141096",9612:"f714fdc3",9653:"e4d2ac1c",9671:"2b6b23b3",9708:"8a487dde",9769:"1f66c569",9786:"f7cfec32",9851:"4414c6c6",9853:"d2d11fdb",9865:"d1f7b028",9971:"84445155"}[e]+".js"}}(),function(){d.miniCssF=function(e){}}(),function(){d.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ui5-webcomponents-sample-vue:";d.l=function(o,a,i,n){if(e[o])e[o].push(a);else{var c,s;if(void 0!==i)for(var r=document.getElementsByTagName("script"),f=0;f<r.length;f++){var l=r[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[a];var b=function(t,d){c.onerror=c.onload=null,clearTimeout(u);var a=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(d)})),t)return t(d)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=b.bind(null,c.onerror),c.onload=b.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){d.p="/ui5-webcomponents-sample-vue/"}(),function(){var e={2143:0};d.f.j=function(t,o){var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(d,o){a=e[t]=[d,o]}));o.push(a[2]=i);var n=d.p+d.u(t),c=new Error,s=function(o){if(d.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,a[1](c)}};d.l(n,s,"chunk-"+t,t)}},d.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,n=o[0],c=o[1],s=o[2],r=0;if(n.some((function(t){return 0!==e[t]}))){for(a in c)d.o(c,a)&&(d.m[a]=c[a]);if(s)var f=s(d)}for(t&&t(o);r<n.length;r++)i=n[r],d.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return d.O(f)},o=self["webpackChunkui5_webcomponents_sample_vue"]=self["webpackChunkui5_webcomponents_sample_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=d.O(void 0,[4998],(function(){return d(5853)}));o=d.O(o)})();
//# sourceMappingURL=app.85be18e3.js.map