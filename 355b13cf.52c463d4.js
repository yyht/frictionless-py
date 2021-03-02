(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(157)),o={title:"Contributing"},l={unversionedId:"development/contributing",id:"development/contributing",isDocsHomePage:!1,title:"Contributing",description:"General Guideline",source:"@site/../docs/development/contributing.md",slug:"/development/contributing",permalink:"/docs/development/contributing",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/development/contributing.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1614699863,sidebar:"development",previous:{title:"Authors",permalink:"/docs/development/authors"},next:{title:"What's next?",permalink:"/docs/development/whats-next"}},c=[{value:"General Guideline",id:"general-guideline",children:[]},{value:"Docs Contribution",id:"docs-contribution",children:[]},{value:"Code Contribution",id:"code-contribution",children:[]},{value:"Release Process",id:"release-process",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general-guideline"},"General Guideline"),Object(i.b)("p",null,"We use Github as a code and issues hosting platform. To report a bug or propose a new feature, please open an issue. For pull requests, we would ask you initially create an issue and then create a pull requests linked to this issue."),Object(i.b)("h2",{id:"docs-contribution"},"Docs Contribution"),Object(i.b)("p",null,"To contribute to the documentation, please find an article in the ",Object(i.b)("inlineCode",{parentName:"p"},"docs")," folder and update its contents. Here is a list of hand-written sections:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docs/guides")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docs/tutorials"))),Object(i.b)("p",null,"Some documentation is generated (for more information see ",Object(i.b)("inlineCode",{parentName:"p"},"docs/build.py"),"). Here is a list of generated sections (excluding ",Object(i.b)("inlineCode",{parentName:"p"},"overview/whats-next")," docs):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docs/references")," (from the codebase's docstrings)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docs/development")," (from the repository root's docs)")),Object(i.b)("p",null,"It's possible to run this documentation portal locally but it requires Node.js 12+ installed on your comupter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cd portal\n$ npm install\n$ npm start\n")),Object(i.b)("p",null,"To update a reference in ",Object(i.b)("inlineCode",{parentName:"p"},"docs/references")," and some other generated documents please update codebaes docstrings or root documents. For more information about generated documentation see ",Object(i.b)("inlineCode",{parentName:"p"},"docs/build.py"),"."),Object(i.b)("h2",{id:"code-contribution"},"Code Contribution"),Object(i.b)("p",null,"Frictionless is a Python3.6+ framework, and it uses some basically standard Python tools for the development process:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"testing: ",Object(i.b)("inlineCode",{parentName:"li"},"pytest")),Object(i.b)("li",{parentName:"ul"},"linting: ",Object(i.b)("inlineCode",{parentName:"li"},"pylama")),Object(i.b)("li",{parentName:"ul"},"formatting: ",Object(i.b)("inlineCode",{parentName:"li"},"black")),Object(i.b)("li",{parentName:"ul"},"type checking: ",Object(i.b)("inlineCode",{parentName:"li"},"mypy")," (under construction)")),Object(i.b)("p",null,"It's a commonplace but, of course, you need ",Object(i.b)("inlineCode",{parentName:"p"},"git")," to work on the project, also ",Object(i.b)("inlineCode",{parentName:"p"},"make")," is recommended. After cloning the repository, it's recommended to create a virtual environment and install the dependencies:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"it will install a ",Object(i.b)("inlineCode",{parentName:"p"},"git commit")," hook running the tests")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'python3.8 -m venv .python\nsource .python/bin/activate\npip install wheel\nmake install\nalias "frictionless=python -m frictionless"\n')),Object(i.b)("p",null,"Then you can run various make commands:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make docs")," - build the docs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make format")," - format source code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make install")," - install the dependencies (we did before)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make lint")," - lint the project"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make release")," - release a new version"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make test")," - run the tests"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make test-ci")," - run the tests (including integration)")),Object(i.b)("p",null,"Of course, it's possible and recommended to run underlying commands like ",Object(i.b)("inlineCode",{parentName:"p"},"pytest")," or ",Object(i.b)("inlineCode",{parentName:"p"},"pylama")," to speed up the development process."),Object(i.b)("h2",{id:"release-process"},"Release Process"),Object(i.b)("p",null,"To release a new version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"check that you have push access to the ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch"),Object(i.b)("li",{parentName:"ul"},"update ",Object(i.b)("inlineCode",{parentName:"li"},"frictionless/assets/VERSION")," following the SemVer standard"),Object(i.b)("li",{parentName:"ul"},"add changes to ",Object(i.b)("inlineCode",{parentName:"li"},"CHANGELOG.md")," if it's not a patch release (major or micro)"),Object(i.b)("li",{parentName:"ul"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"make release")," which create a release commit and tag and push it to Github"),Object(i.b)("li",{parentName:"ul"},"an actual release will happen on the Travis CI platform after running the tests")))}b.isMDXComponent=!0}}]);