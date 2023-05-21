import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";
import useTitle from "../../../useTitle";


const MyToy = () => {
	const [myToys, setMyToys] = useState();
	const { user } = useContext(AuthContext);
	const [ascending, setAscending] = useState(true);

	const toys = useLoaderData();

	const userToys = toys?.filter(toy => user?.email === toy?.email);
	useEffect(() => {
		setMyToys(userToys)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	

	const handleSort = async () => {
		try {
			const sortOrder = ascending ? 1 : -1;
			const response = await fetch(`https://disney-dolls-paradise-server-side.vercel.app/allToys?sortOrder=${sortOrder}`);
			const data = await response.json();
			myToys(data);
			setAscending(!ascending);
			console.log(data);

		} catch (error) {
			console.error('Error sorting data:', error);
		}
	};


	useTitle('MyToy');


	const handleDelete = id => {

		const proceed = confirm('Are you sure you want to delete?');
		if (proceed) {
			fetch(`https://disney-dolls-paradise-server-side.vercel.app/alltoys/${id}`, {
				method: 'DELETE',
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert('deleted successful');
						const remaining = myToys?.filter(toy => toy?._id !== id);
						setMyToys(remaining);
					}
				})
		}
	}

	return (

		<div>
			<div className="md:px-64 px-4 py-8 md:py-16 bg-base-200">
				<h2 className="text-center font-medium md:text-4xl text-xl py-8">My Toys: {myToys?.length}</h2>


				<div className="text-center">
					<button onClick={handleSort}>
						Sort {ascending ? 'Ascending' : 'Descending'}
					</button>
					{/* <ul>
						{sortedData.map((item) => (
							<li key={item._id}>{item.price}</li>
						))}
					</ul> */}
				</div>



				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>Seller Name</th>
								<th>Toy Name</th>
								<th>Sub-Category</th>
								<th>Price</th>
								<th>Quantity</th>
								<th className="mx-8">Action ( Delete or Update ) </th>
							</tr>
						</thead>
						<tbody>
							{
								userToys?.map(myToy => <MyToyCard
									key={myToy._id}
									myToy={myToy}
									handleDelete={handleDelete}
								></MyToyCard>)
							}
						</tbody>
					</table>
				</div>



			</div>
		</div>
	);
};

export default MyToy;