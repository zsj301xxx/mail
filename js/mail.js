$(function () {
    let arr=[
        {
            name:'赵时杰',tell:18406581734,py: 'zhaoshijie'
        },
        {
            name:'李时杰',tell:18406581777,py: 'lishijie'
        },
        {
            name:'路时杰',tell:18406581798,py: 'lushijie'
        },
        {
            name:'刘时杰',tell:18406581736,py: 'liushijie'
        },
        {
            name:'王时杰',tell:18406581725,py: 'wangshijie'
        },
        {
            name:"刘新阳",tell:15513262453,py:'liuxinyang'
        },
        {
            name:"赵时杰",tell:18406581111,py:'zhaoshijie'
        },
        {
            name:"刘勇",tell:18406581234,py:'liuyong'
        },
        {
            name:"王佳乐",tell:18435151234,py:'wangjiale'
        },
        {
            name:"赵耀凤",tell:13934154682,py:'zhaoyaofeng'
        },
        {
            name:"赵凤凤",tell:15734154682,py:'zhaofengfeng'
        },
        {
            name:"周大福",tell:15244154682,py:'zhou'
        },
        {
            name:"吴青龙",tell:18624154682,py:'wu'
        },
        {
            name:"郑成功",tell:1841154682,py:'zheng'
        },
        {
            name:"王阳",tell:14234154682,py:'wang'
        },
        {
            name:"钱钱",tell:15634154682,py:'qian'
        },
        {
            name:"孙哥",tell:18234254622,py:'sun'
        },
        {
            name:"李哈哈",tell:17534154682,py:'li'
        },

        {
            name:'任时杰',tell:18406581756,py: 'renshijie'
        },
    ];

    //
    let main =$('main');
    let aside = $('.aside');
    let input = $('input');
    input.on('input',function () {
        let val = $(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val));
        render(newarr);
    });

    render(arr);
    //分类
    function render(arr){
        main.empty();
        aside.empty();
        let person ={

        };

        // 分类
        arr.forEach(ele=>{
            let firstChar=ele.py.charAt(0).toUpperCase();
            if(!person[firstChar]){
                person[firstChar]=[];
            }
            person[firstChar].push(ele);
        });

        //排序
        let keysarr =Object.keys(person).sort();

        let html=``;
        let html1=``;
        for(let i=0;i<keysarr.length;i++){
            let ele = keysarr[i];
            html1+= `<li>${ele}</li>`;
            html+= `
            <section><h2>${ele}</h2>
            `;
            for(let j=0;j<person[ele].length;j++){
                let info= person[ele][j];
                html+= `
                <div><a href="tel:${info.tell}">${info.name}</a></div>
                `
            }
            html+=`</section>`;
        }
        aside.html(html1);
        main.html(html);
    }
});
