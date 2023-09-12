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
        fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    addLike(id) {
        
    }

}