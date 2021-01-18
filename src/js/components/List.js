import React from "react";
import {connect} from "react-redux";
import {loadEntries} from "../actions/EntriesActions.js";
import Entry from "./Entry";

class List extends React.Component
{
	componentWillMount()
	{
		this.props.loadEntries();
	}

	render()
	{
		var mappedEntries;

		if (typeof this.props.entries !== 'undefined' && this.props.entries.length > 0)
		{
			mappedEntries = this.props.entries.map(function(item) {
				return <Entry item={item} />
			});
		}

		return (
			<div className='list'>
				{mappedEntries}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		entries: state.entryReducer.entries,
		redirect: state.entryReducer.redirect
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadEntries: () => dispatch(loadEntries())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List)
