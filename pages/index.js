import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/protfolio">protfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
