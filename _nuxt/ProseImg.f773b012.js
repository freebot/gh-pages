import{M as a,N as i,a2 as n,a3 as c,I as o,w as h,U as u}from"./defu.2e1dc047.js";import"./nuxt-link.a015573c.js";import"./app.config.4ad24e0a.js";const d=["src","alt","width","height"],g=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=i(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?h(e.src,u().app.baseURL):e.src});return(r,l)=>(n(),c("img",{src:o(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{g as default};