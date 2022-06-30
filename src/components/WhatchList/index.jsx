import React from 'react'

export const WatchList = ({ item, toggleWatched }) => {
  // Version 1
  // const [isWatched, setIsWatched] = useState(item.isWatched)
  // const handleClick = () => {
  //   setIsWatched(!isWatched)
  // }

  return (
    <div>
      <h1 style={{ color: item.isWatched ? 'green' : 'red' }}>{item.name}</h1>
      <p>{item.description}</p>
      <button onClick={() => toggleWatched(item.id)}> Watched </button>
    </div>
  )
}
