import s from './Statistics.module.scss';
import data from '../../data/data.json';
import ListItem from '../Statistics/LIstItem/ListItem';

export default function Statistics() {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        <ListItem data={data} />
      </ul>
    </section>
  );
}
