import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure(config)
import { CommonFlagContext} from "../components/contexts/commonContext"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [flagVal, setFlag] = useState({
    flag: false,
    setFlagFunc: (newFlagVal) => {
      setFlag({...flagVal,flag: newFlagVal})
    },
  })
  return (
          <>
            <CommonFlagContext.Provider value={flagVal}>
              {/* <Header />  */}
              <Component {...pageProps} /> 
                {/* <Footer /> */}
            </CommonFlagContext.Provider>
          </>
  )
}

export default MyApp



// import styles from "../components/adminPanel/AdminPanel.module.css";
// import Content from "../components/adminPanel/Content";
// import AdminHeader from "../components/adminPanel/Header";
// import LeftNavbar from "../components/adminPanel/LeftNavbar";
// import { useEffect, useState } from 'react'
// import {CommonFlagContext} from "../components/contexts/commonContext"

// function MyApp({ Component, pageProps }) {
//   const [flagVal, setFlagVal] = useState({
//     flag: "false",
//     setFlagValFunc: (newFlagVal) => {
//       setFlagVal({...flagVal,flag:newFlagVal})
//     }
//   })
// const [signal, setSignal] = useState("true")

// useEffect(() => {
//    if(localStorage.getItem("user")){
//     setSignal("true")
//   }
// }, [])


//   return (
//     signal === "true" ? 
//           <>
//             <div className={styles.container}>
//               <CommonFlagContext.Provider  value={flagVal}>
//                 <LeftNavbar />
//                 <AdminHeader />
//                 <Component {...pageProps} />
//               </CommonFlagContext.Provider>
//             </div>
//           </>
//       : 
//           <>
//             <CommonFlagContext.Provider  value={flagVal}>
//               <Header /> 
//               <Component {...pageProps} /> 
//               <Footer />
//             </CommonFlagContext.Provider>
//           </>
  
    
//   )
// }

// export default MyApp
