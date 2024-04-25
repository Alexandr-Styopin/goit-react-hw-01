import "../App/App.css";
import Profile from "../SocProfile/Profile";
import FriendList from "../Friends/FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import user from "../../pach/to/user.json";
import friends from "../../pach/to/friends.json";
import transactions from "../../pach/to/transactions.json";

function App() {
  const { avatar, username, tag, location, stats } = user;
  return (
    <>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
