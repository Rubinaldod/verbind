import Bai from "@/components/ui/Cards/Bai";
import { LastMovmentTable } from "@/components/ui/Table/lastMovTable";

export default function Home() {
  return (
    <div className="overflow-y-auto ">
    <div className="  flex flex-row p-6 ">
      <div className="flex flex-col flex-grow ">



        <div className="">  
        
        <div className="flex justify-between max-w-[600px]" >
        <p className="font-semibold">Minhas contas</p>
        <p className="font-semibold">Ver mais</p>
        </div>

          <div className="pb-5 pt-5 flex flex-row gap-5">   
          
          <Bai />
          <Bai />
          
          </div>
        </div>
     
        <div>  
        <div className="flex justify-between max-w-[600px]" >
        <p  className="font-semibold">Actividades pendentes</p>
        <p className="font-semibold">Ver mais</p>
        </div>
          <div className="pb-5 pt-5 flex flex-row gap-5">   
          
          <Bai />
          <Bai />
          
          </div>
        </div>
      </div>

      <div className="">
        <div>
          movimento recentes
        </div>
      </div>





      
    </div>

    <div className="p-7">
      
    <div className="flex justify-between max-w-[600px]" >
        <p className="font-semibold">Últimos movimentos</p>
        <p className="font-semibold">Ver mais</p>
    </div>


<div className="pt-6 "><LastMovmentTable /></div>
    


    </div>
    </div>
  );
}
