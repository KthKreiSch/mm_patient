class ApiService {
    private baseUrl: string = `${import.meta.env.VITE_APIURL}`;
    constructor(){};
    public async getTimeSlots(): Promise<BaseObject[] | null>{
        try{
            const response = await fetch(`${this.baseUrl}/timeSlots`);
            return await response.json()
    
        } catch {
            return null;
        }
    };

    public async getTimeSlotTypes(): Promise<BaseObject[] | null>{

        try{
            const response = await fetch(`${this.baseUrl}/timeSlotTypes`);
            return await response.json();
    
        } catch {
            return Promise.resolve(null);
        }
    };

    public async getQuestionnaires(): Promise<Questionnaire[] | null>{
        try{
            const response = await fetch(`${this.baseUrl}/questionnaires`);
            return response.json();
    
        } catch {
            return null;
        }
    };

    public async getQuestionnaireElements(): Promise< QuestionnaireElement[]  | null>{
        try{
            const response = await fetch(`${this.baseUrl}/questionnaireElements`);
            return response.json();
    
        } catch {
            return null;
        }
    };

    public async getPatientsById(id: string): Promise< BaseObject[]  | null>{
        try{
            const response = await fetch(`${this.baseUrl}/patients?id=${id}`);
            return response.json();
    
        } catch {
            return null;
        }
    };

    public async getQuestionnaireElementsByQuestionnaire(questionnaire: Questionnaire): Promise<QuestionnaireElement[] | null> {
        try{
            let questionnaireElements: QuestionnaireElement[] = []
            for(const value of questionnaire.item) {
                const response = await fetch(`${this.baseUrl}/questionnaireElements?linkId=${value}`);
                const elem = await response.json()

                //TODO: Remove the following two lines as soon as the QuestionnaireResponse is added
                elem[0]['answer'] = '';
                elem[0]['visible'] = true;

                questionnaireElements.push(elem[0]);
            }
            return Promise.resolve(questionnaireElements);
        } catch {
            return null;
        }
    }
}


export default new ApiService();