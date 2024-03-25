import React from 'react'
import { Landmark } from "lucide-react"
import Image from 'next/image'
type Props = {}

export default function Bai({ }: Props) {
    return (
        <div className='max-w-[380px] h-[235px] flex justify-between bg-[#49A8ED] rounded-[20px] flex-col '>
            <div className='flex p-5 justify-between'>

                <div className='flex-col justify-between gap-3 flex'>
                    <div>
                        <p className='text-white font-thin '>Balanço</p>
                        <p className='text-white text-xl '>Kz 500.000 </p>
                    </div>
                    <div>
                        <p className='text-white font-thin '>Tipo de conta</p>
                        <p className='text-white text-xl '>Particulares</p>
                    </div>
                </div>

                <div>
                    <Image width='70' alt='bank logo' src={require('../../../images/bailogo.png')} />
                </div>
            </div>

            {/* card footer */}
            <div className=' w-full h-[69px] rounded-b-[20px] bg-white/20  flex alingn-center items-center gap-20 justify-between p-5 self-end'>
                < p className='color-white font-semibold text-white text-2xl'> 12**********</p>
                <Landmark color='white' className='font-semibold' />
            </div>
        </div>
    )
}