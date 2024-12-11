import { fetchAllResor } from "@/app/lib/apireq";
import Nav from "./Nav/Nav";
import { fetchConfig } from "@/app/[slug]/page";

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
