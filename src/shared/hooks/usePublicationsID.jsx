import { useEffect, useState } from "react";
import { listarPublicacionPorID } from "../../services";
import { toast } from "react-hot-toast";

export const usePublicacionesID = (id) => {
    const [publicacion, setPublicacion] = useState(null);
    const [comentarios, setComentarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            obtenerPublicacion();
        }
    }, [id]);

    const obtenerPublicacion = async () => {
        setCargando(true);
        try {
            const data = await listarPublicacionPorID(id);
            setPublicacion(data);
            setComentarios(data.comentarios || []);
            setError(null);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError("La publicación no fue encontrada.");
            } else {
                setError("Ocurrió un error al cargar la publicación.");
            }
            toast.error("Error al cargar la publicación: " + err.message);
        } finally {
            setCargando(false);
        }
    };

    return {
        publicacion,
        comentarios,
        cargando,
        error,
        setComentarios
    };
};