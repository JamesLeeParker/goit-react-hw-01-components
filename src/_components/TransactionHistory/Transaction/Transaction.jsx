import s from './Transaction.module.scss';

export default function Transaction({ transactions }) {
  return transactions.map(transaction => {
    return (
      <tr className={s.item} key={transaction.id}>
        <td className={s.info}>{transaction.amount}</td>
        <td className={s.info}>{transaction.type}</td>
        <td className={s.info}>{transaction.currency}</td>
      </tr>
    );
  });
}
