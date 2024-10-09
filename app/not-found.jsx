import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Not found</h2>
      <p>sorry,the page you're are looking for is not found</p>
      <Link href="/">return to home</Link>
    </div>
  );
};

export default NotFoundPage;
