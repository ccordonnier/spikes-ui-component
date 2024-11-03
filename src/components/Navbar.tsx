import Image from 'next/image';
import PLink from './PLink';
import PCommand from './PCommand';

const menu = [
    { href: "/library", text: "Library" },
    { href: "/extension", text: "Extension" },
    { href: "/comunity", text: "Community" },
    { href: "/membership", text: "Membership" },
]

const Navbar = () => {
    return (
        <div className='h-16 px-4 py-12 w-full bg-dark-800 text-g border-b-[0.5px] border-dark-200 flex flex-row items-center'>
            <div className='pr-8'>
                <Image src={"/logos/paste.png"} alt='LOGO DU SITE' width={100} height={50} />
            </div>
            <div className="flex flex-row px-8 gap-8 border-x-[0.5px] border-dark-200">
                {menu.map(link => <PLink key={link.text} href={link.href}>{link.text}</PLink>)}
            </div>
            <div className='relative h-16 flex flex-row items-center ml-8'>
                <PCommand />
            </div>
        </div>
    );
};

export default Navbar;