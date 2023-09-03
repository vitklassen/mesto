export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return {
            userName: this._nameElement.textContent,
            userJob: this._jobElement.textContent
        }
    }
    setUserInfo(data) {
        this._nameElement.textContent = data.firstname;
        this._jobElement.textContent = data.job;
    }
}