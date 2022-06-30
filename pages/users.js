import Head from "next/head";
import { useContext, useEffect } from "react";
import {useRouter} from "next/router"
import styles from "../components/adminPanel/AdminPanel.module.css";
import UsersCompontent from "../components/adminPanel/UsersCompontent";
import Header from "../components/adminPanel/Header";
import LeftNavbar from "../components/adminPanel/LeftNavbar";
import { CommonFlagContext } from "../components/contexts/commonContext";

const Users = () => {

	const router = useRouter()
	// const flagCheck = useContext(CommonFlagContext)

	useEffect(() => {
		const check = localStorage.getItem("user")
		// console.log("flagCheckValue => ", flagCheck.flag)
	//   if(flagCheck.flag === false  && !check){
	  if(!check){
		router.push("/")
	  }
	
	}, [router])
	
  return (
    <div className={styles.container}>
			<Head>
				<title>Dst Users</title>
				<meta name="description" content="Dst Dashboard" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<div className={styles.container}>
				<LeftNavbar />
				<Header />
				{/* <UsersCompontent /> */}
                <div className={styles.contentcontainerfirst}>
                    <h1>All Users</h1>
                </div>
			</div>
		</div>
  )
}

export default Users