export let SessionUtil = (function(){

    /**
     * 입력함수
     * (동일 Key값으로 중복되어 들어온 경우 Update)
     * 
     * @param {*} key 
     * @param {*} value 
     */
    let Insert = function(key, value){
        sessionStorage.setItem(key, value);
    }


    /**
     * 입력 키값에 해당하는 value 반환.
     * (존재하지 않는 key는 null로 반환됨)
     * 
     * @param {*} key 
     * @returns 
     */
    let GetValue = function(key){
        return sessionStorage.getItem(key);
    }


    let Clear = function(){
        sessionStorage.clear();
    }


    let Remove = function(key){
        sessionStorage.removeItem(key);
    }

    /**
     * 모든 세션정보 반환
     * (Key값을 인덱스로 갖는 배열)
     * 
     * @returns {Array}
     */
    let GetAll = function(){

        let rtn = new Array();

        for(let key of Object.keys(sessionStorage)){
            rtn[key] = sessionStorage.getItem(key);
        }

        return rtn;
    }
    
    
    return {
        Insert: Insert,
        GetValue: GetValue,
        Clear: Clear,
        Remove: Remove,
        GetAll: GetAll
    }

})();


export let LocalUtil = (function(){

    /**
     * 입력함수
     * (동일 Key값으로 중복되어 들어온 경우 Update)
     * 
     * @param {*} key 
     * @param {*} value 
     */
    let Insert = function(key, value){
        localStorage.setItem(key, value);
    }


    /**
     * 입력 키값에 해당하는 value 반환.
     * (존재하지 않는 key는 null로 반환됨)
     * 
     * @param {*} key 
     * @returns 
     */
    let GetValue = function(key){
        localStorage.getItem(key);
    }


    let Clear = function(){
        localStorage.clear();
    }


    let Remove = function(key){
        localStorage.removeItem(key);
    }


    /**
     * 모든 세션정보 반환
     * (Key값을 인덱스로 갖는 배열)
     * 
     * @returns {Array}
     */
    let GetAll = function(){

        let rtn = new Array();

        for(let key of Object.keys(localStorage)){
            rtn[key] = localStorage.getItem(key);
        }

        return rtn;
    }


    return {
        Insert: Insert,
        GetValue: GetValue,
        Clear: Clear,
        Remove: Remove,
        GetAll: GetAll
    }
})();