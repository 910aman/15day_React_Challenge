import React, { useEffect, useState } from 'react'
import TiptapButtons from '../TiptapButtons'
import ViewPost from './ViewPost'


const NewPost = () => {
    const [htmlContent, setHtmlContent] = useState("")
    const [localContent,setLocalContent] = useState(localStorage.getItem("tiptap") || [])
    const handleEditorContentSave = (html) => {
        setHtmlContent(html);
      }

    useEffect(() => {
        localStorage.setItem("tiptap",(setLocalContent(htmlContent)))
    },[htmlContent])

    return (
        <div className='border'>
            <TiptapButtons onEditorContentSave={handleEditorContentSave} />
            <br/>
            <ViewPost content={localContent}/>
        </div>
    )
}

export default NewPost