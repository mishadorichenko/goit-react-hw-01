import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userMeta}>
        <li>
          <span>Followers</span>{' '}
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span> <span className={css.stats}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span> <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
