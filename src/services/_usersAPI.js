const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
export const usersAPI = {
    getAuthUser() {
        return this.fetchInstance(`auth/me`, {
            credentials: 'include'
        })
    },
    getUsers(currentPage, pageCount) {
       return this.fetchInstance(`users?page=${currentPage}&count=${pageCount}`, {
           credentials: 'include'
       })
    },

    login(email, password, rememberMe = false) {
        return this.fetchInstance('auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'API-KEY': '584c6db4-e40f-4182-aad0-fa71322a2044',
                'Content-Type': 'application/json'
            },
            body: {
                email,
                password,
                rememberMe
            }
        })
    },
    logout() {
        return this.fetchInstance('auth/login', {method: 'DELETE'});
    },

    getUserById(userId) {
       return this.fetchInstance(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return this.fetchInstance(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return this.fetchInstance(`profile/status`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'API-KEY': '584c6db4-e40f-4182-aad0-fa71322a2044',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status})
        })
    },
    subscribe(userId) {
      return this.fetchInstance(`follow/${userId}`, {
          method: 'POST',
          credentials: 'include',
          headers: {
              'API-KEY': '584c6db4-e40f-4182-aad0-fa71322a2044',
          }
      })
    },
    unsubscribe(userId) {
        return this.fetchInstance(`follow/${userId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '584c6db4-e40f-4182-aad0-fa71322a2044',
            }
        })
    },
    fetchInstance(urlPart, param = {}) {
        return fetch(`${baseUrl}${urlPart}`, param)
            .then(response => {
                if(!response.ok) {
                    console.log(new Error('HTTP error, status = ' + response.status));
                }
                return response.json();
            });
    }
};