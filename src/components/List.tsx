interface Props {
  text: string;
  onDelete: () => void;
}

export default function List(props: Props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={props.onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
