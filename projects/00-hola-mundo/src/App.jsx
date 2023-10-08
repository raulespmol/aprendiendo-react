import './App.css'
import { FollowCard } from './FollowCard.jsx'


export function App () {
  return (
    <div className='card'>
      <FollowCard userName='Raúl Espinoza M' user='raulespmol' initialIsFollowing={true} />
      <FollowCard userName='Nino Moonless' user='chayobee' initialIsFollowing={false} />
    </div>
  )
}