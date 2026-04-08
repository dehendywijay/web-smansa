'use client'

import { useState } from 'react'
// import TextEditor from '@/components/text-editor'
import axios from 'axios'

export default function CreatePostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (image) {
      formData.append('image', image)
    }

    console.log("TITLE:", title)
    console.log("CONTENT:", content)
    console.log("IMAGE:", image)

    // contoh kirim ke API
    // fetch('/api/post', {
    //   method: 'POST',
    //   body: formData,
    // })

    axios.post('http://localhost:3001/api/news', formData)
  }

  return (
    <div className='max-w-3xl mx-auto py-8' >
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Masukkan judul..."
        className="w-full border rounded-md p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setImage(e.target.files[0])
          }
        }}
      />

      {/* <TextEditor onChange={setContent} /> */}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
    </div>
  )
}


