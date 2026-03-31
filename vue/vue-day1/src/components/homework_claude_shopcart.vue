<!--题目：购物车
实现一个简单的购物车页面，要求：
商品列表区域

展示至少4个商品，每个商品有名称、单价、图片（图片用色块代替就行）
每个商品有一个"加入购物车"按钮

购物车区域

展示已加入的商品，每条显示：名称、单价、数量、小计
每条有 + - 按钮可以调整数量，数量最少为1
每条有"删除"按钮可以移除该商品
同一个商品重复加入不新增一条，而是数量+1

底部统计

显示总价
显示共几件商品


考察点

v-for、v-if 综合运用
computed 计算总价和总数量
事件处理逻辑
数组操作：find、filter、push-->
<template>
    <div class="content">
        <div class="product-list">
            <div v-for="(item,index) in product_list" :key="item.id" class="product-list-item">
                <div class="product-pic"> </div>
                <div class="product-detail">
                    <div>名称:{{ item.name }}</div>
                    <div>价格:{{ item.price }}</div>
                    <button @click="addProduct(item)">加入购物车</button>

                </div>
            </div>
        </div>
        <div class="shop-cart">
            <div v-for="(item,index) in shop_cart_list" :key="item.id" class="shop-cart-item">
                <div class="shop-cart-info">
                    <div>名称:{{ item.name }}</div>
                    <div>单价:{{ item.price }}</div>
                    <div>数量:{{ item.amount }}<button @click="item.amount = item.amount - 1">-</button> <button @click = "item.amount = item.amount + 1">+</button></div>
                    <div>小计:{{ item.total }}</div>

                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref,computed } from 'vue'
    const product_list = ref([
        { name:'书包', price:20, id:1 },  
        { name:'衣服', price:100, id:2 },
        { name:'椅子', price:50, id:3 },
        { name:'耳机', price:200,id:4 }
    ]);

    const shop_cart_list = ref([]);

    const addProduct = (item) => {
        shop_cart_list.value.push({
          ...item,
          amount:1
          })
    }
</script>

<style scoped>
.product-list{ display: flex; width:1000px; flex-direction: row; justify-content: center; align-items: center; }
.product-list-item{ flex:1;  }
.product-pic{ width:200px; height:200px; background: #f00; }
.shop-cart-item{ display: flex; flex-direction: row; }
</style>