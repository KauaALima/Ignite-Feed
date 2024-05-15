import IgniteLogo from "../assets/Logo.svg"

export function Header(){
  return(

    <div className="flex gap-2 justify-center items-center bg-gray-800 p-5">
      <img 
        src={IgniteLogo} 
        className="w-11 h-11" 
        alt="Logo" 
      />

      <span className="text-2xl font-bold">Ignite Feed</span>
    </div>

  )
}