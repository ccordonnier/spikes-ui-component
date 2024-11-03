"use client"
import React, { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import Button from './Button';
import Badge from './Badge';
import Title from './sidebar/Title';
import { Zap, LayoutGrid, Sparkles, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { start } from 'repl';
import { cn } from '@/lib/utils';


const Icon = ({ as }: { as: ElementType }) => {
    const Tag = as;
    return (
        <Tag size={16} className="mr-2" />
    );
};

const menu = [
    {
        icon: Zap,
        title: "Platform",
        children: [
            { title: "WebFlow", logo: "/logos/webflow.png", link: "/platform/webflow" },
            { title: "Figma", logo: "/logos/figma.png", link: "/platform/figma" },
        ]
    },
    {
        icon: LayoutGrid,
        title: "Sections",
        children: [
            { title: "Hero", link: "/section/hero" },
            { title: "Services", link: "/section/services" },
            { title: "Testimonials", link: "/section/testimonials" },
            { title: "Pricing", link: "/section/pricing" },
            { title: "FAQ", link: "/section/faq" },
            { title: "Footer", link: "/section/footer" },
        ]
    },
    {
        icon: LayoutGrid,
        title: "Style",
        children: [
            { title: "How it works", link: "/style/how-it-works" },
            { title: "Configuration", link: "/style/configuration" },
            { title: "Content", link: "/style/content" },
            { title: "Themes", link: "/style/themes" },
            { title: "Colors", link: "/style/colors" },
            { title: "Spacing", link: "/style/spacing" },
        ]
    },
    {
        icon: Bookmark,
        title: "Saved",
        children: [

        ]
    },
    {
        
        title: "Plan",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    console.log("pathname", pathname);
     // Fonction pour vérifier si un lien est actif
     const isActive = (link: string) => pathname.startsWith(link);
    return (
        <ScrollArea className='sidebar h-full w-72 bg-dark-800 text-g px-10 py-4  border-r-[0.5px] border-dark-200'>
            {menu.map(item => {
                return (
                    <div key={item.title}>
                        <Title>{item.children && <Icon as={item.icon} />}{item.title}</Title>
                        {item.children && (
                            <ul className='border-l-[1px] pl-4 ml-2 border-dark-200'>
                                {item.children.map(child => {                                  
                                    return (
                                        <li key={child.title} className={cn('flex flex-row items-center py-2 text-sm hover:text-w transition-all' + (isActive(child.link) ? 'text-w' : 'text-g'))}>
                                            {child.logo && <img src={child.logo} alt={child.title} className='mr-2'/> }
                                            {child.link && <Link href={child.link}>{child.title}</Link>}
                                        </li>
                                    )}
                                )}
                            </ul>
                        )}
                    </div>
                )
            })}
            <Button>Upgrade to <Badge>Pro</Badge></Button>
        </ScrollArea>
    );
};

export default Sidebar;