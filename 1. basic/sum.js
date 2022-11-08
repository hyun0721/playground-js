/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 * 
 * [입력]
 * 첫 번째 줄에 20이하의 자연수 N이 입력된다.
 * 
 * [출력]
 * 첫 번째 줄에 1부터 N까지의 합을 출력한다.
 */

export default function(count){

    let sum = 0;

    for(let i=0; i < count; i++){
        sum += (i+1);
    }

    return sum;
}