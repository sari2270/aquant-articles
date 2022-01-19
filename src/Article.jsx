import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <Link to={`/articles/${article.title}`}>
      <Card className="card-height text-center">
        <Card.Img
          className="homepage-img"
          variant="top"
          src={
            article.urlToImage ||
            "data:image/jpeg;base64,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"
          }
        />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text className="text-secondary">
            {`Published: `}
            {article.publishedAt}
          </Card.Text>
          <Card.Text className="text-secondary">
            {article.description?.slice(0, 80)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default Article;
