import Safari from "@/components/ui/safari";

export function SafariDemo() {
  return (
    <div className="relative">
      <Safari
        url="magicui.design"
        className="size-full"
        src="https://via.placeholder.com/1200x750"
      />
    </div>
  );
}


// <foreignObject x="20" y="75" width={width - 40} height={height - 100}>
//           <video
//             width="100%"
//             height="100%"
//             autoPlay
//             muted
//           >
//             <source src={src || "https://pro.magicui.design/mobile-demo.mp4"} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </foreignObject>