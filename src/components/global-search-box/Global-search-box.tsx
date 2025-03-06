import { ReactElement } from "react";

import styles from "./global-search-box.module.css";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line";
import MingcuteLocationLine from "../../icons/MingcuteLocationLine";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearch3Line />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
