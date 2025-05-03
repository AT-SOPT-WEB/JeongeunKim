import Card from "./components/Card";
import Header from "./components/Header";
import { members } from "./member";
import Search from "./components/Search";
import useSearch from "./hook/useSearch";

function App() {
  const { search, filteredMembers, handleSearchChange, handleSearch } =
    useSearch(members);

  return (
    <>
      <Header />
      <Search
        inputText={search}
        handleSearchText={handleSearchChange}
        handleSearchButtonClick={handleSearch}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMembers.map(({ id, name, github, englishName }) => (
          <Card
            key={id}
            name={name}
            github={github}
            englishName={englishName}
          />
        ))}
      </section>
    </>
  );
}

export default App;
