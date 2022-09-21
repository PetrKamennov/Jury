import React from "react";
import { useState } from "react";
import axios from 'axios';
import "../components/AdminEditProject/AdminEditProject.css";
import AdminEditProjectModal from "../components/AdminEditProject/AdminEditProjectModal";
import Project from "../components/AdminEditProject/Project";
import Navbar from "../components/navbar/Navbar";


class AdminEditProject extends React.Component {

    state = {
        projects: [],
        active: false
    }

    createProject = (newProject) => {
    }

    removeProject = (project) => {
        // setProject(projects.filter(p => p.id !== project.id))
    }

    componentDidMount() {
        axios.get('http://aleksbcg.beget.tech/events/1', {
            headers: {
                'AUTHORIZATION': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MTA5OTc1LCJpYXQiOjE2NjM2Nzc5NzUsImp0aSI6IjUzYTZiNmQ4YWNhNjQzODk4Nzc1MmFlMmZlYjQ0NzE1IiwidXNlcl9pZCI6Mn0.iGflXEgU-P-PGM74P7wdYUWq_TzOI8UpFoRDN6NX2uE`
            }
        }).then(response => {
            console.log(response.data)
            this.setState({ projects: [response.data] })
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <section className="AdminEditProject">
                    <div className="AdminEditProject__pullProject">
                        {this.state.projects.map((projects, index) =>
                            <Project  number={index + 1} project={projects} key={projects.id} />
                        )}

                    </div>
                    <button onClick={() => this.setState({ active: true})}>Добавить проект</button>
                </section>
                <AdminEditProjectModal active={this.state.active} />
            </>
        )
    }
}

export default AdminEditProject


// const AdminEditProject = () => {

//     const [projects, setProject] = useState([
//     ])

//     const [modalActive, setModalActive] = useState(false);

//     const createProject = (newProject) => {
//         setProject( [...projects, newProject])
//     }

//     const removeProject = (project) => {
//         setProject(projects.filter(p => p.id !== project.id))
//     }

//     return (
//         <>
//             <Navbar/>
//             <section className="AdminEditProject">
//                 <div className="AdminEditProject__pullProject">
//                     {projects.map((projects, index) =>
//                         <Project remove={removeProject} number={index + 1} project={projects} key={projects.id}/>
//                     )}

//                 </div>
//                 <button onClick={() => setModalActive(true)}>Добавить проект</button>
//             </section>
//             <AdminEditProjectModal create={createProject} active={modalActive} setActive={setModalActive} />
//         </>
//     )
// }

// export default AdminEditProject

