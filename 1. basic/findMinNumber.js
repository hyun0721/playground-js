/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 * 
 * [입력]
 * 7개의 수가 주어진다. 
 * ex) 5, 3, 7, 11, 2, 5, 15, 17
 * 
 * [출력]
 * 가장 작은 값 출력
 * 
 */

export default (...args) => {

    let minNumber = Number.MAX_SAFE_INTEGER;
    let otherAnswer = Math.min(...args);            // 전개연산자 (배열값을 인자로 전달하는 방법)

    for(let target of args){
        if(target <= minNumber){
            minNumber = target;
        }
    }


    return minNumber;
}