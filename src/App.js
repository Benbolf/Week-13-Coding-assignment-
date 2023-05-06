import { useState } from "react";
import ChannelForm from "./postForm";
import ChannelList from "./movielist";

let nextPostId = 10;
let nextChannelId = 10;

export default function App() {
  const [channelList, setChannelList] = useState([]);
  const [form, setform] = useState([]);

  const addPost = (newPostData) => {
    const newPost = {
      id: nextPostId++,
      ...newPostData
    };
    setform(form.concat(newPost));
  };

  const addChannel = (newChannelData) => {
    const newChannel = {
      id: nextChannelId++,
      ...newChannelData
    };
    setChannelList(channelList.concat(newChannel));
  };

  return (
    <div>
      <ChannelForm addChannel={addChannel} />
      <hr />
      <ChannelList
        channelList={channelList}
        form={form}
        addPost={addPost}
      />
    </div>
  );
}