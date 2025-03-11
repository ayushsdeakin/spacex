import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import { ShiftingDropDown } from "@/components/ShiftingDropDown";
import Three from "@/components/animata/bento-grid/three";
import LiveScoreWidget from "@/components/animata/card/score-card";
import ExpenseTracker, { spendingTrackerProps } from "@/components/animata/widget/expense-tracker";
import Image from "next/image";
import LandingPage from "./LandingPage";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { FloatingNav } from "@/components/ui/floating-navbar";



export default function Home() {
  return (
    <div>
      <ShiftingDropDown/>
      <div>
        <LandingPage/>
        
      </div>
      

    </div>
  );
}
