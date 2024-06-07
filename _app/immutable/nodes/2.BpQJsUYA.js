import{s as ae,e as g,t as W,c as v,b as w,d as N,f as p,q as m,i as P,h as c,j as q,n as K,k as _e,a as I,g as M,U as fe,u as te,v as ye,V as xe,o as j,A as me,W as Ce,p as Se,w as pe,x as ge,X as Pe,z as Be}from"../chunks/scheduler.DEuJf6Cr.js";import{S as ne,i as le,b as Z,d as J,m as Q,a as G,g as ke,c as we,t as R,e as ee}from"../chunks/index.BVCW9bT3.js";import{e as F,f as he}from"../chunks/stores.D-QSYZUm.js";function ve(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ue(n){let e,t,l=n[0].user.name+"",a,o;return{c(){e=g("div"),t=W("Hallo "),a=W(l),o=W(" 🫶"),this.h()},l(i){e=v(i,"DIV",{class:!0});var r=w(e);t=N(r,"Hallo "),a=N(r,l),o=N(r," 🫶"),r.forEach(p),this.h()},h(){m(e,"class","w-full rounded-full align-middle text-center p-1 bg-gradient-to-r from-primary to-[#CBDDD9]")},m(i,r){P(i,e,r),c(e,t),c(e,a),c(e,o)},p(i,[r]){r&1&&l!==(l=i[0].user.name+"")&&q(a,l)},i:K,o:K,d(i){i&&p(e)}}}function Ae(n,e,t){let l;return _e(n,F,a=>t(0,l=a)),[l]}class Oe extends ne{constructor(e){super(),le(this,e,Ae,Ue,ae,{})}}function Ge(n){let e,t=n[0].title+"",l,a,o,i,r=n[0].author+"",h,u,s,d,f,b,L;return{c(){e=g("div"),l=W(t),a=I(),o=g("div"),i=g("div"),h=W(r),u=I(),s=g("i"),d=I(),f=g("input"),this.h()},l($){e=v($,"DIV",{class:!0});var D=w(e);l=N(D,t),a=M(D),o=v(D,"DIV",{class:!0});var Y=w(o);i=v(Y,"DIV",{class:!0});var x=w(i);h=N(x,r),u=M(x),s=v(x,"I",{class:!0}),w(s).forEach(p),x.forEach(p),d=M(Y),f=v(Y,"INPUT",{type:!0,class:!0}),Y.forEach(p),D.forEach(p),this.h()},h(){m(s,"class","fa-solid fa-user"),fe(s,"text-gray-400",n[0].done),m(i,"class","badge badge-primary flex items-center gap-2"),m(f,"type","checkbox"),m(f,"class","checkbox checkbox-xs checkbox-primary"),m(o,"class","flex items-center gap-2"),m(e,"class","flex justify-between items-center"),fe(e,"font-thin",n[0].done)},m($,D){P($,e,D),c(e,l),c(e,a),c(e,o),c(o,i),c(i,h),c(i,u),c(i,s),c(o,d),c(o,f),f.checked=n[0].done,b||(L=[te(f,"change",n[2]),te(f,"change",n[3])],b=!0)},p($,[D]){D&1&&t!==(t=$[0].title+"")&&q(l,t),D&1&&r!==(r=$[0].author+"")&&q(h,r),D&1&&fe(s,"text-gray-400",$[0].done),D&1&&(f.checked=$[0].done),D&1&&fe(e,"font-thin",$[0].done)},i:K,o:K,d($){$&&p(e),b=!1,ye(L)}}}function We(n,e,t){let{task:l}=e;const a=xe();function o(){l.done=this.checked,t(0,l)}const i=()=>a("statusChange");return n.$$set=r=>{"task"in r&&t(0,l=r.task)},[l,a,o,i]}class Ne extends ne{constructor(e){super(),le(this,e,We,Ge,ae,{task:0})}}function Re(n){let e,t='<i class="fa-solid fa-plus"></i>',l,a,o,i,r='<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>',h,u,s,d=n[0].colored+"",f,b,L,$=n[0].plain+"",D,Y,x,C,_,B,H,k="<button></button>",E,V;return{c(){e=g("button"),e.innerHTML=t,l=I(),a=g("dialog"),o=g("div"),i=g("form"),i.innerHTML=r,h=I(),u=g("div"),s=g("h3"),f=W(d),b=I(),L=g("h3"),D=W($),Y=I(),x=g("form"),C=g("input"),B=I(),H=g("form"),H.innerHTML=k,this.h()},l(y){e=v(y,"BUTTON",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-10dftlw"&&(e.innerHTML=t),l=M(y),a=v(y,"DIALOG",{class:!0});var T=w(a);o=v(T,"DIV",{class:!0});var U=w(o);i=v(U,"FORM",{method:!0,"data-svelte-h":!0}),j(i)!=="svelte-1w3woed"&&(i.innerHTML=r),h=M(U),u=v(U,"DIV",{class:!0});var O=w(u);s=v(O,"H3",{class:!0});var se=w(s);f=N(se,d),se.forEach(p),b=M(O),L=v(O,"H3",{class:!0});var z=w(L);D=N(z,$),z.forEach(p),O.forEach(p),Y=M(U),x=v(U,"FORM",{});var oe=w(x);C=v(oe,"INPUT",{class:!0,placeholder:!0,type:!0}),oe.forEach(p),U.forEach(p),B=M(T),H=v(T,"FORM",{class:!0,method:!0,"data-svelte-h":!0}),j(H)!=="svelte-z40nya"&&(H.innerHTML=k),T.forEach(p),this.h()},h(){m(e,"class","btn btn-sm btn-circle btn-primary"),m(i,"method","dialog"),m(s,"class","font-bold text-lg bg-primary rounded-lg px-2"),m(L,"class","font-bold text-lg"),m(u,"class","flex items-center gap-2"),m(C,"class","input w-full py-4 my-3 focus:outline-none"),m(C,"placeholder",_=n[0].placeholder),m(C,"type","text"),m(o,"class","modal-box"),m(H,"class","modal-backdrop"),m(H,"method","dialog"),m(a,"class","modal")},m(y,T){P(y,e,T),P(y,l,T),P(y,a,T),c(a,o),c(o,i),c(o,h),c(o,u),c(u,s),c(s,f),c(u,b),c(u,L),c(L,D),c(o,Y),c(o,x),c(x,C),n[5](C),c(a,B),c(a,H),n[6](a),E||(V=[te(e,"click",n[4]),te(x,"submit",n[3])],E=!0)},p(y,[T]){T&1&&d!==(d=y[0].colored+"")&&q(f,d),T&1&&$!==($=y[0].plain+"")&&q(D,$),T&1&&_!==(_=y[0].placeholder)&&m(C,"placeholder",_)},i:K,o:K,d(y){y&&(p(e),p(l),p(a)),n[5](null),n[6](null),E=!1,ye(V)}}}function Ke(n,e,t){let{modal_data:l}=e,a,o,i=xe();function r(d){i("submit",a.value),o.close(),t(1,a.value="",a)}const h=()=>{a.focus(),o.showModal()};function u(d){me[d?"unshift":"push"](()=>{a=d,t(1,a)})}function s(d){me[d?"unshift":"push"](()=>{o=d,t(2,o)})}return n.$$set=d=>{"modal_data"in d&&t(0,l=d.modal_data)},[l,a,o,r,h,u,s]}class He extends ne{constructor(e){super(),le(this,e,Ke,Re,ae,{modal_data:0})}}function Ie(n,e,t){const l=n.slice();return l[7]=e[t],l}function Me(n,e,t){const l=n.slice();return l[10]=e[t],l}function Ye(n){let e,t;function l(){return n[4](n[7])}return e=new Ne({props:{task:n[10]}}),e.$on("statusChange",l),{c(){Z(e.$$.fragment)},l(a){J(e.$$.fragment,a)},m(a,o){Q(e,a,o),t=!0},p(a,o){n=a;const i={};o&1&&(i.task=n[10]),e.$set(i)},i(a){t||(G(e.$$.fragment,a),t=!0)},o(a){R(e.$$.fragment,a),t=!1},d(a){ee(e,a)}}}function Ve(n){let e,t,l,a,o=n[7].title+"",i,r,h,u,s,d,f,b,L,$,D,Y,x,C=ve(n[7].tasks),_=[];for(let k=0;k<C.length;k+=1)_[k]=Ye(Me(n,C,k));const B=k=>R(_[k],1,1,()=>{_[k]=null});function H(...k){return n[5](n[7],...k)}return Y=new He({props:{modal_data:{colored:n[7].title,plain:"...",placeholder:"Task ..."}}}),Y.$on("submit",H),{c(){e=g("div"),t=g("input"),l=I(),a=g("div"),i=W(o),r=I(),h=g("div"),u=g("progress"),d=I(),f=g("div"),b=g("div"),L=I();for(let k=0;k<_.length;k+=1)_[k].c();$=I(),D=g("div"),Z(Y.$$.fragment),this.h()},l(k){e=v(k,"DIV",{class:!0});var E=w(e);t=v(E,"INPUT",{type:!0,name:!0}),l=M(E),a=v(E,"DIV",{class:!0});var V=w(a);i=N(V,o),r=M(V),h=v(V,"DIV",{class:!0});var y=w(h);u=v(y,"PROGRESS",{class:!0,max:!0}),w(u).forEach(p),y.forEach(p),V.forEach(p),d=M(E),f=v(E,"DIV",{class:!0});var T=w(f);b=v(T,"DIV",{class:!0}),w(b).forEach(p),L=M(T);for(let O=0;O<_.length;O+=1)_[O].l(T);$=M(T),D=v(T,"DIV",{class:!0});var U=w(D);J(Y.$$.fragment,U),U.forEach(p),T.forEach(p),E.forEach(p),this.h()},h(){m(t,"type","radio"),m(t,"name","taskGroups"),m(u,"class","progress progress-accent"),u.value=s=n[7].donePercentage,m(u,"max","100"),m(h,"class","basis-1/4 flex-shrink-0"),m(a,"class","collapse-title font-light text-lg flex gap-2 justify-between items-center pr-[1rem] truncate"),m(b,"class","divider -mt-0.5"),m(D,"class","grid place-items-center pt-1"),m(f,"class","collapse-content space-y-2"),m(e,"class","collapse bg-base-100 shadow-lg tr")},m(k,E){P(k,e,E),c(e,t),c(e,l),c(e,a),c(a,i),c(a,r),c(a,h),c(h,u),c(e,d),c(e,f),c(f,b),c(f,L);for(let V=0;V<_.length;V+=1)_[V]&&_[V].m(f,null);c(f,$),c(f,D),Q(Y,D,null),x=!0},p(k,E){if(n=k,(!x||E&1)&&o!==(o=n[7].title+"")&&q(i,o),(!x||E&1&&s!==(s=n[7].donePercentage))&&(u.value=s),E&9){C=ve(n[7].tasks);let y;for(y=0;y<C.length;y+=1){const T=Me(n,C,y);_[y]?(_[y].p(T,E),G(_[y],1)):(_[y]=Ye(T),_[y].c(),G(_[y],1),_[y].m(f,$))}for(ke(),y=C.length;y<_.length;y+=1)B(y);we()}const V={};E&1&&(V.modal_data={colored:n[7].title,plain:"...",placeholder:"Task ..."}),Y.$set(V)},i(k){if(!x){for(let E=0;E<C.length;E+=1)G(_[E]);G(Y.$$.fragment,k),x=!0}},o(k){_=_.filter(Boolean);for(let E=0;E<_.length;E+=1)R(_[E]);R(Y.$$.fragment,k),x=!1},d(k){k&&p(e),Ce(_,k),ee(Y)}}}function ze(n){let e,t,l,a,o,i=ve(n[0]),r=[];for(let u=0;u<i.length;u+=1)r[u]=Ve(Ie(n,i,u));const h=u=>R(r[u],1,1,()=>{r[u]=null});return a=new He({props:{modal_data:{colored:"Add new group",plain:"...",placeholder:"Group name"}}}),a.$on("submit",n[6]),{c(){e=g("div");for(let u=0;u<r.length;u+=1)r[u].c();t=I(),l=g("div"),Z(a.$$.fragment),this.h()},l(u){e=v(u,"DIV",{class:!0});var s=w(e);for(let f=0;f<r.length;f+=1)r[f].l(s);t=M(s),l=v(s,"DIV",{class:!0});var d=w(l);J(a.$$.fragment,d),d.forEach(p),s.forEach(p),this.h()},h(){m(l,"class","mt-3 mb-10 grid place-items-center z-50"),m(e,"class","flex flex-col gap-1.5")},m(u,s){P(u,e,s);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(e,null);c(e,t),c(e,l),Q(a,l,null),o=!0},p(u,[s]){if(s&11){i=ve(u[0]);let d;for(d=0;d<i.length;d+=1){const f=Ie(u,i,d);r[d]?(r[d].p(f,s),G(r[d],1)):(r[d]=Ve(f),r[d].c(),G(r[d],1),r[d].m(e,t))}for(ke(),d=i.length;d<r.length;d+=1)h(d);we()}},i(u){if(!o){for(let s=0;s<i.length;s+=1)G(r[s]);G(a.$$.fragment,u),o=!0}},o(u){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)R(r[s]);R(a.$$.fragment,u),o=!1},d(u){u&&p(e),Ce(r,u),ee(a)}}}function Fe(n,e,t){let l=[];F.subscribe(s=>{t(0,l=s.data.taskGroups)});async function a(s,d){await F.update(f=>(s.tasks.unshift({title:d,author:f.user.name,done:!1}),s.taskHasBeenAdded=!0,f))}async function o(s){await F.update(d=>(d.data.taskGroups.push({title:s,donePercentage:0,tasks:[]}),d))}async function i(s){s.donePercentage=Math.round(s.tasks.filter(f=>f.done).length/s.tasks.length*100);const[d]=s.tasks.splice(s.tasks.findIndex(f=>f.done),1);s.tasks.push(d),await F.update(f=>(s.donePercentage===100&&f.data.taskGroups.splice(f.data.taskGroups.findIndex(b=>b===s),1),t(0,l=f.data.taskGroups),f))}return[l,a,o,i,s=>i(s),(s,d)=>a(s,d.detail),s=>o(s.detail)]}class je extends ne{constructor(e){super(),le(this,e,Fe,ze,ae,{})}}const qe=""+new URL("../assets/penguins.Dc0iZ6Tb.png",import.meta.url).href;function Xe(n){let e,t,l,a,o,i;return{c(){e=g("div"),t=g("img"),a=I(),o=g("div"),i=W(n[0]),this.h()},l(r){e=v(r,"DIV",{class:!0,style:!0});var h=w(e);t=v(h,"IMG",{src:!0,alt:!0}),a=M(h),o=v(h,"DIV",{class:!0,style:!0});var u=w(o);i=N(u,n[0]),u.forEach(p),h.forEach(p),this.h()},h(){Se(t.src,l=qe)||m(t,"src",l),m(t,"alt",""),m(o,"class","absolute top-[5%] left-[5%] w-[58%] h-[21%] grid place-items-center text-center"),pe(o,"font-size","2vmin"),m(e,"class","fixed bottom-2 right-2"),pe(e,"width","50vmin")},m(r,h){P(r,e,h),c(e,t),c(e,a),c(e,o),c(o,i)},p:K,i:K,o:K,d(r){r&&p(e)}}}function Ze(n){const e=["You are stronger than you think 💪","Believe in yourself, always 🌟","Your smile lights up my world 😊","Keep pushing, you got this 🚀","Dream big and never give up 🌈","You are capable of amazing things ✨","Stay positive, work hard, make it happen 💼","Your determination inspires me 🔥","You are beautiful inside and out 🌸","Keep shining bright, my love 🌞","You are a warrior, never forget that 🛡️","Stay focused and never lose sight 🎯","You make the impossible, possible 🌠","I believe in you more than anything 🥇","Keep going, even when it gets tough 🌄","You are my sunshine on a cloudy day ☀️","Every challenge you face makes you stronger 🏋️","You are a true inspiration 💖","Stay brave and take that leap 🌌","You are the author of your own story 📖","Never stop chasing your dreams 🏃‍♀️","You have the power to create change ⚡","You are unstoppable, my love 🚀","Keep your head up, gorgeous 🌹","You make a difference every day 🌏","Your courage is admirable 🦁","Stay true to yourself, always 🌷","You are loved beyond measure ❤️","Believe in your journey 🌍","You are destined for greatness 🌟","Keep your spirit high and your heart strong 💪","You light up every room you enter 💡","Stay motivated and keep moving forward ⏩","You have a heart of gold 💛","Keep striving for excellence 🏆","You are my everything 🌎","Your hard work pays off 🏅","You are a gem, never forget that 💎","Stay fearless and follow your dreams 🦅","You are more powerful than you realize 🌋","Keep believing in yourself, beautiful 🌸","You make the world a better place 🌟","Stay strong and stay true 💪","You are my inspiration every day 🌞","Keep your dreams alive 💤","You are a miracle in my life 🌈","Stay focused and achieve greatness 🏆","You are my guiding star 🌟","Keep pushing forward, no matter what 🚀","You are the best thing that happened to me 💖"];let t=l();function l(){const a=Math.floor(Math.random()*e.length);return e[a]}return[t]}class Je extends ne{constructor(e){super(),le(this,e,Ze,Xe,ae,{})}}function Le(n){let e,t,l="🥛",a,o,i,r,h,u,s='<i class="fa-solid fa-plus"></i>',d,f,b=n[0].dailyWater/1e3+"",L,$,D=n[0].dailyGoal/1e3+"",Y,x,C,_,B,H,k='<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>',E,V,y='<h3 class="font-bold text-lg bg-primary rounded-lg px-2">Daily water goal in ml</h3>',T,U,O,se,z,oe="<button></button>",ue,X,$e=`.progress-bar {
            background: linear-gradient(135deg, #4B6DA6 0%, #6E93D4 50%, #4B6DA6 100%);
            background-size: 200% 100%;
            animation: fill-animation 2s ease-in-out forwards, wave-animation 2s linear infinite;
        }

        @keyframes fill-animation {
            0% {
                width: 0;
            }
            100% {
                width: var(--progress);
            }
        }

        @keyframes wave-animation {
            0% {
                background-position-x: 200%;
            }
            100% {
                background-position-x: 0;
            }
        }`,be,De;return{c(){e=g("div"),t=g("p"),t.textContent=l,a=I(),o=g("div"),i=g("div"),r=g("div"),h=I(),u=g("button"),u.innerHTML=s,d=I(),f=g("button"),L=W(b),$=W("l/"),Y=W(D),x=W("l 🚩"),C=I(),_=g("dialog"),B=g("div"),H=g("form"),H.innerHTML=k,E=I(),V=g("div"),V.innerHTML=y,T=I(),U=g("form"),O=g("input"),se=I(),z=g("form"),z.innerHTML=oe,ue=I(),X=g("style"),X.textContent=$e,this.h()},l(S){e=v(S,"DIV",{class:!0});var A=w(e);t=v(A,"P",{"data-svelte-h":!0}),j(t)!=="svelte-t3tfrl"&&(t.textContent=l),a=M(A),o=v(A,"DIV",{class:!0});var de=w(o);i=v(de,"DIV",{class:!0});var Ee=w(i);r=v(Ee,"DIV",{class:!0,style:!0}),w(r).forEach(p),Ee.forEach(p),h=M(de),u=v(de,"BUTTON",{class:!0,"data-svelte-h":!0}),j(u)!=="svelte-1yxqjra"&&(u.innerHTML=s),de.forEach(p),d=M(A),f=v(A,"BUTTON",{class:!0});var ie=w(f);L=N(ie,b),$=N(ie,"l/"),Y=N(ie,D),x=N(ie,"l 🚩"),ie.forEach(p),A.forEach(p),C=M(S),_=v(S,"DIALOG",{class:!0});var ce=w(_);B=v(ce,"DIV",{class:!0});var re=w(B);H=v(re,"FORM",{method:!0,"data-svelte-h":!0}),j(H)!=="svelte-kvjbt1"&&(H.innerHTML=k),E=M(re),V=v(re,"DIV",{class:!0,"data-svelte-h":!0}),j(V)!=="svelte-7y19wi"&&(V.innerHTML=y),T=M(re),U=v(re,"FORM",{});var Te=w(U);O=v(Te,"INPUT",{class:!0,type:!0}),Te.forEach(p),re.forEach(p),se=M(ce),z=v(ce,"FORM",{class:!0,method:!0,"data-svelte-h":!0}),j(z)!=="svelte-1obhv7m"&&(z.innerHTML=oe),ce.forEach(p),ue=M(S),X=v(S,"STYLE",{"data-svelte-h":!0}),j(X)!=="svelte-1f09xku"&&(X.textContent=$e),this.h()},h(){m(r,"class","h-full progress-bar rounded-full"),pe(r,"--progress",n[0].dailyWater/n[0].dailyGoal*100+"%"),m(i,"class","flex-grow bg-gray-400 bg-opacity-30 h-3 rounded-full overflow-hidden"),m(u,"class","btn btn-xs btn-circle bg-base-100"),m(o,"class","flex-grow flex items-center gap-1"),m(f,"class","italic font-light bg-[#6E93D4] text-base-100 rounded-full px-2"),m(e,"class","w-full rounded-full p-2 px-3 bg-gradient-to-r from-primary to-[#CBDDD9] flex justify-between items-center gap-2"),m(H,"method","dialog"),m(V,"class","flex items-center gap-2"),m(O,"class","input w-full py-4 my-3 focus:outline-none"),m(O,"type","text"),m(B,"class","modal-box"),m(z,"class","modal-backdrop"),m(z,"method","dialog"),m(_,"class","modal")},m(S,A){P(S,e,A),c(e,t),c(e,a),c(e,o),c(o,i),c(i,r),c(o,h),c(o,u),c(e,d),c(e,f),c(f,L),c(f,$),c(f,Y),c(f,x),P(S,C,A),P(S,_,A),c(_,B),c(B,H),c(B,E),c(B,V),c(B,T),c(B,U),c(U,O),n[7](O),c(_,se),c(_,z),n[9](_),P(S,ue,A),P(S,X,A),be||(De=[te(u,"click",n[5]),te(f,"click",n[6]),te(U,"submit",n[8])],be=!0)},p(S,A){A&1&&pe(r,"--progress",S[0].dailyWater/S[0].dailyGoal*100+"%"),A&1&&b!==(b=S[0].dailyWater/1e3+"")&&q(L,b),A&1&&D!==(D=S[0].dailyGoal/1e3+"")&&q(Y,D)},d(S){S&&(p(e),p(C),p(_),p(ue),p(X)),n[7](null),n[9](null),be=!1,ye(De)}}}function Qe(n){let e,t=!n[4].loading&&Le(n);return{c(){t&&t.c(),e=ge()},l(l){t&&t.l(l),e=ge()},m(l,a){t&&t.m(l,a),P(l,e,a)},p(l,[a]){l[4].loading?t&&(t.d(1),t=null):t?t.p(l,a):(t=Le(l),t.c(),t.m(e.parentNode,e))},i:K,o:K,d(l){l&&p(e),t&&t.d(l)}}}function et(n,e,t){let l;_e(n,F,b=>t(4,l=b));let a,o,i,r;F.subscribe(b=>{b.loading||(t(1,r=b.user.uid),t(0,i=b.data[r].waterTracker))});const h=()=>{F.update(b=>(b.data[r].waterTracker.dailyWater+=250,b))},u=()=>{o.focus(),a.showModal()};function s(b){me[b?"unshift":"push"](()=>{o=b,t(3,o)})}const d=()=>{console.log("im in"),/^\d+$/.test(o.value)&&o.value!=0&&F.update(b=>(b.data[r].waterTracker.dailyGoal=o.value,b)),a.close(),t(3,o.value="",o)};function f(b){me[b?"unshift":"push"](()=>{a=b,t(2,a)})}return n.$$.update=()=>{if(n.$$.dirty&3&&i){const b=new Date,L=i.lastUpdate.toDate();(L.getFullYear()!==b.getFullYear()||L.getMonth()!==b.getMonth()||L.getDate()!==b.getDate())&&F.update($=>($.data[r].waterTracker.dailyWater=0,$.data[r].waterTracker.lastUpdate=b,$))}},[i,r,a,o,l,h,u,s,d,f]}class tt extends ne{constructor(e){super(),le(this,e,et,Qe,ae,{})}}function at(n){let e,t,l,a,o,i,r,h,u;return t=new Oe({}),a=new tt({}),i=new je({}),h=new Je({}),{c(){e=g("div"),Z(t.$$.fragment),l=I(),Z(a.$$.fragment),o=I(),Z(i.$$.fragment),r=I(),Z(h.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var d=w(e);J(t.$$.fragment,d),l=M(d),J(a.$$.fragment,d),o=M(d),J(i.$$.fragment,d),d.forEach(p),r=M(s),J(h.$$.fragment,s),this.h()},h(){m(e,"class","space-y-6")},m(s,d){P(s,e,d),Q(t,e,null),c(e,l),Q(a,e,null),c(e,o),Q(i,e,null),P(s,r,d),Q(h,s,d),u=!0},i(s){u||(G(t.$$.fragment,s),G(a.$$.fragment,s),G(i.$$.fragment,s),G(h.$$.fragment,s),u=!0)},o(s){R(t.$$.fragment,s),R(a.$$.fragment,s),R(i.$$.fragment,s),R(h.$$.fragment,s),u=!1},d(s){s&&(p(e),p(r)),ee(t),ee(a),ee(i),ee(h,s)}}}function nt(n){let e,t='<span class="loading loading-spinner loading-sm ease-linear"></span>';return{c(){e=g("div"),e.innerHTML=t,this.h()},l(l){e=v(l,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-13rxzoy"&&(e.innerHTML=t),this.h()},h(){m(e,"class","grid place-items-center h-full")},m(l,a){P(l,e,a)},i:K,o:K,d(l){l&&p(e)}}}function lt(n){let e,t,l,a;const o=[nt,at],i=[];function r(h,u){return h[0].loading?0:1}return e=r(n),t=i[e]=o[e](n),{c(){t.c(),l=ge()},l(h){t.l(h),l=ge()},m(h,u){i[e].m(h,u),P(h,l,u),a=!0},p(h,[u]){let s=e;e=r(h),e!==s&&(ke(),R(i[s],1,1,()=>{i[s]=null}),we(),t=i[e],t||(t=i[e]=o[e](h),t.c()),G(t,1),t.m(l.parentNode,l))},i(h){a||(G(t),a=!0)},o(h){R(t),a=!1},d(h){h&&p(l),i[e].d(h)}}}function st(n,e,t){let l;_e(n,F,r=>t(0,l=r)),Pe(he);function a(){document.hidden?(console.log("PWA is not visible"),he()):console.log("PWA is visible")}function o(r){r.preventDefault(),r.returnValue="",console.log("User is about to leave the PWA"),he()}function i(r){console.log("Page is being hidden"),he()}return Be(()=>(document.addEventListener("visibilitychange",a),window.addEventListener("beforeunload",o),window.addEventListener("pagehide",i),()=>{document.removeEventListener("visibilitychange",a),window.removeEventListener("beforeunload",o),window.removeEventListener("pagehide",i)})),[l]}class ut extends ne{constructor(e){super(),le(this,e,st,lt,ae,{})}}export{ut as component};
