import Transaction from './Transaction/Transaction';
import s from './TransactionHistory.module.scss';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead className={s.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction transactions={transactions} />
      </tbody>
    </table>
  );
}
