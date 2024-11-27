import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ({ faq }: { faq: {
  question: string
  answer: React.ReactNode
}[] }) {
  return (
    <section id="faq" className="h-screen w-full flex items-center justify-center snap-start">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold mb-6 text-center dark:text-white">FAQ</h2>
        <Accordion type="single" collapsible defaultValue={`item-${faq.length - 1}`}>
          {faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}