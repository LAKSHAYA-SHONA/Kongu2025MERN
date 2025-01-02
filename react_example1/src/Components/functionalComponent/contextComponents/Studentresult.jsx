import { useContext } from "react";
import { ThemeProvider } from "../useContext";

var StudentResults = () => {
    var result = useContext(ThemeProvider);
    return (
        <div>
            <h3>Result is: {result.sgpa}</h3>
            <h3>Result is: {result.cgpa}</h3>

        </div>
    )
}
export default StudentResults;