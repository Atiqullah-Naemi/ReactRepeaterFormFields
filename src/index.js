import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
   Container,
   Row,
   Col,
   Button,
   Form,
   FormGroup,
   Label,
   Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
   state = {
      clients: [{ name: "" }]
   };

   handleChange = index => e => {
      const newClients = this.state.clients.map((client, newIndex) => {
         if (index !== newIndex) return client;

         return { ...client, name: e.target.value };
      });

      this.setState({
         clients: newClients
      });
   };

   handleAddClient = () => {
      this.setState({
         clients: this.state.clients.concat([{ name: "" }])
      });
   };

   handleRemoveClient = index => () => {
      this.setState({
         clients: this.state.clients.filter((client, newIndex) => {
            return index !== newIndex;
         })
      });
   };

   render() {
      return (
         <Container className="app">
            <Form>
               {this.state.clients.map((client, index) => {
                  return (
                     <FormGroup key={index}>
                        <Label for="client">Client #{index + 1} Name</Label>
                        <Row>
                           <Col md={6}>
                              <Input
                                 type="text"
                                 name="client"
                                 placeholder={`Client #${index + 1} Name`}
                                 value={client.name}
                                 onChange={this.handleChange(index)}
                              />
                           </Col>
                           <Col md={6}>
                              <Button
                                 color="danger"
                                 onClick={this.handleRemoveClient(index)}
                              >
                                 Remove Client -{" "}
                              </Button>
                           </Col>
                        </Row>
                     </FormGroup>
                  );
               })}

               <FormGroup>
                  <Button color="info" onClick={this.handleAddClient}>
                     Add Client +{" "}
                  </Button>
               </FormGroup>

               <Row>
                  <Col md={9}>
                     <FormGroup style={{ textAlign: "right" }}>
                        <Button color="success">Submit Client =></Button>
                     </FormGroup>
                  </Col>
               </Row>
            </Form>
         </Container>
      );
   }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
