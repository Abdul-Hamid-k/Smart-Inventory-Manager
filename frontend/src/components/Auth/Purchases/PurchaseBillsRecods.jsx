import React from 'react'

const PurchaseBillsRecods = (props) => {
  return (
    <>
      {props.isBillsPanelOpen && (
        <>
          {/* tables */}
          < div className="col-span-4 h-[calc(100vh)] md:col-span-3 bg-base/50  px-3 md:px-2 lg:px-5 py-3 rounded-md">
            <h2 className='font-medium text-primary w-fit flex gap-3'>
              Purchase Records
            </h2>
            <div className='flex flex-col gap-3 mt-5 h-[calc(100%-3rem)] overflow-y-scroll'>
              {/* Record */}
              {
                props.shopsBills.map((shop, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      // TODO: navigate to purchase bills of the shop
                      props.setIsShopBillsPanelOpen(true)
                      props.setIsBillsPanelOpen(false)
                      props.setSelectedShop(shop)
                      props.setRenderShopBills(shop.purchaseBills)
                    }}
                    className="flex flex-col sm:flex-row justify-between gap-3 bg-white px-4 sm:px-8 py-4 rounded-md cursor-pointer">
                    {/* TODO: fill data dynamicaly */}
                    <div className="">
                      <p className='font-medium sm:text-lg'>{shop.shopName}</p>
                      <p className='text-xs sm:text-sm text-gray-500 mt-1'>{shop.address}</p>
                    </div>

                    <div className="flex justify-between gap-4 sm:gap-14">

                      <div className="flex flex-col justify-between sm:justify-end gap-1/2">
                        <span className='text-sm text-gray-400 inline-block'>Bills: {shop.purchaseBills.length}</span>
                        <span className='text-sm text-gray-500 inline-block'>Contact: {import.meta.env.VITE_CURRENCY_CONTACT_CODE} {shop.contact}</span>
                      </div>


                    </div>
                  </div>
                ))
              }



            </div>
          </div>
        </>
      )
      }
    </>
  )
}

export default PurchaseBillsRecods
