import { foo } from "foo_pkg/foo";
//       ^^^ "./*": "./dist/*.js" (in "exports" of foo_pkg)

console.log(foo);
