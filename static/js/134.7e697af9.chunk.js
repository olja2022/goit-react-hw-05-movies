"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,s){s.r(t);var a=s(439),n=s(791),r=s(87),c=s(689),i=s(66),l=s(699),o=s(184);t.default=function(){var e,t=(0,n.useState)(null),s=(0,a.Z)(t,2),d=s[0],h=s[1],x=(0,n.useState)(""),p=(0,a.Z)(x,2),m=p[0],g=p[1],u=(0,r.useSearchParams)({}),j=(0,a.Z)(u,2),v=j[0],f=j[1],y=null!==(e=v.get("query"))&&void 0!==e?e:"",b=(0,n.useState)([]),w=(0,a.Z)(b,2),N=w[0],_=w[1];(0,n.useEffect)((function(){(0,i.p)("search/movie",v).then((function(e){_(e.results)})).catch((function(e){h(e),g("rejected")}))}),[v]);var S=(0,c.TH)();return"rejected"===m?(0,o.jsx)("h2",{children:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ".concat(d.message)}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{style:{marginTop:"20px"},children:"It is the Movie Page"}),(0,o.jsx)("h3",{children:"Here you can search movies"}),(0,o.jsx)("h4",{style:{marginBottom:"20px"},children:"Start enter movie name below"}),(0,o.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;f(""===t?{}:{query:t})},value:y}),0!==N.length&&(0,o.jsx)("div",{className:"accordion",id:"accordionExample",children:N.map((function(e){var t=e.id,s=e.title,a=e.poster_path,n=e.release_date,c=e.original_language,i=e.vote_average,d=e.vote_count,h=e.overview;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"accordion-item",children:[(0,o.jsx)("h2",{className:"accordion-header",children:(0,o.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo-".concat(t),"aria-expanded":"false","aria-controls":"collapseTwo-".concat(t),style:{fontSize:"1.2rem"},children:["Movie title: \xa0",(0,o.jsxs)("strong",{children:[" ","".concat(s)," "]})]})}),(0,o.jsx)("div",{id:"collapseTwo-".concat(t),className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:(0,o.jsxs)("div",{className:"accordion-body",style:{width:"100%",display:"flex"},children:[(0,o.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):l,className:"card-img-top",alt:"...",style:{minWidth:"200px",maxWidth:"200px",height:"100%",marginRight:"20px"}}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsxs)("h4",{children:[(0,o.jsx)("strong",{children:"Release date:"}),(0,o.jsx)("p",{style:{margin:0},children:n})]}),(0,o.jsxs)("p",{style:{marginBottom:"5px"},children:["Original language:",(0,o.jsx)("strong",{children:c.toUpperCase()})]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Rating:"})," ",(0,o.jsx)("br",{}),(0,o.jsxs)("span",{children:["Average vote: ",(0,o.jsx)("strong",{children:i})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("span",{children:["Total votes: ",(0,o.jsxs)("strong",{children:[" ",d]})]})]}),(0,o.jsxs)("h5",{children:[(0,o.jsx)("strong",{children:"Overview: "}),(0,o.jsx)("p",{style:{fontSize:"1rem"},children:h||"No review"})]}),(0,o.jsx)(r.Link,{to:"".concat(t),className:"btn btn-primary",state:S,children:"See more movie's details"})]})]})})]})},t)}))})]})}},699:function(e,t,s){e.exports=s.p+"static/media/noPoster.192b08c804259edd0d28.webp"}}]);
//# sourceMappingURL=134.7e697af9.chunk.js.map