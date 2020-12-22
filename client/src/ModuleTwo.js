import React from 'react'
import ModuleTwoContent from './components/CoursePages/ModuleTwoContent'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class ModuleTwo extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div>
                <div><ModuleTwoContent /></div>
            </div>
        )
    }
}

export default ModuleTwo;