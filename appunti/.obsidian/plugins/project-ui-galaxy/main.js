var Do=Object.defineProperty;var zu=Object.getOwnPropertyDescriptor;var ku=Object.getOwnPropertyNames;var Gu=Object.prototype.hasOwnProperty;var Vu=(i,t)=>{for(var e in t)Do(i,e,{get:t[e],enumerable:!0})},Hu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ku(t))!Gu.call(i,s)&&s!==e&&Do(i,s,{get:()=>t[s],enumerable:!(n=zu(t,s))||n.enumerable});return i};var Wu=i=>Hu(Do({},"__esModule",{value:!0}),i);var x_={};Vu(x_,{default:()=>Lo,vaultGraph:()=>dc});module.exports=Wu(x_);var Nn=require("obsidian");var Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$c=0,dl=1,Kc=2;var rr=1,jc=2,xs=3,bi=0,rn=1,Gn=2,Fi=0,Ei=1,Vn=2,fl=3,pl=4,Qc=5;var Oi=100,th=101,eh=102,nh=103,ih=104,sh=200,rh=201,ah=202,oh=203,ml=204,gl=205,lh=206,ch=207,hh=208,uh=209,dh=210,fh=211,ph=212,mh=213,gh=214,Jr=0,$r=1,Kr=2,as=3,jr=4,Qr=5,ta=6,ea=7,_l=0,_h=1,xh=2,Hn=0,xl=1,yl=2,vl=3,Ml=4,Sl=5,bl=6,El=7;var Tl=300,Bi=301,ys=302,Ia=303,La=304,na=1e3,Bn=1001,ia=1002,Ge=1003,yh=1004;var ar=1005;var en=1006,Da=1007;var si=1008;var _n=1009,wl=1010,Al=1011,vs=1012,Na=1013,Cn=1014,Pn=1015,In=1016,Ua=1017,Fa=1018,zi=1020,Rl=35902,Cl=35899,Pl=1021,Il=1022,Ln=1023,ei=1026,ri=1027,Ll=1028,Oa=1029,Ti=1030,Ba=1031;var za=1033,or=33776,lr=33777,cr=33778,hr=33779,ka=35840,Ga=35841,Va=35842,Ha=35843,Wa=36196,Xa=37492,qa=37496,Ya=37488,Za=37489,ur=37490,Ja=37491,$a=37808,Ka=37809,ja=37810,Qa=37811,to=37812,eo=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,ho=36492,uo=36494,fo=36495,po=36283,mo=36284,dr=36285,go=36286;var Us=2300,sa=2301,Yr=2302,sl=2303,rl=2400,al=2401,ol=2402;var vh=3200;var Dl=0,Mh=1,ai="",De="srgb",Fs="srgb-linear",Os="linear",de="srgb";var Zr=7680;var Sh=519,bh=512,Eh=513,Th=514,Nl=515,wh=516,Ah=517,Ul=518,Fl=519,Ol=35044;var Bl="300 es",vn=2e3,Bs=2001;function Xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rh(){let i=zs("canvas");return i.style.display="block",i}var mc={},os=null;function ks(...i){let t="THREE."+i.shift();os?os("log",t,...i):console.log(t,...i)}function Ch(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Ch(i);let t="THREE."+i.shift();if(os)os("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=Ch(i);let t="THREE."+i.shift();if(os)os("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ls(...i){let t=i.join(" ");t in mc||(mc[t]=!0,Bt(...i))}function Ph(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ih={[Jr]:Jr,[Kr]:ta,[jr]:jr,[as]:Qr,[$r]:$r,[ta]:Kr,[ea]:ea,[Qr]:as},Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=1234567,Ds=Math.PI/180,ls=180/Math.PI;function wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function Yu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ns(i,t,e){return(1-e)*i+e*t}function Ju(i,t,e,n){return Ns(i,t,1-Math.exp(-e*n))}function $u(i,t=1){return t-Math.abs(zl(i,t*2)-t)}function Ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function td(i,t){return i+Math.random()*(t-i)}function ed(i){return i*(.5-Math.random())}function nd(i){i!==void 0&&(gc=i);let t=gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function id(i){return i*Ds}function sd(i){return i*ls}function rd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function od(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _o(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gl(i,t){if(t.constructor===Float32Array)return i;let e=_o(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Vl(i,t){if(t.constructor===Float32Array)return i;let e=_o(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Hl={DEG2RAD:Ds,RAD2DEG:ls,generateUUID:wi,clamp:jt,euclideanModulo:zl,mapLinear:Yu,inverseLerp:Zu,lerp:Ns,damp:Ju,pingpong:$u,smoothstep:Ku,smootherstep:ju,randInt:Qu,randFloat:td,randFloatSpread:ed,seededRandom:nd,degToRad:id,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:ad,floorPowerOfTwo:kl,setQuaternionFromProperEuler:od,normalize:Vl,denormalize:Gl},zt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(m!==M||l!==u||c!==p||h!==g){let d=l*u+c*p+h*g+m*M;d<0&&(u=-u,p=-p,g=-g,M=-M,d=-d);let f=1-o;if(d<.9995){let S=Math.acos(d),A=Math.sin(S);f=Math.sin(f*S)/A,o=Math.sin(o*S)/A,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,m=m*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,m=m*f+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=S,c*=S,h*=S,m*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*m+l*p-c*u,t[e+1]=l*g+h*u+c*m-o*p,t[e+2]=c*g+h*p+o*u-l*m,t[e+3]=h*g-o*m-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*p*g,this._y=c*p*m-u*h*g,this._z=c*h*g+u*p*m,this._w=c*h*m-u*p*g;break;case"YXZ":this._x=u*h*m+c*p*g,this._y=c*p*m-u*h*g,this._z=c*h*g-u*p*m,this._w=c*h*m+u*p*g;break;case"ZXY":this._x=u*h*m-c*p*g,this._y=c*p*m+u*h*g,this._z=c*h*g+u*p*m,this._w=c*h*m-u*p*g;break;case"ZYX":this._x=u*h*m-c*p*g,this._y=c*p*m+u*h*g,this._z=c*h*g-u*p*m,this._w=c*h*m+u*p*g;break;case"YZX":this._x=u*h*m+c*p*g,this._y=c*p*m+u*h*g,this._z=c*h*g-u*p*m,this._w=c*h*m-u*p*g;break;case"XZY":this._x=u*h*m-c*p*g,this._y=c*p*m-u*h*g,this._z=c*h*g+u*p*m,this._w=c*h*m+u*p*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new D,_c=new pn,Yt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],p=n[5],g=n[8],M=s[0],d=s[3],f=s[6],S=s[1],A=s[4],b=s[7],v=s[2],w=s[5],_=s[8];return r[0]=a*M+o*S+l*v,r[3]=a*d+o*A+l*w,r[6]=a*f+o*b+l*_,r[1]=c*M+h*S+m*v,r[4]=c*d+h*A+m*w,r[7]=c*f+h*b+m*_,r[2]=u*M+p*S+g*v,r[5]=u*d+p*A+g*w,r[8]=u*f+p*b+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*m+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=m*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new Yt,xc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){let i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Os:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:de,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var ne=ld();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=zs("canvas")),Vi.width=t.width,Vi.height=t.height;let s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var hd=0,Oo=new D,nn=class i extends Rn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=en,a=si,o=Ln,l=_n,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=wi(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Tl;nn.DEFAULT_ANISOTROPY=1;var Te=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],u=l[1],p=l[5],g=l[9],M=l[2],d=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-M)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+M)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,b=(p+1)/2,v=(f+1)/2,w=(h+u)/4,_=(m+M)/4,E=(g+d)/4;return A>b&&A>v?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=_/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=E/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=_/r,s=E/r),this.set(n,s,r,e),this}let S=Math.sqrt((d-g)*(d-g)+(m-M)*(m-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(m-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends Rn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,u,p,g,M,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,u,p,g,M,d)}set(t,e,n,s,r,a,o,l,c,h,m,u,p,g,M,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=m,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*m,g=o*h,M=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=p+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*m,g=c*h,M=c*m;e[0]=u+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*m,g=c*h,M=c*m;e[0]=u-M*o,e[4]=-a*m,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*m,g=o*h,M=o*m;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+M,e[1]=l*m,e[5]=M*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*m,e[8]=g*m+p,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*m+g,e[10]=u-M*m}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=u*m+M,e[5]=a*h,e[9]=p*m-g,e[2]=g*m-p,e[6]=o*h,e[10]=M*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),li.crossVectors(n,un),li.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),li.crossVectors(n,un)),li.normalize(),vr.crossVectors(un,li),s[0]=li.x,s[4]=vr.x,s[8]=un.x,s[1]=li.y,s[5]=vr.y,s[9]=un.y,s[2]=li.z,s[6]=vr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],p=n[13],g=n[2],M=n[6],d=n[10],f=n[14],S=n[3],A=n[7],b=n[11],v=n[15],w=s[0],_=s[4],E=s[8],B=s[12],P=s[1],U=s[5],G=s[9],j=s[13],L=s[2],J=s[6],Y=s[10],H=s[14],ut=s[3],$=s[7],rt=s[11],at=s[15];return r[0]=a*w+o*P+l*L+c*ut,r[4]=a*_+o*U+l*J+c*$,r[8]=a*E+o*G+l*Y+c*rt,r[12]=a*B+o*j+l*H+c*at,r[1]=h*w+m*P+u*L+p*ut,r[5]=h*_+m*U+u*J+p*$,r[9]=h*E+m*G+u*Y+p*rt,r[13]=h*B+m*j+u*H+p*at,r[2]=g*w+M*P+d*L+f*ut,r[6]=g*_+M*U+d*J+f*$,r[10]=g*E+M*G+d*Y+f*rt,r[14]=g*B+M*j+d*H+f*at,r[3]=S*w+A*P+b*L+v*ut,r[7]=S*_+A*U+b*J+v*$,r[11]=S*E+A*G+b*Y+v*rt,r[15]=S*B+A*j+b*H+v*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],u=t[10],p=t[14],g=t[3],M=t[7],d=t[11],f=t[15],S=l*p-c*u,A=o*p-c*m,b=o*u-l*m,v=a*p-c*h,w=a*u-l*h,_=a*m-o*h;return e*(M*S-d*A+f*b)-n*(g*S-d*v+f*w)+s*(g*A-M*v+f*_)-r*(g*b-M*w+d*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],u=t[10],p=t[11],g=t[12],M=t[13],d=t[14],f=t[15],S=e*o-n*a,A=e*l-s*a,b=e*c-r*a,v=n*l-s*o,w=n*c-r*o,_=s*c-r*l,E=h*M-m*g,B=h*d-u*g,P=h*f-p*g,U=m*d-u*M,G=m*f-p*M,j=u*f-p*d,L=S*j-A*G+b*U+v*P-w*B+_*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/L;return t[0]=(o*j-l*G+c*U)*J,t[1]=(s*G-n*j-r*U)*J,t[2]=(M*_-d*w+f*v)*J,t[3]=(u*w-m*_-p*v)*J,t[4]=(l*P-a*j-c*B)*J,t[5]=(e*j-s*P+r*B)*J,t[6]=(d*b-g*_-f*A)*J,t[7]=(h*_-u*b+p*A)*J,t[8]=(a*G-o*P+c*E)*J,t[9]=(n*P-e*G-r*E)*J,t[10]=(g*w-M*b+f*S)*J,t[11]=(m*b-h*w-p*S)*J,t[12]=(o*B-a*U-l*E)*J,t[13]=(e*U-n*B+s*E)*J,t[14]=(M*A-g*v-d*S)*J,t[15]=(h*v-m*A+u*S)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,u=r*c,p=r*h,g=r*m,M=a*h,d=a*m,f=o*m,S=l*c,A=l*h,b=l*m,v=n.x,w=n.y,_=n.z;return s[0]=(1-(M+f))*v,s[1]=(p+b)*v,s[2]=(g-A)*v,s[3]=0,s[4]=(p-b)*w,s[5]=(1-(u+f))*w,s[6]=(d+S)*w,s[7]=0,s[8]=(g+A)*_,s[9]=(d-S)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Hi.set(s[0],s[1],s[2]).length(),o=Hi.set(s[4],s[5],s[6]).length(),l=Hi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);let c=1/a,h=1/o,m=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=m,Tn.elements[9]*=m,Tn.elements[10]*=m,e.setFromRotationMatrix(Tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Bs)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===vn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Bs)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hi=new D,Tn=new xe,ud=new D(0,0,0),dd=new D(1,1,1),li=new D,vr=new D,un=new D,vc=new xe,Mc=new pn,fi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fd=0,Sc=new D,Wi=new pn,Zn=new xe,Mr=new D,Es=new D,pd=new D,md=new pn,bc=new D(1,0,0),Ec=new D(0,1,0),Tc=new D(0,0,1),wc={type:"added"},gd={type:"removed"},Xi={type:"childadded",child:null},Bo={type:"childremoved",child:null},sn=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new fi,n=new pn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Es,Mr,this.up):Zn.lookAt(Mr,Es,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new D(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let d=e.getJointPose(M,n),f=this._getHandJoint(c,M);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=zl(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ne.workingToColorSpace(Ze.copy(this),t),Math.round(jt(Ze.r*255,0,255))*65536+Math.round(jt(Ze.g*255,0,255))*256+Math.round(jt(Ze.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=De){ne.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Sr);let n=Ns(ci.h,Sr.h,e),s=Ns(ci.s,Sr.s,e),r=Ns(ci.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new qt;qt.NAMES=Lh;var Vs=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new D,Jn=new D,ko=new D,$n=new D,qi=new D,Yi=new D,Ac=new D,Go=new D,Vo=new D,Ho=new D,Wo=new Te,Xo=new Te,qo=new Te,Qn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Jn.subVectors(n,e),ko.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(Jn),l=wn.dot(ko),c=Jn.dot(Jn),h=Jn.dot(ko),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Jn.subVectors(t,e),wn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Yi.subVectors(r,n),Go.subVectors(t,n);let l=qi.dot(Go),c=Yi.dot(Go);if(l<=0&&c<=0)return e.copy(n);Vo.subVectors(t,s);let h=qi.dot(Vo),m=Yi.dot(Vo);if(h>=0&&m<=h)return e.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(qi,a);Ho.subVectors(t,r);let p=qi.dot(Ho),g=Yi.dot(Ho);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Yi,o);let d=h*g-p*m;if(d<=0&&m-h>=0&&p-g>=0)return Ac.subVectors(r,s),o=(m-h)/(m-h+(p-g)),e.copy(s).addScaledVector(Ac,o);let f=1/(d+M+u);return a=M*f,o=u*f,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),Er.subVectors(this.max,Ts),Zi.subVectors(t.a,Ts),Ji.subVectors(t.b,Ts),$i.subVectors(t.c,Ts),hi.subVectors(Ji,Zi),ui.subVectors($i,Ji),Pi.subVectors(Zi,$i);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Pi.z,Pi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Pi.z,0,-Pi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Pi.y,Pi.x,0];return!Yo(e,Zi,Ji,$i,Er)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Zi,Ji,$i,Er))?!1:(Tr.crossVectors(hi,ui),e=[Tr.x,Tr.y,Tr.z],Yo(e,Zi,Ji,$i,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new D,new D,new D,new D,new D,new D,new D,new D],An=new D,br=new pi,Zi=new D,Ji=new D,$i=new D,hi=new D,ui=new D,Pi=new D,Ts=new D,Er=new D,Tr=new D,Ii=new D;function Yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Le=new D,wr=new zt,xd=0,Me=class extends Rn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?_o(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gl(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Vl(t,this.array)}};var Hs=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Je=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},yd=new pi,ws=new D,Zo=new D,mi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Zo)),this.expandByPoint(ws.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vd=0,yn=new xe,Jo=new sn,Ki=new D,dn=new pi,As=new pi,ke=new D,Xe=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Ws:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(dn.min,As.min),dn.expandByPoint(ke),ke.addVectors(dn.max,As.max),dn.expandByPoint(ke)):(dn.expandByPoint(As.min),dn.expandByPoint(As.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ke.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),ke.add(Ki)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new D,l[B]=new D;let h=new D,m=new D,u=new D,p=new zt,g=new zt,M=new zt,d=new D,f=new D;function S(B,P,U){c[B]=c[P]=c[U]=1,h.fromBufferAttribute(n,B),m.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,P),M.fromBufferAttribute(r,U),m.sub(h),u.sub(h),g.sub(p),M.sub(p);let G=1/(g.x*M.y-M.x*g.y);isFinite(G)&&(d.copy(m).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(G),f.copy(u).multiplyScalar(g.x).addScaledVector(m,-M.x).multiplyScalar(G),o[B].add(d),o[P].add(d),o[U].add(d),l[B].add(f),l[P].add(f),l[U].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let B=0,P=A.length;B<P;++B){let U=A[B],G=U.start,j=U.count;for(let L=G,J=G+j;L<J;L+=3)S(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let b=new D,v=new D,w=new D,_=new D;function E(B){w.fromBufferAttribute(s,B),_.copy(w);let P=o[B];b.copy(P),b.sub(w.multiplyScalar(w.dot(P))).normalize(),v.crossVectors(_,P);let G=v.dot(l[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,G)}for(let B=0,P=n.count;B<P;++B)c[B]&&E(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,m=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),M=t.getX(u+1),d=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,d),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let M=0,d=l.length;M<d;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Me(u,h,m)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let p=c[m];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,p=m.length;u<p;u++)h.push(m[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},la=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Rc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Rc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Rc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=wi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Qe=new D,Xs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?_o(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gl(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Vl(t,this.data.array)}},$o=new D,Md=new D,Sd=new Yt,fn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(Md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sd.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bd=0,zn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ei,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ds=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ji,Rs=new D,Qi=new D,ts=new D,es=new zt,Cs=new zt,Dh=new xe,Ar=new D,Ps=new D,Rr=new D,Cc=new zt,Ko=new zt,Pc=new zt,qs=class extends sn{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new la(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Xs(n,3,0,!1)),ji.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new zt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Cr(Ar.set(-.5,-.5,0),ts,a,Qi,s,r),Cr(Ps.set(.5,-.5,0),ts,a,Qi,s,r),Cr(Rr.set(.5,.5,0),ts,a,Qi,s,r),Cc.set(0,0),Ko.set(1,0),Pc.set(1,1);let o=t.ray.intersectTriangle(Ar,Ps,Rr,!1,Rs);if(o===null&&(Cr(Ps.set(-.5,.5,0),ts,a,Qi,s,r),Ko.set(0,1),o=t.ray.intersectTriangle(Ar,Rr,Ps,!1,Rs),o===null))return;let l=t.ray.origin.distanceTo(Rs);l<t.near||l>t.far||e.push({distance:l,point:Rs.clone(),uv:Qn.getInterpolation(Rs,Ar,Ps,Rr,Cc,Ko,Pc,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Cr(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*es.x-s*es.y,Cs.y=s*es.x+r*es.y):Cs.copy(es),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(Dh)}var jn=new D,jo=new D,Pr=new D,Ir=new D,ni=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Ir.copy(this.origin).sub(jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=Ir.dot(this.direction),l=-Ir.dot(Pr),c=Ir.lengthSq(),h=Math.abs(1-a*a),m,u,p,g;if(h>0)if(m=a*l-o,u=a*o-l,g=r*h,m>=0)if(u>=-g)if(u<=g){let M=1/h;m*=M,u*=M,p=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u<=-g?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c):u<=g?(m=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(jo).addScaledVector(Pr,u),p}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,d=e.z-a.z,f=n.x-a.x,S=n.y-a.y,A=n.z-a.z,b=Math.abs(l),v=Math.abs(c),w=Math.abs(h),_,E,B,P,U,G,j,L,J,Y,H,ut;if(b>=v&&b>=w?(B=l,G=m,J=g,ut=f,l>=0?(_=c,E=h,P=u,U=p,j=M,L=d,Y=S,H=A):(_=h,E=c,P=p,U=u,j=d,L=M,Y=A,H=S)):v>=w?(B=c,G=u,J=M,ut=S,c>=0?(_=h,E=l,P=p,U=m,j=d,L=g,Y=A,H=f):(_=l,E=h,P=m,U=p,j=g,L=d,Y=f,H=A)):(B=h,G=p,J=d,ut=A,h>=0?(_=l,E=c,P=m,U=u,j=g,L=M,Y=f,H=S):(_=c,E=l,P=u,U=m,j=M,L=g,Y=S,H=f)),B===0)return null;let $=_/B,rt=E/B,at=1/B,Lt=P-$*G,Gt=U-rt*G,et=j-$*J,Et=L-rt*J,Pt=Y-$*ut,F=H-rt*ut,W=Pt*Et-F*et,_t=Lt*F-Gt*Pt,At=et*Gt-Et*Lt;if(s){if(W<0||_t<0||At<0)return null}else if((W<0||_t<0||At<0)&&(W>0||_t>0||At>0))return null;let pt=W+_t+At;if(pt===0)return null;let It=at*(W*G+_t*J+At*ut);return(pt>0?It<0:It>0)?null:this.at(It/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ca=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ic=new xe,Li=new ni,Lr=new mi,Lc=new D,Dr=new D,Nr=new D,Ur=new D,Qo=new D,Fr=new D,Dc=new D,Or=new D,Sn=class extends sn{constructor(t=new Xe,e=new ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Qo.fromBufferAttribute(m,t),a?Fr.addScaledVector(Qo,h):Fr.addScaledVector(Qo.sub(e),h))}e.add(Fr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Lr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Lr,Lc)===null||Li.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Ic.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let d=u[g],f=a[d.materialIndex],S=Math.max(d.start,p.start),A=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let b=S,v=A;b<v;b+=3){let w=o.getX(b),_=o.getX(b+1),E=o.getX(b+2);s=Br(this,f,t,n,c,h,m,w,_,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let d=g,f=M;d<f;d+=3){let S=o.getX(d),A=o.getX(d+1),b=o.getX(d+2);s=Br(this,a,t,n,c,h,m,S,A,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let d=u[g],f=a[d.materialIndex],S=Math.max(d.start,p.start),A=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let b=S,v=A;b<v;b+=3){let w=b,_=b+1,E=b+2;s=Br(this,f,t,n,c,h,m,w,_,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let d=g,f=M;d<f;d+=3){let S=d,A=d+1,b=d+2;s=Br(this,a,t,n,c,h,m,S,A,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Ed(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:i}}function Br(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Dr),i.getVertexPosition(l,Nr),i.getVertexPosition(c,Ur);let h=Ed(i,t,e,n,Dr,Nr,Ur,Dc);if(h){let m=new D;Qn.getBarycoord(Dc,Dr,Nr,Ur,m),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,l,c,m,new zt)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,l,c,m,new zt)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,l,c,m,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Qn.getNormal(Dr,Nr,Ur,u.normal),h.face=u,h.barycoord=m}return h}var ha=class extends nn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,h=Ge,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ys=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Di=new mi,Td=new zt(.5,.5),zr=new D,Ni=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],p=r[7],g=r[8],M=r[9],d=r[10],f=r[11],S=r[12],A=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,p-h,f-g,v-S).normalize(),s[1].setComponents(c+a,p+h,f+g,v+S).normalize(),s[2].setComponents(c+o,p+m,f+M,v+A).normalize(),s[3].setComponents(c-o,p-m,f-M,v-A).normalize(),n)s[4].setComponents(l,u,d,b).normalize(),s[5].setComponents(c-l,p-u,f-d,v-b).normalize();else if(s[4].setComponents(c-l,p-u,f-d,v-b).normalize(),e===vn)s[5].setComponents(c+l,p+u,f+d,v+b).normalize();else if(e===Bs)s[5].setComponents(l,u,d,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=Td.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nc=new xe,ua=class i{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Nc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ni),n[s].setFromProjectionMatrix(Nc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ni),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var gi=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new D,fa=new D,Uc=new xe,Is=new ni,kr=new mi,tl=new D,Fc=new D,fs=class extends sn{constructor(t=new Xe,e=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new Je(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Uc.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Uc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=p,d=g-1;M<d;M+=c){let f=h.getX(M),S=h.getX(M+1),A=Gr(this,t,Is,l,f,S,M);A&&e.push(A)}if(this.isLineLoop){let M=h.getX(g-1),d=h.getX(p),f=Gr(this,t,Is,l,M,d,g-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=p,d=g-1;M<d;M+=c){let f=Gr(this,t,Is,l,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){let M=Gr(this,t,Is,l,g-1,p,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,tl,Fc)>n)return;tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tl);if(!(c<t.near||c>t.far))return{distance:c,point:Fc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Oc=new D,Bc=new D,ps=class extends fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Oc.fromBufferAttribute(e,s),Bc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oc.distanceTo(Bc);t.setAttribute("lineDistance",new Je(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pa=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zc=new xe,ll=new ni,Vr=new mi,Hr=new D,kn=class extends sn{constructor(t=new Xe,e=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;zc.copy(s).invert(),ll.copy(t.ray).applyMatrix4(zc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,M=p;g<M;g++){let d=c.getX(g);Hr.fromBufferAttribute(m,d),kc(Hr,d,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let g=u,M=p;g<M;g++)Hr.fromBufferAttribute(m,g),kc(Hr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kc(i,t,e,n,s,r,a){let o=ll.distanceSqToPoint(i);if(o<e){let l=new D;ll.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Zs=class extends nn{constructor(t=[],e=Bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_i=class extends nn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends nn{constructor(t,e,n=Cn,s,r,a,o=Ge,l=Ge,c,h=ei,m=1){if(h!==ei&&h!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Js=class extends ii{constructor(t,e=Cn,n=Bi,s,r,a=Ge,o=Ge,l,c=ei){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$s=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ms=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(m,2));function g(M,d,f,S,A,b,v,w,_,E,B){let P=b/_,U=v/E,G=b/2,j=v/2,L=w/2,J=_+1,Y=E+1,H=0,ut=0,$=new D;for(let rt=0;rt<Y;rt++){let at=rt*U-j;for(let Lt=0;Lt<J;Lt++){let Gt=Lt*P-G;$[M]=Gt*S,$[d]=at*A,$[f]=L,c.push($.x,$.y,$.z),$[M]=0,$[d]=0,$[f]=w>0?1:-1,h.push($.x,$.y,$.z),m.push(Lt/_),m.push(1-rt/E),H+=1}}for(let rt=0;rt<E;rt++)for(let at=0;at<_;at++){let Lt=u+at+J*rt,Gt=u+at+J*(rt+1),et=u+(at+1)+J*(rt+1),Et=u+(at+1)+J*rt;l.push(Lt,Gt,Et),l.push(Gt,et,Et),ut+=6}o.addGroup(p,ut,B),p+=ut,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ma=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new zt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new xe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function Wl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+m)+(l-o)/m;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Gc=new D,Vc=new D,el=new Wl,nl=new Wl,il=new Wl,Ks=class extends ma{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vc.subVectors(s[0],s[1]).add(s[0]),c=Vc);let m=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(m),p),M=Math.pow(m.distanceToSquared(u),p),d=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),d<1e-4&&(d=M),el.initNonuniformCatmullRom(c.x,m.x,u.x,h.x,g,M,d),nl.initNonuniformCatmullRom(c.y,m.y,u.y,h.y,g,M,d),il.initNonuniformCatmullRom(c.z,m.z,u.z,h.z,g,M,d)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,m.x,u.x,h.x,this.tension),nl.initCatmullRom(c.y,m.y,u.y,h.y,this.tension),il.initCatmullRom(c.z,m.z,u.z,h.z,this.tension));return n.set(el.calc(l),nl.calc(l),il.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Ui=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,u=e/l,p=[],g=[],M=[],d=[];for(let f=0;f<h;f++){let S=f*u-a;for(let A=0;A<c;A++){let b=A*m-r;g.push(b,-S,0),M.push(0,0,1),d.push(A/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let A=S+c*f,b=S+c*(f+1),v=S+1+c*(f+1),w=S+1+c*f;p.push(A,b,w),p.push(b,v,w)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(M,3)),this.setAttribute("uv",new Je(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Hc(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=ki(i[e]);for(let s in n)t[s]=n[s]}return t}function Hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Nh={clone:ki,merge:$e},Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ga=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _a=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var js=class extends gi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ya=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=t,o=2*e-n;break;case ol:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case al:a=t,l=2*n-e;break;case ol:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,d=M*g,f=-u*d+2*u*M-u*g,S=(1+u)*d+(-1.5-2*u)*M+(-.5+u)*g+1,A=(-1-p)*d+(1.5+p)*M+.5*g,b=p*d-p*M;for(let v=0;v!==o;++v)r[v]=f*a[h+v]+S*a[c+v]+A*a[l+v]+b*a[m+v];return r}},va=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},Ma=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let g=(n-e)/(s-e),M=1-g;for(let d=0;d!==o;++d)r[d]=a[c+d]*M+a[l+d]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[c+g],d=a[l+g],f=p*u+g*2,S=m[f],A=m[f+1],b=t*u+g*2,v=h[b],w=h[b+1],_=Pd(n,e,S,v,s);r[g]=Uh(_,M,A,w,d)}return r}};function Uh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Cd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Pd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Uh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Cd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ns(e,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ns(t.times,Array),values:ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wr(t.settings)&&(n.settings={inTangents:ns(t.settings.inTangents,Array),outTangents:ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Us:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case Yr:e=this.InterpolantFactoryMethodSmooth;break;case sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Yr;case this.InterpolantFactoryMethodBezier:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Wr(this.settings)&&(Wc(this.settings.inTangents,t),Wc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wr(this.settings)&&(Xc(this.settings.inTangents,t),Xc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&qu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,u=m-n,p=m+n;for(let g=0;g!==n;++g){let M=e[m+g];if(M!==e[u+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[m+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Xc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=sa;var yi=class extends gn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Us;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var Ea=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var Ta=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qs=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends gn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Us;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="vector";var Aa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let p=c[m],g=c[m+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fh=new Aa,Ra=class{constructor(t){this.manager=t!==void 0?t:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=new D,qr=new pn,On=new D,tr=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xr,qr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xr,qr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new D,qc=new zt,Yc=new zt,tn=class extends tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,qc,Yc),e.subVectors(Yc,qc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ca=class extends tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var er=class extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var is=-90,ss=1,gs=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new tn(is,ss,t,e);r.layers=this.layers,this.add(r);let a=new tn(is,ss,t,e);a.layers=this.layers,this.add(a);let o=new tn(is,ss,t,e);o.layers=this.layers,this.add(o);let l=new tn(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new tn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pa=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ql="\\[\\]\\.:\\/",Id=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Ld="[^"+ql.replace("\\.","")+"]",Dd=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Nd=/(WCOD+)?/.source.replace("WCOD",Ld),Ud=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Od=new RegExp("^"+Dd+Nd+Ud+Fd+"$"),Bd=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Id,"")}static parseTrackName(t){let e=Od.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=cl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var Zc=new xe,nr=class{constructor(t,e,n=0,s=1/0){this.ray=new ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(Jc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(Jc),n}};function Jc(i,t){return i.distance-t.distance}function hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],t,e,!0)}}var ir=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},_s=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ul=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var sr=class extends Rn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Zl(i,t,e,n){let s=zd(n);switch(e){case Pl:return i*t;case Ll:return i*t/s.components*s.byteLength;case Oa:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case Il:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case za:return i*t*4/s.components*s.byteLength;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(i,8)*Math.max(t,8)/2;case Wa:case Xa:case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case ur:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ho:case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dr:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zd(i){switch(i){case _n:case wl:return{byteLength:1,components:1};case vs:case Al:case In:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case Cn:case Na:case Pn:return{byteLength:4,components:1};case Rl:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function su(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<m.length;p++){let g=m[u],M=m[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,m[u]=M)}m.length=u+1;for(let p=0,g=m.length;p<g;p++){let M=m[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ap=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Vd,alphahash_pars_fragment:Hd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:qd,alphatest_pars_fragment:Yd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:$d,batching_vertex:Kd,begin_vertex:jd,beginnormal_vertex:Qd,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:uf,common:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:xf,colorspace_pars_fragment:yf,envmap_fragment:vf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:Sf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Nf,envmap_vertex:Ef,fog_vertex:Tf,fog_pars_vertex:wf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Lf,lights_pars_begin:Df,lights_toon_fragment:Uf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:kf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Hf,lightprobes_pars_fragment:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Zf,map_fragment:Jf,map_pars_fragment:$f,map_particle_fragment:Kf,map_particle_pars_fragment:jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:tp,morphinstance_vertex:ep,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:xp,project_vertex:yp,dithering_fragment:vp,dithering_pars_fragment:Mp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Tp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ap,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Ip,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:kp,worldpos_vertex:Gp,background_vert:Vp,background_frag:Hp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:qp,cube_frag:Yp,depth_vert:Zp,depth_frag:Jp,distance_vert:$p,distance_frag:Kp,equirect_vert:jp,equirect_frag:Qp,linedashed_vert:tm,linedashed_frag:em,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:xm,shadow_frag:ym,sprite_vert:vm,sprite_frag:Mm},wt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Xn={basic:{uniforms:$e([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:$e([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:$e([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:$e([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:$e([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:$e([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:$e([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:$e([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:$e([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:$e([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:$e([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:$e([wt.common,wt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:$e([wt.lights,wt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Xn.physical={uniforms:$e([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var xo={r:0,b:0,g:0},Sm=new xe,ru=new Yt;ru.set(-1,0,0,0,1,0,0,0,1);function bm(i,t,e,n,s,r){let a=new qt(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let b=S.backgroundBlurriness>0;A=t.get(A,b)}return A}function g(S){let A=!1,b=p(S);b===null?d(a,o):b&&b.isColor&&(d(b,1),A=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,A){let b=p(A);b&&b.isCubeTexture?(c===void 0&&(c=new Sn(new ms(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ki(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ru),c.material.toneMapped=ne.getTransfer(b.colorSpace)!==de,(h!==b||m!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,m=b.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Sn(new Ui(2,2),new ln({name:"BackgroundMaterial",uniforms:ki(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ne.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||m!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,m=b.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,A){S.getRGB(xo,Xl(i)),e.buffers.color.setClear(xo.r,xo.g,xo.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,d(a,o)},render:g,addToRenderList:M,dispose:f}}function Em(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,G,j,L,J){let Y=!1,H=m(U,L,j,G);r!==H&&(r=H,c(r.object)),Y=p(U,L,j,J),Y&&g(U,L,j,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(U,G,j,L),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function m(U,G,j,L){let J=L.wireframe===!0,Y=n[G.id];Y===void 0&&(Y={},n[G.id]=Y);let H=U.isInstancedMesh===!0?U.id:0,ut=Y[H];ut===void 0&&(ut={},Y[H]=ut);let $=ut[j.id];$===void 0&&($={},ut[j.id]=$);let rt=$[J];return rt===void 0&&(rt=u(l()),$[J]=rt),rt}function u(U){let G=[],j=[],L=[];for(let J=0;J<e;J++)G[J]=0,j[J]=0,L[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,G,j,L){let J=r.attributes,Y=G.attributes,H=0,ut=j.getAttributes();for(let $ in ut)if(ut[$].location>=0){let at=J[$],Lt=Y[$];if(Lt===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Lt=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Lt=U.instanceColor)),at===void 0||at.attribute!==Lt||Lt&&at.data!==Lt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(U,G,j,L){let J={},Y=G.attributes,H=0,ut=j.getAttributes();for(let $ in ut)if(ut[$].location>=0){let at=Y[$];at===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));let Lt={};Lt.attribute=at,at&&at.data&&(Lt.data=at.data),J[$]=Lt,H++}r.attributes=J,r.attributesNum=H,r.index=L}function M(){let U=r.newAttributes;for(let G=0,j=U.length;G<j;G++)U[G]=0}function d(U){f(U,0)}function f(U,G){let j=r.newAttributes,L=r.enabledAttributes,J=r.attributeDivisors;j[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),J[U]!==G&&(i.vertexAttribDivisor(U,G),J[U]=G)}function S(){let U=r.newAttributes,G=r.enabledAttributes;for(let j=0,L=G.length;j<L;j++)G[j]!==U[j]&&(i.disableVertexAttribArray(j),G[j]=0)}function A(U,G,j,L,J,Y,H){H===!0?i.vertexAttribIPointer(U,G,j,J,Y):i.vertexAttribPointer(U,G,j,L,J,Y)}function b(U,G,j,L){M();let J=L.attributes,Y=j.getAttributes(),H=G.defaultAttributeValues;for(let ut in Y){let $=Y[ut];if($.location>=0){let rt=J[ut];if(rt===void 0&&(ut==="instanceMatrix"&&U.instanceMatrix&&(rt=U.instanceMatrix),ut==="instanceColor"&&U.instanceColor&&(rt=U.instanceColor)),rt!==void 0){let at=rt.normalized,Lt=rt.itemSize,Gt=t.get(rt);if(Gt===void 0)continue;let et=Gt.buffer,Et=Gt.type,Pt=Gt.bytesPerElement,F=Et===i.INT||Et===i.UNSIGNED_INT||rt.gpuType===Na;if(rt.isInterleavedBufferAttribute){let W=rt.data,_t=W.isInterleavedBuffer===!0?W.stride:W.itemSize,At=rt.offset;if(W.isInstancedInterleavedBuffer||W.isInstancedBufferAttribute){for(let pt=0;pt<$.locationSize;pt++)f($.location+pt,W.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pt=0;pt<$.locationSize;pt++)d($.location+pt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let pt=0;pt<$.locationSize;pt++)A($.location+pt,Lt/$.locationSize,Et,at,_t*Pt,(At+Lt/$.locationSize*pt)*Pt,F)}else{if(rt.isInstancedBufferAttribute){for(let W=0;W<$.locationSize;W++)f($.location+W,rt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let W=0;W<$.locationSize;W++)d($.location+W);i.bindBuffer(i.ARRAY_BUFFER,et);for(let W=0;W<$.locationSize;W++)A($.location+W,Lt/$.locationSize,Et,at,Lt*Pt,Lt/$.locationSize*W*Pt,F)}}else if(H!==void 0){let at=H[ut];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv($.location,at);break;case 3:i.vertexAttrib3fv($.location,at);break;case 4:i.vertexAttrib4fv($.location,at);break;default:i.vertexAttrib1fv($.location,at)}}}}S()}function v(){B();for(let U in n){let G=n[U];for(let j in G){let L=G[j];for(let J in L){let Y=L[J];for(let H in Y)h(Y[H].object),delete Y[H];delete L[J]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let G=n[U.id];for(let j in G){let L=G[j];for(let J in L){let Y=L[J];for(let H in Y)h(Y[H].object),delete Y[H];delete L[J]}}delete n[U.id]}function _(U){for(let G in n){let j=n[G];for(let L in j){let J=j[L];if(J[U.id]===void 0)continue;let Y=J[U.id];for(let H in Y)h(Y[H].object),delete Y[H];delete J[U.id]}}}function E(U){for(let G in n){let j=n[G],L=U.isInstancedMesh===!0?U.id:0,J=j[L];if(J!==void 0){for(let Y in J){let H=J[Y];for(let ut in H)h(H[ut].object),delete H[ut];delete J[Y]}delete j[L],Object.keys(j).length===0&&delete n[G]}}}function B(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:P,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:d,disableUnusedAttributes:S}}function Tm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==_n&&_!==Pn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:v,samples:w}}function Am(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,p){let g=m.clippingPlanes,M=m.clipIntersection,d=m.clipShadows,f=i.get(m);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let S=r?0:n,A=S*4,b=f.clippingState||null;l.value=b,b=h(g,u,A,p);for(let v=0;v!==A;++v)b[v]=e[v];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,p,g){let M=m!==null?m.length:0,d=null;if(M!==0){if(d=l.value,g!==!0||d===null){let f=p+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<f)&&(d=new Float32Array(f));for(let A=0,b=p;A!==M;++A,b+=4)a.copy(m[A]).applyMatrix4(S,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}var mr=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ms(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Fi});r.uniforms.tEquirect.value=e;let a=new Sn(s,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=en),new gs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Oh=256,Rm=3,Cm=20,au=256,ou=16,Pm=3,Im=new D,Lm=new qt,vo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gs(1,10,null),this._boxMesh=new Sn(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Im}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Lm));let d=new gs(n,s,h);return d.position.copy(o),d.update(l,t),l.autoClear=m,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=g,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Oh,kl(t))}_fromTexture(t,e){t.mapping===Bi||t.mapping===ys?this._setSize(t.image.length===0?Oh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Bh(t,!1,!1),n=Math.log2(t)-Rm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Bi||t.mapping===ys?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dm(),this._integrationMaterial=Nm());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ou);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Pm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(au*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Um());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Bh(i,t,e){return new mr(i,{minFilter:si,generateMipmaps:t,type:In,colorSpace:Fs,depthBuffer:e})}function gr(i,t,e){return new ln({name:i,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:rn,blending:Fi,depthTest:!1,depthWrite:!1})}function Dm(){return gr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${au}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Nm(){return gr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ou}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Um(){return gr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zh(){return gr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kh(){return gr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ia||p===La)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new mr(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,g=p===Ia||p===La,M=p===Bi||p===ys;if(g||M){let d=e.get(u),f=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new vo(i)),d=g?n.fromEquirectangular(u,d):n.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),d.texture;if(d!==void 0)return d.texture;{let S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new vo(i)),d=g?n.fromEquirectangular(u):n.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),u.addEventListener("dispose",h),d.texture):null}}}return u}function o(u,p){return p===Ia?u.mapping=Bi:p===La&&(u.mapping=ys),u}function l(u){let p=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Om(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(g){let M=g.attributes;for(let d in M)t.update(M[d],i.ARRAY_BUFFER)}function m(g){let M=g.index,d=g.attributes.position,f=0;if(d===void 0)return;let S=M!==null?M.array.length:d.array.length/3-1,A=d.count>=65535?Ws:Hs,b=new A(Math.ceil(S/3)*6,1),v=b.array;if(M!==null){let _=M.array;f=M.version;for(let E=0,B=0;E<S;E+=3){let P=_[E+0],U=_[E+1],G=_[E+2];v[B++]=P,v[B++]=U,v[B++]=U,v[B++]=G,v[B++]=G,v[B++]=P}}else{f=d.version;for(let _=0,E=0;_<S;_+=3){let B=_+0,P=_+1,U=_+2;v[E++]=B,v[E++]=P,v[E++]=P,v[E++]=U,v[E++]=U,v[E++]=B}}b.version=f;let w=r.get(g);w&&t.remove(w),r.set(g,b)}function u(g){let M=r.get(g);if(M){let d=g.index;d!==null&&M.version<d.version&&m(g)}else m(g);return r.get(g)}function p(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function zm(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function c(m,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,m*a,p),e.update(u,n,p))}function h(m,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,p);let M=0;for(let d=0;d<p;d++)M+=u[d];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,t,e){let n=new WeakMap,s=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let b=o.attributes.position.count*A,v=1;b>t.maxTextureSize&&(v=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*v*4*m),_=new Gs(w,b,v,m);_.type=Pn,_.needsUpdate=!0;let E=A*4;for(let P=0;P<m;P++){let U=d[P],G=f[P],j=S[P],L=b*v*4*P;for(let J=0;J<U.count;J++){let Y=J*E;p===!0&&(s.fromBufferAttribute(U,J),w[L+Y+0]=s.x,w[L+Y+1]=s.y,w[L+Y+2]=s.z,w[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(G,J),w[L+Y+4]=s.x,w[L+Y+5]=s.y,w[L+Y+6]=s.z,w[L+Y+7]=0),M===!0&&(s.fromBufferAttribute(j,J),w[L+Y+8]=s.x,w[L+Y+9]=s.y,w[L+Y+10]=s.z,w[L+Y+11]=j.itemSize===4?s.w:1)}}u={count:m,texture:_,size:new zt(b,v)},n.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vm(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Hm={[xl]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[vl]:"CINEON_TONE_MAPPING",[Ml]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function Wm(i,t,e,n,s,r){let a=new mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Xe;h.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Je([0,2,0,0,2,0],2));let m=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Sn(h,m),p=new Ca(-1,1,1,-1,0,1),g=null,M=null,d=!1,f,S=null,A=[],b=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),l!==null&&l.setSize(v,w);for(let _=0;_<A.length;_++){let E=A[_];E.setSize&&E.setSize(v,w)}},this.setEffects=function(v){A=v,b=A.length>0&&A[0].isRenderPass===!0;let w=a.width,_=a.height;A.length>0&&o===null&&(o=new mn(w,_,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new mn(w,_,{type:In,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&A.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new ii(w,_),r===!0&&(c.format=ri,c.type=zi)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<A.length;B++){let P=A[B];P.setSize&&P.setSize(w,_),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(v,w){if(d||v.toneMapping===Hn&&A.length===0)return!1;if(S=w,w!==null){let _=w.width,E=w.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return b===!1&&v.setRenderTarget(a),f=v.toneMapping,v.toneMapping=Hn,!0},this.hasRenderPass=function(){return b},this.end=function(v,w){v.toneMapping=f,d=!0;let _=a,E=o;for(let B=0;B<A.length;B++){let P=A[B];P.enabled!==!1&&(P.render(v,E,_,w),P.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(g!==v.outputColorSpace||M!==v.toneMapping){g=v.outputColorSpace,M=v.toneMapping,m.defines={},ne.getTransfer(g)===de&&(m.defines.SRGB_TRANSFER="");let B=Hm[M];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(S),v.render(u,p),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),m.dispose()}}var lu=new nn,cu=new ii(1,1),hu=new Js(1),uu=new Gs,du=new oa,fu=new Zs,Gh=[],Vh=[],Hh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Fe(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Fe(e,n)}}function Km(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),Fe(e,n)}}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function bo(i){return i.version===0&&(i.compareFunction=Fl,i.needsUpdate=!0),i}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bo(cu):r=lu,e.setTexture2D(t||r,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||du,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bo(hu):r=fu,e.setTextureCube(t||r,s)}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uu,s)}function hg(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return Zm;case 35674:return Jm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return jm;case 35667:case 35671:return Qm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){let e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){let e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){let e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){let e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){let e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _g(i,t){let e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xg(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function vg(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Eg(i,t){i.uniform3uiv(this.addr,t)}function Tg(i,t){i.uniform4uiv(this.addr,t)}function wg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bo(cu):a=lu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ag(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||du,r[a])}function Rg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bo(hu):a=fu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Cg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uu,r[a])}function Pg(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return vg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}},jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}},Ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function qh(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){let n=i.name,s=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),a=Jl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qh(e,c===void 0?new Kl(o,i,t):new jl(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Ql(o),qh(e,m)),e=m}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ig(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Yh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lg=37297,Dg=0;function Ng(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zh=new Yt;function Ug(i){ne._getMatrix(Zh,ne.workingColorSpace,i);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Os:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ng(i.getShaderSource(t),o)}else return r}function Fg(i,t){let e=Ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Og={[xl]:"Linear",[yl]:"Reinhard",[vl]:"Cineon",[Ml]:"ACESFilmic",[bl]:"AgX",[El]:"Neutral",[Sl]:"Custom"};function Bg(i,t){let e=Og[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yo=new D;function zg(){ne.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function $h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(Hg,Wg)}function Wg(i,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return tc(e)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(Xg,qg)}function qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Yg={[rr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function Zg(i){return Yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jg={[ys]:"ENVMAP_MODE_REFRACTION"};function $g(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kg={[_l]:"ENVMAP_BLENDING_MULTIPLY",[_h]:"ENVMAP_BLENDING_MIX",[xh]:"ENVMAP_BLENDING_ADD"};function jg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kg[i.combine]||"ENVMAP_BLENDING_NONE"}function Qg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Zg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$g(e),m=jg(e),u=kg(e),p=Gg(r),g=s.createProgram(),M,d,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),M.length>0&&(M+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),d.length>0&&(d+=`
`)):(M=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),d=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=tc(a),a=$h(a,e),a=Kh(a,e),o=tc(o),o=$h(o,e),o=Kh(o,e),a=jh(a),o=jh(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,d=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=f+M+a,A=f+d+o,b=Yh(s,s.VERTEX_SHADER,S),v=Yh(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,v),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(b)||"",j=s.getShaderInfoLog(v)||"",L=U.trim(),J=G.trim(),Y=j.trim(),H=!0,ut=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,v);else{let $=Jh(s,b,"vertex"),rt=Jh(s,v,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+$+`
`+rt)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(J===""||Y==="")&&(ut=!1);ut&&(P.diagnostics={runnable:H,programLog:L,vertexShader:{log:J,prefix:M},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(b),s.deleteShader(v),_=new Ms(s,g),E=Vg(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,Lg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=v,this}var t0=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}};function e0(i){return i===Ti||i===ur||i===dr}function n0(i,t,e,n,s,r){let a=new hs,o=new ec,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,E,B,P,U,G){let j=P.fog,L=U.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=t.get(_.envMap||J,Y),ut=u[_.type],$=n.precision;_.precision!==null&&($=n.getMaxPrecision(_.precision),$!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",$,"instead."));let rt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,at=rt!==void 0?rt.length:0,Lt=0;L.morphAttributes.position!==void 0&&(Lt=1),L.morphAttributes.normal!==void 0&&(Lt=2),L.morphAttributes.color!==void 0&&(Lt=3);let Gt,et,Et,Pt;if(ut){let X=Xn[ut];Gt=X.vertexShader,et=X.fragmentShader}else{Gt=_.vertexShader,et=_.fragmentShader;let X=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,X,ct),Et=X.id,Pt=ct.id}let F=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),_t=U.isInstancedMesh===!0,At=U.isBatchedMesh===!0,pt=!!_.map,It=!!_.matcap,kt=!!H,Xt=kt&&H.isPMREMTexture===!0,fe=!!_.aoMap,re=!!_.lightMap,ye=!!_.bumpMap&&_.wireframe===!1,ae=!!_.normalMap,we=!!_.displacementMap,oe=!!_.emissiveMap,Ve=!!_.metalnessMap,Pe=!!_.roughnessMap,Ke=_.anisotropy>0,N=_.clearcoat>0,an=_.diffuseRoughness>0,ie=_.dispersion>0,me=_.retroreflectivity>0,Tt=_.iridescence>0,Ae=_.sheen>0,Ot=_.transmission>0,Ht=Ke&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,x=N&&!!_.clearcoatNormalMap,z=N&&!!_.clearcoatRoughnessMap,dt=an&&!!_.diffuseRoughnessMap,st=Tt&&!!_.iridescenceMap,ft=Tt&&!!_.iridescenceThicknessMap,St=Ae&&!!_.sheenColorMap,Q=Ae&&!!_.sheenRoughnessMap,tt=!!_.specularMap,vt=!!_.specularColorMap,C=!!_.specularIntensityMap,nt=Ot&&!!_.transmissionMap,K=Ot&&!!_.thicknessMap,yt=!!_.gradientMap,gt=!!_.alphaMap,xt=_.alphaTest>0,Dt=!!_.alphaHash,Zt=!!_.extensions,R=Hn;_.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(R=i.toneMapping);let Z=Xt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,it={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:Gt,fragmentShader:et,defines:_.defines,customVertexShaderID:Et,customFragmentShaderID:Pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:$,batching:At,batchingColor:At&&U._colorsTexture!==null,instancing:_t,instancingColor:_t&&U.instanceColor!==null,instancingMorph:_t&&U.morphTexture!==null,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:It,envMap:kt,envMapMode:kt&&H.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Z.length-1:null,envMapSize:Xt?Z[0].width:null,aoMap:fe,lightMap:re,bumpMap:ye,normalMap:ae,displacementMap:we,emissiveMap:oe,normalMapObjectSpace:ae&&_.normalMapType===Mh,normalMapTangentSpace:ae&&_.normalMapType===Dl,packedNormalMap:ae&&_.normalMapType===Dl&&e0(_.normalMap.format),metalnessMap:Ve,roughnessMap:Pe,anisotropy:Ke,anisotropyMap:Ht,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:an,diffuseRoughnessMap:dt,dispersion:ie,retroreflection:me,iridescence:Tt,iridescenceMap:st,iridescenceThicknessMap:ft,sheen:Ae,sheenColorMap:St,sheenRoughnessMap:Q,specularMap:tt,specularColorMap:vt,specularIntensityMap:C,transmission:Ot,transmissionMap:nt,thicknessMap:K,gradientMap:yt,opaque:_.transparent===!1&&_.blending===Ei&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:xt,alphaHash:Dt,combine:_.combine,mapUv:pt&&p(_.map.channel),aoMapUv:fe&&p(_.aoMap.channel),lightMapUv:re&&p(_.lightMap.channel),bumpMapUv:ye&&p(_.bumpMap.channel),normalMapUv:ae&&p(_.normalMap.channel),displacementMapUv:we&&p(_.displacementMap.channel),emissiveMapUv:oe&&p(_.emissiveMap.channel),metalnessMapUv:Ve&&p(_.metalnessMap.channel),roughnessMapUv:Pe&&p(_.roughnessMap.channel),anisotropyMapUv:Ht&&p(_.anisotropyMap.channel),clearcoatMapUv:T&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:st&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:St&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(_.sheenRoughnessMap.channel),specularMapUv:tt&&p(_.specularMap.channel),specularColorMapUv:vt&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:nt&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:gt&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ae||Ke),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(pt||gt),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:W,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Lt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.filter(X=>X.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:R,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:oe&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function M(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)E.push(B),E.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(d(E,_),f(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function d(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function f(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let E=u[_.type],B;if(E){let P=Xn[E];B=Nh.clone(P.uniforms)}else B=_.uniforms;return B}function A(_,E){let B=h.get(E);return B!==void 0?++B.usedTimes:(B=new Qg(i,E,_,s),c.push(B),h.set(E,B)),B}function b(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:S,acquireProgram:A,releaseProgram:b,releaseShaderCache:v,programs:c,dispose:w}}function i0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,M,d,f){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:d,group:f},i[t]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=d,S.group=f),t++,S}function l(u,p,g,M,d,f,S){S.reversedDepth===!0&&(d=-d);let A=o(u,p,g,M,d,f);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,p,g,M,d,f){let S=o(u,p,g,M,d,f);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,p){e.length>1&&e.sort(u||s0),n.length>1&&n.sort(p||tu),s.length>1&&s.sort(p||tu)}function m(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function r0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new eu,i.set(n,[a])):s>=r.length?(a=new eu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new qt};break;case"SpotLight":e={position:new D,direction:new D,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function o0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l0=0;function c0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h0(i){let t=new a0,e=o0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new xe,a=new xe;function o(c){let h=0,m=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,g=0,M=0,d=0,f=0,S=0,A=0,b=0,v=0,w=0,_=0,E=0,B=0,P=0;c.sort(c0);for(let G=0,j=c.length;G<j;G++){let L=c[G],J=L.color,Y=L.intensity,H=L.distance,ut=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ti?ut=L.shadow.map.texture:ut=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=J.r*Y,m+=J.g*Y,u+=J.b*Y;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Y);P++}else if(L.isSunLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,at=e.get(L);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=ut;let Lt=rt.getViewportCount();for(let Gt=0;Gt<Lt;Gt++)n.sunShadowMatrix[M+Gt]=rt.getMatrix(Gt),n.sunShadowCascade[M+Gt]=rt._cascadeData[Gt];M+=Lt,g++}n.sun[p]=$,p++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,at=e.get(L);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.directionalShadow[d]=at,n.directionalShadowMap[d]=ut,n.directionalShadowMatrix[d]=L.shadow.matrix,v++}n.directional[d]=$,d++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(J).multiplyScalar(Y),$.distance=H,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[S]=$;let rt=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,rt.updateMatrices(L),L.castShadow&&B++),n.spotLightMatrix[S]=rt.matrix,L.castShadow){let at=e.get(L);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.spotShadow[S]=at,n.spotShadowMap[S]=ut,_++}S++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(J).multiplyScalar(Y),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=$,A++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let rt=L.shadow,at=e.get(L);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,at.shadowCameraNear=rt.camera.near,at.shadowCameraFar=rt.camera.far,n.pointShadow[f]=at,n.pointShadowMap[f]=ut,n.pointShadowMatrix[f]=L.shadow.matrix,w++}n.point[f]=$,f++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(Y),$.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[b]=$,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let U=n.hash;(U.sunLength!==p||U.directionalLength!==d||U.pointLength!==f||U.spotLength!==S||U.rectAreaLength!==A||U.hemiLength!==b||U.numSunShadows!==g||U.numDirectionalShadows!==v||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==E||U.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=d,n.spot.length=S,n.rectArea.length=A,n.point.length=f,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-B,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=P,U.sunLength=p,U.directionalLength=d,U.pointLength=f,U.spotLength=S,U.rectAreaLength=A,U.hemiLength=b,U.numSunShadows=g,U.numDirectionalShadows=v,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=E,U.numLightProbes=P,n.version=l0++)}function l(c,h){let m=0,u=0,p=0,g=0,M=0,d=0,f=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let b=c[S];if(b.isSunLight){let v=n.sun[m];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(f),m++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let v=n.rectArea[M];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let v=n.hemi[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(f),d++}}}return{setup:o,setupView:l,state:n}}function nu(i){let t=new h0(i),e=[],n=[],s=[];function r(m){h.camera=m,e.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){n.push(m)}function l(){t.setup(e),s.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function c(m){t.setupView(e,m)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function u0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new nu(i),t.set(s,[o])):r>=a.length?(o=new nu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,p0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],m0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],iu=new xe,fr=new D,$l=new D;function g0(i,t,e){let n=new Ni,s=new zt,r=new zt,a=new Te,o=new _a,l=new xa,c={},h=e.maxTextureSize,m={[bi]:rn,[rn]:bi,[Gn]:Gn},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Sn(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let f=this.type;this.render=function(w,_,E){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===jc&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rr);let B=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Fi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=f!==this.type;j&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(J=>J.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,J=w.length;L<J;L++){let Y=w[L],H=Y.shadow;if(H===void 0){Bt("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ut=H.getFrameExtents();s.multiply(ut),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,H.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=$,H.map===null||j===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xs){if(Y.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new mn(s.x,s.y,{format:Ti,type:In,minFilter:en,magFilter:en,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new ii(s.x,s.y,Pn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=ei,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ge,H.map.depthTexture.magFilter=Ge}else Y.isPointLight?(H.map=new mr(s.x),H.map.depthTexture=new Js(s.x,Cn)):(H.map=new mn(s.x,s.y),H.map.depthTexture=new ii(s.x,s.y,Cn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=ei,this.type===rr?(H.map.depthTexture.compareFunction=$?Ul:Nl,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ge,H.map.depthTexture.magFilter=Ge);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let rt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,E);let at=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:E.layers;for(let Lt=0;Lt<rt;Lt++){let Gt=H.getCamera(Lt);if(Y.isPointLight){let et=H.camera,Et=H.matrix,Pt=Y.distance||et.far;Pt!==et.far&&(et.far=Pt,et.updateProjectionMatrix()),fr.setFromMatrixPosition(Y.matrixWorld),et.position.copy(fr),$l.copy(et.position),$l.add(p0[Lt]),et.up.copy(m0[Lt]),et.lookAt($l),et.updateMatrixWorld(),Et.makeTranslation(-fr.x,-fr.y,-fr.z),iu.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),H._frustum.setFromProjectionMatrix(iu,et.coordinateSystem,et.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Lt),i.clear();else{Lt===0&&(i.setRenderTarget(H.map),i.clear());let et=H.getViewport(Lt);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),G.viewport(a)}n=H.getFrustum(Lt),b(_,E,Gt,Y,at,this.type)}H.isPointLightShadow!==!0&&this.type===xs&&S(H,E),H.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(B,P,U)};function S(w,_){let E=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new mn(s.x,s.y,{format:Ti,type:In}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,E,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,E,p,M,null)}function A(w,_,E,B){let P=null,U=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let G=P.uuid,j=_.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let J=L[j];J===void 0&&(J=P.clone(),L[j]=J,_.addEventListener("dispose",v)),P=J}if(P.visible=_.visible,P.wireframe=_.wireframe,B===xs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:m[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=i.properties.get(P);G.light=E}return P}function b(w,_,E,B,P,U){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===xs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let L=t.update(w),J=w.material;if(Array.isArray(J)){let Y=L.groups;for(let H=0,ut=Y.length;H<ut;H++){let $=Y[H],rt=J[$.materialIndex];if(rt&&rt.visible){let at=A(w,rt,B,U);w.onBeforeShadow(i,w,_,E,L,at,$),i.renderBufferDirect(E,null,L,at,w,$),w.onAfterShadow(i,w,_,E,L,at,$)}}}else if(J.visible){let Y=A(w,J,B,U);w.onBeforeShadow(i,w,_,E,L,Y,null),i.renderBufferDirect(E,null,L,Y,w,null),w.onAfterShadow(i,w,_,E,L,Y,null)}}let j=w.children;for(let L=0,J=j.length;L<J;L++)b(j[L],_,E,B,P,U)}function v(w){w.target.removeEventListener("dispose",v);for(let E in c){let B=c[E],P=w.target.uuid;P in B&&(B[P].dispose(),delete B[P])}}}function _0(i,t){function e(){let C=!1,nt=new Te,K=null,yt=new Te(0,0,0,0);return{setMask:function(gt){K!==gt&&!C&&(i.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){C=gt},setClear:function(gt,xt,Dt,Zt,R){R===!0&&(gt*=Zt,xt*=Zt,Dt*=Zt),nt.set(gt,xt,Dt,Zt),yt.equals(nt)===!1&&(i.clearColor(gt,xt,Dt,Zt),yt.copy(nt))},reset:function(){C=!1,K=null,yt.set(-1,0,0,0)}}}function n(){let C=!1,nt=!1,K=null,yt=null,gt=null;return{setReversed:function(xt){if(nt!==xt){let Dt=t.get("EXT_clip_control");xt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),nt=xt;let Zt=gt;gt=null,this.setClear(Zt)}},getReversed:function(){return nt},setTest:function(xt){xt?W(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(xt){K!==xt&&!C&&(i.depthMask(xt),K=xt)},setFunc:function(xt){if(nt&&(xt=Ih[xt]),yt!==xt){switch(xt){case Jr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=xt}},setLocked:function(xt){C=xt},setClear:function(xt){gt!==xt&&(gt=xt,nt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){C=!1,K=null,yt=null,gt=null,nt=!1}}}function s(){let C=!1,nt=null,K=null,yt=null,gt=null,xt=null,Dt=null,Zt=null,R=null;return{setTest:function(Z){C||(Z?W(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Z){nt!==Z&&!C&&(i.stencilMask(Z),nt=Z)},setFunc:function(Z,it,X){(K!==Z||yt!==it||gt!==X)&&(i.stencilFunc(Z,it,X),K=Z,yt=it,gt=X)},setOp:function(Z,it,X){(xt!==Z||Dt!==it||Zt!==X)&&(i.stencilOp(Z,it,X),xt=Z,Dt=it,Zt=X)},setLocked:function(Z){C=Z},setClear:function(Z){R!==Z&&(i.clearStencil(Z),R=Z)},reset:function(){C=!1,nt=null,K=null,yt=null,gt=null,xt=null,Dt=null,Zt=null,R=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},m={},u={},p=new WeakMap,g=[],M=null,d=!1,f=null,S=null,A=null,b=null,v=null,w=null,_=null,E=new qt(0,0,0),B=0,P=!1,U=null,G=null,j=null,L=null,J=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ut=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec($)[1]),H=ut>=1):$.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=ut>=2);let rt=null,at={},Lt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),et=new Te().fromArray(Lt),Et=new Te().fromArray(Gt);function Pt(C,nt,K,yt){let gt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(C,xt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<K;Dt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(nt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return xt}let F={};F[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(as),ye(!1),ae(dl),W(i.CULL_FACE),fe(Fi);function W(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function _t(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function At(C,nt){return u[C]!==nt?(i.bindFramebuffer(C,nt),u[C]=nt,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function pt(C,nt){let K=g,yt=!1;if(C){K=p.get(nt),K===void 0&&(K=[],p.set(nt,K));let gt=C.textures;if(K.length!==gt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Dt=gt.length;xt<Dt;xt++)K[xt]=i.COLOR_ATTACHMENT0+xt;K.length=gt.length,yt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,yt=!0);yt&&i.drawBuffers(K)}function It(C){return M!==C?(i.useProgram(C),M=C,!0):!1}let kt={[Oi]:i.FUNC_ADD,[th]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};kt[nh]=i.MIN,kt[ih]=i.MAX;let Xt={[sh]:i.ZERO,[rh]:i.ONE,[ah]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[dh]:i.SRC_ALPHA_SATURATE,[hh]:i.DST_COLOR,[lh]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[uh]:i.ONE_MINUS_DST_COLOR,[ch]:i.ONE_MINUS_DST_ALPHA,[fh]:i.CONSTANT_COLOR,[ph]:i.ONE_MINUS_CONSTANT_COLOR,[mh]:i.CONSTANT_ALPHA,[gh]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(C,nt,K,yt,gt,xt,Dt,Zt,R,Z){if(C===Fi){d===!0&&(_t(i.BLEND),d=!1);return}if(d===!1&&(W(i.BLEND),d=!0),C!==Qc){if(C!==f||Z!==P){if((S!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),S=Oi,v=Oi),Z)switch(C){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",C);break}else switch(C){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fl:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",C);break}A=null,b=null,w=null,_=null,E.set(0,0,0),B=0,f=C,P=Z}return}gt=gt||nt,xt=xt||K,Dt=Dt||yt,(nt!==S||gt!==v)&&(i.blendEquationSeparate(kt[nt],kt[gt]),S=nt,v=gt),(K!==A||yt!==b||xt!==w||Dt!==_)&&(i.blendFuncSeparate(Xt[K],Xt[yt],Xt[xt],Xt[Dt]),A=K,b=yt,w=xt,_=Dt),(Zt.equals(E)===!1||R!==B)&&(i.blendColor(Zt.r,Zt.g,Zt.b,R),E.copy(Zt),B=R),f=C,P=!1}function re(C,nt){C.side===Gn?_t(i.CULL_FACE):W(i.CULL_FACE);let K=C.side===rn;nt&&(K=!K),ye(K),C.blending===Ei&&C.transparent===!1?fe(Fi):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let yt=C.stencilWrite;o.setTest(yt),yt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function ae(C){C!==$c?(W(i.CULL_FACE),C!==G&&(C===dl?i.cullFace(i.BACK):C===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),G=C}function we(C){C!==j&&(H&&i.lineWidth(C),j=C)}function oe(C,nt,K){C?(W(i.POLYGON_OFFSET_FILL),(L!==nt||J!==K)&&(L=nt,J=K,a.getReversed()&&(nt=-nt,K=-K),i.polygonOffset(nt,K))):_t(i.POLYGON_OFFSET_FILL)}function Ve(C){C?W(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Pe(C){C===void 0&&(C=i.TEXTURE0+Y-1),rt!==C&&(i.activeTexture(C),rt=C)}function Ke(C,nt,K){K===void 0&&(rt===null?K=i.TEXTURE0+Y-1:K=rt);let yt=at[K];yt===void 0&&(yt={type:void 0,texture:void 0},at[K]=yt),(yt.type!==C||yt.texture!==nt)&&(rt!==K&&(i.activeTexture(K),rt=K),i.bindTexture(C,nt||F[C]),yt.type=C,yt.texture=nt)}function N(){let C=at[rt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function an(){try{i.compressedTexImage2D(...arguments)}catch(C){Vt("WebGLState:",C)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(C){Vt("WebGLState:",C)}}function me(){try{i.texSubImage2D(...arguments)}catch(C){Vt("WebGLState:",C)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(C){Vt("WebGLState:",C)}}function Ae(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Vt("WebGLState:",C)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Vt("WebGLState:",C)}}function Ht(){try{i.texStorage2D(...arguments)}catch(C){Vt("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){Vt("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Vt("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Vt("WebGLState:",C)}}function dt(C){return m[C]!==void 0?m[C]:i.getParameter(C)}function st(C,nt){m[C]!==nt&&(i.pixelStorei(C,nt),m[C]=nt)}function ft(C){et.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),et.copy(C))}function St(C){Et.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Et.copy(C))}function Q(C,nt){let K=c.get(nt);K===void 0&&(K=new WeakMap,c.set(nt,K));let yt=K.get(C);yt===void 0&&(yt=i.getUniformBlockIndex(nt,C.name),i.uniformBlockBinding(nt,yt,yt),K.set(C,yt))}function tt(C,nt,K){let gt=c.get(nt).get(C);l[gt]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,gt,K),l[gt]=K)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},rt=null,at={},u={},l={},p=new WeakMap,g=[],M=null,d=!1,f=null,S=null,A=null,b=null,v=null,w=null,_=null,E=new qt(0,0,0),B=0,P=!1,U=null,G=null,j=null,L=null,J=null,et.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:_t,bindFramebuffer:At,drawBuffers:pt,useProgram:It,setBlending:fe,setMaterial:re,setFlipSided:ye,setCullFace:ae,setLineWidth:we,setPolygonOffset:oe,setScissorTest:Ve,activeTexture:Pe,bindTexture:Ke,unbindTexture:N,compressedTexImage2D:an,compressedTexImage3D:ie,texImage2D:x,texImage3D:z,pixelStorei:st,getParameter:dt,updateUBOMapping:Q,uniformBlockBinding:tt,texStorage2D:Ht,texStorage3D:T,texSubImage2D:me,texSubImage3D:Tt,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ot,scissor:ft,viewport:St,reset:vt}}function x0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,m=new Set,u,p=new WeakMap,g=new Set,M=new FinalizationRegistry(T=>g.delete(T)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,x){return d?new OffscreenCanvas(T,x):zs("canvas")}function S(T,x,z){let dt=1,st=Ht(T);if((st.width>z||st.height>z)&&(dt=z/Math.max(st.width,st.height)),dt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ft=Math.floor(dt*st.width),St=Math.floor(dt*st.height);u===void 0&&(u=f(ft,St));let Q=x?f(ft,St):u;return Q.width=ft,Q.height=St,Q.getContext("2d").drawImage(T,0,0,ft,St),Bt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ft+"x"+St+")."),Q}else return"data"in T&&Bt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function A(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,z,dt,st,ft=!1){if(T!==null){if(i[T]!==void 0)return i[T];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let St;dt&&(St=t.get("EXT_texture_norm16"),St||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&St&&(Q=St.R16_EXT),z===i.SHORT&&St&&(Q=St.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&St&&(Q=St.RG16_EXT),z===i.SHORT&&St&&(Q=St.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&St&&(Q=St.RGB16_EXT),z===i.SHORT&&St&&(Q=St.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let tt=ft?Os:ne.getTransfer(st);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=tt===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&St&&(Q=St.RGBA16_EXT),z===i.SHORT&&St&&(Q=St.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(T,x){let z;return T?x===null||x===Cn||x===zi?z=i.DEPTH24_STENCIL8:x===Pn?z=i.DEPTH32F_STENCIL8:x===vs&&(z=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Cn||x===zi?z=i.DEPTH_COMPONENT24:x===Pn?z=i.DEPTH_COMPONENT32F:x===vs&&(z=i.DEPTH_COMPONENT16),z}function E(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ge&&T.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function B(T){let x=new WeakRef(T);n.get(T).__ref=x,g.add(x),M.register(T,x,x)}function P(T){let x=n.get(T).__ref;x!==void 0&&(g.delete(x),M.unregister(x))}function U(T){j(T.target)}function G(T){L(T.target)}function j(T){T.removeEventListener("dispose",U),P(T),Y(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&m.delete(T)}function L(T){T.removeEventListener("dispose",G),P(T),ut(T)}function J(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):j(x))}g.clear(),m.clear()}function Y(T){let x=n.get(T);if(x.__webglInit===void 0)return;let z=T.source,dt=p.get(z);if(dt){let st=dt[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&H(T),Object.keys(dt).length===0&&p.delete(z)}n.remove(T)}function H(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let z=T.source,dt=p.get(z);delete dt[x.__cacheKey],a.memory.textures--}function ut(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&j(z),T.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(x.__webglFramebuffer[st]))for(let ft=0;ft<x.__webglFramebuffer[st].length;ft++)i.deleteFramebuffer(x.__webglFramebuffer[st][ft]);else i.deleteFramebuffer(x.__webglFramebuffer[st]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[st])}else{if(Array.isArray(x.__webglFramebuffer))for(let st=0;st<x.__webglFramebuffer.length;st++)i.deleteFramebuffer(x.__webglFramebuffer[st]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let st=0;st<x.__webglColorRenderbuffer.length;st++)x.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[st]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let dt=T.textures;for(let st=0,ft=dt.length;st<ft;st++){let St=n.get(dt[st]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(dt[st])}n.remove(T)}let $=0;function rt(){$=0}function at(){return $}function Lt(T){$=T}function Gt(){let T=$;return T>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,T}function et(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Et(T,x){let z=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let dt=T.image;if(dt===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(z,T,x);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function Pt(T,x){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){re(z,T,x);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function F(T,x){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){re(z,T,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function W(T,x){let z=n.get(T);if(T.version>0&&z.__version!==T.version){ye(z,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let _t={[na]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},At={[Ge]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},pt={[bh]:i.NEVER,[Fl]:i.ALWAYS,[Eh]:i.LESS,[Nl]:i.LEQUAL,[Th]:i.EQUAL,[Ul]:i.GEQUAL,[wh]:i.GREATER,[Ah]:i.NOTEQUAL};function It(T,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Da||x.magFilter===ar||x.magFilter===si||x.minFilter===en||x.minFilter===Da||x.minFilter===ar||x.minFilter===si)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,_t[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,_t[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,_t[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,At[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,At[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ge||x.minFilter!==ar&&x.minFilter!==si||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function kt(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",U),B(x));let dt=x.source,st=p.get(dt);st===void 0&&(st={},p.set(dt,st));let ft=et(x);if(ft!==T.__cacheKey){st[ft]===void 0&&(st[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),st[ft].usedTimes++;let St=st[T.__cacheKey];St!==void 0&&(st[T.__cacheKey].usedTimes--,St.usedTimes===0&&H(x)),T.__cacheKey=ft,T.__webglTexture=st[ft].texture}return z}function Xt(T,x,z){return Math.floor(Math.floor(T/z)/x)}function fe(T,x,z,dt){let ft=T.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,dt,x.data);else{ft.sort((C,nt)=>C.start-nt.start);let St=0;for(let C=1;C<ft.length;C++){let nt=ft[St],K=ft[C],yt=nt.start+nt.count,gt=Xt(K.start,x.width,4),xt=Xt(nt.start,x.width,4);K.start<=yt+1&&gt===xt&&Xt(K.start+K.count-1,x.width,4)===gt?nt.count=Math.max(nt.count,K.start+K.count-nt.start):(++St,ft[St]=K)}ft.length=St+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,nt=ft.length;C<nt;C++){let K=ft[C],yt=Math.floor(K.start/4),gt=Math.ceil(K.count/4),xt=yt%x.width,Dt=Math.floor(yt/x.width),Zt=gt,R=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,xt,Dt,Zt,R,z,dt,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function re(T,x,z){let dt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(dt=i.TEXTURE_3D);let st=kt(T,x),ft=x.source;e.bindTexture(dt,T.__webglTexture,i.TEXTURE0+z);let St=n.get(ft);if(ft.version!==St.__version||st===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let R=ne.getPrimaries(ne.workingColorSpace),Z=x.colorSpace===ai?null:ne.getPrimaries(x.colorSpace),it=x.colorSpace===ai||R===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=S(x.image,!1,s.maxTextureSize);tt=Ot(x,tt);let vt=r.convert(x.format,x.colorSpace),C=r.convert(x.type),nt=w(x.internalFormat,vt,C,x.normalized,x.colorSpace,x.isVideoTexture);It(dt,x);let K,yt=x.mipmaps,gt=x.isVideoTexture!==!0,xt=St.__version===void 0||st===!0,Dt=ft.dataReady,Zt=E(x,tt);if(x.isDepthTexture)nt=_(x.format===ri,x.type),xt&&(gt?e.texStorage2D(i.TEXTURE_2D,1,nt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,nt,tt.width,tt.height,0,vt,C,null));else if(x.isDataTexture)if(yt.length>0){gt&&xt&&e.texStorage2D(i.TEXTURE_2D,Zt,nt,yt[0].width,yt[0].height);for(let R=0,Z=yt.length;R<Z;R++)K=yt[R],gt?Dt&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,K.width,K.height,vt,C,K.data):e.texImage2D(i.TEXTURE_2D,R,nt,K.width,K.height,0,vt,C,K.data);x.generateMipmaps=!1}else gt?(xt&&e.texStorage2D(i.TEXTURE_2D,Zt,nt,tt.width,tt.height),Dt&&fe(x,tt,vt,C)):e.texImage2D(i.TEXTURE_2D,0,nt,tt.width,tt.height,0,vt,C,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){gt&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,nt,yt[0].width,yt[0].height,tt.depth);for(let R=0,Z=yt.length;R<Z;R++)if(K=yt[R],x.format!==Ln)if(vt!==null)if(gt){if(Dt)if(x.layerUpdates.size>0){let it=Zl(K.width,K.height,x.format,x.type);for(let X of x.layerUpdates){let ct=K.data.subarray(X*it/K.data.BYTES_PER_ELEMENT,(X+1)*it/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,X,K.width,K.height,1,vt,ct)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,K.width,K.height,tt.depth,vt,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,nt,K.width,K.height,tt.depth,0,K.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,K.width,K.height,tt.depth,vt,C,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,R,nt,K.width,K.height,tt.depth,0,vt,C,K.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{gt&&xt&&e.texStorage2D(i.TEXTURE_2D,Zt,nt,yt[0].width,yt[0].height);for(let R=0,Z=yt.length;R<Z;R++)K=yt[R],x.format!==Ln?vt!==null?gt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,K.width,K.height,vt,K.data):e.compressedTexImage2D(i.TEXTURE_2D,R,nt,K.width,K.height,0,K.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Dt&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,K.width,K.height,vt,C,K.data):e.texImage2D(i.TEXTURE_2D,R,nt,K.width,K.height,0,vt,C,K.data)}else if(x.isDataArrayTexture)if(gt){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,nt,tt.width,tt.height,tt.depth),Dt)if(x.layerUpdates.size>0){let R=Zl(tt.width,tt.height,x.format,x.type);for(let Z of x.layerUpdates){let it=tt.data.subarray(Z*R/tt.data.BYTES_PER_ELEMENT,(Z+1)*R/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,vt,C,it)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,vt,C,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,tt.width,tt.height,tt.depth,0,vt,C,tt.data);else if(x.isData3DTexture)gt?(xt&&e.texStorage3D(i.TEXTURE_3D,Zt,nt,tt.width,tt.height,tt.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,vt,C,tt.data)):e.texImage3D(i.TEXTURE_3D,0,nt,tt.width,tt.height,tt.depth,0,vt,C,tt.data);else if(x.isFramebufferTexture){if(xt)if(gt)e.texStorage2D(i.TEXTURE_2D,Zt,nt,tt.width,tt.height);else{let R=tt.width,Z=tt.height;for(let it=0;it<Zt;it++)e.texImage2D(i.TEXTURE_2D,it,nt,R,Z,0,vt,C,null),R>>=1,Z>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let R=i.canvas;if(R.hasAttribute("layoutsubtree")||R.setAttribute("layoutsubtree","true"),tt.parentNode!==R){R.appendChild(tt),m.add(x),R.onpaint=Z=>{let it=Z.changedElements;for(let X of m)it.includes(X.image)&&(X.needsUpdate=!0)},R.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let it=i.RGBA,X=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,X,ct,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(gt&&xt){let R=Ht(yt[0]);e.texStorage2D(i.TEXTURE_2D,Zt,nt,R.width,R.height)}for(let R=0,Z=yt.length;R<Z;R++)K=yt[R],gt?Dt&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,vt,C,K):e.texImage2D(i.TEXTURE_2D,R,nt,vt,C,K);x.generateMipmaps=!1}else if(gt){if(xt){let R=Ht(tt);e.texStorage2D(i.TEXTURE_2D,Zt,nt,R.width,R.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,C,tt)}else e.texImage2D(i.TEXTURE_2D,0,nt,vt,C,tt);A(x)&&x.mipmapsAutoUpdate===!0&&b(dt),St.__version=ft.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ye(T,x,z){if(x.image.length!==6)return;let dt=kt(T,x),st=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let ft=n.get(st);if(st.version!==ft.__version||dt===!0){e.activeTexture(i.TEXTURE0+z);let St=ne.getPrimaries(ne.workingColorSpace),Q=x.colorSpace===ai?null:ne.getPrimaries(x.colorSpace),tt=x.colorSpace===ai||St===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let vt=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,nt=[];for(let X=0;X<6;X++)!vt&&!C?nt[X]=S(x.image[X],!0,s.maxCubemapSize):nt[X]=C?x.image[X].image:x.image[X],nt[X]=Ot(x,nt[X]);let K=nt[0],yt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),xt=w(x.internalFormat,yt,gt,x.normalized,x.colorSpace),Dt=x.isVideoTexture!==!0,Zt=ft.__version===void 0||dt===!0,R=st.dataReady,Z=E(x,K);It(i.TEXTURE_CUBE_MAP,x);let it;if(x.isDepthTexture){if(xt=_(x.format===ri,x.type),Zt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,xt,K.width,K.height);else for(let X=0;X<6;X++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,xt,K.width,K.height,0,yt,gt,null)}else if(vt){Dt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,xt,K.width,K.height);for(let X=0;X<6;X++){it=nt[X].mipmaps;for(let ct=0;ct<it.length;ct++){let mt=it[ct];x.format!==Ln?yt!==null?Dt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct,0,0,mt.width,mt.height,yt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct,xt,mt.width,mt.height,0,mt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct,0,0,mt.width,mt.height,yt,gt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct,xt,mt.width,mt.height,0,yt,gt,mt.data)}}}else{if(it=x.mipmaps,Dt&&Zt){it.length>0&&Z++;let X=Ht(nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,xt,X.width,X.height)}for(let X=0;X<6;X++)if(C){Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,nt[X].width,nt[X].height,yt,gt,nt[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,xt,nt[X].width,nt[X].height,0,yt,gt,nt[X].data);for(let ct=0;ct<it.length;ct++){let ot=it[ct].image[X].image;Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct+1,0,0,ot.width,ot.height,yt,gt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct+1,xt,ot.width,ot.height,0,yt,gt,ot.data)}}else{Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,yt,gt,nt[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,xt,yt,gt,nt[X]);for(let ct=0;ct<it.length;ct++){let mt=it[ct];Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct+1,0,0,yt,gt,mt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ct+1,xt,yt,gt,mt.image[X])}}}A(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ft.__version=st.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ae(T,x,z,dt,st,ft){let St=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),tt=w(z.internalFormat,St,Q,z.normalized,z.colorSpace),vt=n.get(x),C=n.get(z);if(C.__renderTarget=x,!vt.__hasExternalTextures){let nt=Math.max(1,x.width>>ft),K=Math.max(1,x.height>>ft);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,ft,tt,nt,K,x.depth,0,St,Q,null):e.texImage2D(st,ft,tt,nt,K,0,St,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,st,C.__webglTexture,0,me(x)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,st,C.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(T,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let dt=x.depthTexture,st=dt&&dt.isDepthTexture?dt.type:null,ft=_(x.stencilBuffer,st),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(x),ft,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{let dt=x.textures;for(let st=0;st<dt.length;st++){let ft=dt[st],St=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),tt=w(ft.internalFormat,St,Q,ft.normalized,ft.colorSpace);Tt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(x),tt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(x),tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(T,x,z){let dt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(x.depthTexture);st.__renderTarget=x;let ft=dt?x.depthTexture.image[0]:x.depthTexture.image;(!st.__webglTexture||ft.width!==x.width||ft.height!==x.height)&&(ft.width=x.width,ft.height=x.height,x.depthTexture.needsUpdate=!0),dt?W(x.depthTexture,0):Et(x.depthTexture,0);let St=st.__webglTexture,Q=me(x),tt=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,vt=x.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ei)Tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,tt,St,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,vt,tt,St,0);else if(x.depthTexture.format===ri)Tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,tt,St,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,vt,tt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(T){let x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let dt=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),dt){let st=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,dt.removeEventListener("dispose",st)};dt.addEventListener("dispose",st),x.__depthDisposeCallback=st}x.__boundDepthTexture=dt}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let dt=0;dt<6;dt++)oe(x.__webglFramebuffer[dt],T,dt);else T.texture.mipmaps.length>0?oe(x.__webglFramebuffer[0],T,0):oe(x.__webglFramebuffer,T,0);else if(z){x.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[dt]),x.__webglDepthbuffer[dt]===void 0)x.__webglDepthbuffer[dt]=i.createRenderbuffer(),we(x.__webglDepthbuffer[dt],T,!1);else{let st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ft)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),we(x.__webglDepthbuffer,T,!1);else{let st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(T,x,z){let dt=n.get(T);x!==void 0&&ae(dt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ve(T)}function Ke(T){let x=T.texture,z=n.get(T),dt=n.get(x);T.addEventListener("dispose",G),B(T);let st=T.textures,ft=T.isWebGLCubeRenderTarget===!0,St=st.length>1;if(St||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=x.version,a.memory.textures++),ft){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let tt=0;tt<x.mipmaps.length;tt++)z.__webglFramebuffer[Q][tt]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(St)for(let Q=0,tt=st.length;Q<tt;Q++){let vt=n.get(st[Q]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<st.length;Q++){let tt=st[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let vt=r.convert(tt.format,tt.colorSpace),C=r.convert(tt.type),nt=w(tt.internalFormat,vt,C,tt.normalized,tt.colorSpace,T.isXRRenderTarget===!0),K=me(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,nt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),we(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),It(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)ae(z.__webglFramebuffer[Q][tt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else ae(z.__webglFramebuffer[Q],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);A(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(St){for(let Q=0,tt=st.length;Q<tt;Q++){let vt=st[Q],C=n.get(vt),nt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,C.__webglTexture),It(nt,vt),ae(z.__webglFramebuffer,T,vt,i.COLOR_ATTACHMENT0+Q,nt,0),A(vt)&&b(nt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,dt.__webglTexture),It(Q,x),x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)ae(z.__webglFramebuffer[tt],T,x,i.COLOR_ATTACHMENT0,Q,tt);else ae(z.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Q,0);A(x)?b(Q):x.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Ve(T)}function N(T){let x=T.textures;for(let z=0,dt=x.length;z<dt;z++){let st=x[z];if(A(st)&&st.mipmapsAutoUpdate===!0){let ft=v(T),St=n.get(st).__webglTexture;e.bindTexture(ft,St),b(ft),e.unbindTexture()}}}let an=[];function ie(T){if(T.samples>0){if(Tt(T)===!1){let x=T.textures,z=T.width,dt=T.height,st=i.COLOR_BUFFER_BIT,ft=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),Q=x.length>1;if(Q)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let C=n.get(x[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,dt,0,0,z,dt,st,i.NEAREST),l===!0&&(an.length=0,an.push(i.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&an.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let C=n.get(x[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function me(T){return Math.min(s.maxSamples,T.samples)}function Tt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ot(T,x){let z=T.colorSpace,dt=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Fs&&z!==ai&&(ne.getTransfer(z)===de?(dt!==Ln||st!==_n)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",z)),x}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Gt,this.resetTextureUnits=rt,this.getTextureUnits=at,this.setTextureUnits=Lt,this.setTexture2D=Et,this.setTexture2DArray=Pt,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=Pe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Tt,this.dispose=J}function y0(i,t){function e(n,s=ai){let r,a=ne.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return i.BYTE;if(n===Al)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Il)return i.RGB;if(n===Ln)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===hr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ga||n===Va||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===ur||n===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===Xa)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return r.COMPRESSED_RG11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===uo||n===fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===mo||n===dr||n===go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var v0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:v0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends Rn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,p=null,g=null,M=typeof XRWebGLBinding<"u",d=new ic,f={},S=e.getContextAttributes(),A=null,b=null,v=[],w=[],_=new zt,E=null,B=null,P=new tn;P.viewport=new Te;let U=new tn;U.viewport=new Te;let G=[P,U],j=new Pa,L=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let Et=v[et];return Et===void 0&&(Et=new us,v[et]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(et){let Et=v[et];return Et===void 0&&(Et=new us,v[et]=Et),Et.getGripSpace()},this.getHand=function(et){let Et=v[et];return Et===void 0&&(Et=new us,v[et]=Et),Et.getHandSpace()};function Y(et){let Et=w.indexOf(et.inputSource);if(Et===-1)return;let Pt=v[Et];Pt!==void 0&&(Pt.update(et.inputSource,et.frame,c||a),Pt.dispatchEvent({type:et.type,data:et.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ut);for(let et=0;et<v.length;et++){let Et=w[et];Et!==null&&(w[et]=null,v[et].disconnect(Et))}L=null,J=null,d.reset();for(let et in f)delete f[et];if(t.setRenderTarget(A),p=null,u=null,m=null,s=null,b=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),B!==null){let et=B.camera;et.fov=B.fov,et.zoom=B.zoom,et.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ut),S.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,F=null,W=null;S.depth&&(W=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=S.stencil?ri:ei,F=S.stencil?zi:Cn);let _t={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(_t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new mn(u.textureWidth,u.textureHeight,{format:Ln,type:_n,depthTexture:new ii(u.textureWidth,u.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new mn(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ut(et){for(let Et=0;Et<et.removed.length;Et++){let Pt=et.removed[Et],F=w.indexOf(Pt);F>=0&&(w[F]=null,v[F].disconnect(Pt))}for(let Et=0;Et<et.added.length;Et++){let Pt=et.added[Et],F=w.indexOf(Pt);if(F===-1){for(let _t=0;_t<v.length;_t++)if(_t>=w.length){w.push(Pt),F=_t;break}else if(w[_t]===null){w[_t]=Pt,F=_t;break}if(F===-1)break}let W=v[F];W&&W.connect(Pt)}}function $(et,Et){Et===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(Et.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let Et=et.near,Pt=et.far;d.texture!==null&&(d.depthNear>0&&(Et=d.depthNear),d.depthFar>0&&(Pt=d.depthFar)),j.near=U.near=P.near=Et,j.far=U.far=P.far=Pt,(L!==j.near||J!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),L=j.near,J=j.far),j.layers.mask=et.layers.mask|6,P.layers.mask=j.layers.mask&-5,U.layers.mask=j.layers.mask&-3;let F=et.parent,W=j.cameras;$(j,F);for(let _t=0;_t<W.length;_t++)$(W[_t],F);j.projectionMatrix.copy(P.projectionMatrix),j.projectionMatrixInverse.copy(P.projectionMatrixInverse),B===null&&et.isPerspectiveCamera&&(B={camera:et,fov:et.fov,zoom:et.zoom}),rt(et,j,F)};function rt(et,Et,Pt){Pt===null?et.matrix.copy(Et.matrixWorld):(et.matrix.copy(Pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(Et.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(Et.projectionMatrix),et.projectionMatrixInverse.copy(Et.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ls*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(j)},this.getCameraTexture=function(et){return f[et]};let at=null;function Lt(et,Et){if(h=Et.getViewerPose(c||a),g=Et,h!==null){let Pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let F=!1;Pt.length!==j.cameras.length&&(j.cameras.length=0,F=!0);for(let pt=0;pt<Pt.length;pt++){let It=Pt[pt],kt=null;if(p!==null)kt=p.getViewport(It);else{let fe=m.getViewSubImage(u,It);kt=fe.viewport,pt===0&&(t.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(b))}let Xt=G[pt];Xt===void 0&&(Xt=new tn,Xt.layers.enable(pt),Xt.viewport=new Te,G[pt]=Xt),Xt.matrix.fromArray(It.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(It.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(kt.x,kt.y,kt.width,kt.height),pt===0&&(j.matrix.copy(Xt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),F===!0&&j.cameras.push(Xt)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){m=n.getBinding();let pt=m.getDepthInformation(Pt[0]);pt&&pt.isValid&&pt.texture&&d.init(pt,s.renderState)}if(W&&W.includes("camera-access")&&M){t.state.unbindTexture(),m=n.getBinding();for(let pt=0;pt<Pt.length;pt++){let It=Pt[pt].camera;if(It){let kt=f[It];kt||(kt=new $s,f[It]=kt);let Xt=m.getCameraImage(It);kt.sourceTexture=Xt}}}}for(let Pt=0;Pt<v.length;Pt++){let F=w[Pt],W=v[Pt];F!==null&&W!==void 0&&W.update(F,Et,c||a)}at&&at(et,Et),Et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Et}),g=null}let Gt=new su;Gt.setAnimationLoop(Lt),this.setAnimationLoop=function(et){at=et},this.dispose=function(){}}},S0=new xe,pu=new Yt;pu.set(-1,0,0,0,1,0,0,0,1);function b0(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Xl(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,S,A,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(d,f):f.isMeshLambertMaterial?(r(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(d,f),m(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(d,f),u(d,f),f.isMeshPhysicalMaterial&&p(d,f,b)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),M(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,S,A):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===rn&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===rn&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let S=t.get(f),A=S.envMap,b=S.envMapRotation;A&&(d.envMap.value=A,d.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(pu),d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,S,A){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*S,d.scale.value=A*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function m(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function u(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,S){d.ior.value=f.ior,f.diffuseRoughness>0&&(d.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.retroreflectivity>0&&(d.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function M(d,f){let S=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E0(i,t,e,n){let s={},r={};function a(S,A){let b=A.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,A){let b=s[S.id];b===void 0&&(g(S),b=l(S),s[S.id]=b,S.addEventListener("dispose",d));let v=A.program;n.updateUBOMapping(S,v);let w=t.render.frame;r[S.id]!==w&&(c(S),r[S.id]=w)}function l(S){let A=i.createBuffer(),b=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,v),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){let A=s[S.id],b=S.uniforms,v=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,_=b.length;w<_;w++){let E=b[w];if(Array.isArray(E))for(let B=0,P=E.length;B<P;B++)h(E[B],w,B,v);else h(E,w,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,A,b,v){if(u(S,A,b,v)===!0){let w=S.__offset,_=S.value;if(Array.isArray(_)){let E=0;for(let B=0;B<_.length;B++){let P=_[B],U=M(P,!0);m(P,S.__data,E),E+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function m(S,A,b){typeof S=="number"||typeof S=="boolean"?A[b]=S:S.isMatrix3?(A[b]=S.elements[0],A[b+1]=S.elements[1],A[b+2]=S.elements[2],A[b+3]=0,A[b+4]=S.elements[3],A[b+5]=S.elements[4],A[b+6]=S.elements[5],A[b+7]=0,A[b+8]=S.elements[6],A[b+9]=S.elements[7],A[b+10]=S.elements[8],A[b+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-b),b):S.toArray(A,b)}function u(S,A,b,v){let w=S.value,_=A+"_"+b;if(Array.isArray(w)){v[_]===void 0&&(v[_]=[]);let E=v[_],B=!1;for(let P=0;P<w.length;P++)p(w[P],E,P)===!0&&(B=!0);return B}return p(w,v,_)}function p(S,A,b){if(A[b]===void 0)return typeof S=="number"||typeof S=="boolean"?A[b]=S:ArrayBuffer.isView(S)?A[b]=S.slice():A[b]=S.clone(),!0;{let v=A[b];if(typeof S=="number"||typeof S=="boolean"){if(v!==S)return A[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(v.equals(S)===!1)return v.copy(S),!0}}return!1}function g(S){let A=S.uniforms,b=0,v=16;for(let _=0,E=A.length;_<E;_++){let B=Array.isArray(A[_])?A[_]:[A[_]];for(let P=0,U=B.length;P<U;P++){let G=B[P],j=Array.isArray(G.value)?G.value:[G.value],L=Array.isArray(A[_])||Array.isArray(G.value),J=b;for(let H=0,ut=j.length;H<ut;H++){let $=j[H],rt=M($,L),at=b%v,Lt=at%rt.boundary,Gt=at+Lt;b+=Lt,Gt!==0&&v-Gt<rt.storage&&(b+=v-Gt),H===0&&(J=b),b+=rt.storage}let Y=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Y((b-J)/Float32Array.BYTES_PER_ELEMENT),G.__offset=J}}let w=b%v;return w>0&&(b+=v-w),S.__size=b,S.__cache={},this}function M(S,A){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function d(S){let A=S.target;A.removeEventListener("dispose",d),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:f}}var T0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function w0(){return Wn===null&&(Wn=new ha(T0,16,16,Ti,In),Wn.name="DFG_LUT",Wn.minFilter=en,Wn.magFilter=en,Wn.wrapS=Bn,Wn.wrapT=Bn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Mo=class{constructor(t={}){let{canvas:e=Rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,d=new Set([za,Ba,Oa]),f=new Set([_n,Cn,vs,zi,Ua,Fa]),S=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},v=null,w=null,_=[],E=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,G=null,j=null,L=null,J=null;this._outputColorSpace=De;let Y=0,H=0,ut=null,$=-1,rt=null,at=new Te,Lt=new Te,Gt=null,et=new qt(0),Et=0,Pt=e.width,F=e.height,W=1,_t=null,At=null,pt=new Te(0,0,Pt,F),It=new Te(0,0,Pt,F),kt=!1,Xt=new Ni,fe=new ua,re=!1,ye=!1,ae=new xe,we=new D,oe=new Te,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ke(){return ut===null?W:1}let N=n;function an(y,I){return e.getContext(y,I)}let ie,me,Tt,Ae,Ot,Ht,T,x,z,dt,st,ft,St,Q,tt,vt,C,nt,K,yt,gt,xt,Dt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",X,!1),N===null){let I="webgl2";if(N=an(I,y),N===null)throw an(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(y){throw e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",X,!1),Vt("WebGLRenderer: "+y.message),y}function Zt(){ie=new Om(N),ie.init(),gt=new y0(N,ie),me=new wm(N,ie,t,gt),Tt=new _0(N,ie),me.reversedDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),j=N.createFramebuffer(),L=N.createFramebuffer(),J=N.createFramebuffer(),Ae=new km(N),Ot=new i0,Ht=new x0(N,ie,Tt,Ot,me,gt,Ae),T=new Fm(P),x=new Gd(N),xt=new Em(N,x),z=new Bm(N,x,Ae,xt),dt=new Vm(N,z,x,xt,Ae),nt=new Gm(N,me,Ht),tt=new Am(Ot),st=new n0(P,T,ie,me,xt,tt),ft=new b0(P,Ot),St=new r0,Q=new u0(ie),C=new bm(P,T,Tt,dt,g,l),vt=new g0(P,dt,me),Dt=new E0(N,Ae,me,Tt),K=new Tm(N,ie,Ae),yt=new zm(N,ie,Ae),Ae.programs=st.programs,P.capabilities=me,P.extensions=ie,P.properties=Ot,P.renderLists=St,P.shadowMap=vt,P.state=Tt,P.info=Ae}M!==_n&&(B=new Wm(M,e.width,e.height,o,s,r));let R=new sc(P,N);this.xr=R,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(Pt,F,!1))},this.getSize=function(y){return y.set(Pt,F)},this.setSize=function(y,I,V=!0){if(R.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pt=y,F=I,e.width=Math.floor(y*W),e.height=Math.floor(I*W),V===!0&&(e.style.width=y+"px",e.style.height=I+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Pt*W,F*W).floor()},this.setDrawingBufferSize=function(y,I,V){Pt=y,F=I,W=V,e.width=Math.floor(y*V),e.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(M===_n){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(at)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,I,V,O){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,I,V,O),Tt.viewport(at.copy(pt).multiplyScalar(Ke()).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,I,V,O){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,I,V,O),Tt.scissor(Lt.copy(It).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(y){Tt.setScissorTest(kt=y)},this.setOpaqueSort=function(y){_t=y},this.setTransparentSort=function(y){At=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let O=0;if(y){let k=!1;if(ut!==null){let q=ut.texture.format;k=d.has(q)}if(k){let q=ut.texture.type,ht=f.has(q),lt=C.getClearColor(),Mt=C.getClearAlpha(),bt=lt.r,Ft=lt.g,Wt=lt.b;ht?(S[0]=bt,S[1]=Ft,S[2]=Wt,S[3]=Mt,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=bt,A[1]=Ft,A[2]=Wt,A[3]=Mt,N.clearBufferiv(N.COLOR,0,A))}else O|=N.COLOR_BUFFER_BIT}I&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),G=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",X,!1),C.dispose(),St.dispose(),Q.dispose(),Ht.dispose(),Ot.dispose(),T.dispose(),dt.dispose(),z.dispose(),xt.dispose(),Dt.dispose(),st.dispose(),R.dispose(),R.removeEventListener("sessionstart",Jt),R.removeEventListener("sessionend",se),Se.stop()};function Z(y){y.preventDefault(),ks("WebGLRenderer: Context Lost."),U=!0}function it(){ks("WebGLRenderer: Context Restored."),U=!1;let y=Ae.autoReset,I=vt.enabled,V=vt.autoUpdate,O=vt.needsUpdate,k=vt.type;Zt(),Ae.autoReset=y,vt.enabled=I,vt.autoUpdate=V,vt.needsUpdate=O,vt.type=k}function X(y){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){let I=y.target;I.removeEventListener("dispose",ct),mt(I)}function mt(y){ot(y),Ot.remove(y)}function ot(y){let I=Ot.get(y).programs;I!==void 0&&(I.forEach(function(V){st.releaseProgram(V)}),y.isShaderMaterial&&st.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,O,k,q){I===null&&(I=Ve);let ht=k.isMesh&&k.matrixWorld.determinantAffine()<0,lt=Gi(y,I,V,O,k);Tt.setMaterial(O,ht);let Mt=V.index,bt=1;if(O.wireframe===!0){if(Mt=z.getWireframeAttribute(V),Mt===void 0)return;bt=2}let Ft=V.drawRange,Wt=V.attributes.position,Rt=Ft.start*bt,$t=(Ft.start+Ft.count)*bt;q!==null&&(Rt=Math.max(Rt,q.start*bt),$t=Math.min($t,(q.start+q.count)*bt)),Mt!==null?(Rt=Math.max(Rt,0),$t=Math.min($t,Mt.count)):Wt!=null&&(Rt=Math.max(Rt,0),$t=Math.min($t,Wt.count));let ue=$t-Rt;if(ue<0||ue===1/0)return;xt.setup(k,O,lt,V,Mt);let le,ee=K;if(Mt!==null&&(le=x.get(Mt),ee=yt,ee.setIndex(le)),k.isMesh)O.wireframe===!0?(Tt.setLineWidth(O.wireframeLinewidth*Ke()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(k.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),Tt.setLineWidth(Ce*Ke()),k.isLineSegments?ee.setMode(N.LINES):k.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else k.isPoints?ee.setMode(N.POINTS):k.isSprite&&ee.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ce=k._multiDrawStarts,Ct=k._multiDrawCounts,Ne=k._multiDrawCount,Kt=Mt?x.get(Mt).bytesPerElement:1,hn=Ot.get(O).currentProgram.getUniforms();for(let Ie=0;Ie<Ne;Ie++)hn.setValue(N,"_gl_DrawID",Ie),ee.render(Ce[Ie]/Kt,Ct[Ie])}else if(k.isInstancedMesh)ee.renderInstances(Rt,ue,k.count);else if(V.isInstancedBufferGeometry){let Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ct=Math.min(V.instanceCount,Ce);ee.renderInstances(Rt,ue,Ct)}else ee.render(Rt,ue)};function Nt(y,I,V,O){G!==null&&y.isNodeMaterial&&G.setObject(O,y),re===!0&&tt.setState(y,V,!1),y.transparent===!0&&y.side===Gn&&y.forceSinglePass===!1?(y.side=rn,y.needsUpdate=!0,Re(y,I,O),y.side=bi,y.needsUpdate=!0,Re(y,I,O),y.side=Gn):Re(y,I,O)}this.compile=function(y,I,V=null){V===null&&(V=y),G!==null&&G.renderStart(y,I,V),w=Q.get(V),w.init(I),E.push(w),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),y!==V&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),ye=this.localClippingEnabled,re=tt.init(this.clippingPlanes,ye),re===!0&&tt.setGlobalState(this.clippingPlanes,I),G!==null&&vt.render(w.state.shadowsArray,V,I);let O=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let q=k.material;if(q)if(Array.isArray(q))for(let ht=0;ht<q.length;ht++){let lt=q[ht];Nt(lt,V,I,k),O.add(lt)}else Nt(q,V,I,k),O.add(q)}),w=E.pop(),G!==null&&G.renderEnd(),O},this.compileAsync=function(y,I,V=null){let O=this.compile(y,I,V);return new Promise(k=>{function q(){if(O.forEach(function(ht){let Mt=Ot.get(ht).currentProgram;(Mt===void 0||Mt.isReady())&&O.delete(ht)}),O.size===0){k(y);return}setTimeout(q,10)}ie.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Ut=null;function he(y){Ut&&Ut(y)}function Jt(){Se.stop()}function se(){Se.start()}let Se=new su;Se.setAnimationLoop(he),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(y){Ut=y,R.setAnimationLoop(y),y===null?Se.stop():Se.start()},R.addEventListener("sessionstart",Jt),R.addEventListener("sessionend",se),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(y,I);let V=R.enabled===!0&&R.isPresenting===!0,O=B!==null&&(ut===null||V)&&B.begin(P,ut);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(R.cameraAutoUpdate===!0&&R.updateCamera(I),I=R.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,ut),w=Q.get(y,E.length),w.init(I),w.state.textureUnits=Ht.getTextureUnits(),E.push(w),ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?fe.setFromArrayCamera(I):Xt.setFromProjectionMatrix(ae,vn,I.reversedDepth),ye=this.localClippingEnabled,re=tt.init(this.clippingPlanes,ye),v=St.get(y,_.length),v.init(),_.push(v),this.info.render.frame++,R.enabled===!0&&R.isPresenting===!0){let ht=P.xr.getDepthSensingMesh();ht!==null&&qe(ht,I,-1/0,P.sortObjects)}qe(y,I,0,P.sortObjects),v.finish(),G!==null&&G.updateLights(w.state.lightsArray),P.sortObjects===!0&&v.sort(_t,At),Pe=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Pe&&C.addToRenderList(v,y),this.info.autoReset===!0&&this.info.reset(),re===!0&&tt.beginShadows();let k=w.state.shadowsArray;if(vt.render(k,y,I),re===!0&&tt.endShadows(),(O&&B.hasRenderPass())===!1){let ht=v.opaque,lt=v.transmissive;if(w.setupLights(),I.isArrayCamera){let Mt=I.cameras;if(lt.length>0)for(let bt=0,Ft=Mt.length;bt<Ft;bt++){let Wt=Mt[bt];be(ht,lt,y,Wt)}Pe&&C.render(y);for(let bt=0,Ft=Mt.length;bt<Ft;bt++){let Wt=Mt[bt];ge(v,y,Wt,Wt.viewport)}}else lt.length>0&&be(ht,lt,y,I),Pe&&C.render(y),ge(v,y,I)}ut!==null&&H===0&&(Ht.updateMultisampleRenderTarget(ut),Ht.updateRenderTargetMipmap(ut)),O&&B.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),xt.resetDefaultState(),$=-1,rt=null,E.pop(),E.length>0?(w=E[E.length-1],Ht.setTextureUnits(w.state.textureUnits),re===!0&&tt.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,G!==null&&G.renderEnd()};function qe(y,I,V,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let ht=I.isArrayCamera?fe:Xt;if(!y.frustumCulled||y.intersectsFrustum(ht)){O&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ae);let lt=dt.update(y),Mt=y.material;Mt.visible&&v.push(y,lt,Mt,V,oe.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let ht=I.isArrayCamera?fe:Xt;if(!y.frustumCulled||y.intersectsFrustum(ht)){let lt=dt.update(y),Mt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),oe.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),oe.copy(lt.boundingSphere.center)),oe.applyMatrix4(y.matrixWorld).applyMatrix4(ae)),Array.isArray(Mt)){let bt=lt.groups;for(let Ft=0,Wt=bt.length;Ft<Wt;Ft++){let Rt=bt[Ft],$t=Mt[Rt.materialIndex];$t&&$t.visible&&v.push(y,lt,$t,V,oe.z,Rt,I)}}else Mt.visible&&v.push(y,lt,Mt,V,oe.z,null,I)}}}let q=y.children;for(let ht=0,lt=q.length;ht<lt;ht++)qe(q[ht],I,V,O)}function ge(y,I,V,O){let{opaque:k,transmissive:q,transparent:ht}=y;w.setupLightsView(V),re===!0&&tt.setGlobalState(P.clippingPlanes,V),O&&Tt.viewport(at.copy(O)),k.length>0&&_e(k,I,V),q.length>0&&_e(q,I,V),ht.length>0&&_e(ht,I,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function be(y,I,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Rt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new mn(1,1,{generateMipmaps:!0,type:Rt?In:_n,minFilter:si,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let q=w.state.transmissionRenderTarget[O.id],ht=O.viewport||at;q.setSize(ht.z*P.transmissionResolutionScale,ht.w*P.transmissionResolutionScale);let lt=P.getRenderTarget(),Mt=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(q),P.getClearColor(et),Et=P.getClearAlpha(),Et<1&&P.setClearColor(16777215,.5),P.clear(),Pe&&C.render(V);let Ft=P.toneMapping;P.toneMapping=Hn;let Wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),re===!0&&tt.setGlobalState(P.clippingPlanes,O),_e(y,V,O),Ht.updateMultisampleRenderTarget(q),Ht.updateRenderTargetMipmap(q),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let $t=0,ue=I.length;$t<ue;$t++){let le=I[$t],{object:ee,geometry:Ce,material:Ct,group:Ne}=le;if(Ct.side===Gn&&ee.layers.test(O.layers)){let Kt=Ct.side;Ct.side=rn,Ct.needsUpdate=!0,pe(ee,V,O,Ce,Ct,Ne),Ct.side=Kt,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ht.updateMultisampleRenderTarget(q),Ht.updateRenderTargetMipmap(q))}P.setRenderTarget(lt,Mt,bt),P.setClearColor(et,Et),Wt!==void 0&&(O.viewport=Wt),P.toneMapping=Ft}function _e(y,I,V){let O=I.isScene===!0?I.overrideMaterial:null;for(let k=0,q=y.length;k<q;k++){let ht=y[k],{object:lt,geometry:Mt,group:bt}=ht,Ft=ht.material;Ft.allowOverride===!0&&O!==null&&(Ft=O),lt.layers.test(V.layers)&&pe(lt,I,V,Mt,Ft,bt)}}function pe(y,I,V,O,k,q){G!==null&&k.isNodeMaterial&&G.setObject(y,k),y.onBeforeRender(P,I,V,O,k,q),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(P,I,V,O,y,q),k.transparent===!0&&k.side===Gn&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,P.renderBufferDirect(V,I,O,k,y,q),k.side=bi,k.needsUpdate=!0,P.renderBufferDirect(V,I,O,k,y,q),k.side=Gn):P.renderBufferDirect(V,I,O,k,y,q),y.onAfterRender(P,I,V,O,k,q)}function He(y){let I=0;for(let V of y)V.texture!==null&&I++;return I}function Re(y,I,V){I.isScene!==!0&&(I=Ve);let O=Ot.get(y),k=w.state.lights,q=w.state.shadowsArray,ht=k.state.version,lt=st.getParameters(y,k.state,q,I,V,w.state.lightProbeGridArray),Mt=st.getProgramCacheKey(lt),bt=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let Ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=T.get(y.envMap||O.environment,Ft),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",ct),bt=new Map,O.programs=bt,O.programVariants=new Map);let Wt=bt.get(Mt);if(Wt!==void 0){if(O.currentProgram===Wt&&O.lightsStateVersion===ht)return Ri(y,lt),Wt}else lt.uniforms=st.getUniforms(y),G!==null&&y.isNodeMaterial&&G.build(y,V,lt),y.onBeforeCompile(lt,P),Wt=st.acquireProgram(lt,Mt),bt.set(Mt,Wt),O.uniforms=lt.uniforms;let Rt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=tt.uniform),Ri(y,lt),O.needsLights=Un(y),O.lightsStateVersion=ht,O.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.sunLights.value=k.state.sun,Rt.sunLightShadows.value=k.state.sunShadow,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.sunShadowMatrix.value=k.state.sunShadowMatrix,Rt.sunShadowCascade.value=k.state.sunShadowCascade,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=He(w.state.lightProbeGridArray),O.currentProgram=Wt,O.uniformsList=null,Wt}function je(y,I,V,O,k){let q=Ot.get(y),ht=q.currentProgram.id+","+O+","+k,lt=q.programVariants.get(ht);return lt===void 0?(lt=Re(y,I,V),q.programVariants.set(ht,lt)):(q.currentProgram=lt,q.uniformsList=null,q.outputColorSpace=O,q.toneMapping=k),lt}function qn(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ms.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ri(y,I){let V=Ot.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Gi(y,I,V,O,k){I.isScene!==!0&&(I=Ve),Ht.resetTextureUnits();let q=I.fog,ht=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,lt=ut===null?P.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ne.workingColorSpace,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,bt=T.get(O.envMap||ht,Mt),Ft=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Rt=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,ue=!!V.morphAttributes.color,le=Hn;O.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(le=P.toneMapping);let ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ce=ee!==void 0?ee.length:0,Ct=Ot.get(O),Ne=w.state.lights;if(re===!0&&(ye===!0||y!==rt)){let Ee=y===rt&&O.id===$;tt.setState(O,y,Ee)}let Kt=!1,hn=!1;O.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==Ne.state.version||k.isBatchedMesh&&Ct.batching===!1||!k.isBatchedMesh&&Ct.batching===!0||k.isBatchedMesh&&Ct.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ct.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ct.instancing===!1||!k.isInstancedMesh&&Ct.instancing===!0||k.isSkinnedMesh&&Ct.skinning===!1||!k.isSkinnedMesh&&Ct.skinning===!0||k.isInstancedMesh&&Ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ct.instancingMorph===!1&&k.morphTexture!==null||Ct.envMap!==bt||O.fog===!0&&Ct.fog!==q||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==tt.numPlanes||Ct.numIntersection!==tt.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==Wt||Ct.morphTargets!==Rt||Ct.morphNormals!==$t||Ct.morphColors!==ue||Ct.morphTargetsCount!==Ce||Ct.numLightProbeGrids!==He(w.state.lightProbeGridArray)?Kt=!0:(Ct.outputColorSpace!==lt||Ct.toneMapping!==le)&&(hn=!0):(Kt=!0,Ct.__version=O.version);let Ie=Ct.currentProgram;(Kt===!0||hn===!0)&&(Ie=hn===!0?je(O,I,k,lt,le):Re(O,I,k),G&&O.isNodeMaterial&&G.onUpdateProgram(O,Ie,Ct));let bn=!1,on=!1,Fn=!1,te=Ie.getUniforms(),We=Ct.uniforms;if(Tt.useProgram(Ie.program)&&(bn=!0,on=!0,Fn=!0),O.id!==$&&($=O.id,on=!0),bn||rt!==y){Tt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),te.setValue(N,"projectionMatrix",y.projectionMatrix),te.setValue(N,"viewMatrix",y.matrixWorldInverse);let ze=te.map.cameraPosition;ze!==void 0&&ze.setValue(N,we.setFromMatrixPosition(y.matrixWorld)),me.logarithmicDepthBuffer&&te.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&te.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),rt!==y&&(rt=y,on=!0,Fn=!0)}if(Ct.needsLights&&(Ne.state.sunShadowMap.length>0&&te.setValue(N,"sunShadowMap",Ne.state.sunShadowMap,Ht),Ne.state.directionalShadowMap.length>0&&te.setValue(N,"directionalShadowMap",Ne.state.directionalShadowMap,Ht),Ne.state.spotShadowMap.length>0&&te.setValue(N,"spotShadowMap",Ne.state.spotShadowMap,Ht),Ne.state.pointShadowMap.length>0&&te.setValue(N,"pointShadowMap",Ne.state.pointShadowMap,Ht)),k.isSkinnedMesh){te.setOptional(N,k,"bindMatrix"),te.setOptional(N,k,"bindMatrixInverse");let Ee=k.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),te.setValue(N,"boneTexture",Ee.boneTexture,Ht))}k.isBatchedMesh&&(te.setOptional(N,k,"batchingTexture"),te.setValue(N,"batchingTexture",k._matricesTexture,Ht),te.setOptional(N,k,"batchingIdTexture"),te.setValue(N,"batchingIdTexture",k._indirectTexture,Ht),te.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&te.setValue(N,"batchingColorTexture",k._colorsTexture,Ht));let En=V.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&nt.update(k,V,Ie),(on||Ct.receiveShadow!==k.receiveShadow)&&(Ct.receiveShadow=k.receiveShadow,te.setValue(N,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(We.envMapIntensity.value=I.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=w0()),on){if(te.setValue(N,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Ci(We,Fn),q&&O.fog===!0&&ft.refreshFogUniforms(We,q),ft.refreshMaterialUniforms(We,O,W,F,w.state.transmissionRenderTarget[y.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let Ee=b,ze=0;for(let Yn of w.state.lightProbeGridArray)Yn.texture!==null&&(Ee.textures[ze]=Yn.texture,Ee.min[ze]=Yn.boundingBox.min,Ee.max[ze]=Yn.boundingBox.max,Ee.resolution[ze]=Yn.resolution,ze++);for(let Yn in Ee)Ee[Yn].length=ze;We.probesSH.value=Ee.textures,We.probesMin.value=Ee.min,We.probesMax.value=Ee.max,We.probesResolution.value=Ee.resolution}Ms.upload(N,qn(Ct),We,Ht)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ms.upload(N,qn(Ct),We,Ht),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&te.setValue(N,"center",k.center),te.setValue(N,"modelViewMatrix",k.modelViewMatrix),te.setValue(N,"normalMatrix",k.normalMatrix),te.setValue(N,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let Ee=O.uniformsGroups;for(let ze=0,Yn=Ee.length;ze<Yn;ze++){let pc=Ee[ze];Dt.update(pc,Ie),Dt.bind(pc,Ie)}}return Ie}function Ci(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Un(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(y,I,V){let O=Ot.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ot.get(y.texture).__webglTexture=I,Ot.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let V=Ot.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){ut=y,Y=I,H=V;let O=null,k=!1,q=!1;if(y){let lt=Ot.get(y);if(lt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(N.FRAMEBUFFER,lt.__webglFramebuffer),at.copy(y.viewport),Lt.copy(y.scissor),Gt=y.scissorTest,Tt.viewport(at),Tt.scissor(Lt),Tt.setScissorTest(Gt),$=-1;return}else if(lt.__webglFramebuffer===void 0)Ht.setupRenderTarget(y);else if(lt.__hasExternalTextures)Ht.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ft=y.depthTexture;if(lt.__boundDepthTexture!==Ft){if(Ft!==null&&Ot.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(y)}}let Mt=y.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(q=!0);let bt=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?O=bt[I][V]:O=bt[I],k=!0):y.samples>0&&Ht.useMultisampledRTT(y)===!1?O=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(bt)?O=bt[V]:O=bt,at.copy(y.viewport),Lt.copy(y.scissor),Gt=y.scissorTest}else at.copy(pt).multiplyScalar(W).floor(),Lt.copy(It).multiplyScalar(W).floor(),Gt=kt;if(V!==0&&(O=j),Tt.bindFramebuffer(N.FRAMEBUFFER,O)&&Tt.drawBuffers(y,O),Tt.viewport(at),Tt.scissor(Lt),Tt.setScissorTest(Gt),k){let lt=Ot.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,lt.__webglTexture,V)}else if(q){let lt=I;for(let Mt=0;Mt<y.textures.length;Mt++){let bt=Ot.get(y.textures[Mt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Mt,bt.__webglTexture,V,lt)}}else if(y!==null&&V!==0){let lt=Ot.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,lt.__webglTexture,V)}$=-1};function bs(y){let I=Ot.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=me.textureFormatReadable(y.format),I.__typeReadable=me.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,V,O,k,q,ht,lt=0){if(!(y&&y.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){Tt.bindFramebuffer(N.FRAMEBUFFER,Mt);try{let bt=y.textures[lt],Ft=bt.format,Wt=bt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+lt);let Rt=bs(bt);if(Rt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&V>=0&&V<=y.height-k&&N.readPixels(I,V,O,k,gt.convert(Ft),gt.convert(Wt),q)}finally{let bt=ut!==null?Ot.get(ut).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,O,k,q,ht,lt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(I>=0&&I<=y.width-O&&V>=0&&V<=y.height-k){Tt.bindFramebuffer(N.FRAMEBUFFER,Mt);let bt=y.textures[lt],Ft=bt.format,Wt=bt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+lt);let Rt=bs(bt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,q.byteLength,N.STREAM_READ),N.readPixels(I,V,O,k,gt.convert(Ft),gt.convert(Wt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ue=ut!==null?Ot.get(ut).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,ue);let le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ph(N,le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,q),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer($t),N.deleteSync(le),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){let O=Math.pow(2,-V),k=Math.floor(y.image.width*O),q=Math.floor(y.image.height*O),ht=I!==null?I.x:0,lt=I!==null?I.y:0;Ht.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ht,lt,k,q),Tt.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,O=null,k=0,q=0){let ht,lt,Mt,bt,Ft,Wt,Rt,$t,ue,le=y.isCompressedTexture?y.mipmaps[q]:y.image;if(V!==null)ht=V.max.x-V.min.x,lt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,bt=V.min.x,Ft=V.min.y,Wt=V.isBox3?V.min.z:0;else{let te=Math.pow(2,-k);ht=Math.floor(le.width*te),lt=Math.floor(le.height*te),y.isDataArrayTexture?Mt=le.depth:y.isData3DTexture?Mt=Math.floor(le.depth*te):Mt=1,bt=0,Ft=0,Wt=0}O!==null?(Rt=O.x,$t=O.y,ue=O.z):(Rt=0,$t=0,ue=0);let ee=gt.convert(I.format),Ce=gt.convert(I.type),Ct;I.isData3DTexture?(Ht.setTexture3D(I,0),Ct=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ht.setTexture2DArray(I,0),Ct=N.TEXTURE_2D_ARRAY):(Ht.setTexture2D(I,0),Ct=N.TEXTURE_2D),Tt.activeTexture(N.TEXTURE0),Tt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),Tt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),Tt.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Ne=Tt.getParameter(N.UNPACK_ROW_LENGTH),Kt=Tt.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=Tt.getParameter(N.UNPACK_SKIP_PIXELS),Ie=Tt.getParameter(N.UNPACK_SKIP_ROWS),bn=Tt.getParameter(N.UNPACK_SKIP_IMAGES);Tt.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),Tt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),Tt.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),Tt.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),Tt.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt);let on=y.isDataArrayTexture||y.isData3DTexture,Fn=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let te=Ot.get(y),We=Ot.get(I),En=Ot.get(te.__renderTarget),Ee=Ot.get(We.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,En.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ze=0;ze<Mt;ze++)on&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(y).__webglTexture,k,Wt+ze),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(I).__webglTexture,q,ue+ze)),N.blitFramebuffer(bt,Ft,bt+ht,Ft+lt,Rt,$t,Rt+ht,$t+lt,N.DEPTH_BUFFER_BIT,N.NEAREST);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Ot.has(y)){let te=Ot.get(y),We=Ot.get(I);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,L),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,J);for(let En=0;En<Mt;En++)on?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,te.__webglTexture,k,Wt+En):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,te.__webglTexture,k),Fn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,q,ue+En):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,We.__webglTexture,q),k!==0?N.blitFramebuffer(bt,Ft,bt+ht,Ft+lt,Rt,$t,Rt+ht,$t+lt,N.COLOR_BUFFER_BIT,N.NEAREST):Fn?N.copyTexSubImage3D(Ct,q,Rt,$t,ue+En,bt,Ft,ht,lt):N.copyTexSubImage2D(Ct,q,Rt,$t,bt,Ft,ht,lt);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Fn?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Ct,q,Rt,$t,ue,ht,lt,Mt,ee,Ce,le.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,q,Rt,$t,ue,ht,lt,Mt,ee,le.data):N.texSubImage3D(Ct,q,Rt,$t,ue,ht,lt,Mt,ee,Ce,le):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,Rt,$t,ht,lt,ee,Ce,le.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,Rt,$t,le.width,le.height,ee,le.data):N.texSubImage2D(N.TEXTURE_2D,q,Rt,$t,ht,lt,ee,Ce,le);Tt.pixelStorei(N.UNPACK_ROW_LENGTH,Ne),Tt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),Tt.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),Tt.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),Tt.pixelStorei(N.UNPACK_SKIP_IMAGES,bn),q===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Ct),Tt.unbindTexture()},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&Ht.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ht.setTextureCube(y,0):y.isData3DTexture?Ht.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ht.setTexture2DArray(y,0):Ht.setTexture2D(y,0),Tt.unbindTexture()},this.resetState=function(){Y=0,H=0,ut=null,Tt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var mu={type:"change"},ac={type:"start"},_u={type:"end"},Eo=new ni,gu=new fn,R0=Math.cos(70*Hl.DEG2RAD),Oe=new D,cn=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rc=1e-6,To=class extends sr{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new pn,this._lastTargetPosition=new D,this._quat=new pn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _s,this._sphericalDelta=new _s,this._scale=1,this._panOffset=new D,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new D,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P0.bind(this),this._onPointerDown=C0.bind(this),this._onPointerUp=I0.bind(this),this._onContextMenu=B0.bind(this),this._onMouseWheel=N0.bind(this),this._onKeyDown=U0.bind(this),this._onTouchStart=F0.bind(this),this._onTouchMove=O0.bind(this),this._onMouseDown=L0.bind(this),this._onMouseMove=D0.bind(this),this._interceptControlDown=z0.bind(this),this._interceptControlUp=k0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mu),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Oe.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<R0?this.object.lookAt(this.target):(gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(gu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rc||this._lastTargetPosition.distanceToSquared(this.target)>rc?(this.dispatchEvent(mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function C0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function P0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function I0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_u),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function L0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ac)}function D0(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function N0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(ac),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_u))}function U0(i){this.enabled!==!1&&this._handleKeyDown(i)}function F0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1){this.state=ce.NONE;break}this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1){this.state=ce.NONE;break}this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ac)}function O0(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function B0(i){this.enabled!==!1&&i.preventDefault()}function z0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ao(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function oi(i){let t=i>>>0||1;return()=>(t=Math.imul(t^t>>>15,2246822507)+2654435769>>>0,t^=t>>>13,(t>>>0)/4294967296)}function Be(i){let t=Math.max(1e-9,i()),e=i();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}var xu=62,xn={r0:52,b:.5,theta0:.3,span:3,thickness:.3};function wo(i,t,e){let n=i*2*Math.PI/t+xn.theta0+e*xn.span,s=xn.r0*Math.exp(xn.b*e*xn.span);return[s*Math.cos(n),s*Math.sin(n),s,n]}function G0(i,t){return[...i].sort((e,n)=>t[n]-t[e]||e-n)}function yu(i,t={}){let e=t.linkForce??.5,n=t.cohesion??.5,s=[...new Set(i.courses.map(F=>F.branch))].sort((F,W)=>F-W),r=Math.max(2,s.length),a=i.courses.length,o=new Array(a).fill(0),l=new Array(i.nodes.length).fill(0);for(let[F,W]of i.links)l[F]++,l[W]++;let c=t.orphans==="satellites",h=i.nodes.map((F,W)=>c&&!F.core&&F.course>=0&&l[W]===0);i.nodes.forEach((F,W)=>{F.course>=0&&!h[W]&&o[F.course]++});let m=new Array(a).fill(0);for(let[F,W,_t=1]of i.links){if(i.nodes[F].core||i.nodes[W].core)continue;let At=i.nodes[F].course,pt=i.nodes[W].course;At>=0&&(m[At]+=_t),pt>=0&&pt!==At&&(m[pt]+=_t)}let u=i.courses.map(F=>({...F,center:[0,0,0],radius:10,arm:0,t:0,count:0})),p=Math.sqrt(1+xn.b*xn.b)/xn.b,g=F=>Math.log(1+F/(p*xn.r0))/xn.b/xn.span,M=[];s.forEach((F,W)=>{let _t=G0(u.map((It,kt)=>It.branch===F?kt:-1).filter(It=>It>=0),m),At=75,pt=0;_t.forEach((It,kt)=>{let Xt=10+5*Math.sqrt(o[It]);At+=kt===0?Xt:pt+Xt+14,pt=Xt;let fe=g(At),[re,ye]=wo(W,r,fe);Object.assign(u[It],{strength:m[It],anchor:[re,ye,0],center:[re,ye,0],radius:Xt,arm:W,t:fe,count:o[It]})}),M[W]=g(At+pt+10)});let d=i.nodes.length,f=new Float32Array(d*3),S=0;u.forEach(F=>{S=Math.max(S,Math.hypot(F.anchor?.[0]??0,F.anchor?.[1]??0)+F.radius)}),S+=70;let A=.6,b=.27,v={a:S*1.05,b:S*.62,V:[Math.cos(A)*Math.sin(b),Math.sin(A)*Math.sin(b),Math.cos(b)],H:[-Math.sin(A),Math.cos(A),0]};v.off=0;let w=F=>{let W=v.a*Math.cos(F)+v.off,_t=v.b*Math.sin(F);return[v.V[0]*W+v.H[0]*_t,v.V[1]*W+v.H[1]*_t,v.V[2]*W+v.H[2]*_t]},_=i.nodes.map((F,W)=>h[W]?W:-1).filter(F=>F>=0).sort((F,W)=>i.nodes[F].course-i.nodes[W].course||F-W),E=new Map,B=[];{let F=0,W=null,_t=_.map(At=>{let pt=i.nodes[At].course;return W!==null&&pt!==W&&(F+=1.5),W=pt,F++});_.forEach((At,pt)=>E.set(At,_t[pt]/Math.max(1,F)*Math.PI*2+.4))}i.nodes.forEach((F,W)=>{let _t=oi(Ao(F.id));if(h[W]){let At=w(E.get(W)),pt=[Be(_t)*3,Be(_t)*3,Be(_t)*3];B.push({i:W,th:E.get(W),off:pt}),f.set([At[0]+pt[0],At[1]+pt[1],At[2]+pt[2]],W*3)}else if(F.course<0){let At=F.core?0:18;f.set([Be(_t)*At,Be(_t)*At,Be(_t)*At*.3],W*3)}else{let At=u[F.course],pt=At.radius*.5;f.set([At.center[0]+Be(_t)*pt,At.center[1]+Be(_t)*pt,Be(_t)*pt*.5],W*3)}});let P=new Float32Array(d*3),U=[],G=[],j=[];for(let F of i.links)(i.nodes[F[0]].course===i.nodes[F[1]].course?U:G).push(F),!i.nodes[F[0]].core&&!i.nodes[F[1]].core&&j.push(F);let L=j.filter(F=>i.nodes[F[0]].course===i.nodes[F[1]].course),J=j.filter(F=>i.nodes[F[0]].course!==i.nodes[F[1]].course),Y=0,H=0,ut=xu,$=F=>{let W=F.supernovaStage??1;ut=xu*(F.supernovaSize??1)*(W<.15?1:.6+.4*Math.min(1,(W-.15)/.85)),Y=.004+.05*(F.linkForce??.5),H=.006+.08*(F.cohesion??.5)};$(t);let rt=1/300,at=1,Lt=(F,W,_t)=>{for(let[At,pt,It=1]of F){let kt=Math.min(3,Math.log2(1+It)),Xt=W/(.6+.4*kt),fe=f[pt*3]-f[At*3],re=f[pt*3+1]-f[At*3+1],ye=f[pt*3+2]-f[At*3+2],ae=Math.sqrt(fe*fe+re*re+ye*ye)+1e-6,we=Math.min(.3,(ae-Xt)/ae*Y*_t*kt*at);P[At*3]+=fe*we,P[At*3+1]+=re*we,P[At*3+2]+=ye*we,P[pt*3]-=fe*we,P[pt*3+1]-=re*we,P[pt*3+2]-=ye*we}};function Gt(){for(let F=0;F<d;F++)for(let W=F+1;W<d;W++){let _t=f[F*3]-f[W*3],At=f[F*3+1]-f[W*3+1],pt=f[F*3+2]-f[W*3+2],It=_t*_t+At*At+pt*pt+.5;if(It>900)continue;let kt=20*at/It;P[F*3]+=_t*kt,P[F*3+1]+=At*kt,P[F*3+2]+=pt*kt,P[W*3]-=_t*kt,P[W*3+1]-=At*kt,P[W*3+2]-=pt*kt}Lt(L,7,1),Lt(J,16,.5);for(let F=0;F<d;F++){let W=i.nodes[F];if(W.core){f.set([0,0,0],F*3),P.fill(0,F*3,F*3+3);continue}if(h[F]){P.fill(0,F*3,F*3+3);continue}let _t=W.course>=0?u[W.course].anchor:[0,0,0],At=W.course>=0?H:.01;P[F*3]+=(_t[0]-f[F*3])*At*at,P[F*3+1]+=(_t[1]-f[F*3+1])*At*at,P[F*3+2]+=-f[F*3+2]*.06*at;let pt=Math.hypot(f[F*3],f[F*3+1],f[F*3+2]);if(pt<ut){let It=(ut-pt)/Math.max(pt,1)*.5;P[F*3]+=f[F*3]*It,P[F*3+1]+=f[F*3+1]*It}for(let It=0;It<3;It++)P[F*3+It]*=.6,f[F*3+It]+=P[F*3+It]}at=Math.max(0,at-rt)}let et=u.map((F,W)=>i.nodes.map((_t,At)=>_t.course===W&&!h[At]?At:-1).filter(_t=>_t>=0));function Et(){u.forEach((F,W)=>{let _t=et[W];if(!_t.length)return;let At=[0,0,0];_t.forEach(It=>{for(let kt=0;kt<3;kt++)At[kt]+=f[It*3+kt]/_t.length});let pt=_t.map(It=>Math.hypot(f[It*3]-At[0],f[It*3+1]-At[1],f[It*3+2]-At[2])).sort((It,kt)=>It-kt);F.center=At,F.radius=Math.max(10,pt[Math.floor((pt.length-1)*.8)])})}for(;at>0;)Gt();Et();let Pt=s.map((F,W)=>({name:i.branches?.[F]??String(F),arm:W,tEnd:M[W],end:wo(W,r,M[W]+.1)}));return{pos:f,courses:u,arms:r,intra:U,cross:G,years:Pt,orphan:h,orbit:c&&_.length?{...v,pointAt:w,sats:B,points:F=>Array.from({length:F+1},(W,_t)=>w(_t/F*Math.PI*2))}:null,reheat(F,W=.45){$(F),at=Math.max(at,W)},step(F){for(let W=0;W<F&&at>0;W++)Gt();return Et(),at>0},get active(){return at>0}}}var V0=i=>i<=.0031308?12.92*i:1.055*Math.pow(i,.4166666666666667)-.055;function oc(i,t,e){let n=e*Math.PI/180,s=t*Math.cos(n),r=t*Math.sin(n),a=(i+.3963377774*s+.2158037573*r)**3,o=(i-.1055613458*s-.0638541728*r)**3,l=(i-.0894841775*s-1.291485548*r)**3;return[4.0767416621*a-3.3077115913*o+.2309699292*l,-1.2684380046*a+2.6097574011*o-.3413193965*l,-.0041960863*a-.7034186147*o+1.707614701*l]}var vu=i=>i.every(t=>t>=-1e-6&&t<=1+1e-6);function Mu(i,t,e){if(!vu(oc(i,t,e))){let n=0,s=t;for(let r=0;r<24;r++){let a=(n+s)/2;vu(oc(i,a,e))?n=a:s=a}t=n}return oc(i,t,e).map(n=>V0(Math.min(1,Math.max(0,n))))}function Ro(i){let t=parseInt(i.replace("#",""),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var Su=([i,t,e],n=1)=>`rgba(${Math.round(i*255)},${Math.round(t*255)},${Math.round(e*255)},${n})`;function bu(i,t){return Array.from({length:i},(e,n)=>{let s=(t.startHue+n*360/Math.max(1,i))%360;return{hue:s,star:Mu(t.L,t.C,s),dust:Mu(t.L*.72,t.C*1.1,s)}})}var xr={colorMode:"graph",linkForce:0,cohesion:1,starSize:.6,glow:.69,nebula:.14,dust:.32,linkOpacity:.5,supernova:1,supernovaSize:.4,supernovaStage:0,crossLinks:!0,satelliteOrbit:!0,orphans:"satellites",courseLabels:!0,yearLabels:!0,autoRotate:!0,rotateSpeed:.7,satelliteSpeed:.29,idleFps:30,deepIdle:60,coreNote:"Home.md",ignoredFolders:"copilot, Excalidraw",music:!1,musicFile:"_Allegati/Outer Wilds OST.mp3",musicVolume:.5,openOnStartup:!0,collapseSidebars:!0,resetOnStartup:!0},H0=["linkForce","cohesion","supernovaSize","supernovaStage"],W0=["colorMode"],X0=["orphans"],q0=`
  attribute vec3 color;
  attribute float size;
  attribute float phase;
  attribute float dim;
  uniform float uTime;
  uniform float uScale;
  uniform float uSize;
  uniform float uTwinkle;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 1.0 + uTwinkle * sin(uTime * (0.6 + fract(phase * 7.13)) + phase * 6.2831);
    gl_PointSize = size * uSize * tw * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
    vColor = color;
    vAlpha = dim;
  }`,Y0=`
  uniform float uOpacity;
  uniform float uGlow;
  uniform float uWhite;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float disc = smoothstep(0.42, 0.30, d);
    float halo = exp(-d * d * mix(16.0, 4.0, uGlow)) * uGlow * 0.9;
    float hot = smoothstep(0.18, 0.0, d) * uWhite;
    vec3 c = mix(vColor, vec3(1.0), hot);
    float a = clamp(disc + halo, 0.0, 1.0);
    gl_FragColor = vec4(c, a * uOpacity * vAlpha);
  }`;function Co({opacity:i=1,glow:t=.5,white:e=.35,twinkle:n=.12}={}){return new ln({uniforms:{uTime:{value:0},uScale:{value:300},uSize:{value:1},uOpacity:{value:i},uGlow:{value:t},uWhite:{value:e},uTwinkle:{value:n}},vertexShader:q0,fragmentShader:Y0,transparent:!0,depthWrite:!1,blending:Vn})}function _r(i,t,e,n,s){let r=new Xe;return r.setAttribute("position",new Me(i,3)),r.setAttribute("color",new Me(t,3)),r.setAttribute("size",new Me(e,1)),r.setAttribute("phase",new Me(n,1)),r.setAttribute("dim",new Me(s??new Float32Array(e.length).fill(1),1)),r}function Z0(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=oi(i);n.globalCompositeOperation="lighter";for(let o=0;o<70;o++){let l=s()*Math.PI*2,c=Math.pow(s(),.7)*256*.3,h=256/2+Math.cos(l)*c,m=256/2+Math.sin(l)*c*(.55+s()*.5),u=256*(.06+s()*.2),p=n.createRadialGradient(h,m,0,h,m,u);p.addColorStop(0,`rgba(255,255,255,${.05+s()*.08})`),p.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=p,n.fillRect(0,0,256,256)}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(256/2,256/2,256*.1,256/2,256/2,256/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,256,256);let a=new _i(e);return a.colorSpace=De,a}function Io(i,t=256){let e=document.createElement("canvas");e.width=e.height=t,i(e.getContext("2d"),t);let n=new _i(e);return n.colorSpace=De,n}var J0=()=>Io((i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,255,255,0.95)"),e.addColorStop(.22,"rgba(255,255,255,0.35)"),e.addColorStop(.5,"rgba(255,255,255,0.08)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Eu=new Map;function Po(i,t,e,n,s){let r=Eu.get(i),a=document.createElement("canvas");a.width=a.height=t;let o=new _i(a);if(o.colorSpace=De,r)return a.getContext("2d").drawImage(r,0,0),s?.(),o;let l=a.getContext("2d"),c=l.createImageData(t,t),h=e(t),m=0,u=()=>{if(!n())return;let p=performance.now();for(;m<t&&performance.now()-p<8;m++)for(let g=0;g<t;g++)h(g,m,c.data,(m*t+g)*4);if(m<t){setTimeout(u,0);return}l.putImageData(c,0,0),o.needsUpdate=!0,Eu.set(i,a),s?.()};return setTimeout(u,0),o}var Tu=i=>t=>{let e=lc(i);return(n,s,r,a)=>{let o=n/t,l=s/t,c=Math.hypot(o-.5,l-.5)*2,h=e(o*6,l*6,5),m=Math.exp(-((c-.42)**2)/.06)*(c<.98?1:0),u=Math.max(0,h-.42)*3.2,p=Math.min(1,(u*u*2.6+u*.25)*m);r[a]=r[a+1]=r[a+2]=255,r[a+3]=p*255}};function lc(i){let t=oi(i),e=64,n=Float32Array.from({length:e*e},t),s=(r,a)=>{let o=Math.floor(r),l=Math.floor(a),c=r-o,h=a-l,m=(g,M)=>n[(l+M&e-1)*e+(o+g&e-1)],u=c*c*(3-2*c),p=h*h*(3-2*h);return(m(0,0)*(1-u)+m(1,0)*u)*(1-p)+(m(0,1)*(1-u)+m(1,1)*u)*p};return(r,a,o=5)=>{let l=0,c=.5,h=1;for(let m=0;m<o;m++)l+=c*s(r*h,a*h),c*=.5,h*=2;return l}}var wu=(i,t=!1)=>e=>{let n=lc(i),s=lc(i+1),r=.4;return(a,o,l,c)=>{let h=a/e-.5,m=o/e-.5,u=Math.hypot(h,m)/r;if(u>=1){l[c+3]=0;return}let p=Math.sqrt(1-u*u),g=1/(.35+.65*p),M=h*g*9+10,d=m*g*9+10,f=s(M*.7,d*.7,3),S=s(M*.7+5.2,d*.7+1.3,3),A=n(M+f*.9,d+S*.9,5),b=n(M*2.3+7,d*2.3+3,3),v=Math.min(1,Math.max(0,(A-.32)*2.4)),w=Math.max(0,.42-b)*1.8,_=255-30*w,E=92+70*v*v-45*w,B=4+26*v*v*v,P=.86+.14*p,U=Math.pow(1-p,3)*.35;_=_*P,E=E*P+60*U,B=B*P+20*U;let G=Math.min(1,(1-u)*70);if(t){let j=Math.max(0,v-.6)*1.6*G;l[c]=255,l[c+1]=165,l[c+2]=40,l[c+3]=Math.min(1,j)*255}else l[c]=Math.min(255,_),l[c+1]=Math.max(0,Math.min(255,E)),l[c+2]=Math.max(0,Math.min(255,B)),l[c+3]=G*255}},$0=()=>Io((i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.58,"rgba(255,255,255,0.55)"),e.addColorStop(.72,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),K0=()=>Io((i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,0.6)"),e.addColorStop(.25,"rgba(255,255,255,0.28)"),e.addColorStop(.6,"rgba(255,255,255,0.07)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),j0=`
  attribute vec3 dir;
  attribute float phase;
  attribute float speed;
  attribute float size;
  uniform float uTime;
  uniform float uScale;
  uniform float uSpread;
  varying float vLife;
  void main() {
    float life = fract(uTime * speed + phase);
    float r = mix(12.0, 150.0, pow(life, 0.75)) * uSpread;
    vec4 mv = modelViewMatrix * vec4(dir * r, 1.0);
    gl_PointSize = size * (1.0 - 0.45 * life) * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
    vLife = life;
  }`,Q0=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vLife;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float a = smoothstep(1.0, 0.25, d) * smoothstep(0.0, 0.08, vLife) * pow(1.0 - vLife, 1.6);
    vec3 c = mix(vec3(1.0), uColor, smoothstep(0.0, 0.35, vLife));
    gl_FragColor = vec4(c, a * uOpacity);
  }`,t_=()=>Io((i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,0.55)"),e.addColorStop(.9,"rgba(255,255,255,0.2)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Ai=14,Dn=new D;function e_(i,t,e,n){let s=i.distanceTo(t),r=Math.min(1,Math.max(0,(s-10)/20));Dn.addVectors(i,t).multiplyScalar(.5);let a=Math.hypot(Dn.x,Dn.y)||1,o=Dn.x,l=Dn.y;Dn.x+=-l/a*s*.14*r,Dn.y+=o/a*s*.14*r,Dn.z+=s*.24*r;let c=n;for(let h=0;h<Ai;h++)for(let m of[h/Ai,(h+1)/Ai]){let u=1-m;e[c++]=u*u*i.x+2*u*m*Dn.x+m*m*t.x,e[c++]=u*u*i.y+2*u*m*Dn.y+m*m*t.y,e[c++]=u*u*i.z+2*u*m*Dn.z+m*m*t.z}return c}function Au(i,t,e){let n=new Float32Array(i.length*Ai*6),s=new Float32Array(i.length*Ai*6),r=0;for(let[o,l]of i){let c=e(o),h=e(l);for(let m=0;m<Ai;m++)for(let u of[m/Ai,(m+1)/Ai])for(let p=0;p<3;p++)s[r++]=c[p]+(h[p]-c[p])*u}let a=new Xe;return a.setAttribute("position",new Me(n,3)),a.setAttribute("color",new Me(s,3)),a.userData.pairs=i,cc(a,t),a}var Ru=new D,Cu=new D;function cc(i,t){let e=i.getAttribute("position").array,n=0;for(let[s,r]of i.userData.pairs)Ru.fromArray(t,s*3),Cu.fromArray(t,r*3),n=e_(Ru,Cu,e,n);i.getAttribute("position").needsUpdate=!0,i.computeBoundingSphere()}var n_=`
  attribute vec3 iCenter;
  attribute float iScale;
  attribute float iRot;
  attribute vec3 iColor;
  attribute float iBase;
  attribute float iTile;
  uniform float uOpacity;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vA;
  void main() {
    vec4 mv = modelViewMatrix * vec4(iCenter, 1.0);
    float c = cos(iRot), s = sin(iRot);
    vec2 p = position.xy;
    mv.xy += vec2(c * p.x - s * p.y, s * p.x + c * p.y) * iScale;
    gl_Position = projectionMatrix * mv;
    vec2 tile = vec2(mod(iTile, 2.0), 1.0 - floor(iTile / 2.0));
    vUv = (uv + tile) * 0.5;
    vColor = iColor;
    vA = iBase * uOpacity;
  }`,i_=`
  uniform sampler2D map;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vA;
  void main() {
    vec4 t = texture2D(map, vUv);
    gl_FragColor = vec4(t.rgb * vColor, t.a * vA);
    #include <colorspace_fragment>
  }`;function s_(i){let t=i[0].image.width,e=document.createElement("canvas");e.width=e.height=t*2;let n=e.getContext("2d");i.forEach((r,a)=>n.drawImage(r.image,a%2*t,Math.floor(a/2)*t));let s=new _i(e);return s.colorSpace=De,s}function Pu(i,t,e,n={},s={}){let r={...xr,...n},a=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,o=document.createElement("div");o.className="galaxy-root",i.appendChild(o);let l=document.createElement("div");l.className="galaxy-labels";let c=document.createElement("div");c.className="galaxy-tip",l.appendChild(c),o.style.setProperty("--galaxy-text",e.text);let h=new Mo({antialias:!0,alpha:!1,powerPreference:"low-power"});h.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),h.setClearColor(0,1),o.appendChild(h.domElement),o.appendChild(l);let m=new Vs,u=new tn(50,1,1,6e3),p=new D(0,-330,540);u.position.copy(p),u.up.set(0,0,1);let g=new To(u,h.domElement);g.enableDamping=!0,g.dampingFactor=.08,g.minDistance=30,g.maxDistance=1400,g.enablePan=!1,g.zoomToCursor=!0,g.target.set(0,0,0);let M=p.length()*.95,d=260,f=()=>{g.autoRotate=r.autoRotate&&!a&&!S,g.autoRotateSpeed=r.rotateSpeed},S=!1,A=new Mn;m.add(A);let b=new Mn;m.add(b);let v=null,w=null,_=[],E=R=>(_.push(R),R),B=[0,1,2,3].map(R=>E(Z0(101+R*17))),P=E(s_(B)),U=!0,G=()=>U,j=4,L=null,J=()=>{--j===0&&(L=performance.now())},Y={sun:E(Po("sun",384,wu(9),G,J)),sunBoil:E(Po("sunBoil",384,wu(23,!0),G,J)),sunGlow:E($0()),core:E(J0()),shell:[E(Po("shellA",256,Tu(31),G,J)),E(Po("shellB",256,Tu(77),G,J))],halo:E(K0()),ring:E(t_())},H=E(Co({opacity:.6,glow:.25,white:.6,twinkle:.3}));{let Z=oi(7),it=new Float32Array(3500*3),X=new Float32Array(3500*3),ct=new Float32Array(3500),mt=new Float32Array(3500);for(let ot=0;ot<3500;ot++){let Nt=Z()*2-1,Ut=Z()*Math.PI*2,he=1800+Z()*1500,Jt=Math.sqrt(1-Nt*Nt);it.set([he*Jt*Math.cos(Ut),he*Jt*Math.sin(Ut),he*Nt],ot*3);let se=.65+Z()*.35;X.set([se*(.85+Z()*.15),se*.92,se],ot*3),ct[ot]=5+Math.pow(Z(),6)*18,mt[ot]=Z()}b.add(new kn(E(_r(it,X,ct,mt)),H))}function ut(R){let Z=bu(R.courses.length,e),it=r.colorMode==="graph",X=R.courses.map((ot,Nt)=>it&&ot.color?Ro(ot.color):Z[Nt].star),ct=[1,.92,.8],mt=R.nodes.map(ot=>it&&ot.color?Ro(ot.color):ot.course>=0?X[ot.course]:ct);return{course:X,node:mt,core:ct}}function $(){A.children.slice().forEach(R=>{A.remove(R),R.traverse(Z=>{Z.geometry?.dispose(),Z.material&&Z.material!==H&&Z.material.dispose?.()})}),l.querySelectorAll(".galaxy-course, .galaxy-year").forEach(R=>R.remove())}function rt(R,Z,it=0){let X=R.courses.filter(Jt=>Jt.arm===Z&&Jt.count).sort((Jt,se)=>Jt.t-se.t);if(!X.length)return null;let ct=X[X.length-1],mt=X.length>1?X[X.length-2].center:[0,0,0],ot=ct.center[0]-mt[0],Nt=ct.center[1]-mt[1],Ut=Math.hypot(ot,Nt)||1;ot/=Ut,Nt/=Ut;let he=ct.radius*.9+6+it;return[ct.center[0]+ot*he,ct.center[1]+Nt*he,ct.center[2]]}function at(R,Z){let it=R.getAttribute("iCenter");R.userData.neb.forEach((X,ct)=>{let mt=Z.courses[X.ci].center;it.array[ct*3]=mt[0]+X.off[0],it.array[ct*3+1]=mt[1]+X.off[1],it.array[ct*3+2]=X.off[2]}),it.needsUpdate=!0}function Lt(R,Z){let it=[],X=[],ct=[],mt=[],ot=oi(11);for(let Nt=0;Nt<R.arms;Nt++){let Ut=R.courses.map((_e,pe)=>({cc:_e,i:pe})).filter(_e=>_e.cc.arm===Nt&&_e.cc.count).sort((_e,pe)=>_e.cc.t-pe.cc.t);if(!Ut.length)continue;let he=R.years.find(_e=>_e.arm===Nt)?.tEnd??1,Jt=[new D(...wo(Nt,R.arms,0).slice(0,2),0)],se=[8],Se=[Ut[0].i];Ut.forEach(({cc:_e,i:pe})=>{Jt.push(new D(..._e.center)),se.push(_e.radius),Se.push(pe)}),Jt.push(new D(...rt(R,Nt))),se.push(Ut[Ut.length-1].cc.radius*.35),Se.push(Ut[Ut.length-1].i);let qe=new Ks(Jt,!1,"centripetal"),ge=1400+380*Ut.length,be=new D;for(let _e=0;_e<ge;_e++){let pe=Math.pow(ot(),.9);qe.getPoint(pe,be);let He=pe*(Jt.length-1),Re=Math.min(Jt.length-2,Math.floor(He)),je=He-Re,qn=.45*(se[Re]*(1-je)+se[Re+1]*je)+3,Ri=Z.course[Se[Re]],Gi=Z.course[Se[Re+1]],Ci=.3+ot()*.4;it.push(be.x+Be(ot)*qn,be.y+Be(ot)*qn,be.z+Be(ot)*qn*xn.thickness);for(let Un=0;Un<3;Un++)X.push((Ri[Un]+(Gi[Un]-Ri[Un])*je)*Ci);ct.push(2+Math.pow(ot(),4)*6),mt.push(ot())}}return _r(new Float32Array(it),new Float32Array(X),new Float32Array(ct),new Float32Array(mt))}function Gt(R,Z){let{owner:it,off:X}=R.userData,ct=R.getAttribute("position").array;for(let mt=0;mt<it.length;mt++){let ot=it[mt]*3;ct[mt*3]=Z[ot]+X[mt*3],ct[mt*3+1]=Z[ot+1]+X[mt*3+1],ct[mt*3+2]=Z[ot+2]+X[mt*3+2]}R.getAttribute("position").needsUpdate=!0}function et(R){if(r.orphans!=="hidden")return R;let Z=new Array(R.nodes.length).fill(0);R.links.forEach(([ot,Nt])=>{Z[ot]++,Z[Nt]++});let it=R.nodes.map((ot,Nt)=>ot.core||Z[Nt]>0),X=[],ct=R.nodes.filter((ot,Nt)=>it[Nt]),mt=0;return it.forEach((ot,Nt)=>{ot&&(X[Nt]=mt++)}),{...R,nodes:ct,links:R.links.map(([ot,Nt,Ut])=>[X[ot],X[Nt],Ut])}}let Et=t;function Pt(R,Z){Et=R,t=et(R),(Z||!w)&&(w=yu(t,r)),$();let it=ut(t),X=t.nodes.length,ct=new Float32Array(X),mt=t.nodes.map(()=>new Set);t.links.forEach(([q,ht])=>{ct[q]++,ct[ht]++,mt[q].add(ht),mt[ht].add(q)});let ot=Co({opacity:r.dust,glow:.15,white:.1,twinkle:.18}),Nt=new kn(Lt(w,it),ot);A.add(Nt);let Ut=(()=>{let q=oi(13),ht=[],lt=[],Mt=[],bt=[],Ft=[];t.nodes.forEach(($t,ue)=>{if($t.core)return;let le=w.orphan[ue]?0:14+Math.min(30,ct[ue]*3);for(let ee=0;ee<le;ee++){let Ce=3+q()*6,Ct=.25+q()*.35;ht.push(ue),lt.push(Be(q)*Ce,Be(q)*Ce,Be(q)*Ce*.5),Mt.push(it.node[ue][0]*Ct,it.node[ue][1]*Ct,it.node[ue][2]*Ct),bt.push(1.8+Math.pow(q(),4)*5),Ft.push(q())}});let Wt=_r(new Float32Array(lt.length),new Float32Array(Mt),new Float32Array(bt),new Float32Array(Ft));Wt.userData={owner:Int32Array.from(ht),off:Float32Array.from(lt)};let Rt=new kn(Wt,ot);return Rt.frustumCulled=!1,Rt})();Gt(Ut.geometry,w.pos),A.add(Ut);let he=[];w.courses.forEach((q,ht)=>{if(!q.count)return;let lt=oi(Ao(q.id)),Mt=new qt().setRGB(...it.course[ht],De);for(let bt=0;bt<4;bt++){let Ft=.55+lt()*.45,Wt=lt()*Math.PI*2,Rt=q.radius*(1.8+lt()*1),$t=[Be(lt)*q.radius*.3,Be(lt)*q.radius*.3,Be(lt)*4];he.push({ci:ht,off:$t,base:Ft,rot:Wt,scale:Rt,tile:bt%4,color:[Mt.r,Mt.g,Mt.b]})}});let Jt=new er().copy(new Ui(1,1));Jt.instanceCount=he.length;let se=(q,ht)=>new Ys(new Float32Array(he.flatMap(ht)),q);Jt.setAttribute("iCenter",se(3,q=>[0,0,0])),Jt.setAttribute("iScale",se(1,q=>[q.scale])),Jt.setAttribute("iRot",se(1,q=>[q.rot])),Jt.setAttribute("iColor",se(3,q=>q.color)),Jt.setAttribute("iBase",se(1,q=>[q.base])),Jt.setAttribute("iTile",se(1,q=>[q.tile])),Jt.userData.neb=he;let Se=new ln({uniforms:{map:{value:P},uOpacity:{value:r.nebula}},vertexShader:n_,fragmentShader:i_,transparent:!0,depthWrite:!1,blending:Vn}),qe=new Sn(Jt,Se);qe.frustumCulled=!1,qe.renderOrder=-1,at(Jt,w),A.add(qe);let ge=new Mn;{let q=t.nodes.findIndex(Kt=>Kt.core),ht=q>=0&&r.colorMode==="graph"&&t.nodes[q].color?Ro(t.nodes[q].color):[.45,.82,1],lt=new qt().setRGB(...ht,De),Mt=lt.clone().lerp(new qt(1,1,1),.55),bt=(Kt,hn,Ie,bn,on=0)=>{let Fn=new ds({map:Kt,color:hn,transparent:!0,opacity:0,blending:Vn,depthWrite:!1});Fn.userData.base=Ie;let te=new qs(Fn);return te.scale.set(bn,bn,1),te.userData.scale=bn,te.renderOrder=on,ge.add(te),te},Ft=1400,Wt=oi(5),Rt=new Float32Array(Ft*3),$t=new Float32Array(Ft),ue=new Float32Array(Ft),le=new Float32Array(Ft);for(let Kt=0;Kt<Ft;Kt++){let hn=Wt()*2-1,Ie=Wt()*Math.PI*2,bn=Math.sqrt(1-hn*hn),on=.75+Wt()*.5;Rt.set([bn*Math.cos(Ie)*on,bn*Math.sin(Ie)*on,hn*.7*on],Kt*3),$t[Kt]=Wt(),ue[Kt]=.025+Wt()*.04,le[Kt]=1.2+Math.pow(Wt(),4)*4.5}let ee=new Xe;ee.setAttribute("position",new Me(new Float32Array(Ft*3),3)),ee.setAttribute("dir",new Me(Rt,3)),ee.setAttribute("phase",new Me($t,1)),ee.setAttribute("speed",new Me(ue,1)),ee.setAttribute("size",new Me(le,1));let Ce=new ln({uniforms:{uTime:{value:0},uScale:{value:300},uSpread:{value:1},uOpacity:{value:.8},uColor:{value:new D(...ht)}},vertexShader:j0,fragmentShader:Q0,transparent:!0,depthWrite:!1,blending:Vn}),Ct=new kn(ee,Ce);Ct.frustumCulled=!1,ge.add(Ct),ge.userData={sunHalo:bt(Y.halo,new qt(1,.4,.08),.55,240,-4),corona:bt(Y.core,new qt(1,.38,.04),1,190,-3),rim:bt(Y.sunGlow,new qt(1,.4,.05),.9,216,-3),sun:bt(Y.sun,new qt(1,1,1),1,135,2),sunBoil:bt(Y.sunBoil,new qt(1,1,1),.45,135,3),dense:bt(Y.core,Mt,1,150,1),halo:bt(Y.halo,lt,.8,340,-1),shellA:bt(Y.shell[0],Mt,1,150,1),shellB:bt(Y.shell[1],lt,1,185,1),glow:bt(Y.core,Mt,1,130,2),hot:bt(Y.core,new qt(1,1,1),1,85,3),hot2:bt(Y.core,new qt(1,1,1),1,34,4),rings:[bt(Y.ring,lt,.6,40),bt(Y.ring,lt,.6,40)],debris:Ct};let Ne=ge.userData.sun.material;Ne.blending=Ei,Ne.depthWrite=!0,Ne.alphaTest=.5,ge.userData.sun.renderOrder=-2,A.add(ge)}let be=(q,ht)=>{let lt=new gi({vertexColors:!0,transparent:!0,opacity:ht*r.linkOpacity,blending:Vn,depthWrite:!1});return lt.userData.base=ht,new ps(Au(q,w.pos,Mt=>it.node[Mt]),lt)},_e=be(w.intra,.45),pe=be(w.cross,.3);pe.visible=r.crossLinks,A.add(_e,pe);let He=null;if(w.orbit){let q=new Xe;q.setAttribute("position",new Je(w.orbit.points(360).flat(),3));let ht=new js({color:16777215,transparent:!0,opacity:.35,dashSize:7,gapSize:6,depthWrite:!1});ht.userData.base=.35,He=new fs(q,ht),He.computeLineDistances(),A.add(He)}let Re=new Float32Array(X*3),je=new Float32Array(X),qn=new Float32Array(X),Ri=new Float32Array(X).fill(1);t.nodes.forEach((q,ht)=>{Re.set(it.node[ht],ht*3),je[ht]=q.core?0:w.orphan[ht]?11:8+5*Math.log2(1+ct[ht]),qn[ht]=Ao(q.id)%1e3/1e3});let Gi=_r(w.pos,Re,je,qn,Ri),Ci=Co({opacity:1,glow:r.glow,white:.3,twinkle:.05}),Un=new kn(Gi,Ci);A.add(Un);let bs=new Mn;A.add(bs);let y=_r(new Float32Array(3),new Float32Array([1,1,1]),new Float32Array([0]),new Float32Array(1)),I=Co({opacity:.8,glow:.8,white:0,twinkle:0}),V=new kn(y,I);V.visible=!1,A.add(V);let O=w.courses.map((q,ht)=>({cc:q,ci:ht})).filter(q=>q.cc.count).map(({cc:q,ci:ht})=>{let lt=document.createElement("div");return lt.className="galaxy-course",lt.textContent=q.name,lt.style.setProperty("--c",Su(it.course[ht])),l.appendChild(lt),{el:lt,cc:q,pos:new D(q.center[0],q.center[1],q.center[2]+q.radius*.6),kind:"course"}}),k=w.years.map(q=>{let ht=document.createElement("div");ht.className="galaxy-year",ht.textContent=q.name,l.appendChild(ht);let lt=rt(w,q.arm,26)??[q.end[0],q.end[1],0];return{el:ht,arm:q.arm,pos:new D(...lt),kind:"year"}});v={data:t,L:w,col:it,nodes:Un,nodeGeo:Gi,nodeMat:Ci,dustMat:ot,armDust:Nt,nodeDust:Ut,nebulae:qe,intraLinks:_e,crossLinks:pe,nbr:mt,hl:bs,ring:V,ringGeo:y,sim:!1,sn:ge,satOrbit:He,satFade:1,courseLabels:O,yearLabels:k,hover:-1,activeId:v?.activeId??null,mats:[H,ot,Ci,I]},ae(v.activeId)}function F(){if(f(),!!v){v.nodeMat.uniforms.uGlow.value=r.glow,v.nodeMat.uniforms.uSize.value=r.starSize,v.ring.material.uniforms.uSize.value=r.starSize,v.dustMat.uniforms.uOpacity.value=r.dust,v.nebulae.material.uniforms.uOpacity.value=r.nebula;for(let R of[v.intraLinks,v.crossLinks])R.material.opacity=R.material.userData.base*r.linkOpacity;v.crossLinks.visible=r.crossLinks,v.sn.visible=r.supernova>0,ye()}}function W(R){ie();let Z=Object.keys(R).filter(it=>R[it]!==r[it]);Object.assign(r,R),Z.some(it=>X0.includes(it))?Pt(Et,!0):Z.some(it=>W0.includes(it))&&Pt(Et,!1),v&&Z.some(it=>H0.includes(it))&&(v.L.reheat(r),v.sim=!0,re(-1)),F()}let _t=new nr,At=new zt,pt=!1,It=null,kt=null,Xt=0;function fe(){if(!v||!It)return-1;let R=h.domElement.getBoundingClientRect();At.set((It.x-R.left)/R.width*2-1,-((It.y-R.top)/R.height)*2+1),_t.setFromCamera(At,u),_t.params.Points.threshold=Math.max(2,u.position.distanceTo(g.target)/120);let Z=_t.intersectObject(v.nodes);if(!Z.length)return-1;let it=Z.filter(X=>!(v.L.orphan[X.index]&&v.satFade<.3));return it.length?(it.sort((X,ct)=>X.distanceToRay-ct.distanceToRay),it[0].index):-1}function re(R){if(!v||R===v.hover)return;v.hover=R;let{nodeGeo:Z,nbr:it,hl:X,data:ct,col:mt}=v,ot=Z.getAttribute("dim");if(X.children.slice().forEach(Nt=>{X.remove(Nt),Nt.geometry.dispose(),Nt.material.dispose()}),R<0)ot.array.fill(1),c.style.opacity="0",h.domElement.style.cursor="";else{ot.array.fill(.18),ot.array[R]=1,it[R].forEach(Ut=>ot.array[Ut]=1);let Nt=[...it[R]].map(Ut=>[R,Ut]);Nt.length&&X.add(new ps(Au(Nt,v.L.pos,Ut=>mt.node[Ut]),new gi({vertexColors:!0,transparent:!0,opacity:.9,blending:Vn,depthWrite:!1}))),c.textContent=ct.nodes[R].name,c.style.opacity="1",h.domElement.style.cursor="pointer"}ye(),s.onHover?.(R<0?null:ct.nodes[R].id)}function ye(){if(!v)return;let R=v.nodeGeo.getAttribute("dim"),Z=v.satFade;v.L.orphan.forEach((it,X)=>{if(!it)return;let ct=v.hover<0||v.hover===X||v.nbr[v.hover]?.has(X)?1:.18;R.array[X]=ct*Z}),R.needsUpdate=!0,v.satOrbit&&(v.satOrbit.material.opacity=v.satOrbit.material.userData.base*Z,v.satOrbit.visible=Z>.01&&r.satelliteOrbit)}function ae(R){if(!v)return;v.activeId=R;let Z=R==null?-1:v.data.nodes.findIndex(it=>it.id===R);if(v.ring.visible=Z>=0,Z>=0){let it=v.ringGeo.getAttribute("position"),X=v.ringGeo.getAttribute("color");it.array.set(v.L.pos.subarray(Z*3,Z*3+3)),it.needsUpdate=!0,X.array.set(v.col.node[Z]),X.needsUpdate=!0}}let we=()=>{ie(),S=!0,f(),clearTimeout(Xt),Xt=setTimeout(()=>{S=!1,f()},12e3)},oe=h.domElement,Ve=performance.now(),Pe=1,Ke=0,N=!1;function an(R){if(!(r.deepIdle>0))return 1;let Z=r.deepIdle*1e3,it=Math.min(15e3,Z/2),X=R-Ve;if(X<Z-it)return 1;let ct=1-Math.min(1,(X-(Z-it))/it);return ct*ct*(3-2*ct)}function ie(){Ve=performance.now(),st&&N&&(N=!1,dt.getDelta(),h.setAnimationLoop(yt))}let me=R=>{It={x:R.clientX,y:R.clientY},pt=!0,ie()},Tt=R=>{kt={x:R.clientX,y:R.clientY},ie(),we()},Ae=R=>{if(!kt||Math.hypot(R.clientX-kt.x,R.clientY-kt.y)>5||R.button!==0)return;It={x:R.clientX,y:R.clientY};let Z=fe();Z>=0&&s.onOpen?.(v.data.nodes[Z].id,R)},Ot=()=>{It=null,re(-1)},Ht=()=>{fe()<0&&x(p,new D)};oe.addEventListener("pointermove",me),oe.addEventListener("pointerdown",Tt),oe.addEventListener("pointerup",Ae),oe.addEventListener("pointerleave",Ot),oe.addEventListener("dblclick",Ht),oe.addEventListener("wheel",we,{passive:!0});let T=null;function x(R,Z){T={t:0,p0:u.position.clone(),p1:R.clone(),q0:g.target.clone(),q1:Z.clone()}}function z(R){if(!v)return;let Z=v.data.nodes.findIndex(ct=>ct.id===R);if(Z<0)return;let it=new D().fromArray(v.L.pos,Z*3),X=u.position.clone().sub(g.target).normalize();we(),x(it.clone().addScaledVector(X,90),it)}let dt=new ir,st=!1,ft=new D;function St(R,Z,it,X,ct,mt){for(let ot of R)ft.copy(ot.pos),ot.dist=ft.distanceTo(u.position),ft.project(u),ot.vis=Z&&ft.z<1&&Math.abs(ft.x)<1.1&&Math.abs(ft.y)<1.1,ot.x=(ft.x+1)/2*X,ot.y=(1-ft.y)/2*ct,ot.w??=ot.el.offsetWidth||ot.el.textContent.length*8;for(let ot of[...R].sort((Nt,Ut)=>Nt.dist-Ut.dist)){let Nt=[ot.x-ot.w/2-6,ot.y-10,ot.x+ot.w/2+6,ot.y+10],Ut=ot.vis&&!it.some(se=>Nt[0]<se[2]&&Nt[2]>se[0]&&Nt[1]<se[3]&&Nt[3]>se[1]);Ut&&it.push(Nt);let he=Ut?Math.max(0,Math.min(1,(mt-ot.dist)/400))*(v.hover>=0?.3:1):0,Jt=he.toFixed(2);if(Jt!==ot.o&&(ot.el.style.opacity=Jt,ot.o=Jt),he>0){let se=`translate(${ot.x.toFixed(1)}px, ${ot.y.toFixed(1)}px) translate(-50%, -50%)`;se!==ot.tr&&(ot.el.style.transform=se,ot.tr=se)}}}function Q(){let R=v,Z=R.L,it=Z.step(4);R.nodeGeo.getAttribute("position").needsUpdate=!0,R.nodeGeo.computeBoundingSphere(),cc(R.intraLinks.geometry,Z.pos),cc(R.crossLinks.geometry,Z.pos),Gt(R.nodeDust.geometry,Z.pos),at(R.nebulae.geometry,Z);for(let X of R.courseLabels)X.pos.set(X.cc.center[0],X.cc.center[1],X.cc.center[2]+X.cc.radius*.6);for(let X of R.yearLabels){let ct=rt(Z,X.arm,26);ct&&X.pos.set(...ct)}if(R.ring.visible&&ae(R.activeId),!it){R.sim=!1;let X=R.armDust.geometry;R.armDust.geometry=Lt(Z,R.col),X.dispose()}}function tt(){let R=Math.min(dt.getDelta(),.1),Z=an(performance.now());Pe=Z>Pe?Math.min(Z,Pe+R):Z,Ke+=R*Pe;let it=Ke;if(T){T.t=Math.min(1,T.t+R/1.1);let ct=T.t<.5?4*T.t**3:1-(-2*T.t+2)**3/2;u.position.lerpVectors(T.p0,T.p1,ct),g.target.lerpVectors(T.q0,T.q1,ct),T.t>=1&&(T=null)}if(g.autoRotateSpeed=r.rotateSpeed*Pe,g.update(R),!T){let ct=u.position.distanceTo(g.target),ot=700*Math.min(1,Math.max(0,(M-ct)/(M-d)));if(g.target.length()>ot+.01){let he=g.target.clone().setLength(ot).sub(g.target).multiplyScalar(Math.min(1,R*4));g.target.add(he),u.position.add(he)}}let X=h.domElement.height;if((v?.mats??[H]).forEach(ct=>{ct.uniforms.uTime.value=it,ct.uniforms.uScale.value=X*.9}),v?.ring.visible){let ct=v.ringGeo.getAttribute("size");ct.array[0]=40+8*Math.sin(it*2.4),ct.needsUpdate=!0}if(v?.sn.visible){let ct=L==null?0:Math.min(1,(performance.now()-L)/1200),mt=v.sn.userData,ot=r.supernova*ct*ct*(3-2*ct),Nt=r.supernovaStage,Ut=(pe,He,Re)=>{let je=Math.min(1,Math.max(0,(Re-pe)/(He-pe)));return je*je*(3-2*je)},he=1-Ut(.04,.3,Nt),Jt=Ut(.04,.3,Nt),se=Ut(.35,1,Nt),Se=.3+.7*Ut(.12,1,Nt),qe=1+.07*Math.sin(it*1.3)+.03*Math.sin(it*3.1),ge=(.55+.45*ot)*r.supernovaSize,be=(pe,He,Re)=>{pe.material.opacity=pe.material.userData.base*He,pe.scale.set(Re,Re,1),pe.visible=He>.003};be(mt.sun,ot*he,mt.sun.userData.scale*ge*(1+.01*Math.sin(it*.8))),mt.sun.material.rotation=it*.01,be(mt.sunBoil,ot*he*(.75+.25*Math.sin(it*.6)),mt.sunBoil.userData.scale*ge*(1+.01*Math.sin(it*.8))),mt.sunBoil.material.rotation=-it*.017,be(mt.sunHalo,ot*he,mt.sunHalo.userData.scale*ge),be(mt.corona,ot*he*(1+.04*Math.sin(it*1.1)),mt.corona.userData.scale*ge),be(mt.rim,ot*he,mt.rim.userData.scale*ge),be(mt.dense,ot*Jt*(1-se)*qe,mt.dense.userData.scale*ge*(.45+.55*Se)),be(mt.halo,ot*Jt,mt.halo.userData.scale*ge*(.5+.5*Se)),be(mt.glow,ot*Jt*qe,mt.glow.userData.scale*ge*qe*(.6+.4*Se)),be(mt.hot,ot*Jt,mt.hot.userData.scale*ge*qe*(.8+.2*Se)),be(mt.hot2,ot*Jt,mt.hot2.userData.scale*ge*qe),be(mt.shellA,ot*Jt*(.35+.65*se),mt.shellA.userData.scale*ge*Se*(1+.03*Math.sin(it*.7))),be(mt.shellB,ot*Jt*(.35+.65*se),mt.shellB.userData.scale*ge*Se*(1+.03*Math.sin(it*.5+1))),mt.shellA.material.rotation=it*.06,mt.shellB.material.rotation=-it*.04;let _e=mt.debris.material.uniforms;_e.uTime.value=it,_e.uScale.value=h.domElement.height*.9,_e.uSpread.value=ge*Se,_e.uOpacity.value=.7*ot*Jt*(.25+.75*se),mt.debris.visible=Jt>.003,mt.rings.forEach((pe,He)=>{let Re=(it/7+He/2)%1,je=30+Re*260*ge*Se;pe.scale.set(je,je,1),pe.material.opacity=pe.material.userData.base*ot*Jt*(1-Re)**2,pe.visible=Jt>.003})}if(v?.L.orbit){let ct=u.position.length(),mt=v.L.orbit.a*.9,ot=v.L.orbit.a*1.6,Nt=Math.min(1,Math.max(0,(ct-mt)/(ot-mt))),Ut=Nt*Nt*(3-2*Nt);(Math.abs(Ut-v.satFade)>.01||Ut===0!=(v.satFade===0))&&(v.satFade=Ut,ye())}if(v?.L.orbit&&r.satelliteSpeed>0&&!a){let{pointAt:ct,sats:mt}=v.L.orbit,ot=v.L.pos,Nt=r.satelliteSpeed*.12*R*Pe;for(let Ut of mt){Ut.th+=Nt;let he=ct(Ut.th);ot[Ut.i*3]=he[0]+Ut.off[0],ot[Ut.i*3+1]=he[1]+Ut.off[1],ot[Ut.i*3+2]=he[2]+Ut.off[2]}v.nodeGeo.getAttribute("position").needsUpdate=!0,v.nodeGeo.computeBoundingSphere(),v.ring.visible&&v.L.orphan[v.data.nodes.findIndex(Ut=>Ut.id===v.activeId)]&&ae(v.activeId)}if(v?.sim&&Q(),pt&&(pt=!1,re(fe())),v){let ct=h.domElement.clientWidth,mt=h.domElement.clientHeight,ot=[];St(v.yearLabels,r.yearLabels,ot,ct,mt,2e3),St(v.courseLabels,r.courseLabels,ot,ct,mt,1100),v.hover>=0&&(ft.fromArray(v.L.pos,v.hover*3),ft.project(u),c.style.transform=`translate(${(ft.x+1)/2*ct}px, ${(1-ft.y)/2*mt}px) translate(-50%, -150%)`)}h.render(m,u)}function vt(){let R=o.clientWidth,Z=o.clientHeight;!R||!Z||(h.setSize(R,Z,!1),u.aspect=R/Z,u.updateProjectionMatrix(),ie())}let C=new ResizeObserver(vt);C.observe(o);let nt=0;function K(R){return!!(T||pt||v?.sim||R-Ve<1500||L!=null&&R-L<1300)}function yt(){let R=performance.now();if(!K(R)){let Z=r.idleFps>0?r.idleFps:1/0;if(document.hasFocus()||(Z=Math.min(Z,15)),R-nt<1e3/Z-2)return}nt=R,tt(),r.deepIdle>0&&Pe===0&&!K(R)&&(N=!0,h.setAnimationLoop(null))}function gt(){st||(st=!0,N=!1,Ve=performance.now(),dt.getDelta(),h.setAnimationLoop(yt))}function xt(){st&&(st=!1,h.setAnimationLoop(null))}let Dt=new IntersectionObserver(([R])=>R.isIntersecting&&!document.hidden?gt():xt());Dt.observe(o);let Zt=()=>document.hidden?xt():o.isConnected&&o.offsetParent&&gt();return document.addEventListener("visibilitychange",Zt),Pt(t,!0),F(),vt(),gt(),{update:R=>{Pt(R,!0),ie()},setSettings:W,getSettings:()=>({...r}),setActive:R=>{ae(R),ie()},focus:R=>{ie(),z(R)},pause:xt,resume:gt,resetView:()=>{ie(),x(p,new D)},_debug:{camera:u,controls:g,flyTo:x,frame:tt,tick:yt,wake:ie,get sleeping(){return N},get motion(){return Pe},renderer:h,V:D,get state(){return v}},dispose(){U=!1,xt(),clearTimeout(Xt),Dt.disconnect(),C.disconnect(),document.removeEventListener("visibilitychange",Zt),oe.removeEventListener("pointermove",me),oe.removeEventListener("pointerdown",Tt),oe.removeEventListener("pointerup",Ae),oe.removeEventListener("pointerleave",Ot),oe.removeEventListener("dblclick",Ht),oe.removeEventListener("wheel",we),g.dispose(),$(),m.traverse(R=>R.geometry?.dispose()),_.forEach(R=>R.dispose?.()),h.dispose(),h.forceContextLoss(),o.remove(),v=null}}}var r_=[{title:"Sole e supernova",items:[{key:"supernovaStage",label:"Espansione (sole \u2192 supernova)",type:"range",min:0,max:1,step:.01},{key:"supernova",label:"Intensit\xE0",type:"range",min:0,max:1,step:.01},{key:"supernovaSize",label:"Grandezza",type:"range",min:.3,max:1.5,step:.01}]},{title:"Stelle e nebulose",items:[{key:"colorMode",label:"Colori",type:"select",options:[["graph","Gruppi del graph view"],["tokens","Palette project_UI"]]},{key:"starSize",label:"Dimensione delle stelle",type:"range",min:.4,max:2.5,step:.05},{key:"glow",label:"Bagliore",type:"range",min:0,max:1,step:.01},{key:"nebula",label:"Nebulose",type:"range",min:0,max:1,step:.01},{key:"dust",label:"Polvere stellare",type:"range",min:0,max:1,step:.01}]},{title:"Collegamenti",items:[{key:"linkOpacity",label:"Visibilit\xE0 dei link",type:"range",min:0,max:1,step:.01},{key:"crossLinks",label:"Link tra materie",type:"toggle"},{key:"linkForce",label:"Forza dei link",type:"range",min:0,max:1,step:.01},{key:"cohesion",label:"Coesione delle materie",type:"range",min:0,max:1,step:.01}]},{title:"Satelliti",items:[{key:"orphans",label:"Note senza link",type:"select",options:[["satellites","Satelliti"],["cluster","Nell'ammasso"],["hidden","Nascoste"]]},{key:"satelliteOrbit",label:"Mostra l'orbita",type:"toggle"},{key:"satelliteSpeed",label:"Velocit\xE0",type:"range",min:0,max:1.5,step:.01}]},{title:"Etichette",items:[{key:"courseLabels",label:"Nomi delle materie",type:"toggle"},{key:"yearLabels",label:"Nomi dei bracci",type:"toggle"}]},{title:"Movimento",items:[{key:"autoRotate",label:"Rotazione automatica",type:"toggle"},{key:"rotateSpeed",label:"Velocit\xE0 di rotazione",type:"range",min:.05,max:1.5,step:.05}]},{title:"Musica",collapsed:!0,items:[{key:"music",label:"Musica attiva",type:"toggle"},{key:"musicVolume",label:"Volume",type:"range",min:0,max:1,step:.01},{key:"musicFile",label:"File audio (percorso nel vault)",type:"text",placeholder:"_Allegati/musica.mp3"}]},{title:"Batteria",collapsed:!0,items:[{key:"idleFps",label:"Fotogrammi a riposo",type:"select",options:[["30","30 fps"],["60","60 fps"],["0","Massimo"]]},{key:"deepIdle",label:"Rallenta e fermati se inattiva",type:"select",options:[["0","Mai"],["30","Dopo 30 s"],["60","Dopo 1 min"],["120","Dopo 2 min"],["300","Dopo 5 min"]]}]},{title:"Avvio",collapsed:!0,items:[{key:"openOnStartup",label:"Apri la galassia all'avvio",type:"toggle"},{key:"collapseSidebars",label:"Chiudi i pannelli laterali",type:"toggle"},{key:"resetOnStartup",label:"Riparti dai predefiniti a ogni avvio",type:"toggle"}]},{title:"Vault",collapsed:!0,items:[{key:"coreNote",label:"Nota centrale (sole)",type:"text",placeholder:"Home.md"},{key:"ignoredFolders",label:"Cartelle escluse",type:"text",placeholder:"copilot, Excalidraw"}]}];function Iu(i,t,e,{onReset:n,open:s=!1,collapsed:r={}}={}){let a={...t},o=document.createElement("div");o.className="galaxy-panel"+(s?" is-open":"");let l=document.createElement("button");l.className="galaxy-panel-toggle",l.setAttribute("aria-label","Impostazioni della galassia"),l.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>';let c=document.createElement("div");c.className="galaxy-panel-body",o.append(l,c),i.appendChild(o);let h={open:s,collapsed:{...r}},m=()=>o.dispatchEvent(new CustomEvent("galaxy-panel-ui",{detail:{...h}}));l.addEventListener("click",()=>{h.open=!h.open,o.classList.toggle("is-open",h.open),m()});let u={},p={};for(let d of r_){let f=document.createElement("div");h.collapsed[d.title]??=!!d.collapsed,f.className="galaxy-panel-section"+(h.collapsed[d.title]?" is-collapsed":"");let S=document.createElement("div");S.className="galaxy-panel-header",S.textContent=d.title,S.addEventListener("click",()=>{h.collapsed[d.title]=!h.collapsed[d.title],f.classList.toggle("is-collapsed",h.collapsed[d.title]),m()});let A=document.createElement("div");A.className="galaxy-panel-items",f.append(S,A);for(let b of d.items){let v=document.createElement("label");v.className=`galaxy-panel-row is-${b.type}`;let w=document.createElement("span");w.textContent=b.label;let _;if(b.type==="toggle")_=document.createElement("input"),_.type="checkbox",_.checked=!!a[b.key],_.addEventListener("change",()=>M(b,_.checked)),v.append(w,_);else if(b.type==="text")_=document.createElement("input"),_.type="text",_.placeholder=b.placeholder??"",_.value=a[b.key]??"",_.addEventListener("change",()=>M(b,_.value)),v.append(w,_);else if(b.type==="select"){_=document.createElement("select");for(let[E,B]of b.options)_.add(new Option(B,E));_.value=a[b.key],_.addEventListener("change",()=>M(b,_.value)),v.append(w,_)}else _=document.createElement("input"),Object.assign(_,{type:"range",min:b.min,max:b.max,step:b.step}),_.value=a[b.key],_.addEventListener("input",()=>M(b,+_.value)),v.append(w,_);u[b.key]=_,A.appendChild(v)}c.appendChild(f)}let g=document.createElement("button");g.className="galaxy-panel-reset",g.textContent="Ripristina predefiniti",g.addEventListener("click",()=>n?.()),c.appendChild(g);function M(d,f){a[d.key]=f,clearTimeout(p[d.key]),d.slow?p[d.key]=setTimeout(()=>e({[d.key]:f}),250):e({[d.key]:f})}return{el:o,setValues(d){Object.assign(a,d);for(let f in u)f in d&&(u[f].type==="checkbox"?u[f].checked=!!d[f]:u[f].value=d[f])},dispose(){Object.values(p).forEach(clearTimeout),o.remove()}}}var a_='<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="6.5" fill="currentColor"/></svg>',o_='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="6" stroke-dasharray="2.2 2.6"/><circle cx="12" cy="12" r="9.6" stroke-dasharray="1.2 3.4" opacity=".7"/></svg>',l_='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="currentColor" stroke="none"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',c_='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="currentColor" stroke="none"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';function Lu(i,t,e){let n={...t},s=document.createElement("div");s.className="galaxy-hud";let r=document.createElement("label");r.className="galaxy-hud-stage",r.title="Espansione: sole \u2192 supernova";let a=document.createElement("span");a.className="galaxy-hud-icon is-sun",a.innerHTML=a_;let o=document.createElement("input");Object.assign(o,{type:"range",min:0,max:1,step:.005}),o.setAttribute("aria-label","Espansione: sole \u2192 supernova");let l=document.createElement("span");l.className="galaxy-hud-icon is-nova",l.innerHTML=o_,r.append(a,o,l),a.addEventListener("click",u=>{u.preventDefault(),m({supernovaStage:0})}),l.addEventListener("click",u=>{u.preventDefault(),m({supernovaStage:1})}),o.addEventListener("input",()=>m({supernovaStage:+o.value},!1));let c=document.createElement("button");c.className="galaxy-hud-mute",c.addEventListener("click",()=>m({music:!n.music})),s.append(r,c),i.appendChild(s);function h(){o.value=n.supernovaStage,o.style.setProperty("--p",`${n.supernovaStage*100}%`);let u=!!(n.musicFile??"").trim();c.hidden=!u,c.innerHTML=n.music?l_:c_;let p=n.music?"Togli l'audio":"Rimetti l'audio";c.title=p,c.setAttribute("aria-label",p),c.classList.toggle("is-muted",!n.music)}function m(u,p=!0){Object.assign(n,u),p?h():o.style.setProperty("--p",`${n.supernovaStage*100}%`),e(u)}return h(),{el:s,setValues(u){Object.assign(n,u),h()},dispose(){s.remove()}}}var h_=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6),Du=i=>i.replace(/^"(.*)"$/,"$1");function u_(i){let t=!1,e=i;e.startsWith("-")&&(t=!0,e=e.slice(1));let n,s=e.match(/^(tag|path|file):(.*)$/i);if(s){let r=Du(s[2]).toLowerCase();if(s[1].toLowerCase()==="tag"){let a=r.replace(/^#/,"");n=o=>o.tags.some(l=>{let c=l.replace(/^#/,"").toLowerCase();return c===a||c.startsWith(a+"/")})}else s[1].toLowerCase()==="path"?n=a=>a.path.toLowerCase().includes(r):n=a=>a.basename.toLowerCase().includes(r)}else{let r=Du(e).toLowerCase();n=a=>a.path.toLowerCase().includes(r)}return t?r=>!n(r):n}function d_(i){let t=i.match(/-?(?:\w+:)?"[^"]*"|\S+/g)??[],e=[[]];for(let s of t)s==="OR"?e.push([]):e[e.length-1].push(u_(s));let n=e.filter(s=>s.length);return n.length?s=>n.some(r=>r.every(a=>a(s))):()=>!1}function Nu(i){let t=(i??[]).filter(e=>e?.query?.trim()&&e.color).map(e=>({test:d_(e.query.trim()),color:h_(e.color.rgb)}));return e=>t.find(n=>n.test(e))?.color??null}var f_=i=>{let t=i.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)},hc=(i,t)=>i.localeCompare(t,"it",{numeric:!0,sensitivity:"base"});function Uu(i){return(i??"").split(/[,\n]/).map(t=>t.trim().replace(/^\/+|\/+$/g,"").toLowerCase()).filter(Boolean)}function Fu(i,t,e={}){let n=(e.coreNote??"Home.md").trim().replace(/^\/+/,""),s=new Set([...e.ignored??[],(e.attachmentFolder??"").replace(/^\.\/?|\/+$/g,"").toLowerCase()].filter(Boolean)),r=d=>/^[._]/.test(d)||s.has(d.toLowerCase()),a=new Set,o=new Map,l=[];for(let d of i){let f=d.path.split("/");if(f.length===1){if(!d.path.endsWith(".md"))continue;l.push({id:d.path,name:d.basename,ck:null,core:d.path===n,color:d.color??null});continue}let S=f[0];if(r(S)||f.slice(1,-1).some(r))continue;let A=f.length>=3?f[1]:null,b=A?`${S}/${A}`:`${S}/`;a.add(S),o.has(b)||o.set(b,{id:b,name:f_(A??S),branchName:S}),l.push({id:d.path,name:d.basename,ck:b,color:d.color??null})}let c=[...a].sort(hc),h=[...o.values()].map(d=>({...d,branch:c.indexOf(d.branchName)})).sort((d,f)=>d.branch-f.branch||hc(d.name,f.name)),m=new Map(h.map((d,f)=>[d.id,f]));l.sort((d,f)=>hc(d.id,f.id));let u=new Map(l.map((d,f)=>[d.id,f])),p=l.map(d=>({id:d.id,name:d.name,course:d.ck?m.get(d.ck):-1,core:!!d.core,color:d.color}));h.forEach((d,f)=>{let S=new Map;p.forEach(A=>A.course===f&&A.color&&S.set(A.color,(S.get(A.color)??0)+1)),d.color=[...S.entries()].sort((A,b)=>b[1]-A[1])[0]?.[0]??null}),p.forEach(d=>{!d.color&&d.course>=0&&(d.color=h[d.course].color)});let g=new Map;for(let d in t){let f=u.get(d);if(f!==void 0)for(let S in t[d]){let A=u.get(S);if(A===void 0||f===A)continue;let b=f<A?`${f}-${A}`:`${A}-${f}`;g.set(b,(g.get(b)??0)+t[d][S])}}let M=[...g.entries()].map(([d,f])=>[...d.split("-").map(Number),f]).sort((d,f)=>d[0]-f[0]||d[1]-f[1]);return{branches:c,courses:h,nodes:p,links:M}}function Ou(i){let t=new Audio;t.loop=!0,t.preload="auto";let e={music:!1,musicFile:"",musicVolume:.5},n=!1,s="",r=0,a=0;function o(c,h){clearInterval(r),a=c;let m=t.volume,u=performance.now();r=setInterval(()=>{let p=Math.min(1,(performance.now()-u)/1500);t.volume=Math.max(0,Math.min(1,m+(c-m)*p)),p>=1&&(clearInterval(r),h?.())},30)}function l(){if(!(e.music&&n&&e.musicFile.trim())){t.paused||o(0,()=>t.pause());return}let h=i(e.musicFile.trim());h&&(h!==s&&(s=h,t.src=h,t.volume=0),t.paused&&(t.volume=0,t.play().catch(()=>{})),o(e.musicVolume))}return{configure(c){e={...e,...c},l()},setVisible(c){c!==n&&(n=c,l())},dispose(){clearInterval(r),t.pause(),t.removeAttribute("src"),t.load()},get playing(){return!t.paused}}}var uc={_nota:"Generato da tools/galaxy_palette.py: non modificare a mano.",L:.8201,C:.1041,startHue:255.3,accent:"#5F8BC4",background:"#14171C",text:"#F1F6FC"};var yr="project-ui-galaxy",m_=["coreNote","ignoredFolders"],g_=["music","musicFile","musicVolume"];async function __(i){try{return JSON.parse(await i.vault.adapter.read(`${i.vault.configDir}/graph.json`)).colorGroups??[]}catch{return[]}}async function dc(i,t){let e=Nu(await __(i)),n=i.vault.getMarkdownFiles().map(s=>{let r=i.metadataCache.getFileCache(s),a=r?(0,Nn.getAllTags)(r)??[]:[];return{path:s.path,basename:s.basename,color:e({path:s.path,basename:s.basename,tags:a})}});return Fu(n,i.metadataCache.resolvedLinks,{coreNote:t.coreNote,ignored:Uu(t.ignoredFolders),attachmentFolder:i.vault.getConfig?.("attachmentFolderPath")??""})}var Bu=i=>i.courses.map(t=>t.id).join("|")+"@"+i.nodes.map(t=>`${t.id}:${t.color}`).join("|")+"#"+i.links.map(t=>t.join("-")).join(","),fc=class extends Nn.ItemView{constructor(t,e){super(t),this.plugin=e,this.galaxy=null,this.panel=null,this.sig="",this.ready=new Promise(n=>this.markReady=n)}getViewType(){return yr}getDisplayText(){return"Galassia"}getIcon(){return"orbit"}async onOpen(){this.contentEl.empty(),this.contentEl.addClass("galaxy-view");let t=await this.plugin.loadPalette(),e=await dc(this.app,this.plugin.store.settings);this.sig=Bu(e);let n=this.plugin.store;this.galaxy=Pu(this.contentEl,e,t,n.settings,{onOpen:(l,c)=>this.openNote(l,c)});let s=(l,c)=>{this.galaxy.setSettings(l),n.settings={...n.settings,...l},this.plugin.saveSoon(),Object.keys(l).some(h=>m_.includes(h))&&this.reload(),Object.keys(l).some(h=>g_.includes(h))&&this.music?.configure(n.settings),c!==this.panel&&this.panel?.setValues(l),c!==this.hud&&this.hud?.setValues(l)};this.panel=Iu(this.contentEl,this.galaxy.getSettings(),l=>s(l,this.panel),{open:n.panel.open,collapsed:n.panel.collapsed,onReset:()=>{n.settings={...xr,musicFile:n.settings.musicFile},this.galaxy.setSettings(n.settings),this.music?.configure(n.settings),this.panel.setValues(n.settings),this.hud?.setValues(n.settings),this.plugin.saveSoon(),this.reload()}}),this.hud=Lu(this.contentEl,this.galaxy.getSettings(),l=>s(l,this.hud)),this.panel.el.addEventListener("galaxy-panel-ui",l=>{n.panel=l.detail,this.plugin.saveSoon()}),this.galaxy.setActive(this.app.workspace.getActiveFile()?.path??null),this.markReady(this.galaxy),this.music=Ou(l=>{let c=this.app.vault.getAbstractFileByPath(l.replace(/^\/+/,""));return c?this.app.vault.getResourcePath(c):null}),this.music.configure(n.settings);let r=!1,a=()=>this.music?.setVisible(r&&!document.hidden);this.musicIO=new IntersectionObserver(([l])=>{r=l.isIntersecting,a()}),this.musicIO.observe(this.contentEl),this.registerDomEvent(document,"visibilitychange",a),this.registerEvent(this.app.workspace.on("file-open",l=>l&&this.galaxy?.setActive(l.path)));let o=(0,Nn.debounce)(()=>this.reload(),2e3,!0);this.registerEvent(this.app.metadataCache.on("resolved",o)),this.registerEvent(this.app.vault.on("rename",o)),this.registerEvent(this.app.vault.on("delete",o)),this.refresh=o}async reload(){let t=await dc(this.app,this.plugin.store.settings),e=Bu(t);e!==this.sig&&this.galaxy&&(this.sig=e,this.galaxy.update(t))}openNote(t,e){let n=this.app.workspace,s=null;Nn.Keymap.isModEvent(e)||n.iterateRootLeaves(a=>{!s&&a!==this.leaf&&a.view?.getViewType()==="markdown"&&(s=a)}),s=s??n.getLeaf("tab");let r=this.app.vault.getAbstractFileByPath(t);r&&s.openFile(r).then(()=>n.setActiveLeaf(s,{focus:!0}))}async onClose(){this.musicIO?.disconnect(),this.music?.dispose(),this.music=null,this.panel?.dispose(),this.hud?.dispose(),this.galaxy?.dispose(),this.galaxy=this.panel=this.hud=null}},Lo=class extends Nn.Plugin{async onload(){let t=await this.loadData()??{},e={...xr,...t.settings??{}},n=e.resetOnStartup?{...xr,openOnStartup:e.openOnStartup,collapseSidebars:e.collapseSidebars,musicFile:e.musicFile}:e;this.store={settings:n,panel:{open:!1,collapsed:{},...t.panel??{}}},this.saveSoon=(0,Nn.debounce)(()=>this.saveData(this.store),800,!0),this.registerView(yr,s=>new fc(s,this)),this.app.workspace.onLayoutReady(()=>{let s=this.store.settings;s.openOnStartup&&this.open().then(()=>{s.collapseSidebars&&(this.app.workspace.leftSplit?.collapse(),this.app.workspace.rightSplit?.collapse())})}),this.addRibbonIcon("orbit","Apri la galassia",()=>this.open()),this.addCommand({id:"open",name:"Apri la galassia",callback:()=>this.open()}),this.addCommand({id:"focus-current",name:"Mostra la nota attuale nella galassia",checkCallback:s=>{let r=this.app.workspace.getActiveFile();return r?(s||this.open().then(a=>a?.ready?.then(o=>o.focus(r.path))),!0):!1}}),this.registerEvent(this.app.vault.on("raw",s=>{s===`${this.app.vault.configDir}/graph.json`&&this.app.workspace.getLeavesOfType(yr).forEach(r=>r.view?.reload?.())}))}async loadPalette(){try{let t=await this.app.vault.adapter.read(`${this.manifest.dir}/palette.json`);return{...uc,...JSON.parse(t)}}catch{return uc}}async open(){let t=this.app.workspace,e=t.getLeavesOfType(yr)[0];return e||(e=t.getLeaf("tab"),await e.setViewState({type:yr,active:!0})),await t.revealLeaf(e),e.view}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
