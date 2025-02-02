import React from "react";
import PropTypes from "prop-types";
import styles from "./Detail.module.scss";
import { Tags } from "../Tags/Tags.tsx";

export default function Detail({
  title,
  badge,
  description,
  imageLink,
  secondaryTitle,
  tags,
}) {
  return (
    <div className={styles.detail}>
      <div className="flex p-5">
        <div className="w-1/3">
          <img className={styles.image} src={imageLink} alt={title} />
        </div>

        <div className="pl-10 w-2/3">
          <div className="flex items-center">
            <div className="text-5xl font-bold subpixel-antialiased font-sans">
              <h1 className={styles.title}>{title}</h1>
            </div>
            <div className="text-3xl subpixel-antialiased font-sans pl-4">
              <div className={styles.badge}>{badge}</div>
            </div>
          </div>
          <div className="py-2">
            {" "}
            <Tags tags={tags} />
          </div>

          <h2 className={styles.secondaryTitle}>{secondaryTitle}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

Detail.defaultProps = {
  title: "Pulp Fiction",
  badge: "7.2",
  description:
    "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
  image: "https://picsum.photos/200/300",
  secondaryTitle: "1994",
  tags: ["tag1", "tag2", "tag3"],
};

Detail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  secondaryTitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
