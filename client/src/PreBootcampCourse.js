import React from 'react'
import Introduction from './components/CoursePages/Introduction'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class PreBootcampCourse extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div> 
                <div><Introduction /></div>           
            </div>
        )
    }
}

export default PreBootcampCourse;