import React from 'react'
import { useSelector } from 'react-redux'
import { Container, CardDeck } from 'react-bootstrap'
import Item from '../components/Card'

export default function Favorite() {
  const favorites = useSelector(state => state.favorites)
  console.log(favorites)
  return (
    <div className="mt-3">
      <h1>Ini halaman Favorite</h1>
      <p>Welcome to favorite page!</p>
      <Container>
        <CardDeck className="d-flex flex-wrap justify-content-evenly align-content-stretch">
          {favorites.map((fav) => (
            <Item key={fav.id} movie={fav} />
          ))}
        </CardDeck>
      </Container>
    </div>
  )
}
