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
      <div className="w-full h-full flex flex-row gap-8 p-10">
        <div className="flex flex-col w-1/2 justify-between">
          <div className="flex flex-col">
            <H1>Style How it works</H1>
            <p className="text-g text-sm mb-4">En construction</p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
