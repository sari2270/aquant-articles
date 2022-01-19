import { useParams } from "react-router-dom";

import { Card, Col, Row, Container } from "react-bootstrap";

const ArticlePage = ({article}) => {
    const {artTitle} = useParams()
    console.log(article);
    return (
        <div>dddd</div>
    //   <Card>
    //     <Card.Img variant="top" src={article.urlToImage} />
    //     <Card.Body>
    //       <Card.Title>{article.title}</Card.Title>
    //       <Card.Text className="text-secondary">
    //        { `Published: ` }
    //       {article.publishedAt}
    //       </Card.Text>
    //       <Card.Text className="text-secondary">
    //       {article.content?.slice(0,80)}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    );
  };
  export default ArticlePage;
  