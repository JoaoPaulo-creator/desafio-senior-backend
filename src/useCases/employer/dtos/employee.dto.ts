interface EmployerDTO {
  name: string;
  employeeId: EmployeeDTO['id'];
}

interface EmployeeDTO {
  id?: string;
  name: string;
}

export { EmployerDTO };
