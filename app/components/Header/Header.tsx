import { fetchAllResor, fetchConfig } from "@/app/lib/apireq";
import Nav from "./Nav/Nav";

const Header = async () => {
  const config = await fetchConfig();
  const res = await fetchAllResor();
  return (
    <div>
      <div className="mb-10" />
      <Nav res={res} config={config} />
    </div>
  );
};

export default Header;
