(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6841,e=>{"use strict";var t,r,s=e.i(43476),a=e.i(71645),n=e.i(22016),i=e.i(46932),o=e.i(43531),l=e.i(83086),c=e.i(70273),d=e.i(39312),h=e.i(64659),u=e.i(39944),p=e.i(81754),f=e.i(47167);e.i(34537);var g="-ms-",m="-moz-",x="-webkit-",b="comm",y="rule",w="decl",v="@keyframes",j=Math.abs,N=String.fromCharCode,k=Object.assign;function C(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,r){return e.replace(t,r)}function A(e,t,r){return e.indexOf(t,r)}function $(e,t){return 0|e.charCodeAt(t)}function I(e,t,r){return e.slice(t,r)}function P(e){return e.length}function z(e,t){return t.push(e),e}function O(e,t){return e.filter(function(e){return!C(e,t)})}var T=1,B=1,_=0,R=0,E=0,F="";function D(e,t,r,s,a,n,i,o){return{value:e,root:t,parent:r,type:s,props:a,children:n,line:T,column:B,length:i,return:"",siblings:o}}function G(e,t){return k(D("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=G(e.root,{children:[e]});z(e,e.siblings)}function L(){return E=R<_?$(F,R++):0,B++,10===E&&(B=1,T++),E}function W(){return $(F,R)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y(e){var t,r;return(t=R-1,r=function e(t){for(;L();)switch(E){case t:return R;case 34:case 39:34!==t&&39!==t&&e(E);break;case 40:41===t&&e(t);break;case 92:L()}return R}(91===e?e+2:40===e?e+1:e),I(F,t,r)).trim()}function U(e,t){for(var r="",s=0;s<e.length;s++)r+=t(e[s],s,e,t)||"";return r}function q(e,t,r,s){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case w:return e.return=e.return||e.value;case b:return"";case v:return e.return=e.value+"{"+U(e.children,s)+"}";case y:if(!P(e.value=e.props.join(",")))return""}return P(r=U(e.children,s))?e.return=e.value+"{"+r+"}":""}function V(e,t,r,s){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=function e(t,r,s){var a;switch(a=r,45^$(t,0)?(((a<<2^$(t,0))<<2^$(t,1))<<2^$(t,2))<<2^$(t,3):0){case 5103:return x+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+t+t;case 4855:return x+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return m+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return x+t+m+t+g+t+t;case 5936:switch($(t,r+11)){case 114:return x+t+g+S(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return x+t+g+S(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return x+t+g+S(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return x+t+g+t+t;case 6165:return x+t+g+"flex-"+t+t;case 5187:return x+t+S(t,/(\w+).+(:[^]+)/,x+"box-$1$2"+g+"flex-$1$2")+t;case 5443:return x+t+g+"flex-item-"+S(t,/flex-|-self/g,"")+(C(t,/flex-|baseline/)?"":g+"grid-row-"+S(t,/flex-|-self/g,""))+t;case 4675:return x+t+g+"flex-line-pack"+S(t,/align-content|flex-|-self/g,"")+t;case 5548:return x+t+g+S(t,"shrink","negative")+t;case 5292:return x+t+g+S(t,"basis","preferred-size")+t;case 6060:return x+"box-"+S(t,"-grow","")+x+t+g+S(t,"grow","positive")+t;case 4554:return x+S(t,/([^-])(transform)/g,"$1"+x+"$2")+t;case 6187:return S(S(S(t,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),t,"")+t;case 5495:case 3959:return S(t,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return S(S(t,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+g+"flex-pack:$3"),/space-between/,"justify")+x+t+t;case 4200:if(!C(t,/flex-|baseline/))return g+"grid-column-align"+I(t,r)+t;break;case 2592:case 3360:return g+S(t,"template-","")+t;case 4384:case 3616:if(s&&s.some(function(e,t){return r=t,C(e.props,/grid-\w+-end/)}))return~A(t+(s=s[r].value),"span",0)?t:g+S(t,"-start","")+t+g+"grid-row-span:"+(~A(s,"span",0)?C(s,/\d+/):C(s,/\d+/)-C(t,/\d+/))+";";return g+S(t,"-start","")+t;case 4896:case 4128:return s&&s.some(function(e){return C(e.props,/grid-\w+-start/)})?t:g+S(S(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return S(t,/(.+)-inline(.+)/,x+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(t)-1-r>6)switch($(t,r+1)){case 109:if(45!==$(t,r+4))break;case 102:return S(t,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+m+(108==$(t,r+3)?"$3":"$2-$3"))+t;case 115:return~A(t,"stretch",0)?e(S(t,"stretch","fill-available"),r,s)+t:t}break;case 5152:case 5920:return S(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,s,a,n,i,o){return g+r+":"+s+o+(a?g+r+"-span:"+(n?i:i-s)+o:"")+t});case 4949:if(121===$(t,r+6))return S(t,":",":"+x)+t;break;case 6444:switch($(t,45===$(t,14)?18:11)){case 120:return S(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+x+(45===$(t,14)?"inline-":"")+"box$3$1"+x+"$2$3$1"+g+"$2box$3")+t;case 100:return S(t,":",":"+g)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case v:return U([G(e,{value:S(e.value,"@","@"+x)})],s);case y:if(e.length){var a,n;return a=r=e.props,n=function(t){switch(C(t,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(G(e,{props:[S(t,/:(read-\w+)/,":"+m+"$1")]})),M(G(e,{props:[t]})),k(e,{props:O(r,s)});break;case"::placeholder":M(G(e,{props:[S(t,/:(plac\w+)/,":"+x+"input-$1")]})),M(G(e,{props:[S(t,/:(plac\w+)/,":"+m+"$1")]})),M(G(e,{props:[S(t,/:(plac\w+)/,g+"input-$1")]})),M(G(e,{props:[t]})),k(e,{props:O(r,s)})}return""},a.map(n).join("")}}}function Z(e,t,r,s,a,n,i,o,l,c,d,h){for(var u=a-1,p=0===a?n:[""],f=p.length,g=0,m=0,x=0;g<s;++g)for(var b=0,w=I(e,u+1,u=j(m=i[g])),v=e;b<f;++b)(v=(m>0?p[b]+" "+w:S(w,/&\f/g,p[b])).trim())&&(l[x++]=v);return D(e,t,r,0===a?y:o,l,c,d,h)}function K(e,t,r,s,a){return D(e,t,r,w,I(e,0,s),I(e,s+1,-1),s,a)}let Q=void 0!==f.default&&void 0!==f.default.env&&(f.default.env.REACT_APP_SC_ATTR||f.default.env.SC_ATTR)||"data-styled",X="active",J="data-styled-version",ee="6.4.2",et="/*!sc*/\n",er="u">typeof window&&"u">typeof document;function es(e){if(void 0!==f.default&&void 0!==f.default.env){let t=f.default.env[e];if(void 0!==t&&""!==t)return"false"!==t}}let ea=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!=(r=null!=(t=es("REACT_APP_SC_DISABLE_SPEEDY"))?t:es("SC_DISABLE_SPEEDY"))?r:void 0!==f.default&&void 0!==f.default.env&&!1);function en(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let ei=new Map,eo=new Map,el=1,ec=e=>{if(ei.has(e))return ei.get(e);for(;eo.has(el);)el++;let t=el++;return ei.set(e,t),eo.set(t,e),t},ed=e=>eo.get(e),eh=(e,t)=>{el=t+1,ei.set(e,t),eo.set(t,e)},eu=Object.freeze([]),ep=Object.freeze({}),ef=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eg=/(^-|-$)/g;function em(e){return e.replace(ef,"-").replace(eg,"")}let ex=/(a)(d)/gi,eb=e=>String.fromCharCode(e+(e>25?39:97));function ey(e){let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=eb(t%52)+r;return(eb(t%52)+r).replace(ex,"$1-$2")}let ew=(e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e};function ev(e){return"string"==typeof e}let ej=Symbol.for("react.memo"),eN=Symbol.for("react.forward_ref"),ek={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},eC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eA={[eN]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ej]:eS};function e$(e){return("type"in e&&e.type.$$typeof)===ej?eS:"$$typeof"in e?eA[e.$$typeof]:ek}let eI=Object.defineProperty,eP=Object.getOwnPropertyNames,ez=Object.getOwnPropertySymbols,eO=Object.getOwnPropertyDescriptor,eT=Object.getPrototypeOf,eB=Object.prototype;function e_(e){return"function"==typeof e}let eR=Symbol.for("react.forward_ref");function eE(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===eR&&"styledComponentId"in e}function eF(e,t){return e&&t?e+" "+t:e||t||""}function eD(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eG(e,t){Object.defineProperty(e,"toString",{value:t})}let eM=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let r=this._cGroup;r<e;r++)t+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=e;r--)t-=this.groupSizes[r];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,r=t.length,s=r;for(;e>=s;)if((s<<=1)<0)throw en(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(t),this.length=s;for(let e=r;e<s;e++)this.groupSizes[e]=0}let r=this.indexOfGroup(e+1),s=0;for(let a=0,n=t.length;a<n;a++)this.tag.insertRule(r,t[a])&&(this.groupSizes[e]++,r++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],r=this.indexOfGroup(e),s=r+t;this.groupSizes[e]=0;for(let e=r;e<s;e++)this.tag.deleteRule(r);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;let r=this.groupSizes[e],s=this.indexOfGroup(e),a=s+r;for(let e=s;e<a;e++)t+=this.tag.getRule(e)+et;return t}},eL=`style[${Q}][${J}="${ee}"]`,eW=RegExp(`^${Q}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),eH=e=>"u">typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,eY=e=>{if(!e)return document;if(eH(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(eH(t))return t}return document},eU=(e,t,r)=>{let s,a=r.split(",");for(let r=0,n=a.length;r<n;r++)(s=a[r])&&e.registerName(t,s)},eq=(e,t)=>{var r;let s=(null!=(r=t.textContent)?r:"").split(et),a=[];for(let t=0,r=s.length;t<r;t++){let r=s[t].trim();if(!r)continue;let n=r.match(eW);if(n){let t=0|parseInt(n[1],10),r=n[2];0!==t&&(eh(r,t),eU(e,r,n[3]),e.getTag().insertRules(t,a)),a.length=0}else a.push(r)}},eV=e=>{let t=eY(e.options.target).querySelectorAll(eL);for(let r=0,s=t.length;r<s;r++){let s=t[r];s&&s.getAttribute(Q)!==X&&(eq(e,s),s.parentNode&&s.parentNode.removeChild(s))}},eZ=!1,eK=(e,t)=>{let r,s=document.head,a=e||s,n=document.createElement("style"),i=(r=Array.from(a.querySelectorAll(`style[${Q}]`)))[r.length-1],o=void 0!==i?i.nextSibling:null;n.setAttribute(Q,X),n.setAttribute(J,ee);let l=t||function(){if(!1!==eZ)return eZ;if("u">typeof document){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return eZ=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return eZ=t.getAttribute("content")||void 0}return eZ="u">typeof __webpack_nonce__?__webpack_nonce__:void 0}();return l&&n.setAttribute("nonce",l),a.insertBefore(n,o),n},eQ=class{constructor(e,t){this.element=eK(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;let r=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets;for(let t=0,s=r.length;t<s;t++){let s=r[t];if(s.ownerNode===e)return s}throw en(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},eX=class{constructor(e,t){this.element=eK(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},eJ=er,e0={isServer:!er,useCSSOMInjection:!ea};class e1{static registerId(e){return ec(e)}constructor(e=ep,t={},r){this.options=Object.assign(Object.assign({},e0),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!e.isServer,!this.server&&er&&eJ&&(eJ=!1,eV(this)),eG(this,()=>(e=>{let t=e.getTag(),{length:r}=t,s="";for(let a=0;a<r;a++){let r=ed(a);if(void 0===r)continue;let n=e.names.get(r);if(void 0===n||!n.size)continue;let i=t.getGroup(a);if(0===i.length)continue;let o=Q+".g"+a+'[id="'+r+'"]',l="";for(let e of n)e.length>0&&(l+=e+",");s+=i+o+'{content:"'+l+'"}'+et}return s})(this))}rehydrate(){!this.server&&er&&eV(this)}reconstructWithOptions(e,t=!0){let r=new e1(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&er&&e.target!==this.options.target&&eY(this.options.target)!==eY(e.target)&&eV(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=new eM((({useCSSOMInjection:e,target:t,nonce:r})=>e?new eQ(t,r):new eX(t,r))(this.options)))}hasNameForId(e,t){var r,s;return null!=(s=null==(r=this.names.get(e))?void 0:r.has(t))&&s}registerName(e,t){ec(e),e.startsWith("sc-keyframes-")&&this.keyframeIds.add(e);let r=this.names.get(e);r?r.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,r){this.registerName(e,t),this.getTag().insertRules(ec(e),r)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ec(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}let e2=new WeakSet,e5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function e4(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);t+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[r]}return t.startsWith("ms-")?"-"+t:t}let e3=Symbol.for("sc-keyframes");function e6(e){return e_(e)&&!(e.prototype&&e.prototype.isReactComponent)}let e8=e=>null==e||!1===e||""===e,e9=Symbol.for("react.client.reference");function e7(e){return e.$$typeof===e9}function te(e,t,r,s,a=[]){if(e8(e))return a;let n=typeof e;if("string"===n)return a.push(e),a;if("function"===n)return e7(e)?a:e6(e)&&t?te(e(t),t,r,s,a):(a.push(e),a);if(Array.isArray(e)){for(let n=0;n<e.length;n++)te(e[n],t,r,s,a);return a}return eE(e)?a.push(`.${e.styledComponentId}`):"object"==typeof e&&null!==e&&e3 in e?r?(e.inject(r,s),a.push(e.getName(s))):a.push(e):e7(e)||(eD(e)?e.toString!==Object.prototype.toString?a.push(e.toString()):function e(t,r){for(let s in t){let a=t[s];t.hasOwnProperty(s)&&!e8(a)&&(Array.isArray(a)&&e2.has(a)||e_(a)?r.push(e4(s)+":",a,";"):eD(a)?(r.push(s+" {"),e(a,r),r.push("}")):r.push(e4(s)+": "+(null==a||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||s in e5||s.startsWith("--")?String(a).trim():a+"px")+";"))}}(e,a):a.push(e.toString())),a}let tt=ew(5381,ee);class tr{constructor(e,t,r){this.rules=e,this.componentId=t,this.baseHash=ew(tt,t),this.baseStyle=r,e1.registerId(t)}generateAndInjectStyles(e,t,r){let s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";{let a="";for(let s=0;s<this.rules.length;s++){let n=this.rules[s];if("string"==typeof n)a+=n;else if(n)if(e6(n)){let s=n(e);"string"==typeof s?a+=s:null!=s&&!1!==s&&(a+=te(s,e,t,r).join(""))}else a+=te(n,e,t,r).join("")}if(a){this.dynamicNameCache||(this.dynamicNameCache=new Map);let e=r.hash?r.hash+a:a,n=this.dynamicNameCache.get(e);if(!n){if(n=ey(ew(ew(this.baseHash,r.hash),a)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,n)}if(!t.hasNameForId(this.componentId,n)){let e=r(a,"."+n,void 0,this.componentId);t.insertRules(this.componentId,n,e)}s=eF(s,n)}}return s}}let ts=/&/g;function ta(e,t){let r=0;for(;--t>=0&&92===e.charCodeAt(t);)r++;return!(1&~r)}function tn(e){let t=e.length,r="",s=0,a=0,n=0,i=!1,o=!1;for(let l=0;l<t;l++){let c=e.charCodeAt(l);if(0!==n||i||47!==c||42!==e.charCodeAt(l+1))if(i)42===c&&47===e.charCodeAt(l+1)&&(i=!1,l++);else if(34!==c&&39!==c||ta(e,l)){if(0===n)if(123===c)a++;else if(125===c){if(--a<0){o=!0;let r=l+1;for(;r<t;){let t=e.charCodeAt(r);if(59===t||10===t)break;r++}r<t&&59===e.charCodeAt(r)&&r++,a=0,l=r-1,s=r;continue}0===a&&(r+=e.substring(s,l+1),s=l+1)}else 59===c&&0===a&&(r+=e.substring(s,l+1),s=l+1)}else 0===n?n=c:n===c&&(n=0);else i=!0,l++}return o||0!==a||0!==n?(s<t&&0===a&&0===n&&(r+=e.substring(s)),r):e}let ti=new e1,to=function({options:e=ep,plugins:t=eu}=ep){var r,s,a;let n,i,o,l=(e,t,r)=>r.startsWith(i)&&r.endsWith(i)&&r.replaceAll(i,"").length>0?`.${n}`:e,c=t.slice();c.push(e=>{e.type===y&&e.value.includes("&")&&(o||(o=RegExp(`\\${i}\\b`,"g")),e.props[0]=e.props[0].replace(ts,i).replace(o,l))}),e.prefix&&c.push(V),c.push(q);let d=[],h=(a=(s=c.concat((r=e=>d.push(e),function(e){!e.root&&(e=e.return)&&r(e)}))).length,function(e,t,r,n){for(var i="",o=0;o<a;o++)i+=s[o](e,t,r,n)||"";return i}),u=(t,r="",s="",a="&")=>{var l,c,u;n=a,i=r,o=void 0;let p=function(e){let t=-1!==e.indexOf("//"),r=-1!==e.indexOf("}");if(!t&&!r)return e;if(!t)return tn(e);let s=e.length,a="",n=0,i=0,o=0,l=0,c=0,d=!1;for(;i<s;){let t=e.charCodeAt(i);if(34!==t&&39!==t||ta(e,i))if(0===o)if(47===t&&i+1<s&&42===e.charCodeAt(i+1)){for(i+=2;i+1<s&&(42!==e.charCodeAt(i)||47!==e.charCodeAt(i+1));)i++;i+=2}else if(40!==t)if(41!==t)if(l>0)i++;else if(42===t&&i+1<s&&47===e.charCodeAt(i+1))a+=e.substring(n,i),i+=2,n=i,d=!0;else if(47===t&&i+1<s&&47===e.charCodeAt(i+1)){for(a+=e.substring(n,i);i<s&&10!==e.charCodeAt(i);)i++;n=i,d=!0}else 123===t?c++:125===t&&c--,i++;else l>0&&l--,i++;else l++,i++;else i++;else 0===o?o=t:o===t&&(o=0),i++}return d?(n<s&&(a+=e.substring(n)),0===c?a:tn(a)):0===c?e:tn(e)}(t),f=(u=function e(t,r,s,a,n,i,o,l,c){for(var d,h,u,p,f=0,g=0,m=o,x=0,y=0,w=0,v=1,k=1,C=1,O=0,_="",G=n,M=i,U=a,q=_;k;)switch(w=O,O=L()){case 40:if(108!=w&&58==$(q,m-1)){-1!=A(q+=S(Y(O),"&","&\f"),"&\f",j(f?l[f-1]:0))&&(C=-1);break}case 34:case 39:case 91:q+=Y(O);break;case 9:case 10:case 13:case 32:q+=function(e){for(;E=W();)if(E<33)L();else break;return H(e)>2||H(E)>3?"":" "}(w);break;case 92:q+=function(e,t){for(var r;--t&&L()&&!(E<48)&&!(E>102)&&(!(E>57)||!(E<65))&&(!(E>70)||!(E<97)););return r=R+(t<6&&32==W()&&32==L()),I(F,e,r)}(R-1,7);continue;case 47:switch(W()){case 42:case 47:z((d=function(e,t){for(;L();)if(e+E===57)break;else if(e+E===84&&47===W())break;return"/*"+I(F,t,R-1)+"*"+N(47===e?e:L())}(L(),R),h=r,u=s,p=c,D(d,h,u,b,N(E),I(d,2,-2),0,p)),c),(5==H(w||1)||5==H(W()||1))&&P(q)&&" "!==I(q,-1,void 0)&&(q+=" ");break;default:q+="/"}break;case 123*v:l[f++]=P(q)*C;case 125*v:case 59:case 0:switch(O){case 0:case 125:k=0;case 59+g:-1==C&&(q=S(q,/\f/g,"")),y>0&&(P(q)-m||0===v&&47===w)&&z(y>32?K(q+";",a,s,m-1,c):K(S(q," ","")+";",a,s,m-2,c),c);break;case 59:q+=";";default:if(z(U=Z(q,r,s,f,g,n,l,_,G=[],M=[],m,i),i),123===O)if(0===g)e(q,r,U,U,G,i,m,l,M);else{switch(x){case 99:if(110===$(q,3))break;case 108:if(97===$(q,2))break;default:g=0;case 100:case 109:case 115:}g?e(t,U,U,a&&z(Z(t,U,U,0,0,n,l,_,n,G=[],m,M),M),n,M,m,l,a?G:M):e(q,U,U,U,[""],M,0,l,M)}}f=g=y=0,v=C=1,_=q="",m=o;break;case 58:m=1+P(q),y=w;default:if(v<1){if(123==O)--v;else if(125==O&&0==v++&&125==(E=R>0?$(F,--R):0,B--,10===E&&(B=1,T--),E))continue}switch(q+=N(O),O*v){case 38:C=g>0?1:(q+="\f",-1);break;case 44:l[f++]=(P(q)-1)*C,C=1;break;case 64:45===W()&&(q+=Y(L())),x=W(),g=m=P(_=q+=function(e){for(;!H(W());)L();return I(F,e,R)}(R)),O++;break;case 45:45===w&&2==P(q)&&(v=0)}}return i}("",null,null,null,[""],(c=l=s||r?s+" "+r+" { "+p+" }":p,T=B=1,_=P(F=c),R=0,l=[]),0,[0],l),F="",u);return e.namespace&&(f=function e(t,r){let s=r+" ",a=","+s;for(let n=0;n<t.length;n++){let i=t[n];if("rule"===i.type){i.value=(s+i.value).replaceAll(",",a);let e=i.props,t=[];for(let r=0;r<e.length;r++)t[r]=s+e[r];i.props=t}Array.isArray(i.children)&&"@keyframes"!==i.type&&e(i.children,r)}return t}(f,e.namespace)),d=[],U(f,h),d},p=5381;for(let e=0;e<t.length;e++)t[e].name||en(15),p=ew(p,t[e].name);return(null==e?void 0:e.namespace)&&(p=ew(p,e.namespace)),(null==e?void 0:e.prefix)&&(p=ew(p,"p")),u.hash=5381!==p?p.toString():"",u}(),tl=a.default.createContext({shouldForwardProp:void 0,styleSheet:ti,stylis:to,stylisPlugins:void 0});tl.Consumer;let tc=a.default.createContext(void 0);tc.Consumer;let td=Object.prototype.hasOwnProperty,th={};function tu(e,t,r){var s,n;let i,o,l=eE(e),c=!ev(e),{attrs:d=eu,componentId:h=(s=t.displayName,n=t.parentComponentId,th[i="string"!=typeof s?"sc":em(s)]=(th[i]||0)+1,o=i+"-"+ey(ew(5381,ee+i+th[i])>>>0),n?n+"-"+o:o),displayName:u=ev(e)?`styled.${e}`:`Styled(${e.displayName||e.name||"Component"})`}=t,p=t.displayName&&t.componentId?em(t.displayName)+"-"+t.componentId:t.componentId||h,f=l&&e.attrs?e.attrs.concat(d).filter(Boolean):d,{shouldForwardProp:g}=t;if(l&&e.shouldForwardProp){let r=e.shouldForwardProp;if(t.shouldForwardProp){let e=t.shouldForwardProp;g=(t,s)=>r(t,s)&&e(t,s)}else g=r}let m=new tr(r,p,l?e.componentStyle:void 0);function x(e,t){return function(e,t,r){let s,n,{attrs:i,componentStyle:o,defaultProps:l,foldedComponentIds:c,styledComponentId:d,target:h}=e,u=a.default.useContext(tc),p=a.default.useContext(tl),f=e.shouldForwardProp||p.shouldForwardProp,g=function(e,t,r=ep){return e.theme!==r.theme&&e.theme||t||r.theme}(t,u,l)||ep;{let e=a.default.useRef(null),r=e.current;if(null!==r&&r[1]===g&&r[2]===p.styleSheet&&r[3]===p.stylis&&r[7]===o&&function(e,t,r){let s=0;for(let r in t)if(td.call(t,r)&&(s++,e[r]!==t[r]))return!1;return s===r}(r[0],t,r[4]))s=r[5],n=r[6];else{var m,x,b;s=function(e,t,r){let s=Object.assign(Object.assign({},t),{className:void 0,theme:r}),a=e.length>1;for(let r=0;r<e.length;r++){let n=e[r],i=e_(n)?n(a?Object.assign({},s):s):n;for(let e in i)"className"===e?s.className=eF(s.className,i[e]):"style"===e?s.style=Object.assign(Object.assign({},s.style),i[e]):e in t&&void 0===t[e]||(s[e]=i[e])}return"className"in t&&"string"==typeof t.className&&(s.className=eF(s.className,t.className)),s}(i,t,g),m=s,x=p.styleSheet,b=p.stylis,n=o.generateAndInjectStyles(m,x,b);let r=0;for(let e in t)td.call(t,e)&&r++;e.current=[t,g,p.styleSheet,p.stylis,r,s,n,o]}}let y=s.as||h,w=function(e,t,r,s){let a={};for(let n in e)void 0===e[n]||"$"===n[0]||"as"===n||"theme"===n&&e.theme===r||("forwardedAs"===n?a.as=e.forwardedAs:s&&!s(n,t)||(a[n]=e[n]));return a}(s,y,g,f),v=eF(c,d);return n&&(v+=" "+n),s.className&&(v+=" "+s.className),w[ev(y)&&y.includes("-")?"class":"className"]=v,r&&(w.ref=r),(0,a.createElement)(y,w)}(b,e,t)}x.displayName=u;let b=a.default.forwardRef(x);return b.attrs=f,b.componentStyle=m,b.displayName=u,b.shouldForwardProp=g,b.foldedComponentIds=l?eF(e.foldedComponentIds,e.styledComponentId):"",b.styledComponentId=p,b.target=l?e.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(t){this._foldedDefaultProps=l?function(e,...t){for(let r of t)!function e(t,r,s=!1){if(!s&&!eD(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(let s=0;s<r.length;s++)t[s]=e(t[s],r[s]);else if(eD(r))for(let s in r)t[s]=e(t[s],r[s]);return t}(e,r,!0);return e}({},e.defaultProps,t):t}}),eG(b,()=>`.${b.styledComponentId}`),c&&function e(t,r,s){if("string"!=typeof r){let a=eT(r);a&&a!==eB&&e(t,a,s);let n=eP(r).concat(ez(r)),i=e$(t),o=e$(r);for(let e=0;e<n.length;++e){let a=n[e];if(!(a in eC||s&&s[a]||o&&a in o||i&&a in i)){let e=eO(r,a);try{eI(t,a,e)}catch(e){}}}}return t}(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var tp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function tf(e,t){let r=[e[0]];for(let s=0,a=t.length;s<a;s+=1)r.push(t[s],e[s+1]);return r}let tg=e=>(e2.add(e),e),tm=e=>(function e(t,r,s=ep){if(!r)throw en(1,r);let a=(e,...a)=>t(r,s,function(e,...t){return e_(e)||eD(e)?tg(te(tf(eu,[e,...t]))):0===t.length&&1===e.length&&"string"==typeof e[0]?te(e):tg(te(tf(e,t)))}(e,...a));return a.attrs=a=>e(t,r,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,a).filter(Boolean)})),a.withConfig=a=>e(t,r,Object.assign(Object.assign({},s),a)),a})(tu,e);tp.forEach(e=>{tm[e]=tm(e)});let tx=()=>(0,s.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 32 32",fill:"none",children:[(0,s.jsx)("rect",{width:"32",height:"32",rx:"6",fill:"rgba(255,255,255,0.15)"}),(0,s.jsx)("rect",{x:"5",y:"10",width:"22",height:"3",rx:"1.5",fill:"white",opacity:"0.9"}),(0,s.jsx)("rect",{x:"5",y:"15",width:"6",height:"8",rx:"1",fill:"white",opacity:"0.8"}),(0,s.jsx)("rect",{x:"13",y:"15",width:"6",height:"8",rx:"1",fill:"white",opacity:"0.8"}),(0,s.jsx)("rect",{x:"21",y:"15",width:"6",height:"8",rx:"1",fill:"white",opacity:"0.8"})]}),tb=()=>(0,s.jsxs)("svg",{width:"36",height:"20",viewBox:"0 0 60 28",fill:"none",children:[(0,s.jsx)("text",{x:"0",y:"20",fontFamily:"Arial Black, sans-serif",fontWeight:"900",fontSize:"18",fill:"white",opacity:"0.95",children:"UPI"}),(0,s.jsx)("rect",{x:"48",y:"4",width:"3",height:"20",rx:"1.5",fill:"#22C55E"}),(0,s.jsx)("rect",{x:"54",y:"8",width:"3",height:"16",rx:"1.5",fill:"#22C55E"})]}),ty=()=>(0,s.jsxs)("svg",{width:"32",height:"22",viewBox:"0 0 48 32",fill:"none",children:[(0,s.jsx)("rect",{width:"48",height:"32",rx:"5",fill:"rgba(255,255,255,0.15)",stroke:"rgba(255,255,255,0.3)",strokeWidth:"1"}),(0,s.jsx)("rect",{x:"0",y:"7",width:"48",height:"8",fill:"rgba(255,255,255,0.25)"}),(0,s.jsx)("rect",{x:"6",y:"20",width:"14",height:"5",rx:"2",fill:"rgba(255,255,255,0.6)"}),(0,s.jsx)("rect",{x:"28",y:"20",width:"14",height:"5",rx:"2",fill:"rgba(255,255,255,0.4)"})]}),tw=tm.div`
  /* ── Wallet Container ── */
  .wallet {
    position: relative;
    width: 280px;
    height: 230px;
    cursor: pointer;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: transform 0.4s ease;
  }

  /* Entry animation */
  @keyframes slideIntoPocket {
    0%   { transform: translateY(-110px); opacity: 0; }
    100% { transform: translateY(0);      opacity: 1; }
  }

  /* ── Wallet Back ── */
  .wallet-back {
    position: absolute;
    bottom: 0;
    width: 280px;
    height: 200px;
    background: linear-gradient(160deg, #1a2f3a 0%, #0d1e28 100%);
    border-radius: 22px 22px 60px 60px;
    z-index: 5;
    box-shadow:
      inset 0 25px 35px rgba(0, 0, 0, 0.5),
      inset 0 5px 15px rgba(0, 0, 0, 0.4),
      0 20px 40px rgba(0, 0, 0, 0.4);
  }

  /* ── Cards ── */
  .card {
    position: absolute;
    width: 260px;
    height: 140px;
    left: 10px;
    border-radius: 18px;
    padding: 16px 18px;
    color: white;
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.25),
      0 8px 24px rgba(0, 0, 0, 0.3);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: slideIntoPocket 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
    overflow: hidden;
  }

  /* Shimmer overlay */
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.12) 0%,
      transparent 50%,
      rgba(255,255,255,0.04) 100%
    );
    border-radius: inherit;
    pointer-events: none;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: 0.95;
  }

  .card-logo {
    display: flex;
    align-items: center;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .label {
    font-size: 8px;
    opacity: 0.65;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 2px;
    display: block;
  }

  .value {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .card-number-wrapper {
    text-align: right;
  }

  .hidden-stars {
    font-size: 15px;
    letter-spacing: 2px;
    opacity: 0.9;
  }

  .card-number {
    display: none;
    font-size: 13px;
    letter-spacing: 1px;
    font-family: 'Courier New', monospace;
    opacity: 0.95;
  }

  /* ── Card Variants ── */
  .netbanking {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 60%, #60a5fa 100%);
    bottom: 90px;
    z-index: 10;
    animation-delay: 0.1s;
  }

  .upi {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 60%, #c084fc 100%);
    bottom: 65px;
    z-index: 20;
    animation-delay: 0.2s;
  }

  .creditcard {
    background: linear-gradient(135deg, #0f766e 0%, #14b8a6 60%, #5eead4 100%);
    bottom: 40px;
    z-index: 30;
    animation-delay: 0.3s;
  }

  /* ── Pocket ── */
  .pocket {
    position: absolute;
    bottom: 0;
    width: 280px;
    height: 160px;
    z-index: 40;
    filter: drop-shadow(0 15px 30px rgba(0, 30, 50, 0.5));
  }

  .pocket-svg {
    width: 100%;
    height: 100%;
  }

  .pocket-content {
    position: absolute;
    top: 30px;
    width: 100%;
    text-align: center;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  /* ── Eye Icon ── */
  .eye-icon-wrapper {
    height: 20px;
    width: 20px;
    position: relative;
    opacity: 0.35;
    transition: opacity 0.3s ease;
  }

  .eye-icon {
    position: absolute;
    top: 0;
    left: 0;
    stroke: #38bdf8;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  /* ── Hover Effects ── */
  .wallet:hover {
    transform: translateY(-6px);
  }

  .wallet:hover .eye-icon-wrapper {
    opacity: 1;
  }

  /* Fan cards out on hover */
  .wallet:hover .netbanking {
    transform: translateY(-80px) rotate(-4deg);
  }

  .wallet:hover .upi {
    transform: translateY(-50px) rotate(2deg);
  }

  .wallet:hover .creditcard {
    transform: translateY(-12px) rotate(0deg);
  }

  /* Individual card hover — pop to front */
  .card:hover {
    z-index: 100 !important;
  }

  .wallet:hover .netbanking:hover {
    transform: translateY(-68px) scale(1.06) rotate(0deg);
  }

  .wallet:hover .upi:hover {
    transform: translateY(-75px) scale(1.06) rotate(0deg);
  }

  .wallet:hover .creditcard:hover {
    transform: translateY(-65px) scale(1.06) rotate(0deg);
  }

  /* Reveal full card number on hover */
  .card:hover .hidden-stars  { display: none; }
  .card:hover .card-number   { display: block; }

  /* Eye toggle on wallet hover */
  .wallet:hover .eye-slash {
    opacity: 0;
    transform: scale(0.4);
  }

  .wallet:hover .eye-open {
    opacity: 1 !important;
    transform: scale(1.1);
  }
`,tv=()=>(0,s.jsx)(tw,{children:(0,s.jsx)("div",{className:"app-container",children:(0,s.jsxs)("div",{className:"wallet",children:[(0,s.jsx)("div",{className:"wallet-back"}),(0,s.jsx)("div",{className:"card netbanking",children:(0,s.jsxs)("div",{className:"card-inner",children:[(0,s.jsxs)("div",{className:"card-top",children:[(0,s.jsx)("span",{className:"card-label",children:"Net Banking"}),(0,s.jsx)("div",{className:"card-logo",children:(0,s.jsx)(tx,{})})]}),(0,s.jsxs)("div",{className:"card-bottom",children:[(0,s.jsxs)("div",{className:"card-info",children:[(0,s.jsx)("span",{className:"label",children:"Holder"}),(0,s.jsx)("span",{className:"value",children:"ALEX SMITH"})]}),(0,s.jsxs)("div",{className:"card-number-wrapper",children:[(0,s.jsx)("span",{className:"hidden-stars",children:"**** 4242"}),(0,s.jsx)("span",{className:"card-number",children:"5524 9910 4242"})]})]})]})}),(0,s.jsx)("div",{className:"card upi",children:(0,s.jsxs)("div",{className:"card-inner",children:[(0,s.jsxs)("div",{className:"card-top",children:[(0,s.jsx)("span",{className:"card-label",children:"UPI"}),(0,s.jsx)("div",{className:"card-logo",children:(0,s.jsx)(tb,{})})]}),(0,s.jsxs)("div",{className:"card-bottom",children:[(0,s.jsxs)("div",{className:"card-info",children:[(0,s.jsx)("span",{className:"label",children:"UPI ID"}),(0,s.jsx)("span",{className:"value",children:"Hierance@upi"})]}),(0,s.jsxs)("div",{className:"card-number-wrapper",children:[(0,s.jsx)("span",{className:"hidden-stars",children:"**** 8810"}),(0,s.jsx)("span",{className:"card-number",children:"9012 4432 8810"})]})]})]})}),(0,s.jsx)("div",{className:"card creditcard",children:(0,s.jsxs)("div",{className:"card-inner",children:[(0,s.jsxs)("div",{className:"card-top",children:[(0,s.jsx)("span",{className:"card-label",children:"Credit Card"}),(0,s.jsx)("div",{className:"card-logo",children:(0,s.jsx)(ty,{})})]}),(0,s.jsxs)("div",{className:"card-bottom",children:[(0,s.jsxs)("div",{className:"card-info",children:[(0,s.jsx)("span",{className:"label",children:"Card Type"}),(0,s.jsx)("span",{className:"value",children:"VISA PLATINUM"})]}),(0,s.jsxs)("div",{className:"card-number-wrapper",children:[(0,s.jsx)("span",{className:"hidden-stars",children:"**** 0094"}),(0,s.jsx)("span",{className:"card-number",children:"3312 0045 0094"})]})]})]})}),(0,s.jsxs)("div",{className:"pocket",children:[(0,s.jsxs)("svg",{className:"pocket-svg",viewBox:"0 0 280 160",fill:"none",children:[(0,s.jsx)("path",{d:"M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z",fill:"#1a2f3a"}),(0,s.jsx)("path",{d:"M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z",stroke:"#2a4a5a",strokeWidth:"1.5",strokeDasharray:"6 4"})]}),(0,s.jsx)("div",{className:"pocket-content",children:(0,s.jsxs)("div",{className:"eye-icon-wrapper",children:[(0,s.jsxs)("svg",{className:"eye-icon eye-slash",width:18,height:18,viewBox:"0 0 24 24",fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,s.jsx)("circle",{cx:12,cy:12,r:3}),(0,s.jsx)("line",{x1:3,y1:3,x2:21,y2:21})]}),(0,s.jsxs)("svg",{className:"eye-icon eye-open",style:{opacity:0},width:18,height:18,viewBox:"0 0 24 24",fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,s.jsx)("circle",{cx:12,cy:12,r:3})]})]})})]})]})})}),tj=[{id:"free",name:"Free",price:{monthly:0,yearly:0},description:"Discover opportunities and get started with basic applications.",features:["Access to 1,200+ public job listings","Apply to 5 jobs per month","Standard candidate profile","AI match-score preview (3 per day)","Standard email alerts"],buttonText:"Start for Free",buttonHref:"/auth",popular:!1,theme:{cardBg:"bg-white/80 backdrop-blur-sm",border:"border-slate-200/80 hover:border-slate-300",shadow:"shadow-sm hover:shadow-md",badgeBg:"bg-slate-100",badgeText:"text-slate-600",iconBg:"bg-slate-50",iconColor:"text-slate-400",btnClass:"bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"}},{id:"plus",name:"Plus",price:{monthly:1299,yearly:999},description:"Accelerate your search with intelligent match scoring and priority referrals.",features:["Unlimited job applications","AI resume optimizer & full match scoring","Featured profile in recruiter search","Priority referral to hiring managers","Access to exclusive virtual hiring events","Salary insight estimation tools"],buttonText:"Upgrade to Plus",buttonHref:"/auth",popular:!0,badge:"Most Popular",theme:{cardBg:"bg-gradient-to-b from-indigo-50/20 via-white to-white",border:"border-indigo-150/80 shadow-indigo-100/40 shadow-xl border-indigo-200",shadow:"hover:shadow-2xl hover:shadow-indigo-100/50",badgeBg:"bg-indigo-50",badgeText:"text-indigo-600",iconBg:"bg-indigo-50",iconColor:"text-indigo-500",btnClass:"bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-150/20"}},{id:"pro",name:"Pro",price:{monthly:3299,yearly:2599},description:"Ultimate access for advanced professionals seeking high-impact roles.",features:["Everything in Plus","Direct messaging to recruiters & hiring managers","48-hour early access to premium postings","1-on-1 resume review & career check-in (yearly)","Verified profile checkmark badge","Dedicated candidate success support"],buttonText:"Get Pro Access",buttonHref:"/auth",popular:!1,theme:{cardBg:"bg-white/80 backdrop-blur-sm",border:"border-slate-200/80 hover:border-slate-300",shadow:"shadow-sm hover:shadow-md",badgeBg:"bg-slate-900",badgeText:"text-white",iconBg:"bg-slate-900",iconColor:"text-white",btnClass:"bg-slate-900 hover:bg-slate-800 text-white shadow-md"}}],tN=[{id:"starter",name:"Starter",price:{monthly:4999,yearly:3999},description:"Essential tools for small teams to find and hire talent.",features:["Post up to 3 active jobs","Basic candidate search","Standard applicant tracking","Email support"],buttonText:"Start Hiring",buttonHref:"/auth",popular:!1,theme:{cardBg:"bg-white/80 backdrop-blur-sm",border:"border-slate-200/80 hover:border-slate-300",shadow:"shadow-sm hover:shadow-md",badgeBg:"bg-slate-100",badgeText:"text-slate-600",iconBg:"bg-slate-50",iconColor:"text-slate-400",btnClass:"bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"}},{id:"growth",name:"Growth",price:{monthly:14999,yearly:11999},description:"Advanced features for growing teams with high hiring volume.",features:["Post up to 10 active jobs","Advanced AI candidate matching","Automated outreach campaigns","Priority support","Team collaboration tools"],buttonText:"Upgrade to Growth",buttonHref:"/auth",popular:!0,badge:"Most Popular",theme:{cardBg:"bg-gradient-to-b from-indigo-50/20 via-white to-white",border:"border-indigo-150/80 shadow-indigo-100/40 shadow-xl border-indigo-200",shadow:"hover:shadow-2xl hover:shadow-indigo-100/50",badgeBg:"bg-indigo-50",badgeText:"text-indigo-600",iconBg:"bg-indigo-50",iconColor:"text-indigo-500",btnClass:"bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-150/20"}},{id:"scale",name:"Scale",price:{monthly:39999,yearly:31999},description:"Customized solutions for enterprise recruitment needs.",features:["Unlimited active jobs","Custom AI model training","Dedicated account manager","API access","Custom integrations","White-labeled career page"],buttonText:"Contact Sales",buttonHref:"/auth",popular:!1,theme:{cardBg:"bg-white/80 backdrop-blur-sm",border:"border-slate-200/80 hover:border-slate-300",shadow:"shadow-sm hover:shadow-md",badgeBg:"bg-slate-900",badgeText:"text-white",iconBg:"bg-slate-900",iconColor:"text-white",btnClass:"bg-slate-900 hover:bg-slate-800 text-white shadow-sm"}}],tk=[{q:"Can I switch plans or cancel at any time?",a:"Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. If you cancel, your premium benefits will remain active until the end of your billing cycle."},{q:"How does the AI match scoring work?",a:"Our AI model analyzes your skills, experiences, and resume against real-time employer requirements to show you a percentage score of how closely you match a job, helping you optimize your application."},{q:"What is a featured profile badge?",a:"When partner recruiters search for candidates on Hierance, Plus and Pro members are highlighted at the top of the search results, increasing profile visibility by up to 3x."},{q:"Are there any hidden transaction fees?",a:"No. The price you see is exactly what you pay. We do not charge application fees or take a cut of your starting salary when you find a job."}];function tC(){let[e,t]=(0,a.useState)("monthly"),[r,f]=(0,a.useState)("candidate"),[g,m]=(0,a.useState)(null);return(0,s.jsxs)("div",{className:"min-h-screen bg-slate-50/50 flex flex-col font-sans",children:[(0,s.jsx)(u.default,{}),(0,s.jsxs)("main",{className:"flex-grow pt-32 pb-24",children:[(0,s.jsxs)("section",{className:"relative px-6 max-w-7xl mx-auto mb-16 pt-4",children:[(0,s.jsx)("div",{className:"absolute top-[-100px] left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-[100px] -z-10"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center",children:[(0,s.jsxs)("div",{className:"text-center lg:text-left",children:[(0,s.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-600 tracking-wide mb-6",children:[(0,s.jsx)(l.Sparkles,{size:12,className:"animate-pulse"})," Transparent Pricing Plans"]}),(0,s.jsxs)("h1",{className:"text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight mb-6",children:["Invest in your career. ",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700",children:"Unlock your true earning potential."})]}),(0,s.jsx)("p",{className:"text-slate-500 text-base md:text-lg max-w-2xl lg:mx-0 mx-auto font-light leading-relaxed mb-10",children:"candidate"===r?"Find the plan tailored to your journey. Whether you are actively seeking new opportunities, building your skill profile, or looking for premium AI matches.":"Discover the perfect tools to scale your team. Access top talent, advanced AI matching, and seamless applicant tracking."}),(0,s.jsxs)("div",{className:"flex items-center lg:justify-start justify-center gap-2 mb-8 bg-slate-100/80 p-1.5 rounded-full w-fit lg:mx-0 mx-auto border border-slate-200/60 shadow-inner",children:[(0,s.jsx)("button",{onClick:()=>f("candidate"),className:`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${"candidate"===r?"bg-white text-indigo-600 shadow-sm border border-slate-200/40":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,children:"For Candidates"}),(0,s.jsx)("button",{onClick:()=>f("recruiter"),className:`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${"recruiter"===r?"bg-white text-indigo-600 shadow-sm border border-slate-200/40":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,children:"For Recruiters"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:justify-start justify-center gap-3.5",children:[(0,s.jsx)("span",{className:`text-sm font-medium transition-colors duration-200 ${"monthly"===e?"text-slate-900":"text-slate-400"}`,children:"Monthly"}),(0,s.jsx)("button",{onClick:()=>t(e=>"monthly"===e?"yearly":"monthly"),className:"w-14 h-8 bg-slate-200 hover:bg-slate-300 rounded-full p-1 transition-colors duration-300 relative focus:outline-none","aria-label":"Toggle billing period",children:(0,s.jsx)("div",{className:`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${"yearly"===e?"translate-x-6 bg-indigo-600":"translate-x-0"}`})}),(0,s.jsxs)("span",{className:`text-sm font-medium transition-colors duration-200 ${"yearly"===e?"text-slate-900":"text-slate-400"} flex items-center gap-1.5`,children:["Yearly",(0,s.jsx)("span",{className:"px-2 py-0.5 bg-emerald-50 text-[10px] font-bold text-emerald-600 rounded-md border border-emerald-150",children:"Save 20%"})]})]})]}),(0,s.jsx)("div",{className:"flex justify-center items-center lg:mt-0 mt-8",children:(0,s.jsx)("div",{className:"scale-95 md:scale-100 lg:scale-110",children:(0,s.jsx)(tv,{})})})]})]}),(0,s.jsx)("section",{className:"max-w-7xl mx-auto px-6 md:px-8 mb-24",children:(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch",children:("candidate"===r?tj:tN).map((t,r)=>{let a="yearly"===e?t.price.yearly:t.price.monthly;return(0,s.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*r},className:`relative flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] border ${t.theme.cardBg} ${t.theme.border} ${t.theme.shadow} transition-all duration-500`,children:[t.popular&&t.badge&&(0,s.jsx)("div",{className:"absolute top-0 right-8 -translate-y-1/2",children:(0,s.jsxs)("span",{className:"inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-lg shadow-indigo-100",children:[(0,s.jsx)(c.Star,{size:10,fill:"white"})," ",t.badge]})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-6 flex items-center justify-between",children:[(0,s.jsx)("h2",{className:"text-xl font-bold text-slate-900",children:t.name}),"plus"===t.id&&(0,s.jsx)("span",{className:"p-2 rounded-xl bg-indigo-50 text-indigo-600",children:(0,s.jsx)(d.Zap,{size:18,fill:"currentColor",className:"opacity-90"})})]}),(0,s.jsx)("p",{className:"text-slate-500 text-xs leading-relaxed mb-8 font-light min-h-[40px]",children:t.description}),(0,s.jsxs)("div",{className:"mb-8 flex items-baseline gap-1 text-slate-900",children:[(0,s.jsxs)("span",{className:"text-4xl md:text-5xl font-semibold tracking-tight",children:["₹",a]}),(0,s.jsx)("span",{className:"text-sm text-slate-400 font-medium",children:"/ month"}),"yearly"===e&&a>0&&(0,s.jsx)("span",{className:"block text-[10px] text-emerald-600 font-semibold ml-2",children:"(Billed annually)"})]}),(0,s.jsx)("div",{className:"h-px bg-slate-100 w-full mb-8"}),(0,s.jsx)("ul",{className:"space-y-4 mb-10",children:t.features.map((e,r)=>(0,s.jsxs)("li",{className:"flex items-start gap-3",children:[(0,s.jsx)("div",{className:`mt-0.5 rounded-full p-0.5 shrink-0 ${t.popular?"bg-indigo-50 text-indigo-500":"bg-slate-100 text-slate-400"}`,children:(0,s.jsx)(o.Check,{size:12,className:"stroke-[3]"})}),(0,s.jsx)("span",{className:"text-slate-600 text-xs font-normal leading-relaxed",children:e})]},r))})]}),(0,s.jsx)(n.default,{href:t.buttonHref,className:"w-full",children:(0,s.jsx)("button",{className:`w-full py-4 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${t.theme.btnClass}`,children:t.buttonText})})]},t.id)})})}),(0,s.jsx)("section",{className:"max-w-5xl mx-auto px-6 mb-24",children:(0,s.jsxs)("div",{className:"bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/80 shadow-lg shadow-slate-100/40",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none"}),(0,s.jsxs)("div",{className:"relative z-10 max-w-xl text-center md:text-left",children:[(0,s.jsx)("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100/60 rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-4",children:"Enterprise Solutions"}),(0,s.jsx)("h3",{className:"text-2xl font-bold text-slate-900 mb-3",children:"Looking to hire scale developers?"}),(0,s.jsx)("p",{className:"text-slate-500 text-xl leading-relaxed font-light",children:"Get custom recruiting packages, automated ATS matching pipelines, candidate assessments, and dedicated recruitment success managers for your business."})]}),(0,s.jsx)("div",{className:"relative z-10 shrink-0",children:(0,s.jsx)(n.default,{href:"/legal/contact",children:(0,s.jsx)("button",{className:"px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold tracking-wider uppercase shadow-md shadow-indigo-100/40 transition-all cursor-pointer",children:"Contact Enterprise Sales"})})})]})}),(0,s.jsxs)("section",{className:"max-w-4xl mx-auto px-6",children:[(0,s.jsxs)("h2",{className:"text-3xl font-light text-slate-800 tracking-tight text-center mb-12",children:["Frequently Asked ",(0,s.jsx)("span",{className:"font-semibold text-slate-900",children:"Questions"})]}),(0,s.jsx)("div",{className:"space-y-4",children:tk.map((e,t)=>(0,s.jsxs)("div",{className:"bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300",children:[(0,s.jsxs)("button",{onClick:()=>m(g===t?null:t),className:"w-full flex items-center justify-between p-6 text-left focus:outline-none","aria-expanded":g===t,children:[(0,s.jsx)("span",{className:"text-sm font-semibold text-slate-800 pr-4",children:e.q}),(0,s.jsx)(h.ChevronDown,{size:16,className:`text-slate-400 transition-transform duration-300 shrink-0 ${g===t?"rotate-180":""}`})]}),g===t&&(0,s.jsx)("div",{className:"px-6 pb-6 pt-0 border-t border-slate-50",children:(0,s.jsx)("p",{className:"text-slate-500 text-xs leading-relaxed font-light pt-4",children:e.a})})]},t))})]})]}),(0,s.jsx)(p.default,{})]})}e.s(["default",()=>tC],6841)}]);