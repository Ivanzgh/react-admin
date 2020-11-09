import React, { useState, useEffect, useCallback } from 'react';
import './index.scss'
import Counter from '../../components/counter/index'

function Home() {
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log('666');
        return () => console.log('999');
    }, [num])

    const mon = useCallback(() => {
        console.log(num + '888');
    }, [num])

    useEffect(() => {
        console.log('888');
        window.addEventListener('resize', mon)
        return () => window.addEventListener('resize', mon)
    })

    // useEffect(() => {
    //     console.log('use effect...',num)
    //     const timer = setInterval(() => {
    //         console.log('timer...count:', num)
    //         setNum(num + 1)
    //     }, 1000)
    //     return ()=> clearInterval(timer)
    // },[])


    return (
        <div className='home'>
            <p>Welcome to React~{num}</p>
            <button onClick={() => setNum(num + 1)}>click me</button>

            <Counter />
        </div>
    )
}

export default Home