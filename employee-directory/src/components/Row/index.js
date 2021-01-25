function Row(props) {
  return props.users.map((user) => (
    <tr key={user.email}>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.email}</td>
      <td>{user.location.state}</td>
    </tr>
  ));
}

export default Row;
