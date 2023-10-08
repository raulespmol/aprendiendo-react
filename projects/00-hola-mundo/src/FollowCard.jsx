// import './App.css'

export function FollowCard ( {userName, user, isFollowing} ) {
const avatarSource = `https://unavatar.io/${user}`;
const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowing ?
  'follow-button isFollowing' :
  'follow-button';

  return (
    <section className="follow-card">
      <header className="follow-card-header">
        <img src={avatarSource} alt="Avatar" className="follow-card-avatar"/>
        <div className="follow-card-info">
          <strong className="user-name">{userName}</strong>
          <span className="user">@{user}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName}>
          {buttonText}
        </button>
      </aside>
    </section>
  );
}