import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  await prisma.$connect();

  await prisma.user.create({
    data: {
      name: 'Rich',
      email: 'hello@prisma.com',
      posts: {
        create: {
          title: 'My first post',
          body: 'Lots of really interesting stuff',
          slug: 'my-first-post',
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(allUsers, { depth: null });

  await prisma.$disconnect();

  res.send('hi');
});

app.listen(port, () => {
  console.log('server start listening');
});
