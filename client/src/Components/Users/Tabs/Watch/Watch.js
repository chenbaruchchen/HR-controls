import OnTop from "../../../ui-elements/on-top/on-top";

export default function Watch(props) {
  return (
    <div>
      watch
      <OnTop component={<A />} />
    </div>
  );
}

function A() {
  return <div>sss</div>;
}
