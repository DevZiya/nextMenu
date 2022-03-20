import { useEffect, useState } from "react";
import styles from "./categories.module.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getCategory } from "../../redux/categorieReducer";

const categories = [
  "Səhər Yeməyi",
  "Şorbalar",
  "Soyuq Qəlyanaltı",
  "Pendirlər",
  "Salatlar",
  "İsti Qəlyanaltılar",
  "Pizzalar",
  "Pidelər",
  "Türk Kababları",
  "Ana Yeməklər",
  "Qarnirlər ",
  "Qazan Yeməkləri",
  "Tava Yeməkləri",
  "Xəmir Yeməkləri",
  "Saclar",
  "Təndir Yeməkləri",
  "Kabablar",
  "Şirniyyatlar ",
  "İsti İçkilər",
  "Soyuq İçkilər",
];

const Categories = () => {
  const [cate, setCate] = useState("Səhər Yeməyi");
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getCategory(cate))
  },[dispatch,cate])

  return (
    <div className={styles.catContainer}>
      <h1>Kateqoriyalar</h1>
      <div className={styles.smallCat}
      id={!hide ? styles.hideFalse : styles.hideActive}
      >
        {categories.map((cat, index) => (
          <pre
            onClick={() =>  setCate(cat)}
            className={
              cate !== cat
                ? styles.smallCatChild
                : styles.smallCatChildActive
            }
            key={index}
          >
            {cat}
          </pre>
        ))}
      </div>
      <div className={styles.hideCat}>
        <div className={styles.text} onClick={() => setHide(!hide)}>
          <p>Hamısına Bax</p>
          {!hide ? (
            <BsChevronDown className={styles.icon} />
          ) : (
            <BsChevronUp className={styles.icon} />
          )}
        </div>
        <div className={hide ? styles.childCatActive : styles.childCat}>
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
