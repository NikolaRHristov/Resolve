var $=async(a,s,g,{Source:x,Target:w},y)=>{const o=m(e(x,p(w,s))),r=await(a.startsWith("./")||a.startsWith("../")?[e(o,a)]:g.filter(({Prefix:t})=>a.startsWith(t)).flatMap(({Prefix:t,Path:n})=>n.map(P=>e(P,a.replace(t,""))))).reduce(async(t,n)=>t||await j(n),null);if(!r)return{File:s,Original:a};const l=y?r.File:r.Import,i=r.Type==="file"?(await import("node:path")).join(p(o,m(l)),(await import("node:path")).basename(l)):p(o,l).replace(/^(?!\.+\/)/,t=>`./${t}`).replace(/\.[^/.]*ts[^/.]*$/,t=>t.replace(/\.ts$/,".js").replace(/\.tsx$/,".jsx").replace(/\.mts$/,".mjs").replace(/\.cts$/,".cjs")),c=(await import("./File.js")).default(e(m(s),i))?i:i.replace(/\.jsx$/,".js");return{Original:u(a),...a!==c&&{Replace:u(c)}}};const{default:u}=await import("./Normalize.js"),{default:j}=await import("./Resolve/Import.js"),{resolve:e,relative:p,dirname:m}=await import("node:path");export{j as Import,u as Normalize,$ as default,m as dirname,p as relative,e as resolve};
