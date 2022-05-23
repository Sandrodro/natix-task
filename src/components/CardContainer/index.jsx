import styles from "./styles.module.css";

function CardContainer({ data }) {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Type</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.category.value}</td>
              <td>{item.data.value.eventType}</td>
              <td>{item.data.value.locationName}</td>
              <td>{item.dateIssued.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CardContainer;
