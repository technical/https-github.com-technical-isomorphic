(window.webpackJsonp=window.webpackJsonp||[]).push([[39,126,127,128],{1028:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37);function c(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return c=function(){return e},e}var i=n(30).b.div(c());t.default=function(e){return r.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1029:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),c=n(30),i=n(7);function s(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function o(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return o=function(){return e},e}var m=c.b.h3(o(),Object(i.palette)("text",0)),u=c.b.p(s(),Object(i.palette)("text",3)),p=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(m,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(u,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function d(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return e},e}var f=c.b.div(d(),Object(i.palette)("border",0),"");t.default=function(e){return r.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(p,{title:e.title,subtitle:e.subtitle}),e.children)}},1032:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),c=n(30),i=n(7),s=n(45);function o(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return o=function(){return e},e}var m=c.b.h1(o(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(i.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),u=Object(s.a)(m);t.default=function(e){return r.a.createElement(u,{className:"isoComponentTitle"},e.children)}},1034:function(e,t,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=a},1370:function(e,t,n){"use strict";var a=n(1190),r=n(37),l=n(30);function c(){var e=Object(r.a)(["\n  &.ant-progress-line {\n    .ant-progress-outer {\n      padding-right: calc(2em + 16px);\n      margin-right: calc(-2em - 16px);\n    }\n\n    .ant-progress-text {\n      text-align: ",";\n      margin: ",";\n    }\n  }\n"]);return c=function(){return e},e}var i=function(e){return Object(l.b)(e)(c(),function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0 0.75em 0 0":"0 0 0 0.75em"})},s=n(45),o=i(a.a),m=Object(s.a)(o);t.a=m},2691:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(20),r=n(21),l=n(26),c=n(27),i=n(28),s=n(0),o=n.n(s),m=n(33),u=n(34),p=n(171),d=n(1370),f=n(1032),x=n(1028),y=n(1029),b=n(1034),E=n(29),g=n(45),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={percent:0},n.increase=function(){var e=n.state.percent+10;e>100&&(e=100),n.setState({percent:e})},n.decline=function(){var e=n.state.percent-10;e<0&&(e=0),n.setState({percent:e})},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=b.a.rowStyle,t=b.a.colStyle,n=b.a.gutter,a={margin:"rtl"===g.b?"0 0 10px 10px":"0 10px 10px 0"};return o.a.createElement(x.default,null,o.a.createElement(f.default,null,o.a.createElement(E.a,{id:"forms.progressBar.header"})),o.a.createElement(m.a,{style:e,gutter:n,justify:"start"},o.a.createElement(u.a,{md:12,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.standardTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.standardSubTitle"})},o.a.createElement(d.a,{percent:30,style:a}),o.a.createElement(d.a,{percent:50,status:"active",style:a}),o.a.createElement(d.a,{percent:70,status:"exception",style:a}),o.a.createElement(d.a,{percent:100,style:a}),o.a.createElement(d.a,{percent:50,showInfo:!1,style:a}))),o.a.createElement(u.a,{md:12,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.circularTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.circularSubTitle"})},o.a.createElement(d.a,{type:"circle",percent:75,style:a}),o.a.createElement(d.a,{type:"circle",percent:70,status:"exception",style:a}),o.a.createElement(d.a,{type:"circle",percent:100,style:a})))),o.a.createElement(m.a,{style:e,gutter:n,justify:"start"},o.a.createElement(u.a,{md:8,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.miniTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.miniSubTitle"})},o.a.createElement(d.a,{percent:30,strokeWidth:5,style:a}),o.a.createElement(d.a,{percent:50,strokeWidth:5,status:"active",style:a}),o.a.createElement(d.a,{percent:70,strokeWidth:5,status:"exception",style:a}),o.a.createElement(d.a,{percent:100,strokeWidth:5,style:a}))),o.a.createElement(u.a,{md:8,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.miniCircularTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.miniCircularTitle"})},o.a.createElement(d.a,{type:"circle",percent:30,width:80,style:a}),o.a.createElement(d.a,{type:"circle",percent:70,width:80,status:"exception",style:a}),o.a.createElement(d.a,{type:"circle",percent:100,width:80,style:a}))),o.a.createElement(u.a,{md:8,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.dynamicCircularTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.dynamicCircularSubTitle"})},o.a.createElement(d.a,{type:"circle",percent:this.state.percent,style:a}),o.a.createElement(p.a,null,o.a.createElement(p.b,{onClick:this.decline,icon:"minus"}),o.a.createElement(p.b,{onClick:this.increase,icon:"plus"}))))),o.a.createElement(m.a,{style:e,gutter:n,justify:"start"},o.a.createElement(u.a,{md:12,sm:12,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.customTextTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.customTextSubTitle"})},o.a.createElement(d.a,{type:"circle",percent:75,format:function(e){return"".concat(e," Days")},style:a}),o.a.createElement(d.a,{type:"circle",percent:100,format:function(){return"Done"},style:a}))),o.a.createElement(u.a,{md:12,sm:12,xs:24,style:t},o.a.createElement(y.default,{title:o.a.createElement(E.a,{id:"forms.progressBar.dashboardTitle"}),subtitle:o.a.createElement(E.a,{id:"forms.progressBar.dashboardSubTitle"})},o.a.createElement(d.a,{type:"dashboard",percent:75})))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=39.66e230eb.chunk.js.map