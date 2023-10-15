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

}


export default new ApiService();