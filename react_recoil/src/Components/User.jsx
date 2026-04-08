import React from 'react'
import { useRecoilValue } from 'recoil'
import UserState from '../states/UserAtom'
export default function User() {
    var user = useRecoilValue(UserState)
    return (
        <div>
            {user.isLogin ? (
                <p> UserName: {user.username}</p>

            ) : (
                <p>No user login</p>
            )}
        </div>
    )
}
