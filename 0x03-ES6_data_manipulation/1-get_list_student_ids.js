/**
 * Retrieves ids from a list of students.
 * @returns ids of students.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
