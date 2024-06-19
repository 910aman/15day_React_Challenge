import React, { useState } from 'react'
import TiptapButtons from '../TiptapButtons'
import ViewPost from './ViewPost'


const NewPost = () => {
    const [htmlContent, setHtmlContent] = useState("")
    const handleEditorContentSave = (html) => {
        setHtmlContent(html);
      }
    return (
        <div className='border'>
            <TiptapButtons onEditorContentSave={handleEditorContentSave} />
            <hr/>
            <ViewPost content={htmlContent}/>
        </div>
    )
}

export default NewPost