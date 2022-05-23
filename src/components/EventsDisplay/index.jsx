import CardContainer from "../CardContainer";
import SearchBar from "../Searchbar";
import { filterAllEvents } from "../../api/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../state/eventsSlice/actionCreators";

function EventsDisplay({ data }) {
  const [search, setSearchs] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    dispatch(setSearch(term));
  };

  return (
    <div>
      <SearchBar
        onClickFn={() => handleSearch(search)}
        search={search}
        setSearch={setSearchs}
      />
      <CardContainer data={data} />
    </div>
  );
}

export default EventsDisplay;
