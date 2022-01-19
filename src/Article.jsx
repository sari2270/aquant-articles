import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({article}) => {
  return (
    <Link to={`/articles/${article.title}`}>
    <Card>
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className="text-secondary">
         { `Published: ` }
        {article.publishedAt}
        </Card.Text>
        <Card.Text className="text-secondary">
        {article.content?.slice(0,80)}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
};
export default Article;
