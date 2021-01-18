import {connect} from "react-redux";
import {loadEntries} from "../actions/EntriesActions.js";

var React = require('react');

class Filter extends React.Component
{
	render()
	{
		return (
			<div className="row" id="filters">
				<form className="form-inline">
					<div className="form-group">
						<label for="sort">Sắp xếp theo</label>
						<select className="form-control" onChange={this.props.loadEntries} id="sort">
							<option value="distance">Khoảng cách</option>
							<option value="rating">Đánh giá</option>
						</select>
					</div>

					<div className="form-group">
						<label for="filter">Lọc kết quả</label>
						<select className="form-control" onChange={this.props.loadEntries} id="filter">
							<option value="vi">Tiếng Việt</option>
							<option value="en">English</option>
							<option value="fr">Français</option>
						</select>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadEntries: (e) => dispatch(loadEntries({'filter':e.target.id,'by':e.target.value}))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)
