import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                return setTask(data);
            })
    }, [])

    return task;
}

export default useFetch;