import React, { useContext } from 'react'
import { UserDataContext } from '../../../context/UserContext'

const PurchaseBillsRecods = ({ isBillsPanelOpen, currency }) => {
  return (
    <>
      {isBillsPanelOpen && (
        <>
          {/* tables */}
          < div className="col-span-4 flex flex-col gap-3 md:col-span-3 bg-base/50 h-screen overflow-y-scroll px-3 md:px-2 lg:px-5 py-3 rounded-md">
            <h2 className='font-medium text-primary w-fit flex gap-3'>
              Shop Bills
            </h2>
            <>
              {/* Record */}
              <div
                onClick={() => {
                  // TODO: navigate to purchase bills of the shop
                }}
                className="flex flex-col sm:flex-row justify-between gap-3 bg-white px-4 sm:px-8 py-4 rounded-md cursor-pointer">
                {/* TODO: fill data dynamicaly */}
                <div className="">
                  <p className='font-medium sm:text-lg'>Shop Name</p>
                  <p className='text-xs sm:text-sm text-gray-500 mt-1'>Location</p>
                </div>

                <div className="flex justify-between gap-4 sm:gap-14">

                  <div className="flex flex-col justify-between sm:justify-end gap-1/2">
                    <span className='text-xs text-gray-400 inline-block'>Date: 25 Sep 2023</span>
                    <span className='text-sm text-gray-500 inline-block'>Purchase Quantity: 150</span>
                  </div>

                  <div className="shrink-0 text-end justify-end">
                    <p className='font-medium'>Price</p>
                    <p className='mt-1/2'>{currency} 49000.00</p>
                  </div>
                </div>
              </div>


            </>
          </div>
        </>
      )
      }
    </>
  )
}

export default PurchaseBillsRecods
