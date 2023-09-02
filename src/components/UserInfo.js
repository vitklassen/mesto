export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }
    getUserInfo(nameInput, jobInput) {
        nameInput.value = this._nameElement.textContent;
        jobInput.value = this._jobElement.textContent;
    }
    setUserInfo(firstname, job) {
        this._nameElement.textContent = firstname;
        this._jobElement.textContent = job;
    }
}