export const TableData_Loading = "TableData_Loading";
export const TableData_Success = "TableData_Success";


export const tableDataLoading = () => {
    return {
        type:TableData_Loading
    }
}

export const tableDataSuccess = (payload) => {
    return {
        type:TableData_Success,
        payload
    }
}
