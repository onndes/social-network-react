import React from "react"
import PreloaderLine from "../../Common/PreloaderLine/PreloaderLine"
import User from "./User/User"
import PaginationUsers from "./PaginationUsers/PaginationUsers"
import { UsersTypes } from "../../Types/Types"

type UsersPageType = {
    users: Array<UsersTypes>
    windowWidth: number
    totalUserCount: number
    visiblePageBtn: Array<number>
    pageSize: number
    currentPage: number
    countBtn: number
    isLoading: boolean
    buttonFollowWork: Array<any>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    handleClickBtnPage: (page: number, isGet: any) => void
    setVisiblePageBtn: () => void
    setCountBtn: () => void
}

const UsersPage: React.FC<UsersPageType> = (props) => {
    const renderUsersList = () => {
        return props.users.map((user) => {
            return (
                <div key={user.id}>
                    <User
                        user={user}
                        buttonFollowWork={props.buttonFollowWork}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        windowWidth={props.windowWidth}
                    />
                </div>
            )
        })
    }

    return (
        <>
            <PaginationUsers
                totalUserCount={props.totalUserCount}
                pageSize={props.pageSize}
                visiblePageBtn={props.visiblePageBtn}
                handleClickBtnPage={props.handleClickBtnPage}
                currentPage={props.currentPage}
                setVisiblePageBtn={props.setVisiblePageBtn}
                setCountBtn={props.setCountBtn}
                countBtn={props.countBtn}
            />

            {props.isLoading ? <PreloaderLine /> : renderUsersList()}
        </>
    )
}

export default UsersPage
