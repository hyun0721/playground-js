const DEFAULT_REGEXP_ALPHABET = /^[a-zA-Z]+$/;        // 영문자(알파벳)
const DEFAULT_REGEXP_ALPHANUM = /^[0-9a-zA-Z]+$/;     // 영문자 + 숫자
const DEFAULT_REGEXP_FIGURE = /^[0-9]+$/;             // 숫자

/**
 * 오류 클래스 명칭과 메시지를 상위객체에 반영
 */
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends BaseError {
    constructor(message, seq, property) {
        super(message);
        this.seq = seq;
        this.property = property;
    }
}

class LogicalError extends ValidationError {
    // constructor(message, seq, property, code){
                
    // }
}


const VadlidationForSave = (sourceData) => {

    const DateHandler = new Intl.DateTimeFormat();

    for(let data of sourceData){
        if(!(DEFAULT_REGEXP_ALPHABET).test(data.product)){
            throw new ValidationError(`입력유형 오류 : 영문자(알파벳)`, data.seq, 'product' );
        }
        // if(!(DEFAULT_REGEXP_ALPHABET).test(data.product)){

        // }
    }
}


/**
 * 정제된 데이터를 저장
 * 
 * 1. 유효성 검사
 *  1) 자료형 검사 : 자료유형에 알맞은 값을 갖어야 함.
 *  2) 품절 여부 검사 : 저장 품목 중 품절 상품이 있으면 안됨.
 * 
 * 2. 저장
 */
export default () => {

    const sourceData = [
        { seq: '001', product: 'apple', price: '1000', expireDt: '2023-12-31', soldOut: false},
        { seq: '002', product: 'banaa', price: '2000', expireDt: '2024-01-01', soldOut: false},
        { seq: '003', product: 'melon123', price: '4000', expireDt: '2033-10-01', soldOut: true},
        { seq: '004', product: 'grape', price: '1500', expireDt: '2023-11-15', soldOut: false},
    ];

    // 1. Validation
    try{

        VadlidationForSave(sourceData);

    }catch(e){
        if(e instanceof ValidationError){
            console.log(`[${e.name}] :: ${e.message} - seq: ${e.seq}, property: ${e.property}`);
        }
        else{
            throw e;
        }
    }

    // 2. Save
    // axios.post(`${DATA_SAVE_API}`)
    //     .then((response) => {

    //     })
    //     .catch((error) => {
    //         throw error;
    //     })

}