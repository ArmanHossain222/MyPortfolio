import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://shorturl.at/qhRxs" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/ArmanHossain222" Icon={FiGithub} />
      <SingleContactSocial link="https://rb.gy/atj7cp" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.facebook.com/falaksabbir143" Icon={FaFacebook} />
      
    </div>
  );
};

export default ContactSocial;
