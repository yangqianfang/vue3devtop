var o=(t,p,i)=>new Promise((c,s)=>{var n=a=>{try{e(i.next(a))}catch(r){s(r)}},l=a=>{try{e(i.throw(a))}catch(r){s(r)}},e=a=>a.done?c(a.value):Promise.resolve(a.value).then(n,l);e((i=i.apply(t,p)).next())});import{aP as u}from"./index.2818b27f.js";import{h as b}from"./console.fe19ffe3.js";const D=u({id:"app-publicdata",state:()=>({publicData:null}),getters:{},actions:{getPublicData(){return o(this,null,function*(){const t=yield b();return this.publicData=t,t})}}});export{D as p};
