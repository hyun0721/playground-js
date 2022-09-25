export default function(){


    console.log('Start Promise Excercise ...');

    // resolveAtfer2Seconds().then((resolve, reject)=>{
    //     console.log(`${resolveAtfer2Seconds.name} : ${resolve}`);
    // });


    /* 1. [all] 인자의 모든 프로미스가 성공적으로 이행된 경우 (그 외는 오류처리됨.)*/
    // Promise.all([resolveAtfer3Seconds(), resolveAtfer1Seconds()]).then((value)=>{
    //     console.log(`Result : ${value}`);
    // }).catch((error)=>{
    //     console.log(`Error : ${error}`);
    // });


    /* 2. [allSettled] 인자의 모든 프로미스가 이행 혹은 거부되어 완료된 경우 */
    // Promise.allSettled([resolveAtfer3Seconds(), resolveAtfer1Seconds()]).then((value)=>{
    //     console.log(`Result : ${value}`);
    // }).catch((error)=>{
    //     console.log(`Error : ${error}`);
    // });;
    

    /**
     * 3. [any] 인자의 하나의 프로미스라도 이행 완료된 경우 
     * 
     * 먼저온 reject는 무시함. 
     * 모두 reject되면 오류발생
     */
    // Promise.any([resolveAtfer3Seconds(), resolveAtfer1Seconds()]).then((value)=>{
    //     console.log(`Result : ${value}`);
    // }).catch((error)=>{
    //     console.log(`Error : ${error}`);
    // });


    /**
     * 4. [race] 먼저 완료되는 프로미스값을 반환함.
     * 
     * 앞 순서의 promise 결과로 리턴값이 정해짐. (resolve, reject 모두)
     * 나머지 프로미스도 수행하지만 
     */
    // Promise.race([resolveAtfer1Seconds(), resolveAtfer3Seconds() ]).then((value)=>{
    //     console.log(`Result : ${value}`);
    // }).catch((error)=>{
    //     console.log(`Error : ${error}`);
    // });

    // Promise.race([resolveAtfer3Seconds(), resolveAtfer1Seconds() ]).then((value)=>{
    //     console.log(`Result : ${value}`);
    // }).catch((error)=>{
    //     console.log(`Error : ${error}`);
    // });
}


/**
 * 동작시간 : 1초
 * 
 * @returns 
 */
let resolveAtfer1Seconds = function(){

    console.log('(Start) 1 Second ...');

    return new Promise((resolve, reject)=>{

        setTimeout(function(){

            console.log('(End) 1 Second ...');
            // resolve(`(resolve) ${resolveAtfer1Seconds.name}`);
            reject(`(reject) ${resolveAtfer1Seconds.name}`);

        }, 1000);

    });
}

/**
 * 동작시간 : 3초
 * 
 * @returns 
 */
let resolveAtfer3Seconds = function(){

    console.log('(Start) 3 Second ...');

    return new Promise((resolve, reject)=>{

        setTimeout(function(){

            console.log('(End) 3 Second ...');
            // resolve(`(resolve) ${resolveAtfer3Seconds.name}`);
            reject(`(reject) ${resolveAtfer3Seconds.name}`);

        }, 3000);
    });
}


let resolveAtfer5Seconds = function(){

    console.log('(Start) 5 Second ...');

    return new Promise((resolve, reject)=>{

        setTimeout(function(){

            console.log('(End) 5 Second ...');
            resolve(`(resolve) ${resolveAtfer3Seconds.name}`);
            // reject(`(reject) ${resolveAtfer5Seconds.name}`);

        }, 3000);
    });
};
