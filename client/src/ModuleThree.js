import React from 'react'
import ModuleThreeContent from './components/CoursePages/ModuleThreeContent'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class ModuleThree extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div>
                <div><ModuleThreeContent /></div>
            </div>
        )
    }
}

export default ModuleThree;