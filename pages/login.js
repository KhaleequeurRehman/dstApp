import Image from "next/image"
import Head from "next/head";
import styles from '../styles/Demo2.module.css'
import img1 from '../public/images/Web Assets-25.png';
import { API } from 'aws-amplify'
import { createCandidate } from '../src/graphql/mutations'
import { useContext, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRouter} from "next/router"

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { CommonFlagContext } from "../components/contexts/commonContext";

export default function Login() {

	const flagCheck = useContext(CommonFlagContext)

	const [formState, setFormState] = useState({
		emailOrUser: '',
		password:'',
	})

	const [responseMessage, setResponseMessage] = useState('');
	const router = useRouter()

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const { password, emailOrUser} = formState
		if (emailOrUser && password) {
		  try {
			console.log("formState login => ", formState)
			const res_data = await  axios.post('http://localhost:8080/api/v1/login',
				{ password, emailOrUser})
				console.log("res_data => ", res_data)
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						text: 'logged In Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })
				}
				localStorage.setItem("user",JSON.stringify(res_data.data.token))
				flagCheck.setFlagFunc(true)
				router.push("/adminpanel")
			//   setResponseMessage('Submission sent successfully')
		  } catch (e) {
			  console.log(e);
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to Login',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
			  setResponseMessage('There was an error processing your submission. Please email training@dsta.com.au');
		  }
		} else {
			// TODO: Fields not filled out
			console.log('Fields missing');
		}
	  }

	return (
		<>
		<Header />
			<div className={styles.demo2}>
				<Head>
					<title>DST - Login</title>
					<meta name="description" content="DST Australia signin" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1>Login</h1>
				<form className={styles.form} onSubmit={handleFormSubmit}>
				

					<label htmlFor="emailOrUser">Email/UserName*</label>
					<input type="text" id="emailOrUser" name="emailOrUser" value={formState.emailOrUser} required
					placeholder="email or username..."
					onChange={(e) =>
						setFormState({ ...formState, emailOrUser: e.target.value })
					}
					/>

					<label htmlFor="password">Password*</label>
					<input type="password" id="password" name="password" value={formState.password} required
					placeholder="password..."
					onChange={(e) =>
						setFormState({ ...formState, password: e.target.value })
					}
					/>
					
					<p style={{textAlign:'start',fontSize:'14px',paddingTop:'5px'}}>Don't have an account? <Link href="/signup"><a style={{textDecoration:'underline'}}>Signup</a></Link></p>
					<button>Login</button>
				</form>

				<p id="formResponse">{responseMessage}</p>
			</div>
			<Footer />
		</>

	)
}