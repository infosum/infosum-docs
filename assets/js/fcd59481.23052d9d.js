"use strict";(self.webpackChunkinfosum_docs=self.webpackChunkinfosum_docs||[]).push([[789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99349:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={toc:[{value:"Authentication",id:"authentication",level:2}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"To use the InfoSum APIs you will need an ",(0,o.kt)("inlineCode",{parentName:"p"},"API Key"),". To generate an API for use in your application you can ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication"},"follow these instructions"),"."),(0,o.kt)("p",null,"For simplicity in the next step, we will assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"API Key")," to an ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," variable as shown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export INFOSUM_API_KEY="<your generated API key>";\n')))}l.isMDXComponent=!0},80569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>b,default:()=>T,frontMatter:()=>g,metadata:()=>y,toc:()=>N});var a=n(87462),o=n(67294),r=n(3905),l=n(86010),i=n(72389),u=n(67392),s=n(7094),c=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:r,block:i,defaultValue:m,values:f,groupId:h,className:k}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,u.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,o.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=h){const e=C[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==w&&(A(t),T(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var o;const t=I.indexOf(e.currentTarget)-1;n=null!=(o=I[t])?o:I[I.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:S,onClick:S},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function k(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(h,a),hidden:n},t)}var v=n(99349);const g={sidebar_position:1},b="Uploading a file from AWS S3 to a Cloud Vault",y={unversionedId:"getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault",id:"getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault",title:"Uploading a file from AWS S3 to a Cloud Vault",description:"For specific information on Cloud Vaults we have a dedicated page here.",source:"@site/docs/getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault.mdx",sourceDirName:"getting-started",slug:"/getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault",permalink:"/infosum-docs/docs/getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault",draft:!1,editUrl:"https://github.com/infosum/infosum-docs/tree/main/docs/getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/infosum-docs/docs/getting-started/"},next:{title:"Transforming a file",permalink:"/infosum-docs/docs/getting-started/transforming-a-file"}},C={},N=[{value:"Create a Cloud Vault",id:"create-a-cloud-vault",level:2},{value:"Importing a file",id:"importing-a-file",level:2},{value:"Create an Import Connector",id:"create-an-import-connector",level:3},{value:"Create an Import task",id:"create-an-import-task",level:3}],w={toc:N};function T(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uploading-a-file-from-aws-s3-to-a-cloud-vault"},"Uploading a file from AWS S3 to a Cloud Vault"),(0,r.kt)("p",null,"For specific information on ",(0,r.kt)("a",{parentName:"p",href:"/docs/cloudvaults/"},"Cloud Vaults")," we have a dedicated page ",(0,r.kt)("a",{parentName:"p",href:"/docs/cloudvaults/"},"here"),"."),(0,r.kt)(v.ZP,{mdxType:"Authentication"}),(0,r.kt)("h2",{id:"create-a-cloud-vault"},"Create a Cloud Vault"),(0,r.kt)("p",null,"To upload a file to the InfoSum Platform, you will need a Cloud Vault to hold the file. You can create a Cloud Vault using the following command which you will need to provide;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A non-conflicting name for the Cloud Vault as ",(0,r.kt)("inlineCode",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},"A description of the Cloud Vault as ",(0,r.kt)("inlineCode",{parentName:"li"},"description")),(0,r.kt)("li",{parentName:"ul"},"The region you want the Cloud Vault to reside in as ",(0,r.kt)("inlineCode",{parentName:"li"},"region"))),(0,r.kt)(f,{mdxType:"Tabs"},(0,r.kt)(k,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.infosum.com/api/v2/filevaults\' \\\n--header "Authorization: $INFOSUM_API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "name": "a-new-cloud-vault",\n  "description": "A new cloud vault to store files",\n  "region": "AWS_EU_WEST_2"\n}\'\n')))),(0,r.kt)("h2",{id:"importing-a-file"},"Importing a file"),(0,r.kt)("p",null,"Once you have a Cloud Vault you will need to run an import process from your storage location to the Cloud Vault."),(0,r.kt)("h3",{id:"create-an-import-connector"},"Create an Import Connector"),(0,r.kt)("p",null,"The first step is to set up an ",(0,r.kt)("inlineCode",{parentName:"p"},"Import Connector Config")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"ICC")," for short), to manage the connection between your AWS S3 or Google GCS and the InfoSum Platform."),(0,r.kt)("p",null,"For example, we will move a file from AWS S3 to Cloud Vault, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," object would need;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A name for the import connector as ",(0,r.kt)("inlineCode",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},"A description of what the connector is doing as ",(0,r.kt)("inlineCode",{parentName:"li"},"description")," (this is optional)"),(0,r.kt)("li",{parentName:"ul"},"An S3 connection object in ",(0,r.kt)("inlineCode",{parentName:"li"},"s3_connector"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The name of the AWS S3 bucket is ",(0,r.kt)("inlineCode",{parentName:"li"},"bucket")),(0,r.kt)("li",{parentName:"ul"},"Any prefixes for files under ",(0,r.kt)("inlineCode",{parentName:"li"},"prefix")),(0,r.kt)("li",{parentName:"ul"},"An array of filenames or patterns that identify files under ",(0,r.kt)("inlineCode",{parentName:"li"},"filenames")),(0,r.kt)("li",{parentName:"ul"},"An authentication object under ",(0,r.kt)("inlineCode",{parentName:"li"},"cross_account")," with",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A valid AWS ARN to assume as ",(0,r.kt)("inlineCode",{parentName:"li"},"user_arn")),(0,r.kt)("li",{parentName:"ul"},"The name of the session is ",(0,r.kt)("inlineCode",{parentName:"li"},"session_name"))))))),(0,r.kt)(f,{mdxType:"Tabs"},(0,r.kt)(k,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.infosum.com/api/v2/bunker/import/import-connector-configs\' \\\n--header "Authorization: $INFOSUM_API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "config": {\n    "name": "AWS S3 migration",\n    "description": "Moving from remote to Cloud Vault",\n    "s3_connector": {\n      "bucket": "name-of-the-s3-bucket",\n      "prefix": "",\n      "cross_account": {\n        "user_arn": "arn:aws:iam::XXXXXXXXXXXX:role/RoleName",\n        "session_name": "nameofthesession"\n      },\n      "filenames": [\n        "*.csv"\n      ]\n    }\n  }\n}\'\n')))),(0,r.kt)("h3",{id:"create-an-import-task"},"Create an Import task"),(0,r.kt)("p",null,"After you have the connector, you will need an ",(0,r.kt)("inlineCode",{parentName:"p"},"Import")," task to execute the import. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," config will connect your ",(0,r.kt)("inlineCode",{parentName:"p"},"import-connector-config")," to your Cloud Vault."),(0,r.kt)("p",null,"The necessary information for the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A name for the task as ",(0,r.kt)("inlineCode",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"description")),(0,r.kt)("li",{parentName:"ul"},"The Import Connector Config ID from the previous request under ",(0,r.kt)("inlineCode",{parentName:"li"},"icc_id")),(0,r.kt)("li",{parentName:"ul"},"The Cloud Vault ID created at the beginning as the ",(0,r.kt)("inlineCode",{parentName:"li"},"destination_id")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"data_filter")," contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"filter"),", which is an array of filters from the ",(0,r.kt)("inlineCode",{parentName:"li"},"ICC"))),(0,r.kt)(f,{mdxType:"Tabs"},(0,r.kt)(k,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.infosum.com/api/v2/bunker/import/imports\' \\\n--header "Authorization: $INFOSUM_API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "import": {\n    "name": "AWS S3 to CloudVault task",\n    "description": "Moving just CSVs",\n    "icc_id": "The ICC ID from the previous request",\n    "destination_id": "The CloudVault ID from before",\n    "data_filter": {\n      "filter": [\n        "our-csv-file.csv"\n      ]\n    }\n  }\n}\'\n')))))}T.isMDXComponent=!0}}]);