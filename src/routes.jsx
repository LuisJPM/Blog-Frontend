import React from "react";
import { PublicacionPage } from "./pages/publication";
import { PublicacionDetalle } from "./components/PublicationDetails.jsx";
import { PublicacionesPorCurso } from "./pages/publication/PublicacionesPorCurso.jsx";
import { PublicacionesPorTitulo } from "./pages/publication/PublicacionePorTitulo.jsx";
import { PublicacionesPorFechas } from "./pages/publication/PublicacionesPorFechas.jsx";

export const routes = [
    { path: "/", element: <PublicacionPage /> },
    { path: "/publicacion/:id", element: <PublicacionDetalle /> },
    { path: "/curso/:curso", element: <PublicacionesPorCurso /> },
    { path: "/titulo/:titulo", element: <PublicacionesPorTitulo /> },
    { path: "/fechas/:fechaInicio/:fechaFin", element: <PublicacionesPorFechas /> },
];