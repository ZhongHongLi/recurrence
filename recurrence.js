var data = [
    {
        name: "所有物品",
        value: 'r',
        id: 0,
        children: [
            {
                name: "水果",
                value: 'a',
                id: 1,
                children: [{ name: "苹果", id: '1-2', value: "a-1", children: [{ name: '青苹果', id: '1-3', value: "a-3", }, { name: '红苹果', id: '1-4', value: "a-4", }] }]
            },
            {
                name: '主食',
                value: 'b',
                id: 2,
                children: [
                    { name: "米饭", id: '2-2', value: "a-2", children: [{ name: '北方米饭', id: '3-2', value: "a-3", }, { name: '南方米饭', id: '3-2', value: "a-4", }] }
                ]
            },
            {
                name: '生活用品',
                value: 'c',
                id: 3,
                children: [
                    {
                        name: "电脑类", value: 'c-1',
                        id: '3-1', children: [{
                            name: '联想电脑', value: 'c-2',
                            id: '4-1'
                        }, {
                            name: '苹果电脑', value: 'c-3',
                            id: '5-1'
                        }]
                    },
                    {
                        name: "工具类", value: 'c-2',
                        id: '3-1', children: [{
                            name: "锄头", value: 'c-3',
                            id: '4-1'
                        }, {
                            name: "锤子", value: 'c-4',
                            id: '5-1'
                        }]
                    },
                    {
                        name: "生活用品", value: 'c-5',
                        id: '5-1', children: [{
                            name: "洗发水", value: 'c-6',
                            id: '6-1'
                        }, {
                            name: "沐浴露", value: 'c-7',
                            id: '7-1'
                        }]
                    }
                ]
            }
        ]
    },
    {
        name: "所有物品123",
        value: 'r',
        id: 0,
        children: [
            {
                name: "水果1",
                value: 'a',
                id: 1,
                children: [{ name: "苹果1", id: '1-2', value: "a-1", children: [{ name: '青苹果1', id: '1-3', value: "a-3", }, { name: '红苹果1', id: '1-4', value: "a-4", }] }]
            },
            {
                name: '主食1',
                value: 'b',
                id: 2,
                children: [
                    { name: "米饭1", id: '2-2', value: "a-2", children: [{ name: '北方米饭1', id: '3-2', value: "a-3", }, { name: '南方米饭1', id: '3-2', value: "a-4", }] }
                ]
            },
            {
                name: '生活用品1',
                value: 'c',
                id: 3,
                children: [
                    {
                        name: "电脑类1", value: 'c-1',
                        id: '3-1', children: [{
                            name: '联想电脑1', value: 'c-2',
                            id: '4-1'
                        }, {
                            name: '苹果电脑1', value: 'c-3',
                            id: '5-1'
                        }]
                    },
                    {
                        name: "工具类1", value: 'c-2',
                        id: '3-1', children: [{
                            name: "锄头1", value: 'c-3',
                            id: '4-1'
                        }, {
                            name: "锤子1", value: 'c-4',
                            id: '5-1'
                        }]
                    },
                    {
                        name: "生活用品1", value: 'c-5',
                        id: '5-1', children: [{
                            name: "洗发水1", value: 'c-6',
                            id: '6-1'
                        }, {
                            name: "沐浴露1", value: 'c-7',
                            id: '7-1'
                        }]
                    }
                ]
            }
        ]
    }
]





function formatRoutes(routerArr){
    const arr = [];
    let obj = {};			
    routerArr.forEach(router => {		
        const tmp = { ...router };
//只筛选出type=1的项
            if (tmp.children) {
                tmp.children = formatRoutes(tmp.children);

                const {id, children, name,value} = router;

                obj = {
                    id: tmp.id,
                    name: `(${tmp.value})${tmp.name}`,
                    value:tmp.value,
                    children: tmp.children
                }						
            }else{
                return []
            }
            arr.push(obj);
        
    })
    return arr;
}
let res=formatRoutes(data)
console.log(res)

 
