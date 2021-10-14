import React from 'react'
import Head from 'next/head';
import 'remixicon/fonts/remixicon.css'
import { useRouter } from 'next/router'

import SearchForm from '../../components/SearchForm';
import getFollowers from '../../functions/getFollowers'
import FollowerList from '../../components/FollowerList';

function followers() {
    const router = useRouter()
    const { username } = router.query;

    const [followers, setFollowers] = React.useState('')
    React.useEffect(async () => {
        if (username !== "" || null) {
            setFollowers(await getFollowers(username))
        } else {
            router.push('/')
        }
    }, [username])

    return (
        <div className="bg-1 mx-auto h-screen w-screen p-8">
            <Head>
                <title>Zuno | {username}&apos;s followers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col md:flex-row justify-between">
                <h1 className="place-self-start text-6xl text-white font-bold clr-1">Zuno.</h1>
                <SearchForm />
            </div>

            {followers ? (

                <div className="m-10">
                    <h2 className="text-3xl text-white">{username}&apos;s followers</h2>
                    <div className="container h-96 overflow-auto mt-4 p-2 border-2 brc-1">
                        {followers.map((follower) => {
                            return <FollowerList follower={follower} key={follower.id} />
                        })}
                    </div>
                </div>

            ) : (<>Loading</>)}
        </div>
    )

}

export default followers
