import React from "react";
import { useRouter } from "next/router";
function FollowerList({ follower }) {
  const router = useRouter();
  const navigateToUser = (username) => {
    router.push(`/${username}`);
  };
  return (
    <div
      className="w-full bg-1 p-2"
      onClick={() => navigateToUser(follower.login)}
    >
      <a
        class="inline-flex"
        href={`https://github.com/${follower.login}`}
        target="_blank"
      >
        <img
          className="w-20 mr-2"
          src={follower.avatar_url}
          alt={`${follower.login} image`}
        />
        <h3 className="text-2xl text-white">{follower.login}</h3>
      </a>
    </div>
  );
}

export default FollowerList;
