import React, { useState } from 'react';
import { useRouter } from 'next/router'
import getUserData from '../../functions/getUserData';
import formatDate from '../../functions/formatDate';
import SearchForm from '../../components/SearchForm'
import Footer from '../../components/Footer';

function ProfilePage() {
    let data = '';
    const router = useRouter()
    const { username } = router.query;
    const [isLoaded, setLoaded] = useState(0)
    const [name, setName] = useState('')
    const [repoCount, setRepoCount] = useState('')
    const [starCount, setStarCount] = useState('')
    const [gistCount, setGistCount] = useState('')
    const [followersCount, setFollowersCount] = useState('')
    const [followingCount, setFollowingCount] = useState('')
    const [loc, setLoc] = useState('')
    const [bio, setBio] = useState('')
    const [link, setLink] = useState('')
    const [avatarLink, setAvatarLink] = useState('')
    const [joined, setJoined] = useState('')

    React.useEffect(async () => {
        if (username !== "" || null) {
            data = await getUserData(username)
            let date = formatDate(data.created_at);
            setName(data.name)
            setAvatarLink(data.avatar_url)
            setRepoCount(data.public_repos)
            setGistCount(data.public_gists)
            setFollowersCount(data.followers)
            setFollowingCount(data.following)
            setJoined(date)
            setLoaded(1)
        }
    }, [username])

    return (
        <div>
            {isLoaded ? (
                <div className="bg-1 min-h-100 h-screen p-8">
                    <div className="flex flex-col md:flex-row justify-between">
                        <h1 className="place-self-start text-6xl text-white font-bold clr-1">Zuno.</h1>
                        <SearchForm />
                    </div>
                    <div className="mt-14 container mx-auto">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <div className="">
                                <img className="w-56" src={avatarLink} alt="" />
                                <h2 className="text-2xl font-bold clr-1">{username}</h2>
                                <h3 className="text-gray-300 text-base">{bio}</h3>
                                <h3 className="text-gray-300 text-base">{loc}</h3>
                                <h3 className="text-gray-300 text-base">
                                    <a href={link}>
                                        blog_link
                                    </a>
                                </h3>

                            </div>

                            <div className="mt-10">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <h3 className="clr-1 font-medium text-2xl">{followersCount}</h3>
                                        <h4 className="text-xl text-gray-300">Followers</h4>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <h3 className="clr-1 font-medium text-2xl">{followingCount}</h3>
                                        <h4 className="text-xl text-gray-300">Following</h4>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center  brc-1">
                                        <h3 className="clr-1 font-medium text-2xl">{starCount}</h3>
                                        <h4 className="text-xl text-gray-300">Stars</h4>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <h3 className="clr-1 font-medium text-2xl">{repoCount}</h3>
                                        <h4 className="text-xl text-gray-300">Public Repo's</h4>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <h3 className="clr-1 font-medium text-2xl">{gistCount}</h3>
                                        <h4 className="text-xl text-gray-300">Gist's</h4>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <h3 className="clr-1 font-medium text-2xl">{joined}</h3>
                                        <h4 className="ml-1 text-xl text-gray-300">Joined</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <div>Not Loaded</div>
            )}
        </div>
    )

}

export default ProfilePage
