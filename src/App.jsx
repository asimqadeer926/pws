import { useEffect, useLayoutEffect, useState } from "react";

const faqData = [
  {
    num: "01",
    question: "How is Pearl Windows different from local uPVC?",
    answer: "Most local uPVC is thin-walled and non-UV, and yellows, chalks, and warps within a few summers. Pearl is imported, certified to EN 13245, built with 2.2–2.5mm walls, and backed by a written 10-year guarantee against exactly those failures."
  },
  {
    num: "02",
    question: 'Is it really "exclusive"?',
    answer: "Yes, and it's documented — the factory has certified Pearl as the sole brand owner and authorized distributor of the Pearl Windows profile in Pakistan."
  },
  {
    num: "03",
    question: "Do you install, or only supply?",
    answer: "Both — we supply to fabricators, dealers, and builders, and deliver and install finished windows and doors nationwide."
  },
  {
    num: "04",
    question: "What does the warranty cover?",
    answer: "A signed 10-year guarantee against significant yellowing/fading, warping/cracking, and chalking/peeling, valid when fabricated and installed to the factory's guidelines."
  },
  {
    num: "05",
    question: "What colours are available?",
    answer: "Premium anti-UV white, engineered not to yellow under direct sun. Laminated and wood-grain finishes are planned — ask us for current availability."
  },
  {
    num: "06",
    question: "Can I see it before I buy?",
    answer: "Yes — a walk-in showroom in Islamabad with live display units, open Monday to Saturday, 9:00 AM to 6:00 PM."
  },
  {
    num: "07",
    question: "What's the minimum order / lead time for wholesale?",
    answer: "Minimum order quantities and lead times vary by profile series and hardware in stock. Send your project scope and we'll confirm exact figures with your quote."
  },
  {
    num: "08",
    question: "How do I get pricing?",
    answer: "Send a quote request with project type and quantity, or message us directly on WhatsApp. Pricing is never published publicly — every project gets its own number."
  }
];

