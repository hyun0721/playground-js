/**
 * [자동차 10부제]
 * 자동차 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 운행 금지.
 * 
 * ex) 자동차 번호의 일의 자리 숫자가 7인 경우 : 7일, 17일, 27일 운행 금지.
 * 
 * 
 * [입력]
 * 1. 날짜의 일의 자리 숫자
 * 2. 7대의 자동차 번호의 끝 두 자리 숫자
 * 
 * [결과]
 * 주어진 날자와 자동차의 일의 자리 숫자를 보고 위반하는 차량의 '대수'를 출력
 * 
 * tenRotationSys({ today: 7, carNumber: [25, 23, 11, 47, 53, 17, 33] });
 */

export default (args) => {

    let today       = args.today;
    let carNumbers  = args.carNumber;
    let invalidCnt  = 0;

    for(let num of carNumbers){
        
        let lastNum = num.toString().substr(-1);

        if(today != lastNum){
            invalidCnt++;
            console.log(`Invalid Car Number : ${num}`);
        }
    }

    console.log(`Answer ... : ${invalidCnt}`);

}