//dojoConfig.js
//>>built
(function initDojoConfig(){
var _1=window.localStorage;
var _2={};
window.localStorageWrapper={setItem:function(_3,_4){
try{
_2[_3]=_4;
_1.setItem(_3,_4);
}
catch(e){
console.error("LS.set key="+_3,e);
try{
if(!_1.getItem("__ls_cleanup_done")){
for(var i=0;i<_1.length;i++){
var _5=_1.key(i);
if(_5.indexOf("desktop_app_session")===-1){
_1.removeItem(_5);
}
}
_1.setItem("__ls_cleanup_done",+new Date());
console.error("cleanup complete on LS exception");
}
}
catch(e){
}
}
},getItem:function(_6){
try{
return _1.getItem(_6);
}
catch(e){
return _2[_6];
}
},removeItem:function(_7){
try{
delete _2.key;
_1.removeItem(_7);
}
catch(e){
}
},clear:function(){
try{
_2={};
_1.clear();
}
catch(e){
}
},length:function(){
try{
return _1.length;
}
catch(e){
}
},key:function(_8){
try{
return _1.key(_8);
}
catch(e){
}
}};
function _9(){
var _a;
if(_a=window.location.search.match(/locale=([\w\-]+)/)){
return _a[1];
}else{
if(_a=window.location.hash.match(/locale=([\w\-]+)/)){
return _a[1];
}else{
if(window.location.search.indexOf("?state")===0){
if(_a=decodeURIComponent(window.location.search).match(/locale=([\w\-]+)/)){
return _a[1];
}
}
}
}
};
function _b(){
var _c=[];
var _d=_9();
var _e;
try{
_e=window.localStorageWrapper.getItem("locale");
}
catch(e){
console.error("Exception in getting locale from LS ",e);
}
var _f=window.navigator.language||window.navigator.userLanguage;
if(_d){
_c.push(_d);
}
if(_e){
_c.push(_e);
}
if(window.navigator.languages){
_c.concat(window.navigator.languages);
}
_c.push(_f);
return _c;
};
function _10(_11){
var _12=["en-US","es-MX","es","en-GB","pt-br"],_13=_12.map(function(_14){
return _14.toLowerCase();
}),_15;
_11.forEach(function(l){
if(!_15){
if(l==="pt"){
_15="pt-br";
}else{
var pos,_16=(l+"").toLowerCase();
if((pos=_13.indexOf(_16))!==-1){
_15=_12[pos];
}else{
var _17=_16.split("-")[0];
if((pos=_13.indexOf(_17))!==-1){
_15=_12[pos];
}
}
}
}
});
return _15||"en-US";
};
var _18=_10(_b());
try{
window.localStorageWrapper.setItem("locale",_18);
}
catch(e){
console.log("Exception in setting locale in LS",e);
}
window.dojoConfig={has:{"host-node":false},locale:_18.toLowerCase(),packages:[{name:"bridge",location:"../../bridge"},{name:"kernel",location:"../../kernel"},{name:"hydra",location:"../../../../../hydra/src/js/hydra"},{name:"talkto_util",location:"../../../../../client_base/util"},{name:"widgets",location:"../../../../../client_base/widgets"},{name:"shell",location:"../../../../../client_base/apps/shell"},{name:"conversation",location:"../../../../../client_base/apps/conversation"},{name:"group_conversation",location:"../../../../../client_base/apps/group_conversation"},{name:"base_host",location:"../../../../../client_base/host"},{name:"talktolibs",location:"../../talktolibs"}]};
window.dojoConfig.has["dojo-test-sniff"]=false;
})();

//underscore.js
//>>built
(function(){
var _1=this;
var _2=_1._;
var _3=Array.prototype,_4=Object.prototype,_5=Function.prototype;
var _6=_3.push,_7=_3.slice,_8=_4.toString,_9=_4.hasOwnProperty;
var _a=Array.isArray,_b=Object.keys,_c=_5.bind,_d=Object.create;
var _e=function(){
};
var _f=function(obj){
if(obj instanceof _f){
return obj;
}
if(!(this instanceof _f)){
return new _f(obj);
}
this._wrapped=obj;
};
if(typeof exports!=="undefined"){
if(typeof module!=="undefined"&&module.exports){
exports=module.exports=_f;
}
exports._=_f;
}else{
_1._=_f;
}
_f.VERSION="1.8.3";
var _10=function(_11,_12,_13){
if(_12===void 0){
return _11;
}
switch(_13==null?3:_13){
case 1:
return function(_14){
return _11.call(_12,_14);
};
case 2:
return function(_15,_16){
return _11.call(_12,_15,_16);
};
case 3:
return function(_17,_18,_19){
return _11.call(_12,_17,_18,_19);
};
case 4:
return function(_1a,_1b,_1c,_1d){
return _11.call(_12,_1a,_1b,_1c,_1d);
};
}
return function(){
return _11.apply(_12,arguments);
};
};
var cb=function(_1e,_1f,_20){
if(_1e==null){
return _f.identity;
}
if(_f.isFunction(_1e)){
return _10(_1e,_1f,_20);
}
if(_f.isObject(_1e)){
return _f.matcher(_1e);
}
return _f.property(_1e);
};
_f.iteratee=function(_21,_22){
return cb(_21,_22,Infinity);
};
var _23=function(_24,_25){
return function(obj){
var _26=arguments.length;
if(_26<2||obj==null){
return obj;
}
for(var _27=1;_27<_26;_27++){
var _28=arguments[_27],_29=_24(_28),l=_29.length;
for(var i=0;i<l;i++){
var key=_29[i];
if(!_25||obj[key]===void 0){
obj[key]=_28[key];
}
}
}
return obj;
};
};
var _2a=function(_2b){
if(!_f.isObject(_2b)){
return {};
}
if(_d){
return _d(_2b);
}
_e.prototype=_2b;
var _2c=new _e;
_e.prototype=null;
return _2c;
};
var _2d=function(key){
return function(obj){
return obj==null?void 0:obj[key];
};
};
var _2e=Math.pow(2,53)-1;
var _2f=_2d("length");
var _30=function(_31){
var _32=_2f(_31);
return typeof _32=="number"&&_32>=0&&_32<=_2e;
};
_f.each=_f.forEach=function(obj,_33,_34){
_33=_10(_33,_34);
var i,_35;
if(_30(obj)){
for(i=0,_35=obj.length;i<_35;i++){
_33(obj[i],i,obj);
}
}else{
var _36=_f.keys(obj);
for(i=0,_35=_36.length;i<_35;i++){
_33(obj[_36[i]],_36[i],obj);
}
}
return obj;
};
_f.map=_f.collect=function(obj,_37,_38){
_37=cb(_37,_38);
var _39=!_30(obj)&&_f.keys(obj),_3a=(_39||obj).length,_3b=Array(_3a);
for(var _3c=0;_3c<_3a;_3c++){
var _3d=_39?_39[_3c]:_3c;
_3b[_3c]=_37(obj[_3d],_3d,obj);
}
return _3b;
};
function _3e(dir){
function _3f(obj,_40,_41,_42,_43,_44){
for(;_43>=0&&_43<_44;_43+=dir){
var _45=_42?_42[_43]:_43;
_41=_40(_41,obj[_45],_45,obj);
}
return _41;
};
return function(obj,_46,_47,_48){
_46=_10(_46,_48,4);
var _49=!_30(obj)&&_f.keys(obj),_4a=(_49||obj).length,_4b=dir>0?0:_4a-1;
if(arguments.length<3){
_47=obj[_49?_49[_4b]:_4b];
_4b+=dir;
}
return _3f(obj,_46,_47,_49,_4b,_4a);
};
};
_f.reduce=_f.foldl=_f.inject=_3e(1);
_f.reduceRight=_f.foldr=_3e(-1);
_f.find=_f.detect=function(obj,_4c,_4d){
var key;
if(_30(obj)){
key=_f.findIndex(obj,_4c,_4d);
}else{
key=_f.findKey(obj,_4c,_4d);
}
if(key!==void 0&&key!==-1){
return obj[key];
}
};
_f.filter=_f.select=function(obj,_4e,_4f){
var _50=[];
_4e=cb(_4e,_4f);
_f.each(obj,function(_51,_52,_53){
if(_4e(_51,_52,_53)){
_50.push(_51);
}
});
return _50;
};
_f.reject=function(obj,_54,_55){
return _f.filter(obj,_f.negate(cb(_54)),_55);
};
_f.every=_f.all=function(obj,_56,_57){
_56=cb(_56,_57);
var _58=!_30(obj)&&_f.keys(obj),_59=(_58||obj).length;
for(var _5a=0;_5a<_59;_5a++){
var _5b=_58?_58[_5a]:_5a;
if(!_56(obj[_5b],_5b,obj)){
return false;
}
}
return true;
};
_f.some=_f.any=function(obj,_5c,_5d){
_5c=cb(_5c,_5d);
var _5e=!_30(obj)&&_f.keys(obj),_5f=(_5e||obj).length;
for(var _60=0;_60<_5f;_60++){
var _61=_5e?_5e[_60]:_60;
if(_5c(obj[_61],_61,obj)){
return true;
}
}
return false;
};
_f.contains=_f.includes=_f.include=function(obj,_62,_63,_64){
if(!_30(obj)){
obj=_f.values(obj);
}
if(typeof _63!="number"||_64){
_63=0;
}
return _f.indexOf(obj,_62,_63)>=0;
};
_f.invoke=function(obj,_65){
var _66=_7.call(arguments,2);
var _67=_f.isFunction(_65);
return _f.map(obj,function(_68){
var _69=_67?_65:_68[_65];
return _69==null?_69:_69.apply(_68,_66);
});
};
_f.pluck=function(obj,key){
return _f.map(obj,_f.property(key));
};
_f.where=function(obj,_6a){
return _f.filter(obj,_f.matcher(_6a));
};
_f.findWhere=function(obj,_6b){
return _f.find(obj,_f.matcher(_6b));
};
_f.max=function(obj,_6c,_6d){
var _6e=-Infinity,_6f=-Infinity,_70,_71;
if(_6c==null&&obj!=null){
obj=_30(obj)?obj:_f.values(obj);
for(var i=0,_72=obj.length;i<_72;i++){
_70=obj[i];
if(_70>_6e){
_6e=_70;
}
}
}else{
_6c=cb(_6c,_6d);
_f.each(obj,function(_73,_74,_75){
_71=_6c(_73,_74,_75);
if(_71>_6f||_71===-Infinity&&_6e===-Infinity){
_6e=_73;
_6f=_71;
}
});
}
return _6e;
};
_f.min=function(obj,_76,_77){
var _78=Infinity,_79=Infinity,_7a,_7b;
if(_76==null&&obj!=null){
obj=_30(obj)?obj:_f.values(obj);
for(var i=0,_7c=obj.length;i<_7c;i++){
_7a=obj[i];
if(_7a<_78){
_78=_7a;
}
}
}else{
_76=cb(_76,_77);
_f.each(obj,function(_7d,_7e,_7f){
_7b=_76(_7d,_7e,_7f);
if(_7b<_79||_7b===Infinity&&_78===Infinity){
_78=_7d;
_79=_7b;
}
});
}
return _78;
};
_f.shuffle=function(obj){
var set=_30(obj)?obj:_f.values(obj);
var _80=set.length;
var _81=Array(_80);
for(var _82=0,_83;_82<_80;_82++){
_83=_f.random(0,_82);
if(_83!==_82){
_81[_82]=_81[_83];
}
_81[_83]=set[_82];
}
return _81;
};
_f.sample=function(obj,n,_84){
if(n==null||_84){
if(!_30(obj)){
obj=_f.values(obj);
}
return obj[_f.random(obj.length-1)];
}
return _f.shuffle(obj).slice(0,Math.max(0,n));
};
_f.sortBy=function(obj,_85,_86){
_85=cb(_85,_86);
return _f.pluck(_f.map(obj,function(_87,_88,_89){
return {value:_87,index:_88,criteria:_85(_87,_88,_89)};
}).sort(function(_8a,_8b){
var a=_8a.criteria;
var b=_8b.criteria;
if(a!==b){
if(a>b||a===void 0){
return 1;
}
if(a<b||b===void 0){
return -1;
}
}
return _8a.index-_8b.index;
}),"value");
};
var _8c=function(_8d){
return function(obj,_8e,_8f){
var _90={};
_8e=cb(_8e,_8f);
_f.each(obj,function(_91,_92){
var key=_8e(_91,_92,obj);
_8d(_90,_91,key);
});
return _90;
};
};
_f.groupBy=_8c(function(_93,_94,key){
if(_f.has(_93,key)){
_93[key].push(_94);
}else{
_93[key]=[_94];
}
});
_f.indexBy=_8c(function(_95,_96,key){
_95[key]=_96;
});
_f.countBy=_8c(function(_97,_98,key){
if(_f.has(_97,key)){
_97[key]++;
}else{
_97[key]=1;
}
});
_f.toArray=function(obj){
if(!obj){
return [];
}
if(_f.isArray(obj)){
return _7.call(obj);
}
if(_30(obj)){
return _f.map(obj,_f.identity);
}
return _f.values(obj);
};
_f.size=function(obj){
if(obj==null){
return 0;
}
return _30(obj)?obj.length:_f.keys(obj).length;
};
_f.partition=function(obj,_99,_9a){
_99=cb(_99,_9a);
var _9b=[],_9c=[];
_f.each(obj,function(_9d,key,obj){
(_99(_9d,key,obj)?_9b:_9c).push(_9d);
});
return [_9b,_9c];
};
_f.first=_f.head=_f.take=function(_9e,n,_9f){
if(_9e==null){
return void 0;
}
if(n==null||_9f){
return _9e[0];
}
return _f.initial(_9e,_9e.length-n);
};
_f.initial=function(_a0,n,_a1){
return _7.call(_a0,0,Math.max(0,_a0.length-(n==null||_a1?1:n)));
};
_f.last=function(_a2,n,_a3){
if(_a2==null){
return void 0;
}
if(n==null||_a3){
return _a2[_a2.length-1];
}
return _f.rest(_a2,Math.max(0,_a2.length-n));
};
_f.rest=_f.tail=_f.drop=function(_a4,n,_a5){
return _7.call(_a4,n==null||_a5?1:n);
};
_f.compact=function(_a6){
return _f.filter(_a6,_f.identity);
};
var _a7=function(_a8,_a9,_aa,_ab){
var _ac=[],idx=0;
for(var i=_ab||0,_ad=_2f(_a8);i<_ad;i++){
var _ae=_a8[i];
if(_30(_ae)&&(_f.isArray(_ae)||_f.isArguments(_ae))){
if(!_a9){
_ae=_a7(_ae,_a9,_aa);
}
var j=0,len=_ae.length;
_ac.length+=len;
while(j<len){
_ac[idx++]=_ae[j++];
}
}else{
if(!_aa){
_ac[idx++]=_ae;
}
}
}
return _ac;
};
_f.flatten=function(_af,_b0){
return _a7(_af,_b0,false);
};
_f.without=function(_b1){
return _f.difference(_b1,_7.call(arguments,1));
};
_f.uniq=_f.unique=function(_b2,_b3,_b4,_b5){
if(!_f.isBoolean(_b3)){
_b5=_b4;
_b4=_b3;
_b3=false;
}
if(_b4!=null){
_b4=cb(_b4,_b5);
}
var _b6=[];
var _b7=[];
for(var i=0,_b8=_2f(_b2);i<_b8;i++){
var _b9=_b2[i],_ba=_b4?_b4(_b9,i,_b2):_b9;
if(_b3){
if(!i||_b7!==_ba){
_b6.push(_b9);
}
_b7=_ba;
}else{
if(_b4){
if(!_f.contains(_b7,_ba)){
_b7.push(_ba);
_b6.push(_b9);
}
}else{
if(!_f.contains(_b6,_b9)){
_b6.push(_b9);
}
}
}
}
return _b6;
};
_f.union=function(){
return _f.uniq(_a7(arguments,true,true));
};
_f.intersection=function(_bb){
var _bc=[];
var _bd=arguments.length;
for(var i=0,_be=_2f(_bb);i<_be;i++){
var _bf=_bb[i];
if(_f.contains(_bc,_bf)){
continue;
}
for(var j=1;j<_bd;j++){
if(!_f.contains(arguments[j],_bf)){
break;
}
}
if(j===_bd){
_bc.push(_bf);
}
}
return _bc;
};
_f.difference=function(_c0){
var _c1=_a7(arguments,true,true,1);
return _f.filter(_c0,function(_c2){
return !_f.contains(_c1,_c2);
});
};
_f.zip=function(){
return _f.unzip(arguments);
};
_f.unzip=function(_c3){
var _c4=_c3&&_f.max(_c3,_2f).length||0;
var _c5=Array(_c4);
for(var _c6=0;_c6<_c4;_c6++){
_c5[_c6]=_f.pluck(_c3,_c6);
}
return _c5;
};
_f.object=function(_c7,_c8){
var _c9={};
for(var i=0,_ca=_2f(_c7);i<_ca;i++){
if(_c8){
_c9[_c7[i]]=_c8[i];
}else{
_c9[_c7[i][0]]=_c7[i][1];
}
}
return _c9;
};
function _cb(dir){
return function(_cc,_cd,_ce){
_cd=cb(_cd,_ce);
var _cf=_2f(_cc);
var _d0=dir>0?0:_cf-1;
for(;_d0>=0&&_d0<_cf;_d0+=dir){
if(_cd(_cc[_d0],_d0,_cc)){
return _d0;
}
}
return -1;
};
};
_f.findIndex=_cb(1);
_f.findLastIndex=_cb(-1);
_f.sortedIndex=function(_d1,obj,_d2,_d3){
_d2=cb(_d2,_d3,1);
var _d4=_d2(obj);
var low=0,_d5=_2f(_d1);
while(low<_d5){
var mid=Math.floor((low+_d5)/2);
if(_d2(_d1[mid])<_d4){
low=mid+1;
}else{
_d5=mid;
}
}
return low;
};
function _d6(dir,_d7,_d8){
return function(_d9,_da,idx){
var i=0,_db=_2f(_d9);
if(typeof idx=="number"){
if(dir>0){
i=idx>=0?idx:Math.max(idx+_db,i);
}else{
_db=idx>=0?Math.min(idx+1,_db):idx+_db+1;
}
}else{
if(_d8&&idx&&_db){
idx=_d8(_d9,_da);
return _d9[idx]===_da?idx:-1;
}
}
if(_da!==_da){
idx=_d7(_7.call(_d9,i,_db),_f.isNaN);
return idx>=0?idx+i:-1;
}
for(idx=dir>0?i:_db-1;idx>=0&&idx<_db;idx+=dir){
if(_d9[idx]===_da){
return idx;
}
}
return -1;
};
};
_f.indexOf=_d6(1,_f.findIndex,_f.sortedIndex);
_f.lastIndexOf=_d6(-1,_f.findLastIndex);
_f.range=function(_dc,_dd,_de){
if(_dd==null){
_dd=_dc||0;
_dc=0;
}
_de=_de||1;
var _df=Math.max(Math.ceil((_dd-_dc)/_de),0);
var _e0=Array(_df);
for(var idx=0;idx<_df;idx++,_dc+=_de){
_e0[idx]=_dc;
}
return _e0;
};
var _e1=function(_e2,_e3,_e4,_e5,_e6){
if(!(_e5 instanceof _e3)){
return _e2.apply(_e4,_e6);
}
var _e7=_2a(_e2.prototype);
var _e8=_e2.apply(_e7,_e6);
if(_f.isObject(_e8)){
return _e8;
}
return _e7;
};
_f.bind=function(_e9,_ea){
if(_c&&_e9.bind===_c){
return _c.apply(_e9,_7.call(arguments,1));
}
if(!_f.isFunction(_e9)){
throw new TypeError("Bind must be called on a function");
}
var _eb=_7.call(arguments,2);
var _ec=function(){
return _e1(_e9,_ec,_ea,this,_eb.concat(_7.call(arguments)));
};
return _ec;
};
_f.partial=function(_ed){
var _ee=_7.call(arguments,1);
var _ef=function(){
var _f0=0,_f1=_ee.length;
var _f2=Array(_f1);
for(var i=0;i<_f1;i++){
_f2[i]=_ee[i]===_f?arguments[_f0++]:_ee[i];
}
while(_f0<arguments.length){
_f2.push(arguments[_f0++]);
}
return _e1(_ed,_ef,this,this,_f2);
};
return _ef;
};
_f.bindAll=function(obj){
var i,_f3=arguments.length,key;
if(_f3<=1){
throw new Error("bindAll must be passed function names");
}
for(i=1;i<_f3;i++){
key=arguments[i];
obj[key]=_f.bind(obj[key],obj);
}
return obj;
};
_f.memoize=function(_f4,_f5){
var _f6=function(key){
var _f7=_f6.cache;
var _f8=""+(_f5?_f5.apply(this,arguments):key);
if(!_f.has(_f7,_f8)){
_f7[_f8]=_f4.apply(this,arguments);
}
return _f7[_f8];
};
_f6.cache={};
return _f6;
};
_f.delay=function(_f9,_fa){
var _fb=_7.call(arguments,2);
return setTimeout(function(){
return _f9.apply(null,_fb);
},_fa);
};
_f.defer=_f.partial(_f.delay,_f,1);
_f.throttle=function(_fc,_fd,_fe){
var _ff,args,_100;
var _101=null;
var _102=0;
if(!_fe){
_fe={};
}
var _103=function(){
_102=_fe.leading===false?0:_f.now();
_101=null;
_100=_fc.apply(_ff,args);
if(!_101){
_ff=args=null;
}
};
return function(){
var now=_f.now();
if(!_102&&_fe.leading===false){
_102=now;
}
var _104=_fd-(now-_102);
_ff=this;
args=arguments;
if(_104<=0||_104>_fd){
if(_101){
clearTimeout(_101);
_101=null;
}
_102=now;
_100=_fc.apply(_ff,args);
if(!_101){
_ff=args=null;
}
}else{
if(!_101&&_fe.trailing!==false){
_101=setTimeout(_103,_104);
}
}
return _100;
};
};
_f.debounce=function(func,wait,_105){
var _106,args,_107,_108,_109;
var _10a=function(){
var last=_f.now()-_108;
if(last<wait&&last>=0){
_106=setTimeout(_10a,wait-last);
}else{
_106=null;
if(!_105){
_109=func.apply(_107,args);
if(!_106){
_107=args=null;
}
}
}
};
return function(){
_107=this;
args=arguments;
_108=_f.now();
var _10b=_105&&!_106;
if(!_106){
_106=setTimeout(_10a,wait);
}
if(_10b){
_109=func.apply(_107,args);
_107=args=null;
}
return _109;
};
};
_f.wrap=function(func,_10c){
return _f.partial(_10c,func);
};
_f.negate=function(_10d){
return function(){
return !_10d.apply(this,arguments);
};
};
_f.compose=function(){
var args=arguments;
var _10e=args.length-1;
return function(){
var i=_10e;
var _10f=args[_10e].apply(this,arguments);
while(i--){
_10f=args[i].call(this,_10f);
}
return _10f;
};
};
_f.after=function(_110,func){
return function(){
if(--_110<1){
return func.apply(this,arguments);
}
};
};
_f.before=function(_111,func){
var memo;
return function(){
if(--_111>0){
memo=func.apply(this,arguments);
}
if(_111<=1){
func=null;
}
return memo;
};
};
_f.once=_f.partial(_f.before,2);
var _112=!{toString:null}.propertyIsEnumerable("toString");
var _113=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];
function _114(obj,keys){
var _115=_113.length;
var _116=obj.constructor;
var _117=(_f.isFunction(_116)&&_116.prototype)||_4;
var prop="constructor";
if(_f.has(obj,prop)&&!_f.contains(keys,prop)){
keys.push(prop);
}
while(_115--){
prop=_113[_115];
if(prop in obj&&obj[prop]!==_117[prop]&&!_f.contains(keys,prop)){
keys.push(prop);
}
}
};
_f.keys=function(obj){
if(!_f.isObject(obj)){
return [];
}
if(_b){
return _b(obj);
}
var keys=[];
for(var key in obj){
if(_f.has(obj,key)){
keys.push(key);
}
}
if(_112){
_114(obj,keys);
}
return keys;
};
_f.allKeys=function(obj){
if(!_f.isObject(obj)){
return [];
}
var keys=[];
for(var key in obj){
keys.push(key);
}
if(_112){
_114(obj,keys);
}
return keys;
};
_f.values=function(obj){
var keys=_f.keys(obj);
var _118=keys.length;
var _119=Array(_118);
for(var i=0;i<_118;i++){
_119[i]=obj[keys[i]];
}
return _119;
};
_f.mapObject=function(obj,_11a,_11b){
_11a=cb(_11a,_11b);
var keys=_f.keys(obj),_11c=keys.length,_11d={},_11e;
for(var _11f=0;_11f<_11c;_11f++){
_11e=keys[_11f];
_11d[_11e]=_11a(obj[_11e],_11e,obj);
}
return _11d;
};
_f.pairs=function(obj){
var keys=_f.keys(obj);
var _120=keys.length;
var _121=Array(_120);
for(var i=0;i<_120;i++){
_121[i]=[keys[i],obj[keys[i]]];
}
return _121;
};
_f.invert=function(obj){
var _122={};
var keys=_f.keys(obj);
for(var i=0,_123=keys.length;i<_123;i++){
_122[obj[keys[i]]]=keys[i];
}
return _122;
};
_f.functions=_f.methods=function(obj){
var _124=[];
for(var key in obj){
if(_f.isFunction(obj[key])){
_124.push(key);
}
}
return _124.sort();
};
_f.extend=_23(_f.allKeys);
_f.extendOwn=_f.assign=_23(_f.keys);
_f.findKey=function(obj,_125,_126){
_125=cb(_125,_126);
var keys=_f.keys(obj),key;
for(var i=0,_127=keys.length;i<_127;i++){
key=keys[i];
if(_125(obj[key],key,obj)){
return key;
}
}
};
_f.pick=function(_128,_129,_12a){
var _12b={},obj=_128,_12c,keys;
if(obj==null){
return _12b;
}
if(_f.isFunction(_129)){
keys=_f.allKeys(obj);
_12c=_10(_129,_12a);
}else{
keys=_a7(arguments,false,false,1);
_12c=function(_12d,key,obj){
return key in obj;
};
obj=Object(obj);
}
for(var i=0,_12e=keys.length;i<_12e;i++){
var key=keys[i];
var _12f=obj[key];
if(_12c(_12f,key,obj)){
_12b[key]=_12f;
}
}
return _12b;
};
_f.omit=function(obj,_130,_131){
if(_f.isFunction(_130)){
_130=_f.negate(_130);
}else{
var keys=_f.map(_a7(arguments,false,false,1),String);
_130=function(_132,key){
return !_f.contains(keys,key);
};
}
return _f.pick(obj,_130,_131);
};
_f.defaults=_23(_f.allKeys,true);
_f.create=function(_133,_134){
var _135=_2a(_133);
if(_134){
_f.extendOwn(_135,_134);
}
return _135;
};
_f.clone=function(obj){
if(!_f.isObject(obj)){
return obj;
}
return _f.isArray(obj)?obj.slice():_f.extend({},obj);
};
_f.tap=function(obj,_136){
_136(obj);
return obj;
};
_f.isMatch=function(_137,_138){
var keys=_f.keys(_138),_139=keys.length;
if(_137==null){
return !_139;
}
var obj=Object(_137);
for(var i=0;i<_139;i++){
var key=keys[i];
if(_138[key]!==obj[key]||!(key in obj)){
return false;
}
}
return true;
};
var eq=function(a,b,_13a,_13b){
if(a===b){
return a!==0||1/a===1/b;
}
if(a==null||b==null){
return a===b;
}
if(a instanceof _f){
a=a._wrapped;
}
if(b instanceof _f){
b=b._wrapped;
}
var _13c=_8.call(a);
if(_13c!==_8.call(b)){
return false;
}
switch(_13c){
case "[object RegExp]":
case "[object String]":
return ""+a===""+b;
case "[object Number]":
if(+a!==+a){
return +b!==+b;
}
return +a===0?1/+a===1/b:+a===+b;
case "[object Date]":
case "[object Boolean]":
return +a===+b;
}
var _13d=_13c==="[object Array]";
if(!_13d){
if(typeof a!="object"||typeof b!="object"){
return false;
}
var _13e=a.constructor,_13f=b.constructor;
if(_13e!==_13f&&!(_f.isFunction(_13e)&&_13e instanceof _13e&&_f.isFunction(_13f)&&_13f instanceof _13f)&&("constructor" in a&&"constructor" in b)){
return false;
}
}
_13a=_13a||[];
_13b=_13b||[];
var _140=_13a.length;
while(_140--){
if(_13a[_140]===a){
return _13b[_140]===b;
}
}
_13a.push(a);
_13b.push(b);
if(_13d){
_140=a.length;
if(_140!==b.length){
return false;
}
while(_140--){
if(!eq(a[_140],b[_140],_13a,_13b)){
return false;
}
}
}else{
var keys=_f.keys(a),key;
_140=keys.length;
if(_f.keys(b).length!==_140){
return false;
}
while(_140--){
key=keys[_140];
if(!(_f.has(b,key)&&eq(a[key],b[key],_13a,_13b))){
return false;
}
}
}
_13a.pop();
_13b.pop();
return true;
};
_f.isEqual=function(a,b){
return eq(a,b);
};
_f.isEmpty=function(obj){
if(obj==null){
return true;
}
if(_30(obj)&&(_f.isArray(obj)||_f.isString(obj)||_f.isArguments(obj))){
return obj.length===0;
}
return _f.keys(obj).length===0;
};
_f.isElement=function(obj){
return !!(obj&&obj.nodeType===1);
};
_f.isArray=_a||function(obj){
return _8.call(obj)==="[object Array]";
};
_f.isObject=function(obj){
var type=typeof obj;
return type==="function"||type==="object"&&!!obj;
};
_f.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(name){
_f["is"+name]=function(obj){
return _8.call(obj)==="[object "+name+"]";
};
});
if(!_f.isArguments(arguments)){
_f.isArguments=function(obj){
return _f.has(obj,"callee");
};
}
if(typeof /./!="function"&&typeof Int8Array!="object"){
_f.isFunction=function(obj){
return typeof obj=="function"||false;
};
}
_f.isFinite=function(obj){
return isFinite(obj)&&!isNaN(parseFloat(obj));
};
_f.isNaN=function(obj){
return _f.isNumber(obj)&&obj!==+obj;
};
_f.isBoolean=function(obj){
return obj===true||obj===false||_8.call(obj)==="[object Boolean]";
};
_f.isNull=function(obj){
return obj===null;
};
_f.isUndefined=function(obj){
return obj===void 0;
};
_f.has=function(obj,key){
return obj!=null&&_9.call(obj,key);
};
_f.noConflict=function(){
_1._=_2;
return this;
};
_f.identity=function(_141){
return _141;
};
_f.constant=function(_142){
return function(){
return _142;
};
};
_f.noop=function(){
};
_f.property=_2d;
_f.propertyOf=function(obj){
return obj==null?function(){
}:function(key){
return obj[key];
};
};
_f.matcher=_f.matches=function(_143){
_143=_f.extendOwn({},_143);
return function(obj){
return _f.isMatch(obj,_143);
};
};
_f.times=function(n,_144,_145){
var _146=Array(Math.max(0,n));
_144=_10(_144,_145,1);
for(var i=0;i<n;i++){
_146[i]=_144(i);
}
return _146;
};
_f.random=function(min,max){
if(max==null){
max=min;
min=0;
}
return min+Math.floor(Math.random()*(max-min+1));
};
_f.now=Date.now||function(){
return new Date().getTime();
};
var _147={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;","`":"&#x60;"};
var _148=_f.invert(_147);
var _149=function(map){
var _14a=function(_14b){
return map[_14b];
};
var _14c="(?:"+_f.keys(map).join("|")+")";
var _14d=RegExp(_14c);
var _14e=RegExp(_14c,"g");
return function(_14f){
_14f=_14f==null?"":""+_14f;
return _14d.test(_14f)?_14f.replace(_14e,_14a):_14f;
};
};
_f.escape=_149(_147);
_f.unescape=_149(_148);
_f.result=function(_150,_151,_152){
var _153=_150==null?void 0:_150[_151];
if(_153===void 0){
_153=_152;
}
return _f.isFunction(_153)?_153.call(_150):_153;
};
var _154=0;
_f.uniqueId=function(_155){
var id=++_154+"";
return _155?_155+id:id;
};
_f.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var _156=/(.)^/;
var _157={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t"};
_157[String.fromCharCode(8232)]="u2028";
_157[String.fromCharCode(8233)]="u2029";
var _158=/\\|'|\r|\n|\u2028|\u2029/g;
var _159=function(_15a){
return "\\"+_157[_15a];
};
_f.template=function(text,_15b,_15c){
if(!_15b&&_15c){
_15b=_15c;
}
_15b=_f.defaults({},_15b,_f.templateSettings);
var _15d=RegExp([(_15b.escape||_156).source,(_15b.interpolate||_156).source,(_15b.evaluate||_156).source].join("|")+"|$","g");
var _15e=0;
var _15f="__p+='";
text.replace(_15d,function(_160,_161,_162,_163,_164){
_15f+=text.slice(_15e,_164).replace(_158,_159);
_15e=_164+_160.length;
if(_161){
_15f+="'+\n((__t=("+_161+"))==null?'':_.escape(__t))+\n'";
}else{
if(_162){
_15f+="'+\n((__t=("+_162+"))==null?'':__t)+\n'";
}else{
if(_163){
_15f+="';\n"+_163+"\n__p+='";
}
}
}
return _160;
});
_15f+="';\n";
if(!_15b.variable){
_15f="with(obj||{}){\n"+_15f+"}\n";
}
_15f="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+_15f+"return __p;\n";
try{
var _165=new Function(_15b.variable||"obj","_",_15f);
}
catch(e){
e.source=_15f;
throw e;
}
var _166=function(data){
return _165.call(this,data,_f);
};
var _167=_15b.variable||"obj";
_166.source="function("+_167+"){\n"+_15f+"}";
return _166;
};
_f.chain=function(obj){
var _168=_f(obj);
_168._chain=true;
return _168;
};
var _169=function(_16a,obj){
return _16a._chain?_f(obj).chain():obj;
};
_f.mixin=function(obj){
_f.each(_f.functions(obj),function(name){
var func=_f[name]=obj[name];
_f.prototype[name]=function(){
var args=[this._wrapped];
_6.apply(args,arguments);
return _169(this,func.apply(_f,args));
};
});
};
_f.mixin(_f);
_f.each(["pop","push","reverse","shift","sort","splice","unshift"],function(name){
var _16b=_3[name];
_f.prototype[name]=function(){
var obj=this._wrapped;
_16b.apply(obj,arguments);
if((name==="shift"||name==="splice")&&obj.length===0){
delete obj[0];
}
return _169(this,obj);
};
});
_f.each(["concat","join","slice"],function(name){
var _16c=_3[name];
_f.prototype[name]=function(){
return _169(this,_16c.apply(this._wrapped,arguments));
};
});
_f.prototype.value=function(){
return this._wrapped;
};
_f.prototype.valueOf=_f.prototype.toJSON=_f.prototype.value;
_f.prototype.toString=function(){
return ""+this._wrapped;
};
if(typeof define==="function"&&define.amd){
define("underscore",[],function(){
return _f;
});
}
}.call(this));

//underscore-ext.js
//>>built
var domSafeChar=function(c){
var _1=((c>="a"&&c<="z")||(c>="A"&&c<="Z")||(c>="0"&&c<="9"));
return _1?c:"_"+c.charCodeAt(0);
};
_.isSameNode=function(_2,_3){
return _2.isSameNode?_2.isSameNode(_3):(_2===_3);
};
_.noop=function(){
};
_.isValidResp=function(_4,_5,_6){
var rv=_4&&!_.isError(_4);
if(_6){
rv=rv&&_4.length>0;
}
if(!rv){
console.log("invalid response",_4," for ",_5);
}
return rv;
};
_.isDev=function(){
try{
return require("talkto_util/version").isDev();
}
catch(e){
console.error("error in isDev function",e);
}
};
_.isDevOrQa=function(){
try{
return _.isDev()||$_.getHost().isQA();
}
catch(e){
return false;
}
};
_.startsWith=function(_7,_8,_9){
_9=_9||0;
return _7.substr(_9,_8.length)===_8;
};
_.endsWith=function(_a,_b){
return _a.indexOf(_b,_a.length-_b.length)!==-1;
};
_.isCalledInternally=function(_c,_d,_e){
if(!_.isDev()){
return;
}
var _f=function(){
var obj={};
Error.captureStackTrace(obj,_f);
return obj.stack;
};
var _10=_f();
if(!_.endsWith(_10.split("\n")[3].split(":")[0],_c)){
if(_e){
console.log("isCalledInternally. called externally. call file path not in given ",_c," function ",arguments.callee.caller.name);
}
if(_d){
debugger;
}
}
};
_.appendParam=function(url,_11,_12){
url+=(url.indexOf("?")===-1?"?":"&");
url+=_11+"="+encodeURIComponent(_12);
return url;
};
_.closest=function(_13,_14){
if(_14[0]==="."){
var _15=_14.slice(1);
if(_13.classList.contains(_15)){
return _13;
}
while(_13.parentElement){
if(_13.parentElement.classList.contains(_15)){
return _13.parentElement;
}
_13=_13.parentElement;
}
}else{
if(_14[0]==="#"){
var _16=_14.slice(1);
if(_13.id===_16){
return _13;
}
while(_13.parentElement){
if(_13.parentElement.id===_16){
return _13.parentElement;
}
_13=_13.parentElement;
}
}
}
return null;
};
_.encodeHtmlEntities=function(str){
var _17={"&":"&amp;","\"":"&quot;","<":"&lt;",">":"&gt;"};
function _18(){
var _19,_1a="";
_(_17).each(function(val,key){
_1a=[_1a,"|"+key].join("");
});
_1a=_1a.slice(1);
_19=new RegExp(_1a,"g");
return _19;
};
var _1b=_18();
return str.replace(_1b,function(_1c){
return _17[_1c];
});
};
_.getElementsByTagNameNS=function(xml,_1d,_1e){
if(xml.getElementsByTagNameNS){
return xml.getElementsByTagNameNS(_1d,_1e);
}else{
return _(xml.getElementsByTagName(_1e)).select(function(_1f){
return _1f.namespaceURI===_1d;
});
}
};
_.deepObjectExtend=function(_20,_21){
for(var _22 in _21){
if(_22 in _20){
_.deepObjectExtend(_20[_22],_21[_22]);
}else{
_20[_22]=_21[_22];
}
}
return _20;
};
_.mixin({domSafe:function(str){
var _23=[],_24=0;
var len=str.length,c,ec;
for(var i=0;i<len;i++){
c=str.charAt(i);
ec=domSafeChar(c);
if(ec==c){
continue;
}
if(i-_24>0){
_23.push(str.substr(_24,i-_24));
}
_23.push(ec);
_24=i+1;
}
_23.push(str.substr(_24,len-_24));
var _25=_23[0].charAt(0);
if(_25>="0"&&_25<="9"){
_23.splice(0,0,"A_");
}
return _23.join("");
},deleteIf:function(obj,_26,_27){
return _(obj).chain().clone().tap(function(_28){
_(_28).chain().keys().select(function(key){
return _26.call(_27,key,_28[key]);
}).each(function(key){
delete _28[key];
});
}).value();
},trueFn:function(){
return true;
},trim:function(_29){
return _29.trim();
},toHash:function(_2a){
return _(_2a).reduce(function(hsh,_2b){
hsh[_2b[0]]=_2b[1];
return hsh;
},{});
},dropWhile:function(_2c,_2d,_2e){
var _2f=[];
var _30=true;
for(var i=0;i<_2c.length;i++){
if(!_30||!_2d.call(_2e,_2c[i])){
_30=false;
_2f.push(_2c[i]);
}
}
return _2f;
},checkForResultIQ:function(_31){
if(_31.getAttribute("type")!=="result"){
throw _31;
}
},_Invoke:function(_32,fn){
var _33=_(arguments).slice(2);
return _(_32).map(function(_34){
return _[fn].apply(_,_([_34]).concat(_33));
});
},singletonFactory:function(_35){
var _36=null;
return function(){
if(_36===null){
_36=new _35();
}
return _36;
};
},cache:function(_37,_38,_39){
var _3a={};
var _3b=60*1000;
var gc=_.throttle(function(){
var now=new Date();
_(_3a).each(function(_3c,key){
if(_3c.deleted&&(now-_3c.deleted)>_39){
_3c.destructor.apply(_3c.obj,[]);
delete _3a[key];
}
});
if(_(_3a).some(function(_3d){
return _3d.deleted;
})){
kernel.async(gc);
}
},_3b);
return function(){
var key=_.identity.apply(this,arguments);
if(_.has(_3a,key)){
_3a[key].deleted=false;
return _3a[key].obj;
}
var obj=_37.apply(this,arguments);
var _3e=_3a[key]={obj:obj,deleted:false,destructor:obj[_38]||_.identity};
obj[_38]=function(){
_3e.deleted=new Date();
gc();
};
return _3a[key].obj;
};
},pool:function(_3f,_40,_41){
var _42=_.cache(_3f,_40,_41);
var _43={},_44=0;
function _45(obj,key){
var _46=obj[_40];
obj[_40]=function(){
obj[_40]=_46;
_46.apply(obj,arguments);
_43[key]=true;
};
return obj;
};
return function(){
var _47;
_(_43).some(function(_48,key){
delete _43[key];
return (_47=parseInt(key));
})||(_47=(++_44));
return _45(_42(_47),_47);
};
},fixSizedPool:function(_49,_4a,_4b){
var _4c=0;
var _4d=_.cache(_49,_4a,30*1000);
var _4e={};
return function(){
var key=_.identity.apply(this,arguments);
var _4f;
if(_4e[key]){
_4f=_4d(key);
}
if(_4c<_4b){
_4c++;
_4f=_4d.apply(null,arguments);
_4e[key]=_4f;
var _50=_4f[_4a];
_4f[_4a]=function(){
_50.apply(_4f,arguments);
_4f.timestamp=0-new Date();
};
}
if(!_4f){
_(_4e).each(function(w){
if(!_4f||w.timestamp<_4f.timestamp){
_4f=w;
}
});
}
_4f.timestamp=new Date();
return _4f;
};
},swapAnimator:function(_51,_52,_53){
function _54(){
this.currentValue=(this.currentValue===this.second)?this.first:this.second;
this.setter(this.currentValue);
};
return {setter:_52,start:function(_55,_56,_57){
this.setter=_57||this.setter;
this.first=_55;
this.second=_56;
if(!this.timer){
this.timer=kernel.interval(_53||"swapAnimator",_.bind(_54,this),_51);
}
},stop:function(){
if(this.timer){
kernel.clearInterval(this.timer);
delete this.timer;
this.setter(this.first);
}
}};
},paths:(function(){
var _58={};
function _59(_5a){
if(!_58[_5a]){
_58[_5a]={};
_58[_5a][""]=[];
}
return _58[_5a];
};
function _5b(str,_5c){
var c=_59(_5c),_5d=c[str],_5e,_5f,i,t;
if(_5d){
return _5d.slice();
}
_5f=[str];
for(i=str.length-1;i>=0;i--){
if(str[i]!==_5c){
continue;
}
_5e=str.substr(0,i);
_5d=c[_5e];
if(_5d){
break;
}
_5f.unshift(_5e);
}
for(i=0;i<_5f.length;i++){
_5e=_5f[i];
t=[];
Array.prototype.push.apply(t,_5d);
t.unshift(_5e);
_5d=c[_5e]=t;
}
return _5d.slice();
};
return _5b;
})(),pick_public:function(obj){
var _60=_.chain(obj).keys().difference(_(obj).functions()).value();
return _(obj).pick(_(_60).filter(function(a){
return a.charAt(0)!=="_";
}));
},inherit:function(cls,_61,_62){
return _.chain(cls.prototype[_61]).clone().extend(_62||{}).value();
},maybe:function(){
if(arguments.length<2){
throw "you're doing it wrong";
}
var obj=_(arguments).first();
return _(arguments).chain().tail().reduce(function(o,_63){
if(!o){
return o;
}
var _64=/(.*)\(\)$/.exec(_63);
return _64?o[_64[1]]():o[_63];
},obj).value();
},assert:function(_65,_66){
if(!_65){
throw new Error("Assertion failure - "+_66||"Assertion failure");
}
},assertDev:function(){
if(!_.isDevOrQa()){
return;
}
_.assert.apply(_,arguments);
},detach:function(_67){
if(!_67){
return _67;
}
var _68=_67.parentNode;
if(_68){
_68.removeChild(_67);
}
return _67;
},empty:function(_69){
_(_69.children).each(this.detach);
},isDomObject:function(obj){
var str=Object.prototype.toString.call(obj);
return obj instanceof Node||str==="[object Window]"||str==="[object global]"||str==="[object HTMLDocument]"||str==="[object DOMWindow]"||str==="[object Document]";
}});
var _msgUntil=function(msg,dir,_6a){
while(msg&&!_6a(msg)){
msg=msg[dir]();
}
return msg;
};
_.mixin({prevUntil:function(msg,_6b){
return _msgUntil(msg,"prev",_6b);
},nextUntil:function(msg,_6c){
return _msgUntil(msg,"next",_6c);
}});
_.addBoth=function(_6d,_6e,_6f){
return _6d.then(_6e,_6f?_6e:function(res){
var _70=_6e();
if(_.isFunction(_70.then)){
return _70.then(function(){
return res;
});
}else{
return res;
}
});
};
_.setHashInUrl=function setHashInUrl(url,_71){
var a=document.createElement("a");
a.href=url;
a.hash=_71;
url=a.href;
a=null;
return url;
};
_.execFn=function(fn){
_.isFunction(fn)&&fn();
};
_.coupleDisplay=function(_72,_73,_74){
_.assertDev(_72.nodeType===1);
var val=_.isFunction(_74)?_74():_73;
_72.style.display=val?"flex":"none";
};
_.coupleClassName=function(_75,_76,_77,_78){
_.assertDev(_75.nodeType===1);
var val=_.isFunction(_78)?_78():_76;
_75.classList[val?"add":"remove"](_77);
};
_.subscribeFirstEvent=function(str,fn){
_.assertDev(_.isFunction(fn));
var _79=bridge.subscribe(str,function(){
fn.apply(null,arguments);
bridge.unsubscribe(_79);
});
};

/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
(function(_1,_2){
var _3=function(){
},_4=function(it){
for(var p in it){
return 0;
}
return 1;
},_5={}.toString,_6=function(it){
return _5.call(it)=="[object Function]";
},_7=function(it){
return _5.call(it)=="[object String]";
},_8=function(it){
return _5.call(it)=="[object Array]";
},_9=function(_a,_b){
if(_a){
for(var i=0;i<_a.length;){
_b(_a[i++]);
}
}
},_c=function(_d,_e){
for(var p in _e){
_d[p]=_e[p];
}
return _d;
},_f=function(_10,_11){
return _c(new Error(_10),{src:"dojoLoader",info:_11});
},_12=1,uid=function(){
return "_"+_12++;
},req=function(_13,_14,_15){
return _16(_13,_14,_15,0,req);
},_17=this,doc=_17.document,_18=doc&&doc.createElement("DiV"),has=req.has=function(_19){
return _6(_1a[_19])?(_1a[_19]=_1a[_19](_17,doc,_18)):_1a[_19];
},_1a=has.cache=_2.hasCache;
has.add=function(_1b,_1c,now,_1d){
(_1a[_1b]===undefined||_1d)&&(_1a[_1b]=_1c);
return now&&has(_1b);
};
has.add("host-worker",_1.has&&"host-worker" in _1.has?_1.has["host-worker"]:(typeof importScripts=="function"&&!!self));
if(has("host-worker")){
importScripts(_1.baseUrl+"/_base/configWebWorker.js");
webWorkerConfig(_2);
}
false&&has.add("host-node",_1.has&&"host-node" in _1.has?_1.has["host-node"]:(typeof process=="object"&&process.versions&&process.versions.node&&process.versions.v8));
if(0){
require("./_base/configNode.js").config(_2);
_2.loaderPatch.nodeRequire=require;
}
false&&has.add("host-rhino",_1.has&&"host-rhino" in _1.has?_1.has["host-rhino"]:(typeof load=="function"&&(typeof Packages=="function"||typeof Packages=="object")));
if(0){
for(var _1e=_1.baseUrl||".",arg,_1f=this.arguments,i=0;i<_1f.length;){
arg=(_1f[i++]+"").split("=");
if(arg[0]=="baseUrl"){
_1e=arg[1];
break;
}
}
load(_1e+"/_base/configRhino.js");
rhinoDojoConfig(_2,_1e,_1f);
}
for(var p in _1.has){
has.add(p,_1.has[p],0,1);
}
var _20=1,_21=2,_22=3,_23=4,_24=5;
if(0){
_20="requested";
_21="arrived";
_22="not-a-module";
_23="executing";
_24="executed";
}
var _25=0,_26="sync",xd="xd",_27=[],_28=0,_29=_3,_2a=_3,_2b;
if(1){
req.isXdUrl=_3;
req.initSyncLoader=function(_2c,_2d,_2e){
if(!_28){
_28=_2c;
_29=_2d;
_2a=_2e;
}
return {sync:_26,xd:xd,arrived:_21,nonmodule:_22,executing:_23,executed:_24,syncExecStack:_27,modules:_2f,execQ:_30,getModule:_31,injectModule:_32,setArrived:_33,signal:_34,finishExec:_35,execModule:_36,dojoRequirePlugin:_28,getLegacyMode:function(){
return _25;
},holdIdle:function(){
_76++;
},releaseIdle:function(){
_37();
}};
};
if(1){
var _38=location.protocol,_39=location.host,_3a=!_39;
req.isXdUrl=function(url){
if(_3a||/^\./.test(url)){
return false;
}
if(/^\/\//.test(url)){
return true;
}
var _3b=url.match(/^([^\/\:]+\:)\/\/([^\/]+)/);
return _3b&&(_3b[1]!=_38||_3b[2]!=_39);
};
true||has.add("dojo-xhr-factory",1);
has.add("dojo-force-activex-xhr",1&&!doc.addEventListener&&window.location.protocol=="file:");
has.add("native-xhr",typeof XMLHttpRequest!="undefined");
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
_2b=function(){
return new XMLHttpRequest();
};
}else{
for(var _3c=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],_3d,i=0;i<3;){
try{
_3d=_3c[i++];
if(new ActiveXObject(_3d)){
break;
}
}
catch(e){
}
}
_2b=function(){
return new ActiveXObject(_3d);
};
}
req.getXhr=_2b;
has.add("dojo-gettext-api",1);
req.getText=function(url,_3e,_3f){
var xhr=_2b();
xhr.open("GET",_40(url),false);
xhr.send(null);
if(xhr.status==200||(!location.host&&!xhr.status)){
if(_3f){
_3f(xhr.responseText,_3e);
}
}else{
throw _f("xhrFailed",xhr.status);
}
return xhr.responseText;
};
}
}else{
req.async=1;
}
var _41=new Function("return eval(arguments[0]);");
req.eval=function(_42,_43){
return _41(_42+"\r\n//@ sourceURL="+_43);
};
var _44={},_45="error",_34=req.signal=function(_46,_47){
var _48=_44[_46];
_9(_48&&_48.slice(0),function(_49){
_49.apply(null,_8(_47)?_47:[_47]);
});
},on=req.on=function(_4a,_4b){
var _4c=_44[_4a]||(_44[_4a]=[]);
_4c.push(_4b);
return {remove:function(){
for(var i=0;i<_4c.length;i++){
if(_4c[i]===_4b){
_4c.splice(i,1);
return;
}
}
}};
};
var _4d=[],_4e={},_4f=[],_50={},_51={},_52=[],_2f={},_53="",_54={},_55={},_56={};
if(1){
var _57=function(_58){
var p,_59,_5a,now;
for(p in _55){
_59=_55[p];
_5a=p.match(/^url\:(.+)/);
if(_5a){
_54[_5b(_5a[1],_58)]=_59;
}else{
if(p=="*now"){
now=_59;
}else{
if(p!="*noref"){
_54[_5c(p,_58).mid]=_59;
}
}
}
}
if(now){
now(_5d(_58));
}
_55={};
},_5e=function(map,_5f,_60){
_5f.splice(0,_5f.length);
var p,i,_61,_62=0;
for(p in map){
_5f.push([p,map[p]]);
if(map[p]==_60){
_62=p;
}
}
_5f.sort(function(lhs,rhs){
return rhs[0].length-lhs[0].length;
});
for(i=0;i<_5f.length;){
_61=_5f[i++];
_61[2]=new RegExp("^"+_61[0].replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(c){
return "\\"+c;
})+"(/|$)");
_61[3]=_61[0].length+1;
}
return _62;
},_63=function(_64,_65){
var _66=_64.name;
if(!_66){
_66=_64;
_64={name:_66};
}
_64=_c({main:"main",mapProg:[]},_64);
_64.location=(_65||"")+(_64.location?_64.location:_66);
_64.reverseName=_5e(_64.packageMap,_64.mapProg,_66);
if(!_64.main.indexOf("./")){
_64.main=_64.main.substring(2);
}
_c(_4e,_64.paths);
_50[_66]=_64;
_51[_66]=_66;
},_67=function(_68,_69){
for(var p in _68){
if(p=="waitSeconds"){
req.waitms=(_68[p]||0)*1000;
}
if(p=="cacheBust"){
_53=_68[p]?(_7(_68[p])?_68[p]:(new Date()).getTime()+""):"";
}
if(p=="baseUrl"||p=="combo"){
req[p]=_68[p];
}
if(1&&p=="async"){
var _6a=_68[p];
req.legacyMode=_25=(_7(_6a)&&/sync|legacyAsync/.test(_6a)?_6a:(!_6a?"sync":false));
req.async=!_25;
}
if(_68[p]!==_1a){
req.rawConfig[p]=_68[p];
p!="has"&&has.add("config-"+p,_68[p],0,_69);
}
}
if(!req.baseUrl){
req.baseUrl="./";
}
if(!/\/$/.test(req.baseUrl)){
req.baseUrl+="/";
}
for(p in _68.has){
has.add(p,_68.has[p],0,_69);
}
_9(_68.packages,_63);
for(_1e in _68.packagePaths){
_9(_68.packagePaths[_1e],function(_6b){
_63(_6b,_1e+"/");
});
}
_5e(_c(_4e,_68.paths),_4f);
_9(_68.aliases,function(_6c){
if(_7(_6c[0])){
_6c[0]=new RegExp("^"+_6c[0].replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(c){
return "\\"+c;
})+"$");
}
_4d.push(_6c);
});
_5e(_c(_51,_68.packageMap),_52);
if(_68.cache){
_57();
_55=_68.cache;
if(_68.cache["*noref"]){
_57();
}
}
_34("config",[_68,req.rawConfig]);
};
if(has("dojo-cdn")||1){
for(var _6d,src,_6e,_6f=doc.getElementsByTagName("script"),i=0;i<_6f.length&&!_6e;i++){
if((src=_6f[i].getAttribute("src"))&&(_6e=src.match(/(.*)\/?dojo\.js(\W|$)/i))){
_1.baseUrl=_6d=_1.baseUrl||_2.baseUrl||_6e[1];
src=(_6f[i].getAttribute("data-dojo-config")||_6f[i].getAttribute("djConfig"));
if(src){
_56=req.eval("({ "+src+" })","data-dojo-config");
}
if(0){
var _70=_6f[i].getAttribute("data-main");
if(_70){
_56.deps=_56.deps||[_70];
}
}
}
}
}
if(0){
try{
if(window.parent!=window&&window.parent.require){
var doh=window.parent.require("doh");
doh&&_c(_56,doh.testConfig);
}
}
catch(e){
}
}
req.rawConfig={};
_67(_2,1);
_67(_1,1);
_67(_56,1);
if(has("dojo-cdn")){
_50.dojo.location=_6d;
_50.dijit.location=_6d+"../dijit/";
_50.dojox.location=_6d+"../dojox/";
}
}else{
_4e=_2.paths;
_4f=_2.pathsMapProg;
_50=_2.packs;
_4d=_2.aliases;
_51=_2.packageMap;
_52=_2.packageMapProg;
_2f=_2.modules;
_54=_2.cache;
_53=_2.cacheBust;
req.rawConfig=_2;
}
if(0){
req.combo=req.combo||{add:_3};
var _71=0,_72=[],_73=null;
}
var _74=function(_75){
_76++;
_9(_75.deps,_32);
if(0&&_71&&!_73){
_73=setTimeout(function(){
_71=0;
_73=null;
req.combo.done(function(_77,url){
var _78=function(){
_79(0,_77);
_7a();
};
_72.push(_77);
_7b=_77;
req.injectUrl(url,_78,_77);
_7b=0;
},req);
},0);
}
_37();
},_16=function(a1,a2,a3,_7c,_7d){
var _7e,_7f;
if(_7(a1)){
_7e=_31(a1,_7c,true);
if(_7e&&_7e.executed){
return _7e.result;
}
throw _f("undefinedModule",a1);
}
if(!_8(a1)){
_67(a1);
a1=a2;
a2=a3;
}
if(_8(a1)){
if(!a1.length){
a2&&a2();
}else{
_7f="require*"+uid();
for(var mid,_80=[],i=0;i<a1.length;){
mid=a1[i++];
if(mid in {exports:1,module:1}){
throw _f("illegalModuleId",mid);
}
_80.push(_31(mid,_7c));
}
_7e=_c(_81("",_7f,0,""),{injected:_21,deps:_80,def:a2||_3,require:_7c?_7c.require:req});
_2f[_7e.mid]=_7e;
_74(_7e);
var _82=_76&&req.async;
_76++;
_36(_7e,_82);
_37();
if(!_7e.executed){
_30.push(_7e);
}
_7a();
}
}
return _7d;
},_5d=function(_83){
if(!_83){
return req;
}
var _84=_83.require;
if(!_84){
_84=function(a1,a2,a3){
return _16(a1,a2,a3,_83,_84);
};
_83.require=_c(_84,req);
_84.module=_83;
_84.toUrl=function(_85){
return _5b(_85,_83);
};
_84.toAbsMid=function(mid){
return _b4(mid,_83);
};
if(0){
_84.undef=function(mid){
req.undef(mid,_83);
};
}
if(1){
_84.syncLoadNls=function(mid){
var _86=_5c(mid,_83),_87=_2f[_86.mid];
if(!_87||!_87.executed){
_88=_54[_86.mid]||_54[_86.cacheId];
if(_88){
_89(_88);
_87=_2f[_86.mid];
}
}
return _87&&_87.executed&&_87.result;
};
}
}
return _84;
},_30=[],_8a=[],_8b={},_8c=function(_8d){
_8d.injected=_20;
_8b[_8d.mid]=1;
if(_8d.url){
_8b[_8d.url]=_8d.pack||1;
}
},_33=function(_8e){
_8e.injected=_21;
delete _8b[_8e.mid];
if(_8e.url){
delete _8b[_8e.url];
}
if(_4(_8b)){
_8f();
1&&_25==xd&&(_25=_26);
}
},_90=req.idle=function(){
return !_8a.length&&_4(_8b)&&!_30.length&&!_76;
},_91=function(_92,map){
for(var i=0;i<map.length;i++){
if(map[i][2].test(_92)){
return map[i];
}
}
return 0;
},_93=function(_94){
var _95=[],_96,_97;
_94=_94.replace(/\\/g,"/").split("/");
while(_94.length){
_96=_94.shift();
if(_96==".."&&_95.length&&_97!=".."){
_95.pop();
_97=_95[_95.length-1];
}else{
if(_96!="."){
_95.push(_97=_96);
}
}
}
return _95.join("/");
},_81=function(pid,mid,_98,url,_99){
if(1){
var xd=req.isXdUrl(url);
return {pid:pid,mid:mid,pack:_98,url:url,executed:0,def:0,isXd:xd,isAmd:!!(xd||(_50[pid]&&_50[pid].isAmd)),cacheId:_99};
}else{
return {pid:pid,mid:mid,pack:_98,url:url,executed:0,def:0,cacheId:_99};
}
},_9a=function(mid,_9b,_9c,_9d,_9e,_9f,_a0,_a1){
var pid,_a2,_a3,_a4,_a5,_a6,url,_a7,_a8,_a9,_aa=0;
_a9=mid;
_a8=/^\./.test(mid);
if(/(^\/)|(\:)|(\.js$)/.test(mid)||(_a8&&!_9b)){
return _81(0,mid,0,mid);
}else{
mid=_93(_a8?(_9b.mid+"/../"+mid):mid);
if(/^\./.test(mid)){
throw _f("irrationalPath",mid);
}
_a4=_9b&&_9b.pack&&_9b.pack.mapProg;
_a5=(_a4&&_91(mid,_a4))||_91(mid,_9f);
if(_a5){
pid=_a5[1];
mid=mid.substring(_a5[3]);
_a2=_9c[pid];
if(!mid){
mid=_a2.main;
}
_a3=mid;
_aa=_a2.reverseName+"/"+mid;
mid=pid+"/"+mid;
}else{
pid="";
}
var _ab=0,_ac=0;
_9(_4d,function(_ad){
var _ae=mid.match(_ad[0]);
if(_ae&&_ae.length>_ab){
_ac=_6(_ad[1])?mid.replace(_ad[0],_ad[1]):_ad[1];
}
});
if(_ac){
return _9a(_ac,0,_9c,_9d,_9e,_9f,_a0,_a1);
}
_a7=_9d[mid];
if(_a7){
return _a1?_81(_a7.pid,_a7.mid,_a7.pack,_a7.url,_aa):_9d[mid];
}
}
_a5=_91(mid,_a0);
if(_a5){
url=_a5[1]+mid.substring(_a5[3]-1);
}else{
if(pid){
url=_a2.location+"/"+_a3;
}else{
if(has("config-tlmSiblingOfDojo")){
url="../"+mid;
}else{
url=mid;
}
}
}
if(!(/(^\/)|(\:)/.test(url))){
url=_9e+url;
}
url+=".js";
return _81(pid,mid,_a2,_93(url),_aa);
},_5c=function(mid,_af){
return _9a(mid,_af,_50,_2f,req.baseUrl,_52,_4f);
},_b0=function(_b1,_b2,_b3){
return _b1.normalize?_b1.normalize(_b2,function(mid){
return _b4(mid,_b3);
}):_b4(_b2,_b3);
},_b5=0,_31=function(mid,_b6,_b7){
var _b8,_b9,_ba,_bb;
_b8=mid.match(/^(.+?)\!(.*)$/);
if(_b8){
_b9=_31(_b8[1],_b6,_b7);
if(1&&_25==_26&&!_b9.executed){
_32(_b9);
if(_b9.injected===_21&&!_b9.executed){
_76++;
_36(_b9);
_37();
}
if(_b9.executed){
_bc(_b9);
}else{
_30.unshift(_b9);
}
}
if(_b9.executed===_24&&!_b9.load){
_bc(_b9);
}
if(_b9.load){
_ba=_b0(_b9,_b8[2],_b6);
mid=(_b9.mid+"!"+(_b9.dynamic?++_b5+"!":"")+_ba);
}else{
_ba=_b8[2];
mid=_b9.mid+"!"+(++_b5)+"!waitingForPlugin";
}
_bb={plugin:_b9,mid:mid,req:_5d(_b6),prid:_ba};
}else{
_bb=_5c(mid,_b6);
}
return _2f[_bb.mid]||(!_b7&&(_2f[_bb.mid]=_bb));
},_b4=req.toAbsMid=function(mid,_bd){
return _5c(mid,_bd).mid;
},_5b=req.toUrl=function(_be,_bf){
var _c0=_5c(_be+"/x",_bf),url=_c0.url;
return _40(_c0.pid===0?_be:url.substring(0,url.length-5));
},_c1={injected:_21,executed:_24,def:_22,result:_22},_c2=function(mid){
return _2f[mid]=_c({mid:mid},_c1);
},_c3=_c2("require"),_c4=_c2("exports"),_c5=_c2("module"),_c6=function(_c7,_c8){
req.trace("loader-run-factory",[_c7.mid]);
var _c9=_c7.def,_ca;
1&&_27.unshift(_c7);
if(has("config-dojo-loader-catches")){
try{
_ca=_6(_c9)?_c9.apply(null,_c8):_c9;
}
catch(e){
_34(_45,_c7.result=_f("factoryThrew",[_c7,e]));
}
}else{
_ca=_6(_c9)?_c9.apply(null,_c8):_c9;
}
_c7.result=_ca===undefined&&_c7.cjs?_c7.cjs.exports:_ca;
1&&_27.shift(_c7);
},_cb={},_cc=0,_bc=function(_cd){
var _ce=_cd.result;
_cd.dynamic=_ce.dynamic;
_cd.normalize=_ce.normalize;
_cd.load=_ce.load;
return _cd;
},_cf=function(_d0){
var map={};
_9(_d0.loadQ,function(_d1){
var _d2=_d1.mid,_d3=_b0(_d0,_d1.prid,_d1.req.module),mid=_d0.dynamic?_d1.mid.replace(/waitingForPlugin$/,_d3):(_d0.mid+"!"+_d3),_d4=_c(_c({},_d1),{mid:mid,prid:_d3,injected:0});
if(!_2f[mid]){
_e5(_2f[mid]=_d4);
}
map[_d1.mid]=_2f[mid];
_33(_d1);
delete _2f[_d1.mid];
});
_d0.loadQ=0;
var _d5=function(_d6){
for(var _d7,_d8=_d6.deps||[],i=0;i<_d8.length;i++){
_d7=map[_d8[i].mid];
if(_d7){
_d8[i]=_d7;
}
}
};
for(var p in _2f){
_d5(_2f[p]);
}
_9(_30,_d5);
},_35=function(_d9){
req.trace("loader-finish-exec",[_d9.mid]);
_d9.executed=_24;
_d9.defOrder=_cc++;
1&&_9(_d9.provides,function(cb){
cb();
});
if(_d9.loadQ){
_bc(_d9);
_cf(_d9);
}
for(i=0;i<_30.length;){
if(_30[i]===_d9){
_30.splice(i,1);
}else{
i++;
}
}
},_da=[],_36=function(_db,_dc){
if(_db.executed===_23){
req.trace("loader-circular-dependency",[_da.concat(mid).join("->")]);
return (!_db.def||_dc)?_cb:(_db.cjs&&_db.cjs.exports);
}
if(!_db.executed){
if(!_db.def){
return _cb;
}
var mid=_db.mid,_dd=_db.deps||[],arg,_de,_df=[],i=0;
if(0){
_da.push(mid);
req.trace("loader-exec-module",["exec",_da.length,mid]);
}
_db.executed=_23;
while(i<_dd.length){
arg=_dd[i++];
_de=((arg===_c3)?_5d(_db):((arg===_c4)?_db.cjs.exports:((arg===_c5)?_db.cjs:_36(arg,_dc))));
if(_de===_cb){
_db.executed=0;
req.trace("loader-exec-module",["abort",mid]);
0&&_da.pop();
return _cb;
}
_df.push(_de);
}
_c6(_db,_df);
_35(_db);
}
0&&_da.pop();
return _db.result;
},_76=0,_7a=function(){
if(_76){
return;
}
_76++;
_29();
for(var _e0,_e1,i=0;i<_30.length;){
_e0=_cc;
_e1=_30[i];
_36(_e1);
if(_e0!=_cc){
_29();
i=0;
}else{
i++;
}
}
_37();
},_37=function(){
_76--;
if(_90()){
_34("idle",[]);
}
};
if(0){
req.undef=function(_e2,_e3){
var _e4=_31(_e2,_e3);
_33(_e4);
delete _2f[_e4.mid];
};
}
if(1){
if(has("dojo-loader-eval-hint-url")===undefined){
has.add("dojo-loader-eval-hint-url",1);
}
var _40=function(url){
url+="";
return url+(_53?((/\?/.test(url)?"&":"?")+_53):"");
},_e5=function(_e6){
var _e7=_e6.plugin;
if(_e7.executed===_24&&!_e7.load){
_bc(_e7);
}
var _e8=function(def){
_e6.result=def;
_33(_e6);
_35(_e6);
_7a();
};
if(_e7.load){
_e7.load(_e6.prid,_e6.req,_e8);
}else{
if(_e7.loadQ){
_e7.loadQ.push(_e6);
}else{
_e7.loadQ=[_e6];
_30.unshift(_e7);
_32(_e7);
}
}
},_88=0,_7b=0,_e9=0,_89=function(_ea,_eb){
_e9=1;
if(has("config-dojo-loader-catches")){
try{
if(_ea===_88){
_88.call(null);
}else{
req.eval(_ea,has("dojo-loader-eval-hint-url")?_eb.url:_eb.mid);
}
}
catch(e){
_34(_45,_f("evalModuleThrew",_eb));
}
}else{
if(_ea===_88){
_88.call(null);
}else{
req.eval(_ea,has("dojo-loader-eval-hint-url")?_eb.url:_eb.mid);
}
}
_e9=0;
},_32=function(_ec){
var mid=_ec.mid,url=_ec.url;
if(_ec.executed||_ec.injected||_8b[mid]||(_ec.url&&((_ec.pack&&_8b[_ec.url]===_ec.pack)||_8b[_ec.url]==1))){
return;
}
_8c(_ec);
if(0){
var _ed=0;
if(_ec.plugin&&_ec.plugin.isCombo){
req.combo.add(_ec.plugin.mid,_ec.prid,0,req);
_ed=1;
}else{
if(!_ec.plugin){
_ed=req.combo.add(0,_ec.mid,_ec.url,req);
}
}
if(_ed){
_71=1;
return;
}
}
if(_ec.plugin){
_e5(_ec);
return;
}
var _ee=function(){
_79(_ec);
if(_ec.injected!==_21){
_33(_ec);
_c(_ec,_c1);
}
if(1&&_25){
!_27.length&&_7a();
}else{
_7a();
}
};
_88=_54[mid]||_54[_ec.cacheId];
if(_88){
req.trace("loader-inject",["cache",_ec.mid,url]);
_89(_88,_ec);
_ee();
return;
}
if(1&&_25){
if(_ec.isXd){
_25==_26&&(_25=xd);
}else{
if(_ec.isAmd&&_25!=_26){
}else{
var _ef=function(_f0){
if(_25==_26){
_27.unshift(_ec);
_89(_f0,_ec);
_27.shift();
_79(_ec);
if(!_ec.cjs){
_33(_ec);
_35(_ec);
}
if(_ec.finish){
var _f1=mid+"*finish",_f2=_ec.finish;
delete _ec.finish;
def(_f1,["dojo",("dojo/require!"+_f2.join(",")).replace(/\./g,"/")],function(_f3){
_9(_f2,function(mid){
_f3.require(mid);
});
});
_30.unshift(_31(_f1));
}
_ee();
}else{
_f0=_2a(_ec,_f0);
if(_f0){
_89(_f0,_ec);
_ee();
}else{
_7b=_ec;
req.injectUrl(_40(url),_ee,_ec);
_7b=0;
}
}
};
req.trace("loader-inject",["xhr",_ec.mid,url,_25!=_26]);
if(has("config-dojo-loader-catches")){
try{
req.getText(url,_25!=_26,_ef);
}
catch(e){
_34(_45,_f("xhrInjectFailed",[_ec,e]));
}
}else{
req.getText(url,_25!=_26,_ef);
}
return;
}
}
}
req.trace("loader-inject",["script",_ec.mid,url]);
_7b=_ec;
req.injectUrl(_40(url),_ee,_ec);
_7b=0;
},_f4=function(_f5,_f6,def){
req.trace("loader-define-module",[_f5.mid,_f6]);
if(0&&_f5.plugin&&_f5.plugin.isCombo){
_f5.result=_6(def)?def():def;
_33(_f5);
_35(_f5);
return _f5;
}
var mid=_f5.mid;
if(_f5.injected===_21){
_34(_45,_f("multipleDefine",_f5));
return _f5;
}
_c(_f5,{deps:_f6,def:def,cjs:{id:_f5.mid,uri:_f5.url,exports:(_f5.result={}),setExports:function(_f7){
_f5.cjs.exports=_f7;
}}});
for(var i=0;i<_f6.length;i++){
_f6[i]=_31(_f6[i],_f5);
}
if(1&&_25&&!_8b[mid]){
_74(_f5);
_30.push(_f5);
_7a();
}
_33(_f5);
if(!_6(def)&&!_f6.length){
_f5.result=def;
_35(_f5);
}
return _f5;
},_79=function(_f8,_f9){
var _fa=[],_fb,_fc;
while(_8a.length){
_fc=_8a.shift();
_f9&&(_fc[0]=_f9.shift());
_fb=(_fc[0]&&_31(_fc[0]))||_f8;
_fa.push([_fb,_fc[1],_fc[2]]);
}
_57(_f8);
_9(_fa,function(_fd){
_74(_f4.apply(null,_fd));
});
};
}
var _fe=0,_8f=_3,_ff=_3;
if(1){
_8f=function(){
_fe&&clearTimeout(_fe);
_fe=0;
},_ff=function(){
_8f();
req.waitms&&(_fe=setTimeout(function(){
_8f();
_34(_45,_f("timeout",_8b));
},req.waitms));
};
}
if(1){
has.add("ie-event-behavior",doc.attachEvent&&(typeof opera==="undefined"||opera.toString()!="[object Opera]"));
}
if(1&&(1||1)){
var _100=function(node,_101,_102,_103){
if(!has("ie-event-behavior")){
node.addEventListener(_101,_103,false);
return function(){
node.removeEventListener(_101,_103,false);
};
}else{
node.attachEvent(_102,_103);
return function(){
node.detachEvent(_102,_103);
};
}
},_104=_100(window,"load","onload",function(){
req.pageLoaded=1;
doc.readyState!="complete"&&(doc.readyState="complete");
_104();
});
if(1){
var _105=doc.getElementsByTagName("script")[0],_106=_105.parentNode;
req.injectUrl=function(url,_107,_108){
_ff();
var node=_108.node=doc.createElement("script"),_109=function(e){
e=e||window.event;
var node=e.target||e.srcElement;
if(e.type==="load"||/complete|loaded/.test(node.readyState)){
_10a();
_107&&_107();
}
},_10a=_100(node,"load","onreadystatechange",_109);
node.type="text/javascript";
node.charset="utf-8";
node.src=url;
_106.insertBefore(node,_105);
return node;
};
}
}
if(1){
req.log=function(){
try{
for(var i=0;i<arguments.length;i++){
console.log(arguments[i]);
}
}
catch(e){
}
};
}else{
req.log=_3;
}
if(0){
var _10b=req.trace=function(_10c,args){
if(_10b.on&&_10b.group[_10c]){
_34("trace",[_10c,args]);
for(var arg,dump=[],text="trace:"+_10c+(args.length?(":"+args[0]):""),i=1;i<args.length;){
arg=args[i++];
if(_7(arg)){
text+=", "+arg;
}else{
dump.push(arg);
}
}
req.log(text);
dump.length&&dump.push(".");
req.log.apply(req,dump);
}
};
_c(_10b,{on:1,group:{},set:function(_10d,_10e){
if(_7(_10d)){
_10b.group[_10d]=_10e;
}else{
_c(_10b.group,_10d);
}
}});
_10b.set(_c(_c(_c({},_2.trace),_1.trace),_56.trace));
on("config",function(_10f){
_10f.trace&&_10b.set(_10f.trace);
});
}else{
req.trace=_3;
}
var def=function(mid,_110,_111){
var _112=arguments.length,args=0,_113=["require","exports","module"];
if(0){
if(_112==1&&_6(mid)){
_110=[];
mid.toString().replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,"").replace(/require\(["']([\w\!\-_\.\/]+)["']\)/g,function(_114,dep){
_110.push(dep);
});
args=[0,_113.concat(_110),mid];
}
}
if(!args){
args=_112==1?[0,_113,mid]:(_112==2?(_8(mid)?[0,mid,_110]:(_6(_110)?[mid,_113,_110]:[mid,[],_110])):[mid,_110,_111]);
}
req.trace("loader-define",args.slice(0,2));
var _115=args[0]&&_31(args[0]),_116;
if(_115&&!_8b[_115.mid]){
_74(_f4(_115,args[1],args[2]));
}else{
if(!has("ie-event-behavior")||!1||_e9){
_8a.push(args);
}else{
_115=_115||_7b;
if(!_115){
for(mid in _8b){
_116=_2f[mid];
if(_116&&_116.node&&_116.node.readyState==="interactive"){
_115=_116;
break;
}
}
if(0&&!_115){
for(var i=0;i<_72.length;i++){
_115=_72[i];
if(_115.node&&_115.node.readyState==="interactive"){
break;
}
_115=0;
}
}
}
if(0&&_8(_115)){
_74(_f4(_31(_115.shift()),args[1],args[2]));
if(!_115.length){
_72.splice(i,1);
}
}else{
if(_115){
_57(_115);
_74(_f4(_115,args[1],args[2]));
}else{
_34(_45,_f("ieDefineFailed",args[0]));
}
}
_7a();
}
}
};
def.amd={vendor:"dojotoolkit.org"};
if(0){
req.def=def;
}
_c(_c(req,_2.loaderPatch),_1.loaderPatch);
on(_45,function(arg){
try{
console.error(arg);
if(arg instanceof Error){
for(var p in arg){
console.log(p+":",arg[p]);
}
console.log(".");
}
}
catch(e){
}
});
_c(req,{uid:uid,cache:_54,packs:_50});
if(0){
_c(req,{paths:_4e,aliases:_4d,packageMap:_51,modules:_2f,legacyMode:_25,execQ:_30,defQ:_8a,waiting:_8b,pathsMapProg:_4f,packageMapProg:_52,listenerQueues:_44,computeMapProg:_5e,runMapProg:_91,compactPath:_93,getModuleInfo:_9a});
}
if(_17.define){
if(1){
_34(_45,_f("defineAlreadyDefined",0));
}
}else{
_17.define=def;
_17.require=req;
}
if(0&&req.combo&&req.combo.plugins){
var _117=req.combo.plugins,_118;
for(_118 in _117){
_c(_c(_31(_118),_117[_118]),{isCombo:1,executed:"executed",load:1});
}
}
if(1){
var _119=_56.deps||_1.deps||_2.deps,_11a=_56.callback||_1.callback||_2.callback;
req.boot=(_119||_11a)?[_119||[],_11a]:0;
}
if(!1){
!req.async&&req(["dojo"]);
req.boot&&req.apply(null,req.boot);
}
})(this.dojoConfig||this.djConfig||this.require||{},{async:0,hasCache:{"config-selectorEngine":"acme","config-tlmSiblingOfDojo":1,"dojo-built":1,"dojo-loader":1,dom:1,"host-browser":1},packages:[{location:"../talktolibs",name:"talktolibs"},{location:"../widgets",name:"widgets"},{location:"../themes",name:"themes"},{location:"../conversation",name:"conversation"},{location:"../common",name:"common"},{location:"../shell",name:"shell"},{location:"../group_conversation",name:"group_conversation"},{location:"../dojox",name:"dojox"},{location:"../kernel",name:"kernel"},{location:"../dijit",name:"dijit"},{location:".",name:"dojo"},{location:"../bridge",name:"bridge"},{location:"../hydra",name:"hydra"},{location:"../talkto_util",name:"talkto_util"},{location:"../base_host",name:"base_host"}]});
require({cache:{"dojo/nls/dojo_en-us":function(){/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_en-us",{"dijit/nls/loading":{"loadingState":"Loading...","errorState":"Sorry, an error occurred"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Cancel","buttonSave":"Save","itemClose":"Close"}});
},"dojo/nls/dojo_en-gb":function(){/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_en-gb",{"dijit/nls/loading":{"loadingState":"Loading...","errorState":"Sorry, an error occurred"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Cancel","buttonSave":"Save","itemClose":"Close"}});
},"dojo/nls/dojo_es-mx":function(){/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_es-mx",{"dijit/nls/loading":{"loadingState":"Cargando...","errorState":"Lo siento, se ha producido un error"},"dijit/nls/common":{"buttonOk":"Aceptar","buttonCancel":"Cancelar","buttonSave":"Guardar","itemClose":"Cerrar"}});
},"dojo/nls/dojo_es":function(){/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_es",{"dijit/nls/loading":{"loadingState":"Cargando...","errorState":"Lo siento, se ha producido un error"},"dijit/nls/common":{"buttonOk":"Aceptar","buttonCancel":"Cancelar","buttonSave":"Guardar","itemClose":"Cerrar"}});
},"dojo/nls/dojo_pt-br":function(){/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_pt-br",{"dijit/nls/loading":{"loadingState":"Carregando...","errorState":"Desculpe, ocorreu um erro"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Cancelar","buttonSave":"Salvar","itemClose":"Fechar"}});
},"dojo/nls/dojo_ROOT":function(){/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_ROOT",{"dijit/nls/loading":{"loadingState":"Loading...","errorState":"Sorry, an error occurred"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Cancel","buttonSave":"Save","itemClose":"Close"}});
}}});require({cache:{"dojo/dom-geometry":function(){
define(["./_base/sniff","./_base/window","./dom","./dom-style"],function(has,win,dom,_11b){
var geom={};
geom.boxModel="content-box";
if(has("ie")){
geom.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";
}
geom.getPadExtents=function getPadExtents(node,_11c){
node=dom.byId(node);
var s=_11c||_11b.getComputedStyle(node),px=_11b.toPixelValue,l=px(node,s.paddingLeft),t=px(node,s.paddingTop),r=px(node,s.paddingRight),b=px(node,s.paddingBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
var none="none";
geom.getBorderExtents=function getBorderExtents(node,_11d){
node=dom.byId(node);
var px=_11b.toPixelValue,s=_11d||_11b.getComputedStyle(node),l=s.borderLeftStyle!=none?px(node,s.borderLeftWidth):0,t=s.borderTopStyle!=none?px(node,s.borderTopWidth):0,r=s.borderRightStyle!=none?px(node,s.borderRightWidth):0,b=s.borderBottomStyle!=none?px(node,s.borderBottomWidth):0;
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getPadBorderExtents=function getPadBorderExtents(node,_11e){
node=dom.byId(node);
var s=_11e||_11b.getComputedStyle(node),p=geom.getPadExtents(node,s),b=geom.getBorderExtents(node,s);
return {l:p.l+b.l,t:p.t+b.t,r:p.r+b.r,b:p.b+b.b,w:p.w+b.w,h:p.h+b.h};
};
geom.getMarginExtents=function getMarginExtents(node,_11f){
node=dom.byId(node);
var s=_11f||_11b.getComputedStyle(node),px=_11b.toPixelValue,l=px(node,s.marginLeft),t=px(node,s.marginTop),r=px(node,s.marginRight),b=px(node,s.marginBottom);
if(has("webkit")&&(s.position!="absolute")){
r=l;
}
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getMarginBox=function getMarginBox(node,_120){
node=dom.byId(node);
var s=_120||_11b.getComputedStyle(node),me=geom.getMarginExtents(node,s),l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode,px=_11b.toPixelValue,pcs;
if(has("mozilla")){
var sl=parseFloat(s.left),st=parseFloat(s.top);
if(!isNaN(sl)&&!isNaN(st)){
l=sl,t=st;
}else{
if(p&&p.style){
pcs=_11b.getComputedStyle(p);
if(pcs.overflow!="visible"){
l+=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t+=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
}else{
if(has("opera")||(has("ie")==8&&!has("quirks"))){
if(p){
pcs=_11b.getComputedStyle(p);
l-=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t-=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};
};
geom.getContentBox=function getContentBox(node,_121){
node=dom.byId(node);
var s=_121||_11b.getComputedStyle(node),w=node.clientWidth,h,pe=geom.getPadExtents(node,s),be=geom.getBorderExtents(node,s);
if(!w){
w=node.offsetWidth;
h=node.offsetHeight;
}else{
h=node.clientHeight;
be.w=be.h=0;
}
if(has("opera")){
pe.l+=be.l;
pe.t+=be.t;
}
return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};
};
function _122(node,l,t,w,h,u){
u=u||"px";
var s=node.style;
if(!isNaN(l)){
s.left=l+u;
}
if(!isNaN(t)){
s.top=t+u;
}
if(w>=0){
s.width=w+u;
}
if(h>=0){
s.height=h+u;
}
};
function _123(node){
return node.tagName.toLowerCase()=="button"||node.tagName.toLowerCase()=="input"&&(node.getAttribute("type")||"").toLowerCase()=="button";
};
function _124(node){
return geom.boxModel=="border-box"||node.tagName.toLowerCase()=="table"||_123(node);
};
geom.setContentSize=function setContentSize(node,box,_125){
node=dom.byId(node);
var w=box.w,h=box.h;
if(_124(node)){
var pb=geom.getPadBorderExtents(node,_125);
if(w>=0){
w+=pb.w;
}
if(h>=0){
h+=pb.h;
}
}
_122(node,NaN,NaN,w,h);
};
var _126={l:0,t:0,w:0,h:0};
geom.setMarginBox=function setMarginBox(node,box,_127){
node=dom.byId(node);
var s=_127||_11b.getComputedStyle(node),w=box.w,h=box.h,pb=_124(node)?_126:geom.getPadBorderExtents(node,s),mb=geom.getMarginExtents(node,s);
if(has("webkit")){
if(_123(node)){
var ns=node.style;
if(w>=0&&!ns.width){
ns.width="4px";
}
if(h>=0&&!ns.height){
ns.height="4px";
}
}
}
if(w>=0){
w=Math.max(w-pb.w-mb.w,0);
}
if(h>=0){
h=Math.max(h-pb.h-mb.h,0);
}
_122(node,box.l,box.t,w,h);
};
geom.isBodyLtr=function isBodyLtr(){
return (win.body().dir||win.doc.documentElement.dir||"ltr").toLowerCase()=="ltr";
};
geom.docScroll=function docScroll(){
var node=win.doc.parentWindow||win.doc.defaultView;
return "pageXOffset" in node?{x:node.pageXOffset,y:node.pageYOffset}:(node=has("quirks")?win.body():win.doc.documentElement,{x:geom.fixIeBiDiScrollLeft(node.scrollLeft||0),y:node.scrollTop||0});
};
geom.getIeDocumentElementOffset=function getIeDocumentElementOffset(){
var de=win.doc.documentElement;
if(has("ie")<8){
var r=de.getBoundingClientRect(),l=r.left,t=r.top;
if(has("ie")<7){
l+=de.clientLeft;
t+=de.clientTop;
}
return {x:l<0?0:l,y:t<0?0:t};
}else{
return {x:0,y:0};
}
};
geom.fixIeBiDiScrollLeft=function fixIeBiDiScrollLeft(_128){
var ie=has("ie");
if(ie&&!geom.isBodyLtr()){
var qk=has("quirks"),de=qk?win.body():win.doc.documentElement;
if(ie==6&&!qk&&win.global.frameElement&&de.scrollHeight>de.clientHeight){
_128+=de.clientLeft;
}
return (ie<8||qk)?(_128+de.clientWidth-de.scrollWidth):-_128;
}
return _128;
};
geom.position=function(node,_129){
node=dom.byId(node);
var db=win.body(),dh=db.parentNode,ret=node.getBoundingClientRect();
ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};
if(has("ie")){
var _12a=geom.getIeDocumentElementOffset();
ret.x-=_12a.x+(has("quirks")?db.clientLeft+db.offsetLeft:0);
ret.y-=_12a.y+(has("quirks")?db.clientTop+db.offsetTop:0);
}else{
if(has("ff")==3){
var cs=_11b.getComputedStyle(dh),px=_11b.toPixelValue;
ret.x-=px(dh,cs.marginLeft)+px(dh,cs.borderLeftWidth);
ret.y-=px(dh,cs.marginTop)+px(dh,cs.borderTopWidth);
}
}
if(_129){
var _12b=geom.docScroll();
ret.x+=_12b.x;
ret.y+=_12b.y;
}
return ret;
};
geom.getMarginSize=function getMarginSize(node,_12c){
node=dom.byId(node);
var me=geom.getMarginExtents(node,_12c||_11b.getComputedStyle(node));
var size=node.getBoundingClientRect();
return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};
};
geom.normalizeEvent=function(_12d){
if(!("layerX" in _12d)){
_12d.layerX=_12d.offsetX;
_12d.layerY=_12d.offsetY;
}
if(!has("dom-addeventlistener")){
var se=_12d.target;
var doc=(se&&se.ownerDocument)||document;
var _12e=has("quirks")?doc.body:doc.documentElement;
var _12f=geom.getIeDocumentElementOffset();
_12d.pageX=_12d.clientX+geom.fixIeBiDiScrollLeft(_12e.scrollLeft||0)-_12f.x;
_12d.pageY=_12d.clientY+(_12e.scrollTop||0)-_12f.y;
}
};
return geom;
});
},"dojo/_base/html":function(){
define(["./kernel","../dom","../dom-style","../dom-attr","../dom-prop","../dom-class","../dom-construct","../dom-geometry"],function(dojo,dom,_130,attr,prop,cls,ctr,geom){
dojo.byId=dom.byId;
dojo.isDescendant=dom.isDescendant;
dojo.setSelectable=dom.setSelectable;
dojo.getAttr=attr.get;
dojo.setAttr=attr.set;
dojo.hasAttr=attr.has;
dojo.removeAttr=attr.remove;
dojo.getNodeProp=attr.getNodeProp;
dojo.attr=function(node,name,_131){
if(arguments.length==2){
return attr[typeof name=="string"?"get":"set"](node,name);
}
return attr.set(node,name,_131);
};
dojo.hasClass=cls.contains;
dojo.addClass=cls.add;
dojo.removeClass=cls.remove;
dojo.toggleClass=cls.toggle;
dojo.replaceClass=cls.replace;
dojo._toDom=dojo.toDom=ctr.toDom;
dojo.place=ctr.place;
dojo.create=ctr.create;
dojo.empty=function(node){
ctr.empty(node);
};
dojo._destroyElement=dojo.destroy=function(node){
ctr.destroy(node);
};
dojo._getPadExtents=dojo.getPadExtents=geom.getPadExtents;
dojo._getBorderExtents=dojo.getBorderExtents=geom.getBorderExtents;
dojo._getPadBorderExtents=dojo.getPadBorderExtents=geom.getPadBorderExtents;
dojo._getMarginExtents=dojo.getMarginExtents=geom.getMarginExtents;
dojo._getMarginSize=dojo.getMarginSize=geom.getMarginSize;
dojo._getMarginBox=dojo.getMarginBox=geom.getMarginBox;
dojo.setMarginBox=geom.setMarginBox;
dojo._getContentBox=dojo.getContentBox=geom.getContentBox;
dojo.setContentSize=geom.setContentSize;
dojo._isBodyLtr=dojo.isBodyLtr=geom.isBodyLtr;
dojo._docScroll=dojo.docScroll=geom.docScroll;
dojo._getIeDocumentElementOffset=dojo.getIeDocumentElementOffset=geom.getIeDocumentElementOffset;
dojo._fixIeBiDiScrollLeft=dojo.fixIeBiDiScrollLeft=geom.fixIeBiDiScrollLeft;
dojo.position=geom.position;
dojo.marginBox=function marginBox(node,box){
return box?geom.setMarginBox(node,box):geom.getMarginBox(node);
};
dojo.contentBox=function contentBox(node,box){
return box?geom.setContentSize(node,box):geom.getContentBox(node);
};
dojo.coords=function(node,_132){
dojo.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox().");
node=dom.byId(node);
var s=_130.getComputedStyle(node),mb=geom.getMarginBox(node,s);
var abs=geom.position(node,_132);
mb.x=abs.x;
mb.y=abs.y;
return mb;
};
dojo.getProp=prop.get;
dojo.setProp=prop.set;
dojo.prop=function(node,name,_133){
if(arguments.length==2){
return prop[typeof name=="string"?"get":"set"](node,name);
}
return prop.set(node,name,_133);
};
dojo.getStyle=_130.get;
dojo.setStyle=_130.set;
dojo.getComputedStyle=_130.getComputedStyle;
dojo.__toPixelValue=dojo.toPixelValue=_130.toPixelValue;
dojo.style=function(node,name,_134){
switch(arguments.length){
case 1:
return _130.get(node);
case 2:
return _130[typeof name=="string"?"get":"set"](node,name);
}
return _130.set(node,name,_134);
};
return dojo;
});
},"dojo/_base/array":function(){
define("dojo/_base/array",["./kernel","../has","./lang"],function(dojo,has,lang){
var _135={},u,_136;
function _137(){
_135={};
};
function _138(fn){
return _135[fn]=new Function("item","index","array",fn);
};
function _139(some){
var _13a=!some;
return function(a,fn,o){
var i=0,l=a&&a.length||0,_13b;
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_135[fn]||_138(fn);
}
if(o){
for(;i<l;++i){
_13b=!fn.call(o,a[i],i,a);
if(some^_13b){
return !_13b;
}
}
}else{
for(;i<l;++i){
_13b=!fn(a[i],i,a);
if(some^_13b){
return !_13b;
}
}
}
return _13a;
};
};
function _13c(up){
var _13d=1,_13e=0,_13f=0;
if(!up){
_13d=_13e=_13f=-1;
}
return function(a,x,from,last){
if(last&&_13d>0){
return _136.lastIndexOf(a,x,from);
}
var l=a&&a.length||0,end=up?l+_13f:_13e,i;
if(from===u){
i=up?_13e:l+_13f;
}else{
if(from<0){
i=l+from;
if(i<0){
i=_13e;
}
}else{
i=from>=l?l+_13f:from;
}
}
if(l&&typeof a=="string"){
a=a.split("");
}
for(;i!=end;i+=_13d){
if(a[i]==x){
return i;
}
}
return -1;
};
};
function _140(a,fn,o){
var i=0,l=a&&a.length||0;
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_135[fn]||_138(fn);
}
if(o){
for(;i<l;++i){
fn.call(o,a[i],i,a);
}
}else{
for(;i<l;++i){
fn(a[i],i,a);
}
}
};
function map(a,fn,o,Ctr){
var i=0,l=a&&a.length||0,out=new (Ctr||Array)(l);
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_135[fn]||_138(fn);
}
if(o){
for(;i<l;++i){
out[i]=fn.call(o,a[i],i,a);
}
}else{
for(;i<l;++i){
out[i]=fn(a[i],i,a);
}
}
return out;
};
function _141(a,fn,o){
var i=0,l=a&&a.length||0,out=[],_142;
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_135[fn]||_138(fn);
}
if(o){
for(;i<l;++i){
_142=a[i];
if(fn.call(o,_142,i,a)){
out.push(_142);
}
}
}else{
for(;i<l;++i){
_142=a[i];
if(fn(_142,i,a)){
out.push(_142);
}
}
}
return out;
};
_136={every:_139(false),some:_139(true),indexOf:_13c(true),lastIndexOf:_13c(false),forEach:_140,map:map,filter:_141,clearCache:_137};
1&&lang.mixin(dojo,_136);
return _136;
});
},"dojo/_base/Deferred":function(){
define("dojo/_base/Deferred",["./kernel","./lang"],function(dojo,lang){
var _143=function(){
};
var _144=Object.freeze||function(){
};
dojo.Deferred=function(_145){
var _146,_147,_148,head,_149;
var _14a=(this.promise={});
function _14b(_14c){
if(_147){
throw new Error("This deferred has already been resolved");
}
_146=_14c;
_147=true;
_14d();
};
function _14d(){
var _14e;
while(!_14e&&_149){
var _14f=_149;
_149=_149.next;
if((_14e=(_14f.progress==_143))){
_147=false;
}
var func=(_148?_14f.error:_14f.resolved);
if(func){
try{
var _150=func(_146);
if(_150&&typeof _150.then==="function"){
_150.then(lang.hitch(_14f.deferred,"resolve"),lang.hitch(_14f.deferred,"reject"),lang.hitch(_14f.deferred,"progress"));
continue;
}
var _151=_14e&&_150===undefined;
if(_14e&&!_151){
_148=_150 instanceof Error;
}
_14f.deferred[_151&&_148?"reject":"resolve"](_151?_146:_150);
}
catch(e){
_14f.deferred.reject(e);
}
}else{
if(_148){
_14f.deferred.reject(_146);
}else{
_14f.deferred.resolve(_146);
}
}
}
};
this.resolve=this.callback=function(_152){
this.fired=0;
this.results=[_152,null];
_14b(_152);
};
this.reject=this.errback=function(_153){
_148=true;
this.fired=1;
_14b(_153);
this.results=[null,_153];
if(!_153||_153.log!==false){
(dojo.config.deferredOnError||function(x){
console.error(x);
})(_153);
}
};
this.progress=function(_154){
var _155=_149;
while(_155){
var _156=_155.progress;
_156&&_156(_154);
_155=_155.next;
}
};
this.addCallbacks=function(_157,_158){
this.then(_157,_158,_143);
return this;
};
_14a.then=this.then=function(_159,_15a,_15b){
var _15c=_15b==_143?this:new dojo.Deferred(_14a.cancel);
var _15d={resolved:_159,error:_15a,progress:_15b,deferred:_15c};
if(_149){
head=head.next=_15d;
}else{
_149=head=_15d;
}
if(_147){
_14d();
}
return _15c.promise;
};
var _15e=this;
_14a.cancel=this.cancel=function(){
if(!_147){
var _15f=_145&&_145(_15e);
if(!_147){
if(!(_15f instanceof Error)){
_15f=new Error(_15f);
}
_15f.log=false;
_15e.reject(_15f);
}
}
};
_144(_14a);
};
lang.extend(dojo.Deferred,{addCallback:function(_160){
return this.addCallbacks(lang.hitch.apply(dojo,arguments));
},addErrback:function(_161){
return this.addCallbacks(null,lang.hitch.apply(dojo,arguments));
},addBoth:function(_162){
var _163=lang.hitch.apply(dojo,arguments);
return this.addCallbacks(_163,_163);
},fired:-1});
dojo.Deferred.when=dojo.when=function(_164,_165,_166,_167){
if(_164&&typeof _164.then==="function"){
return _164.then(_165,_166,_167);
}
return _165?_165(_164):_164;
};
return dojo.Deferred;
});
},"dojo/uacss":function(){
define(["./dom-geometry","./_base/lang","./ready","./_base/sniff","./_base/window"],function(_168,lang,_169,has,_16a){
var html=_16a.doc.documentElement,ie=has("ie"),_16b=has("opera"),maj=Math.floor,ff=has("ff"),_16c=_168.boxModel.replace(/-/,""),_16d={"dj_ie":ie,"dj_ie6":maj(ie)==6,"dj_ie7":maj(ie)==7,"dj_ie8":maj(ie)==8,"dj_ie9":maj(ie)==9,"dj_quirks":has("quirks"),"dj_iequirks":ie&&has("quirks"),"dj_opera":_16b,"dj_khtml":has("khtml"),"dj_webkit":has("webkit"),"dj_safari":has("safari"),"dj_chrome":has("chrome"),"dj_gecko":has("mozilla"),"dj_ff3":maj(ff)==3};
_16d["dj_"+_16c]=true;
var _16e="";
for(var clz in _16d){
if(_16d[clz]){
_16e+=clz+" ";
}
}
html.className=lang.trim(html.className+" "+_16e);
_169(90,function(){
if(!_168.isBodyLtr()){
var _16f="dj_rtl dijitRtl "+_16e.replace(/ /g,"-rtl ");
html.className=lang.trim(html.className+" "+_16f+"dj_rtl dijitRtl "+_16e.replace(/ /g,"-rtl "));
}
});
return has;
});
},"dojo/dom":function(){
define(["./_base/sniff","./_base/lang","./_base/window"],function(has,lang,win){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
var dom={};
if(has("ie")){
dom.byId=function(id,doc){
if(typeof id!="string"){
return id;
}
var _170=doc||win.doc,te=id&&_170.getElementById(id);
if(te&&(te.attributes.id.value==id||te.id==id)){
return te;
}else{
var eles=_170.all[id];
if(!eles||eles.nodeName){
eles=[eles];
}
var i=0;
while((te=eles[i++])){
if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){
return te;
}
}
}
};
}else{
dom.byId=function(id,doc){
return ((typeof id=="string")?(doc||win.doc).getElementById(id):id)||null;
};
}
dom.isDescendant=function(node,_171){
try{
node=dom.byId(node);
_171=dom.byId(_171);
while(node){
if(node==_171){
return true;
}
node=node.parentNode;
}
}
catch(e){
}
return false;
};
dom.setSelectable=function(node,_172){
node=dom.byId(node);
if(has("mozilla")){
node.style.MozUserSelect=_172?"":"none";
}else{
if(has("khtml")||has("webkit")){
node.style.KhtmlUserSelect=_172?"auto":"none";
}else{
if(has("ie")){
var v=(node.unselectable=_172?"":"on"),cs=node.getElementsByTagName("*"),i=0,l=cs.length;
for(;i<l;++i){
cs.item(i).unselectable=v;
}
}
}
}
};
return dom;
});
},"dojo/text":function(){
define(["./_base/kernel","require","./has","./_base/xhr"],function(dojo,_173,has,xhr){
var _174;
if(1){
_174=function(url,sync,load){
xhr("GET",{url:url,sync:!!sync,load:load});
};
}else{
if(_173.getText){
_174=_173.getText;
}else{
console.error("dojo/text plugin failed to load because loader does not support getText");
}
}
var _175={},_176=function(text){
if(text){
text=text.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");
var _177=text.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
if(_177){
text=_177[1];
}
}else{
text="";
}
return text;
},_178={},_179={},_17a={dynamic:true,normalize:function(id,_17b){
var _17c=id.split("!"),url=_17c[0];
return (/^\./.test(url)?_17b(url):url)+(_17c[1]?"!"+_17c[1]:"");
},load:function(id,_17d,load){
var _17e=id.split("!"),_17f=_17e.length>1,_180=_17e[0],url=_17d.toUrl(_17e[0]),text=_178,_181=function(text){
load(_17f?_176(text):text);
};
if(_180 in _175){
text=_175[_180];
}else{
if(url in _17d.cache){
text=_17d.cache[url];
}else{
if(url in _175){
text=_175[url];
}
}
}
if(text===_178){
if(_179[url]){
_179[url].push(_181);
}else{
var _182=_179[url]=[_181];
_174(url,!_17d.async,function(text){
_175[_180]=_175[url]=text;
for(var i=0;i<_182.length;){
_182[i++](text);
}
delete _179[url];
});
}
}else{
_181(text);
}
}};
dojo.cache=function(_183,url,_184){
var key;
if(typeof _183=="string"){
if(/\//.test(_183)){
key=_183;
_184=url;
}else{
key=_173.toUrl(_183.replace(/\./g,"/")+(url?("/"+url):""));
}
}else{
key=_183+"";
_184=url;
}
var val=(_184!=undefined&&typeof _184!="string")?_184.value:_184,_185=_184&&_184.sanitize;
if(typeof val=="string"){
_175[key]=val;
return _185?_176(val):val;
}else{
if(val===null){
delete _175[key];
return null;
}else{
if(!(key in _175)){
_174(key,true,function(text){
_175[key]=text;
});
}
return _185?_176(_175[key]):_175[key];
}
}
};
return _17a;
});
},"dojo/dom-style":function(){
define(["./_base/sniff","./dom"],function(has,dom){
var _186,_187={};
if(has("webkit")){
_186=function(node){
var s;
if(node.nodeType==1){
var dv=node.ownerDocument.defaultView;
s=dv.getComputedStyle(node,null);
if(!s&&node.style){
node.style.display="";
s=dv.getComputedStyle(node,null);
}
}
return s||{};
};
}else{
if(has("ie")&&(has("ie")<9||has("quirks"))){
_186=function(node){
return node.nodeType==1?node.currentStyle:{};
};
}else{
_186=function(node){
return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};
};
}
}
_187.getComputedStyle=_186;
var _188;
if(!has("ie")){
_188=function(_189,_18a){
return parseFloat(_18a)||0;
};
}else{
_188=function(_18b,_18c){
if(!_18c){
return 0;
}
if(_18c=="medium"){
return 4;
}
if(_18c.slice&&_18c.slice(-2)=="px"){
return parseFloat(_18c);
}
var s=_18b.style,rs=_18b.runtimeStyle,cs=_18b.currentStyle,_18d=s.left,_18e=rs.left;
rs.left=cs.left;
try{
s.left=_18c;
_18c=s.pixelLeft;
}
catch(e){
_18c=0;
}
s.left=_18d;
rs.left=_18e;
return _18c;
};
}
_187.toPixelValue=_188;
var astr="DXImageTransform.Microsoft.Alpha";
var af=function(n,f){
try{
return n.filters.item(astr);
}
catch(e){
return f?{}:null;
}
};
var _18f=has("ie")<9||(has("ie")&&has("quirks"))?function(node){
try{
return af(node).Opacity/100;
}
catch(e){
return 1;
}
}:function(node){
return _186(node).opacity;
};
var _190=has("ie")<9||(has("ie")&&has("quirks"))?function(node,_191){
var ov=_191*100,_192=_191==1;
node.style.zoom=_192?"":1;
if(!af(node)){
if(_192){
return _191;
}
node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";
}else{
af(node,1).Opacity=ov;
}
af(node,1).Enabled=!_192;
if(node.tagName.toLowerCase()=="tr"){
for(var td=node.firstChild;td;td=td.nextSibling){
if(td.tagName.toLowerCase()=="td"){
_190(td,_191);
}
}
}
return _191;
}:function(node,_193){
return node.style.opacity=_193;
};
var _194={left:true,top:true};
var _195=/margin|padding|width|height|max|min|offset/;
function _196(node,type,_197){
type=type.toLowerCase();
if(has("ie")){
if(_197=="auto"){
if(type=="height"){
return node.offsetHeight;
}
if(type=="width"){
return node.offsetWidth;
}
}
if(type=="fontweight"){
switch(_197){
case 700:
return "bold";
case 400:
default:
return "normal";
}
}
}
if(!(type in _194)){
_194[type]=_195.test(type);
}
return _194[type]?_188(node,_197):_197;
};
var _198=has("ie")?"styleFloat":"cssFloat",_199={"cssFloat":_198,"styleFloat":_198,"float":_198};
_187.get=function getStyle(node,name){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
if(l==2&&op){
return _18f(n);
}
name=_199[name]||name;
var s=_187.getComputedStyle(n);
return (l==1)?s:_196(n,name,s[name]||n.style[name]);
};
_187.set=function setStyle(node,name,_19a){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
name=_199[name]||name;
if(l==3){
return op?_190(n,_19a):n.style[name]=_19a;
}
for(var x in name){
_187.set(node,x,name[x]);
}
return _187.getComputedStyle(n);
};
return _187;
});
},"dijit/hccss":function(){
define("dijit/hccss",["require","dojo/_base/config","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/ready","dojo/_base/sniff","dojo/_base/window"],function(_19b,_19c,_19d,_19e,_19f,_1a0,has,win){
if(has("ie")||has("mozilla")){
_1a0(90,function(){
var div=_19e.create("div",{id:"a11yTestNode",style:{cssText:"border: 1px solid;"+"border-color:red green;"+"position: absolute;"+"height: 5px;"+"top: -999px;"+"background-image: url(\""+(_19c.blankGif||_19b.toUrl("dojo/resources/blank.gif"))+"\");"}},win.body());
var cs=_19f.getComputedStyle(div);
if(cs){
var _1a1=cs.backgroundImage;
var _1a2=(cs.borderTopColor==cs.borderRightColor)||(_1a1!=null&&(_1a1=="none"||_1a1=="url(invalid-url:)"));
if(_1a2){
_19d.add(win.body(),"dijit_a11y");
}
if(has("ie")){
div.outerHTML="";
}else{
win.body().removeChild(div);
}
}
});
}
});
},"dijit/form/ComboButton":function(){
require({cache:{"url:dijit/form/templates/ComboButton.html":"<table class=\"dijit dijitReset dijitInline dijitLeft\"\n\tcellspacing='0' cellpadding='0' role=\"presentation\"\n\t><tbody role=\"presentation\"><tr role=\"presentation\"\n\t\t><td class=\"dijitReset dijitStretch dijitButtonNode\" data-dojo-attach-point=\"buttonNode\" data-dojo-attach-event=\"ondijitclick:_onClick,onkeypress:_onButtonKeyPress\"\n\t\t><div id=\"${id}_button\" class=\"dijitReset dijitButtonContents\"\n\t\t\tdata-dojo-attach-point=\"titleNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><div class=\"dijitReset dijitInline dijitIcon\" data-dojo-attach-point=\"iconNode\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitInline dijitButtonText\" id=\"${id}_label\" data-dojo-attach-point=\"containerNode\" role=\"presentation\"></div\n\t\t></div\n\t\t></td\n\t\t><td id=\"${id}_arrow\" class='dijitReset dijitRight dijitButtonNode dijitArrowButton'\n\t\t\tdata-dojo-attach-point=\"_popupStateNode,focusNode,_buttonNode\"\n\t\t\tdata-dojo-attach-event=\"onkeypress:_onArrowKeyPress\"\n\t\t\ttitle=\"${optionsTitle}\"\n\t\t\trole=\"button\" aria-haspopup=\"true\"\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" role=\"presentation\">&#9660;</div\n\t\t></td\n\t\t><td style=\"display:none !important;\"\n\t\t\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" data-dojo-attach-point=\"valueNode\"\n\t\t/></td></tr></tbody\n></table>\n"}});
define("dijit/form/ComboButton",["dojo/_base/declare","dojo/_base/event","dojo/keys","../focus","./DropDownButton","dojo/text!./templates/ComboButton.html"],function(_1a3,_1a4,keys,_1a5,_1a6,_1a7){
return _1a3("dijit.form.ComboButton",_1a6,{templateString:_1a7,_setIdAttr:"",_setTabIndexAttr:["focusNode","titleNode"],_setTitleAttr:"titleNode",optionsTitle:"",baseClass:"dijitComboButton",cssStateNodes:{"buttonNode":"dijitButtonNode","titleNode":"dijitButtonContents","_popupStateNode":"dijitDownArrowButton"},_focusedNode:null,_onButtonKeyPress:function(evt){
if(evt.charOrCode==keys[this.isLeftToRight()?"RIGHT_ARROW":"LEFT_ARROW"]){
_1a5.focus(this._popupStateNode);
_1a4.stop(evt);
}
},_onArrowKeyPress:function(evt){
if(evt.charOrCode==keys[this.isLeftToRight()?"LEFT_ARROW":"RIGHT_ARROW"]){
_1a5.focus(this.titleNode);
_1a4.stop(evt);
}
},focus:function(_1a8){
if(!this.disabled){
_1a5.focus(_1a8=="start"?this.titleNode:this._popupStateNode);
}
}});
});
},"dojo/dom-form":function(){
define("dojo/dom-form",["./_base/lang","./dom","./io-query","./json"],function(lang,dom,ioq,json){
function _1a9(obj,name,_1aa){
if(_1aa===null){
return;
}
var val=obj[name];
if(typeof val=="string"){
obj[name]=[val,_1aa];
}else{
if(lang.isArray(val)){
val.push(_1aa);
}else{
obj[name]=_1aa;
}
}
};
var _1ab="file|submit|image|reset|button";
var form={fieldToObject:function fieldToObject(_1ac){
var ret=null;
_1ac=dom.byId(_1ac);
if(_1ac){
var _1ad=_1ac.name,type=(_1ac.type||"").toLowerCase();
if(_1ad&&type&&!_1ac.disabled){
if(type=="radio"||type=="checkbox"){
if(_1ac.checked){
ret=_1ac.value;
}
}else{
if(_1ac.multiple){
ret=[];
var _1ae=[_1ac.firstChild];
while(_1ae.length){
for(var node=_1ae.pop();node;node=node.nextSibling){
if(node.nodeType==1&&node.tagName.toLowerCase()=="option"){
if(node.selected){
ret.push(node.value);
}
}else{
if(node.nextSibling){
_1ae.push(node.nextSibling);
}
if(node.firstChild){
_1ae.push(node.firstChild);
}
break;
}
}
}
}else{
ret=_1ac.value;
}
}
}
}
return ret;
},toObject:function formToObject(_1af){
var ret={},_1b0=dom.byId(_1af).elements;
for(var i=0,l=_1b0.length;i<l;++i){
var item=_1b0[i],_1b1=item.name,type=(item.type||"").toLowerCase();
if(_1b1&&type&&_1ab.indexOf(type)<0&&!item.disabled){
_1a9(ret,_1b1,form.fieldToObject(item));
if(type=="image"){
ret[_1b1+".x"]=ret[_1b1+".y"]=ret[_1b1].x=ret[_1b1].y=0;
}
}
}
return ret;
},toQuery:function formToQuery(_1b2){
return ioq.objectToQuery(form.toObject(_1b2));
},toJson:function formToJson(_1b3,_1b4){
return json.stringify(form.toObject(_1b3),null,_1b4?4:0);
}};
return form;
});
},"dijit/_Contained":function(){
define("dijit/_Contained",["dojo/_base/declare","./registry"],function(_1b5,_1b6){
return _1b5("dijit._Contained",null,{_getSibling:function(_1b7){
var node=this.domNode;
do{
node=node[_1b7+"Sibling"];
}while(node&&node.nodeType!=1);
return node&&_1b6.byNode(node);
},getPreviousSibling:function(){
return this._getSibling("previous");
},getNextSibling:function(){
return this._getSibling("next");
},getIndexInParent:function(){
var p=this.getParent();
if(!p||!p.getIndexOfChild){
return -1;
}
return p.getIndexOfChild(this);
}});
});
},"dijit/form/ToggleButton":function(){
define("dijit/form/ToggleButton",["dojo/_base/declare","dojo/_base/kernel","./Button","./_ToggleButtonMixin"],function(_1b8,_1b9,_1ba,_1bb){
return _1b8("dijit.form.ToggleButton",[_1ba,_1bb],{baseClass:"dijitToggleButton",setChecked:function(_1bc){
_1b9.deprecated("setChecked("+_1bc+") is deprecated. Use set('checked',"+_1bc+") instead.","","2.0");
this.set("checked",_1bc);
}});
});
},"dojo/parser":function(){
define(["./_base/kernel","./_base/lang","./_base/array","./_base/html","./_base/window","./_base/url","./_base/json","./aspect","./date/stamp","./query","./on","./ready"],function(dojo,_1bd,_1be,_1bf,_1c0,_1c1,_1c2,_1c3,_1c4,_1c5,don){
new Date("X");
var _1c6={"dom-attributes-explicit":document.createElement("div").attributes.length<40};
function has(_1c7){
return _1c6[_1c7];
};
dojo.parser=new function(){
var _1c8={};
function _1c9(_1ca){
var map={};
for(var name in _1ca){
if(name.charAt(0)=="_"){
continue;
}
map[name.toLowerCase()]=name;
}
return map;
};
_1c3.after(_1bd,"extend",function(){
_1c8={};
},true);
var _1cb={};
this._functionFromScript=function(_1cc,_1cd){
var _1ce="";
var _1cf="";
var _1d0=(_1cc.getAttribute(_1cd+"args")||_1cc.getAttribute("args"));
if(_1d0){
_1be.forEach(_1d0.split(/\s*,\s*/),function(part,idx){
_1ce+="var "+part+" = arguments["+idx+"]; ";
});
}
var _1d1=_1cc.getAttribute("with");
if(_1d1&&_1d1.length){
_1be.forEach(_1d1.split(/\s*,\s*/),function(part){
_1ce+="with("+part+"){";
_1cf+="}";
});
}
return new Function(_1ce+_1cc.innerHTML+_1cf);
};
this.instantiate=function(_1d2,_1d3,args){
var _1d4=[],_1d3=_1d3||{};
args=args||{};
var _1d5=(args.scope||dojo._scopeName)+"Type",_1d6="data-"+(args.scope||dojo._scopeName)+"-",_1d7=_1d6+"type",_1d8=_1d6+"props",_1d9=_1d6+"attach-point",_1da=_1d6+"attach-event",_1db=_1d6+"id";
var _1dc={};
_1be.forEach([_1d8,_1d7,_1d5,_1db,"jsId",_1d9,_1da,"dojoAttachPoint","dojoAttachEvent","class","style"],function(name){
_1dc[name.toLowerCase()]=name.replace(args.scope,"dojo");
});
_1be.forEach(_1d2,function(obj){
if(!obj){
return;
}
var node=obj.node||obj,type=_1d5 in _1d3?_1d3[_1d5]:obj.node?obj.type:(node.getAttribute(_1d7)||node.getAttribute(_1d5)),ctor=_1cb[type]||(_1cb[type]=_1bd.getObject(type)),_1dd=ctor&&ctor.prototype;
if(!ctor){
throw new Error("Could not load class '"+type);
}
var _1de={};
if(args.defaults){
_1bd.mixin(_1de,args.defaults);
}
if(obj.inherited){
_1bd.mixin(_1de,obj.inherited);
}
var _1df;
if(has("dom-attributes-explicit")){
_1df=node.attributes;
}else{
var _1e0=/^input$|^img$/i.test(node.nodeName)?node:node.cloneNode(false),_1e1=_1e0.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*/,"").replace(/>.*$/,"");
_1df=_1be.map(_1e1.split(/\s+/),function(name){
var _1e2=name.toLowerCase();
return {name:name,value:(node.nodeName=="LI"&&name=="value")||_1e2=="enctype"?node.getAttribute(_1e2):node.getAttributeNode(_1e2).value,specified:true};
});
}
var i=0,item;
while(item=_1df[i++]){
if(!item||!item.specified){
continue;
}
var name=item.name,_1e3=name.toLowerCase(),_1e4=item.value;
if(_1e3 in _1dc){
switch(_1dc[_1e3]){
case "data-dojo-props":
var _1e5=_1e4;
break;
case "data-dojo-id":
case "jsId":
var _1e6=_1e4;
break;
case "data-dojo-attach-point":
case "dojoAttachPoint":
_1de.dojoAttachPoint=_1e4;
break;
case "data-dojo-attach-event":
case "dojoAttachEvent":
_1de.dojoAttachEvent=_1e4;
break;
case "class":
_1de["class"]=node.className;
break;
case "style":
_1de["style"]=node.style&&node.style.cssText;
break;
}
}else{
if(!(name in _1dd)){
var map=(_1c8[type]||(_1c8[type]=_1c9(_1dd)));
name=map[_1e3]||name;
}
if(name in _1dd){
switch(typeof _1dd[name]){
case "string":
_1de[name]=_1e4;
break;
case "number":
_1de[name]=_1e4.length?Number(_1e4):NaN;
break;
case "boolean":
_1de[name]=_1e4.toLowerCase()!="false";
break;
case "function":
if(_1e4===""||_1e4.search(/[^\w\.]+/i)!=-1){
_1de[name]=new Function(_1e4);
}else{
_1de[name]=_1bd.getObject(_1e4,false)||new Function(_1e4);
}
break;
default:
var pVal=_1dd[name];
_1de[name]=(pVal&&"length" in pVal)?(_1e4?_1e4.split(/\s*,\s*/):[]):(pVal instanceof Date)?(_1e4==""?new Date(""):_1e4=="now"?new Date():_1c4.fromISOString(_1e4)):(pVal instanceof dojo._Url)?(dojo.baseUrl+_1e4):_1c2.fromJson(_1e4);
}
}else{
_1de[name]=_1e4;
}
}
}
if(_1e5){
try{
_1e5=_1c2.fromJson.call(args.propsThis,"{"+_1e5+"}");
_1bd.mixin(_1de,_1e5);
}
catch(e){
throw new Error(e.toString()+" in data-dojo-props='"+_1e5+"'");
}
}
_1bd.mixin(_1de,_1d3);
var _1e7=obj.node?obj.scripts:(ctor&&(ctor._noScript||_1dd._noScript)?[]:_1c5("> script[type^='dojo/']",node));
var _1e8=[],_1e9=[],_1ea=[],on=[];
if(_1e7){
for(i=0;i<_1e7.length;i++){
var _1eb=_1e7[i];
node.removeChild(_1eb);
var _1ec=(_1eb.getAttribute(_1d6+"event")||_1eb.getAttribute("event")),prop=_1eb.getAttribute(_1d6+"prop"),type=_1eb.getAttribute("type"),nf=this._functionFromScript(_1eb,_1d6);
if(_1ec){
if(type=="dojo/connect"){
_1e8.push({event:_1ec,func:nf});
}else{
if(type=="dojo/on"){
on.push({event:_1ec,func:nf});
}else{
_1de[_1ec]=nf;
}
}
}else{
if(type=="dojo/watch"){
_1ea.push({prop:prop,func:nf});
}else{
_1e9.push(nf);
}
}
}
}
var _1ed=ctor.markupFactory||_1dd.markupFactory;
var _1ee=_1ed?_1ed(_1de,node,ctor):new ctor(_1de,node);
_1d4.push(_1ee);
if(_1e6){
_1bd.setObject(_1e6,_1ee);
}
for(i=0;i<_1e8.length;i++){
_1c3.after(_1ee,_1e8[i].event,dojo.hitch(_1ee,_1e8[i].func),true);
}
for(i=0;i<_1e9.length;i++){
_1e9[i].call(_1ee);
}
for(i=0;i<_1ea.length;i++){
_1ee.watch(_1ea[i].prop,_1ea[i].func);
}
for(i=0;i<on.length;i++){
don(_1ee,on[i].event,on[i].func);
}
},this);
if(!_1d3._started){
_1be.forEach(_1d4,function(_1ef){
if(!args.noStart&&_1ef&&_1bd.isFunction(_1ef.startup)&&!_1ef._started){
_1ef.startup();
}
});
}
return _1d4;
};
this.parse=function(_1f0,args){
var root;
if(!args&&_1f0&&_1f0.rootNode){
args=_1f0;
root=args.rootNode;
}else{
root=_1f0;
}
root=root?_1bf.byId(root):_1c0.body();
args=args||{};
var _1f1=(args.scope||dojo._scopeName)+"Type",_1f2="data-"+(args.scope||dojo._scopeName)+"-",_1f3=_1f2+"type",_1f4=_1f2+"textdir";
var list=[];
var node=root.firstChild;
var _1f5=args&&args.inherited;
if(!_1f5){
function _1f6(node,attr){
return (node.getAttribute&&node.getAttribute(attr))||(node!==_1c0.doc&&node!==_1c0.doc.documentElement&&node.parentNode?_1f6(node.parentNode,attr):null);
};
_1f5={dir:_1f6(root,"dir"),lang:_1f6(root,"lang"),textDir:_1f6(root,_1f4)};
for(var key in _1f5){
if(!_1f5[key]){
delete _1f5[key];
}
}
}
var _1f7={inherited:_1f5};
var _1f8;
var _1f9;
function _1fa(_1fb){
if(!_1fb.inherited){
_1fb.inherited={};
var node=_1fb.node,_1fc=_1fa(_1fb.parent);
var _1fd={dir:node.getAttribute("dir")||_1fc.dir,lang:node.getAttribute("lang")||_1fc.lang,textDir:node.getAttribute(_1f4)||_1fc.textDir};
for(var key in _1fd){
if(_1fd[key]){
_1fb.inherited[key]=_1fd[key];
}
}
}
return _1fb.inherited;
};
while(true){
if(!node){
if(!_1f7||!_1f7.node){
break;
}
node=_1f7.node.nextSibling;
_1f8=_1f7.scripts;
_1f9=false;
_1f7=_1f7.parent;
continue;
}
if(node.nodeType!=1){
node=node.nextSibling;
continue;
}
if(_1f8&&node.nodeName.toLowerCase()=="script"){
type=node.getAttribute("type");
if(type&&/^dojo\/\w/i.test(type)){
_1f8.push(node);
}
node=node.nextSibling;
continue;
}
if(_1f9){
node=node.nextSibling;
continue;
}
var type=node.getAttribute(_1f3)||node.getAttribute(_1f1);
var _1fe=node.firstChild;
if(!type&&(!_1fe||(_1fe.nodeType==3&&!_1fe.nextSibling))){
node=node.nextSibling;
continue;
}
var _1ff={node:node,scripts:_1f8,parent:_1f7};
var ctor=type&&(_1cb[type]||(_1cb[type]=_1bd.getObject(type))),_200=ctor&&!ctor.prototype._noScript?[]:null;
if(type){
list.push({"type":type,node:node,scripts:_200,inherited:_1fa(_1ff)});
}
node=_1fe;
_1f8=_200;
_1f9=ctor&&ctor.prototype.stopParser&&!(args&&args.template);
_1f7=_1ff;
}
var _201=args&&args.template?{template:true}:null;
return this.instantiate(list,_201,args);
};
}();
if(dojo.config.parseOnLoad){
dojo.ready(100,dojo.parser,"parse");
}
return dojo.parser;
});
},"dijit/form/_FormMixin":function(){
define("dijit/form/_FormMixin",["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/window"],function(_202,_203,_204,lang,_205){
return _203("dijit.form._FormMixin",null,{state:"",_getDescendantFormWidgets:function(_206){
var res=[];
_202.forEach(_206||this.getChildren(),function(_207){
if("value" in _207){
res.push(_207);
}else{
res=res.concat(this._getDescendantFormWidgets(_207.getChildren()));
}
},this);
return res;
},reset:function(){
_202.forEach(this._getDescendantFormWidgets(),function(_208){
if(_208.reset){
_208.reset();
}
});
},validate:function(){
var _209=false;
return _202.every(_202.map(this._getDescendantFormWidgets(),function(_20a){
_20a._hasBeenBlurred=true;
var _20b=_20a.disabled||!_20a.validate||_20a.validate();
if(!_20b&&!_209){
_205.scrollIntoView(_20a.containerNode||_20a.domNode);
_20a.focus();
_209=true;
}
return _20b;
}),function(item){
return item;
});
},setValues:function(val){
_204.deprecated(this.declaredClass+"::setValues() is deprecated. Use set('value', val) instead.","","2.0");
return this.set("value",val);
},_setValueAttr:function(obj){
var map={};
_202.forEach(this._getDescendantFormWidgets(),function(_20c){
if(!_20c.name){
return;
}
var _20d=map[_20c.name]||(map[_20c.name]=[]);
_20d.push(_20c);
});
for(var name in map){
if(!map.hasOwnProperty(name)){
continue;
}
var _20e=map[name],_20f=lang.getObject(name,false,obj);
if(_20f===undefined){
continue;
}
if(!lang.isArray(_20f)){
_20f=[_20f];
}
if(typeof _20e[0].checked=="boolean"){
_202.forEach(_20e,function(w){
w.set("value",_202.indexOf(_20f,w.value)!=-1);
});
}else{
if(_20e[0].multiple){
_20e[0].set("value",_20f);
}else{
_202.forEach(_20e,function(w,i){
w.set("value",_20f[i]);
});
}
}
}
},getValues:function(){
_204.deprecated(this.declaredClass+"::getValues() is deprecated. Use get('value') instead.","","2.0");
return this.get("value");
},_getValueAttr:function(){
var obj={};
_202.forEach(this._getDescendantFormWidgets(),function(_210){
var name=_210.name;
if(!name||_210.disabled){
return;
}
var _211=_210.get("value");
if(typeof _210.checked=="boolean"){
if(/Radio/.test(_210.declaredClass)){
if(_211!==false){
lang.setObject(name,_211,obj);
}else{
_211=lang.getObject(name,false,obj);
if(_211===undefined){
lang.setObject(name,null,obj);
}
}
}else{
var ary=lang.getObject(name,false,obj);
if(!ary){
ary=[];
lang.setObject(name,ary,obj);
}
if(_211!==false){
ary.push(_211);
}
}
}else{
var prev=lang.getObject(name,false,obj);
if(typeof prev!="undefined"){
if(lang.isArray(prev)){
prev.push(_211);
}else{
lang.setObject(name,[prev,_211],obj);
}
}else{
lang.setObject(name,_211,obj);
}
}
});
return obj;
},isValid:function(){
return this.state=="";
},onValidStateChange:function(){
},_getState:function(){
var _212=_202.map(this._descendants,function(w){
return w.get("state")||"";
});
return _202.indexOf(_212,"Error")>=0?"Error":_202.indexOf(_212,"Incomplete")>=0?"Incomplete":"";
},disconnectChildren:function(){
_202.forEach(this._childConnections||[],lang.hitch(this,"disconnect"));
_202.forEach(this._childWatches||[],function(w){
w.unwatch();
});
},connectChildren:function(_213){
var _214=this;
this.disconnectChildren();
this._descendants=this._getDescendantFormWidgets();
var set=_213?function(name,val){
_214[name]=val;
}:lang.hitch(this,"_set");
set("value",this.get("value"));
set("state",this._getState());
var _215=(this._childConnections=[]),_216=(this._childWatches=[]);
_202.forEach(_202.filter(this._descendants,function(item){
return item.validate;
}),function(_217){
_202.forEach(["state","disabled"],function(attr){
_216.push(_217.watch(attr,function(){
_214.set("state",_214._getState());
}));
});
});
var _218=function(){
if(_214._onChangeDelayTimer){
clearTimeout(_214._onChangeDelayTimer);
}
_214._onChangeDelayTimer=setTimeout(function(){
delete _214._onChangeDelayTimer;
_214._set("value",_214.get("value"));
},10);
};
_202.forEach(_202.filter(this._descendants,function(item){
return item.onChange;
}),function(_219){
_215.push(_214.connect(_219,"onChange",_218));
_216.push(_219.watch("disabled",_218));
});
},startup:function(){
this.inherited(arguments);
this.connectChildren(true);
this.watch("state",function(attr,_21a,_21b){
this.onValidStateChange(_21b=="");
});
},destroy:function(){
this.disconnectChildren();
this.inherited(arguments);
}});
});
},"dijit/layout/StackController":function(){
define("dijit/layout/StackController",["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/keys","dojo/_base/lang","dojo/_base/sniff","../focus","../registry","../_Widget","../_TemplatedMixin","../_Container","../form/ToggleButton","dojo/i18n!../nls/common"],function(_21c,_21d,_21e,keys,lang,has,_21f,_220,_221,_222,_223,_224){
var _225=_21d("dijit.layout._StackButton",_224,{tabIndex:"-1",closeButton:false,_setCheckedAttr:function(_226,_227){
this.inherited(arguments);
this.focusNode.removeAttribute("aria-pressed");
},buildRendering:function(evt){
this.inherited(arguments);
(this.focusNode||this.domNode).setAttribute("role","tab");
},onClick:function(){
_21f.focus(this.focusNode);
},onClickCloseButton:function(evt){
evt.stopPropagation();
}});
var _228=_21d("dijit.layout.StackController",[_221,_222,_223],{baseClass:"dijitStackController",templateString:"<span role='tablist' data-dojo-attach-event='onkeypress'></span>",containerId:"",buttonWidget:_225,constructor:function(){
this.pane2button={};
this.pane2connects={};
this.pane2watches={};
},postCreate:function(){
this.inherited(arguments);
this.subscribe(this.containerId+"-startup","onStartup");
this.subscribe(this.containerId+"-addChild","onAddChild");
this.subscribe(this.containerId+"-removeChild","onRemoveChild");
this.subscribe(this.containerId+"-selectChild","onSelectChild");
this.subscribe(this.containerId+"-containerKeyPress","onContainerKeyPress");
},onStartup:function(info){
_21c.forEach(info.children,this.onAddChild,this);
if(info.selected){
this.onSelectChild(info.selected);
}
},destroy:function(){
for(var pane in this.pane2button){
this.onRemoveChild(_220.byId(pane));
}
this.inherited(arguments);
},onAddChild:function(page,_229){
var cls=lang.isString(this.buttonWidget)?lang.getObject(this.buttonWidget):this.buttonWidget;
var _22a=new cls({id:this.id+"_"+page.id,label:page.title,dir:page.dir,lang:page.lang,textDir:page.textDir,showLabel:page.showTitle,iconClass:page.iconClass,closeButton:page.closable,title:page.tooltip});
_22a.focusNode.setAttribute("aria-selected","false");
var _22b=["title","showTitle","iconClass","closable","tooltip"],_22c=["label","showLabel","iconClass","closeButton","title"];
this.pane2watches[page.id]=_21c.map(_22b,function(_22d,idx){
return page.watch(_22d,function(name,_22e,_22f){
_22a.set(_22c[idx],_22f);
});
});
this.pane2connects[page.id]=[this.connect(_22a,"onClick",lang.hitch(this,"onButtonClick",page)),this.connect(_22a,"onClickCloseButton",lang.hitch(this,"onCloseButtonClick",page))];
this.addChild(_22a,_229);
this.pane2button[page.id]=_22a;
page.controlButton=_22a;
if(!this._currentChild){
_22a.focusNode.setAttribute("tabIndex","0");
_22a.focusNode.setAttribute("aria-selected","true");
this._currentChild=page;
}
if(!this.isLeftToRight()&&has("ie")&&this._rectifyRtlTabList){
this._rectifyRtlTabList();
}
},onRemoveChild:function(page){
if(this._currentChild===page){
this._currentChild=null;
}
_21c.forEach(this.pane2connects[page.id],lang.hitch(this,"disconnect"));
delete this.pane2connects[page.id];
_21c.forEach(this.pane2watches[page.id],function(w){
w.unwatch();
});
delete this.pane2watches[page.id];
var _230=this.pane2button[page.id];
if(_230){
this.removeChild(_230);
delete this.pane2button[page.id];
_230.destroy();
}
delete page.controlButton;
},onSelectChild:function(page){
if(!page){
return;
}
if(this._currentChild){
var _231=this.pane2button[this._currentChild.id];
_231.set("checked",false);
_231.focusNode.setAttribute("aria-selected","false");
_231.focusNode.setAttribute("tabIndex","-1");
}
var _232=this.pane2button[page.id];
_232.set("checked",true);
_232.focusNode.setAttribute("aria-selected","true");
this._currentChild=page;
_232.focusNode.setAttribute("tabIndex","0");
var _233=_220.byId(this.containerId);
_233.containerNode.setAttribute("aria-labelledby",_232.id);
},onButtonClick:function(page){
if(this._currentChild.id===page.id){
var _234=this.pane2button[page.id];
_234.set("checked",true);
}
var _235=_220.byId(this.containerId);
_235.selectChild(page);
},onCloseButtonClick:function(page){
var _236=_220.byId(this.containerId);
_236.closeChild(page);
if(this._currentChild){
var b=this.pane2button[this._currentChild.id];
if(b){
_21f.focus(b.focusNode||b.domNode);
}
}
},adjacent:function(_237){
if(!this.isLeftToRight()&&(!this.tabPosition||/top|bottom/.test(this.tabPosition))){
_237=!_237;
}
var _238=this.getChildren();
var _239=_21c.indexOf(_238,this.pane2button[this._currentChild.id]);
var _23a=_237?1:_238.length-1;
return _238[(_239+_23a)%_238.length];
},onkeypress:function(e){
if(this.disabled||e.altKey){
return;
}
var _23b=null;
if(e.ctrlKey||!e._djpage){
switch(e.charOrCode){
case keys.LEFT_ARROW:
case keys.UP_ARROW:
if(!e._djpage){
_23b=false;
}
break;
case keys.PAGE_UP:
if(e.ctrlKey){
_23b=false;
}
break;
case keys.RIGHT_ARROW:
case keys.DOWN_ARROW:
if(!e._djpage){
_23b=true;
}
break;
case keys.PAGE_DOWN:
if(e.ctrlKey){
_23b=true;
}
break;
case keys.HOME:
case keys.END:
var _23c=this.getChildren();
if(_23c&&_23c.length){
_23c[e.charOrCode==keys.HOME?0:_23c.length-1].onClick();
}
_21e.stop(e);
break;
case keys.DELETE:
if(this._currentChild.closable){
this.onCloseButtonClick(this._currentChild);
}
_21e.stop(e);
break;
default:
if(e.ctrlKey){
if(e.charOrCode===keys.TAB){
this.adjacent(!e.shiftKey).onClick();
_21e.stop(e);
}else{
if(e.charOrCode=="w"){
if(this._currentChild.closable){
this.onCloseButtonClick(this._currentChild);
}
_21e.stop(e);
}
}
}
}
if(_23b!==null){
this.adjacent(_23b).onClick();
_21e.stop(e);
}
}
},onContainerKeyPress:function(info){
info.e._djpage=info.page;
this.onkeypress(info.e);
}});
_228.StackButton=_225;
return _228;
});
},"dijit/_Container":function(){
define("dijit/_Container",["dojo/_base/array","dojo/_base/declare","dojo/dom-construct","./registry"],function(_23d,_23e,_23f,_240){
return _23e("dijit._Container",null,{buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},addChild:function(_241,_242){
var _243=this.containerNode;
if(_242&&typeof _242=="number"){
var _244=this.getChildren();
if(_244&&_244.length>=_242){
_243=_244[_242-1].domNode;
_242="after";
}
}
_23f.place(_241.domNode,_243,_242);
if(this._started&&!_241._started){
_241.startup();
}
},removeChild:function(_245){
if(typeof _245=="number"){
_245=this.getChildren()[_245];
}
if(_245){
var node=_245.domNode;
if(node&&node.parentNode){
node.parentNode.removeChild(node);
}
}
},hasChildren:function(){
return this.getChildren().length>0;
},_getSiblingOfChild:function(_246,dir){
var node=_246.domNode,_247=(dir>0?"nextSibling":"previousSibling");
do{
node=node[_247];
}while(node&&(node.nodeType!=1||!_240.byNode(node)));
return node&&_240.byNode(node);
},getIndexOfChild:function(_248){
return _23d.indexOf(this.getChildren(),_248);
}});
});
},"url:dijit/templates/CheckedMenuItem.html":"<tr class=\"dijitReset dijitMenuItem\" data-dojo-attach-point=\"focusNode\" role=\"menuitemcheckbox\" tabIndex=\"-1\"\n\t\tdata-dojo-attach-event=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" data-dojo-attach-point=\"iconNode\"/>\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" data-dojo-attach-point=\"containerNode,labelNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" data-dojo-attach-point=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&#160;</td>\n</tr>\n","dojo/aspect":function(){
define([],function(){
"use strict";
var _249=0;
function _24a(_24b,type,_24c,_24d){
var _24e=_24b[type];
var _24f=type=="around";
var _250;
if(_24f){
var _251=_24c(function(){
return _24e.advice(this,arguments);
});
_250={remove:function(){
_250.cancelled=true;
},advice:function(_252,args){
return _250.cancelled?_24e.advice(_252,args):_251.apply(_252,args);
}};
}else{
_250={remove:function(){
var _253=_250.previous;
var next=_250.next;
if(!next&&!_253){
delete _24b[type];
}else{
if(_253){
_253.next=next;
}else{
_24b[type]=next;
}
if(next){
next.previous=_253;
}
}
},id:_249++,advice:_24c,receiveArguments:_24d};
}
if(_24e&&!_24f){
if(type=="after"){
var next=_24e;
while(next){
_24e=next;
next=next.next;
}
_24e.next=_250;
_250.previous=_24e;
}else{
if(type=="before"){
_24b[type]=_250;
_250.next=_24e;
_24e.previous=_250;
}
}
}else{
_24b[type]=_250;
}
return _250;
};
function _254(type){
return function(_255,_256,_257,_258){
var _259=_255[_256],_25a;
if(!_259||_259.target!=_255){
_255[_256]=_25a=function(){
var _25b=_249;
var args=arguments;
var _25c=_25a.before;
while(_25c){
args=_25c.advice.apply(this,args)||args;
_25c=_25c.next;
}
if(_25a.around){
var _25d=_25a.around.advice(this,args);
}
var _25e=_25a.after;
while(_25e&&_25e.id<_25b){
_25d=_25e.receiveArguments?_25e.advice.apply(this,args)||_25d:_25e.advice.call(this,_25d);
_25e=_25e.next;
}
return _25d;
};
if(_259){
_25a.around={advice:function(_25f,args){
return _259.apply(_25f,args);
}};
}
_25a.target=_255;
}
var _260=_24a((_25a||_259),type,_257,_258);
_257=null;
return _260;
};
};
return {before:_254("before"),around:_254("around"),after:_254("after")};
});
},"dojo/topic":function(){
define(["./Evented"],function(_261){
var hub=new _261;
return {publish:function(_262,_263){
return hub.emit.apply(hub,arguments);
},subscribe:function(_264,_265){
return hub.on.apply(hub,arguments);
}};
});
},"dijit/_base/scroll":function(){
define("dijit/_base/scroll",["dojo/window",".."],function(_266,_267){
_267.scrollIntoView=function(node,pos){
_266.scrollIntoView(node,pos);
};
});
},"dojo/NodeList-dom":function(){
define(["./_base/kernel","./query","./_base/array","./_base/lang","./dom-class","./dom-construct","./dom-geometry","./dom-attr","./dom-style"],function(dojo,_268,_269,lang,_26a,_26b,_26c,_26d,_26e){
var _26f=function(a){
return a.length==1&&(typeof a[0]=="string");
};
var _270=function(node){
var p=node.parentNode;
if(p){
p.removeChild(node);
}
};
var _271=_268.NodeList,awc=_271._adaptWithCondition,aafe=_271._adaptAsForEach,aam=_271._adaptAsMap;
function _272(_273){
return function(node,name,_274){
if(arguments.length==2){
return _273[typeof name=="string"?"get":"set"](node,name);
}
return _273.set(node,name,_274);
};
};
lang.extend(_271,{_normalize:function(_275,_276){
var _277=_275.parse===true;
if(typeof _275.template=="string"){
var _278=_275.templateFunc||(dojo.string&&dojo.string.substitute);
_275=_278?_278(_275.template,_275):_275;
}
var type=(typeof _275);
if(type=="string"||type=="number"){
_275=_26b.toDom(_275,(_276&&_276.ownerDocument));
if(_275.nodeType==11){
_275=lang._toArray(_275.childNodes);
}else{
_275=[_275];
}
}else{
if(!lang.isArrayLike(_275)){
_275=[_275];
}else{
if(!lang.isArray(_275)){
_275=lang._toArray(_275);
}
}
}
if(_277){
_275._runParse=true;
}
return _275;
},_cloneNode:function(node){
return node.cloneNode(true);
},_place:function(ary,_279,_27a,_27b){
if(_279.nodeType!=1&&_27a=="only"){
return;
}
var _27c=_279,_27d;
var _27e=ary.length;
for(var i=_27e-1;i>=0;i--){
var node=(_27b?this._cloneNode(ary[i]):ary[i]);
if(ary._runParse&&dojo.parser&&dojo.parser.parse){
if(!_27d){
_27d=_27c.ownerDocument.createElement("div");
}
_27d.appendChild(node);
dojo.parser.parse(_27d);
node=_27d.firstChild;
while(_27d.firstChild){
_27d.removeChild(_27d.firstChild);
}
}
if(i==_27e-1){
_26b.place(node,_27c,_27a);
}else{
_27c.parentNode.insertBefore(node,_27c);
}
_27c=node;
}
},attr:awc(_272(_26d),_26f),style:awc(_272(_26e),_26f),addClass:aafe(_26a.add),removeClass:aafe(_26a.remove),replaceClass:aafe(_26a.replace),toggleClass:aafe(_26a.toggle),empty:aafe(_26b.empty),removeAttr:aafe(_26d.remove),position:aam(_26c.position),marginBox:aam(_26c.getMarginBox),place:function(_27f,_280){
var item=_268(_27f)[0];
return this.forEach(function(node){
_26b.place(node,item,_280);
});
},orphan:function(_281){
return (_281?_268._filterResult(this,_281):this).forEach(_270);
},adopt:function(_282,_283){
return _268(_282).place(this[0],_283)._stash(this);
},query:function(_284){
if(!_284){
return this;
}
var ret=new _271;
this.map(function(node){
_268(_284,node).forEach(function(_285){
if(_285!==undefined){
ret.push(_285);
}
});
});
return ret._stash(this);
},filter:function(_286){
var a=arguments,_287=this,_288=0;
if(typeof _286=="string"){
_287=_268._filterResult(this,a[0]);
if(a.length==1){
return _287._stash(this);
}
_288=1;
}
return this._wrap(_269.filter(_287,a[_288],a[_288+1]),this);
},addContent:function(_289,_28a){
_289=this._normalize(_289,this[0]);
for(var i=0,node;(node=this[i]);i++){
this._place(_289,node,_28a,i>0);
}
return this;
}});
return _271;
});
},"dojo/_base/connect":function(){
define(["./kernel","../on","../topic","../aspect","./event","../mouse","./sniff","./lang","../keys"],function(_28b,on,hub,_28c,_28d,_28e,has,lang){
has.add("events-keypress-typed",function(){
var _28f={charCode:0};
try{
_28f=document.createEvent("KeyboardEvent");
(_28f.initKeyboardEvent||_28f.initKeyEvent).call(_28f,"keypress",true,true,null,false,false,false,false,9,3);
}
catch(e){
}
return _28f.charCode==0&&!has("opera");
});
function _290(obj,_291,_292,_293,_294){
_293=lang.hitch(_292,_293);
if(!obj||!(obj.addEventListener||obj.attachEvent)){
return _28c.after(obj||{},_291,_293,true);
}
if(typeof _291=="string"&&_291.substring(0,2)=="on"){
_291=_291.substring(2);
}
if(!obj){
obj=_28b.global;
}
if(!_294){
switch(_291){
case "keypress":
_291=_295;
break;
case "mouseenter":
_291=_28e.enter;
break;
case "mouseleave":
_291=_28e.leave;
break;
}
}
return on(obj,_291,_293,_294);
};
var _296={106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39,229:113};
var _297=has("mac")?"metaKey":"ctrlKey";
var _298=function(evt,_299){
var faux=lang.mixin({},evt,_299);
_29a(faux);
faux.preventDefault=function(){
evt.preventDefault();
};
faux.stopPropagation=function(){
evt.stopPropagation();
};
return faux;
};
function _29a(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _295;
if(has("events-keypress-typed")){
var _29b=function(e,code){
try{
return (e.keyCode=code);
}
catch(e){
return 0;
}
};
_295=function(_29c,_29d){
var _29e=on(_29c,"keydown",function(evt){
var k=evt.keyCode;
var _29f=(k!=13||(has("ie")>=9&&!has("quirks")))&&k!=32&&(k!=27||!has("ie"))&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222)&&k!=229;
if(_29f||evt.ctrlKey){
var c=_29f?0:k;
if(evt.ctrlKey){
if(k==3||k==13){
return _29d.call(evt.currentTarget,evt);
}else{
if(c>95&&c<106){
c-=48;
}else{
if((!evt.shiftKey)&&(c>=65&&c<=90)){
c+=32;
}else{
c=_296[c]||c;
}
}
}
}
var faux=_298(evt,{type:"keypress",faux:true,charCode:c});
_29d.call(evt.currentTarget,faux);
if(has("ie")){
_29b(evt,faux.keyCode);
}
}
});
var _2a0=on(_29c,"keypress",function(evt){
var c=evt.charCode;
c=c>=32?c:0;
evt=_298(evt,{charCode:c,faux:true});
return _29d.call(this,evt);
});
return {remove:function(){
_29e.remove();
_2a0.remove();
}};
};
}else{
if(has("opera")){
_295=function(_2a1,_2a2){
return on(_2a1,"keypress",function(evt){
var c=evt.which;
if(c==3){
c=99;
}
c=c<32&&!evt.shiftKey?0:c;
if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){
c+=32;
}
return _2a2.call(this,_298(evt,{charCode:c}));
});
};
}else{
_295=function(_2a3,_2a4){
return on(_2a3,"keypress",function(evt){
_29a(evt);
return _2a4.call(this,evt);
});
};
}
}
var _2a5={_keypress:_295,connect:function(obj,_2a6,_2a7,_2a8,_2a9){
var a=arguments,args=[],i=0;
args.push(typeof a[0]=="string"?null:a[i++],a[i++]);
var a1=a[i+1];
args.push(typeof a1=="string"||typeof a1=="function"?a[i++]:null,a[i++]);
for(var l=a.length;i<l;i++){
args.push(a[i]);
}
return _290.apply(this,args);
},disconnect:function(_2aa){
if(_2aa){
_2aa.remove();
}
},subscribe:function(_2ab,_2ac,_2ad){
return hub.subscribe(_2ab,lang.hitch(_2ac,_2ad));
},publish:function(_2ae,args){
return hub.publish.apply(hub,[_2ae].concat(args));
},connectPublisher:function(_2af,obj,_2b0){
var pf=function(){
_2a5.publish(_2af,arguments);
};
return _2b0?_2a5.connect(obj,_2b0,pf):_2a5.connect(obj,pf);
},isCopyKey:function(e){
return e[_297];
}};
_2a5.unsubscribe=_2a5.disconnect;
1&&lang.mixin(_28b,_2a5);
return _2a5;
});
},"dijit/_DialogMixin":function(){
define("dijit/_DialogMixin",["dojo/_base/declare","./a11y"],function(_2b1,a11y){
return _2b1("dijit._DialogMixin",null,{execute:function(){
},onCancel:function(){
},onExecute:function(){
},_onSubmit:function(){
this.onExecute();
this.execute(this.get("value"));
},_getFocusItems:function(){
var _2b2=a11y._getTabNavigable(this.containerNode);
this._firstFocusItem=_2b2.lowest||_2b2.first||this.closeButtonNode||this.domNode;
this._lastFocusItem=_2b2.last||_2b2.highest||this._firstFocusItem;
}});
});
},"dojo/_base/fx":function(){
define(["./kernel","./lang","../Evented","./Color","./connect","./sniff","../dom","../dom-style"],function(dojo,lang,_2b3,_2b4,_2b5,has,dom,_2b6){
var _2b7=lang.mixin;
dojo._Line=function(_2b8,end){
this.start=_2b8;
this.end=end;
};
dojo._Line.prototype.getValue=function(n){
return ((this.end-this.start)*n)+this.start;
};
dojo.Animation=function(args){
_2b7(this,args);
if(lang.isArray(this.curve)){
this.curve=new dojo._Line(this.curve[0],this.curve[1]);
}
};
dojo.Animation.prototype=new _2b3();
dojo._Animation=dojo.Animation;
lang.extend(dojo.Animation,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){
var _2b9=this._percent,_2ba=this.easing;
return _2ba?_2ba(_2b9):_2b9;
},_fire:function(evt,args){
var a=args||[];
if(this[evt]){
if(dojo.config.debugAtAllCosts){
this[evt].apply(this,a);
}else{
try{
this[evt].apply(this,a);
}
catch(e){
console.error("exception in animation handler for:",evt);
console.error(e);
}
}
}
return this;
},play:function(_2bb,_2bc){
var _2bd=this;
if(_2bd._delayTimer){
_2bd._clearTimer();
}
if(_2bc){
_2bd._stopTimer();
_2bd._active=_2bd._paused=false;
_2bd._percent=0;
}else{
if(_2bd._active&&!_2bd._paused){
return _2bd;
}
}
_2bd._fire("beforeBegin",[_2bd.node]);
var de=_2bb||_2bd.delay,_2be=lang.hitch(_2bd,"_play",_2bc);
if(de>0){
_2bd._delayTimer=setTimeout(_2be,de);
return _2bd;
}
_2be();
return _2bd;
},_play:function(_2bf){
var _2c0=this;
if(_2c0._delayTimer){
_2c0._clearTimer();
}
_2c0._startTime=new Date().valueOf();
if(_2c0._paused){
_2c0._startTime-=_2c0.duration*_2c0._percent;
}
_2c0._active=true;
_2c0._paused=false;
var _2c1=_2c0.curve.getValue(_2c0._getStep());
if(!_2c0._percent){
if(!_2c0._startRepeatCount){
_2c0._startRepeatCount=_2c0.repeat;
}
_2c0._fire("onBegin",[_2c1]);
}
_2c0._fire("onPlay",[_2c1]);
_2c0._cycle();
return _2c0;
},pause:function(){
var _2c2=this;
if(_2c2._delayTimer){
_2c2._clearTimer();
}
_2c2._stopTimer();
if(!_2c2._active){
return _2c2;
}
_2c2._paused=true;
_2c2._fire("onPause",[_2c2.curve.getValue(_2c2._getStep())]);
return _2c2;
},gotoPercent:function(_2c3,_2c4){
var _2c5=this;
_2c5._stopTimer();
_2c5._active=_2c5._paused=true;
_2c5._percent=_2c3;
if(_2c4){
_2c5.play();
}
return _2c5;
},stop:function(_2c6){
var _2c7=this;
if(_2c7._delayTimer){
_2c7._clearTimer();
}
if(!_2c7._timer){
return _2c7;
}
_2c7._stopTimer();
if(_2c6){
_2c7._percent=1;
}
_2c7._fire("onStop",[_2c7.curve.getValue(_2c7._getStep())]);
_2c7._active=_2c7._paused=false;
return _2c7;
},status:function(){
if(this._active){
return this._paused?"paused":"playing";
}
return "stopped";
},_cycle:function(){
var _2c8=this;
if(_2c8._active){
var curr=new Date().valueOf();
var step=(curr-_2c8._startTime)/(_2c8.duration);
if(step>=1){
step=1;
}
_2c8._percent=step;
if(_2c8.easing){
step=_2c8.easing(step);
}
_2c8._fire("onAnimate",[_2c8.curve.getValue(step)]);
if(_2c8._percent<1){
_2c8._startTimer();
}else{
_2c8._active=false;
if(_2c8.repeat>0){
_2c8.repeat--;
_2c8.play(null,true);
}else{
if(_2c8.repeat==-1){
_2c8.play(null,true);
}else{
if(_2c8._startRepeatCount){
_2c8.repeat=_2c8._startRepeatCount;
_2c8._startRepeatCount=0;
}
}
}
_2c8._percent=0;
_2c8._fire("onEnd",[_2c8.node]);
!_2c8.repeat&&_2c8._stopTimer();
}
}
return _2c8;
},_clearTimer:function(){
clearTimeout(this._delayTimer);
delete this._delayTimer;
}});
var ctr=0,_2c9=null,_2ca={run:function(){
}};
lang.extend(dojo.Animation,{_startTimer:function(){
if(!this._timer){
this._timer=_2b5.connect(_2ca,"run",this,"_cycle");
ctr++;
}
if(!_2c9){
_2c9=setInterval(lang.hitch(_2ca,"run"),this.rate);
}
},_stopTimer:function(){
if(this._timer){
_2b5.disconnect(this._timer);
this._timer=null;
ctr--;
}
if(ctr<=0){
clearInterval(_2c9);
_2c9=null;
ctr=0;
}
}});
var _2cb=has("ie")?function(node){
var ns=node.style;
if(!ns.width.length&&_2b6.get(node,"width")=="auto"){
ns.width="auto";
}
}:function(){
};
dojo._fade=function(args){
args.node=dom.byId(args.node);
var _2cc=_2b7({properties:{}},args),_2cd=(_2cc.properties.opacity={});
_2cd.start=!("start" in _2cc)?function(){
return +_2b6.get(_2cc.node,"opacity")||0;
}:_2cc.start;
_2cd.end=_2cc.end;
var anim=dojo.animateProperty(_2cc);
_2b5.connect(anim,"beforeBegin",lang.partial(_2cb,_2cc.node));
return anim;
};
dojo.fadeIn=function(args){
return dojo._fade(_2b7({end:1},args));
};
dojo.fadeOut=function(args){
return dojo._fade(_2b7({end:0},args));
};
dojo._defaultEasing=function(n){
return 0.5+((Math.sin((n+1.5)*Math.PI))/2);
};
var _2ce=function(_2cf){
this._properties=_2cf;
for(var p in _2cf){
var prop=_2cf[p];
if(prop.start instanceof _2b4){
prop.tempColor=new _2b4();
}
}
};
_2ce.prototype.getValue=function(r){
var ret={};
for(var p in this._properties){
var prop=this._properties[p],_2d0=prop.start;
if(_2d0 instanceof _2b4){
ret[p]=_2b4.blendColors(_2d0,prop.end,r,prop.tempColor).toCss();
}else{
if(!lang.isArray(_2d0)){
ret[p]=((prop.end-_2d0)*r)+_2d0+(p!="opacity"?prop.units||"px":0);
}
}
}
return ret;
};
dojo.animateProperty=function(args){
var n=args.node=dom.byId(args.node);
if(!args.easing){
args.easing=dojo._defaultEasing;
}
var anim=new dojo.Animation(args);
_2b5.connect(anim,"beforeBegin",anim,function(){
var pm={};
for(var p in this.properties){
if(p=="width"||p=="height"){
this.node.display="block";
}
var prop=this.properties[p];
if(lang.isFunction(prop)){
prop=prop(n);
}
prop=pm[p]=_2b7({},(lang.isObject(prop)?prop:{end:prop}));
if(lang.isFunction(prop.start)){
prop.start=prop.start(n);
}
if(lang.isFunction(prop.end)){
prop.end=prop.end(n);
}
var _2d1=(p.toLowerCase().indexOf("color")>=0);
function _2d2(node,p){
var v={height:node.offsetHeight,width:node.offsetWidth}[p];
if(v!==undefined){
return v;
}
v=_2b6.get(node,p);
return (p=="opacity")?+v:(_2d1?v:parseFloat(v));
};
if(!("end" in prop)){
prop.end=_2d2(n,p);
}else{
if(!("start" in prop)){
prop.start=_2d2(n,p);
}
}
if(_2d1){
prop.start=new _2b4(prop.start);
prop.end=new _2b4(prop.end);
}else{
prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);
}
}
this.curve=new _2ce(pm);
});
_2b5.connect(anim,"onAnimate",lang.hitch(_2b6,"set",anim.node));
return anim;
};
dojo.anim=function(node,_2d3,_2d4,_2d5,_2d6,_2d7){
return dojo.animateProperty({node:node,duration:_2d4||dojo.Animation.prototype.duration,properties:_2d3,easing:_2d5,onEnd:_2d6}).play(_2d7||0);
};
return {_Line:dojo._Line,Animation:dojo.Animation,_fade:dojo._fade,fadeIn:dojo.fadeIn,fadeOut:dojo.fadeOut,_defaultEasing:dojo._defaultEasing,animateProperty:dojo.animateProperty,anim:dojo.anim};
});
},"dojo/_base/config":function(){
define(["../has","require"],function(has,_2d8){
var _2d9={};
if(1){
var src=_2d8.rawConfig,p;
for(p in src){
_2d9[p]=src[p];
}
}else{
var _2da=function(_2db,_2dc,_2dd){
for(p in _2db){
p!="has"&&has.add(_2dc+p,_2db[p],0,_2dd);
}
};
_2d9=1?_2d8.rawConfig:this.dojoConfig||this.djConfig||{};
_2da(_2d9,"config",1);
_2da(_2d9.has,"",1);
}
return _2d9;
});
},"dijit/layout/utils":function(){
define("dijit/layout/utils",["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang",".."],function(_2de,_2df,_2e0,_2e1,lang,_2e2){
var _2e3=lang.getObject("layout",true,_2e2);
_2e3.marginBox2contentBox=function(node,mb){
var cs=_2e1.getComputedStyle(node);
var me=_2e0.getMarginExtents(node,cs);
var pb=_2e0.getPadBorderExtents(node,cs);
return {l:_2e1.toPixelValue(node,cs.paddingLeft),t:_2e1.toPixelValue(node,cs.paddingTop),w:mb.w-(me.w+pb.w),h:mb.h-(me.h+pb.h)};
};
function _2e4(word){
return word.substring(0,1).toUpperCase()+word.substring(1);
};
function size(_2e5,dim){
var _2e6=_2e5.resize?_2e5.resize(dim):_2e0.setMarginBox(_2e5.domNode,dim);
if(_2e6){
lang.mixin(_2e5,_2e6);
}else{
lang.mixin(_2e5,_2e0.getMarginBox(_2e5.domNode));
lang.mixin(_2e5,dim);
}
};
_2e3.layoutChildren=function(_2e7,dim,_2e8,_2e9,_2ea){
dim=lang.mixin({},dim);
_2df.add(_2e7,"dijitLayoutContainer");
_2e8=_2de.filter(_2e8,function(item){
return item.region!="center"&&item.layoutAlign!="client";
}).concat(_2de.filter(_2e8,function(item){
return item.region=="center"||item.layoutAlign=="client";
}));
_2de.forEach(_2e8,function(_2eb){
var elm=_2eb.domNode,pos=(_2eb.region||_2eb.layoutAlign);
if(!pos){
throw new Error("No region setting for "+_2eb.id);
}
var _2ec=elm.style;
_2ec.left=dim.l+"px";
_2ec.top=dim.t+"px";
_2ec.position="absolute";
_2df.add(elm,"dijitAlign"+_2e4(pos));
var _2ed={};
if(_2e9&&_2e9==_2eb.id){
_2ed[_2eb.region=="top"||_2eb.region=="bottom"?"h":"w"]=_2ea;
}
if(pos=="top"||pos=="bottom"){
_2ed.w=dim.w;
size(_2eb,_2ed);
dim.h-=_2eb.h;
if(pos=="top"){
dim.t+=_2eb.h;
}else{
_2ec.top=dim.t+dim.h+"px";
}
}else{
if(pos=="left"||pos=="right"){
_2ed.h=dim.h;
size(_2eb,_2ed);
dim.w-=_2eb.w;
if(pos=="left"){
dim.l+=_2eb.w;
}else{
_2ec.left=dim.l+dim.w+"px";
}
}else{
if(pos=="client"||pos=="center"){
size(_2eb,dim);
}
}
}
});
};
return {marginBox2contentBox:_2e3.marginBox2contentBox,layoutChildren:_2e3.layoutChildren};
});
},"dojo/_base/unload":function(){
define(["./kernel","./connect"],function(dojo,_2ee){
var win=window;
dojo.addOnWindowUnload=function(obj,_2ef){
if(!dojo.windowUnloaded){
_2ee.connect(win,"unload",(dojo.windowUnloaded=function(){
}));
}
_2ee.connect(win,"unload",obj,_2ef);
};
dojo.addOnUnload=function(obj,_2f0){
_2ee.connect(win,"beforeunload",obj,_2f0);
};
return {addOnWindowUnload:dojo.addOnWindowUnload,addOnUnload:dojo.addOnUnload};
});
},"dojo/selector/_loader":function(){
define(["../has","require"],function(has,_2f1){
"use strict";
var _2f2=document.createElement("div");
has.add("dom-qsa2.1",!!_2f2.querySelectorAll);
has.add("dom-qsa3",function(){
try{
_2f2.innerHTML="<p class='TEST'></p>";
return _2f2.querySelectorAll(".TEST:empty").length==1;
}
catch(e){
}
});
var _2f3;
var acme="./acme",lite="./lite";
return {load:function(id,_2f4,_2f5,_2f6){
var req=_2f1;
id=id=="default"?has("config-selectorEngine")||"css3":id;
id=id=="css2"||id=="lite"?lite:id=="css2.1"?has("dom-qsa2.1")?lite:acme:id=="css3"?has("dom-qsa3")?lite:acme:id=="acme"?acme:(req=_2f4)&&id;
if(id.charAt(id.length-1)=="?"){
id=id.substring(0,id.length-1);
var _2f7=true;
}
if(_2f7&&(has("dom-compliant-qsa")||_2f3)){
return _2f5(_2f3);
}
req([id],function(_2f8){
if(id!="./lite"){
_2f3=_2f8;
}
_2f5(_2f8);
});
}};
});
},"dojo/_base/declare":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var mix=lang.mixin,op=Object.prototype,opts=op.toString,xtor=new Function,_2f9=0,_2fa="constructor";
function err(msg,cls){
throw new Error("declare"+(cls?" "+cls:"")+": "+msg);
};
function _2fb(_2fc,_2fd){
var _2fe=[],_2ff=[{cls:0,refs:[]}],_300={},_301=1,l=_2fc.length,i=0,j,lin,base,top,_302,rec,name,refs;
for(;i<l;++i){
base=_2fc[i];
if(!base){
err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_2fd);
}else{
if(opts.call(base)!="[object Function]"){
err("mixin #"+i+" is not a callable constructor.",_2fd);
}
}
lin=base._meta?base._meta.bases:[base];
top=0;
for(j=lin.length-1;j>=0;--j){
_302=lin[j].prototype;
if(!_302.hasOwnProperty("declaredClass")){
_302.declaredClass="uniqName_"+(_2f9++);
}
name=_302.declaredClass;
if(!_300.hasOwnProperty(name)){
_300[name]={count:0,refs:[],cls:lin[j]};
++_301;
}
rec=_300[name];
if(top&&top!==rec){
rec.refs.push(top);
++top.count;
}
top=rec;
}
++top.count;
_2ff[0].refs.push(top);
}
while(_2ff.length){
top=_2ff.pop();
_2fe.push(top.cls);
--_301;
while(refs=top.refs,refs.length==1){
top=refs[0];
if(!top||--top.count){
top=0;
break;
}
_2fe.push(top.cls);
--_301;
}
if(top){
for(i=0,l=refs.length;i<l;++i){
top=refs[i];
if(!--top.count){
_2ff.push(top);
}
}
}
}
if(_301){
err("can't build consistent linearization",_2fd);
}
base=_2fc[0];
_2fe[0]=base?base._meta&&base===_2fe[_2fe.length-base._meta.bases.length]?base._meta.bases.length:1:0;
return _2fe;
};
function _303(args,a,f){
var name,_304,_305,_306,meta,base,_307,opf,pos,_308=this._inherited=this._inherited||{};
if(typeof args=="string"){
name=args;
args=a;
a=f;
}
f=0;
_306=args.callee;
name=name||_306.nom;
if(!name){
err("can't deduce a name to call inherited()",this.declaredClass);
}
meta=this.constructor._meta;
_305=meta.bases;
pos=_308.p;
if(name!=_2fa){
if(_308.c!==_306){
pos=0;
base=_305[0];
meta=base._meta;
if(meta.hidden[name]!==_306){
_304=meta.chains;
if(_304&&typeof _304[name]=="string"){
err("calling chained method with inherited: "+name,this.declaredClass);
}
do{
meta=base._meta;
_307=base.prototype;
if(meta&&(_307[name]===_306&&_307.hasOwnProperty(name)||meta.hidden[name]===_306)){
break;
}
}while(base=_305[++pos]);
pos=base?pos:-1;
}
}
base=_305[++pos];
if(base){
_307=base.prototype;
if(base._meta&&_307.hasOwnProperty(name)){
f=_307[name];
}else{
opf=op[name];
do{
_307=base.prototype;
f=_307[name];
if(f&&(base._meta?_307.hasOwnProperty(name):f!==opf)){
break;
}
}while(base=_305[++pos]);
}
}
f=base&&f||op[name];
}else{
if(_308.c!==_306){
pos=0;
meta=_305[0]._meta;
if(meta&&meta.ctor!==_306){
_304=meta.chains;
if(!_304||_304.constructor!=="manual"){
err("calling chained constructor with inherited",this.declaredClass);
}
while(base=_305[++pos]){
meta=base._meta;
if(meta&&meta.ctor===_306){
break;
}
}
pos=base?pos:-1;
}
}
while(base=_305[++pos]){
meta=base._meta;
f=meta?meta.ctor:base;
if(f){
break;
}
}
f=base&&f;
}
_308.c=f;
_308.p=pos;
if(f){
return a===true?f:f.apply(this,a||args);
}
};
function _309(name,args){
if(typeof name=="string"){
return this.__inherited(name,args,true);
}
return this.__inherited(name,true);
};
function _30a(args,a1,a2){
var f=this.getInherited(args,a1);
if(f){
return f.apply(this,a2||a1||args);
}
};
var _30b=dojo.config.isDebug?_30a:_303;
function _30c(cls){
var _30d=this.constructor._meta.bases;
for(var i=0,l=_30d.length;i<l;++i){
if(_30d[i]===cls){
return true;
}
}
return this instanceof cls;
};
function _30e(_30f,_310){
for(var name in _310){
if(name!=_2fa&&_310.hasOwnProperty(name)){
_30f[name]=_310[name];
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _311=lang._extraNames,i=_311.length;i;){
name=_311[--i];
if(name!=_2fa&&_310.hasOwnProperty(name)){
_30f[name]=_310[name];
}
}
}
};
function _312(_313,_314){
var name,t;
for(name in _314){
t=_314[name];
if((t!==op[name]||!(name in op))&&name!=_2fa){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_313[name]=t;
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _315=lang._extraNames,i=_315.length;i;){
name=_315[--i];
t=_314[name];
if((t!==op[name]||!(name in op))&&name!=_2fa){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_313[name]=t;
}
}
}
return _313;
};
function _316(_317){
_318.safeMixin(this.prototype,_317);
return this;
};
function _319(_31a,_31b){
return function(){
var a=arguments,args=a,a0=a[0],f,i,m,l=_31a.length,_31c;
if(!(this instanceof a.callee)){
return _31d(a);
}
if(_31b&&(a0&&a0.preamble||this.preamble)){
_31c=new Array(_31a.length);
_31c[0]=a;
for(i=0;;){
a0=a[0];
if(a0){
f=a0.preamble;
if(f){
a=f.apply(this,a)||a;
}
}
f=_31a[i].prototype;
f=f.hasOwnProperty("preamble")&&f.preamble;
if(f){
a=f.apply(this,a)||a;
}
if(++i==l){
break;
}
_31c[i]=a;
}
}
for(i=l-1;i>=0;--i){
f=_31a[i];
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,_31c?_31c[i]:a);
}
}
f=this.postscript;
if(f){
f.apply(this,args);
}
};
};
function _31e(ctor,_31f){
return function(){
var a=arguments,t=a,a0=a[0],f;
if(!(this instanceof a.callee)){
return _31d(a);
}
if(_31f){
if(a0){
f=a0.preamble;
if(f){
t=f.apply(this,t)||t;
}
}
f=this.preamble;
if(f){
f.apply(this,t);
}
}
if(ctor){
ctor.apply(this,a);
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _320(_321){
return function(){
var a=arguments,i=0,f,m;
if(!(this instanceof a.callee)){
return _31d(a);
}
for(;f=_321[i];++i){
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,a);
break;
}
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _322(name,_323,_324){
return function(){
var b,m,f,i=0,step=1;
if(_324){
i=_323.length-1;
step=-1;
}
for(;b=_323[i];i+=step){
m=b._meta;
f=(m?m.hidden:b.prototype)[name];
if(f){
f.apply(this,arguments);
}
}
};
};
function _325(ctor){
xtor.prototype=ctor.prototype;
var t=new xtor;
xtor.prototype=null;
return t;
};
function _31d(args){
var ctor=args.callee,t=_325(ctor);
ctor.apply(t,args);
return t;
};
function _318(_326,_327,_328){
if(typeof _326!="string"){
_328=_327;
_327=_326;
_326="";
}
_328=_328||{};
for(var p in _328){
if(typeof _328[p]=="function"){
_328[p].displayName=_326+"::"+p;
}
}
var _329,i,t,ctor,name,_32a,_32b,_32c=1,_32d=_327;
if(opts.call(_327)=="[object Array]"){
_32a=_2fb(_327,_326);
t=_32a[0];
_32c=_32a.length-t;
_327=_32a[_32c];
}else{
_32a=[0];
if(_327){
if(opts.call(_327)=="[object Function]"){
t=_327._meta;
_32a=_32a.concat(t?t.bases:_327);
}else{
err("base class is not a callable constructor.",_326);
}
}else{
if(_327!==null){
err("unknown base class. Did you use dojo.require to pull it in?",_326);
}
}
}
if(_327){
for(i=_32c-1;;--i){
_329=_325(_327);
if(!i){
break;
}
t=_32a[i];
(t._meta?_30e:mix)(_329,t.prototype);
ctor=new Function;
ctor.superclass=_327;
ctor.prototype=_329;
_327=_329.constructor=ctor;
}
}else{
_329={};
}
_318.safeMixin(_329,_328);
t=_328.constructor;
if(t!==op.constructor){
t.nom=_2fa;
_329.constructor=t;
}
for(i=_32c-1;i;--i){
t=_32a[i]._meta;
if(t&&t.chains){
_32b=mix(_32b||{},t.chains);
}
}
if(_329["-chains-"]){
_32b=mix(_32b||{},_329["-chains-"]);
}
t=!_32b||!_32b.hasOwnProperty(_2fa);
_32a[0]=ctor=(_32b&&_32b.constructor==="manual")?_320(_32a):(_32a.length==1?_31e(_328.constructor,t):_319(_32a,t));
ctor._meta={bases:_32a,hidden:_328,chains:_32b,parents:_32d,ctor:_328.constructor};
ctor.superclass=_327&&_327.prototype;
ctor.extend=_316;
ctor.prototype=_329;
_329.constructor=ctor;
_329.getInherited=_309;
_329.isInstanceOf=_30c;
_329.inherited=_30b;
_329.__inherited=_303;
if(_326){
_329.declaredClass=_326;
lang.setObject(_326,ctor);
}
if(_32b){
for(name in _32b){
if(_329[name]&&typeof _32b[name]=="string"&&name!=_2fa){
t=_329[name]=_322(name,_32a,_32b[name]==="after");
t.nom=name;
}
}
}
return ctor;
};
dojo.safeMixin=_318.safeMixin=_312;
dojo.declare=_318;
return _318;
});
},"dijit/layout/ContentPane":function(){
define("dijit/layout/ContentPane",["dojo/_base/kernel","dojo/_base/lang","../_Widget","./_ContentPaneResizeMixin","dojo/string","dojo/html","dojo/i18n!../nls/loading","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/dom","dojo/dom-attr","dojo/_base/window","dojo/_base/xhr","dojo/i18n"],function(_32e,lang,_32f,_330,_331,html,_332,_333,_334,_335,dom,_336,win,xhr,i18n){
return _334("dijit.layout.ContentPane",[_32f,_330],{href:"",content:"",extractContent:false,parseOnLoad:true,parserScope:_32e._scopeName,preventCache:false,preload:false,refreshOnShow:false,loadingMessage:"<span class='dijitContentPaneLoading'><span class='dijitInline dijitIconLoading'></span>${loadingState}</span>",errorMessage:"<span class='dijitContentPaneError'><span class='dijitInline dijitIconError'></span>${errorState}</span>",isLoaded:false,baseClass:"dijitContentPane",ioArgs:{},onLoadDeferred:null,_setTitleAttr:null,stopParser:true,template:false,create:function(_337,_338){
if((!_337||!_337.template)&&_338&&!("href" in _337)&&!("content" in _337)){
var df=win.doc.createDocumentFragment();
_338=dom.byId(_338);
while(_338.firstChild){
df.appendChild(_338.firstChild);
}
_337=lang.delegate(_337,{content:df});
}
this.inherited(arguments,[_337,_338]);
},postMixInProperties:function(){
this.inherited(arguments);
var _339=i18n.getLocalization("dijit","loading",this.lang);
this.loadingMessage=_331.substitute(this.loadingMessage,_339);
this.errorMessage=_331.substitute(this.errorMessage,_339);
},buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
this.domNode.title="";
if(!_336.get(this.domNode,"role")){
this.domNode.setAttribute("role","group");
}
},startup:function(){
this.inherited(arguments);
if(this._contentSetter){
_333.forEach(this._contentSetter.parseResults,function(obj){
if(!obj._started&&!obj._destroyed&&lang.isFunction(obj.startup)){
obj.startup();
obj._started=true;
}
},this);
}
},setHref:function(href){
_32e.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.","","2.0");
return this.set("href",href);
},_setHrefAttr:function(href){
this.cancel();
this.onLoadDeferred=new _335(lang.hitch(this,"cancel"));
this.onLoadDeferred.addCallback(lang.hitch(this,"onLoad"));
this._set("href",href);
if(this.preload||(this._created&&this._isShown())){
this._load();
}else{
this._hrefChanged=true;
}
return this.onLoadDeferred;
},setContent:function(data){
_32e.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.","","2.0");
this.set("content",data);
},_setContentAttr:function(data){
this._set("href","");
this.cancel();
this.onLoadDeferred=new _335(lang.hitch(this,"cancel"));
if(this._created){
this.onLoadDeferred.addCallback(lang.hitch(this,"onLoad"));
}
this._setContent(data||"");
this._isDownloaded=false;
return this.onLoadDeferred;
},_getContentAttr:function(){
return this.containerNode.innerHTML;
},cancel:function(){
if(this._xhrDfd&&(this._xhrDfd.fired==-1)){
this._xhrDfd.cancel();
}
delete this._xhrDfd;
this.onLoadDeferred=null;
},uninitialize:function(){
if(this._beingDestroyed){
this.cancel();
}
this.inherited(arguments);
},destroyRecursive:function(_33a){
if(this._beingDestroyed){
return;
}
this.inherited(arguments);
},_onShow:function(){
this.inherited(arguments);
if(this.href){
if(!this._xhrDfd&&(!this.isLoaded||this._hrefChanged||this.refreshOnShow)){
return this.refresh();
}
}
},refresh:function(){
this.cancel();
this.onLoadDeferred=new _335(lang.hitch(this,"cancel"));
this.onLoadDeferred.addCallback(lang.hitch(this,"onLoad"));
this._load();
return this.onLoadDeferred;
},_load:function(){
this._setContent(this.onDownloadStart(),true);
var self=this;
var _33b={preventCache:(this.preventCache||this.refreshOnShow),url:this.href,handleAs:"text"};
if(lang.isObject(this.ioArgs)){
lang.mixin(_33b,this.ioArgs);
}
var hand=(this._xhrDfd=(this.ioMethod||xhr.get)(_33b));
hand.addCallback(function(html){
try{
self._isDownloaded=true;
self._setContent(html,false);
self.onDownloadEnd();
}
catch(err){
self._onError("Content",err);
}
delete self._xhrDfd;
return html;
});
hand.addErrback(function(err){
if(!hand.canceled){
self._onError("Download",err);
}
delete self._xhrDfd;
return err;
});
delete this._hrefChanged;
},_onLoadHandler:function(data){
this._set("isLoaded",true);
try{
this.onLoadDeferred.callback(data);
}
catch(e){
console.error("Error "+this.widgetId+" running custom onLoad code: "+e.message);
}
},_onUnloadHandler:function(){
this._set("isLoaded",false);
try{
this.onUnload();
}
catch(e){
console.error("Error "+this.widgetId+" running custom onUnload code: "+e.message);
}
},destroyDescendants:function(_33c){
if(this.isLoaded){
this._onUnloadHandler();
}
var _33d=this._contentSetter;
_333.forEach(this.getChildren(),function(_33e){
if(_33e.destroyRecursive){
_33e.destroyRecursive(_33c);
}
});
if(_33d){
_333.forEach(_33d.parseResults,function(_33f){
if(_33f.destroyRecursive&&_33f.domNode&&_33f.domNode.parentNode==win.body()){
_33f.destroyRecursive(_33c);
}
});
delete _33d.parseResults;
}
if(!_33c){
html._emptyNode(this.containerNode);
}
delete this._singleChild;
},_setContent:function(cont,_340){
this.destroyDescendants();
var _341=this._contentSetter;
if(!(_341&&_341 instanceof html._ContentSetter)){
_341=this._contentSetter=new html._ContentSetter({node:this.containerNode,_onError:lang.hitch(this,this._onError),onContentError:lang.hitch(this,function(e){
var _342=this.onContentError(e);
try{
this.containerNode.innerHTML=_342;
}
catch(e){
console.error("Fatal "+this.id+" could not change content due to "+e.message,e);
}
})});
}
var _343=lang.mixin({cleanContent:this.cleanContent,extractContent:this.extractContent,parseContent:!cont.domNode&&this.parseOnLoad,parserScope:this.parserScope,startup:false,dir:this.dir,lang:this.lang,textDir:this.textDir},this._contentSetterParams||{});
_341.set((lang.isObject(cont)&&cont.domNode)?cont.domNode:cont,_343);
delete this._contentSetterParams;
if(this.doLayout){
this._checkIfSingleChild();
}
if(!_340){
if(this._started){
delete this._started;
this.startup();
this._scheduleLayout();
}
this._onLoadHandler(cont);
}
},_onError:function(type,err,_344){
this.onLoadDeferred.errback(err);
var _345=this["on"+type+"Error"].call(this,err);
if(_344){
console.error(_344,err);
}else{
if(_345){
this._setContent(_345,true);
}
}
},onLoad:function(){
},onUnload:function(){
},onDownloadStart:function(){
return this.loadingMessage;
},onContentError:function(){
},onDownloadError:function(){
return this.errorMessage;
},onDownloadEnd:function(){
}});
});
},"dojo/fx/Toggler":function(){
define(["../_base/lang","../_base/declare","../_base/fx","../_base/connect"],function(lang,_346,_347,_348){
return _346("dojo.fx.Toggler",null,{node:null,showFunc:_347.fadeIn,hideFunc:_347.fadeOut,showDuration:200,hideDuration:200,constructor:function(args){
var _349=this;
lang.mixin(_349,args);
_349.node=args.node;
_349._showArgs=lang.mixin({},args);
_349._showArgs.node=_349.node;
_349._showArgs.duration=_349.showDuration;
_349.showAnim=_349.showFunc(_349._showArgs);
_349._hideArgs=lang.mixin({},args);
_349._hideArgs.node=_349.node;
_349._hideArgs.duration=_349.hideDuration;
_349.hideAnim=_349.hideFunc(_349._hideArgs);
_348.connect(_349.showAnim,"beforeBegin",lang.hitch(_349.hideAnim,"stop",true));
_348.connect(_349.hideAnim,"beforeBegin",lang.hitch(_349.showAnim,"stop",true));
},show:function(_34a){
return this.showAnim.play(_34a||0);
},hide:function(_34b){
return this.hideAnim.play(_34b||0);
}});
});
},"dijit/_base":function(){
define("dijit/_base",[".","./a11y","./WidgetSet","./_base/focus","./_base/manager","./_base/place","./_base/popup","./_base/scroll","./_base/sniff","./_base/typematic","./_base/wai","./_base/window"],function(_34c){
return _34c._base;
});
},"dojo/json":function(){
define(["./has"],function(has){
"use strict";
var _34d=typeof JSON!="undefined";
has.add("json-parse",_34d);
has.add("json-stringify",_34d&&JSON.stringify({a:0},function(k,v){
return v||1;
})=="{\"a\":1}");
if(has("json-stringify")){
return JSON;
}else{
var _34e=function(str){
return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};
return {parse:has("json-parse")?JSON.parse:function(str,_34f){
if(_34f&&!/^([\s\[\{]*(?:"(?:\\.|[^"])+"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(str)){
throw new SyntaxError("Invalid characters in JSON");
}
return eval("("+str+")");
},stringify:function(_350,_351,_352){
var _353;
if(typeof _351=="string"){
_352=_351;
_351=null;
}
function _354(it,_355,key){
if(_351){
it=_351(key,it);
}
var val,_356=typeof it;
if(_356=="number"){
return isFinite(it)?it+"":"null";
}
if(_356=="boolean"){
return it+"";
}
if(it===null){
return "null";
}
if(typeof it=="string"){
return _34e(it);
}
if(_356=="function"||_356=="undefined"){
return _353;
}
if(typeof it.toJSON=="function"){
return _354(it.toJSON(key),_355,key);
}
if(it instanceof Date){
return "\"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z\"".replace(/\{(\w+)(\+)?\}/g,function(t,prop,plus){
var num=it["getUTC"+prop]()+(plus?1:0);
return num<10?"0"+num:num;
});
}
if(it.valueOf()!==it){
return _354(it.valueOf(),_355,key);
}
var _357=_352?(_355+_352):"";
var sep=_352?" ":"";
var _358=_352?"\n":"";
if(it instanceof Array){
var itl=it.length,res=[];
for(key=0;key<itl;key++){
var obj=it[key];
val=_354(obj,_357,key);
if(typeof val!="string"){
val="null";
}
res.push(_358+_357+val);
}
return "["+res.join(",")+_358+_355+"]";
}
var _359=[];
for(key in it){
var _35a;
if(typeof key=="number"){
_35a="\""+key+"\"";
}else{
if(typeof key=="string"){
_35a=_34e(key);
}else{
continue;
}
}
val=_354(it[key],_357,key);
if(typeof val!="string"){
continue;
}
_359.push(_358+_357+_35a+":"+sep+val);
}
return "{"+_359.join(",")+_358+_355+"}";
};
return _354(_350,"","");
}};
}
});
},"dojo/_base/json":function(){
define(["./kernel","../json"],function(dojo,json){
dojo.fromJson=function(js){
return eval("("+js+")");
};
dojo._escapeString=json.stringify;
dojo.toJsonIndentStr="\t";
dojo.toJson=function(it,_35b){
return json.stringify(it,function(key,_35c){
if(_35c){
var tf=_35c.__json__||_35c.json;
if(typeof tf=="function"){
return tf.call(_35c);
}
}
return _35c;
},_35b&&dojo.toJsonIndentStr);
};
return dojo;
});
},"dijit/form/_FormWidgetMixin":function(){
define("dijit/form/_FormWidgetMixin",["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/dom-style","dojo/_base/lang","dojo/mouse","dojo/_base/sniff","dojo/_base/window","dojo/window","../a11y"],function(_35d,_35e,_35f,_360,lang,_361,has,win,_362,a11y){
return _35e("dijit.form._FormWidgetMixin",null,{name:"",alt:"",value:"",type:"text",tabIndex:"0",_setTabIndexAttr:"focusNode",disabled:false,intermediateChanges:false,scrollOnFocus:true,_setIdAttr:"focusNode",_setDisabledAttr:function(_363){
this._set("disabled",_363);
_35f.set(this.focusNode,"disabled",_363);
if(this.valueNode){
_35f.set(this.valueNode,"disabled",_363);
}
this.focusNode.setAttribute("aria-disabled",_363?"true":"false");
if(_363){
this._set("hovering",false);
this._set("active",false);
var _364="tabIndex" in this.attributeMap?this.attributeMap.tabIndex:("_setTabIndexAttr" in this)?this._setTabIndexAttr:"focusNode";
_35d.forEach(lang.isArray(_364)?_364:[_364],function(_365){
var node=this[_365];
if(has("webkit")||a11y.hasDefaultTabStop(node)){
node.setAttribute("tabIndex","-1");
}else{
node.removeAttribute("tabIndex");
}
},this);
}else{
if(this.tabIndex!=""){
this.set("tabIndex",this.tabIndex);
}
}
},_onFocus:function(by){
if(by=="mouse"&&this.isFocusable()){
var _366=this.connect(this.focusNode,"onfocus",function(){
this.disconnect(_367);
this.disconnect(_366);
});
var _367=this.connect(win.body(),"onmouseup",function(){
this.disconnect(_367);
this.disconnect(_366);
if(this.focused){
this.focus();
}
});
}
if(this.scrollOnFocus){
this.defer(function(){
_362.scrollIntoView(this.domNode);
});
}
this.inherited(arguments);
},isFocusable:function(){
return !this.disabled&&this.focusNode&&(_360.get(this.domNode,"display")!="none");
},focus:function(){
if(!this.disabled&&this.focusNode.focus){
try{
this.focusNode.focus();
}
catch(e){
}
}
},compare:function(val1,val2){
if(typeof val1=="number"&&typeof val2=="number"){
return (isNaN(val1)&&isNaN(val2))?0:val1-val2;
}else{
if(val1>val2){
return 1;
}else{
if(val1<val2){
return -1;
}else{
return 0;
}
}
}
},onChange:function(){
},_onChangeActive:false,_handleOnChange:function(_368,_369){
if(this._lastValueReported==undefined&&(_369===null||!this._onChangeActive)){
this._resetValue=this._lastValueReported=_368;
}
this._pendingOnChange=this._pendingOnChange||(typeof _368!=typeof this._lastValueReported)||(this.compare(_368,this._lastValueReported)!=0);
if((this.intermediateChanges||_369||_369===undefined)&&this._pendingOnChange){
this._lastValueReported=_368;
this._pendingOnChange=false;
if(this._onChangeActive){
if(this._onChangeHandle){
this._onChangeHandle.remove();
}
this._onChangeHandle=this.defer(function(){
this._onChangeHandle=null;
this.onChange(_368);
});
}
}
},create:function(){
this.inherited(arguments);
this._onChangeActive=true;
},destroy:function(){
if(this._onChangeHandle){
this._onChangeHandle.remove();
this.onChange(this._lastValueReported);
}
this.inherited(arguments);
}});
});
},"dojo/i18n":function(){
define(["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./_base/xhr","./json"],function(dojo,_36a,has,_36b,_36c,lang,xhr,json){
has.add("dojo-preload-i18n-Api",1);
true||has.add("dojo-v1x-i18n-Api",1);
var _36d=dojo.i18n={},_36e=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,_36f=function(root,_370,_371,_372){
for(var _373=[_371+_372],_374=_370.split("-"),_375="",i=0;i<_374.length;i++){
_375+=(_375?"-":"")+_374[i];
if(!root||root[_375]){
_373.push(_371+_375+"/"+_372);
}
}
return _373;
},_376={},_377=dojo.getL10nName=function(_378,_379,_37a){
_37a=_37a?_37a.toLowerCase():dojo.locale;
_378="dojo/i18n!"+_378.replace(/\./g,"/");
_379=_379.replace(/\./g,"/");
return (/root/i.test(_37a))?(_378+"/nls/"+_379):(_378+"/nls/"+_37a+"/"+_379);
},_37b=function(_37c,_37d,_37e,_37f,_380,load){
_37c([_37d],function(root){
var _381=lang.clone(root.root),_382=_36f(!root._v1x&&root,_380,_37e,_37f);
_37c(_382,function(){
for(var i=1;i<_382.length;i++){
_381=lang.mixin(lang.clone(_381),arguments[i]);
}
var _383=_37d+"/"+_380;
_376[_383]=_381;
load();
});
});
},_384=function(id,_385){
return /^\./.test(id)?_385(id):id;
},_386=function(_387){
var list=_36c.extraLocale||[];
list=lang.isArray(list)?list:[list];
list.push(_387);
return list;
},load=function(id,_388,load){
if(has("dojo-preload-i18n-Api")){
var _389=id.split("*"),_38a=_389[1]=="preload";
if(_38a){
if(!_376[id]){
_376[id]=1;
_38b(_389[2],json.parse(_389[3]),1);
}
load(1);
}
if(_38a||_38c(id,_388,load)){
return;
}
}
var _38d=_36e.exec(id),_38e=_38d[1]+"/",_38f=_38d[5]||_38d[4],_390=_38e+_38f,_391=(_38d[5]&&_38d[4]),_392=_391||dojo.locale,_393=_390+"/"+_392,_394=_391?[_392]:_386(_392),_395=_394.length,_396=function(){
if(!--_395){
load(lang.delegate(_376[_393]));
}
};
_36b.forEach(_394,function(_397){
var _398=_390+"/"+_397;
if(has("dojo-preload-i18n-Api")){
_399(_398);
}
if(!_376[_398]){
_37b(_388,_390,_38e,_38f,_397,_396);
}else{
_396();
}
});
};
if(has("dojo-unit-tests")){
var _39a=_36d.unitTests=[];
}
if(has("dojo-preload-i18n-Api")||1){
var _39b=_36d.normalizeLocale=function(_39c){
var _39d=_39c?_39c.toLowerCase():dojo.locale;
return _39d=="root"?"ROOT":_39d;
},isXd=function(mid){
return (1&&1)?_36a.isXdUrl(_36a.toUrl(mid+".js")):true;
},_39e=0,_39f=[],_38b=_36d._preloadLocalizations=function(_3a0,_3a1,_3a2){
function _3a3(_3a4,func){
var _3a5=_3a4.split("-");
while(_3a5.length){
if(func(_3a5.join("-"))){
return true;
}
_3a5.pop();
}
return func("ROOT");
};
function _3a6(_3a7){
_3a7=_39b(_3a7);
_3a3(_3a7,function(loc){
if(_36b.indexOf(_3a1,loc)>=0){
var mid=_3a0.replace(/\./g,"/")+"_"+loc;
_39e++;
(isXd(mid)||_3a2?_36a:_3ab)([mid],function(_3a8){
for(var p in _3a8){
_376[p+"/"+loc]=_3a8[p];
}
--_39e;
while(!_39e&&_39f.length){
load.apply(null,_39f.shift());
}
});
return true;
}
return false;
});
};
_3a6();
_36b.forEach(dojo.config.extraLocale,_3a6);
},_38c=function(id,_3a9,load){
if(_39e){
_39f.push([id,_3a9,load]);
}
return _39e;
};
}
if(1){
var _3aa=new Function("__bundle","__checkForLegacyModules","__mid","var define = function(){define.called = 1;},"+"    require = function(){define.called = 1;};"+"try{"+"define.called = 0;"+"eval(__bundle);"+"if(define.called==1)"+"return 1;"+"if((__checkForLegacyModules = __checkForLegacyModules(__mid)))"+"return __checkForLegacyModules;"+"}catch(e){}"+"try{"+"return eval('('+__bundle+')');"+"}catch(e){"+"return e;"+"}"),_3ab=function(deps,_3ac){
var _3ad=[];
_36b.forEach(deps,function(mid){
var url=_36a.toUrl(mid+".js");
function load(text){
var _3ae=_3aa(text,_399,mid);
if(_3ae===1){
_36a([mid],function(_3af){
_3ad.push(_376[url]=_3af);
});
}else{
if(_3ae instanceof Error){
console.error("failed to evaluate i18n bundle; url="+url,_3ae);
_3ae={};
}
_3ad.push(_376[url]=(/nls\/[^\/]+\/[^\/]+$/.test(url)?_3ae:{root:_3ae,_v1x:1}));
}
};
if(_376[url]){
_3ad.push(_376[url]);
}else{
var _3b0=_36a.syncLoadNls(mid);
if(_3b0){
_3ad.push(_3b0);
}else{
if(!xhr){
try{
_36a.getText(url,true,load);
}
catch(e){
_3ad.push(_376[url]={});
}
}else{
xhr.get({url:url,sync:true,load:load,error:function(){
_3ad.push(_376[url]={});
}});
}
}
}
});
_3ac&&_3ac.apply(null,_3ad);
},_399=function(_3b1){
for(var _3b2,_3b3=_3b1.split("/"),_3b4=dojo.global[_3b3[0]],i=1;_3b4&&i<_3b3.length-1;_3b4=_3b4[_3b3[i++]]){
}
if(_3b4){
_3b2=_3b4[_3b3[i]];
if(!_3b2){
_3b2=_3b4[_3b3[i].replace(/-/g,"_")];
}
if(_3b2){
_376[_3b1]=_3b2;
}
}
return _3b2;
};
_36d.getLocalization=function(_3b5,_3b6,_3b7){
var _3b8,_3b9=_377(_3b5,_3b6,_3b7).substring(10);
load(_3b9,(!isXd(_3b9)?_3ab:_36a),function(_3ba){
_3b8=_3ba;
});
return _3b8;
};
if(has("dojo-unit-tests")){
_39a.push(function(doh){
doh.register("tests.i18n.unit",function(t){
var _3bb;
_3bb=_3aa("{prop:1}");
t.is({prop:1},_3bb);
t.is(undefined,_3bb[1]);
_3bb=_3aa("({prop:1})");
t.is({prop:1},_3bb);
t.is(undefined,_3bb[1]);
_3bb=_3aa("{'prop-x':1}");
t.is({"prop-x":1},_3bb);
t.is(undefined,_3bb[1]);
_3bb=_3aa("({'prop-x':1})");
t.is({"prop-x":1},_3bb);
t.is(undefined,_3bb[1]);
_3bb=_3aa("define({'prop-x':1})");
t.is(1,_3bb);
_3bb=_3aa("this is total nonsense and should throw an error");
t.is(_3bb instanceof Error,true);
});
});
}
}
return lang.mixin(_36d,{dynamic:true,normalize:_384,load:load,cache:_376});
});
},"dijit/BackgroundIframe":function(){
define("dijit/BackgroundIframe",["require",".","dojo/_base/config","dojo/dom-construct","dojo/dom-style","dojo/_base/lang","dojo/on","dojo/_base/sniff","dojo/_base/window"],function(_3bc,_3bd,_3be,_3bf,_3c0,lang,on,has,win){
var _3c1=new function(){
var _3c2=[];
this.pop=function(){
var _3c3;
if(_3c2.length){
_3c3=_3c2.pop();
_3c3.style.display="";
}else{
if(has("ie")<9){
var burl=_3be["dojoBlankHtmlUrl"]||_3bc.toUrl("dojo/resources/blank.html")||"javascript:\"\"";
var html="<iframe src='"+burl+"' role='presentation'"+" style='position: absolute; left: 0px; top: 0px;"+"z-index: -1; filter:Alpha(Opacity=\"0\");'>";
_3c3=win.doc.createElement(html);
}else{
_3c3=_3bf.create("iframe");
_3c3.src="javascript:\"\"";
_3c3.className="dijitBackgroundIframe";
_3c3.setAttribute("role","presentation");
_3c0.set(_3c3,"opacity",0.1);
}
_3c3.tabIndex=-1;
}
return _3c3;
};
this.push=function(_3c4){
_3c4.style.display="none";
_3c2.push(_3c4);
};
}();
_3bd.BackgroundIframe=function(node){
if(!node.id){
throw new Error("no id");
}
if(has("ie")||has("mozilla")){
var _3c5=(this.iframe=_3c1.pop());
node.appendChild(_3c5);
if(has("ie")<7||has("quirks")){
this.resize(node);
this._conn=on(node,"resize",lang.hitch(this,function(){
this.resize(node);
}));
}else{
_3c0.set(_3c5,{width:"100%",height:"100%"});
}
}
};
lang.extend(_3bd.BackgroundIframe,{resize:function(node){
if(this.iframe){
_3c0.set(this.iframe,{width:node.offsetWidth+"px",height:node.offsetHeight+"px"});
}
},destroy:function(){
if(this._conn){
this._conn.remove();
this._conn=null;
}
if(this.iframe){
_3c1.push(this.iframe);
delete this.iframe;
}
}});
return _3bd.BackgroundIframe;
});
},"dojo/dom-construct":function(){
define("dojo/dom-construct",["exports","./_base/kernel","./_base/sniff","./_base/window","./dom","./dom-attr","./on"],function(_3c6,dojo,has,win,dom,attr,on){
var _3c7={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_3c8=/<\s*([\w\:]+)/,_3c9={},_3ca=0,_3cb="__"+dojo._scopeName+"ToDomId";
for(var _3cc in _3c7){
if(_3c7.hasOwnProperty(_3cc)){
var tw=_3c7[_3cc];
tw.pre=_3cc=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";
tw.post="</"+tw.reverse().join("></")+">";
}
}
function _3cd(node,ref){
var _3ce=ref.parentNode;
if(_3ce){
_3ce.insertBefore(node,ref);
}
};
function _3cf(node,ref){
var _3d0=ref.parentNode;
if(_3d0){
if(_3d0.lastChild==ref){
_3d0.appendChild(node);
}else{
_3d0.insertBefore(node,ref.nextSibling);
}
}
};
var _3d1=null,_3d2;
on(window,"unload",function(){
_3d1=null;
});
_3c6.toDom=function toDom(frag,doc){
doc=doc||win.doc;
var _3d3=doc[_3cb];
if(!_3d3){
doc[_3cb]=_3d3=++_3ca+"";
_3c9[_3d3]=doc.createElement("div");
}
frag+="";
var _3d4=frag.match(_3c8),tag=_3d4?_3d4[1].toLowerCase():"",_3d5=_3c9[_3d3],wrap,i,fc,df;
if(_3d4&&_3c7[tag]){
wrap=_3c7[tag];
if(typeof MSApp!=="undefined"){
MSApp.execUnsafeLocalFunction(function(){
_3d5.innerHTML=wrap.pre+frag+wrap.post;
});
}else{
_3d5.innerHTML=wrap.pre+frag+wrap.post;
}
for(i=wrap.length;i;--i){
_3d5=_3d5.firstChild;
}
}else{
if(typeof MSApp!=="undefined"){
MSApp.execUnsafeLocalFunction(function(){
_3d5.innerHTML=frag;
});
}else{
_3d5.innerHTML=frag;
}
}
if(_3d5.childNodes.length==1){
return _3d5.removeChild(_3d5.firstChild);
}
df=doc.createDocumentFragment();
while(fc=_3d5.firstChild){
df.appendChild(fc);
}
return df;
};
function _3d6(node,_3d7,_3d8){
_3d7=dom.byId(_3d7);
if(typeof node=="string"){
node=/^\s*</.test(node)?_3c6.toDom(node,_3d7.ownerDocument):dom.byId(node);
}
if(typeof _3d8=="number"){
var cn=_3d7.childNodes;
if(!cn.length||cn.length<=_3d8){
_3d7.appendChild(node);
}else{
_3cd(node,cn[_3d8<0?0:_3d8]);
}
}else{
switch(_3d8){
case "before":
_3cd(node,_3d7);
break;
case "after":
_3cf(node,_3d7);
break;
case "replace":
_3d7.parentNode.replaceChild(node,_3d7);
break;
case "only":
_3c6.empty(_3d7);
_3d7.appendChild(node);
break;
case "first":
if(_3d7.firstChild){
_3cd(node,_3d7.firstChild);
break;
}
default:
_3d7.appendChild(node);
}
}
return node;
};
if(typeof MSApp!=="undefined"){
_3c6.place=function(){
var args=arguments;
return MSApp.execUnsafeLocalFunction(function(){
return _3d6.apply(null,args);
});
};
}else{
_3c6.place=_3d6;
}
_3c6.create=function create(tag,_3d9,_3da,pos){
var doc=win.doc;
if(_3da){
_3da=dom.byId(_3da);
doc=_3da.ownerDocument;
}
if(typeof tag=="string"){
tag=doc.createElement(tag);
}
if(_3d9){
attr.set(tag,_3d9);
}
if(_3da){
_3c6.place(tag,_3da,pos);
}
return tag;
};
_3c6.empty=has("ie")?function(node){
node=dom.byId(node);
for(var c;c=node.lastChild;){
_3c6.destroy(c);
}
}:function(node){
dom.byId(node).innerHTML="";
};
_3c6.destroy=function destroy(node){
node=dom.byId(node);
try{
var doc=node.ownerDocument;
if(!_3d1||_3d2!=doc){
_3d1=doc.createElement("div");
_3d2=doc;
}
_3d1.appendChild(node.parentNode?node.parentNode.removeChild(node):node);
_3d1.innerHTML="";
}
catch(e){
}
};
});
},"dijit/PopupMenuItem":function(){
define("dijit/PopupMenuItem",["dojo/_base/declare","dojo/dom-style","dojo/query","dojo/_base/window","./registry","./MenuItem","./hccss"],function(_3db,_3dc,_3dd,win,_3de,_3df){
return _3db("dijit.PopupMenuItem",_3df,{_fillContent:function(){
if(this.srcNodeRef){
var _3e0=_3dd("*",this.srcNodeRef);
this.inherited(arguments,[_3e0[0]]);
this.dropDownContainer=this.srcNodeRef;
}
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
if(!this.popup){
var node=_3dd("[widgetId]",this.dropDownContainer)[0];
this.popup=_3de.byNode(node);
}
win.body().appendChild(this.popup.domNode);
this.popup.startup();
this.popup.domNode.style.display="none";
if(this.arrowWrapper){
_3dc.set(this.arrowWrapper,"visibility","");
}
this.focusNode.setAttribute("aria-haspopup","true");
},destroyDescendants:function(_3e1){
if(this.popup){
if(!this.popup._destroyed){
this.popup.destroyRecursive(_3e1);
}
delete this.popup;
}
this.inherited(arguments);
}});
});
},"dijit/form/_FormValueMixin":function(){
define("dijit/form/_FormValueMixin",["dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/sniff","./_FormWidgetMixin"],function(_3e2,_3e3,keys,has,_3e4){
return _3e2("dijit.form._FormValueMixin",_3e4,{readOnly:false,_setReadOnlyAttr:function(_3e5){
_3e3.set(this.focusNode,"readOnly",_3e5);
this.focusNode.setAttribute("aria-readonly",_3e5);
this._set("readOnly",_3e5);
},postCreate:function(){
this.inherited(arguments);
if(has("ie")){
this.connect(this.focusNode||this.domNode,"onkeydown",this._onKeyDown);
}
if(this._resetValue===undefined){
this._lastValueReported=this._resetValue=this.value;
}
},_setValueAttr:function(_3e6,_3e7){
this._handleOnChange(_3e6,_3e7);
},_handleOnChange:function(_3e8,_3e9){
this._set("value",_3e8);
this.inherited(arguments);
},undo:function(){
this._setValueAttr(this._lastValueReported,false);
},reset:function(){
this._hasBeenBlurred=false;
this._setValueAttr(this._resetValue,true);
},_onKeyDown:function(e){
if(e.keyCode==keys.ESCAPE&&!(e.ctrlKey||e.altKey||e.metaKey)){
var te;
if(has("ie")<9||(has("ie")&&has("quirks"))){
e.preventDefault();
te=document.createEventObject();
te.keyCode=keys.ESCAPE;
te.shiftKey=e.shiftKey;
e.srcElement.fireEvent("onkeypress",te);
}
}
}});
});
},"dojo/_base/browser":function(){
if(require.has){
require.has.add("config-selectorEngine","acme");
}
define("dojo/_base/browser",["../ready","./kernel","./connect","./unload","./window","./event","./html","./NodeList","../query","./xhr","./fx"],function(dojo){
return dojo;
});
},"dojo/_base/event":function(){
define(["./kernel","../on","../has","../dom-geometry"],function(dojo,on,has,dom){
if(on._fixEvent){
var _3ea=on._fixEvent;
on._fixEvent=function(evt,se){
evt=_3ea(evt,se);
if(evt){
dom.normalizeEvent(evt);
}
return evt;
};
}
dojo.fixEvent=function(evt,_3eb){
if(on._fixEvent){
return on._fixEvent(evt,_3eb);
}
return evt;
};
dojo.stopEvent=function(evt){
if(has("dom-addeventlistener")||(evt&&evt.preventDefault)){
evt.preventDefault();
evt.stopPropagation();
}else{
evt=evt||window.event;
evt.cancelBubble=true;
on._preventDefault.call(evt);
}
};
return {fix:dojo.fixEvent,stop:dojo.stopEvent};
});
},"url:dijit/templates/MenuSeparator.html":"<tr class=\"dijitMenuSeparator\">\n\t<td class=\"dijitMenuSeparatorIconCell\">\n\t\t<div class=\"dijitMenuSeparatorTop\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n\t<td colspan=\"3\" class=\"dijitMenuSeparatorLabelCell\">\n\t\t<div class=\"dijitMenuSeparatorTop dijitMenuSeparatorLabel\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n</tr>","dojo/Stateful":function(){
define(["./_base/kernel","./_base/declare","./_base/lang","./_base/array"],function(dojo,_3ec,lang,_3ed){
return dojo.declare("dojo.Stateful",null,{postscript:function(_3ee){
if(_3ee){
lang.mixin(this,_3ee);
}
},get:function(name){
return this[name];
},set:function(name,_3ef){
if(typeof name==="object"){
for(var x in name){
this.set(x,name[x]);
}
return this;
}
var _3f0=this[name];
this[name]=_3ef;
if(this._watchCallbacks){
this._watchCallbacks(name,_3f0,_3ef);
}
return this;
},watch:function(name,_3f1){
var _3f2=this._watchCallbacks;
if(!_3f2){
var self=this;
_3f2=this._watchCallbacks=function(name,_3f3,_3f4,_3f5){
var _3f6=function(_3f7){
if(_3f7){
_3f7=_3f7.slice();
for(var i=0,l=_3f7.length;i<l;i++){
try{
_3f7[i].call(self,name,_3f3,_3f4);
}
catch(e){
console.error(e);
}
}
}
};
_3f6(_3f2["_"+name]);
if(!_3f5){
_3f6(_3f2["*"]);
}
};
}
if(!_3f1&&typeof name==="function"){
_3f1=name;
name="*";
}else{
name="_"+name;
}
var _3f8=_3f2[name];
if(typeof _3f8!=="object"){
_3f8=_3f2[name]=[];
}
_3f8.push(_3f1);
return {unwatch:function(){
_3f8.splice(_3ed.indexOf(_3f8,_3f1),1);
}};
}});
});
},"url:dijit/templates/TooltipDialog.html":"<div role=\"presentation\" tabIndex=\"-1\">\n\t<div class=\"dijitTooltipContainer\" role=\"presentation\">\n\t\t<div class =\"dijitTooltipContents dijitTooltipFocusNode\" data-dojo-attach-point=\"containerNode\" role=\"dialog\"></div>\n\t</div>\n\t<div class=\"dijitTooltipConnector\" role=\"presentation\"></div>\n</div>\n","dojo/touch":function(){
define(["./_base/kernel","./on","./has","./mouse"],function(dojo,on,has,_3f9){
function _3fa(type){
return function(node,_3fb){
return on(node,type,_3fb);
};
};
var _3fc=has("touch");
dojo.touch={press:_3fa(_3fc?"touchstart":"mousedown"),move:_3fa(_3fc?"touchmove":"mousemove"),release:_3fa(_3fc?"touchend":"mouseup"),cancel:_3fc?_3fa("touchcancel"):_3f9.leave};
return dojo.touch;
});
},"dojo/require":function(){
define("dojo/require",["./_base/loader"],function(_3fd){
return {dynamic:0,normalize:function(id){
return id;
},load:_3fd.require};
});
},"dijit/_CssStateMixin":function(){
define("dijit/_CssStateMixin",["dojo/touch","dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/_base/lang","dojo/_base/window"],function(_3fe,_3ff,_400,_401,lang,win){
return _400("dijit._CssStateMixin",[],{cssStateNodes:{},hovering:false,active:false,_applyAttributes:function(){
this.inherited(arguments);
_3ff.forEach(["onmouseenter","onmouseleave",_3fe.press],function(e){
this.connect(this.domNode,e,"_cssMouseEvent");
},this);
_3ff.forEach(["disabled","readOnly","checked","selected","focused","state","hovering","active"],function(attr){
this.watch(attr,lang.hitch(this,"_setStateClass"));
},this);
for(var ap in this.cssStateNodes){
this._trackMouseState(this[ap],this.cssStateNodes[ap]);
}
this._setStateClass();
},_cssMouseEvent:function(_402){
if(!this.disabled){
switch(_402.type){
case "mouseenter":
case "mouseover":
this._set("hovering",true);
this._set("active",this._mouseDown);
break;
case "mouseleave":
case "mouseout":
this._set("hovering",false);
this._set("active",false);
break;
case "mousedown":
case "touchpress":
this._set("active",true);
this._mouseDown=true;
var _403=this.connect(win.body(),_3fe.release,function(){
this._mouseDown=false;
this._set("active",false);
this.disconnect(_403);
});
break;
}
}
},_setStateClass:function(){
var _404=this.baseClass.split(" ");
function _405(_406){
_404=_404.concat(_3ff.map(_404,function(c){
return c+_406;
}),"dijit"+_406);
};
if(!this.isLeftToRight()){
_405("Rtl");
}
var _407=this.checked=="mixed"?"Mixed":(this.checked?"Checked":"");
if(this.checked){
_405(_407);
}
if(this.state){
_405(this.state);
}
if(this.selected){
_405("Selected");
}
if(this.disabled){
_405("Disabled");
}else{
if(this.readOnly){
_405("ReadOnly");
}else{
if(this.active){
_405("Active");
}else{
if(this.hovering){
_405("Hover");
}
}
}
}
if(this.focused){
_405("Focused");
}
var tn=this.stateNode||this.domNode,_408={};
_3ff.forEach(tn.className.split(" "),function(c){
_408[c]=true;
});
if("_stateClasses" in this){
_3ff.forEach(this._stateClasses,function(c){
delete _408[c];
});
}
_3ff.forEach(_404,function(c){
_408[c]=true;
});
var _409=[];
for(var c in _408){
_409.push(c);
}
tn.className=_409.join(" ");
this._stateClasses=_404;
},_trackMouseState:function(node,_40a){
var _40b=false,_40c=false,_40d=false;
var self=this,cn=lang.hitch(this,"connect",node);
function _40e(){
var _40f=("disabled" in self&&self.disabled)||("readonly" in self&&self.readonly);
_401.toggle(node,_40a+"Hover",_40b&&!_40c&&!_40f);
_401.toggle(node,_40a+"Active",_40c&&!_40f);
_401.toggle(node,_40a+"Focused",_40d&&!_40f);
};
cn("onmouseenter",function(){
_40b=true;
_40e();
});
cn("onmouseleave",function(){
_40b=false;
_40c=false;
_40e();
});
cn(_3fe.press,function(){
_40c=true;
_40e();
});
cn(_3fe.release,function(){
_40c=false;
_40e();
});
cn("onfocus",function(){
_40d=true;
_40e();
});
cn("onblur",function(){
_40d=false;
_40e();
});
this.watch("disabled",_40e);
this.watch("readOnly",_40e);
}});
});
},"dojo/_base/url":function(){
define(["./kernel"],function(dojo){
var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"),_410=function(){
var n=null,_411=arguments,uri=[_411[0]];
for(var i=1;i<_411.length;i++){
if(!_411[i]){
continue;
}
var _412=new _410(_411[i]+""),_413=new _410(uri[0]+"");
if(_412.path==""&&!_412.scheme&&!_412.authority&&!_412.query){
if(_412.fragment!=n){
_413.fragment=_412.fragment;
}
_412=_413;
}else{
if(!_412.scheme){
_412.scheme=_413.scheme;
if(!_412.authority){
_412.authority=_413.authority;
if(_412.path.charAt(0)!="/"){
var path=_413.path.substring(0,_413.path.lastIndexOf("/")+1)+_412.path;
var segs=path.split("/");
for(var j=0;j<segs.length;j++){
if(segs[j]=="."){
if(j==segs.length-1){
segs[j]="";
}else{
segs.splice(j,1);
j--;
}
}else{
if(j>0&&!(j==1&&segs[0]=="")&&segs[j]==".."&&segs[j-1]!=".."){
if(j==(segs.length-1)){
segs.splice(j,1);
segs[j-1]="";
}else{
segs.splice(j-1,2);
j-=2;
}
}
}
}
_412.path=segs.join("/");
}
}
}
}
uri=[];
if(_412.scheme){
uri.push(_412.scheme,":");
}
if(_412.authority){
uri.push("//",_412.authority);
}
uri.push(_412.path);
if(_412.query){
uri.push("?",_412.query);
}
if(_412.fragment){
uri.push("#",_412.fragment);
}
}
this.uri=uri.join("");
var r=this.uri.match(ore);
this.scheme=r[2]||(r[1]?"":n);
this.authority=r[4]||(r[3]?"":n);
this.path=r[5];
this.query=r[7]||(r[6]?"":n);
this.fragment=r[9]||(r[8]?"":n);
if(this.authority!=n){
r=this.authority.match(ire);
this.user=r[3]||n;
this.password=r[4]||n;
this.host=r[6]||r[7];
this.port=r[9]||n;
}
};
_410.prototype.toString=function(){
return this.uri;
};
return dojo._Url=_410;
});
},"dojo/string":function(){
define(["./_base/kernel","./_base/lang"],function(dojo,lang){
lang.getObject("string",true,dojo);
dojo.string.rep=function(str,num){
if(num<=0||!str){
return "";
}
var buf=[];
for(;;){
if(num&1){
buf.push(str);
}
if(!(num>>=1)){
break;
}
str+=str;
}
return buf.join("");
};
dojo.string.pad=function(text,size,ch,end){
if(!ch){
ch="0";
}
var out=String(text),pad=dojo.string.rep(ch,Math.ceil((size-out.length)/ch.length));
return end?out+pad:pad+out;
};
dojo.string.substitute=function(_414,map,_415,_416){
_416=_416||dojo.global;
_415=_415?lang.hitch(_416,_415):function(v){
return v;
};
return _414.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(_417,key,_418){
var _419=lang.getObject(key,false,map);
if(_418){
_419=lang.getObject(_418,false,_416).call(_416,_419,key);
}
return _415(_419,key).toString();
});
};
dojo.string.trim=String.prototype.trim?lang.trim:function(str){
str=str.replace(/^\s+/,"");
for(var i=str.length-1;i>=0;i--){
if(/\S/.test(str.charAt(i))){
str=str.substring(0,i+1);
break;
}
}
return str;
};
return dojo.string;
});
},"dijit/form/_FormValueWidget":function(){
define("dijit/form/_FormValueWidget",["dojo/_base/declare","dojo/_base/sniff","./_FormWidget","./_FormValueMixin"],function(_41a,has,_41b,_41c){
return _41a("dijit.form._FormValueWidget",[_41b,_41c],{_layoutHackIE7:function(){
if(has("ie")==7){
var _41d=this.domNode;
var _41e=_41d.parentNode;
var _41f=_41d.firstChild||_41d;
var _420=_41f.style.filter;
var _421=this;
while(_41e&&_41e.clientHeight==0){
(function ping(){
var _422=_421.connect(_41e,"onscroll",function(){
_421.disconnect(_422);
_41f.style.filter=(new Date()).getMilliseconds();
setTimeout(function(){
_41f.style.filter=_420;
},0);
});
})();
_41e=_41e.parentNode;
}
}
}});
});
},"dojo/domReady":function(){
define(["./has"],function(has){
var _423=this,doc=document,_424={"loaded":1,"complete":1},_425=typeof doc.readyState!="string",_426=!!_424[doc.readyState];
if(_425){
doc.readyState="loading";
}
if(!_426){
var _427=[],_428=[],_429=function(evt){
evt=evt||_423.event;
if(_426||(evt.type=="readystatechange"&&!_424[doc.readyState])){
return;
}
_426=1;
if(_425){
doc.readyState="complete";
}
while(_427.length){
(_427.shift())();
}
},on=function(node,_42a){
node.addEventListener(_42a,_429,false);
_427.push(function(){
node.removeEventListener(_42a,_429,false);
});
};
if(!has("dom-addeventlistener")){
on=function(node,_42b){
_42b="on"+_42b;
node.attachEvent(_42b,_429);
_427.push(function(){
node.detachEvent(_42b,_429);
});
};
var div=doc.createElement("div");
try{
if(div.doScroll&&_423.frameElement===null){
_428.push(function(){
try{
div.doScroll("left");
return 1;
}
catch(e){
}
});
}
}
catch(e){
}
}
on(doc,"DOMContentLoaded");
on(_423,"load");
if("onreadystatechange" in doc){
on(doc,"readystatechange");
}else{
if(!_425){
_428.push(function(){
return _424[doc.readyState];
});
}
}
if(_428.length){
var _42c=function(){
if(_426){
return;
}
var i=_428.length;
while(i--){
if(_428[i]()){
_429("poller");
return;
}
}
setTimeout(_42c,30);
};
_42c();
}
}
function _42d(_42e){
if(_426){
_42e(1);
}else{
_427.push(_42e);
}
};
_42d.load=function(id,req,load){
_42d(load);
};
return _42d;
});
},"dojo/dom-prop":function(){
define("dojo/dom-prop",["exports","./_base/kernel","./_base/sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(_42f,dojo,has,lang,dom,_430,ctr,conn){
var _431={},_432=0,_433=dojo._scopeName+"attrid";
var _434={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};
_42f.names={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"};
_42f.get=function getProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_435=_42f.names[lc]||name;
return node[_435];
};
_42f.set=function setProp(node,name,_436){
node=dom.byId(node);
var l=arguments.length;
if(l==2&&typeof name!="string"){
for(var x in name){
_42f.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_437=_42f.names[lc]||name;
if(_437=="style"&&typeof _436!="string"){
_430.style(node,_436);
return node;
}
if(_437=="innerHTML"){
if(has("ie")&&node.tagName.toLowerCase() in _434){
ctr.empty(node);
node.appendChild(ctr.toDom(_436,node.ownerDocument));
}else{
node[_437]=_436;
}
return node;
}
if(lang.isFunction(_436)){
var _438=node[_433];
if(!_438){
_438=_432++;
node[_433]=_438;
}
if(!_431[_438]){
_431[_438]={};
}
var h=_431[_438][_437];
if(h){
conn.disconnect(h);
}else{
try{
delete node[_437];
}
catch(e){
}
}
if(_436){
_431[_438][_437]=conn.connect(node,_437,_436);
}else{
node[_437]=null;
}
return node;
}
node[_437]=_436;
return node;
};
});
},"dijit/form/Button":function(){
require({cache:{"url:dijit/form/templates/Button.html":"<span class=\"dijit dijitReset dijitInline\" role=\"presentation\"\n\t><span class=\"dijitReset dijitInline dijitButtonNode\"\n\t\tdata-dojo-attach-event=\"ondijitclick:_onClick\" role=\"presentation\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdata-dojo-attach-point=\"titleNode,focusNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\" data-dojo-attach-point=\"iconNode\"></span\n\t\t\t><span class=\"dijitReset dijitToggleButtonIconChar\">&#x25CF;</span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t\tdata-dojo-attach-point=\"containerNode\"\n\t\t\t></span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\"\n\t\ttabIndex=\"-1\" role=\"presentation\" data-dojo-attach-point=\"valueNode\"\n/></span>\n"}});
define("dijit/form/Button",["require","dojo/_base/declare","dojo/dom-class","dojo/_base/kernel","dojo/_base/lang","dojo/ready","./_FormWidget","./_ButtonMixin","dojo/text!./templates/Button.html"],function(_439,_43a,_43b,_43c,lang,_43d,_43e,_43f,_440){
if(!_43c.isAsync){
_43d(0,function(){
var _441=["dijit/form/DropDownButton","dijit/form/ComboButton","dijit/form/ToggleButton"];
_439(_441);
});
}
return _43a("dijit.form.Button",[_43e,_43f],{showLabel:true,iconClass:"dijitNoIcon",_setIconClassAttr:{node:"iconNode",type:"class"},baseClass:"dijitButton",templateString:_440,_setValueAttr:"valueNode",_onClick:function(e){
var ok=this.inherited(arguments);
if(ok){
if(this.valueNode){
this.valueNode.click();
e.preventDefault();
}
}
return ok;
},_fillContent:function(_442){
if(_442&&(!this.params||!("label" in this.params))){
var _443=lang.trim(_442.innerHTML);
if(_443){
this.label=_443;
}
}
},_setShowLabelAttr:function(val){
if(this.containerNode){
_43b.toggle(this.containerNode,"dijitDisplayNone",!val);
}
this._set("showLabel",val);
},setLabel:function(_444){
_43c.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0");
this.set("label",_444);
},_setLabelAttr:function(_445){
this.inherited(arguments);
if(!this.showLabel&&!("title" in this.params)){
this.titleNode.title=lang.trim(this.containerNode.innerText||this.containerNode.textContent||"");
}
}});
});
},"dojo/keys":function(){
define("dojo/keys",["./_base/kernel","./_base/sniff"],function(dojo,has){
return dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:has("safari")?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,UP_DPAD:175,DOWN_DPAD:176,LEFT_DPAD:177,RIGHT_DPAD:178,copyKey:has("mac")&&!has("air")?(has("safari")?91:224):17};
});
},"dojo/_base/lang":function(){
define(["./kernel","../has","./sniff"],function(dojo,has){
has.add("bug-for-in-skips-shadowed",function(){
for(var i in {toString:1}){
return 0;
}
return 1;
});
var _446=has("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],_447=_446.length,_448=function(dest,_449,_44a){
var name,s,i,_44b={};
for(name in _449){
s=_449[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _44b)||_44b[name]!==s))){
dest[name]=_44a?_44a(s):s;
}
}
if(has("bug-for-in-skips-shadowed")){
if(_449){
for(i=0;i<_447;++i){
name=_446[i];
s=_449[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _44b)||_44b[name]!==s))){
dest[name]=_44a?_44a(s):s;
}
}
}
}
return dest;
},_44c=function(dest,_44d){
if(!dest){
dest={};
}
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(dest,arguments[i]);
}
return dest;
},_44e=function(_44f,_450,_451){
var p,i=0,_452=dojo.global;
if(!_451){
if(!_44f.length){
return _452;
}else{
p=_44f[i++];
try{
_451=dojo.scopeMap[p]&&dojo.scopeMap[p][1];
}
catch(e){
}
_451=_451||(p in _452?_452[p]:(_450?_452[p]={}:undefined));
}
}
while(_451&&(p=_44f[i++])){
_451=(p in _451?_451[p]:(_450?_451[p]={}:undefined));
}
return _451;
},_453=function(name,_454,_455){
var _456=name.split("."),p=_456.pop(),obj=_44e(_456,true,_455);
return obj&&p?(obj[p]=_454):undefined;
},_457=function(name,_458,_459){
return _44e(name.split("."),_458,_459);
},_45a=function(name,obj){
return lang.getObject(name,false,obj)!==undefined;
},opts=Object.prototype.toString,_45b=function(it){
return (typeof it=="string"||it instanceof String);
},_45c=function(it){
return it&&(it instanceof Array||typeof it=="array");
},_45d=function(it){
return opts.call(it)==="[object Function]";
},_45e=function(it){
return it!==undefined&&(it===null||typeof it=="object"||lang.isArray(it)||lang.isFunction(it));
},_45f=function(it){
return it&&it!==undefined&&!lang.isString(it)&&!lang.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(lang.isArray(it)||isFinite(it.length));
},_460=function(it){
return it&&!lang.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));
},_461=function(_462,_463){
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(_462.prototype,arguments[i]);
}
return _462;
},_464=function(_465,_466){
var pre=_467(arguments,2);
var _468=lang.isString(_466);
return function(){
var args=_467(arguments);
var f=_468?(_465||dojo.global)[_466]:_466;
return f&&f.apply(_465||this,pre.concat(args));
};
},_469=function(_46a,_46b){
if(arguments.length>2){
return lang._hitchArgs.apply(dojo,arguments);
}
if(!_46b){
_46b=_46a;
_46a=null;
}
if(lang.isString(_46b)){
_46a=_46a||dojo.global;
if(!_46a[_46b]){
throw (["dojo.hitch: scope[\"",_46b,"\"] is null (scope=\"",_46a,"\")"].join(""));
}
return function(){
return _46a[_46b].apply(_46a,arguments||[]);
};
}
return !_46a?_46b:function(){
return _46b.apply(_46a,arguments||[]);
};
},_46c=(function(){
function TMP(){
};
return function(obj,_46d){
TMP.prototype=obj;
var tmp=new TMP();
TMP.prototype=null;
if(_46d){
lang._mixin(tmp,_46d);
}
return tmp;
};
})(),_46e=function(obj,_46f,_470){
return (_470||[]).concat(Array.prototype.slice.call(obj,_46f||0));
},_467=has("ie")?(function(){
function slow(obj,_471,_472){
var arr=_472||[];
for(var x=_471||0;x<obj.length;x++){
arr.push(obj[x]);
}
return arr;
};
return function(obj){
return ((obj.item)?slow:_46e).apply(this,arguments);
};
})():_46e,_473=function(_474){
var arr=[null];
return lang.hitch.apply(dojo,arr.concat(lang._toArray(arguments)));
},_475=function(src){
if(!src||typeof src!="object"||lang.isFunction(src)){
return src;
}
if(src.nodeType&&"cloneNode" in src){
return src.cloneNode(true);
}
if(src instanceof Date){
return new Date(src.getTime());
}
if(src instanceof RegExp){
return new RegExp(src);
}
var r,i,l;
if(lang.isArray(src)){
r=[];
for(i=0,l=src.length;i<l;++i){
if(i in src){
r.push(_475(src[i]));
}
}
}else{
r=src.constructor?new src.constructor():{};
}
return lang._mixin(r,src,_475);
},trim=String.prototype.trim?function(str){
return str.trim();
}:function(str){
return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
},_476=/\{([^\}]+)\}/g,_477=function(tmpl,map,_478){
return tmpl.replace(_478||_476,lang.isFunction(map)?map:function(_479,k){
return _457(k,false,map);
});
},lang={_extraNames:_446,_mixin:_448,mixin:_44c,setObject:_453,getObject:_457,exists:_45a,isString:_45b,isArray:_45c,isFunction:_45d,isObject:_45e,isArrayLike:_45f,isAlien:_460,extend:_461,_hitchArgs:_464,hitch:_469,delegate:_46c,_toArray:_467,partial:_473,clone:_475,trim:trim,replace:_477};
1&&_44c(dojo,lang);
return lang;
});
},"dijit/registry":function(){
define("dijit/registry",["dojo/_base/array","dojo/_base/sniff","dojo/_base/unload","dojo/_base/window","."],function(_47a,has,_47b,win,_47c){
var _47d={},hash={};
var _47e={length:0,add:function(_47f){
if(hash[_47f.id]){
throw new Error("Tried to register widget with id=="+_47f.id+" but that id is already registered");
}
hash[_47f.id]=_47f;
this.length++;
},remove:function(id){
if(hash[id]){
delete hash[id];
this.length--;
}
},byId:function(id){
return typeof id=="string"?hash[id]:id;
},byNode:function(node){
return hash[node.getAttribute("widgetId")];
},toArray:function(){
var ar=[];
for(var id in hash){
ar.push(hash[id]);
}
return ar;
},getUniqueId:function(_480){
var id;
do{
id=_480+"_"+(_480 in _47d?++_47d[_480]:_47d[_480]=0);
}while(hash[id]);
return _47c._scopeName=="dijit"?id:_47c._scopeName+"_"+id;
},findWidgets:function(root){
var _481=[];
function _482(root){
for(var node=root.firstChild;node;node=node.nextSibling){
if(node.nodeType==1){
var _483=node.getAttribute("widgetId");
if(_483){
var _484=hash[_483];
if(_484){
_481.push(_484);
}
}else{
_482(node);
}
}
}
};
_482(root);
return _481;
},_destroyAll:function(){
_47c._curFocus=null;
_47c._prevFocus=null;
_47c._activeStack=[];
_47a.forEach(_47e.findWidgets(win.body()),function(_485){
if(!_485._destroyed){
if(_485.destroyRecursive){
_485.destroyRecursive();
}else{
if(_485.destroy){
_485.destroy();
}
}
}
});
},getEnclosingWidget:function(node){
while(node){
var id=node.getAttribute&&node.getAttribute("widgetId");
if(id){
return hash[id];
}
node=node.parentNode;
}
return null;
},_hash:hash};
_47c.registry=_47e;
return _47e;
});
},"dijit/_base/manager":function(){
define("dijit/_base/manager",["dojo/_base/array","dojo/_base/config","../registry",".."],function(_486,_487,_488,_489){
_486.forEach(["byId","getUniqueId","findWidgets","_destroyAll","byNode","getEnclosingWidget"],function(name){
_489[name]=_488[name];
});
_489.defaultDuration=_487["defaultDuration"]||200;
return _489;
});
},"dijit/_base/place":function(){
define("dijit/_base/place",["dojo/_base/array","dojo/_base/lang","dojo/window","../place",".."],function(_48a,lang,_48b,_48c,_48d){
_48d.getViewport=function(){
return _48b.getBox();
};
_48d.placeOnScreen=_48c.at;
_48d.placeOnScreenAroundElement=function(node,_48e,_48f,_490){
var _491;
if(lang.isArray(_48f)){
_491=_48f;
}else{
_491=[];
for(var key in _48f){
_491.push({aroundCorner:key,corner:_48f[key]});
}
}
return _48c.around(node,_48e,_491,true,_490);
};
_48d.placeOnScreenAroundNode=_48d.placeOnScreenAroundElement;
_48d.placeOnScreenAroundRectangle=_48d.placeOnScreenAroundElement;
_48d.getPopupAroundAlignment=function(_492,_493){
var _494={};
_48a.forEach(_492,function(pos){
var ltr=_493;
switch(pos){
case "after":
_494[_493?"BR":"BL"]=_493?"BL":"BR";
break;
case "before":
_494[_493?"BL":"BR"]=_493?"BR":"BL";
break;
case "below-alt":
ltr=!ltr;
case "below":
_494[ltr?"BL":"BR"]=ltr?"TL":"TR";
_494[ltr?"BR":"BL"]=ltr?"TR":"TL";
break;
case "above-alt":
ltr=!ltr;
case "above":
default:
_494[ltr?"TL":"TR"]=ltr?"BL":"BR";
_494[ltr?"TR":"TL"]=ltr?"BR":"BL";
break;
}
});
return _494;
};
return _48d;
});
},"dojo/_base/Color":function(){
define(["./kernel","./lang","./array","./config"],function(dojo,lang,_495,_496){
var _497=dojo.Color=function(_498){
if(_498){
this.setColor(_498);
}
};
_497.named={"black":[0,0,0],"silver":[192,192,192],"gray":[128,128,128],"white":[255,255,255],"maroon":[128,0,0],"red":[255,0,0],"purple":[128,0,128],"fuchsia":[255,0,255],"green":[0,128,0],"lime":[0,255,0],"olive":[128,128,0],"yellow":[255,255,0],"navy":[0,0,128],"blue":[0,0,255],"teal":[0,128,128],"aqua":[0,255,255],"transparent":_496.transparentColor||[0,0,0,0]};
lang.extend(_497,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){
var t=this;
t.r=r;
t.g=g;
t.b=b;
t.a=a;
},setColor:function(_499){
if(lang.isString(_499)){
_497.fromString(_499,this);
}else{
if(lang.isArray(_499)){
_497.fromArray(_499,this);
}else{
this._set(_499.r,_499.g,_499.b,_499.a);
if(!(_499 instanceof _497)){
this.sanitize();
}
}
}
return this;
},sanitize:function(){
return this;
},toRgb:function(){
var t=this;
return [t.r,t.g,t.b];
},toRgba:function(){
var t=this;
return [t.r,t.g,t.b,t.a];
},toHex:function(){
var arr=_495.map(["r","g","b"],function(x){
var s=this[x].toString(16);
return s.length<2?"0"+s:s;
},this);
return "#"+arr.join("");
},toCss:function(_49a){
var t=this,rgb=t.r+", "+t.g+", "+t.b;
return (_49a?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";
},toString:function(){
return this.toCss(true);
}});
_497.blendColors=dojo.blendColors=function(_49b,end,_49c,obj){
var t=obj||new _497();
_495.forEach(["r","g","b","a"],function(x){
t[x]=_49b[x]+(end[x]-_49b[x])*_49c;
if(x!="a"){
t[x]=Math.round(t[x]);
}
});
return t.sanitize();
};
_497.fromRgb=dojo.colorFromRgb=function(_49d,obj){
var m=_49d.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
return m&&_497.fromArray(m[1].split(/\s*,\s*/),obj);
};
_497.fromHex=dojo.colorFromHex=function(_49e,obj){
var t=obj||new _497(),bits=(_49e.length==4)?4:8,mask=(1<<bits)-1;
_49e=Number("0x"+_49e.substr(1));
if(isNaN(_49e)){
return null;
}
_495.forEach(["b","g","r"],function(x){
var c=_49e&mask;
_49e>>=bits;
t[x]=bits==4?17*c:c;
});
t.a=1;
return t;
};
_497.fromArray=dojo.colorFromArray=function(a,obj){
var t=obj||new _497();
t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));
if(isNaN(t.a)){
t.a=1;
}
return t.sanitize();
};
_497.fromString=dojo.colorFromString=function(str,obj){
var a=_497.named[str];
return a&&_497.fromArray(a,obj)||_497.fromRgb(str,obj)||_497.fromHex(str,obj);
};
return _497;
});
},"dojo/_base/loader":function(){
define(["./kernel","../has","require","module","./json","./lang","./array"],function(dojo,has,_49f,_4a0,json,lang,_4a1){
if(!1){
console.error("cannot load the Dojo v1.x loader with a foreign loader");
return 0;
}
var _4a2=function(id){
return {src:_4a0.id,id:id};
},_4a3=function(name){
return name.replace(/\./g,"/");
},_4a4=/\/\/>>built/,_4a5=[],_4a6=[],_4a7=function(mid,_4a8,_4a9){
_4a5.push(_4a9);
_4a1.forEach(mid.split(","),function(mid){
var _4aa=_4ab(mid,_4a8.module);
_4a6.push(_4aa);
_4ac(_4aa);
});
_4ad();
},_4ae,_4af=function(m){
_4ae[m.mid]=1;
for(var t,_4b0,deps=m.deps||[],i=0;i<deps.length;i++){
_4b0=deps[i];
if(!(t=_4ae[_4b0.mid])){
if(t===0||!_4af(_4b0)){
_4ae[m.mid]=0;
return false;
}
}
}
return true;
},_4ad=function(){
var _4b1,mid;
_4ae={};
for(mid in _4b2){
_4b1=_4b2[mid];
if(_4b1.executed||_4b1.noReqPluginCheck){
_4ae[mid]=1;
}else{
if(_4b1.noReqPluginCheck!==0){
_4b1.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(_4b1.noReqPluginCheck){
_4ae[mid]=1;
}else{
if(_4b1.injected!==_4b3){
_4ae[mid]=0;
}
}
}
}
for(var t,i=0,end=_4a6.length;i<end;i++){
_4b1=_4a6[i];
if(!(t=_4ae[_4b1.mid])){
if(t===0||!_4af(_4b1)){
return;
}
}
}
_4b4.holdIdle();
var _4b5=_4a5;
_4a5=[];
_4a1.forEach(_4b5,function(cb){
cb(1);
});
_4b4.releaseIdle();
},_4b6=function(mid,_4b7,_4b8){
_4b7([mid],function(_4b9){
_4b7(_4b9.names,function(){
for(var _4ba="",args=[],i=0;i<arguments.length;i++){
_4ba+="var "+_4b9.names[i]+"= arguments["+i+"]; ";
args.push(arguments[i]);
}
eval(_4ba);
var _4bb=_4b7.module,deps=[],hold={},_4bc=[],p,_4bd={provide:function(_4be){
_4be=_4a3(_4be);
var _4bf=_4ab(_4be,_4bb);
if(_4bf!==_4bb){
_4e3(_4bf);
}
},require:function(_4c0,_4c1){
_4c0=_4a3(_4c0);
_4c1&&(_4ab(_4c0,_4bb).result=_4de);
_4bc.push(_4c0);
},requireLocalization:function(_4c2,_4c3,_4c4){
deps.length||(deps=["dojo/i18n"]);
_4c4=(_4c4||dojo.locale).toLowerCase();
_4c2=_4a3(_4c2)+"/nls/"+(/root/i.test(_4c4)?"":_4c4+"/")+_4a3(_4c3);
if(_4ab(_4c2,_4bb).isXd){
deps.push("dojo/i18n!"+_4c2);
}
},loadInit:function(f){
f();
}};
try{
for(p in _4bd){
hold[p]=dojo[p];
dojo[p]=_4bd[p];
}
_4b9.def.apply(null,args);
}
catch(e){
_4e4("error",[_4a2("failedDojoLoadInit"),e]);
}
finally{
for(p in _4bd){
dojo[p]=hold[p];
}
}
_4bc.length&&deps.push("dojo/require!"+_4bc.join(","));
_4a5.push(_4b8);
_4a1.forEach(_4bc,function(mid){
var _4c5=_4ab(mid,_4b7.module);
_4a6.push(_4c5);
_4ac(_4c5);
});
_4ad();
});
});
},_4c6=function(text,_4c7,_4c8){
var _4c9=/\(|\)/g,_4ca=1,_4cb;
_4c9.lastIndex=_4c7;
while((_4cb=_4c9.exec(text))){
if(_4cb[0]==")"){
_4ca-=1;
}else{
_4ca+=1;
}
if(_4ca==0){
break;
}
}
if(_4ca!=0){
throw "unmatched paren around character "+_4c9.lastIndex+" in: "+text;
}
return [dojo.trim(text.substring(_4c8,_4c9.lastIndex))+";\n",_4c9.lastIndex];
},_4cc=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,_4cd=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,_4ce=/(^|\s)(require|define)\s*\(/m,_4cf=function(text,_4d0){
var _4d1,_4d2,_4d3,_4d4,_4d5=[],_4d6=[],_4d7=[];
_4d0=_4d0||text.replace(_4cc,function(_4d8){
_4cd.lastIndex=_4ce.lastIndex=0;
return (_4cd.test(_4d8)||_4ce.test(_4d8))?"":_4d8;
});
while((_4d1=_4cd.exec(_4d0))){
_4d2=_4cd.lastIndex;
_4d3=_4d2-_4d1[0].length;
_4d4=_4c6(_4d0,_4d2,_4d3);
if(_4d1[2]=="loadInit"){
_4d5.push(_4d4[0]);
}else{
_4d6.push(_4d4[0]);
}
_4cd.lastIndex=_4d4[1];
}
_4d7=_4d5.concat(_4d6);
if(_4d7.length||!_4ce.test(_4d0)){
return [text.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 && dojo.loadInit("),_4d7.join(""),_4d7];
}else{
return 0;
}
},_4d9=function(_4da,text){
var _4db,id,_4dc=[],_4dd=[];
if(_4a4.test(text)||!(_4db=_4cf(text))){
return 0;
}
id=_4da.mid+"-*loadInit";
for(var p in _4ab("dojo",_4da).result.scopeMap){
_4dc.push(p);
_4dd.push("\""+p+"\"");
}
return "// xdomain rewrite of "+_4da.path+"\n"+"define('"+id+"',{\n"+"\tnames:"+dojo.toJson(_4dc)+",\n"+"\tdef:function("+_4dc.join(",")+"){"+_4db[1]+"}"+"});\n\n"+"define("+dojo.toJson(_4dc.concat(["dojo/loadInit!"+id]))+", function("+_4dc.join(",")+"){\n"+_4db[0]+"});";
},_4b4=_49f.initSyncLoader(_4a7,_4ad,_4d9),sync=_4b4.sync,xd=_4b4.xd,_4b3=_4b4.arrived,_4de=_4b4.nonmodule,_4df=_4b4.executing,_4e0=_4b4.executed,_4e1=_4b4.syncExecStack,_4b2=_4b4.modules,_4e2=_4b4.execQ,_4ab=_4b4.getModule,_4ac=_4b4.injectModule,_4e3=_4b4.setArrived,_4e4=_4b4.signal,_4e5=_4b4.finishExec,_4e6=_4b4.execModule,_4e7=_4b4.getLegacyMode;
dojo.provide=function(mid){
var _4e8=_4e1[0],_4e9=lang.mixin(_4ab(_4a3(mid),_49f.module),{executed:_4df,result:lang.getObject(mid,true)});
_4e3(_4e9);
if(_4e8){
(_4e8.provides||(_4e8.provides=[])).push(function(){
_4e9.result=lang.getObject(mid);
delete _4e9.provides;
_4e9.executed!==_4e0&&_4e5(_4e9);
});
}
return _4e9.result;
};
has.add("config-publishRequireResult",1,0,0);
dojo.require=function(_4ea,_4eb){
function _4ec(mid,_4ed){
var _4ee=_4ab(_4a3(mid),_49f.module);
if(_4e1.length&&_4e1[0].finish){
_4e1[0].finish.push(mid);
return undefined;
}
if(_4ee.executed){
return _4ee.result;
}
_4ed&&(_4ee.result=_4de);
var _4ef=_4e7();
_4ac(_4ee);
_4ef=_4e7();
if(_4ee.executed!==_4e0&&_4ee.injected===_4b3){
_4b4.holdIdle();
_4e6(_4ee);
_4b4.releaseIdle();
}
if(_4ee.executed){
return _4ee.result;
}
if(_4ef==sync){
if(_4ee.cjs){
_4e2.unshift(_4ee);
}else{
_4e1.length&&(_4e1[0].finish=[mid]);
}
}else{
_4e2.push(_4ee);
}
return undefined;
};
var _4f0=_4ec(_4ea,_4eb);
if(has("config-publishRequireResult")&&!lang.exists(_4ea)&&_4f0!==undefined){
lang.setObject(_4ea,_4f0);
}
return _4f0;
};
dojo.loadInit=function(f){
f();
};
dojo.registerModulePath=function(_4f1,_4f2){
var _4f3={};
_4f3[_4f1.replace(/\./g,"/")]=_4f2;
_49f({paths:_4f3});
};
dojo.platformRequire=function(_4f4){
var _4f5=(_4f4.common||[]).concat(_4f4[dojo._name]||_4f4["default"]||[]),temp;
while(_4f5.length){
if(lang.isArray(temp=_4f5.shift())){
dojo.require.apply(dojo,temp);
}else{
dojo.require(temp);
}
}
};
dojo.requireIf=dojo.requireAfterIf=function(_4f6,_4f7,_4f8){
if(_4f6){
dojo.require(_4f7,_4f8);
}
};
dojo.requireLocalization=function(_4f9,_4fa,_4fb){
_49f(["../i18n"],function(i18n){
i18n.getLocalization(_4f9,_4fa,_4fb);
});
};
return {extractLegacyApiApplications:_4cf,require:_4b4.dojoRequirePlugin,loadInit:_4b6};
});
},"dijit/WidgetSet":function(){
define("dijit/WidgetSet",["dojo/_base/array","dojo/_base/declare","dojo/_base/window","./registry"],function(_4fc,_4fd,win,_4fe){
var _4ff=_4fd("dijit.WidgetSet",null,{constructor:function(){
this._hash={};
this.length=0;
},add:function(_500){
if(this._hash[_500.id]){
throw new Error("Tried to register widget with id=="+_500.id+" but that id is already registered");
}
this._hash[_500.id]=_500;
this.length++;
},remove:function(id){
if(this._hash[id]){
delete this._hash[id];
this.length--;
}
},forEach:function(func,_501){
_501=_501||win.global;
var i=0,id;
for(id in this._hash){
func.call(_501,this._hash[id],i++,this._hash);
}
return this;
},filter:function(_502,_503){
_503=_503||win.global;
var res=new _4ff(),i=0,id;
for(id in this._hash){
var w=this._hash[id];
if(_502.call(_503,w,i++,this._hash)){
res.add(w);
}
}
return res;
},byId:function(id){
return this._hash[id];
},byClass:function(cls){
var res=new _4ff(),id,_504;
for(id in this._hash){
_504=this._hash[id];
if(_504.declaredClass==cls){
res.add(_504);
}
}
return res;
},toArray:function(){
var ar=[];
for(var id in this._hash){
ar.push(this._hash[id]);
}
return ar;
},map:function(func,_505){
return _4fc.map(this.toArray(),func,_505);
},every:function(func,_506){
_506=_506||win.global;
var x=0,i;
for(i in this._hash){
if(!func.call(_506,this._hash[i],x++,this._hash)){
return false;
}
}
return true;
},some:function(func,_507){
_507=_507||win.global;
var x=0,i;
for(i in this._hash){
if(func.call(_507,this._hash[i],x++,this._hash)){
return true;
}
}
return false;
}});
_4fc.forEach(["forEach","filter","byClass","map","every","some"],function(func){
_4fe[func]=_4ff.prototype[func];
});
return _4ff;
});
},"dijit/form/RadioButton":function(){
define("dijit/form/RadioButton",["dojo/_base/declare","./CheckBox","./_RadioButtonMixin"],function(_508,_509,_50a){
return _508("dijit.form.RadioButton",[_509,_50a],{baseClass:"dijitRadio"});
});
},"dojo/mouse":function(){
define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(dojo,on,has,dom,win){
has.add("dom-quirks",win.doc&&win.doc.compatMode=="BackCompat");
has.add("events-mouseenter",win.doc&&"onmouseenter" in win.doc.createElement("div"));
var _50b;
if(has("dom-quirks")||!has("dom-addeventlistener")){
_50b={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_50c){
return e.button&_50c;
},isLeft:function(e){
return e.button&1;
},isMiddle:function(e){
return e.button&4;
},isRight:function(e){
return e.button&2;
}};
}else{
_50b={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_50d){
return e.button==_50d;
},isLeft:function(e){
return e.button==0;
},isMiddle:function(e){
return e.button==1;
},isRight:function(e){
return e.button==2;
}};
}
dojo.mouseButtons=_50b;
function _50e(type,_50f){
var _510=function(node,_511){
return on(node,type,function(evt){
if(!dom.isDescendant(evt.relatedTarget,_50f?evt.target:node)){
return _511.call(this,evt);
}
});
};
if(!_50f){
_510.bubble=_50e(type,true);
}
return _510;
};
return {enter:_50e("mouseover"),leave:_50e("mouseout"),isLeft:_50b.isLeft,isMiddle:_50b.isMiddle,isRight:_50b.isRight};
});
},"dijit/a11y":function(){
define("dijit/a11y",["dojo/_base/array","dojo/_base/config","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-style","dojo/_base/sniff","./_base/manager","."],function(_512,_513,_514,dom,_515,_516,has,_517,_518){
var _519=(_518._isElementShown=function(elem){
var s=_516.get(elem);
return (s.visibility!="hidden")&&(s.visibility!="collapsed")&&(s.display!="none")&&(_515.get(elem,"type")!="hidden");
});
_518.hasDefaultTabStop=function(elem){
switch(elem.nodeName.toLowerCase()){
case "a":
return _515.has(elem,"href");
case "area":
case "button":
case "input":
case "object":
case "select":
case "textarea":
return true;
case "iframe":
var body;
try{
var _51a=elem.contentDocument;
if("designMode" in _51a&&_51a.designMode=="on"){
return true;
}
body=_51a.body;
}
catch(e1){
try{
body=elem.contentWindow.document.body;
}
catch(e2){
return false;
}
}
return body&&(body.contentEditable=="true"||(body.firstChild&&body.firstChild.contentEditable=="true"));
default:
return elem.contentEditable=="true";
}
};
var _51b=(_518.isTabNavigable=function(elem){
if(_515.get(elem,"disabled")){
return false;
}else{
if(_515.has(elem,"tabIndex")){
return _515.get(elem,"tabIndex")>=0;
}else{
return _518.hasDefaultTabStop(elem);
}
}
});
_518._getTabNavigable=function(root){
var _51c,last,_51d,_51e,_51f,_520,_521={};
function _522(node){
return node&&node.tagName.toLowerCase()=="input"&&node.type&&node.type.toLowerCase()=="radio"&&node.name&&node.name.toLowerCase();
};
var _523=function(_524){
for(var _525=_524.firstChild;_525;_525=_525.nextSibling){
if(_525.nodeType!=1||(has("ie")&&_525.scopeName!=="HTML")||!_519(_525)){
continue;
}
if(_51b(_525)){
var _526=_515.get(_525,"tabIndex");
if(!_515.has(_525,"tabIndex")||_526==0){
if(!_51c){
_51c=_525;
}
last=_525;
}else{
if(_526>0){
if(!_51d||_526<_51e){
_51e=_526;
_51d=_525;
}
if(!_51f||_526>=_520){
_520=_526;
_51f=_525;
}
}
}
var rn=_522(_525);
if(_515.get(_525,"checked")&&rn){
_521[rn]=_525;
}
}
if(_525.nodeName.toUpperCase()!="SELECT"){
_523(_525);
}
}
};
if(_519(root)){
_523(root);
}
function rs(node){
return _521[_522(node)]||node;
};
return {first:rs(_51c),last:rs(last),lowest:rs(_51d),highest:rs(_51f)};
};
_518.getFirstInTabbingOrder=function(root){
var _527=_518._getTabNavigable(dom.byId(root));
return _527.lowest?_527.lowest:_527.first;
};
_518.getLastInTabbingOrder=function(root){
var _528=_518._getTabNavigable(dom.byId(root));
return _528.last?_528.last:_528.highest;
};
return {hasDefaultTabStop:_518.hasDefaultTabStop,isTabNavigable:_518.isTabNavigable,_getTabNavigable:_518._getTabNavigable,getFirstInTabbingOrder:_518.getFirstInTabbingOrder,getLastInTabbingOrder:_518.getLastInTabbingOrder};
});
},"url:dijit/form/templates/Button.html":"<span class=\"dijit dijitReset dijitInline\" role=\"presentation\"\n\t><span class=\"dijitReset dijitInline dijitButtonNode\"\n\t\tdata-dojo-attach-event=\"ondijitclick:_onClick\" role=\"presentation\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdata-dojo-attach-point=\"titleNode,focusNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\" data-dojo-attach-point=\"iconNode\"></span\n\t\t\t><span class=\"dijitReset dijitToggleButtonIconChar\">&#x25CF;</span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t\tdata-dojo-attach-point=\"containerNode\"\n\t\t\t></span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\"\n\t\ttabIndex=\"-1\" role=\"presentation\" data-dojo-attach-point=\"valueNode\"\n/></span>\n","dijit/CheckedMenuItem":function(){
require({cache:{"url:dijit/templates/CheckedMenuItem.html":"<tr class=\"dijitReset dijitMenuItem\" data-dojo-attach-point=\"focusNode\" role=\"menuitemcheckbox\" tabIndex=\"-1\"\n\t\tdata-dojo-attach-event=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" data-dojo-attach-point=\"iconNode\"/>\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" data-dojo-attach-point=\"containerNode,labelNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" data-dojo-attach-point=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&#160;</td>\n</tr>\n"}});
define("dijit/CheckedMenuItem",["dojo/_base/declare","dojo/dom-class","./MenuItem","dojo/text!./templates/CheckedMenuItem.html","./hccss"],function(_529,_52a,_52b,_52c){
return _529("dijit.CheckedMenuItem",_52b,{templateString:_52c,checked:false,_setCheckedAttr:function(_52d){
_52a.toggle(this.domNode,"dijitCheckedMenuItemChecked",_52d);
this.domNode.setAttribute("aria-checked",_52d);
this._set("checked",_52d);
},iconClass:"",onChange:function(){
},_onClick:function(e){
if(!this.disabled){
this.set("checked",!this.checked);
this.onChange(this.checked);
}
this.inherited(arguments);
}});
});
},"dijit/typematic":function(){
define("dijit/typematic",["dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/_base/sniff","."],function(_52e,_52f,_530,_531,lang,on,has,_532){
var _533=(_532.typematic={_fireEventAndReload:function(){
this._timer=null;
this._callback(++this._count,this._node,this._evt);
this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:(this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay)),this._minDelay);
this._timer=setTimeout(lang.hitch(this,"_fireEventAndReload"),this._currentTimeout);
},trigger:function(evt,_534,node,_535,obj,_536,_537,_538){
if(obj!=this._obj){
this.stop();
this._initialDelay=_537||500;
this._subsequentDelay=_536||0.9;
this._minDelay=_538||10;
this._obj=obj;
this._evt=evt;
this._node=node;
this._currentTimeout=-1;
this._count=-1;
this._callback=lang.hitch(_534,_535);
this._fireEventAndReload();
this._evt=lang.mixin({faux:true},evt);
}
},stop:function(){
if(this._timer){
clearTimeout(this._timer);
this._timer=null;
}
if(this._obj){
this._callback(-1,this._node,this._evt);
this._obj=null;
}
},addKeyListener:function(node,_539,_53a,_53b,_53c,_53d,_53e){
if(_539.keyCode){
_539.charOrCode=_539.keyCode;
_531.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.","","2.0");
}else{
if(_539.charCode){
_539.charOrCode=String.fromCharCode(_539.charCode);
_531.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.","","2.0");
}
}
var _53f=[on(node,_52f._keypress,lang.hitch(this,function(evt){
if(evt.charOrCode==_539.charOrCode&&(_539.ctrlKey===undefined||_539.ctrlKey==evt.ctrlKey)&&(_539.altKey===undefined||_539.altKey==evt.altKey)&&(_539.metaKey===undefined||_539.metaKey==(evt.metaKey||false))&&(_539.shiftKey===undefined||_539.shiftKey==evt.shiftKey)){
_530.stop(evt);
_533.trigger(evt,_53a,node,_53b,_539,_53c,_53d,_53e);
}else{
if(_533._obj==_539){
_533.stop();
}
}
})),on(node,"keyup",lang.hitch(this,function(){
if(_533._obj==_539){
_533.stop();
}
}))];
return {remove:function(){
_52e.forEach(_53f,function(h){
h.remove();
});
}};
},addMouseListener:function(node,_540,_541,_542,_543,_544){
var _545=[on(node,"mousedown",lang.hitch(this,function(evt){
_530.stop(evt);
_533.trigger(evt,_540,node,_541,node,_542,_543,_544);
})),on(node,"mouseup",lang.hitch(this,function(evt){
if(this._obj){
_530.stop(evt);
}
_533.stop();
})),on(node,"mouseout",lang.hitch(this,function(evt){
_530.stop(evt);
_533.stop();
})),on(node,"mousemove",lang.hitch(this,function(evt){
evt.preventDefault();
})),on(node,"dblclick",lang.hitch(this,function(evt){
_530.stop(evt);
if(has("ie")){
_533.trigger(evt,_540,node,_541,node,_542,_543,_544);
setTimeout(lang.hitch(this,_533.stop),50);
}
}))];
return {remove:function(){
_52e.forEach(_545,function(h){
h.remove();
});
}};
},addListener:function(_546,_547,_548,_549,_54a,_54b,_54c,_54d){
var _54e=[this.addKeyListener(_547,_548,_549,_54a,_54b,_54c,_54d),this.addMouseListener(_546,_549,_54a,_54b,_54c,_54d)];
return {remove:function(){
_52e.forEach(_54e,function(h){
h.remove();
});
}};
}});
return _533;
});
},"dijit/form/DropDownButton":function(){
require({cache:{"url:dijit/form/templates/DropDownButton.html":"<span class=\"dijit dijitReset dijitInline\"\n\t><span class='dijitReset dijitInline dijitButtonNode'\n\t\tdata-dojo-attach-event=\"ondijitclick:_onClick\" data-dojo-attach-point=\"_buttonNode\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdata-dojo-attach-point=\"focusNode,titleNode,_arrowWrapperNode\"\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\n\t\t\t\tdata-dojo-attach-point=\"iconNode\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tdata-dojo-attach-point=\"containerNode,_popupStateNode\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\n\t\tdata-dojo-attach-point=\"valueNode\"\n/></span>\n"}});
define("dijit/form/DropDownButton",["dojo/_base/declare","dojo/_base/lang","dojo/query","../registry","../popup","./Button","../_Container","../_HasDropDown","dojo/text!./templates/DropDownButton.html"],function(_54f,lang,_550,_551,_552,_553,_554,_555,_556){
return _54f("dijit.form.DropDownButton",[_553,_554,_555],{baseClass:"dijitDropDownButton",templateString:_556,_fillContent:function(){
if(this.srcNodeRef){
var _557=_550("*",this.srcNodeRef);
this.inherited(arguments,[_557[0]]);
this.dropDownContainer=this.srcNodeRef;
}
},startup:function(){
if(this._started){
return;
}
if(!this.dropDown&&this.dropDownContainer){
var _558=_550("[widgetId]",this.dropDownContainer)[0];
this.dropDown=_551.byNode(_558);
delete this.dropDownContainer;
}
if(this.dropDown){
_552.hide(this.dropDown);
}
this.inherited(arguments);
},isLoaded:function(){
var _559=this.dropDown;
return (!!_559&&(!_559.href||_559.isLoaded));
},loadDropDown:function(_55a){
var _55b=this.dropDown;
var _55c=_55b.on("load",lang.hitch(this,function(){
_55c.remove();
_55a();
}));
_55b.refresh();
},isFocusable:function(){
return this.inherited(arguments)&&!this._mouseDown;
}});
});
},"dijit/form/CheckBox":function(){
require({cache:{"url:dijit/form/templates/CheckBox.html":"<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\n\t><input\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\n\t\tdata-dojo-attach-point=\"focusNode\"\n\t \tdata-dojo-attach-event=\"onclick:_onClick\"\n/></div>\n"}});
define("dijit/form/CheckBox",["require","dojo/_base/declare","dojo/dom-attr","dojo/_base/kernel","dojo/query","dojo/ready","./ToggleButton","./_CheckBoxMixin","dojo/text!./templates/CheckBox.html","dojo/NodeList-dom"],function(_55d,_55e,_55f,_560,_561,_562,_563,_564,_565){
if(!_560.isAsync){
_562(0,function(){
var _566=["dijit/form/RadioButton"];
_55d(_566);
});
}
return _55e("dijit.form.CheckBox",[_563,_564],{templateString:_565,baseClass:"dijitCheckBox",_setValueAttr:function(_567,_568){
if(typeof _567=="string"){
this._set("value",_567);
_55f.set(this.focusNode,"value",_567);
_567=true;
}
if(this._created){
this.set("checked",_567,_568);
}
},_getValueAttr:function(){
return (this.checked?this.value:false);
},_setIconClassAttr:null,postMixInProperties:function(){
this.inherited(arguments);
this.checkedAttrSetting=this.checked?"checked":"";
},_fillContent:function(){
},_onFocus:function(){
if(this.id){
_561("label[for='"+this.id+"']").addClass("dijitFocusedLabel");
}
this.inherited(arguments);
},_onBlur:function(){
if(this.id){
_561("label[for='"+this.id+"']").removeClass("dijitFocusedLabel");
}
this.inherited(arguments);
}});
});
},"dijit/_base/focus":function(){
define("dijit/_base/focus",["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/topic","dojo/_base/window","../focus",".."],function(_569,dom,lang,_56a,win,_56b,_56c){
lang.mixin(_56c,{_curFocus:null,_prevFocus:null,isCollapsed:function(){
return _56c.getBookmark().isCollapsed;
},getBookmark:function(){
var bm,rg,tg,sel=win.doc.selection,cf=_56b.curNode;
if(win.global.getSelection){
sel=win.global.getSelection();
if(sel){
if(sel.isCollapsed){
tg=cf?cf.tagName:"";
if(tg){
tg=tg.toLowerCase();
if(tg=="textarea"||(tg=="input"&&(!cf.type||cf.type.toLowerCase()=="text"))){
sel={start:cf.selectionStart,end:cf.selectionEnd,node:cf,pRange:true};
return {isCollapsed:(sel.end<=sel.start),mark:sel};
}
}
bm={isCollapsed:true};
if(sel.rangeCount){
bm.mark=sel.getRangeAt(0).cloneRange();
}
}else{
rg=sel.getRangeAt(0);
bm={isCollapsed:false,mark:rg.cloneRange()};
}
}
}else{
if(sel){
tg=cf?cf.tagName:"";
tg=tg.toLowerCase();
if(cf&&tg&&(tg=="button"||tg=="textarea"||tg=="input")){
if(sel.type&&sel.type.toLowerCase()=="none"){
return {isCollapsed:true,mark:null};
}else{
rg=sel.createRange();
return {isCollapsed:rg.text&&rg.text.length?false:true,mark:{range:rg,pRange:true}};
}
}
bm={};
try{
rg=sel.createRange();
bm.isCollapsed=!(sel.type=="Text"?rg.htmlText.length:rg.length);
}
catch(e){
bm.isCollapsed=true;
return bm;
}
if(sel.type.toUpperCase()=="CONTROL"){
if(rg.length){
bm.mark=[];
var i=0,len=rg.length;
while(i<len){
bm.mark.push(rg.item(i++));
}
}else{
bm.isCollapsed=true;
bm.mark=null;
}
}else{
bm.mark=rg.getBookmark();
}
}else{
console.warn("No idea how to store the current selection for this browser!");
}
}
return bm;
},moveToBookmark:function(_56d){
var _56e=win.doc,mark=_56d.mark;
if(mark){
if(win.global.getSelection){
var sel=win.global.getSelection();
if(sel&&sel.removeAllRanges){
if(mark.pRange){
var n=mark.node;
n.selectionStart=mark.start;
n.selectionEnd=mark.end;
}else{
sel.removeAllRanges();
sel.addRange(mark);
}
}else{
console.warn("No idea how to restore selection for this browser!");
}
}else{
if(_56e.selection&&mark){
var rg;
if(mark.pRange){
rg=mark.range;
}else{
if(lang.isArray(mark)){
rg=_56e.body.createControlRange();
_569.forEach(mark,function(n){
rg.addElement(n);
});
}else{
rg=_56e.body.createTextRange();
rg.moveToBookmark(mark);
}
}
rg.select();
}
}
}
},getFocus:function(menu,_56f){
var node=!_56b.curNode||(menu&&dom.isDescendant(_56b.curNode,menu.domNode))?_56c._prevFocus:_56b.curNode;
return {node:node,bookmark:node&&(node==_56b.curNode)&&win.withGlobal(_56f||win.global,_56c.getBookmark),openedForWindow:_56f};
},_activeStack:[],registerIframe:function(_570){
return _56b.registerIframe(_570);
},unregisterIframe:function(_571){
_571&&_571.remove();
},registerWin:function(_572,_573){
return _56b.registerWin(_572,_573);
},unregisterWin:function(_574){
_574&&_574.remove();
}});
_56b.focus=function(_575){
if(!_575){
return;
}
var node="node" in _575?_575.node:_575,_576=_575.bookmark,_577=_575.openedForWindow,_578=_576?_576.isCollapsed:false;
if(node){
var _579=(node.tagName.toLowerCase()=="iframe")?node.contentWindow:node;
if(_579&&_579.focus){
try{
_579.focus();
}
catch(e){
}
}
_56b._onFocusNode(node);
}
if(_576&&win.withGlobal(_577||win.global,_56c.isCollapsed)&&!_578){
if(_577){
_577.focus();
}
try{
win.withGlobal(_577||win.global,_56c.moveToBookmark,null,[_576]);
}
catch(e2){
}
}
};
_56b.watch("curNode",function(name,_57a,_57b){
_56c._curFocus=_57b;
_56c._prevFocus=_57a;
if(_57b){
_56a.publish("focusNode",_57b);
}
});
_56b.watch("activeStack",function(name,_57c,_57d){
_56c._activeStack=_57d;
});
_56b.on("widget-blur",function(_57e,by){
_56a.publish("widgetBlur",_57e,by);
});
_56b.on("widget-focus",function(_57f,by){
_56a.publish("widgetFocus",_57f,by);
});
return _56c;
});
},"dijit/MenuSeparator":function(){
require({cache:{"url:dijit/templates/MenuSeparator.html":"<tr class=\"dijitMenuSeparator\">\n\t<td class=\"dijitMenuSeparatorIconCell\">\n\t\t<div class=\"dijitMenuSeparatorTop\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n\t<td colspan=\"3\" class=\"dijitMenuSeparatorLabelCell\">\n\t\t<div class=\"dijitMenuSeparatorTop dijitMenuSeparatorLabel\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n</tr>"}});
define("dijit/MenuSeparator",["dojo/_base/declare","dojo/dom","./_WidgetBase","./_TemplatedMixin","./_Contained","dojo/text!./templates/MenuSeparator.html"],function(_580,dom,_581,_582,_583,_584){
return _580("dijit.MenuSeparator",[_581,_582,_583],{templateString:_584,buildRendering:function(){
this.inherited(arguments);
dom.setSelectable(this.domNode,false);
},isFocusable:function(){
return false;
}});
});
},"dijit/place":function(){
define("dijit/place",["dojo/_base/array","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/_base/window","dojo/window","."],function(_585,_586,_587,_588,win,_589,_58a){
function _58b(node,_58c,_58d,_58e){
var view=_589.getBox();
if(!node.parentNode||String(node.parentNode.tagName).toLowerCase()!="body"){
win.body().appendChild(node);
}
var best=null;
_585.some(_58c,function(_58f){
var _590=_58f.corner;
var pos=_58f.pos;
var _591=0;
var _592={w:{"L":view.l+view.w-pos.x,"R":pos.x-view.l,"M":view.w}[_590.charAt(1)],h:{"T":view.t+view.h-pos.y,"B":pos.y-view.t,"M":view.h}[_590.charAt(0)]};
if(_58d){
var res=_58d(node,_58f.aroundCorner,_590,_592,_58e);
_591=typeof res=="undefined"?0:res;
}
var _593=node.style;
var _594=_593.display;
var _595=_593.visibility;
if(_593.display=="none"){
_593.visibility="hidden";
_593.display="";
}
var mb=_586.getMarginBox(node);
_593.display=_594;
_593.visibility=_595;
var _596={"L":pos.x,"R":pos.x-mb.w,"M":Math.max(view.l,Math.min(view.l+view.w,pos.x+(mb.w>>1))-mb.w)}[_590.charAt(1)],_597={"T":pos.y,"B":pos.y-mb.h,"M":Math.max(view.t,Math.min(view.t+view.h,pos.y+(mb.h>>1))-mb.h)}[_590.charAt(0)],_598=Math.max(view.l,_596),_599=Math.max(view.t,_597),endX=Math.min(view.l+view.w,_596+mb.w),endY=Math.min(view.t+view.h,_597+mb.h),_59a=endX-_598,_59b=endY-_599;
_591+=(mb.w-_59a)+(mb.h-_59b);
if(best==null||_591<best.overflow){
best={corner:_590,aroundCorner:_58f.aroundCorner,x:_598,y:_599,w:_59a,h:_59b,overflow:_591,spaceAvailable:_592};
}
return !_591;
});
if(best.overflow&&_58d){
_58d(node,best.aroundCorner,best.corner,best.spaceAvailable,_58e);
}
var l=_586.isBodyLtr(),s=node.style;
s.top=best.y+"px";
s[l?"left":"right"]=(l?best.x:view.w-best.x-best.w)+"px";
s[l?"right":"left"]="auto";
return best;
};
return (_58a.place={at:function(node,pos,_59c,_59d){
var _59e=_585.map(_59c,function(_59f){
var c={corner:_59f,pos:{x:pos.x,y:pos.y}};
if(_59d){
c.pos.x+=_59f.charAt(1)=="L"?_59d.x:-_59d.x;
c.pos.y+=_59f.charAt(0)=="T"?_59d.y:-_59d.y;
}
return c;
});
return _58b(node,_59e);
},around:function(node,_5a0,_5a1,_5a2,_5a3){
var _5a4=(typeof _5a0=="string"||"offsetWidth" in _5a0)?_586.position(_5a0,true):_5a0;
if(_5a0.parentNode){
var _5a5=_587.getComputedStyle(_5a0).position=="absolute";
var _5a6=_5a0.parentNode;
while(_5a6&&_5a6.nodeType==1&&_5a6.nodeName!="BODY"){
var _5a7=_586.position(_5a6,true),pcs=_587.getComputedStyle(_5a6);
if(/relative|absolute/.test(pcs.position)){
_5a5=false;
}
if(!_5a5&&/hidden|auto|scroll/.test(pcs.overflow)){
var _5a8=Math.min(_5a4.y+_5a4.h,_5a7.y+_5a7.h);
var _5a9=Math.min(_5a4.x+_5a4.w,_5a7.x+_5a7.w);
_5a4.x=Math.max(_5a4.x,_5a7.x);
_5a4.y=Math.max(_5a4.y,_5a7.y);
_5a4.h=_5a8-_5a4.y;
_5a4.w=_5a9-_5a4.x;
}
if(pcs.position=="absolute"){
_5a5=true;
}
_5a6=_5a6.parentNode;
}
}
var x=_5a4.x,y=_5a4.y,_5aa="w" in _5a4?_5a4.w:(_5a4.w=_5a4.width),_5ab="h" in _5a4?_5a4.h:(_588.deprecated("place.around: dijit.place.__Rectangle: { x:"+x+", y:"+y+", height:"+_5a4.height+", width:"+_5aa+" } has been deprecated.  Please use { x:"+x+", y:"+y+", h:"+_5a4.height+", w:"+_5aa+" }","","2.0"),_5a4.h=_5a4.height);
var _5ac=[];
function push(_5ad,_5ae){
_5ac.push({aroundCorner:_5ad,corner:_5ae,pos:{x:{"L":x,"R":x+_5aa,"M":x+(_5aa>>1)}[_5ad.charAt(1)],y:{"T":y,"B":y+_5ab,"M":y+(_5ab>>1)}[_5ad.charAt(0)]}});
};
_585.forEach(_5a1,function(pos){
var ltr=_5a2;
switch(pos){
case "above-centered":
push("TM","BM");
break;
case "below-centered":
push("BM","TM");
break;
case "after-centered":
ltr=!ltr;
case "before-centered":
push(ltr?"ML":"MR",ltr?"MR":"ML");
break;
case "after":
ltr=!ltr;
case "before":
push(ltr?"TL":"TR",ltr?"TR":"TL");
push(ltr?"BL":"BR",ltr?"BR":"BL");
break;
case "below-alt":
ltr=!ltr;
case "below":
push(ltr?"BL":"BR",ltr?"TL":"TR");
push(ltr?"BR":"BL",ltr?"TR":"TL");
break;
case "above-alt":
ltr=!ltr;
case "above":
push(ltr?"TL":"TR",ltr?"BL":"BR");
push(ltr?"TR":"TL",ltr?"BR":"BL");
break;
default:
push(pos.aroundCorner,pos.corner);
}
});
var _5af=_58b(node,_5ac,_5a3,{w:_5aa,h:_5ab});
_5af.aroundNodePos=_5a4;
return _5af;
}});
});
},"dojo/_base/NodeList":function(){
define(["./kernel","../query","./array","./html","../NodeList-dom"],function(dojo,_5b0,_5b1){
var _5b2=_5b0.NodeList;
var nlp=_5b2.prototype;
nlp.connect=_5b2._adaptAsForEach(function(){
return dojo.connect.apply(this,arguments);
});
nlp.coords=_5b2._adaptAsMap(dojo.coords);
_5b2.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];
_5b1.forEach(_5b2.events,function(evt){
var _5b3="on"+evt;
nlp[_5b3]=function(a,b){
return this.connect(_5b3,a,b);
};
});
dojo.NodeList=_5b2;
return dojo.NodeList;
});
},"dojo/_base/kernel":function(){
define(["../has","./config","require","module"],function(has,_5b4,_5b5,_5b6){
var i,p,_5b7={},_5b8={},dojo={config:_5b4,global:this,dijit:_5b7,dojox:_5b8};
var _5b9={dojo:["dojo",dojo],dijit:["dijit",_5b7],dojox:["dojox",_5b8]},_5ba=(_5b5.packs&&_5b5.packs[_5b6.id.match(/[^\/]+/)[0]].packageMap)||{},item;
for(p in _5ba){
if(_5b9[p]){
_5b9[p][0]=_5ba[p];
}else{
_5b9[p]=[_5ba[p],{}];
}
}
for(p in _5b9){
item=_5b9[p];
item[1]._scopeName=item[0];
if(!_5b4.noGlobals){
this[item[0]]=item[1];
}
}
dojo.scopeMap=_5b9;
dojo.baseUrl=dojo.config.baseUrl=_5b5.baseUrl;
dojo.isAsync=!1||_5b5.async;
dojo.locale=_5b4.locale;
var rev="$Rev$".match(/\d+/);
dojo.version={major:1,minor:7,patch:0,flag:"dev",revision:rev?+rev[0]:NaN,toString:function(){
var v=dojo.version;
return v.major+"."+v.minor+"."+v.patch+v.flag+" ("+v.revision+")";
}};
true||has.add("extend-dojo",1);
dojo.eval=function(_5bb){
};
(Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}"))(dojo);
if(0){
dojo.exit=function(_5bc){
quit(_5bc);
};
}else{
dojo.exit=function(){
};
}
true||has.add("dojo-guarantee-console",1);
if(1){
typeof console!="undefined"||(console={});
var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
var tn;
i=0;
while((tn=cn[i++])){
if(!console[tn]){
(function(){
var tcn=tn+"";
console[tcn]=("log" in console)?function(){
var a=Array.apply({},arguments);
a.unshift(tcn+":");
console["log"](a.join(" "));
}:function(){
};
console[tcn]._fake=true;
})();
}
}
}
has.add("dojo-debug-messages",!!_5b4.isDebug);
if(has("dojo-debug-messages")){
dojo.deprecated=function(_5bd,_5be,_5bf){
var _5c0="DEPRECATED: "+_5bd;
if(_5be){
_5c0+=" "+_5be;
}
if(_5bf){
_5c0+=" -- will be removed in version: "+_5bf;
}
console.warn(_5c0);
};
dojo.experimental=function(_5c1,_5c2){
var _5c3="EXPERIMENTAL: "+_5c1+" -- APIs subject to change without notice.";
if(_5c2){
_5c3+=" "+_5c2;
}
console.warn(_5c3);
};
}else{
dojo.deprecated=dojo.experimental=function(){
};
}
true||has.add("dojo-modulePaths",1);
if(1){
if(_5b4.modulePaths){
dojo.deprecated("dojo.modulePaths","use paths configuration");
var _5c4={};
for(p in _5b4.modulePaths){
_5c4[p.replace(/\./g,"/")]=_5b4.modulePaths[p];
}
_5b5({paths:_5c4});
}
}
true||has.add("dojo-moduleUrl",1);
if(1){
dojo.moduleUrl=function(_5c5,url){
dojo.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");
var _5c6=null;
if(_5c5){
_5c6=_5b5.toUrl(_5c5.replace(/\./g,"/")+(url?("/"+url):"")+"/*.*").replace(/\/\*\.\*/,"")+(url?"":"/");
}
return _5c6;
};
}
dojo._hasResource={};
return dojo;
});
},"dijit/form/_CheckBoxMixin":function(){
define("dijit/form/_CheckBoxMixin",["dojo/_base/declare","dojo/dom-attr","dojo/_base/event"],function(_5c7,_5c8,_5c9){
return _5c7("dijit.form._CheckBoxMixin",null,{type:"checkbox",value:"on",readOnly:false,_aria_attr:"aria-checked",_setReadOnlyAttr:function(_5ca){
this._set("readOnly",_5ca);
_5c8.set(this.focusNode,"readOnly",_5ca);
this.focusNode.setAttribute("aria-readonly",_5ca);
},_setLabelAttr:undefined,postMixInProperties:function(){
if(this.value==""){
this.value="on";
}
this.inherited(arguments);
},reset:function(){
this.inherited(arguments);
this._set("value",this.params.value||"on");
_5c8.set(this.focusNode,"value",this.value);
},_onClick:function(e){
if(this.readOnly){
_5c9.stop(e);
return false;
}
return this.inherited(arguments);
}});
});
},"dojo/main":function(){
define(["./_base/kernel","./has","require","./_base/sniff","./_base/lang","./_base/array","./ready","./_base/declare","./_base/connect","./_base/Deferred","./_base/json","./_base/Color","./has!dojo-firebug?./_firebug/firebug","./_base/browser","./_base/loader"],function(dojo,has,_5cb,_5cc,lang,_5cd,_5ce){
if(dojo.config.isDebug){
_5cb(["./_firebug/firebug"]);
}
true||has.add("dojo-config-require",1);
if(1){
var deps=dojo.config.require;
if(deps){
deps=_5cd.map(lang.isArray(deps)?deps:[deps],function(item){
return item.replace(/\./g,"/");
});
if(dojo.isAsync){
_5cb(deps);
}else{
_5ce(1,function(){
_5cb(deps);
});
}
}
}
return dojo;
});
},"dojo/on":function(){
define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./has"],function(_5cf,dojo,has){
"use strict";
if(1){
var _5d0=window.ScriptEngineMajorVersion;
has.add("jscript",_5d0&&(_5d0()+ScriptEngineMinorVersion()/10));
has.add("event-orientationchange",has("touch")&&!has("android"));
}
var on=function(_5d1,type,_5d2,_5d3){
if(_5d1.on){
return _5d1.on(type,_5d2);
}
return on.parse(_5d1,type,_5d2,_5d4,_5d3,this);
};
on.pausable=function(_5d5,type,_5d6,_5d7){
var _5d8;
var _5d9=on(_5d5,type,function(){
if(!_5d8){
return _5d6.apply(this,arguments);
}
},_5d7);
_5d9.pause=function(){
_5d8=true;
};
_5d9.resume=function(){
_5d8=false;
};
return _5d9;
};
on.once=function(_5da,type,_5db,_5dc){
var _5dd=on(_5da,type,function(){
_5dd.remove();
return _5db.apply(this,arguments);
});
return _5dd;
};
on.parse=function(_5de,type,_5df,_5e0,_5e1,_5e2){
if(type.call){
return type.call(_5e2,_5de,_5df);
}
if(type.indexOf(",")>-1){
var _5e3=type.split(/\s*,\s*/);
var _5e4=[];
var i=0;
var _5e5;
while(_5e5=_5e3[i++]){
_5e4.push(_5e0(_5de,_5e5,_5df,_5e1,_5e2));
}
_5e4.remove=function(){
for(var i=0;i<_5e4.length;i++){
_5e4[i].remove();
}
};
return _5e4;
}
return _5e0(_5de,type,_5df,_5e1,_5e2);
};
var _5e6=/^touch/;
function _5e7(fn){
return (function(){
try{
fn.apply(this,arguments);
}
catch(e){
}
});
};
function _5d4(_5e8,type,_5e9,_5ea,_5eb){
if(_5e8===_5e8.window){
console.warn("Suppresing Window errors: "+type);
_5e9=_5e7(_5e9);
}
var _5ec=type.match(/(.*):(.*)/);
if(_5ec){
type=_5ec[2];
_5ec=_5ec[1];
return on.selector(_5ec,type).call(_5eb,_5e8,_5e9);
}
if(has("touch")){
if(_5e6.test(type)){
_5e9=_5ed(_5e9);
}
if(!has("event-orientationchange")&&(type=="orientationchange")){
type="resize";
_5e8=window;
_5e9=_5ed(_5e9);
}
}
if(_5e8.addEventListener){
var _5ee=type in _5ef;
_5e8.addEventListener(_5ee?_5ef[type]:type,_5e9,_5ee);
return {remove:function(){
_5e8.removeEventListener(type,_5e9,_5ee);
}};
}
type="on"+type;
if(_5f0&&_5e8.attachEvent){
return _5f0(_5e8,type,_5e9);
}
throw new Error("Target must be an event emitter");
};
on.selector=function(_5f1,_5f2,_5f3){
return function(_5f4,_5f5){
var _5f6=this;
var _5f7=_5f2.bubble;
if(_5f7){
_5f2=_5f7;
}else{
if(_5f3!==false){
_5f3=true;
}
}
return on(_5f4,_5f2,function(_5f8){
var _5f9=_5f8.target;
_5f6=_5f6&&_5f6.matches?_5f6:dojo.query;
while(!_5f6.matches(_5f9,_5f1,_5f4)){
if(_5f9==_5f4||!_5f3||!(_5f9=_5f9.parentNode)){
return;
}
}
return _5f5.call(_5f9,_5f8);
});
};
};
function _5fa(){
this.cancelable=false;
};
function _5fb(){
this.bubbles=false;
};
var _5fc=[].slice,_5fd=on.emit=function(_5fe,type,_5ff){
var args=_5fc.call(arguments,2);
var _600="on"+type;
if("parentNode" in _5fe){
var _601=args[0]={};
for(var i in _5ff){
_601[i]=_5ff[i];
}
_601.preventDefault=_5fa;
_601.stopPropagation=_5fb;
_601.target=_5fe;
_601.type=type;
_5ff=_601;
}
do{
_5fe[_600]&&_5fe[_600].apply(_5fe,args);
}while(_5ff&&_5ff.bubbles&&(_5fe=_5fe.parentNode));
return _5ff&&_5ff.cancelable&&_5ff;
};
var _5ef={};
if(has("dom-addeventlistener")){
_5ef={focusin:"focus",focusout:"blur"};
if(has("opera")){
_5ef.keydown="keypress";
}
on.emit=function(_602,type,_603){
if(_602.dispatchEvent&&document.createEvent){
var _604=document.createEvent("HTMLEvents");
_604.initEvent(type,!!_603.bubbles,!!_603.cancelable);
for(var i in _603){
var _605=_603[i];
if(!(i in _604)){
_604[i]=_603[i];
}
}
return _602.dispatchEvent(_604)&&_604;
}
return _5fd.apply(on,arguments);
};
}else{
on._fixEvent=function(evt,_606){
if(!evt){
var w=_606&&(_606.ownerDocument||_606.document||_606).parentWindow||window;
evt=w.event;
}
if(!evt){
return (evt);
}
if(!evt.target){
evt.target=evt.srcElement;
evt.currentTarget=(_606||evt.srcElement);
if(evt.type=="mouseover"){
evt.relatedTarget=evt.fromElement;
}
if(evt.type=="mouseout"){
evt.relatedTarget=evt.toElement;
}
if(!evt.stopPropagation){
evt.stopPropagation=_607;
evt.preventDefault=_608;
}
switch(evt.type){
case "keypress":
var c=("charCode" in evt?evt.charCode:evt.keyCode);
if(c==10){
c=0;
evt.keyCode=13;
}else{
if(c==13||c==27){
c=0;
}else{
if(c==3){
c=99;
}
}
}
evt.charCode=c;
_609(evt);
break;
}
}
return evt;
};
var _60a=function(_60b){
this.handle=_60b;
};
_60a.prototype.remove=function(){
delete _dojoIEListeners_[this.handle];
};
var _60c=function(_60d){
return function(evt){
evt=on._fixEvent(evt,this);
return _60d.call(this,evt);
};
};
var _5f0=function(_60e,type,_60f){
_60f=_60c(_60f);
if(((_60e.ownerDocument?_60e.ownerDocument.parentWindow:_60e.parentWindow||_60e.window||window)!=top||has("jscript")<5.8)&&!has("config-_allow_leaks")){
if(typeof _dojoIEListeners_=="undefined"){
_dojoIEListeners_=[];
}
var _610=_60e[type];
if(!_610||!_610.listeners){
var _611=_610;
_60e[type]=_610=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
_610.listeners=[];
_610.global=this;
if(_611){
_610.listeners.push(_dojoIEListeners_.push(_611)-1);
}
}
var _612;
_610.listeners.push(_612=(_610.global._dojoIEListeners_.push(_60f)-1));
return new _60a(_612);
}
return _5cf.after(_60e,type,_60f,true);
};
var _609=function(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _607=function(){
this.cancelBubble=true;
};
var _608=on._preventDefault=function(){
this.bubbledKeyCode=this.keyCode;
if(this.ctrlKey){
try{
this.keyCode=0;
}
catch(e){
}
}
this.returnValue=false;
};
}
if(has("touch")){
var _613=function(){
};
var _614=window.orientation;
var _5ed=function(_615){
return function(_616){
var _617=_616.corrected;
if(!_617){
var type=_616.type;
try{
delete _616.type;
}
catch(e){
}
if(_616.type){
_613.prototype=_616;
var _617=new _613;
_617.preventDefault=function(){
_616.preventDefault();
};
_617.stopPropagation=function(){
_616.stopPropagation();
};
}else{
_617=_616;
_617.type=type;
}
_616.corrected=_617;
if(type=="resize"){
if(_614==window.orientation){
return null;
}
_614=window.orientation;
_617.type="orientationchange";
return _615.call(this,_617);
}
if(!("rotation" in _617)){
_617.rotation=0;
_617.scale=1;
}
var _618=_617.changedTouches[0];
for(var i in _618){
delete _617[i];
_617[i]=_618[i];
}
}
return _615.call(this,_617);
};
};
}
return on;
});
},"dijit/_Widget":function(){
define("dijit/_Widget",["dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/query","dojo/ready","./registry","./_WidgetBase","./_OnDijitClickMixin","./_FocusMixin","dojo/uacss","./hccss"],function(_619,_61a,_61b,_61c,_61d,lang,_61e,_61f,_620,_621,_622,_623){
function _624(){
};
function _625(_626){
return function(obj,_627,_628,_629){
if(obj&&typeof _627=="string"&&obj[_627]==_624){
return obj.on(_627.substring(2).toLowerCase(),lang.hitch(_628,_629));
}
return _626.apply(_61b,arguments);
};
};
_619.around(_61b,"connect",_625);
if(_61d.connect){
_619.around(_61d,"connect",_625);
}
var _62a=_61c("dijit._Widget",[_621,_622,_623],{onClick:_624,onDblClick:_624,onKeyDown:_624,onKeyPress:_624,onKeyUp:_624,onMouseDown:_624,onMouseMove:_624,onMouseOut:_624,onMouseOver:_624,onMouseLeave:_624,onMouseEnter:_624,onMouseUp:_624,constructor:function(_62b){
this._toConnect={};
for(var name in _62b){
if(this[name]===_624){
this._toConnect[name.replace(/^on/,"").toLowerCase()]=_62b[name];
delete _62b[name];
}
}
},postCreate:function(){
this.inherited(arguments);
for(var name in this._toConnect){
this.on(name,this._toConnect[name]);
}
delete this._toConnect;
},on:function(type,func){
if(this[this._onMap(type)]===_624){
return _61b.connect(this.domNode,type.toLowerCase(),this,func);
}
return this.inherited(arguments);
},_setFocusedAttr:function(val){
this._focused=val;
this._set("focused",val);
},setAttribute:function(attr,_62c){
_61d.deprecated(this.declaredClass+"::setAttribute(attr, value) is deprecated. Use set() instead.","","2.0");
this.set(attr,_62c);
},attr:function(name,_62d){
if(_61a.isDebug){
var _62e=arguments.callee._ach||(arguments.callee._ach={}),_62f=(arguments.callee.caller||"unknown caller").toString();
if(!_62e[_62f]){
_61d.deprecated(this.declaredClass+"::attr() is deprecated. Use get() or set() instead, called from "+_62f,"","2.0");
_62e[_62f]=true;
}
}
var args=arguments.length;
if(args>=2||typeof name==="object"){
return this.set.apply(this,arguments);
}else{
return this.get(name);
}
},getDescendants:function(){
_61d.deprecated(this.declaredClass+"::getDescendants() is deprecated. Use getChildren() instead.","","2.0");
return this.containerNode?_61e("[widgetId]",this.containerNode).map(_620.byNode):[];
},_onShow:function(){
this.onShow();
},onShow:function(){
},onHide:function(){
},onClose:function(){
return true;
}});
if(!_61d.isAsync){
_61f(0,function(){
var _630=["dijit/_base"];
require(_630);
});
}
return _62a;
});
},"dojo/cache":function(){
define(["./_base/kernel","./text"],function(dojo,text){
return dojo.cache;
});
},"dijit/_FocusMixin":function(){
define("dijit/_FocusMixin",["./focus","./_WidgetBase","dojo/_base/declare","dojo/_base/lang"],function(_631,_632,_633,lang){
lang.extend(_632,{focused:false,onFocus:function(){
},onBlur:function(){
},_onFocus:function(){
this.onFocus();
},_onBlur:function(){
this.onBlur();
}});
return _633("dijit._FocusMixin",null,{_focusManager:_631});
});
},"dijit/_OnDijitClickMixin":function(){
define("dijit/_OnDijitClickMixin",["dojo/on","dojo/_base/array","dojo/keys","dojo/_base/declare","dojo/_base/sniff","dojo/_base/unload","dojo/_base/window"],function(on,_634,keys,_635,has,_636,win){
var _637=null;
if(has("ie")){
(function(){
var _638=function(evt){
_637=evt.srcElement;
};
win.doc.attachEvent("onkeydown",_638);
_636.addOnWindowUnload(function(){
win.doc.detachEvent("onkeydown",_638);
});
})();
}else{
win.doc.addEventListener("keydown",function(evt){
_637=evt.target;
},true);
}
var _639=function(node,_63a){
if(/input|button/i.test(node.nodeName)){
return on(node,"click",_63a);
}else{
function _63b(e){
return (e.keyCode==keys.ENTER||e.keyCode==keys.SPACE)&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey;
};
var _63c=[on(node,"keypress",function(e){
if(_63b(e)){
_637=e.target;
e.preventDefault();
}
}),on(node,"keyup",function(e){
if(_63b(e)&&e.target==_637){
_637=null;
_63a.call(this,e);
}
}),on(node,"click",function(e){
_63a.call(this,e);
})];
return {remove:function(){
_634.forEach(_63c,function(h){
h.remove();
});
}};
}
};
return _635("dijit._OnDijitClickMixin",null,{connect:function(obj,_63d,_63e){
return this.inherited(arguments,[obj,_63d=="ondijitclick"?_639:_63d,_63e]);
}});
});
},"dojo/query":function(){
define(["./_base/kernel","./has","./dom","./on","./_base/array","./_base/lang","./selector/_loader","./selector/_loader!default"],function(dojo,has,dom,on,_63f,lang,_640,_641){
"use strict";
has.add("array-extensible",function(){
return lang.delegate([],{length:1}).length==1&&!has("bug-for-in-skips-shadowed");
});
var ap=Array.prototype,aps=ap.slice,apc=ap.concat,_642=_63f.forEach;
var tnl=function(a,_643,_644){
var _645=new (_644||this._NodeListCtor||nl)(a);
return _643?_645._stash(_643):_645;
};
var _646=function(f,a,o){
a=[0].concat(aps.call(a,0));
o=o||dojo.global;
return function(node){
a[0]=node;
return f.apply(o,a);
};
};
var _647=function(f,o){
return function(){
this.forEach(_646(f,arguments,o));
return this;
};
};
var _648=function(f,o){
return function(){
return this.map(_646(f,arguments,o));
};
};
var _649=function(f,o){
return function(){
return this.filter(_646(f,arguments,o));
};
};
var _64a=function(f,g,o){
return function(){
var a=arguments,body=_646(f,a,o);
if(g.call(o||dojo.global,a)){
return this.map(body);
}
this.forEach(body);
return this;
};
};
var _64b=function(_64c){
var _64d=this instanceof nl&&has("array-extensible");
if(typeof _64c=="number"){
_64c=Array(_64c);
}
var _64e=(_64c&&"length" in _64c)?_64c:arguments;
if(_64d||!_64e.sort){
var _64f=_64d?this:[],l=_64f.length=_64e.length;
for(var i=0;i<l;i++){
_64f[i]=_64e[i];
}
if(_64d){
return _64f;
}
_64e=_64f;
}
lang._mixin(_64e,nlp);
_64e._NodeListCtor=function(_650){
return nl(_650);
};
return _64e;
};
var nl=_64b,nlp=nl.prototype=has("array-extensible")?[]:{};
nl._wrap=nlp._wrap=tnl;
nl._adaptAsMap=_648;
nl._adaptAsForEach=_647;
nl._adaptAsFilter=_649;
nl._adaptWithCondition=_64a;
_642(["slice","splice"],function(name){
var f=ap[name];
nlp[name]=function(){
return this._wrap(f.apply(this,arguments),name=="slice"?this:null);
};
});
_642(["indexOf","lastIndexOf","every","some"],function(name){
var f=_63f[name];
nlp[name]=function(){
return f.apply(dojo,[this].concat(aps.call(arguments,0)));
};
});
lang.extend(_64b,{constructor:nl,_NodeListCtor:nl,toString:function(){
return this.join(",");
},_stash:function(_651){
this._parent=_651;
return this;
},on:function(_652,_653){
var _654=this.map(function(node){
return on(node,_652,_653);
});
_654.remove=function(){
for(var i=0;i<_654.length;i++){
_654[i].remove();
}
};
return _654;
},end:function(){
if(this._parent){
return this._parent;
}else{
return new this._NodeListCtor(0);
}
},concat:function(item){
var t=lang.isArray(this)?this:aps.call(this,0),m=_63f.map(arguments,function(a){
return a&&!lang.isArray(a)&&(typeof _64b!="undefined"&&a.constructor===_64b||a.constructor===this._NodeListCtor)?aps.call(a,0):a;
});
return this._wrap(apc.apply(t,m),this);
},map:function(func,obj){
return this._wrap(_63f.map(this,func,obj),this);
},forEach:function(_655,_656){
_642(this,_655,_656);
return this;
},filter:function(_657){
var a=arguments,_658=this,_659=0;
if(typeof _657=="string"){
_658=_65a._filterResult(this,a[0]);
if(a.length==1){
return _658._stash(this);
}
_659=1;
}
return this._wrap(_63f.filter(_658,a[_659],a[_659+1]),this);
},instantiate:function(_65b,_65c){
var c=lang.isFunction(_65b)?_65b:lang.getObject(_65b);
_65c=_65c||{};
return this.forEach(function(node){
new c(_65c,node);
});
},at:function(){
var t=new this._NodeListCtor(0);
_642(arguments,function(i){
if(i<0){
i=this.length+i;
}
if(this[i]){
t.push(this[i]);
}
},this);
return t._stash(this);
}});
function _65d(_65e,_65f){
var _660=function(_661,root){
if(typeof root=="string"){
root=dom.byId(root);
if(!root){
return new _65f([]);
}
}
var _662=typeof _661=="string"?_65e(_661,root):_661.orphan?_661:[_661];
if(_662.orphan){
return _662;
}
return new _65f(_662);
};
_660.matches=_65e.match||function(node,_663,root){
return _660.filter([node],_663,root).length>0;
};
_660.filter=_65e.filter||function(_664,_665,root){
return _660(_665,root).filter(function(node){
return _63f.indexOf(_664,node)>-1;
});
};
if(typeof _65e!="function"){
var _666=_65e.search;
_65e=function(_667,root){
return _666(root||document,_667);
};
}
return _660;
};
var _65a=_65d(_641,_64b);
dojo.query=_65d(_641,function(_668){
return _64b(_668);
});
_65a.load=function(id,_669,_66a,_66b){
_640.load(id,_669,function(_66c){
_66a(_65d(_66c,_64b));
});
};
dojo._filterQueryResult=_65a._filterResult=function(_66d,_66e,root){
return new _64b(_65a.filter(_66d,_66e,root));
};
dojo.NodeList=_65a.NodeList=_64b;
return _65a;
});
},"dijit/form/_ToggleButtonMixin":function(){
define("dijit/form/_ToggleButtonMixin",["dojo/_base/declare","dojo/dom-attr"],function(_66f,_670){
return _66f("dijit.form._ToggleButtonMixin",null,{checked:false,_aria_attr:"aria-pressed",_onClick:function(evt){
var _671=this.checked;
this._set("checked",!_671);
var ret=this.inherited(arguments);
this.set("checked",ret?this.checked:_671);
return ret;
},_setCheckedAttr:function(_672,_673){
this._set("checked",_672);
_670.set(this.focusNode||this.domNode,"checked",_672);
(this.focusNode||this.domNode).setAttribute(this._aria_attr,_672?"true":"false");
this._handleOnChange(_672,_673);
},reset:function(){
this._hasBeenBlurred=false;
this.set("checked",this.params.checked||false);
}});
});
},"dojo/dom-class":function(){
define(["./_base/lang","./_base/array","./dom","./has"],function(lang,_674,dom,has){
var _675="className";
var _676="classList";
has.add("dom-classList",function(){
return _676 in document.createElement("p");
});
var cls,_677=/\s+/,a1=[""];
function _678(s){
if(typeof s=="string"||s instanceof String){
if(s&&!_677.test(s)){
a1[0]=s;
return a1;
}
var a=s.split(_677);
if(a.length&&!a[0]){
a.shift();
}
if(a.length&&!a[a.length-1]){
a.pop();
}
return a;
}
if(!s){
return [];
}
return _674.filter(s,function(x){
return x;
});
};
if(has("dom-classList")){
cls={contains:function containsClass(node,_679){
var _67a=_679&&dom.byId(node)[_676];
return _67a&&_67a.contains(_679);
},add:function addClass(node,_67b){
node=dom.byId(node);
_67b=_678(_67b);
for(var i=0,len=_67b.length;i<len;++i){
node[_676].add(_67b[i]);
}
},remove:function removeClass(node,_67c){
node=dom.byId(node);
if(_67c===undefined){
node[_675]="";
}else{
_67c=_678(_67c);
for(var i=0,len=_67c.length;i<len;++i){
node[_676].remove(_67c[i]);
}
}
},replace:function replaceClass(node,_67d,_67e){
node=dom.byId(node);
if(_67e===undefined){
node[_675]="";
}else{
_67e=_678(_67e);
for(var i=0,len=_67e.length;i<len;++i){
node[_676].remove(_67e[i]);
}
}
_67d=_678(_67d);
for(i=0,len=_67d.length;i<len;++i){
node[_676].add(_67d[i]);
}
},toggle:function toggleClass(node,_67f,_680){
node=dom.byId(node);
if(_680===undefined){
_67f=_678(_67f);
for(var i=0,len=_67f.length;i<len;++i){
node[_676].toggle(_67f[i]);
}
}else{
cls[_680?"add":"remove"](node,_67f);
}
return _680;
}};
}else{
var _681={};
cls={contains:function containsClass(node,_682){
return ((" "+dom.byId(node)[_675]+" ").indexOf(" "+_682+" ")>=0);
},add:function addClass(node,_683){
node=dom.byId(node);
_683=_678(_683);
var cls=node[_675],_684;
cls=cls?" "+cls+" ":" ";
_684=cls.length;
for(var i=0,len=_683.length,c;i<len;++i){
c=_683[i];
if(c&&cls.indexOf(" "+c+" ")<0){
cls+=c+" ";
}
}
if(_684<cls.length){
node[_675]=cls.substr(1,cls.length-2);
}
},remove:function removeClass(node,_685){
node=dom.byId(node);
var _686,cls;
if(_685!==undefined){
_685=_678(_685);
_686=node[_675];
cls=" "+_686+" ";
for(var i=0,len=_685.length;i<len;++i){
cls=cls.replace(" "+_685[i]+" "," ");
}
cls=lang.trim(cls);
}else{
cls="";
}
if(_686!=cls){
node[_675]=cls;
}
},replace:function replaceClass(node,_687,_688){
node=dom.byId(node);
_681[_675]=node[_675];
cls.remove(_681,_688);
cls.add(_681,_687);
if(node[_675]!==_681[_675]){
node[_675]=_681[_675];
}
},toggle:function toggleClass(node,_689,_68a){
node=dom.byId(node);
if(_68a===undefined){
_689=_678(_689);
for(var i=0,len=_689.length,c;i<len;++i){
c=_689[i];
cls[cls.contains(node,c)?"remove":"add"](node,c);
}
}else{
cls[_68a?"add":"remove"](node,_689);
}
return _68a;
}};
}
return cls;
});
},"dijit/focus":function(){
define("dijit/focus",["dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/Evented","dojo/_base/lang","dojo/on","dojo/ready","dojo/_base/sniff","dojo/Stateful","dojo/_base/unload","dojo/_base/window","dojo/window","./a11y","./registry","."],function(_68b,_68c,dom,_68d,_68e,_68f,lang,on,_690,has,_691,_692,win,_693,a11y,_694,_695){
var _696=_68c([_691,_68f],{curNode:null,activeStack:[],constructor:function(){
var _697=lang.hitch(this,function(node){
if(dom.isDescendant(this.curNode,node)){
this.set("curNode",null);
}
if(dom.isDescendant(this.prevNode,node)){
this.set("prevNode",null);
}
});
_68b.before(_68e,"empty",_697);
_68b.before(_68e,"destroy",_697);
},registerIframe:function(_698){
return this.registerWin(_698.contentWindow,_698);
},registerWin:function(_699,_69a){
var _69b=this;
var _69c=function(evt){
_69b._justMouseDowned=true;
setTimeout(function(){
_69b._justMouseDowned=false;
},0);
if(has("ie")&&evt&&evt.srcElement&&evt.srcElement.parentNode==null){
return;
}
_69b._onTouchNode(_69a||evt.target||evt.srcElement,"mouse");
};
var doc=has("ie")?_699.document.documentElement:_699.document;
if(doc){
if(has("ie")){
_699.document.body.attachEvent("onmousedown",_69c);
var _69d=function(evt){
var tag=evt.srcElement.tagName.toLowerCase();
if(tag=="#document"||tag=="body"){
return;
}
if(a11y.isTabNavigable(evt.srcElement)){
_69b._onFocusNode(_69a||evt.srcElement);
}else{
_69b._onTouchNode(_69a||evt.srcElement);
}
};
doc.attachEvent("onactivate",_69d);
var _69e=function(evt){
_69b._onBlurNode(_69a||evt.srcElement);
};
doc.attachEvent("ondeactivate",_69e);
return {remove:function(){
_699.document.detachEvent("onmousedown",_69c);
doc.detachEvent("onactivate",_69d);
doc.detachEvent("ondeactivate",_69e);
doc=null;
}};
}else{
doc.body.addEventListener("mousedown",_69c,true);
doc.body.addEventListener("touchstart",_69c,true);
var _69f=function(evt){
_69b._onFocusNode(_69a||evt.target);
};
doc.addEventListener("focus",_69f,true);
var _6a0=function(evt){
_69b._onBlurNode(_69a||evt.target);
};
doc.addEventListener("blur",_6a0,true);
return {remove:function(){
doc.body.removeEventListener("mousedown",_69c,true);
doc.body.removeEventListener("touchstart",_69c,true);
doc.removeEventListener("focus",_69f,true);
doc.removeEventListener("blur",_6a0,true);
doc=null;
}};
}
}
},_onBlurNode:function(){
this.set("prevNode",this.curNode);
this.set("curNode",null);
if(this._justMouseDowned){
return;
}
if(this._clearActiveWidgetsTimer){
clearTimeout(this._clearActiveWidgetsTimer);
}
this._clearActiveWidgetsTimer=setTimeout(lang.hitch(this,function(){
delete this._clearActiveWidgetsTimer;
this._setStack([]);
this.prevNode=null;
}),100);
},_onTouchNode:function(node,by){
if(this._clearActiveWidgetsTimer){
clearTimeout(this._clearActiveWidgetsTimer);
delete this._clearActiveWidgetsTimer;
}
var _6a1=[];
try{
while(node){
var _6a2=_68d.get(node,"dijitPopupParent");
if(_6a2){
node=_694.byId(_6a2).domNode;
}else{
if(node.tagName&&node.tagName.toLowerCase()=="body"){
if(node===win.body()){
break;
}
node=_693.get(node.ownerDocument).frameElement;
}else{
var id=node.getAttribute&&node.getAttribute("widgetId"),_6a3=id&&_694.byId(id);
if(_6a3&&!(by=="mouse"&&_6a3.get("disabled"))){
_6a1.unshift(id);
}
node=node.parentNode;
}
}
}
}
catch(e){
}
this._setStack(_6a1,by);
},_onFocusNode:function(node){
if(!node){
return;
}
if(node.nodeType==9){
return;
}
this._onTouchNode(node);
if(node==this.curNode){
return;
}
this.set("curNode",node);
},_setStack:function(_6a4,by){
var _6a5=this.activeStack;
this.set("activeStack",_6a4);
for(var _6a6=0;_6a6<Math.min(_6a5.length,_6a4.length);_6a6++){
if(_6a5[_6a6]!=_6a4[_6a6]){
break;
}
}
var _6a7;
for(var i=_6a5.length-1;i>=_6a6;i--){
_6a7=_694.byId(_6a5[i]);
if(_6a7){
_6a7._hasBeenBlurred=true;
_6a7.set("focused",false);
if(_6a7._focusManager==this){
_6a7._onBlur(by);
}
this.emit("widget-blur",_6a7,by);
}
}
for(i=_6a6;i<_6a4.length;i++){
_6a7=_694.byId(_6a4[i]);
if(_6a7){
_6a7.set("focused",true);
if(_6a7._focusManager==this){
_6a7._onFocus(by);
}
this.emit("widget-focus",_6a7,by);
}
}
},focus:function(node){
if(node){
try{
node.focus();
}
catch(e){
}
}
}});
var _6a8=new _696();
_690(function(){
var _6a9=_6a8.registerWin(win.doc.parentWindow||win.doc.defaultView);
if(has("ie")){
_692.addOnWindowUnload(function(){
_6a9.remove();
_6a9=null;
});
}
});
_695.focus=function(node){
_6a8.focus(node);
};
for(var attr in _6a8){
if(!/^_/.test(attr)){
_695.focus[attr]=typeof _6a8[attr]=="function"?lang.hitch(_6a8,attr):_6a8[attr];
}
}
_6a8.watch(function(attr,_6aa,_6ab){
_695.focus[attr]=_6ab;
});
return _6a8;
});
},"dojo/dom-attr":function(){
define(["exports","./_base/sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(_6ac,has,lang,dom,_6ad,prop){
var _6ae={innerHTML:1,className:1,htmlFor:has("ie"),value:1},_6af={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};
function _6b0(node,name){
var attr=node.getAttributeNode&&node.getAttributeNode(name);
return attr&&attr.specified;
};
_6ac.has=function hasAttr(node,name){
var lc=name.toLowerCase();
return _6ae[prop.names[lc]||name]||_6b0(dom.byId(node),_6af[lc]||name);
};
_6ac.get=function getAttr(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_6b1=prop.names[lc]||name,_6b2=_6ae[_6b1];
value=node[_6b1];
if(_6b2&&typeof value!="undefined"){
return value;
}
if(_6b1!="href"&&(typeof value=="boolean"||lang.isFunction(value))){
return value;
}
var _6b3=_6af[lc]||name;
return _6b0(node,_6b3)?node.getAttribute(_6b3):null;
};
_6ac.set=function setAttr(node,name,_6b4){
node=dom.byId(node);
if(arguments.length==2){
for(var x in name){
_6ac.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_6b5=prop.names[lc]||name,_6b6=_6ae[_6b5];
if(_6b5=="style"&&typeof _6b4!="string"){
_6ad.set(node,_6b4);
return node;
}
if(_6b6||typeof _6b4=="boolean"||lang.isFunction(_6b4)){
return prop.set(node,name,_6b4);
}
node.setAttribute(_6af[lc]||name,_6b4);
return node;
};
_6ac.remove=function removeAttr(node,name){
dom.byId(node).removeAttribute(_6af[name.toLowerCase()]||name);
};
_6ac.getNodeProp=function getNodeProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_6b7=prop.names[lc]||name;
if((_6b7 in node)&&_6b7!="href"){
return node[_6b7];
}
var _6b8=_6af[lc]||name;
return _6b0(node,_6b8)?node.getAttribute(_6b8):null;
};
});
},"dojo/selector/acme":function(){
define(["../_base/kernel","../has","../dom","../_base/sniff","../_base/array","../_base/lang","../_base/window"],function(dojo,has,dom){
var trim=dojo.trim;
var each=dojo.forEach;
var _6b9=function(){
return dojo.doc;
};
var _6ba=((dojo.isWebKit||dojo.isMozilla)&&((_6b9().compatMode)=="BackCompat"));
var _6bb=">~+";
var _6bc=false;
var _6bd=function(){
return true;
};
var _6be=function(_6bf){
if(_6bb.indexOf(_6bf.slice(-1))>=0){
_6bf+=" * ";
}else{
_6bf+=" ";
}
var ts=function(s,e){
return trim(_6bf.slice(s,e));
};
var _6c0=[];
var _6c1=-1,_6c2=-1,_6c3=-1,_6c4=-1,_6c5=-1,inId=-1,_6c6=-1,lc="",cc="",_6c7;
var x=0,ql=_6bf.length,_6c8=null,_6c9=null;
var _6ca=function(){
if(_6c6>=0){
var tv=(_6c6==x)?null:ts(_6c6,x);
_6c8[(_6bb.indexOf(tv)<0)?"tag":"oper"]=tv;
_6c6=-1;
}
};
var _6cb=function(){
if(inId>=0){
_6c8.id=ts(inId,x).replace(/\\/g,"");
inId=-1;
}
};
var _6cc=function(){
if(_6c5>=0){
_6c8.classes.push(ts(_6c5+1,x).replace(/\\/g,""));
_6c5=-1;
}
};
var _6cd=function(){
_6cb();
_6ca();
_6cc();
};
var _6ce=function(){
_6cd();
if(_6c4>=0){
_6c8.pseudos.push({name:ts(_6c4+1,x)});
}
_6c8.loops=(_6c8.pseudos.length||_6c8.attrs.length||_6c8.classes.length);
_6c8.oquery=_6c8.query=ts(_6c7,x);
_6c8.otag=_6c8.tag=(_6c8["oper"])?null:(_6c8.tag||"*");
if(_6c8.tag){
_6c8.tag=_6c8.tag.toUpperCase();
}
if(_6c0.length&&(_6c0[_6c0.length-1].oper)){
_6c8.infixOper=_6c0.pop();
_6c8.query=_6c8.infixOper.query+" "+_6c8.query;
}
_6c0.push(_6c8);
_6c8=null;
};
for(;lc=cc,cc=_6bf.charAt(x),x<ql;x++){
if(lc=="\\"){
continue;
}
if(!_6c8){
_6c7=x;
_6c8={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){
return (_6bc)?this.otag:this.tag;
}};
_6c6=x;
}
if(_6c1>=0){
if(cc=="]"){
if(!_6c9.attr){
_6c9.attr=ts(_6c1+1,x);
}else{
_6c9.matchFor=ts((_6c3||_6c1+1),x);
}
var cmf=_6c9.matchFor;
if(cmf){
if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){
_6c9.matchFor=cmf.slice(1,-1);
}
}
_6c8.attrs.push(_6c9);
_6c9=null;
_6c1=_6c3=-1;
}else{
if(cc=="="){
var _6cf=("|~^$*".indexOf(lc)>=0)?lc:"";
_6c9.type=_6cf+cc;
_6c9.attr=ts(_6c1+1,x-_6cf.length);
_6c3=x+1;
}
}
}else{
if(_6c2>=0){
if(cc==")"){
if(_6c4>=0){
_6c9.value=ts(_6c2+1,x);
}
_6c4=_6c2=-1;
}
}else{
if(cc=="#"){
_6cd();
inId=x+1;
}else{
if(cc=="."){
_6cd();
_6c5=x;
}else{
if(cc==":"){
_6cd();
_6c4=x;
}else{
if(cc=="["){
_6cd();
_6c1=x;
_6c9={};
}else{
if(cc=="("){
if(_6c4>=0){
_6c9={name:ts(_6c4+1,x),value:null};
_6c8.pseudos.push(_6c9);
}
_6c2=x;
}else{
if((cc==" ")&&(lc!=cc)){
_6ce();
}
}
}
}
}
}
}
}
}
return _6c0;
};
var _6d0=function(_6d1,_6d2){
if(!_6d1){
return _6d2;
}
if(!_6d2){
return _6d1;
}
return function(){
return _6d1.apply(window,arguments)&&_6d2.apply(window,arguments);
};
};
var _6d3=function(i,arr){
var r=arr||[];
if(i){
r.push(i);
}
return r;
};
var _6d4=function(n){
return (1==n.nodeType);
};
var _6d5="";
var _6d6=function(elem,attr){
if(!elem){
return _6d5;
}
if(attr=="class"){
return elem.className||_6d5;
}
if(attr=="for"){
return elem.htmlFor||_6d5;
}
if(attr=="style"){
return elem.style.cssText||_6d5;
}
return (_6bc?elem.getAttribute(attr):elem.getAttribute(attr,2))||_6d5;
};
var _6d7={"*=":function(attr,_6d8){
return function(elem){
return (_6d6(elem,attr).indexOf(_6d8)>=0);
};
},"^=":function(attr,_6d9){
return function(elem){
return (_6d6(elem,attr).indexOf(_6d9)==0);
};
},"$=":function(attr,_6da){
return function(elem){
var ea=" "+_6d6(elem,attr);
return (ea.lastIndexOf(_6da)==(ea.length-_6da.length));
};
},"~=":function(attr,_6db){
var tval=" "+_6db+" ";
return function(elem){
var ea=" "+_6d6(elem,attr)+" ";
return (ea.indexOf(tval)>=0);
};
},"|=":function(attr,_6dc){
var _6dd=_6dc+"-";
return function(elem){
var ea=_6d6(elem,attr);
return ((ea==_6dc)||(ea.indexOf(_6dd)==0));
};
},"=":function(attr,_6de){
return function(elem){
return (_6d6(elem,attr)==_6de);
};
}};
var _6df=(typeof _6b9().firstChild.nextElementSibling=="undefined");
var _6e0=!_6df?"nextElementSibling":"nextSibling";
var _6e1=!_6df?"previousElementSibling":"previousSibling";
var _6e2=(_6df?_6d4:_6bd);
var _6e3=function(node){
while(node=node[_6e1]){
if(_6e2(node)){
return false;
}
}
return true;
};
var _6e4=function(node){
while(node=node[_6e0]){
if(_6e2(node)){
return false;
}
}
return true;
};
var _6e5=function(node){
var root=node.parentNode;
var i=0,tret=root.children||root.childNodes,ci=(node["_i"]||-1),cl=(root["_l"]||-1);
if(!tret){
return -1;
}
var l=tret.length;
if(cl==l&&ci>=0&&cl>=0){
return ci;
}
root["_l"]=l;
ci=-1;
for(var te=root["firstElementChild"]||root["firstChild"];te;te=te[_6e0]){
if(_6e2(te)){
te["_i"]=++i;
if(node===te){
ci=i;
}
}
}
return ci;
};
var _6e6=function(elem){
return !((_6e5(elem))%2);
};
var _6e7=function(elem){
return ((_6e5(elem))%2);
};
var _6e8={"checked":function(name,_6e9){
return function(elem){
return !!("checked" in elem?elem.checked:elem.selected);
};
},"first-child":function(){
return _6e3;
},"last-child":function(){
return _6e4;
},"only-child":function(name,_6ea){
return function(node){
return _6e3(node)&&_6e4(node);
};
},"empty":function(name,_6eb){
return function(elem){
var cn=elem.childNodes;
var cnl=elem.childNodes.length;
for(var x=cnl-1;x>=0;x--){
var nt=cn[x].nodeType;
if((nt===1)||(nt==3)){
return false;
}
}
return true;
};
},"contains":function(name,_6ec){
var cz=_6ec.charAt(0);
if(cz=="\""||cz=="'"){
_6ec=_6ec.slice(1,-1);
}
return function(elem){
return (elem.innerHTML.indexOf(_6ec)>=0);
};
},"not":function(name,_6ed){
var p=_6be(_6ed)[0];
var _6ee={el:1};
if(p.tag!="*"){
_6ee.tag=1;
}
if(!p.classes.length){
_6ee.classes=1;
}
var ntf=_6ef(p,_6ee);
return function(elem){
return (!ntf(elem));
};
},"nth-child":function(name,_6f0){
var pi=parseInt;
if(_6f0=="odd"){
return _6e7;
}else{
if(_6f0=="even"){
return _6e6;
}
}
if(_6f0.indexOf("n")!=-1){
var _6f1=_6f0.split("n",2);
var pred=_6f1[0]?((_6f1[0]=="-")?-1:pi(_6f1[0])):1;
var idx=_6f1[1]?pi(_6f1[1]):0;
var lb=0,ub=-1;
if(pred>0){
if(idx<0){
idx=(idx%pred)&&(pred+(idx%pred));
}else{
if(idx>0){
if(idx>=pred){
lb=idx-idx%pred;
}
idx=idx%pred;
}
}
}else{
if(pred<0){
pred*=-1;
if(idx>0){
ub=idx;
idx=idx%pred;
}
}
}
if(pred>0){
return function(elem){
var i=_6e5(elem);
return (i>=lb)&&(ub<0||i<=ub)&&((i%pred)==idx);
};
}else{
_6f0=idx;
}
}
var _6f2=pi(_6f0);
return function(elem){
return (_6e5(elem)==_6f2);
};
}};
var _6f3=(dojo.isIE&&(dojo.isIE<9||dojo.isQuirks))?function(cond){
var clc=cond.toLowerCase();
if(clc=="class"){
cond="className";
}
return function(elem){
return (_6bc?elem.getAttribute(cond):elem[cond]||elem[clc]);
};
}:function(cond){
return function(elem){
return (elem&&elem.getAttribute&&elem.hasAttribute(cond));
};
};
var _6ef=function(_6f4,_6f5){
if(!_6f4){
return _6bd;
}
_6f5=_6f5||{};
var ff=null;
if(!("el" in _6f5)){
ff=_6d0(ff,_6d4);
}
if(!("tag" in _6f5)){
if(_6f4.tag!="*"){
ff=_6d0(ff,function(elem){
return (elem&&(elem.tagName==_6f4.getTag()));
});
}
}
if(!("classes" in _6f5)){
each(_6f4.classes,function(_6f6,idx,arr){
var re=new RegExp("(?:^|\\s)"+_6f6+"(?:\\s|$)");
ff=_6d0(ff,function(elem){
return re.test(elem.className);
});
ff.count=idx;
});
}
if(!("pseudos" in _6f5)){
each(_6f4.pseudos,function(_6f7){
var pn=_6f7.name;
if(_6e8[pn]){
ff=_6d0(ff,_6e8[pn](pn,_6f7.value));
}
});
}
if(!("attrs" in _6f5)){
each(_6f4.attrs,function(attr){
var _6f8;
var a=attr.attr;
if(attr.type&&_6d7[attr.type]){
_6f8=_6d7[attr.type](a,attr.matchFor);
}else{
if(a.length){
_6f8=_6f3(a);
}
}
if(_6f8){
ff=_6d0(ff,_6f8);
}
});
}
if(!("id" in _6f5)){
if(_6f4.id){
ff=_6d0(ff,function(elem){
return (!!elem&&(elem.id==_6f4.id));
});
}
}
if(!ff){
if(!("default" in _6f5)){
ff=_6bd;
}
}
return ff;
};
var _6f9=function(_6fa){
return function(node,ret,bag){
while(node=node[_6e0]){
if(_6df&&(!_6d4(node))){
continue;
}
if((!bag||_6fb(node,bag))&&_6fa(node)){
ret.push(node);
}
break;
}
return ret;
};
};
var _6fc=function(_6fd){
return function(root,ret,bag){
var te=root[_6e0];
while(te){
if(_6e2(te)){
if(bag&&!_6fb(te,bag)){
break;
}
if(_6fd(te)){
ret.push(te);
}
}
te=te[_6e0];
}
return ret;
};
};
var _6fe=function(_6ff){
_6ff=_6ff||_6bd;
return function(root,ret,bag){
var te,x=0,tret=root.children||root.childNodes;
while(te=tret[x++]){
if(_6e2(te)&&(!bag||_6fb(te,bag))&&(_6ff(te,x))){
ret.push(te);
}
}
return ret;
};
};
var _700=function(node,root){
var pn=node.parentNode;
while(pn){
if(pn==root){
break;
}
pn=pn.parentNode;
}
return !!pn;
};
var _701={};
var _702=function(_703){
var _704=_701[_703.query];
if(_704){
return _704;
}
var io=_703.infixOper;
var oper=(io?io.oper:"");
var _705=_6ef(_703,{el:1});
var qt=_703.tag;
var _706=("*"==qt);
var ecs=_6b9()["getElementsByClassName"];
if(!oper){
if(_703.id){
_705=(!_703.loops&&_706)?_6bd:_6ef(_703,{el:1,id:1});
_704=function(root,arr){
var te=dom.byId(_703.id,(root.ownerDocument||root));
if(!te||!_705(te)){
return;
}
if(9==root.nodeType){
return _6d3(te,arr);
}else{
if(_700(te,root)){
return _6d3(te,arr);
}
}
};
}else{
if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_703.classes.length&&!_6ba){
_705=_6ef(_703,{el:1,classes:1,id:1});
var _707=_703.classes.join(" ");
_704=function(root,arr,bag){
var ret=_6d3(0,arr),te,x=0;
var tret=root.getElementsByClassName(_707);
while((te=tret[x++])){
if(_705(te,root)&&_6fb(te,bag)){
ret.push(te);
}
}
return ret;
};
}else{
if(!_706&&!_703.loops){
_704=function(root,arr,bag){
var ret=_6d3(0,arr),te,x=0;
var tret=root.getElementsByTagName(_703.getTag());
while((te=tret[x++])){
if(_6fb(te,bag)){
ret.push(te);
}
}
return ret;
};
}else{
_705=_6ef(_703,{el:1,tag:1,id:1});
_704=function(root,arr,bag){
var ret=_6d3(0,arr),te,x=0;
var tret=root.getElementsByTagName(_703.getTag());
while((te=tret[x++])){
if(_705(te,root)&&_6fb(te,bag)){
ret.push(te);
}
}
return ret;
};
}
}
}
}else{
var _708={el:1};
if(_706){
_708.tag=1;
}
_705=_6ef(_703,_708);
if("+"==oper){
_704=_6f9(_705);
}else{
if("~"==oper){
_704=_6fc(_705);
}else{
if(">"==oper){
_704=_6fe(_705);
}
}
}
}
return _701[_703.query]=_704;
};
var _709=function(root,_70a){
var _70b=_6d3(root),qp,x,te,qpl=_70a.length,bag,ret;
for(var i=0;i<qpl;i++){
ret=[];
qp=_70a[i];
x=_70b.length-1;
if(x>0){
bag={};
ret.nozip=true;
}
var gef=_702(qp);
for(var j=0;(te=_70b[j]);j++){
gef(te,ret,bag);
}
if(!ret.length){
break;
}
_70b=ret;
}
return ret;
};
var _70c={},_70d={};
var _70e=function(_70f){
var _710=_6be(trim(_70f));
if(_710.length==1){
var tef=_702(_710[0]);
return function(root){
var r=tef(root,[]);
if(r){
r.nozip=true;
}
return r;
};
}
return function(root){
return _709(root,_710);
};
};
var nua=navigator.userAgent;
var wk="WebKit/";
var _711=(dojo.isWebKit&&(nua.indexOf(wk)>0)&&(parseFloat(nua.split(wk)[1])>528));
var _712=dojo.isIE?"commentStrip":"nozip";
var qsa="querySelectorAll";
var _713=(!!_6b9()[qsa]&&(!dojo.isSafari||(dojo.isSafari>3.1)||_711));
var _714=/n\+\d|([^ ])?([>~+])([^ =])?/g;
var _715=function(_716,pre,ch,post){
return ch?(pre?pre+" ":"")+ch+(post?" "+post:""):_716;
};
var _717=function(_718,_719){
_718=_718.replace(_714,_715);
if(_713){
var _71a=_70d[_718];
if(_71a&&!_719){
return _71a;
}
}
var _71b=_70c[_718];
if(_71b){
return _71b;
}
var qcz=_718.charAt(0);
var _71c=(-1==_718.indexOf(" "));
if((_718.indexOf("#")>=0)&&(_71c)){
_719=true;
}
var _71d=(_713&&(!_719)&&(_6bb.indexOf(qcz)==-1)&&(!dojo.isIE||(_718.indexOf(":")==-1))&&(!(_6ba&&(_718.indexOf(".")>=0)))&&(_718.indexOf(":contains")==-1)&&(_718.indexOf(":checked")==-1)&&(_718.indexOf("|=")==-1));
if(_71d){
var tq=(_6bb.indexOf(_718.charAt(_718.length-1))>=0)?(_718+" *"):_718;
return _70d[_718]=function(root){
try{
if(!((9==root.nodeType)||_71c)){
return _717(_718,true)(root);
}
var r=root[qsa](tq);
r[_712]=true;
return r;
}
catch(e){
return _717(_718,true)(root);
}
};
}else{
var _71e=_718.split(/\s*,\s*/);
return _70c[_718]=((_71e.length<2)?_70e(_718):function(root){
var _71f=0,ret=[],tp;
while((tp=_71e[_71f++])){
ret=ret.concat(_70e(tp)(root));
}
return ret;
});
}
};
var _720=0;
var _721=dojo.isIE?function(node){
if(_6bc){
return (node.getAttribute("_uid")||node.setAttribute("_uid",++_720)||_720);
}else{
return node.uniqueID;
}
}:function(node){
return (node._uid||(node._uid=++_720));
};
var _6fb=function(node,bag){
if(!bag){
return 1;
}
var id=_721(node);
if(!bag[id]){
return bag[id]=1;
}
return 0;
};
var _722="_zipIdx";
var _723=function(arr){
if(arr&&arr.nozip){
return arr;
}
var ret=[];
if(!arr||!arr.length){
return ret;
}
if(arr[0]){
ret.push(arr[0]);
}
if(arr.length<2){
return ret;
}
_720++;
if(dojo.isIE&&_6bc){
var _724=_720+"";
arr[0].setAttribute(_722,_724);
for(var x=1,te;te=arr[x];x++){
if(arr[x].getAttribute(_722)!=_724){
ret.push(te);
}
te.setAttribute(_722,_724);
}
}else{
if(dojo.isIE&&arr.commentStrip){
try{
for(var x=1,te;te=arr[x];x++){
if(_6d4(te)){
ret.push(te);
}
}
}
catch(e){
}
}else{
if(arr[0]){
arr[0][_722]=_720;
}
for(var x=1,te;te=arr[x];x++){
if(arr[x][_722]!=_720){
ret.push(te);
}
te[_722]=_720;
}
}
}
return ret;
};
var _725=function(_726,root){
root=root||_6b9();
var od=root.ownerDocument||root.documentElement;
_6bc=(root.contentType&&root.contentType=="application/xml")||(dojo.isOpera&&(root.doctype||od.toString()=="[object XMLDocument]"))||(!!od)&&(dojo.isIE?od.xml:(root.xmlVersion||od.xmlVersion));
var r=_717(_726)(root);
if(r&&r.nozip){
return r;
}
return _723(r);
};
_725.filter=function(_727,_728,root){
var _729=[],_72a=_6be(_728),_72b=(_72a.length==1&&!/[^\w#\.]/.test(_728))?_6ef(_72a[0]):function(node){
return dojo.query(_728,root).indexOf(node)!=-1;
};
for(var x=0,te;te=_727[x];x++){
if(_72b(te)){
_729.push(te);
}
}
return _729;
};
return _725;
});
},"url:dijit/form/templates/ComboButton.html":"<table class=\"dijit dijitReset dijitInline dijitLeft\"\n\tcellspacing='0' cellpadding='0' role=\"presentation\"\n\t><tbody role=\"presentation\"><tr role=\"presentation\"\n\t\t><td class=\"dijitReset dijitStretch dijitButtonNode\" data-dojo-attach-point=\"buttonNode\" data-dojo-attach-event=\"ondijitclick:_onClick,onkeypress:_onButtonKeyPress\"\n\t\t><div id=\"${id}_button\" class=\"dijitReset dijitButtonContents\"\n\t\t\tdata-dojo-attach-point=\"titleNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><div class=\"dijitReset dijitInline dijitIcon\" data-dojo-attach-point=\"iconNode\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitInline dijitButtonText\" id=\"${id}_label\" data-dojo-attach-point=\"containerNode\" role=\"presentation\"></div\n\t\t></div\n\t\t></td\n\t\t><td id=\"${id}_arrow\" class='dijitReset dijitRight dijitButtonNode dijitArrowButton'\n\t\t\tdata-dojo-attach-point=\"_popupStateNode,focusNode,_buttonNode\"\n\t\t\tdata-dojo-attach-event=\"onkeypress:_onArrowKeyPress\"\n\t\t\ttitle=\"${optionsTitle}\"\n\t\t\trole=\"button\" aria-haspopup=\"true\"\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" role=\"presentation\">&#9660;</div\n\t\t></td\n\t\t><td style=\"display:none !important;\"\n\t\t\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" data-dojo-attach-point=\"valueNode\"\n\t\t/></td></tr></tbody\n></table>\n","dijit/_base/sniff":function(){
define("dijit/_base/sniff",["dojo/uacss"],function(){
});
},"url:dijit/templates/MenuItem.html":"<tr class=\"dijitReset dijitMenuItem\" data-dojo-attach-point=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\n\t\tdata-dojo-attach-event=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon dijitMenuItemIcon\" data-dojo-attach-point=\"iconNode\"/>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" data-dojo-attach-point=\"containerNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" data-dojo-attach-point=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">\n\t\t<div data-dojo-attach-point=\"arrowWrapper\" style=\"visibility: hidden\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\"/>\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\n\t\t</div>\n\t</td>\n</tr>\n","dijit/main":function(){
define("dijit/main",["dojo/_base/kernel"],function(dojo){
return dojo.dijit;
});
},"dojo/date/stamp":function(){
define(["../_base/kernel","../_base/lang","../_base/array"],function(dojo,lang,_72c){
lang.getObject("date.stamp",true,dojo);
dojo.date.stamp.fromISOString=function(_72d,_72e){
if(!dojo.date.stamp._isoRegExp){
dojo.date.stamp._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
}
var _72f=dojo.date.stamp._isoRegExp.exec(_72d),_730=null;
if(_72f){
_72f.shift();
if(_72f[1]){
_72f[1]--;
}
if(_72f[6]){
_72f[6]*=1000;
}
if(_72e){
_72e=new Date(_72e);
_72c.forEach(_72c.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(prop){
return _72e["get"+prop]();
}),function(_731,_732){
_72f[_732]=_72f[_732]||_731;
});
}
_730=new Date(_72f[0]||1970,_72f[1]||0,_72f[2]||1,_72f[3]||0,_72f[4]||0,_72f[5]||0,_72f[6]||0);
if(_72f[0]<100){
_730.setFullYear(_72f[0]||1970);
}
var _733=0,_734=_72f[7]&&_72f[7].charAt(0);
if(_734!="Z"){
_733=((_72f[8]||0)*60)+(Number(_72f[9])||0);
if(_734!="-"){
_733*=-1;
}
}
if(_734){
_733-=_730.getTimezoneOffset();
}
if(_733){
_730.setTime(_730.getTime()+_733*60000);
}
}
return _730;
};
dojo.date.stamp.toISOString=function(_735,_736){
var _737=function(n){
return (n<10)?"0"+n:n;
};
_736=_736||{};
var _738=[],_739=_736.zulu?"getUTC":"get",date="";
if(_736.selector!="time"){
var year=_735[_739+"FullYear"]();
date=["0000".substr((year+"").length)+year,_737(_735[_739+"Month"]()+1),_737(_735[_739+"Date"]())].join("-");
}
_738.push(date);
if(_736.selector!="date"){
var time=[_737(_735[_739+"Hours"]()),_737(_735[_739+"Minutes"]()),_737(_735[_739+"Seconds"]())].join(":");
var _73a=_735[_739+"Milliseconds"]();
if(_736.milliseconds){
time+="."+(_73a<100?"0":"")+_737(_73a);
}
if(_736.zulu){
time+="Z";
}else{
if(_736.selector!="time"){
var _73b=_735.getTimezoneOffset();
var _73c=Math.abs(_73b);
time+=(_73b>0?"-":"+")+_737(Math.floor(_73c/60))+":"+_737(_73c%60);
}
}
_738.push(time);
}
return _738.join("T");
};
return dojo.date.stamp;
});
},"dijit/form/_ButtonMixin":function(){
define("dijit/form/_ButtonMixin",["dojo/_base/declare","dojo/dom","dojo/_base/event","../registry"],function(_73d,dom,_73e,_73f){
return _73d("dijit.form._ButtonMixin",null,{label:"",type:"button",_onClick:function(e){
if(this.disabled){
_73e.stop(e);
return false;
}
var _740=this.onClick(e)===false;
if(!_740&&this.type=="submit"&&!(this.valueNode||this.focusNode).form){
for(var node=this.domNode;node.parentNode;node=node.parentNode){
var _741=_73f.byNode(node);
if(_741&&typeof _741._onSubmit=="function"){
_741._onSubmit(e);
_740=true;
break;
}
}
}
if(_740){
e.preventDefault();
}
return !_740;
},postCreate:function(){
this.inherited(arguments);
dom.setSelectable(this.focusNode,false);
},onClick:function(){
return true;
},_setLabelAttr:function(_742){
this._set("label",_742);
(this.containerNode||this.focusNode).innerHTML=_742;
}});
});
},"dijit/form/_FormWidget":function(){
define("dijit/form/_FormWidget",["dojo/_base/declare","dojo/_base/kernel","dojo/ready","../_Widget","../_CssStateMixin","../_TemplatedMixin","./_FormWidgetMixin"],function(_743,_744,_745,_746,_747,_748,_749){
if(!_744.isAsync){
_745(0,function(){
var _74a=["dijit/form/_FormValueWidget"];
require(_74a);
});
}
return _743("dijit.form._FormWidget",[_746,_748,_747,_749],{setDisabled:function(_74b){
_744.deprecated("setDisabled("+_74b+") is deprecated. Use set('disabled',"+_74b+") instead.","","2.0");
this.set("disabled",_74b);
},setValue:function(_74c){
_744.deprecated("dijit.form._FormWidget:setValue("+_74c+") is deprecated.  Use set('value',"+_74c+") instead.","","2.0");
this.set("value",_74c);
},getValue:function(){
_744.deprecated(this.declaredClass+"::getValue() is deprecated. Use get('value') instead.","","2.0");
return this.get("value");
},postMixInProperties:function(){
this.nameAttrSetting=this.name?("name=\""+this.name.replace(/'/g,"&quot;")+"\""):"";
this.inherited(arguments);
},_setTypeAttr:null});
});
},"dijit/_base/typematic":function(){
define("dijit/_base/typematic",["../typematic"],function(){
});
},"dijit/MenuItem":function(){
require({cache:{"url:dijit/templates/MenuItem.html":"<tr class=\"dijitReset dijitMenuItem\" data-dojo-attach-point=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\n\t\tdata-dojo-attach-event=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon dijitMenuItemIcon\" data-dojo-attach-point=\"iconNode\"/>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" data-dojo-attach-point=\"containerNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" data-dojo-attach-point=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">\n\t\t<div data-dojo-attach-point=\"arrowWrapper\" style=\"visibility: hidden\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\"/>\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\n\t\t</div>\n\t</td>\n</tr>\n"}});
define("dijit/MenuItem",["dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/_base/event","dojo/_base/kernel","dojo/_base/sniff","./_Widget","./_TemplatedMixin","./_Contained","./_CssStateMixin","dojo/text!./templates/MenuItem.html"],function(_74d,dom,_74e,_74f,_750,_751,has,_752,_753,_754,_755,_756){
return _74d("dijit.MenuItem",[_752,_753,_754,_755],{templateString:_756,baseClass:"dijitMenuItem",label:"",_setLabelAttr:{node:"containerNode",type:"innerHTML"},iconClass:"dijitNoIcon",_setIconClassAttr:{node:"iconNode",type:"class"},accelKey:"",disabled:false,_fillContent:function(_757){
if(_757&&!("label" in this.params)){
this.set("label",_757.innerHTML);
}
},buildRendering:function(){
this.inherited(arguments);
var _758=this.id+"_text";
_74e.set(this.containerNode,"id",_758);
if(this.accelKeyNode){
_74e.set(this.accelKeyNode,"id",this.id+"_accel");
_758+=" "+this.id+"_accel";
}
this.domNode.setAttribute("aria-labelledby",_758);
dom.setSelectable(this.domNode,false);
},_onHover:function(){
this.getParent().onItemHover(this);
},_onUnhover:function(){
this.getParent().onItemUnhover(this);
this._set("hovering",false);
},_onClick:function(evt){
this.getParent().onItemClick(this,evt);
_750.stop(evt);
},onClick:function(){
},focus:function(){
try{
if(has("ie")==8){
this.containerNode.focus();
}
this.focusNode.focus();
}
catch(e){
}
},_onFocus:function(){
this._setSelected(true);
this.getParent()._onItemFocus(this);
this.inherited(arguments);
},_setSelected:function(_759){
_74f.toggle(this.domNode,"dijitMenuItemSelected",_759);
},setLabel:function(_75a){
_751.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0");
this.set("label",_75a);
},setDisabled:function(_75b){
_751.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0");
this.set("disabled",_75b);
},_setDisabledAttr:function(_75c){
this.focusNode.setAttribute("aria-disabled",_75c?"true":"false");
this._set("disabled",_75c);
},_setAccelKeyAttr:function(_75d){
this.accelKeyNode.style.display=_75d?"":"none";
this.accelKeyNode.innerHTML=_75d;
_74e.set(this.containerNode,"colSpan",_75d?"1":"2");
this._set("accelKey",_75d);
}});
});
},"dojo/io-query":function(){
define(["./_base/lang"],function(lang){
var _75e={};
function _75f(map){
var enc=encodeURIComponent,_760=[];
for(var name in map){
var _761=map[name];
if(_761!=_75e[name]){
var _762=enc(name)+"=";
if(lang.isArray(_761)){
for(var i=0,l=_761.length;i<l;++i){
_760.push(_762+enc(_761[i]));
}
}else{
_760.push(_762+enc(_761));
}
}
}
return _760.join("&");
};
function _763(str){
var dec=decodeURIComponent,qp=str.split("&"),ret={},name,val;
for(var i=0,l=qp.length,item;i<l;++i){
item=qp[i];
if(item.length){
var s=item.indexOf("=");
if(s<0){
name=dec(item);
val="";
}else{
name=dec(item.slice(0,s));
val=dec(item.slice(s+1));
}
if(typeof ret[name]=="string"){
ret[name]=[ret[name]];
}
if(lang.isArray(ret[name])){
ret[name].push(val);
}else{
ret[name]=val;
}
}
}
return ret;
};
return {objectToQuery:_75f,queryToObject:_763};
});
},"dijit/_base/popup":function(){
define("dijit/_base/popup",["dojo/dom-class","../popup","../BackgroundIframe"],function(_764,_765){
var _766=_765._createWrapper;
_765._createWrapper=function(_767){
if(!_767.declaredClass){
_767={_popupWrapper:(_767.parentNode&&_764.contains(_767.parentNode,"dijitPopup"))?_767.parentNode:null,domNode:_767,destroy:function(){
}};
}
return _766.call(this,_767);
};
var _768=_765.open;
_765.open=function(args){
if(args.orient&&typeof args.orient!="string"&&!("length" in args.orient)){
var ary=[];
for(var key in args.orient){
ary.push({aroundCorner:key,corner:args.orient[key]});
}
args.orient=ary;
}
return _768.call(this,args);
};
return _765;
});
},"dijit/TooltipDialog":function(){
require({cache:{"url:dijit/templates/TooltipDialog.html":"<div role=\"presentation\" tabIndex=\"-1\">\n\t<div class=\"dijitTooltipContainer\" role=\"presentation\">\n\t\t<div class =\"dijitTooltipContents dijitTooltipFocusNode\" data-dojo-attach-point=\"containerNode\" role=\"dialog\"></div>\n\t</div>\n\t<div class=\"dijitTooltipConnector\" role=\"presentation\"></div>\n</div>\n"}});
define("dijit/TooltipDialog",["dojo/_base/declare","dojo/dom-class","dojo/_base/event","dojo/keys","dojo/_base/lang","./focus","./layout/ContentPane","./_DialogMixin","./form/_FormMixin","./_TemplatedMixin","dojo/text!./templates/TooltipDialog.html","."],function(_769,_76a,_76b,keys,lang,_76c,_76d,_76e,_76f,_770,_771,_772){
return _769("dijit.TooltipDialog",[_76d,_770,_76f,_76e],{title:"",doLayout:false,autofocus:true,baseClass:"dijitTooltipDialog",_firstFocusItem:null,_lastFocusItem:null,templateString:_771,_setTitleAttr:function(_773){
this.containerNode.title=_773;
this._set("title",_773);
},postCreate:function(){
this.inherited(arguments);
this.connect(this.containerNode,"onkeypress","_onKey");
},orient:function(node,_774,_775){
var newC="dijitTooltipAB"+(_775.charAt(1)=="L"?"Left":"Right")+" dijitTooltip"+(_775.charAt(0)=="T"?"Below":"Above");
_76a.replace(this.domNode,newC,this._currentOrientClass||"");
this._currentOrientClass=newC;
},focus:function(){
this._getFocusItems(this.containerNode);
_76c.focus(this._firstFocusItem);
},onOpen:function(pos){
this.orient(this.domNode,pos.aroundCorner,pos.corner);
this._onShow();
},onClose:function(){
this.onHide();
},_onKey:function(evt){
var node=evt.target;
if(evt.charOrCode===keys.TAB){
this._getFocusItems(this.containerNode);
}
var _776=(this._firstFocusItem==this._lastFocusItem);
if(evt.charOrCode==keys.ESCAPE){
setTimeout(lang.hitch(this,"onCancel"),0);
_76b.stop(evt);
}else{
if(node==this._firstFocusItem&&evt.shiftKey&&evt.charOrCode===keys.TAB){
if(!_776){
_76c.focus(this._lastFocusItem);
}
_76b.stop(evt);
}else{
if(node==this._lastFocusItem&&evt.charOrCode===keys.TAB&&!evt.shiftKey){
if(!_776){
_76c.focus(this._firstFocusItem);
}
_76b.stop(evt);
}else{
if(evt.charOrCode===keys.TAB){
evt.stopPropagation();
}
}
}
}
}});
});
},"dojo/ready":function(){
define(["./_base/kernel","./has","require","./domReady","./_base/lang"],function(dojo,has,_777,_778,lang){
var _779=0,_77a,_77b=[],_77c=0,_77d=function(){
_779=1;
dojo._postLoad=dojo.config.afterOnLoad=true;
if(_77b.length){
_77a(_77e);
}
},_77e=function(){
if(_779&&!_77c&&_77b.length){
_77c=1;
var f=_77b.shift();
try{
f();
}
finally{
_77c=0;
}
_77c=0;
if(_77b.length){
_77a(_77e);
}
}
};
if(1){
_777.on("idle",_77e);
_77a=function(){
if(_777.idle()){
_77e();
}
};
}else{
_77a=function(){
_777.ready(_77e);
};
}
var _77f=dojo.ready=dojo.addOnLoad=function(_780,_781,_782){
var _783=lang._toArray(arguments);
if(typeof _780!="number"){
_782=_781;
_781=_780;
_780=1000;
}else{
_783.shift();
}
_782=_782?lang.hitch.apply(dojo,_783):function(){
_781();
};
_782.priority=_780;
for(var i=0;i<_77b.length&&_780>=_77b[i].priority;i++){
}
_77b.splice(i,0,_782);
_77a();
};
true||has.add("dojo-config-addOnLoad",1);
if(1){
var dca=dojo.config.addOnLoad;
if(dca){
_77f[(lang.isArray(dca)?"apply":"call")](dojo,dca);
}
}
if(1&&dojo.config.parseOnLoad&&!dojo.isAsync){
_77f(99,function(){
if(!dojo.parser){
dojo.deprecated("Add explicit require(['dojo/parser']);","","2.0");
_777(["dojo/parser"]);
}
});
}
if(1){
_778(_77d);
}else{
_77d();
}
return _77f;
});
},"dijit/_TemplatedMixin":function(){
define("dijit/_TemplatedMixin",["dojo/_base/lang","dojo/touch","./_WidgetBase","dojo/string","dojo/cache","dojo/_base/array","dojo/_base/declare","dojo/dom-construct","dojo/_base/sniff","dojo/_base/unload","dojo/_base/window"],function(lang,_784,_785,_786,_787,_788,_789,_78a,has,_78b,win){
var _78c=_789("dijit._TemplatedMixin",null,{templateString:null,templatePath:null,_skipNodeCache:false,_earlyTemplatedStartup:false,constructor:function(){
this._attachPoints=[];
this._attachEvents=[];
},_stringRepl:function(tmpl){
var _78d=this.declaredClass,_78e=this;
return _786.substitute(tmpl,this,function(_78f,key){
if(key.charAt(0)=="!"){
_78f=lang.getObject(key.substr(1),false,_78e);
}
if(typeof _78f=="undefined"){
throw new Error(_78d+" template:"+key);
}
if(_78f==null){
return "";
}
return key.charAt(0)=="!"?_78f:_78f.toString().replace(/"/g,"&quot;");
},this);
},buildRendering:function(){
if(!this.templateString){
this.templateString=_787(this.templatePath,{sanitize:true});
}
var _790=_78c.getCachedTemplate(this.templateString,this._skipNodeCache);
var node;
if(lang.isString(_790)){
node=_78a.toDom(this._stringRepl(_790));
if(node.nodeType!=1){
throw new Error("Invalid template: "+_790);
}
}else{
node=_790.cloneNode(true);
}
this.domNode=node;
this.inherited(arguments);
this._attachTemplateNodes(node,function(n,p){
return n.getAttribute(p);
});
this._beforeFillContent();
this._fillContent(this.srcNodeRef);
},_beforeFillContent:function(){
},_fillContent:function(_791){
var dest=this.containerNode;
if(_791&&dest){
while(_791.hasChildNodes()){
dest.appendChild(_791.firstChild);
}
}
},_attachTemplateNodes:function(_792,_793){
var _794=lang.isArray(_792)?_792:(_792.all||_792.getElementsByTagName("*"));
var x=lang.isArray(_792)?0:-1;
for(;x<_794.length;x++){
var _795=(x==-1)?_792:_794[x];
if(this.widgetsInTemplate&&(_793(_795,"dojoType")||_793(_795,"data-dojo-type"))){
continue;
}
var _796=_793(_795,"dojoAttachPoint")||_793(_795,"data-dojo-attach-point");
if(_796){
var _797,_798=_796.split(/\s*,\s*/);
while((_797=_798.shift())){
if(lang.isArray(this[_797])){
this[_797].push(_795);
}else{
this[_797]=_795;
}
this._attachPoints.push(_797);
}
}
var _799=_793(_795,"dojoAttachEvent")||_793(_795,"data-dojo-attach-event");
if(_799){
var _79a,_79b=_799.split(/\s*,\s*/);
var trim=lang.trim;
while((_79a=_79b.shift())){
if(_79a){
var _79c=null;
if(_79a.indexOf(":")!=-1){
var _79d=_79a.split(":");
_79a=trim(_79d[0]);
_79c=trim(_79d[1]);
}else{
_79a=trim(_79a);
}
if(!_79c){
_79c=_79a;
}
this._attachEvents.push(this.connect(_795,_784[_79a]||_79a,_79c));
}
}
}
}
},destroyRendering:function(){
_788.forEach(this._attachPoints,function(_79e){
delete this[_79e];
},this);
this._attachPoints=[];
_788.forEach(this._attachEvents,this.disconnect,this);
this._attachEvents=[];
this.inherited(arguments);
}});
_78c._templateCache={};
_78c.getCachedTemplate=function(_79f,_7a0){
var _7a1=_78c._templateCache;
var key=_79f;
var _7a2=_7a1[key];
if(_7a2){
try{
if(!_7a2.ownerDocument||_7a2.ownerDocument==win.doc){
return _7a2;
}
}
catch(e){
}
_78a.destroy(_7a2);
}
_79f=_786.trim(_79f);
if(_7a0||_79f.match(/\$\{([^\}]+)\}/g)){
return (_7a1[key]=_79f);
}else{
var node=_78a.toDom(_79f);
if(node.nodeType!=1){
throw new Error("Invalid template: "+_79f);
}
return (_7a1[key]=node);
}
};
if(has("ie")){
_78b.addOnWindowUnload(function(){
var _7a3=_78c._templateCache;
for(var key in _7a3){
var _7a4=_7a3[key];
if(typeof _7a4=="object"){
_78a.destroy(_7a4);
}
delete _7a3[key];
}
});
}
lang.extend(_785,{dojoAttachEvent:"",dojoAttachPoint:""});
return _78c;
});
},"dijit/_base/wai":function(){
define("dijit/_base/wai",["dojo/dom-attr","dojo/_base/lang","..","../hccss"],function(_7a5,lang,_7a6){
lang.mixin(_7a6,{hasWaiRole:function(elem,role){
var _7a7=this.getWaiRole(elem);
return role?(_7a7.indexOf(role)>-1):(_7a7.length>0);
},getWaiRole:function(elem){
return lang.trim((_7a5.get(elem,"role")||"").replace("wairole:",""));
},setWaiRole:function(elem,role){
_7a5.set(elem,"role",role);
},removeWaiRole:function(elem,role){
var _7a8=_7a5.get(elem,"role");
if(!_7a8){
return;
}
if(role){
var t=lang.trim((" "+_7a8+" ").replace(" "+role+" "," "));
_7a5.set(elem,"role",t);
}else{
elem.removeAttribute("role");
}
},hasWaiState:function(elem,_7a9){
return elem.hasAttribute?elem.hasAttribute("aria-"+_7a9):!!elem.getAttribute("aria-"+_7a9);
},getWaiState:function(elem,_7aa){
return elem.getAttribute("aria-"+_7aa)||"";
},setWaiState:function(elem,_7ab,_7ac){
elem.setAttribute("aria-"+_7ab,_7ac);
},removeWaiState:function(elem,_7ad){
elem.removeAttribute("aria-"+_7ad);
}});
return _7a6;
});
},"dojo/Evented":function(){
define(["./aspect","./on"],function(_7ae,on){
"use strict";
var _7af=_7ae.after;
function _7b0(){
};
_7b0.prototype={on:function(type,_7b1){
return on.parse(this,type,_7b1,function(_7b2,type){
return _7af(_7b2,"on"+type,_7b1,true);
});
},emit:function(type,_7b3){
var args=[this];
args.push.apply(args,arguments);
return on.emit.apply(on,args);
}};
return _7b0;
});
},"dojo/window":function(){
define(["./_base/lang","./_base/sniff","./_base/window","./dom","./dom-geometry","./dom-style"],function(lang,has,_7b4,dom,geom,_7b5){
var _7b6=lang.getObject("dojo.window",true);
_7b6.getBox=function(){
var _7b7=(_7b4.doc.compatMode=="BackCompat")?_7b4.body():_7b4.doc.documentElement,_7b8=geom.docScroll(),w,h;
if(has("touch")){
var _7b9=_7b4.doc.parentWindow||_7b4.doc.defaultView;
w=_7b9.innerWidth||_7b7.clientWidth;
h=_7b9.innerHeight||_7b7.clientHeight;
}else{
w=_7b7.clientWidth;
h=_7b7.clientHeight;
}
return {l:_7b8.x,t:_7b8.y,w:w,h:h};
};
_7b6.get=function(doc){
if(has("ie")&&_7b6!==document.parentWindow){
doc.parentWindow.execScript("document._parentWindow = window;","Javascript");
var win=doc._parentWindow;
doc._parentWindow=null;
return win;
}
return doc.parentWindow||doc.defaultView;
};
_7b6.scrollIntoView=function(node,pos){
try{
node=dom.byId(node);
var doc=node.ownerDocument||_7b4.doc,body=doc.body||_7b4.body(),html=doc.documentElement||body.parentNode,isIE=has("ie"),isWK=has("webkit");
if((!(has("mozilla")||isIE||isWK||has("opera"))||node==body||node==html)&&(typeof node.scrollIntoView!="undefined")){
node.scrollIntoView(false);
return;
}
var _7ba=doc.compatMode=="BackCompat",_7bb=(isIE>=9&&node.ownerDocument.parentWindow.frameElement)?((html.clientHeight>0&&html.clientWidth>0&&(body.clientHeight==0||body.clientWidth==0||body.clientHeight>html.clientHeight||body.clientWidth>html.clientWidth))?html:body):(_7ba?body:html),_7bc=isWK?body:_7bb,_7bd=_7bb.clientWidth,_7be=_7bb.clientHeight,rtl=!geom.isBodyLtr(),_7bf=pos||geom.position(node),el=node.parentNode,_7c0=function(el){
return ((isIE<=6||(isIE&&_7ba))?false:(_7b5.get(el,"position").toLowerCase()=="fixed"));
};
if(_7c0(node)){
return;
}
while(el){
if(el==body){
el=_7bc;
}
var _7c1=geom.position(el),_7c2=_7c0(el);
if(el==_7bc){
_7c1.w=_7bd;
_7c1.h=_7be;
if(_7bc==html&&isIE&&rtl){
_7c1.x+=_7bc.offsetWidth-_7c1.w;
}
if(_7c1.x<0||!isIE){
_7c1.x=0;
}
if(_7c1.y<0||!isIE){
_7c1.y=0;
}
}else{
var pb=geom.getPadBorderExtents(el);
_7c1.w-=pb.w;
_7c1.h-=pb.h;
_7c1.x+=pb.l;
_7c1.y+=pb.t;
var _7c3=el.clientWidth,_7c4=_7c1.w-_7c3;
if(_7c3>0&&_7c4>0){
_7c1.w=_7c3;
_7c1.x+=(rtl&&(isIE||el.clientLeft>pb.l))?_7c4:0;
}
_7c3=el.clientHeight;
_7c4=_7c1.h-_7c3;
if(_7c3>0&&_7c4>0){
_7c1.h=_7c3;
}
}
if(_7c2){
if(_7c1.y<0){
_7c1.h+=_7c1.y;
_7c1.y=0;
}
if(_7c1.x<0){
_7c1.w+=_7c1.x;
_7c1.x=0;
}
if(_7c1.y+_7c1.h>_7be){
_7c1.h=_7be-_7c1.y;
}
if(_7c1.x+_7c1.w>_7bd){
_7c1.w=_7bd-_7c1.x;
}
}
var l=_7bf.x-_7c1.x,t=_7bf.y-Math.max(_7c1.y,0),r=l+_7bf.w-_7c1.w,bot=t+_7bf.h-_7c1.h;
if(r*l>0){
var s=Math[l<0?"max":"min"](l,r);
if(rtl&&((isIE==8&&!_7ba)||isIE>=9)){
s=-s;
}
_7bf.x+=el.scrollLeft;
el.scrollLeft+=s;
_7bf.x-=el.scrollLeft;
}
if(bot*t>0){
_7bf.y+=el.scrollTop;
el.scrollTop+=Math[t<0?"max":"min"](t,bot);
_7bf.y-=el.scrollTop;
}
el=(el!=_7bc)&&!_7c2&&el.parentNode;
}
}
catch(error){
console.error("scrollIntoView: "+error);
node.scrollIntoView(false);
}
};
return _7b6;
});
},"url:dijit/form/templates/DropDownButton.html":"<span class=\"dijit dijitReset dijitInline\"\n\t><span class='dijitReset dijitInline dijitButtonNode'\n\t\tdata-dojo-attach-event=\"ondijitclick:_onClick\" data-dojo-attach-point=\"_buttonNode\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdata-dojo-attach-point=\"focusNode,titleNode,_arrowWrapperNode\"\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\n\t\t\t\tdata-dojo-attach-point=\"iconNode\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tdata-dojo-attach-point=\"containerNode,_popupStateNode\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\n\t\tdata-dojo-attach-point=\"valueNode\"\n/></span>\n","dojo/_base/xhr":function(){
define(["./kernel","./sniff","require","../io-query","../dom","../dom-form","./Deferred","./json","./lang","./array","../on"],function(dojo,has,_7c5,ioq,dom,_7c6,_7c7,json,lang,_7c8,on){
has.add("native-xhr",function(){
return typeof XMLHttpRequest!=="undefined";
});
if(1&&_7c5.getXhr){
dojo._xhrObj=_7c5.getXhr;
}else{
if(has("native-xhr")){
dojo._xhrObj=function(){
try{
return new XMLHttpRequest();
}
catch(e){
throw new Error("XMLHTTP not available: "+e);
}
};
}else{
for(var _7c9=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],_7ca,i=0;i<3;){
try{
_7ca=_7c9[i++];
if(new ActiveXObject(_7ca)){
break;
}
}
catch(e){
}
}
dojo._xhrObj=function(){
return new ActiveXObject(_7ca);
};
}
}
var cfg=dojo.config;
dojo.objectToQuery=ioq.objectToQuery;
dojo.queryToObject=ioq.queryToObject;
dojo.fieldToObject=_7c6.fieldToObject;
dojo.formToObject=_7c6.toObject;
dojo.formToQuery=_7c6.toQuery;
dojo.formToJson=_7c6.toJson;
dojo._blockAsync=false;
var _7cb=dojo._contentHandlers=dojo.contentHandlers={"text":function(xhr){
return xhr.responseText;
},"json":function(xhr){
var text=xhr.responseText||null;
return dojo.global.JSON?dojo.global.JSON.parse(text):json.fromJson(text);
},"json-comment-filtered":function(xhr){
if(!dojo.config.useCommentedJson){
console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");
}
var _7cc=xhr.responseText;
var _7cd=_7cc.indexOf("/*");
var _7ce=_7cc.lastIndexOf("*/");
if(_7cd==-1||_7ce==-1){
throw new Error("JSON was not comment filtered");
}
return json.fromJson(_7cc.substring(_7cd+2,_7ce));
},"javascript":function(xhr){
return dojo.eval(xhr.responseText);
},"xml":function(xhr){
var _7cf=xhr.responseXML;
if(has("ie")){
if((!_7cf||!_7cf.documentElement)){
var ms=function(n){
return "MSXML"+n+".DOMDocument";
};
var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];
_7c8.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(xhr.responseText);
_7cf=dom;
}
catch(e){
return false;
}
return true;
});
}
}
return _7cf;
},"json-comment-optional":function(xhr){
if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){
return _7cb["json-comment-filtered"](xhr);
}else{
return _7cb["json"](xhr);
}
}};
dojo._ioSetArgs=function(args,_7d0,_7d1,_7d2){
var _7d3={args:args,url:args.url};
var _7d4=null;
if(args.form){
var form=dom.byId(args.form);
var _7d5=form.getAttributeNode("action");
_7d3.url=_7d3.url||(_7d5?_7d5.value:null);
_7d4=_7c6.toObject(form);
}
var _7d6=[{}];
if(_7d4){
_7d6.push(_7d4);
}
if(args.content){
_7d6.push(args.content);
}
if(args.preventCache){
_7d6.push({"dojo.preventCache":new Date().valueOf()});
}
_7d3.query=ioq.objectToQuery(lang.mixin.apply(null,_7d6));
_7d3.handleAs=args.handleAs||"text";
var d=new _7c7(_7d0);
d.addCallbacks(_7d1,function(_7d7){
return _7d2(_7d7,d);
});
var ld=args.load;
if(ld&&lang.isFunction(ld)){
d.addCallback(function(_7d8){
return ld.call(args,_7d8,_7d3);
});
}
var err=args.error;
if(err&&lang.isFunction(err)){
d.addErrback(function(_7d9){
return err.call(args,_7d9,_7d3);
});
}
var _7da=args.handle;
if(_7da&&lang.isFunction(_7da)){
d.addBoth(function(_7db){
return _7da.call(args,_7db,_7d3);
});
}
if(cfg.ioPublish&&dojo.publish&&_7d3.args.ioPublish!==false){
d.addCallbacks(function(res){
dojo.publish("/dojo/io/load",[d,res]);
return res;
},function(res){
dojo.publish("/dojo/io/error",[d,res]);
return res;
});
d.addBoth(function(res){
dojo.publish("/dojo/io/done",[d,res]);
return res;
});
}
d.ioArgs=_7d3;
return d;
};
var _7dc=function(dfd){
dfd.canceled=true;
var xhr=dfd.ioArgs.xhr;
var _7dd=typeof xhr.abort;
if(_7dd=="function"||_7dd=="object"||_7dd=="unknown"){
xhr.abort();
}
var err=dfd.ioArgs.error;
if(!err){
err=new Error("xhr cancelled");
err.dojoType="cancel";
}
return err;
};
var _7de=function(dfd){
var ret=_7cb[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
return ret===undefined?null:ret;
};
var _7df=function(_7e0,dfd){
if(!dfd.ioArgs.args.failOk){
console.error(_7e0);
}
return _7e0;
};
var _7e1=null;
var _7e2=[];
var _7e3=0;
var _7e4=function(dfd){
if(_7e3<=0){
_7e3=0;
if(cfg.ioPublish&&dojo.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){
dojo.publish("/dojo/io/stop");
}
}
};
var _7e5=function(){
var now=(new Date()).getTime();
if(!dojo._blockAsync){
for(var i=0,tif;i<_7e2.length&&(tif=_7e2[i]);i++){
var dfd=tif.dfd;
var func=function(){
if(!dfd||dfd.canceled||!tif.validCheck(dfd)){
_7e2.splice(i--,1);
_7e3-=1;
}else{
if(tif.ioCheck(dfd)){
_7e2.splice(i--,1);
tif.resHandle(dfd);
_7e3-=1;
}else{
if(dfd.startTime){
if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){
_7e2.splice(i--,1);
var err=new Error("timeout exceeded");
err.dojoType="timeout";
dfd.errback(err);
dfd.cancel();
_7e3-=1;
}
}
}
}
};
if(dojo.config.debugAtAllCosts){
func.call(this);
}else{
try{
func.call(this);
}
catch(e){
dfd.errback(e);
}
}
}
}
_7e4(dfd);
if(!_7e2.length){
clearInterval(_7e1);
_7e1=null;
}
};
dojo._ioCancelAll=function(){
try{
_7c8.forEach(_7e2,function(i){
try{
i.dfd.cancel();
}
catch(e){
}
});
}
catch(e){
}
};
if(has("ie")){
on(window,"unload",dojo._ioCancelAll);
}
dojo._ioNotifyStart=function(dfd){
if(cfg.ioPublish&&dojo.publish&&dfd.ioArgs.args.ioPublish!==false){
if(!_7e3){
dojo.publish("/dojo/io/start");
}
_7e3+=1;
dojo.publish("/dojo/io/send",[dfd]);
}
};
dojo._ioWatch=function(dfd,_7e6,_7e7,_7e8){
var args=dfd.ioArgs.args;
if(args.timeout){
dfd.startTime=(new Date()).getTime();
}
_7e2.push({dfd:dfd,validCheck:_7e6,ioCheck:_7e7,resHandle:_7e8});
if(!_7e1){
_7e1=setInterval(_7e5,50);
}
if(args.sync){
_7e5();
}
};
var _7e9="application/x-www-form-urlencoded";
var _7ea=function(dfd){
return dfd.ioArgs.xhr.readyState;
};
var _7eb=function(dfd){
return 4==dfd.ioArgs.xhr.readyState;
};
var _7ec=function(dfd){
var xhr=dfd.ioArgs.xhr;
if(dojo._isDocumentOk(xhr,dfd.ioArgs.url)){
dfd.callback(dfd);
}else{
var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);
err.status=xhr.status;
err.responseText=xhr.responseText;
err.xhr=xhr;
dfd.errback(err);
}
};
dojo._ioAddQueryToUrl=function(_7ed){
if(_7ed.query.length){
_7ed.url+=(_7ed.url.indexOf("?")==-1?"?":"&")+_7ed.query;
_7ed.query=null;
}
};
dojo.xhr=function(_7ee,args,_7ef){
var dfd=dojo._ioSetArgs(args,_7dc,_7de,_7df);
var _7f0=dfd.ioArgs;
var xhr=_7f0.xhr=dojo._xhrObj(_7f0.args);
if(!xhr){
dfd.cancel();
return dfd;
}
if("postData" in args){
_7f0.query=args.postData;
}else{
if("putData" in args){
_7f0.query=args.putData;
}else{
if("rawBody" in args){
_7f0.query=args.rawBody;
}else{
if((arguments.length>2&&!_7ef)||"POST|PUT".indexOf(_7ee.toUpperCase())==-1){
dojo._ioAddQueryToUrl(_7f0);
}
}
}
}
xhr.open(_7ee,_7f0.url,args.sync!==true,args.user||undefined,args.password||undefined);
if(args.headers){
for(var hdr in args.headers){
if(hdr.toLowerCase()==="content-type"&&!args.contentType){
args.contentType=args.headers[hdr];
}else{
if(args.headers[hdr]){
xhr.setRequestHeader(hdr,args.headers[hdr]);
}
}
}
}
if(args.contentType!==false){
xhr.setRequestHeader("Content-Type",args.contentType||_7e9);
}
if(!args.headers||!("X-Requested-With" in args.headers)){
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
dojo._ioNotifyStart(dfd);
if(dojo.config.debugAtAllCosts){
xhr.send(_7f0.query);
}else{
try{
xhr.send(_7f0.query);
}
catch(e){
_7f0.error=e;
dfd.cancel();
}
}
dojo._ioWatch(dfd,_7ea,_7eb,_7ec);
xhr=null;
return dfd;
};
dojo.xhrGet=function(args){
return dojo.xhr("GET",args);
};
dojo.rawXhrPost=dojo.xhrPost=function(args){
return dojo.xhr("POST",args,true);
};
dojo.rawXhrPut=dojo.xhrPut=function(args){
return dojo.xhr("PUT",args,true);
};
dojo.xhrDelete=function(args){
return dojo.xhr("DELETE",args);
};
var _7f1=function(url){
return url.indexOf("file:")===0||(location.protocol==="file:"&&!/^[^\/\?\#]*:\/\//.test(url));
};
var _7f2=function(http,url){
return !!(_7f1(url)&&!http.status&&http.response);
};
dojo._isDocumentOk=function(http,url){
var stat=http.status||0;
stat=(stat>=200&&stat<300)||stat==304||stat==1223||_7f2(http,url);
return stat;
};
dojo._getText=function(url){
var _7f3;
dojo.xhrGet({url:url,sync:true,load:function(text){
_7f3=text;
}});
return _7f3;
};
lang.mixin(dojo.xhr,{_xhrObj:dojo._xhrObj,fieldToObject:_7c6.fieldToObject,formToObject:_7c6.toObject,objectToQuery:ioq.objectToQuery,formToQuery:_7c6.toQuery,formToJson:_7c6.toJson,queryToObject:ioq.queryToObject,contentHandlers:_7cb,_ioSetArgs:dojo._ioSetArgs,_ioCancelAll:dojo._ioCancelAll,_ioNotifyStart:dojo._ioNotifyStart,_ioWatch:dojo._ioWatch,_ioAddQueryToUrl:dojo._ioAddQueryToUrl,_isDocumentOk:dojo._isDocumentOk,_getText:dojo._getText,get:dojo.xhrGet,post:dojo.xhrPost,put:dojo.xhrPut,del:dojo.xhrDelete});
return dojo.xhr;
});
},"dojo/has":function(){
define(["require"],function(_7f4){
var has=_7f4.has||function(){
};
if(!1){
var _7f5=typeof window!="undefined"&&typeof location!="undefined"&&typeof document!="undefined"&&window.location==location&&window.document==document,_7f6=this,doc=_7f5&&document,_7f7=doc&&doc.createElement("DiV"),_7f8={};
has=function(name){
return typeof _7f8[name]=="function"?(_7f8[name]=_7f8[name](_7f6,doc,_7f7)):_7f8[name];
};
has.cache=_7f8;
has.add=function(name,test,now,_7f9){
(typeof _7f8[name]=="undefined"||_7f9)&&(_7f8[name]=test);
return now&&has(name);
};
true||has.add("host-browser",_7f5);
true||has.add("dom",_7f5);
true||has.add("dojo-dom-ready-api",1);
true||has.add("dojo-sniff",1);
}
if(1){
var _7fa=navigator.userAgent;
has.add("dom-addeventlistener",!!document.addEventListener);
has.add("touch","ontouchstart" in document);
has.add("device-width",screen.availWidth||innerWidth);
has.add("agent-ios",!!_7fa.match(/iPhone|iP[ao]d/));
has.add("agent-android",_7fa.indexOf("android")>1);
}
has.clearElement=function(_7fb){
_7fb.innerHTML="";
return _7fb;
};
has.normalize=function(id,_7fc){
var _7fd=id.match(/[\?:]|[^:\?]*/g),i=0,get=function(skip){
var term=_7fd[i++];
if(term==":"){
return 0;
}else{
if(_7fd[i++]=="?"){
if(!skip&&has(term)){
return get();
}else{
get(true);
return get(skip);
}
}
return term||0;
}
};
id=get();
return id&&_7fc(id);
};
has.load=function(id,_7fe,_7ff){
if(id){
_7fe([id],_7ff);
}else{
_7ff();
}
};
return has;
});
},"dijit/_HasDropDown":function(){
define("dijit/_HasDropDown",["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/event","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/touch","dojo/_base/window","dojo/window","./registry","./focus","./popup","./_FocusMixin"],function(_800,_801,_802,dom,_803,_804,_805,_806,has,keys,lang,_807,win,_808,_809,_80a,_80b,_80c){
return _800("dijit._HasDropDown",_80c,{_buttonNode:null,_arrowWrapperNode:null,_popupStateNode:null,_aroundNode:null,dropDown:null,autoWidth:true,forceWidth:false,maxHeight:0,dropDownPosition:["below","above"],_stopClickEvents:true,_onDropDownMouseDown:function(e){
if(this.disabled||this.readOnly){
return;
}
e.preventDefault();
this._docHandler=this.connect(win.doc,_807.release,"_onDropDownMouseUp");
this.toggleDropDown();
},_onDropDownMouseUp:function(e){
if(e&&this._docHandler){
this.disconnect(this._docHandler);
}
var _80d=this.dropDown,_80e=false;
if(e&&this._opened){
var c=_805.position(this._buttonNode,true);
if(!(e.pageX>=c.x&&e.pageX<=c.x+c.w)||!(e.pageY>=c.y&&e.pageY<=c.y+c.h)){
var t=e.target;
while(t&&!_80e){
if(_804.contains(t,"dijitPopup")){
_80e=true;
}else{
t=t.parentNode;
}
}
if(_80e){
t=e.target;
if(_80d.onItemClick){
var _80f;
while(t&&!(_80f=_809.byNode(t))){
t=t.parentNode;
}
if(_80f&&_80f.onClick&&_80f.getParent){
_80f.getParent().onItemClick(_80f,e);
}
}
return;
}
}
}
if(this._opened){
if(_80d.focus&&_80d.autoFocus!==false){
window.setTimeout(lang.hitch(_80d,"focus"),1);
}
}else{
setTimeout(lang.hitch(this,"focus"),0);
}
if(has("ios")){
this._justGotMouseUp=true;
setTimeout(lang.hitch(this,function(){
this._justGotMouseUp=false;
}),0);
}
},_onDropDownClick:function(e){
if(has("ios")&&!this._justGotMouseUp){
this._onDropDownMouseDown(e);
this._onDropDownMouseUp(e);
}
if(this._stopClickEvents){
_802.stop(e);
}
},buildRendering:function(){
this.inherited(arguments);
this._buttonNode=this._buttonNode||this.focusNode||this.domNode;
this._popupStateNode=this._popupStateNode||this.focusNode||this._buttonNode;
var _810={"after":this.isLeftToRight()?"Right":"Left","before":this.isLeftToRight()?"Left":"Right","above":"Up","below":"Down","left":"Left","right":"Right"}[this.dropDownPosition[0]]||this.dropDownPosition[0]||"Down";
_804.add(this._arrowWrapperNode||this._buttonNode,"dijit"+_810+"ArrowButton");
},postCreate:function(){
this.inherited(arguments);
this.connect(this._buttonNode,_807.press,"_onDropDownMouseDown");
this.connect(this._buttonNode,"onclick","_onDropDownClick");
this.connect(this.focusNode,"onkeypress","_onKey");
this.connect(this.focusNode,"onkeyup","_onKeyUp");
},destroy:function(){
if(this.dropDown){
if(!this.dropDown._destroyed){
this.dropDown.destroyRecursive();
}
delete this.dropDown;
}
this.inherited(arguments);
},_onKey:function(e){
if(this.disabled||this.readOnly){
return;
}
var d=this.dropDown,_811=e.target;
if(d&&this._opened&&d.handleKey){
if(d.handleKey(e)===false){
_802.stop(e);
return;
}
}
if(d&&this._opened&&e.charOrCode==keys.ESCAPE){
this.closeDropDown();
_802.stop(e);
}else{
if(!this._opened&&(e.charOrCode==keys.DOWN_ARROW||((e.charOrCode==keys.ENTER||e.charOrCode==" ")&&((_811.tagName||"").toLowerCase()!=="input"||(_811.type&&_811.type.toLowerCase()!=="text"))))){
this._toggleOnKeyUp=true;
_802.stop(e);
}
}
},_onKeyUp:function(){
if(this._toggleOnKeyUp){
delete this._toggleOnKeyUp;
this.toggleDropDown();
var d=this.dropDown;
if(d&&d.focus){
setTimeout(lang.hitch(d,"focus"),1);
}
}
},_onBlur:function(){
var _812=_80a.curNode&&this.dropDown&&dom.isDescendant(_80a.curNode,this.dropDown.domNode);
this.closeDropDown(_812);
this.inherited(arguments);
},isLoaded:function(){
return true;
},loadDropDown:function(_813){
_813();
},loadAndOpenDropDown:function(){
var d=new _801(),_814=lang.hitch(this,function(){
this.openDropDown();
d.resolve(this.dropDown);
});
if(!this.isLoaded()){
this.loadDropDown(_814);
}else{
_814();
}
return d;
},toggleDropDown:function(){
if(this.disabled||this.readOnly){
return;
}
if(!this._opened){
this.loadAndOpenDropDown();
}else{
this.closeDropDown();
}
},openDropDown:function(){
var _815=this.dropDown,_816=_815.domNode,_817=this._aroundNode||this.domNode,self=this;
if(!this._preparedNode){
this._preparedNode=true;
if(_816.style.width){
this._explicitDDWidth=true;
}
if(_816.style.height){
this._explicitDDHeight=true;
}
}
if(this.maxHeight||this.forceWidth||this.autoWidth){
var _818={display:"",visibility:"hidden"};
if(!this._explicitDDWidth){
_818.width="";
}
if(!this._explicitDDHeight){
_818.height="";
}
_806.set(_816,_818);
var _819=this.maxHeight;
if(_819==-1){
var _81a=_808.getBox(),_81b=_805.position(_817,false);
_819=Math.floor(Math.max(_81b.y,_81a.h-(_81b.y+_81b.h)));
}
_80b.moveOffScreen(_815);
if(_815.startup&&!_815._started){
_815.startup();
}
var mb=_805.getMarginSize(_816);
var _81c=(_819&&mb.h>_819);
_806.set(_816,{overflowX:"hidden",overflowY:_81c?"auto":"hidden"});
if(_81c){
mb.h=_819;
if("w" in mb){
mb.w+=16;
}
}else{
delete mb.h;
}
if(this.forceWidth){
mb.w=_817.offsetWidth;
}else{
if(this.autoWidth){
mb.w=Math.max(mb.w,_817.offsetWidth);
}else{
delete mb.w;
}
}
if(lang.isFunction(_815.resize)){
_815.resize(mb);
}else{
_805.setMarginBox(_816,mb);
}
}
var _81d=_80b.open({parent:this,popup:_815,around:_817,orient:this.dropDownPosition,onExecute:function(){
self.closeDropDown(true);
},onCancel:function(){
self.closeDropDown(true);
},onClose:function(){
_803.set(self._popupStateNode,"popupActive",false);
_804.remove(self._popupStateNode,"dijitHasDropDownOpen");
self._opened=false;
}});
_803.set(this._popupStateNode,"popupActive","true");
_804.add(self._popupStateNode,"dijitHasDropDownOpen");
this._opened=true;
return _81d;
},closeDropDown:function(_81e){
if(this._opened){
if(_81e){
this.focus();
}
_80b.close(this.dropDown);
this._opened=false;
}
}});
});
},"dojo/_base/sniff":function(){
define(["./kernel","../has"],function(dojo,has){
if(!1){
return has;
}
dojo.isBrowser=true,dojo._name="browser";
var _81f=has.add,n=navigator,dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav),_820,_821,_822,_823,_824,_825,_826,_827,_828,isIE,isFF,_829,_82a,_82b,_82c;
if(dua.indexOf("AdobeAIR")>=0){
_821=1;
}
_822=(dav.indexOf("Konqueror")>=0)?tv:0;
_823=parseFloat(dua.split("WebKit/")[1])||undefined;
_824=parseFloat(dua.split("Chrome/")[1])||undefined;
_825=dav.indexOf("Macintosh")>=0;
_82a=/iPhone|iPod|iPad/.test(dua);
_82b=parseFloat(dua.split("Android ")[1])||undefined;
_82c=typeof opera!="undefined"&&opera.wiiremote;
var _82d=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);
if(_82d&&!_824){
_826=parseFloat(dav.split("Version/")[1]);
if(!_826||parseFloat(dav.substr(_82d+7))<=419.3){
_826=2;
}
}
if(!has("dojo-webkit")){
if(dua.indexOf("Opera")>=0){
_820=tv;
if(_820>=9.8){
_820=parseFloat(dua.split("Version/")[1])||tv;
}
}
if(dua.indexOf("Gecko")>=0&&!_822&&!_823){
_827=_828=tv;
}
if(_828){
isFF=parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined;
}
if(document.all&&!_820){
isIE=parseFloat(dav.split("MSIE ")[1])||undefined;
var mode=document.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
}
}
_829=document.compatMode=="BackCompat";
_81f("opera",dojo.isOpera=_820);
_81f("air",dojo.isAIR=_821);
_81f("khtml",dojo.isKhtml=_822);
_81f("webkit",dojo.isWebKit=_823);
_81f("chrome",dojo.isChrome=_824);
_81f("mac",dojo.isMac=_825);
_81f("safari",dojo.isSafari=_826);
_81f("mozilla",dojo.isMozilla=dojo.isMoz=_827);
_81f("ie",dojo.isIE=isIE);
_81f("ff",dojo.isFF=isFF);
_81f("quirks",dojo.isQuirks=_829);
_81f("ios",dojo.isIos=_82a);
_81f("android",dojo.isAndroid=_82b);
dojo.locale=dojo.locale||(isIE?n.userLanguage:n.language).toLowerCase();
return has;
});
},"dojo/_base/window":function(){
define(["./kernel","../has","./sniff"],function(dojo,has){
dojo.doc=this["document"]||null;
dojo.body=function(){
return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0];
};
dojo.setContext=function(_82e,_82f){
dojo.global=ret.global=_82e;
dojo.doc=ret.doc=_82f;
};
dojo.withGlobal=function(_830,_831,_832,_833){
var _834=dojo.global;
try{
dojo.global=ret.global=_830;
return dojo.withDoc.call(null,_830.document,_831,_832,_833);
}
finally{
dojo.global=ret.global=_834;
}
};
dojo.withDoc=function(_835,_836,_837,_838){
var _839=dojo.doc,oldQ=dojo.isQuirks,_83a=dojo.isIE,isIE,mode,pwin;
try{
dojo.doc=ret.doc=_835;
dojo.isQuirks=has.add("quirks",dojo.doc.compatMode=="BackCompat",true,true);
if(has("ie")){
if((pwin=_835.parentWindow)&&pwin.navigator){
isIE=parseFloat(pwin.navigator.appVersion.split("MSIE ")[1])||undefined;
mode=_835.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
dojo.isIE=has.add("ie",isIE,true,true);
}
}
if(_837&&typeof _836=="string"){
_836=_837[_836];
}
return _836.apply(_837,_838||[]);
}
finally{
dojo.doc=ret.doc=_839;
dojo.isQuirks=has.add("quirks",oldQ,true,true);
dojo.isIE=has.add("ie",_83a,true,true);
}
};
var ret={global:dojo.global,doc:dojo.doc,body:dojo.body,setContext:dojo.setContext,withGlobal:dojo.withGlobal,withDoc:dojo.withDoc};
return ret;
});
},"url:dijit/form/templates/CheckBox.html":"<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\n\t><input\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\n\t\tdata-dojo-attach-point=\"focusNode\"\n\t \tdata-dojo-attach-event=\"onclick:_onClick\"\n/></div>\n","dijit/popup":function(){
define("dijit/popup",["dojo/_base/array","dojo/aspect","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/_base/event","dojo/keys","dojo/_base/lang","dojo/on","dojo/_base/sniff","dojo/_base/window","./place","./BackgroundIframe","."],function(_83b,_83c,_83d,_83e,dom,_83f,_840,_841,_842,_843,keys,lang,on,has,win,_844,_845,_846){
function _847(){
if(this._popupWrapper){
_840.destroy(this._popupWrapper);
delete this._popupWrapper;
}
};
var _848=_83e(null,{_stack:[],_beginZIndex:1000,_idGen:1,_createWrapper:function(_849){
var _84a=_849._popupWrapper,node=_849.domNode;
if(!_84a){
_84a=_840.create("div",{"class":"dijitPopup",style:{display:"none"},role:"presentation"},win.body());
_84a.appendChild(node);
var s=node.style;
s.display="";
s.visibility="";
s.position="";
s.top="0px";
_849._popupWrapper=_84a;
_83c.after(_849,"destroy",_847,true);
}
return _84a;
},moveOffScreen:function(_84b){
var _84c=this._createWrapper(_84b);
_842.set(_84c,{visibility:"hidden",top:"-9999px",display:""});
},hide:function(_84d){
var _84e=this._createWrapper(_84d);
_842.set(_84e,"display","none");
},getTopPopup:function(){
var _84f=this._stack;
for(var pi=_84f.length-1;pi>0&&_84f[pi].parent===_84f[pi-1].widget;pi--){
}
return _84f[pi];
},open:function(args){
var _850=this._stack,_851=args.popup,_852=args.orient||["below","below-alt","above","above-alt"],ltr=args.parent?args.parent.isLeftToRight():_841.isBodyLtr(),_853=args.around,id=(args.around&&args.around.id)?(args.around.id+"_dropdown"):("popup_"+this._idGen++);
while(_850.length&&(!args.parent||!dom.isDescendant(args.parent.domNode,_850[_850.length-1].widget.domNode))){
this.close(_850[_850.length-1].widget);
}
var _854=this._createWrapper(_851);
_83f.set(_854,{id:id,style:{zIndex:this._beginZIndex+_850.length},"class":"dijitPopup "+(_851.baseClass||_851["class"]||"").split(" ")[0]+"Popup",dijitPopupParent:args.parent?args.parent.id:""});
if(has("ie")||has("mozilla")){
if(!_851.bgIframe){
_851.bgIframe=new _845(_854);
}
}
var best=_853?_844.around(_854,_853,_852,ltr,_851.orient?lang.hitch(_851,"orient"):null):_844.at(_854,args,_852=="R"?["TR","BR","TL","BL"]:["TL","BL","TR","BR"],args.padding);
_854.style.display="";
_854.style.visibility="visible";
_851.domNode.style.visibility="visible";
var _855=[];
_855.push(on(_854,_83d._keypress,lang.hitch(this,function(evt){
if(evt.charOrCode==keys.ESCAPE&&args.onCancel){
_843.stop(evt);
args.onCancel();
}else{
if(evt.charOrCode===keys.TAB){
_843.stop(evt);
var _856=this.getTopPopup();
if(_856&&_856.onCancel){
_856.onCancel();
}
}
}
})));
if(_851.onCancel&&args.onCancel){
_855.push(_851.on("cancel",args.onCancel));
}
_855.push(_851.on(_851.onExecute?"execute":"change",lang.hitch(this,function(){
var _857=this.getTopPopup();
if(_857&&_857.onExecute){
_857.onExecute();
}
})));
_850.push({widget:_851,parent:args.parent,onExecute:args.onExecute,onCancel:args.onCancel,onClose:args.onClose,handlers:_855});
if(_851.onOpen){
_851.onOpen(best);
}
return best;
},close:function(_858){
var _859=this._stack;
while((_858&&_83b.some(_859,function(elem){
return elem.widget==_858;
}))||(!_858&&_859.length)){
var top=_859.pop(),_85a=top.widget,_85b=top.onClose;
if(_85a.onClose){
_85a.onClose();
}
var h;
while(h=top.handlers.pop()){
h.remove();
}
if(_85a&&_85a.domNode){
this.hide(_85a);
}
if(_85b){
_85b();
}
}
}});
return (_846.popup=new _848());
});
},"dijit/form/_RadioButtonMixin":function(){
define("dijit/form/_RadioButtonMixin",["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/_base/event","dojo/_base/lang","dojo/query","dojo/_base/window","../registry"],function(_85c,_85d,_85e,_85f,lang,_860,win,_861){
return _85d("dijit.form._RadioButtonMixin",null,{type:"radio",_getRelatedWidgets:function(){
var ary=[];
_860("input[type=radio]",this.focusNode.form||win.doc).forEach(lang.hitch(this,function(_862){
if(_862.name==this.name&&_862.form==this.focusNode.form){
var _863=_861.getEnclosingWidget(_862);
if(_863){
ary.push(_863);
}
}
}));
return ary;
},_setCheckedAttr:function(_864){
this.inherited(arguments);
if(!this._created){
return;
}
if(_864){
_85c.forEach(this._getRelatedWidgets(),lang.hitch(this,function(_865){
if(_865!=this&&_865.checked){
_865.set("checked",false);
}
}));
}
},_onClick:function(e){
if(this.checked||this.disabled){
_85f.stop(e);
return false;
}
if(this.readOnly){
_85f.stop(e);
_85c.forEach(this._getRelatedWidgets(),lang.hitch(this,function(_866){
_85e.set(this.focusNode||this.domNode,"checked",_866.checked);
}));
return false;
}
return this.inherited(arguments);
}});
});
},"dijit/layout/_ContentPaneResizeMixin":function(){
define("dijit/layout/_ContentPaneResizeMixin",["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/_base/lang","dojo/query","dojo/_base/sniff","dojo/_base/window","../registry","./utils","../_Contained"],function(_867,_868,_869,_86a,_86b,lang,_86c,has,win,_86d,_86e,_86f){
return _868("dijit.layout._ContentPaneResizeMixin",null,{doLayout:true,isLayoutContainer:true,startup:function(){
if(this._started){
return;
}
var _870=this.getParent();
this._childOfLayoutWidget=_870&&_870.isLayoutContainer;
this._needLayout=!this._childOfLayoutWidget;
this.inherited(arguments);
if(this._isShown()){
this._onShow();
}
if(!this._childOfLayoutWidget){
this.connect(has("ie")?this.domNode:win.global,"onresize",function(){
this._needLayout=!this._childOfLayoutWidget;
this.resize();
});
}
},_checkIfSingleChild:function(){
var _871=_86c("> *",this.containerNode).filter(function(node){
return node.tagName!=="SCRIPT";
}),_872=_871.filter(function(node){
return _869.has(node,"data-dojo-type")||_869.has(node,"dojoType")||_869.has(node,"widgetId");
}),_873=_867.filter(_872.map(_86d.byNode),function(_874){
return _874&&_874.domNode&&_874.resize;
});
if(_871.length==_872.length&&_873.length==1){
this._singleChild=_873[0];
}else{
delete this._singleChild;
}
_86a.toggle(this.containerNode,this.baseClass+"SingleChild",!!this._singleChild);
},resize:function(_875,_876){
if(!this._wasShown&&this.open!==false){
this._onShow();
}
this._resizeCalled=true;
this._scheduleLayout(_875,_876);
},_scheduleLayout:function(_877,_878){
if(this._isShown()){
this._layout(_877,_878);
}else{
this._needLayout=true;
this._changeSize=_877;
this._resultSize=_878;
}
},_layout:function(_879,_87a){
if(_879){
_86b.setMarginBox(this.domNode,_879);
}
var cn=this.containerNode;
if(cn===this.domNode){
var mb=_87a||{};
lang.mixin(mb,_879||{});
if(!("h" in mb)||!("w" in mb)){
mb=lang.mixin(_86b.getMarginBox(cn),mb);
}
this._contentBox=_86e.marginBox2contentBox(cn,mb);
}else{
this._contentBox=_86b.getContentBox(cn);
}
this._layoutChildren();
delete this._needLayout;
},_layoutChildren:function(){
if(this.doLayout){
this._checkIfSingleChild();
}
if(this._singleChild&&this._singleChild.resize){
var cb=this._contentBox||_86b.getContentBox(this.containerNode);
this._singleChild.resize({w:cb.w,h:cb.h});
}else{
_867.forEach(this.getChildren(),function(_87b){
if(_87b.resize){
_87b.resize();
}
});
}
},_isShown:function(){
if(this._childOfLayoutWidget){
if(this._resizeCalled&&"open" in this){
return this.open;
}
return this._resizeCalled;
}else{
if("open" in this){
return this.open;
}else{
var node=this.domNode,_87c=this.domNode.parentNode;
return (node.style.display!="none")&&(node.style.visibility!="hidden")&&!_86a.contains(node,"dijitHidden")&&_87c&&_87c.style&&(_87c.style.display!="none");
}
}
},_onShow:function(){
if(this._needLayout){
this._layout(this._changeSize,this._resultSize);
}
this.inherited(arguments);
this._wasShown=true;
}});
});
},"dijit/_base/window":function(){
define("dijit/_base/window",["dojo/window",".."],function(_87d,_87e){
_87e.getDocumentWindow=function(doc){
return _87d.get(doc);
};
});
},"dijit/_WidgetBase":function(){
define("dijit/_WidgetBase",["require","dojo/_base/array","dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/ready","dojo/Stateful","dojo/topic","dojo/_base/window","./registry"],function(_87f,_880,_881,_882,_883,_884,dom,_885,_886,_887,_888,_889,_88a,lang,on,_88b,_88c,_88d,win,_88e){
if(!_88a.isAsync){
_88b(0,function(){
var _88f=["dijit/_base/manager"];
_87f(_88f);
});
}
var _890={};
function _891(obj){
var ret={};
for(var attr in obj){
ret[attr.toLowerCase()]=true;
}
return ret;
};
function _892(attr){
return function(val){
_885[val?"set":"remove"](this.domNode,attr,val);
this._set(attr,val);
};
};
return _884("dijit._WidgetBase",_88c,{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:_892("lang"),dir:"",_setDirAttr:_892("dir"),textDir:"","class":"",_setClassAttr:{node:"domNode",type:"class"},style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,attributeMap:{},_blankGif:_882.blankGif||_87f.toUrl("dojo/resources/blank.gif"),postscript:function(_893,_894){
this.create(_893,_894);
},create:function(_895,_896){
this.srcNodeRef=dom.byId(_896);
this._connects=[];
this._supportingWidgets=[];
if(this.srcNodeRef&&(typeof this.srcNodeRef.id=="string")){
this.id=this.srcNodeRef.id;
}
if(_895){
this.params=_895;
lang.mixin(this,_895);
}
this.postMixInProperties();
if(!this.id){
this.id=_88e.getUniqueId(this.declaredClass.replace(/\./g,"_"));
}
_88e.add(this);
this.buildRendering();
if(this.domNode){
this._applyAttributes();
var _897=this.srcNodeRef;
if(_897&&_897.parentNode&&this.domNode!==_897){
_897.parentNode.replaceChild(this.domNode,_897);
}
}
if(this.domNode){
this.domNode.setAttribute("widgetId",this.id);
}
this.postCreate();
if(this.srcNodeRef&&!this.srcNodeRef.parentNode){
delete this.srcNodeRef;
}
this._created=true;
},_applyAttributes:function(){
var ctor=this.constructor,list=ctor._setterAttrs;
if(!list){
list=(ctor._setterAttrs=[]);
for(var attr in this.attributeMap){
list.push(attr);
}
var _898=ctor.prototype;
for(var _899 in _898){
if(_899 in this.attributeMap){
continue;
}
var _89a="_set"+_899.replace(/^[a-z]|-[a-zA-Z]/g,function(c){
return c.charAt(c.length-1).toUpperCase();
})+"Attr";
if(_89a in _898){
list.push(_899);
}
}
}
_880.forEach(list,function(attr){
if(this.params&&attr in this.params){
}else{
if(this[attr]){
this.set(attr,this[attr]);
}
}
},this);
for(var _89b in this.params){
this.set(_89b,this[_89b]);
}
},postMixInProperties:function(){
},buildRendering:function(){
if(!this.domNode){
this.domNode=this.srcNodeRef||_887.create("div");
}
if(this.baseClass){
var _89c=this.baseClass.split(" ");
if(!this.isLeftToRight()){
_89c=_89c.concat(_880.map(_89c,function(name){
return name+"Rtl";
}));
}
_886.add(this.domNode,_89c);
}
},postCreate:function(){
},startup:function(){
if(this._started){
return;
}
this._started=true;
_880.forEach(this.getChildren(),function(obj){
if(!obj._started&&!obj._destroyed&&lang.isFunction(obj.startup)){
obj.startup();
obj._started=true;
}
});
},destroyRecursive:function(_89d){
this._beingDestroyed=true;
this.destroyDescendants(_89d);
this.destroy(_89d);
},destroy:function(_89e){
this._beingDestroyed=true;
this.uninitialize();
var c;
while((c=this._connects.pop())){
c.remove();
}
var w;
while((w=this._supportingWidgets.pop())){
if(w.destroyRecursive){
w.destroyRecursive();
}else{
if(w.destroy){
w.destroy();
}
}
}
this.destroyRendering(_89e);
_88e.remove(this.id);
this._destroyed=true;
},destroyRendering:function(_89f){
if(this.bgIframe){
this.bgIframe.destroy(_89f);
delete this.bgIframe;
}
if(this.domNode){
if(_89f){
_885.remove(this.domNode,"widgetId");
}else{
_887.destroy(this.domNode);
}
delete this.domNode;
}
if(this.srcNodeRef){
if(!_89f){
_887.destroy(this.srcNodeRef);
}
delete this.srcNodeRef;
}
},destroyDescendants:function(_8a0){
_880.forEach(this.getChildren(),function(_8a1){
if(_8a1.destroyRecursive){
_8a1.destroyRecursive(_8a0);
}
});
},uninitialize:function(){
return false;
},_setStyleAttr:function(_8a2){
var _8a3=this.domNode;
if(lang.isObject(_8a2)){
_889.set(_8a3,_8a2);
}else{
if(_8a3.style.cssText){
_8a3.style.cssText+="; "+_8a2;
}else{
_8a3.style.cssText=_8a2;
}
}
this._set("style",_8a2);
},_attrToDom:function(attr,_8a4,_8a5){
_8a5=arguments.length>=3?_8a5:this.attributeMap[attr];
_880.forEach(lang.isArray(_8a5)?_8a5:[_8a5],function(_8a6){
var _8a7=this[_8a6.node||_8a6||"domNode"];
var type=_8a6.type||"attribute";
switch(type){
case "attribute":
if(lang.isFunction(_8a4)){
_8a4=lang.hitch(this,_8a4);
}
var _8a8=_8a6.attribute?_8a6.attribute:(/^on[A-Z][a-zA-Z]*$/.test(attr)?attr.toLowerCase():attr);
_885.set(_8a7,_8a8,_8a4);
break;
case "innerText":
_8a7.innerHTML="";
_8a7.appendChild(win.doc.createTextNode(_8a4));
break;
case "innerHTML":
if(typeof WinJS!=="undefined"){
WinJS.Utilities.setInnerHTMLUnsafe(_8a7,_8a4);
}
_8a7.innerHTML=_8a4;
break;
case "class":
_886.replace(_8a7,_8a4,this[attr]);
break;
}
},this);
},get:function(name){
var _8a9=this._getAttrNames(name);
return this[_8a9.g]?this[_8a9.g]():this[name];
},set:function(name,_8aa){
if(typeof name==="object"){
for(var x in name){
this.set(x,name[x]);
}
return this;
}
var _8ab=this._getAttrNames(name),_8ac=this[_8ab.s];
if(lang.isFunction(_8ac)){
var _8ad=_8ac.apply(this,Array.prototype.slice.call(arguments,1));
}else{
var _8ae=this.focusNode&&!lang.isFunction(this.focusNode)?"focusNode":"domNode",tag=this[_8ae].tagName,_8af=_890[tag]||(_890[tag]=_891(this[_8ae])),map=name in this.attributeMap?this.attributeMap[name]:_8ab.s in this?this[_8ab.s]:((_8ab.l in _8af&&typeof _8aa!="function")||/^aria-|^data-|^role$/.test(name))?_8ae:null;
if(map!=null){
this._attrToDom(name,_8aa,map);
}
this._set(name,_8aa);
}
return _8ad||this;
},_attrPairNames:{},_getAttrNames:function(name){
var apn=this._attrPairNames;
if(apn[name]){
return apn[name];
}
var uc=name.replace(/^[a-z]|-[a-zA-Z]/g,function(c){
return c.charAt(c.length-1).toUpperCase();
});
return (apn[name]={n:name+"Node",s:"_set"+uc+"Attr",g:"_get"+uc+"Attr",l:uc.toLowerCase()});
},_set:function(name,_8b0){
var _8b1=this[name];
this[name]=_8b0;
if(this._watchCallbacks&&this._created&&_8b0!==_8b1){
this._watchCallbacks(name,_8b1,_8b0);
}
},on:function(type,func){
return _881.after(this,this._onMap(type),func,true);
},_onMap:function(type){
var ctor=this.constructor,map=ctor._onMap;
if(!map){
map=(ctor._onMap={});
for(var attr in ctor.prototype){
if(/^on/.test(attr)){
map[attr.replace(/^on/,"").toLowerCase()]=attr;
}
}
}
return map[type.toLowerCase()];
},toString:function(){
return "[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]";
},getChildren:function(){
return this.containerNode?_88e.findWidgets(this.containerNode):[];
},getParent:function(){
return _88e.getEnclosingWidget(this.domNode.parentNode);
},connect:function(obj,_8b2,_8b3){
var _8b4=_883.connect(obj,_8b2,this,_8b3);
this._connects.push(_8b4);
return _8b4;
},disconnect:function(_8b5){
var i=_880.indexOf(this._connects,_8b5);
if(i!=-1){
_8b5.remove();
this._connects.splice(i,1);
}
},subscribe:function(t,_8b6){
var _8b7=_88d.subscribe(t,lang.hitch(this,_8b6));
this._connects.push(_8b7);
return _8b7;
},unsubscribe:function(_8b8){
this.disconnect(_8b8);
},isLeftToRight:function(){
return this.dir?(this.dir=="ltr"):_888.isBodyLtr();
},isFocusable:function(){
return this.focus&&(_889.get(this.domNode,"display")!="none");
},placeAt:function(_8b9,_8ba){
if(_8b9.declaredClass&&_8b9.addChild){
_8b9.addChild(this,_8ba);
}else{
_887.place(this.domNode,_8b9,_8ba);
}
return this;
},getTextDir:function(text,_8bb){
return _8bb;
},applyTextDir:function(){
},defer:function(fcn,_8bc){
var _8bd=setTimeout(lang.hitch(this,function(){
_8bd=null;
if(!this._destroyed){
lang.hitch(this,fcn)();
}
}),_8bc||0);
return {remove:function(){
if(_8bd){
clearTimeout(_8bd);
_8bd=null;
}
return null;
}};
}});
});
},"dojo/html":function(){
define(["./_base/kernel","./_base/lang","./_base/array","./_base/declare","./dom","./dom-construct","./parser"],function(dojo,lang,_8be,_8bf,dom,_8c0,_8c1){
lang.getObject("html",true,dojo);
var _8c2=0;
dojo.html._secureForInnerHtml=function(cont){
return cont.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig,"");
};
dojo.html._emptyNode=_8c0.empty;
dojo.html._setNodeContent=function(node,cont){
_8c0.empty(node);
if(cont){
if(typeof cont=="string"){
cont=_8c0.toDom(cont,node.ownerDocument);
}
if(!cont.nodeType&&lang.isArrayLike(cont)){
for(var _8c3=cont.length,i=0;i<cont.length;i=_8c3==cont.length?i+1:0){
_8c0.place(cont[i],node,"last");
}
}else{
_8c0.place(cont,node,"last");
}
}
return node;
};
_8bf("dojo.html._ContentSetter",null,{node:"",content:"",id:"",cleanContent:false,extractContent:false,parseContent:false,parserScope:dojo._scopeName,startup:true,constructor:function(_8c4,node){
lang.mixin(this,_8c4||{});
node=this.node=dom.byId(this.node||node);
if(!this.id){
this.id=["Setter",(node)?node.id||node.tagName:"",_8c2++].join("_");
}
},set:function(cont,_8c5){
if(undefined!==cont){
this.content=cont;
}
if(_8c5){
this._mixin(_8c5);
}
this.onBegin();
this.setContent();
this.onEnd();
return this.node;
},setContent:function(){
var node=this.node;
if(!node){
throw new Error(this.declaredClass+": setContent given no node");
}
try{
node=dojo.html._setNodeContent(node,this.content);
}
catch(e){
var _8c6=this.onContentError(e);
try{
node.innerHTML=_8c6;
}
catch(e){
console.error("Fatal "+this.declaredClass+".setContent could not change content due to "+e.message,e);
}
}
this.node=node;
},empty:function(){
if(this.parseResults&&this.parseResults.length){
_8be.forEach(this.parseResults,function(w){
if(w.destroy){
w.destroy();
}
});
delete this.parseResults;
}
dojo.html._emptyNode(this.node);
},onBegin:function(){
var cont=this.content;
if(lang.isString(cont)){
if(this.cleanContent){
cont=dojo.html._secureForInnerHtml(cont);
}
if(this.extractContent){
var _8c7=cont.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
if(_8c7){
cont=_8c7[1];
}
}
}
this.empty();
this.content=cont;
return this.node;
},onEnd:function(){
if(this.parseContent){
this._parse();
}
return this.node;
},tearDown:function(){
delete this.parseResults;
delete this.node;
delete this.content;
},onContentError:function(err){
return "Error occured setting content: "+err;
},_mixin:function(_8c8){
var _8c9={},key;
for(key in _8c8){
if(key in _8c9){
continue;
}
this[key]=_8c8[key];
}
},_parse:function(){
var _8ca=this.node;
try{
var _8cb={};
_8be.forEach(["dir","lang","textDir"],function(name){
if(this[name]){
_8cb[name]=this[name];
}
},this);
this.parseResults=_8c1.parse({rootNode:_8ca,noStart:!this.startup,inherited:_8cb,scope:this.parserScope});
}
catch(e){
this._onError("Content",e,"Error parsing in _ContentSetter#"+this.id);
}
},_onError:function(type,err,_8cc){
var _8cd=this["on"+type+"Error"].call(this,err);
if(_8cc){
console.error(_8cc,err);
}else{
if(_8cd){
dojo.html._setNodeContent(this.node,_8cd,true);
}
}
}});
dojo.html.set=function(node,cont,_8ce){
if(undefined==cont){
console.warn("dojo.html.set: no cont argument provided, using empty string");
cont="";
}
if(!_8ce){
return dojo.html._setNodeContent(node,cont,true);
}else{
var op=new dojo.html._ContentSetter(lang.mixin(_8ce,{content:cont,node:node}));
return op.set();
}
};
return dojo.html;
});
},"*now":function(r){
r(["dojo/i18n!*preload*dojo/nls/dojo*[\"en-us\",\"en-gb\",\"es-mx\",\"es\",\"pt-br\",\"ROOT\"]"]);
}}});
(function(){
var _8cf=this.require;
_8cf({cache:{}});
!_8cf.async&&_8cf(["dojo"]);
_8cf.boot&&_8cf.apply(null,_8cf.boot);
})();
