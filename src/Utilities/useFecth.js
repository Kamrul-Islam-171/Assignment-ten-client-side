import { useEffect, useState } from "react";



const useFecth = () => {

    const [defaultTheme, setDefaultTheme] = useState('light');
    useEffect(() => {
        fetch('https://assignment-ten-server-side-delta.vercel.app/theme').
            then(res => res.json())
            .then(data => setDefaultTheme(data[0].theme))
    }, [])
    return [defaultTheme, setDefaultTheme]
};

export default useFecth;