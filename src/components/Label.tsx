import type LabelItem from "@/types/label";
import { Icon } from "@mdi/react";

export default function Label({ icon, subheading, body }: LabelItem) {
  return (
    <div className="flex flex-col items-center w-65 gap-2">
      <Icon className="text-secondary" size={6} path={icon} />
      <h3 className="text-accent uppercase text-3xl">{subheading}</h3>
      <p className="font-roboto text-xl">{body}</p>
    </div>
  );
}
