import React from "react";
import { Student } from "./Student";

interface Props {
    student: Student;
}

export const StudentComponent: React.FC<Props> = ({ student }) => {
    return (
        <div id="wrapper">
            <p>ID: {student.id}</p>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <p>Age: {student.age}</p>
        </div>
    );
};