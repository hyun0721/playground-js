export default function(){

    /** 1. 명명함수 선언 */
    function ExcerciseFnc1(args){
        console.log(args);
    }

    
    /** 2. 익명함수 표현 */
    const ExcerciseFnc2 = function(args){
        console.log(args);
        
    }

    /** 3. 명명함수 표현 */
    const ExcerciseFnc3 = function OriginalFnc(args){
        console.log(args);
    }


    /** 4. 즉시실행함수 표현 */
    const ExcerCiseFnc4 = (function(){

        const Print = function(args){
            console.log(args);
        }

        return {
            Print: Print
        }
    })();


    /** 5. Arrow Function */
    const ExcerciseFnc = (...args) => {
        console.log(args);
    }


    ExcerCiseFnc4.Print(1);

    
}