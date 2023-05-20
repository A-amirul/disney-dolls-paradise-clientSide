import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";


const MyToy = () => {
	const { user } = useContext(AuthContext);
	const toys = useLoaderData();
	const userToys = toys?.filter(toy => user?.email === toy?.email);
	console.log(userToys);
	
	return (
		<div className="md:px-64 px-4 py-8 md:py-16 bg-base-200">
			<h2 className="text-center font-medium md:text-4xl text-xl">My Toys: {userToys.length}</h2>

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
							></MyToyCard>)
						}
					</tbody>
				</table>
			</div>


		</div>
	);
};

export default MyToy;