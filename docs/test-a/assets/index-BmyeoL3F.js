(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ue={name:"VX-9 Phantom",description:"Semi-automatic voxel pistol — tactical sidearm with modular components",voxelSize:.5,explodeScale:3,parts:{slide:{id:"slide",label:"Slide",description:"Upper receiver — houses the firing pin and ejection port",order:1,explodeOffset:{x:0,y:4,z:0},voxels:(()=>{const i=[],t="#3a3a4a",e="#2a2a3a",n="#1a1a2a",s="#4a4a5a";for(let r=-1;r<=1;r++)for(let a=-5;a<=13;a++)i.push({x:a,y:5,z:r,color:a>11?e:t});for(let r=-1;r<=1;r++)for(let a=-5;a<=11;a++)i.push({x:a,y:6,z:r,color:t});for(let r=-1;r<=1;r++)i.push({x:-5,y:7,z:r,color:n}),i.push({x:11,y:7,z:r,color:n});for(let r=-1;r<=1;r++)i.push({x:-5,y:6,z:r,color:n}),i.push({x:11,y:6,z:r,color:n});for(let r=-1;r<=1;r++)for(let a=3;a<=9;a++)i.push({x:a,y:6,z:r,color:s});for(let r=9;r<=11;r++)i.push({x:r,y:5,z:0,color:e});return i})()},barrel:{id:"barrel",label:"Barrel",description:"Rifled barrel — 4.2 inch, polygonal rifling",order:2,explodeOffset:{x:5,y:2,z:0},voxels:(()=>{const i=[],t="#555566",e="#222233";for(let n=-1;n<=1;n++)for(let s=3;s<=5;s++)i.push({x:-8,y:s,z:n,color:t}),i.push({x:-7,y:s,z:n,color:t}),i.push({x:-6,y:s,z:n,color:t});i.push({x:-9,y:4,z:0,color:e}),i.push({x:-9,y:4,z:-1,color:t}),i.push({x:-9,y:4,z:1,color:t}),i.push({x:-9,y:3,z:0,color:t}),i.push({x:-9,y:5,z:0,color:t});for(let n=-1;n<=1;n++)i.push({x:-9,y:3,z:n,color:t}),i.push({x:-9,y:5,z:n,color:t});return i})()},frame:{id:"frame",label:"Frame",description:"Lower receiver — structural chassis housing the trigger mechanism",order:3,explodeOffset:{x:0,y:-2,z:0},voxels:(()=>{const i=[],t="#2d2d3d",e="#3d3d4d";for(let n=-1;n<=1;n++)for(let s=-4;s<=12;s++)i.push({x:s,y:4,z:n,color:t});for(let n=-1;n<=1;n++)for(let s=-4;s<=8;s++)i.push({x:s,y:3,z:n,color:t});for(let n=-4;n<=3;n++)i.push({x:n,y:4,z:-2,color:e}),i.push({x:n,y:4,z:2,color:e});return i})()},trigger:{id:"trigger",label:"Trigger",description:"Trigger assembly — single-action with integrated safety",order:4,explodeOffset:{x:0,y:-4,z:3},voxels:(()=>{const i=[],t="#4a3a2a",e="#333344";i.push({x:1,y:3,z:0,color:t}),i.push({x:1,y:2,z:0,color:t}),i.push({x:0,y:1,z:0,color:t}),i.push({x:1,y:1,z:0,color:e}),i.push({x:2,y:1,z:0,color:e}),i.push({x:-1,y:3,z:0,color:e}),i.push({x:3,y:3,z:0,color:e});for(let n=-1;n<=1;n++)i.push({x:3,y:3,z:n,color:e}),i.push({x:-1,y:3,z:n,color:e});i.push({x:3,y:2,z:-1,color:e}),i.push({x:3,y:2,z:1,color:e}),i.push({x:-1,y:2,z:-1,color:e}),i.push({x:-1,y:2,z:1,color:e}),i.push({x:3,y:2,z:0,color:e}),i.push({x:-1,y:2,z:0,color:e});for(let n=-1;n<=1;n++)i.push({x:-1,y:1,z:n,color:e}),i.push({x:3,y:1,z:n,color:e}),i.push({x:2,y:1,z:n,color:e});return i})()},grip:{id:"grip",label:"Grip",description:"Ergonomic grip — textured polymer with beavertail",order:5,explodeOffset:{x:-3,y:-6,z:0},voxels:(()=>{const i=[],t="#1e1e2e",e="#282838",n="#333345";for(let s=-3;s<=2;s++)for(let r=-1;r<=1;r++)i.push({x:1,y:s,z:r,color:r===0&&s>-2?n:t}),i.push({x:2,y:s,z:r,color:r===0&&s>-2?n:t}),i.push({x:3,y:s,z:r,color:t});for(let s=-3;s<=2;s++)for(let r=-2;r<=2;r++)i.push({x:4,y:s,z:r,color:t});for(let s=-4;s<=-3;s++)for(let r=-1;r<=1;r++)i.push({x:2,y:s,z:r,color:t}),i.push({x:3,y:s,z:r,color:t});for(let s=-1;s<=1;s++)i.push({x:1,y:s,z:2,color:e}),i.push({x:1,y:s,z:-2,color:e}),i.push({x:2,y:s,z:2,color:e}),i.push({x:2,y:s,z:-2,color:e});return i})()},magazine:{id:"magazine",label:"Magazine",description:"Double-stack magazine — 15 round capacity, 9x19mm",order:6,explodeOffset:{x:-3,y:-9,z:0},voxels:(()=>{const i=[],t="#3a3a22",e="#2a2a1a",n="#666644";for(let s=-3;s<=2;s++)for(let r=-1;r<=1;r++)i.push({x:1,y:s,z:r,color:t}),i.push({x:2,y:s,z:r,color:t}),i.push({x:3,y:s,z:r,color:t});for(let s=-1;s<=1;s++)i.push({x:1,y:-4,z:s,color:e}),i.push({x:2,y:-4,z:s,color:e}),i.push({x:3,y:-4,z:s,color:e}),i.push({x:2,y:-5,z:s,color:e});return i.push({x:2,y:2,z:0,color:n}),i.push({x:2,y:1,z:0,color:n}),i})()},rearSight:{id:"rearSight",label:"Rear Sight",description:"Adjustable rear sight — white dot, drift adjustable",order:7,explodeOffset:{x:-4,y:7,z:0},voxels:(()=>{const i=[],t="#1a1a2a",e="#ccccdd";return i.push({x:-4,y:7,z:-1,color:t}),i.push({x:-4,y:7,z:0,color:t}),i.push({x:-4,y:7,z:1,color:t}),i.push({x:-4,y:8,z:-1,color:t}),i.push({x:-4,y:8,z:0,color:e}),i.push({x:-4,y:8,z:1,color:t}),i})()},frontSight:{id:"frontSight",label:"Front Sight",description:"Fixed front sight — tritium dot insert",order:8,explodeOffset:{x:7,y:7,z:0},voxels:(()=>{const i=[],t="#1a1a2a",e="#ccdd44";return i.push({x:11,y:7,z:-1,color:t}),i.push({x:11,y:7,z:0,color:t}),i.push({x:11,y:7,z:1,color:t}),i.push({x:11,y:8,z:0,color:e}),i})()}},assemblyOrder:["frame","grip","trigger","magazine","barrel","slide","rearSight","frontSight"],disassemblyOrder:["frontSight","rearSight","slide","barrel","magazine","trigger","grip"]};class tl{constructor(t){this.model=t,this.partStates={},this.mode="assembled",this.currentStep=0;for(const e of Object.keys(t.parts))this.partStates[e]={status:"assembled",currentOffset:{x:0,y:0,z:0}}}isAssembled(t){return this.partStates[t].status==="assembled"}isExploded(t){return this.partStates[t].status==="exploded"}isAnimating(t){return this.partStates[t].status==="animating"}isAnyAnimating(){return Object.values(this.partStates).some(t=>t.status==="animating")}getExplodedCount(){return Object.values(this.partStates).filter(t=>t.status==="exploded").length}getTotalParts(){return Object.keys(this.partStates).length}getProgress(){const t=this.getTotalParts()-1;return t===0?0:this.getExplodedCount()/t*100}markAnimating(t,e){this.partStates[t].status="animating",this.partStates[t]._targetStatus=e}markExploded(t){const e=this.model.parts[t].explodeOffset;this.partStates[t]={status:"exploded",currentOffset:{...e}}}markAssembled(t){this.partStates[t]={status:"assembled",currentOffset:{x:0,y:0,z:0}}}updateOffset(t,e){this.partStates[t].currentOffset={...e}}updateMode(){const t=Object.values(this.partStates).every(n=>n.status==="exploded"),e=Object.values(this.partStates).every(n=>n.status==="assembled");t?this.mode="exploded":e&&(this.mode="assembled")}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zr="169",el=0,la=1,nl=2,mo=1,go=2,$e=3,hn=0,Me=1,He=2,ln=0,Kn=1,ca=2,ha=3,ua=4,il=5,yn=100,sl=101,rl=102,al=103,ol=104,ll=200,cl=201,hl=202,ul=203,Js=204,Qs=205,dl=206,fl=207,pl=208,ml=209,gl=210,_l=211,vl=212,xl=213,Ml=214,tr=0,er=1,nr=2,jn=3,ir=4,sr=5,rr=6,ar=7,_o=0,Sl=1,El=2,cn=0,yl=1,Tl=2,Al=3,vo=4,bl=5,wl=6,Rl=7,xo=300,Jn=301,Qn=302,or=303,lr=304,hs=306,cr=1e3,An=1001,hr=1002,ve=1003,Cl=1004,Ti=1005,Ie=1006,vs=1007,bn=1008,je=1009,Mo=1010,So=1011,vi=1012,Hr=1013,Rn=1014,Ge=1015,xi=1016,Gr=1017,Vr=1018,ti=1020,Eo=35902,yo=1021,To=1022,Ne=1023,Ao=1024,bo=1025,$n=1026,ei=1027,kr=1028,Wr=1029,wo=1030,Xr=1031,qr=1033,Ki=33776,$i=33777,Zi=33778,ji=33779,ur=35840,dr=35841,fr=35842,pr=35843,mr=36196,gr=37492,_r=37496,vr=37808,xr=37809,Mr=37810,Sr=37811,Er=37812,yr=37813,Tr=37814,Ar=37815,br=37816,wr=37817,Rr=37818,Cr=37819,Pr=37820,Lr=37821,Ji=36492,Dr=36494,Ir=36495,Ro=36283,Ur=36284,Nr=36285,Fr=36286,Pl=3200,Ll=3201,Co=0,Dl=1,on="",Be="srgb",dn="srgb-linear",Yr="display-p3",us="display-p3-linear",es="linear",Jt="srgb",ns="rec709",is="p3",Dn=7680,da=519,Il=512,Ul=513,Nl=514,Po=515,Fl=516,Ol=517,Bl=518,zl=519,fa=35044,pa="300 es",Ze=2e3,ss=2001;class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xs=Math.PI/180,rs=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ce[i&255]+ce[i>>8&255]+ce[i>>16&255]+ce[i>>24&255]+"-"+ce[t&255]+ce[t>>8&255]+"-"+ce[t>>16&15|64]+ce[t>>24&255]+"-"+ce[e&63|128]+ce[e>>8&255]+"-"+ce[e>>16&255]+ce[e>>24&255]+ce[n&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function Ms(i,t,e){return(1-e)*i+e*t}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],f=n[2],m=n[5],v=n[8],M=s[0],d=s[3],h=s[6],T=s[1],E=s[4],A=s[7],O=s[2],P=s[5],b=s[8];return r[0]=a*M+o*T+l*O,r[3]=a*d+o*E+l*P,r[6]=a*h+o*A+l*b,r[1]=c*M+u*T+p*O,r[4]=c*d+u*E+p*P,r[7]=c*h+u*A+p*b,r[2]=f*M+m*T+v*O,r[5]=f*d+m*E+v*P,r[8]=f*h+m*A+v*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,f=o*l-u*r,m=c*r-a*l,v=e*p+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=p*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ss.makeScale(t,e)),this}rotate(t){return this.premultiply(Ss.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ss.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ss=new Pt;function Lo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gl(){const i=as("canvas");return i.style.display="block",i}const ma={};function Qi(i){i in ma||(ma[i]=!0,console.warn(i))}function Vl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ga=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_a=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ci={[dn]:{transfer:es,primaries:ns,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Be]:{transfer:Jt,primaries:ns,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[us]:{transfer:es,primaries:is,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(_a),fromReference:i=>i.applyMatrix3(ga)},[Yr]:{transfer:Jt,primaries:is,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(_a),fromReference:i=>i.applyMatrix3(ga).convertLinearToSRGB()}},Xl=new Set([dn,us]),Wt={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ci[t].toReference,s=ci[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ci[i].primaries},getTransfer:function(i){return i===on?es:ci[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ci[t].luminanceCoefficients)}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let In;class ql{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{In===void 0&&(In=as("canvas")),In.width=t.width,In.height=t.height;const n=In.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=In}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=as("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yl=0;class Do{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ys(s[a].image)):r.push(ys(s[a]))}else r=ys(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kl=0;class fe extends si{constructor(t=fe.DEFAULT_IMAGE,e=fe.DEFAULT_MAPPING,n=An,s=An,r=Ie,a=bn,o=Ne,l=je,c=fe.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Mi(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fe.DEFAULT_IMAGE=null;fe.DEFAULT_MAPPING=xo;fe.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,s=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],p=l[8],f=l[1],m=l[5],v=l[9],M=l[2],d=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(p-M)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+M)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,A=(m+1)/2,O=(h+1)/2,P=(u+f)/4,b=(p+M)/4,F=(v+d)/4;return E>A&&E>O?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=P/n,r=b/n):A>O?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=P/s,r=F/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=b/r,s=F/r),this.set(n,s,r,e),this}let T=Math.sqrt((d-v)*(d-v)+(p-M)*(p-M)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(d-v)/T,this.y=(p-M)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Do(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends $l{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Io extends fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zl extends fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const f=r[a+0],m=r[a+1],v=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(p!==M||l!==f||c!==m||u!==v){let d=1-o;const h=l*f+c*m+u*v+p*M,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const O=Math.sqrt(E),P=Math.atan2(O,h*T);d=Math.sin(d*P)/O,o=Math.sin(o*P)/O}const A=o*T;if(l=l*d+f*A,c=c*d+m*A,u=u*d+v*A,p=p*d+M*A,d===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=O,c*=O,u*=O,p*=O}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+u*p+l*m-c*f,t[e+1]=l*v+u*f+c*p-o*m,t[e+2]=c*v+u*m+o*f-l*p,t[e+3]=u*v-o*p-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),f=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*p+c*m*v,this._y=c*m*p-f*u*v,this._z=c*u*v+f*m*p,this._w=c*u*p-f*m*v;break;case"YXZ":this._x=f*u*p+c*m*v,this._y=c*m*p-f*u*v,this._z=c*u*v-f*m*p,this._w=c*u*p+f*m*v;break;case"ZXY":this._x=f*u*p-c*m*v,this._y=c*m*p+f*u*v,this._z=c*u*v+f*m*p,this._w=c*u*p-f*m*v;break;case"ZYX":this._x=f*u*p-c*m*v,this._y=c*m*p+f*u*v,this._z=c*u*v-f*m*p,this._w=c*u*p+f*m*v;break;case"YZX":this._x=f*u*p+c*m*v,this._y=c*m*p+f*u*v,this._z=c*u*v-f*m*p,this._w=c*u*p-f*m*v;break;case"XZY":this._x=f*u*p-c*m*v,this._y=c*m*p-f*u*v,this._z=c*u*v+f*m*p,this._w=c*u*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(va.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new U,va=new Si;class fn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pe):Pe.fromBufferAttribute(r,a),Pe.applyMatrix4(t.matrixWorld),this.expandByPoint(Pe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ai.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ai.copy(n.boundingBox)),Ai.applyMatrix4(t.matrixWorld),this.union(Ai)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pe),Pe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hi),bi.subVectors(this.max,hi),Un.subVectors(t.a,hi),Nn.subVectors(t.b,hi),Fn.subVectors(t.c,hi),tn.subVectors(Nn,Un),en.subVectors(Fn,Nn),mn.subVectors(Un,Fn);let e=[0,-tn.z,tn.y,0,-en.z,en.y,0,-mn.z,mn.y,tn.z,0,-tn.x,en.z,0,-en.x,mn.z,0,-mn.x,-tn.y,tn.x,0,-en.y,en.x,0,-mn.y,mn.x,0];return!As(e,Un,Nn,Fn,bi)||(e=[1,0,0,0,1,0,0,0,1],!As(e,Un,Nn,Fn,bi))?!1:(wi.crossVectors(tn,en),e=[wi.x,wi.y,wi.z],As(e,Un,Nn,Fn,bi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new U,new U,new U,new U,new U,new U,new U,new U],Pe=new U,Ai=new fn,Un=new U,Nn=new U,Fn=new U,tn=new U,en=new U,mn=new U,hi=new U,bi=new U,wi=new U,gn=new U;function As(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gn.fromArray(i,r);const o=s.x*Math.abs(gn.x)+s.y*Math.abs(gn.y)+s.z*Math.abs(gn.z),l=t.dot(gn),c=e.dot(gn),u=n.dot(gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jl=new fn,ui=new U,bs=new U;class ri{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ui.subVectors(t,this.center);const e=ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ui.copy(t.center).add(bs)),this.expandByPoint(ui.copy(t.center).sub(bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xe=new U,ws=new U,Ri=new U,nn=new U,Rs=new U,Ci=new U,Cs=new U;class Kr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ws.copy(t).add(e).multiplyScalar(.5),Ri.copy(e).sub(t).normalize(),nn.copy(this.origin).sub(ws);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ri),o=nn.dot(this.direction),l=-nn.dot(Ri),c=nn.lengthSq(),u=Math.abs(1-a*a);let p,f,m,v;if(u>0)if(p=a*l-o,f=a*o-l,v=r*u,p>=0)if(f>=-v)if(f<=v){const M=1/u;p*=M,f*=M,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ws).addScaledVector(Ri,f),m}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const n=Xe.dot(this.direction),s=Xe.dot(Xe)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,s,r){Rs.subVectors(e,t),Ci.subVectors(n,t),Cs.crossVectors(Rs,Ci);let a=this.direction.dot(Cs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nn.subVectors(this.origin,t);const l=o*this.direction.dot(Ci.crossVectors(nn,Ci));if(l<0)return null;const c=o*this.direction.dot(Rs.cross(nn));if(c<0||l+c>a)return null;const u=-o*nn.dot(Cs);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,a,o,l,c,u,p,f,m,v,M,d){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,f,m,v,M,d)}set(t,e,n,s,r,a,o,l,c,u,p,f,m,v,M,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=f,h[3]=m,h[7]=v,h[11]=M,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),a=1/On.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*p,v=o*u,M=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=m+v*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*p,v=c*u,M=c*p;e[0]=f+M*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*p,v=c*u,M=c*p;e[0]=f-M*o,e[4]=-a*p,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*p,v=o*u,M=o*p;e[0]=l*u,e[4]=v*c-m,e[8]=f*c+M,e[1]=l*p,e[5]=M*c+f,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*u,e[4]=M-f*p,e[8]=v*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*p+v,e[10]=f-M*p}else if(t.order==="XZY"){const f=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=f*p+M,e[5]=a*u,e[9]=m*p-v,e[2]=v*p-m,e[6]=o*u,e[10]=M*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jl,t,Ql)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),sn.crossVectors(n,Te),sn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),sn.crossVectors(n,Te)),sn.normalize(),Pi.crossVectors(Te,sn),s[0]=sn.x,s[4]=Pi.x,s[8]=Te.x,s[1]=sn.y,s[5]=Pi.y,s[9]=Te.y,s[2]=sn.z,s[6]=Pi.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],f=n[9],m=n[13],v=n[2],M=n[6],d=n[10],h=n[14],T=n[3],E=n[7],A=n[11],O=n[15],P=s[0],b=s[4],F=s[8],tt=s[12],g=s[1],S=s[5],V=s[9],z=s[13],q=s[2],$=s[6],G=s[10],K=s[14],H=s[3],ot=s[7],lt=s[11],gt=s[15];return r[0]=a*P+o*g+l*q+c*H,r[4]=a*b+o*S+l*$+c*ot,r[8]=a*F+o*V+l*G+c*lt,r[12]=a*tt+o*z+l*K+c*gt,r[1]=u*P+p*g+f*q+m*H,r[5]=u*b+p*S+f*$+m*ot,r[9]=u*F+p*V+f*G+m*lt,r[13]=u*tt+p*z+f*K+m*gt,r[2]=v*P+M*g+d*q+h*H,r[6]=v*b+M*S+d*$+h*ot,r[10]=v*F+M*V+d*G+h*lt,r[14]=v*tt+M*z+d*K+h*gt,r[3]=T*P+E*g+A*q+O*H,r[7]=T*b+E*S+A*$+O*ot,r[11]=T*F+E*V+A*G+O*lt,r[15]=T*tt+E*z+A*K+O*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],f=t[10],m=t[14],v=t[3],M=t[7],d=t[11],h=t[15];return v*(+r*l*p-s*c*p-r*o*f+n*c*f+s*o*m-n*l*m)+M*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+d*(+e*c*p-e*o*m-r*a*p+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-e*l*p+e*o*f+s*a*p-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],f=t[10],m=t[11],v=t[12],M=t[13],d=t[14],h=t[15],T=p*d*c-M*f*c+M*l*m-o*d*m-p*l*h+o*f*h,E=v*f*c-u*d*c-v*l*m+a*d*m+u*l*h-a*f*h,A=u*M*c-v*p*c+v*o*m-a*M*m-u*o*h+a*p*h,O=v*p*l-u*M*l-v*o*f+a*M*f+u*o*d-a*p*d,P=e*T+n*E+s*A+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return t[0]=T*b,t[1]=(M*f*r-p*d*r-M*s*m+n*d*m+p*s*h-n*f*h)*b,t[2]=(o*d*r-M*l*r+M*s*c-n*d*c-o*s*h+n*l*h)*b,t[3]=(p*l*r-o*f*r-p*s*c+n*f*c+o*s*m-n*l*m)*b,t[4]=E*b,t[5]=(u*d*r-v*f*r+v*s*m-e*d*m-u*s*h+e*f*h)*b,t[6]=(v*l*r-a*d*r-v*s*c+e*d*c+a*s*h-e*l*h)*b,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*m+e*l*m)*b,t[8]=A*b,t[9]=(v*p*r-u*M*r-v*n*m+e*M*m+u*n*h-e*p*h)*b,t[10]=(a*M*r-v*o*r+v*n*c-e*M*c-a*n*h+e*o*h)*b,t[11]=(u*o*r-a*p*r-u*n*c+e*p*c+a*n*m-e*o*m)*b,t[12]=O*b,t[13]=(u*M*s-v*p*s+v*n*f-e*M*f-u*n*d+e*p*d)*b,t[14]=(v*o*s-a*M*s-v*n*l+e*M*l+a*n*d-e*o*d)*b,t[15]=(a*p*s-u*o*s+u*n*l-e*p*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,f=r*c,m=r*u,v=r*p,M=a*u,d=a*p,h=o*p,T=l*c,E=l*u,A=l*p,O=n.x,P=n.y,b=n.z;return s[0]=(1-(M+h))*O,s[1]=(m+A)*O,s[2]=(v-E)*O,s[3]=0,s[4]=(m-A)*P,s[5]=(1-(f+h))*P,s[6]=(d+T)*P,s[7]=0,s[8]=(v+E)*b,s[9]=(d-T)*b,s[10]=(1-(f+M))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=On.set(s[0],s[1],s[2]).length();const a=On.set(s[4],s[5],s[6]).length(),o=On.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Le.copy(this);const c=1/r,u=1/a,p=1/o;return Le.elements[0]*=c,Le.elements[1]*=c,Le.elements[2]*=c,Le.elements[4]*=u,Le.elements[5]*=u,Le.elements[6]*=u,Le.elements[8]*=p,Le.elements[9]*=p,Le.elements[10]*=p,e.setFromRotationMatrix(Le),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ze){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let m,v;if(o===Ze)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ss)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ze){const l=this.elements,c=1/(e-t),u=1/(n-s),p=1/(a-r),f=(e+t)*c,m=(n+s)*u;let v,M;if(o===Ze)v=(a+r)*p,M=-2*p;else if(o===ss)v=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const On=new U,Le=new Kt,Jl=new U(0,0,0),Ql=new U(1,1,1),sn=new U,Pi=new U,Te=new U,xa=new Kt,Ma=new Si;class Ve{constructor(t=0,e=0,n=0,s=Ve.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ve.DEFAULT_ORDER="XYZ";class $r{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tc=0;const Sa=new U,Bn=new Si,qe=new Kt,Li=new U,di=new U,ec=new U,nc=new Si,Ea=new U(1,0,0),ya=new U(0,1,0),Ta=new U(0,0,1),Aa={type:"added"},ic={type:"removed"},zn={type:"childadded",child:null},Ps={type:"childremoved",child:null};class se extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DEFAULT_UP.clone();const t=new U,e=new Ve,n=new Si,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.premultiply(Bn),this}rotateX(t){return this.rotateOnAxis(Ea,t)}rotateY(t){return this.rotateOnAxis(ya,t)}rotateZ(t){return this.rotateOnAxis(Ta,t)}translateOnAxis(t,e){return Sa.copy(t).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ea,t)}translateY(t){return this.translateOnAxis(ya,t)}translateZ(t){return this.translateOnAxis(Ta,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Li.copy(t):Li.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(di,Li,this.up):qe.lookAt(Li,di,this.up),this.quaternion.setFromRotationMatrix(qe),s&&(qe.extractRotation(s.matrixWorld),Bn.setFromRotationMatrix(qe),this.quaternion.premultiply(Bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Aa),zn.child=t,this.dispatchEvent(zn),zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ic),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Aa),zn.child=t,this.dispatchEvent(zn),zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,t,ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),f=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}se.DEFAULT_UP=new U(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const De=new U,Ye=new U,Ls=new U,Ke=new U,Hn=new U,Gn=new U,ba=new U,Ds=new U,Is=new U,Us=new U,Ns=new te,Fs=new te,Os=new te;class Ue{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),De.subVectors(t,e),s.cross(De);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){De.subVectors(s,e),Ye.subVectors(n,e),Ls.subVectors(t,e);const a=De.dot(De),o=De.dot(Ye),l=De.dot(Ls),c=Ye.dot(Ye),u=Ye.dot(Ls),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const f=1/p,m=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ke)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ke.x),l.addScaledVector(a,Ke.y),l.addScaledVector(o,Ke.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ns.setScalar(0),Fs.setScalar(0),Os.setScalar(0),Ns.fromBufferAttribute(t,e),Fs.fromBufferAttribute(t,n),Os.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ns,r.x),a.addScaledVector(Fs,r.y),a.addScaledVector(Os,r.z),a}static isFrontFacing(t,e,n,s){return De.subVectors(n,e),Ye.subVectors(t,e),De.cross(Ye).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),De.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ue.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ue.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ue.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ue.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ue.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Hn.subVectors(s,n),Gn.subVectors(r,n),Ds.subVectors(t,n);const l=Hn.dot(Ds),c=Gn.dot(Ds);if(l<=0&&c<=0)return e.copy(n);Is.subVectors(t,s);const u=Hn.dot(Is),p=Gn.dot(Is);if(u>=0&&p<=u)return e.copy(s);const f=l*p-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Hn,a);Us.subVectors(t,r);const m=Hn.dot(Us),v=Gn.dot(Us);if(v>=0&&m<=v)return e.copy(r);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Gn,o);const d=u*v-m*p;if(d<=0&&p-u>=0&&m-v>=0)return ba.subVectors(r,s),o=(p-u)/(p-u+(m-v)),e.copy(s).addScaledVector(ba,o);const h=1/(d+M+f);return a=M*h,o=f*h,e.copy(n).addScaledVector(Hn,a).addScaledVector(Gn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Di={h:0,s:0,l:0};function Bs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Hl(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bs(a,r,t+1/3),this.g=Bs(a,r,t),this.b=Bs(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Uo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Wt.fromWorkingColorSpace(he.copy(this),t),Math.round(_e(he.r*255,0,255))*65536+Math.round(_e(he.g*255,0,255))*256+Math.round(_e(he.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(he.copy(this),e);const n=he.r,s=he.g,r=he.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(he.copy(this),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=Be){Wt.fromWorkingColorSpace(he.copy(this),t);const e=he.r,n=he.g,s=he.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(rn),this.setHSL(rn.h+t,rn.s+e,rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(Di);const n=Ms(rn.h,Di.h,e),s=Ms(rn.s,Di.s,e),r=Ms(rn.l,Di.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const he=new Lt;Lt.NAMES=Uo;let sc=0;class ai extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Kn,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Js,this.blendDst=Qs,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Js&&(n.blendSrc=this.blendSrc),this.blendDst!==Qs&&(n.blendDst=this.blendDst),this.blendEquation!==yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ds extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ie=new U,Ii=new Gt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=Ge,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ii.fromBufferAttribute(this,e),Ii.applyMatrix3(t),this.setXY(e,Ii.x,Ii.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fa&&(t.usage=this.usage),t}}class No extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fo extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Oe extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rc=0;const Re=new Kt,zs=new se,Vn=new U,Ae=new fn,fi=new fn,oe=new U;class Je extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lo(t)?Fo:No)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return zs.lookAt(t),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ae.setFromBufferAttribute(r),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(oe.addVectors(Ae.min,fi.min),Ae.expandByPoint(oe),oe.addVectors(Ae.max,fi.max),Ae.expandByPoint(oe)):(Ae.expandByPoint(fi.min),Ae.expandByPoint(fi.max))}Ae.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)oe.fromBufferAttribute(o,c),l&&(Vn.fromBufferAttribute(t,c),oe.add(Vn)),s=Math.max(s,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;const c=new U,u=new U,p=new U,f=new Gt,m=new Gt,v=new Gt,M=new U,d=new U;function h(F,tt,g){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,tt),p.fromBufferAttribute(n,g),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,tt),v.fromBufferAttribute(r,g),u.sub(c),p.sub(c),m.sub(f),v.sub(f);const S=1/(m.x*v.y-v.x*m.y);isFinite(S)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(S),d.copy(p).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(S),o[F].add(M),o[tt].add(M),o[g].add(M),l[F].add(d),l[tt].add(d),l[g].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,tt=T.length;F<tt;++F){const g=T[F],S=g.start,V=g.count;for(let z=S,q=S+V;z<q;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new U,A=new U,O=new U,P=new U;function b(F){O.fromBufferAttribute(s,F),P.copy(O);const tt=o[F];E.copy(tt),E.sub(O.multiplyScalar(O.dot(tt))).normalize(),A.crossVectors(P,tt);const S=A.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,S)}for(let F=0,tt=T.length;F<tt;++F){const g=T[F],S=g.start,V=g.count;for(let z=S,q=S+V;z<q;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,p=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,d),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,p=o.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let M=0,d=l.length;M<d;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let h=0;h<u;h++)f[v++]=c[m++]}return new Fe(f,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],p=r[c];for(let f=0,m=p.length;f<m;f++)u.push(p[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new Kt,_n=new Kr,Ui=new ri,Ra=new U,Ni=new U,Fi=new U,Oi=new U,Hs=new U,Bi=new U,Ca=new U,zi=new U;class xe extends se{constructor(t=new Je,e=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Bi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],p=r[l];u!==0&&(Hs.fromBufferAttribute(p,t),a?Bi.addScaledVector(Hs,u):Bi.addScaledVector(Hs.sub(e),u))}e.add(Bi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(r),_n.copy(t.ray).recast(t.near),!(Ui.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Ui,Ra)===null||_n.origin.distanceToSquared(Ra)>(t.far-t.near)**2))&&(wa.copy(r).invert(),_n.copy(t.ray).applyMatrix4(wa),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const d=f[v],h=a[d.materialIndex],T=Math.max(d.start,m.start),E=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let A=T,O=E;A<O;A+=3){const P=o.getX(A),b=o.getX(A+1),F=o.getX(A+2);s=Hi(this,h,t,n,c,u,p,P,b,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let d=v,h=M;d<h;d+=3){const T=o.getX(d),E=o.getX(d+1),A=o.getX(d+2);s=Hi(this,a,t,n,c,u,p,T,E,A),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const d=f[v],h=a[d.materialIndex],T=Math.max(d.start,m.start),E=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let A=T,O=E;A<O;A+=3){const P=A,b=A+1,F=A+2;s=Hi(this,h,t,n,c,u,p,P,b,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let d=v,h=M;d<h;d+=3){const T=d,E=d+1,A=d+2;s=Hi(this,a,t,n,c,u,p,T,E,A),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function ac(i,t,e,n,s,r,a,o){let l;if(t.side===Me?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===hn,o),l===null)return null;zi.copy(o),zi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zi);return c<e.near||c>e.far?null:{distance:c,point:zi.clone(),object:i}}function Hi(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ni),i.getVertexPosition(l,Fi),i.getVertexPosition(c,Oi);const u=ac(i,t,e,n,Ni,Fi,Oi,Ca);if(u){const p=new U;Ue.getBarycoord(Ca,Ni,Fi,Oi,p),s&&(u.uv=Ue.getInterpolatedAttribute(s,o,l,c,p,new Gt)),r&&(u.uv1=Ue.getInterpolatedAttribute(r,o,l,c,p,new Gt)),a&&(u.normal=Ue.getInterpolatedAttribute(a,o,l,c,p,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Ue.getNormal(Ni,Fi,Oi,f.normal),u.face=f,u.barycoord=p}return u}class Pn extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(p,2));function v(M,d,h,T,E,A,O,P,b,F,tt){const g=A/b,S=O/F,V=A/2,z=O/2,q=P/2,$=b+1,G=F+1;let K=0,H=0;const ot=new U;for(let lt=0;lt<G;lt++){const gt=lt*S-z;for(let zt=0;zt<$;zt++){const Xt=zt*g-V;ot[M]=Xt*T,ot[d]=gt*E,ot[h]=q,c.push(ot.x,ot.y,ot.z),ot[M]=0,ot[d]=0,ot[h]=P>0?1:-1,u.push(ot.x,ot.y,ot.z),p.push(zt/b),p.push(1-lt/F),K+=1}}for(let lt=0;lt<F;lt++)for(let gt=0;gt<b;gt++){const zt=f+gt+$*lt,Xt=f+gt+$*(lt+1),k=f+(gt+1)+$*(lt+1),j=f+(gt+1)+$*lt;l.push(zt,Xt,j),l.push(Xt,k,j),H+=6}o.addGroup(m,H,tt),m+=H,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function de(i){const t={};for(let e=0;e<i.length;e++){const n=ni(i[e]);for(const s in n)t[s]=n[s]}return t}function oc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const lc={clone:ni,merge:de};var cc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cc,this.fragmentShader=hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=oc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bo extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ze}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const an=new U,Pa=new Gt,La=new Gt;class be extends Bo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(an.x,an.y).multiplyScalar(-t/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(an.x,an.y).multiplyScalar(-t/an.z)}getViewSize(t,e){return this.getViewBounds(t,Pa,La),e.subVectors(La,Pa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const kn=-90,Wn=1;class uc extends se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new be(kn,Wn,t,e);s.layers=this.layers,this.add(s);const r=new be(kn,Wn,t,e);r.layers=this.layers,this.add(r);const a=new be(kn,Wn,t,e);a.layers=this.layers,this.add(a);const o=new be(kn,Wn,t,e);o.layers=this.layers,this.add(o);const l=new be(kn,Wn,t,e);l.layers=this.layers,this.add(l);const c=new be(kn,Wn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class zo extends fe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Jn,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dc extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ie}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:ln});r.uniforms.tEquirect.value=e;const a=new xe(s,r),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=Ie),new uc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Gs=new U,fc=new U,pc=new Pt;class Sn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gs.subVectors(n,e).cross(fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pc.getNormalMatrix(t),s=this.coplanarPoint(Gs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vn=new ri,Gi=new U;class Zr{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],p=s[6],f=s[7],m=s[8],v=s[9],M=s[10],d=s[11],h=s[12],T=s[13],E=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,d-m,A-h).normalize(),n[1].setComponents(l+r,f+c,d+m,A+h).normalize(),n[2].setComponents(l+a,f+u,d+v,A+T).normalize(),n[3].setComponents(l-a,f-u,d-v,A-T).normalize(),n[4].setComponents(l-o,f-p,d-M,A-E).normalize(),e===Ze)n[5].setComponents(l+o,f+p,d+M,A+E).normalize();else if(e===ss)n[5].setComponents(o,p,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vn)}intersectsSprite(t){return vn.center.set(0,0,0),vn.radius=.7071067811865476,vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(vn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gi.x=s.normal.x>0?t.max.x:t.min.x,Gi.y=s.normal.y>0?t.max.y:t.min.y,Gi.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ho(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mc(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ii extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,f=e/l,m=[],v=[],M=[],d=[];for(let h=0;h<u;h++){const T=h*f-a;for(let E=0;E<c;E++){const A=E*p-r;v.push(A,-T,0),M.push(0,0,1),d.push(E/o),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const E=T+c*h,A=T+c*(h+1),O=T+1+c*(h+1),P=T+1+c*h;m.push(E,A,P),m.push(A,O,P)}this.setIndex(m),this.setAttribute("position",new Oe(v,3)),this.setAttribute("normal",new Oe(M,3)),this.setAttribute("uv",new Oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_c=`#ifdef USE_ALPHAHASH
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
#endif`,vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ec=`#ifdef USE_AOMAP
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
#endif`,yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tc=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ac=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cc=`#ifdef USE_IRIDESCENCE
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
#endif`,Pc=`#ifdef USE_BUMPMAP
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
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zc=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Hc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gc=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zc=`#ifdef USE_ENVMAP
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
#endif`,jc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
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
}`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ah=`#if defined( USE_POINTS_UV )
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
#endif`,bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`#ifdef USE_MORPHTARGETS
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
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
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
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,tu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nu=`#ifdef USE_SKINNING
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
#endif`,iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
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
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cu=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gu=`uniform sampler2D t2D;
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
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`#include <common>
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
}`,Eu=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yu=`#define DISTANCE
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
}`,Tu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`uniform float scale;
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Cu=`#include <common>
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
}`,Pu=`uniform vec3 diffuse;
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
}`,Lu=`#define LAMBERT
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
}`,Du=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Iu=`#define MATCAP
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
}`,Uu=`#define MATCAP
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
}`,Nu=`#define NORMAL
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
}`,Fu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ou=`#define PHONG
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
}`,Bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zu=`#define STANDARD
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
}`,Hu=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Gu=`#define TOON
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
}`,Vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ku=`uniform float size;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Xu=`#include <common>
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
}`,qu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Yu=`uniform float rotation;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:gc,alphahash_pars_fragment:_c,alphamap_fragment:vc,alphamap_pars_fragment:xc,alphatest_fragment:Mc,alphatest_pars_fragment:Sc,aomap_fragment:Ec,aomap_pars_fragment:yc,batching_pars_vertex:Tc,batching_vertex:Ac,begin_vertex:bc,beginnormal_vertex:wc,bsdfs:Rc,iridescence_fragment:Cc,bumpmap_pars_fragment:Pc,clipping_planes_fragment:Lc,clipping_planes_pars_fragment:Dc,clipping_planes_pars_vertex:Ic,clipping_planes_vertex:Uc,color_fragment:Nc,color_pars_fragment:Fc,color_pars_vertex:Oc,color_vertex:Bc,common:zc,cube_uv_reflection_fragment:Hc,defaultnormal_vertex:Gc,displacementmap_pars_vertex:Vc,displacementmap_vertex:kc,emissivemap_fragment:Wc,emissivemap_pars_fragment:Xc,colorspace_fragment:qc,colorspace_pars_fragment:Yc,envmap_fragment:Kc,envmap_common_pars_fragment:$c,envmap_pars_fragment:Zc,envmap_pars_vertex:jc,envmap_physical_pars_fragment:lh,envmap_vertex:Jc,fog_vertex:Qc,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:sh,lights_lambert_fragment:rh,lights_lambert_pars_fragment:ah,lights_pars_begin:oh,lights_toon_fragment:ch,lights_toon_pars_fragment:hh,lights_phong_fragment:uh,lights_phong_pars_fragment:dh,lights_physical_fragment:fh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:gh,lights_fragment_end:_h,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:Sh,map_fragment:Eh,map_pars_fragment:yh,map_particle_fragment:Th,map_particle_pars_fragment:Ah,metalnessmap_fragment:bh,metalnessmap_pars_fragment:wh,morphinstance_vertex:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Ph,morphtarget_pars_vertex:Lh,morphtarget_vertex:Dh,normal_fragment_begin:Ih,normal_fragment_maps:Uh,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:Gh,iridescence_pars_fragment:Vh,opaque_fragment:kh,packing:Wh,premultiplied_alpha_fragment:Xh,project_vertex:qh,dithering_fragment:Yh,dithering_pars_fragment:Kh,roughnessmap_fragment:$h,roughnessmap_pars_fragment:Zh,shadowmap_pars_fragment:jh,shadowmap_pars_vertex:Jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:nu,skinning_vertex:iu,skinnormal_vertex:su,specularmap_fragment:ru,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:uu,uv_pars_vertex:du,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:_u,backgroundCube_frag:vu,cube_vert:xu,cube_frag:Mu,depth_vert:Su,depth_frag:Eu,distanceRGBA_vert:yu,distanceRGBA_frag:Tu,equirect_vert:Au,equirect_frag:bu,linedashed_vert:wu,linedashed_frag:Ru,meshbasic_vert:Cu,meshbasic_frag:Pu,meshlambert_vert:Lu,meshlambert_frag:Du,meshmatcap_vert:Iu,meshmatcap_frag:Uu,meshnormal_vert:Nu,meshnormal_frag:Fu,meshphong_vert:Ou,meshphong_frag:Bu,meshphysical_vert:zu,meshphysical_frag:Hu,meshtoon_vert:Gu,meshtoon_frag:Vu,points_vert:ku,points_frag:Wu,shadow_vert:Xu,shadow_frag:qu,sprite_vert:Yu,sprite_frag:Ku},et={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},ze={basic:{uniforms:de([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:de([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:de([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:de([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:de([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:de([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:de([et.points,et.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:de([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:de([et.common,et.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:de([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:de([et.sprite,et.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:de([et.common,et.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:de([et.lights,et.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};ze.physical={uniforms:de([ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Vi={r:0,b:0,g:0},xn=new Ve,$u=new Kt;function Zu(i,t,e,n,s,r,a){const o=new Lt(0);let l=r===!0?0:1,c,u,p=null,f=0,m=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function M(T){let E=!1;const A=v(T);A===null?h(o,l):A&&A.isColor&&(h(A,1),E=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(T,E){const A=v(E);A&&(A.isCubeTexture||A.mapping===hs)?(u===void 0&&(u=new xe(new Pn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ni(ze.backgroundCube.uniforms),vertexShader:ze.backgroundCube.vertexShader,fragmentShader:ze.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xn.copy(E.backgroundRotation),xn.x*=-1,xn.y*=-1,xn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($u.makeRotationFromEuler(xn)),u.material.toneMapped=Wt.getTransfer(A.colorSpace)!==Jt,(p!==A||f!==A.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=A,f=A.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new xe(new ii(2,2),new un({name:"BackgroundMaterial",uniforms:ni(ze.background.uniforms),vertexShader:ze.background.vertexShader,fragmentShader:ze.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(A.colorSpace)!==Jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||f!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=A,f=A.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,E){T.getRGB(Vi,Oo(i)),n.buffers.color.setClear(Vi.r,Vi.g,Vi.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:M,addToRenderList:d}}function ju(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(g,S,V,z,q){let $=!1;const G=p(z,V,S);r!==G&&(r=G,c(r.object)),$=m(g,z,V,q),$&&v(g,z,V,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,A(g,S,V,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function p(g,S,V){const z=V.wireframe===!0;let q=n[g.id];q===void 0&&(q={},n[g.id]=q);let $=q[S.id];$===void 0&&($={},q[S.id]=$);let G=$[z];return G===void 0&&(G=f(l()),$[z]=G),G}function f(g){const S=[],V=[],z=[];for(let q=0;q<e;q++)S[q]=0,V[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:V,attributeDivisors:z,object:g,attributes:{},index:null}}function m(g,S,V,z){const q=r.attributes,$=S.attributes;let G=0;const K=V.getAttributes();for(const H in K)if(K[H].location>=0){const lt=q[H];let gt=$[H];if(gt===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(gt=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(gt=g.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function v(g,S,V,z){const q={},$=S.attributes;let G=0;const K=V.getAttributes();for(const H in K)if(K[H].location>=0){let lt=$[H];lt===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(lt=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(lt=g.instanceColor));const gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),q[H]=gt,G++}r.attributes=q,r.attributesNum=G,r.index=z}function M(){const g=r.newAttributes;for(let S=0,V=g.length;S<V;S++)g[S]=0}function d(g){h(g,0)}function h(g,S){const V=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;V[g]=1,z[g]===0&&(i.enableVertexAttribArray(g),z[g]=1),q[g]!==S&&(i.vertexAttribDivisor(g,S),q[g]=S)}function T(){const g=r.newAttributes,S=r.enabledAttributes;for(let V=0,z=S.length;V<z;V++)S[V]!==g[V]&&(i.disableVertexAttribArray(V),S[V]=0)}function E(g,S,V,z,q,$,G){G===!0?i.vertexAttribIPointer(g,S,V,q,$):i.vertexAttribPointer(g,S,V,z,q,$)}function A(g,S,V,z){M();const q=z.attributes,$=V.getAttributes(),G=S.defaultAttributeValues;for(const K in $){const H=$[K];if(H.location>=0){let ot=q[K];if(ot===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(ot=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(ot=g.instanceColor)),ot!==void 0){const lt=ot.normalized,gt=ot.itemSize,zt=t.get(ot);if(zt===void 0)continue;const Xt=zt.buffer,k=zt.type,j=zt.bytesPerElement,pt=k===i.INT||k===i.UNSIGNED_INT||ot.gpuType===Hr;if(ot.isInterleavedBufferAttribute){const ct=ot.data,wt=ct.stride,St=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)h(H.location+Ut,ct.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)d(H.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Ut=0;Ut<H.locationSize;Ut++)E(H.location+Ut,gt/H.locationSize,k,lt,wt*j,(St+gt/H.locationSize*Ut)*j,pt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)h(H.location+ct,ot.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<H.locationSize;ct++)d(H.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ct=0;ct<H.locationSize;ct++)E(H.location+ct,gt/H.locationSize,k,lt,gt*j,gt/H.locationSize*ct*j,pt)}}else if(G!==void 0){const lt=G[K];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}T()}function O(){F();for(const g in n){const S=n[g];for(const V in S){const z=S[V];for(const q in z)u(z[q].object),delete z[q];delete S[V]}delete n[g]}}function P(g){if(n[g.id]===void 0)return;const S=n[g.id];for(const V in S){const z=S[V];for(const q in z)u(z[q].object),delete z[q];delete S[V]}delete n[g.id]}function b(g){for(const S in n){const V=n[S];if(V[g.id]===void 0)continue;const z=V[g.id];for(const q in z)u(z[q].object),delete z[q];delete V[g.id]}}function F(){tt(),a=!0,r!==s&&(r=s,c(r.object))}function tt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:tt,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:d,disableUnusedAttributes:T}}function Ju(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),e.update(u,n,p))}function o(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let m=0;for(let v=0;v<p;v++)m+=u[v];e.update(m,n,1)}function l(c,u,p,f){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=u[M];for(let M=0;M<f.length;M++)e.update(v,n,f[M])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Ne&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const F=b===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==je&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ge&&!F)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:O,maxSamples:P}}function td(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Sn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=u(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,M=p.clipIntersection,d=p.clipShadows,h=i.get(p);if(!s||v===null||v.length===0||r&&!d)r?u(null):c();else{const T=r?0:n,E=T*4;let A=h.clippingState||null;l.value=A,A=u(v,f,E,m);for(let O=0;O!==E;++O)A[O]=e[O];h.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,f,m,v){const M=p!==null?p.length:0;let d=null;if(M!==0){if(d=l.value,v!==!0||d===null){const h=m+M*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<h)&&(d=new Float32Array(h));for(let E=0,A=m;E!==M;++E,A+=4)a.copy(p[E]).applyMatrix4(T,o),a.normal.toArray(d,A),d[A+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}function ed(i){let t=new WeakMap;function e(a,o){return o===or?a.mapping=Jn:o===lr&&(a.mapping=Qn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===or||o===lr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Go extends Bo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yn=4,Da=[.125,.215,.35,.446,.526,.582],Tn=20,Vs=new Go,Ia=new Lt;let ks=null,Ws=0,Xs=0,qs=!1;const En=(1+Math.sqrt(5))/2,Xn=1/En,Ua=[new U(-En,Xn,0),new U(En,Xn,0),new U(-Xn,0,En),new U(Xn,0,En),new U(0,En,-Xn),new U(0,En,Xn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ks=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ks,Ws,Xs),this._renderer.xr.enabled=qs,t.scissorTest=!1,ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ks=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:xi,format:Ne,colorSpace:dn,depthBuffer:!1},s=Fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nd(r)),this._blurMaterial=id(r,t,e)}return s}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,s){const o=new be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(Ia),u.toneMapping=cn,u.autoClear=!1;const m=new ds({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),v=new xe(new Pn,m);let M=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,M=!0):(m.color.copy(Ia),M=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;ki(s,T*E,h>2?E:0,E,E),u.setRenderTarget(s),M&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Jn||t.mapping===Qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ki(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ua[(s-r-1)%Ua.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new xe(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Tn-1),M=r/v,d=isFinite(r)?1+Math.floor(u*M):Tn;d>Tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Tn}`);const h=[];let T=0;for(let b=0;b<Tn;++b){const F=b/M,tt=Math.exp(-F*F/2);h.push(tt),b===0?T+=tt:b<d&&(T+=2*tt)}for(let b=0;b<h.length;b++)h[b]=h[b]/T;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-n;const A=this._sizeLods[s],O=3*A*(s>E-Yn?s-E+Yn:0),P=4*(this._cubeSize-A);ki(e,O,P,3*A,2*A),l.setRenderTarget(e),l.render(p,Vs)}}function nd(i){const t=[],e=[],n=[];let s=i;const r=i-Yn+1+Da.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Yn?l=Da[a-i+Yn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,p=1+c,f=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,v=6,M=3,d=2,h=1,T=new Float32Array(M*v*m),E=new Float32Array(d*v*m),A=new Float32Array(h*v*m);for(let P=0;P<m;P++){const b=P%3*2/3-1,F=P>2?0:-1,tt=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];T.set(tt,M*v*P),E.set(f,d*v*P);const g=[P,P,P,P,P,P];A.set(g,h*v*P)}const O=new Je;O.setAttribute("position",new Fe(T,M)),O.setAttribute("uv",new Fe(E,d)),O.setAttribute("faceIndex",new Fe(A,h)),t.push(O),s>Yn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fa(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function id(i,t,e){const n=new Float32Array(Tn),s=new U(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Oa(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ba(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function jr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===or||l===lr,u=l===Jn||l===Qn;if(c||u){let p=t.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Na(i)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Na(i)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ad(i,t,e,n){const s={},r=new WeakMap;function a(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let d=0,h=M.length;d<h;d++)t.remove(M[d])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const M=m[v];for(let d=0,h=M.length;d<h;d++)t.update(M[d],i.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let E=0,A=T.length;E<A;E+=3){const O=T[E+0],P=T[E+1],b=T[E+2];f.push(O,P,P,b,b,O)}}else if(v!==void 0){const T=v.array;M=v.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const O=E+0,P=E+1,b=E+2;f.push(O,P,P,b,b,O)}}else return;const d=new(Lo(f)?Fo:No)(f,1);d.version=M;const h=r.get(p);h&&t.remove(h),r.set(p,d)}function u(p){const f=r.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function od(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,f*a,v),e.update(m,n,v))}function u(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,v);let d=0;for(let h=0;h<v;h++)d+=m[h];e.update(d,n,1)}function p(f,m,v,M){if(v===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],M[h]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,M,0,v);let h=0;for(let T=0;T<v;T++)h+=m[T];for(let T=0;T<M.length;T++)e.update(h,n,M[T])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function ld(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cd(i,t,e){const n=new WeakMap,s=new te;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let g=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var m=g;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),M===!0&&(A=2),d===!0&&(A=3);let O=o.attributes.position.count*A,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const b=new Float32Array(O*P*4*p),F=new Io(b,O,P,p);F.type=Ge,F.needsUpdate=!0;const tt=A*4;for(let S=0;S<p;S++){const V=h[S],z=T[S],q=E[S],$=O*P*4*S;for(let G=0;G<V.count;G++){const K=G*tt;v===!0&&(s.fromBufferAttribute(V,G),b[$+K+0]=s.x,b[$+K+1]=s.y,b[$+K+2]=s.z,b[$+K+3]=0),M===!0&&(s.fromBufferAttribute(z,G),b[$+K+4]=s.x,b[$+K+5]=s.y,b[$+K+6]=s.z,b[$+K+7]=0),d===!0&&(s.fromBufferAttribute(q,G),b[$+K+8]=s.x,b[$+K+9]=s.y,b[$+K+10]=s.z,b[$+K+11]=q.itemSize===4?s.w:1)}}f={count:p,texture:F,size:new Gt(O,P)},n.set(o,f),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let d=0;d<c.length;d++)v+=c[d];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function hd(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Vo extends fe{constructor(t,e,n,s,r,a,o,l,c,u=$n){if(u!==$n&&u!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$n&&(n=Rn),n===void 0&&u===ei&&(n=ti),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ve,this.minFilter=l!==void 0?l:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ko=new fe,za=new Vo(1,1),Wo=new Io,Xo=new Zl,qo=new zo,Ha=[],Ga=[],Va=new Float32Array(16),ka=new Float32Array(9),Wa=new Float32Array(4);function oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ha[s];if(r===void 0&&(r=new Float32Array(s),Ha[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fs(i,t){let e=Ga[t];e===void 0&&(e=new Int32Array(t),Ga[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ud(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2fv(this.addr,t),ae(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;i.uniform3fv(this.addr,t),ae(e,t)}}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4fv(this.addr,t),ae(e,t)}}function md(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ae(e,t)}else{if(re(e,n))return;Wa.set(n),i.uniformMatrix2fv(this.addr,!1,Wa),ae(e,n)}}function gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ae(e,t)}else{if(re(e,n))return;ka.set(n),i.uniformMatrix3fv(this.addr,!1,ka),ae(e,n)}}function _d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ae(e,t)}else{if(re(e,n))return;Va.set(n),i.uniformMatrix4fv(this.addr,!1,Va),ae(e,n)}}function vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2iv(this.addr,t),ae(e,t)}}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3iv(this.addr,t),ae(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4iv(this.addr,t),ae(e,t)}}function Ed(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2uiv(this.addr,t),ae(e,t)}}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3uiv(this.addr,t),ae(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4uiv(this.addr,t),ae(e,t)}}function bd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(za.compareFunction=Po,r=za):r=ko,e.setTexture2D(t||r,s)}function wd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xo,s)}function Rd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qo,s)}function Cd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wo,s)}function Pd(i){switch(i){case 5126:return ud;case 35664:return dd;case 35665:return fd;case 35666:return pd;case 35674:return md;case 35675:return gd;case 35676:return _d;case 5124:case 35670:return vd;case 35667:case 35671:return xd;case 35668:case 35672:return Md;case 35669:case 35673:return Sd;case 5125:return Ed;case 36294:return yd;case 36295:return Td;case 36296:return Ad;case 35678:case 36198:case 36298:case 36306:case 35682:return bd;case 35679:case 36299:case 36307:return wd;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Cd}}function Ld(i,t){i.uniform1fv(this.addr,t)}function Dd(i,t){const e=oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Id(i,t){const e=oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ud(i,t){const e=oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Nd(i,t){const e=oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fd(i,t){const e=oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Od(i,t){const e=oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bd(i,t){i.uniform1iv(this.addr,t)}function zd(i,t){i.uniform2iv(this.addr,t)}function Hd(i,t){i.uniform3iv(this.addr,t)}function Gd(i,t){i.uniform4iv(this.addr,t)}function Vd(i,t){i.uniform1uiv(this.addr,t)}function kd(i,t){i.uniform2uiv(this.addr,t)}function Wd(i,t){i.uniform3uiv(this.addr,t)}function Xd(i,t){i.uniform4uiv(this.addr,t)}function qd(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);re(n,r)||(i.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ko,r[a])}function Yd(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);re(n,r)||(i.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xo,r[a])}function Kd(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);re(n,r)||(i.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qo,r[a])}function $d(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);re(n,r)||(i.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wo,r[a])}function Zd(i){switch(i){case 5126:return Ld;case 35664:return Dd;case 35665:return Id;case 35666:return Ud;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return Hd;case 35669:case 35673:return Gd;case 5125:return Vd;case 36294:return kd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return $d}}class jd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pd(e.type)}}class Jd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zd(e.type)}}class Qd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function Xa(i,t){i.seq.push(t),i.map[t.id]=t}function tf(i,t,e){const n=i.name,s=n.length;for(Ys.lastIndex=0;;){const r=Ys.exec(n),a=Ys.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xa(e,c===void 0?new jd(o,i,t):new Jd(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Qd(o),Xa(e,p)),e=p}}}class ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function qa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ef=37297;let nf=0;function sf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function rf(i){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(i);let n;switch(t===e?n="":t===is&&e===ns?n="LinearDisplayP3ToLinearSRGB":t===ns&&e===is&&(n="LinearSRGBToLinearDisplayP3"),i){case dn:case us:return[n,"LinearTransferOETF"];case Be:case Yr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ya(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sf(i.getShaderSource(t),a)}else return s}function af(i,t){const e=rf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function of(i,t){let e;switch(t){case yl:e="Linear";break;case Tl:e="Reinhard";break;case Al:e="Cineon";break;case vo:e="ACESFilmic";break;case wl:e="AgX";break;case Rl:e="Neutral";break;case bl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wi=new U;function lf(){Wt.getLuminanceCoefficients(Wi);const i=Wi.x.toFixed(4),t=Wi.y.toFixed(4),e=Wi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_i).join(`
`)}function hf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _i(i){return i!==""}function Ka(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $a(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(i){return i.replace(df,pf)}const ff=new Map;function pf(i,t){let e=Ct[t];if(e===void 0){const n=ff.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Or(e)}const mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(i){return i.replace(mf,gf)}function gf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ja(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _f(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===go?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$e&&(t="SHADOWMAP_TYPE_VSM"),t}function vf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jn:case Qn:t="ENVMAP_TYPE_CUBE";break;case hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qn:t="ENVMAP_MODE_REFRACTION";break}return t}function Mf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _o:t="ENVMAP_BLENDING_MULTIPLY";break;case Sl:t="ENVMAP_BLENDING_MIX";break;case El:t="ENVMAP_BLENDING_ADD";break}return t}function Sf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ef(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_f(e),c=vf(e),u=xf(e),p=Mf(e),f=Sf(e),m=cf(e),v=hf(r),M=s.createProgram();let d,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_i).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_i).join(`
`),h.length>0&&(h+=`
`)):(d=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),h=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==cn?of("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,af("linearToOutputTexel",e.outputColorSpace),lf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_i).join(`
`)),a=Or(a),a=Ka(a,e),a=$a(a,e),o=Or(o),o=Ka(o,e),o=$a(o,e),a=Za(a),o=Za(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",e.glslVersion===pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=T+d+a,A=T+h+o,O=qa(s,s.VERTEX_SHADER,E),P=qa(s,s.FRAGMENT_SHADER,A);s.attachShader(M,O),s.attachShader(M,P),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function b(S){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(O).trim(),q=s.getShaderInfoLog(P).trim();let $=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,O,P);else{const K=Ya(s,O,"vertex"),H=Ya(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+V+`
`+K+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||q==="")&&(G=!1);G&&(S.diagnostics={runnable:$,programLog:V,vertexShader:{log:z,prefix:d},fragmentShader:{log:q,prefix:h}})}s.deleteShader(O),s.deleteShader(P),F=new ts(s,M),tt=uf(s,M)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let tt;this.getAttributes=function(){return tt===void 0&&b(this),tt};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(M,ef)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nf++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let yf=0;class Tf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Af(t),e.set(t,n)),n}}class Af{constructor(t){this.id=yf++,this.code=t,this.usedTimes=0}}function bf(i,t,e,n,s,r,a){const o=new $r,l=new Tf,c=new Set,u=[],p=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,S,V,z,q){const $=z.fog,G=q.geometry,K=g.isMeshStandardMaterial?z.environment:null,H=(g.isMeshStandardMaterial?e:t).get(g.envMap||K),ot=H&&H.mapping===hs?H.image.height:null,lt=M[g.type];g.precision!==null&&(v=s.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,zt=gt!==void 0?gt.length:0;let Xt=0;G.morphAttributes.position!==void 0&&(Xt=1),G.morphAttributes.normal!==void 0&&(Xt=2),G.morphAttributes.color!==void 0&&(Xt=3);let k,j,pt,ct;if(lt){const me=ze[lt];k=me.vertexShader,j=me.fragmentShader}else k=g.vertexShader,j=g.fragmentShader,l.update(g),pt=l.getVertexShaderID(g),ct=l.getFragmentShaderID(g);const wt=i.getRenderTarget(),St=q.isInstancedMesh===!0,Ut=q.isBatchedMesh===!0,Yt=!!g.map,Nt=!!g.matcap,w=!!H,Se=!!g.aoMap,Dt=!!g.lightMap,Ot=!!g.bumpMap,yt=!!g.normalMap,Zt=!!g.displacementMap,bt=!!g.emissiveMap,y=!!g.metalnessMap,_=!!g.roughnessMap,D=g.anisotropy>0,X=g.clearcoat>0,Z=g.dispersion>0,W=g.iridescence>0,_t=g.sheen>0,nt=g.transmission>0,ht=D&&!!g.anisotropyMap,Bt=X&&!!g.clearcoatMap,J=X&&!!g.clearcoatNormalMap,ut=X&&!!g.clearcoatRoughnessMap,Tt=W&&!!g.iridescenceMap,At=W&&!!g.iridescenceThicknessMap,dt=_t&&!!g.sheenColorMap,It=_t&&!!g.sheenRoughnessMap,Rt=!!g.specularMap,$t=!!g.specularColorMap,R=!!g.specularIntensityMap,rt=nt&&!!g.transmissionMap,B=nt&&!!g.thicknessMap,Y=!!g.gradientMap,it=!!g.alphaMap,at=g.alphaTest>0,Ft=!!g.alphaHash,ne=!!g.extensions;let pe=cn;g.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Ht={shaderID:lt,shaderType:g.type,shaderName:g.name,vertexShader:k,fragmentShader:j,defines:g.defines,customVertexShaderID:pt,customFragmentShaderID:ct,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Ut,batchingColor:Ut&&q._colorsTexture!==null,instancing:St,instancingColor:St&&q.instanceColor!==null,instancingMorph:St&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:dn,alphaToCoverage:!!g.alphaToCoverage,map:Yt,matcap:Nt,envMap:w,envMapMode:w&&H.mapping,envMapCubeUVHeight:ot,aoMap:Se,lightMap:Dt,bumpMap:Ot,normalMap:yt,displacementMap:m&&Zt,emissiveMap:bt,normalMapObjectSpace:yt&&g.normalMapType===Dl,normalMapTangentSpace:yt&&g.normalMapType===Co,metalnessMap:y,roughnessMap:_,anisotropy:D,anisotropyMap:ht,clearcoat:X,clearcoatMap:Bt,clearcoatNormalMap:J,clearcoatRoughnessMap:ut,dispersion:Z,iridescence:W,iridescenceMap:Tt,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:dt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:$t,specularIntensityMap:R,transmission:nt,transmissionMap:rt,thicknessMap:B,gradientMap:Y,opaque:g.transparent===!1&&g.blending===Kn&&g.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:Ft,combine:g.combine,mapUv:Yt&&d(g.map.channel),aoMapUv:Se&&d(g.aoMap.channel),lightMapUv:Dt&&d(g.lightMap.channel),bumpMapUv:Ot&&d(g.bumpMap.channel),normalMapUv:yt&&d(g.normalMap.channel),displacementMapUv:Zt&&d(g.displacementMap.channel),emissiveMapUv:bt&&d(g.emissiveMap.channel),metalnessMapUv:y&&d(g.metalnessMap.channel),roughnessMapUv:_&&d(g.roughnessMap.channel),anisotropyMapUv:ht&&d(g.anisotropyMap.channel),clearcoatMapUv:Bt&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:J&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:At&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:It&&d(g.sheenRoughnessMap.channel),specularMapUv:Rt&&d(g.specularMap.channel),specularColorMapUv:$t&&d(g.specularColorMap.channel),specularIntensityMapUv:R&&d(g.specularIntensityMap.channel),transmissionMapUv:rt&&d(g.transmissionMap.channel),thicknessMapUv:B&&d(g.thicknessMap.channel),alphaMapUv:it&&d(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(yt||D),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(Yt||it),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Yt&&g.map.isVideoTexture===!0&&Wt.getTransfer(g.map.colorSpace)===Jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===He,flipSided:g.side===Me,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ne&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&g.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function T(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const V in g.defines)S.push(V),S.push(g.defines[V]);return g.isRawShaderMaterial===!1&&(E(S,g),A(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function E(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function A(g,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),g.push(o.mask)}function O(g){const S=M[g.type];let V;if(S){const z=ze[S];V=lc.clone(z.uniforms)}else V=g.uniforms;return V}function P(g,S){let V;for(let z=0,q=u.length;z<q;z++){const $=u[z];if($.cacheKey===S){V=$,++V.usedTimes;break}}return V===void 0&&(V=new Ef(i,S,g,r),u.push(V)),V}function b(g){if(--g.usedTimes===0){const S=u.indexOf(g);u[S]=u[u.length-1],u.pop(),g.destroy()}}function F(g){l.remove(g)}function tt(){l.dispose()}return{getParameters:h,getProgramCacheKey:T,getUniforms:O,acquireProgram:P,releaseProgram:b,releaseShaderCache:F,programs:u,dispose:tt}}function wf(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ja(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,f,m,v,M,d){let h=i[t];return h===void 0?(h={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:M,group:d},i[t]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=p.renderOrder,h.z=M,h.group=d),t++,h}function o(p,f,m,v,M,d){const h=a(p,f,m,v,M,d);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(p,f,m,v,M,d){const h=a(p,f,m,v,M,d);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(p,f){e.length>1&&e.sort(p||Rf),n.length>1&&n.sort(f||Ja),s.length>1&&s.sort(f||Ja)}function u(){for(let p=t,f=i.length;p<f;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Cf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qa,i.set(n,[a])):s>=r.length?(a=new Qa,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Lt};break;case"SpotLight":e={position:new U,direction:new U,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Lf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Df=0;function If(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Uf(i){const t=new Pf,e=Lf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new Kt,a=new Kt;function o(c){let u=0,p=0,f=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let m=0,v=0,M=0,d=0,h=0,T=0,E=0,A=0,O=0,P=0,b=0;c.sort(If);for(let tt=0,g=c.length;tt<g;tt++){const S=c[tt],V=S.color,z=S.intensity,q=S.distance,$=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=V.r*z,p+=V.g*z,f+=V.b*z;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],z);b++}else if(S.isDirectionalLight){const G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const K=S.shadow,H=e.get(S);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=S.shadow.matrix,T++}n.directional[m]=G,m++}else if(S.isSpotLight){const G=t.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(V).multiplyScalar(z),G.distance=q,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[M]=G;const K=S.shadow;if(S.map&&(n.spotLightMap[O]=S.map,O++,K.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[M]=K.matrix,S.castShadow){const H=e.get(S);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=$,A++}M++}else if(S.isRectAreaLight){const G=t.get(S);G.color.copy(V).multiplyScalar(z),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[d]=G,d++}else if(S.isPointLight){const G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){const K=S.shadow,H=e.get(S);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=S.shadow.matrix,E++}n.point[v]=G,v++}else if(S.isHemisphereLight){const G=t.get(S);G.skyColor.copy(S.color).multiplyScalar(z),G.groundColor.copy(S.groundColor).multiplyScalar(z),n.hemi[h]=G,h++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==M||F.rectAreaLength!==d||F.hemiLength!==h||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==A||F.numSpotMaps!==O||F.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=d,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=b,F.directionalLength=m,F.pointLength=v,F.spotLength=M,F.rectAreaLength=d,F.hemiLength=h,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=A,F.numSpotMaps=O,F.numLightProbes=b,n.version=Df++)}function l(c,u){let p=0,f=0,m=0,v=0,M=0;const d=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const E=c[h];if(E.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),p++}else if(E.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),m++}else if(E.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),a.identity(),r.copy(E.matrixWorld),r.premultiply(d),a.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),f++}else if(E.isHemisphereLight){const A=n.hemi[M];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(d),M++}}}return{setup:o,setupView:l,state:n}}function to(i){const t=new Uf(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nf(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new to(i),t.set(s,[o])):r>=a.length?(o=new to(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ff extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Of extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hf(i,t,e){let n=new Zr;const s=new Gt,r=new Gt,a=new te,o=new Ff({depthPacking:Ll}),l=new Of,c={},u=e.maxTextureSize,p={[hn]:Me,[Me]:hn,[He]:He},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Bf,fragmentShader:zf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Je;v.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xe(v,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let h=this.type;this.render=function(P,b,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const tt=i.getRenderTarget(),g=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ln),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=h!==$e&&this.type===$e,q=h===$e&&this.type!==$e;for(let $=0,G=P.length;$<G;$++){const K=P[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||z===!0||q===!0){const gt=this.type!==$e?{minFilter:ve,magFilter:ve}:{};H.map!==null&&H.map.dispose(),H.map=new Cn(s.x,s.y,gt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const lt=H.getViewportCount();for(let gt=0;gt<lt;gt++){const zt=H.getViewport(gt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),V.viewport(a),H.updateMatrices(K,gt),n=H.getFrustum(),A(b,F,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===$e&&T(H,F),H.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(tt,g,S)};function T(P,b){const F=t.update(M);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Cn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(b,null,F,f,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(b,null,F,m,M,null)}function E(P,b,F,tt){let g=null;const S=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)g=S;else if(g=F.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=g.uuid,z=b.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let $=q[z];$===void 0&&($=g.clone(),q[z]=$,b.addEventListener("dispose",O)),g=$}if(g.visible=b.visible,g.wireframe=b.wireframe,tt===$e?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:p[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,F.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const V=i.properties.get(g);V.light=F}return g}function A(P,b,F,tt,g){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&g===$e)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const z=t.update(P),q=P.material;if(Array.isArray(q)){const $=z.groups;for(let G=0,K=$.length;G<K;G++){const H=$[G],ot=q[H.materialIndex];if(ot&&ot.visible){const lt=E(P,ot,tt,g);P.onBeforeShadow(i,P,b,F,z,lt,H),i.renderBufferDirect(F,null,z,lt,P,H),P.onAfterShadow(i,P,b,F,z,lt,H)}}}else if(q.visible){const $=E(P,q,tt,g);P.onBeforeShadow(i,P,b,F,z,$,null),i.renderBufferDirect(F,null,z,$,P,null),P.onAfterShadow(i,P,b,F,z,$,null)}}const V=P.children;for(let z=0,q=V.length;z<q;z++)A(V[z],b,F,tt,g)}function O(P){P.target.removeEventListener("dispose",O);for(const F in c){const tt=c[F],g=P.target.uuid;g in tt&&(tt[g].dispose(),delete tt[g])}}}const Gf={[tr]:er,[nr]:rr,[ir]:ar,[jn]:sr,[er]:tr,[rr]:nr,[ar]:ir,[sr]:jn};function Vf(i){function t(){let R=!1;const rt=new te;let B=null;const Y=new te(0,0,0,0);return{setMask:function(it){B!==it&&!R&&(i.colorMask(it,it,it,it),B=it)},setLocked:function(it){R=it},setClear:function(it,at,Ft,ne,pe){pe===!0&&(it*=ne,at*=ne,Ft*=ne),rt.set(it,at,Ft,ne),Y.equals(rt)===!1&&(i.clearColor(it,at,Ft,ne),Y.copy(rt))},reset:function(){R=!1,B=null,Y.set(-1,0,0,0)}}}function e(){let R=!1,rt=!1,B=null,Y=null,it=null;return{setReversed:function(at){rt=at},setTest:function(at){at?pt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(at){B!==at&&!R&&(i.depthMask(at),B=at)},setFunc:function(at){if(rt&&(at=Gf[at]),Y!==at){switch(at){case tr:i.depthFunc(i.NEVER);break;case er:i.depthFunc(i.ALWAYS);break;case nr:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case ir:i.depthFunc(i.EQUAL);break;case sr:i.depthFunc(i.GEQUAL);break;case rr:i.depthFunc(i.GREATER);break;case ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=at}},setLocked:function(at){R=at},setClear:function(at){it!==at&&(i.clearDepth(at),it=at)},reset:function(){R=!1,B=null,Y=null,it=null}}}function n(){let R=!1,rt=null,B=null,Y=null,it=null,at=null,Ft=null,ne=null,pe=null;return{setTest:function(Ht){R||(Ht?pt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ht){rt!==Ht&&!R&&(i.stencilMask(Ht),rt=Ht)},setFunc:function(Ht,me,ke){(B!==Ht||Y!==me||it!==ke)&&(i.stencilFunc(Ht,me,ke),B=Ht,Y=me,it=ke)},setOp:function(Ht,me,ke){(at!==Ht||Ft!==me||ne!==ke)&&(i.stencilOp(Ht,me,ke),at=Ht,Ft=me,ne=ke)},setLocked:function(Ht){R=Ht},setClear:function(Ht){pe!==Ht&&(i.clearStencil(Ht),pe=Ht)},reset:function(){R=!1,rt=null,B=null,Y=null,it=null,at=null,Ft=null,ne=null,pe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,f=[],m=null,v=!1,M=null,d=null,h=null,T=null,E=null,A=null,O=null,P=new Lt(0,0,0),b=0,F=!1,tt=null,g=null,S=null,V=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=G>=2);let H=null,ot={};const lt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),zt=new te().fromArray(lt),Xt=new te().fromArray(gt);function k(R,rt,B,Y){const it=new Uint8Array(4),at=i.createTexture();i.bindTexture(R,at),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<B;Ft++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(rt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return at}const j={};j[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(jn),Dt(!1),Ot(la),pt(i.CULL_FACE),w(ln);function pt(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function ct(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function wt(R,rt){return u[R]!==rt?(i.bindFramebuffer(R,rt),u[R]=rt,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function St(R,rt){let B=f,Y=!1;if(R){B=p.get(rt),B===void 0&&(B=[],p.set(rt,B));const it=R.textures;if(B.length!==it.length||B[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ft=it.length;at<Ft;at++)B[at]=i.COLOR_ATTACHMENT0+at;B.length=it.length,Y=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,Y=!0);Y&&i.drawBuffers(B)}function Ut(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const Yt={[yn]:i.FUNC_ADD,[sl]:i.FUNC_SUBTRACT,[rl]:i.FUNC_REVERSE_SUBTRACT};Yt[al]=i.MIN,Yt[ol]=i.MAX;const Nt={[ll]:i.ZERO,[cl]:i.ONE,[hl]:i.SRC_COLOR,[Js]:i.SRC_ALPHA,[gl]:i.SRC_ALPHA_SATURATE,[pl]:i.DST_COLOR,[dl]:i.DST_ALPHA,[ul]:i.ONE_MINUS_SRC_COLOR,[Qs]:i.ONE_MINUS_SRC_ALPHA,[ml]:i.ONE_MINUS_DST_COLOR,[fl]:i.ONE_MINUS_DST_ALPHA,[_l]:i.CONSTANT_COLOR,[vl]:i.ONE_MINUS_CONSTANT_COLOR,[xl]:i.CONSTANT_ALPHA,[Ml]:i.ONE_MINUS_CONSTANT_ALPHA};function w(R,rt,B,Y,it,at,Ft,ne,pe,Ht){if(R===ln){v===!0&&(ct(i.BLEND),v=!1);return}if(v===!1&&(pt(i.BLEND),v=!0),R!==il){if(R!==M||Ht!==F){if((d!==yn||E!==yn)&&(i.blendEquation(i.FUNC_ADD),d=yn,E=yn),Ht)switch(R){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}h=null,T=null,A=null,O=null,P.set(0,0,0),b=0,M=R,F=Ht}return}it=it||rt,at=at||B,Ft=Ft||Y,(rt!==d||it!==E)&&(i.blendEquationSeparate(Yt[rt],Yt[it]),d=rt,E=it),(B!==h||Y!==T||at!==A||Ft!==O)&&(i.blendFuncSeparate(Nt[B],Nt[Y],Nt[at],Nt[Ft]),h=B,T=Y,A=at,O=Ft),(ne.equals(P)===!1||pe!==b)&&(i.blendColor(ne.r,ne.g,ne.b,pe),P.copy(ne),b=pe),M=R,F=!1}function Se(R,rt){R.side===He?ct(i.CULL_FACE):pt(i.CULL_FACE);let B=R.side===Me;rt&&(B=!B),Dt(B),R.blending===Kn&&R.transparent===!1?w(ln):w(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Zt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(R){tt!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),tt=R)}function Ot(R){R!==el?(pt(i.CULL_FACE),R!==g&&(R===la?i.cullFace(i.BACK):R===nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),g=R}function yt(R){R!==S&&($&&i.lineWidth(R),S=R)}function Zt(R,rt,B){R?(pt(i.POLYGON_OFFSET_FILL),(V!==rt||z!==B)&&(i.polygonOffset(rt,B),V=rt,z=B)):ct(i.POLYGON_OFFSET_FILL)}function bt(R){R?pt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function y(R){R===void 0&&(R=i.TEXTURE0+q-1),H!==R&&(i.activeTexture(R),H=R)}function _(R,rt,B){B===void 0&&(H===null?B=i.TEXTURE0+q-1:B=H);let Y=ot[B];Y===void 0&&(Y={type:void 0,texture:void 0},ot[B]=Y),(Y.type!==R||Y.texture!==rt)&&(H!==B&&(i.activeTexture(B),H=B),i.bindTexture(R,rt||j[R]),Y.type=R,Y.texture=rt)}function D(){const R=ot[H];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(R){zt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),zt.copy(R))}function dt(R){Xt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Xt.copy(R))}function It(R,rt){let B=l.get(rt);B===void 0&&(B=new WeakMap,l.set(rt,B));let Y=B.get(R);Y===void 0&&(Y=i.getUniformBlockIndex(rt,R.name),B.set(R,Y))}function Rt(R,rt){const Y=l.get(rt).get(R);o.get(rt)!==Y&&(i.uniformBlockBinding(rt,Y,R.__bindingPointIndex),o.set(rt,Y))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ot={},u={},p=new WeakMap,f=[],m=null,v=!1,M=null,d=null,h=null,T=null,E=null,A=null,O=null,P=new Lt(0,0,0),b=0,F=!1,tt=null,g=null,S=null,V=null,z=null,zt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pt,disable:ct,bindFramebuffer:wt,drawBuffers:St,useProgram:Ut,setBlending:w,setMaterial:Se,setFlipSided:Dt,setCullFace:Ot,setLineWidth:yt,setPolygonOffset:Zt,setScissorTest:bt,activeTexture:y,bindTexture:_,unbindTexture:D,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:ut,texImage3D:Tt,updateUBOMapping:It,uniformBlockBinding:Rt,texStorage2D:Bt,texStorage3D:J,texSubImage2D:W,texSubImage3D:_t,compressedTexSubImage2D:nt,compressedTexSubImage3D:ht,scissor:At,viewport:dt,reset:$t}}function eo(i,t,e,n){const s=kf(n);switch(e){case yo:return i*t;case Ao:return i*t;case bo:return i*t*2;case kr:return i*t/s.components*s.byteLength;case Wr:return i*t/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case Xr:return i*t*2/s.components*s.byteLength;case To:return i*t*3/s.components*s.byteLength;case Ne:return i*t*4/s.components*s.byteLength;case qr:return i*t*4/s.components*s.byteLength;case Ki:case $i:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zi:case ji:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dr:case pr:return Math.max(i,16)*Math.max(t,8)/4;case ur:case fr:return Math.max(i,8)*Math.max(t,8)/2;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Er:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ar:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case br:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ji:case Dr:case Ir:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ro:case Ur:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nr:case Fr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kf(i){switch(i){case je:case Mo:return{byteLength:1,components:1};case vi:case So:case xi:return{byteLength:2,components:1};case Gr:case Vr:return{byteLength:2,components:4};case Rn:case Hr:case Ge:return{byteLength:4,components:1};case Eo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wf(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return m?new OffscreenCanvas(y,_):as("canvas")}function M(y,_,D){let X=1;const Z=bt(y);if((Z.width>D||Z.height>D)&&(X=D/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const W=Math.floor(X*Z.width),_t=Math.floor(X*Z.height);p===void 0&&(p=v(W,_t));const nt=_?v(W,_t):p;return nt.width=W,nt.height=_t,nt.getContext("2d").drawImage(y,0,0,W,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+_t+")."),nt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function d(y){return y.generateMipmaps&&y.minFilter!==ve&&y.minFilter!==Ie}function h(y){i.generateMipmap(y)}function T(y,_,D,X,Z=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=_;if(_===i.RED&&(D===i.FLOAT&&(W=i.R32F),D===i.HALF_FLOAT&&(W=i.R16F),D===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.R8UI),D===i.UNSIGNED_SHORT&&(W=i.R16UI),D===i.UNSIGNED_INT&&(W=i.R32UI),D===i.BYTE&&(W=i.R8I),D===i.SHORT&&(W=i.R16I),D===i.INT&&(W=i.R32I)),_===i.RG&&(D===i.FLOAT&&(W=i.RG32F),D===i.HALF_FLOAT&&(W=i.RG16F),D===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RG8UI),D===i.UNSIGNED_SHORT&&(W=i.RG16UI),D===i.UNSIGNED_INT&&(W=i.RG32UI),D===i.BYTE&&(W=i.RG8I),D===i.SHORT&&(W=i.RG16I),D===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGB8UI),D===i.UNSIGNED_SHORT&&(W=i.RGB16UI),D===i.UNSIGNED_INT&&(W=i.RGB32UI),D===i.BYTE&&(W=i.RGB8I),D===i.SHORT&&(W=i.RGB16I),D===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),D===i.UNSIGNED_INT&&(W=i.RGBA32UI),D===i.BYTE&&(W=i.RGBA8I),D===i.SHORT&&(W=i.RGBA16I),D===i.INT&&(W=i.RGBA32I)),_===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){const _t=Z?es:Wt.getTransfer(X);D===i.FLOAT&&(W=i.RGBA32F),D===i.HALF_FLOAT&&(W=i.RGBA16F),D===i.UNSIGNED_BYTE&&(W=_t===Jt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(y,_){let D;return y?_===null||_===Rn||_===ti?D=i.DEPTH24_STENCIL8:_===Ge?D=i.DEPTH32F_STENCIL8:_===vi&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===ti?D=i.DEPTH_COMPONENT24:_===Ge?D=i.DEPTH_COMPONENT32F:_===vi&&(D=i.DEPTH_COMPONENT16),D}function A(y,_){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==ve&&y.minFilter!==Ie?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function O(y){const _=y.target;_.removeEventListener("dispose",O),b(_),_.isVideoTexture&&u.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),tt(_)}function b(y){const _=n.get(y);if(_.__webglInit===void 0)return;const D=y.source,X=f.get(D);if(X){const Z=X[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(y),Object.keys(X).length===0&&f.delete(D)}n.remove(y)}function F(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const D=y.source,X=f.get(D);delete X[_.__cacheKey],a.memory.textures--}function tt(y){const _=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Z=0;Z<_.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=y.textures;for(let X=0,Z=D.length;X<Z;X++){const W=n.get(D[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(y)}let g=0;function S(){g=0}function V(){const y=g;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),g+=1,y}function z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function q(y,_){const D=n.get(y);if(y.isVideoTexture&&yt(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(D,y,_);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function $(y,_){const D=n.get(y);if(y.version>0&&D.__version!==y.version){Xt(D,y,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function G(y,_){const D=n.get(y);if(y.version>0&&D.__version!==y.version){Xt(D,y,_);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function K(y,_){const D=n.get(y);if(y.version>0&&D.__version!==y.version){k(D,y,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}const H={[cr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[hr]:i.MIRRORED_REPEAT},ot={[ve]:i.NEAREST,[Cl]:i.NEAREST_MIPMAP_NEAREST,[Ti]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[vs]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},lt={[Il]:i.NEVER,[zl]:i.ALWAYS,[Ul]:i.LESS,[Po]:i.LEQUAL,[Nl]:i.EQUAL,[Bl]:i.GEQUAL,[Fl]:i.GREATER,[Ol]:i.NOTEQUAL};function gt(y,_){if(_.type===Ge&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ie||_.magFilter===vs||_.magFilter===Ti||_.magFilter===bn||_.minFilter===Ie||_.minFilter===vs||_.minFilter===Ti||_.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,H[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,H[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,H[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ot[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ve||_.minFilter!==Ti&&_.minFilter!==bn||_.type===Ge&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function zt(y,_){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",O));const X=_.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const W=z(_);if(W!==y.__cacheKey){Z[W]===void 0&&(Z[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Z[W].usedTimes++;const _t=Z[y.__cacheKey];_t!==void 0&&(Z[y.__cacheKey].usedTimes--,_t.usedTimes===0&&F(_)),y.__cacheKey=W,y.__webglTexture=Z[W].texture}return D}function Xt(y,_,D){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const Z=zt(y,_),W=_.source;e.bindTexture(X,y.__webglTexture,i.TEXTURE0+D);const _t=n.get(W);if(W.version!==_t.__version||Z===!0){e.activeTexture(i.TEXTURE0+D);const nt=Wt.getPrimaries(Wt.workingColorSpace),ht=_.colorSpace===on?null:Wt.getPrimaries(_.colorSpace),Bt=_.colorSpace===on||nt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let J=M(_.image,!1,s.maxTextureSize);J=Zt(_,J);const ut=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type);let At=T(_.internalFormat,ut,Tt,_.colorSpace,_.isVideoTexture);gt(X,_);let dt;const It=_.mipmaps,Rt=_.isVideoTexture!==!0,$t=_t.__version===void 0||Z===!0,R=W.dataReady,rt=A(_,J);if(_.isDepthTexture)At=E(_.format===ei,_.type),$t&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,At,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,At,J.width,J.height,0,ut,Tt,null));else if(_.isDataTexture)if(It.length>0){Rt&&$t&&e.texStorage2D(i.TEXTURE_2D,rt,At,It[0].width,It[0].height);for(let B=0,Y=It.length;B<Y;B++)dt=It[B],Rt?R&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,dt.width,dt.height,ut,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,B,At,dt.width,dt.height,0,ut,Tt,dt.data);_.generateMipmaps=!1}else Rt?($t&&e.texStorage2D(i.TEXTURE_2D,rt,At,J.width,J.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,Tt,J.data)):e.texImage2D(i.TEXTURE_2D,0,At,J.width,J.height,0,ut,Tt,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Rt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,At,It[0].width,It[0].height,J.depth);for(let B=0,Y=It.length;B<Y;B++)if(dt=It[B],_.format!==Ne)if(ut!==null)if(Rt){if(R)if(_.layerUpdates.size>0){const it=eo(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const Ft=dt.data.subarray(at*it/dt.data.BYTES_PER_ELEMENT,(at+1)*it/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,at,dt.width,dt.height,1,ut,Ft,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,J.depth,ut,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,At,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,J.depth,ut,Tt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,At,dt.width,dt.height,J.depth,0,ut,Tt,dt.data)}else{Rt&&$t&&e.texStorage2D(i.TEXTURE_2D,rt,At,It[0].width,It[0].height);for(let B=0,Y=It.length;B<Y;B++)dt=It[B],_.format!==Ne?ut!==null?Rt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,B,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?R&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,dt.width,dt.height,ut,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,B,At,dt.width,dt.height,0,ut,Tt,dt.data)}else if(_.isDataArrayTexture)if(Rt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,At,J.width,J.height,J.depth),R)if(_.layerUpdates.size>0){const B=eo(J.width,J.height,_.format,_.type);for(const Y of _.layerUpdates){const it=J.data.subarray(Y*B/J.data.BYTES_PER_ELEMENT,(Y+1)*B/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,ut,Tt,it)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Tt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,ut,Tt,J.data);else if(_.isData3DTexture)Rt?($t&&e.texStorage3D(i.TEXTURE_3D,rt,At,J.width,J.height,J.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Tt,J.data)):e.texImage3D(i.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,ut,Tt,J.data);else if(_.isFramebufferTexture){if($t)if(Rt)e.texStorage2D(i.TEXTURE_2D,rt,At,J.width,J.height);else{let B=J.width,Y=J.height;for(let it=0;it<rt;it++)e.texImage2D(i.TEXTURE_2D,it,At,B,Y,0,ut,Tt,null),B>>=1,Y>>=1}}else if(It.length>0){if(Rt&&$t){const B=bt(It[0]);e.texStorage2D(i.TEXTURE_2D,rt,At,B.width,B.height)}for(let B=0,Y=It.length;B<Y;B++)dt=It[B],Rt?R&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,ut,Tt,dt):e.texImage2D(i.TEXTURE_2D,B,At,ut,Tt,dt);_.generateMipmaps=!1}else if(Rt){if($t){const B=bt(J);e.texStorage2D(i.TEXTURE_2D,rt,At,B.width,B.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Tt,J)}else e.texImage2D(i.TEXTURE_2D,0,At,ut,Tt,J);d(_)&&h(X),_t.__version=W.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function k(y,_,D){if(_.image.length!==6)return;const X=zt(y,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+D);const W=n.get(Z);if(Z.version!==W.__version||X===!0){e.activeTexture(i.TEXTURE0+D);const _t=Wt.getPrimaries(Wt.workingColorSpace),nt=_.colorSpace===on?null:Wt.getPrimaries(_.colorSpace),ht=_.colorSpace===on||_t===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Bt=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let Y=0;Y<6;Y++)!Bt&&!J?ut[Y]=M(_.image[Y],!0,s.maxCubemapSize):ut[Y]=J?_.image[Y].image:_.image[Y],ut[Y]=Zt(_,ut[Y]);const Tt=ut[0],At=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),It=T(_.internalFormat,At,dt,_.colorSpace),Rt=_.isVideoTexture!==!0,$t=W.__version===void 0||X===!0,R=Z.dataReady;let rt=A(_,Tt);gt(i.TEXTURE_CUBE_MAP,_);let B;if(Bt){Rt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,It,Tt.width,Tt.height);for(let Y=0;Y<6;Y++){B=ut[Y].mipmaps;for(let it=0;it<B.length;it++){const at=B[it];_.format!==Ne?At!==null?Rt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,It,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,at.width,at.height,At,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,It,at.width,at.height,0,At,dt,at.data)}}}else{if(B=_.mipmaps,Rt&&$t){B.length>0&&rt++;const Y=bt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,It,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){Rt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ut[Y].width,ut[Y].height,At,dt,ut[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,ut[Y].width,ut[Y].height,0,At,dt,ut[Y].data);for(let it=0;it<B.length;it++){const Ft=B[it].image[Y].image;Rt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Ft.width,Ft.height,At,dt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,It,Ft.width,Ft.height,0,At,dt,Ft.data)}}else{Rt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,At,dt,ut[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,At,dt,ut[Y]);for(let it=0;it<B.length;it++){const at=B[it];Rt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,At,dt,at.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,It,At,dt,at.image[Y])}}}d(_)&&h(i.TEXTURE_CUBE_MAP),W.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function j(y,_,D,X,Z,W){const _t=r.convert(D.format,D.colorSpace),nt=r.convert(D.type),ht=T(D.internalFormat,_t,nt,D.colorSpace);if(!n.get(_).__hasExternalTextures){const J=Math.max(1,_.width>>W),ut=Math.max(1,_.height>>W);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,ht,J,ut,_.depth,0,_t,nt,null):e.texImage2D(Z,W,ht,J,ut,0,_t,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,n.get(D).__webglTexture,0,Dt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,n.get(D).__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(y,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const X=_.depthTexture,Z=X&&X.isDepthTexture?X.type:null,W=E(_.stencilBuffer,Z),_t=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Dt(_);Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,W,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,y)}else{const X=_.textures;for(let Z=0;Z<X.length;Z++){const W=X[Z],_t=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),ht=T(W.internalFormat,_t,nt,W.colorSpace),Bt=Dt(_);D&&Ot(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,ht,_.width,_.height):Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const X=n.get(_.depthTexture).__webglTexture,Z=Dt(_);if(_.depthTexture.format===$n)Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(_.depthTexture.format===ei)Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function wt(y){const _=n.get(y),D=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=X}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,y)}else if(D){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),pt(_.__webglDepthbuffer[X],y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),pt(_.__webglDepthbuffer,y,!1);else{const X=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(y,_,D){const X=n.get(y);_!==void 0&&j(X.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&wt(y)}function Ut(y){const _=y.texture,D=n.get(y),X=n.get(_);y.addEventListener("dispose",P);const Z=y.textures,W=y.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),W){D.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[nt]=[];for(let ht=0;ht<_.mipmaps.length;ht++)D.__webglFramebuffer[nt][ht]=i.createFramebuffer()}else D.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)D.__webglFramebuffer[nt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(_t)for(let nt=0,ht=Z.length;nt<ht;nt++){const Bt=n.get(Z[nt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Ot(y)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const ht=Z[nt];D.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[nt]);const Bt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),ut=T(ht.internalFormat,Bt,J,ht.colorSpace,y.isXRRenderTarget===!0),Tt=Dt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ut,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,D.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(D.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),gt(i.TEXTURE_CUBE_MAP,_);for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)j(D.__webglFramebuffer[nt][ht],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht);else j(D.__webglFramebuffer[nt],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);d(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let nt=0,ht=Z.length;nt<ht;nt++){const Bt=Z[nt],J=n.get(Bt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),gt(i.TEXTURE_2D,Bt),j(D.__webglFramebuffer,y,Bt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),d(Bt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(nt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,X.__webglTexture),gt(nt,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)j(D.__webglFramebuffer[ht],y,_,i.COLOR_ATTACHMENT0,nt,ht);else j(D.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,nt,0);d(_)&&h(nt),e.unbindTexture()}y.depthBuffer&&wt(y)}function Yt(y){const _=y.textures;for(let D=0,X=_.length;D<X;D++){const Z=_[D];if(d(Z)){const W=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(Z).__webglTexture;e.bindTexture(W,_t),h(W),e.unbindTexture()}}}const Nt=[],w=[];function Se(y){if(y.samples>0){if(Ot(y)===!1){const _=y.textures,D=y.width,X=y.height;let Z=i.COLOR_BUFFER_BIT;const W=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(y),nt=_.length>1;if(nt)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Bt=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,D,X,0,0,D,X,Z,i.NEAREST),l===!0&&(Nt.length=0,w.length=0,Nt.push(i.COLOR_ATTACHMENT0+ht),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Nt.push(W),w.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Bt=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Dt(y){return Math.min(s.maxSamples,y.samples)}function Ot(y){const _=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function Zt(y,_){const D=y.colorSpace,X=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==dn&&D!==on&&(Wt.getTransfer(D)===Jt?(X!==Ne||Z!==je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function bt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=St,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ot}function Xf(i,t){function e(n,s=on){let r;const a=Wt.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Gr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mo)return i.BYTE;if(n===So)return i.SHORT;if(n===vi)return i.UNSIGNED_SHORT;if(n===Hr)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Ge)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===yo)return i.ALPHA;if(n===To)return i.RGB;if(n===Ne)return i.RGBA;if(n===Ao)return i.LUMINANCE;if(n===bo)return i.LUMINANCE_ALPHA;if(n===$n)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===kr)return i.RED;if(n===Wr)return i.RED_INTEGER;if(n===wo)return i.RG;if(n===Xr)return i.RG_INTEGER;if(n===qr)return i.RGBA_INTEGER;if(n===Ki||n===$i||n===Zi||n===ji)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ki)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$i)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ji)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ki)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$i)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ji)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ur||n===dr||n===fr||n===pr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mr||n===gr||n===_r)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mr||n===gr)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_r)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vr||n===xr||n===Mr||n===Sr||n===Er||n===yr||n===Tr||n===Ar||n===br||n===wr||n===Rr||n===Cr||n===Pr||n===Lr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Er)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ar)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===br)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ji||n===Dr||n===Ir)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ji)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ir)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Ur||n===Nr||n===Fr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ji)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qf extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wn extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const d=e.getJointPose(M,n),h=this._getHandJoint(c,M);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=u.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$f=`
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

}`;class Zf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:Kf,fragmentShader:$f,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jf extends si{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,f=null,m=null,v=null;const M=new Zf,d=e.getContextAttributes();let h=null,T=null;const E=[],A=[],O=new Gt;let P=null;const b=new be;b.layers.enable(1),b.viewport=new te;const F=new be;F.layers.enable(2),F.viewport=new te;const tt=[b,F],g=new qf;g.layers.enable(1),g.layers.enable(2);let S=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=E[k];return j===void 0&&(j=new Ks,E[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=E[k];return j===void 0&&(j=new Ks,E[k]=j),j.getGripSpace()},this.getHand=function(k){let j=E[k];return j===void 0&&(j=new Ks,E[k]=j),j.getHandSpace()};function z(k){const j=A.indexOf(k.inputSource);if(j===-1)return;const pt=E[j];pt!==void 0&&(pt.update(k.inputSource,k.frame,c||a),pt.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let k=0;k<E.length;k++){const j=A[k];j!==null&&(A[k]=null,E[k].disconnect(j))}S=null,V=null,M.reset(),t.setRenderTarget(h),m=null,f=null,p=null,s=null,T=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const j={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Ne,type:je,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let j=null,pt=null,ct=null;d.depth&&(ct=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=d.stencil?ei:$n,pt=d.stencil?ti:Rn);const wt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Cn(f.textureWidth,f.textureHeight,{format:Ne,type:je,depthTexture:new Vo(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(k){for(let j=0;j<k.removed.length;j++){const pt=k.removed[j],ct=A.indexOf(pt);ct>=0&&(A[ct]=null,E[ct].disconnect(pt))}for(let j=0;j<k.added.length;j++){const pt=k.added[j];let ct=A.indexOf(pt);if(ct===-1){for(let St=0;St<E.length;St++)if(St>=A.length){A.push(pt),ct=St;break}else if(A[St]===null){A[St]=pt,ct=St;break}if(ct===-1)break}const wt=E[ct];wt&&wt.connect(pt)}}const G=new U,K=new U;function H(k,j,pt){G.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(pt.matrixWorld);const ct=G.distanceTo(K),wt=j.projectionMatrix.elements,St=pt.projectionMatrix.elements,Ut=wt[14]/(wt[10]-1),Yt=wt[14]/(wt[10]+1),Nt=(wt[9]+1)/wt[5],w=(wt[9]-1)/wt[5],Se=(wt[8]-1)/wt[0],Dt=(St[8]+1)/St[0],Ot=Ut*Se,yt=Ut*Dt,Zt=ct/(-Se+Dt),bt=Zt*-Se;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(bt),k.translateZ(Zt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),wt[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const y=Ut+Zt,_=Yt+Zt,D=Ot-bt,X=yt+(ct-bt),Z=Nt*Yt/_*y,W=w*Yt/_*y;k.projectionMatrix.makePerspective(D,X,Z,W,y,_),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ot(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let j=k.near,pt=k.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(pt=M.depthFar)),g.near=F.near=b.near=j,g.far=F.far=b.far=pt,(S!==g.near||V!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,V=g.far);const ct=k.parent,wt=g.cameras;ot(g,ct);for(let St=0;St<wt.length;St++)ot(wt[St],ct);wt.length===2?H(g,b,F):g.projectionMatrix.copy(b.projectionMatrix),lt(k,g,ct)};function lt(k,j,pt){pt===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(pt.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=rs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(g)};let gt=null;function zt(k,j){if(u=j.getViewerPose(c||a),v=j,u!==null){const pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let ct=!1;pt.length!==g.cameras.length&&(g.cameras.length=0,ct=!0);for(let St=0;St<pt.length;St++){const Ut=pt[St];let Yt=null;if(m!==null)Yt=m.getViewport(Ut);else{const w=p.getViewSubImage(f,Ut);Yt=w.viewport,St===0&&(t.setRenderTargetTextures(T,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(T))}let Nt=tt[St];Nt===void 0&&(Nt=new be,Nt.layers.enable(St),Nt.viewport=new te,tt[St]=Nt),Nt.matrix.fromArray(Ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),St===0&&(g.matrix.copy(Nt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ct===!0&&g.cameras.push(Nt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const St=p.getDepthInformation(pt[0]);St&&St.isValid&&St.texture&&M.init(t,St,s.renderState)}}for(let pt=0;pt<E.length;pt++){const ct=A[pt],wt=E[pt];ct!==null&&wt!==void 0&&wt.update(ct,j,c||a)}gt&&gt(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const Xt=new Ho;Xt.setAnimationLoop(zt),this.setAnimationLoop=function(k){gt=k},this.dispose=function(){}}}const Mn=new Ve,Jf=new Kt;function Qf(i,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,Oo(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,T,E,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(d,h):h.isMeshToonMaterial?(r(d,h),p(d,h)):h.isMeshPhongMaterial?(r(d,h),u(d,h)):h.isMeshStandardMaterial?(r(d,h),f(d,h),h.isMeshPhysicalMaterial&&m(d,h,A)):h.isMeshMatcapMaterial?(r(d,h),v(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),M(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?l(d,h,T,E):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Me&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Me&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const T=t.get(h),E=T.envMap,A=T.envMapRotation;E&&(d.envMap.value=E,Mn.copy(A),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),d.envMapRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Mn)),d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,T,E){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*T,d.scale.value=E*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function p(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,T){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Me&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,h){h.matcap&&(d.matcap.value=h.matcap)}function M(d,h){const T=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const A=E.program;n.uniformBlockBinding(T,A)}function c(T,E){let A=s[T.id];A===void 0&&(v(T),A=u(T),s[T.id]=A,T.addEventListener("dispose",d));const O=E.program;n.updateUBOMapping(T,O);const P=t.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function u(T){const E=p();T.__bindingPointIndex=E;const A=i.createBuffer(),O=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function p(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=s[T.id],A=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,b=A.length;P<b;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let tt=0,g=F.length;tt<g;tt++){const S=F[tt];if(m(S,P,tt,O)===!0){const V=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let q=0;for(let $=0;$<z.length;$++){const G=z[$],K=M(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+q,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,E,A,O){const P=T.value,b=E+"_"+A;if(O[b]===void 0)return typeof P=="number"||typeof P=="boolean"?O[b]=P:O[b]=P.clone(),!0;{const F=O[b];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[b]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function v(T){const E=T.uniforms;let A=0;const O=16;for(let b=0,F=E.length;b<F;b++){const tt=Array.isArray(E[b])?E[b]:[E[b]];for(let g=0,S=tt.length;g<S;g++){const V=tt[g],z=Array.isArray(V.value)?V.value:[V.value];for(let q=0,$=z.length;q<$;q++){const G=z[q],K=M(G),H=A%O,ot=H%K.boundary,lt=H+ot;A+=ot,lt!==0&&O-lt<K.storage&&(A+=O-lt),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=K.storage}}}const P=A%O;return P>0&&(A+=O-P),T.__size=A,T.__cache={},this}function M(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function d(T){const E=T.target;E.removeEventListener("dispose",d);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class ep{constructor(t={}){const{canvas:e=Gl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,d=null;const h=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=cn,this.toneMappingExposure=1;const E=this;let A=!1,O=0,P=0,b=null,F=-1,tt=null;const g=new te,S=new te;let V=null;const z=new Lt(0);let q=0,$=e.width,G=e.height,K=1,H=null,ot=null;const lt=new te(0,0,$,G),gt=new te(0,0,$,G);let zt=!1;const Xt=new Zr;let k=!1,j=!1;const pt=new Kt,ct=new Kt,wt=new U,St=new te,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Nt(){return b===null?K:1}let w=n;function Se(x,C){return e.getContext(x,C)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zr}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",at,!1),w===null){const C="webgl2";if(w=Se(C,x),w===null)throw Se(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Dt,Ot,yt,Zt,bt,y,_,D,X,Z,W,_t,nt,ht,Bt,J,ut,Tt,At,dt,It,Rt,$t,R;function rt(){Dt=new rd(w),Dt.init(),Rt=new Xf(w,Dt),Ot=new Qu(w,Dt,t,Rt),yt=new Vf(w),Ot.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),Zt=new ld(w),bt=new wf,y=new Wf(w,Dt,yt,bt,Ot,Rt,Zt),_=new ed(E),D=new sd(E),X=new mc(w),$t=new ju(w,X),Z=new ad(w,X,Zt,$t),W=new hd(w,Z,X,Zt),At=new cd(w,Ot,y),J=new td(bt),_t=new bf(E,_,D,Dt,Ot,$t,J),nt=new Qf(E,bt),ht=new Cf,Bt=new Nf(Dt),Tt=new Zu(E,_,D,yt,W,f,l),ut=new Hf(E,W,Ot),R=new tp(w,Zt,Ot,yt),dt=new Ju(w,Dt,Zt),It=new od(w,Dt,Zt),Zt.programs=_t.programs,E.capabilities=Ot,E.extensions=Dt,E.properties=bt,E.renderLists=ht,E.shadowMap=ut,E.state=yt,E.info=Zt}rt();const B=new jf(E,w);this.xr=B,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=Dt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Dt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(x){x!==void 0&&(K=x,this.setSize($,G,!1))},this.getSize=function(x){return x.set($,G)},this.setSize=function(x,C,I=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,G=C,e.width=Math.floor(x*K),e.height=Math.floor(C*K),I===!0&&(e.style.width=x+"px",e.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set($*K,G*K).floor()},this.setDrawingBufferSize=function(x,C,I){$=x,G=C,K=I,e.width=Math.floor(x*I),e.height=Math.floor(C*I),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(g)},this.getViewport=function(x){return x.copy(lt)},this.setViewport=function(x,C,I,N){x.isVector4?lt.set(x.x,x.y,x.z,x.w):lt.set(x,C,I,N),yt.viewport(g.copy(lt).multiplyScalar(K).round())},this.getScissor=function(x){return x.copy(gt)},this.setScissor=function(x,C,I,N){x.isVector4?gt.set(x.x,x.y,x.z,x.w):gt.set(x,C,I,N),yt.scissor(S.copy(gt).multiplyScalar(K).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(x){yt.setScissorTest(zt=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){ot=x},this.getClearColor=function(x){return x.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(x=!0,C=!0,I=!0){let N=0;if(x){let L=!1;if(b!==null){const Q=b.texture.format;L=Q===qr||Q===Xr||Q===Wr}if(L){const Q=b.texture.type,st=Q===je||Q===Rn||Q===vi||Q===ti||Q===Gr||Q===Vr,ft=Tt.getClearColor(),mt=Tt.getClearAlpha(),Mt=ft.r,Et=ft.g,vt=ft.b;st?(m[0]=Mt,m[1]=Et,m[2]=vt,m[3]=mt,w.clearBufferuiv(w.COLOR,0,m)):(v[0]=Mt,v[1]=Et,v[2]=vt,v[3]=mt,w.clearBufferiv(w.COLOR,0,v))}else N|=w.COLOR_BUFFER_BIT}C&&(N|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),I&&(N|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Bt.dispose(),bt.dispose(),_.dispose(),D.dispose(),W.dispose(),$t.dispose(),R.dispose(),_t.dispose(),B.dispose(),B.removeEventListener("sessionstart",ta),B.removeEventListener("sessionend",ea),pn.stop()};function Y(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=Zt.autoReset,C=ut.enabled,I=ut.autoUpdate,N=ut.needsUpdate,L=ut.type;rt(),Zt.autoReset=x,ut.enabled=C,ut.autoUpdate=I,ut.needsUpdate=N,ut.type=L}function at(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ft(x){const C=x.target;C.removeEventListener("dispose",Ft),ne(C)}function ne(x){pe(x),bt.remove(x)}function pe(x){const C=bt.get(x).programs;C!==void 0&&(C.forEach(function(I){_t.releaseProgram(I)}),x.isShaderMaterial&&_t.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,I,N,L,Q){C===null&&(C=Ut);const st=L.isMesh&&L.matrixWorld.determinant()<0,ft=Zo(x,C,I,N,L);yt.setMaterial(N,st);let mt=I.index,Mt=1;if(N.wireframe===!0){if(mt=Z.getWireframeAttribute(I),mt===void 0)return;Mt=2}const Et=I.drawRange,vt=I.attributes.position;let qt=Et.start*Mt,jt=(Et.start+Et.count)*Mt;Q!==null&&(qt=Math.max(qt,Q.start*Mt),jt=Math.min(jt,(Q.start+Q.count)*Mt)),mt!==null?(qt=Math.max(qt,0),jt=Math.min(jt,mt.count)):vt!=null&&(qt=Math.max(qt,0),jt=Math.min(jt,vt.count));const Qt=jt-qt;if(Qt<0||Qt===1/0)return;$t.setup(L,N,ft,I,mt);let Ee,Vt=dt;if(mt!==null&&(Ee=X.get(mt),Vt=It,Vt.setIndex(Ee)),L.isMesh)N.wireframe===!0?(yt.setLineWidth(N.wireframeLinewidth*Nt()),Vt.setMode(w.LINES)):Vt.setMode(w.TRIANGLES);else if(L.isLine){let xt=N.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*Nt()),L.isLineSegments?Vt.setMode(w.LINES):L.isLineLoop?Vt.setMode(w.LINE_LOOP):Vt.setMode(w.LINE_STRIP)}else L.isPoints?Vt.setMode(w.POINTS):L.isSprite&&Vt.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Vt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const xt=L._multiDrawStarts,le=L._multiDrawCounts,kt=L._multiDrawCount,Ce=mt?X.get(mt).bytesPerElement:1,Ln=bt.get(N).currentProgram.getUniforms();for(let ye=0;ye<kt;ye++)Ln.setValue(w,"_gl_DrawID",ye),Vt.render(xt[ye]/Ce,le[ye])}else if(L.isInstancedMesh)Vt.renderInstances(qt,Qt,L.count);else if(I.isInstancedBufferGeometry){const xt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,le=Math.min(I.instanceCount,xt);Vt.renderInstances(qt,Qt,le)}else Vt.render(qt,Qt)};function Ht(x,C,I){x.transparent===!0&&x.side===He&&x.forceSinglePass===!1?(x.side=Me,x.needsUpdate=!0,yi(x,C,I),x.side=hn,x.needsUpdate=!0,yi(x,C,I),x.side=He):yi(x,C,I)}this.compile=function(x,C,I=null){I===null&&(I=x),d=Bt.get(I),d.init(C),T.push(d),I.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),x!==I&&x.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const N=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){const ft=Q[st];Ht(ft,I,L),N.add(ft)}else Ht(Q,I,L),N.add(Q)}),T.pop(),d=null,N},this.compileAsync=function(x,C,I=null){const N=this.compile(x,C,I);return new Promise(L=>{function Q(){if(N.forEach(function(st){bt.get(st).currentProgram.isReady()&&N.delete(st)}),N.size===0){L(x);return}setTimeout(Q,10)}Dt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let me=null;function ke(x){me&&me(x)}function ta(){pn.stop()}function ea(){pn.start()}const pn=new Ho;pn.setAnimationLoop(ke),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(x){me=x,B.setAnimationLoop(x),x===null?pn.stop():pn.start()},B.addEventListener("sessionstart",ta),B.addEventListener("sessionend",ea),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(C),C=B.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,C,b),d=Bt.get(x,T.length),d.init(C),T.push(d),ct.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Xt.setFromProjectionMatrix(ct),j=this.localClippingEnabled,k=J.init(this.clippingPlanes,j),M=ht.get(x,h.length),M.init(),h.push(M),B.enabled===!0&&B.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&ps(Q,C,-1/0,E.sortObjects)}ps(x,C,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(H,ot),Yt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Yt&&Tt.addToRenderList(M,x),this.info.render.frame++,k===!0&&J.beginShadows();const I=d.state.shadowsArray;ut.render(I,x,C),k===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=M.opaque,L=M.transmissive;if(d.setupLights(),C.isArrayCamera){const Q=C.cameras;if(L.length>0)for(let st=0,ft=Q.length;st<ft;st++){const mt=Q[st];ia(N,L,x,mt)}Yt&&Tt.render(x);for(let st=0,ft=Q.length;st<ft;st++){const mt=Q[st];na(M,x,mt,mt.viewport)}}else L.length>0&&ia(N,L,x,C),Yt&&Tt.render(x),na(M,x,C);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),x.isScene===!0&&x.onAfterRender(E,x,C),$t.resetDefaultState(),F=-1,tt=null,T.pop(),T.length>0?(d=T[T.length-1],k===!0&&J.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function ps(x,C,I,N){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)I=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Xt.intersectsSprite(x)){N&&St.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ct);const st=W.update(x),ft=x.material;ft.visible&&M.push(x,st,ft,I,St.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Xt.intersectsObject(x))){const st=W.update(x),ft=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),St.copy(x.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),St.copy(st.boundingSphere.center)),St.applyMatrix4(x.matrixWorld).applyMatrix4(ct)),Array.isArray(ft)){const mt=st.groups;for(let Mt=0,Et=mt.length;Mt<Et;Mt++){const vt=mt[Mt],qt=ft[vt.materialIndex];qt&&qt.visible&&M.push(x,st,qt,I,St.z,vt)}}else ft.visible&&M.push(x,st,ft,I,St.z,null)}}const Q=x.children;for(let st=0,ft=Q.length;st<ft;st++)ps(Q[st],C,I,N)}function na(x,C,I,N){const L=x.opaque,Q=x.transmissive,st=x.transparent;d.setupLightsView(I),k===!0&&J.setGlobalState(E.clippingPlanes,I),N&&yt.viewport(g.copy(N)),L.length>0&&Ei(L,C,I),Q.length>0&&Ei(Q,C,I),st.length>0&&Ei(st,C,I),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ia(x,C,I,N){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new Cn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?xi:je,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[N.id],st=N.viewport||g;Q.setSize(st.z,st.w);const ft=E.getRenderTarget();E.setRenderTarget(Q),E.getClearColor(z),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),Yt&&Tt.render(I);const mt=E.toneMapping;E.toneMapping=cn;const Mt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),k===!0&&J.setGlobalState(E.clippingPlanes,N),Ei(x,I,N),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let vt=0,qt=C.length;vt<qt;vt++){const jt=C[vt],Qt=jt.object,Ee=jt.geometry,Vt=jt.material,xt=jt.group;if(Vt.side===He&&Qt.layers.test(N.layers)){const le=Vt.side;Vt.side=Me,Vt.needsUpdate=!0,sa(Qt,I,N,Ee,Vt,xt),Vt.side=le,Vt.needsUpdate=!0,Et=!0}}Et===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}E.setRenderTarget(ft),E.setClearColor(z,q),Mt!==void 0&&(N.viewport=Mt),E.toneMapping=mt}function Ei(x,C,I){const N=C.isScene===!0?C.overrideMaterial:null;for(let L=0,Q=x.length;L<Q;L++){const st=x[L],ft=st.object,mt=st.geometry,Mt=N===null?st.material:N,Et=st.group;ft.layers.test(I.layers)&&sa(ft,C,I,mt,Mt,Et)}}function sa(x,C,I,N,L,Q){x.onBeforeRender(E,C,I,N,L,Q),x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(E,C,I,N,x,Q),L.transparent===!0&&L.side===He&&L.forceSinglePass===!1?(L.side=Me,L.needsUpdate=!0,E.renderBufferDirect(I,C,N,L,x,Q),L.side=hn,L.needsUpdate=!0,E.renderBufferDirect(I,C,N,L,x,Q),L.side=He):E.renderBufferDirect(I,C,N,L,x,Q),x.onAfterRender(E,C,I,N,L,Q)}function yi(x,C,I){C.isScene!==!0&&(C=Ut);const N=bt.get(x),L=d.state.lights,Q=d.state.shadowsArray,st=L.state.version,ft=_t.getParameters(x,L.state,Q,C,I),mt=_t.getProgramCacheKey(ft);let Mt=N.programs;N.environment=x.isMeshStandardMaterial?C.environment:null,N.fog=C.fog,N.envMap=(x.isMeshStandardMaterial?D:_).get(x.envMap||N.environment),N.envMapRotation=N.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Mt===void 0&&(x.addEventListener("dispose",Ft),Mt=new Map,N.programs=Mt);let Et=Mt.get(mt);if(Et!==void 0){if(N.currentProgram===Et&&N.lightsStateVersion===st)return aa(x,ft),Et}else ft.uniforms=_t.getUniforms(x),x.onBeforeCompile(ft,E),Et=_t.acquireProgram(ft,mt),Mt.set(mt,Et),N.uniforms=ft.uniforms;const vt=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(vt.clippingPlanes=J.uniform),aa(x,ft),N.needsLights=Jo(x),N.lightsStateVersion=st,N.needsLights&&(vt.ambientLightColor.value=L.state.ambient,vt.lightProbe.value=L.state.probe,vt.directionalLights.value=L.state.directional,vt.directionalLightShadows.value=L.state.directionalShadow,vt.spotLights.value=L.state.spot,vt.spotLightShadows.value=L.state.spotShadow,vt.rectAreaLights.value=L.state.rectArea,vt.ltc_1.value=L.state.rectAreaLTC1,vt.ltc_2.value=L.state.rectAreaLTC2,vt.pointLights.value=L.state.point,vt.pointLightShadows.value=L.state.pointShadow,vt.hemisphereLights.value=L.state.hemi,vt.directionalShadowMap.value=L.state.directionalShadowMap,vt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,vt.spotShadowMap.value=L.state.spotShadowMap,vt.spotLightMatrix.value=L.state.spotLightMatrix,vt.spotLightMap.value=L.state.spotLightMap,vt.pointShadowMap.value=L.state.pointShadowMap,vt.pointShadowMatrix.value=L.state.pointShadowMatrix),N.currentProgram=Et,N.uniformsList=null,Et}function ra(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=ts.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function aa(x,C){const I=bt.get(x);I.outputColorSpace=C.outputColorSpace,I.batching=C.batching,I.batchingColor=C.batchingColor,I.instancing=C.instancing,I.instancingColor=C.instancingColor,I.instancingMorph=C.instancingMorph,I.skinning=C.skinning,I.morphTargets=C.morphTargets,I.morphNormals=C.morphNormals,I.morphColors=C.morphColors,I.morphTargetsCount=C.morphTargetsCount,I.numClippingPlanes=C.numClippingPlanes,I.numIntersection=C.numClipIntersection,I.vertexAlphas=C.vertexAlphas,I.vertexTangents=C.vertexTangents,I.toneMapping=C.toneMapping}function Zo(x,C,I,N,L){C.isScene!==!0&&(C=Ut),y.resetTextureUnits();const Q=C.fog,st=N.isMeshStandardMaterial?C.environment:null,ft=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:dn,mt=(N.isMeshStandardMaterial?D:_).get(N.envMap||st),Mt=N.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Et=!!I.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),vt=!!I.morphAttributes.position,qt=!!I.morphAttributes.normal,jt=!!I.morphAttributes.color;let Qt=cn;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Qt=E.toneMapping);const Ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Vt=Ee!==void 0?Ee.length:0,xt=bt.get(N),le=d.state.lights;if(k===!0&&(j===!0||x!==tt)){const we=x===tt&&N.id===F;J.setState(N,x,we)}let kt=!1;N.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==le.state.version||xt.outputColorSpace!==ft||L.isBatchedMesh&&xt.batching===!1||!L.isBatchedMesh&&xt.batching===!0||L.isBatchedMesh&&xt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xt.instancing===!1||!L.isInstancedMesh&&xt.instancing===!0||L.isSkinnedMesh&&xt.skinning===!1||!L.isSkinnedMesh&&xt.skinning===!0||L.isInstancedMesh&&xt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xt.instancingMorph===!1&&L.morphTexture!==null||xt.envMap!==mt||N.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Mt||xt.vertexTangents!==Et||xt.morphTargets!==vt||xt.morphNormals!==qt||xt.morphColors!==jt||xt.toneMapping!==Qt||xt.morphTargetsCount!==Vt)&&(kt=!0):(kt=!0,xt.__version=N.version);let Ce=xt.currentProgram;kt===!0&&(Ce=yi(N,C,L));let Ln=!1,ye=!1,ms=!1;const ee=Ce.getUniforms(),Qe=xt.uniforms;if(yt.useProgram(Ce.program)&&(Ln=!0,ye=!0,ms=!0),N.id!==F&&(F=N.id,ye=!0),Ln||tt!==x){Ot.reverseDepthBuffer?(pt.copy(x.projectionMatrix),kl(pt),Wl(pt),ee.setValue(w,"projectionMatrix",pt)):ee.setValue(w,"projectionMatrix",x.projectionMatrix),ee.setValue(w,"viewMatrix",x.matrixWorldInverse);const we=ee.map.cameraPosition;we!==void 0&&we.setValue(w,wt.setFromMatrixPosition(x.matrixWorld)),Ot.logarithmicDepthBuffer&&ee.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ee.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),tt!==x&&(tt=x,ye=!0,ms=!0)}if(L.isSkinnedMesh){ee.setOptional(w,L,"bindMatrix"),ee.setOptional(w,L,"bindMatrixInverse");const we=L.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ee.setValue(w,"boneTexture",we.boneTexture,y))}L.isBatchedMesh&&(ee.setOptional(w,L,"batchingTexture"),ee.setValue(w,"batchingTexture",L._matricesTexture,y),ee.setOptional(w,L,"batchingIdTexture"),ee.setValue(w,"batchingIdTexture",L._indirectTexture,y),ee.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&ee.setValue(w,"batchingColorTexture",L._colorsTexture,y));const gs=I.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&At.update(L,I,Ce),(ye||xt.receiveShadow!==L.receiveShadow)&&(xt.receiveShadow=L.receiveShadow,ee.setValue(w,"receiveShadow",L.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Qe.envMap.value=mt,Qe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&C.environment!==null&&(Qe.envMapIntensity.value=C.environmentIntensity),ye&&(ee.setValue(w,"toneMappingExposure",E.toneMappingExposure),xt.needsLights&&jo(Qe,ms),Q&&N.fog===!0&&nt.refreshFogUniforms(Qe,Q),nt.refreshMaterialUniforms(Qe,N,K,G,d.state.transmissionRenderTarget[x.id]),ts.upload(w,ra(xt),Qe,y)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ts.upload(w,ra(xt),Qe,y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ee.setValue(w,"center",L.center),ee.setValue(w,"modelViewMatrix",L.modelViewMatrix),ee.setValue(w,"normalMatrix",L.normalMatrix),ee.setValue(w,"modelMatrix",L.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const we=N.uniformsGroups;for(let _s=0,Qo=we.length;_s<Qo;_s++){const oa=we[_s];R.update(oa,Ce),R.bind(oa,Ce)}}return Ce}function jo(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Jo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(x,C,I){bt.get(x.texture).__webglTexture=C,bt.get(x.depthTexture).__webglTexture=I;const N=bt.get(x);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=I===void 0,N.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const I=bt.get(x);I.__webglFramebuffer=C,I.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,I=0){b=x,O=C,P=I;let N=!0,L=null,Q=!1,st=!1;if(x){const mt=bt.get(x);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(w.FRAMEBUFFER,null),N=!1;else if(mt.__webglFramebuffer===void 0)y.setupRenderTarget(x);else if(mt.__hasExternalTextures)y.rebindTextures(x,bt.get(x.texture).__webglTexture,bt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const vt=x.depthTexture;if(mt.__boundDepthTexture!==vt){if(vt!==null&&bt.has(vt)&&(x.width!==vt.image.width||x.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(x)}}const Mt=x.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(st=!0);const Et=bt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Et[C])?L=Et[C][I]:L=Et[C],Q=!0):x.samples>0&&y.useMultisampledRTT(x)===!1?L=bt.get(x).__webglMultisampledFramebuffer:Array.isArray(Et)?L=Et[I]:L=Et,g.copy(x.viewport),S.copy(x.scissor),V=x.scissorTest}else g.copy(lt).multiplyScalar(K).floor(),S.copy(gt).multiplyScalar(K).floor(),V=zt;if(yt.bindFramebuffer(w.FRAMEBUFFER,L)&&N&&yt.drawBuffers(x,L),yt.viewport(g),yt.scissor(S),yt.setScissorTest(V),Q){const mt=bt.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+C,mt.__webglTexture,I)}else if(st){const mt=bt.get(x.texture),Mt=C||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,mt.__webglTexture,I||0,Mt)}F=-1},this.readRenderTargetPixels=function(x,C,I,N,L,Q,st){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&st!==void 0&&(ft=ft[st]),ft){yt.bindFramebuffer(w.FRAMEBUFFER,ft);try{const mt=x.texture,Mt=mt.format,Et=mt.type;if(!Ot.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-N&&I>=0&&I<=x.height-L&&w.readPixels(C,I,N,L,Rt.convert(Mt),Rt.convert(Et),Q)}finally{const mt=b!==null?bt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(w.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(x,C,I,N,L,Q,st){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&st!==void 0&&(ft=ft[st]),ft){const mt=x.texture,Mt=mt.format,Et=mt.type;if(!Ot.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=x.width-N&&I>=0&&I<=x.height-L){yt.bindFramebuffer(w.FRAMEBUFFER,ft);const vt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,vt),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),w.readPixels(C,I,N,L,Rt.convert(Mt),Rt.convert(Et),0);const qt=b!==null?bt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(w.FRAMEBUFFER,qt);const jt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Vl(w,jt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,vt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(vt),w.deleteSync(jt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,C=null,I=0){x.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,x=arguments[1]);const N=Math.pow(2,-I),L=Math.floor(x.image.width*N),Q=Math.floor(x.image.height*N),st=C!==null?C.x:0,ft=C!==null?C.y:0;y.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,I,0,0,st,ft,L,Q),yt.unbindTexture()},this.copyTextureToTexture=function(x,C,I=null,N=null,L=0){x.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1],C=arguments[2],L=arguments[3]||0,I=null);let Q,st,ft,mt,Mt,Et;I!==null?(Q=I.max.x-I.min.x,st=I.max.y-I.min.y,ft=I.min.x,mt=I.min.y):(Q=x.image.width,st=x.image.height,ft=0,mt=0),N!==null?(Mt=N.x,Et=N.y):(Mt=0,Et=0);const vt=Rt.convert(C.format),qt=Rt.convert(C.type);y.setTexture2D(C,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const jt=w.getParameter(w.UNPACK_ROW_LENGTH),Qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ee=w.getParameter(w.UNPACK_SKIP_PIXELS),Vt=w.getParameter(w.UNPACK_SKIP_ROWS),xt=w.getParameter(w.UNPACK_SKIP_IMAGES),le=x.isCompressedTexture?x.mipmaps[L]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,le.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ft),w.pixelStorei(w.UNPACK_SKIP_ROWS,mt),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,L,Mt,Et,Q,st,vt,qt,le.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,L,Mt,Et,le.width,le.height,vt,le.data):w.texSubImage2D(w.TEXTURE_2D,L,Mt,Et,Q,st,vt,qt,le),w.pixelStorei(w.UNPACK_ROW_LENGTH,jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ee),w.pixelStorei(w.UNPACK_SKIP_ROWS,Vt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,xt),L===0&&C.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(x,C,I=null,N=null,L=0){x.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,N=arguments[1]||null,x=arguments[2],C=arguments[3],L=arguments[4]||0);let Q,st,ft,mt,Mt,Et,vt,qt,jt;const Qt=x.isCompressedTexture?x.mipmaps[L]:x.image;I!==null?(Q=I.max.x-I.min.x,st=I.max.y-I.min.y,ft=I.max.z-I.min.z,mt=I.min.x,Mt=I.min.y,Et=I.min.z):(Q=Qt.width,st=Qt.height,ft=Qt.depth,mt=0,Mt=0,Et=0),N!==null?(vt=N.x,qt=N.y,jt=N.z):(vt=0,qt=0,jt=0);const Ee=Rt.convert(C.format),Vt=Rt.convert(C.type);let xt;if(C.isData3DTexture)y.setTexture3D(C,0),xt=w.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)y.setTexture2DArray(C,0),xt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const le=w.getParameter(w.UNPACK_ROW_LENGTH),kt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ce=w.getParameter(w.UNPACK_SKIP_PIXELS),Ln=w.getParameter(w.UNPACK_SKIP_ROWS),ye=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,mt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Mt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Et),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(xt,L,vt,qt,jt,Q,st,ft,Ee,Vt,Qt.data):C.isCompressedArrayTexture?w.compressedTexSubImage3D(xt,L,vt,qt,jt,Q,st,ft,Ee,Qt.data):w.texSubImage3D(xt,L,vt,qt,jt,Q,st,ft,Ee,Vt,Qt),w.pixelStorei(w.UNPACK_ROW_LENGTH,le),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ln),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ye),L===0&&C.generateMipmaps&&w.generateMipmap(xt),yt.unbindTexture()},this.initRenderTarget=function(x){bt.get(x).__webglFramebuffer===void 0&&y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),yt.unbindTexture()},this.resetState=function(){O=0,P=0,b=null,yt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Yr?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===us?"display-p3":"srgb"}}class Jr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new Jr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class np extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ip extends fe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ve,u=ve,p,f){super(null,a,o,l,c,u,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qn=new Kt,io=new Kt,Xi=[],so=new fn,sp=new Kt,pi=new xe,mi=new ri;class rp extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qn),so.copy(t.boundingBox).applyMatrix4(qn),this.boundingBox.union(so)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qn),mi.copy(t.boundingSphere).applyMatrix4(qn),this.boundingSphere.union(mi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(pi.geometry=this.geometry,pi.material=this.material,pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mi.copy(this.boundingSphere),mi.applyMatrix4(n),t.ray.intersectsSphere(mi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qn),io.multiplyMatrices(n,qn),pi.matrixWorld=io,pi.raycast(t,Xi);for(let a=0,o=Xi.length;a<o;a++){const l=Xi[a];l.instanceId=r,l.object=this,e.push(l)}Xi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ip(new Float32Array(s*this.count),s,this.count,kr,Ge));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yo extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const os=new U,ls=new U,ro=new Kt,gi=new Kr,qi=new ri,$s=new U,ao=new U;class ap extends se{constructor(t=new Je,e=new Yo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)os.fromBufferAttribute(e,s-1),ls.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=os.distanceTo(ls);t.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),qi.radius+=r,t.ray.intersectsSphere(qi)===!1)return;ro.copy(s).invert(),gi.copy(t.ray).applyMatrix4(ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let M=m,d=v-1;M<d;M+=c){const h=u.getX(M),T=u.getX(M+1),E=Yi(this,t,gi,l,h,T);E&&e.push(E)}if(this.isLineLoop){const M=u.getX(v-1),d=u.getX(m),h=Yi(this,t,gi,l,M,d);h&&e.push(h)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=m,d=v-1;M<d;M+=c){const h=Yi(this,t,gi,l,M,M+1);h&&e.push(h)}if(this.isLineLoop){const M=Yi(this,t,gi,l,v-1,m);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yi(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(os.fromBufferAttribute(a,s),ls.fromBufferAttribute(a,r),e.distanceSqToSegment(os,ls,$s,ao)>n)return;$s.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($s);if(!(l<t.near||l>t.far))return{distance:l,point:ao.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const oo=new U,lo=new U;class op extends ap{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)oo.fromBufferAttribute(e,s),lo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oo.distanceTo(lo);t.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ko extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qr extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Zs=new Kt,co=new U,ho=new U;class $o{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;co.setFromMatrixPosition(t.matrixWorld),e.position.copy(co),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),Zs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lp extends $o{constructor(){super(new be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=rs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class cp extends Qr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new lp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hp extends $o{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class js extends Qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new hp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class up extends Qr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uo(){return performance.now()}const fo=new Kt;class fp{constructor(t,e,n=0,s=1/0){this.ray=new Kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fo),this}intersectObject(t,e=!0,n=[]){return Br(t,this,n,e),n.sort(po),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Br(t[s],this,n,e);return n.sort(po),n}}function po(i,t){return i.distance-t.distance}function Br(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Br(r[a],t,e,!0)}}class pp extends op{constructor(t=10,e=10,n=4473924,s=8947848){n=new Lt(n),s=new Lt(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,m=0,v=-o;f<=e;f++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const M=f===r?n:s;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const u=new Je;u.setAttribute("position",new Oe(l,3)),u.setAttribute("color",new Oe(c,3));const p=new Yo({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zr);class mp{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.gunContainer=null,this.clock=new dp,this._initScene(),this._initLighting(),this._initGround()}_initScene(){this.scene=new np,this.scene.background=new Lt(657935),this.scene.fog=new Jr(657935,.008),this.camera=new be(45,1,.1,1e3),this.camera.position.set(14,10,18),this.camera.lookAt(0,2,0),this.renderer=new ep({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=go,this.renderer.toneMapping=vo,this.renderer.toneMappingExposure=1.2;const t=document.getElementById("viewport-container");t.insertBefore(this.renderer.domElement,t.firstChild),this.gunContainer=new wn,this.scene.add(this.gunContainer)}_initLighting(){const t=new up(4210784,1.2);this.scene.add(t);const e=new js(15659263,2.5);e.position.set(10,15,8),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.left=-15,e.shadow.camera.right=15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,this.scene.add(e);const n=new js(4482815,.6);n.position.set(-8,5,-10),this.scene.add(n);const s=new js(52445,.5);s.position.set(0,2,-12),this.scene.add(s);const r=new cp(4482815,.5,30,Math.PI/6,.5);r.position.set(0,12,0),r.target.position.set(3,2,0),this.scene.add(r),this.scene.add(r.target)}_initGround(){const e=new pp(40,40,1710660,1118504);e.position.y=-5.99,e.material.opacity=.35,e.material.transparent=!0,this.scene.add(e);const n=new ii(40,40),s=new Ko({color:855320,roughness:.95,metalness:.05}),r=new xe(n,s);r.rotation.x=-Math.PI/2,r.position.y=-6,r.receiveShadow=!0,this.scene.add(r);const a=new ii(14,14),o=new ds({color:52445,transparent:!0,opacity:.025,side:He}),l=new xe(a,o);l.rotation.x=-Math.PI/2,l.position.y=-5.98,this.scene.add(l)}render(){this.renderer.render(this.scene,this.camera)}onResize(){const t=document.getElementById("viewport-container");if(!t)return;const e=t.clientWidth,n=t.clientHeight;e===0||n===0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n))}getCanvas(){return this.renderer.domElement}}class gp{constructor(t){this.scene=t,this.partGroups={},this.voxelSize=ue.voxelSize,this.explodeScale=ue.explodeScale}buildAll(){for(const[t,e]of Object.entries(ue.parts)){const n=this._buildPart(t,e);this.partGroups[t]=n,this.scene.gunContainer.add(n)}this._centerGun()}_buildPart(t,e){const n=new wn;n.userData.partId=t;const s={};for(const l of e.voxels)s[l.color]||(s[l.color]=[]),s[l.color].push(l);const r=this.voxelSize,a=new Pn(r*.94,r*.94,r*.94);for(const[l,c]of Object.entries(s)){const u=new Lt(l),f=(u.r+u.g+u.b)/3>.5,m=f?.25:.65,v=f?.7:.35,M=new Ko({color:u,roughness:m,metalness:v,flatShading:!0}),d=new rp(a,M,c.length);d.castShadow=!0,d.receiveShadow=!0,d.userData.partId=t;const h=new se;c.forEach((T,E)=>{h.position.set(T.x*r,T.y*r,T.z*r),h.updateMatrix(),d.setMatrixAt(E,h.matrix)}),d.instanceMatrix.needsUpdate=!0,n.add(d)}const o=this._buildHighlight(e.voxels,r);return n.add(o),n.userData.highlightGroup=o,n}_buildHighlight(t,e){const n=new Pn(e*.98,e*.98,e*.98),s=new wn;s.visible=!1,s.userData.isHighlight=!0;const r=new ds({color:52445,transparent:!0,opacity:.15,depthWrite:!1});for(const a of t){const o=new xe(n,r.clone());o.position.set(a.x*e,a.y*e,a.z*e),s.add(o)}return s}_centerGun(){const t=new fn;for(const e of Object.values(this.partGroups))e.traverse(n=>{n.isInstancedMesh&&(n.computeBoundingBox(),t.union(n.boundingBox))});if(!t.isEmpty()){const e=new U;t.getCenter(e),this.scene.gunContainer.position.sub(e),this.scene.gunContainer.position.y+=2}}getGroup(t){return this.partGroups[t]}getAllGroups(){return this.partGroups}getAllMeshesWithPartIds(){const t=[];for(const[e,n]of Object.entries(this.partGroups))n.traverse(s=>{s.isInstancedMesh&&t.push({mesh:s,partId:e})});return t}}class _p{constructor(t){this.builder=t}setHighlight(t,e,n=!1){const s=this.builder.getGroup(t);if(!s)return;const r=s.userData.highlightGroup;r&&(r.visible=e||n,r.children.forEach(a=>{a.material&&(a.material.color.setHex(n?52445:4482815),a.material.opacity=n?.2:.15)}))}setSelected(t,e){const n=this.builder.getGroup(t);n&&(e?n.traverse(s=>{s.isInstancedMesh&&s.material&&(s.material.emissive=s.material.emissive||new Lt(0),s.material.emissiveIntensity=.15,s.material.emissive.set(2245802))}):n.traverse(s=>{s.isInstancedMesh&&s.material&&(s.material.emissiveIntensity=0,s.material.emissive=new Lt(0))}),this.setHighlight(t,e,e))}pulseSelected(t,e){const n=this.builder.getGroup(t);if(!n||!n.userData.highlightGroup)return;const s=Math.sin(e*3)*.08+.18;n.userData.highlightGroup.children.forEach(r=>{r.material&&(r.material.opacity=s)})}animatePulse(t,e){const n=this.builder.getGroup(t);if(!n)return;if(n.userData._animPulse){const r=Math.sin(e*8)*.015+1;n.scale.set(r,r,r)}else{const r=1+Math.sin(e*1.2+n.position.x*.3)*.003;n.scale.set(r,r,r)}}}const cs={easeOutBack(i){return 1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)},easeOutElastic(i){const t=2*Math.PI/3;return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i*10-.75)*t)+1}};class vp{constructor(){this.active=new Map,this.speedMultiplier=1}animate(t,e,n,s,r,a){this.cancel(t);const o={partId:t,from:{...e},to:{...n},startTime:performance.now(),duration:s/this.speedMultiplier,easing:r,onComplete:a,cancelled:!1};return this.active.set(t,o),o}cancel(t){const e=this.active.get(t);e&&(e.cancelled=!0,this.active.delete(t))}cancelAll(){for(const t of this.active.values())t.cancelled=!0;this.active.clear()}tick(t,e){const n=[];for(const[s,r]of this.active){if(r.cancelled){this.active.delete(s);continue}const a=t-r.startTime,o=Math.min(a/r.duration,1),l=r.easing(o);e(s,r.from,r.to,l),o>=1&&n.push(r)}for(const s of n)this.active.delete(s.partId),s.onComplete&&s.onComplete();return n.length>0}setSpeed(t){this.speedMultiplier=t}isActive(t){return this.active.has(t)}}class xp{constructor(t,e,n,s){this.engine=t,this.state=e,this.builder=n,this.gunModel=s,this.running=!1,this.onCompleteCallback=null}explodeAll(t=120){if(this.running)return;this.running=!0;const n=this.gunModel.disassemblyOrder.filter(s=>this.state.isAssembled(s)).map((s,r)=>({partId:s,explode:!0,delay:r*t,targetOffset:this.gunModel.parts[s].explodeOffset,finalStatus:"exploded"}));this._executeSequence(n)}assembleAll(t=120){if(this.running)return;this.running=!0;const n=this.gunModel.assemblyOrder.filter(s=>this.state.isExploded(s)).map((s,r)=>({partId:s,explode:!1,delay:r*t,targetOffset:{x:0,y:0,z:0},finalStatus:"assembled"}));this._executeSequence(n)}goToStep(t){if(this.running)return;this.running=!0;const e=this.gunModel.disassemblyOrder,n=[];for(let s=0;s<=t;s++){const r=e[s];this.state.isAssembled(r)&&n.push({partId:r,explode:!0,delay:n.length*120,targetOffset:this.gunModel.parts[r].explodeOffset,finalStatus:"exploded"})}for(let s=e.length-1;s>t;s--){const r=e[s];this.state.isExploded(r)&&n.push({partId:r,explode:!1,delay:n.length*120,targetOffset:{x:0,y:0,z:0},finalStatus:"assembled"})}this._executeSequence(n)}_executeSequence(t){if(t.length===0){this.running=!1,this.onCompleteCallback&&this.onCompleteCallback();return}const e=650,n=this.gunModel.voxelSize,s=this.gunModel.explodeScale;let r=0;const a=t.length;for(const o of t)setTimeout(()=>{this.state.markAnimating(o.partId,o.finalStatus);const l=this.builder.getGroup(o.partId),c={x:l.position.x,y:l.position.y,z:l.position.z},u=o.explode?{x:o.targetOffset.x*n*s,y:o.targetOffset.y*n*s,z:o.targetOffset.z*n*s}:{x:0,y:0,z:0},p=this.gunModel.parts[o.partId].voxels.length,f=e*(1+p/200),m=o.explode?cs.easeOutBack:cs.easeOutElastic;this.engine.animate(o.partId,c,u,f,m,()=>{o.finalStatus==="exploded"?this.state.markExploded(o.partId):this.state.markAssembled(o.partId),this.state.updateMode(),r++,r>=a&&(this.running=!1,this.onCompleteCallback&&this.onCompleteCallback())})},o.delay)}cancel(){this.running=!1,this.engine.cancelAll()}onComplete(t){return this.onCompleteCallback=t,this}}class Mp{constructor(t,e){this.scene=t,this.builder=e,this.raycaster=new fp,this.mouse=new Gt,this.selectedPart=null,this.hoveredPart=null,this.onSelect=null,this.onDeselect=null,this.onHoverStart=null,this.onHoverEnd=null,this.onDoubleClick=null,this._lastClickTime=0,this._lastClickPart=null}getPartAtCoords(t,e){const n=this.scene.getCanvas().getBoundingClientRect();return this.mouse.x=(t-n.left)/n.width*2-1,this.mouse.y=-((e-n.top)/n.height)*2+1,this._castRay()}_castRay(){this.raycaster.setFromCamera(this.mouse,this.scene.camera);const t=this.builder.getAllMeshesWithPartIds(),e=t.map(s=>s.mesh),n=this.raycaster.intersectObjects(e,!1);if(n.length>0){const s=n[0].object,r=t.find(a=>a.mesh===s);return r?r.partId:null}return null}handleClick(t,e){const n=this.getPartAtCoords(t,e),s=performance.now();if(n&&n===this._lastClickPart&&s-this._lastClickTime<400){this._lastClickTime=0,this._lastClickPart=null,this.onDoubleClick&&this.onDoubleClick(n);return}this._lastClickTime=s,this._lastClickPart=n,n?this.selectedPart===n?this.deselect():this.select(n):this.deselect()}select(t){this.selectedPart&&this.selectedPart!==t&&this.onDeselect&&this.onDeselect(this.selectedPart),this.selectedPart=t,this.onSelect&&this.onSelect(t)}deselect(){if(this.selectedPart){const t=this.selectedPart;this.selectedPart=null,this.onDeselect&&this.onDeselect(t)}}updateHover(t,e){const n=this.getPartAtCoords(t,e);this.hoveredPart&&this.hoveredPart!==n&&this.hoveredPart!==this.selectedPart&&this.onHoverEnd&&this.onHoverEnd(this.hoveredPart),n&&n!==this.selectedPart?(this.hoveredPart=n,this.onHoverStart&&this.onHoverStart(n)):!n&&this.hoveredPart&&this.hoveredPart!==this.selectedPart&&(this.onHoverEnd&&this.onHoverEnd(this.hoveredPart),this.hoveredPart=null),this.scene.getCanvas().style.cursor=n?"pointer":"grab"}getSelectedPart(){return this.selectedPart}}class Sp{constructor(t){this.scene=t,this.autoRotate=!0,this.autoRotateSpeed=.3,this.targetRotationY=0,this.currentRotationY=0,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.smoothing=.08}enableAutoRotate(t){this.autoRotate=t}toggleAutoRotate(){return this.autoRotate=!this.autoRotate,this.autoRotate}resetView(){this.scene.camera.position.set(14,10,18),this.scene.camera.lookAt(0,2,0),this.targetRotationY=0,this.currentRotationY=0,this.scene.gunContainer.rotation.set(0,0,0),this.autoRotate=!0}startDrag(t,e){this.isDragging=!1,this.dragStartX=t,this.dragStartY=e}updateDrag(t,e){(Math.abs(t)>3||Math.abs(e)>3)&&(this.isDragging=!0),this.isDragging&&(this.targetRotationY+=t*.005,this.autoRotate=!1)}handleZoom(t){const e=t>0?1.05:.95;this.scene.camera.position.multiplyScalar(e);const n=this.scene.camera.position.length();n<6&&this.scene.camera.position.setLength(6),n>45&&this.scene.camera.position.setLength(45)}handlePinchZoom(t){const e=t>0?.97:1.03;this.scene.camera.position.multiplyScalar(e);const n=this.scene.camera.position.length();n<6&&this.scene.camera.position.setLength(6),n>45&&this.scene.camera.setLength(45)}update(t){this.autoRotate&&(this.targetRotationY+=t*this.autoRotateSpeed),this.currentRotationY+=(this.targetRotationY-this.currentRotationY)*this.smoothing,this.scene.gunContainer.rotation.y=this.currentRotationY}isDraggingNow(){return this.isDragging}}class Ep{constructor(t,e,n){this.canvas=t,this.camera=e,this.selection=n,this._bindEvents()}_bindEvents(){this.canvas.addEventListener("mousedown",t=>{this.camera.startDrag(t.clientX,t.clientY)}),this.canvas.addEventListener("mousemove",t=>{this.camera.isDraggingNow()&&this.camera.updateDrag(t.movementX||0,t.movementY||0),this.selection.updateHover(t.clientX,t.clientY)}),this.canvas.addEventListener("mouseup",t=>{this.camera.isDraggingNow()||this.selection.handleClick(t.clientX,t.clientY)}),this.canvas.addEventListener("click",t=>{this.camera.isDraggingNow()||this.selection.handleClick(t.clientX,t.clientY)}),this.canvas.addEventListener("wheel",t=>{this.camera.handleZoom(t.deltaY),t.preventDefault()},{passive:!1}),this.canvas.addEventListener("touchstart",t=>{t.touches.length===1&&this.camera.startDrag(t.touches[0].clientX,t.touches[0].clientY)},{passive:!0}),this.canvas.addEventListener("touchmove",t=>{if(t.touches.length===1){const e=t.touches[0].clientX-this.camera.dragStartX,n=t.touches[0].clientY-this.camera.dragStartY;this.camera.updateDrag(e,n)}else if(t.touches.length===2){this.camera.updateDrag(0,0);const e=Math.hypot(t.touches[0].clientX-t.touches[1].clientX,t.touches[0].clientY-t.touches[1].clientY);this._lastPinchDist=this._lastPinchDist||e;const n=e-this._lastPinchDist;this._lastPinchDist=e,Math.abs(n)>1&&this.camera.handleZoom(-n*2)}},{passive:!0}),this.canvas.addEventListener("touchend",t=>{if(t.touches.length===0&&t.changedTouches.length===1&&!this.camera.isDraggingNow()){const e=t.changedTouches[0];this.selection.handleClick(e.clientX,e.clientY)}this._lastPinchDist=null})}}class yp{constructor(){this.container=document.getElementById("parts-list"),this.onPartClick=null,this._build()}_build(){if(!this.container)return;this.container.innerHTML="";const t=Object.entries(ue.parts).sort((e,n)=>e[1].order-n[1].order);for(const[e,n]of t){const s=document.createElement("div");s.className="part-card",s.dataset.partId=e,s.innerHTML='<div class="part-number">'+n.order+'</div><div class="part-info"><div class="part-name">'+n.label+'</div><div class="part-desc">'+n.description.split("—")[0].trim()+'</div></div><div class="part-status assembled">Ready</div>',s.addEventListener("click",()=>{this.onPartClick&&this.onPartClick(e)}),this.container.appendChild(s)}}update(t,e){this.container.querySelectorAll(".part-card").forEach(s=>{const r=s.dataset.partId,a=s.querySelector(".part-status"),o=t.partStates[r];o&&(s.classList.toggle("selected",r===e),o.status==="assembled"?(a.className="part-status assembled",a.textContent="Ready"):o.status==="exploded"?(a.className="part-status exploded",a.textContent="Removed"):(a.className="part-status animating",a.textContent="Moving"))})}}class Tp{constructor(){this.container=document.getElementById("steps-list"),this.currentStep=0,this.onStepClick=null,this._build()}_build(){this.container&&(this.container.innerHTML="",ue.disassemblyOrder.forEach((t,e)=>{const n=ue.parts[t],s=document.createElement("div");s.className="step-card",s.dataset.step=e,s.dataset.partId=t,s.innerHTML='<div class="step-header"><span class="step-number">Step '+(e+1)+'</span><span class="step-action">Remove '+n.label+'</span></div><div class="step-detail">'+n.description.split("—")[0].trim()+"</div>",s.addEventListener("click",()=>{this.onStepClick&&this.onStepClick(e)}),this.container.appendChild(s)}))}update(t,e){this.currentStep=e,this.container.querySelectorAll(".step-card").forEach(s=>{const r=parseInt(s.dataset.step),a=ue.disassemblyOrder[r],o=t.partStates[a];o&&(s.classList.toggle("completed",o.status==="exploded"),s.classList.toggle("active",r===e))})}}class Ap{constructor(){this.panel=document.getElementById("info-panel"),this.titleEl=document.getElementById("info-title"),this.descEl=document.getElementById("info-description"),this.metaEl=document.getElementById("info-meta"),this.toggleBtn=document.getElementById("info-toggle"),this.focusBtn=document.getElementById("info-focus"),this.onToggle=null,this.onFocus=null,this.toggleBtn&&this.toggleBtn.addEventListener("click",()=>{this.onToggle&&this.onToggle(this.currentPartId)}),this.focusBtn&&this.focusBtn.addEventListener("click",()=>{this.onFocus&&this.onFocus(this.currentPartId)}),this.currentPartId=null}show(t){this.currentPartId=t;const e=ue.parts[t];e&&(this.titleEl.textContent=e.label,this.descEl.textContent=e.description,this.metaEl.textContent="Part #"+e.order+" | Voxels: "+e.voxels.length,this.panel.classList.add("visible"))}hide(){this.currentPartId=null,this.panel.classList.remove("visible")}}class bp{constructor(){this.explodeBtn=document.getElementById("btn-explode"),this.assembleBtn=document.getElementById("btn-assemble"),this.explodedViewBtn=document.getElementById("btn-exploded-view"),this.resetBtn=document.getElementById("btn-reset"),this.autoRotateBtn=document.getElementById("btn-auto-rotate"),this.stepPrevBtn=document.getElementById("btn-step-prev"),this.stepNextBtn=document.getElementById("btn-step-next"),this.speedSlider=document.getElementById("speed-slider"),this.speedValue=document.getElementById("speed-value"),this.onExplode=null,this.onAssemble=null,this.onToggleExploded=null,this.onReset=null,this.onToggleAutoRotate=null,this.onStepPrev=null,this.onStepNext=null,this.onSpeedChange=null,this._bindEvents()}_bindEvents(){this.explodeBtn&&this.explodeBtn.addEventListener("click",()=>{this.onExplode&&this.onExplode()}),this.assembleBtn&&this.assembleBtn.addEventListener("click",()=>{this.onAssemble&&this.onAssemble()}),this.explodedViewBtn&&this.explodedViewBtn.addEventListener("click",()=>{this.onToggleExploded&&this.onToggleExploded()}),this.resetBtn&&this.resetBtn.addEventListener("click",()=>{this.onReset&&this.onReset()}),this.autoRotateBtn&&this.autoRotateBtn.addEventListener("click",()=>{this.onToggleAutoRotate&&this.onToggleAutoRotate()}),this.stepPrevBtn&&this.stepPrevBtn.addEventListener("click",()=>{this.onStepPrev&&this.onStepPrev()}),this.stepNextBtn&&this.stepNextBtn.addEventListener("click",()=>{this.onStepNext&&this.onStepNext()}),this.speedSlider&&this.speedSlider.addEventListener("input",e=>{const n=parseFloat(e.target.value);this.speedValue&&(this.speedValue.textContent=n.toFixed(1)+"x"),this.onSpeedChange&&this.onSpeedChange(n)}),document.querySelectorAll(".panel-tab").forEach(e=>{e.addEventListener("click",n=>{document.querySelectorAll(".panel-tab").forEach(a=>a.classList.remove("active")),n.target.classList.add("active");const s=n.target.dataset.tab;document.querySelectorAll(".tab-content").forEach(a=>a.classList.add("hidden"));const r=document.getElementById("tab-"+s);r&&r.classList.remove("hidden")})});const t=document.getElementById("mobile-toggle");t&&t.addEventListener("click",()=>{document.getElementById("side-panel").classList.toggle("open")})}update(t,e,n,s,r){this.explodeBtn&&(this.explodeBtn.disabled=e||t==="exploded"),this.assembleBtn&&(this.assembleBtn.disabled=e||t==="assembled"),this.explodedViewBtn&&(t==="exploded"?(this.explodedViewBtn.textContent="⟵ Assemble",this.explodedViewBtn.classList.add("primary")):(this.explodedViewBtn.textContent="⟶ Explode",this.explodedViewBtn.classList.remove("primary"))),this.autoRotateBtn&&(this.autoRotateBtn.textContent=n?"↻ Auto ON":"↻ Auto OFF",this.autoRotateBtn.classList.toggle("active",n)),this.stepPrevBtn&&(this.stepPrevBtn.disabled=e||s<=0),this.stepNextBtn&&(this.stepNextBtn.disabled=e||s>=r)}}class wp{constructor(){this.container=document.getElementById("toast-container")}show(t,e="info"){if(!this.container)return;const n=document.createElement("div");n.className="toast "+e;const s={success:"✓",info:"ℹ",warning:"⚠"};n.innerHTML="<span>"+(s[e]||"•")+"</span> "+t,this.container.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.3s",setTimeout(()=>{n.parentNode&&n.remove()},300)},3e3)}}class Rp{constructor(){this.partList=new yp,this.stepGuide=new Tp,this.infoPanel=new Ap,this.toolbar=new bp,this.toast=new wp}update(t,e,n){this.partList.update(t,e),this.stepGuide.update(t,n);const s=document.getElementById("progress-fill");s&&(s.style.width=t.getProgress()+"%")}updateToolbar(t,e,n,s,r){this.toolbar.update(t,e,n,s,r)}}class Cp{constructor(){this.scene=new mp,this.state=new tl(ue),this.builder=new gp(this.scene),this.highlights=new _p(this.builder),this.animEngine=new vp,this.animSequence=new xp(this.animEngine,this.state,this.builder,ue),this.camera=new Sp(this.scene),this.selection=new Mp(this.scene,this.builder),this.ui=new Rp,this.currentStep=0,this._wireEvents(),this.builder.buildAll(),this.input=new Ep(this.scene.getCanvas(),this.camera,this.selection),this.scene.onResize(),this._animate(),this.ui.toast.show("Click parts to select • Drag to rotate","info")}_wireEvents(){this.selection.onSelect=t=>this._onSelect(t),this.selection.onDeselect=t=>this._onDeselect(t),this.selection.onHoverStart=t=>this._onHoverStart(t),this.selection.onHoverEnd=t=>this._onHoverEnd(t),this.selection.onDoubleClick=t=>this._onDoubleClick(t),this.ui.partList.onPartClick=t=>this._onSelect(t),this.ui.stepGuide.onStepClick=t=>this._goToStep(t),this.ui.infoPanel.onToggle=t=>this._togglePart(t),this.ui.infoPanel.onFocus=t=>this._focusPart(t),this.ui.toolbar.onExplode=()=>this._explodeAll(),this.ui.toolbar.onAssemble=()=>this._assembleAll(),this.ui.toolbar.onToggleExploded=()=>this._toggleExploded(),this.ui.toolbar.onReset=()=>this._resetView(),this.ui.toolbar.onToggleAutoRotate=()=>this._toggleAutoRotate(),this.ui.toolbar.onStepPrev=()=>this._stepPrev(),this.ui.toolbar.onStepNext=()=>this._stepNext(),this.ui.toolbar.onSpeedChange=t=>this._setSpeed(t),window.addEventListener("resize",()=>this.scene.onResize())}_onSelect(t){this.highlights.setSelected(t,!0),this.ui.infoPanel.show(t),this._refreshUI()}_onDeselect(t){this.highlights.setSelected(t,!1),this.ui.infoPanel.hide(),this._refreshUI()}_onHoverStart(t){this.highlights.setHighlight(t,!0,!1)}_onHoverEnd(t){this.highlights.setHighlight(t,!1,!1)}_onDoubleClick(t){this._togglePart(t)}_togglePart(t){this.state.isAnyAnimating()||(this.state.isAssembled(t)?this._animateSinglePart(t,!0):this.state.isExploded(t)&&this._animateSinglePart(t,!1))}_focusPart(t){this.builder.getGroup(t)&&this.camera.resetView()}_animateSinglePart(t,e){const n=ue.voxelSize,s=ue.explodeScale,r=this.builder.getGroup(t),a={x:r.position.x,y:r.position.y,z:r.position.z},o=e?ue.parts[t].explodeOffset:{x:0,y:0,z:0},l=e?{x:o.x*n*s,y:o.y*n*s,z:o.z*n*s}:{x:0,y:0,z:0},c=e?"exploded":"assembled";this.state.markAnimating(t,c);const u=650,p=e?cs.easeOutBack:cs.easeOutElastic;this.animEngine.animate(t,a,l,u,p,()=>{c==="exploded"?this.state.markExploded(t):this.state.markAssembled(t),this.state.updateMode(),this._refreshUI()}),this._refreshUI()}_explodeAll(){this.state.isAnyAnimating()||(this.animSequence.onComplete(()=>{this.state.updateMode(),this._refreshUI(),this.ui.toast.show("Disassembly complete","success")}),this.animSequence.explodeAll(),this._refreshUI())}_assembleAll(){this.state.isAnyAnimating()||(this.animSequence.onComplete(()=>{this.state.updateMode(),this.currentStep=0,this._refreshUI(),this.ui.toast.show("Assembly complete","success")}),this.animSequence.assembleAll(),this._refreshUI())}_toggleExploded(){this.state.mode==="exploded"?this._assembleAll():this._explodeAll()}_goToStep(t){this.state.isAnyAnimating()||(this.animSequence.onComplete(()=>{this.currentStep=t+1,this.state.updateMode(),this._refreshUI()}),this.animSequence.goToStep(t),this._refreshUI())}_stepPrev(){this.currentStep>0&&this._goToStep(this.currentStep-1)}_stepNext(){this.currentStep<ue.disassemblyOrder.length-1?this._goToStep(this.currentStep+1):this.currentStep===ue.disassemblyOrder.length-1&&this._goToStep(this.currentStep)}_resetView(){this.camera.resetView(),this._refreshUI(),this.ui.toast.show("View reset","info")}_toggleAutoRotate(){const t=this.camera.toggleAutoRotate();this._refreshUI(),this.ui.toast.show(t?"Auto-rotation enabled":"Auto-rotation disabled","info")}_setSpeed(t){this.animEngine.setSpeed(t)}_refreshUI(){this.ui.update(this.state,this.selection.getSelectedPart(),this.currentStep),this.ui.updateToolbar(this.state.mode,this.state.isAnyAnimating(),this.camera.autoRotate,this.currentStep,ue.disassemblyOrder.length-1)}_animate(){requestAnimationFrame(()=>this._animate());const t=this.scene.clock.getDelta(),e=performance.now(),n=this.scene.clock.elapsedTime;this.camera.update(t),this.animEngine.tick(e,(s,r,a,o)=>{const l=this.builder.getGroup(s);l&&(l.position.x=r.x+(a.x-r.x)*o,l.position.y=r.y+(a.y-r.y)*o,l.position.z=r.z+(a.z-r.z)*o)});for(const[s,r]of Object.entries(this.builder.getAllGroups()))if(this.state.partStates[s].status==="animating"){const o=Math.sin(n*8)*.015+1;r.scale.set(o,o,o)}else{const o=1+Math.sin(n*1.2+r.position.x*.3)*.003;r.scale.set(o,o,o)}this.selection.getSelectedPart()&&this.highlights.pulseSelected(this.selection.getSelectedPart(),n),this.scene.render(),this._refreshUI()}}document.addEventListener("DOMContentLoaded",()=>{window.app=new Cp});
