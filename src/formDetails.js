import PostForm from "./postForm";
import form from "./form";

export default function formDetails(props) {
  return (
    <div className="my-4">
      <h4>#{props.channel.name}</h4>
      <form form={props.form} channelId={props.channel.id} />
      <PostForm addPost={props.addPost} channelId={props.channel.id} />
    </div>
  );
}