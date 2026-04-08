'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menu-bar'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { useEffect } from 'react'

export default function TextEditor({
  onChange,
}: {
  onChange: (value: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "ml-3 list-disc",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "ml-3 list-decimal",
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ],
    content: '',
    editorProps: {
      attributes: {
        class:
          "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },
    immediatelyRender: false,

    // 🔥 ambil value tiap update
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}