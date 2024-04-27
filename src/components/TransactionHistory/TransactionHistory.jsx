import TransactionItem from "./TransactionItem/TransactionItem";
import css from "../TransactionHistory/TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.tablebody}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}
