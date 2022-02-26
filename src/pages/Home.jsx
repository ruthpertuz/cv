import   React from "react";
import { Left    } from "@components/Left";
import { Right   } from "@components/Right";
import { Dataset } from "@components/Dataset";
import "../_vars.scss";//!@

const Home =()=> { return ( <>

<div className="wrapper">

  <Left data={Dataset[0]}/>

  <Right data={Dataset[0]}/>

</div>

</> ); }; export { Home };