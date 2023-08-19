import { getSession } from "next-auth/react";
import Link from "next/link";

function profile() {
  return (
    <div>
      <h1>Profile page</h1>
      <Link href="/"><h2> Back To Blogs</h2></Link>
    </div>
  );
}
export default profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "./signin",
        permanent: false
      }
    };
  
  }
  return {
    props: {
  session
    }
  };
}
