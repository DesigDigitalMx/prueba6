import React from "react";

function Pedido() {
  return (
    <div className="pedido">
      <div className="pedido-content">
        <div className="item-pedido">
          <div className="item-pedido-content">
            <h1>mesa 1</h1>
            <p>productos</p>
          </div>
          <div className="btn-pedido-item">
            <button>Ok</button>
          </div>
        </div>
        <div className="item-pedido">
          <div className="item-pedido-content">
            <h1>mesa 2</h1>
            <p>productos</p>
          </div>
          <div className="btn-pedido-item">
            <button>Ok</button>
          </div>
        </div>
        <div className="item-pedido">
          <div className="item-pedido-content">
            <h1>mesa 3</h1>
            <p>productos</p>
          </div>
          <div className="btn-pedido-item">
            <button>Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedido;
