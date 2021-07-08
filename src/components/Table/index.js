export function Table(props) {
  console.log(props.data);
  const getTable = props.data.map(({ nome, media, status }) => {
    return `
     <tr>
        <th>${nome}</th>
      </tr>
      <tr>
        <td>${media}</td>
        <td>${status}</td>
      </tr>`;
  });

  return `
    <table>
      ${getTable}
    </table>
  `;
}
