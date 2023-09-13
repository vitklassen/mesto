export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
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
    setUserInfoFromApi(dataFromApi) {
        this._nameElement.textContent = dataFromApi.name;
        this._jobElement.textContent = dataFromApi.about;
        this._avatarElement.src = dataFromApi.avatar;
    }
}