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
					<h1 className="md:text-5xl text-md text-white font-medium mb-4 capitalize md:px-64 px-4">Super <span className="text-amber-500">Collection</span> For <br /> Disney <span className="text-amber-500">Dolls </span>Paradise</h1>
					<p className="md:px-64 md:w-1/2 text-sm md:text-lg px-4 text-base-100">Explore the Magical World of Disney Dolls Paradise! <br /> Join us on this enchanting journey as we celebrate the beloved characters that have touched our hearts.</p>
					<div className="md:mt-12 mt-4">
						<Link to="/" className="bg-primary border border-primary text-white md:mx-64 md:px-8 px-4 md:py-3 py-2 mx-4 md:font-medium rounded-md hover:bg-transparent hover:text-primary transition ">Shop Now</Link>
					</div>
				</div>
			</div>

			{/* Gallery Section */}
			<div className="md:px-64 px-4 pb-8">
				<h1 className="text-center text-4xl font-semibold py-8  md:mt-8 text-black" >Dolls Gallery</h1>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 shadow ">
					<img src="https://i.ibb.co/2tF5JD9/img4.jpg" alt="" />
					<img src="https://i.ibb.co/MhKT75x/img5.jpg" alt="" />
					<img src="https://i.ibb.co/xmdY1n7/img1.jpg" alt="" />
					<img src="https://i.ibb.co/Rykm2v5/img2.jpg" alt="" />
					<img src="https://i.ibb.co/D44MRSX/img3.jpg" alt="" />
					<img src="https://i.ibb.co/ZTM3KjJ/img2.jpg" alt="" />
					<img src="https://i.ibb.co/NF7jq9C/img3.jpg" alt="" />
					<img src="https://i.ibb.co/TTVkkD0/img3.webp" alt="" />
					<img src="https://i.ibb.co/wgsWtDz/img1.webp" alt="" />
					<img src="https://i.ibb.co/hf0Jr3H/img2.webp" alt="" />
				</div>

			</div>

			{/* Category Tab */}
			
			


		</div>
	);
};

export default Home;