(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{7494:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/[id]",function(){return r(2520)}])},2520:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var t=r(4051),i=r.n(t),l=r(5893),s=r(9008),o=r(1163),u=r(2369),a=r(3193),c=(r(7294),r(4436)),d=r(2484),v=r(3815),m=r(8100),x=r(8687),f=r(4976);function h(e,n,r,t,i,l,s){try{var o=e[l](s),u=o.value}catch(a){return void r(a)}o.done?n(u):Promise.resolve(u).then(t,i)}var p="\n    query GetMoviesBy($sortByInput: MovieSortByInput!, $queryInput: MovieQueryInput!, $limit: Int!) {\n        movies(sortBy: $sortByInput, query: $queryInput, limit: $limit) {\n            _id\n            title\n            poster\n            genres\n            countries\n            cast\n            directors\n            plot\n            fullplot\n            year\n        }\n    }\n",j=function(){var e,n=(e=i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.bm)();case 2:return t=e.sent,e.abrupt("return",(0,x.request)(v.wj,n,{sortByInput:"METACRITIC_DESC",queryInput:r,limit:50},t));case 4:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var l=e.apply(n,r);function s(e){h(l,t,i,s,o,"next",e)}function o(e){h(l,t,i,s,o,"throw",e)}s(void 0)}))});return function(e,r){return n.apply(this,arguments)}}(),y=function(e){var n,r,t,i=e.movie,s=(0,m.ZP)([p,{cast_in:[i.cast[0]],_id_ne:i._id}],j).data;if(null===s||void 0===s?void 0:s.error)return(0,f.handleError)(s.error);var o,u=null!==(t=null===s||void 0===s?void 0:s.movies)&&void 0!==t?t:[],a=(0,m.ZP)([p,{directors_in:[i.directors[0]],_id_ne:i._id}],j).data;if(null===a||void 0===a?void 0:a.error)return(0,f.handleError)(a.error);var v,x,h=null!==(o=null===a||void 0===a?void 0:a.movies)&&void 0!==o?o:[];return(0,l.jsxs)("div",{className:"md:flex md:items-start",children:[(0,l.jsx)("div",{className:"w-full h-96 md:w-1/2 lg:h-screen relative overflow-hidden",children:i.poster&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{src:i.poster,alt:i.title,className:"absolute min-w-full max-w-full max-h-full z-10 blur-md scale-[3]"}),(0,l.jsx)("img",{src:i.poster,alt:i.title,className:"absolute min-w-full max-w-full max-h-full z-10 object-contain"})]})}),(0,l.jsxs)("div",{className:"w-full mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2",children:[(0,l.jsx)("h3",{className:"text-gray-700 text-3xl font-medium block",children:i.title}),(0,l.jsx)("h4",{className:"text-gray-500 mt-2 text-xl font-medium block",children:"".concat(i.year," - ").concat(null!==(v=null===(n=i.genres)||void 0===n?void 0:n.join(", "))&&void 0!==v?v:""," - (").concat(null!==(x=null===(r=i.countries)||void 0===r?void 0:r.join(", "))&&void 0!==x?x:"",")")}),(0,l.jsx)("div",{className:"text-gray-500 mt-5 text-base",children:i.fullplot}),u&&(0,l.jsxs)("div",{children:[(0,l.jsx)(c.Z,{title:"Lead role played by ".concat(i.cast[0]),subtitle:"Also appeared in"}),(0,l.jsx)("div",{className:"flex overflow-x-auto space-x-8",children:u.map((function(e,n){return(0,l.jsx)("div",{className:"flex-shrink-0",children:(0,l.jsx)(d.Z,{className:"",movie:e,showDetail:!1},n)})}))})]}),h&&(0,l.jsxs)("div",{children:[(0,l.jsx)(c.Z,{title:"Directed by ".concat(i.directors[0]),subtitle:"Also directed"}),(0,l.jsx)("div",{className:"flex overflow-x-auto space-x-8",children:h.map((function(e,n){return(0,l.jsx)("div",{className:"flex-shrink-0",children:(0,l.jsx)(d.Z,{className:"",movie:e,showDetail:!1},n)})}))})]})]})]})},w=r(1664);var _=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("header",{children:(0,l.jsx)("div",{className:"container mx-auto px-6 py-3",children:(0,l.jsx)("div",{className:"flex items-center justify-between",children:(0,l.jsx)(w.default,{href:"/",children:(0,l.jsx)("div",{className:"w-full text-green-500 text-2xl font-semibold cursor-pointer",children:"MongoFlix"})})})})})})};function N(e,n,r,t,i,l,s){try{var o=e[l](s),u=o.value}catch(a){return void r(a)}o.done?n(u):Promise.resolve(u).then(t,i)}var b=function(){var e,n=(e=i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.bm)();case 2:return t=e.sent,e.abrupt("return",(0,x.request)(v.wj,n,{queryInput:{_id:r}},t));case 4:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var l=e.apply(n,r);function s(e){N(l,t,i,s,o,"next",e)}function o(e){N(l,t,i,s,o,"throw",e)}s(void 0)}))});return function(e,r){return n.apply(this,arguments)}}(),g=function(){var e,n=(0,o.useRouter)().query,r=(0,m.ZP)(["\n    query GetMovie($queryInput: MovieQueryInput!) {\n        movie(query: $queryInput) {\n            _id\n            title\n            poster\n            genres\n            countries\n            cast\n            directors\n            plot\n            fullplot\n            year\n        }\n    }\n",n.id],b).data;if(null===r||void 0===r?void 0:r.error)return(0,f.handleError)(r.error);var t=null!==(e=null===r||void 0===r?void 0:r.movie)&&void 0!==e?e:null;return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.default,{children:[(0,l.jsxs)("title",{children:["MongoFlix - ",t.title]}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("div",{className:"bg-gray-100 w-full min-h-screen",children:[(0,l.jsx)(_,{}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(y,{movie:t})}),(0,l.jsx)(a.Z,{})]})]})})}}},function(e){e.O(0,[105,146,976,774,888,179],(function(){return n=7494,e(e.s=n);var n}));var n=e.O();_N_E=n}]);