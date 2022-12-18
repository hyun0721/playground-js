export default ()=>{


    console.log('Duplicate Excercise...');


    const map = new Map();

    map.set('A', '123');
    map.set('B', '456');

    map.set('A', '555');            // 중복 허용 X

    console.log(map.get('A'));
    console.log(map.get('B'));


    const SalesList = [
        {
            no: '1',
            product: 'Apple',
            seller: 'Kim'
        },
        {
            no: '2',
            product: 'Banana',
            seller: 'Lee'
        },
        {
            no: '1',
            product: 'Apple',
            seller: 'Kim'
        },
        {
            no: '3',
            product: 'Melon',
            seller: 'Hong'
        }
    ];

    let uniqueMap = new Map();
    let uniqueArray = new Array();

    
    // 1. Map 적재 (중복제거)
    for(const data of SalesList){
        uniqueMap.set(JSON.stringify(data), data);
    }

    // 2. 결과확인 (Map 객체)
    uniqueMap.forEach( dt => {
        console.log(dt);
    });

    // 3. 배열화
    uniqueArray = Array.from(uniqueMap.values());

    // 4. 결과확인 (Array 객체)
    console.log(uniqueArray);

}