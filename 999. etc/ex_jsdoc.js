// @ts-check

export default () => {

    /** @type {number} */
    let number = 11;

    //@ts-expect-error
    number = '';

    //@ts-ignore
    number = true;


//#region  :: Enum

    /** @enum {string} */
    const LOG_LEVEL = {
        DEBUG    : "DEBUG",
        ERROR    : "ERROR",  
        WARNING  : "WARNING"
    }

    /** @type {LOG_LEVEL} */
    const temp = LOG_LEVEL.DEBUG;

    /**
     * 이력 남기기.
     * 
     * @param   {LOG_LEVEL}   logLevel 로그 수준
     * @param   {String}      text 내용
     * @returns {String}
     */
    function History(logLevel, text) {
        const fullText = `[${logLevel}] ${text}`;

        console.log(fullText);

        return fullText;
    }

    /** @type {(logLevel:LOG_LEVEL, text:String) => String} */
    const Arrow_History = (logLevel, text) => {
        const fullText = `[${logLevel}] ${text}`;

        console.log(fullText);

        return fullText;
    }


//#endregion


//#region   :: Data Format

    /**
     * @typedef ISaveData
     * @type {ISaveRowData[]}
     */

    /**
     * @typedef ISaveRowData
     * @property {String} seq
     * @property {String} product
     * @property {Number} price
     * @property {*} expireDt
     * @property {boolean} soldOut
     */

    /**
     * 저장하는 함수
     *
     * @param {ISaveData} inputData 저장하고자 하는 값
     * @returns {boolean}
     */
    function SaveData(inputData) {
        
        /** Save Logic */

        return true;
    }



    /** @type {ISaveData} */
    /** @type {ISaveRowData[]} */
    /** @type {Array<ISaveRowData>} */
    const sourceData = [
        { seq: '001', product: 'apple'   , price: 1000, expireDt: '2023-12-31', soldOut: false  },
        { seq: '002', product: 'banaa'   , price: 2000, expireDt: '2024-01-00', soldOut: false  },
        { seq: '003', product: 'melon123', price: 4000, expireDt: '2033-10-01', soldOut: true   },
        { seq: '004', product: 'grape'   , price: 1500, expireDt: '2023-11-15', soldOut: false  },
        { seq: '005', product: 'cherry'  , price: 4400, expireDt: '2023-11-15', soldOut: true   },
    ];

    SaveData();

//#endregion
    
    const inputElement = document.getElementById('something');      // HTMLElement
    const inputElement1 = document.querySelector('#something');     // Element
    const inputElement2 = document.querySelector('input');          // HTMLInputElement    

    /** @type { HTMLInputElement } */
    // const inputElemen3 = document.getElementById('something');


}