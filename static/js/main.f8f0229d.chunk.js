(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),u=n.n(a),l=(n(13),n(14),n(4)),b=n.n(l),h=n(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=u.a.useState(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=u.a.useState(s.NONE),a=Object(i.a)(o,2),l=a[0],j=a[1],N=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return n&&o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(d,{sortType:l,isReversed:n}),O=l!==s.NONE||n;return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:b()("button","is-info",{"is-light":l!==s.ALPHABET}),onClick:function(){j(s.ALPHABET)},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:b()("button","is-success",{"is-light":l!==s.LENGTH}),onClick:function(){j(s.LENGTH)},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:b()("button","is-warning",{"is-light":!n}),onClick:function(){c((function(t){return!t}))},children:"Reverse"}),O&&Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),j(s.NONE)},children:"Reset"})]}),Object(h.jsx)("ul",{children:Object(h.jsx)("ul",{children:N.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f8f0229d.chunk.js.map