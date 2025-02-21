import { useNavigate } from 'react-router-dom';

const Education = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Educación</h1>
            <ul>
                <li>
                    <h2>Aqui esta todo mi tramo hasta llegar a mi objetivo</h2>
                    <p>Grado Medio De Sismtemas Micro Informaticos y Redes</p>
                    <p>16 de Septiembre del 2021 hasta el 24 de Junio del 2023</p>
                    <p>Especialización en Montaje de equipos , Redes Locales y Sistemas Ofimaticos</p>
                </li>
                <li>
                    <p>Grado Superio de Desarollo de Aplicaciones Web</p>
                    <p> 16 de Septiembre del 2023 hasta el 24 de Junio 2025</p>
                    <p>Enfoque en la programación de paguinas web con Nodejs , React y Mongodb y MYSQL .</p>
                </li>
            </ul>
            <button className="back-button" onClick={() => navigate("/home")}>
                Volver a Home
            </button>
        </div>
    );
};

export default Education;