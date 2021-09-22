import React from "react";
import s from "./BtnPage.module.css";

const BtnPage = (props) => {
    const countPage = Math.ceil(props.totalUserCount / props.pageSize);
    const renderBtnPageUsers = () => {
        const arrPageCount = [];
        for (let i = 1; i <= countPage; i++) {
            arrPageCount.push(i);
        }

        if (arrPageCount.length > 0) {
            const selectArrPageCount = arrPageCount.slice(
                props.visiblePageBtn[0],
                props.visiblePageBtn[1],
            );

            return selectArrPageCount.map((i) => {
                return (
                    <div
                        key={i}
                        onClick={() => props.handleClickBtnPage(i)}
                        className={props.currentPage === i ? s.btnPageUsersActive : s.btnPageUsers}>
                        <div className={s.btnCurrentPage}>{i}</div>
                    </div>
                );
            });
        } else {
            // if the pages did not load
            for (let i = 1; i <= 7; i++) {
                arrPageCount.push(i);
            }
            const selectArrPageCount = arrPageCount.slice(
                props.visiblePageBtn[0],
                props.visiblePageBtn[1],
            );

            return selectArrPageCount.map((i) => {
                return (
                    <div
                        key={i}
                        className={props.currentPage === i ? s.btnPageUsersActive : s.btnPageUsers}>
                        <div className={s.btnCurrentPage}>
                            <br />
                        </div>
                    </div>
                );
            });
        }
    };
    return (
        <div className={s.btnUserPageBox}>
            <div onClick={() => props.handleClickBtnPage(1)} className={s.FLBtn}>
                First page
            </div>
            {renderBtnPageUsers()}
            <div onClick={() => props.handleClickBtnPage(countPage)} className={s.FLBtn}>
                Last page
            </div>
        </div>
    );
};

export default BtnPage;
