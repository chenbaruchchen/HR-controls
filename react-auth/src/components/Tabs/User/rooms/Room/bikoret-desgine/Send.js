import useToken from "../../../../../useToken";
import meta from "./meta";
import axios from "axios";

export default function Send(props) {
  console.log(meta(props.meta));
  let token = useToken().token;

  function send() {
    alert(`פונקציית שליחה `);

    let data = {
      roomId: props.roomId,
      meta: meta(props.meta)
        ? meta(props.meta)
        : {
            name: "לא נמצא השם",
            type: "string",
          },
      ans: props.ans,
    };

    localStorage.setItem("lastFile", JSON.stringify(data));

    axios
      .post("/api/secret/addFileToRoom", data, {
        headers: {
          Authorization: `token ${token}`,
          "content-Type": "application/json",
          help: "help",
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("נוסף בהצלחה");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div onClick={send} className="q-list1-open-send">
      <div className="q-list1-open-q2">
        <span className="q-list1-open-q-text8">שלח</span>
      </div>
    </div>
  );
}
