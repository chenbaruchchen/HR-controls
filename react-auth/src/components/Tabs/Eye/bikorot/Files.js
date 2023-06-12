import "./chose-shelon.css";
export default function Files(props) {
  return (
    <div className="chose-shelon-list-shelon">
      {props.files &&
        props.files.map((file) => (
          <div
            onClick={() => props.setChosen(file)}
            className="chose-shelon-shelon-type2"
          >
            <span className="chose-shelon-q-text3">{file.meta.name}</span>
          </div>
        ))}
    </div>
  );
}
