import React, { useState } from 'react'
import assets from '../../../assets/assets'

const PurchaseShopDetails = (props) => {
  const [shopName, setShopName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  const reset = () => {
    setShopName('')
    setContact('')
    setAddress('')
  }


  return (
    <>
      {/* Shop details */}

      <div className="relative cursor-pointer bg-white w-full h-fit mt-4 px-6 md:px-4 lg-px-6 py-3 rounded-lg">
        {/* side design */}
        <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
        {/* ----------- */}


        <div className="flex justify-between">
          <p className=' font-medium text-primary'>Shop Details</p>
          <img
            src={assets.RefreshIcon}
            alt="refresh-icon"
            className='w-6 fill-primary'
            onClick={reset}
          />
        </div>

        <form
          onSubmit={e => { e.preventDefault() }}
          className='mt-2 flex flex-col gap-2'>


          {/* name */}
          <p className='mt-3 text-sm md:leading-tight font-medium text-primary'>Shop Name</p>
          <div className=" border-[0.1rem] text-sm md:text-base md:text-black rounded-md focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <input
              type="text"
              name='shop-name'
              placeholder='Shop Name'
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className='w-full capitalize outline-none pointer-events-auto' />
          </div>


          {/* contact */}
          <p className='mt-2 text-sm md:leading-tight font-medium text-primary'>Contact</p>
          <div className="border-[0.1rem] text-sm md:text-base md:text-black rounded-md focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <input
              type="number"
              maxLength={10}
              name='shop-contact'
              placeholder='Contact Number'
              value={contact}
              min={1000000000}
              onChange={(e) => setContact(e.target.value)}
              className='w-full  outline-none pointer-events-auto' />
          </div>

          {/* address */}
          <p className='mt-2 text-sm md:leading-tight font-medium text-primary'>Address</p>
          <div className="border-[0.1rem] text-sm md:text-base md:text-black rounded-md focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <textarea
              type="text"
              name='shop-address'
              placeholder='Address'
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='w-full resize-none capitalize outline-none pointer-events-auto' />
          </div>

          <button
            className='w-full px-4 py-1 flex justify-center items-center bg-primary text-white rounded-md font-medium'>Add Bill</button>

        </form>
      </div>

    </>
  )
}

export default PurchaseShopDetails