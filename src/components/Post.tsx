import { format , formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author {
  avatarUrl: string
  name: string
  role: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostType{
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps){
  const [comments , setComments] = useState([
    'Muito bom'
  ])

  const [newComment , setNewComment] = useState('')

  const publishedDateFormat = format( post.publishedAt, "d 'de' MMMM 'as' HH':'mm'h'" ,
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,
    {
      locale: ptBR,
      addSuffix: true
    }
  )

  function handleAddNewComment(event: FormEvent){
    event.preventDefault()
    
    setComments([...comments, newComment])
    setNewComment('')
  } 

  function handleNameRequired(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo não pode ser vazio')
  }

  function handleDeleteComment(deletedComment: string){
    const newCommentDeleted = comments.filter(comment => {
      return comment !== deletedComment
    })

    setComments(newCommentDeleted)
  }



  return (
    <article className="flex flex-col flex-1 bg-gray-800 rounded-md p-10 space-y-6">
    <header className="flex items-center justify-between">
      <div className="flex gap-4 items-center">

        <Avatar src={post.author.avatarUrl} isBorder/>

        <div>
          <strong className="text-base font-bold text-gray-100">{post.author.name}</strong>
          <p className="font-normal text-sm text-gray-400">{post.author.role}</p>
        </div>
      </div>

      <time title={publishedDateFormat} dateTime={post.publishedAt.toISOString()} className="font-normal text-sm text-gray-400">{publishedDateRelativeToNow}</time>
    </header>

    <div>
        {
          post.content.map(line => {
            if(line.type === 'paragraph'){
              return (
                <div>
                  <br />
                  <p className="flex flex-col items-start justify-start text-base font-normal text-gray-400">{line.content}</p>
                </div>
              )
            } else if(line.type === 'link'){
              return (
                <div>
                  <br />
                  <a href="" className="font-bold text-green-300 duration-150 hover:text-green-200">{line.content}</a>
                </div>
              )
            }
          })
        }
    </div>
    
    <form onSubmit={handleAddNewComment} className="flex flex-col border-t border-gray-600 space-y-4">
      <strong className="text-base font-bold mt-6">Deixe seu feedback</strong>

      <textarea 
        name="fedback" 
        id="fedback" 
        placeholder="Escreva um comentário..." 
        value={newComment}
        onInvalid={handleNameRequired}
        required
        onChange={e => setNewComment(e.target.value)}
        className="bg-gray-900 text-base text-gray-300  py-3 px-4 rounded-lg resize-none h-24" 
      />

      <footer>  
        <button disabled={newComment.length === 0} className="text-base font-bold bg-green-500 py-4 px-6 rounded-lg duration-150 hover:bg-green-300 hover:duration-150 disabled:opacity-50">Publicar</button>
      </footer>
    </form>

    <div>
      {
        comments.map(comment => {
          return(
            <Comment 
              key={comment} 
              comment={comment} 
              onDeleteComment={handleDeleteComment}
            />
          )
        })
      }
    </div>
  </article>
  )
}