import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>
      <h1>{slug || "First Post"}</h1>
      <p>
        Fugiat nostrud qui et consectetur dolor consectetur nulla nostrud ea
        voluptate.
      </p>
    </div>
  );
}
