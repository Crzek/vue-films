import{e as g,r as h,a as y,g as o,k as t,t as r,F as k,s as N,m as x,u as f,y as R,z as B,f as n,q as C,j as V,C as $,R as F,M as I}from"./index-DkBLVWzc.js";import{u as L}from"./Person-CbIo_6xE.js";const M={class:"container-movie-item"},P={class:"text"},S={class:"values"},w={class:"votes"},b={class:"resum"},j=t("p",{class:"title"},"Films",-1),q={key:0},z={class:"image"},D=["src","alt"],U=g({__name:"PersonItem",setup(E){R();const v=B(),u=L(),s=h(),a=h();return y(()=>{var l;console.log(u);const c=Number(v.params.id);s.value=u.getPersonById(c),a.value=(l=s.value)==null?void 0:l.known_for}),(c,l)=>{var i,_,d,m,p;return n(),o("div",M,[t("div",P,[t("h2",null,r((i=s.value)!=null&&i.name?s.value.name:(_=s.value)==null?void 0:_.original_name),1),t("div",S,[t("p",w,r((d=s.value)==null?void 0:d.popularity),1)]),t("div",b,[j,a.value&&a.value.length>0?(n(),o("ul",q,[(n(!0),o(k,null,N(a.value,e=>(n(),o("li",{key:`movie-${e.id}`},[C(f(F),{to:`/movie/${e.id}`},{default:V(()=>[$(r(e!=null&&e.title?e.title:e!=null&&e.name?e.name:"Noy Hay"),1)]),_:2},1032,["to"])]))),128))])):x("",!0)])]),t("div",z,[t("img",{src:`${f(I).imageURL}/${(m=s.value)==null?void 0:m.profile_path}`,alt:(p=s.value)==null?void 0:p.name},null,8,D)])])}}});export{U as default};
