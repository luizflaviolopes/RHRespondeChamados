import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../css/Respostas.css";

export class Respostas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="respostas">
        <Container fluid={true}>
          <Form>
            <Form.Group>
              <Form.Label> Resposta:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <hr />
            <Form.Group>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3 text-justify">
                  <div className="checkChamado">
                    <Form.Check
                      name="resposta"
                      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam."
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                  <div className="checkChamado">
                    <Form.Check
                      name="resposta"
                      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam."
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                  <div className="checkChamado">
                    <Form.Check
                      name="resposta"
                      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam."
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                </div>
              ))}
            </Form.Group>
            <Form.Group>
              <Button variant="success" type="submit">
                Enviar Resposta
              </Button>
              <Button variant="danger" onClick={() => this.props.closeAnswer()}>
                Cancelar
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}
