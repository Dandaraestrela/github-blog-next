import { DetailedPost } from "@/models/posts";
import { DetailedPostHeader } from "@/components/DetailedPostHeader";
import { MarkdownText } from "@/components/MarkdownText";

interface PageProps {
  params: { number: string };
}

export function generateStaticParams() {
  return ["1", "2", "3"].map((number) => ({ number }));
}

export default async function Page({ params: { number } }: PageProps) {
  const postInfo: DetailedPost = await fetch(
    `https://api.github.com/repos/Dandaraestrela/my-posts/issues/${number}`,
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
    .catch((error) => {
      console.log(error);
      return {
        title: "",
        url: "",
        comments: 0,
        created_at: "",
        user: { login: "" },
        body: "",
      };
    });
  return (
    <div>
      <DetailedPostHeader
        title={postInfo.title}
        user={postInfo.user.login}
        createdAt={postInfo.created_at}
        amountOfComments={postInfo.comments}
        linkToPost={postInfo.html_url}
      />
      <MarkdownText text={postInfo.body} />
    </div>
  );
}
