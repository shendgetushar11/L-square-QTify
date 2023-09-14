import React from "react";
import Section from "../Section/Section";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchFilters,
  fetchSongs,
} from "../../api/api";
import styles from "./HomeSectionWrapper.module.css";

function HomeSectionWrapper() {
  return (
    <div className={styles.wrapper}>
      <Section title="Top Albums" dataSource={fetchTopAlbums} type="album" />
      <Section title="New Albums" dataSource={fetchNewAlbums} type="album" />
      <Section
        title="Songs"
        dataSource={fetchSongs}
        filterSource={fetchFilters}
        type="song"
      />
    </div>
  );
}

export default HomeSectionWrapper;
