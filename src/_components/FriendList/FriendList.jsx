import s from './FriendList.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
}
