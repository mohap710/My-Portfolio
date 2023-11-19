import{y as f,o as s,c as o,f as e,t as c,z as _,F as u,r as h,u as r,B as d,E as g,A as b,d as y,e as v}from"./index.45843a2a.js";import{g as p}from"./HomePage.d65cade1.js";const j={class:"project-card"},w={class:"info"},S={class:"project-title"},x={class:"number"},L={class:"summary"},N={class:"tech-info"},F={class:"role"},q={class:"stack"},A=["title"],B=["src","alt"],C={class:"actions"},D=["href"],I=["href"],V=e("span",null,"View on",-1),z=[V],M={class:"mockup"},$=["modules"],E=["srcset"],P=["src","alt"],T={__name:"projectCard",props:{project:{type:Object}},async setup(t){let a,l;const m=t;return[a,l]=f(()=>new Promise(i=>{i(m.project)},3e3)),await a,l(),(i,R)=>(s(),o("div",j,[e("div",w,[e("h4",S,[e("span",x,c(t.project.id)+".",1),_(" "+c(t.project.title),1)]),e("div",L,[e("p",null,c(t.project.summary),1),e("div",N,[e("div",F,"Role: "+c(t.project.role),1),e("div",q,[(s(!0),o(u,null,h(t.project.stack,n=>(s(),o("abbr",{title:n},[e("img",{src:r(p)(`stack/${n}.png`),alt:n},null,8,B)],8,A))),256))])]),e("div",C,[t.project.liveLink?(s(),o("a",{key:0,target:"_blank",href:t.project.liveLink,class:"btn btn-primary"},"View website",8,D)):d("",!0),t.project.githubLink?(s(),o("a",{key:1,target:"_blank",href:t.project.githubLink,class:"btn btn-github"},z,8,I)):d("",!0)])])]),e("div",M,[e("swiper-container",{modules:[r(g),r(b)],effect:"flip","slides-per-view":"1","autoplay-delay":"4000",speed:"1000",loop:"true",pagination:"true"},[(s(!0),o(u,null,h(t.project.screenshots,(n,k)=>(s(),o("swiper-slide",null,[e("picture",null,[n.mobile?(s(),o("source",{key:0,srcset:r(p)("projects/"+n.mobile),media:"(max-width:900px)"},null,8,E)):d("",!0),e("img",{src:r(p)("projects/"+n.desktop),loading:"lazy",alt:t.project.title+k},null,8,P)])]))),256))],8,$)])]))}},H=y("projects",()=>({projects:[{id:1,title:"Sayed Nafsak",summary:"Sayed Nafsak is an online social platform that facilitates direct communication and collaboration between freelancers and clients. It aims to increase the visibility and accessibility of the online workforce, and to enable skilled individuals to monetize their skills and expertise.",role:"Full-stack Developer",stack:["vuejs","nodejs","graphql","sequelize","mysql"],liveLink:"https://sayidnafsak.com/",screenshots:[{desktop:"SN/1.webp"},{desktop:"SN/2.webp"},{desktop:"SN/3.webp"},{desktop:"SN/4.webp"},{desktop:"SN/5.webp"}]},{id:2,title:"Afrotech",summary:"Afro-Tech is a Sudanese professional training center that provide high-quality training tailored to the specific needs of the local community. It offers a diverse range of courses in a variety of fields, and has grown to become one of the most trusted and respected training providers in Sudan.",role:"Back-end Developer",stack:["mysql","expressjs","nodejs"],liveLink:"https://afro-tech.net",screenshots:[{desktop:"afro-tech/1-desktop.png"},{desktop:"afro-tech/2-desktop.png"},{desktop:"afro-tech/3-desktop.png"},{desktop:"afro-tech/4.webp"}]},{id:3,title:"online-edu",summary:"As part of a comprehensive full-stack web development course, I undertook the task of creating a responsive e-learning platform to apply and evaluate the acquired knowledge and skills.",role:"Frontend Developer",stack:["html","css","javascript"],liveLink:"https://mohap710.github.io/online-edu",screenshots:[{desktop:"online-edu/1.webp"},{desktop:"online-edu/2.webp"},{desktop:"online-edu/3.webp"},{desktop:"online-edu/4.webp"}]},{id:4,title:"FrontendMentor Challenges",summary:"Frontend Mentor is a website that provides front-end coding challenges using a real-life workflow. It allows you to improve your HTML, CSS, and JavaScript skills by building real-world projects.",role:"Frontend Developer",stack:["html","css"],liveLink:"https://www.frontendmentor.io/profile/mohap710",screenshots:[{desktop:"frontend-mentor/chat-app.png"},{desktop:"frontend-mentor/fylo.png"},{desktop:"frontend-mentor/data-storage.png"},{desktop:"frontend-mentor/social-proof.png"},{desktop:"frontend-mentor/testimonial-grid.png"}]}]})),J={class:"projects"},O=e("h2",{class:"section-title"},"My Work",-1),G={__name:"ProjectsShowcase",setup(t){const{projects:a}=H();return(l,m)=>(s(),o("section",J,[O,(s(!0),o(u,null,h(r(a),i=>(s(),v(T,{project:i},null,8,["project"]))),256))]))}};export{G as default};
