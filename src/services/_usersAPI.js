const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
export const usersAPI = {
    getUsers(currentPage = 1, pageCount = 10) {
       return this.fetchData(`users?page=${currentPage}&count=${pageCount}`, {
           credentials: 'include'
       })
    },
    getUserById(userId) {
       return this.fetchData(`profile/${userId}`)
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