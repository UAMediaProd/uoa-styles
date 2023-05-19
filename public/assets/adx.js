//ADX API Class
class adxHelper {
    constructor(courseID, userID){
        this.courseID = courseID;
        this.userID = userID;
        this.accessToken = '7036~bVNFBUILJmAN3kmNgHtFvU1VE36pMclqXX6EYOq8gcegREOEtwbWZdGBNjjhLhyk';
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

    getBlueprintSub() {
        return fetch('/api/v1/courses/' + this.courseID + '/blueprint_subscriptions/default/migrations?access_token=' + this.accessToken, {
            method: 'GET',
            headers: this.defaultHeaders
        }).then((response) => {
            return response.json();
        });
    }

    getPages(courseID){
        return fetch('/api/v1/courses/' + courseID + '/pages?per_page=30&sort=updated_at&order=desc&access_token=' + this.accessToken, {
            method: 'GET',
            headers: this.defaultHeaders
        }).then((response) => {
            return response.json();
        });
    }

    getUser(){
        return fetch('/api/v1/users/' + this.userID + '?access_token=' + this.accessToken, {
            method: 'GET',
            headers: this.defaultHeaders
        }).then((response) => {
            return response.json();
        });
    }

    async getAllItems(){
        let modArray = {};
        const mods = await this.getModules();
        for (let i = 0; i < mods.length; i++){
            modArray[mods[i].id] = { title: mods[i].name, items: await this.getModuleItems(mods[i].id)};
        }
        return modArray;
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
        for (let i = 0; i < mods.length; i++){
            document.getElementById(eID).innerHTML += `<p><strong>${mods[i].name}</strong></p>`;
        }
    }

    async listItems() {
        const allItems = await this.getAllItems();
        console.log(allItems);
    }

    async printItems(eID){
        const mods = await this.getModules();
        for (let i = 0; i < mods.length; i++){
            document.getElementById(eID).innerHTML += `<p><strong>${mods[i].name}</strong></p>`;
            const modItems = await this.getModuleItems(mods[i].id);
            for (let j = 0; j < modItems.length; j++){
                document.getElementById(eID).innerHTML += `<p>${modItems[j].title}</p>`;
            }
        }
    }

    async logBPChanges(){
        const changes = await this.getBlueprintSub();
        let latest = changes[0].imports_queued_at;
        const pages = await this.getPages(this.courseID);
        for (let i = 0; i < pages.length; i++){
            if(pages[i].updated_at > latest){
                console.log(pages[i].title, "was updated", new Date(pages[i].updated_at).toDateString());
            }
        }
    }

    async printBPChanges(eID){
        let count = 0;
        const changes = await this.getBlueprintSub();
        let latest = changes[0].imports_queued_at;
        document.getElementById(eID).innerHTML += `<p><small>Last Blueprint Sync was ${new Date(latest)}</small></p>`;
        document.getElementById(eID).innerHTML += `<hr>`;
        const pages = await this.getPages(this.courseID);
        for (let i = 0; i < pages.length; i++){
            if(pages[i].updated_at > latest){
                count++;
                document.getElementById(eID).innerHTML += `<p><strong><a href="${pages[i].html_url}" target='blank'>${pages[i].title}</a></strong> was updated ${new Date(pages[i].updated_at)}</p>`;
            }
        }
        document.getElementById(eID).innerHTML += `<p><small><strong>${count}</strong> pages were updated since the last Blueprint Sync</small></p>`;
    }

    async logUser(){
        const user = await this.getUser();
        console.table(user);
    }
}


// Canvas-side
let adx = new adxHelper(this.ENV.COURSE_ID,this.ENV.current_user_id);

adx.logUser();