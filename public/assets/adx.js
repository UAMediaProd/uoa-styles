//ADX API Class
class adxHelper {
    constructor(courseID, userID){
        this.courseID = courseID;
        this.userID = userID;
        this.accessToken = '7036~bVNFBUILJmAN3kmNgHtFvU1VE36pMclqXX6EYOq8gcegREOEtwbWZdGBNjjhLhyk'; //move to ENV variable if possible
        this.defaultHeaders = {'Content-Type': 'application/x-www-form-urlencoded'}
    }

     //Getters

     getModules() {
         return fetch('/api/v1/courses/' + this.courseID + '/modules?access_token=' + this.accessToken, {
             method: 'GET',
             headers: this.defaultHeaders
         }).then((response) => {
             return response.json();
         });
     }

    getModuleItems(moduleID){
        /* return a table of the module items in the Console */
        return fetch('/api/v1/courses/' + this.courseID + '/modules/' + moduleID + '/items?access_token=' + this.accessToken, {
            method: 'GET',
            headers: this.defaultHeaders
        }).then((response) => {
            return response.json();
        });
    }

    //Methods

    async listModules(){
        /* return a table of the modules in the Console */
        const mods = await this.getModules();
        console.table(mods);
    }

    async printModules(eID){
        /* take a document ID and attach the results of getModules to it */
        const mods = await this.getModules();
        document.getElementById(eID).innerHTML += `<p><strong>${mods[0].name}</strong></p>`;
    }

    async listItems(){
        /* return a table of the module items in the Console */
        const mods = await this.getModules();
        for (let i = 0; i < mods.length; i++){
            const modItems = await this.getModuleItems(mods[i].id);
            console.table(modItems);
        }
    }

}

// Canvas-side
// let adxID = this.ENV.COURSE_ID;
// let userID = this.ENV.current_user_id;
// let adx = new adxHelper(adxID,userID);
//
// adx.listModules();
// adx.printModules('eclInjection');
//
// adx.listItems();