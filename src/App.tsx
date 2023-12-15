import Header from "./components/ui/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";
// import store from "./redux/config/configStore";

function App() {
  return (
    <>
      <Header />
      <NewTodo />
      <Todos />
    </>
  );
}

export default App;
