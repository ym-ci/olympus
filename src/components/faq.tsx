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
      className="flex min-h-screen w-full snap-start items-center justify-center px-6 py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers! Find everything you need to know about joining our robotics community.
          </p>
        </div>
        
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8 backdrop-blur-sm">
          <Accordion
            type="single"
            collapsible
            defaultValue={`item-${faq.length - 1}`}
            className="space-y-4"
          >
            {faq.map((item, index) => (
              <AccordionItem 
                value={`item-${index}`} 
                key={index}
                className="border border-gray-700/50 rounded-xl px-6 py-2 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/30"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-blue-400 transition-colors duration-300 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
