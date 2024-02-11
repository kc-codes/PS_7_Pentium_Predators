import dotenv from 'dotenv';

dotenv.config();


import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

  if (!clientId) {
    throw new Error('Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID environment variable');
  }

  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai} clientId={clientId}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}


export default MyApp;

// import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { ChainId , ThirdwebProvider } from "@thirdweb-dev/react";
// import { Toaster } from "react-hot-toast";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThirdwebProvider desiredChainId= "mumbai" clientId="e713baad62d40776656c6b202d19cef2">
//       <Component {...pageProps} />
//       <Toaster />
//     </ThirdwebProvider>
//   );
// }

// export default MyApp;
