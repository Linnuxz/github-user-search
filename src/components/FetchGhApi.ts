export const fetchApi = async (username:string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json()
    return data;
};
