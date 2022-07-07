"use strict";(self.webpackChunkinfosum_docs=self.webpackChunkinfosum_docs||[]).push([[179],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99349:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={toc:[{value:"Authentication",id:"authentication",level:2}]};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"To use the InfoSum APIs you will need an ",(0,i.kt)("inlineCode",{parentName:"p"},"API Key"),". To generate an API for use in your application you can ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication"},"follow these instructions"),"."),(0,i.kt)("p",null,"For simplicity in the next step, we will assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"API Key")," to an ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," variable as shown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export INFOSUM_API_KEY="<your generated API key>";\n')))}s.isMDXComponent=!0},62042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(99349),l=["components"],s={},p="Transforming a file",c={unversionedId:"getting-started/transforming-a-file",id:"getting-started/transforming-a-file",title:"Transforming a file",description:"A detailed description and information on Transforms you can review the specific page here.",source:"@site/docs/getting-started/transforming-a-file.mdx",sourceDirName:"getting-started",slug:"/getting-started/transforming-a-file",permalink:"/infosum-docs/docs/getting-started/transforming-a-file",draft:!1,editUrl:"https://github.com/infosum/infosum-docs/tree/main/docs/getting-started/transforming-a-file.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uploading a file to a File Vault",permalink:"/infosum-docs/docs/getting-started/uploading-a-file-to-a-filevault"},next:{title:"Authentication",permalink:"/infosum-docs/docs/authentication"}},u={},m=[{value:"Listing files",id:"listing-files",level:2},{value:"Transformation scripts",id:"transformation-scripts",level:2},{value:"Writing a transformation script",id:"writing-a-transformation-script",level:3},{value:"Checking the script for errors",id:"checking-the-script-for-errors",level:3},{value:"Running a transformation",id:"running-a-transformation",level:3}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transforming-a-file"},"Transforming a file"),(0,i.kt)("p",null,"A detailed description and information on ",(0,i.kt)("a",{parentName:"p",href:"../transform"},"Transforms")," you can review the specific page ",(0,i.kt)("a",{parentName:"p",href:"../transform"},"here"),"."),(0,i.kt)(o.ZP,{mdxType:"Authentication"}),(0,i.kt)("h2",{id:"listing-files"},"Listing files"),(0,i.kt)("p",null,"If no files have been uploaded to the ",(0,i.kt)("a",{parentName:"p",href:"../filevaults"},"File Vault"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"./uploading-a-file-to-a-filevault"},"uploading a file getting started guide"),"."),(0,i.kt)("p",null,"If files are available to transform you will need the file IDs. To obtain the file IDs, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.infosum.com/api/v2/files/' \\\n--header 'Authorization: $INFOSUM_API_KEY'\n")),(0,i.kt)("p",null,"This will give you a list of available files within the File Vault and the associated meta data."),(0,i.kt)("h2",{id:"transformation-scripts"},"Transformation scripts"),(0,i.kt)("p",null,"To modify, otherwise known as transform, a file you will need a ",(0,i.kt)("inlineCode",{parentName:"p"},"bloblang")," script to do this."),(0,i.kt)("h3",{id:"writing-a-transformation-script"},"Writing a transformation script"),(0,i.kt)("p",null,"Let's assume that the data that needs transforming is in the form of a CSV file, as shown:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"userID"),(0,i.kt)("th",{parentName:"tr",align:null},"cat_action"),(0,i.kt)("th",{parentName:"tr",align:null},"cat_romance"),(0,i.kt)("th",{parentName:"tr",align:null},"cat_drama"),(0,i.kt)("th",{parentName:"tr",align:null},"cat_scifi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"U0001"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"U0005"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"U9999"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("p",null,"How can you transform these boolean columns into a simpler format of a ",(0,i.kt)("inlineCode",{parentName:"p"},"userID")," with just the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"cat_*"),"?\nThe following bloblang script does this. By declaring the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," file and how to read it, the ",(0,i.kt)("inlineCode",{parentName:"p"},"bloblang")," itself as a transformation pipeline, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," for the format to return to the File Vault."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'input:\n  concatenate_files:\n    sort_columns: [ "userID" ]\n    shard_total: 0\n    shard_index: 0\n    files:\n      - pattern: "*.csv"\n        format:\n        type: csv\n        csv:\n          delimiter: ","\n          headers: true\n\npipeline:\n  processors:\n    - bloblang: |\n        # Get the root (row)\n        root = this\n\n        # Set a map of key-values as sorted by the key (column name)\n        root.kvs = this.key_values().sort_by(pair -> pair.key)\n        \n        # Set the \'category\' parameter of the root to a map where:\n        # For each element in the sorted key-values:\n          # If the value is set to \\"1\\" AND the key (column header) contains \\"cat\\"\n            # Then set the value to be the key (column header)\n          # Else\n            # Throw away the element\n        root.category = root.kvs.map_each(kv -> if kv.value == "1" && kv.key.contains("cat") {kv.key} else {deleted()})\n        # Example:\n          # In:  {"kvs":{"cat_1":"1","cat_2":"0","cat_3":"1","something_else":"1"}}\n          # Out: {"category":["cat_1", "cat_3"}}\n          \noutput:\n  store_file:\n    name: reverse_encoded.sdf\n    schema:\n      - { name: userID,      type: STRING }\n      - { name: category,       type: STRING_ARRAY}\n')),(0,i.kt)("p",null,"For more details on ",(0,i.kt)("inlineCode",{parentName:"p"},"bloblang"),", please refer to our ",(0,i.kt)("a",{parentName:"p",href:"../transform#bloblang"},"bloblang documentation"),"."),(0,i.kt)("h3",{id:"checking-the-script-for-errors"},"Checking the script for errors"),(0,i.kt)("p",null,"Once you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"bloblang")," script, you can validate it before executing it on large amounts of data."),(0,i.kt)("p",null,"To do this you will need to encode your ",(0,i.kt)("inlineCode",{parentName:"p"},"bloblang")," script into the ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," element like the following API request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.infosum.com/api/v2/transform/scripts/validate\' \\\n--header \'Authorization: $INFOSUM_API_KEY\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n "script":"input:\\n  concatenate_files:\\n    sort_columns: [ \\"userID\\" ]\\n    shard_total: 0\\n    shard_index: 0\\n    files:\\n      - pattern: \\"*.csv\\"\\n        format:\\n          type: csv\\n          csv:\\n            delimiter: \\",\\"\\n            headers: true\\n\\npipeline:\\n  processors:\\n    - bloblang: |\\n        # Get the root (row)\\n        root = this\\n\\n        # Set a map of key-values as sorted by the key (column name)\\n        root.kvs = this.key_values().sort_by(pair -> pair.key)\\n\\n        # Set the \'\\\'\'category\'\\\'\' parameter of the root to a map where:\\n        # For each element in the sorted key-values:\\n          # If the value is set to \\"1\\" AND the key (column header) contains \\"cat\\"\\n            # Then set the value to be the key (column header)\\n          # Else\\n            # Throw away the element\\n        root.category = root.kvs.map_each(kv -> if kv.value == \\"1\\" && kv.key.contains(\\"cat\\") {kv.key} else {deleted()}) \\n        # Example:\\n          # In:  {\\"kvs\\":{\\"cat_1\\":\\"1\\",\\"cat_2\\":\\"0\\",\\"cat_3\\":\\"1\\",\\"something_else\\":\\"1\\"}}\\n          # Out: {\\"category\\":[\\"cat_1\\", \\"cat_3\\"}}\\n\\noutput: \\n  store_file:\\n    name: reverse_encoded.sdf\\n    schema:\\n      - { name: userID,      type: STRING }\\n      - { name: category,       type: STRING_ARRAY}\\n"\n }\'\n')),(0,i.kt)("h3",{id:"running-a-transformation"},"Running a transformation"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"bloblang")," script has passed validation you can now execute it against your files, you can run either a ",(0,i.kt)("inlineCode",{parentName:"p"},"scaled")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," transformation task."),(0,i.kt)("p",null,"The information required by ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," transformation endpoint is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," which is the encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"bloblang")," you wish to execute"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"file_vault_id")," which references where the ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," files in the ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," are housed"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"compute_instance_id")," of where the ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," will be run")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.infosum.com/api/v2/transform/static-tasks\' \\\n--header \'Authorization: $INFOSUM_API_KEY\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "script": "input:\\n  concatenate_files:\\n    sort_columns: [ \\"userID\\" ]\\n    shard_total: 0\\n    shard_index: 0\\n    files:\\n      - pattern: \\"*.csv\\"\\n        format:\\n          type: csv\\n          csv:\\n            delimiter: \\",\\"\\n            headers: true\\n\\npipeline:\\n  processors:\\n    - bloblang: |\\n        root = this\\n        root.kvs = this.key_values().sort_by(pair -> pair.key)\\n        root.category = root.kvs.map_each(kv -> if kv.value == \\"1\\" && kv.key.contains(\\"cat\\") {kv.key} else {deleted()}) \\n    \\noutput: \\n  store_file:\\n    name: demo_output.sdf\\n    schema:\\n      - { name: userID,      type: STRING }\\n      - { name: category,       type: STRING_ARRAY}\\n",\n  "file_vault_id": "",\n  "compute_instance_id": ""\n}\'\n')))}f.isMDXComponent=!0}}]);