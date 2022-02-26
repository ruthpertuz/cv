import React from "react";

const styleLayout = {
  textAlign: "center",
  backgroundImage: "linear-gradient(315deg, #f3f4f7 0%, #caccd1 74%)",
  minWidth: "320px",
  maxWidth: "auto",
  minHeight: "100vh",
  maxHeight: "auto",
  padding: "13px",
  overflow: "hidden",
  // outline: "2px solid #000",
  fontFamily: "Noto Sans HK",
  textAlign: "center", 
};

const Layout =({ children })=> {

return (
<div className="Layout" 
  style={styleLayout}>
         {children}
</div> 

);  }; export { Layout };