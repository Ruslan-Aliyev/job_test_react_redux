import StarRatingComponent from 'react-star-rating-component';

var React = require('react');

export default class Entry extends React.Component
{
	render()
	{
		return (
			<div className="row entry" data-id={this.props.item.id}>
				<div className="col-md-4">
					<img src={this.props.item.avatar} />
				</div>
				<div className="col-md-8">
					<h2>{this.props.item.display_name}</h2>
					<StarRatingComponent 
						starCount={5}
						value={this.props.item.rating}
					/>
					<p>{this.props.item.clinic_name}</p>
					<p>{this.props.item.clinic_address}</p>
				</div>
			</div>
		);
	}
}
