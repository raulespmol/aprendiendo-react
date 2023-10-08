import { useState } from 'react';
import './App.css';

export function FollowCard ( {userName, user, initialIsFollowing} ) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const avatarSource = `https://unavatar.io/${user}`;
  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ?
    'follow-button isFollowing-button' :
    'follow-button';

  const toggleButton = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <section className="follow-card">
      <header className="follow-card-header">
        <img src={avatarSource} alt={`Foto de perfil de ${userName}`} className="follow-card-avatar"/>
        <div className="follow-card-info">
          <strong className="user-name">{userName}</strong>
          <span className="user">@{user}</span>
        </div>
      </header>

      <aside>
        <button 
        className={buttonClassName}
        onClick={toggleButton}>
          <span className='button-text'>{buttonText}</span>
          <span className='button-unfollow'>Dejar de seguir</span>
        </button>
      </aside>
    </section>
  );
}