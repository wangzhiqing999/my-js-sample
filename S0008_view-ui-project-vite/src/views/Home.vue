<template>
  <AppMenu />
  
  <div> 我是首页的内容！ </div>
  
  <div style="margin-top: 20px;">
      <Alert show-icon>{{ msg }}</Alert>
      <Input v-model="msg" />
  </div>
  <div style="margin-top: 20px;">
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <template #list>
            <DropdownMenu>
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Home'
})
import AppMenu from '@/components/AppMenu.vue'
import { ref } from 'vue'
const msg = ref('Hello View UI Plus!')
</script>