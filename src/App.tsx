import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Master Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Falaaaaaaaaaaaaaaaaaa dev'},
      {type: 'link', content: '👉 @Diego3g'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/159039659?v=4',
      name: 'Kauã Araujo',
      role: 'Junior Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 @kaua22k'},
    ], 
    publishedAt: new Date('2023-05-02 20:00:00')
  },
  
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayky Brito',
      role: 'Master Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Iai galerinha'},
      {type: 'link', content: '👉 @maykyBrito'},
    ],
    publishedAt: new Date('2024-02-03 20:00:00')
  },
]

export default function App() {
  return (
    <div>
      <Header />

      <div className="max-w-6xl grid grid-cols-none gap-8 items-start mt-8 mx-auto py-0 px-2 sm:grid-cols-wrapper">
        <Sidebar />

        <main className="flex flex-col gap-10 mb-8">
          {
            posts.map(post => {
              return(
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}