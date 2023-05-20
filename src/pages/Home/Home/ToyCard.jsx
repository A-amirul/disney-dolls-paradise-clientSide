const ToyCard = ({ toy }) => {
	const { seller, toyName, sub_category, price, quantity } = toy;
	return (
		<tr>
			<td>
				{seller}
			</td>
			<td>{toyName}</td>
			<td>{sub_category}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<th>
				<button className=" bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md">Details</button>
			</th>
		</tr>
	);
};

export default ToyCard;