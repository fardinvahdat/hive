import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref([
    {
      id: 2,
      authorId: "robchamow",
      authorAvatar: "/posts/avatars/2.jpg",
      authorLevel: 3,
      releaseTime: "7 minutes ago",
      regoin: "Spain",
      description:
        "🟢🟢 Thank you very much for following me, mate! If you want to join my team, here are my stats.🟢",
      retweetedPost: 3,
    },
    {
      id: 3,
      authorId: "dbakolas",
      authorAvatar: "/posts/avatars/3.jpg",
      authorLevel: 3,
      releaseTime: "23 minutes ago",
      regoin: "Greece",
      description:
        "Today is another big dividend payment day for the portfolio, with 9 payments.",
      retweetedPost: null,
    },
  ]);

  return { posts };
});
