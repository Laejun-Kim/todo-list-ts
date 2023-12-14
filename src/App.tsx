import Header from "./components/ui/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <NewTodo />
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
