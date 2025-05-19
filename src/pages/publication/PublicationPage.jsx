import React from "react";
import './PublicationPage.css';
import { PublicacionesLista } from "../../components";

export const PublicacionPage = () => {
    return (
        <div className="dashboard-container">
            <PublicacionesLista />
        </div>
    );
};
