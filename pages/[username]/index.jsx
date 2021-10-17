import React, { useState } from 'react';
import Head from 'next/head';
import 'remixicon/fonts/remixicon.css'
import { useRouter } from 'next/router'
import getUserData from '../../functions/getUserData';
import formatDate from '../../functions/formatDate';
import urlChecker from '../../functions/urlChecker';
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
            setLink(urlChecker(data.blog))
            setLoaded(1)
        } else {
            router.push('/')
        }
    }, [username])

    return (
        <div className="">
            {isLoaded ? (
                <div className="mx-auto h-screen w-screen p-8">
                    <Head>
                        <title>Zuno - {username}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="flex flex-col md:flex-row justify-between">
                        <h1 className="place-self-start text-6xl text-white font-bold clr-1">Zuno.</h1>
                        <SearchForm />
                    </div>
                    <div className="pt-14 container mx-auto">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <div className="">
                                <img className="w-56 rounded" src={avatarLink} alt="" />
                                <h2 className="text-2xl font-bold clr-1">{username}</h2>
                                <h3 className="text-gray-300 text-base">{bio}</h3>
                                <h3 className="text-gray-300 text-base">{loc}</h3>
                                <h3 className="text-gray-300 text-base">
                                    <i className="ri-links-line"></i>
                                    <a href={link} target="_blank">
                                        <span className="font-medium">&nbsp;Website</span>
                                    </a>
                                </h3>

                            </div>

                            <div className="mx-auto pt-10">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <a href={`${username}/followers`}>
                                            <h3 className="clr-1 font-medium text-2xl">{followersCount}</h3>
                                            <h4 className="text-xl text-gray-300">Followers</h4>
                                        </a>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <a href="">
                                            <h3 className="clr-1 font-medium text-2xl">{followingCount}</h3>
                                            <h4 className="text-xl text-gray-300">Following</h4>
                                        </a>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center  brc-1">
                                        <a href="">
                                            <h3 className="clr-1 font-medium text-2xl">{starCount}</h3>
                                            <h4 className="text-xl text-gray-300">Stars</h4>
                                        </a>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <a href="">
                                            <h3 className="clr-1 font-medium text-2xl">{repoCount}</h3>
                                            <h4 className="text-xl text-gray-300">Public Repo's</h4>
                                        </a>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <a href="">
                                            <h3 className="clr-1 font-medium text-2xl">{gistCount}</h3>
                                            <h4 className="text-xl text-gray-300">Gist's</h4>
                                        </a>
                                    </div>

                                    <div className="hover:bg-gray-700 mx-auto text-center border-4 rounded-full flex p-3 items-center brc-1">
                                        <a href="">
                                            <h3 className="clr-1 font-medium text-2xl">{joined}</h3>
                                            <h4 className="ml-1 text-xl text-gray-300">Joined</h4>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : ''}
        </div>
    )

}

export default ProfilePage
