function adxFunc(courseID){
    console.log("adxFunc called");
    fetch('/api/v1/courses/' + courseID +'/modules?access_token=7036~bVNFBUILJmAN3kmNgHtFvU1VE36pMclqXX6EYOq8gcegREOEtwbWZdGBNjjhLhyk', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
       return response.json();
    });
}