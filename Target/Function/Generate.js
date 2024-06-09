var h=(e,t,n)=>{const o=[];return e.forEach(async a=>{const{Changed:s,Text:g,Change:r}=(await import("./Replace.js")).default(a,t,n);s&&r.push({File:a,Text:g,Change:r})}),o};export{h as default};
