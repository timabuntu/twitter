import Post from '../Post';
import Tweet from '../Tweet';

const Feed = () => {
  return (
    <main className="flex flex-col min-h-min">
      <Tweet />
      {Array(20)
        .fill('')
        .map((_, index) => (
          <Post key={index} />
        ))}
    </main>
  );
};

export default Feed;
