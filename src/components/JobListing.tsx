import type JobItem from "@/types/job";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

export default function JobListing({
  title,
  description,
  numApplicants,
}: JobItem) {
  return (
    <div className="flex flex-col max-w-150" data-aos="fade-up">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl text-accent">{title}</h2>
          <div className="ml-2 cursor-pointer">
            <Icon
              className="text-secondary hover:translate-x-2 duration-400 transition-transform"
              path={mdiArrowRight}
              size={1}
            />
          </div>
        </div>

        <p className="text-xl">Number of applicants: {numApplicants}</p>
      </div>

      <p className="mt-6 font-roboto">{description}</p>
    </div>
  );
}
