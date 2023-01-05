import React from "react";
import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "gfttf",
      label: "Can I use React on a project",
      content:
        "You can use React any project you want.You can use React any project you want.",
    },
    {
      id: "ugdaz",
      label: "Can I use Javascript on a project",
      content:
        "You can use Javascript any project you want.You can use Javascript any project you want.",
    },
    {
      id: "hghhjiii",
      label: "Can I use CSS on a project",
      content:
        "You can use CSS any project you want.You can use CSS any project you want.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
