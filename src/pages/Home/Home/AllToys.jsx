import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";

const AllToys = () => {
	const allToys = useLoaderData();
	console.log(allToys);
	return (
		<div className="md:px-64 px-4 py-8 md:py-16 bg-base-200">
			<h2 className="text-center font-medium md:text-4xl text-xl">All Toys: {allToys.length}</h2>

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
							<th>Action</th>
						</tr>
					</thead>
					<tbody className="space-y-4">
						{
							allToys.map(toy => <ToyCard
								key={toy._id}
								toy={toy}
							></ToyCard>)
						}
					</tbody>
				</table>
			</div>

			
		</div>
	);
};

export default AllToys;