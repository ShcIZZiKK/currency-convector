(function(){"use strict";var e={2608:function(e,t,r){var n=r(9242),l=r(1020),a=r(3396);const u={class:"main"};function o(e,t){const r=(0,a.up)("router-link"),n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("nav",null,[(0,a.Wm)(r,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Список валют")])),_:1}),(0,a.Wm)(r,{to:"/convert"},{default:(0,a.w5)((()=>[(0,a.Uk)("Конвертер")])),_:1})]),(0,a.Wm)(n)])}var c=r(89);const s={},i=(0,c.Z)(s,[["render",o]]);var d=i;const v={rounding(e,t){return Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}};var _=v,f=r(2483);function g(e,t,r,n,l,u){const o=(0,a.up)("ConverterView");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o)])}var p=r(7139);const h=e=>((0,a.dD)("data-v-7f4819da"),e=e(),(0,a.Cn)(),e),m={class:"converter container"},V=h((()=>(0,a._)("h1",null,"Произошла не предвиденная ошибка",-1))),w=h((()=>(0,a._)("p",null,"Попробуйте зайти попозже",-1))),C={key:1,class:"converter__wrapper"},y={class:"converter__column"},D=h((()=>(0,a._)("div",{class:"converter__label"},"Выберите валюту",-1))),b=["value"],x={class:"converter__input-box"},k={key:0,class:"converter__input-box-rate"},F={class:"converter__column converter__column_position-middle"},T={class:"converter__column"},L=h((()=>(0,a._)("div",{class:"converter__label"},"Выберите валюту",-1))),R=["value"],I={class:"converter__input-box"},S={key:0,class:"converter__input-box-rate"};function $(e,t,r,l,u,o){const c=(0,a.up)("ErrorBlock"),s=(0,a.up)("ArrowIcon");return(0,a.wg)(),(0,a.iD)("div",m,[e.isError?((0,a.wg)(),(0,a.j4)(c,{key:0},{title:(0,a.w5)((()=>[V])),text:(0,a.w5)((()=>[w])),_:1})):((0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",y,[D,(0,a.wy)((0,a._)("select",{class:"converter__select","onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedLeft=t)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.allValute,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.ID,value:e.ID},(0,p.zw)(e.Name),9,b)))),128))],512),[[n.bM,e.selectedLeft]]),(0,a._)("div",x,[(0,a.wy)((0,a._)("input",{class:"converter__input-box-input","onUpdate:modelValue":t[1]||(t[1]=t=>e.inputValuteFrom=t),maxlength:"12"},null,512),[[n.nr,e.inputValuteFrom]]),e.textValuteFrom?((0,a.wg)(),(0,a.iD)("div",k,(0,p.zw)(e.textValuteFrom),1)):(0,a.kq)("",!0)])]),(0,a._)("div",F,[(0,a._)("button",{class:"converter__flip",onClick:t[2]||(t[2]=(...t)=>e.swapValute&&e.swapValute(...t))},[(0,a.Wm)(s)])]),(0,a._)("div",T,[L,(0,a.wy)((0,a._)("select",{class:"converter__select","onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedRight=t)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.allValute,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.ID,value:e.ID},(0,p.zw)(e.Name),9,R)))),128))],512),[[n.bM,e.selectedRight]]),(0,a._)("div",I,[(0,a.wy)((0,a._)("input",{class:"converter__input-box-input","onUpdate:modelValue":t[4]||(t[4]=t=>e.inputValuteTo=t),disabled:""},null,512),[[n.nr,e.inputValuteTo]]),e.textValuteTo?((0,a.wg)(),(0,a.iD)("div",S,(0,p.zw)(e.textValuteTo),1)):(0,a.kq)("",!0)])])]))])}var Z=r(4870),M=r(7327);class H{}(0,M.Z)(H,"convertValute",void 0);class O extends H{static convertValute(e,t,r=1,n=1){const l=e/r/(t/n),a=t/n/(e/r);return{from:l,to:a}}}var Q=O;const j=(0,l.Q_)("converter",{state:()=>({selectedLeft:"",selectedRight:""}),getters:{getSelected(e){return{from:e.selectedLeft,to:e.selectedRight}},getConvertValute(e){const t=z();if(!t.getValute.length)return null;const r={from:null,to:null},n=t.getValute.find((t=>t.ID===e.selectedLeft)),l=t.getValute.find((t=>t.ID===e.selectedRight));if(n&&l){const{from:e,to:t}=Q.convertValute(n.Value,l.Value,n.Nominal,l.Nominal);r.from={...n,CurrencyRateFrom:e,CurrencyRateTo:t},r.to={...l,CurrencyRateFrom:t,CurrencyRateTo:e}}return r}},actions:{changeSelectedLeftValute(e){this.selectedLeft=e},changeSelectedRightValute(e){this.selectedRight=e},swapValute(){const e=this.selectedRight;this.selectedRight=this.selectedLeft,this.selectedLeft=e}}});r(7658);var E=r(4311);const z=(0,l.Q_)("valute",{state:()=>({valute:[],selectedValute:""}),getters:{getValute(e){return e.valute},getSelectedCurrency(e){return e.valute.find((t=>t.ID===e.selectedValute))},getCalculatedValute(e){if(!this.getSelectedCurrency)return[];const{ID:t,Value:r,Nominal:n}=this.getSelectedCurrency;return e.valute.reduce(((e,l)=>{if(l.ID!==t){const{from:t,to:a}=Q.convertValute(r,l.Value,n,l.Nominal);e.push({...l,CurrencyRateFrom:t,CurrencyRateTo:a,Increased:(l.Value-l.Previous)/l.Nominal})}return e}),[])}},actions:{async fetchValute(){await E.Z.get("https://www.cbr-xml-daily.ru/daily_json.js").then((e=>{this.valute=Object.keys(e.data.Valute).map((t=>e.data.Valute[t]))})).catch((e=>{throw new Error(`Ошибка получения данных в fetchValute ${e}`)}))},setSelectedValute(e){this.selectedValute=e}}});function N(){const e=j(),t=(0,a.Fl)((()=>e.getConvertValute)),r=(0,Z.iH)(0),n=(0,Z.iH)(0),l=(0,a.Fl)((()=>{if(t.value?.from&&t.value?.to){const e=`1 ${t.value.from.CharCode}`,r=_.rounding(t.value.to.CurrencyRateTo,4),n=`${r} ${t.value.to.CharCode}`;return`${e} = ${n}`}return""})),u=(0,a.Fl)((()=>{if(t.value?.from&&t.value?.to){const e=`1 ${t.value.to.CharCode}`,r=_.rounding(t.value.from.CurrencyRateTo,4),n=`${r} ${t.value.from.CharCode}`;return`${e} = ${n}`}return""})),o=e=>{const r=t.value?.to?.CurrencyRateTo||1;n.value=_.rounding(e*r,4)};return(0,a.YP)(t,(e=>{e&&o(r.value)})),(0,a.YP)(r,(e=>{o(e)})),(0,a.bv)((()=>{r.value=1})),{textValuteFrom:l,textValuteTo:u,inputValuteFrom:r,inputValuteTo:n}}function U(){const e=j(),t=(0,a.Fl)((()=>e.getConvertValute)),r=(0,a.Fl)({get(){return e.getSelected.from},set(t){e.changeSelectedLeftValute(t)}}),n=(0,a.Fl)({get(){return e.getSelected.to},set(t){e.changeSelectedRightValute(t)}}),l=()=>{e.swapValute()};return{convertValute:t,selectedLeft:r,selectedRight:n,swapValute:l}}function P(e){const t=z(),r=j(),n=(0,a.Fl)((()=>t.getValute)),l=()=>{r.changeSelectedLeftValute(n.value[0]?.ID||"R01235"),r.changeSelectedRightValute(n.value[1]?.ID||"R01239")};return(0,a.bv)((async()=>{if(n.value.length)l();else try{await t.fetchValute(),l()}catch(r){e(),console.error(r)}})),{allValute:n}}const W={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B=(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.7497 2.47968C17.0426 2.18679 17.5174 2.18679 17.8103 2.47968L21.5303 6.19965C21.671 6.3403 21.75 6.53106 21.75 6.72998C21.75 6.92889 21.671 7.11966 21.5303 7.26031L17.8103 10.9803C17.5174 11.2732 17.0426 11.2732 16.7497 10.9803C16.4568 10.6874 16.4568 10.2126 16.7497 9.91967L19.9393 6.72998L16.7497 3.54034C16.4568 3.24745 16.4568 2.77258 16.7497 2.47968Z",fill:"#292D32"},null,-1),Y=(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.25 6.72998C2.25 6.31577 2.58579 5.97998 3 5.97998H21C21.4142 5.97998 21.75 6.31577 21.75 6.72998C21.75 7.14419 21.4142 7.47998 21 7.47998H3C2.58579 7.47998 2.25 7.14419 2.25 6.72998Z",fill:"#292D32"},null,-1),K=(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.2503 13.0197C7.54319 13.3125 7.54319 13.7874 7.2503 14.0803L4.06066 17.27L7.2503 20.4597C7.54319 20.7526 7.54319 21.2274 7.2503 21.5203C6.9574 21.8132 6.48253 21.8132 6.18964 21.5203L2.46967 17.8003C2.17678 17.5074 2.17678 17.0326 2.46967 16.7397L6.18964 13.0197C6.48253 12.7268 6.9574 12.7268 7.2503 13.0197Z",fill:"#292D32"},null,-1),A=(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.25 17.27C2.25 16.8558 2.58579 16.52 3 16.52H21C21.4142 16.52 21.75 16.8558 21.75 17.27C21.75 17.6842 21.4142 18.02 21 18.02H3C2.58579 18.02 2.25 17.6842 2.25 17.27Z",fill:"#292D32"},null,-1),q=[B,Y,K,A];function G(e,t,r,n,l,u){return(0,a.wg)(),(0,a.iD)("svg",W,q)}var J=(0,a.aZ)({name:"ArrowIcon"});const X=(0,c.Z)(J,[["render",G]]);var ee=X;const te={class:"error-block"};function re(e,t,r,n,l,u){return(0,a.wg)(),(0,a.iD)("div",te,[(0,a.WI)(e.$slots,"title",{},void 0,!0),(0,a.WI)(e.$slots,"text",{},void 0,!0)])}var ne=(0,a.aZ)({name:"ErrorBlock"});const le=(0,c.Z)(ne,[["render",re],["__scopeId","data-v-b27ff4a4"]]);var ae=le,ue=(0,a.aZ)({name:"ConverterView",components:{ArrowIcon:ee,ErrorBlock:ae},setup(){const e=(0,Z.iH)(!1),t=()=>{e.value=!0},{allValute:r}=P(t),{convertValute:n,selectedLeft:l,selectedRight:a,swapValute:u}=U(),{textValuteFrom:o,textValuteTo:c,inputValuteFrom:s,inputValuteTo:i}=N();return{isError:e,allValute:r,convertValute:n,textValuteFrom:o,textValuteTo:c,inputValuteFrom:s,inputValuteTo:i,selectedLeft:l,selectedRight:a,swapValute:u}}});const oe=(0,c.Z)(ue,[["render",$],["__scopeId","data-v-7f4819da"]]);var ce=oe,se=(0,a.aZ)({name:"ConvertPage",components:{ConverterView:ce}});const ie=(0,c.Z)(se,[["render",g]]);var de=ie;function ve(e,t,r,n,l,u){const o=(0,a.up)("CurrenciesList");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o)])}const _e=e=>((0,a.dD)("data-v-a9b6d0d4"),e=e(),(0,a.Cn)(),e),fe={class:"currencies-list container"},ge=_e((()=>(0,a._)("h1",null,"Произошла не предвиденная ошибка",-1))),pe=_e((()=>(0,a._)("p",null,"Попробуйте зайти попозже",-1))),he={class:"currencies-list__header"},me={class:"currencies-list__navigation"},Ve=_e((()=>(0,a._)("div",{class:"currencies-list__navigation-title"},"Выберите валюту",-1))),we=["value"],Ce={class:"currencies-list__filter"},ye=_e((()=>(0,a._)("label",{class:"currencies-list__filter-title"}," Поиск по имени/коду: ",-1))),De={key:0,class:"currencies-list__items"},be=_e((()=>(0,a._)("li",{class:"currencies-list__item currencies-list__item_header"},[(0,a._)("span",null,"Валюта"),(0,a._)("span",null,"Код"),(0,a._)("span",null,"Соотношение"),(0,a._)("span",null,"Прогресс")],-1))),xe={class:"currencies-list__item-valute"},ke={class:"currencies-list__item-code"},Fe={class:"currencies-list__item-from"},Te={class:"currencies-list__item-to"},Le={key:1,class:"currencies-list__empty"},Re=_e((()=>(0,a._)("br",null,null,-1)));function Ie(e,t,r,l,u,o){const c=(0,a.up)("ErrorBlock");return(0,a.wg)(),(0,a.iD)("div",fe,[e.isError?((0,a.wg)(),(0,a.j4)(c,{key:0},{title:(0,a.w5)((()=>[ge])),text:(0,a.w5)((()=>[pe])),_:1})):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("div",he,[(0,a._)("div",me,[Ve,(0,a.wy)((0,a._)("select",{class:"currencies-list__navigation-select","onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.valute,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.ID,value:e.ID},(0,p.zw)(e.Name),9,we)))),128))],512),[[n.bM,e.selected]])]),(0,a._)("div",Ce,[ye,(0,a.wy)((0,a._)("input",{class:"currencies-list__filter-input",type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.searchQuery=t)},null,512),[[n.nr,e.searchQuery,void 0,{trim:!0}]])])]),e.valuteMatchingSearchQuery.length?((0,a.wg)(),(0,a.iD)("ul",De,[be,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.valuteMatchingSearchQuery,(t=>((0,a.wg)(),(0,a.iD)("li",{class:"currencies-list__item",key:t.ID},[(0,a._)("span",xe,(0,p.zw)(t.Name),1),(0,a._)("span",ke,(0,p.zw)(t.CharCode),1),(0,a._)("span",Fe,(0,p.zw)(e.getTextValuteFrom(t)),1),(0,a._)("span",Te,(0,p.zw)(e.getTextValuteTo(t)),1),(0,a._)("span",{class:(0,p.C_)(["currencies-list__item-status","currencies-list__item-status_"+(t.Increased>0?"green":"red")])},(0,p.zw)(Math.abs(e.$filters.rounding(t.Increased,4))),3)])))),128))])):((0,a.wg)(),(0,a.iD)("div",Le,[(0,a.Uk)(" Подходящих валют нет."),Re,(0,a.Uk)(" Попробуйте изменить параметры фильтров. ")]))],64))])}function Se(e){const t=z(),r=(0,a.Fl)((()=>t.getValute)),n=(0,a.Fl)((()=>t.getSelectedCurrency)),l=(0,a.Fl)({get(){return n.value?.ID||""},set(e){t.setSelectedValute(e)}}),u=()=>{t.setSelectedValute(r.value[0]?.ID||"R01235")},o=e=>{if(n.value){const t=_.rounding(e.CurrencyRateFrom,4);return`1 ${e.CharCode} - ${t} ${n.value.CharCode}`}return""},c=e=>{if(n.value){const t=_.rounding(e.CurrencyRateTo,4);return`1 ${n.value.CharCode} - ${t} ${e.CharCode}`}return""};return(0,a.bv)((async()=>{if(r.value.length)u();else try{await t.fetchValute(),u()}catch(n){e(),console.error(n)}})),{valute:r,selectedCurrency:n,selected:l,getTextValuteFrom:o,getTextValuteTo:c}}function $e(){const e=(0,Z.iH)(""),t=z(),r=(0,a.Fl)((()=>t.getCalculatedValute)),n=(0,a.Fl)((()=>r.value.filter((t=>{const r=e.value.trim().toLowerCase(),n=t.Name.trim().toLowerCase(),l=t.CharCode.trim().toLowerCase();return n.includes(r)||l.includes(r)}))));return{searchQuery:e,valuteMatchingSearchQuery:n}}var Ze=(0,a.aZ)({name:"CurrenciesList",components:{ErrorBlock:ae},setup(){const e=(0,Z.iH)(!1),t=()=>{e.value=!0},{selected:r,selectedCurrency:n,valute:l,getTextValuteFrom:a,getTextValuteTo:u}=Se(t),{searchQuery:o,valuteMatchingSearchQuery:c}=$e();return{isError:e,valute:l,selectedCurrency:n,selected:r,searchQuery:o,valuteMatchingSearchQuery:c,getTextValuteFrom:a,getTextValuteTo:u}}});const Me=(0,c.Z)(Ze,[["render",Ie],["__scopeId","data-v-a9b6d0d4"]]);var He=Me,Oe=(0,a.aZ)({name:"HomePage",components:{CurrenciesList:He}});const Qe=(0,c.Z)(Oe,[["render",ve]]);var je=Qe;const Ee=[{path:"/",name:"home",component:je},{path:"/convert",name:"convert",component:de}],ze=(0,f.p7)({history:(0,f.PO)("/currency-convector/"),routes:Ee});var Ne=ze;const Ue=(0,l.WB)(),Pe=(0,n.ri)(d);Pe.config.globalProperties.$filters=_,Pe.use(Ue),Pe.use(Ne),Pe.mount("#app")}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,l,a){if(!n){var u=1/0;for(i=0;i<e.length;i++){n=e[i][0],l=e[i][1],a=e[i][2];for(var o=!0,c=0;c<n.length;c++)(!1&a||u>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(o=!1,a<u&&(u=a));if(o){e.splice(i--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,l,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,u=n[0],o=n[1],c=n[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(c)var i=c(r)}for(t&&t(n);s<u.length;s++)a=u[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(i)},n=self["webpackChunkcurrency_convector"]=self["webpackChunkcurrency_convector"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2608)}));n=r.O(n)})();
//# sourceMappingURL=app.ed4906b7.js.map