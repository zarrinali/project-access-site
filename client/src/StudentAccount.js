import React from 'react'
import StudentNav from './components/Nav/StudentNav'
import AccountInfo from './components/StudentView/AccountInfo'
import StudentSidebar from './components/StudentView/StudentSidebar'
class StudentAccount extends React.Component {
    render() {
        return (
            <div>
                <div><StudentNav /></div>
                <div><StudentSidebar /></div>
                <div><AccountInfo /></div>
            </div>
        )
    }
}
export default StudentAccount;