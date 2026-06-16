import React from "react";

const App = () => {
  const studentmark = [
    {
      student: "vijay",
      qandm: [
        {
          subject: "maths",
          mark: 80,
        },
        {
          subject: "science",
          mark: 70,
        },
      ],
    },
    {
      student: "Rahul",
      qandm: [
        {
          subject: "maths",
          mark: 90,
        },
        {
          subject: "science",
          mark: 60,
        },
      ],
    },
  ];

  const result = studentmark.map((student) => {
    const totalmarks = student.qandm.reduce(
      (sum, subject) => sum + subject.mark,
      0
    );

    return {
      name: student.student,
      finaltotalmark: totalmarks,
      finalaveragemark: totalmarks / student.qandm.length,
    };
  });

  return (
    <>
      <h2>Student Results</h2>

      {result.map((student, index) => (
        <div key={index}>
          <h3>{student.name}</h3>
          <p>Total Marks: {student.finaltotalmark}</p>
          <p>Average Marks: {student.finalaveragemark}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default App;