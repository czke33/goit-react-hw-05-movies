"use strict";(self.webpackChunkczke33_05_movies=self.webpackChunkczke33_05_movies||[]).push([[986],{10:function(e,n,t){t.d(n,{Hx:function(){return v},LI:function(){return l},Y5:function(){return p},uV:function(){return d},wr:function(){return u}});var r=t(861),a=t(757),c=t.n(a),s=t(340),i="714c3120d8fef346bdc59740f67d43e6",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"trending/movie/day?api_key=").concat(i),e.next=3,s.Z.get(n);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),e.next=3,s.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"),e.next=3,s.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"),e.next=3,s.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),e.next=3,s.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},467:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),a=t(439),c=t(757),s=t.n(c),i=t(791),o=t(689),u=t(87),l=t(10),p="MovieDatails_link__wQ5RC",d="MovieDatails_back-button__qBGj-",v="MovieDatails_wrapper__Vzu1a",f="MovieDatails_details__eS6fn",h="MovieDatails_additional__IoIWr",x=t(184),_=function(){var e,n,t=(0,i.useState)(),c=(0,a.Z)(t,2),_=c[0],m=c[1],w=null!==(e=null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",g=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(n);case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),j=(0,o.UO)().movieId;if((0,i.useEffect)((function(){g(j)}),[j]),_)return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:v,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(u.rU,{to:w,className:p,children:(0,x.jsx)("button",{type:"button",className:d,children:"\u2190Go back"})}),(0,x.jsx)("img",{src:_.poster_path?"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(_.poster_path):"https://via.placeholder.com/220x330?text=Theres+no+photo",alt:"".concat(_.title)})]}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("h2",{children:_.title}),(0,x.jsxs)("span",{children:["User score: ",Math.round(10*_.vote_average),"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:_.overview?_.overview:"There's no overview"}),(0,x.jsx)("h3",{children:"Generes"}),(0,x.jsx)("p",{children:_.genres&&_.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,x.jsxs)("div",{className:h,children:["Additional information:",(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"cast",state:{from:"".concat(w)},children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"reviews",state:{from:"".concat(w)},children:"Reviews"})})]})]}),(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=986.2da13cce.chunk.js.map