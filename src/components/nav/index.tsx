"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"


export default function NavigationBar() {
    return (
     <Drawer>
        <DrawerTrigger asChild>
        <Button variant="ghost">Verbind</Button>
      </DrawerTrigger>
      <DrawerContent  >
        <div>Text</div>
      </DrawerContent>
     </Drawer>
 )
}