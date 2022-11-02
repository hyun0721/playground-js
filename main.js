import oddNumber    from "./1. basic/oddNumber.js";
import min          from "./1. basic/min.js";
import triangle     from "./1. basic/triangle.js";

import ex_promise   from "./999. etc/ex_promise.js";

import { SessionUtil, LocalUtil } from "./999. etc/ex_userStorage.js"

(function () {
    console.log(" >>>>  main.js  <<<< ");
    
    SessionUtil.Clear();
    LocalUtil.Clear();

    SessionUtil.Insert('A' , '111');
    SessionUtil.Insert('B' , '222');
    SessionUtil.Insert('C' , '3333');

    let sessionStorageAll = SessionUtil.GetAll();


    LocalUtil.Insert('a' , '__11');
    LocalUtil.Insert('b' , '__22');
    LocalUtil.Insert('c' , '__33');

    let localStorageAll = LocalUtil.GetAll();


    debugger;

})();