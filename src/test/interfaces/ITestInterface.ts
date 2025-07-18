
export interface ITestInterface {
    createTest(input: any): any;
    getAllTests(): any;
    getTest(id: number): any;
    updateTest(id: number, input: any): any;
    deleteTest(id: number): any;
}