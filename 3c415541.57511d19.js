(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(157)),o={title:"Detector Guide"},c={unversionedId:"guides/framework/detector-guide",id:"guides/framework/detector-guide",isDocsHomePage:!1,title:"Detector Guide",description:"The Detector object can be used in various places within the Framework. The main purpose of this class is to tweak how different aspects of metadata are detected.",source:"@site/../docs/guides/framework/detector-guide.md",slug:"/guides/framework/detector-guide",permalink:"/docs/guides/framework/detector-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/framework/detector-guide.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1614619145,sidebar:"guides",previous:{title:"Layout Guide",permalink:"/docs/guides/framework/layout-guide"},next:{title:"Inquiry Guide",permalink:"/docs/guides/framework/inquiry-guide"}},s=[{value:"Detector Usage",id:"detector-usage",children:[]},{value:"Detector Options",id:"detector-options",children:[{value:"Buffer Size",id:"buffer-size",children:[]},{value:"Sample Size",id:"sample-size",children:[]},{value:"Field Type",id:"field-type",children:[]},{value:"Field Names",id:"field-names",children:[]},{value:"Field Confidence",id:"field-confidence",children:[]},{value:"Field Float Numbers",id:"field-float-numbers",children:[]},{value:"Field Missing Values",id:"field-missing-values",children:[]},{value:"Schema Sync",id:"schema-sync",children:[]},{value:"Schema Patch",id:"schema-patch",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Detector object can be used in various places within the Framework. The main purpose of this class is to tweak how different aspects of metadata are detected."),Object(i.b)("p",null,"Here is a quick example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Detector, Resource\n\ndetector = Detector(field_missing_values=['na'])\nresource = Resource('data/resource.csv', detector=detector)\n")),Object(i.b)("p",null,"It's also possible to pass it to the CLI, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate data/resource.csv --field-missing-values na1,na2\n")),Object(i.b)("p",null,"All the options below have their CLI equivalent. Please consult with the CLI help."),Object(i.b)("h2",{id:"detector-usage"},"Detector Usage"),Object(i.b)("p",null,"The detector class instance are accepted by many classes and functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Package"),Object(i.b)("li",{parentName:"ul"},"Resource"),Object(i.b)("li",{parentName:"ul"},"describe"),Object(i.b)("li",{parentName:"ul"},"extract"),Object(i.b)("li",{parentName:"ul"},"validate"),Object(i.b)("li",{parentName:"ul"},"and more")),Object(i.b)("p",null,"You just need to create a Detector instance using desired options and pass to the classed and function from above."),Object(i.b)("h2",{id:"detector-options"},"Detector Options"),Object(i.b)("p",null,"Let's list all the available Detector options with simple usage examples:"),Object(i.b)("h3",{id:"buffer-size"},"Buffer Size"),Object(i.b)("p",null,"By default, Frictionless will use the first 10000 bytes to detect encoding. The following code will be slower but the encoding detection will be mroe accurate:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Detector, describe\n\ndetector = Detector(buffer_size=100000)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(i.b)("h3",{id:"sample-size"},"Sample Size"),Object(i.b)("p",null,"By default, Frictionless will use the first 100 rows to detect field types. This can be customized. The following code will be slower but the result can be more accurate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Detector, describe\n\ndetector = Detector(sample_size=1000)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(i.b)("h3",{id:"field-type"},"Field Type"),Object(i.b)("p",null,"This option allows manually setting all the field types to a given type. It's useful when you need to skip data casting (setting ",Object(i.b)("inlineCode",{parentName:"p"},"any")," type) or have everything as a string (setting ",Object(i.b)("inlineCode",{parentName:"p"},"string")," type):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Detector, describe\n\ndetector = Detector(field_type='string')\nresource = describe(\"data/country-1.csv\", detector=detector)\nprint(resource.schema.fields)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[\n    {'name': 'id', 'type': 'string'},\n    {'name': 'neighbor_id', 'type': 'string'},\n    {'name': 'name', 'type': 'string'},\n    {'name': 'population', 'type': 'string'}\n]\n")),Object(i.b)("h3",{id:"field-names"},"Field Names"),Object(i.b)("p",null,"Sometimes you don't want to use existent header row to compose field names. It's possible to provide custom names:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_names=["f1", "f2", "f3", "f4"])\nresource = describe("data/country-1.csv", detector=detector)\nprint(resource.schema.field_names)\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['f1', 'f2', 'f3', 'f4']\n")),Object(i.b)("h3",{id:"field-confidence"},"Field Confidence"),Object(i.b)("p",null,"By default, Frictionless uses 0.9 (90%) confidence level for data types detection. It means that it there are 9 integers in a field and one string it will be inferred as an integer. If you want a guarantee that an inferred schema will conform to the data you can set it to 1 (100%):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_confidence=1)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(i.b)("h3",{id:"field-float-numbers"},"Field Float Numbers"),Object(i.b)("p",null,"By default, Frictionless will consider that all non integer numbers are decimals. It's possible to make them float which is a faster data type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_float_numbers=True)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(i.b)("h3",{id:"field-missing-values"},"Field Missing Values"),Object(i.b)("p",null,"Missing Values is an important concept in data description. It provides information about what cell values should be considered as nulls. We can customize the defaults:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import Detector, describe\n\ndetector = Detector(field_missing_values=["", "67"])\nresource = describe("data/country-1.csv", detector=detector)\npprint(resource.schema.missing_values)\npprint(resource.read_rows())\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['', '67']\n[Row([('id', 1),\n      ('neighbor_id', None),\n      ('name', 'Britain'),\n      ('population', None)]),\n Row([('id', 2), ('neighbor_id', 3), ('name', 'France'), ('population', None)]),\n Row([('id', 3), ('neighbor_id', 2), ('name', 'Germany'), ('population', 83)]),\n Row([('id', 4), ('neighbor_id', 5), ('name', 'Italy'), ('population', 60)]),\n Row([('id', 5), ('neighbor_id', 4), ('name', 'Spain'), ('population', 47)])]\n")),Object(i.b)("p",null,"As we can see, the textual values equal to \"67\" are now considered nulls. Usually, it's handy when you have data with values like: '-', 'n/a', and similar."),Object(i.b)("h3",{id:"schema-sync"},"Schema Sync"),Object(i.b)("p",null,"There is a way to sync provided schema based on a header row's field order. It's very useful when you have a schema that describes a subset or a superset of the resource's fields:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Detector, Resource, Schema, Field\n\n# Note the order of the fields\ndetector = Detector(schema_sync=True)\nschema = Schema(fields=[Field(name='name', type='string'), Field(name='id', type='string')])\nwith Resource('data/capital-3.csv', schema=schema, detector=detector) as resource:\n  pprint(resource.schema)\n  pprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{'fields': [{'name': 'id', 'type': 'string'},\n            {'name': 'name', 'type': 'string'}]}\n[Row([('id', '1'), ('name', 'London')]),\n Row([('id', '2'), ('name', 'Berlin')]),\n Row([('id', '3'), ('name', 'Paris')]),\n Row([('id', '4'), ('name', 'Madrid')]),\n Row([('id', '5'), ('name', 'Rome')])]\n")),Object(i.b)("h3",{id:"schema-patch"},"Schema Patch"),Object(i.b)("p",null,"Sometimes we just want to update only a few fields or some schema's properties without providing a brand new schema. For example, the two examples above can be simplified as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Detector, Resource\n\ndetector = Detector(schema_patch={'fields': {'id': {'type': 'string'}}})\nwith Resource('data/capital-3.csv', detector=detector) as resource:\n  pprint(resource.schema)\n  pprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{'fields': [{'name': 'id', 'type': 'string'},\n            {'name': 'name', 'type': 'string'}]}\n[Row([('id', '1'), ('name', 'London')]),\n Row([('id', '2'), ('name', 'Berlin')]),\n Row([('id', '3'), ('name', 'Paris')]),\n Row([('id', '4'), ('name', 'Madrid')]),\n Row([('id', '5'), ('name', 'Rome')])]\n")))}d.isMDXComponent=!0}}]);