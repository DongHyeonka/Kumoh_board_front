import { ChangeEvent, KeyboardEvent, useEffect } from "react";
import "./style.css";

//                           component: 헤더 컴포넌트                        //
export default function Header() {
  //              state: 로그인 유저 상태           //

  //              state: path 상태              //

  //            state: cookie 상태              //

  //              state: 로그인 상태           //

  //                function: 네비게이트 함수              //

  //             component: 검색 버튼 컴포넌트              //
  const SearchButton = () => {
    //            state: 검색어 버튼 요소 참조 상태           //

    //            state: 검색 버튼 상태           //

    //               state: 검색어 상태                  //

    //               state: 검색어 path variable상태                  //

    //                   event handler: 검색 변경 이벤트 처리 함수            //
    const onSearchWordChangeHandler = (
      event: ChangeEvent<HTMLInputElement>
    ) => {};

    //                   event handler: 검색 키 이벤트 처리 함수            //
    const onSearchWordKeyDownHandler = (
      event: KeyboardEvent<HTMLInputElement>
    ) => {};

    //                   event handler: 검색 아이콘 클릭 이벤트 처리 함수            //
    const onSearchButtonClickHandler = () => {};

    //                   effect: 검색어 path variable 변경될 때 마다 실행될 함수            //
    useEffect(() => {}, []);

    //                render: 검색 버튼 컴포넌트 렌더링 함수 (false)           //
    if (!status) {
      return <div></div>;
    }

    //                render: 검색 버튼 컴포넌트 렌더링 함수 (true)           //
    return <div></div>;
  };

  //           component: 로그인 또는 마이페이지 버튼 컴포넌트        //
  const MyPageButton = () => {
    //        state: userEmail path variable 상태                 //

    //            event handler: 마이페이지 버튼 클릭 이벤트 처리 함수             //
    const onMyPageButtonClickHandler = () => {};

    //            event handler: 마이페이지 버튼 클릭 이벤트 처리 함수             //
    const onSignOutButtonClickHandler = () => {};

    //            event handler: 로그인 버튼 클릭 이벤트 처리 함수             //
    const onSignInButtonClickHandler = () => {};

    // //           render: 로그아웃 버튼 컴포넌트 렌더링              //
    // if () {
    //   return (
    //     <div>

    //     </div>
    //   );
    // }

    // //           render: 마이페이지 버튼 컴포넌트 렌더링              //
    // if () {

    //   return (
    //     <div>

    //     </div>
    //   );
    // }

    //           render: 로그인 버튼 컴포넌트 렌더링              //
    return <div></div>;
  };

  //           component: 업로드 클릭 버튼 컴포넌트        //
  const UploadButton = () => {
    //                state: 게시물 번호 path variable          //

    //                 state:  게시물 상태               //

    //                 function: post Board response 처리 함수               //
    const postBoardResponse = () => {};

    //                 function: patch Board response 처리 함수               //
    const patchBoardResponse = () => {};

    //                 event handler: 업로드 버튼 클릭 이벤트 처리 함수          //
    const onUploadButtonClickHandler = async () => {};
    //           render: 업로드 버튼 컴포넌트 렌더링              //
    // if () {
    //   return (
    //     <div>
    //     </div>
    //   );
    // }

    //           render: 업로드 불가 버튼 컴포넌트 렌더링              //
    return <div></div>;
  };

  useEffect(() => {}, []);

  //로그인 상태에 따른 useEffect
  useEffect(() => {}, []);

  //           render: 헤더 컴포넌트의 렌더링 함수           //
  return <div>Header</div>;
}