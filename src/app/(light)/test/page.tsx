import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <p className="font-satoshi font-semibold">abcdefghijklmnopqrstuvwxyz</p>
        <p className="">abcdefghijklmnopqrstuvwxyz</p>
      </div>

      <Button>Click me</Button>
    </div>
  );
}
