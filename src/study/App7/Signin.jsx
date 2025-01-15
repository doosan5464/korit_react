import React, { useState } from 'react';  // 이 줄 추가


function Signin({userList}) {
    const [ signinInputValue, setSigninInputValue ] = useState({
        bookname: "",
        isbn: "",
    });

    const handleSigninInputOnChange = (e) => {
        setSigninInputValue({
            ...signinInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSigninButtonOnClick = () => {
        const foundUser = userList.find(user => user.bookname === signinInputValue.bookname);
        if(!foundUser) {
            alert("사용자 정보를 다시 확인하세요.");
            return;
        }
        if(foundUser.isbn !== signinInputValue.isbn) {
            alert("사용자 정보를 다시 확인하세요.");
            return;
        }
        alert(`${foundUser.name}(${foundUser.isbn}) 입니다.`);
    };


    return (
        <div>
            <h1>로그인</h1>
            <input type="text" name='bookname' placeholder='bookname'       onChange={handleSigninInputOnChange} value={signinInputValue.bookname} />
            <input type="password" name='isbn' placeholder='isbn'   onChange={handleSigninInputOnChange} value={signinInputValue.isbn} />
            <div>
                <button onClick={handleSigninButtonOnClick}>조회</button>
            </div>
        </div>
    );
}

export default Signin;