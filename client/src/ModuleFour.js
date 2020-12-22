import React from 'react'
import ModuleFourContent from './components/CoursePages/ModuleFourContent'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class ModuleFour extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div>
                <div><ModuleFourContent /></div>
            </div>
        )
    }
}

export default ModuleFour;