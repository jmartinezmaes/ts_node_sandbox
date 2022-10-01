import { bar } from "foo_pkg/bar.js";
//       ^^^ "./bar.js": "./dist/bar.js" (in "exports" of foo_pkg)

console.log(bar);
