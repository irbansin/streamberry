import React, { useEffect, useState } from "react";
import styles from "./RecommendationsPage.module.scss";

export default function ReommendationsPage() {
  return (
    <div className={styles.recommendationsPage}>
      <h1>Recommendations</h1>
      <p>Here are some movie recommendations for you!</p>
      <div className={styles.recommendationsList}></div>
      <p>Enjoy your movie time!</p>
    </div>
  );
}
