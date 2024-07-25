import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profiileBox}>
      <div className={css.wrapBox}>
        <img className={css.imgIcon} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.spanColor}>Followers</span>
          <span className={css.spanColor}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.spanColor}>Views</span>
          <span className={css.spanColor}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.spanColor}>Likes</span>
          <span className={css.spanColor}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
