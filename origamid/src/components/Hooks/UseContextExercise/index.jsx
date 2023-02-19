import DataUtils from "./DataUtils";
import GlobalStorage from "./Global";
import Products from "./Products";

export default function UseContextExercise() {
  return (
    <GlobalStorage>
      <h1>Use Context Exercise</h1>
      <Products />
      <DataUtils />
      <hr />
    </GlobalStorage>
  );
}
