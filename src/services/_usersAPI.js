const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
export const usersAPI = {
    getUsers(currentPage = 1, pageCount = 10) {
       return this.fetchData(`users?page=${currentPage}&count=${pageCount}`)
    },
    getUserById(userId) {
       return this.fetchData(`profile/${userId}`)
    },
    fetchData(urlPart) {
        return fetch(`${baseUrl}${urlPart}`)
            .then(response => response.json(), error => console.log(error));
    }
};