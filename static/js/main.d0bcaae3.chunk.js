(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(6),i=n.n(r),o=(n(13),n(3)),u=n.n(o),j=n(7),l=n(4),d=(n(15),n(5),function(e){return Object(c.jsx)(c.Fragment,{children:e.movies.map((function(e,t){return Object(c.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(c.jsx)("img",{src:e.Poster,alt:"movie"}),Object(c.jsx)("div",{className:"overlay d-flex align-items-center justify-content-center"})]},t)}))})}),m=(n(16),function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h1",{children:e.heading})})}),f=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){e.setSearchValue(t.target.value)},placeholder:"Type to search ..."})})},h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),o=i[0],h=i[1],b=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://www.omdbapi.com/?s=".concat(t,"&apikey=170ec4c5"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(a=e.sent).Search&&s(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b(o)}),[o]),Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsxs)("div",{className:"row d-flex align-items-center my-4",children:[Object(c.jsx)(m,{heading:"Ramon"}),Object(c.jsx)(f,{searchValue:o,setSearchValue:h})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(d,{movies:n})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.d0bcaae3.chunk.js.map