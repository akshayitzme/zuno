export default async function getUserData(username) {
    if (username !== "" || null) {
        return await fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
    }
}