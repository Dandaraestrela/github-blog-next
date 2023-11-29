import { PostsList } from "@/components/PostsList";
import { ProfileHeader } from "../components/ProfileHeader";
import { UserInterface } from "@/models/user";
import { SummaryPost } from "@/models/posts";

export default async function Home() {
  const userInfo: UserInterface = await fetch(
    "https://api.github.com/users/Dandaraestrela",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer" + process.env.GITHUB_PERSONAL_KEY,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: {
        revalidate: 60 * 60 * 24, // 1 day
      },
    }
  ).then((response) => response.json());

  const posts: { total_count: number; items: SummaryPost[] } = await fetch(
    "https://api.github.com/search/issues?q=is:issue+repo:Dandaraestrela/my-posts",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer" + process.env.GITHUB_PERSONAL_KEY,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: {
        revalidate: 60 * 60 * 24, // 1 day
      },
    }
  )
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
      return { total_count: 0, items: [] };
    });
  return (
    <div>
      <ProfileHeader user={userInfo} />
      <PostsList totalCount={posts.total_count} posts={posts.items} />
    </div>
  );
}
