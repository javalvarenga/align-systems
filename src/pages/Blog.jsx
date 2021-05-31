import React, { useState } from 'react'
import Cap1 from '../components/Cap1'
import Cap2 from '../components/Cap2'
import Cap3 from '../components/Cap3'
import './styles/Blog.css'

function Blog() {
   
    return (
        <div className="Blog">
            <Cap1 />
            <Cap2 />
            <Cap3 />
        </div>
    )
}

export default Blog
