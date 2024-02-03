import{_ as v,u as k,o as t,c as o,a as s,b as e,F as n,r as h,d as i,e as $,f as u,w as r,S as g,g as p,h as m}from"./index.e6fb1729.js";const y={class:"placeholder"},x={__name:"AnimatedPlaceholder",props:{height:{type:String},width:{type:String},borderRadius:{type:String,default:"0.5rem"}},setup(_){return k(a=>({"47e5a11e":_.height,"76c3c2ef":_.width,"72f3f695":_.borderRadius})),(a,d)=>(t(),o("div",y,"\xA0"))}},c=v(x,[["__scopeId","data-v-2135c10b"]]);const A={class:"project-card"},P={class:"info"},E={class:"project-title"},V={class:"summary"},C={class:"summary-placeholder"},I={class:"tech-info"},T={class:"role"},R={class:"stack"},j={class:"actions"},L={class:"btn"},D={class:"mockup"},H={__name:"ProjectCardSkeleton",setup(_){return(a,d)=>(t(),o("div",A,[s("div",P,[s("h4",E,[e(c,{width:"50%",height:"2rem"})]),s("div",V,[s("p",C,[e(c,{width:"25ch",height:"1ch"}),e(c,{width:"15ch",height:"1ch"}),e(c,{width:"25ch",height:"1ch"}),e(c,{width:"30ch",height:"1ch"})]),s("div",I,[s("div",T,[e(c,{height:"1ch"})]),s("div",R,[(t(!0),o(n,null,h(Array(4),l=>(t(),i(c))),256))])]),s("div",j,[(t(!0),o(n,null,h(Array(2),l=>(t(),o("a",L,[e(c,{width:"6rem",height:"3rem"})]))),256))])])]),s("div",D,[e(c,{width:"75%",height:"300px",class:"img-placeholder"})])]))}},O=v(H,[["__scopeId","data-v-cd063400"]]);const B={class:"hero"},F={class:"intro pt-2"},N={class:"title"},q={class:"slogan"},G={class:"cta"},M={class:"btn"},z={class:"hero-image"},J={__name:"HeroSectionSkeleton",setup(_){return(a,d)=>(t(),o("section",B,[s("div",F,[s("h1",N,[e(c)]),s("h4",q,[e(c,{width:"20ch",height:"2ch"}),e(c,{width:"30ch",height:"2ch"}),e(c,{width:"25ch",height:"2ch"})]),s("div",G,[(t(!0),o(n,null,h(Array(2),l=>(t(),o("a",M,[e(c,{width:"6rem",height:"3rem"})]))),256))])]),s("div",z,[e(c,{width:"100%",height:"65vh"})])]))}},K=v(J,[["__scopeId","data-v-537177bd"]]),Q={class:"skills-container"},U={__name:"SkillGridSkeleton",setup(_){return(a,d)=>(t(),o("div",Q,[(t(!0),o(n,null,h(Array(15),l=>(t(),i(c,{width:"57px",height:"57px",class:"skill"}))),256))]))}};const W={class:"section-title"},X={class:"about-me"},Y={class:"about-placeholder"},Z={class:"skills"},ee={__name:"AboutSectionSkeleton",setup(_){return(a,d)=>(t(),o("section",null,[s("h2",W,[e(c,{width:"10ch",height:"1ch"})]),s("div",X,[s("p",Y,[(t(!0),o(n,null,h(Array(5),l=>(t(),i(c,{width:"45ch",height:"2ch"}))),256))]),e(c,{width:"400px",height:"400px",class:"profile-pic"})]),s("div",Z,[s("h2",null,[e(c,{width:"10ch",height:"1ch"})]),e(U)])]))}},te=v(ee,[["__scopeId","data-v-360a0b28"]]);const se={class:"testimonial-card"},ce={class:"avatar"},oe={class:"img-wrapper"},_e={class:"content"},ie={class:"name mt-3"},ne={class:"role mb-3"},ae={__name:"TestimonialCardSkeleton",setup(_){return(a,d)=>(t(),o("div",se,[s("div",ce,[s("div",oe,[e(c,{height:"100%","border-radius":"50%"})])]),s("div",_e,[s("q",null,[(t(!0),o(n,null,h(Array(6),l=>(t(),i(c,{width:"30ch",height:"1ch"}))),256))]),s("h4",ie,[e(c,{width:"15ch",height:"1ch"})]),s("h6",ne,[e(c,{width:"15ch",height:"1ch"})])])]))}},re=v(ae,[["__scopeId","data-v-37b37a72"]]),he={class:"testimonials-container"},de={breakpoints:{1024:{slidesPerView:3},991:{slidesPerView:2},768:{slidesPerView:1}}},me={__name:"HomePage",emits:["loaded"],setup(_,{emit:a}){$(()=>{console.log("mounted"),a("loaded")});const d=u(()=>m(()=>import("./HeroSection.6e4dcc05.js"),["assets/HeroSection.6e4dcc05.js","assets/timeoutDelay.09563a71.js","assets/index.e6fb1729.js","assets/index.4ad4913b.css","assets/FingerprintSpinner.4394b137.js","assets/FingerprintSpinner.d7a34532.css","assets/HeroSection.e1a9b4d2.css"])),l=u(()=>m(()=>import("./ProjectsShowcase.0e89cd9c.js"),["assets/ProjectsShowcase.0e89cd9c.js","assets/index.e6fb1729.js","assets/index.4ad4913b.css","assets/timeoutDelay.09563a71.js","assets/ProjectsShowcase.f9320a14.css"])),w=u(()=>m(()=>import("./AboutSection.2824605b.js"),["assets/AboutSection.2824605b.js","assets/timeoutDelay.09563a71.js","assets/index.e6fb1729.js","assets/index.4ad4913b.css","assets/AboutSection.e71944f8.css"])),f=u(()=>m(()=>import("./TestimonialSection.cdc61498.js"),["assets/TestimonialSection.cdc61498.js","assets/timeoutDelay.09563a71.js","assets/index.e6fb1729.js","assets/index.4ad4913b.css","assets/TestimonialSection.c7703eda.css"])),S=u(()=>m(()=>import("./ContactForm.3f369512.js"),["assets/ContactForm.3f369512.js","assets/index.e6fb1729.js","assets/index.4ad4913b.css","assets/FingerprintSpinner.4394b137.js","assets/FingerprintSpinner.d7a34532.css","assets/ContactForm.b574cc81.css"]));return(le,ue)=>(t(),o(n,null,[(t(),i(g,null,{fallback:r(()=>[e(K)]),default:r(()=>[e(p(d),{id:"home"})]),_:1})),(t(),i(g,null,{fallback:r(()=>[(t(!0),o(n,null,h(Array(2),b=>(t(),i(O))),256))]),default:r(()=>[e(p(l),{id:"portfolio"})]),_:1})),(t(),i(g,null,{fallback:r(()=>[e(te)]),default:r(()=>[e(p(w),{id:"about"})]),_:1})),(t(),i(g,null,{fallback:r(()=>[s("div",he,[s("swiper-container",de,[(t(!0),o(n,null,h(Array(3),b=>(t(),o("swiper-slide",null,[e(re)]))),256))])])]),default:r(()=>[e(p(f))]),_:1})),e(p(S),{id:"contact"})],64))}};export{me as default};
