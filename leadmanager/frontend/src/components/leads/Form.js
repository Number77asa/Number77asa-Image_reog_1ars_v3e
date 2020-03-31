import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
    //ets add a state, beause in react 
    //when you have a form you want each input to be part of the state in hte componenet
    state = {
        name: '',
        email: '',
        message: ''
    }

    //on change takes in event and inside setState we put in our state object
    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    });

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        this.props.addLead(lead);
        this.setState({
            name: "",
            email: "",
            message: ""
        });
    };
    //below we have a form has a event on submit, it will call this.onsubmit
    //we have each input that has an on change (up above)
    //when we type anything in the form, it will fire on change off and need to update state b/ each input is connectd piece of state

    render() {
        //const below pulls out the value names from way below
        const { name, email, message } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
            </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);
