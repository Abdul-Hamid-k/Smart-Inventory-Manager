import React from 'react'

const SummaryCard = (props) => {
  // props => icon, title, value
  return (
    <div className="relative mt-4 flex flex-col gap-1  cursor-pointer bg-white w-full h-fit px-6 md:px-4 lg-px-6 py-3 rounded-lg">

      {/* side design */}
      <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
      {/* ----------- */}

      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-primary p-2 text-white">
        <img src={props.icon} alt="bill-icon" className='fill-white' />
      </div>

      <h4 className='md:leading-tight font-medium text-primary'>{props.title}</h4>
      {/* TODO */}
      <h5 className='font-medium text-2xl '>{props.value}</h5>
    </div>
  )
}

export default SummaryCard