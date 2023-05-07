import ChannelDetails from "./formDetails";

export default function movielist(props) {
  if (props.channelList.length === 0) {
    return <p className="text-muted">No channels yet</p>;
  }

  return (
    <>
      {props.movielist.map((channel) => (
        <ChannelDetails
          key={channel.id}
          channel={channel}
          form={props.form}
          addPost={props.addPost}
        />
      ))}
    </>
  );
}