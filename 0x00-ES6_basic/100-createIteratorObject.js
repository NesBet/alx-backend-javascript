export default function createIteratorObject(report) {
  let allEmployees = report.allEmployees;
  let employees = [];
  
  for (let department in allEmployees) {
    employees = employees.concat(allEmployees[department]);
  }
  
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            return { value: employees[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

