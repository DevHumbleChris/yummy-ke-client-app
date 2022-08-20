import React from 'react'

export default function Categories() {
  return (
    <section>
        <div className='p-8 mb-4 flex justify-center flex-wrap shrink-0'>
            <div className='bg-white max-w-sm my-3 mx-2 rounded-xl shadow hover:shadow-xl'>
                <img className='rounded-tr-xl rounded-tl-xl' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='oder_online' />
                <div className='p-2'>
                    <h2 className='text-xl mb-1'>Order Online</h2>
                    <p>Stay home and get it delivered on your doorstep.</p>
                </div>
            </div>
            <div className='bg-white max-w-sm my-3 mx-2 rounded-xl shadow hover:shadow-xl'>
                <img className='rounded-tr-xl rounded-tl-xl' src="https://images.unsplash.com/photo-1549648184-0d3e8b8684fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVhcmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='oder_online' />
                <div className='p-2'>
                    <h2 className='text-xl mb-1'>Dining</h2>
                    <p>View the city's favourite dining venues.</p>
                </div>
            </div>
            <div className='bg-white max-w-sm my-3 mx-2 rounded-xl shadow hover:shadow-xl'>
                <img className='rounded-tr-xl rounded-tl-xl' src="https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBjbHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='oder_online' />
                <div className='p-2'>
                    <h2 className='text-xl mb-1'>Nightlife and Clubs</h2>
                    <p>Explore the city's top nightlife outlets.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
