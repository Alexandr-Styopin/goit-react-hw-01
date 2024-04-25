import FriendsItem from "./FrientsItem/FriendsItem";
export default function FiendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </ul>
  );
}
