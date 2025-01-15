import baseUrl from "./base-url";

//function to get attendance
const getAttendance = async () => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("JWT token is not available");
    }

    const apiUrl = `${baseUrl()}/admin/`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching employee list:", error);
  }
};

//function to add employee
const addEmployee = async (employeeData) => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("JWT token is not available");
    }

    const apiUrl = `${baseUrl()}/admin/addemployee`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the parsed data
    return data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

//function to get employees
const getEmployees = async () => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("JWT token is not available");
    }

    const apiUrl = `${baseUrl()}/admin/employeelist`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching employee list:", error);
  }
};

//function to get employee by id
const getEmployeeById = async (id) => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("JWT token is not available");
    }

    const apiUrl = `${baseUrl()}/admin/employee/${id}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching employee:", error);
  }
};

//function to update employee
const updateEmployee = async (employeeData, id) => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("JWT token is not available");
    }

    const apiUrl = `${baseUrl()}/admin/${id}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the parsed data
    return data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

//function to delete employee
const deleteEmployee = async (id) => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("JWT token is not available");
    }

    const apiUrl = `${baseUrl()}/admin/${id}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Return success response
    return { success: true, message: "Employee deleted successfully" };
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};

export const adminService = {
  getAttendance,
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
