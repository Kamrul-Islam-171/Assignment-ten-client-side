import { useEffect, useState } from "react";



const useFecth = () => {

    const [defaultTheme, setDefaultTheme] = useState('light');
    useEffect(() => {
        fetch('http://localhost:5000/theme').
            then(res => res.json())
            .then(data => setDefaultTheme(data[0].theme))
    }, [])
    return [defaultTheme, setDefaultTheme]
};

export default useFecth;