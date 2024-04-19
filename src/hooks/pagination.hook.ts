import { useEffect, useState } from "react";

const usePagination = <T>(countPerPage: number) => {
    //                       state: 전체 객체 리스트 상태           //
    
    //                       state: 보여줄 객체 리스트 상태           //
    
    //                       state: 현재 페이지 번호 상태           //
    
    //                       state: 전체 페이지 번호 리스트 상태           //
    
    //                       state: 보여줄 페이지 번호 리스트 상태           //
    
    //                       state: 현재 섹션 상태           //
    
    //                       state: 전체 섹션 상태           //
    

    //                     function: 보여줄 객체 리스트 추출 함수         //
    const setView = () => {
        
    }

    //                     function: 보여줄 페이지 리스트 추출 함수         //
    const setViewPage = () => {
        
    }

    //                      effect: total list가 변경될 때마다 실행할 작업     //
    useEffect(() => {
        
    }, []);

    //                 effect: currentPage가 변경될 때마다 실행할 작업            //
    useEffect(() => {
        
    }, []);

    //                 effect: current section가 변경될 때마다 실행할 작업            //
    useEffect(() => {

    }, []);

    return {
        
    };
};

export default usePagination;