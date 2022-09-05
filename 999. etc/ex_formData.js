(()=>{
    FormAction();
    AddEvent();
})();

function FormAction(){

    let formData = new FormData(document.querySelector('#formMain'));
    let object = {};

    
    /** forEach 문 사용 */
    console.log('1) forEach');
    formData.forEach((value, key)=>{

        console.log(`key: ${key}    /    value: ${value}`);
        object[key] = value;

    });
    console.log(object);
    

    /** for..of 문 사용 */
    console.log('2) for ... of');
    // for (var p of myFormData.entries()) 와 같은 의미
    for(let data of formData){
        console.log(data);
    }


    console.log('3) Append ...');    
    formData.append('OPTIONS', 'Red');
    PrintFormData(formData)
    

    console.log('4) Delete ...(txtSample)');
    formData.delete('txtSample');
    PrintFormData(formData)


    console.log('5) Get ...(OPTIONS)');
    console.log(formData.get('OPTIONS'));


    console.log('6) Key ...');
    for(let key of formData.keys()){
        console.log(key);
    }


    console.log('7) Values ...');
    for(let value of formData.values()){
        console.log(value);
    }


    console.log('8) Append & GetAll ...(OPTIONS)');
    formData.append('OPTIONS', 'Blue');     // 동일 Key값을 Append한 경우 복수개 배열이됨.
    PrintFormData(formData);
    

    console.log('9) Set ...');
    formData.set('OPTIONS', 'Black');       // 동일 Key값을 Set한 경우 덮어씌움.
    formData.set('ANY_OPTIONS', 'White');   // 새로운 Key값을 Set한 경우 새로운 key,value가 생성됨.
    PrintFormData(formData);


    console.log('10) Has ...');
    console.log(formData.has('OPTIONS'));
    console.log(formData.has('SOME_OPTIONS'));


}


function PrintFormData(formData){

    let form = formData ?? new FormData(document.querySelector('#formMain'));

    console.log('============== Print ==============');
    
    form.forEach((value, key)=>{
        console.log(`key: ${key}    /    value: ${value}`);
    });

}

function AddEvent(){
    document.getElementById("btnPrint").addEventListener("click", ()=>{
        event.preventDefault();
        // console.log('Print Button Click...');
        PrintFormData();
    });
}