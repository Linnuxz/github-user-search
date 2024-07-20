export const fetchApi = async (username: string) => {
    const headers = new Headers({
        Authorization: `${import.meta.env.NAME_OF_VAR}`,
    });
    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers,
    });
    const data = await response.json();
    return data;
};
