var ve=Object.defineProperty,Fe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var oe=(e,s,l)=>s in e?ve(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,k=(e,s)=>{for(var l in s||(s={}))Be.call(s,l)&&oe(e,l,s[l]);if(ne)for(var l of ne(s))he.call(s,l)&&oe(e,l,s[l]);return e},ue=(e,s)=>Fe(e,ye(s));var B=(e,s,l)=>new Promise((b,f)=>{var g=a=>{try{i(l.next(a))}catch(p){f(p)}},n=a=>{try{i(l.throw(a))}catch(p){f(p)}},i=a=>a.done?b(a.value):Promise.resolve(a.value).then(g,n);i((l=l.apply(e,s)).next())});import{s as we,p as L,Q as ke,T as Ee,P as Pe,B as Ce}from"./TableAction.4121bad1.js";import{d as ee,o as v,c as w,a as c,j as r,ap as H,a7 as le,aQ as De,ao as ie,aR as ae,an as Se,r as E,b as J,a3 as R,af as ce,z as Oe,_ as Ae,a0 as K,w as o,h as X,aB as Y,aw as G,aA as Ve,l as S,au as j,aS as se,az as re,aE as Z,aT as Ne,av as q,aC as Ue,aD as Re,aU as Te,N as de,ab as Me,a9 as je,aa as pe,ad as $e,aV as ze,aW as Ie,n as fe,aN as Ge,q as me,aO as qe,s as _e,aL as Le,aX as Qe,aY as We,a2 as xe,aG as Ke,t as ge,aZ as Xe,f as Ye,u as Ze,m as He,ai as Je,a_ as et,A as tt}from"./index.2818b27f.js";import{D as nt}from"./useDesignSetting.59bce9db.js";import"./index.esm.38507667.js";const ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ut=c("path",{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",fill:"currentColor"},null,-1);var lt=ee({name:"UpOutlined",render:function(s,l){return v(),w("svg",ot,[ut])}});function at(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}function st({emit:e,getProps:s,formModel:l,getSchema:b,formElRef:f,defaultFormModel:g,loadingSub:n,handleFormValues:i}){function a(){return B(this,null,function*(){var d;return(d=r(f))==null?void 0:d.validate()})}function p(d){return B(this,null,function*(){d&&d.preventDefault(),n.value=!0;const{submitFunc:h}=r(s);if(h&&H(h)){yield h();return}if(!!r(f))try{return yield a(),n.value=!1,e("submit",l),!0}catch(D){return n.value=!1,!1}})}function P(){return B(this,null,function*(){var d;yield(d=r(f))==null?void 0:d.restoreValidation()})}function A(){return B(this,null,function*(){const{resetFunc:d,submitOnReset:h}=r(s);if(d&&H(d)&&(yield d()),!r(f))return;Object.keys(l).forEach(C=>{l[C]=r(g)[C]||null}),yield P();const D=i(le(r(l)));e("reset",D),h&&(yield p())})}function V(){return r(f)?i(le(r(l))):{}}function N(d){return B(this,null,function*(){const h=r(b).map(F=>F.field).filter(Boolean);Object.keys(d).forEach(F=>{const D=d[F];h.includes(F)&&(l[F]=D)})})}return{handleSubmit:p,validate:a,resetFields:A,getFieldsValue:V,clearValidate:P,setFieldsValue:N}}function rt({defaultFormModel:e,getSchema:s,formModel:l}){function b(g){if(!De(g))return{};const n={};for(const i of Object.entries(g)){let[,a]=i;const[p]=i;!p||ie(a)&&a.length===0||H(a)||ae(a)||(Se(a)&&(a=a.trim()),we(n,p,a))}return n}function f(){const g=r(s),n={};g.forEach(i=>{const{defaultValue:a}=i;ae(a)||(n[i.field]=a,l[i.field]=a)}),e.value=n}return{handleFormValues:b,initDefault:f}}const it={labelWidth:{type:[Number,String],default:80},schemas:{type:[Array],default:()=>[]},layout:{type:String,default:"inline"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelPlacement:{type:String,default:"left"},isFull:{type:Boolean,default:!0},showActionButtonGroup:L.bool.def(!0),showResetButton:L.bool.def(!0),resetButtonOptions:Object,showSubmitButton:L.bool.def(!0),submitButtonOptions:Object,showAdvancedButton:L.bool.def(!0),submitButtonText:{type:String,default:"\u67E5\u8BE2"},resetButtonText:{type:String,default:"\u91CD\u7F6E"},gridProps:Object,giProps:Object,baseGridStyle:{type:Object},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1}};const ct=ee({name:"BasicUpload",components:{DownOutlined:nt,UpOutlined:lt,QuestionCircleOutlined:ke},props:k({},it),emits:["reset","submit","register"],setup(e,{emit:s,attrs:l}){const b=E({}),f=J({}),g=E({}),n=E(null),i=E(null),a=E(!0),p=E(!1),P=E(!1),A=R(()=>Object.assign({size:e.size,type:"primary"},e.submitButtonOptions)),V=R(()=>Object.assign({size:e.size,type:"default"},e.resetButtonOptions));function N(m){var _;const O=(_=m.componentProps)!=null?_:{},U=m.component;return k({clearable:!0,placeholder:at(r(U))},O)}const d=R(()=>{const m=k(k({},e),r(g)),O={rules:{}};return(m.schemas||[]).forEach(_=>{_.rules&&ie(_.rules)&&(O.rules[_.field]=_.rules)}),k(k({},m),r(O))}),h=R(()=>{const{layout:m}=r(d);return m==="inline"}),F=R(()=>{const{gridProps:m}=r(d);return ue(k({},m),{collapsed:h.value?a.value:!1,responsive:"screen"})}),D=R(()=>k(k(k({},l),e),r(d))),C=R(()=>{const m=r(n)||r(d).schemas;for(const O of m){const{defaultValue:U}=O;U&&(O.defaultValue=U)}return m}),{handleFormValues:$,initDefault:T}=rt({getProps:d,defaultFormModel:b,getSchema:C,formModel:f}),{handleSubmit:u,validate:t,resetFields:y,getFieldsValue:z,clearValidate:Q,setFieldsValue:M}=st({emit:s,getProps:d,formModel:f,getSchema:C,formElRef:i,defaultFormModel:b,loadingSub:p,handleFormValues:$});function I(){a.value=!a.value}function W(m){return B(this,null,function*(){g.value=Te(r(g)||{},m)})}const x={getFieldsValue:z,setFieldsValue:M,resetFields:y,validate:t,clearValidate:Q,setProps:W,submit:u};return ce(()=>C.value,m=>{r(P)||m!=null&&m.length&&(T(),P.value=!0)}),Oe(()=>{T(),s("register",x)}),{formElRef:i,formModel:f,getGrid:F,getProps:d,getBindValue:D,getSchema:C,getSubmitBtnOptions:A,getResetBtnOptions:V,handleSubmit:u,resetFields:y,loadingSub:p,isInline:h,getComponentProps:N,unfoldToggle:I}}});function dt(e,s,l,b,f,g){const n=K("QuestionCircleOutlined"),i=de,a=Me,p=je,P=pe,A=$e,V=ze,N=Ie,d=fe,h=Ge,F=me,D=K("DownOutlined"),C=K("UpOutlined"),$=qe,T=_e;return v(),w(T,G(e.getBindValue,{model:e.formModel,ref:"formElRef"}),{default:o(()=>[c($,Ue(Re(e.getGrid)),{default:o(()=>[(v(!0),X(Z,null,Y(e.getSchema,u=>(v(),w(h,G(u.giProps,{key:u.field}),{default:o(()=>[c(d,{label:u.label,path:u.field},Ve({default:o(()=>[u.slot?re(e.$slots,u.slot,{key:0,model:e.formModel,field:u.field,value:e.formModel[u.field]},void 0,!0):u.component==="NCheckbox"?(v(),w(A,{key:1,value:e.formModel[u.field],"onUpdate:value":t=>e.formModel[u.field]=t},{default:o(()=>[c(P,null,{default:o(()=>[(v(!0),X(Z,null,Y(u.componentProps.options,t=>(v(),w(p,{key:t.value,value:t.value,label:t.label},null,8,["value","label"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):u.component==="NRadioGroup"?(v(),w(N,{key:2,value:e.formModel[u.field],"onUpdate:value":t=>e.formModel[u.field]=t},{default:o(()=>[c(P,null,{default:o(()=>[(v(!0),X(Z,null,Y(u.componentProps.options,t=>(v(),w(V,{key:t.value,value:t.value},{default:o(()=>[S(j(t.label),1)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):(v(),w(Ne(u.component),G({key:3},e.getComponentProps(u),{value:e.formModel[u.field],"onUpdate:value":t=>e.formModel[u.field]=t,class:{isFull:u.isFull!=!1&&e.getProps.isFull}}),null,16,["value","onUpdate:value","class"])),u.suffix?re(e.$slots,u.suffix,{key:4,model:e.formModel,field:u.field,value:e.formModel[u.field]},void 0,!0):q("",!0)]),_:2},[u.labelMessage?{name:"label",fn:o(()=>[S(j(u.label)+" ",1),c(a,{trigger:"hover",style:se(u.labelMessageStyle)},{trigger:o(()=>[c(i,{size:"18",class:"cursor-pointer text-gray-400"},{default:o(()=>[c(n)]),_:1})]),default:o(()=>[S(" "+j(u.labelMessage),1)]),_:2},1032,["style"])])}:void 0]),1032,["label","path"])]),_:2},1040))),128)),e.getProps.showActionButtonGroup?(v(),w(h,{key:0,span:e.isInline?"":24,suffix:!!e.isInline},{default:o(({overflow:u})=>[c(P,{align:"center",justify:e.isInline?"end":"start",style:se({"margin-left":`${e.isInline?12:e.getProps.labelWidth}px`})},{default:o(()=>[e.getProps.showSubmitButton?(v(),w(F,G({key:0},e.getSubmitBtnOptions,{onClick:e.handleSubmit,loading:e.loadingSub}),{default:o(()=>[S(j(e.getProps.submitButtonText),1)]),_:1},16,["onClick","loading"])):q("",!0),e.getProps.showResetButton?(v(),w(F,G({key:1},e.getResetBtnOptions,{onClick:e.resetFields}),{default:o(()=>[S(j(e.getProps.resetButtonText),1)]),_:1},16,["onClick"])):q("",!0),e.isInline&&e.getProps.showAdvancedButton?(v(),w(F,{key:2,type:"primary",text:"","icon-placement":"right",onClick:e.unfoldToggle},{icon:o(()=>[u?(v(),w(i,{key:0,size:"14",class:"unfold-icon"},{default:o(()=>[c(D)]),_:1})):(v(),w(i,{key:1,size:"14",class:"unfold-icon"},{default:o(()=>[c(C)]),_:1}))]),default:o(()=>[S(" "+j(u?"\u5C55\u5F00":"\u6536\u8D77"),1)]),_:2},1032,["onClick"])):q("",!0)]),_:2},1032,["justify","style"])]),_:1},8,["span","suffix"])):q("",!0)]),_:3},16)]),_:3},16,["model"])}var pt=Ae(ct,[["render",dt],["__scopeId","data-v-676ce85c"]]);function ft(e){const s=E(null),l=E(!1);function b(){return B(this,null,function*(){const n=r(s);return n||console.error("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield xe(),n})}function f(n){Le(()=>{s.value=null,l.value=null}),!(r(l)&&Qe()&&n===r(s))&&(s.value=n,l.value=!0,ce(()=>e,()=>{e&&n.setProps(We(e))},{immediate:!0,deep:!0}))}return[f,{setProps:n=>B(this,null,function*(){yield(yield b()).setProps(n)}),resetFields:()=>B(this,null,function*(){b().then(n=>B(this,null,function*(){yield n.resetFields()}))}),clearValidate:n=>B(this,null,function*(){yield(yield b()).clearValidate(n)}),getFieldsValue:()=>{var n;return(n=r(s))==null?void 0:n.getFieldsValue()},setFieldsValue:n=>B(this,null,function*(){yield(yield b()).setFieldsValue(n)}),submit:()=>B(this,null,function*(){return(yield b()).submit()}),validate:n=>B(this,null,function*(){return(yield b()).validate(n)})}]}function mt(e){return Ke.request({url:"/table/list",method:"get",params:e})}const _t=[{title:"id",key:"id",width:100},{title:"\u540D\u79F0",key:"name",width:100},{title:"\u5934\u50CF",key:"avatar",width:100,render(e){return ge(Xe,{size:48,src:e.avatar})}},{title:"\u5730\u5740",key:"address",auth:["basic_list"],ifShow:e=>!0,width:150},{title:"\u5F00\u59CB\u65E5\u671F",key:"beginTime",width:160},{title:"\u7ED3\u675F\u65E5\u671F",key:"endTime",width:160},{title:"\u521B\u5EFA\u65F6\u95F4",key:"date",width:100}],gt=S(" \u65B0\u5EFA "),bt=S("\u5237\u65B0\u6570\u636E"),vt=S("\u53D6\u6D88"),Ft=S("\u786E\u5B9A"),Et=ee({name:"index",setup(e){const s={name:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u540D\u79F0"},address:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u5730\u5740"},date:{type:"number",required:!0,trigger:["blur","change"],message:"\u8BF7\u9009\u62E9\u65E5\u671F"}},l=[{field:"name",labelMessage:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",component:"NInput",label:"\u59D3\u540D",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",onInput:t=>{console.log(t)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"\u624B\u673A",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",showButton:!1,onInput:t=>{console.log(t)}}},{field:"type",component:"NSelect",label:"\u7C7B\u578B",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",options:[{label:"\u8212\u9002\u6027",value:1},{label:"\u7ECF\u6D4E\u6027",value:2}],onUpdateValue:t=>{console.log(t)}}},{field:"makeDate",component:"NDatePicker",label:"\u9884\u7EA6\u65F6\u95F4",defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:t=>{console.log(t)}}},{field:"makeTime",component:"NTimePicker",label:"\u505C\u7559\u65F6\u95F4",componentProps:{clearable:!0,onUpdateValue:t=>{console.log(t)}}},{field:"status",label:"\u72B6\u6001",slot:"statusSlot"},{field:"makeProject",component:"NCheckbox",label:"\u9884\u7EA6\u9879\u76EE",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u9879\u76EE",options:[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],onUpdateChecked:t=>{console.log(t)}}},{field:"makeSource",component:"NRadioGroup",label:"\u6765\u6E90",componentProps:{options:[{label:"\u7F51\u4E0A",value:1},{label:"\u95E8\u5E97",value:2}],onUpdateChecked:t=>{console.log(t)}}}],b=Ye(),f=E(null),g=Ze(),n=E(),i=E(!1),a=E(!1),p=J({name:"",address:"",date:null}),P=E({pageSize:5,name:"xiaoMa"}),A=J({width:220,title:"\u64CD\u4F5C",key:"action",fixed:"right",render(t){return ge(Ee,{style:"button",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:$.bind(null,t),ifShow:()=>!0,auth:["basic_list"]},{label:"\u7F16\u8F91",onClick:C.bind(null,t),ifShow:()=>!0,auth:["basic_list"]}],dropDownActions:[{label:"\u542F\u7528",key:"enabled",ifShow:()=>!0},{label:"\u7981\u7528",key:"disabled",ifShow:()=>!0}],select:y=>{g.info(`\u60A8\u70B9\u51FB\u4E86\uFF0C${y} \u6309\u94AE`)}})}}),[V,{}]=ft({gridProps:{cols:"1 s:1 m:2 l:3 xl:4 2xl:4"},labelWidth:80,schemas:l});function N(){i.value=!0}const d=t=>B(this,null,function*(){return yield mt(k(k(k({},p),P.value),t))});function h(t){console.log(t)}function F(){n.value.reload()}function D(t){t.preventDefault(),a.value=!0,f.value.validate(y=>{y?g.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):(g.success("\u65B0\u5EFA\u6210\u529F"),setTimeout(()=>{i.value=!1,F()})),a.value=!1})}function C(t){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",t),b.push({name:"basic-info",params:{id:t.id}})}function $(t){console.log("\u70B9\u51FB\u4E86\u5220\u9664",t),g.info("\u70B9\u51FB\u4E86\u5220\u9664")}function T(t){console.log(t),F()}function u(t){console.log(t)}return(t,y)=>{const z=He,Q=de,M=me,I=fe,W=Je,x=_e,m=pe,O=et,U=tt;return v(),w(U,{bordered:!1,class:"proCard"},{default:o(()=>[c(r(pt),{onRegister:r(V),onSubmit:T,onReset:u},{statusSlot:o(({model:_,field:te})=>[c(z,{value:_[te],"onUpdate:value":be=>_[te]=be},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"]),c(r(Ce),{columns:r(_t),request:d,"row-key":_=>_.id,ref_key:"actionRef",ref:n,actionColumn:A,"onUpdate:checkedRowKeys":h,"scroll-x":1090},{tableTitle:o(()=>[c(M,{type:"primary",onClick:N},{icon:o(()=>[c(Q,null,{default:o(()=>[c(r(Pe))]),_:1})]),default:o(()=>[gt]),_:1})]),toolbar:o(()=>[c(M,{type:"primary",onClick:F},{default:o(()=>[bt]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),c(O,{show:i.value,"onUpdate:show":y[4]||(y[4]=_=>i.value=_),"show-icon":!1,preset:"dialog",title:"\u65B0\u5EFA"},{action:o(()=>[c(m,null,{default:o(()=>[c(M,{onClick:y[3]||(y[3]=()=>i.value=!1)},{default:o(()=>[vt]),_:1}),c(M,{type:"info",loading:a.value,onClick:D},{default:o(()=>[Ft]),_:1},8,["loading"])]),_:1})]),default:o(()=>[c(x,{model:p,rules:s,ref_key:"formRef",ref:f,"label-placement":"left","label-width":80,class:"py-4"},{default:o(()=>[c(I,{label:"\u540D\u79F0",path:"name"},{default:o(()=>[c(z,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",value:p.name,"onUpdate:value":y[0]||(y[0]=_=>p.name=_)},null,8,["value"])]),_:1}),c(I,{label:"\u5730\u5740",path:"address"},{default:o(()=>[c(z,{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5730\u5740",value:p.address,"onUpdate:value":y[1]||(y[1]=_=>p.address=_)},null,8,["value"])]),_:1}),c(I,{label:"\u65E5\u671F",path:"date"},{default:o(()=>[c(W,{type:"datetime",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",value:p.date,"onUpdate:value":y[2]||(y[2]=_=>p.date=_)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])]),_:1})}}});export{Et as default};
