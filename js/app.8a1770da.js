(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],m=0,p=[];m<r.length;m++)o=r[m],s[o]&&p.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"42f0":function(t,e,a){t.exports=a.p+"img/me-2.dc3bbce8.jpg"},"4ffd":function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("transition",{attrs:{name:"router-anim",mode:"out-in"}},[a("router-view")],1),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"main-nav"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"main-nav__logo"},[a("router-link",{attrs:{to:"/"}},[t._v("JB")])],1),a("ul",{staticClass:"main-nav__items"},[a("li",{staticClass:"main-nav__item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"main-nav__item"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"main-nav__item"},[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])},r=[],l={name:"navigation"},c=l,u=a("2877"),m=Object(u["a"])(c,o,r,!1,null,null,null),p=m.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"main-footer"},[a("p",[t._v("JohnBolhano.me © 2019, All Rights Reserved")])])}],v={name:"footer"},_=v,g=Object(u["a"])(_,d,f,!1,null,null,null),b=g.exports,h={name:"app",components:{Navigation:p,Footer:b}},C=h,x=Object(u["a"])(C,s,n,!1,null,null,null),y=x.exports,q=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"showcase"},[a("div",{staticClass:"backdrop"}),a("div",{staticClass:"container"},[a("div",{staticClass:"showcase__content"},[t._m(0),a("p",{staticClass:"lead"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.")]),a("router-link",{staticClass:"btn",attrs:{to:"/contact"}},[t._v("Get in Touch")])],1)])]),a("section",{staticClass:"home-info bg--dark"},[a("div",{staticClass:"home-info__img"}),a("div",{staticClass:"home-info__content"},[t._m(1),a("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ")]),a("router-link",{staticClass:"btn btn--light",attrs:{to:"/about"}},[t._v("See More")])],1)]),t._m(2),a("div",{staticClass:"clr"})])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("span",{staticClass:"text-primary"},[t._v("Web")]),t._v(" Developer")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"text-primary"},[t._v("Learn")]),t._v(" About Me")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"box"},[a("div",{staticClass:"box__item bg--light"},[a("i",{staticClass:"fas fa-pencil-ruler fa-3x"}),a("h3",[t._v("Design")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.")])]),a("div",{staticClass:"box__item bg--primary"},[a("i",{staticClass:"fas fa-code fa-3x"}),a("h3",[t._v("Development")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.")])]),a("div",{staticClass:"box__item bg--light"},[a("i",{staticClass:"fas fa-chart-line fa-3x"}),a("h3",[t._v("SEO")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.")])])])}],O={name:"home"},k=O,w=Object(u["a"])(k,j,E,!1,null,null,null),A=w.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("section",{staticClass:"about-info bg--light py-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"about-info__left"},[i("h1",{staticClass:"l-heading"},[i("span",{staticClass:"text-primary"},[t._v("About")]),t._v(" Me")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dicta tenetur? Consequatur laboriosam enim, praesentium possimus inventore pariatur, corporis quidem ut maxime corrupti maiores eligendi saepe, similique ex voluptatem voluptatum.")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores iusto unde magni sint? Facere repellat esse quidem molestias at!")])]),i("div",{staticClass:"about-info__right"},[i("img",{attrs:{src:a("42f0"),alt:"John Bolhano"}})])])]),i("div",{staticClass:"clr"}),i("section",{staticClass:"testimonials py-3"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"l-heading"},[t._v("What Do People Say")]),i("div",{staticClass:"testimonial bg--primary"},[i("img",{attrs:{src:a("4ffd"),alt:"Girl 1"}}),i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque modi ad mollitia dolorum amet quae qui placeat esse sint quos suscipit distinctio perspiciatis deserunt aperiam, atque praesentium excepturi temporibus reprehenderit omnis odio beatae? Rerum repellendus quasi minima tenetur vero?")])]),i("div",{staticClass:"testimonial bg--primary"},[i("img",{attrs:{src:a("4ffd"),alt:"Girl 2"}}),i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque modi ad mollitia dolorum amet quae qui placeat esse sint quos suscipit distinctio perspiciatis deserunt aperiam, atque praesentium excepturi temporibus reprehenderit omnis odio beatae? Rerum repellendus quasi minima tenetur vero?")])])])])])}],L={},S=Object(u["a"])(L,$,P,!1,null,null,null),M=S.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"contact-form py-3"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"l-heading"},[a("span",{staticClass:"text-primary"},[t._v("Contact")]),t._v(" Us")]),a("p",[t._v("Please fill out the form below to contact us")]),a("form",{attrs:{name:"contact",method:"POST","data-netlify":"true"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{attrs:{type:"text",name:"name",id:"name",required:""}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{attrs:{type:"email",name:"email",id:"email"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("Mesage")]),a("textarea",{attrs:{name:"message",id:"message",requried:""}})]),a("div",{staticClass:"form-group"},[a("div",{attrs:{"data-netlify-recaptcha":"true"}})]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")])])])]),a("section",{staticClass:"box contact"},[a("div",{staticClass:"box__item bg--dark"},[a("i",{staticClass:"fas fa-map-marker-alt fa-3x"}),a("h3",[t._v("Location")]),a("p",[t._v("Angeles City Pampanga Philippines")])]),a("div",{staticClass:"box__item bg--dark"},[a("i",{staticClass:"fas fa-phone fa-3x"}),a("h3",[t._v("Phone Number")]),a("p",[t._v("(+63) 942-468-3319")])]),a("div",{staticClass:"box__item bg--dark"},[a("i",{staticClass:"fas fa-envelope fa-3x"}),a("h3",[t._v("Email Address")]),a("p",[t._v("info@johnbolhano.me")])])]),a("div",{staticClass:"clr"})])}],T={},J=Object(u["a"])(T,D,N,!1,null,null,null),R=J.exports;i["a"].use(q["a"]);var B=new q["a"]({routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:M},{path:"/contact",name:"contact",component:R}],mode:"history"});a("845f");i["a"].config.productionTip=!1,new i["a"]({router:B,render:function(t){return t(y)}}).$mount("#app")},"845f":function(t,e,a){}});
//# sourceMappingURL=app.8a1770da.js.map