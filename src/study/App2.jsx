import { useState } from "react";

/*
useState 상태관리
*/

function App2() {
    const [num, setNum] = useState(0); // useState() 함수 호출후 [] 배열에 담음
    // useState()의 비구조할당의 0 인덱스는 숫자, 1번 인덱스는 숫자의 setter

    const number = 0;

    console.log(num);
    console.log(number);

    const handleIncreaseOnClick = () => {
        setNum(num + 1); // setter 역할. 위에서 비구조 할당으로 받아 옴
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1 증가</button>
        <button>1 감소</button>
    </>
}
export default App2;