const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
export const usersAPI = {
    getUsers(currentPage = 1, pageCount = 10) {
        return fetch(`${baseUrl}users?page=${currentPage}&count=${pageCount}`)
               .then(response => response.json());
    }
};