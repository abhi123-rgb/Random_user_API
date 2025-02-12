import { useEffect, useState } from "react"
import axios from "axios";
import Header from "./components/Header";
import Layout from "./components/Layout";


function App() {
  const [users, setUsers] = useState([]);
  const [nextUser, setNextUser] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${nextUser}`);
        setUsers((currUser) => [...currUser, ...response.data.results]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchUser();
  }, [nextUser]);


  return (
    <>
      <Header setNextUser={setNextUser} isLoading={isLoading} />
      <Layout users={users} />
    </>
  )
}

export default App
