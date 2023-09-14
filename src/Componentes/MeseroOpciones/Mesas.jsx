import React, { useState } from "react";

function Mesas({ handleMesaClick }) {
  return (
    <div className="container mesas-container mt-5">
      <div className="container-mesa">
        <div className="mesa" onClick={() => handleMesaClick("Mesa 1")}>
          Mesa 1
        </div>
        <div className="mesa" onClick={() => handleMesaClick("Mesa 2")}>
          Mesa 2
        </div>
        <div className="mesa" onClick={() => handleMesaClick("Mesa 3")}>
          Mesa 3
        </div>
        <div className="mesa" onClick={() => handleMesaClick("Mesa 4")}>
          Mesa 4
        </div>
      </div>
    </div>
  );
}

export default Mesas;
