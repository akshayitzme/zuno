
function urlChecker(url) {
    if(!url.includes('http')){
        return `https://${url}`
    }else{
        return url
    }
}

export default urlChecker
