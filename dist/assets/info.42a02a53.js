var v=(D,g,m)=>new Promise((F,d)=>{var f=l=>{try{_(m.next(l))}catch(r){d(r)}},c=l=>{try{_(m.throw(l))}catch(r){d(r)}},_=l=>l.done?F(l.value):Promise.resolve(l.value).then(f,c);_((m=m.apply(D,g)).next())});import{d as j,f as k,u as N,r as E,b as C,a3 as P,z as S,v as $,aM as G,j as t,o as I,h as M,a as u,w as n,i as O,l as w,m as T,n as z,x as H,q as J,aa as K,s as Q,aN as W,aO as X,A as Y}from"./index.2818b27f.js";import{e as Z,f as uu}from"./console.fe19ffe3.js";import{p as eu}from"./publicData.40242d81.js";const au={style:{"margin-left":"80px"}},tu=w(" \u4FDD\u5B58 "),pu=w(" \u53D6\u6D88 "),iu=j({name:"info",setup(D){const g=eu(),m=k(),F=N(),d=E(!1),f=E(null),c=window.$Loading,_=E(""),l={appname:{required:!0,message:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",trigger:["blur","input"]},apptype:{required:!0,message:"\u8BF7\u9009\u5E94\u7528\u7C7B\u578B",trigger:"change"},appapi:{required:!0,message:"\u8BF7\u8F93\u5165\u5E94\u7528api",trigger:["blur","input"]},appversion:{required:!0,message:"\u8BF7\u8F93\u5165\u5F53\u524D\u7248\u672C",trigger:["blur","input"]},appmembers:{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u6210\u5458",trigger:["blur","input"]},appgit:{required:!0,message:"\u8BF7\u8F93\u5165Git\u4ED3\u5E93\u540D\u79F0",trigger:["blur","input"]},appgroup:{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE\u5206\u7EC4",trigger:"change"}},r=C({typeList:[],groupsList:[]});let a=C((()=>({appname:"",apptype:null,appapi:"",appversion:"",appmembers:"",appgit:"",appgroup:null}))());const b=P(()=>g.publicData);S(()=>v(this,null,function*(){const{id:i}=m.currentRoute.value.params;!b.value&&(yield g.getPublicData()),r.typeList=$(b.value.type),r.groupsList=G(b.value.groups),i&&(_.value=i,x(i))}));function x(i){return v(this,null,function*(){try{c.value.show();const e=yield Z({id:i}),{app:p}=e,s={id:p.id,appname:p.name,apptype:p.type,appapi:p.api,appversion:p.version,appmembers:p.members,appgit:p.project,appgroup:p.groups};a=Object.assign(t(a),s),c.value.hide()}catch(e){c.value.hide()}})}function A(){f.value.validate(i=>v(this,null,function*(){if(!i){const e=Object.assign({},a);d.value=!0;try{yield uu(e),d.value=!1,e.id?F.success("\u4FDD\u5B58\u6210\u529F\uFF01"):y()}catch(p){d.value=!1}}}))}function y(){m.push({name:"console"})}return(i,e)=>{const p=T,s=z,B=H,h=J,L=K,q=Q,U=W,R=X,V=Y;return I(),M("div",null,[u(V,{"content-style":"padding-top: 0;padding-bottom: 0;",bordered:!1,size:"small",title:_.value?"\u7F16\u8F91\u670D\u52A1":"\u6DFB\u52A0\u670D\u52A1"},{default:n(()=>[u(R,{cols:"1 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:n(()=>[u(U,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:n(()=>[u(q,{"label-width":120,model:t(a),rules:l,"label-placement":"left",ref_key:"formRef",ref:f},{default:n(()=>[u(s,{label:"\u5E94\u7528\u540D\u79F0",path:"appname"},{default:n(()=>[u(p,{placeholder:"\u8F93\u5165\u5E94\u7528\u540D\u79F0",value:t(a).appname,"onUpdate:value":e[0]||(e[0]=o=>t(a).appname=o)},null,8,["value"])]),_:1}),u(s,{label:"\u5E94\u7528\u7C7B\u578B",path:"apptype"},{default:n(()=>[u(B,{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5E94\u7528\u7C7B\u578B",options:r.typeList,value:t(a).apptype,"onUpdate:value":e[1]||(e[1]=o=>t(a).apptype=o)},null,8,["options","value"])]),_:1}),u(s,{label:"\u5E94\u7528\u5F00\u653EAPI",path:"appapi"},{default:n(()=>[u(p,{placeholder:"\u8F93\u5165\u5E94\u7528\u5F00\u653EAPI",value:t(a).appapi,"onUpdate:value":e[2]||(e[2]=o=>t(a).appapi=o)},null,8,["value"])]),_:1}),u(s,{label:"\u5F53\u524D\u7248\u672C",path:"appversion"},{default:n(()=>[u(p,{placeholder:"\u8F93\u5165\u5F53\u524D\u7248\u672C",value:t(a).appversion,"onUpdate:value":e[3]||(e[3]=o=>t(a).appversion=o)},null,8,["value"])]),_:1}),u(s,{label:"Git\u4ED3\u5E93\u540D\u79F0",path:"appgit"},{default:n(()=>[u(p,{placeholder:"\u8F93\u5165Git\u4ED3\u5E93\u540D\u79F0",value:t(a).appgit,"onUpdate:value":e[4]||(e[4]=o=>t(a).appgit=o)},null,8,["value"])]),_:1}),u(s,{label:"\u9879\u76EE\u6210\u5458",path:"appmembers"},{default:n(()=>[u(p,{"show-button":!0,placeholder:"\u8F93\u5165\u9879\u76EE\u6210\u5458(\u82F1\u6587\u9017\u53F7,\u5206\u9694)",value:t(a).appmembers,"onUpdate:value":e[5]||(e[5]=o=>t(a).appmembers=o)},null,8,["value"])]),_:1}),u(s,{label:"\u9879\u76EE\u5206\u7EC4",path:"appgroup"},{default:n(()=>[u(B,{placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE\u5206\u7EC4",options:r.groupsList,value:t(a).appgroup,"onUpdate:value":e[6]||(e[6]=o=>t(a).appgroup=o)},null,8,["options","value"])]),_:1}),O("div",au,[u(L,null,{default:n(()=>[u(h,{type:"primary",onClick:A,loading:d.value},{default:n(()=>[tu]),_:1},8,["loading"]),u(h,{type:"default",onClick:y},{default:n(()=>[pu]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1},8,["title"])])}}});export{iu as default};
