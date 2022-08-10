import { Route, useParams } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "fathy", text: "Learning Reactjs is kinda hard" },
  { id: "q2", author: "max", text: "Learning Html is easy" },
];

const DetailedQuote = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default DetailedQuote;
