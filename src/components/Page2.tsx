import Data from "./Data";
import Departments from "./Departments"; 

const Page2 = () => {
  // Retrieve "name" from local storage
  const name = localStorage.getItem("name");

  return (
    <div className="h-screen justify-center items-center">
      <div className="text-3xl font-bold text-center pt-3">
        Welcome {name ? name.replace(/"/g, "") : "Guest"}   {/* use the name retrieved from local storage */}
      </div>
      <div className="flex flex-col">
        <div className="p-5">
          <div className="text-xl font-semibold text-center p-5">
            API data in MUI Table
          </div>
          <Data /> {/* Render the Data component */}
        </div>
        <div className="p-10">
          <Departments /> {/* Render the Departments component */}
        </div>
      </div>
    </div>
  );
};

export default Page2; 
