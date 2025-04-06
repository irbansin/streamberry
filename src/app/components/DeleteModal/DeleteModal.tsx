import React from "react";
import styles from "./DeleteModal.module.scss";
import { Button } from "../../../stories/Button/Button";

export default function DeleteModal({
  handleConfirm = (e: any) => {
    alert(e.target.innerText);
  },
  handleCancel = (e: any) => {
    alert(e.target.innerText);
  },
}) {
  return (
    <div className={styles.deleteModal}>
      <h1>Are you sure you want to delete this movie?</h1>
      <Button
        buttonStyle="primary"
        buttonType="submit"
        label={`Confirm`}
        size={"medium"}
        click={handleConfirm}
        data-testid="confirmButton"
      ></Button>
      <Button
        buttonStyle="secondary"
        label={`Cancel`}
        size={"medium"}
        click={handleCancel}
        data-testid="cancelButton"
      ></Button>
    </div>
  );
}
