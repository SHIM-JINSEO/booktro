import { Search } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Link } from "@tanstack/react-router";
export default function Nav() {
  return (
    <div className="flex w-full items-center justify-between bg-white p-6 shadow-lg">
      <Link to="/"><h1 className="text-2xl font-bold">Booktro</h1></Link>
      <nav className="flex gap-x-4">
        <Input/>
        <Search/>
      </nav>
    </div>
  );
}
