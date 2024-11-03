import Button from "@/components/Button";
import CardHeader from "@/components/card/CardHeader";
import H1 from "@/components/H1";
import Separator from "@/components/Separator";
import Badge from '@/components/Badge';
import Card from "@/components/card/Card";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Testimonials() {
  return (
    <ScrollArea className="flex flex-col w-full h-full bg-dark-600">
      <div className="w-full h-[45%] flex flex-row gap-8 p-10">
        <div className="flex flex-col w-1/2 justify-between">
          <div className="flex flex-col">
            <H1>Hero Section</H1>
            <p className="text-g text-sm mb-4">Detailed services section with heading and graphic/image centred and feature cards on either side.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button as="a" href="https://nextjs.org/docs">Copy to Webflow</Button>
              <Button as="a" href="https://nextjs.org/docs">Copy to Figma</Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Button as="a" href="https://nextjs.org/docs">Live Preview</Button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <CardHeader />
        </div>
      </div>
      <div className="p-10">
        <Separator />
      </div>
      <div className="p-10">
        <div className="flex flex-row justify-between">
          <H1>Other sections you might like</H1>
          <Button as="button" className="w-fit h-fit py-2 px-2">Browse all</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card title="Hero Section" dateAdded="28th of Feb 2024" pro={true} favorite={true} />
          <Card title="Hero Section" dateAdded="28th of Feb 2024" pro={true} />
          <Card title="Hero Section" dateAdded="28th of Feb 2024" />
          <Card title="Hero Section" dateAdded="28th of Feb 2024" />
        </div>
      </div>
    </ScrollArea>
  );
}
