const r=async(i,a)=>{const e=await Promise.all(Object.keys(a).map(async t=>({Alias:t,Prefix:t.replace(s,""),Path:await Promise.all(a[t]?.map(async n=>(await import("path")).resolve(i,n.replace(s,"")))??[])})));return e.forEach(async({Alias:t})=>{if(t.startsWith("./")||t.startsWith("../"))throw new(await import("../Class/Error/InvalidAliasError.js")).default(r.name,t)}),e},s=/\*$/;var o=r;export{s as Regex,r as _Function,o as default};
