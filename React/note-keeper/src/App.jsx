import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import notes from "./components/notes.js";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
