import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/toggle">Toggle Message</Link></li>
      </ul>
    </nav>
  );
}