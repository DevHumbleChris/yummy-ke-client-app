import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddRestaurant() {
  const [restaurantName, setRestaurantName] = useState('')
  const [category, setCategory] = useState('')
  const [averageCost, setAverageCost] = useState('')
  const [cuisines, setCuisines] = useState([])
  const [singleCusine, setSingleCusine] = useState('')
  const [popularDishes, setPopularDishes] = useState([])
  const [dish, setDish] = useState('')
  const [facilities, setFacilities] = useState([])
  const [singleFacility, setSingleFacility] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };
  const addFacilities = () => {
    setFacilities([
      ...facilities,
      singleFacility
    ])
    setSingleFacility('')
  }
  const removeFacilities = (itemFacility) => {
    const newFacilities = facilities.filter(facility => facility !== itemFacility)
    setFacilities(newFacilities)
  }
  const addDishes = () => {
    setPopularDishes([
      ...popularDishes,
      dish
    ])
    setDish('')
  }
  const removeDishes = (dishItem) => {
    const newPopularDishes = popularDishes.filter(popularDish => popularDish !== dishItem)
    setPopularDishes(newPopularDishes)
  }
  const addCuisines = () => {
    setCuisines([
      ...cuisines,
      singleCusine
    ])
    setSingleCusine('')
  }
  const removeCuisine = (item) => {
    const newCusines = cuisines.filter(cuisine => cuisine !== item)
    setCuisines(newCusines)
  }
  return (
    <section>
      <div className="p-8 flex flex-wrap justify-center">
        <div className="max-w-xl bg-white rounded-xl p-3 mb-3">
          <h1 className="text-center text-xl text-indigo-600">
            Add Restaurant
          </h1>
          <div className="md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="restaurant-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Restaurant Name
                      </label>
                      <input
                        type="text"
                        name="restaurantName"
                        id="restaurant-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="Delivery">Delivery</option>
                        <option value="Dining Out">Dining Out</option>
                        <option value="Nighlife">Nightlife</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="average-cost"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Average Cost
                      </label>
                      <input
                        type="number"
                        name="averageCost"
                        id="average-cost"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={averageCost}
                        onChange={(e) => setAverageCost(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Cover photo
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="cuisines"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cuisines
                      </label>
                      {cuisines.map((item, i) => (
                        <div className="flex items-center justify-between" key={i}>
                        <input
                          type="text"
                          name="cuisines"
                          id="cuisines"
                          value={item}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          readOnly={true}
                        />
                        <button
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3"
                          onClick={() => removeCuisine(item)}
                        >
                          <FontAwesomeIcon icon={["fas", "minus"]} />
                        </button>
                      </div>
                      ))}
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          name="singleCusine"
                          id="cuisines"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={singleCusine}
                          onChange={(e) => setSingleCusine(e.target.value)}
                        />
                        <button
                          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3 ${!singleCusine ? "bg-indigo-300": "bg-indigo-600"}`}
                          onClick={addCuisines}
                          disabled={!singleCusine}
                        >
                          <FontAwesomeIcon icon={["fas", "add"]} />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="popular_dishes"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Popular Dishes
                      </label>
                      {popularDishes.map((dishItem, i) => (
                        <div className="flex items-center justify-between" key={i}>
                        <input
                          type="text"
                          name="popularDishes"
                          id="popular_dishes"
                          value={dishItem}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          readOnly={true}
                        />
                        <button
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3"
                          onClick={() => removeDishes(dishItem)}
                        >
                          <FontAwesomeIcon icon={["fas", "minus"]} />
                        </button>
                      </div>
                      ))}
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          name="popularDishes"
                          id="popular_dishes"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={dish}
                          onChange={(e) => setDish(e.target.value)}
                        />
                        <button
                          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3 ${!dish ? "bg-indigo-300": "bg-indigo-600"}`}
                          onClick={addDishes}
                          disabled={!dish}
                        >
                          <FontAwesomeIcon icon={["fas", "add"]} />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="facilities"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Facilities
                      </label>
                      {facilities.map((itemFacility, i) => (
                        <div className="flex items-center justify-between" key={i}>
                        <input
                          type="text"
                          name="facility"
                          id="facilities"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={itemFacility}
                          readOnly={true}
                        />
                        <button
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3"
                          onClick={() => removeFacilities(itemFacility)}
                        >
                          <FontAwesomeIcon icon={["fas", "minus"]} />
                        </button>
                      </div>
                      ))}
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          name="facilities"
                          id="facilities"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={singleFacility}
                          onChange={(e) => setSingleFacility(e.target.value)}
                        />
                        <button
                          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3 ${!singleFacility ? "bg-indigo-300": "bg-indigo-600"}`}
                          onClick={addFacilities}
                        >
                          <FontAwesomeIcon icon={["fas", "add"]} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-xl serverResponse sm:h-96 bg-white rounded-xl p-3 md:mt-0 md:mx-3 my-3">
          <h1 className="text-center text-xl text-indigo-600">
            Server Response
          </h1>
          <div>
            <div className="my-2">
              <p className="text-xl">Code</p>
              <p className="text-lg text-gray-400">Status Code: 200</p>
            </div>
            <div>
              <p className="text-xl">Response Body</p>
              <div className="my-2">
                <pre className="max-w-xs sm:max-w-xl sm:h-60 scrollbar bg-black text-white p-2 rounded-xl overflow-scroll">
                  <code>
                    {`
  "results": [
    {
    "adult": false,
    "backdrop_path": "/qATVdZdqtKUpO4D78wNCejsfp5S.jpg",
    "id": 829560,
    "title": "The Next 365 Days",
    "original_language": "pl",
    "original_title": "Kolejne 365 dni",
    "overview": "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    "poster_path": "/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
    "media_type": "movie",
    "genre_ids": [
    18,
    10749
    ],
    "popularity": 917.462,
    "release_date": "2022-08-19",
    "video": false,
    "vote_average": 7.657,
    "vote_count": 124
    },
    {
    "adult": false,
    "backdrop_path": "/ft1jH9Zrjx48obILr8NpgfvLYku.jpg",
    "id": 760161,
    "title": "Orphan: First Kill",
    "original_language": "en",
    "original_title": "Orphan: First Kill",
    "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
    "poster_path": "/cQYfh1jWzeizgJI2Z66y9h8YKTU.jpg",
    "media_type": "movie",
    "genre_ids": [
    27,
    53
    ],
    "popularity": 408.821,
    "release_date": "2022-07-27",
    "video": false,
    "vote_average": 7.233,
    "vote_count": 120
    },
`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
