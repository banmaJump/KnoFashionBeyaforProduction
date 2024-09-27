(()=>{"use strict";var e,t,n,r,a,l={564:(e,t,n)=>{var r=n(540),a=n(961),l=n(976),c=n(767),o=n(296),s=n(467),u=n(756),i=n.n(u),m=n(83);const f=function(e){var t=e.closeMenu,n=(0,r.useState)(""),a=(0,o.A)(n,2),u=a[0],f=a[1],d=(0,r.useState)([]),p=(0,o.A)(d,2),E=p[0],h=p[1],b=(0,c.Zp)(),v=function(){var e=(0,s.A)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,f(n),!(n.length>0)){e.next=15;break}return e.prev=3,e.next=6,m.A.get("/api/search-suggestions?query=".concat(n));case 6:r=e.sent,h(r.data.slice(0,10)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3);case 13:e.next=16;break;case 15:h([]);case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){t(),f("")},y=function(e){var t=e.genre,n=e.link;return"グッズ"===t&&n?n:["goods","グッズ","商品"].some((function(e){return t.toLowerCase().includes(e)}))?"/goods":e.link};return r.createElement("div",{className:"search-box"},r.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),t(),["goods","グッズ","商品"].some((function(e){return u.toLowerCase().includes(e)}))?b("/goods"):b("/search-results?query=".concat(u)),f("")}},r.createElement("input",{type:"text",value:u,onChange:v,placeholder:"検索中・・・"}),r.createElement("button",{type:"submit"},"Search")),E.length>0&&r.createElement("ul",{className:"search-suggestions"},E.map((function(e,t){return r.createElement("li",{key:t,onClick:g},r.createElement(l.N_,{to:y(e)},e.name," - ",e.genre))}))))};const d=function(){var e=(0,r.useState)(!1),t=(0,o.A)(e,2),n=t[0],a=t[1],l=(0,r.useCallback)((function(){a((function(e){return!e}))}),[]),c=(0,r.useCallback)((function(){a(!1)}),[]);return r.createElement("header",null,r.createElement("div",{className:"header-content"},r.createElement("h1",{className:"site-title"},"Kのファッション部屋"),r.createElement("button",{className:"hamburger-menu",onClick:l},n?"✖":"☰")),r.createElement("nav",{className:"slide-menu ".concat(n?"open":"")},r.createElement(f,{className:"search-box",closeMenu:c})))};const p=function(){var e=(0,r.useMemo)((function(){return r.createElement("ul",{className:"sub-nav-links"},r.createElement("li",null,r.createElement(l.N_,{to:"/"},"Home")),r.createElement("li",null,r.createElement(l.N_,{to:"/radios"},"ラジオ")),r.createElement("li",null,r.createElement(l.N_,{to:"/brands"},"記事")),r.createElement("li",null,r.createElement(l.N_,{to:"/vlogs"},"Vlog")),r.createElement("li",null,r.createElement(l.N_,{to:"/goods"},"グッズ")))}),[]);return r.createElement("div",{className:"sub-header"},e)};var E=n(601),h=n(875);const b=function(){return r.createElement("footer",{className:"footer"},r.createElement("div",null,r.createElement("h2",null,"公式アカウント"),r.createElement("div",{className:"icons"},r.createElement("a",{href:"#"},r.createElement(E.g,{icon:h.HQ1})),r.createElement("a",{href:"#"},r.createElement(E.g,{icon:h.QV6})),r.createElement("a",{href:"#"},r.createElement(E.g,{icon:h.B4m})),r.createElement("a",{href:"#"},r.createElement(E.g,{icon:h.rl$})),r.createElement("a",{href:"#"},r.createElement(E.g,{icon:h.AIX})))),r.createElement("div",{className:"footer-left col-md-4 col-sm-6"},r.createElement("p",{className:"about"},r.createElement("span",null," About K")," ",r.createElement("p",null,"ようこそ、Kのファッション部屋へ！ このチャンネルでは、僕の大好きなファッションやビジネスに関する情報を発信していきます。僕自身、ファッションが今の自分を作り上げたと言っても過言ではありません。高校卒業後からファッションにのめり込み、年間500万円以上を洋服に費やしてきました。正直、ちょっとアホですよね（笑）。 これまでに、世界最高峰のファッション誌に掲載されたり、有名ブランドの公式インスタグラムに取り上げられたりと、様々な経験をしてきました。また、スタイリストのアシスタントや、映画やCMのスタイリングを担当したこともあります。現在は、ファッション系の企業で働きながら、皆さんに役立つ情報をお届けしています。 このサイトでは、ファッションの楽しさやトレンド、ビジネスのコツなど、様々なテーマでお話ししていきます。僕の情熱が皆さんに伝われば嬉しいです。 ぜひ、公式アカウントもフォローして最新情報をチェックしてください！僕と一緒に、ファッションやビジネスの世界を楽しんでいきましょう。よろしくお願いします！"))),r.createElement("div",{className:"footer-center col-md-4 col-sm-6"},r.createElement("div",{className:"jigzag"},r.createElement("p",null,"お問い合わせ")),r.createElement("div",{className:"jigzag"},r.createElement("p",null,"Q&A"))),r.createElement("div",{className:"footer-right col-md-4 col-sm-6"},r.createElement("h2",null,"Kのファッション",r.createElement("span",null,"部屋")),r.createElement("p",{className:"menu"},r.createElement("a",{href:"/"}," Home"),r.createElement("a",{href:"/beneeeeeeeeefit"}," About"),r.createElement("a",{href:"/goods"}," Goods"),r.createElement("a",{href:"/radios"}," Radio"),r.createElement("a",{href:"/vlogs"}," Vlogs"),r.createElement("a",{href:"/news"}," News")),r.createElement("p",{className:"name"},r.createElement("a",{href:"/beneeeeeeeeefit"},"Company Name © 2024"))))};var v=n(705);n(599);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,v.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const k=function(){var e=(0,r.useState)([]),t=(0,o.A)(e,2),n=t[0],a=t[1],l=(0,r.useState)(!0),c=(0,o.A)(l,2),u=c[0],f=c[1],d=(0,r.useState)(null),p=(0,o.A)(d,2),E=p[0],h=p[1],b=(0,r.useState)(1),v=(0,o.A)(b,2),g=v[0],k=(v[1],(0,r.useState)(!1)),N=(0,o.A)(k,2),w=N[0],O=N[1];(0,r.useEffect)((function(){var e=function(){var e=(0,s.A)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.A.get("/api/news",{params:{page:g,limit:6}});case 3:t=e.sent,n=t.data.items.map((function(e){return y(y({},e),{},{image_url:e.image_url||"https://csshtml.work/wp-content/uploads/cat.jpg"})})),a(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),h("エラーが発生しました");case 13:return e.prev=13,f(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,r.useEffect)((function(){w||$(".news-carousel").slick({dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,adaptiveHeight:!0})}),[n,w]);var j=function(e){e.stopPropagation(),e.currentTarget.classList.add("show-content"),O(!0),$(".news-carousel").slick("slickPause"),setTimeout((function(){O(!1),$(".news-carousel").slick("slickPlay")}),5e3)};return u?r.createElement("p",null,"読み込み中..."):E?r.createElement("p",null,E):r.createElement("div",{className:"news-container",onClick:function(e){e.stopPropagation(),document.querySelectorAll(".show-content").forEach((function(e){return e.classList.remove("show-content")}))}},r.createElement("h1",{className:"everyday-title"},"News"),r.createElement("button",{className:"carousel-button left",onClick:function(){return $(".news-carousel").slick("slickPrev")}}),r.createElement("button",{className:"carousel-button right",onClick:function(){return $(".news-carousel").slick("slickNext")}}),r.createElement("div",{className:"news-carousel"},n.map((function(e){return r.createElement("div",{key:e.id,className:"news-slide",onClick:j},r.createElement("img",{src:e.image_url,alt:e.title}),r.createElement("div",{className:"news-content"},r.createElement("h3",null,e.title),r.createElement("p",null,e.title_content),r.createElement("p",null,e.genre),r.createElement("a",{href:e.link,className:"news-link"},"記事を読む")))}))))};var N=(0,r.lazy)((function(){return n.e(46).then(n.bind(n,46))})),w=(0,r.lazy)((function(){return n.e(944).then(n.bind(n,868))})),O=(0,r.lazy)((function(){return n.e(668).then(n.bind(n,624))})),j=(0,r.lazy)((function(){return Promise.all([n.e(264),n.e(729),n.e(503),n.e(845),n.e(758),n.e(765),n.e(489),n.e(701),n.e(656)]).then(n.bind(n,656))})),P=(0,r.lazy)((function(){return n.e(654).then(n.bind(n,141))})),S=(0,r.lazy)((function(){return n.e(438).then(n.bind(n,786))})),A=(0,r.lazy)((function(){return n.e(101).then(n.bind(n,615))})),_=(0,r.lazy)((function(){return n.e(314).then(n.t.bind(n,314,23))}));const C=function(){var e="/banma"===(0,c.zy)().pathname;return r.createElement(r.Fragment,null,!e&&r.createElement(d,null),!e&&r.createElement(p,null),r.createElement("div",{className:"container"},r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(c.BV,null,r.createElement(c.qh,{path:"/",element:r.createElement(P,null)}),r.createElement(c.qh,{path:"/details",element:r.createElement(O,null)}),r.createElement(c.qh,{path:"/brands",element:r.createElement(w,null)}),r.createElement(c.qh,{path:"/goods",element:r.createElement(j,null)}),r.createElement(c.qh,{path:"/radios",element:r.createElement(S,null)}),r.createElement(c.qh,{path:"/vlogs",element:r.createElement(A,null)}),r.createElement(c.qh,{path:"/article/:articleId",element:r.createElement(N,null)}),r.createElement(c.qh,{path:"/banma",element:r.createElement(_,null)}),r.createElement(c.qh,{path:"/beneeeeeeeeefit",element:function(){return window.location.href="/beneeeeeeeeefit",null}})))),!e&&r.createElement(k,null),!e&&r.createElement(b,null))};a.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(l.Kd,null,r.createElement(C,null))))}},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return l[e].call(n.exports,n,n.exports,o),n.exports}o.m=l,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(i=0;i<e.length;i++){for(var[n,r,a]=e[i],c=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,a<l&&(l=a));if(c){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var l={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,o.d(a,l),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"js/bundle."+{46:"392aae596b5fbb2fccd0",81:"ad0c86e5dcfe60a136a6",101:"5aa692b87adcc6882fde",314:"f7c996454eb0e7f31944",370:"35760da17a1eab15d161",372:"6cdac401a4ac1ebf4145",438:"6e65072cf1dde82bb04a",654:"c6a0a6f7a093e412637b",656:"148be80c0d2779983233",668:"a77d261351ccc6ba2c18",944:"4993ac5f20cbabd53803"}[e]+".js",o.miniCssF=e=>{},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="list-app:",o.l=(e,t,n,l)=>{if(r[e])r[e].push(t);else{var c,s;if(void 0!==n)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var m=u[i];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==a+n){c=m;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",a+n),c.src=e),r[e]=[t];var f=(t,n)=>{c.onerror=c.onload=null,clearTimeout(d);var a=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(n))),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/static/",(()=>{var e={792:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=a);var l=o.p+o.u(t),c=new Error;o.l(l,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",c.name="ChunkLoadError",c.type=a,c.request=l,r[1](c)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,c,s]=n,u=0;if(l.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var i=s(o)}for(t&&t(n);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(i)},n=self.webpackChunklist_app=self.webpackChunklist_app||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=o.O(void 0,[264,729,503,845,758,765,489,701],(()=>o(564)));s=o.O(s)})();
//# sourceMappingURL=bundle.f64fe8889a6ba2cdb787.js.map