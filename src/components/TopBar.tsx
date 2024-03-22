"use client"

import Image from 'next/image' 
import {BellDot} from 'lucide-react'
import { Button } from './ui/button'

export default function Topbar (){
    return (
        <div className="abosule w-full min-h-15 align-start flex justify-end pr-9 pt-4 pb-2  gap-4 items-center border-b">
       
            <Button variant='secondary' className='rounded-full p-2 w-10 h-10'> <BellDot  className='w-5 h-5'/> </Button>


            <div>
            <Image src={require('../images/perfil.jpeg')} alt='profile  foto' width="45" height="45"  className='rounded-full'/>
            </div>

           
        </div> )
}