import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-buttons">
        <Link href={"/"}><li>Portfolio</li></Link>
        <Link href={"/about-us"}><li>About Us</li></Link>
        <Link href={"/contact"}><li>Contact</li></Link>
       
      </ul>
    </div>
  );
}
