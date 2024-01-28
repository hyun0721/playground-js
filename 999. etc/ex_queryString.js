export default ()=> {

    /**
     * URL 객체 (현재 전체 URL 획득 : window.location.href )
     * [예제] https://itteamb.blogspot.com/search/label/javascript?updated-max=2023-07-09T17:33:00%2B09:00&max-results=20&start=3&by-date=false
     */
    let exUrl = new URL(window.location.href);

    /**
     * URL QueryString 객체 (현재 URL의 QueryString 정보 : window.location.search)
     * ?updated-max=2023-07-09T17:33:00%2B09:00&max-results=20&start=3&by-date=false
     */
    let exUrlSearch = new URLSearchParams(window.location.search);


    /** Key, Value 순회 (1) */
    for(const [key, value] of exUrl.searchParams.entries()){
        console.log(key + ':' + value);
    }

    /** Key, Value 순회 (2)*/
    for(const [key, value] of exUrlSearch.entries()){
        console.log(key + ':' + value);
    }



    // TODO :: Request QueryString vs Body
    // TODO :: hash (퍼센트 디코딩 X) : 페이지 이동(라우팅) 등을 목적으로 함. (location.hash)
    //          -- FrontEnd F/W 에서 router Hisotry Mode를 예시로 함.
    // TODO :: 인코딩 디코딩 - URL Query String에 한글 및 특수문자가 있는 경우. (퍼센트 디코딩)


    /* Script

        최근 URL을 통해 화면 인자를 전달하는 방식에 대해 고민하는 영상이나 글들을 많이 보이는 것 같습니다.
        실무에서는 윈도우 팝업을 열 때, 필요한 데이터 조회에 필요한 조건들을 queryString으로 넘기는 구조가 많았습니다.
        유지보수나 전달인자를 파악하는 데에 좋았지만 사용자에게 노출되는 보안문제나, URL 길이에 제약받아 문제가 되는 등의 이슈가 발생하기도 했습니다.
    */
}

{

// 결과 :: https://itteamb.blogspot.com?a=%ED%85%8C%EC%8A%A4%ED%8A%B8
encodeURI('https://itteamb.blogspot.com?a=테스트');

// 결과 :: https://itteamb.blogspot.com?a=테스트
decodeURI('https://itteamb.blogspot.com?a=%ED%85%8C%EC%8A%A4%ED%8A%B8')

// 결과 ::  https%3A%2F%2Fitteamb.blogspot.com%3Fa%3D%ED%85%8C%EC%8A%A4%ED%8A%B8
encodeURIComponent('https://itteamb.blogspot.com?a=테스트');

// 결과 :: https://itteamb.blogspot.com?a=테스트
decodeURIComponent('https%3A%2F%2Fitteamb.blogspot.com%3Fa%3D%ED%85%8C%EC%8A%A4%ED%8A%B8');


window.location.hash;

let temp = new URL(window.location.href)
temp.hash;
}