import { useState } from "react";
import { Checkbox } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Departments = () => {
  interface DepartmentData {
    department: string;
    sub_departments: string[];
  }
  
  interface DepartmentState {
    showSubDept: boolean;
    deptSelected: boolean;
    subDeptSelected: boolean[];
  }

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

  const [deptState, setDeptState] = useState<DepartmentState[]>(
    departmentData.map((dept) => ({
      showSubDept: false,
      deptSelected: false,
      subDeptSelected: dept.sub_departments.map(() => false),
    }))
  );

  const toggleShowSubDept = (deptIndex: number) => {
    setDeptState((prevState) => {
      const updatedState = [...prevState];
      updatedState[deptIndex].showSubDept = !updatedState[deptIndex].showSubDept;
      return updatedState;
    });
  };

  const toggleDeptSelected = (deptIndex: number) => {
    setDeptState((prevState) => {
      const updatedState = [...prevState];
      updatedState[deptIndex].deptSelected = !updatedState[deptIndex].deptSelected;
      updatedState[deptIndex].subDeptSelected = updatedState[deptIndex].deptSelected
        ? updatedState[deptIndex].subDeptSelected.map(() => true)
        : updatedState[deptIndex].subDeptSelected.map(() => false);
      return updatedState;
    });
  };

  const toggleSubDeptSelected = (deptIndex:number, subIndex: number) => {
    setDeptState((prevState) => {
      const updatedState = [...prevState];
      updatedState[deptIndex].subDeptSelected[subIndex] = !updatedState[deptIndex].subDeptSelected[subIndex];
      updatedState[deptIndex].deptSelected = updatedState[deptIndex].subDeptSelected.every((subDeptSelected) => subDeptSelected);
      return updatedState;
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-20 ">
      <div className="w-1/4 flex flex-col justify-center">
        {departmentData.map((dept, deptIndex) => (
          <div key={deptIndex}>
            <div className="flex items-center"> 
              <button onClick={() => toggleShowSubDept(deptIndex)}>
                {deptState[deptIndex].showSubDept ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
  );
};

export default Departments;
