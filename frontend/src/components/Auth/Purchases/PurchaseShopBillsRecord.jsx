import React from 'react'
import assets from '../../../assets/assets'

const PurchaseShopBillsRecord = (props) => {

  const backToPurchaseBills = () => {
    props.setIsShopBillsPanelOpen(false)
    props.setIsBillsPanelOpen(true)
    props.setSelectedShop('')
  }

  // console.log(props.selectedShop)
  return (
    <>
      {props.isShopBillsPanelOpen && (
        <>
          {/* tables */}
          < div className="col-span-4 h-[calc(100vh)] md:col-span-3 bg-base/50  px-3 md:px-2 lg:px-5 py-3 rounded-md">
            <h2 className='font-medium text-primary w-fit flex gap-3'>
              <span onClick={backToPurchaseBills} className='cursor-pointer'>Purchase Record</span>/<span>{props.selectedShop.shopName} Records</span>
            </h2>
            <div className='flex flex-col gap-3 mt-5 h-[calc(100%-3rem)] overflow-y-scroll'>
              {/* Record */}
              {
                props.renderShopBills?.map((bill, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      // TODO: navigate to purchase bills of the shop
                      props.setSelectedBill(bill)
                      console.log(bill)
                      props.setIsShopBillsPanelOpen(false)
                      props.setIsBillOpen(true)
                    }}
                    className="flex flex-col sm:flex-row justify-between gap-3 bg-white px-4 sm:px-8 py-4 rounded-md cursor-pointer">
                    {/* TODO: fill data dynamicaly */}
                    <div className="">
                      <p className='font-medium sm:text-lg'>Date: {bill.date}</p>
                      <p className='text-xs sm:text-sm text-gray-500 mt-1'>Products: {bill?.products?.length}</p>
                    </div>

                    <div className="flex justify-between gap-4 sm:gap-14">

                      <div className="flex flex-col justify-between sm:justify-end gap-1/2">
                        <span className='text-xs text-gray-400 inline-block'></span>
                        <span className='text-sm text-gray-500 inline-block'>Purchase Quantity:
                          {bill.products?.map((b) => b.quantity).reduce((a, b) => a + b, 0)}
                        </span>
                      </div>

                      <div className="shrink-0 text-end justify-end">
                        <p className='font-medium'>Price</p>
                        <p className='mt-1/2'>{props.currency} {bill.totalAmount}</p>
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

export default PurchaseShopBillsRecord