import React from "react";
import { Student } from "./Student";
import { StudentComponent } from "./StudentComponent";

interface Props {
    students: Student[];
}

export const StudentList: React.FC<Props> = ({ students }) => {
    return (
        <div>
            {students.map((item, index) => (
                <StudentComponent key={index + item.id} student={item}></StudentComponent>
            ))}
        </div>
    );
};