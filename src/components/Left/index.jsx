import React from "react";
import {  Separador } from "@components/Separador";
import rubipollo from "../Dataset/rubipollo.jpg";
import "./index.scss";

const Left =({  data })=> { return ( <>

<div className="left">
  <h1>{data.fullname}</h1>
  <h2 className="title">{data.title}, {data.tp} {data.macondo}, {data.chichombia}</h2>
  <p>{data.perfil2}</p>
  <h2 className="exp">EXPERIENCIA</h2>
<Separador/>
  <h3 className="forecasting">{data.e0}</h3>
  <ul className="exp1"> 
    <li>Manejo de Ofimatica</li> 
    <li>Atencion al cliente</li> 
    <li>Manejo de personal: (18 ladrillera) (5 Ganaderia)</li> 
    <li>Administracion y ventas</li> 
  </ul>

  <h3 className="forecasting">{data.e1}</h3>
  <ul className="exp1 exp2"> 
    <li>Contratacion de personal</li> 
    <li>Manejo de Ofimatica</li> 
    <li>Administracion de personal</li> 
    <li>Atencion a los jefes</li> 
  </ul>

  <h3 className="forecasting">{data.e2}</h3>
  <ul className="exp1 exp3"> 
    <li>Manejo de sistemas contables</li> 
    <li>Pagos de seguridad social</li> 
    <li>Revisoria fiscal</li> 
    <li>Paqueteria Office</li> 
  </ul>

  <h3 className="forecasting">{data.e3}</h3>
  <ul className="exp1 exp4"> 
    <li>Asistente de informacion</li> 
    <li>Ingreso de facturas</li> 
    <li>Supervisora de cajeras</li> 
    <li>Atecion al cliente</li> 
  </ul>

  <h3 className="forecasting">{data.e4}</h3>
  <ul className="exp1 exp5"> 
    <li>Secretaria de administracion</li> 
    <li>Paqueteria Office</li> 
    <li>Atencion a correspondencia</li> 
    <li>Labores de secretariado</li> 
  </ul>

  <section className="container">
    <div className="contact">
      <h2 className="exp">CONTACTO</h2>
      <h3 className="forecasting center">+57{data.cell}</h3>
      <h3 className="forecasting center">{data.email}</h3>
      <h3 className="forecasting center">Profesional: {data.tp}</h3>
      <h3 className="forecasting center">{data.macondo}, {data.chichombia}</h3>
    </div>

</section>
<div className="imgContainerPerson"><img src={rubipollo} className="rubi"/></div>

</div>
</>) }; export { Left };