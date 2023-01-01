export default () => {

    /** 전개 구문 (Spread Syntax) */

    let arrNumber = [3,4,5,10,8];

    // 본래 Math.max() 함수는 Math.max(3,4,5,10,8) 과 같이 복수개 인자를 받는 함수.
    console.log(Math.max(3,4,5,10,8));
    console.log(Math.max(...arrNumber));


    
    let fruit = ['apple', 'banana', 'melon'];
    let animal = ['monkey' ,'dog', 'cat'];

    let mergedArray = [...fruit, ...animal];        // Array.prototype.concat()과 같은 동작

    console.log(mergedArray);



    const sample = (a, b, ...c)=>{

        console.log('a : ', a);
        console.log('b : ', b);
        console.log('c : ', c);
    }

    sample(1,2,3,4,5);
}