import React from 'react'

const Waktu_pembayaran = () => {
  return (
    // Frame 4388
    <div className='flex py-3 gap-2 bg-tertiary-100 place-content-center sm:gap-4'>
      <p className='font-medium text-sm leading-[140%] tracking-[0.2px] text-dark-secondary flex items-center sm:text-lg'>Selesaikan pemesanan dalam</p>
      {/* Frame 4387 */}
      <div className="flex gap-1 items-center leading-[140%] tracking-[0.2px] font-bold sm:gap-2.5">
        {/* Jam */}
        <span className='p-1 text-xs rounded bg-tertiary text-white sm:text-base'>00</span>
        <p className='text-dark-secondary'>:</p>
        {/* Menit */}
        <span className='p-1 text-xs rounded bg-tertiary text-white sm:text-base'>50</span>
        <p className='text-dark-secondary'>:</p>
        {/* Detik */}
        <span className='p-1 text-xs rounded bg-tertiary text-white sm:text-base'>55</span>
      </div>
    </div>
  )
}

export default Waktu_pembayaran