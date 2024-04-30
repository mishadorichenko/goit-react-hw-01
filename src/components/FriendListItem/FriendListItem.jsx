import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClass = clsx(
    css.status,
    isOnline ? css.statusOnline : css.statusOffline
  );
  return (
    <div>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}> {name}</p>
      {console.log(statusClass)}
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
