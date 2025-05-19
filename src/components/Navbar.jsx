import React, { useState } from "react";
import '../pages/publication/Navbar.css';
import { useFiltroPublicaciones } from "../shared/hooks/useFiltroPublicaciones";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { limpiarFiltros } = useFiltroPublicaciones();

    const [curso, setCurso] = useState("");
    const [titulo, setTitulo] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const navigate = useNavigate();

    const handleFiltrarCurso = (e) => {
        e.preventDefault();
        if (curso.trim()) {
            navigate(`/curso/${encodeURIComponent(curso)}`);
        }
    };

    const handleFiltrarTitulo = (e) => {
        e.preventDefault();
        if (titulo.trim()) {
            navigate(`/titulo/${encodeURIComponent(titulo)}`);
        }
    };

    const handleFiltrarFechas = (e) => {
        e.preventDefault();
        if (fechaInicio && fechaFin) {
            navigate(`/fechas/${encodeURIComponent(fechaInicio)}/${encodeURIComponent(fechaFin)}`);
        }
    };

    const handleVolver = () => {
        limpiarFiltros();
        setCurso("");
        setTitulo("");
        setFechaInicio("");
        setFechaFin("");
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Blog Personal</h1>
            <div className="navbar-filtros">
                <form className="filtro-form" onSubmit={handleFiltrarCurso}>
                    <input
                        type="text"
                        placeholder="Ingresar curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>
                <form className="filtro-form" onSubmit={handleFiltrarTitulo}>
                    <input
                        type="text"
                        placeholder="Ingresar título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>
                <form className="filtro-form" onSubmit={handleFiltrarFechas}>
                    <input
                        type="date"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                    />
                    <input
                        type="date"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                    />
                    <button type="submit">Buscar por Fechas</button>
                </form>
            </div>
            <button
                className="volver-btn"
                onClick={handleVolver}
            >
                Volver a las publicaciones
            </button>
        </nav>
    );
};
