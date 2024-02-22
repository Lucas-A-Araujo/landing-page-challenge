import React from 'react';
import './styles.css';
import StarSVG from '../../assets/icons/material-symbols_star';

const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            name: "Ciência de dados",
            instructor: "Jane Cosmo",
            hours: 340,
            content: ["Materia 1", "Materia 2", "Materia 3", "Materia 4"]
        },
        {
            id: 2,
            name: "Engenharia de dados",
            instructor: "Edward Norton",
            hours: 320,
            content: ["Materia 1", "Materia 2", "Materia 3", "Materia 4"]
        },
        {
            id: 3,
            name: "Analise de dados",
            instructor: "Penelope Cruz",
            hours: 280,
            content: ["Materia 1", "Materia 2", "Materia 3", "Materia 4"]
        }
    ];

    return (
        <div id="our-courses" className="courses-section">
            <h2>Nossos Cursos</h2>
            <div className="course-cards">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <p><strong>Professor:</strong> {course.instructor}</p>
                        <p><strong>Total de Horas:</strong> {course.hours}h</p>
                        <p><strong>Principais Conteúdos:</strong></p>
                        <ul>
                            {course.content.map((content, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><StarSVG/>{content}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesSection;