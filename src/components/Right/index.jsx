import React from "react";
import { Separador } from "@components/Separador";
import tiempo from "../Dataset/tiempo.png";
import software from "../Dataset/software.png";
import "./index.scss";

const Right =({ data })=> { return ( <>

<div className="right">
  <h3 className="exp title">Skills</h3>
  <p>{data.perfil}</p>
  <p>{data.perfil3}</p>
  <p>{data.perfil4}</p>
  <p>{data.perfil5}</p>

  <h3 className="exp title">Platzi</h3>
    <ul className="exp exp1"> 
      <li>{data.p0}</li> 
      <div className="imgContainer"><img src={tiempo} className="img"/></div>
      <li>{data.p1}</li> 
      <div className="imgContainer"><img src={software} className="img"/></div>
    </ul>
  <Separador/>
  <h3 className="exp title">Educacion</h3>
    <ul className="exp exp1"> 
      <li>{data.s9}</li> 
      <li>{data.s8}</li> 
      <li>{data.s7}</li> 
      <li>{data.s6}</li> 
      <li>{data.s5}</li> 
      <li>{data.s4}</li> 
      <li>{data.s3}</li> 
      <li>{data.s2}</li> 
      <li>{data.s1}</li> 
      <li>{data.s0}</li> 
    </ul>
</div>

</>) }; export { Right };