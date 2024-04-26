import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? css.statusOnline : css.statusOffline;
  return (
    <li className={css.item}>
      <span className={status}></span>
      <img className={css.avatar} src={avatar} alt={name} width="96px" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
