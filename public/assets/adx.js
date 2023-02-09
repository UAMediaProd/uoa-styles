//ADX API Class

class adxHelper {
    constructor(courseID){
        this.courseID = courseID;
    }
    async getModules(){
        return fetch('/api/v1/courses/' + this.courseID +'/modules?access_token=7036~bVNFBUILJmAN3kmNgHtFvU1VE36pMclqXX6EYOq8gcegREOEtwbWZdGBNjjhLhyk', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            return response.json();
        });
    }
}









