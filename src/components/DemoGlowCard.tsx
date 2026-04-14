import { GlowCard } from "@/components/ui/spotlight-card";

export function Default(){
  return(
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 bg-[#0A0A0A] overflow-hidden">
      <GlowCard glowColor="blue" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-xl font-bold">Blue Glow</h3>
          <p className="text-gray-400 text-sm text-center mt-2">Interactive spotlight effect</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-xl font-bold">Purple Glow</h3>
          <p className="text-gray-400 text-sm text-center mt-2">Interactive spotlight effect</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="orange" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-xl font-bold">Orange Glow</h3>
          <p className="text-gray-400 text-sm text-center mt-2">Interactive spotlight effect</p>
        </div>
      </GlowCard>
    </div>
  );
};
