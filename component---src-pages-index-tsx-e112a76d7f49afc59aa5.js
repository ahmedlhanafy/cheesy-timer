(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(143),i=n(152),c=n(145),s=(n(75),n(76),n(77),n(186)),l=n.n(s);var u={os:"mac",extension:"dmg"},d={os:"win",extension:"exe"},p={os:"linux",extension:"zip"},f=function(){var e=Object(a.useState)(void 0),t=e[0],n=e[1];return Object(a.useEffect)(function(){fetch("https://api.github.com/repos/ahmedlhanafy/cheesy-timer/releases").then(function(e){return e.json()}).then(function(e){var t=l()(e,["published_at"]).reverse()[0],a=navigator.platform.indexOf("Mac")>-1?u:navigator.platform.indexOf("Win")>-1?d:p,r=t.assets.find(function(e){return e.name.includes(a.extension)}).browser_download_url;n(r||t.html_url)})},[]),t},m=n(147),h=o.d.h1.withConfig({displayName:"pages__Title",componentId:"sc-2eo2lj-0"})(["font-weight:bold;font-size:28px;align-self:center;margin:36px 0px;color:",";"],function(e){return e.theme.primaryTextColor}),g=o.d.h2.withConfig({displayName:"pages__Desc",componentId:"sc-2eo2lj-1"})(["font-weight:300;font-size:20px;align-self:center;text-align:center;margin:0px;color:",";"],function(e){return e.theme.primaryTextColor}),b=o.d.a.withConfig({displayName:"pages__Link",componentId:"sc-2eo2lj-2"})([""," margin-bottom:16px;"],c.a);t.default=function(){var e=f();return r.a.createElement(i.b,null,r.a.createElement(i.c,{title:"Home",keywords:["Track your time with ease"]}),r.a.createElement(h,null,"Cheesy Timer 🚀"),r.a.createElement(g,null,"Cheesy timer is really awesome, it lets you track your time."),r.a.createElement(i.a,null),e?r.a.createElement(b,{onClick:Object(m.a)({category:"Landing",action:"Download App"})(),href:e},"Download Now"):r.a.createElement(i.d,null))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(142),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(146),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(160);var a=n(143),r=n(161),o=n.n(r),i=Object(a.c)(["font-weight:400;font-size:24px;align-self:center;color:white;margin-top:20px;background-color:",";border-radius:36px;border:none;padding:4px 100px;text-decoration:none;box-shadow:0px 3px 45px -5px ",";transition:500ms all;cursor:pointer;&:hover{transform:scale(1.02);}"],function(e){return e.theme.buttonColor},function(e){return o()(e.theme.buttonColor).alpha(.4).rgb().toString()});a.d.button.withConfig({displayName:"FancyButton",componentId:"sc-11gwibd-0"})(["",""],i)},146:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},147:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a="function"==typeof ga?ga:function(){},r=function(e){var t=e.category,n=e.action;return function(e){return function(r){a("send","event",{eventCategory:t,eventAction:n}),e&&e(r)}}}},148:function(e,t,n){},149:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAEUklEQVRIx6VVSW8URxQ2di7ex3jsmZ7urq3X2RfvmzwmMdgmxgsGEgcCPjFXFJAC5EKUXKKIW5YTcE2UW5YJUX4YYnrmy6u2IRywTZSWPtWreu99/V69elVdXfTt5Wpd//dzXfdQWC0X47HkBx8uV7IPi7PBXTf073mud88LaMwTwiNoWa953ivcJTwkbGoO3/e7uq7ms90kd5eV+9f+QgHVNR8idOE4DhRTUEkBZUooSx7KTMJxSadUDIoMnPO/NYdpmme6kqnUGZr0Wrb9q80FmMVfCMlbfMxuyWm35X1ebfnfTsbQsl7TOi5Fi4heCCFg2/bvmiOluTKGoSPsZ7bdVEpCKDIcZx3nRr4T/jTf8e5WOmorG8P7rBKvOTcKHW0jpIiklJrwT80RExqGoSPstzWho0CGETkj/HkBqkrpJGyINAdPMYiEBVVxQKTQNtpWks/bCZnd1H/jNo+CJ3OQ530Yg2lY0kbGzIBxGiVHasiEcyFE8HQW3OKHEbK3EXLWlKaAXPIi74dp+K6P5foyarUa6jTmiiVcrk/i2uoMGBMIvp+GqvuR9iHfYwjTAs5WNlJfVVArVvHoy0d48OABnj17ip29q9iey+OX+1eQ4wrO1xNwLucimeKwBTs5wuDHGQgdRRggzIYIwxAuHSPDtJH1HTh0GvzvTovwzT2k/VGrAewRE7Zieo/ABYf0JKyzFuQHPoJnc7Ht8XtIVZavqrydjSspS85RlRm4BlVZltRhlbdPq7J9GCGdw4gM4dwsxI7enQrUehjDvVOO15xbBU2G088hKRkXEZMCghzUrAfqDgSPqeqPp+Dfr0HNeRBUCPqxbrnjCXWnCFKGikU5RWeOMVgpC+awASNpwE6TPGQgM5ah4hiaBNR2xxMKzpspw8SnuxejOwfXsFTNYnlpHlc+uoYLaxewvr6Ojc2LqK/UsbW1hcnJSViWFekL4u0RMtZkjGNicjqan1+ERynlczlMTU3FzpVKBRMTEyiXy5idnUWhUNBEJxMKaq9CbSkqzpyP2800LZAeY+PjJJuxnE6nMTY2hkwm8y4pW/ji4c3oyTd7ODeRQ31pAZ9cv46dnR1sbm7i0qVLWFlZwf7+PhYXF0+L0G5y4aCUs6KZXBK64kHgI5/Po1gsIpvNvoZOW3fPyVVm7A+9h9OVUqtWKncYp/uO8w4Zd8iwQ/oYlGo8p4J0KOXW8SkL0RxPGzjYvxI1bn2MhZKL8++v4NbBAba3t7G7u4u1tTVsbGzgOm1DtVp9s8rP3yTUN3Yfpfwbp+u8EHov84HbFoK3ybhND0+b0mvT29Gmd6ZND1Kb0o51lPLLowj1E9AXEw4PD8dvSiKRWBk9e/Z2b/9Ao3dgsDGcSDSGhoYaAwMDjf7+/sbg4ODreV9fXyyTT2NkZOQ2jec0B+kOn9Kenp739AJhiDDyH6F9eo84/v1GR0e76Xz10NiTTCbfCdr2yKf7Fc8/h8kdZ5mWb+MAAAAASUVORK5CYII=",aspectRatio:.7626582278481012,src:"/static/42c3024e9c91876aef19ca26bcbb889d/6ceba/screenshot1.png",srcSet:"/static/42c3024e9c91876aef19ca26bcbb889d/af310/screenshot1.png 200w,\n/static/42c3024e9c91876aef19ca26bcbb889d/9f336/screenshot1.png 400w,\n/static/42c3024e9c91876aef19ca26bcbb889d/6ceba/screenshot1.png 800w,\n/static/42c3024e9c91876aef19ca26bcbb889d/daefb/screenshot1.png 964w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},150:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Cheesy Timer",description:"Ready to own your time?",author:"@ahmedlhanafy"}}}}},152:function(e,t,n){"use strict";var a=n(153),r=n.n(a),o=n(0),i=n.n(o),c=n(143),s=(n(154),{backgroundColor:"#202020",buttonColor:"#2ac940",isDark:!0,primaryTextColor:"white"}),l=(n(148),n(147)),u=function(e){var t=e.url;return i.a.createElement("a",{onClick:Object(l.a)({action:"Go to github page",category:"Landing"})(),href:t,className:"github-corner","aria-label":"View source on GitHub"},i.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#fff",color:"#151513",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},i.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),i.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),i.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))};function d(){var e=r()(["\n  * {\n    font-family: 'Pacifico',\"Segoe UI\", cursive;\n    user-select: none;\n    transition: color 0.7s ease-out, background-color 0.7s ease-out;\n  }\n  body {\n    margin: 0px;\n    padding: 0px;\n  }\n"]);return d=function(){return e},e}var p=c.d.div.withConfig({displayName:"Layout__Container",componentId:"frsb3v-0"})(["height:100vh;width:100%;background-color:",";display:flex;align-items:center;flex-direction:column;padding:0px 16px;overflow-x:hidden;box-sizing:border-box;"],function(e){return e.theme.backgroundColor}),f=Object(c.b)(d()),m=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{theme:s},i.a.createElement(p,null,t,i.a.createElement(u,{url:"https://github.com/ahmedlhanafy/cheesy-timer"}))),i.a.createElement(f,null))},h=n(149),g=n(144),b=n(157),y=n.n(b),w=function(){return i.a.createElement(g.StaticQuery,{query:"4004464385",render:function(e){return i.a.createElement(y.a,{style:{width:400,marginTop:16},fluid:e.placeholderImage.childImageSharp.fluid})},data:h})},x=n(151),C=n(158),v=n.n(C),E=function(e){var t=e.description,n=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(g.StaticQuery,{query:"1841633742",render:function(e){var c=t||e.site.siteMetadata.description;return i.a.createElement(v.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Pacifico",rel:"stylesheet"}))},data:x})};E.defaultProps={lang:"en",meta:[],keywords:[]};var A=E,T=(n(145),Object(c.e)(["100%{transform:rotate(360deg);}"])),k=Object(c.e)(["0%,100%{transform:scale(0.0);}50%{transform:scale(1.0);}"]),O=Object(c.c)(["width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:#a6a6a682;border-radius:100%;animation:"," 2s infinite ease-in-out;"],k),j=c.d.div.withConfig({displayName:"Spinner__SpinnerContainer",componentId:"sc-1prfc6x-0"})(["width:40px;height:40px;position:relative;text-align:center;animation:"," 2s infinite linear;"],T),G=c.d.div.withConfig({displayName:"Spinner__Dot2",componentId:"sc-1prfc6x-1"})([""," top:auto;bottom:0;animation-delay:-1s;"],O),R=c.d.div.withConfig({displayName:"Spinner__Dot1",componentId:"sc-1prfc6x-2"})(["",""],O),S=function(){return i.a.createElement(j,null,i.a.createElement(R,null),i.a.createElement(G,null))};n.d(t,"b",function(){return m}),n.d(t,"a",function(){return w}),n.d(t,"c",function(){return A}),n.d(t,"d",function(){return S})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e112a76d7f49afc59aa5.js.map