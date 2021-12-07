import s from './FriendList.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}
