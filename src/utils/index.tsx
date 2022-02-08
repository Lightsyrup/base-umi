// set pagination attribute to antd table
export const getPaginationAttribute = (pagination:any,onPageChange:any,onShowSizeChange:any) => {
  const paginationAttribute = {
    defaultPageSize: 10,
    hidenOnSinglePage: false,
    showTotal: (total: any) => {
      return `Total${total}item`;
    },
    showQuickJumper:false,
    showSizeChanger:false,
    total:pagination?.total, //访问pagination里面的total，如果没有就返回undefined
    pageSizeOption:['10','30','50','100'],
    onchange:(page:any,pageSize:any)=>onPageChange(page,pageSize),
    onShowSizeChange:(current:any,size:any)=>onShowSizeChange(current,size)
};
};
