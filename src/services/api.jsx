import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/Blog",
    timeout: 5000,
});

export const listarPublicaciones = async () => {
    try {
        return await API.get("/publicaciones/");
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const listarPublicacionPorID = async (id) => {
    try {
        const res = await API.get(`/publicaciones/${id}`);
        return res.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const agregarComentario = async (comentario) => {
    try {
        const res = await API.post("/comentarios/", comentario);
        return res.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const filtrarPublicacionesPorCurso = async (curso) => {
    try {
        const res = await API.get(`/publicaciones?curso=${encodeURIComponent(curso)}`);
        const data = res.data;

        if (!Array.isArray(data)) {
            console.warn("La respuesta de filtrarPublicacionesPorCurso no es un array:", data);
            return [];
        }

        return data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const filtrarPublicacionesPorTitulo = async (titulo) => {
    try {
        const res = await API.get(`/publicaciones/titulo/${encodeURIComponent(titulo)}`);
        const data = res.data;

        if (!Array.isArray(data)) {
            console.warn("La respuesta de filtrarPublicacionesPorTitulo no es un array:", data);
            return [];
        }

        return data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const filtrarPublicacionesPorFechas = async (fechaInicio, fechaFin) => {
    try {
        const res = await API.get(`/publicaciones?fechaInicio=${encodeURIComponent(fechaInicio)}&fechaFin=${encodeURIComponent(fechaFin)}`);
        const data = res.data;

        if (!Array.isArray(data)) {
            console.warn("La respuesta de filtrarPublicacionesPorFechas no es un array:", data);
            return [];
        }

        return data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};
