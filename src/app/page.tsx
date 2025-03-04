type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-cache",
    }
  );
  const posts: Post[] = await res.json();
  return (
    <div>
      <h1>سلام</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
