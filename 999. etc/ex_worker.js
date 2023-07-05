export default async () => {

    /**
     * 13개의 데이터를 3개의 Job으로 소분하여 비동기 처리.
     * 
     */
    // const jobs = [

    //     { data_0 : '0', data_1 : '1', data_2 : '2', data_3 : '3', data_4 : '4' },
    //     { data_5 : '5', data_6 : '6', data_7 : '7', data_8 : '8', data_9 : '9' },
    //     { data_10 : '10', data_11 : '11', data_12 : '12'}

    // ];

    const jobs = [
        { SEQ: '001', PRODUCT: 'Apple', PRICE: '1000', EXPIRE_DT: '2024-11-13'},
        { SEQ: '002', PRODUCT: 'Banan', PRICE: '2000', EXPIRE_DT: '2024-07-09'},
        { SEQ: '003', PRODUCT: 'Tomato', PRICE: '2500', EXPIRE_DT: '2023-06-08'},
        { SEQ: '004', PRODUCT: 'Melon', PRICE: '4500', EXPIRE_DT: '2024-09-11'}
    ]

    const jobs_err = [
        { SEQ: '001', PRODUCT: 'Apple', PRICE: '1000', EXPIRE_DT: '2024-11-13'},
        { SEQ: '002', PRODUCT: 'Banan', PRICE: '2000', EXPIRE_DT: 'apple'},
        { SEQ: '003', PRODUCT: 'Tomato', PRICE: '2500', EXPIRE_DT: '2023-06-08'},
        { SEQ: '004', PRODUCT: 'Melon', PRICE: '4500', EXPIRE_DT: '2024-09-11'}
    ]

    ExcuteAsyncJobs(jobs)
        .then(msg => console.log('success'))
        .catch(error => console.log(error));
}


function* Worker(executor, iter){
    /* 데이터 셋 개수 만큼 반복 */ 
    for(const i of iter){
        // yield i instanceof Promise ? i.then(executor) : executor(i);
        yield executor(i);
    }
}


const UserAsyncFunc = function(task){

    return new Promise((resolve, reject)=>{

        let expireDt = new Intl.DateTimeFormat("ko").format(new Date(task.EXPIRE_DT));

        /*  Aync Function ... */
        setTimeout(()=> {
            resolve(`Finish Work ... ${task.SEQ} : ${expireDt}`);
        }, 2000);

    });
}


/**
 * n개 작업을 수행
 * 
 * @param {*} jobs 
 */
const ExcuteAsyncJobs = async function(jobs) {

    /* 1안 */
    for(const task of jobs){
        await UserAsyncFunc(task)
            .then(msg => console.log(msg))
    }

    /* 2안 */
    // for await (const result of Worker(UserAsyncFunc, jobs)){
    //     console.log(result);
    // }
}