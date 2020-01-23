import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditIngredientPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.ingredient
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateIngredient(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Edit Ingredient</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Ingredient's Name (required)&nbsp;</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ingredient's description&nbsp;</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Ingredient's expiration</label>
            <input
              type="date"
              className="form-control"
              name="expiration"
              value={this.state.formData.expiration}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Update Ingredient
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditIngredientPage;