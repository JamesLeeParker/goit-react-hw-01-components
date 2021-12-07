import s from './FriendListItem.module.scss';

export default function FriendListItem({ friends }) {
  return friends.map(item => {
    return (
      <li className="item" key={item.id}>
        <span className="status"></span>
        <img
          className="avatar"
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{item.name}</p>
      </li>
    );
  });
}
