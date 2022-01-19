import { Col, Row, Container } from "react-bootstrap";
import Article from "./Article";
import Loading from "./Loading";

const Articles = ({ articles, isLoading }) => {
  if (isLoading || !articles) return <Loading />;

  return (
    <Container className="mt-5">
      <Row xs={1} md={4} className="g-4">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <Article article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Articles;
