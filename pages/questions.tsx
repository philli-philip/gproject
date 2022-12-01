import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import prisma from '../utils/prisma'

const Questions = (props) => {
  return (
    <Layout>
      {props.questions.map((q) => (
        <div key={q.id} className="post">
        {q.question}
      </div>
      ))}

      Hello
      <Link href={'/add-question'}>Add</Link>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await prisma.question.findMany()
  return {
    props: { questions: JSON.parse(JSON.stringify(questions)) },
  }
}


export default Questions