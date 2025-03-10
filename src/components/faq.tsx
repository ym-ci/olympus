import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({
  faq,
}: {
  faq: {
    question: string;
    answer: React.ReactNode;
  }[];
}) {
  return (
    <section
      id="faq"
      className="flex h-screen w-full snap-start items-center justify-center scroll-mt-16"
    >
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2 className="mb-6 text-center text-4xl font-bold dark:text-white">
          FAQ
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue={`item-${faq.length - 1}`}
        >
          {faq.map((item, index) => (
            <AccordionItem 
              value={`item-${index}`} 
              key={index}
              id={`faq-${index}`}
              className="scroll-mt-24"
            >
              <AccordionTrigger>
                <a href={`#faq-${index}`} className="w-full text-left">
                  {item.question}
                </a>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
