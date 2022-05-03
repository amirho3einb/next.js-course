import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  const loadProjectHandler = () => {
    router.push("/clients/max/projectA");
  };
  return (
    <div>
      <h1>The Projects Of a Given Client</h1>
      <button onClick={loadProjectHandler}>load project A</button>
    </div>
  );
};

export default ClientProjectsPage;
