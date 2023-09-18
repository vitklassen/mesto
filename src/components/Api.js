export default class Api {
    constructor({url, header, token}) {
        this._url = url;
        this._header = header;
        this._token = token;
    }   

    _sendRequest(url, options) {
        return fetch(url, options)
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
    getAllCards() {
        return this._sendRequest(`${this._url}cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    getUserInfo() {
        return this._sendRequest(`${this._url}users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    mainMethod() {
        return Promise.all([this.getUserInfo(), this.getAllCards()]);
    }

    setUserInfo(userInfo) {
        return this._sendRequest(`${this._url}users/me`, {
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
        return this._sendRequest(`${this._url}cards`, {
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
    }

    deleteCard(id) {
        return this._sendRequest(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    addLike(id) {
        return this._sendRequest(`${this._url}cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    deleteLike(id) {
        return this._sendRequest(`${this._url}cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            }
        })
    }

    editAvatar(url) {
       return this._sendRequest(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': this._header
            },
            body: JSON.stringify({
                avatar: url
            })
        })
    }

}