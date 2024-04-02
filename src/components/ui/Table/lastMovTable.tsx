import { Button } from "../button";

export function LastMovmentTable (){

    return(
       
        <table className="table-auto w-full bg-white border-separate  border-spacing-6 border rounded-2xl ">
        <thead  className="">
          <tr className=" align-left flex justify-between border-b p-2 items-start">
            <th className="  w-full text-left text-[#718EBF] font-normal">Descrição</th>
            <th className="w-full text-left text-[#718EBF] font-normal">N Transação</th>
            <th className="w-full text-left text-[#718EBF] font-normal">Tipo</th>
            <th className="w-full text-left text-[#718EBF] font-normal">Conta</th>
            <th className="w-full text-left text-[#718EBF] font-normal">Data</th>
            <th className="w-full text-left text-[#718EBF] font-normal">Montante</th>
            <th className="w-full text-left text-[#718EBF] font-normal">Comprovativo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-left flex justify-center items-center border-b p-2 ">
            <td className="w-full">Recarga Unitel</td>
            <td className="w-full">#00021</td>
            <td className="w-full">Recarga</td>
            <td className="w-full">123***</td>
            <td className="w-full">12/12/12</td>
            <td className="w-full text-red-500">-Kz 1 000</td>
            <td className="w-full">
                <Button className="rounded-full border" variant='ghost' > Download</Button>
            </td>
          </tr>

          <tr className="align-left flex justify-center items-center border-b p-2 ">
            <td className="w-full">Recarga Unitel</td>
            <td className="w-full">#00021</td>
            <td className="w-full">Recarga</td>
            <td className="w-full">123***</td>
            <td className="w-full">12/12/12</td>
            <td className="w-full text-red-500">-Kz 1 000</td>
            <td className="w-full">
                <Button className="rounded-full border" variant='ghost' > Download</Button>
            </td>
          </tr>
          
          <tr className="align-left flex justify-center items-center border-b p-2 ">
            <td className="w-full">Recarga Unitel</td>
            <td className="w-full">#00021</td>
            <td className="w-full">Recarga</td>
            <td className="w-full">123***</td>
            <td className="w-full">12/12/12</td>
            <td className="w-full text-red-500">-Kz 1 000</td>
            <td className="w-full">
                <Button className="rounded-full border" variant='ghost' > Download</Button>
            </td>
          </tr>

          
         
        </tbody>
      </table>
    )
}