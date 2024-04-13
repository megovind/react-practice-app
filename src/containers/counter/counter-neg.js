import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "semantic-ui-react";
import Child from "./counter-child";

export default function Counter(props) {
    const [count, setCount] = useState(10);
    const [counter, setCounter] = useState(0);
    const data = useState("THis is the usecallback test");
    const [memoData] = useState([{ name: "Govind", mail: "meena@gmail.com" }, { name: "gkm", mail: "meena@gmail.com" }])

    useEffect(() => {
        const decreaseVale = setInterval(() => {
            setCount((c) => {
                if (count <= 0) return count;
                clearInterval(decreaseVale);
                return count - 1;
            });
        }, 500);

        const increaseValue = setInterval(() => {
            setCounter((c) => {
                if (counter >= 10) return counter;
                clearInterval(increaseValue);
                return counter + 1;
            })
        }, 500);
    }, [count, counter])

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data])


    const findUser = (paramsData) => {
        const newData = paramsData.find(obj => obj.name === 'gkm');
        console.log("This is finduser", newData);
        return newData.name;
    }

    const dataToDisplay = useMemo(() => findUser(memoData), [memoData])



    return <>
        <Container style={{ marginTop: '3em' }}>
            <h2>Decreasing: from 10 to 0</h2>
            <div> Decreasing:  {count}</div>
            <h2>Increasing: from 0 to 10</h2>
            <div>Increasing: {counter} </div>
            <Child returnComment={returnComment}></Child>
            <div>{dataToDisplay}</div>

        </Container>
    </>


}