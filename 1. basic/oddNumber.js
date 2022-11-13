/**
 * 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다.
 * 홀수가 한 개 이상 반드시 존재한다.
 * 
 * [입력]
 * ex) 12, 77, 38, 41, 53, 92, 85
 * 
 * [출력]
 * 256, 41
 * 
 */

export default (...args)=>{

    let answer = new Array();
    let sum = 0;

    console.log('Run Odd Number ...' + args);

    for(let num of args){
        if(num % 2 == 1){
            sum += num;
            answer.push(num);
        }
    }

    console.log(`Answer Sum ... ${sum}`);
    console.log(`Answer Min ... ${Math.min(...answer)}`);

}