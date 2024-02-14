import { Header } from './components/Header'
import { Post, PostType } from "./components/Post"
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MikaelOM.png',
      name: 'Mikael',
      role: 'Software Engineering'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: '👉 jane.design/doctorcare '},
      {type: 'link', content: '#novoprojeto'},
    ],
    publishedAt: new Date('2023-12-03 07:45:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'O @Mikael é muito massa 🚀'},
      {type: 'paragraph', content: '👉 Mikael.SoftwareEngineering '},
      {type: 'link', content: '#novoprojeto'},
    ],
    publishedAt: new Date('2023-12-03 07:46:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
