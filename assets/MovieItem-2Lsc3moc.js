import{u as h,I as f,J as M,r as d,j as g,x as S,A as e,E as l,B as I,K as y,L as x,M as m,v as R,N as w,O as B,_ as T}from"./index-ChdAVHao.js";const N=v=>(w("data-v-3d734dcf"),v=v(),B(),v),k={class:"container-movie-item"},E={class:"text"},L={class:"values"},V={class:"votes"},$={class:"resum"},b=N(()=>e("p",{class:"title"},"Resum",-1)),j={class:"overview"},q={class:"image"},A=["src","alt"],C=h({__name:"MovieItem",setup(v){y();const n=x(),o=f(),{movieSelect:u}=M(o),a=d(),t=d(),p=async(i,c)=>{const s=m.getSingleMovie(i,c);t.value=s,a.value=s.title?s.title:s.name};return g(async()=>{const i=n.query.type,c=Number(n.params.id);u.value?(t.value=u.value,a.value=o.movieTitle):p(c,i),await o.getMovie(i,c),t.value=o.movieSelect,a.value=o.movieTitle}),(i,c)=>{var s,_,r;return R(),S("div",k,[e("div",E,[e("h2",null,l(a.value),1),e("div",L,[e("p",V,l((s=t.value)==null?void 0:s.vote_average)+" Votes",1)]),e("div",$,[b,e("p",j,l((_=t.value)==null?void 0:_.overview),1)])]),e("div",q,[e("img",{src:`${I(m).imageURL}/${(r=t.value)==null?void 0:r.poster_path}`,alt:a.value},null,8,A)])])}}}),J=T(C,[["__scopeId","data-v-3d734dcf"]]);export{J as default};
