function EventCard({ category, type, location, date }) {
  return (
    <tr>
      <td>{category}</td>
      <td>{type}</td>
      <td>{location}</td>
      <td>{date}</td>
    </tr>
  );
}

export default EventCard;
