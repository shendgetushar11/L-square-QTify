import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ title, dataSource, filterSource, type }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [isShowAll, setIsShowAll] = useState(false);

  const fetchData = async (source) => {
    const data = await source();
    setData(data || []);
  };

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  useEffect(() => {
    fetchData(dataSource);

    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        // setFilters(data);
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  console.log(filters);
  const filterCards = data.filter((card) =>
    selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className={styles.showAll} onClick={handleToggle}>
          <h4>{!isShowAll ? "Show All" : "Collapse"}</h4>
        </div>
      </div>
      {filterSource && (
        <Filters
          data={filters}
          selectedFilteredIndex={selectedFilterIndex}
          setSelectedFilterIndex={setSelectedFilterIndex}
        />
      )}
      <div className={styles.cardsWrapper}>
        {isShowAll ? (
          filterCards.map((card) => (
            <Card
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
              type={type}
            />
          ))
        ) : (
          <Carousel
            data={filterCards}
            renderComponent={(data) => <Card data={data} type={type} />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
