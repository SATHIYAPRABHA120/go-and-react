import { Box , Stack, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Flex justify="center" px={4} py={6}>
        <Box maxW="600px" w="full">
          <TodoForm />
          <TodoList />
        </Box>
      </Flex>
    </Stack>
  );
}

export default App;
