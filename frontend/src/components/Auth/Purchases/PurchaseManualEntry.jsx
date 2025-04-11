import React, { useEffect, useState } from 'react'
import assets from '../../../assets/assets'

const PurchaseManualEntry = (props) => {
  const [bills, setBills] = useState([])

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [rate, setRate] = useState(0)
  const [amount, setAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setAmount(quantity * rate)
  }, [rate, quantity])

  const deleteItemFromBill = (indx) => {
    const newBills = bills.filter((item, index) => index !== indx)
    setBills(newBills)
    setTotalAmount(totalAmount - bills[indx].amount)
  }

  const addItemToBill = () => {
    if (name === '' || category === '' || quantity <= 0 || rate <= 0) {
      alert('Please fill all the fields')
      return
    }
    const newItem = {
      // SNum: SNum,
      name: name.toLowerCase(),
      category: category.toLowerCase(),
      quantity: quantity,
      rate: rate,
      amount: amount
    }
    setTotalAmount(totalAmount + amount)

    setBills([...bills, newItem])
    // setSNum(bills.length + 2)
    setName('')
    setCategory('')
    setQuantity(0)
    setRate(0)
    setAmount(0)
  }

  return (
    <div className="h-screen bg-base/50 col-span-4 md:col-span-3 rounded-md overflow-scroll ">
      {/* TODO */}
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
            {bills.map((item, index) => (
              <tr key={index} className='group/del relative hover:bg-primary/10 transition-all duration-200'>
                <td className='px-2 py-1 text-center'>{index + 1}</td>
                <td className='px-2 py-1 capitalize'>{item.name}</td>
                <td className='px-2 py-1 capitalize'>{item.category}</td>
                <td className='px-2 py-1'>{item.quantity}</td>
                <td className='px-2 py-1'>{item.rate}</td>
                <td className='px-2 py-1'>{props.currency} {item.amount}</td>
                <img src={assets.DeleteIcon}
                  alt='delete icon'
                  onClick={() => deleteItemFromBill(index)}
                  className='absolute right-2 top-1 invisible cursor-pointer group-hover/del:visible w-6 ' />
              </tr>
            ))}

            {/* New item entry */}
            <tr className='bg-primary'>
              <td><input className='w-full outline-none bg-transparent text-center' disabled value={bills.length + 1}></input></td>
              <td><input require className='w-full outline-none bg-transparent px-2 capitalize' value={name} onChange={(e) => setName(e.target.value)}></input></td>
              <td><input require className='w-full outline-none bg-transparent px-2 capitalize' value={category} onChange={(e) => setCategory(e.target.value)}></input></td>
              <td><input require className='w-full outline-none bg-transparent px-2' value={quantity} onChange={(e) => setQuantity(e.target.value)} type='number'></input></td>
              <td><input require className='w-full outline-none bg-transparent px-2' value={rate} onChange={(e) => setRate(e.target.value)} type='number'></input></td>
              <td><input require className='w-full outline-none bg-transparent px-2' value={props.currency + ' ' + amount} disabled></input></td>
            </tr>
            <button className='absolute right-3 -bottom-8 bg-primary px-5 rounded-md font-medium text-white text-lg' onClick={addItemToBill}>Add Item</button>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end px-10">
        {/* todo */}
        <p className='font-medium w-[15rem] border-t-2 pt-2 border-black'><span className='text-primary'>Total Amount:</span> {props.currency} {totalAmount} /- </p>
      </div>
    </div>
  )
}

export default PurchaseManualEntry