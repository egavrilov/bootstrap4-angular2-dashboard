declare module '~d3/index' {
  module d3 {
    export function csvParse(response:any):any
  }

  export = d3;
}
declare module 'd3/index' {
  import main = require('~d3/index');
  export = main;
}
declare module 'd3' {
  import main = require('~d3/index');
  export = main;
}
