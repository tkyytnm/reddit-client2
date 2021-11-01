import { setSearchTerm } from "./searchSlice";
import { useDispatch } from "react-redux";

export function Search() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div id="search">
      Filter Title: <input type="text" onChange={handleChange} />
    </div>
  );
}
