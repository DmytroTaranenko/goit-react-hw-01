import css from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <table className={css.tableList}>
      <thead>
        <tr className={css.tableTitle}>
          <th className={css.typeTransaction}>Type</th>
          <th className={css.amountTransaction}>Amount</th>
          <th className={css.currencyTransaction}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className="" key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
