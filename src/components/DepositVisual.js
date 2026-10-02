import React from "react";

function DepositVisual() {

  const dots = Array.from({ length: 150 });

  return (
    <div className="deposit-visual">

      {/* NETWORK SELECT */}

      <div className="network-select">

        <div className="network-icons">
          <span className="polygon-icon">⬡</span>
          <span className="usdc-icon">$</span>
        </div>

        <div className="network-text">

          <small>
            Deposit asset & network
          </small>

          <strong>
            USDC on Polygon
          </strong>

        </div>

        <span className="network-arrow">
         ⌄
        </span>

      </div>


      {/* QR CODE */}

      <div className="qr-container">
  <img
    src="/Frame 1707480164.png"
    alt="QR code"
  />
</div>


      {/* WALLET ADDRESS */}

      <div className="wallet-row">

        <div className="wallet-icon">
          ●
        </div>

        <div className="wallet-details">

          <small>
            Your wallet address
          </small>

          <strong>
            0xB0198a21***74B89d8b4
          </strong>

        </div>

        <button>
          Copy
        </button>

      </div>

    </div>
  );
}

export default DepositVisual;