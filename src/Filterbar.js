import { LuSettings2 } from "react-icons/lu";

function Filterbar() {
  return (
    <div className="filter-title">
      <h1 className="volt">LV Volt</h1>
      <button className="filter">
        <span>Filters</span>
        <LuSettings2 />
      </button>
    </div>
  );
}

export default Filterbar;
