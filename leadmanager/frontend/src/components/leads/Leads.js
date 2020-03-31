import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//whenver you have props in react want to use proptypes

//we call getleads when the component mounts & leads come down from reducer into component as a prop
import { getLeads, deleteLead } from '../../actions/leads';
//dice: up outside leads folder, outside of componets folder and we want leads file.
//toces cada / indica un folder (q tiene files)

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired
    };


    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteLead.bind(this, lead.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}
//this is the 'component'; were mapping it to props --> were gonna have a prop called leads so need to
//need to add proptypes above with static as an object


const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
//we use connect now to wrap component name leads,
//not only do need to connect, but need to get state & call get leads method
//so we cr8 arrow function called map state to propps; which takes parameter of state & pass in leads
//so when we say map state, we say state or redux; from reducers/leads.js & we want to map that state to props
//of of this api/leads component so this.props.leads: state.leads means we want the leads reducer and
//.leads.leads; the final .leads is the part of state we want; which in leads reducer is also called leads i.e. the 
//the final .leads == action.payload!

//in reducers/index.js , if we call export leads_reducer then then need: .leads_reducer.leads 

//este mapstate to props no sta ciendo mucho todvia; necsitar pass it in to connect (below)
//now save all & refresh browswer with leadsmanager app:
//Note, there were some webpack.confi babel presets & plugins needed

//Now in broswer/redux extension/state --> thers empty leads array --> 
//this is because in actions/leads.js, , we created getLeads = () but we havent called it yet
//so go back to leads component; just like we mapped state thats coming from reducer to props
//we can also call these methods from propsv --> add second parameter to conenct (get leads)
//So now we have access to this.props.getleads & where we want to call that is 
//is when component loads; when list loads (when it mounts) --> and so we add
//componentdidMount()

//Thus we notice now when you go to redux extension/State/ you see 
//see the JSON data requeted; So, we've sucessfully called action, made request to django backend, got leads
//and we put them our state. 

/*So now to get this to show up in our GUI, we'll edit the render() and add framgments @ initiating*/
//So we want a table that has all the leads inside so table.table.table-striped
//a class name of .table-striped (just boot strapp classes)

//So we make the id, name,email, message boxes; with last one empty th --> for delete button
//the tbody, is where we loop through leads; can access it with this.props.leads.map; for each will call it lead, then well render jsx (which is table rows)
//then since its a list, it needs unique key --> we set that to lead.id

//And now were pulling those leads from the server!(seen in red bottons)

//Now we can add the delete functionality (so red delete button works) so:
//need to add new action so in src/actions/leads.js --> make a DELETE LEADS
//So add DELETE_LEAD to import statement/.types, then make the function at bottom
//dso we pass in an ID and make request to the specific url for that id
//then once id gets deleted from the server, we then want to dispatch action called delete_lead & we want to send id as the payload
//So this DELETE_LEAD action is getting dispatched to reducer so go to reducers/leads.js
//here we add DELETE_LEAD to import from actions./types
//and we create a case GET_LEADS and we want to return any current state & for leads, filter through and return not id deleted.
//this is a => indicates this is a loop
//member we sent id that were deleting as a payload --> >that deletes it in the server (api/leads/), then run reducer and delete it within ui 
//and final step we need to add this to the import statement here; import deleteLead from actions/leads & add argument to connect()
//now we should have access to this.props.deleteLead & we want to call this when button gets clicked so:
//<button on Click= this.props.deleteLead and we need to send id, so .bind()

//Thus save it and reload ui page with redux extension 
//in the redux extension, you can see form the inspector that the actions that run show the GET_LEADS action in order to get those leads 
//now go ahead and click the deltete button and you can see it disapears from the UI. The DELETE_LEAD action is called in redux-extension