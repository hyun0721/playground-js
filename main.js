/** Algorism */
import triangle     from "./1. basic/triangle.js";
import pencilCount  from "./1. basic/pencilCount.js";
import sum          from "./1. basic/sum.js";
import findMinNumber from "./1. basic/findMinNumber.js";
import min          from "./1. basic/min.js";
import oddNumber    from "./1. basic/oddNumber.js";
import tenRotationSys from "./1. basic/tenRotationSys.js";


/* Excercise */
import ex_promise   from "./999. etc/ex_promise.js";
import { SessionUtil, LocalUtil } from "./999. etc/ex_userStorage.js"
import ex_function from "./999. etc/ex_function.js";


(function () {
    console.log(" >>>>  main.js  <<<< ");

    tenRotationSys({ today: 7, carNumber: [25, 23, 11, 47, 53, 17, 33] });

})();