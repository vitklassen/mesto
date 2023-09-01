export default class UserInfo {
    constructor({firstname, job}, nameSelector, jobSelector) {
        this._name = firstname;
        this._job = job;
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }
    getUserInfo() {
        const nameInput = document.querySelector(".popup__input_name_firstname");
        const jobInput = document.querySelector(".popup__input_name_job");
        nameInput.value = this._nameElement.textContent;
        jobInput.value = this._jobElement.textContent;
    }
    setUserInfo() {
        this._nameElement.textContent = this._name;
        this._jobElement.textContent = this._job;
    }
}