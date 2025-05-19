import { useEffect, useState } from "react";
import { listarPublicaciones as listarPublicacionesService } from "../../services";
import { toast } from "react-hot-toast";

export const usePublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        listarPublicaciones();
    }, []);

    const listarPublicaciones = async () => {
        setCargando(true);
        try {
            const pubs = await listarPublicacionesService();
            setPublicaciones(pubs);
        } catch (err) {
            toast.error("Error al cargar las publicaciones: " + err.message);
        } finally {
            setCargando(false);
        }
    };

    return {
        publicaciones,
        cargando
    };
};
