import React from 'react'
import { Link } from 'react-router-dom'

export default function BackToHome() {
  return (
    <div className="mb-6">
      <Link
        to="/"
        className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        ← Voltar para Home
      </Link>
    </div>
  )
}
