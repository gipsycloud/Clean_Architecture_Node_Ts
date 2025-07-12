export interface IProductInteractor {
    createProduct(input: any): any;
    updateStock(id: number, stock: number): any;
    getAllProduct(limit: number, offset: number): any;
}