
function urlChecker(url) {
    if(url && !url.includes('http')){
        return `https://${url}`
    }else{
        return url
    }
}

export default urlChecker
