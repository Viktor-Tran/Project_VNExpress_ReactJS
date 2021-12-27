import ArticleLatest from "./components/ArticleLatest";
import ArticlePopular from "./components/ArticlePopular";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";


function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <ArticleLatest />
      <ArticlePopular />
      <Footer />
    </div>
  );
}

export default App;
