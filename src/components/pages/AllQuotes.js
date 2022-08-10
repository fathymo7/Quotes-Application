import QuoteList from "../quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "fathy", text: "Learning Reactjs is kinda hard" },
  { id: "q2", author: "max", text: "Learning Html is easy" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};
export default AllQuotes;
