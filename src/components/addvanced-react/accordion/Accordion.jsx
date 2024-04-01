import AccodionHeader from "./AccodionHeader";
import AccordionContext from "./AccordionContext";
import { AccordionProvider } from "./accrodion-context";

const Accordion = () => {

    return (
        <div >
            <AccordionProvider>
                <AccodionHeader header={'Header 1'}>
                    <AccordionContext>{"ConTent 1"}</AccordionContext>
                </AccodionHeader>
            </AccordionProvider>
        </div>
    );
};

export default Accordion;