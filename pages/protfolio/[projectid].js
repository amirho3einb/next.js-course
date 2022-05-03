import { useRouter } from "next/router";

const ProtfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <div>The Protfolio Project Page</div>;
};

export default ProtfolioProjectPage;
