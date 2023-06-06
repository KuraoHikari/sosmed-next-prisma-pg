import { excludeKey, prisma } from '@/app/libs';

export interface IPostParams {
  userId?: string;
}

export default async function getPost(params: IPostParams) {
  try {
    const { userId } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const posts = await prisma.post.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: true,
        comments: true,
      },
    });

    const safePosts = posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      author: {
        email: post.author?.email,
        name: post.author?.name,
        image: post.author?.image,
      },
    }));

    return safePosts;
  } catch (error: any) {
    throw new Error(error);
  }
}
