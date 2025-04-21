import { type ReactNode } from "react";

const SectionWrapper = ({ children, id }: { children: ReactNode; id?: string }) => {
  return (
    <div id={id} className="relative py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default SectionWrapper;
