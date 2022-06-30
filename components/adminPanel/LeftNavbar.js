import React, { useContext } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRouter} from "next/router"
import Link from "next/link"
import styles from "./AdminPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faCog,
	faHeart,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import logo from "../../public/logo.png"
import { CommonFlagContext } from "../contexts/commonContext";

function LeftNavbar() {

	const flagCheck = useContext(CommonFlagContext)
	const router = useRouter()

	const logoutHandler = async () => {
		// const res_data = await  axios.get('http://localhost:8080/api/v1/logout')
		const res_data = await  axios.get('https://dstbackend.herokuapp.com/api/v1/logout')
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
				}else{
					Swal.fire({
						title: 'Error!',
						text: 'Failed to logged out',
						icon: 'error',
						confirmButtonText: 'Close'
					  })
				}
	}

	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				{/* <h2>Streamline</h2> */}
				<Image src={logo} width={90} height={60} alt="logopic"/>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={faTachometerAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="/adminpanel"><a href="#">Dashboard</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faUser}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="/users"><a href="#">Users</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faRocket}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Explore</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Library</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faHeart}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Favourite</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faCog}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#"> Settings</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#" onClick={logoutHandler}>Logout</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
