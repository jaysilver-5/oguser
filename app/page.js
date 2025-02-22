'use client';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>OGU - Leading Marketplace</title>
        <meta name="description" content="OGU - The leading marketplace and discussion platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#131313] text-white">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          {/* Hero Text */}
          <h1 className="text-5xl font-bold">Welcome to OGU</h1>
          <h2 className="text-2xl mt-3">
            LEADING <span className="text-blue-500 font-semibold">MARKETPLACE</span> and{' '}
            <span className="text-blue-500 font-semibold">DISCUSSION</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Join <b className="text-blue-500 font-bold">4008</b> members currently online now!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <a href="member.php?action=register">
              <button className="px-6 py-3 rounded-full bg-blue-600 font-semibold text-white text-lg">
                Sign Up
              </button>
            </a>
            <a href="member.php?action=login">
              <button className="px-6 py-3 rounded-full border border-gray-400 font-semibold text-lg text-white hover:bg-gray-800">
                Login
              </button>
            </a>
          </div>

          {/* Stats Section */}
          <section className="max-w-5xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Discussion',
            links: [
              { icon: 'fa-info-circle', text: 'Site Information and Feedback', href: '#' },
              { icon: 'fa-comments', text: 'Chatter', href: '#' },
              { icon: 'fa-trophy', text: 'Milestones/Bragging', href: '#' },
              { icon: 'fa-gift', text: 'Giveaways & Freebies', href: '#' },
            ],
          },
          {
            title: 'Popular Accounts',
            links: [
              { icon: 'fa-instagram', text: 'Instagram', href: '#' },
              { icon: 'fa-gamepad', text: 'Fortnite', href: '#' },
              { icon: 'fa-cube', text: 'Roblox', href: '#' },
              { icon: 'fa-cubes', text: 'Minecraft', href: '#' },
              { icon: 'fa-tiktok', text: 'TikTok', href: '#' },
            ],
          },
          {
            title: 'Popular Services',
            links: [
              { icon: 'fa-share-nodes', text: 'Social Media', href: '#' },
              { icon: 'fa-gamepad', text: 'Gaming', href: '#' },
              { icon: 'fa-code', text: 'Development', href: '#' },
              { icon: 'fa-discord', text: 'Discord', href: '#' },
            ],
          },
          {
            title: 'Popular Markets',
            links: [
              { icon: 'fa-store', text: 'General Sellers', href: '#' },
              { icon: 'fa-rotate', text: 'Crypto Exchange', href: '#' },
            ],
          },
        ].map(({ title, links }) => (
          <div key={title} className="bg-[#171717] p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-3">{title}</h2>
            <ul className="space-y-2">
              {links.map(({ icon, text, href }) => (
                <li key={text} className="flex items-center">
                  <i className={`fas ${icon} text-blue-500 mr-2`}></i>
                  <a href={href} className="hover:text-gray-400 text-white">{text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
        </section>

        {/* Footer */}
        <footer className="bg-[#131313] text-gray-400 py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
            {/* Left Section: Terms & Privacy */}
            <p className="mb-2 md:mb-0">
              Use of this website is subject to our{' '}
              <a href="/terms" className="text-white font-semibold hover:underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-white font-semibold hover:underline">
                Privacy/Legal Policy
              </a>.
            </p>

            {/* Right Section: Links & Copyright */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <a href="/awards" className="hover:text-white">Awards</a>
              <a href="/members" className="hover:text-white">Members</a>
              <a href="/groups" className="hover:text-white">Groups</a>
              <a href="/team" className="hover:text-white">Team</a>
              <a href="/support" className="hover:text-white">Support</a>
              <a href="https://t.me/ogusers" className="hover:text-white">Telegram</a>
              <span className="text-gray-500">© 2025 OGU</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
