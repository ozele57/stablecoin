import React from "react";

function AssetRow({ symbol, amount, value, type }) {
  return (
    <div className="asset-row">

      <div className={`coin ${type}`}>
        {symbol === "USDC" ? "$" : "₮"}
      </div>

      <div className="asset-col">
        <span>Asset</span>
        <strong>{symbol}</strong>
      </div>

      <div className="asset-col">
        <span>Balance</span>
        <strong>{amount}</strong>
      </div>

      <div className="asset-col">
        <span>Value</span>
        <strong>{value}</strong>
      </div>

      <button className="refresh">
        Refresh
      </button>

    </div>
  );
}

export default AssetRow;