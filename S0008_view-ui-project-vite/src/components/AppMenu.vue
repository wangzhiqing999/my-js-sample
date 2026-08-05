<template>
  <Menu mode="horizontal">
    <MenuItem name="SetUp API" to="/">
      <Icon type="ios-home" />
      SetUp API
    </MenuItem>
    <MenuItem name="OptionApi" to="/option-api">
      <Icon type="ios-cube" />
      Option API
    </MenuItem>
  </Menu>
</template>

<script setup>
defineOptions({
  name: 'AppMenu'
})
</script>
