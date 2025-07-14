
export interface ITestInterface {
    createTest(input: any): any;
    getAllTests(limit: number, offset: number): any;
    getTest(id: number): any;
    updateTest(id: number, input: any): any;
    deleteTest(id: number): any;
}