(function () {

    // Get 요청
    fetch('http://localhost:3001/user')
    .then(response => 
        response.json()
    )
    .then(data => {
        console.log(data);
    })
    .catch(error => 
        console.error('Error fetching posts:', error)
    );
        
    // Post 요청 : Live 서버로 실행시킨 경우, "db.json" 파일이 갱신되기 때문에 주의
    // fetch('http://localhost:3001/user', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         id: "4",
    //         name: 'John 123',
    //     })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('POST response data:', data);
    // })
    // .catch(error => {
    //     console.error('Error with POST request:', error);
    // });

    // Put 요청 : Live 서버로 실행시킨 경우, "db.json" 파일이 갱신되기 때문에 주의
    // fetch('http://localhost:3001/user/1', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: 'hong',
    //     })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('PUT response data:', data);
    // })
    // .catch(error => {
    //     console.error('Error with PUT request:', error);
    // });

    // Delete 요청
    fetch('http://localhost:3001/user/4', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('DELETE response data:', data);
    })
    .catch(error => {
        console.error('Error with DELETE request:', error);
    });
    
})();