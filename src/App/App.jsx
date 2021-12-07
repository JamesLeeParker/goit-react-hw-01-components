import Profile from '../_components/Profile/Profile.jsx';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Statistics from '../_components/Statistics/Statistics';
import FriendList from '../_components/FriendList/FriendList.jsx';
import TransactionHistory from '../_components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
}
