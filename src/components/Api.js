export default class Api {
    constructor({url, header, token}) {
        this._url = url;
        this._header = header;
        this._token = token;
    }   
    getAllCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...');
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
        })
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...');
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
        })
    }

    getAllNeededData() {
        return Promise.all([this.getUserInfo(), this.getAllCards()]);
    }

    setUserInfo(userInfo) {
        fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            },
            body: JSON.stringify({
                name: userInfo.firstname,
                about: userInfo.job
            })
        })
    }

    addNewCard(newCard) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }, 
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link
            })
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...');
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
        })
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    addLike(id) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...');
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
        })
    }

    deleteLike(id) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...');
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
        })
    }

    editAvatar(url) {
       return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            },
            body: JSON.stringify({
                avatar: url
            })
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...');
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
        })
    }

}