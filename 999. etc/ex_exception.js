const DEFAULT_REGEXP_ALPHABET = /^[a-zA-Z]+$/;        // 영문자(알파벳)
const DEFAULT_REGEXP_ALPHANUM = /^[0-9a-zA-Z]+$/;     // 영문자 + 숫자
const DEFAULT_REGEXP_FIGURE = /^[0-9]+$/;             // 숫자
const DEFAULT_REGEXP_DATE = /^(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;  // 날짜

class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class FormatError extends BaseError {
    constructor(message, seq, property) {
        super(message);
        this.seq = seq;
        this.property = property;
    }
}

class LogicalError extends BaseError {
    constructor(message, seq, property, category){
        super(message);
        this.seq = seq;
        this.property = property;
        this.category = category;
    }
}

class APISendError extends BaseError {
    constructor(message, url, code){
        super(message);
        this.url = url;
        this.code = code;
    }
}

class SaveError extends BaseError {
    constructor(message){
        super(message);
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
 * 
 */
export default () => {

    /**
     * 1. 유효성 검사
     * 
     * @param {*} rowData
     */
    const Validation = (rowData) => {

        // 1. 자료형에 대한 유효성 검사
        // 2. 로직상의 유효성 검사 (품절 여부 등)

        if(!(DEFAULT_REGEXP_ALPHABET).test(rowData.product)){
            throw new FormatError(`자료유형 오류 : 영문자(알파벳)`, rowData.seq, rowData.product );
        }

        if(!(DEFAULT_REGEXP_FIGURE).test(rowData.price)){
            throw new FormatError(`자료유형 오류 : 숫자`, rowData.seq, rowData.price );
        }

        if(!(DEFAULT_REGEXP_DATE).test(rowData.expireDt)){
            throw new FormatError(`자료유형 오류 : 날짜`, rowData.seq, rowData.expireDt);
        }

        if(rowData.soldOut){
            const category = `STOCK`;
            throw new LogicalError(`논리유형 오류`, rowData.seq, rowData.soldOut ? '품절' : '재고', category);
        }

    }

    /**
     * 2. 데이터 전송 부
     */
    const SendData = (sendData) => {
        
        const DATA_SAVE_API = 'http://test.com';

        axios.post(`${DATA_SAVE_API}`, {params: sendData})
            .then((response) => {

                /** Success Process */

                if(response.state = 'invalid'){
                    throw new APISendError('유효하지 않은 응답', DATA_SAVE_API, response.code);
                }
            })
            .catch((error) => {
                throw new APISendError('전송 실패', DATA_SAVE_API, '');
            })

    }

    const SaveData = (sourceData) => {

        /** 1. 유효성 검사 */
        try{
            sourceData.map(row => Validation(row));
        }
        catch(error) {
            if(error instanceof FormatError){ throw new SaveError(`[${error.message}]\n행(SEQ): ${error.seq}\n입력값: ${error.property}`); }
            else if (error instanceof LogicalError) { throw new SaveError(`[${error.message}]\n행(SEQ): ${error.seq}\n입력값: ${error.property}\n구분: ${error.category}`); }
            else { throw error; }
        }

        /** 2. API Send (Save) */
        try{
            SendData(sourceData);
        }
        catch(error){
            if(error instanceof APISendError){ throw new SaveError(`[API Error]\nCode: ${error.code}\nMessage: ${error.message}`); }
        }
    }
    

    try{
        const sourceData = [
            { seq: '001', product: 'apple', price: '1000', expireDt: '2023-12-31', soldOut: false},
            { seq: '002', product: 'banaa', price: '2000', expireDt: '2024-01-00', soldOut: false},
            // { seq: '003', product: 'melon123', price: '4000', expireDt: '2033-10-01', soldOut: true},
            { seq: '004', product: 'grape', price: '1500', expireDt: '2023-11-15', soldOut: false},
            { seq: '005', product: 'cherry', price: '4400', expireDt: '2023-11-15', soldOut: true},
        ];

        SaveData(sourceData);

    }catch(e){
        if(e instanceof SaveError) { alert(e.message); }
        else { throw e; }
    }

}