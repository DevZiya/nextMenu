import { useSelector } from "react-redux";
import styles from "./products.module.css";
import { products } from "../../request";
import { useEffect, useState } from "react";
import Image from "next/image";

const Products = () => {
  const category = useSelector((state) => state.category.cat);
  const search = useSelector((state) => state.search.value);
  const [filter, setFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);

  useEffect(() => {
      if(search === ""){
        const filtred = products.filter((f) => f.category === category);
        setFilter(filtred);
      }else{
        const serachFiltered = products.filter((f) =>
        f.name.toLowerCase().includes(search?.toLowerCase())
      );
      setSearchFilter(serachFiltered);
      }
   
  }, [category,search]);


  return (
    <div className={styles.container}>
      <h1>{category}</h1>
      <div className={styles.productContainer}>
        {search === ""
          ? filter?.map((item) => (
              <div key={item.id} className={styles.product}>
                <div className={styles.image}>
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    alt={item.name}
                    className={styles.img}
                  />
                </div>
                <div className={styles.text}>
                  <h2>{item.name}</h2>
                  <span>{item.set}</span>
                  <p>{item.price}</p>
                </div>
              </div>
            ))
          : searchFilter?.map((item) => (
              <div key={item.id} className={styles.product}>
                <div className={styles.image}>
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    alt={item.name}
                    className={styles.img}
                  />
                </div>
                <div className={styles.text}>
                  <h2>{item.name}</h2>
                  <span>{item.set}</span>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
