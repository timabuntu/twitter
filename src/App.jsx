import Feed from './layout/Feed';
import Sidebar from './layout/Sidebar';
function App() {
  return (
    <main className="min-h-screen ">
      <div className="flex mx-auto max-w-7xl">
        <Sidebar />
        <Feed />
      </div>
    </main>
  );
}

export default App;
