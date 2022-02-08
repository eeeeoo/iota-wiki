"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44158],{98083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={keywords:["Smart Contracts","Contribute","Pull Request","Linting","Go-lang","golangci-lint"],description:"How to contribute to IOTA Smart Contracts. Creating a PR, setting up golangci-lint.",image:"/img/logo/WASP_logo_dark.png"},p="Contributing",s={unversionedId:"contribute",id:"contribute",title:"Contributing",description:"How to contribute to IOTA Smart Contracts. Creating a PR, setting up golangci-lint.",source:"@site/external/wasp/documentation/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/smart-contracts/contribute",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/contribute.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Contribute","Pull Request","Linting","Go-lang","golangci-lint"],description:"How to contribute to IOTA Smart Contracts. Creating a PR, setting up golangci-lint.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Preconfigured Development Docker setup",permalink:"/smart-contracts/guide/development_tools/docker_preconfigured"},next:{title:"Exposed Metrics",permalink:"/smart-contracts/metrics"}},c=[{value:"Creating a Pull Request",id:"creating-a-pull-request",children:[{value:"Lint Setup",id:"lint-setup",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"If you want to contribute to this repository, consider posting a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/issues/new-issue"},"bug report"),", feature request or a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/pulls/"},"pull request"),"."),(0,i.kt)("p",null,"You can also join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"Discord server")," and ping us\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"#smartcontracts-dev"),"."),(0,i.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,i.kt)("p",null,"Please base your work on the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,i.kt)("p",null,"Before creating the Pull Request ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"all the tests pass:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go test -tags rocksdb,builtin_static ./...\n")),(0,i.kt)("p",{parentName:"li"},"  or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,i.kt)("p",{parentName:"li"},"  If the changes are major, please run even the heavy tests:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make test-full\n")),(0,i.kt)("p",{parentName:"li"},"  Note, that these tests might take longer to run (they timeout after 60 minutes). Also note that ",(0,i.kt)("inlineCode",{parentName:"p"},"TestSpamOffledger")," should only be run with ",(0,i.kt)("inlineCode",{parentName:"p"},"database.inMemory")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". See ",(0,i.kt)("inlineCode",{parentName:"p"},"tools/cluster/tests/spam_test.go")," for details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"there are no linting violations (instructions on how to setup linting below):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"golangci-lint run\n")),(0,i.kt)("p",{parentName:"li"},"  or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make lint\n")),(0,i.kt)("p",{parentName:"li"},"  Note, that linter is run each time you run"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")))),(0,i.kt)("h3",{id:"lint-setup"},"Lint Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install golintci:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"https://golangci-lint.run/usage/install/#local-installation"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dev setup:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/integrations/#editor-integration"},"https://golangci-lint.run/usage/integrations/#editor-integration")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VSCode"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// required:\n"go.lintTool": "golangci-lint",\n// recommended:\n"go.lintOnSave": "package"\n"go.lintFlags": ["--fix"],\n"editor.formatOnSave": true,\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GoLand"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/12496-go-linter"},"Install golintci plugin")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Install golintci plugin",src:n(21052).Z,width:"999",height:"740"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure path for golangci"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Configure path for golangci",src:n(78551).Z,width:"991",height:"731"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a golangci file watcher with custom command (I recommend using --fix)"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Add a golangci file watcher with custom command",src:n(56829).Z,width:"699",height:"443"})))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Other editors"),": please look into the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},(0,i.kt)("inlineCode",{parentName:"a"},"golangci")," official documentation"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignoring false positives:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/false-positives/"},"https://golangci-lint.run/usage/false-positives/")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//nolint\n")),(0,i.kt)("p",{parentName:"li"},"for specific rules:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//nolint:golint,unused\n")))))}g.isMDXComponent=!0},21052:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-1-6e97b6e4c7df17ea575c301aa7c51113.png"},78551:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-2-d3eb0f9e4810e1dd3abd093a1ef4f3fc.png"},56829:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-3-743934a7d30130bd2a92f1ad024544be.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);