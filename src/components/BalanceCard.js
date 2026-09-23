import React from "react";
import AssetRow from "./AssetRow";

function BalanceCard() {
  return (
    <div className="balance-card">

      <div className="balance-box">

        <span className="current-balance">
          Current balance
        </span>

        <strong className="balance-amount">
          $45,000.12
        </strong>

        <div className="exchange-rate">
          <span>↔</span>
          1 USD ≈ 1452.89 NGN
        </div>

        <div className="balance-actions">

          <button>
            <span>▣</span>
            Deposit
          </button>

          <button>
            <span>▣</span>
            Withdraw
          </button>

          <button>
            <span>▣</span>
            Checkout
          </button>

        </div>

      </div>


      <div className="breakdown-heading">

        <div>
          <h4>Balance breakdown</h4>

          <p>
            These are transaction limits set on your account.
          </p>
        </div>

        <button className="transaction-button">
          ▣ Transaction
        </button>

      </div>


      <AssetRow
        symbol="USDC"
        amount="100,000"
        value="$10,000"
        type="blue"
      />

      <AssetRow
        symbol="USDT"
        amount="100,000"
        value="$10,000"
        type="green"
      />

    </div>
  );
}

export default BalanceCard;