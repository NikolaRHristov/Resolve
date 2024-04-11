import{writeFileSync as t}from"fs";function r(e){e.forEach(({file:n,text:o})=>{t(n,o,{encoding:"utf-8"})})}export{r as applyChanges};
