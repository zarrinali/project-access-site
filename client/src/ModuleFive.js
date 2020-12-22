import React from 'react'
import ModuleFiveContent from './components/CoursePages/ModuleFiveContent'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class ModuleFive extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div>
                <div><ModuleFiveContent /></div>
            </div>
        )
    }
}

export default ModuleFive;