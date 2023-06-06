import { Post, User } from '@prisma/client';

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified' | 'hashedPassword'
> & {
  hashedPassword?: string | null;
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
export type SafePost = Omit<Post, 'createdAt'> & {
  createdAt: string;
};
