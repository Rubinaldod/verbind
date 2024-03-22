"use client"
import { useState } from 'react'
import { Nav } from './ui/nav/nav'
import {
  LayoutDashboard,
  CandlestickChart,
  Grid2X2,
  Settings,
  BetweenHorizonalEnd,
  BadgePlus,
  ChevronRight

} from "lucide-react"
import { Button } from './ui/button'
import Image from 'next/image'
type Props = {}

export default function SideNavbar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const fullLogo = 'Logo.png'
  const minLogo = 'miniLogo.svg'
  function taggleSidebar() {
    setIsCollapsed(!isCollapsed)

  }



  return (
    <>
      <div className={` relative min-w-[80px] border-r px-3 pb-10 pt-10 pr-5 ${isCollapsed ? 'w-16' : ''} transition-width`}>
        <Image alt='Logo' sizes='sm' src={isCollapsed ? require('../images/' + minLogo) : require('../images/' + fullLogo)} />
        <div className="pt-20 transition-opacity" >
          <div className='absolute right-[-20px] top-7'>
            <Button variant="secondary" className='rounded-full p-2' onClick={taggleSidebar}>
              <ChevronRight />
            </Button>
          </div>

          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                icon: LayoutDashboard,
                variant: "default",
                href: '/'
              },
              {
                title: "Movimentos",
                icon: CandlestickChart,
                variant: "ghost",
                href: '/movimentos'
              },
              {
                title: "Minhas Contas",
                icon: BetweenHorizonalEnd,
                variant: "ghost",
                href: '/minhas-contas'
              },
              {
                title: "Criar conta",
                icon: BadgePlus,
                variant: "ghost",
                href: '/criar-conta'
              },
              {
                title: "Serviços",
                icon: Grid2X2,
                variant: "ghost",
                href: '/servicos'
              },
              {
                title: "Definições",
                label: "",
                icon: Settings,
                variant: "ghost",
                href: '/definicoes'
              },
            ]}

          />
        </div>
      </div>
    </>
  )
}