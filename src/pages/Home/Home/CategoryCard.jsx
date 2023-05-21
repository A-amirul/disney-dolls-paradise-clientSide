import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const CategoryCard = ({ item }) => {

	return (
		<div className=" bg-base-100 px-4 ">
			<figure><img src={item?.photo} alt="Album" /></figure>
			<div className="card-body px-4">
				<h2 className="card-title pt-4">{item?.toyName}</h2>
				<p> <strong>Price:</strong> {item?.price}</p>
				<div className='flex items-center'> <strong className="pe-2">Ratings: </strong>
					<Rating
						placeholderRating={item?.rating}
						readonly
						emptySymbol={<FaRegStar></FaRegStar>}
						placeholderSymbol={<FaStar className='text-amber-500'></FaStar>}
						fullSymbol={<FaStar></FaStar>}
					></Rating>
					<p className='ms-2 font-bold'> {item?.rating}</p>
				</div>
				<div className="md:pb-8">
					<p><strong>Details</strong></p>
					<p>{item?.description}</p>
				</div>

			</div>
		</div>
	);
};

export default CategoryCard;