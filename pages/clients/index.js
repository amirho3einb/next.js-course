import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "alimp", name: "Ali Mohammadipour" },
    { id: "swmg", name: "Sama Moazemi" },
    { id: "bala", name: "Amirhossein Balagar" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default ClientsPage;