const sourceScripts = [
  {
    "src": "https://cdn.tailwindcss.com",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761",
    "type": "",
    "id": "",
    "async": true,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', 'G-2M6V79H761');\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "defer": false,
    "content": "\n          (function(){\n            var DATA={\n              \"60\":[\n                [\"Openable Outer Frame\", \"/profile-diagrams/openable-outer-frame.webp\"],\n                [\"Openable Outward Window Sash\", \"/profile-diagrams/openable-outward-window-sash.webp\"],\n                [\"Openable Inward Window Sash\", \"/profile-diagrams/openable-inward-window-sash.webp\"],\n                [\"Openable Outward Door Sash\", \"/profile-diagrams/openable-outward-door-sash.webp\"],\n                [\"Openable Inward Door Sash\", \"/profile-diagrams/openable-inward-door-sash.webp\"],\n                [\"Central Mullion / T-Mullion\", \"/profile-diagrams/openable-central-mullion-t-mullion.webp\"],\n                [\"60 to 60 Frame Coupling Connector\", \"/profile-diagrams/60-to-60-frame-coupling-connector.webp\"]\n              ],\n              \"80\":[\n                [\"Sliding Outer Frame (3-Track)\", \"/profile-diagrams/sliding-outer-frame.webp\"],\n                [\"Sliding Window & Door Sash\", \"/profile-diagrams/sliding-window-door-sash.webp\"],\n                [\"Sliding Weather Interlock Section\", \"/profile-diagrams/sliding-weather-interlock.webp\"],\n                [\"Sliding Mosquito Net Frame\", \"/profile-diagrams/sliding-mosquito-net-frame.webp\"],\n                [\"80 to 60 Frame Coupling Connector\", \"/profile-diagrams/80-to-60-frame-coupling-connector.webp\"]\n              ],\n              \"louver\":[\n                [\"Louver / Jalousie Window Vane\", \"/profile-diagrams/louver-jalousie-window-vane.webp\"],\n                [\"Louver Frame Bead Stop (Left/Right)\", \"/profile-diagrams/louver-frame-bead-stop-left-right.webp\"]\n              ],\n              \"auxiliary\":[\n                [\"Series Single Glass Bead\", \"/profile-diagrams/series-single-glass-bead.webp\"],\n                [\"Sliding Single Glass Bead (60 DG 22mm)\", \"/profile-diagrams/sliding-single-glass-bead-60-dg-22mm.webp\"],\n                [\"Sliding Double Glass Bead\", \"/profile-diagrams/sliding-double-glass-bead.webp\"],\n                [\"88 Series Double Glass Bead (18mm SG)\", \"/profile-diagrams/series-double-glass-bead-18mm-88-sg.webp\"],\n                [\"uPVC Door Panel Board (150mm)\", \"/profile-diagrams/upvc-door-panel-board-150mm.webp\"]\n              ]\n            };\n            var LOCK={\n              \"88\":[\"88 Series — Heavy-Duty Sliding\",\"Large-span terrace openings\"],\n              \"chugn\":[\"CHUGN Imported Hardware\",\"Multi-point locks, hinges & handles\"]\n            };\n            var frame=document.getElementById(\"diagramFrame\"),title=document.getElementById(\"diagramTitle\"),lock=document.getElementById(\"diagramLock\"),lockT=document.getElementById(\"diagramLockTitle\"),lockS=document.getElementById(\"diagramLockSub\"),items=document.getElementById(\"pmItems\");\n            if(!frame||!items) return;\n            var tabs=[].slice.call(document.querySelectorAll(\"#profileList [data-series]\"));\n            function styleTab(b,on){ b.style.background=on?\"#0a0b10\":\"#fff\"; b.style.color=on?\"#fff\":\"#0a0b10\"; }\n            function styleItem(el,on){ el.style.borderColor=on?\"#2f6bff\":\"rgba(10,12,30,0.12)\"; el.style.background=on?\"rgba(47,107,255,0.06)\":\"#fff\"; }\n            function load(seriesName,name,imgUrl){\n              if(title) title.textContent=seriesName+\" — \"+name;\n              if(frame) {\n                frame.src=imgUrl;\n                frame.alt=seriesName+\" \"+name+\" technical profile diagram\";\n              }\n            }\n            function showLocked(k){\n              frame.style.display=\"none\"; lock.style.display=\"flex\"; lockT.textContent=LOCK[k][0]; lockS.textContent=LOCK[k][1]; title.textContent=LOCK[k][0]+\" — arriving soon\"; items.innerHTML=\"\";\n              var n=document.createElement(\"div\");\n              n.style.cssText=\"border:1px dashed rgba(10,12,30,0.22);border-radius:12px;padding:18px;background:#faf9f7;color:#5a5d69;font-size:13px;line-height:1.5;\";\n              n.innerHTML=\"<strong style='color:#0a0b10;font-weight:600;'>\"+LOCK[k][0]+\"</strong><br>Diagrams and specifications are arriving soon.\";\n              items.appendChild(n);\n            }\n            var SERIES_LABELS={\"60\":\"60 SERIES\",\"80\":\"80 SERIES\",\"louver\":\"LOUVER SERIES\",\"auxiliary\":\"AUXILIARY\"};\n            function render(k){\n              tabs.forEach(function(b){ styleTab(b,b.getAttribute(\"data-series\")===k); });\n              if(LOCK[k]){ showLocked(k); return; }\n              frame.style.display=\"block\"; lock.style.display=\"none\"; items.innerHTML=\"\";\n              var seriesLabel = SERIES_LABELS[k] || k.toUpperCase() + \" SERIES\";\n              if (!DATA[k]) return;\n              DATA[k].forEach(function(row,i){\n                var el=document.createElement(\"button\");\n                el.type=\"button\";\n                el.style.cssText=\"text-align:left;border:1px solid rgba(10,12,30,0.12);border-radius:12px;padding:13px 15px;background:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px;font-family:var(--display);transition:border-color .2s,background .2s;\";\n                el.innerHTML=\"<span style='font-weight:600;font-size:13.5px;letter-spacing:-0.01em;color:#0a0b10;'>\"+row[0]+\"</span><span style='font-family:var(--mono);font-size:10px;letter-spacing:0.12em;color:#2f6bff;white-space:nowrap;'>\"+seriesLabel+\"</span>\";\n                el.addEventListener(\"click\",function(){ load(seriesLabel,row[0],row[1]); [].slice.call(items.children).forEach(function(c){ styleItem(c,false); }); styleItem(el,true); });\n                items.appendChild(el);\n                if(i===0) {\n                  styleItem(el,true);\n                  load(seriesLabel,row[0],row[1]);\n                }\n              });\n            }\n            tabs.forEach(function(b){ b.addEventListener(\"click\",function(){ render(b.getAttribute(\"data-series\")); }); });\n            render(\"60\");\n          })();\n        "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      \"use strict\";\n      (function () {\n        const canvas = document.getElementById('c');\n        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n        const config = {\n          SIM_RESOLUTION:192, DYE_RESOLUTION:1024,\n          DENSITY_DISSIPATION:0.74, VELOCITY_DISSIPATION:0.962,\n          PRESSURE:0.8, PRESSURE_ITERATIONS:26, CURL:16,\n          SPLAT_RADIUS:0.28, SPLAT_FORCE:3600,\n          SHADING:true, BLOOM:true, BLOOM_ITERATIONS:8, BLOOM_RESOLUTION:256,\n          BLOOM_INTENSITY:0.85, BLOOM_THRESHOLD:0.58, BLOOM_SOFT_KNEE:0.7,\n          COLOR_UPDATE_SPEED:7.0, AUTO_PAINT:true, PAUSED:false,\n        };\n        if (reduceMotion){ config.PRESSURE_ITERATIONS=18; config.SIM_RESOLUTION=160; config.DYE_RESOLUTION=768; }\n\n        const { gl, ext } = getWebGLContext(canvas);\n        if (!gl){ drawFallback(); return; }\n        if (!ext.supportLinearFiltering){ config.DYE_RESOLUTION=512; config.SHADING=false; config.BLOOM=false; }\n\n        function getWebGLContext(canvas){\n          const params={alpha:true,depth:false,stencil:false,antialias:false,preserveDrawingBuffer:false,premultipliedAlpha:false};\n          let gl=canvas.getContext('webgl2',params); const isWebGL2=!!gl;\n          if(!isWebGL2) gl=canvas.getContext('webgl',params)||canvas.getContext('experimental-webgl',params);\n          if(!gl) return {gl:null,ext:null};\n          let halfFloat,supportLinearFiltering;\n          if(isWebGL2){ gl.getExtension('EXT_color_buffer_float'); supportLinearFiltering=!!gl.getExtension('OES_texture_float_linear'); }\n          else { halfFloat=gl.getExtension('OES_texture_half_float'); supportLinearFiltering=!!gl.getExtension('OES_texture_half_float_linear'); }\n          gl.clearColor(0.02,0.024,0.04,1.0);\n          const halfFloatTexType=isWebGL2?gl.HALF_FLOAT:(halfFloat?halfFloat.HALF_FLOAT_OES:null);\n          let formatRGBA,formatRG,formatR;\n          if(isWebGL2){ formatRGBA=getSupportedFormat(gl,gl.RGBA16F,gl.RGBA,halfFloatTexType); formatRG=getSupportedFormat(gl,gl.RG16F,gl.RG,halfFloatTexType); formatR=getSupportedFormat(gl,gl.R16F,gl.RED,halfFloatTexType); }\n          else { formatRGBA=getSupportedFormat(gl,gl.RGBA,gl.RGBA,halfFloatTexType); formatRG=getSupportedFormat(gl,gl.RGBA,gl.RGBA,halfFloatTexType); formatR=getSupportedFormat(gl,gl.RGBA,gl.RGBA,halfFloatTexType); }\n          return {gl,ext:{isWebGL2,formatRGBA,formatRG,formatR,halfFloatTexType,supportLinearFiltering}};\n        }\n        function getSupportedFormat(gl,internalFormat,format,type){\n          if(!supportRenderTextureFormat(gl,internalFormat,format,type)){ switch(internalFormat){ case gl.R16F: return getSupportedFormat(gl,gl.RG16F,gl.RG,type); case gl.RG16F: return getSupportedFormat(gl,gl.RGBA16F,gl.RGBA,type); default: return null; } }\n          return {internalFormat,format};\n        }\n        function supportRenderTextureFormat(gl,internalFormat,format,type){\n          const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture);\n          gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);\n          gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);\n          gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,4,4,0,format,type,null);\n          const fbo=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);\n          gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);\n          const status=gl.checkFramebufferStatus(gl.FRAMEBUFFER); gl.bindFramebuffer(gl.FRAMEBUFFER,null);\n          return status===gl.FRAMEBUFFER_COMPLETE;\n        }\n        function compileShader(type,source,keywords){ source=addKeywords(source,keywords); const s=gl.createShader(type); gl.shaderSource(s,source); gl.compileShader(s); if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(s)); return s; }\n        function addKeywords(source,keywords){ if(!keywords) return source; let p=''; keywords.forEach(k=>p+='#define '+k+'\\n'); return p+source; }\n        function createProgram(vs,fs){ const p=gl.createProgram(); gl.attachShader(p,vs); gl.attachShader(p,fs); gl.linkProgram(p); if(!gl.getProgramParameter(p,gl.LINK_STATUS)) console.warn(gl.getProgramInfoLog(p)); return p; }\n        function getUniforms(program){ const u={}; const c=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS); for(let i=0;i<c;i++){ const n=gl.getActiveUniform(program,i).name; u[n]=gl.getUniformLocation(program,n); } return u; }\n        class Program{ constructor(vs,fs){ this.program=createProgram(vs,fs); this.uniforms=getUniforms(this.program); } bind(){ gl.useProgram(this.program); } }\n        class Material{ constructor(vs,src){ this.vertexShader=vs; this.fragmentShaderSource=src; this.programs={}; this.activeProgram=null; this.uniforms={}; }\n          setKeywords(kw){ let h=0; for(let i=0;i<kw.length;i++) h+=hashCode(kw[i]); let p=this.programs[h]; if(p==null){ const fs=compileShader(gl.FRAGMENT_SHADER,this.fragmentShaderSource,kw); p=createProgram(this.vertexShader,fs); this.programs[h]=p; } if(p===this.activeProgram) return; this.uniforms=getUniforms(p); this.activeProgram=p; }\n          bind(){ gl.useProgram(this.activeProgram); } }\n        function hashCode(s){ if(s.length===0) return 0; let h=0; for(let i=0;i<s.length;i++){ h=(h<<5)-h+s.charCodeAt(i); h|=0; } return h; }\n\n        const baseVertexShader=compileShader(gl.VERTEX_SHADER,`precision highp float; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main(){ vUv=aPosition*0.5+0.5; vL=vUv-vec2(texelSize.x,0.0); vR=vUv+vec2(texelSize.x,0.0); vT=vUv+vec2(0.0,texelSize.y); vB=vUv-vec2(0.0,texelSize.y); gl_Position=vec4(aPosition,0.0,1.0); }`);\n        const copyShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; uniform sampler2D uTexture; void main(){ gl_FragColor=texture2D(uTexture,vUv); }`);\n        const clearShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; uniform sampler2D uTexture; uniform float value; void main(){ gl_FragColor=value*texture2D(uTexture,vUv); }`);\n        const displayShaderSource=`precision highp float; precision highp sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uTexture; uniform sampler2D uBloom; uniform vec2 texelSize; vec3 linearToGamma(vec3 c){ c=max(c,vec3(0.0)); return max(1.055*pow(c,vec3(0.416666667))-0.055,vec3(0.0)); } void main(){ vec3 c=texture2D(uTexture,vUv).rgb;\n          #ifdef SHADING\n            vec3 lc=texture2D(uTexture,vL).rgb; vec3 rc=texture2D(uTexture,vR).rgb; vec3 tc=texture2D(uTexture,vT).rgb; vec3 bc=texture2D(uTexture,vB).rgb;\n            float dx=length(rc)-length(lc); float dy=length(tc)-length(bc); vec3 n=normalize(vec3(dx,dy,length(texelSize))); vec3 l=vec3(0.0,0.0,1.0); float diffuse=clamp(dot(n,l)+0.7,0.7,1.0); c*=diffuse;\n          #endif\n          #ifdef BLOOM\n            vec3 bloom=texture2D(uBloom,vUv).rgb; bloom=linearToGamma(bloom); c+=bloom;\n          #endif\n            c=max(c,vec3(0.0)); float lum=max(c.r,max(c.g,c.b)); if(lum>0.0001){ float mapped=lum/(1.0+0.55*max(lum-0.85,0.0)); mapped=min(mapped,0.97); c*=mapped/lum; } float a=max(c.r,max(c.g,c.b)); gl_FragColor=vec4(c,a); }`;\n        const splatShader=compileShader(gl.FRAGMENT_SHADER,`precision highp float; precision highp sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main(){ vec2 p=vUv-point.xy; p.x*=aspectRatio; vec3 splat=exp(-dot(p,p)/radius)*color; vec3 base=texture2D(uTarget,vUv).xyz; gl_FragColor=vec4(base+splat,1.0); }`);\n        const advectionShader=compileShader(gl.FRAGMENT_SHADER,`precision highp float; precision highp sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform vec2 dyeTexelSize; uniform float dt; uniform float dissipation; vec4 bilerp(sampler2D sam,vec2 uv,vec2 tsize){ vec2 st=uv/tsize-0.5; vec2 iuv=floor(st); vec2 fuv=fract(st); vec4 a=texture2D(sam,(iuv+vec2(0.5,0.5))*tsize); vec4 b=texture2D(sam,(iuv+vec2(1.5,0.5))*tsize); vec4 c=texture2D(sam,(iuv+vec2(0.5,1.5))*tsize); vec4 d=texture2D(sam,(iuv+vec2(1.5,1.5))*tsize); return mix(mix(a,b,fuv.x),mix(c,d,fuv.x),fuv.y); } void main(){\n          #ifdef MANUAL_FILTERING\n            vec2 coord=vUv-dt*bilerp(uVelocity,vUv,texelSize).xy*texelSize; vec4 result=bilerp(uSource,coord,dyeTexelSize);\n          #else\n            vec2 coord=vUv-dt*texture2D(uVelocity,vUv).xy*texelSize; vec4 result=texture2D(uSource,coord);\n          #endif\n            float decay=1.0+dissipation*dt; gl_FragColor=result/decay; }`, ext.supportLinearFiltering?null:['MANUAL_FILTERING']);\n        const divergenceShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uVelocity; void main(){ float L=texture2D(uVelocity,vL).x; float R=texture2D(uVelocity,vR).x; float T=texture2D(uVelocity,vT).y; float B=texture2D(uVelocity,vB).y; vec2 C=texture2D(uVelocity,vUv).xy; if(vL.x<0.0){L=-C.x;} if(vR.x>1.0){R=-C.x;} if(vT.y>1.0){T=-C.y;} if(vB.y<0.0){B=-C.y;} float div=0.5*(R-L+T-B); gl_FragColor=vec4(div,0.0,0.0,1.0); }`);\n        const curlShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uVelocity; void main(){ float L=texture2D(uVelocity,vL).y; float R=texture2D(uVelocity,vR).y; float T=texture2D(uVelocity,vT).x; float B=texture2D(uVelocity,vB).x; float vorticity=R-L-T+B; gl_FragColor=vec4(0.5*vorticity,0.0,0.0,1.0); }`);\n        const vorticityShader=compileShader(gl.FRAGMENT_SHADER,`precision highp float; precision highp sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main(){ float L=texture2D(uCurl,vL).x; float R=texture2D(uCurl,vR).x; float T=texture2D(uCurl,vT).x; float B=texture2D(uCurl,vB).x; float C=texture2D(uCurl,vUv).x; vec2 force=0.5*vec2(abs(T)-abs(B),abs(R)-abs(L)); force/=length(force)+0.0001; force*=curl*C; force.y*=-1.0; vec2 velocity=texture2D(uVelocity,vUv).xy; velocity+=force*dt; velocity=min(max(velocity,-1000.0),1000.0); gl_FragColor=vec4(velocity,0.0,1.0); }`);\n        const pressureShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; void main(){ float L=texture2D(uPressure,vL).x; float R=texture2D(uPressure,vR).x; float T=texture2D(uPressure,vT).x; float B=texture2D(uPressure,vB).x; float divergence=texture2D(uDivergence,vUv).x; float pressure=(L+R+B+T-divergence)*0.25; gl_FragColor=vec4(pressure,0.0,0.0,1.0); }`);\n        const gradientSubtractShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; void main(){ float L=texture2D(uPressure,vL).x; float R=texture2D(uPressure,vR).x; float T=texture2D(uPressure,vT).x; float B=texture2D(uPressure,vB).x; vec2 velocity=texture2D(uVelocity,vUv).xy; velocity.xy-=vec2(R-L,T-B); gl_FragColor=vec4(velocity,0.0,1.0); }`);\n        const bloomPrefilterShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; uniform vec3 curve; uniform float threshold; void main(){ vec3 c=texture2D(uTexture,vUv).rgb; float br=max(c.r,max(c.g,c.b)); float rq=clamp(br-curve.x,0.0,curve.y); rq=curve.z*rq*rq; c*=max(rq,br-threshold)/max(br,0.0001); gl_FragColor=vec4(c,0.0); }`);\n        const bloomBlurShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uTexture; void main(){ vec4 sum=vec4(0.0); sum+=texture2D(uTexture,vL); sum+=texture2D(uTexture,vR); sum+=texture2D(uTexture,vT); sum+=texture2D(uTexture,vB); sum*=0.25; gl_FragColor=sum; }`);\n        const bloomFinalShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uTexture; uniform float intensity; void main(){ vec4 sum=vec4(0.0); sum+=texture2D(uTexture,vL); sum+=texture2D(uTexture,vR); sum+=texture2D(uTexture,vT); sum+=texture2D(uTexture,vB); sum*=0.25; gl_FragColor=sum*intensity; }`);\n\n        const blit=(()=>{ gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),gl.STATIC_DRAW); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),gl.STATIC_DRAW); gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0); gl.enableVertexAttribArray(0); return (target,clear=false)=>{ if(target==null){ gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight); gl.bindFramebuffer(gl.FRAMEBUFFER,null);} else { gl.viewport(0,0,target.width,target.height); gl.bindFramebuffer(gl.FRAMEBUFFER,target.fbo);} if(clear){ gl.clearColor(0,0,0,1); gl.clear(gl.COLOR_BUFFER_BIT);} gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT,0); }; })();\n\n        function createFBO(w,h,internalFormat,format,type,param){ gl.activeTexture(gl.TEXTURE0); const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,param); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,param); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE); gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,w,h,0,format,type,null); const fbo=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fbo); gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0); gl.viewport(0,0,w,h); gl.clear(gl.COLOR_BUFFER_BIT); const texelSizeX=1.0/w,texelSizeY=1.0/h; return {texture,fbo,width:w,height:h,texelSizeX,texelSizeY,attach(id){ gl.activeTexture(gl.TEXTURE0+id); gl.bindTexture(gl.TEXTURE_2D,texture); return id; }}; }\n        function createDoubleFBO(w,h,iF,f,t,p){ let a=createFBO(w,h,iF,f,t,p); let b=createFBO(w,h,iF,f,t,p); return {width:w,height:h,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a;},set read(v){a=v;},get write(){return b;},set write(v){b=v;},swap(){const t=a;a=b;b=t;}}; }\n        function resizeFBO(target,w,h,iF,f,t,p){ const n=createFBO(w,h,iF,f,t,p); copyProgram.bind(); gl.uniform1i(copyProgram.uniforms.uTexture,target.attach(0)); blit(n); return n; }\n        function resizeDoubleFBO(target,w,h,iF,f,t,p){ if(target.width===w&&target.height===h) return target; target.read=resizeFBO(target.read,w,h,iF,f,t,p); target.write=createFBO(w,h,iF,f,t,p); target.width=w; target.height=h; target.texelSizeX=1.0/w; target.texelSizeY=1.0/h; return target; }\n\n        const copyProgram=new Program(baseVertexShader,copyShader);\n        const clearProgram=new Program(baseVertexShader,clearShader);\n        const splatProgram=new Program(baseVertexShader,splatShader);\n        const advectionProgram=new Program(baseVertexShader,advectionShader);\n        const divergenceProgram=new Program(baseVertexShader,divergenceShader);\n        const curlProgram=new Program(baseVertexShader,curlShader);\n        const vorticityProgram=new Program(baseVertexShader,vorticityShader);\n        const pressureProgram=new Program(baseVertexShader,pressureShader);\n        const gradienSubtractProgram=new Program(baseVertexShader,gradientSubtractShader);\n        const bloomPrefilterProgram=new Program(baseVertexShader,bloomPrefilterShader);\n        const bloomBlurProgram=new Program(baseVertexShader,bloomBlurShader);\n        const bloomFinalProgram=new Program(baseVertexShader,bloomFinalShader);\n        const displayMaterial=new Material(baseVertexShader,displayShaderSource);\n\n        let dye,velocity,divergence,curl,pressure; let bloom; let bloomFramebuffers=[];\n        function getResolution(r){ let ar=gl.drawingBufferWidth/gl.drawingBufferHeight; if(ar<1) ar=1.0/ar; const min=Math.round(r); const max=Math.round(r*ar); if(gl.drawingBufferWidth>gl.drawingBufferHeight) return {width:max,height:min}; return {width:min,height:max}; }\n        function initFramebuffers(){ const simRes=getResolution(config.SIM_RESOLUTION); const dyeRes=getResolution(config.DYE_RESOLUTION); const texType=ext.halfFloatTexType; const rgba=ext.formatRGBA,rg=ext.formatRG,r=ext.formatR; const filtering=ext.supportLinearFiltering?gl.LINEAR:gl.NEAREST; gl.disable(gl.BLEND);\n          if(!dye) dye=createDoubleFBO(dyeRes.width,dyeRes.height,rgba.internalFormat,rgba.format,texType,filtering); else dye=resizeDoubleFBO(dye,dyeRes.width,dyeRes.height,rgba.internalFormat,rgba.format,texType,filtering);\n          if(!velocity) velocity=createDoubleFBO(simRes.width,simRes.height,rg.internalFormat,rg.format,texType,filtering); else velocity=resizeDoubleFBO(velocity,simRes.width,simRes.height,rg.internalFormat,rg.format,texType,filtering);\n          divergence=createFBO(simRes.width,simRes.height,r.internalFormat,r.format,texType,gl.NEAREST);\n          curl=createFBO(simRes.width,simRes.height,r.internalFormat,r.format,texType,gl.NEAREST);\n          pressure=createDoubleFBO(simRes.width,simRes.height,r.internalFormat,r.format,texType,gl.NEAREST);\n          initBloomFramebuffers();\n        }\n        function initBloomFramebuffers(){ if(!config.BLOOM) return; const res=getResolution(config.BLOOM_RESOLUTION); const texType=ext.halfFloatTexType; const rgba=ext.formatRGBA; const filtering=ext.supportLinearFiltering?gl.LINEAR:gl.NEAREST; bloom=createFBO(res.width,res.height,rgba.internalFormat,rgba.format,texType,filtering); bloomFramebuffers.length=0; for(let i=0;i<config.BLOOM_ITERATIONS;i++){ const w=res.width>>(i+1); const h=res.height>>(i+1); if(w<2||h<2) break; bloomFramebuffers.push(createFBO(w,h,rgba.internalFormat,rgba.format,texType,filtering)); } }\n        function updateKeywords(){ const kw=[]; if(config.SHADING) kw.push('SHADING'); if(config.BLOOM) kw.push('BLOOM'); displayMaterial.setKeywords(kw); }\n        updateKeywords(); initFramebuffers();\n\n        // ---- palettes ----\n        const PALETTES = {\n          ink:   [[0.07,0.16,0.62],[0.28,0.10,0.78],[0.78,0.13,0.72],[0.98,0.32,0.42],[1.00,0.55,0.22],[0.16,0.34,0.95]],\n          ash:   [[0.18,0.22,0.34],[0.26,0.28,0.40],[0.34,0.30,0.44],[0.30,0.34,0.48],[0.22,0.28,0.42],[0.16,0.22,0.36]],\n          steel: [[0.10,0.30,0.66],[0.16,0.46,0.78],[0.22,0.60,0.82],[0.40,0.72,0.86],[0.20,0.40,0.74],[0.12,0.26,0.60]],\n          smoke: [[0.20,0.22,0.30],[0.30,0.30,0.38],[0.40,0.38,0.44],[0.34,0.32,0.40],[0.24,0.24,0.32],[0.18,0.20,0.28]],\n          neon:  [[0.95,0.10,0.62],[0.62,0.10,0.95],[0.10,0.85,0.95],[0.95,0.20,0.75],[0.40,0.20,1.00],[0.10,0.70,0.95]],\n          calm:  [[0.16,0.34,0.52],[0.20,0.46,0.56],[0.28,0.56,0.58],[0.34,0.52,0.56],[0.22,0.40,0.54],[0.16,0.32,0.50]],\n          ember: [[0.62,0.10,0.16],[0.86,0.22,0.14],[1.00,0.42,0.14],[1.00,0.60,0.20],[0.80,0.20,0.30],[0.55,0.10,0.20]],\n        };\n        let paletteCur = PALETTES.ink.map(a=>a.slice());\n        let paletteTgt = PALETTES.ink.map(a=>a.slice());\n        let paletteT = Math.random()*paletteCur.length;\n        function paletteColor(t){ const n=paletteCur.length; const idx=((t%n)+n)%n; const i0=Math.floor(idx); const i1=(i0+1)%n; const f=idx-i0; const a=paletteCur[i0],b=paletteCur[i1]; return {r:a[0]+(b[0]-a[0])*f,g:a[1]+(b[1]-a[1])*f,b:a[2]+(b[2]-a[2])*f}; }\n        function generateColor(){ paletteT+=0.45+Math.random()*0.6; const c=paletteColor(paletteT); const s=0.16; return {r:c.r*s,g:c.g*s,b:c.b*s}; }\n\n        // ---- config target tweening ----\n        const TWEEN_KEYS=['CURL','SPLAT_FORCE','BLOOM_INTENSITY','DENSITY_DISSIPATION'];\n        const target={}; TWEEN_KEYS.forEach(k=>target[k]=config[k]);\n        function tweenStep(){ const k=0.045; TWEEN_KEYS.forEach(key=>{ config[key]+=(target[key]-config[key])*k; }); for(let i=0;i<paletteCur.length;i++){ for(let j=0;j<3;j++){ paletteCur[i][j]+=(paletteTgt[i][j]-paletteCur[i][j])*k; } } }\n\n        function pointerPrototype(){ return {id:-1,down:false,moved:false,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,color:{r:0.1,g:0.04,b:0.16}}; }\n        const pointers=[pointerPrototype()];\n        function updatePointerDown(p,id,x,y){ p.id=id; p.down=true; p.moved=false; p.texcoordX=x/canvas.width; p.texcoordY=1.0-y/canvas.height; p.prevTexcoordX=p.texcoordX; p.prevTexcoordY=p.texcoordY; p.deltaX=0; p.deltaY=0; p.color=generateColor(); }\n        function updatePointerMove(p,x,y){ p.prevTexcoordX=p.texcoordX; p.prevTexcoordY=p.texcoordY; p.texcoordX=x/canvas.width; p.texcoordY=1.0-y/canvas.height; p.deltaX=correctDeltaX(p.texcoordX-p.prevTexcoordX); p.deltaY=correctDeltaY(p.texcoordY-p.prevTexcoordY); p.moved=Math.abs(p.deltaX)>0||Math.abs(p.deltaY)>0; }\n        function correctDeltaX(d){ const ar=canvas.width/canvas.height; if(ar<1) d*=ar; return d; }\n        function correctDeltaY(d){ const ar=canvas.width/canvas.height; if(ar>1) d/=ar; return d; }\n        function correctRadius(r){ const ar=canvas.width/canvas.height; if(ar>1) r*=ar; return r; }\n\n        function splat(x,y,dx,dy,color){ splatProgram.bind(); gl.uniform1i(splatProgram.uniforms.uTarget,velocity.read.attach(0)); gl.uniform1f(splatProgram.uniforms.aspectRatio,canvas.width/canvas.height); gl.uniform2f(splatProgram.uniforms.point,x,y); gl.uniform3f(splatProgram.uniforms.color,dx,dy,0.0); gl.uniform1f(splatProgram.uniforms.radius,correctRadius(config.SPLAT_RADIUS/100.0)); blit(velocity.write); velocity.swap(); gl.uniform1i(splatProgram.uniforms.uTarget,dye.read.attach(0)); gl.uniform3f(splatProgram.uniforms.color,color.r,color.g,color.b); blit(dye.write); dye.swap(); }\n        function splatPointer(p){ const dx=p.deltaX*config.SPLAT_FORCE; const dy=p.deltaY*config.SPLAT_FORCE; splat(p.texcoordX,p.texcoordY,dx,dy,p.color); }\n        function clickSplat(p){ const color=generateColor(); color.r*=9; color.g*=9; color.b*=9; const dx=10*(Math.random()-0.5); const dy=30*(Math.random()-0.5); splat(p.texcoordX,p.texcoordY,dx,dy,color); }\n        const splatStack=[];\n        function multipleSplats(n){ for(let i=0;i<n;i++){ const color=generateColor(); color.r*=10; color.g*=10; color.b*=10; const x=Math.random(),y=Math.random(); const dx=1000*(Math.random()-0.5); const dy=1000*(Math.random()-0.5); splat(x,y,dx,dy,color); } }\n\n        function step(dt){ gl.disable(gl.BLEND);\n          curlProgram.bind(); gl.uniform2f(curlProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(curlProgram.uniforms.uVelocity,velocity.read.attach(0)); blit(curl);\n          vorticityProgram.bind(); gl.uniform2f(vorticityProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(vorticityProgram.uniforms.uVelocity,velocity.read.attach(0)); gl.uniform1i(vorticityProgram.uniforms.uCurl,curl.attach(1)); gl.uniform1f(vorticityProgram.uniforms.curl,config.CURL); gl.uniform1f(vorticityProgram.uniforms.dt,dt); blit(velocity.write); velocity.swap();\n          divergenceProgram.bind(); gl.uniform2f(divergenceProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(divergenceProgram.uniforms.uVelocity,velocity.read.attach(0)); blit(divergence);\n          clearProgram.bind(); gl.uniform1i(clearProgram.uniforms.uTexture,pressure.read.attach(0)); gl.uniform1f(clearProgram.uniforms.value,config.PRESSURE); blit(pressure.write); pressure.swap();\n          pressureProgram.bind(); gl.uniform2f(pressureProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(pressureProgram.uniforms.uDivergence,divergence.attach(0)); for(let i=0;i<config.PRESSURE_ITERATIONS;i++){ gl.uniform1i(pressureProgram.uniforms.uPressure,pressure.read.attach(1)); blit(pressure.write); pressure.swap(); }\n          gradienSubtractProgram.bind(); gl.uniform2f(gradienSubtractProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(gradienSubtractProgram.uniforms.uPressure,pressure.read.attach(0)); gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity,velocity.read.attach(1)); blit(velocity.write); velocity.swap();\n          advectionProgram.bind(); gl.uniform2f(advectionProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); if(!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(advectionProgram.uniforms.uVelocity,velocity.read.attach(0)); gl.uniform1i(advectionProgram.uniforms.uSource,velocity.read.attach(0)); gl.uniform1f(advectionProgram.uniforms.dt,dt); gl.uniform1f(advectionProgram.uniforms.dissipation,(1.0/config.VELOCITY_DISSIPATION-1.0)); blit(velocity.write); velocity.swap();\n          if(!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize,dye.texelSizeX,dye.texelSizeY); gl.uniform1i(advectionProgram.uniforms.uVelocity,velocity.read.attach(0)); gl.uniform1i(advectionProgram.uniforms.uSource,dye.read.attach(1)); gl.uniform1f(advectionProgram.uniforms.dissipation,(1.0/config.DENSITY_DISSIPATION-1.0)); blit(dye.write); dye.swap();\n        }\n        function render(target){ if(config.BLOOM) applyBloom(dye.read,bloom); gl.disable(gl.BLEND); drawDisplay(target); }\n        function drawDisplay(target){ const w=target==null?gl.drawingBufferWidth:target.width; const h=target==null?gl.drawingBufferHeight:target.height; displayMaterial.bind(); if(config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize,1.0/w,1.0/h); gl.uniform1i(displayMaterial.uniforms.uTexture,dye.read.attach(0)); if(config.BLOOM) gl.uniform1i(displayMaterial.uniforms.uBloom,bloom.attach(1)); blit(target); }\n        function applyBloom(source,destination){ if(bloomFramebuffers.length<2) return; let last=destination; gl.disable(gl.BLEND); bloomPrefilterProgram.bind(); const knee=config.BLOOM_THRESHOLD*config.BLOOM_SOFT_KNEE+0.0001; gl.uniform3f(bloomPrefilterProgram.uniforms.curve,config.BLOOM_THRESHOLD-knee,knee*2,0.25/knee); gl.uniform1f(bloomPrefilterProgram.uniforms.threshold,config.BLOOM_THRESHOLD); gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture,source.attach(0)); blit(last); bloomBlurProgram.bind(); for(let i=0;i<bloomFramebuffers.length;i++){ const dest=bloomFramebuffers[i]; gl.uniform2f(bloomBlurProgram.uniforms.texelSize,last.texelSizeX,last.texelSizeY); gl.uniform1i(bloomBlurProgram.uniforms.uTexture,last.attach(0)); blit(dest); last=dest; } gl.blendFunc(gl.ONE,gl.ONE); gl.enable(gl.BLEND); for(let i=bloomFramebuffers.length-2;i>=0;i--){ const baseTex=bloomFramebuffers[i]; gl.uniform2f(bloomBlurProgram.uniforms.texelSize,last.texelSizeX,last.texelSizeY); gl.uniform1i(bloomBlurProgram.uniforms.uTexture,last.attach(0)); gl.viewport(0,0,baseTex.width,baseTex.height); blit(baseTex); last=baseTex; } gl.disable(gl.BLEND); bloomFinalProgram.bind(); gl.uniform2f(bloomFinalProgram.uniforms.texelSize,last.texelSizeX,last.texelSizeY); gl.uniform1i(bloomFinalProgram.uniforms.uTexture,last.attach(0)); gl.uniform1f(bloomFinalProgram.uniforms.intensity,config.BLOOM_INTENSITY); blit(destination); }\n\n        let lastUpdateTime=performance.now(); let colorUpdateTimer=0.0;\n        function calcDeltaTime(now){ let dt=(now-lastUpdateTime)/1000; if(!(dt>0)) dt=0; dt=Math.min(dt,0.033); lastUpdateTime=now; return dt; }\n        function resizeCanvas(){ const dpr=Math.min(window.devicePixelRatio||1,2); const w=Math.floor(canvas.clientWidth*dpr); const h=Math.floor(canvas.clientHeight*dpr); if(canvas.width!==w||canvas.height!==h){ canvas.width=w; canvas.height=h; return true; } return false; }\n        function updateColors(dt){ colorUpdateTimer+=dt*config.COLOR_UPDATE_SPEED; if(colorUpdateTimer>=1){ colorUpdateTimer%=1; pointers.forEach(p=>p.color=generateColor()); } }\n        function applyInputs(){ if(splatStack.length>0) multipleSplats(splatStack.pop()); pointers.forEach(p=>{ if(p.moved){ p.moved=false; splatPointer(p); } }); }\n\n        let autoT=Math.random()*1000; let autoAccum=0; let autoPrev=autoT;\n        const AUTO_PAINT_INTERVAL=0.05; const AUTO_DYE_SCALE=0.85;\n        const AUTO_EMITTERS=[{ax:0.40,ay:0.34,fx:0.43,fy:0.31,phx:0.0,phy:1.3},{ax:0.36,ay:0.30,fx:0.27,fy:0.52,phx:2.1,phy:0.4},{ax:0.30,ay:0.38,fx:0.61,fy:0.23,phx:4.0,phy:2.7}];\n        function autoPos(e,t){ return {x:0.5+e.ax*Math.sin(t*e.fx+e.phx)*Math.cos(t*e.fy*0.6+e.phy),y:0.5+e.ay*Math.sin(t*e.fy+e.phy)}; }\n        function autoPaintStep(dt){ autoT+=dt*0.62; autoAccum+=dt; if(autoAccum<AUTO_PAINT_INTERVAL) return; const span=autoAccum; autoAccum=0; const inv=span>0?(1.0/span):0.0; for(const e of AUTO_EMITTERS){ const p=autoPos(e,autoT),pp=autoPos(e,autoPrev); const dx=(p.x-pp.x)*inv*config.SPLAT_FORCE*0.30; const dy=(p.y-pp.y)*inv*config.SPLAT_FORCE*0.30; const color=generateColor(); color.r*=AUTO_DYE_SCALE; color.g*=AUTO_DYE_SCALE; color.b*=AUTO_DYE_SCALE; splat(p.x,p.y,dx,dy,color); } autoPrev=autoT; }\n\n        let idleTimer=0;\n        function frame(now){ const dt=calcDeltaTime(now); if(resizeCanvas()) initFramebuffers(); tweenStep(); updateColors(dt); applyInputs(); if(!pointers[0].down) idleTimer+=dt; else idleTimer=0; const doAuto=config.AUTO_PAINT||(idleTimer>5&&!reduceMotion)||reduceMotion; if(!config.PAUSED){ if(doAuto) autoPaintStep(dt); step(dt); } render(null); }\n        function update(now){ frame(typeof now==='number'?now:performance.now()); requestAnimationFrame(update); }\n\n        // ---- global hover painting (alive everywhere) ----\n        function clientToCanvas(cx,cy){ const r=canvas.getBoundingClientRect(); return {x:(cx-r.left)*(canvas.width/r.width),y:(cy-r.top)*(canvas.height/r.height)}; }\n        let lastMove=0;\n        window.addEventListener('mousemove',e=>{ const now=performance.now(); if(now-lastMove<16) {} const pt=pointers[0]; const p=clientToCanvas(e.clientX,e.clientY); if(!pt.down){ pt.prevTexcoordX=pt.texcoordX||(p.x/canvas.width); pt.prevTexcoordY=pt.texcoordY||(1-p.y/canvas.height); } updatePointerMove(pt,p.x,p.y); if(!pt.down && pt.moved){ const dx=pt.deltaX*config.SPLAT_FORCE*0.42; const dy=pt.deltaY*config.SPLAT_FORCE*0.42; const c=pt.color; splat(pt.texcoordX,pt.texcoordY,dx,dy,{r:c.r*0.45,g:c.g*0.45,b:c.b*0.45}); pt.moved=false; } lastMove=now; });\n        window.addEventListener('mousedown',e=>{ const p=clientToCanvas(e.clientX,e.clientY); updatePointerDown(pointers[0],-1,p.x,p.y); clickSplat(pointers[0]); });\n        window.addEventListener('mouseup',()=>pointers[0].down=false);\n        window.addEventListener('touchstart',e=>{ const t=e.targetTouches[0]; if(!t) return; const p=clientToCanvas(t.clientX,t.clientY); updatePointerDown(pointers[0],-1,p.x,p.y); clickSplat(pointers[0]); },{passive:true});\n        window.addEventListener('touchmove',e=>{ const t=e.targetTouches[0]; if(!t) return; const p=clientToCanvas(t.clientX,t.clientY); updatePointerMove(pointers[0],p.x,p.y); },{passive:true});\n        window.addEventListener('touchend',()=>pointers[0].down=false);\n        document.addEventListener('visibilitychange',()=>{ if(!document.hidden) lastUpdateTime=performance.now(); });\n\n        function drawFallback(){ const ctx=canvas.getContext('2d'); if(!ctx) return; function fit(){canvas.width=innerWidth;canvas.height=innerHeight;} fit(); window.addEventListener('resize',fit); const g=ctx.createRadialGradient(innerWidth*0.5,innerHeight*0.45,40,innerWidth*0.5,innerHeight*0.45,Math.max(innerWidth,innerHeight)*0.7); g.addColorStop(0,'#3a2b8c'); g.addColorStop(0.5,'#7a1c8a'); g.addColorStop(1,'#06070e'); ctx.fillStyle=g; ctx.fillRect(0,0,innerWidth,innerHeight); }\n\n        resizeCanvas(); initFramebuffers();\n        function seed(){ const bursts=reduceMotion?14:11; for(let i=0;i<bursts;i++){ const color=generateColor(); color.r*=8; color.g*=8; color.b*=8; const ang=(i/bursts)*Math.PI*2+Math.random()*0.6; const rad=0.10+(i/bursts)*0.30; const x=0.5+Math.cos(ang)*rad; const y=0.5+Math.sin(ang)*rad*0.9; const dx=-Math.sin(ang)*900+(Math.random()-0.5)*300; const dy=Math.cos(ang)*900+(Math.random()-0.5)*300; splat(x,y,dx,dy,color); } }\n        seed();\n        requestAnimationFrame(update);\n\n        // ---- public API ----\n        window.INK = {\n          config, target,\n          toState(obj){\n            if(!obj) return;\n            if(typeof obj==='string') obj={palette:obj};\n            TWEEN_KEYS.forEach(k=>{ if(k in obj) target[k]=obj[k]; });\n            if(obj.palette && PALETTES[obj.palette]) paletteTgt=PALETTES[obj.palette].map(a=>a.slice());\n            if(obj.VELOCITY_DISSIPATION!=null) config.VELOCITY_DISSIPATION=obj.VELOCITY_DISSIPATION;\n          },\n          setNow(k,v){ if(k in config) config[k]=v; if(TWEEN_KEYS.includes(k)) target[k]=v; },\n          burst(n=10){ splatStack.push(n); },\n          // inject a directional splat at normalized coords (0..1, y down)\n          splatNorm(x,y,dx,dy,strength=1){ const color=generateColor(); color.r*=8*strength; color.g*=8*strength; color.b*=8*strength; splat(x,1.0-y,dx,dy,color); },\n          palettes:Object.keys(PALETTES),\n          isWebGL2:ext.isWebGL2, reduceMotion\n        };\n      })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      \"use strict\";\n      (function(){\n        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n        const coarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches;\n        const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));\n        const lerp=(a,b,t)=>a+(b-a)*t;\n        const $=(s,c=document)=>c.querySelector(s);\n        const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));\n        const INK=window.INK;\n\n        /* ---------- split kinetic text helpers (already authored in markup) ---------- */\n\n        /* ---------- per-word stagger delays ---------- */\n        $$('#manifesto .line, #cta h2').forEach(line=>{\n          $$('.word',line).forEach((w,i)=>w.style.setProperty('--d',(i*0.07)+'s'));\n        });\n\n        /* ---------- scroll-driven reveals (ticker-based, deterministic) ---------- */\n        let revealEls=$$('.reveal,.fade,.clipUp,.mask,.word').filter(el=>!el.closest('#hero'));\n        function revealStep(){\n          if(!revealEls.length) return;\n          const trig=innerHeight*0.86;\n          revealEls=revealEls.filter(el=>{ const r=el.getBoundingClientRect(); if(r.top<trig && r.bottom>0){ el.classList.add('in'); return false; } return true; });\n        }\n\n        function playHero(){\n          $$('#hero .reveal,#hero .fade,#hero .mask,#hero .clipUp').forEach((el,i)=>{\n            setTimeout(()=>el.classList.add('in'), 120 + i*90);\n          });\n          const hero=$('#hero'); if(hero) hero.classList.add('huddle');\n          const hud=$('#hudStatus'); if(hud&&INK) hud.textContent=(INK.isWebGL2?'WebGL2':'WebGL1')+' · live';\n        }\n\n        /* ---------- preloader ---------- */\n        const pre=$('#pre'), preCount=$('#preCount'), preBarI=$('#preBar i');\n        function runPreloader(done){\n          if(reduce){ pre.classList.add('gone'); done(); return; }\n          let p=0; const start=performance.now(); const dur=2100;\n          function tick(now){\n            const t=clamp((now-start)/dur,0,1);\n            // ease-out\n            const e=1-Math.pow(1-t,2.2);\n            p=Math.round(e*100);\n            preCount.textContent=p;\n            preBarI.style.width=(e*100)+'%';\n            if(t<1){ requestAnimationFrame(tick); }\n            else { setTimeout(()=>{ pre.classList.add('gone'); done(); }, 260); }\n          }\n          requestAnimationFrame(tick);\n        }\n\n        /* ---------- pointer tracking (for magnetic buttons only) ---------- */\n        let mx=innerWidth/2,my=innerHeight/2;\n        if(!coarse){ window.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; },{passive:true}); }\n        const magnets=$$('[data-magnetic]');\n        function magnetStep(){\n          if(coarse) return;\n          magnets.forEach(el=>{\n            const r=el.getBoundingClientRect();\n            const cx=r.left+r.width/2, cy=r.top+r.height/2;\n            const ddx=mx-cx, ddy=my-cy; const dist=Math.hypot(ddx,ddy);\n            if(dist<r.width*0.9){ el.style.transform=`translate(${ddx*0.26}px,${ddy*0.36}px)`; }\n            else { el.style.transform=''; }\n          });\n        }\n\n        /* ---------- scroll index ---------- */\n        const idxWrap=$('#idx');\n        if(idxWrap) idxWrap.innerHTML='';\n        const idxSections=$$('section[data-idx]').filter(s=>s.getAttribute('data-idx'));\n        idxSections.forEach((s,i)=>{\n          const it=document.createElement('div'); it.className='it';\n          it.innerHTML=`<span class=\"lab\">${s.getAttribute('data-idx')}</span><span class=\"pip\"></span>`;\n          it.addEventListener('click',()=>s.scrollIntoView({behavior:'smooth'}));\n          s._idxEl=it; idxWrap.appendChild(it);\n        });\n\n        /* ---------- count-ups ---------- */\n        let countsDone=false;\n        function runCounts(){\n          if(countsDone) return; countsDone=true;\n          $$('#spec [data-count]').forEach(el=>{\n            const tgt=parseFloat(el.getAttribute('data-count')); const start=performance.now(); const dur=1400;\n            function t(now){ const k=clamp((now-start)/dur,0,1); const e=1-Math.pow(1-k,3); el.firstChild ? el.textContent=Math.round(e*tgt) : null; el.textContent=Math.round(e*tgt); if(k<1) requestAnimationFrame(t); }\n            requestAnimationFrame(t);\n          });\n        }\n        const specIO=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ runCounts(); $$('#spec .spec').forEach(s=>s.classList.add('in')); specIO.disconnect(); } }); },{threshold:0.35});\n        if($('#spec')) specIO.observe($('#spec'));\n\n        /* ---------- TrueFocus band ---------- */\n        (function setupTrueFocus(){\n          const c=$('#trueFocus'); if(!c) return;\n          $$('.focus-word',c).forEach(el=>el.remove());\n          const frame=$('.focus-frame',c);\n          const words=(c.getAttribute('data-words')||'').split(' ').filter(Boolean);\n          const spans=words.map(w=>{ const s=document.createElement('span'); s.className='focus-word'; s.textContent=w; c.appendChild(s); return s; });\n          let idx=0, manual=false, manualIdx=0, active=false;\n          function place(i){ const el=spans[i]; if(!el) return; const pr=c.getBoundingClientRect(); const r=el.getBoundingClientRect();\n            frame.style.transform=`translate(${r.left-pr.left}px,${r.top-pr.top}px)`; frame.style.width=r.width+'px'; frame.style.height=r.height+'px'; frame.style.opacity='1';\n            spans.forEach((s,j)=>s.classList.toggle('active', j===i)); }\n          spans.forEach((s,i)=>{ s.addEventListener('mouseenter',()=>{ manual=true; manualIdx=i; place(i); }); s.addEventListener('mouseleave',()=>{ manual=false; }); });\n          const fio=new IntersectionObserver(es=>es.forEach(e=>{ active=e.isIntersecting; if(active) place(manual?manualIdx:idx); }),{threshold:0.4});\n          fio.observe(c);\n          setInterval(()=>{ if(!active||manual) return; idx=(idx+1)%spans.length; place(idx); }, 1900);\n          window.addEventListener('resize',()=>place(manual?manualIdx:idx),{passive:true});\n          setTimeout(()=>place(0),140);\n        })();\n\n        /* ---------- DIRECT states ---------- */\n        const directStates=[\n          { name:'Ink',   CURL:18, SPLAT_FORCE:3800, BLOOM_INTENSITY:0.85, DENSITY_DISSIPATION:0.74, palette:'ink',   desc:'Tight, vivid filaments over deep blue &mdash; the <span class=\"s\">signature</span> look.' },\n          { name:'Smoke', CURL:6,  SPLAT_FORCE:2600, BLOOM_INTENSITY:0.34, DENSITY_DISSIPATION:0.93, palette:'smoke', desc:'Slow, heavy, monochrome &mdash; <span class=\"s\">billowing</span> and soft.' },\n          { name:'Neon',  CURL:32, SPLAT_FORCE:5400, BLOOM_INTENSITY:1.28, DENSITY_DISSIPATION:0.68, palette:'neon',  desc:'Electric and luminous &mdash; <span class=\"s\">pure energy</span>.' },\n          { name:'Calm',  CURL:11, SPLAT_FORCE:2000, BLOOM_INTENSITY:0.55, DENSITY_DISSIPATION:0.82, palette:'calm',  desc:'A gentle teal drift &mdash; <span class=\"s\">quiet</span> and meditative.' },\n        ];\n        const directWord=$('#directWord');\n        const directDesc=$('#directDesc'), directBarI=$('#directBar i');\n        const m_curl=$('#m_curl'),m_force=$('#m_force'),m_bloom=$('#m_bloom'),m_fade=$('#m_fade');\n        const b_curl=$('#b_curl'),b_force=$('#b_force'),b_bloom=$('#b_bloom'),b_fade=$('#b_fade');\n        let lastPaletteIdx=0;\n        function swapWord(idx){\n          if(!directWord) return;\n          directWord.classList.add('out');\n          setTimeout(()=>{\n            directWord.textContent=directStates[idx].name;\n            directWord.classList.remove('out'); directWord.classList.add('inq');\n            // force reflow then animate in\n            void directWord.offsetWidth;\n            directWord.classList.remove('inq');\n          },260);\n        }\n        function updateDirect(p){\n          const n=directStates.length;\n          const sf=clamp(p,0,1)*(n-1);\n          const i0=Math.floor(sf), i1=Math.min(i0+1,n-1), f=sf-i0;\n          const a=directStates[i0], b=directStates[i1];\n          const cur=lerp(a.CURL,b.CURL,f), force=lerp(a.SPLAT_FORCE,b.SPLAT_FORCE,f), bloom=lerp(a.BLOOM_INTENSITY,b.BLOOM_INTENSITY,f), fade=lerp(a.DENSITY_DISSIPATION,b.DENSITY_DISSIPATION,f);\n          const palIdx=Math.round(sf);\n          if(INK){ INK.toState({CURL:cur,SPLAT_FORCE:force,BLOOM_INTENSITY:bloom,DENSITY_DISSIPATION:fade}); }\n          if(m_curl){ m_curl.textContent=Math.round(cur); m_force.textContent=Math.round(force); m_bloom.textContent=bloom.toFixed(2); m_fade.textContent=fade.toFixed(2); }\n          if(b_curl){ b_curl.style.width=clamp(cur/40*100,2,100)+'%'; b_force.style.width=clamp(force/6000*100,2,100)+'%'; b_bloom.style.width=clamp(bloom/1.4*100,2,100)+'%'; b_fade.style.width=clamp((fade-0.6)/0.35*100,2,100)+'%'; }\n          if(palIdx!==lastPaletteIdx){\n            if(INK) INK.toState({palette:directStates[palIdx].palette});\n            swapWord(palIdx);\n            directDesc.innerHTML=directStates[palIdx].desc;\n            lastPaletteIdx=palIdx;\n          }\n          if(directBarI) directBarI.style.width=(clamp(p,0,1)*100)+'%';\n        }\n        if(directWord) directWord.textContent=directStates[0].name;\n        updateDirect(0);\n\n        /* ---------- tension scrub ---------- */\n        const tensionLines=$$('#tension [data-scrub-lines] .ln > span');\n        function updateTension(p){\n          const n=tensionLines.length;\n          tensionLines.forEach((el,i)=>{\n            const seg=clamp((p*(n+0.5) - i),0,1);\n            const e=1-Math.pow(1-seg,3);\n            el.parentElement.style.transform=`translateY(${(1-e)*110}%)`;\n            el.parentElement.style.opacity=String(0.15+e*0.85);\n          });\n        }\n\n        /* ---------- pipeline scrub ---------- */\n        const pipeTrack=$('#pipeTrack');\n        function updatePipe(p){\n          if(!pipeTrack) return;\n          const max=pipeTrack.scrollWidth - innerWidth;\n          pipeTrack.style.transform=`translateX(${-clamp(p,0,1)*max}px)`;\n          $$('.pstage .pbar',pipeTrack).forEach((bar,i)=>{\n            const seg=clamp(p*8 - i,0,1);\n            bar.style.transform=`scaleX(${seg})`;\n          });\n        }\n        $$('.pstage .pbar').forEach(b=>b.style.transform='scaleX(0)');\n\n        /* ---------- fluid state by active section ---------- */\n        let lastFluidId='';\n        function fluidByActive(active){\n          if(!active||!INK) return;\n          if(active.id==='direct') return; // direct handled by its scrub\n          const d=active.getAttribute('data-fluid');\n          if(d && active.id!==lastFluidId){ try{ INK.toState(JSON.parse(d)); lastFluidId=active.id; }catch(e){} }\n        }\n\n        /* ---------- scroll velocity → fluid kick ---------- */\n        let lastScroll=window.scrollY, vel=0, kickAccum=0;\n\n        /* ---------- main ticker ---------- */\n        const prog=$('#prog');\n        const glassLens=$('#glassCard'), glassSec=$('#glass');\n        const pins={ tension:$('#tension'), reveal:$('#reveal'), direct:$('#direct') };\n        function pinProgress(sec){ if(!sec) return 0; const r=sec.getBoundingClientRect(); return clamp(-r.top/(r.height-innerHeight),0,1); }\n\n        function tick(){\n          magnetStep();\n          revealStep();\n          // scroll metrics\n          const sy=window.scrollY;\n          const docH=document.documentElement.scrollHeight-innerHeight;\n          prog.style.width=(clamp(sy/docH,0,1)*100)+'%';\n          vel=sy-lastScroll; lastScroll=sy;\n\n          // scroll-velocity fluid kick (subtle)\n          if(INK){\n            kickAccum+=Math.abs(vel);\n            if(kickAccum>240){ const yy=clamp(0.5 - (vel/innerHeight),0.05,0.95); const dir=Math.sign(vel)||1; INK.splatNorm(Math.random()*0.9+0.05, yy, (Math.random()-0.5)*700, dir*460, 0.45); kickAccum=0; }\n          }\n\n          // glass lens parallax\n          if(glassLens && glassSec && !coarse){ const r=glassSec.getBoundingClientRect(); if(r.bottom>0 && r.top<innerHeight){ const ox=(mx-innerWidth/2)/innerWidth, oy=(my-innerHeight/2)/innerHeight; glassLens.style.transform=`translate(${ox*18}px,${oy*14}px)`; } }\n\n          // pins\n          updateTension(pinProgress(pins.tension));\n          const rP=pinProgress(pins.reveal);\n          updatePipe(rP);\n          // hide the index rail while the horizontal pipeline is pinned (it overlaps)\n          idxWrap.classList.toggle('hide', rP>0.01 && rP<0.99);\n          const dP=pinProgress(pins.direct);\n          if(dP>0 && dP<1){ lastFluidId='direct-active'; }\n          updateDirect(dP);\n\n          // active section for index + fluid\n          const center=innerHeight/2; let active=null, best=1e9;\n          idxSections.forEach(s=>{ const r=s.getBoundingClientRect(); const c=r.top+r.height/2; const d=Math.abs(c-center); if(r.top<center && r.bottom>center){ if(d<best){ best=d; active=s; } } });\n          idxSections.forEach(s=>{ if(s._idxEl) s._idxEl.classList.toggle('on', s===active); });\n          fluidByActive(active);\n\n          requestAnimationFrame(tick);\n        }\n\n        /* ---------- boot ---------- */\n        window.addEventListener('load',()=>{},{once:true});\n        runPreloader(()=>{ playHero(); });\n        requestAnimationFrame(tick);\n\n        // recompute pipe max on resize\n        window.addEventListener('resize',()=>{ updatePipe(pinProgress(pins.reveal)); },{passive:true});\n\n        // expose for verification\n        window.__inkReady=true;\n      })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function(){var map={Ink:{n:'Casement',d:\"Heavy-duty up to 2.5mm multi-chamber casement frame — the <span class='s'>signature</span> specification.\",img:'/pics/casement.webp',alt:'60 Series uPVC casement window',f:[['Opening','Inward / outward'],['Series','60 · Casement'],['Locking','4-point CHUGN'],['Glazing','24mm double']]},Smoke:{n:'Sliding',d:\"80-Series 3-track sliding profile — <span class='s'>smooth</span> and space-saving.\",img:'/pics/sliding.webp',alt:'80 Series uPVC 3-track sliding window',f:[['Track','3-track 80 Series'],['Panels','2 – 4 sashes'],['Rollers','Steel bearing'],['Glazing','24mm double']]},Neon:{n:'Tilt & Turn',d:\"Dual-action European hinge mechanism — <span class='s'>versatile</span> ventilation.\",img:'/pics/tilt and turn.png',alt:'uPVC tilt and turn window tilted open',f:[['Action','Tilt + turn'],['Series','60 · European'],['Hardware','Multi-point gear'],['Ventilation','Secure tilt gap']]},Calm:{n:'Arch',d:\"Custom curved radius extrusion — <span class='s'>architectural</span> elegance.\",img:'/pics/arch.webp',alt:'Arched uPVC window with curved radius profile',f:[['Profile','Curved radius'],['Type','Fixed or openable'],['Forming','Factory bent'],['Finish','Anti-UV white']]}};var w=document.getElementById('directWord'),d=document.getElementById('directDesc'),im=document.getElementById('directImg'),fx=document.getElementById('dpFacts');if(!w) return;function rows(a){var s='';for(var i=0;i<a.length;i++){s+=\"<div><div style='font-family:var(--mono);font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--faint);'>\"+a[i][0]+\"</div><div style='font-size:14px;font-weight:500;letter-spacing:-0.01em;margin-top:5px;'>\"+a[i][1]+\"</div></div>\";}return s;}function fix(){var k=(w.textContent||'').trim();var m=map[k];if(!m)return;w.textContent=m.n;if(d)d.innerHTML=m.d;if(fx)fx.innerHTML=rows(m.f);if(im&&im.getAttribute('src')!==m.img){im.style.opacity='0';setTimeout(function(){im.src=m.img;im.alt=m.alt;im.style.opacity='1';},200);}}new MutationObserver(fix).observe(w,{childList:true,characterData:true,subtree:true});fix();})();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "";
const sourceBodyStyle = "";
const inlineEventAttributeNames = [
  "click",
  "change",
  "input",
  "submit",
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "keydown",
  "keyup",
  "focus",
  "blur"
];

function applyElementAttributes(element, attributes) {
  const previousId = element.id;
  const previousClassName = element.className;
  const previousStyleAttribute = element.getAttribute("style");

  if (attributes.id) {
    element.id = attributes.id;
  }
  attributes.className
    .split(/\s+/)
    .filter(Boolean)
    .forEach((className) => element.classList.add(className));
  if (attributes.style) {
    element.style.cssText = [element.style.cssText, attributes.style]
      .filter(Boolean)
      .join("; ");
  }

  return () => {
    element.id = previousId;
    element.className = previousClassName;
    if (previousStyleAttribute === null) {
      element.removeAttribute("style");
    } else {
      element.setAttribute("style", previousStyleAttribute);
    }
  };
}

function applySourceRootAttributes() {
  const restoreHtml = applyElementAttributes(document.documentElement, {
    id: sourceHtmlId,
    className: sourceHtmlClassName,
    style: sourceHtmlStyle,
  });
  const restoreBody = applyElementAttributes(document.body, {
    id: sourceBodyId,
    className: sourceBodyClassName,
    style: sourceBodyStyle,
  });

  return () => {
    restoreBody();
    restoreHtml();
  };
}

function attachInlineEventHandlers(root) {
  const cleanups = [];

  inlineEventAttributeNames.forEach((eventName) => {
    root
      .querySelectorAll(`[data-aura-on${eventName}]`)
      .forEach((element) => {
        const handlerCode = element.getAttribute(`data-aura-on${eventName}`);
        if (!handlerCode) return;

        const listener = function (event) {
          const result = Function("event", handlerCode).call(element, event);
          if (result === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
        element.addEventListener(eventName, listener);
        cleanups.push(() => element.removeEventListener(eventName, listener));
      });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function appendSourceScript(scriptInfo) {
  const script = document.createElement("script");
  if (scriptInfo.id) script.id = scriptInfo.id;
  if (scriptInfo.type) script.type = scriptInfo.type;
  if (scriptInfo.async) script.async = true;
  if (scriptInfo.defer) script.defer = true;
  if (scriptInfo.src) {
    script.src = scriptInfo.src;
  } else if (scriptInfo.content) {
    script.textContent = scriptInfo.content;
  }
  document.body.appendChild(script);
  return script;
}

const showcaseItems = [
  {
    id: "welded-corner",
    num: "01",
    label: "CORNER FUSION WELD",
    category: "frame",
    headline: "Stronger than the profile itself.",
    body: "Frame corners are heat-fused, not screwed. One continuous joint, zero gap for water or dust — and a weld line stronger than the uPVC around it.",
    img: "/pic/1-welding.webp",
    size: "medium"
  },
  {
    id: "multi-chamber",
    num: "02",
    label: "2.2–2.5MM MULTI-CHAMBER FRAME",
    category: "frame",
    headline: "Built to never warp in the sun.",
    body: "Internal reinforcing chambers keep the frame rigid under direct, sustained heat — the difference between a window that holds its shape for twenty years and one that sags after five.",
    img: "/pic/2-multichamber.webp",
    size: "medium"
  },
  {
    id: "chugn-handle",
    num: "03",
    label: "MACHINED ZINC-ALLOY",
    category: "hardware",
    headline: "A decade of daily use, one smooth motion.",
    body: "CHUGN handles are machined, not molded — a weighted, precise action that stays tight instead of loosening with every open and close.",
    img: "/pic/3-chugn-handle.webp",
    size: "medium"
  },
  {
    id: "multipoint-lock",
    num: "04",
    label: "MULTI-POINT LOCKING",
    category: "hardware",
    headline: "One turn. Every point secured.",
    body: "A single motion of the handle drives bolts along the full frame edge — real perimeter security, not just a latch at the handle.",
    img: "/pic/4-chugn-multipoint-strip.webp",
    size: "medium"
  },
  {
    id: "sliding-roller",
    num: "05",
    label: "TANDEM-BEARING ROLLERS",
    category: "hardware",
    headline: "Glides like day one, years in.",
    body: "Load-rated wheel assemblies keep wide sliding panels moving smoothly long after installation — no dragging, no dropped track.",
    img: "/pic/5-chugn-sliding-roller.webp",
    size: "medium"
  },
  {
    id: "insulation-gap",
    num: "06",
    label: "DOUBLE-GLAZED UNIT",
    category: "glazing",
    headline: "Heat and noise, kept outside.",
    body: "Two panes and a sealed air gap block up to 40dB of outside noise and cut heat transfer through the glass — quieter rooms, cooler in summer.",
    img: "/pic/6-insulation-gap.webp",
    size: "medium"
  },
  {
    id: "weatherseal-gasket",
    num: "07",
    label: "RUBBER WEATHERSEAL",
    category: "glazing",
    headline: "Airtight, all the way around.",
    body: "A continuous gasket seals the full sash perimeter against dust, rain, and drafts — sealed tight even in high wind.",
    img: "/pic/7-gasket.webp",
    size: "medium"
  },
  {
    id: "complete-window",
    num: "08",
    label: "GENUINE PEARL SYSTEM",
    category: "complete",
    headline: "Complete, precision-assembled window.",
    body: "When all these engineered components come together, you get a zero-maintenance window built for decades of Pakistan's extreme weather resilience.",
    img: "/pic/window.webp",
    size: "hero"
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [quoteOk, setQuoteOk] = useState(false);
  const [activeShowcaseFilter, setActiveShowcaseFilter] = useState("all");
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const gridShowcaseItems = showcaseItems.filter(item => item.id !== "complete-window");
  const completeWindowItem = showcaseItems.find(item => item.id === "complete-window");

  const filteredGridItems = (activeShowcaseFilter === "all" || activeShowcaseFilter === "complete")
    ? gridShowcaseItems
    : gridShowcaseItems.filter(item => item.category === activeShowcaseFilter);

  const openModal = (index) => setActiveModalIndex(index);
  const closeModal = () => setActiveModalIndex(null);
  const prevModal = () => setActiveModalIndex((prev) => (prev > 0 ? prev - 1 : filteredGridItems.length - 1));
  const nextModal = () => setActiveModalIndex((prev) => (prev < filteredGridItems.length - 1 ? prev + 1 : 0));


  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const city = formData.get("city") || "";
    const details = formData.get("details") || "";

    const text = `Hello Pearl Window Systems,%0A%0A*New Quote Request from Website:*%0A• *Name:* ${encodeURIComponent(name)}%0A• *Phone:* ${encodeURIComponent(phone)}%0A• *City:* ${encodeURIComponent(city)}${details ? `%0A• *Project Details:* ${encodeURIComponent(details)}` : ""}`;

    window.open(`https://wa.me/923135822087?text=${text}`, "_blank");
    setQuoteOk(true);
  };

  useLayoutEffect(() => applySourceRootAttributes(), []);

  useEffect(() => {
    const detachInlineEventHandlers = attachInlineEventHandlers(document);
    const appendedScripts = sourceScripts
      .filter((scriptInfo) => scriptInfo.src || scriptInfo.content)
      .map(appendSourceScript);

    return () => {
      detachInlineEventHandlers();
      appendedScripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div className="aura-source-body">
      <canvas id="c"></canvas>
      <div id="vig"></div>
      <div id="scrim"></div>
      <div id="grain"></div>


      <div id="prog"></div>
      <div id="idx"></div>


      <div id="pre">
        <div id="preCount">0</div>
        <div id="preWord">
          German spec
          <br />
          Rendered live
        </div>
        <div id="preBar"><i></i></div>
      </div>


      <nav>
        <div className="brand">
          <img loading="lazy" src="/logo.png" alt="Pearl Window Systems" style={{ "height": "54px", "width": "auto", "display": "block" }} />
        </div>
        <div className="navr">
          <a href="#showcase" className="h">System</a>
          <a href="#spec" className="h">Specs</a>
          <a href="#glass" className="h">Types</a>
          <a href="#embed" className="h">Catalog</a>
          <a href="#faq" className="h">FAQ</a>
          <a href="https://wa.me/923122220087">WhatsApp</a>
          <a href="#cta">Get a Quote</a>
        </div>
      </nav>

      <main>

        <section id="hero" data-idx="Hero" data-fluid="&#123;&quot;CURL&quot;:16,&quot;SPLAT_FORCE&quot;:3600,&quot;BLOOM_INTENSITY&quot;:0.85,&quot;DENSITY_DISSIPATION&quot;:0.74,&quot;palette&quot;:&quot;ink&quot;&#125;">
          <div id="heroHud">
            <span className="bracket tl"></span>
            <span className="bracket tr"></span>
            <span className="bracket bl"></span>
            <span className="bracket br"></span>
          </div>
          <div className="wrap">
            <div className="eyebrow reveal">European standard EN 13245 certified</div>
            <h1>
              <span className="mask"><span data-stagger="">PEARL</span></span>
              <span className="mask" style={{ "fontSize": "0.26em", "letterSpacing": "-0.03em", "lineHeight": "1" }}>
                <span>
                  <span style={{ "color": "#3f8cff" }}>WINDOW</span>{" "}
                  <span style={{ "color": "#e0242c" }}>SYSTEMS</span>
                  <span style={{ "color": "#e0242c" }}>.</span>
                </span>
              </span>
            </h1>
            <div className="reveal" style={{ "marginTop": "16px", "display": "inline-block", "fontFamily": "var(--display)", "fontWeight": "600", "textTransform": "uppercase", "letterSpacing": "0.06em", "fontSize": "clamp(14px,1.8vw,22px)", "background": "var(--grad)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "WebkitTextFillColor": "transparent" }}>
              Windows that shine like a Pearl.
            </div>
            <div className="sub">
              <div className="lede reveal">
                German-standard uPVC window &amp; door systems. Built for{" "}
                <strong style={{ "fontWeight": "600", "color": "#ffc85c" }}>
                  Pakistan’s sun &amp; monsoon climate
                </strong>
                .
              </div>
              <div className="reveal" style={{ "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "gap": "14px" }}>
                <div className="meta">
                  Up to 2.5mm wall thickness
                  <br />
                  10-year fade guarantee
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="showcase" data-idx="Showcase" data-fluid="&#123;&quot;CURL&quot;:15,&quot;SPLAT_FORCE&quot;:3400,&quot;BLOOM_INTENSITY&quot;:0.9,&quot;DENSITY_DISSIPATION&quot;:0.74,&quot;palette&quot;:&quot;ink&quot;&#125;">
          <div className="wrap">
            <div className="showcase-header">
              <div className="eyebrow reveal">THE SYSTEM, UP CLOSE</div>
              <div className="showcase-header-content">
                <div>
                  <h2 className="reveal" style={{ fontWeight: "500", letterSpacing: "-0.035em", fontSize: "clamp(30px,5vw,64px)", lineHeight: "1.05" }}>
                    Every part, <span className="g">engineered</span> for a reason.
                  </h2>
                </div>
                <p className="lead reveal" style={{ color: "var(--muted)", maxWidth: "42ch", fontSize: "clamp(15px,1.5vw,18px)" }}>
                  It isn't one feature that makes Pearl last twenty years. It's every joint, seal, and alloy working together. Here's what's actually inside.
                </p>
              </div>

              <div className="showcase-filters reveal">
                <button
                  className={`showcase-filter-btn ${activeShowcaseFilter === "all" ? "active" : ""}`}
                  onClick={() => setActiveShowcaseFilter("all")}
                >
                  All Components ({gridShowcaseItems.length})
                </button>
                <button
                  className={`showcase-filter-btn ${activeShowcaseFilter === "frame" ? "active" : ""}`}
                  onClick={() => setActiveShowcaseFilter("frame")}
                >
                  Frame &amp; Fusion
                </button>
                <button
                  className={`showcase-filter-btn ${activeShowcaseFilter === "hardware" ? "active" : ""}`}
                  onClick={() => setActiveShowcaseFilter("hardware")}
                >
                  CHUGN® Hardware
                </button>
                <button
                  className={`showcase-filter-btn ${activeShowcaseFilter === "glazing" ? "active" : ""}`}
                  onClick={() => setActiveShowcaseFilter("glazing")}
                >
                  Seals &amp; Glazing
                </button>
                <button
                  className={`showcase-filter-btn ${activeShowcaseFilter === "complete" ? "active" : ""}`}
                  onClick={() => setActiveShowcaseFilter("complete")}
                >
                  Complete Unit
                </button>
              </div>
            </div>

            {activeShowcaseFilter !== "complete" && (
              <div className="showcase-grid reveal">
                {filteredGridItems.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="showcase-card showcase-card-medium"
                      onClick={() => openModal(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="showcase-card-inner">
                        <div className="showcase-img-container">
                          <div className="showcase-tag">
                            <span className="showcase-tag-dot"></span>
                            {item.label}
                          </div>
                          <div className="showcase-num">PART {item.num}</div>
                          <img
                            src={item.img}
                            alt={item.headline}
                            className="showcase-img"
                            loading="lazy"
                          />
                          <div className="showcase-img-overlay"></div>
                        </div>

                        <div className="showcase-body">
                          <div>
                            <h3 className="showcase-card-title">{item.headline}</h3>
                            <p className="showcase-card-text" style={{ marginTop: "10px" }}>
                              {item.body}
                            </p>
                          </div>

                          <div className="showcase-inspect-btn">
                            Inspect Part
                            <span className="showcase-inspect-icon">↗</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {(activeShowcaseFilter === "all" || activeShowcaseFilter === "complete") && completeWindowItem && (
              <div className="showcase-hero-feature reveal">
                <div className="showcase-hero-feature-inner">
                  <div className="showcase-hero-feature-header">
                    <div className="showcase-tag" style={{ position: "static" }}>
                      <span className="showcase-tag-dot"></span>
                      {completeWindowItem.label}
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--faint)", textTransform: "uppercase" }}>
                      FULL SYSTEM ASSEMBLY
                    </div>
                  </div>

                  <div className="showcase-hero-feature-body">
                    <div className="showcase-hero-feature-img-wrap">
                      <img
                        src={completeWindowItem.img}
                        alt={completeWindowItem.headline}
                        className="showcase-hero-feature-img"
                      />
                    </div>

                    <div className="showcase-hero-feature-info">
                      <div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--faint)", textTransform: "uppercase" }}>
                          Component {completeWindowItem.num} of 08
                        </div>
                        <h3 style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: "600", marginTop: "10px", color: "#fff", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
                          {completeWindowItem.headline}
                        </h3>
                        <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--muted)", marginTop: "16px", maxWidth: "46ch" }}>
                          {completeWindowItem.body}
                        </p>
                      </div>

                      <div>
                        <div style={{ padding: "18px 22px", borderRadius: "16px", background: "rgba(47,107,255,0.06)", border: "1px solid rgba(47,107,255,0.18)" }}>
                          <div style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.14em", color: "#3f8cff", textTransform: "uppercase" }}>
                            Standard Specification
                          </div>
                          <div style={{ fontSize: "13.5px", color: "#fff", marginTop: "6px", lineHeight: "1.4" }}>
                            Factory-certified component in every Pearl Windows profile unit.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="showcase-banner reveal">
              <div className="showcase-banner-left">
                <div className="showcase-banner-badge">✓</div>
                <div className="showcase-banner-text">
                  Every part above ships on every genuine Pearl Windows profile — not an upgrade, the standard.
                </div>
              </div>
              <a href="#cta" className="faq-cta">
                <span>Request Quotation</span>
              </a>
            </div>
          </div>

          {activeModalIndex !== null && (
            <div className="showcase-modal-overlay" onClick={closeModal}>
              <div className="showcase-modal" onClick={(e) => e.stopPropagation()}>
                <div className="showcase-modal-header">
                  <div className="showcase-tag" style={{ position: "static" }}>
                    <span className="showcase-tag-dot"></span>
                    {filteredGridItems[activeModalIndex].label}
                  </div>
                  <button className="showcase-modal-close" onClick={closeModal} aria-label="Close modal">
                    ✕
                  </button>
                </div>

                <div className="showcase-modal-body">
                  <div className="showcase-modal-img-wrap">
                    <img
                      src={filteredGridItems[activeModalIndex].img}
                      alt={filteredGridItems[activeModalIndex].headline}
                      className="showcase-modal-img"
                    />
                  </div>

                  <div className="showcase-modal-info">
                    <div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--faint)", textTransform: "uppercase" }}>
                        Component {filteredGridItems[activeModalIndex].num} of 08
                      </div>
                      <h3 style={{ fontSize: "clamp(22px, 2vw, 30px)", fontWeight: "600", marginTop: "8px", color: "#fff", lineHeight: "1.2" }}>
                        {filteredGridItems[activeModalIndex].headline}
                      </h3>
                      <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--muted)", marginTop: "16px" }}>
                        {filteredGridItems[activeModalIndex].body}
                      </p>
                    </div>

                    <div>
                      <div style={{ padding: "16px", borderRadius: "16px", background: "rgba(47,107,255,0.06)", border: "1px solid rgba(47,107,255,0.18)" }}>
                        <div style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.12em", color: "#3f8cff", textTransform: "uppercase" }}>
                          Standard Specification
                        </div>
                        <div style={{ fontSize: "13px", color: "#fff", marginTop: "4px" }}>
                          Factory-certified component in every Pearl Windows profile unit.
                        </div>
                      </div>

                      <div className="showcase-modal-nav">
                        <button className="showcase-nav-btn" onClick={prevModal}>
                          ← Previous Part
                        </button>
                        <button className="showcase-nav-btn" onClick={nextModal}>
                          Next Part →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>


        <section id="focus" data-idx="Focus" data-fluid="&#123;&quot;CURL&quot;:10,&quot;SPLAT_FORCE&quot;:2400,&quot;BLOOM_INTENSITY&quot;:0.5,&quot;DENSITY_DISSIPATION&quot;:0.82,&quot;palette&quot;:&quot;ash&quot;&#125;">
          <div className="wrap">
            <div className="focus-container" id="trueFocus" data-words="Engineered. Certified. Permanent.">
              <div className="focus-frame">
                <span className="corner tlc"></span>
                <span className="corner trc"></span>
                <span className="corner blc"></span>
                <span className="corner brc"></span>
              </div>
            </div>
            <div className="sublabel reveal">Three promises. One profile.</div>
          </div>
        </section>


        <section id="tension" className="pin" data-idx="Idea" data-fluid="&#123;&quot;CURL&quot;:7,&quot;SPLAT_FORCE&quot;:2400,&quot;BLOOM_INTENSITY&quot;:0.4,&quot;DENSITY_DISSIPATION&quot;:0.9,&quot;palette&quot;:&quot;ash&quot;&#125;" style={{ "height": "280vh" }}>
          <div className="pinStick">
            <div className="wrap">
              <div className="big" data-scrub-lines="">
                <div className="ln">
                  <span className="dim">Most windows in Pakistan</span>
                </div>
                <div className="ln">
                  <span className="dim">chalk, yellow, and warp</span>
                </div>
                <div className="ln">
                  under the{" "}
                  <span className="s" style={{ "color": "rgb(255, 180, 92)" }}>
                    summer sun.
                  </span>
                </div>
                <div className="ln" style={{ "marginTop": "0.4em" }}>
                  Pearl Windows is{" "}
                  <span className="g">built to outlast.</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="reveal" className="pin" data-idx="Physics" data-fluid="&#123;&quot;CURL&quot;:22,&quot;SPLAT_FORCE&quot;:4200,&quot;BLOOM_INTENSITY&quot;:1.0,&quot;DENSITY_DISSIPATION&quot;:0.72,&quot;palette&quot;:&quot;ink&quot;&#125;" style={{ "height": "520vh" }}>
          <div className="pinStick">
            <div id="pipeHead">
              <div className="wrap">
                <div className="eyebrow">
                  The pipeline · 8 steps from drawing to installation
                </div>
                <div className="big" style={{ "fontSize": "clamp(28px,4.4vw,64px)" }}>
                  It’s{" "}
                  <span className="g">physics &amp; engineering.</span>
                </div>
              </div>
            </div>
            <div id="pipeTrack">
              <div className="pstage">
                <div className="pn">STAGE 01</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M28 28 q0-7 7-7 q11 0 11 12 q0 15-18 15 q-22 0-22-23"></path>
                    <circle cx="28" cy="28" r="2.4" fill="currentColor" stroke="none"></circle>
                  </svg>
                </div>
                <div className="pt"><span className="g">Consult</span></div>
                <div className="pd">
                  Inspect live profile display units at our Islamabad showroom.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 02</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 32 a12 12 0 1 1 7 9"></path>
                    <path d="M23 41 l-7 2 l1.5-7.5"></path>
                    <path d="M40 24 a12 12 0 0 0-7-9" opacity="0.5"></path>
                  </svg>
                </div>
                <div className="pt"><span className="g">Spec Matrix</span></div>
                <div className="pd">
                  Select 60-Series Casement or 80-Series Sliding per drawing.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 03</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="28" cy="28" r="2.6" fill="currentColor" stroke="none"></circle>
                    <path d="M28 22V12M28 12l-3 3M28 12l3 3"></path>
                    <path d="M28 34v10M28 44l-3-3M28 44l3-3"></path>
                    <path d="M22 28H12M12 28l3-3M12 28l3 3"></path>
                    <path d="M34 28h10M44 28l-3-3M44 28l3 3"></path>
                  </svg>
                </div>
                <div className="pt"><span className="g">Extrusion</span></div>
                <div className="pd">
                  Imported genuine factory-stamped anti-UV uPVC lengths.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 04</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="28" cy="28" r="4"></circle>
                    <circle cx="28" cy="28" r="11" opacity="0.7"></circle>
                    <circle cx="28" cy="28" r="18" opacity="0.4"></circle>
                  </svg>
                </div>
                <div className="pt"><span className="g">Reinforce</span></div>
                <div className="pd">
                  Up to 2.5mm multi-chamber wall structure eliminates thermal sag.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 05</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 34l8-6M10 34l9 1" opacity="0.5"></path>
                    <path d="M10 22h36M46 22l-5-4M46 22l-5 4"></path>
                    <path d="M10 34h28" opacity="0.5"></path>
                  </svg>
                </div>
                <div className="pt"><span className="g">Hardware</span></div>
                <div className="pd">
                  Fit CHUGN perimeter multi-point locking gear &amp; friction
                  stays.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 06</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 22q9-9 18 0t18 0"></path>
                    <path d="M8 34q9-9 18 0t18 0" opacity="0.6"></path>
                    <path d="M44 22l1-6M44 22l5-2"></path>
                  </svg>
                </div>
                <div className="pt"><span className="g">Double Glaze</span></div>
                <div className="pd">
                  Hermetically seal 24mm insulated glass units to block 40dB
                  noise.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 07</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M28 10c7 10 12 15 12 23a12 12 0 0 1-24 0c0-8 5-13 12-23z"></path>
                    <path d="M22 33a6 6 0 0 0 6 6" opacity="0.6"></path>
                  </svg>
                </div>
                <div className="pt"><span className="g">EN 13245</span></div>
                <div className="pd">
                  Audit against European standard EN 13245 quality benchmarks.
                </div>
                <div className="pbar"></div>
              </div>
              <div className="pstage">
                <div className="pn">STAGE 08</div>
                <div className="pdiag">
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="13" width="38" height="26" rx="3"></rect>
                    <path d="M22 46h12M28 39v7"></path>
                    <path d="M34 22l1.6 3.4L39 27l-3.4 1.6L34 32l-1.6-3.4L29 27l3.4-1.6z" fill="currentColor" stroke="none"></path>
                  </svg>
                </div>
                <div className="pt"><span className="g">Install</span></div>
                <div className="pd">
                  Precision installed nationwide across Pakistan by certified
                  teams.
                </div>
                <div className="pbar"></div>
              </div>
            </div>
          </div>
        </section>


        <section id="spec" data-idx="Specs" data-fluid="&#123;&quot;CURL&quot;:15,&quot;SPLAT_FORCE&quot;:3200,&quot;BLOOM_INTENSITY&quot;:0.7,&quot;DENSITY_DISSIPATION&quot;:0.76,&quot;palette&quot;:&quot;steel&quot;&#125;">
          <div className="wrap">
            <div className="eyebrow reveal" style={{ "marginBottom": "40px" }}>
              Built different
            </div>
            <div className="specGrid">
              <div className="spec" style={{ "--w": "92%" }}>
                <div className="num">
                  2.5
                  <span className="u">mm</span>
                </div>
                <div className="cap">Outer wall thickness (up to)</div>
                <div className="barwrap"><i></i></div>
              </div>
              <div className="spec" style={{ "--w": "100%" }}>
                <div className="num">
                  10
                  <span className="u">yr</span>
                </div>
                <div className="cap">Written UV fade warranty</div>
                <div className="barwrap"><i></i></div>
              </div>
              <div className="spec" style={{ "--w": "10%" }}>
                <div className="num">
                  40
                  <span className="u">dB</span>
                </div>
                <div className="cap">Noise reduction rating</div>
                <div className="barwrap"><i></i></div>
              </div>
              <div className="spec" style={{ "--w": "100%" }}>
                <div className="num">2004</div>
                <div className="cap">Established in Pakistan</div>
                <div className="barwrap"><i></i></div>
              </div>
            </div>
          </div>
          <div className="marq" style={{ "marginTop": "0" }}>
            <div className="track">
              <span>
                German specification
                <span className="o">·</span>
                EN 13245 certified
                <span className="o">·</span>
                Anti-UV formulation
                <span className="o">·</span>
                CHUGN hardware
                <span className="o">·</span>
                Zero warping
                <span className="o">·</span>
                Double glazed
                <span className="o">·</span>
                Islamabad showroom
                <span className="o">·</span>
                Nationwide installation
                <span className="o">·</span>
              </span>
              <span>
                German specification
                <span className="o">·</span>
                EN 13245 certified
                <span className="o">·</span>
                Anti-UV formulation
                <span className="o">·</span>
                CHUGN hardware
                <span className="o">·</span>
                Zero warping
                <span className="o">·</span>
                Double glazed
                <span className="o">·</span>
                Islamabad showroom
                <span className="o">·</span>
                Nationwide installation
                <span className="o">·</span>
              </span>
            </div>
          </div>
        </section>


        <section id="glass" data-idx="Glass" data-fluid="&#123;&quot;CURL&quot;:13,&quot;SPLAT_FORCE&quot;:3000,&quot;BLOOM_INTENSITY&quot;:0.85,&quot;DENSITY_DISSIPATION&quot;:0.78,&quot;palette&quot;:&quot;steel&quot;&#125;">
          <div className="gstick">
            <div className="glassCard reveal" id="glassCard">
              <div className="eyebrow">Window &amp; door portfolio</div>
              <h2>
                Every type, built on the same{" "}
                <span className="big" style={{ "fontSize": "inherit" }}>
                  <span className="g">system.</span>
                </span>
              </h2>
              <p>
                Casement, sliding, tilt &amp; turn, arch — all manufactured with
                factory-stamped Pearl uPVC profiles and CHUGN hardware.
              </p>
              <div style={{ "marginTop": "22px", "display": "grid", "gridTemplateColumns": "repeat(2,minmax(0,1fr))", "gap": "10px 24px", "fontFamily": "var(--mono)", "fontSize": "11.5px", "letterSpacing": "0.06em", "color": "var(--muted)" }}>
                <div>60 Series casement — in / out</div>
                <div>80 Series 3-track sliding</div>
                <div>60 Series European tilt &amp; turn</div>
                <div>Arched &amp; radius profiles</div>
                <div>Fixed lite (picture pane)</div>
                <div>French doors &amp; Panaview sliders</div>
              </div>
              <div className="gstats">
                <div>
                  <div className="gn">6</div>
                  <div className="gl">System types</div>
                </div>
                <div>
                  <div className="gn">24mm</div>
                  <div className="gl">Insulated glass unit</div>
                </div>
                <div>
                  <div className="gn">40dB</div>
                  <div className="gl">Noise reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="direct" className="pin" data-idx="Engine" style={{ "height": "440vh" }}>

          <div className="pinStick">
            <div className="wrap lg:pr-[36vw]" style={{ "width": "100%" }}>
              <div className="eyebrow" style={{ "marginBottom": "30px" }}>
                Select system — scroll to morph
              </div>
              <div id="directLabels">
                <div className="dMask">
                  <span id="directWord" className="g" style={{ "fontSize": "clamp(42px, 6.2vw, 110px)", "paddingRight": "0.15em", "display": "inline-block" }}>
                    Casement
                  </span>
                </div>
              </div>
              <div id="directDesc">
                Heavy-duty up to 2.5mm multi-chamber casement frame — the{" "}
                <span className="s">signature</span>{" "}
                specification.
              </div>
              <div id="directPanel" className="glass" style={{ "padding": "18px 20px" }}>
                <div id="dpFacts" style={{ "display": "grid", "gridTemplateColumns": "repeat(2,minmax(0,1fr))", "gap": "14px 24px" }}>
                  <div>
                    <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                      Opening
                    </div>
                    <div style={{ "fontSize": "14px", "fontWeight": "500", "letterSpacing": "-0.01em", "marginTop": "5px" }}>
                      Inward / outward
                    </div>
                  </div>
                  <div>
                    <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                      Series
                    </div>
                    <div style={{ "fontSize": "14px", "fontWeight": "500", "letterSpacing": "-0.01em", "marginTop": "5px" }}>
                      60 · Casement
                    </div>
                  </div>
                  <div>
                    <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                      Locking
                    </div>
                    <div style={{ "fontSize": "14px", "fontWeight": "500", "letterSpacing": "-0.01em", "marginTop": "5px" }}>
                      4-point CHUGN
                    </div>
                  </div>
                  <div>
                    <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                      Glazing
                    </div>
                    <div style={{ "fontSize": "14px", "fontWeight": "500", "letterSpacing": "-0.01em", "marginTop": "5px" }}>
                      24mm double
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="directBar"><i></i></div>
            <div id="directShot" className="hidden lg:block" style={{ "position": "absolute", "right": "clamp(100px,9.5vw,160px)", "top": "50%", "transform": "translateY(-50%)", "width": "min(30vw,440px)", "aspectRatio": "4/5", "borderRadius": "22px", "overflow": "hidden", "border": "1px solid var(--line)", "boxShadow": "0 40px 100px -40px rgba(0,0,0,0.8)", "background": "rgba(10,12,22,0.5)" }}>
              <img id="directImg" src="/pics/casement.webp" alt="60 Series uPVC casement window" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center", "display": "block", "transition": "opacity .45s var(--ease)" }} />
            </div>
          </div>
        </section>


        <section id="embed" data-idx="Embed">
          <div className="wrap">
            <div className="secHead">
              <div>
                <div className="eyebrow reveal">Technical spec matrix</div>
                <h2 className="reveal" style={{ "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "0.96", "fontSize": "clamp(36px,6.5vw,92px)" }}>
                  Every profile.
                  <br />
                  Every spec.
                </h2>
              </div>
              <p className="lead2 reveal">
                Real extrusion cross-section data, bar length weights, and
                official European certification documents.
              </p>
              <a href="/certs/Pearl%20Windows%20Technical%20sheet%20MES.pdf" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "marginTop": "20px", "padding": "14px 26px", "borderRadius": "100px", "background": "#0a0b10", "color": "#fff", "fontSize": "14px", "fontWeight": "500", "letterSpacing": "-0.01em" }}>
                Download Technical Spec Sheet PDF →
              </a>
            </div>
            <div className="grid2">
              <div className="device reveal" id="profileViewer">
                <div className="frame" style={{ "aspectRatio": "4/3", "background": "#fff" }}>
                  <div className="demobar">
                    <span className="dotr" style={{ "background": "#ff5f57" }}></span>
                    <span className="dotr" style={{ "background": "#febc2e" }}></span>
                    <span className="dotr" style={{ "background": "#28c840" }}></span>
                    <span id="diagramTitle" style={{ "marginLeft": "10px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#9aa2bd", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                      60 Series — Openable Outward Frame
                    </span>
                  </div>
                  <img id="diagramFrame" src="/profile-diagrams/openable-outer-frame.webp" alt="Pearl uPVC profile technical cross-section drawing" style={{ "position": "absolute", "left": "0", "right": "0", "top": "30px", "bottom": "0", "width": "100%", "height": "calc(100% - 30px)", "border": "0", "background": "#fff", "objectFit": "contain", "display": "block", "padding": "16px" }} />
                  <div id="diagramLock" style={{ "display": "none", "position": "absolute", "left": "0", "right": "0", "top": "30px", "bottom": "0", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px", "textAlign": "center", "padding": "26px", "background": "#0d0f1a" }}>
                    <span style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "#6fb4ff", "border": "1px solid rgba(111,180,255,0.35)", "borderRadius": "100px", "padding": "6px 12px" }}>
                      Arriving soon
                    </span>
                    <div id="diagramLockTitle" style={{ "fontWeight": "600", "fontSize": "18px", "letterSpacing": "-0.01em", "color": "#fff" }}>
                      CHUGN Hardware
                    </div>
                    <div id="diagramLockSub" style={{ "fontSize": "13px", "color": "#8d93a8" }}>
                      Multi-point locks, hinges &amp; handles
                    </div>
                  </div>
                </div>
                <div className="tagline">
                  Select a profile → its cross-section loads here
                </div>
              </div>
              <div className="reveal" id="profileList">
                <div style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap", "marginBottom": "14px" }}>
                  <button type="button" data-series="60" style={{ "fontFamily": "var(--display)", "fontSize": "12.5px", "fontWeight": "500", "padding": "9px 16px", "borderRadius": "100px", "border": "1px solid rgba(10,12,30,0.14)", "background": "#0a0b10", "color": "#fff", "cursor": "pointer" }}>
                    60 Series
                  </button>
                  <button type="button" data-series="80" style={{ "fontFamily": "var(--display)", "fontSize": "12.5px", "fontWeight": "500", "padding": "9px 16px", "borderRadius": "100px", "border": "1px solid rgba(10,12,30,0.14)", "background": "#fff", "color": "#0a0b10", "cursor": "pointer" }}>
                    80 Series
                  </button>
                  <button type="button" data-series="88" style={{ "fontFamily": "var(--display)", "fontSize": "12.5px", "fontWeight": "500", "padding": "9px 16px", "borderRadius": "100px", "border": "1px solid rgba(10,12,30,0.14)", "background": "#fff", "color": "#0a0b10", "cursor": "pointer" }}>
                    88 Series · Soon
                  </button>
                  <button type="button" data-series="louver" style={{ "fontFamily": "var(--display)", "fontSize": "12.5px", "fontWeight": "500", "padding": "9px 16px", "borderRadius": "100px", "border": "1px solid rgba(10,12,30,0.14)", "background": "#fff", "color": "#0a0b10", "cursor": "pointer" }}>
                    Louver &amp; Jalousie
                  </button>
                  <button type="button" data-series="auxiliary" style={{ "fontFamily": "var(--display)", "fontSize": "12.5px", "fontWeight": "500", "padding": "9px 16px", "borderRadius": "100px", "border": "1px solid rgba(10,12,30,0.14)", "background": "#fff", "color": "#0a0b10", "cursor": "pointer" }}>
                    Glazing &amp; Auxiliary
                  </button>
                  <button type="button" data-series="chugn" style={{ "fontFamily": "var(--display)", "fontSize": "12.5px", "fontWeight": "500", "padding": "9px 16px", "borderRadius": "100px", "border": "1px solid rgba(10,12,30,0.14)", "background": "#fff", "color": "#0a0b10", "cursor": "pointer" }}>
                    CHUGN Hardware · Soon
                  </button>
                </div>
                <div id="pmItems" style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "maxHeight": "430px", "overflowY": "auto" }}></div>
                <div style={{ "marginTop": "14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.1em", "color": "#8a8d99" }}>
                  Cross-sections sourced from the official Pearl technical sheet.
                </div>
              </div>
            </div>
            <div className="embed-cards">
              <div className="ec reveal">
                <div className="n">
                  2.5
                  <span style={{ "fontSize": "0.5em" }}>mm</span>
                </div>
                <div className="t">Wall thickness (up to)</div>
              </div>
              <div className="ec reveal">
                <div className="n">
                  10
                  <span style={{ "fontSize": "0.5em" }}>yr</span>
                </div>
                <div className="t">Written guarantee</div>
              </div>
              <div className="ec reveal">
                <div className="n">100%</div>
                <div className="t">Genuine factory stamp</div>
              </div>
            </div>
          </div>

        </section>


        <section id="touch" data-idx="Touch" data-fluid="&#123;&quot;CURL&quot;:20,&quot;SPLAT_FORCE&quot;:4600,&quot;BLOOM_INTENSITY&quot;:1.05,&quot;DENSITY_DISSIPATION&quot;:0.7,&quot;palette&quot;:&quot;ink&quot;&#125;" style={{ "height": "auto" }}>
          <div className="wrap" style={{ "padding": "clamp(20px,4vh,50px) 0 clamp(80px,14vh,160px)" }}>
            <div className="secHead">
              <div>
                <div className="eyebrow reveal">Showroom · Office · Warehouse</div>
                <h2 className="reveal" style={{ "fontWeight": "500", "letterSpacing": "-0.035em", "fontSize": "clamp(30px,5vw,64px)" }}>
                  Come{" "}
                  <span className="big" style={{ "fontSize": "inherit" }}>
                    <span className="g">see it</span>
                  </span>{" "}
                  in person.
                </h2>
              </div>
              <p className="lead reveal" style={{ "color": "var(--muted)", "maxWidth": "34ch" }}>
                Islamabad showroom, head office and warehouse — profiles, hardware
                and finished units on display.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ "marginTop": "26px" }}>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/1-office-entrance.webp" alt="Pearl Window Systems Office Entrance" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  01 — Office Entrance
                </figcaption>
              </figure>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/2-main-office.webp" alt="Pearl Window Systems Main Office" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  02 — Main Office
                </figcaption>
              </figure>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/3-office-main.webp" alt="Pearl Window Systems Executive Office & Reception" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  03 — Executive Office &amp; Reception
                </figcaption>
              </figure>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/4-samples-display.webp" alt="Pearl Window Systems Samples Display" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  04 — Profile &amp; Glass Samples Display
                </figcaption>
              </figure>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/5-samples-display.webp" alt="Pearl Window Systems Hardware Display Wall" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  05 — Hardware &amp; Sample Wall
                </figcaption>
              </figure>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/6-container-unloading.webp" alt="Pearl Window Systems Container Unloading" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  06 — Container Import &amp; Unloading
                </figcaption>
              </figure>
              <figure className="window reveal" style={{ "margin": "0" }}>
                <div style={{ "position": "relative", "aspectRatio": "4/3", "overflow": "hidden", "borderRadius": "16px" }}>
                  <img loading="lazy" src="/showroom/7-gowdown-profile-stock.webp" alt="Pearl Window Systems Profile Stock Warehouse" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "transition": "transform 0.5s ease" }} className="hover:scale-105" />
                </div>
                <figcaption style={{ "padding": "12px 14px", "fontFamily": "var(--mono)", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--faint)" }}>
                  07 — Warehouse &amp; Profile Stock Godown
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section id="legacy" data-idx="Legacy" data-fluid="&#123;&quot;CURL&quot;:12,&quot;SPLAT_FORCE&quot;:2800,&quot;BLOOM_INTENSITY&quot;:0.6,&quot;DENSITY_DISSIPATION&quot;:0.8,&quot;palette&quot;:&quot;steel&quot;&#125;" style={{ "padding": "clamp(90px,16vh,180px) 0" }}>
          <div className="wrap">
            <div className="eyebrow reveal">Since 2004 · The origin</div>
            <h2 className="reveal" style={{ "marginTop": "22px", "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "0.98", "fontSize": "clamp(34px,6.4vw,92px)" }}>
              The name that brought uPVC to{" "}
              <span className="big" style={{ "fontSize": "inherit" }}>
                <span className="g">Pakistan.</span>
              </span>
            </h2>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(20px,3vw,44px)", "marginTop": "34px" }}>
              <p className="reveal" style={{ "color": "var(--muted)", "fontSize": "clamp(15px,1.6vw,18px)", "lineHeight": "1.6" }}>
                In 2004, Col. Zafar Iqbal pioneered uPVC windows in Pakistan under
                a single name — Pearl Windows. The country ran on aluminium and
                timber; he saw what the climate did to both, and brought in
                something built to outlast it.
              </p>
              <p className="reveal" style={{ "color": "var(--muted)", "fontSize": "clamp(15px,1.6vw,18px)", "lineHeight": "1.6" }}>
                Two decades later that name means the same thing: imported
                profiles engineered to a European standard. Pearl Window Systems
                carries the legacy forward as the exclusive source of the genuine,
                factory-branded Pearl Windows profile in Pakistan — never loose
                local extrusion under a borrowed name.
              </p>
            </div>
          </div>
        </section>


        <section id="manifesto" data-idx="Manifesto" data-fluid="&#123;&quot;CURL&quot;:13,&quot;SPLAT_FORCE&quot;:2800,&quot;BLOOM_INTENSITY&quot;:0.62,&quot;DENSITY_DISSIPATION&quot;:0.8,&quot;palette&quot;:&quot;ember&quot;&#125;">
          <div className="wrap">
            <div className="line alt" style={{ "fontWeight": "500", "letterSpacing": "-0.035em" }}>
              <span className="word"><i>Windows</i></span>
              <span className="word"><i>shouldn’t</i></span>
              <span className="word"><i>just</i></span>
              <span className="word"><i>sit</i></span>
              <span className="word"><i>there.</i></span>
            </div>
            <div className="line alt" style={{ "fontWeight": "500", "letterSpacing": "-0.035em" }}>
              <span className="word"><i>They’re</i></span>
              <span className="word"><i className="g">meant</i></span>
              <span className="word"><i className="g">to</i></span>
              <span className="word"><i className="g" style={{ "fontWeight": "700" }}>Protect</i></span>
            </div>
            <div className="line alt" style={{ "fontWeight": "500", "letterSpacing": "-0.035em" }}>
              <span className="word"><i>from</i></span>
              <span className="word"><i>heat,</i></span>
              <span className="word"><i>noise</i></span>
              <span className="word"><i>and</i></span>
              <span className="word"><i>rain,</i></span>
            </div>
            <div className="line alt" style={{ "fontWeight": "500", "letterSpacing": "-0.035em" }}>
              <span className="word"><i>and</i></span>
              <span className="word"><i>to</i></span>
              <span className="word"><i>stand</i></span>
              <span className="word"><i>genuinely</i></span>
              <span className="word"><i className="g" style={{ "fontWeight": "700" }}>Permanent.</i></span>
            </div>
          </div>
        </section>
        <section id="proof" data-idx="Proof" data-fluid="&#123;&quot;CURL&quot;:10,&quot;SPLAT_FORCE&quot;:2600,&quot;BLOOM_INTENSITY&quot;:0.55,&quot;DENSITY_DISSIPATION&quot;:0.82,&quot;palette&quot;:&quot;ash&quot;&#125;" style={{ "padding": "clamp(80px,14vh,160px) 0" }}>
          <div className="wrap">
            <h2 className="reveal" style={{ "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "0.98", "fontSize": "clamp(34px,6.4vw,92px)" }}>
              The papers behind
              <br />
              the <span className="g" style={{ "background": "var(--grad)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "WebkitTextFillColor": "transparent" }}>promise.</span>
            </h2>
            <p className="reveal" style={{ "marginTop": "20px", "maxWidth": "44ch", "color": "var(--muted)", "fontSize": "clamp(15px,1.7vw,19px)", "lineHeight": "1.55" }}>
              Premium is easy to claim and hard to prove. Here is the{" "}
              <span className="g" style={{ "color": "var(--blue)", "fontWeight": "600" }}>proof</span>{" "}
              — real, signed, and independently verifiable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ "marginTop": "46px" }}>
              <article className="glass reveal" style={{ "overflow": "hidden" }}>
                <div style={{ "padding": "14px" }}>
                  <div style={{ "aspectRatio": "3/4", "background": "#fff", "overflow": "hidden", "borderRadius": "4px" }}>
                    <img src="/certificates/brand exclusivity certificate-1.webp" alt="Certificate of Brand Exclusivity & Protection" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top" }} />
                  </div>
                </div>
                <div style={{ "padding": "2px 18px 20px" }}>
                  <div style={{ "fontWeight": "600", "fontSize": "14px", "letterSpacing": "-0.01em" }}>
                    Certificate of Brand Exclusivity &amp; Protection
                  </div>
                  <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "color": "#e0242c", "marginTop": "6px" }}>
                    ZD-PK-2026-001
                  </div>
                  <p style={{ "marginTop": "10px", "fontSize": "13px", "lineHeight": "1.5", "color": "var(--muted)" }}>
                    Exclusive brand owner and authorized distributor of the Pearl
                    Windows profile in Pakistan.
                  </p>
                  <a href="#cta" style={{ "display": "inline-block", "marginTop": "12px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "color": "var(--faint)" }}>
                    VIEW DOCUMENT →
                  </a>
                </div>
              </article>
              <article className="glass reveal" style={{ "overflow": "hidden" }}>
                <div style={{ "padding": "14px" }}>
                  <div style={{ "aspectRatio": "3/4", "background": "#fff", "overflow": "hidden", "borderRadius": "4px" }}>
                    <img loading="lazy" src="/certificates/CE-1.webp" alt="CE European Conformity Certificate EN 13245" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top" }} />
                  </div>
                </div>
                <div style={{ "padding": "2px 18px 20px" }}>
                  <div style={{ "fontWeight": "600", "fontSize": "14px", "letterSpacing": "-0.01em" }}>
                    CE — European Conformity, EN 13245
                  </div>
                  <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "color": "#e0242c", "marginTop": "6px" }}>
                    No. 050 · Dedol
                  </div>
                  <p style={{ "marginTop": "10px", "fontSize": "13px", "lineHeight": "1.5", "color": "var(--muted)" }}>
                    Certified by a European third-party authority to EN 13245
                    (adopted in Germany as DIN EN 13245).
                  </p>
                  <a href="#cta" style={{ "display": "inline-block", "marginTop": "12px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "color": "var(--faint)" }}>
                    VIEW DOCUMENT →
                  </a>
                </div>
              </article>
              <article className="glass reveal" style={{ "overflow": "hidden" }}>
                <div style={{ "padding": "14px" }}>
                  <div style={{ "aspectRatio": "3/4", "background": "#fff", "overflow": "hidden", "borderRadius": "4px" }}>
                    <img loading="lazy" src="/certificates/warranty certificate-1.webp" alt="10-Year Limited Quality Warranty Certificate" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top" }} />
                  </div>
                </div>
                <div style={{ "padding": "2px 18px 20px" }}>
                  <div style={{ "fontWeight": "600", "fontSize": "14px", "letterSpacing": "-0.01em" }}>
                    10-Year Limited Quality Warranty
                  </div>
                  <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "color": "#e0242c", "marginTop": "6px" }}>
                    ZD-WARR-2026-006
                  </div>
                  <p style={{ "marginTop": "10px", "fontSize": "13px", "lineHeight": "1.5", "color": "var(--muted)" }}>
                    Signed guarantee against yellowing / fading, warping /
                    cracking, and chalking / peeling — for ten years.
                  </p>
                  <a href="#cta" style={{ "display": "inline-block", "marginTop": "12px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "color": "var(--faint)" }}>
                    VIEW DOCUMENT →
                  </a>
                </div>
              </article>
              <article className="glass reveal" style={{ "overflow": "hidden" }}>
                <div style={{ "padding": "14px" }}>
                  <div style={{ "aspectRatio": "3/4", "background": "#fff", "overflow": "hidden", "borderRadius": "4px" }}>
                    <img loading="lazy" src="/certificates/ISO9001-1.webp" alt="ISO 9001:2015 Quality Management System Certificate" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top" }} />
                  </div>
                </div>
                <div style={{ "padding": "2px 18px 20px" }}>
                  <div style={{ "fontWeight": "600", "fontSize": "14px", "letterSpacing": "-0.01em" }}>
                    ISO 9001:2015 Quality Management
                  </div>
                  <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "color": "#e0242c", "marginTop": "6px" }}>
                    ZD-ISO-2026-002
                  </div>
                  <p style={{ "marginTop": "10px", "fontSize": "13px", "lineHeight": "1.5", "color": "var(--muted)" }}>
                    Factory quality management system audited and certified to ISO
                    9001:2015.
                  </p>
                  <a href="#cta" style={{ "display": "inline-block", "marginTop": "12px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "color": "var(--faint)" }}>
                    VIEW DOCUMENT →
                  </a>
                </div>
              </article>
              <article className="glass reveal" style={{ "overflow": "hidden" }}>
                <div style={{ "padding": "14px" }}>
                  <div style={{ "aspectRatio": "3/4", "background": "#fff", "overflow": "hidden", "borderRadius": "4px" }}>
                    <img loading="lazy" src="/certificates/GB T45001-1.webp" alt="GB/T 45001-2020 / ISO 45001:2018 Occupational Health & Safety Certificate" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top" }} />
                  </div>
                </div>
                <div style={{ "padding": "2px 18px 20px" }}>
                  <div style={{ "fontWeight": "600", "fontSize": "14px", "letterSpacing": "-0.01em" }}>
                    GB/T 45001 · ISO 45001 OHS Management
                  </div>
                  <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "color": "#e0242c", "marginTop": "6px" }}>
                    11423S28727R3M
                  </div>
                  <p style={{ "marginTop": "10px", "fontSize": "13px", "lineHeight": "1.5", "color": "var(--muted)" }}>
                    Occupational Health & Safety management system certified to GB/T 45001-2020 / ISO 45001:2018 by EACC, CNAS accredited.
                  </p>
                  <a href="#cta" style={{ "display": "inline-block", "marginTop": "12px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "color": "var(--faint)" }}>
                    VIEW DOCUMENT →
                  </a>
                </div>
              </article>
              <article className="glass reveal" style={{ "overflow": "hidden" }}>
                <div style={{ "padding": "14px" }}>
                  <div style={{ "aspectRatio": "3/4", "background": "#fff", "overflow": "hidden", "borderRadius": "4px" }}>
                    <img src="/certificates/profile sticker and branding.webp" alt="Pearl Windows UPVC Profile Sticker & Branding" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top" }} />
                  </div>
                </div>
                <div style={{ "padding": "2px 18px 20px" }}>
                  <div style={{ "fontWeight": "600", "fontSize": "14px", "letterSpacing": "-0.01em" }}>
                    Profile Sticker & Branding
                  </div>
                  <div style={{ "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.12em", "color": "#e0242c", "marginTop": "6px" }}>
                    PEARL WINDOWS · ZHONG DE
                  </div>
                  <p style={{ "marginTop": "10px", "fontSize": "13px", "lineHeight": "1.5", "color": "var(--muted)" }}>
                    Official UPVC Pearl Windows protective tape branding — applied on every profile delivered, by Shanxi Zhongde, China.
                  </p>
                  <a href="#cta" style={{ "display": "inline-block", "marginTop": "12px", "fontFamily": "var(--mono)", "fontSize": "10px", "letterSpacing": "0.14em", "color": "var(--faint)" }}>
                    VIEW DOCUMENT →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section
          className="pearl-faq"
          id="faq"
          data-idx="FAQ"
          data-fluid='{"CURL":18,"SPLAT_FORCE":3600,"BLOOM_INTENSITY":0.8,"DENSITY_DISSIPATION":0.76,"palette":"ink"}'
        >
          <div className="faq-wrap">
            <div className="faq-head">
              <span className="eyebrow reveal">Good Questions</span>
              <h2 className="reveal">
                Everything buyers <em>ask us.</em>
              </h2>
              <p className="reveal">
                Straight answers on the standard, the warranty, and how to actually get a quote.
              </p>
            </div>

            <div className="faq-list" id="faqList">
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`faq-item ${isOpen ? "open" : ""}`} key={index}>
                    <button
                      className="faq-q"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="faq-q-left">
                        <span className="faq-num">{item.num}</span>
                        <span className="faq-q-text">{item.question}</span>
                      </span>
                      <span className="faq-toggle"></span>
                    </button>
                    <div className="faq-a-wrap">
                      <div className="faq-a-inner">
                        <p className="faq-a">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="faq-foot reveal">
              <p>Still have a technical question?</p>
              <a className="faq-cta" href="https://wa.me/923122220087" target="_blank" rel="noopener noreferrer">
                <span>Ask on WhatsApp →</span>
              </a>
            </div>
          </div>
        </section>


        <section id="cta" data-idx="Contact" data-fluid="&#123;&quot;CURL&quot;:24,&quot;SPLAT_FORCE&quot;:5000,&quot;BLOOM_INTENSITY&quot;:1.15,&quot;DENSITY_DISSIPATION&quot;:0.72,&quot;palette&quot;:&quot;ink&quot;&#125;">

          <div className="wrap">
            <div className="eyebrow reveal" style={{ "justifyContent": "center", "marginBottom": "28px" }}>
              Direct import consultation
            </div>
            <h2>
              <span className="mask"><span>Bring quality</span></span>
              <span className="mask">
                <span>
                  to{" "}
                  <span className="d">life.</span>
                </span>
              </span>
            </h2>
            <div className="btns reveal" style={{ "marginTop": "48px", "display": "grid", "gridTemplateColumns": "repeat(2,minmax(0,1fr))", "gap": "14px", "maxWidth": "660px", "marginLeft": "auto", "marginRight": "auto" }}>

              <a href="https://wa.me/923122220087" className="btn wa">
                <span>WhatsApp +92 312 2220087 →</span>
              </a>
              <a href="https://wa.me/923135822087" className="btn wa">
                <span>WhatsApp +92 313 5822087 →</span>
              </a>
              <a href="tel:+923122220087" className="btn ghost">
                <span>Call +92 312 2220087</span>
              </a>
              <a href="tel:+923135822087" className="btn ghost">
                <span>Call +92 313 5822087</span>
              </a>
            </div>
            <div className="glass" style={{ "margin": "44px auto 0", "maxWidth": "560px", "padding": "26px", "textAlign": "left" }}>
              {!quoteOk ? (
                <form id="quoteForm" onSubmit={handleQuoteSubmit}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "12px" }}>
                    <input name="name" required placeholder="Full Name *" style={{ "background": "rgba(255,255,255,0.05)", "border": "1px solid var(--line)", "borderRadius": "12px", "padding": "13px 16px", "color": "var(--ink)", "fontFamily": "var(--display)", "fontSize": "14px" }} />
                    <input name="phone" required type="tel" placeholder="Phone / WhatsApp Number *" style={{ "background": "rgba(255,255,255,0.05)", "border": "1px solid var(--line)", "borderRadius": "12px", "padding": "13px 16px", "color": "var(--ink)", "fontFamily": "var(--display)", "fontSize": "14px" }} />
                    <input name="city" required placeholder="City *" style={{ "gridColumn": "1 / -1", "background": "rgba(255,255,255,0.05)", "border": "1px solid var(--line)", "borderRadius": "12px", "padding": "13px 16px", "color": "var(--ink)", "fontFamily": "var(--display)", "fontSize": "14px" }} />
                  </div>
                  <textarea name="details" rows="3" placeholder="Project details (optional e.g. 5 casement windows, 2 sliding doors)" style={{ "width": "100%", "marginTop": "12px", "background": "rgba(255,255,255,0.05)", "border": "1px solid var(--line)", "borderRadius": "12px", "padding": "13px 16px", "color": "var(--ink)", "fontFamily": "var(--display)", "fontSize": "14px", "resize": "vertical" }}></textarea>
                  <button type="submit" className="btn wa" style={{ "marginTop": "16px", "width": "100%" }}>
                    <span>Submit & Send via WhatsApp →</span>
                  </button>
                </form>
              ) : (
                <div id="quoteOk" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "fontSize": "15px", "color": "var(--ink)" }}>
                  <span style={{ "width": "28px", "height": "28px", "flex": "0 0 auto", "borderRadius": "50%", "background": "var(--grad)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "color": "#fff" }}>
                    ✓
                  </span>
                  Request received! WhatsApp has opened with your details. We will respond promptly.
                </div>
              )}
            </div>
            <div style={{ "marginTop": "26px", "fontFamily": "var(--mono)", "fontSize": "11.5px", "letterSpacing": "0.08em", "lineHeight": "2", "color": "var(--faint)" }}>
              Shop No. 2, Ch. Akram Market, Opp. National CNG, GT Road, Swan,
              Islamabad
              <br />
              pearlwindowsystemspk@gmail.com · Mon–Sat, 9:00 AM – 6:00 PM
            </div>
          </div>
        </section>
      </main>
      <section id="map" data-idx="Location" style={{ "position": "relative", "zIndex": "10", "padding": "clamp(70px,12vh,140px) 0" }}>
        <div className="wrap">
          <div className="secHead">
            <div>
              <div className="eyebrow reveal">Visit the showroom</div>
              <h2 className="reveal" style={{ "fontWeight": "500", "letterSpacing": "-0.035em", "fontSize": "clamp(30px,5vw,64px)" }}>
                Find us on{" "}
                <span className="big" style={{ "fontSize": "inherit" }}>
                  <span className="g">the map.</span>
                </span>
              </h2>
            </div>
            <p className="lead reveal" style={{ "color": "var(--muted)", "maxWidth": "34ch" }}>
              Shop No. 2, Ch. Akram Market, Opp. National CNG, GT Road, Swan,
              Islamabad — Mon–Sat, 9:00 AM – 6:00 PM.
            </p>
          </div>
          <div className="window reveal clipUp" style={{ "marginTop": "26px" }}>
            <div className="winbar">
              <span className="dotr" style={{ "background": "#ff5f57" }}></span>
              <span className="dotr" style={{ "background": "#febc2e" }}></span>
              <span className="dotr" style={{ "background": "#28c840" }}></span>
              <span className="url">maps.google.com / pearl-window-systems</span>
            </div>
            <iframe title="Pearl Window Systems showroom location" src="https://maps.google.com/maps?q=Pearl%20Window%20Systems%2C%20Ch.%20Akram%20Market%2C%20Opp.%20National%20CNG%2C%20GT%20Road%2C%20Swan%2C%20Islamabad&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ "display": "block", "width": "100%", "height": "clamp(300px,48vh,460px)", "border": "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen=""></iframe>
          </div>
          <div className="btns reveal" style={{ "marginTop": "22px", "display": "grid", "gridTemplateColumns": "repeat(2,minmax(0,1fr))", "gap": "14px", "maxWidth": "560px" }}>
            <a className="btn" href="https://maps.app.goo.gl/z97oTTPH3rNXCZXs9" target="_blank" rel="noopener">
              <span>Open in Google Maps →</span>
            </a>
            <a className="btn wa" href="https://wa.me/923122220087" target="_blank" rel="noopener">
              <span>WhatsApp for directions</span>
            </a>
          </div>
        </div>
      </section>

      <footer data-idx="">
        <div className="wrap">
          <div className="top">
            <div className="fmark" style={{ "fontSize": "clamp(36px, 7.4vw, 104px)" }}>
              PEARL{" "}
              <span style={{ "color": "#e0242c" }}>WINDOWS</span>
            </div>
            <div className="cols">
              <div className="col">
                <h4>System</h4>
                <a href="#hero">Overview</a>
                <a href="#spec">Specs</a>
                <a href="#glass">Types</a>
                <a href="#embed">Catalog</a>
                <a href="#faq">FAQ</a>
              </div>
              <div className="col">
                <h4>Verified</h4>
                <a href="#proof">EN 13245 audit</a>
                <a href="/certs/Pearl%20Windows%20Technical%20sheet%20MES.pdf">
                  PDF spec sheet
                </a>
                <a href="#cta">Request a quote</a>
              </div>
              <div className="col">
                <h4>Showroom</h4>
                <a href="#cta">Ch. Akram Market, GT Road, Swan, Islamabad</a>
                <a href="mailto:pearlwindowsystemspk@gmail.com">
                  pearlwindowsystemspk@gmail.com
                </a>
                <a href="tel:+923122220087">+92 312 2220087</a>
                <a href="tel:+923135822087">+92 313 5822087</a>
              </div>
            </div>
          </div>
          <div className="base">
            <span>
              © 2026 Pearl Window Systems. German-standard uPVC since 2004.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
