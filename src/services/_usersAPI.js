const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
export const usersAPI = {
    getAuthUser() {
        return this.fetchData(`auth/me`, {
            credentials: 'include'
        })
    },
    getUsers(currentPage, pageCount) {
       return this.fetchData(`users?page=${currentPage}&count=${pageCount}`, {
           credentials: 'include'
       })
    },
    getUserById(userId) {
       return this.fetchData(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return this.fetchData(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return this.fetchData(`profile/status`, {
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
      return this.fetchData(`follow/${userId}`, {
          method: 'POST',
          credentials: 'include',
          headers: {
              'API-KEY': '584c6db4-e40f-4182-aad0-fa71322a2044',
          }
      })
    },
    unsubscribe(userId) {
        return this.fetchData(`follow/${userId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '584c6db4-e40f-4182-aad0-fa71322a2044',
            }
        })
    },
    fetchData(urlPart, param = {}) {
        return fetch(`${baseUrl}${urlPart}`, param)
            .then(response => {
                if(!response.ok) {
                    throw new Error('HTTP error, status = ' + response.status);
                }
                return response.json();
            });
    }
};