import s from './ListItem.module.scss';

export default function ListItem({ data }) {
  return data.map(item => {
    return (
      <li className={s.item} key={item.id}>
        <span className={s.label}>{item.label}</span>
        <span className={s.percentage}>{item.percentage}%</span>
      </li>
    );
  });
}
