import React, {Component} from 'react';
import { Card } from 'material-ui';

class AddIngredient extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      description: '',
      expiration: Date.now(),
      owner: null
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.setState(async (state) => await {...state, owner: this.props.owner});
    console.log(this.state);
    this.props.handleAddIngredient(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <Card className="card">
        <h1>Add Ingredient</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Ingredient (required)&nbsp;</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description &nbsp;</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.breed}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Expiration Date&nbsp;</label>
            <input
              type= "date"
              className="form-control"
              name="expiration"
              value={this.state.formData.age}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add Ingredient
          </button>
        </form>
      </Card>
    );
  }
}

export default AddIngredient;