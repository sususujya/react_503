import { useState } from "react"

const SetCount = () => {

    const [num, setNum] = useState(0);
    //num은 초기값, setnum은 함수가 들어간다

    const plusNum = () => {
        setNum(num + 1)
    }
    const minusNum = () => {
        setNum(num - 1)
    }
    return (
        <div>
            <div>{num}</div>
            <button onClick={plusNum}>숫자올리기</button>
            <button onClick={minusNum}>숫자내리기</button>
            // 버튼을 누르면 함수를 작동시킨다
        </div>
    )
}

export default SetCount;