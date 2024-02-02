import React from 'react'


export default function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Sahifa topilmadi</p>
        <a
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
    </div>
  )
}
