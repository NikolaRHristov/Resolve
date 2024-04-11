import{Command as t}from"commander";import{DEFAULT_EXTENSIONS as e}from"~/constants";import{version as r}from"~/version.json";const s=`
Example:
$ @playform/resolve --project tsconfig.json --src ./src -out ./dist
`;function a(){const o=new t;return o.version(r).name("@playform/resolve").addHelpText("after",s).option("-p, --project <path>","path to tsconfig file","tsconfig.json").option("-s, --src <path>","path to source directory").option("-o, --out <path>","path to output directory").option("--ext <extensions...>","space-delimited list of file extensions to process",e).option("--verbose","output logs",!1).option("--noEmit","changes will not be emitted",!1),o}export{a as createProgram};
