import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://shorturl.at/qhRxs" Icon={FaLinkedinIn} />
      <SingleContactSocial link="#" Icon={FiGithub} />
      <SingleContactSocial link="https://rb.gy/atj7cp" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
