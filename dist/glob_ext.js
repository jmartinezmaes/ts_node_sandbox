import { foo } from "foo_pkg/foo.js";
//       ^^^ "./*.js": "./dist/*.js" (in "exports" of foo_pkg)
//
// Execution of this file with ts-node fails with:
//
// CustomError: Cannot find module '<path_to>\ts_node_sandbox\node_modules\foo_pkg\dist\foo.js.js'
//                                                                                          ^^^^^ extra extension
console.log(foo);
//# sourceMappingURL=glob_ext.js.map