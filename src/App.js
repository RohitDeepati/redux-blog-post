import PostList from "./features/posts/PostList";
import "./App.css";
import AddForm from "./features/posts/AddForm";

function App() {
  return (
    <main className="App">
      <AddForm />
      <PostList />
    </main>
  );
}

export default App;
