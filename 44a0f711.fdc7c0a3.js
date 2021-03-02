(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(157)),i={title:"BugQuery Tutorial",sidebar_label:"BigQuery"},c={unversionedId:"tutorials/formats/bigquery-tutorial",id:"tutorials/formats/bigquery-tutorial",isDocsHomePage:!1,title:"BugQuery Tutorial",description:"This functionality requires an experimental bigquery plugin. Read More",source:"@site/../docs/tutorials/formats/bigquery-tutorial.md",slug:"/tutorials/formats/bigquery-tutorial",permalink:"/docs/tutorials/formats/bigquery-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/bigquery-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1614699863,sidebar_label:"BigQuery",sidebar:"tutorials",previous:{title:"Stream Tutorial",permalink:"/docs/tutorials/schemes/stream-tutorial"},next:{title:"CKAN Tutorial",permalink:"/docs/tutorials/formats/ckan-tutorial"}},l=[{value:"Reading from BigQuery",id:"reading-from-bigquery",children:[]},{value:"Writing to BigQuery",id:"writing-to-bigquery",children:[]},{value:"Configuring BigQuery",id:"configuring-bigquery",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"bigquery")," plugin. ",Object(o.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(o.b)("p",null,"Frictionless supports both reading tables from BigQuery source and treating a BigQuery dataset as a tabular data storage."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"! pip install frictionless[bigquery]\n")),Object(o.b)("h2",{id:"reading-from-bigquery"},"Reading from BigQuery"),Object(o.b)("p",null,"You can read from this source using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import os\nimport json\nfrom apiclient.discovery import build\nfrom oauth2client.client import GoogleCredentials\nfrom frictionless import Resource\nfrom frictionless.plugins.bigquery import BigqueryDialect\n\n# Prepare BigQuery\n# This file can be received from Google Console\nos.environ["GOOGLE_APPLICATION_CREDENTIALS"] = ".google.json"\ncredentials = GoogleCredentials.get_application_default()\nservice = build("bigquery", "v2", credentials=credentials),\nproject = json.load(open(".google.json"))["project_id"],\n\n# Read from BigQuery\ndialect = BigqueryDialect(project=project, dataset=\'<dataset>\', table=\'<table>\'\nresource = Resource(path=service, dialect=dialect)\nprint(resource.read_rows())\n')),Object(o.b)("p",null,"If you'd like to treat BigQuery dataset as a tabular storage:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"package = Package.from_bigquery(service=service, project=project, dataset='<dataset>')\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(o.b)("h2",{id:"writing-to-bigquery"},"Writing to BigQuery"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(o.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(o.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(o.b)("p",null,"We can export a package to a BigQuery dataset:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"package = Package('path/to/datapackage.json')\npackage.to_bigquery(service=service, project=project, dataset='<dataset>')\n")),Object(o.b)("h2",{id:"configuring-bigquery"},"Configuring BigQuery"),Object(o.b)("p",null,"There are two options to configure BigQuery interactions. First of all, there are different options for these functions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Resource/Package.from_bigquery\nresource/package.to_bigquery\n")),Object(o.b)("p",null,"Secondly, there a dialect:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"dialect = BigqueryDialect(project=project, dataset='<dataset>', table='<table>'\nresource = Resource(path=service, dialect=dialect)\nprint(resource.read_rows())\n")),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#bigquery"},"BigQuery Dialect"))))}s.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,d=p["".concat(i,".").concat(g)]||p[g]||b[g]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);