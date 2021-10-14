import React from 'react'


function FollowerList({follower}) {
    return (
        <div className="w-full bg-1 p-2">
            <a class="inline-flex" href={`https://github.com/${follower.login}`} target="_blank">
                <img className="w-20 mr-2" src={follower.avatar_url} alt={`${follower.login} image`}/>
                <h3 className="text-2xl text-white">{follower.login}</h3>
            </a>
        </div>
    )
}

export default FollowerList
