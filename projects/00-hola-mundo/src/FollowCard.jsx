import './FollowCard.css'

export function FollowCard ( {userName, user, isFollowing} ) {
  const avatarSource = `https://unavatar.io/${user}`;
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
        <button className="follow-button">
          Seguir
        </button>
      </aside>
    </section>
  );
}