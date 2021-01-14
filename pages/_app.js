import "../styles/globals.css";
import MarsHeader from "../components/mars-header/MarsHeader.jsx";
import MarsFooter from "../components/mars-footer/MarsFooter.jsx";

function MarsApp({ Component, pageProps }) {
  return (
    <div id="MarsApp">
      <MarsHeader></MarsHeader>
      <main>
        <Component {...pageProps} />
      </main>
      <MarsFooter></MarsFooter>
    </div>
  );
}

export default MarsApp;
