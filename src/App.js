
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className='headerWrapper'>
        <header>
          <h1>Markdown Badge Generator</h1>
          <div className='repoLink'>
            <a href='https://github.com/Ileriayo/markdown-badges'>Ileriayo Adebiyi's GitHub Repo</a>
          </div>
        </header>
      </div>
      <Search />
    </div>
  );
}

export default App;
