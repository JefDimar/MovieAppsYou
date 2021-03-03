import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorite() {
  const favorites = useSelector(state => state.favorites)
  console.log(favorites)
  return (
    <div className="mt-3">
      <h1>Ini halaman Favorite</h1>
      <p>Welcome to favorite page!</p>
    </div>
  )
}
