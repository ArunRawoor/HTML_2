const students = [
{ id: 1, name: 'Alice', grade: 'A' },
{ id: 2, name: 'Bob', grade: 'B' },
{ id: 3, name: 'Carol', grade: 'C' },
{ id: 4, name: 'lice', grade: 'A' },
{ id: 5, name: 'Jon', grade: 'B' },
{ id: 6, name: 'Aarol', grade: 'D' },
{ id: 7, name: 'Slice', grade: 'A' },
{ id: 8, name: 'Bone', grade: 'B' },
{ id: 9, name: 'Carol', grade: 'D' },
{ id: 10, name: 'Crol', grade: 'C' },
,
];
// const grades  = students.find(g =>  g.grade === 'C');
const mapfun = students.map(id => id.grade == "A");
console.log(mapfun);
