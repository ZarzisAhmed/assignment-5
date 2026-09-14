import logo from "../assets/logo-text.png";

// export interface FooterProps {
//     prop: string
// }

export default function Footer() {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <div className="container mx-auto grid grid-cols-4">
        <div className="space-y-5">
          <img src={logo} alt="" />
          <p className="text-gray-400 text-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-9 text-gray-500">
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
          <h3 className="font-bold">PRODUCT</h3>
          <ul className="text-gray-500 flex flex-col gap-3">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
          <h3 className="font-bold">COMPANY</h3>
          <ul className="text-gray-500 flex flex-col gap-3">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
          <h3 className="font-bold">LEGAL</h3>
          <ul className="text-gray-500 flex flex-col gap-3 mb-9">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        {" "}
        <div className="flex w-full flex-col">
          <div className="divider my-10"></div>
        </div>
        <div className="flex justify-between mb-10">
          <p className="text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <ul className="text-gray-400 flex gap-6">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </>
  );
}
