"use client"
import React, { useState } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"


const PCommand = () => {
    const [open, setOpen] = useState(false);



    return (
        <Command className={"rounded-lg border shadow-md md:min-w-[450px] absolute w-28 bg-dark-400 border-dark-400 text-gray-400 "+(open ? "h-fit top-3" : " h-10")}>
            <CommandInput className='text-gray-200' onFocus={() => setOpen(true)} onBlur={()=>setOpen(false)}  placeholder="Search for specifics components, sections and more..." />
            <CommandList className='bg-dark-400 text-gray-400 z-10'>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Launch</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <span>Mail</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
};

export default PCommand;