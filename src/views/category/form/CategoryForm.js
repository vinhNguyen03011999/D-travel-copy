import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import './CategoryForm.css';
import {addNewCategory, getAllCategory} from '../../../redux/category/action';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSave = async e => {
    e.preventDefault();
    var { name, description } = this.state;
    const token = window.localStorage.getItem('userToken');
    this.props.onAddCategory({name, description}, token);
    this.props.fetchCategories(token);
  };

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    var { name, description } = this.state;
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          <i className="fas fa-plus-circle" /> Add New Category
        </Button>
        <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <Form onSubmit={this.onSave}>
                  <Row>
                    <Col xs="4">
                      <FormGroup>
                        <Label for="name">Category Name</Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          defaultValue={name}
                          onChange={this.onChange}
                          required
                        />
                      </FormGroup>
                      <Button type="submit" color="success" className="custom-width mr-10">
                        <i className="fas fa-check-circle" /> Add
                      </Button>
                      <Button color="danger" onClick={this.toggle} className="custom-width">
                        <i className="fa fa-ban" /> Cancel
                      </Button>
                    </Col>
                    <Col xs="8">
                      <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                          type="textarea"
                          rows="3"
                          name="description"
                          id="description"
                          value={description}
                          onChange={this.onChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
        </Collapse>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
return {
  onAddCategory: (category, token) => {
      dispatch(addNewCategory(category, token));
  },
  fetchCategories: (token) => {
    dispatch(getAllCategory(token));
  },
};
};

export default connect(
null,
mapDispatchToProps
)(CategoryForm);