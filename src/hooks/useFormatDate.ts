import React from 'react'

function useFormatDate(unix: string) {
    const fixedZero = (num: number) => {
        return num >= 10 ? ('' + num) : ('0' + num)
    }

    const date = new Date(unix);
    const year = date.getFullYear();
    const month = fixedZero(date.getMonth() + 1);
    const day = fixedZero(date.getDate());
    const hour = fixedZero(date.getHours());
    const minute = fixedZero(date.getMinutes());
    const second = fixedZero(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export default useFormatDate