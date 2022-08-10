import { Route, useParams } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../comments/Comments";

const DetailedQuote = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Detailed Quote</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default DetailedQuote;
