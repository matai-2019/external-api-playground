import React from 'react'

const HouseStudents = ({ students }) => {
  return (
    <>
      {students.map(student =>
        <li key={student.id}>{student.name}</li>
      )}
    </>
  )
}

export default HouseStudents
