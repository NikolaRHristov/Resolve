import{Command as o}from"commander";import t from"@Variable/Extension.js";const e=`
	Example:
	$ Resolve --project tsconfig.json --src ./src -out ./dist
`;var n=()=>new o().version("0.0.1").name("Resolve").addHelpText("after",e).option("-p, --project <path>","path to tsconfig file","tsconfig.json").option("-s, --src <path>","path to source directory").option("-o, --out <path>","path to output directory").option("--ext <extensions...>","space-delimited list of file extensions to process",t).option("--verbose","output logs",!1).option("--noEmit","changes will not be emitted",!1);export{n as default};
