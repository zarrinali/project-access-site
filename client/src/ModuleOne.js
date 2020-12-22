import React from 'react'
import ModuleOneContent from './components/CoursePages/ModuleOneContent'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class ModuleOne extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div>
                <div><ModuleOneContent /></div>
            </div>
        )
    }
}

export default ModuleOne;