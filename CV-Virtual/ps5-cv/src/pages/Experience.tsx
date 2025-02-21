import './Experience.scss';

const Experience = () => {
    return (
        <div>
            <h1>Experiencia</h1>
            <div className="experience-item">
                <h2>Servicio de Catering</h2>
                <p>Evento corporativo para orientadores de empresas</p>
                <p>Fecha no especificada</p>
                <ul>
                    <li>Atención y servicio a profesionales en eventos empresariales.</li>
                    <li>Organización y distribución de alimentos y bebidas.</li>
                    <li>Gestión de tiempos y coordinación con el equipo.</li>
                </ul>
            </div>
            <div className="experience-item">
                <h2>Prácticas de FCT (Formación en Centros de Trabajo)</h2>
                <p>(3 meses de duración)</p>
                <ul>
                    <li>Aplicación de conocimientos en Sistemas Microinformaticos y Redes.</li>
                    <li>Uso de Redes Locales , montaje y mantenimiento de ordenadores y visita a otras empresas a solucionart problemas.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
