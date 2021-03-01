(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(157)),i={title:"JSON Tutorial",sidebar_label:"JSON"},c={unversionedId:"tutorials/formats/json-tutorial",id:"tutorials/formats/json-tutorial",isDocsHomePage:!1,title:"JSON Tutorial",description:"Frictionless supports parsing JSON tables (json and jsonl/ndjson).",source:"@site/../docs/tutorials/formats/json-tutorial.md",slug:"/tutorials/formats/json-tutorial",permalink:"/docs/tutorials/formats/json-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/json-tutorial.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1614619145,sidebar_label:"JSON",sidebar:"tutorials",previous:{title:"Inline Tutorial",permalink:"/docs/tutorials/formats/inline-tutorial"},next:{title:"ODS Tutorial",permalink:"/docs/tutorials/formats/ods-tutorial"}},s=[{value:"Reading JSON",id:"reading-json",children:[]},{value:"Writing JSON",id:"writing-json",children:[]},{value:"Configuring JSON",id:"configuring-json",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports parsing JSON tables (json and jsonl/ndjson)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[json]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"! cat data/table.json\n")),Object(o.b)("h2",{id:"reading-json"},"Reading JSON"),Object(o.b)("p",null,"You can read this format using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.json')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(o.b)("h2",{id:"writing-json"},"Writing JSON"),Object(o.b)("p",null,"The same is actual for writing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.json')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"'tmp/table.json'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"!cat tmp/table.json\n")),Object(o.b)("h2",{id:"configuring-json"},"Configuring JSON"),Object(o.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.json import JsonDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.json', dialect=JsonDialect(keyed=True))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"'tmp/table.json'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"!cat tmp/table.json\n")),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#json"},"JSON Dialect"))))}u.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);