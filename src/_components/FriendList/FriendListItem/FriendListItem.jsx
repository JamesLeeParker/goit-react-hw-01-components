import s from './FriendListItem.module.scss';

export default function FriendListItem({ friends }) {
  return friends.map(item => {
    return (
      <li className={s.item} key={item.id}>
        <span className={`${item.isOnline ? s.statusOn : s.statusOff}`}></span>
        <img
          className={s.avatar}
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={s.name}>{item.name}</p>
      </li>
    );
  });
}
