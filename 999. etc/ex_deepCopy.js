export default () => {

    console.log('Deep Copy...');
/*
    console.log('-----------------[Array]-----------------');

    const target = ['a','b','c', ['d','e']];
    // const target = ['a','b','c', 'd'];

    // let clone = target;
    // let clone = [...target];
    let clone = JSON.parse(JSON.stringify(target));    

    clone[3][0] = '123';
    // clone[3] = '123';


    console.log('target : ' + target);
    console.log('clone  : ' + clone);

*/
    console.log('-----------------[Object-----------------');


    const target = { 'a': 123, 'b': 456, 'c': {'d' : 789} };
    // const target = { 'a': 123, 'b': 456, 'c': 789 };

    // let clone = target;
    // let clone = { ...target };
    let clone = Object.assign({}, target);
    // let clone = JSON.parse(JSON.stringify(target));

    clone.c.d = '999';
    // clone.c = '999'

    console.log('target : ' + JSON.stringify(target));
    console.log('clone  : ' + JSON.stringify(clone));



    console.log('----------------------------------');
    // let clone = {...target};


    // let target = {
    //     'a' : 123,
    //     'b' : 456,
    //     'c' : function(){
    //         alert('Function C');
    //     }
    // }

    // let clone = JSON.parse(JSON.stringify(target));     // Function Not Copy

    // clone.c();



    // console.log('----------------------------------');


}