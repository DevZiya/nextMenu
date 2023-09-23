import { useEffect, useState } from "react";
import styles from "./categories.module.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getCategory } from "../../redux/categorieReducer";

const categories = [
  "Pizza",
  "Fast food",
  "Şirniyyat",
  "İsti içki",
  "Soyuq içki",
  "Set",
  "Shisha",
  "Kampaniyalar",
];

const Categories = () => {
  const [cate, setCate] = useState("Set");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(cate));
  }, [dispatch, cate]);

  return (
    <div className={styles.catContainer}>
      <h1>Kateqoriyalar</h1>
      <div className={styles.smallCat} id={styles.hideFalse}>
        {categories.map((cat, index) => (
          <pre
            onClick={() => setCate(cat)}
            className={
              cate !== cat ? styles.smallCatChild : styles.smallCatChildActive
            }
            key={index}
          >
            {cat}
          </pre>
        ))}
      </div>
      <div className={styles.hideCat}>
        <div className={styles.childCat}>
          {categories.map((cat, index) => (
            <pre
              className={cat !== cate ? styles.child : styles.activeChild}
              onClick={() => setCate(cat)}
              key={index}
            >
              {cat}
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
