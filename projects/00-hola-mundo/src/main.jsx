import React from 'react'
import ReactDOM from 'react-dom/client'
import { FollowCard } from './FollowCard.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div className='App'>
    <FollowCard userName={'Raúl Espinoza M'} user={'raulespmol'} isFollowing={true} />
    <FollowCard userName={'Elon Musk'} user={'elonmusk'} isFollowing />
    <FollowCard userName={'Nino Moonless'} user={'chayobee'} isFollowing={false} />
  </div>
)
