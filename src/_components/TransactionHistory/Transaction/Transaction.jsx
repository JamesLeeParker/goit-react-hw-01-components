export default function Transaction({ transactions }) {
  return transactions.map(transaction => {
    return (
      <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    );
  });
}
