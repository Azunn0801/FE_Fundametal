let students = [

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

];

listStudents = students.forEach((students) =>  {
    avg = (students.scores.math + students.scores.english + students.scores.literature) / 3
    if(avg >= 8)    {
        console.log(students.name)
    }
})
