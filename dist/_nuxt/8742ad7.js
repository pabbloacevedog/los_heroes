(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{213:function(e,t,o){var content=o(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(120).default)("124172eb",content,!0,{sourceMap:!1})},214:function(e,t,o){"use strict";o(213)},215:function(e,t,o){var r=o(119)(!1);r.push([e.i,"div[data-v-51863ef4]{height:60vh;justify-content:center;align-items:center}div[data-v-51863ef4],form[data-v-51863ef4]{display:flex}form[data-v-51863ef4]{flex-direction:column}label[data-v-51863ef4]{font-size:14px;margin:0 .5rem .25rem}input[data-v-51863ef4]{font-size:16px;padding:.75rem 1rem;margin:0 .5rem .5rem;border:1px solid #dedede;border-radius:.5rem;box-shadow:none;box-sizing:border-box}.button[data-v-51863ef4]{margin-top:.5rem}.button[disabled][data-v-51863ef4]{cursor:default;opacity:.5;cursor:not-allowed}.button[data-v-51863ef4]{background:var(--primary-color);padding:.75rem 1.5rem;outline:none;border-radius:.5rem;font-size:1rem;border:none;cursor:pointer;color:#fff;font-weight:500;text-transform:uppercase;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);letter-spacing:.5px;margin:0 .5rem}button[data-v-51863ef4]:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);opacity:.8}",""]),e.exports=r},216:function(e,t,o){"use strict";o.r(t);var r={layout:"auth",data:function(){return{counter:{name:"",value:0}}}},n=(o(214),o(37)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("label",{attrs:{for:"name"}},[e._v("Nombre")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.counter.name,expression:"counter.name"}],attrs:{id:"name",type:"text"},domProps:{value:e.counter.name},on:{input:function(t){t.target.composing||e.$set(e.counter,"name",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"value"}},[e._v("valor")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.counter.value,expression:"counter.value"}],attrs:{id:"value",type:"text"},domProps:{value:e.counter.value},on:{input:function(t){t.target.composing||e.$set(e.counter,"value",t.target.value)}}}),e._v(" "),o("button",{staticClass:"button",attrs:{to:"/profile"}},[e._v("Cancelar")]),e._v(" "),o("button",{staticClass:"button",attrs:{to:"/profile"}},[e._v("Agregar")])])}),[],!1,null,"51863ef4",null);t.default=component.exports},224:function(e,t,o){"use strict";o.r(t);var r={components:{AddCount:o(216).default},data:function(){return{showModal:!1}}},n=o(37),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"save-btn"},[o("button",{on:{click:function(t){e.showModal=!0}}},[e._v("Save")]),e._v(" "),o("AddCount",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}]})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AddCount:o(216).default})}}]);