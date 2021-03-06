import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
class General extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GENERAL_TABLE', payload: this.props.eventId});
    }

    //this handles the input and changes the generals reducer on input change
    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_GENERAL', payload: { value: event.target.value, property: event.target.name } })
    } //end handleInputChange

    //this handles the delete button to delete the event
    handleDeleteButtonClick = (eventId) => {
        this.props.dispatch({ type: 'DELETE_EVENT', payload: eventId });
    } //end handleDeleteButtonClick

    render() {
        return (
            <div>
                <ul class="nobullet">
                    <h2 id="general-header">Scheduling</h2>
                    <li >
                        <label>Date Last Contacted:</label>
                        <TextField id="material-ui" type="date" name='last_date_contacted' value={moment(this.props.reduxState.eventsGeneralReducer.last_date_contacted).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Best Day of Week:</label>
                        <TextField id="material-ui" type="text" name='best_days_week' value={this.props.reduxState.eventsGeneralReducer.best_days_week} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Best Times:</label>
                        <TextField id="material-ui" type="text" name='best_times' value={this.props.reduxState.eventsGeneralReducer.best_times} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Proposed Month:</label>
                        <TextField id="material-ui" type="text" name='proposed_month' value={this.props.reduxState.eventsGeneralReducer.proposed_month} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Proposed Dates:</label>
                        <TextField id="material-ui" type="text" name='proposed_dates' value={this.props.reduxState.eventsGeneralReducer.proposed_dates} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Confirmed Date:</label>
                        <TextField id="material-ui" type="date" name='confirmed_date' value={moment(this.props.reduxState.eventsGeneralReducer.confirmed_date).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <h2 id="general-header">Prison Information</h2>
                    <li >
                        <label>Promotional Flyer Mailed:</label>
                        <Select name='flyer_mailed' value={this.props.reduxState.eventsGeneralReducer.flyer_mailed} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </Select>
                    </li>
                    <li>
                        <label>Promotional Flyer Mailed Date:</label>
                        <TextField id="material-ui" type="date" name='flyer_mailed_date' value={moment(this.props.reduxState.eventsGeneralReducer.flyer_mailed_date).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Heard About Us From:</label>
                        <TextField id="material-ui" type="text" name='hear_about' value={this.props.reduxState.eventsGeneralReducer.hear_about} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Desired Focus:</label>
                        <TextField id="material-ui" type="text" name='desired_focus' value={this.props.reduxState.eventsGeneralReducer.desired_focus} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Audience Demographics:</label>
                        <TextField id="material-ui" type="text" name='demographics' value={this.props.reduxState.eventsGeneralReducer.demographics} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Room Location:</label>
                        <TextField id="material-ui" type="text" name='room_location' value={this.props.reduxState.eventsGeneralReducer.room_location} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Total Prison Count:</label>
                        <TextField id="material-ui" type="number" name='total_count' value={this.props.reduxState.eventsGeneralReducer.total_count} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Expected Attendance:</label>
                        <TextField id="material-ui" type="number" name='expected_attendance' value={this.props.reduxState.eventsGeneralReducer.expected_attendance} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Actual Attendance:</label>
                        <TextField id="material-ui" type="number" name='actual_attendance' value={this.props.reduxState.eventsGeneralReducer.actual_attendance} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <h2 id="general-header">Notes</h2>
                    <li>
                        <label>Event Notes:</label>
                        <TextField multiline
                            id="material-ui" type="text" name='event_notes' value={this.props.reduxState.eventsGeneralReducer.event_notes} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(General);