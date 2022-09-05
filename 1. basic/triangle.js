/**
 * 길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고,
 * 만들 수 없으면 "NO"를 출력한다.
 * => 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 크거나 같으면 안됨.
 * 
 * [입력]
 * 첫 번째 줄에 100 이하의 서로 다른 A,B,C 막대의 길이가 주어진다.
 * 
 * [출력]
 * 첫 번째 줄에 "YES", "NO"를 출력한다.
 * 
 */

export default function(a, b, c){

    let inputArray = [a, b, c];
    let maxValue = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    console.log(inputArray);

    for(let target of inputArray){

        sum += target;

        if(target > maxValue){
            maxValue = target;
        }
    }

    return ((sum-maxValue) > maxValue) ? "YES" : "NO";
}