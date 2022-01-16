import Feed from '../../components/Feed';
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <Feed />
      </div>
    </Layout>
  );
};

export default Home;
