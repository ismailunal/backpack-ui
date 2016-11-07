import React from "react";
import styles from "./styles.json";
import Icon from "../src/components/icon";

function Icons() {
  const rows = [];

  Object.keys(Icon).forEach((iconName) => {
    rows.push(
      <tr>
        <td>{React.createElement(Icon[iconName])}</td>
        <td>{iconName}</td>
      </tr>
    );
  });

  return (
    <div style={styles.main}>
      <h1>Iconography</h1>

      <table>
        {rows}
      </table>
    </div>
  );
}

export default Icons;
