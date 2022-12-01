import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../utils/prisma'


// POST /api/Question
// Required fields in body: title, category
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { question, category } = req.body
  const result = await prisma.question.create({
    data: {
      question: question,
      category: category,
    },
  })
  res.json(result)
}
