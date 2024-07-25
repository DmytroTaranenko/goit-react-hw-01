import clsx from "clsx";
import css from "./FriendListItem.module.css";
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <div>
        <img src={avatar} alt="Avatar" width="70" />
        <p className={css.friendName}>{name}</p>
        <p
          className={clsx(css.isOnline, {
            [css.online]: isOnline === true,
            [css.offline]: isOnline === false,
          })}
        >
          {isOnline === true ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}

export default FriendListItem;
