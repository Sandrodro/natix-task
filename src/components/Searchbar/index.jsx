function SearchBar({ onClickFn, search, setSearch }) {
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={onClickFn}>SUBMIT</button>
    </div>
  );
}

export default SearchBar;
