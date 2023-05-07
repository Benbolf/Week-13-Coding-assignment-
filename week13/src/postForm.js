import { useState } from "react";

export default function PostForm(props) {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPost({ text: textValue, channelId: props.channelId });
    setTextValue("");
  };

  return (
    <form className="d-flex w-50">
      <input
        type="text"
        className="form-control"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button className="btn btn-success ms-2" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
}
