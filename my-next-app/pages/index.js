import Link from 'next/link';
import Navbar from './navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Assignment 1</h1>
      <nav>
        <ul>
          <li><Link href="/counter">Counter</Link></li>
          <li><Link href="/toggle">Toggle Message</Link></li>
        </ul>
      </nav>
    </div>
  );
}
