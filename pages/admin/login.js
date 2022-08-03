import Header from '../../components/frontend/Header';
import Link from "next/link";
import toast from "../../components/admin/Toast/index";
import Axios from '../../utils/axios';
import React, { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {

	const notify = React.useCallback((type, message) => {
		toast({ type, message });
	  }, []);
	
	
		const {http,saveToken,user} = Axios();
	
		const [username,setUsername] = useState("");
		const [password,setPassword] = useState("");
	  
		const submitForm = event =>{
		  event.preventDefault()
		  http.post(`${process.env.NEXT_PUBLIC_DOMAIN}/auth/login`,{username, password}).then((res)=>{
			console.log(res.data.access_token)
			saveToken(res.data.access_token, res.data.user);
		  }).catch((e)=>{
			notify("error", `${e.response?.data?.message}`);
		});
		}

  return (
    <>
    <Header title={'Admin-Login'} />
    <div id="wrapper" className="clearfix">

		<section id="content">
			<div className="content-wrap py-0">

				<div className="section p-0 m-0 h-100 position-absolute" style={{background: "white", backgroundSize: 'cover'}}></div>

				<div className="section bg-transparent min-vh-100 p-0 m-0">
					<div className="vertical-middle">
						<div className="container-fluid py-5 mx-auto">
							<div className="center">
								<a href="index.html"><picture><img src="/assets/frontend/logo.png" alt="Canvas Logo" /></picture></a>
							</div>

							<div className="card mx-auto rounded-0 border-0" style={{maxWidth: '400px', backgroundColor: 'rgba(255,255,255,0.93)'}}>
								<div className="card-body" style={{padding: '40px'}}>
									<form id="login-form" name="login-form" className="mb-0" action="#" onSubmit={submitForm}>
										<h3>Login to your Account</h3>

										<div className="row">
											<div className="col-12 form-group">
												<label htmlFor="login-form-username">Username:</label>
												<input type="text" id="login-form-username" name="login-form-username" onChange={e=>setUsername(e.target.value)} className="form-control not-dark" />
											</div>

											<div className="col-12 form-group">
												<label htmlFor="login-form-password">Password:</label>
												<input type="password" id="login-form-password" name="login-form-password" onChange={e=>setPassword(e.target.value)} className="form-control not-dark" />
											</div>

											<div className="col-12 form-group">
												<button className="button button-3d button-black m-0" type="submit" id="login-form-submit" name="login-form-submit" value="login">Login</button>
												<a href="#" className="float-end">Forgot Password?</a>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="text-center dark mt-3"><small>Copyrights &copy; All Rights Reserved by Canvas Inc.</small></div>
						</div>
					</div>
				</div>

			</div>
		</section>

	</div>
    </>
  )
}

// Home.getLayout = function getLayout(page) {
//   return (
//       <FrontLayout>{page}</FrontLayout>
//   )
// }