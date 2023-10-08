import './App.css'
import { FollowCard } from './FollowCard.jsx'


export function App () {
  return (
    <div className='card'>
      <FollowCard userName='Raúl Espinoza M' user='raulespmol' isFollowing={true} />
      <FollowCard userName='Elon Musk' user='elonmusk' isFollowing />
      <FollowCard userName='Nino Moonless' user='chayobee' isFollowing={false} />
    </div>
  )
}