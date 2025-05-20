import { useState, useEffect } from "react";
import {
  filtrarPublicacionesPorCurso,
  filtrarPublicacionesPorTitulo,
  filtrarPublicacionesPorFechas,
  listarPublicaciones,
} from "../../services";
import { toast } from "react-hot-toast";

export const useFiltroPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    cargarTodas();
  }, []);

  const cargarTodas = async () => {
    setCargando(true);
    try {
      const pubs = await listarPublicaciones();
      setPublicaciones(pubs.data.publicaciones);
    } catch (err) {
      toast.error("Error al cargar publicaciones: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  const filtrarPorCurso = async (curso) => {
    setCargando(true);
    try {
      const pubs = await filtrarPublicacionesPorCurso(curso);
      setPublicaciones(pubs);
    } catch (err) {
      toast.error("Error al filtrar por curso: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  const filtrarPorTitulo = async (titulo) => {
    setCargando(true);
    try {
      const pubs = await filtrarPublicacionesPorTitulo(titulo);
      setPublicaciones(pubs);
    } catch (err) {
      toast.error("Error al filtrar por título: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  const filtrarPorFechas = async (fechaInicio, fechaFin) => {
    setCargando(true);
    try {
      const pubs = await filtrarPublicacionesPorFechas(fechaInicio, fechaFin);
      setPublicaciones(pubs);
    } catch (err) {
      toast.error("Error al filtrar por fechas: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  const limpiarFiltros = () => {
    cargarTodas();
  };

  return {
    publicaciones,
    cargando,
    filtrarPorCurso,
    filtrarPorTitulo,
    filtrarPorFechas,
    limpiarFiltros,
  };
};
