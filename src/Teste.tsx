import React, { useEffect, useState } from 'react';

const Teste: React.FC = () => {
    const [horaAtual, setHoraAtual] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setHoraAtual(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return <p className='relogio'>{horaAtual}</p>;
};

export default Teste;