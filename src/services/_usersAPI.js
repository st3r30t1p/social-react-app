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
              'API-KEY': '8ceb1dca-7bf9-466e-8700-f2ada88c3a18',
          }
      })
    },
    unsubscribe(userId) {
        return this.fetchData(`follow/${userId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '8ceb1dca-7bf9-466e-8700-f2ada88c3a18',
            }
        })
    },
    fetchData(urlPart, param = {}) {
        return fetch(`${baseUrl}${urlPart}`, param)
            .then(response => response.json(), error => console.log(error));
    }
};