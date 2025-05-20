import React from "react";
import { useFiltroPublicaciones } from "../shared/hooks/useFiltroPublicaciones";
import { PublicacionesForm } from "./PublicationForm.jsx";
import { PublicacionDetalle } from "./PublicationDetails.jsx";
import "../pages/publication/PublicationPage.css";

export const PublicacionesLista = () => {
  const { publicaciones, cargando } = useFiltroPublicaciones();
  console.log(publicaciones);
  return (
    <div className="publicaciones-container">
      <h2 className="publicaciones-title">Lista de Publicaciones</h2>
      {cargando ? (
        <p style={{ color: "white", textAlign: "center" }}>
          Cargando publicaciones...
        </p>
      ) : (
                  <PublicacionesForm publicaciones={publicaciones} />,
                  <PublicacionDetalle publicaciones= {publicaciones} />
      )}
    </div>
  );
};
