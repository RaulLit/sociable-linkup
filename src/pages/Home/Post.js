export const Post = (props) => {
  const { data } = props;
  return (
    <div key={data.id}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};
