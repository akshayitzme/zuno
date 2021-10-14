export default async function getFollowers(username){
    if (username !== "" || null) {
        return await fetch(`https://api.github.com/users/${username}/followers`)
            .then(response => response.json())
    }
}