import './Tiptap.css'
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

const TiptapButtons = ({ onEditorContentSave }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Color, Paragraph, Text, TextStyle,],
    content: "<p>Edit me 😍😍</p>",
  });

  if (!editor) {
    return null
  }

  const handleEditor = () => {
    const html = editor.getHTML();
    onEditorContentSave(html)
  }



  return (
    <div className='pb-2'>
      <div className='flex flex-wrap gap-2 bg-gray-200 justify-center'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('bold') ? 'is-active' : 'non-active'}`}>
          <strong>Bold</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('italic') ? 'is-active' : 'non-active'}`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('underline') ? 'is-active' : 'non-active'}`}>
          Underline
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('strike') ? 'is-active' : 'non-active'}`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('code') ? 'is-active' : 'non-active'}`}
        >
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md text-[#808080]">
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()} className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md  text-[#808080]">
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('paragraph') ? 'is-active' : 'non-active'}`}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('heading', { level: 1 }) ? 'is-active' : 'non-active'}`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('heading', { level: 2 }) ? 'is-active' : 'non-active'}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('heading', { level: 3 }) ? 'is-active' : 'non-active'}`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('heading', { level: 4 }) ? 'is-active' : 'non-active'}`}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('heading', { level: 5 }) ? 'is-active' : 'non-active'}`}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('heading', { level: 6 }) ? 'is-active' : 'non-active'}`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('bulletList') ? 'is-active' : 'non-active'}`}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('orderedList') ? 'is-active' : 'non-active'}`}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('codeBlock') ? 'is-active' : 'non-active'}`}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('blockquote') ? 'is-active' : 'non-active'}`}
        >
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md text-[#808080]" >
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()} className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md text-[#808080]" >
          Hard break
        </button>
        <button
          className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md text-[#808080]"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          Undo
        </button>
        <button
          className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md text-[#808080]"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          Redo
        </button>
      </div>
      <div className='mt-3'>
        <div className='flex flex-wrap gap-2 bg-gray-200 justify-center '>
          {/* <p className='flex justify-start '>Select color for editor</p> */}
          <input
            type="color"
            onInput={event => editor.chain().focus().setColor(event.target.value).run()}
            value={editor.getAttributes('textStyle').color}
            data-testid="setColor"
            className='w-20 flex items-center h-10 p-2 rounded-lg'
          />
          <button
            onClick={() => editor.chain().focus().setColor('#958DF1').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : 'non-active'}`}
            data-testid="setPurple"
          >
            Purple
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#F98181').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#F98181' }) ? 'is-active' : 'non-active'}`}
            data-testid="setRed"
          >
            Red
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#FBBC88' }) ? 'is-active' : 'non-active'}`}
            data-testid="setOrange"
          >
            Orange
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#FAF594').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#FAF594' }) ? 'is-active' : 'non-active'}`}
            data-testid="setYellow"
          >
            Yellow
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#70CFF8' }) ? 'is-active' : 'non-active'}`}
            data-testid="setBlue"
          >
            Blue
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#94FADB').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#94FADB' }) ? 'is-active' : 'non-active'}`}
            data-testid="setTeal"
          >
            Teal
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
            className={`bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md ${editor.isActive('textStyle', { color: '#B9F18D' }) ? 'is-active' : 'non-active'}`}
            data-testid="setGreen"
          >
            Green
          </button>
          <button
            onClick={() => editor.chain().focus().unsetColor().run()}
            className="bg-gray-400 whitespace-nowrap px-4 my-2 rounded-md text-[#808080]"
            data-testid="unsetColor"
          >
            Unset color
          </button>
        </div>
      </div>
      <div className='border-2 border-gray-300 rounded-sm '>
        <EditorContent editor={editor} className='max-h-96 overflow-auto ' />
      </div>
      <button className='bg-gray-200 px-4 font-semibold rounded-md text-xl mt-4' onClick={handleEditor}>Save</button>
    </div>
  )
};

export default TiptapButtons;
