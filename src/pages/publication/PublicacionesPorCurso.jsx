import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filtrarPublicacionesPorCurso } from "../../services/api.jsx";
import { PublicacionesForm } from "../../components/PublicationForm.jsx";

export const PublicacionesPorCurso = () => {
    const { curso } = useParams();
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setCargando(true);
                const pubs = await filtrarPublicacionesPorCurso(curso);
                setPublicaciones(pubs);
            } catch (err) {
                console.error("Error al filtrar publicaciones por curso:", err);
                setPublicaciones([]);
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, [curso]);

    return (
        <div className="dashboard-container">
            <h2>Publicaciones del curso: {curso}</h2>
            {cargando ? (
                <p>Cargando publicaciones...</p>
            ) : (
                <PublicacionesForm publicaciones={publicaciones} />
            )}
        </div>
    );
};
