import { Component } from "react";
import { Accordion, Row, Col, Card } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <>
        {this.props.generi.map((genere, index) => {
          return (
            <Accordion key={index} defaultActiveKey="0">
              <Accordion.Item eventKey={String(index)}>
                <Accordion.Header className="personal-button">
                  {genere[0].category}
                </Accordion.Header>
                <Accordion.Body>
                  <Row xs={2} md={4} lg={6} className="mb-5">
                    {genere.map((libro) => {
                      return (
                        <Col key={libro.asin} className="mb-5 mycol">
                          <Card>
                            <Card.Img variant="top" src={libro.img} />
                            <Card.Body className="d-flex flex-column justify-content-between pb-0">
                              <Card.Title>{libro.title}</Card.Title>
                              <Card.Text className="pb-2">
                                {libro.price}$
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </>
    );
  }
}

export default AllTheBooks;
