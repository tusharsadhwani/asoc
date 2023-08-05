import React from 'react'
import Image from 'next/image'

const FOSSLogo = () => {
  return (
    <div className='foss-container'>

    <Image
    src="/images/FOSS.svg"
    alt="FOSS United Logossss"
    width={200}
    height={200}
    className="foss"
    />
    </div>
  )
}

export default FOSSLogo