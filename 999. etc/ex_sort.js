export default () => {

    console.log('Excercise Sort ...');

    const NumberList = ['3', '15', '8', '7', '10'];         // 문자열 타입 숫자 배열

    console.log(NumberList.sort());                         // 숫자형도 기본 '문자형 오름차순'으로 정렬함.
    console.log(NumberList.map(dt=> Number(dt)).sort());    // 숫자형도 기본 '문자형 오름차순'으로 정렬함. (타입캐스팅)

    NumberList.sort((a,b)=>{

        if(Number(a) < Number(b)){
            return -1;
        }
        else{
            return 1;
        }
    });

    console.log(NumberList);
    

    const SalesList = [
        {
            no: '1',
            product: 'Apple',
            seller: 'Lee'
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


    SalesList.sort((a,b)=>{

        let nextObj = a;
        let currObj = b;


        // 현재원소의 값이 다음원소 값보다 작을 때, 양수(1) 값 반환 : 내림차순(DESC)
        if(nextObj.no < currObj.no){
            return 1;
        }
        else{
            // 'no'값이 같은 경우 'seller' 값으로 정렬
            if(nextObj.no == currObj.no){

                if(nextObj.seller.toUpperCase() < currObj.seller.toUpperCase()){
                    return 1;
                }
                else{
                    return -1;
                }
            }
            else{
                return -1;
            }
        }
    });

    console.log(SalesList);

}