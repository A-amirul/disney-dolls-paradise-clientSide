
const MyToyCard = ({ myToy }) => {
	const { seller, toyName, sub_category, price, quantity } = myToy;
	console.log(myToy);
	return (
		
		<tr>
			<td>
				{seller}
			</td>
			<td>{toyName}</td>
			<td>{sub_category}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>
				<button className=" bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 mx-4 rounded-md transition">Update</button>
		
				<button className=" bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md transition">Delete</button>
			</td>
		</tr>
	);
};

export default MyToyCard;