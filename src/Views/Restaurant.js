import React from 'react'
import RestaurantBanner from '../components/RestaurantBanner'
import AddRestaurant from '../components/AddRestaurant'

export default function Restaurant() {
  return (
    <main className='bg-gray-100'>
        <RestaurantBanner />
        <AddRestaurant />
    </main>
  )
}
