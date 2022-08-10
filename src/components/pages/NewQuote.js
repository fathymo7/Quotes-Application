import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const quoteFormHandler = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <h1>
      <QuoteForm onnAddQuote={quoteFormHandler} />
    </h1>
  );
};
export default NewQuote;
