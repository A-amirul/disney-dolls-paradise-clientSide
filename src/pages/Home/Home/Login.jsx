import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signIn(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => console.log(error));
	}
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left w-1/2 mx-auto">
					<h1 className="text-3xl font-semibold">Create Your Account</h1>
					<p className="py-6">By registering at www.DisneyDolls Paradise.com, you will be able to shop and access the status and history of your orders. Create your new account easily.</p>
					<div className="form-control mt-6">
						<Link to="/register" className="btn bg-sky-600 rounded-full">Register Here</Link>
					</div>
				</div>
				
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<h1 className="text-3xl font-semibold">Login your Account</h1>
						<form onSubmit={handleLogin}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" name="email" placeholder="email" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" />
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input className="btn bg-sky-600 rounded-full" type="submit" value="Login" />
							</div>
						</form>
						<hr className="my-4" />
						<button className="btn btn-outline btn-success rounded-full"><FaGoogle className="me-2"></FaGoogle>Continue With Google</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;