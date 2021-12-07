export default function ListItem({ data }) {
  return data.map(item => {
    return (
      <li key={item.id}>
        <span class="label">{item.label}</span>
        <span class="percentage">{item.percentage}%</span>
      </li>
    );
  });
}
