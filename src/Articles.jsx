import { Card, Col, Row, Container } from "react-bootstrap";
import Article from "./Article";

const Articles = ({articles}) => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <Article article={article}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Articles;
