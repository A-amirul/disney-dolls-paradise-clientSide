import { useForm } from "react-hook-form";

const AddAToy = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div className="bg-base-200 px-4 md:px-64 pt-8 md:py-12">
			<h1 className="text-xl md:text-4xl text-center font-medium">Please add a Toy</h1>
			<div className="py-8 ">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<label className="font-medium" htmlFor="name">Seller Name</label> <br />
							<input className="w-full py-2 rounded-lg px-4" placeholder="name" {...register("seller")} />
						</div>

						<div>
							<label className="font-medium" htmlFor="email">Seller Email</label> <br />
							<input className=" w-full py-2 rounded-lg px-4" placeholder="email"{...register("email")} />
						</div>

						<div>
							<label className="font-medium" htmlFor="name">Toy Name</label> <br />
							<input className="w-full py-2 rounded-lg px-4" placeholder="Toy Name"{...register("toyName")} />
						</div>

						<div>
							<label className="font-medium" htmlFor="category">Select a Category</label> <br />
							<select className="w-3/4 py-2 rounded-lg px-4" placeholder="Select a category" {...register("category")}>
								<option value="Disney princes">Disney princes</option>
								<option value="frozen dolls">frozen dolls</option>
								<option value="animation characters">animation characters</option>
							</select>
						</div>

						<div>
							<label className="font-medium" htmlFor="price">Price</label> <br />
							<input className="w-full py-2 rounded-lg px-4" placeholder="price($)"{...register("price")} />
						</div>

						<div>
							<label className="font-medium" htmlFor="photo">Photo URL</label> <br />
							<input className="w-full py-2 rounded-lg px-4" placeholder="Photo URL"{...register("photo")} />
						</div>

						<div>
							<label className="font-medium" htmlFor="quantity">Available Quantity</label> <br />
							<input className="w-full py-2 rounded-lg px-4" placeholder="Quantity"{...register("quantity")} />
						</div>

						<div>
							<label className="font-medium" htmlFor="rating">Ratings</label> <br />
							<input className="w-full py-2 rounded-lg px-4" placeholder="Ratings(1-5)"{...register("rating")} />
						</div>

					</div>
					<div className="pt-8">
						<label className="font-medium" htmlFor="description">Description</label> <br />
						
						<textarea className="w-full rounded-lg p-4" name="description" cols="30" rows="5" placeholder="Write here about the Toy" {...register("description")} />
					</div>
					
					<input className="w-full py-4 rounded-lg px-4 bg-blue-400 hover:bg-blue-700 text-white font-semibold text-xl my-6" type="submit" />
				</form>
			</div>
		</div>
	);
};

export default AddAToy;