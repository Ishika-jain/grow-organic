import { useState } from "react";
import { Checkbox } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Departments = () => {
  // Interface to describe the structure of department data
  interface DepartmentData {
    department: string;
    sub_departments: string[];
  }

  // Interface to describe the state of department and sub-department selection
  interface DepartmentState {
    showSubDept: boolean;
    deptSelected: boolean;
    subDeptSelected: boolean[];
  }

  // Sample data of departments and sub-departments
  const departmentData: DepartmentData[] = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  // State to manage department and sub-department selection
  const [deptState, setDeptState] = useState<DepartmentState[]>(
    departmentData.map((dept) => ({
      showSubDept: false,
      deptSelected: false,
      subDeptSelected: dept.sub_departments.map(() => false),
    }))
  );

  // Function to toggle the display of sub-departments
  const toggleShowSubDept = (deptIndex: number) => {
    setDeptState((prevState) => {
      const updatedState = [...prevState];
      updatedState[deptIndex].showSubDept =
        !updatedState[deptIndex].showSubDept;
      return updatedState;
    });
  };

  // Function to toggle the selection of a department
  const toggleDeptSelected = (deptIndex: number) => {
    setDeptState((prevState) => {
      const updatedState = [...prevState];
      updatedState[deptIndex].deptSelected =
        !updatedState[deptIndex].deptSelected;
      updatedState[deptIndex].subDeptSelected = updatedState[deptIndex]
        .deptSelected
        ? updatedState[deptIndex].subDeptSelected.map(() => true)
        : updatedState[deptIndex].subDeptSelected.map(() => false);
      return updatedState;
    });
  };

  // Function to toggle the selection of a sub-department
  const toggleSubDeptSelected = (deptIndex: number, subIndex: number) => {
    setDeptState((prevState) => {
      const updatedState = [...prevState];
      updatedState[deptIndex].subDeptSelected[subIndex] =
        !updatedState[deptIndex].subDeptSelected[subIndex];
      updatedState[deptIndex].deptSelected = updatedState[
        deptIndex
      ].subDeptSelected.every((subDeptSelected) => subDeptSelected);
      return updatedState;
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-20 overflow-hidden">
      <div className="text-xl font-semibold flex flex-col w-screen justify-center items-center p-5">
        Checkbox Hierarchy
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-fit">
          {departmentData.map((dept, deptIndex) => (
            <div key={deptIndex}>
              <div className="flex items-center">
                <button onClick={() => toggleShowSubDept(deptIndex)}>
                  {deptState[deptIndex].showSubDept ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </button>
                <Checkbox
                  checked={deptState[deptIndex].deptSelected}
                  onClick={() => toggleDeptSelected(deptIndex)}
                />
                <span className="ml-2">{dept.department}</span>
              </div>
              {deptState[deptIndex].showSubDept &&
                dept.sub_departments.map((sub, subIndex) => (
                  <div key={subIndex} className="pl-20">
                    <Checkbox
                      checked={deptState[deptIndex].subDeptSelected[subIndex]}
                      onClick={() => toggleSubDeptSelected(deptIndex, subIndex)}
                    />
                    <span className="ml-2">{sub}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments; 
