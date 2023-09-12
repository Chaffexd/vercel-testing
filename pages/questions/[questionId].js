import Head from "next/head";
import Title from "@/components/question-detail/Title";
import Button from "@/components/ui/Button";
import { takehomeQuestions } from "@/questions";
import Answer from "@/components/question-detail/Answer";

const QuestionPage = ({ selectedQuestion }) => {
  return (
    <>
      <Head>
        <title>{`Vercel Takehome - ${selectedQuestion.id}`}</title>
        <meta name="description" content={selectedQuestion.question} />
      </Head>
      <Title question={selectedQuestion.question} />
      <Answer text={selectedQuestion.answer} list={selectedQuestion.list} />
      <Button text={"Take me back"} link={"/"} />
    </>
  );
};

export async function getStaticProps(context) {
  const questionId = context.params.questionId;
  // find the selected question by it's ID, will return the one that's the same as line above
  const selectedQuestion = takehomeQuestions.find((q) => q.id === questionId);

  return {
    props: {
      selectedQuestion,
    },
  };
}

export async function getStaticPaths() {
  const paths = takehomeQuestions.map((question) => ({
    params: { questionId: question.id },
  }));

  // fallback is false since there shouldn't be any other pages
  return { paths, fallback: false };
}

export default QuestionPage;
