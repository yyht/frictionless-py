(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(157)),i={title:"Remote Tutorial",sidebar_label:"Remote"},c={unversionedId:"tutorials/schemes/remote-tutorial",id:"tutorials/schemes/remote-tutorial",isDocsHomePage:!1,title:"Remote Tutorial",description:"You can read files remotely with Frictionless. It's basic functionality.",source:"@site/../docs/tutorials/schemes/remote-tutorial.md",slug:"/tutorials/schemes/remote-tutorial",permalink:"/docs/tutorials/schemes/remote-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/schemes/remote-tutorial.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1614619145,sidebar_label:"Remote",sidebar:"tutorials",previous:{title:"Multipart Tutorial",permalink:"/docs/tutorials/schemes/multipart-tutorial"},next:{title:"S3 Tutorial",permalink:"/docs/tutorials/schemes/s3-tutorial"}},l=[{value:"Reading Remote Data",id:"reading-remote-data",children:[]},{value:"Writing Remote Data",id:"writing-remote-data",children:[]},{value:"Configuring Remote Data",id:"configuring-remote-data",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can read files remotely with Frictionless. It's basic functionality."),Object(a.b)("h2",{id:"reading-remote-data"},"Reading Remote Data"),Object(a.b)("p",null,"You can read using ",Object(a.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/table.csv')\nprint(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(a.b)("h2",{id:"writing-remote-data"},"Writing Remote Data"),Object(a.b)("p",null,"The save is actual for writing:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-py"},"from frictionless import Resource\n\nresource = Resource(path='data/table.csv')\nresource.write('https://example.com/data/table.csv') # will POST the file to the server\n")),Object(a.b)("h2",{id:"configuring-remote-data"},"Configuring Remote Data"),Object(a.b)("p",null,"There is a control to configure remote data, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.remote import RemoteControl\n\ncontrol = RemoteControl(http_timeout=10)\nresource = Resource(path='https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/table.csv', control=control)\nprint(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/references/schemes-reference#remote"},"Remote Control"))))}u.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);