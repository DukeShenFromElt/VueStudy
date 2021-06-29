const app03=new Vue({
    el:"#app03",
    data:{
        bookList:[
            {
                id:1,
                name:"三体",
                date:"2021.06.27",
                price:10,
                count:2
            },
            {
                id:2,
                name:"神们自己",
                date:"2021.06.27",
                price:20,
                count:3
            },
            {
                id:3,
                name:"深入理解",
                date:"2021.06.27",
                price:30,
                count:23
            },
            {
                id:4,
                name:"虚拟机",
                date:"2021.06.27",
                price:40,
                count:2
            }
        ]
    },
    methods:{
        add(index){
            this.bookList[index].count++;
        },
        sub(index){
            this.bookList[index].count--;
        },
        removeIt(index){
            console.log(index)
            this.bookList.splice(index,1)
        }
    },
    filters:{
        showPrice(price){
            return "￥"+price.toFixed(2)
        }

    },
    computed:{
        //第一种 reduce  方法
        totalPrice(){
            return this.bookList.reduce(function (pre,cur,index,arr){
                return pre+cur.price*cur.count
            },0)

        },
        //第二种  let of
        totalPrice2(){
            let sum1=0
            for (let i of this.bookList){
                sum1+=i.price*i.count
            }

            return sum1
        }
    }
})