/**
 * Retrieves students in a given location.
 *
 * @returns list of students in given location.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
