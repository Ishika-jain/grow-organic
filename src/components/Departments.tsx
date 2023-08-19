import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Departments = () => {
  const departmentData = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  const [departmentState, setDepartmentState] = useState(
    departmentData.map((dept) => ({
      showSubDepartments: false,
      selected: false,
      selectedSubDepts: dept.sub_departments.map(() => false),
    }))
  );

  const toggleSubDepartments = (deptIndex) => {
    setDepartmentState((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      updatedDepartments[deptIndex].showSubDepartments = !updatedDepartments[deptIndex].showSubDepartments;
      return updatedDepartments;
    });
  };

  const toggleDepartment = (deptIndex) => {
    setDepartmentState((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      updatedDepartments[deptIndex].selected = !updatedDepartments[deptIndex].selected;
      updatedDepartments[deptIndex].selectedSubDepts = updatedDepartments[deptIndex].selected
        ? updatedDepartments[deptIndex].selectedSubDepts.map(() => true)
        : updatedDepartments[deptIndex].selectedSubDepts.map(() => false);
      return updatedDepartments;
    });
  };

  const toggleSubDepartmentCheckbox = (deptIndex, subDeptIndex) => {
    setDepartmentState((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      updatedDepartments[deptIndex].selectedSubDepts[subDeptIndex] = !updatedDepartments[deptIndex].selectedSubDepts[subDeptIndex];
      if (updatedDepartments[deptIndex].selectedSubDepts.every((subDeptSelected) => subDeptSelected)) {
        updatedDepartments[deptIndex].selected = true;
      } else {
        updatedDepartments[deptIndex].selected = false;
      }
      
      return updatedDepartments;
    });
  };

  return (
    <div>
      {departmentData.map((dept, deptIndex) => (
        <div key={deptIndex}>
          <button onClick={() => toggleSubDepartments(deptIndex)}>
            {departmentState[deptIndex].showSubDepartments ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
          <Checkbox
            checked={departmentState[deptIndex].selected}
            onClick={() => toggleDepartment(deptIndex)}
          />
          {dept.department}
          {departmentState[deptIndex].showSubDepartments &&
            dept.sub_departments.map((sub, subIndex) => (
              <div key={subIndex} style={{ paddingLeft: 80 }}>
                <Checkbox
                  checked={departmentState[deptIndex].selectedSubDepts[subIndex]}
                  onClick={() => toggleSubDepartmentCheckbox(deptIndex, subIndex)}
                />
                {sub}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Departments;
