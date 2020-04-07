import React from "react";
import moment from "moment";

const Hero = ({filters}) => {    

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 

    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">Hoteles</h1>
                <h2 className="subtitle">
                    {moment(filters.dateFrom).isValid()? ` desde el ${filters.dateFrom.toLocaleDateString('es-CO',options)}` : ''}
                    {moment(filters.dateTo).isValid()? ` hasta el ${filters.dateTo.toLocaleDateString('es-CO',options)}` : ''}
                    {filters.country ? ` en ${filters.country}` : ''}
                    {filters.price ? ` por ${'$'.repeat(filters.price)}` : ''}                     
                    {filters.rooms ? ` de hasta ${filters.rooms} habitaciones` : ''}
                </h2>
                </div>
            </div>
        </section>
    )
} 
export default Hero;

