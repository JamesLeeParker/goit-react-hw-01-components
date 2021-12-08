import s from './Statistics.module.scss';
import ListItem from '../Statistics/LIstItem/ListItem';

export default function Statistics({ data, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        <ListItem data={data} />
      </ul>
    </section>
  );
}
