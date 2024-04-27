import css from "../TransactionItem/TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}
