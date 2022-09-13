import React from 'react'
import useFetchHook from './useFetchHook';


function Test() {

    const [data] = useFetchHook("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
        <h1>Fetch Data using Custom Hook</h1>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    )
}

export default Test