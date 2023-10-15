interface QuestionnaireElement {
    linkId: string;
    text: string;
    type: string;
    visible: boolean;
    maxLength?: number;
    required?: boolean;
    enableWhen?: {
        question: string,
        operator: string,
        answerBoolean: boolean
    }[];
    item?: QuestionnaireElement[];

    //TODO: Replace with proper Answer Object (see UML diagramm)
    answer: any;
}