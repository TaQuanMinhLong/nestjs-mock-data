import { users, todos, comments, posts } from './db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  users.forEach(async (data) => {
    await prisma.user.create({ data });
  });
}

// async function seed() {
//   posts.forEach(async (data) => {
//     await prisma.post.create({ data });
//   });
// }

// async function seed() {
//   comments.forEach(async (data) => {
//     await prisma.comment.create({ data });
//   });
// }

// async function seed() {
//   todos.forEach(async (data) => {
//     await prisma.todo.create({ data });
//   });
// }

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
