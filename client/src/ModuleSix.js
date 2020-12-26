import React from 'react'
import ModuleSixContent from './components/CoursePages/ModuleSixContent'
import Sidebar from './components/CoursePages/Sidebar'
import StudentNav from './components/Nav/StudentNav'

class ModuleSix extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><Sidebar /></div>
                <div><ModuleSixContent /></div>
            </div>
        )
    }
}

export default ModuleSix;