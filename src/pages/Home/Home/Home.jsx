import { Link } from "react-router-dom";
import useTitle from "../../../useTitle";
import banner from "/banner.gif"

const Home = () => {
	useTitle('Home');
	return (
		<div className=" bg-base-200">
			{/* banner */}
			<div className="bg-cover  bg-no-repeat md:py-72 py-6 bg-[#2D4764]" style={{
				backgroundImage: `url(${banner})` 
			}}>
				<div>
					<h1 className="md:text-5xl text-md text-white font-medium mb-4 capitalize md:px-64 px-4">Super Collection For <br /> Disney Dolls</h1>
					<p className="md:px-64 md:w-1/2 text-sm md:text-lg px-4 text-white">Explore the Magical World of Disney Dolls Paradise! <br /> Join us on this enchanting journey as we celebrate the beloved characters that have touched our hearts.</p>
					<div className="md:mt-12 mt-4">
						<Link to="/" className="bg-primary border border-primary text-white md:mx-64 md:px-8 px-4 md:py-3 py-2 mx-4 md:font-medium rounded-md hover:bg-transparent hover:text-primary transition ">Shop Now</Link>
					</div>
				</div>
			</div>

			
		</div>
	);
};

export default Home;