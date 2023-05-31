import { prisma } from '@/app/libs';

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
    });

    const safePosts = posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
    }));

    return safePosts;
  } catch (error: any) {
    throw new Error(error);
  }
}
