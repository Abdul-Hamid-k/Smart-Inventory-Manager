import React from 'react'

const PurchaseBill = (props) => {
  // console.log(props.selectedBill)

  const backToPurchaseBills = () => {
    props.setIsBillOpen(false)
    props.setIsBillsPanelOpen(true)
    props.setSelectedShop('')
  }

  const backToShopBills = () => {
    props.setIsShopBillsPanelOpen(true)
    props.setIsBillOpen(false)
    props.setSelectedShop('')
  }

  return (
    <div className="h-screen bg-base/50 col-span-4 md:col-span-3 rounded-md overflow-scroll ">
      {/* TODO */}
      <h2 className='font-medium text-primary w-fit flex gap-3 px-3 md:px-2 lg:px-5 py-3'>
        <span onClick={backToPurchaseBills} className='cursor-pointer'>Purchase Record</span>/<span onClick={backToShopBills} className='cursor-pointer'>{props.selectedShop.shopName}</span>/<span>Bill Records</span>
      </h2>
      <div className="h-[calc(100vh-8rem)]">
        <table className='w-full table-auto'>
          {/* Headers */}
          <thead className='bg-white overflow-scroll '>
            <tr>
              <td className='p-2 text-center'>S.No.</td>
              <td className='p-2'>Name</td>
              <td className='p-2'>Category</td>
              <td className='p-2'>Quantity</td>
              <td className='p-2'>Rate</td>
              <td className='p-2'>Amount</td>
            </tr>
          </thead>

          {/* todo: get suggestions from products db or add if not in db */}
          {/* Body */}
          <tbody className='overflow-scroll relative'>
            {/* existing items  */}
            {props.selectedBill.products.map((item, index) => (
              <tr key={index} className='group/del relative hover:bg-primary/10 transition-all duration-200'>
                <td className='px-2 py-1 text-center'>{index + 1}</td>
                <td className='px-2 py-1 capitalize'>{item.name}</td>
                <td className='px-2 py-1 capitalize'>{item.category}</td>
                <td className='px-2 py-1'>{item.quantity}</td>
                <td className='px-2 py-1'>{item.pricePerUnit}</td>
                <td className='px-2 py-1'>{props.currency} {item.amount}</td>
                {/* <img src={assets.DeleteIcon}
                  alt='delete icon'
                  onClick={() => deleteItemFromBill(index)}
                  className='absolute right-2 top-1 invisible cursor-pointer group-hover/del:visible w-6 ' /> */}
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <div className="flex justify-end px-10">
        {/* todo */}
        <p className='font-medium w-[15rem] border-t-2 pt-2 border-black'><span className='text-primary'>Total Amount:</span> {props.currency} {props.selectedBill.totalAmount} /- </p>
      </div>
    </div>
  )
}

export default PurchaseBill