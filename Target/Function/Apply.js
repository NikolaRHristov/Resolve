var n=e=>e.forEach(async({File:a,Text:t})=>(await import("fs/promises")).writeFile(a,t,{encoding:"utf-8"}));export{n as default};
