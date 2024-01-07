import Navbar from "../../components/Navbar/Navbar";
export default function Cart() {
  return (
    <div>
      <Navbar userLoggedIn={false} setUserLoggedIn={() => {}} />
      <h1>Cart</h1>
    </div>
  );
}
