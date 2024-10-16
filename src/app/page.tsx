import Button from "@/components/Button";
import CardHeader from "@/components/card/CardHeader";
import H1 from "@/components/H1";


export default function Home() {
  return (
    <div className="bg-dark-600 w-full h-screen flex flex-col">
      <div className="w-full h-1/2 p-10 flex flex-row gap-8">
        <div className="flex flex-col w-1/2 justify-between">
          <div className="flex flex-col">
            <H1>Hero Section</H1>
            <p className="text-g text-sm mb-4">Detailed header section with heading and graphic/image centred and feature cards on either side.</p>
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
    </div>
  );
}
