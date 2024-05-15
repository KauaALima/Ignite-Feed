import Back from "../assets/Back.jpg"
import { PencilLine } from "lucide-react";

export function Sidebar(){
  return(
  <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img src={Back} alt="Back" className="w-full h-[72px] object-cover" />

      <div className="flex flex-col items-center -mt-7 space-y-6">
        <img src="https://avatars.githubusercontent.com/u/159039659?v=4"  alt="Profile" className="w-14 h-14 object-cover border-4 rounded-md border-gray-800 ring-2 ring-green-300" />

        <div className="text-center">
          <h1 className="text-base font-bold text-gray-100">Kauã Araujo</h1>
          <span className="font-normal text-sm text-gray-400">Developer</span>
        </div>

        <footer className="w-full border-t border-gray-600 p-6 text-center">
          <a href="" className="w-full flex text-base font-bold text-green-300 items-center justify-center gap-2 py-4 px-6 border border-green-500 rounded-lg duration-500 hover:bg-green-500 hover:text-white">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
  </aside>
  )
}