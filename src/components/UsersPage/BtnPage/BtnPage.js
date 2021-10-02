import React, { useEffect, useState } from "react";
import s from "./BtnPage.module.css";

const BtnPage = ({
    totalUserCount,
    pageSize,
    visiblePageBtn,
    handleClickBtnPage,
    currentPage,
    setVisiblePageBtn,
    setCountBtn,
    countBtn,
}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isCountBtn,  setIsCountBtn] = useState(3);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
        if (windowWidth > 1200) {
             setIsCountBtn(11);
        } else if (windowWidth > 992) {
             setIsCountBtn(9);
        } else if (windowWidth > 768) {
             setIsCountBtn(7);
        } else if (windowWidth > 576) {
             setIsCountBtn(5);
        } else if (windowWidth > 400) {
             setIsCountBtn(3);
        }
        if (isCountBtn !== countBtn) {
            setCountBtn(isCountBtn);
            setVisiblePageBtn([0, isCountBtn]);
        }
    }, [windowWidth, isCountBtn, countBtn, setVisiblePageBtn, setCountBtn]);

    const countPage = Math.ceil(totalUserCount / pageSize);

    const renderBtnPageUsers = () => {
        const arrPageCount = [];
        for (let i = 1; i <= countPage; i++) {
            arrPageCount.push(i);
        }

        if (arrPageCount.length > 0) {
            const selectArrPageCount = arrPageCount.slice(visiblePageBtn[0], visiblePageBtn[1]);

            return selectArrPageCount.map((i) => {
                return (
                    <div
                        key={i}
                        onClick={() => handleClickBtnPage(i)}
                        className={currentPage === i ? s.btnPageUsersActive : s.btnPageUsers}>
                        <div className={s.btnCurrentPage}>{i}</div>
                    </div>
                );
            });
        } else {
            // if the pages did not load
            for (let i = 1; i <= 3; i++) {
                arrPageCount.push(i);
            }
            const selectArrPageCount = arrPageCount.slice(visiblePageBtn[0], visiblePageBtn[1]);

            return selectArrPageCount.map((i) => {
                return (
                    <div
                        key={i}
                        className={currentPage === i ? s.btnPageUsersActive : s.btnPageUsers}>
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
            <div onClick={() => handleClickBtnPage(1)} className={s.FLBtn}>
                First <br /> Page
            </div>
            {renderBtnPageUsers()}
            <div onClick={() => handleClickBtnPage(countPage)} className={s.FLBtn}>
                Last <br /> Page
            </div>
        </div>
    );
};

export default BtnPage;
