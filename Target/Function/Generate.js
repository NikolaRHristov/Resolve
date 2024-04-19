var s=(r,t,n)=>{const o=[];return r.forEach(async a=>{const{Changed:g,Text:h,Change:e}=(await import("./Replace.js")).default(a,t,n);g&&e.push({File:a,Text:h,Change:e})}),o};export{s as default};
