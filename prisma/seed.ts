import { users, todos, comments, posts } from './db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  users.forEach(async (user, index) => {
    await prisma.address.create({
      data: {
        ...user.address,
        userId: user.id,
        geo: { create: { ...user.address.geo } },
      },
    });
  });
}

// async function seed() {
//   users.forEach(async (user, index) => {
//     await prisma.company.create({ data: { ...user.company, userId: user.id } });
//   });
// }

// async function seed() {
//   users.forEach(async (user) => {
//     await prisma.user.create({
//       data: {
//         ...user,
//         company: { connect: { userId: user.id } },
//         address: { connect: { userId: user.id } },
//       },
//     });
//   });
// }

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
