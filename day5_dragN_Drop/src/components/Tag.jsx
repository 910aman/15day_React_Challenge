import React from 'react'

const Tag = ({ tagName, selectTags, selected }) => {

    const tagStyle = {
        HTML: { backgroundColor: "#fda281", color: "#fff"},
        CSS: { backgroundColor: "#122FE3", color: "#fff"},
        ReactJS: { backgroundColor: "#1294E3",  color: "#fff" },
        Javascript: { backgroundColor: "#ffd12c", color: "#000"},
        default: { backgroundColor: "#CBC9C9" },
    }

    return <button type='button'
        className='px-3 py-1 text-lg rounded-md bg-white border border-black'
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTags(tagName)}>
        {tagName}
    </button>;
}

export default Tag

{/* <button className='tag border-[#8581b4] border-2 hover:bg-yellow-500'>Javascript</button>
<button className='tag border-[#8581b4] border-2 hover:bg-[#1294E3]'>React</button>
<button className='tag border-[#8581b4] border-2 hover:bg-red-500'>HTML</button>
<button className='tag border-[#8581b4] border-2 hover:bg-[#122FE3]'>CSS</button> */}