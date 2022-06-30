import React, { useContext } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRouter} from "next/router"
import Image from "next/image";
import styles from "./AdminPanel.module.css";
import waterMarkImage from '../../public/images/watermark.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { CommonFlagContext } from "../contexts/commonContext";

function Header() {

	const flagCheck = useContext(CommonFlagContext)
	const router = useRouter()

	const logoutHandler = async () => {
		const res_data = await  axios.get('http://localhost:8080/api/v1/logout')
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						text: 'logged out Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })
					localStorage.clear()
					flagCheck.setFlagFunc(false)
					setTimeout(()=>{
						router.push("/")
					},500) 
				}
	}

	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>Khaleeque</span>
					</h2>
					<p>welcome to the board.</p>
				</div>
				<div className={styles.profile}>
					{/* <img src={waterMarkImage} alt="profile" className={styles.image} /> */}
					{/* <Image src={waterMarkImage} alt="profile" className={styles.image} /> */}
					<FontAwesomeIcon
						onClick={logoutHandler}
						icon={faSignOutAlt}
						// style={{ width: "30px",height: "30px", borderRadius: "50%", cursor: "pointer" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
