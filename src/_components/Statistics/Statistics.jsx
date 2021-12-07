import s from './Statistics.module.scss';
import data from '../../data/data.json';
import ListItem from '../Statistics/LIstItem/ListItem';

export default function Statistics() {
  return (
    <section class="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <ListItem data={data} />
        {/* <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li> */}
        {/* <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li> */}
      </ul>
    </section>
  );
}
