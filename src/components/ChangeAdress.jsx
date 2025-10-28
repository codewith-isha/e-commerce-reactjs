import React, { useState } from 'react'

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState('')
  const [error, setError] = useState('')

  const onSave = () => {
    if (!newAddress.trim()) {
      setError('Please enter a valid address.')
      return
    }
    setAddress(newAddress)
    setIsModelOpen(false)
  }

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">Change Delivery Address</h2>

      <input
        type="text"
        placeholder="Enter new address"
        className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        value={newAddress}
        onChange={(e) => {
          setNewAddress(e.target.value)
          if (error) setError('')
        }}
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
          onClick={onSave}
        >
          Save Address
        </button>
      </div>
    </div>
  )
}

export default ChangeAddress
