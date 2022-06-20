import React from "react";
import empty from "../../empty.png";
import Table from "../../components/Table";

import { Wrapper } from "./Transaction.styles";

const TransactionEpty = () => (
  <div className="text-center">
    <img src={empty} alt="empty-icon" />
    <p>No transaction history</p>
  </div>
);
const TableContent = () => (
  <>
    <thead>
      <tr>
        <th>date</th>
        <th>client</th>
        <th>Reciever</th>
        <th>anount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>20-05-20222</td>
        <td>Michael Jackson</td>
        <td>Janet Jackson</td>
        <td>$5000 - BTC</td>
      </tr>
      <tr>
        <td>20-05-20222</td>
        <td>Michael Jackson</td>
        <td>Janet Jackson</td>
        <td>$5000 - BTC</td>
      </tr>
      <tr>
        <td>20-05-20222</td>
        <td>Michael Jackson</td>
        <td>Janet Jackson</td>
        <td>$5000 - BTC</td>
      </tr>
      <tr>
        <td>20-05-20222</td>
        <td>Michael Jackson</td>
        <td>Janet Jackson</td>
        <td>$5000 - BTC</td>
      </tr>
    </tbody>
  </>
);

const Transactions = () => {
  return <Table content={TableContent} />;
};

const Transaction = () => {
  return (
    <Wrapper>
      <h2 className="heading2 mt-0">transaction history</h2>
      <div className="container">
        <Transactions />
      </div>
    </Wrapper>
  );
};

export default Transaction;
