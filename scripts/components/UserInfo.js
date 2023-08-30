/*class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._nameInput = document.querySelector(nameSelector);
        this._jobInput = document.querySelector(jobSelector);
        this._nameInfo = document.querySelector('.profile__name');
        this._jobInfo = document.querySelector('.profile__job');
    }
    getUserInfo() {
        this._nameInput.value = this._nameInfo.textContent;
        this._jobInput.value = this._jobInfo.textContent;
    }
    setUserInfo() {
        this._nameInfo.textContent = this._nameInput.value;
        this._jobInfo.textContent = this._jobInput.value;
    }
}*/

export default class UserInfo {
    constructor(data) {
        this._name = data.firstname;
        this._job = data.job;
    }
    setUserInfo() {
        document.querySelector('.profile__name').textContent = this._name;
        document.querySelector('.profile__job').textContent = this._job;
    }
    getUserInfo() {
        this._name = document.querySelector('.profile__name').textContent;
        this._job = document.querySelector('.profile__job').textContent;
    }
}