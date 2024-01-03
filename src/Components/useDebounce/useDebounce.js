function UseDebounce(cb, delay = 1000) {
    let timerid;
    return (...arg) => {
        clearTimeout(timerid);
        timerid = setTimeout(() => {
            cb(...arg);
        }, delay);
    }
}

export default UseDebounce;