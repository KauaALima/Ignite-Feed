import { useState } from "react"
import { Avatar } from "./Avatar"
import { Trash2, ThumbsUp } from "lucide-react"

interface commentProps {
  comment: string
  onDeleteComment: (comment: string) => void
}

export function Comment({comment, onDeleteComment}: commentProps){
    const [like, setLike] = useState(0)

  function deleteComment(){
    onDeleteComment(comment)
  }

  function CountLike(){
    setLike(like + 1)
  }

  return(
    <div className="flex gap-4 mt-4">
      <Avatar src="https://avatars.githubusercontent.com/u/159039659?v=4"/>

      <div className="flex-1">
        <div className="bg-gray-700 pt-4 px-4 pb-6 rounded-lg">
          <header className="flex items-center justify-between">
              <div className="flex flex-col">
                <strong className="text-sm">Kauã Aaujo</strong>
                <span className="font-normal text-xs text-gray-400">Cerca de 2h</span>
              </div>

              <button onClick={deleteComment}>
                <Trash2 size={24} className="text-gray-400 duration-200 hover:text-red-500 hover:duration-200" />
              </button>
          </header>

          <main>
            <p className="text-sm font-normal text-gray-300 mt-4">{comment}</p>
          </main>
        </div>

        <footer className="mt-4 ">
          <button onClick={CountLike} className="flex items-center justify-center text-sm font-bold text-gray-400 gap-3 hover:text-gray-100 active:text-green-300">
            <ThumbsUp size={16} />
            <p className="mt-1">Aplaudir {like === 0 ? '' : <span className="before:content-['\2022'] before:p-2">{like}</span>}</p> 
            
          </button>
        </footer>
      </div>
    </div>
  )
}