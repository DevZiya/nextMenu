import styles from "./search.module.css";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../redux/searchReducer";

const Search = () => {
  const [serach, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchName(serach));
  }, [serach, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Squid Game</h1>
        <p>Xoş gəlmişsiniz!</p>
      </div>
      <div className={styles.inputContainer}>
        <FiSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Axtar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
