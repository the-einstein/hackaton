var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function l(t,n,e){t.$$.on_destroy.push(s(n,e))}function i(t,n,e,r){if(t){const o=u(t,n,e,r);return t[0](o)}}function u(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function f(t,n,e,r,o,a,c){const s=function(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}(n,r,o,a);if(s){const o=u(n,e,r,c);t.p(o,s)}}function h(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function p(n){return n&&a(n.destroy)?n.destroy:t}function d(t,n){t.appendChild(n)}function m(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function E(){return b("")}function x(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t){return Array.from(t.childNodes)}function T(t,n,e,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const a=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)o.removeAttribute(a[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):v(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return b(n)}function A(t){return _(t," ")}function I(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function L(t,n){t.value=null==n?"":n}let S;function N(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function D(t){P().$$.on_mount.push(t)}function H(t,n){P().$$.context.set(t,n)}function O(t){return P().$$.context.get(t)}const R=[],j=[],V=[],B=[],C=Promise.resolve();let U=!1;function M(t){V.push(t)}let K=!1;const F=new Set;function Q(){if(!K){K=!0;do{for(let t=0;t<R.length;t+=1){const n=R[t];N(n),W(n.$$)}for(N(null),R.length=0;j.length;)j.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];F.has(n)||(F.add(n),n())}V.length=0}while(R.length);for(;B.length;)B.pop()();U=!1,K=!1,F.clear()}}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const q=new Set;let z;function G(){z={r:0,c:[],p:z}}function J(){z.r||o(z.c),z=z.p}function Y(t,n){t&&t.i&&(q.delete(t),t.i(n))}function X(t,n,e,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push((()=>{q.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,r){const{fragment:c,on_mount:s,on_destroy:l,after_update:i}=t.$$;c&&c.m(n,r),M((()=>{const n=s.map(e).filter(a);l?l.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(M)}function rt(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(R.push(t),U||(U=!0,C.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,a,c,s,l,i=[-1]){const u=S;N(n);const f=e.props||{},h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let p=!1;if(h.ctx=a?a(n,f,((t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&ot(n,t)),e})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){const t=k(e.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();e.intro&&Y(n.$$.fragment),et(n,e.target,e.anchor),Q()}N(u)}class ct{$destroy(){rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function lt(n,e=t){let r;const o=[];function a(t){if(c(n,t)&&(n=t,r)){const t=!st.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),st.push(e,n)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:a,update:function(t){a(t(n))},subscribe:function(c,s=t){const l=[c,s];return o.push(l),1===o.length&&(r=e(a)||t),c(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function it(n,e,r){const c=!Array.isArray(n),l=c?[n]:n,i=e.length<2;return{subscribe:lt(r,(n=>{let r=!1;const u=[];let f=0,h=t;const p=()=>{if(f)return;h();const r=e(c?u[0]:u,n);i?n(r):h=a(r)?r:t},d=l.map(((t,n)=>s(t,(t=>{u[n]=t,f&=~(1<<n),r&&p()}),(()=>{f|=1<<n}))));return r=!0,p(),function(){o(d),h()}})).subscribe}}const ut={},ft={};function ht(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const pt=function(t,n){const e=[];let r=ht(t);return{get location(){return r},listen(n){e.push(n);const o=()=>{r=ht(t),n({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=e.indexOf(n);e.splice(r,1)}},navigate(n,{state:o,replace:a=!1}={}){o={...o,key:Date.now()+""};try{a?t.history.replaceState(o,null,n):t.history.pushState(o,null,n)}catch(e){t.location[a?"replace":"assign"](n)}r=ht(t),e.forEach((t=>t({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],r=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return r[n]},pushState(t,o,a){const[c,s=""]=a.split("?");n++,e.push({pathname:c,search:s}),r.push(t)},replaceState(t,o,a){const[c,s=""]=a.split("?");e[n]={pathname:c,search:s},r[n]=t}}}}()),{navigate:dt}=pt,mt=/^:(.+)/;function $t(t){return"*"===t[0]}function gt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function vt(t){return t.replace(/(^\/+|\/+$)/g,"")}function bt(t,n){return{route:t,score:t.default?0:gt(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return mt.test(t)}(n)?$t(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function yt(t,n){let e,r;const[o]=n.split("?"),a=gt(o),c=""===a[0],s=function(t){return t.map(bt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,o=s.length;t<o;t++){const o=s[t].route;let l=!1;if(o.default){r={route:o,params:{},uri:n};continue}const i=gt(o.path),u={},f=Math.max(a.length,i.length);let h=0;for(;h<f;h++){const t=i[h],n=a[h];if(void 0!==t&&$t(t)){u["*"===t?"*":t.slice(1)]=a.slice(h).map(decodeURIComponent).join("/");break}if(void 0===n){l=!0;break}let e=mt.exec(t);if(e&&!c){const t=decodeURIComponent(n);u[e[1]]=t}else if(t!==n){l=!0;break}}if(!l){e={route:o,params:u,uri:"/"+a.slice(0,h).join("/")};break}}return e||r||null}function Et(t,n){return`${vt("/"===n?t:`${vt(t)}/${vt(n)}`)}/`}function xt(t){let n;const e=t[9].default,r=i(e,t,t[8],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,e){r&&r.m(t,e),n=!0},p(t,[n]){r&&r.p&&256&n&&f(r,e,t,t[8],n,null,null)},i(t){n||(Y(r,t),n=!0)},o(t){X(r,t),n=!1},d(t){r&&r.d(t)}}}function wt(t,n,e){let r,o,a,{$$slots:c={},$$scope:s}=n,{basepath:i="/"}=n,{url:u=null}=n;const f=O(ut),h=O(ft),p=lt([]);l(t,p,(t=>e(7,a=t)));const d=lt(null);let m=!1;const $=f||lt(u?{pathname:u}:pt.location);l(t,$,(t=>e(6,o=t)));const g=h?h.routerBase:lt({path:i,uri:i});l(t,g,(t=>e(5,r=t)));const v=it([g,d],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:r,uri:o}=n;return{path:r.default?e:r.path.replace(/\*.*$/,""),uri:o}}));return f||(D((()=>pt.listen((t=>{$.set(t.location)})))),H(ut,$)),H(ft,{activeRoute:d,base:g,routerBase:v,registerRoute:function(t){const{path:n}=r;let{path:e}=t;if(t._path=e,t.path=Et(n,e),"undefined"==typeof window){if(m)return;const n=function(t,n){return yt([t],n)}(t,o.pathname);n&&(d.set(n),m=!0)}else p.update((n=>(n.push(t),n)))},unregisterRoute:function(t){p.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,i=t.basepath),"url"in t&&e(4,u=t.url),"$$scope"in t&&e(8,s=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:t}=r;p.update((n=>(n.forEach((n=>n.path=Et(t,n._path))),n)))}if(192&t.$$.dirty){const t=yt(a,o.pathname);d.set(t)}},[p,$,g,i,u,r,o,a,s,c]}class kt extends ct{constructor(t){super(),at(this,t,wt,xt,c,{basepath:3,url:4})}}const Tt=t=>({params:4&t,location:16&t}),_t=t=>({params:t[2],location:t[4]});function At(t){let n,e,r,o;const a=[Lt,It],c=[];function s(t,n){return null!==t[0]?0:1}return n=s(t),e=c[n]=a[n](t),{c(){e.c(),r=E()},l(t){e.l(t),r=E()},m(t,e){c[n].m(t,e),m(t,r,e),o=!0},p(t,o){let l=n;n=s(t),n===l?c[n].p(t,o):(G(),X(c[l],1,1,(()=>{c[l]=null})),J(),e=c[n],e?e.p(t,o):(e=c[n]=a[n](t),e.c()),Y(e,1),e.m(r.parentNode,r))},i(t){o||(Y(e),o=!0)},o(t){X(e),o=!1},d(t){c[n].d(t),t&&$(r)}}}function It(t){let n;const e=t[10].default,r=i(e,t,t[9],_t);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,e){r&&r.m(t,e),n=!0},p(t,n){r&&r.p&&532&n&&f(r,e,t,t[9],n,Tt,_t)},i(t){n||(Y(r,t),n=!0)},o(t){X(r,t),n=!1},d(t){r&&r.d(t)}}}function Lt(t){let e,r,o;const a=[{location:t[4]},t[2],t[3]];var c=t[0];function s(t){let e={};for(let t=0;t<a.length;t+=1)e=n(e,a[t]);return{props:e}}return c&&(e=new c(s())),{c(){e&&tt(e.$$.fragment),r=E()},l(t){e&&nt(e.$$.fragment,t),r=E()},m(t,n){e&&et(e,t,n),m(t,r,n),o=!0},p(t,n){const o=28&n?function(t,n){const e={},r={},o={$$scope:1};let a=t.length;for(;a--;){const c=t[a],s=n[a];if(s){for(const t in c)t in s||(r[t]=1);for(const t in s)o[t]||(e[t]=s[t],o[t]=1);t[a]=s}else for(const t in c)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}(a,[16&n&&{location:t[4]},4&n&&Z(t[2]),8&n&&Z(t[3])]):{};if(c!==(c=t[0])){if(e){G();const t=e;X(t.$$.fragment,1,0,(()=>{rt(t,1)})),J()}c?(e=new c(s()),tt(e.$$.fragment),Y(e.$$.fragment,1),et(e,r.parentNode,r)):e=null}else c&&e.$set(o)},i(t){o||(e&&Y(e.$$.fragment,t),o=!0)},o(t){e&&X(e.$$.fragment,t),o=!1},d(t){t&&$(r),e&&rt(e,t)}}}function St(t){let n,e,r=null!==t[1]&&t[1].route===t[7]&&At(t);return{c(){r&&r.c(),n=E()},l(t){r&&r.l(t),n=E()},m(t,o){r&&r.m(t,o),m(t,n,o),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?r?(r.p(t,e),2&e&&Y(r,1)):(r=At(t),r.c(),Y(r,1),r.m(n.parentNode,n)):r&&(G(),X(r,1,1,(()=>{r=null})),J())},i(t){e||(Y(r),e=!0)},o(t){X(r),e=!1},d(t){r&&r.d(t),t&&$(n)}}}function Nt(t,e,r){let o,a,{$$slots:c={},$$scope:s}=e,{path:i=""}=e,{component:u=null}=e;const{registerRoute:f,unregisterRoute:p,activeRoute:d}=O(ft);l(t,d,(t=>r(1,o=t)));const m=O(ut);l(t,m,(t=>r(4,a=t)));const $={path:i,default:""===i};let g={},v={};var b;return f($),"undefined"!=typeof window&&(b=()=>{p($)},P().$$.on_destroy.push(b)),t.$$set=t=>{r(13,e=n(n({},e),h(t))),"path"in t&&r(8,i=t.path),"component"in t&&r(0,u=t.component),"$$scope"in t&&r(9,s=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&o&&o.route===$&&r(2,g=o.params);{const{path:t,component:n,...o}=e;r(3,v=o)}},e=h(e),[u,o,g,v,a,d,m,$,i,s,c]}class Pt extends ct{constructor(t){super(),at(this,t,Nt,St,c,{path:8,component:0})}}function Dt(t){function n(t){const n=t.currentTarget;""===n.target&&function(t){const n=location.host;return t.host==n||0===t.href.indexOf(`https://${n}`)||0===t.href.indexOf(`http://${n}`)}(n)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),dt(n.pathname+n.search,{replace:n.hasAttribute("replace")}))}return t.addEventListener("click",n),{destroy(){t.removeEventListener("click",n)}}}function Ht(n){let e,r,a,c,s,l,i,u,f,h,g,E,x,I,L,S,N,P,D,H,O,R,j;return{c(){e=v("nav"),r=v("a"),a=b("Qora xat"),s=y(),l=v("button"),i=v("span"),u=y(),f=v("div"),h=v("ul"),g=v("li"),E=v("a"),x=b("Home\r\n          "),I=v("span"),L=b("(current)"),N=y(),P=v("li"),D=v("a"),H=b("Applications"),this.h()},l(t){e=T(t,"NAV",{class:!0});var n=k(e);r=T(n,"A",{class:!0,href:!0});var o=k(r);a=_(o,"Qora xat"),o.forEach($),s=A(n),l=T(n,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var c=k(l);i=T(c,"SPAN",{class:!0}),k(i).forEach($),c.forEach($),u=A(n),f=T(n,"DIV",{class:!0,id:!0});var p=k(f);h=T(p,"UL",{class:!0});var d=k(h);g=T(d,"LI",{class:!0});var m=k(g);E=T(m,"A",{class:!0,href:!0});var v=k(E);x=_(v,"Home\r\n          "),I=T(v,"SPAN",{class:!0});var b=k(I);L=_(b,"(current)"),b.forEach($),v.forEach($),m.forEach($),N=A(d),P=T(d,"LI",{class:!0});var y=k(P);D=T(y,"A",{class:!0,href:!0});var w=k(D);H=_(w,"Applications"),w.forEach($),y.forEach($),d.forEach($),p.forEach($),n.forEach($),this.h()},h(){w(r,"class","navbar-brand"),w(r,"href","/"),w(i,"class","navbar-toggler-icon"),w(l,"class","navbar-toggler"),w(l,"type","button"),w(l,"data-toggle","collapse"),w(l,"data-target","#navbarSupportedContent"),w(l,"aria-controls","navbarSupportedContent"),w(l,"aria-expanded","false"),w(l,"aria-label","Toggle navigation"),w(I,"class","sr-only"),w(E,"class","nav-link"),w(E,"href","/"),w(g,"class","nav-item active"),w(D,"class","nav-link"),w(D,"href","/apps"),w(P,"class","nav-item"),w(h,"class","navbar-nav mr-auto"),w(f,"class","collapse navbar-collapse"),w(f,"id","navbarSupportedContent"),w(e,"class","navbar navbar-expand-lg navbar-light bg-light")},m(t,n){m(t,e,n),d(e,r),d(r,a),d(e,s),d(e,l),d(l,i),d(e,u),d(e,f),d(f,h),d(h,g),d(g,E),d(E,x),d(E,I),d(I,L),d(h,N),d(h,P),d(P,D),d(D,H),R||(j=[p(c=Dt.call(null,r)),p(S=Dt.call(null,E)),p(O=Dt.call(null,D))],R=!0)},p:t,i:t,o:t,d(t){t&&$(e),R=!1,o(j)}}}class Ot extends ct{constructor(t){super(),at(this,t,null,Ht,c,{})}}function Rt(t,n,e){const r=t.slice();return r[1]=n[e],r[3]=e,r}function jt(t){let n,e,r,o,a,c,s,l,i,u,f,h,p,g=t[3]+1+"",E=t[1].name+"",x=t[1].region+"",L=t[1].score+"";return{c(){n=v("tr"),e=v("th"),r=b(g),o=y(),a=v("td"),c=b(E),s=y(),l=v("td"),i=b(x),u=y(),f=v("td"),h=b(L),p=y(),this.h()},l(t){n=T(t,"TR",{});var d=k(n);e=T(d,"TH",{scope:!0});var m=k(e);r=_(m,g),m.forEach($),o=A(d),a=T(d,"TD",{});var v=k(a);c=_(v,E),v.forEach($),s=A(d),l=T(d,"TD",{});var b=k(l);i=_(b,x),b.forEach($),u=A(d),f=T(d,"TD",{});var y=k(f);h=_(y,L),y.forEach($),p=A(d),d.forEach($),this.h()},h(){w(e,"scope","row")},m(t,$){m(t,n,$),d(n,e),d(e,r),d(n,o),d(n,a),d(a,c),d(n,s),d(n,l),d(l,i),d(n,u),d(n,f),d(f,h),d(n,p)},p(t,n){1&n&&E!==(E=t[1].name+"")&&I(c,E),1&n&&x!==(x=t[1].region+"")&&I(i,x),1&n&&L!==(L=t[1].score+"")&&I(h,L)},d(t){t&&$(n)}}}function Vt(n){let e,r,o,a,c,s,l,i,u,f,h,p,E,x,I,L,S,N=n[0],P=[];for(let t=0;t<N.length;t+=1)P[t]=jt(Rt(n,N,t));return{c(){e=v("div"),r=v("table"),o=v("thead"),a=v("tr"),c=v("th"),s=b("#"),l=y(),i=v("th"),u=b("Name"),f=y(),h=v("th"),p=b("Region"),E=y(),x=v("th"),I=b("Score (max 5)"),L=y(),S=v("tbody");for(let t=0;t<P.length;t+=1)P[t].c();this.h()},l(t){e=T(t,"DIV",{});var n=k(e);r=T(n,"TABLE",{class:!0});var d=k(r);o=T(d,"THEAD",{});var m=k(o);a=T(m,"TR",{});var g=k(a);c=T(g,"TH",{scope:!0});var v=k(c);s=_(v,"#"),v.forEach($),l=A(g),i=T(g,"TH",{scope:!0});var b=k(i);u=_(b,"Name"),b.forEach($),f=A(g),h=T(g,"TH",{scope:!0});var y=k(h);p=_(y,"Region"),y.forEach($),E=A(g),x=T(g,"TH",{scope:!0});var w=k(x);I=_(w,"Score (max 5)"),w.forEach($),g.forEach($),m.forEach($),L=A(d),S=T(d,"TBODY",{});var N=k(S);for(let t=0;t<P.length;t+=1)P[t].l(N);N.forEach($),d.forEach($),n.forEach($),this.h()},h(){w(c,"scope","col"),w(i,"scope","col"),w(h,"scope","col"),w(x,"scope","col"),w(r,"class","table")},m(t,n){m(t,e,n),d(e,r),d(r,o),d(o,a),d(a,c),d(c,s),d(a,l),d(a,i),d(i,u),d(a,f),d(a,h),d(h,p),d(a,E),d(a,x),d(x,I),d(r,L),d(r,S);for(let t=0;t<P.length;t+=1)P[t].m(S,null)},p(t,[n]){if(1&n){let e;for(N=t[0],e=0;e<N.length;e+=1){const r=Rt(t,N,e);P[e]?P[e].p(r,n):(P[e]=jt(r),P[e].c(),P[e].m(S,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=N.length}},i:t,o:t,d(t){t&&$(e),g(P,t)}}}function Bt(t,n,e){let{organs:r}=n;return t.$$set=t=>{"organs"in t&&e(0,r=t.organs)},[r]}class Ct extends ct{constructor(t){super(),at(this,t,Bt,Vt,c,{organs:0})}}const Ut=lt(0);function Mt(n){let e,r,a,c,s,l,i,u,f,h,p,g,E,I,S,N,P,D,H,O,R;return{c(){e=v("div"),r=v("form"),a=v("div"),c=v("label"),s=b("Phone number"),l=y(),i=v("input"),u=y(),f=v("small"),h=b("We'll never share your\r\n        Phone number with anyone else."),p=y(),g=v("div"),E=v("label"),I=b("Password"),S=y(),N=v("input"),P=y(),D=v("div"),H=b("Submit"),this.h()},l(t){e=T(t,"DIV",{class:!0});var n=k(e);r=T(n,"FORM",{class:!0,id:!0});var o=k(r);a=T(o,"DIV",{class:!0});var d=k(a);c=T(d,"LABEL",{for:!0});var m=k(c);s=_(m,"Phone number"),m.forEach($),l=A(d),i=T(d,"INPUT",{type:!0,class:!0,id:!0,"aria-describedby":!0}),u=A(d),f=T(d,"SMALL",{id:!0,class:!0});var v=k(f);h=_(v,"We'll never share your\r\n        Phone number with anyone else."),v.forEach($),d.forEach($),p=A(o),g=T(o,"DIV",{class:!0});var b=k(g);E=T(b,"LABEL",{for:!0});var y=k(E);I=_(y,"Password"),y.forEach($),S=A(b),N=T(b,"INPUT",{type:!0,class:!0,id:!0}),b.forEach($),P=A(o),D=T(o,"DIV",{class:!0});var x=k(D);H=_(x,"Submit"),x.forEach($),o.forEach($),n.forEach($),this.h()},h(){w(c,"for","exampleInput1"),w(i,"type","text"),w(i,"class","form-control"),w(i,"id","exampleInputEmail1"),w(i,"aria-describedby","emailHelp"),w(f,"id","emailHelp"),w(f,"class","form-text text-muted"),w(a,"class","form-group"),w(E,"for","exampleInputPassword1"),w(N,"type","password"),w(N,"class","form-control"),w(N,"id","exampleInputPassword1"),w(g,"class","form-group"),w(D,"class","btn btn-primary"),w(r,"class","col-6 m-auto"),w(r,"id","form"),w(e,"class","row")},m(t,o){m(t,e,o),d(e,r),d(r,a),d(a,c),d(c,s),d(a,l),d(a,i),L(i,n[0]),d(a,u),d(a,f),d(f,h),d(r,p),d(r,g),d(g,E),d(E,I),d(g,S),d(g,N),L(N,n[1]),d(r,P),d(r,D),d(D,H),O||(R=[x(i,"input",n[3]),x(N,"input",n[4]),x(D,"click",n[2])],O=!0)},p(t,[n]){1&n&&i.value!==t[0]&&L(i,t[0]),2&n&&N.value!==t[1]&&L(N,t[1])},i:t,o:t,d(t){t&&$(e),O=!1,o(R)}}}function Kt(t,n,e){let r,o,a;l(t,Ut,(t=>e(5,r=t)));return[o,a,async()=>{await fetch("https://api-data-chellenge.herokuapp.com/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:o,password:a})}).then((t=>t.json())).then((t=>{!function(t,n,e=n){t.set(e)}(Ut,r=t.token,r)}))},function(){o=this.value,e(0,o)},function(){a=this.value,e(1,a)}]}class Ft extends ct{constructor(t){super(),at(this,t,Kt,Mt,c,{})}}function Qt(t,n,e){const r=t.slice();return r[2]=n[e],r}function Wt(t){let n,e=t[0],r=[];for(let n=0;n<e.length;n+=1)r[n]=qt(Qt(t,e,n));return{c(){n=v("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){n=T(t,"DIV",{class:!0});var e=k(n);for(let t=0;t<r.length;t+=1)r[t].l(e);e.forEach($),this.h()},h(){w(n,"class","row")},m(t,e){m(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,o){if(1&o){let a;for(e=t[0],a=0;a<e.length;a+=1){const c=Qt(t,e,a);r[a]?r[a].p(c,o):(r[a]=qt(c),r[a].c(),r[a].m(n,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(t){t&&$(n),g(r,t)}}}function qt(t){let n,e,r,o,a,c,s,l=t[2].title+"",i=t[2].details+"";return{c(){n=v("div"),e=v("h2"),r=b(l),o=y(),a=v("h3"),c=b(i),s=y(),this.h()},l(t){n=T(t,"DIV",{class:!0});var u=k(n);e=T(u,"H2",{});var f=k(e);r=_(f,l),f.forEach($),o=A(u),a=T(u,"H3",{});var h=k(a);c=_(h,i),h.forEach($),s=A(u),u.forEach($),this.h()},h(){w(n,"class","col-6 m-auto")},m(t,l){m(t,n,l),d(n,e),d(e,r),d(n,o),d(n,a),d(a,c),d(n,s)},p(t,n){1&n&&l!==(l=t[2].title+"")&&I(r,l),1&n&&i!==(i=t[2].details+"")&&I(c,i)},d(t){t&&$(n)}}}function zt(n){let e,r=n[0]&&Wt(n);return{c(){r&&r.c(),e=E()},l(t){r&&r.l(t),e=E()},m(t,n){r&&r.m(t,n),m(t,e,n)},p(t,[n]){t[0]?r?r.p(t,n):(r=Wt(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&$(e)}}}function Gt(t,n,e){let r,o;return l(t,Ut,(t=>e(1,r=t))),D((async()=>{await fetch("https://api-data-chellenge.herokuapp.com/app/all",{method:"GET",headers:{"auth-token":r}}).then((t=>t.json())).then((t=>{e(0,o=t)}))})),[o]}class Jt extends ct{constructor(t){super(),at(this,t,Gt,zt,c,{})}}function Yt(t){let n,e;return n=new kt({props:{url:t[1],$$slots:{default:[tn]},$$scope:{ctx:t}}}),{c(){tt(n.$$.fragment)},l(t){nt(n.$$.fragment,t)},m(t,r){et(n,t,r),e=!0},p(t,e){const r={};2&e&&(r.url=t[1]),21&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function Xt(t){let n,e;return n=new Ct({props:{name:t[0],organs:t[2]}}),{c(){tt(n.$$.fragment)},l(t){nt(n.$$.fragment,t)},m(t,r){et(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.name=t[0]),4&e&&(r.organs=t[2]),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function Zt(t){let n,e;return n=new Jt({}),{c(){tt(n.$$.fragment)},l(t){nt(n.$$.fragment,t)},m(t,r){et(n,t,r),e=!0},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function tn(t){let n,e,r,o,a,c,s;return n=new Ot({}),o=new Pt({props:{path:"/",$$slots:{default:[Xt]},$$scope:{ctx:t}}}),c=new Pt({props:{path:"/apps",$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){tt(n.$$.fragment),e=y(),r=v("div"),tt(o.$$.fragment),a=y(),tt(c.$$.fragment)},l(t){nt(n.$$.fragment,t),e=A(t),r=T(t,"DIV",{});var s=k(r);nt(o.$$.fragment,s),a=A(s),nt(c.$$.fragment,s),s.forEach($)},m(t,l){et(n,t,l),m(t,e,l),m(t,r,l),et(o,r,null),d(r,a),et(c,r,null),s=!0},p(t,n){const e={};21&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){s||(Y(n.$$.fragment,t),Y(o.$$.fragment,t),Y(c.$$.fragment,t),s=!0)},o(t){X(n.$$.fragment,t),X(o.$$.fragment,t),X(c.$$.fragment,t),s=!1},d(t){rt(n,t),t&&$(e),t&&$(r),rt(o),rt(c)}}}function nn(t){let n,e,r,o,a;return o=new Ft({}),{c(){n=v("h1"),e=b("Log in to continue"),r=y(),tt(o.$$.fragment),this.h()},l(t){n=T(t,"H1",{class:!0});var a=k(n);e=_(a,"Log in to continue"),a.forEach($),r=A(t),nt(o.$$.fragment,t),this.h()},h(){w(n,"class","svelte-4vhev")},m(t,c){m(t,n,c),d(n,e),m(t,r,c),et(o,t,c),a=!0},i(t){a||(Y(o.$$.fragment,t),a=!0)},o(t){X(o.$$.fragment,t),a=!1},d(t){t&&$(n),t&&$(r),rt(o,t)}}}function en(t){let n,e,r,o=t[3]&&Yt(t),a=!t[3]&&nn();return{c(){n=v("main"),o&&o.c(),e=y(),a&&a.c(),this.h()},l(t){n=T(t,"MAIN",{class:!0});var r=k(n);o&&o.l(r),e=A(r),a&&a.l(r),r.forEach($),this.h()},h(){w(n,"class","svelte-4vhev")},m(t,c){m(t,n,c),o&&o.m(n,null),d(n,e),a&&a.m(n,null),r=!0},p(t,[r]){t[3]?o?(o.p(t,r),8&r&&Y(o,1)):(o=Yt(t),o.c(),Y(o,1),o.m(n,e)):o&&(G(),X(o,1,1,(()=>{o=null})),J()),t[3]?a&&(G(),X(a,1,1,(()=>{a=null})),J()):a?8&r&&Y(a,1):(a=nn(),a.c(),Y(a,1),a.m(n,null))},i(t){r||(Y(o),Y(a),r=!0)},o(t){X(o),X(a),r=!1},d(t){t&&$(n),o&&o.d(),a&&a.d()}}}function rn(t,n,e){let r;l(t,Ut,(t=>e(3,r=t)));let{name:o}=n,{url:a=""}=n,c=[];return D((async()=>{fetch("https://api-data-chellenge.herokuapp.com/organ").then((t=>t.json())).then((t=>{e(2,c=t)}))})),t.$$set=t=>{"name"in t&&e(0,o=t.name),"url"in t&&e(1,a=t.url)},[o,a,c,r]}return new class extends ct{constructor(t){super(),at(this,t,rn,en,c,{name:0,url:1})}}({target:document.body,hydrate:!0})}();
//# sourceMappingURL=bundle.js.map
